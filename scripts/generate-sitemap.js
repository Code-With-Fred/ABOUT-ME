import fs from 'fs'
import path from 'path'
import { baseUrl, routes } from './seo-routes.js'

const now = new Date().toISOString().split('T')[0]

const buildUrl = (loc) => {
  const isHome = loc === '/'
  return `  <url>\n    <loc>${baseUrl}${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${isHome ? 'weekly' : 'monthly'}</changefreq>\n    <priority>${isHome ? '1.0' : '0.8'}</priority>\n  </url>`
}

const urlset = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((r) => buildUrl(r.path)).join('\n')}\n</urlset>\n`

const outPath = path.join(process.cwd(), 'public', 'sitemap.xml')
fs.writeFileSync(outPath, urlset)
console.log('Sitemap written to', outPath)
