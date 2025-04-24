// Copy static files to the dist directory
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy static HTML files to the dist directory
const staticFiles = [
  { source: 'static-app.html', dest: 'index.html' },
  { source: 'index-static.html', dest: 'fallback.html' },
  { source: 'tank-icon.svg', dest: 'tank-icon.svg' }
];

for (const file of staticFiles) {
  const sourcePath = path.join(rootDir, 'public', file.source);
  const destPath = path.join(distDir, file.dest);

  if (fs.existsSync(sourcePath)) {
    console.log(`Copying ${file.source} to dist/${file.dest}...`);
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ Successfully copied ${file.source}`);
  } else {
    console.warn(`⚠ Warning: ${file.source} not found in public directory`);
  }
}

// Create a basic manifest.json if it doesn't exist
const manifestPath = path.join(distDir, 'manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.log('Creating basic manifest.json...');
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
  console.log('✓ Successfully created manifest.json');
}

// Create .nojekyll file
const nojekyllPath = path.join(distDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  console.log('Creating .nojekyll file...');
  fs.writeFileSync(nojekyllPath, '');
  console.log('✓ Successfully created .nojekyll file');
}

console.log('✅ Static files preparation complete!');
