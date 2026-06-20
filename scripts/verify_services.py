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
            
        # 2. Test desktop view
        print("Running desktop tests...")
        headings = page.locator('#services h2')
        print(f"Heading text: {headings.inner_text()}")
        
        # Hover over the second tab "Chauffeur services"
        chauffeur_tab = page.locator('#services').get_by_text('Chauffeur services').first
        if chauffeur_tab.is_visible():
            print("Hovering over Chauffeur services tab...")
            chauffeur_tab.hover()
            time.sleep(1.0) # Wait for cross-dissolve
            
            # Take a debugging screenshot
            page.screenshot(path=r"C:\Users\nadief\.gemini\antigravity-ide\brain\b382c9bb-1958-4ac8-88a7-82928080de69\services_hover.png")
            print("Screenshot saved to artifacts/services_hover.png")
            
            # Print text of details panel
            showcase = page.locator('#services').inner_text()
            print("--- Services Section Inner Text ---")
            print(showcase)
            print("-----------------------------------")
            
            # Assert details updated
            desc = page.get_by_text('Experience flawless hospitality').first
            if desc.is_visible():
                print("Success: Desktop hover transition works!")
            else:
                print("Error: Details did not update on hover")
                sys.exit(1)
        else:
            print("Error: Chauffeur services tab not visible on desktop viewport")
            sys.exit(1)
            
        # 3. Test mobile accordion layout
        print("Setting viewport to mobile size (390x844)...")
        page.set_viewport_size({"width": 390, "height": 844})
        print("Reloading page to reset active states on mobile...")
        page.goto('http://127.0.0.1:3000')
        page.wait_for_load_state('networkidle')
        time.sleep(0.5)
        
        # Scroll services section into view
        print("Scrolling services section into view...")
        services_section.scroll_into_view_if_needed()
        time.sleep(0.5)
        
        # Verify that accordion headers are visible
        accordion_header_0 = page.locator('.lg\\:hidden').get_by_text('Flexible scheduling').first
        if not accordion_header_0.is_visible():
            print("Error: Accordion headers not visible on mobile")
            sys.exit(1)
            
        # Take a mobile screenshot of services section specifically
        page.locator('#services').screenshot(path=r"C:\Users\nadief\.gemini\antigravity-ide\brain\b382c9bb-1958-4ac8-88a7-82928080de69\services_mobile.png")
        print("Mobile screenshot saved to artifacts/services_mobile.png")
        
        # Print bounding box of the description
        initial_desc = page.locator('.lg\\:hidden').get_by_text('Keep full control of your transport logistics').first
        initial_desc.wait_for(state='visible', timeout=3000)
        if not initial_desc.is_visible():
            print("Error: Initial accordion content is not expanded")
            sys.exit(1)
            
        print("Tapping on Chauffeur services accordion header...")
        accordion_header_1 = page.locator('.lg\\:hidden').get_by_text('Chauffeur services').first
        accordion_header_1.click()
        
        # Verify first accordion collapses and second expands
        initial_desc.wait_for(state='hidden', timeout=3000)
        if initial_desc.is_visible():
            print("Error: First accordion did not collapse")
            sys.exit(1)
            
        mobile_desc = page.locator('.lg\\:hidden').get_by_text('Experience flawless hospitality').first
        mobile_desc.wait_for(state='visible', timeout=3000)
        if mobile_desc.is_visible():
            print("Success: Mobile accordion click-to-expand works!")
        else:
            print("Error: Accordion content did not expand")
            sys.exit(1)

        print("Tapping on Chauffeur services accordion header again to collapse it...")
        accordion_header_1.click()
        mobile_desc.wait_for(state='hidden', timeout=3000)
        if mobile_desc.is_visible():
            print("Error: Accordion did not collapse when clicked again")
            sys.exit(1)
        print("Success: Mobile accordion click-to-collapse works!")
            
        print("Closing browser...")
        browser.close()
        print("All tests passed successfully!")

if __name__ == '__main__':
    run()
