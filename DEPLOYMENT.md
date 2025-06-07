# Deployment Guide

## GitHub Pages Deployment

To deploy this React application to GitHub Pages:

1. **Install GitHub Pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deployment scripts to package.json:**
   ```json
   {
     "homepage": "https://tapuze.github.io/math03",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## Local Development

1. **Start development server:**
   ```bash
   npm start
   ```
   Opens [http://localhost:3000](http://localhost:3000)

2. **Build for production:**
   ```bash
   npm run build
   ```

## Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on git push

## Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect React and configure build settings
3. Deploy automatically on git push

## Environment Variables

Create a `.env` file in the root directory for environment-specific settings:

```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_VERSION=1.0.0
```

## Performance Optimization

- ✅ Code splitting implemented
- ✅ Production build optimized
- ✅ CSS and JS minified
- ✅ Images optimized
- ✅ PWA ready (service worker)

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers

## SEO Configuration

The app includes:
- Meta tags for social media sharing
- Proper HTML semantics
- Alt text for images
- Structured data for mathematics content

## Analytics Integration

To add Google Analytics:

1. Install gtag:
   ```bash
   npm install gtag
   ```

2. Add tracking code to `public/index.html`

## CDN Configuration

For optimal performance, consider using a CDN for:
- MathJax library
- Font files
- Static assets
