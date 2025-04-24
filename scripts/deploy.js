// Simple script to help with deployment
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build the project
console.log('Building the project...');
execSync('npm run build', { stdio: 'inherit' });

// Copy necessary files to dist
console.log('Copying additional files to dist...');
const publicFiles = [
  'tank-icon.svg',
  '404.html',
  '.nojekyll',
  'robots.txt',
  'sitemap.xml',
  'manifest.json'
];

publicFiles.forEach(file => {
  const sourcePath = path.join(process.cwd(), 'public', file);
  const destPath = path.join(process.cwd(), 'dist', file);

  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${sourcePath} to ${destPath}`);
  } else {
    console.warn(`Warning: ${sourcePath} does not exist`);
  }
});

// Deploy to GitHub Pages
console.log('Deploying to GitHub Pages...');
execSync('npx gh-pages -d dist', { stdio: 'inherit' });

console.log('Deployment complete!');
