import fs from 'fs';
import path from 'path';

const baseUrl = 'https://driveselect.fr';
const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');

const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily', alternates: [{ lang: 'fr', url: '/' }] },
  { url: '/vehicules-neufs', priority: '0.9', changefreq: 'daily', alternates: [{ lang: 'fr', url: '/vehicules-neufs' }] },
  { url: '/occasions', priority: '0.9', changefreq: 'daily', alternates: [{ lang: 'fr', url: '/occasions' }] },
  { url: '/services', priority: '0.8', changefreq: 'weekly', alternates: [{ lang: 'fr', url: '/services' }] },
  { url: '/equipe', priority: '0.7', changefreq: 'monthly', alternates: [{ lang: 'fr', url: '/equipe' }] },
  { url: '/contact', priority: '0.8', changefreq: 'monthly', alternates: [{ lang: 'fr', url: '/contact' }] },
  { url: '/blog', priority: '0.8', changefreq: 'weekly', alternates: [{ lang: 'fr', url: '/blog' }] },
  { url: '/marques/mercedes', priority: '0.8', changefreq: 'weekly', alternates: [{ lang: 'fr', url: '/marques/mercedes' }] },
  { url: '/marques/bmw', priority: '0.8', changefreq: 'weekly', alternates: [{ lang: 'fr', url: '/marques/bmw' }] },
  { url: '/marques/audi', priority: '0.8', changefreq: 'weekly', alternates: [{ lang: 'fr', url: '/marques/audi' }] },
  { url: '/marques/porsche', priority: '0.8', changefreq: 'weekly', alternates: [{ lang: 'fr', url: '/marques/porsche' }] },
  { url: '/reserver-essai', priority: '0.7', changefreq: 'monthly', alternates: [{ lang: 'fr', url: '/reserver-essai' }] },
  // Pages véhicules individuels (exemples)
  { url: '/vehicules/mercedes-classe-c', priority: '0.6', changefreq: 'weekly', alternates: [{ lang: 'fr', url: '/vehicules/mercedes-classe-c' }] },
  { url: '/vehicules/bmw-serie-5', priority: '0.6', changefreq: 'weekly', alternates: [{ lang: 'fr', url: '/vehicules/bmw-serie-5' }] },
  { url: '/vehicules/audi-a6', priority: '0.6', changefreq: 'weekly', alternates: [{ lang: 'fr', url: '/vehicules/audi-a6' }] },
  { url: '/vehicules/porsche-911', priority: '0.6', changefreq: 'weekly', alternates: [{ lang: 'fr', url: '/vehicules/porsche-911' }] },
  // Articles de blog (exemples)
  { url: '/blog/financement-vehicule-luxe', priority: '0.5', changefreq: 'monthly', alternates: [{ lang: 'fr', url: '/blog/financement-vehicule-luxe' }] },
  { url: '/blog/entretien-voiture-premium', priority: '0.5', changefreq: 'monthly', alternates: [{ lang: 'fr', url: '/blog/entretien-voiture-premium' }] },
];

const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.alternates?.map(alt => `
    <xhtml:link 
      rel="alternate" 
      hreflang="${alt.lang}" 
      href="${baseUrl}${alt.url}" 
    />`).join('') || ''}
    ${page.images?.map(img => `
    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title>${img.title || ''}</image:title>
      <image:caption>${img.caption || ''}</image:caption>
    </image:image>`).join('') || ''}
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync(outputPath, sitemap);
  console.log(`Sitemap generated at ${outputPath}`);
  
  // Génération du fichier robots.txt
  const robotsTxt = `User-agent: *
Allow: /

# Désactiver l'accès à certaines pages privées
Disallow: /confirmation-essai
Disallow: /admin/
Disallow: /profile/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml
`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsTxt);
  console.log('Fichier robots.txt généré');
};

generateSitemap();