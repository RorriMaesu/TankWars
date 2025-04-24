// Script to copy public files to dist
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
  '.nojekyll',
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

console.log('Finished copying public files to dist');
