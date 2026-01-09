# Chemical House - Wholesale Chemical Distributor Website

A modern, responsive React website for Chemical House, a wholesale chemical distributor company based in Kerala, India.

## Features

- **Home Page**: Hero section with company overview and key features
- **About Page**: Company history, mission, values, and benefits
- **Products Page**: Comprehensive catalog of chemical products by category
- **Suppliers Page**: Information about trusted supplier partners
- **Contact Page**: Contact form and company contact information
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- React 19
- TypeScript
- React Router DOM
- Vite
- CSS3 (Custom styling)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your logo image:
   - Place your company logo image as `logo.png` in the `public/` folder
   - The logo should have a white or transparent background
   - Recommended dimensions: approximately 240x100px or similar aspect ratio

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
chemical-house/
├── src/
│   ├── components/      # Reusable components (Header, Footer, Layout)
│   ├── pages/           # Page components (Home, About, Products, etc.)
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/
│   └── logo.png         # Company logo (add your logo here)
└── index.html           # HTML template
```

## Customization

### Adding Your Logo

1. Save your logo image as `logo.png` in the `public/` folder
2. If using a different format (jpg, svg, etc.), update the file extension in:
   - `src/components/Header.tsx` (change `/logo.png` to your file)
   - `index.html` (update favicon link)

### Updating Company Information

- **Contact Information**: Edit `src/components/Footer.tsx` and `src/pages/Contact.tsx`
- **Company Details**: Edit `src/pages/About.tsx`
- **Suppliers**: Edit the `suppliers` array in `src/pages/Suppliers.tsx`
- **Products**: Edit the `productCategories` array in `src/pages/Products.tsx`

### Styling

- Global styles: `src/index.css`
- Component styles: Individual CSS files in `src/components/` and `src/pages/`
- Color scheme: Update CSS variables in component CSS files (primary color: `#667eea`)

## Logo Styling

The logo is displayed with:
- White semi-transparent background for visibility on dark header
- Subtle shadow for depth
- Smooth hover effects
- Responsive sizing for mobile devices

To adjust the logo appearance, edit `src/components/Header.css`:
- `.logo` class controls the container styling
- `.logo-image` class controls the image sizing and effects

## License

This project is private and proprietary.
