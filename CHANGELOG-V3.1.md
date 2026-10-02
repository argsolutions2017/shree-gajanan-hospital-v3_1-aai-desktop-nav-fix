# V3.1 — Desktop navigation breakpoint fix

- Changed the full desktop navigation breakpoint from `xl` (1280px) to `lg` (1024px).
- Hamburger menu is now limited to widths below 1024px.
- Desktop language/appointment controls remain at `xl` to prevent header crowding on 1024–1279px laptops.
- Compacted navigation link spacing at `lg`; original spacing returns at `xl`.
- Made the Services mega-menu width responsive so it cannot overflow the viewport.

This fixes cases where a normal laptop browser, browser zoom, or side panel reduced the CSS viewport below 1280px and caused the production site to show the hamburger menu.
