import sys
import time
from playwright.sync_api import sync_playwright

def run():
    print("Launching browser...")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        
        # Set to a standard desktop viewport
        page.set_viewport_size({"width": 1280, "height": 800})
        
        # 1. Load the page
        print("Navigating to local site...")
        page.goto('http://127.0.0.1:3000')
        page.wait_for_load_state('networkidle')
        
        # Check if the services section is visible
        print("Checking services section visibility...")
        services_section = page.locator('#services')
        if not services_section.is_visible():
            print("Error: Services section is not visible")
            sys.exit(1)
            
        # 2. Test desktop layout (3 columns)
        print("Running desktop tests...")
        headings = page.locator('#services h2').first
        print(f"Raw Heading text: {repr(headings.inner_text())}")
        heading_text = " ".join(headings.inner_text().split())
        print(f"Heading text: {heading_text}")
        if "Services built for every journey" not in heading_text:
            print(f"Error: Heading text is unexpected: '{heading_text}'")
            sys.exit(1)
            
        # Verify red highlight container is present
        spans = page.locator('#services h2 span')
        found_highlight = False
        for i in range(spans.count()):
            cls = spans.nth(i).get_attribute('class')
            if cls and 'bg-[#ec3237]' in cls:
                found_highlight = True
                break
        if not found_highlight:
            print("Error: Red highlight animation span with class bg-[#ec3237] is missing")
            sys.exit(1)
        
        # Verify all 3 cards are visible on desktop
        card_titles = ["Flexible scheduling", "Chauffeur services", "Continuous support"]
        for title in card_titles:
            card = page.locator('#services').get_by_text(title).first
            if not card.is_visible():
                print(f"Error: Card with title '{title}' is not visible on desktop")
                sys.exit(1)
        
        # Verify no metadata tags are present
        for tag in ["RATES", "CHAUFFEUR", "SUPPORT", "01 /", "02 /", "03 /"]:
            tag_loc = page.locator('#services').get_by_text(tag, exact=True).first
            if tag_loc.is_visible():
                print(f"Error: Found metadata tag '{tag}' in Services section, expected none")
                sys.exit(1)

        # Verify 3 cards in grid
        cards = page.locator('#services .grid > div')
        card_count = cards.count()
        if card_count != 3:
            print(f"Error: Expected 3 cards in grid, found {card_count}")
            sys.exit(1)
            
        # Verify image cards have aspect-[3/4] and group classes
        for i in range(3):
            card_class = cards.nth(i).get_attribute('class')
            print(f"Card {i+1} classes: {card_class}")
            if 'aspect-[3/4]' not in card_class or 'group' not in card_class:
                print(f"Error: Card {i+1} is missing aspect-[3/4] or group classes")
                sys.exit(1)
        
        # Verify exactly 3 images exist in Services (one for each card background)
        img_count = page.locator('#services img').count()
        if img_count != 3:
            print(f"Error: Found {img_count} images in Services section, expected exactly 3")
            sys.exit(1)
            
        # Take a desktop screenshot
        screenshot_path = r"C:\Users\nadief\.gemini\antigravity-ide\brain\b382c9bb-1958-4ac8-88a7-82928080de69\services_desktop_grid.png"
        page.screenshot(path=screenshot_path, full_page=False)
        print(f"Desktop screenshot saved to {screenshot_path}")
        
        # 3. Test mobile layout (stacked view)
        print("Setting viewport to mobile size (390x844)...")
        page.set_viewport_size({"width": 390, "height": 844})
        print("Reloading page to render mobile view...")
        page.goto('http://127.0.0.1:3000')
        page.wait_for_load_state('networkidle')
        time.sleep(1.0)
        
        # Verify all 3 cards are still visible simultaneously on mobile
        for title in card_titles:
            card = page.locator('#services').get_by_text(title).first
            if not card.is_visible():
                print(f"Error: Card with title '{title}' is not visible on mobile")
                sys.exit(1)
                
        # Take a mobile screenshot of services section specifically
        mobile_screenshot_path = r"C:\Users\nadief\.gemini\antigravity-ide\brain\b382c9bb-1958-4ac8-88a7-82928080de69\services_mobile_stack.png"
        page.locator('#services').screenshot(path=mobile_screenshot_path)
        print(f"Mobile screenshot saved to {mobile_screenshot_path}")
            
        print("Closing browser...")
        browser.close()
        print("All tests passed successfully!")

if __name__ == '__main__':
    run()
