# Portfolio Image Checklist

Place your recovered images in this folder structure before publishing:

- `public/images/about/profile.jpg`
- `public/images/about/wechat-qr.jpg`
- `public/images/about/ant-group.png`
- `public/images/about/meituan.png`
- `public/images/projects/ant-fortune-ai/cover.webp`
- `public/images/projects/ant-fortune-ai/01.webp` to `14.webp`
- `public/images/projects/ant-fortune-agi/cover.webp`
- `public/images/projects/ant-fortune-agi/01.webp` to `13.webp`
- `public/images/projects/ant-fortune-services/cover.webp`
- `public/images/projects/ant-fortune-services/01.webp` to `26.webp`
- `public/images/projects/meituan-digital-currency-v4/cover.webp`
- `public/images/projects/meituan-digital-currency-v4/01.webp` to `18.webp`
- `public/images/projects/financial-material-review-system/cover.webp`
- `public/images/projects/financial-material-review-system/01.webp` to `20.webp`

If your recovered files still keep the old downloaded filenames, you can auto-import them:

`node ./scripts/import-images.mjs /absolute/path/to/recovered-images`

After the files are in place:

1. `cd minimalist-ai-portfolio`
2. `npm install`
3. `npm run publish:pages`

Then commit and push the repository root changes.
