# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive layout
- 🎨 Custom color scheme with amber accent colors
- 🚀 Built with Vite for fast development
- 💼 Professional sections: About, Projects, Skills, Contact

## Setup Instructions

### For CodeSandbox (Easiest)

1. Go to https://codesandbox.io
2. Sign in with GitHub
3. Click "Create Sandbox" → "Import from GitHub" or "Upload"
4. Upload all these files
5. CodeSandbox will automatically install dependencies and start the dev server

### For Local Development (At Home)

1. Make sure you have Node.js installed (v18 or higher)
2. Clone this repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:5173 in your browser

## Customization

### Update Your Information

In `App.jsx`, replace the following placeholder text:

- **Line 11**: Replace `"yourusername"` with your actual GitHub username
- **Line 46**: Update `"your.email@example.com"` with your email
- **Line 47**: Update LinkedIn URL
- **All social links**: Update throughout the file (search for `yourusername`, `yourprofile`, `your.email@example.com`)

### Update Projects

In the `projects` array (around line 22), update with your actual projects:

```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "Description of what you built",
    tech: ["React", "Node.js", "etc"],
    features: ["Feature 1", "Feature 2"],
    link: "https://your-live-demo.com",
    github: "https://github.com/yourusername/project"
  }
];
```

### Modify Skills

Update the `skills` object (around line 33) with your actual skills and proficiency levels.

### Change Colors

The site uses an amber/stone color scheme. To change:

- Open `App.jsx`
- Find and replace color classes:
  - `amber-600` → your preferred accent color
  - `stone-900` → your preferred dark color
  - `stone-50` → your preferred light background

Available Tailwind colors: slate, gray, zinc, neutral, red, orange, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Connect your GitHub repo
5. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Build command: `npm run build`
6. Publish directory: `dist`

## File Structure

```
portfolio/
├── index.html          # HTML entry point
├── main.jsx           # React entry point
├── App.jsx            # Main component (your portfolio)
├── index.css          # Global styles with Tailwind imports
├── package.json       # Dependencies
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── postcss.config.js  # PostCSS configuration
```

## Technologies Used

- **React** - UI framework
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **PostCSS** - CSS processing

## Next Steps

1. ✅ Customize all personal information
2. ✅ Add your actual projects
3. ✅ Update skills section
4. ✅ Add profile photo (optional)
5. ✅ Test on mobile devices
6. ✅ Deploy to Vercel or Netlify
7. ✅ Share your portfolio link!

## License

MIT - Feel free to use this template for your own portfolio!
