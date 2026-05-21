# とらべ LP UI Kit

Interactive recreation of the とらすとベース フリースクール landing page.

## Components

| File | Description |
|---|---|
| `index.html` | Full LP interactive prototype |
| `Header.jsx` | Fixed nav with scroll-hide behavior |
| `Hero.jsx` | Hero with background image, title, menu grid |
| `Concept.jsx` | HodoHodo philosophy section |
| `Features.jsx` | 4 features cards |
| `Staff.jsx` | Staff photo cards with quotes |
| `CTASection.jsx` | Final CTA with primary background |

## Usage

Open `index.html` directly in a browser. All components use React + Babel via CDN.
Assets are loaded from `../../assets/` (relative to this directory).

## Design Notes

- **Primary**: `#0B9B88` teal
- **Secondary**: `#FDB813` amber
- **Font**: Noto Sans JP (Google Fonts)
- **Icons**: Material Icons Outlined (Google Fonts CDN)
- LP is a single-page Vue.js site; this kit recreates it in React for composability
