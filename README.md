# Hacker News Solarized Dark — Chrome Extension

A Manifest V3 Google Chrome extension that styles [Hacker News](https://news.ycombinator.com) with Ethan Schoonover's **Solarized Dark** color palette.

## Features

- **Zero Flash of Unstyled Content (FOUC)**: Injects CSS at `document_start` before the page paints.
- **Complete Hacker News Coverage**: Styles story lists, comment trees, faded/downvoted comments, `<pre>`/`<code>` blocks, forms/inputs, legacy inline `bgcolor`/`<font>` tags, and vote arrows.
- **Live Popup Controls**: Click the toolbar icon to toggle the theme on/off or switch between:
  - **Header Bar**: `base02` Dark (`#073642`) with a Solarized Orange accent border, or full Solarized Orange (`#cb4b16`).
  - **Story Titles**: `base1` Crisp (`#93a1a1`) or Solarized Blue (`#268bd2`).

## Solarized Dark Color Mapping

| Element | Solarized Token | Hex |
| :--- | :--- | :--- |
| Outer Page Background (`html`, `body`) | `base03` | `#002b36` |
| Main HN Content Body (`#hnmain`) | `base02` | `#073642` |
| Header Bar, Inputs & Code Blocks | `base03` | `#002b36` |
| Story Titles (Unvisited) | `base1` / `blue` | `#93a1a1` / `#268bd2` |
| Story Titles (Visited) & Subtext | `base01` | `#586e75` |
| Comment Body Text | `base0` | `#839496` |
| Comment Links (Unvisited / Visited) | `blue` / `violet` | `#268bd2` / `#6c71c4` |
| Usernames (`.hnuser`) | `cyan` | `#2aa198` |
| New Users | `green` | `#859900` |
| Scores & Selected Nav (`.topsel`) | `yellow` | `#b58900` |
| Brand Accents & Hover Highlights | `orange` | `#cb4b16` |

## Installation (Load Unpacked)

1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** using the toggle in the top-right corner.
3. Click **Load unpacked** in the top-left corner.
4. Select this directory (`/Users/grainuzzo/dev/hn`).
5. Visit [https://news.ycombinator.com](https://news.ycombinator.com).

