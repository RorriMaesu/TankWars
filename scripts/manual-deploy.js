// Manual deployment script for Tank Wars
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const tempDir = path.join(rootDir, 'temp_deploy');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create temp directory for deployment
if (fs.existsSync(tempDir)) {
  console.log('Cleaning up previous temp directory...');
  fs.rmSync(tempDir, { recursive: true, force: true });
}
fs.mkdirSync(tempDir, { recursive: true });

try {
  // Build the project
  console.log('Building the project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Copy the build to the temp directory
  console.log('Copying build to temp directory...');
  fs.cpSync(distDir, tempDir, { recursive: true });

  // Create .nojekyll file
  console.log('Creating .nojekyll file...');
  fs.writeFileSync(path.join(tempDir, '.nojekyll'), '');

  // Copy static.html as a fallback
  console.log('Copying static.html as fallback...');
  if (fs.existsSync(path.join(rootDir, 'public', 'static.html'))) {
    fs.copyFileSync(
      path.join(rootDir, 'public', 'static.html'),
      path.join(tempDir, 'static.html')
    );
  }

  // Copy essential files
  const essentialFiles = [
    'tank-icon.svg',
    '404.html',
    'robots.txt',
    'sitemap.xml',
    'manifest.json'
  ];

  essentialFiles.forEach(file => {
    const sourcePath = path.join(rootDir, 'public', file);
    const destPath = path.join(tempDir, file);

    try {
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`✓ Copied ${file} to temp directory`);
      } else {
        console.warn(`⚠ Warning: ${file} does not exist in public directory`);
      }
    } catch (error) {
      console.error(`✗ Error copying ${file}:`, error);
    }
  });

  // Create a basic manifest.json if it doesn't exist
  if (!fs.existsSync(path.join(tempDir, 'manifest.json'))) {
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
      path.join(tempDir, 'manifest.json'),
      JSON.stringify(basicManifest, null, 2)
    );
  }

  // Switch to gh-pages branch
  console.log('Switching to gh-pages branch...');
  try {
    execSync('git checkout gh-pages', { stdio: 'inherit' });
  } catch (error) {
    console.log('Creating gh-pages branch...');
    execSync('git checkout --orphan gh-pages', { stdio: 'inherit' });
    execSync('git rm -rf .', { stdio: 'inherit' });
  }

  // Copy all files from temp directory to root
  console.log('Copying files from temp directory to root...');
  fs.cpSync(tempDir, rootDir, { recursive: true });

  // Add all files to git
  console.log('Adding files to git...');
  execSync('git add .', { stdio: 'inherit' });

  // Commit changes
  console.log('Committing changes...');
  execSync('git commit -m "Manual deployment to GitHub Pages"', { stdio: 'pipe' });

  // Push to GitHub
  console.log('Pushing to GitHub...');
  execSync('git push -f origin gh-pages', { stdio: 'inherit' });

  // Switch back to main branch
  console.log('Switching back to main branch...');
  execSync('git checkout main', { stdio: 'inherit' });

  console.log('✅ Manual deployment complete!');
  console.log('🔍 Please check https://rorrimaesu.github.io/TankWars/ to verify the deployment.');
} catch (error) {
  console.error('❌ Deployment failed:', error);
  
  // Try to switch back to main branch
  try {
    console.log('Switching back to main branch...');
    execSync('git checkout main', { stdio: 'inherit' });
  } catch (switchError) {
    console.error('Failed to switch back to main branch:', switchError);
  }
} finally {
  // Clean up temp directory
  if (fs.existsSync(tempDir)) {
    console.log('Cleaning up temp directory...');
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}
