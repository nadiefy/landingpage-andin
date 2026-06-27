import sys
import time
from playwright.sync_api import sync_playwright

def run():
    print("Launching browser...")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        
        # 1. Test Desktop View (1280x800)
        print("\n=== Testing Desktop Scroll Alignment (1280x800) ===")
        page.set_viewport_size({"width": 1280, "height": 800})
        
        print("Navigating to local site...")
        page.goto('http://127.0.0.1:3000')
        page.wait_for_load_state('networkidle')
        time.sleep(1.0) # Wait for page load animations to settle

        sections = [
            {"id": "#services", "name": "Services", "link_text": "Services"},
            {"id": "#fleet", "name": "Fleet", "link_text": "Fleet"},
            {"id": "#about", "name": "About Us", "link_text": "About Us"},
            {"id": "#contact", "name": "Contact", "link_text": "Contact"}
        ]

        for sec in sections:
            print(f"\nClicking '{sec['link_text']}' in desktop navbar...")
            # Click the link in desktop navbar container
            link = page.locator('header nav').get_by_text(sec['link_text']).first
            if not link.is_visible():
                print(f"Error: Desktop link '{sec['link_text']}' is not visible")
                sys.exit(1)
            link.click()
            
            # Wait for scroll transition to settle
            time.sleep(1.5)
            
            # Get the top position of the section in the viewport
            box = page.locator(sec['id']).bounding_box()
            top = page.evaluate(f"document.querySelector('{sec['id']}').getBoundingClientRect().top")
            print(f"Section {sec['id']} bounding box y: {box['y']}, clientRect top: {top}px")
            
            # On desktop, clientRect top should be exactly 0 (or within 2px due to rendering rounding)
            if abs(top) > 2.0:
                print(f"Error: Section {sec['id']} top is {top}px, expected 0px")
                sys.exit(1)
            print(f"Success: Desktop alignment for {sec['name']} is perfect!")

        # Take a desktop verification screenshot
        page.screenshot(path=r"C:\Users\nadief\.gemini\antigravity-ide\brain\b382c9bb-1958-4ac8-88a7-82928080de69\desktop_scroll_verified.png")
        print("\nDesktop screenshot saved to artifacts/desktop_scroll_verified.png")

        # 2. Test Mobile View (390x844)
        print("\n=== Testing Mobile Scroll Alignment (390x844) ===")
        page.set_viewport_size({"width": 390, "height": 844})
        print("Reloading page...")
        page.goto('http://127.0.0.1:3000')
        page.wait_for_load_state('networkidle')
        time.sleep(1.0)

        for sec in sections:
            print(f"\nOpening mobile menu to click '{sec['link_text']}'...")
            # Toggle mobile menu open
            menu_btn = page.locator('button.md\\:hidden').first
            menu_btn.click()
            time.sleep(0.5)
            
            # Click the link inside the mobile menu overlay
            link = page.locator('nav').get_by_text(sec['link_text']).last
            if not link.is_visible():
                print(f"Error: Mobile link '{sec['link_text']}' is not visible")
                sys.exit(1)
            link.click()
            
            # Wait for scroll transition to settle
            time.sleep(1.5)
            
            # Get the top position of the section in the viewport
            top = page.evaluate(f"document.querySelector('{sec['id']}').getBoundingClientRect().top")
            print(f"Section {sec['id']} clientRect top: {top}px")
            
            # On mobile, clientRect top should be around 80px (the navbar offset margin)
            if abs(top - 80) > 5.0:
                print(f"Error: Section {sec['id']} top is {top}px, expected around 80px")
                sys.exit(1)
            print(f"Success: Mobile alignment for {sec['name']} is perfect!")

        # Take a mobile verification screenshot
        page.screenshot(path=r"C:\Users\nadief\.gemini\antigravity-ide\brain\b382c9bb-1958-4ac8-88a7-82928080de69\mobile_scroll_verified.png")
        print("\nMobile screenshot saved to artifacts/mobile_scroll_verified.png")

        print("\nClosing browser...")
        browser.close()
        print("All tests passed successfully!")

if __name__ == '__main__':
    run()
