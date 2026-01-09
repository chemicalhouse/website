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

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. The site will be available at: `https://chemicalhouse.github.io/website/`

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.

### Base Path Configuration

The `vite.config.ts` file is configured with `base: '/website/'` for the repository name. If you change the repository name or want to deploy to a custom domain, update the `base` path in `vite.config.ts`:

- For repository root deployment: `base: '/'`
- For custom domain: `base: '/'` (and configure the domain in GitHub repository settings)

### Enabling GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The site will be automatically deployed when you push to the main branch

## License

This project is private and proprietary.
