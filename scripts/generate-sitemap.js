import fs from 'fs';
import path from 'path';

const baseUrl = 'https://driveselect.fr';
const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');

const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/vehicules-neufs', priority: '0.9', changefreq: 'daily' },
  { url: '/occasions', priority: '0.9', changefreq: 'daily' },
  { url: '/services', priority: '0.8', changefreq: 'weekly' },
  { url: '/equipe', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/marques/mercedes', priority: '0.8', changefreq: 'weekly' },
  { url: '/marques/bmw', priority: '0.8', changefreq: 'weekly' },
  { url: '/marques/audi', priority: '0.8', changefreq: 'weekly' },
  { url: '/marques/porsche', priority: '0.8', changefreq: 'weekly' },
];

const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync(outputPath, sitemap);
  console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();