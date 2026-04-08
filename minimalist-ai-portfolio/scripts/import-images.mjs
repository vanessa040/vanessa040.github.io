import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appDir = path.resolve(__dirname, '..');
const publicImagesDir = path.join(appDir, 'public', 'images');

const aboutMappings = [
  ['01.jpg', 'about/profile.jpg'],
  ['02.jpg', 'about/wechat-qr.jpg'],
  ['03.png', 'about/ant-group.png'],
  ['04.png', 'about/meituan.png'],
];

const projectMappings = [
  {
    slug: 'ant-fortune-ai',
    cover: '69a40fd48e5c4.webp',
    gallery: [
      '69a40ce09d0ba.webp',
      '69a4114cb18e7.webp',
      '69a4114c17ebf.webp',
      '69a4114ad98ac.webp',
      '69a4114b2c7b7.webp',
      '69a4114d6d50c.webp',
      '69a4116cb76a3.webp',
      '69a41163ee9e5.webp',
      '69a41167d7525.webp',
      '69a411668ec55.webp',
      '69a411662888b.webp',
      '69a41173cadd1.webp',
      '69a4117557c8a.webp',
      '69a4117570807.webp',
    ],
  },
  {
    slug: 'ant-fortune-agi',
    cover: '69a415ff5c577.webp',
    gallery: [
      '69a41afcb00fc.webp',
      '69a41afc77914.webp',
      '69a41afbbf47a.webp',
      '69a41afca9529.webp',
      '69a41c80e3f3b.webp',
      '69a41c811acaa.webp',
      '69a41b0093875.webp',
      '69a41b1740123.webp',
      '69a41dd4e156a.webp',
      '69a41dd233027.webp',
      '69a41b12a3b06.webp',
      '69a41b0de9a09.webp',
      '69a41b1372bd7.webp',
    ],
  },
  {
    slug: 'ant-fortune-services',
    cover: '69a41fb5b7788.webp',
    gallery: [
      '69a42195ac4ab.webp',
      '69a421960e559.webp',
      '69a42195e1d6c.webp',
      '69a421955ea4d.webp',
      '69a421953baf5.webp',
      '69a421a2439b1.webp',
      '69a421a3a9ce3.webp',
      '69a421a4db315.webp',
      '69a421a510c2c.webp',
      '69a421a51ca48.webp',
      '69a421af4a438.webp',
      '69a421b091261.webp',
      '69a421b2aa8c1.webp',
      '69a421b3ada9c.webp',
      '69a421b413c3a.webp',
      '69a421bc0ecf2.webp',
      '69a421bdd68a2.webp',
      '69a421bfef8ff.webp',
      '69a421c0b2041.webp',
      '69a421c21b95c.webp',
      '69a421cb15c78.webp',
      '69a421cd1a6d1.webp',
      '69a421cd1a6d1.webp',
      '69a421cf8ac9e.webp',
      '69a421d0e2513.webp',
      '69a421dad974d.webp',
    ],
  },
  {
    slug: 'meituan-digital-currency-v4',
    cover: '69a429ebbe0da.webp',
    gallery: [
      '69a45228a9f46.webp',
      '69a452284111a.webp',
      '69a4522810de4.webp',
      '69a4522709c05.webp',
      '69a4522754a18.webp',
      '69a45235b9aa0.webp',
      '69a4523729459.webp',
      '69a4523830e31.webp',
      '69a452379200a.webp',
      '69a452381cf4e.webp',
      '69a4524098576.webp',
      '69a452495f95e.webp',
      '69a4524a52cf1.webp',
      '69a4524a3e617.webp',
      '69a452488208c.webp',
      '69a4525145101.webp',
      '69a4525791bed.webp',
      '69a452559bdb1.webp',
    ],
  },
  {
    slug: 'financial-material-review-system',
    cover: '69a42bec2d457.webp',
    gallery: [
      '69a44cca175c9.webp',
      '69a44ccb156bb.webp',
      '69a44cc5806f0.webp',
      '69a44cca8ee61.webp',
      '69a44ccae191c.webp',
      '69a44cd113e73.webp',
      '69a44cda2df1b.webp',
      '69a44cdad4768.webp',
      '69a44cdd8ab41.webp',
      '69a44cdd118e8.webp',
      '69a44ce0adba3.webp',
      '69a44ce5bc4a9.webp',
      '69a44ce92886e.webp',
      '69a44cee97513.webp',
      '69a44cf62f462.webp',
      '69a44d0562cee.webp',
      '69a44d0b39a18.webp',
      '69a44d0c31efc.webp',
      '69a44d153109c.webp',
      '69a44d102051f.webp',
    ],
  },
];

const mappings = [
  ...aboutMappings.map(([source, target]) => ({ source, target })),
  ...projectMappings.flatMap(({ slug, cover, gallery }) => [
    { source: cover, target: `projects/${slug}/cover.webp` },
    ...gallery.map((source, index) => ({
      source,
      target: `projects/${slug}/${String(index + 1).padStart(2, '0')}.webp`,
    })),
  ]),
];

const sourceDir = process.argv[2];

if (!sourceDir) {
  console.error('Usage: node ./scripts/import-images.mjs /absolute/path/to/recovered-images');
  process.exit(1);
}

if (!fs.existsSync(sourceDir)) {
  console.error(`Source directory not found: ${sourceDir}`);
  process.exit(1);
}

const sourceFiles = new Map();

function collectFiles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      collectFiles(fullPath);
      continue;
    }

    const matches = sourceFiles.get(entry.name) ?? [];
    matches.push(fullPath);
    sourceFiles.set(entry.name, matches);
  }
}

collectFiles(sourceDir);

let copiedCount = 0;
const missing = [];
const duplicates = [];

for (const { source, target } of mappings) {
  const matches = sourceFiles.get(source) ?? [];

  if (matches.length === 0) {
    missing.push(`${source} -> ${target}`);
    continue;
  }

  if (matches.length > 1) {
    duplicates.push(`${source}: ${matches.join(', ')}`);
  }

  const destination = path.join(publicImagesDir, target);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(matches[0], destination);
  copiedCount += 1;
}

console.log(`Copied ${copiedCount} files into ${publicImagesDir}.`);

if (duplicates.length > 0) {
  console.log('\nDuplicate filenames found. The first match was used:');
  for (const item of duplicates) {
    console.log(`- ${item}`);
  }
}

if (missing.length > 0) {
  console.log('\nMissing files:');
  for (const item of missing) {
    console.log(`- ${item}`);
  }
}
