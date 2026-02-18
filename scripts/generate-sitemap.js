import fs from 'fs'
import path from 'path'

const baseUrl = 'https://codewithfred.name.ng'

const routes = [
  '/',
  '/about',
  '/projects',
  '/services',
  '/skills',
  '/testimonials',
  '/contact'
]

const images = {
  '/': '/my-profile.jpg'
}

function buildUrl(loc, lastmod = new Date().toISOString().split('T')[0], priority = '0.8', changefreq = 'monthly') {
  return `  <url>\n    <loc>${baseUrl}${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
}

const now = new Date().toISOString().split('T')[0]

const urlset = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${routes.map(r => buildUrl(r, now, r === '/' ? '1.0' : '0.8', r === '/' ? 'weekly' : 'monthly')).join('\n')}\n</urlset>`

const outPath = path.join(process.cwd(), 'public', 'sitemap.xml')
fs.writeFileSync(outPath, urlset)
console.log('Sitemap written to', outPath)
