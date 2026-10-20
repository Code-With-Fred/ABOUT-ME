import fs from 'fs'
import path from 'path'
import { baseUrl, routes } from './seo-routes.js'

const buildUrl = (loc) => `  <url>\n    <loc>${baseUrl}${loc}</loc>\n  </url>`

const urlset = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((r) => buildUrl(r.path)).join('\n')}\n</urlset>\n`

const outPath = path.join(process.cwd(), 'public', 'sitemap.xml')
fs.writeFileSync(outPath, urlset)
console.log('Sitemap written to', outPath)
