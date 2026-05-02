## Plan: Update Zisub Tech Website

**Goal:** Implement requested updates to the Zisub Tech website, focusing on video previews, button removal, and text content.

**Steps:**

1.  **Modify `src/components/sections/Portfolio.tsx`:**
    *   Update video previews to display playable videos directly. This may involve replacing thumbnail components with video elements and ensuring appropriate controls and styling.
    *   Remove the "View Demo" button specifically from the App Development project items within this file.

2.  **Modify `src/components/sections/About.tsx`:**
    *   Replace the existing "About Us" content with the provided "ABOUT ZISUB TECH" text.

3.  **Modify `src/components/sections/Services.tsx`:**
    *   Update the descriptions for "Video Content Creation", "Graphic Design", "Mobile App Development", and "Apple Product Sales" to match the provided text under "OUR SERVICES".

4.  **Modify `src/components/sections/Shop.tsx`:**
    *   Replace the "PRODUCT DESCRIPTION (Apple MacBook Example)" with the provided text.

5.  **Modify `src/App.tsx`:**
    *   Update the main brand tagline to “Innovating Digital Creativity in Nigeria and Beyond.”
    *   Update the slogans to (“Your Vision, Our Digital Power.”).

6.  **Final Verification:**
    *   Run `validate_build` to ensure all changes are correctly implemented and no regressions have been introduced.
    *   Confirm that responsiveness, animations, and the overall dark theme remain intact.
