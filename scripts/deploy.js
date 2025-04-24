// Enhanced deployment script for Tank Wars
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Build the project
console.log('Building the project...');
execSync('npm run build', { stdio: 'inherit' });

// Create empty .nojekyll file to disable Jekyll processing
console.log('Creating .nojekyll file...');
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

// Copy necessary files to dist
console.log('Copying additional files to dist...');
const publicFiles = [
  'tank-icon.svg',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'manifest.json'
];

publicFiles.forEach(file => {
  const sourcePath = path.join(rootDir, 'public', file);
  const destPath = path.join(distDir, file);

  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✓ Copied ${file} to dist`);
    } else {
      console.warn(`⚠ Warning: ${file} does not exist in public directory`);
    }
  } catch (error) {
    console.error(`✗ Error copying ${file}:`, error);
  }
});

// Create a CNAME file if needed (uncomment and modify if you have a custom domain)
// fs.writeFileSync(path.join(distDir, 'CNAME'), 'yourdomain.com');

// Ensure the manifest.json file exists
if (!fs.existsSync(path.join(distDir, 'manifest.json'))) {
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
    path.join(distDir, 'manifest.json'),
    JSON.stringify(basicManifest, null, 2)
  );
}

// Deploy to GitHub Pages
console.log('Deploying to GitHub Pages...');
execSync('npx gh-pages -d dist --no-history', { stdio: 'inherit' });

console.log('✅ Deployment complete!');
