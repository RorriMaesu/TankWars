// Script to copy public files to dist without overriding index.html
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Files to copy from public to dist
const filesToCopy = [
  'tank-icon.svg',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'manifest.json'
];

console.log('Copying public files to dist...');

// Create dist directory if it doesn't exist
const distDir = path.join(rootDir, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  console.log('Created dist directory');
}

// Copy each file
filesToCopy.forEach(file => {
  const sourcePath = path.join(rootDir, 'public', file);
  const destPath = path.join(rootDir, 'dist', file);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied ${file} to dist`);
    } else {
      console.warn(`Warning: ${file} does not exist in public directory`);
    }
  } catch (error) {
    console.error(`Error copying ${file}:`, error);
  }
});

// Copy static-app.html as a fallback.html (NOT as index.html)
const staticAppPath = path.join(rootDir, 'public', 'static-app.html');
const fallbackPath = path.join(distDir, 'fallback.html');
if (fs.existsSync(staticAppPath)) {
  fs.copyFileSync(staticAppPath, fallbackPath);
  console.log('Copied static-app.html to fallback.html');
}

// Create .nojekyll file to disable Jekyll on GitHub Pages
const nojekyllPath = path.join(distDir, '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('Created .nojekyll file');

// Ensure manifest.json exists
const manifestPath = path.join(distDir, 'manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.log('Creating manifest.json...');
  const basicManifest = {
    "short_name": "Tank Wars",
    "name": "Tank Wars - Multiplayer",
    "icons": [
      {
        "src": "tank-icon.svg",
        "sizes": "64x64 32x32 24x24 16x16",
        "type": "image/svg+xml"
      }
    ],
    "start_url": ".",
    "display": "standalone",
    "theme_color": "#000000",
    "background_color": "#1a1a1a"
  };
  fs.writeFileSync(
    manifestPath,
    JSON.stringify(basicManifest, null, 2)
  );
  console.log('Created manifest.json');
}

console.log('✅ Finished preparing static files for deployment');
