import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appDir = path.resolve(__dirname, '..');
const repoRoot = path.resolve(appDir, '..');
const distDir = path.join(appDir, 'dist');

if (!fs.existsSync(distDir)) {
  console.error('Missing dist directory. Run "npm run build" first.');
  process.exit(1);
}

for (const name of ['assets', 'images', 'index.html']) {
  fs.rmSync(path.join(repoRoot, name), { recursive: true, force: true });
}

for (const entry of fs.readdirSync(distDir)) {
  fs.cpSync(path.join(distDir, entry), path.join(repoRoot, entry), {
    recursive: true,
    force: true,
  });
}

console.log('GitHub Pages output synced to repository root.');
