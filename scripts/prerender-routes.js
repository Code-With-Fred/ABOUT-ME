// Writes one HTML file per route into dist/ so crawlers get the right title,
// description, canonical and some real content without running JavaScript.
// Without this, every URL served index.html with the homepage canonical, and
// Google treated all subpages as duplicates of "/".
import fs from 'fs'
import path from 'path'
import { baseUrl, routes } from './seo-routes.js'

const dist = path.join(process.cwd(), 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function replaceTag(html, pattern, tag) {
  if (!pattern.test(html)) throw new Error(`prerender: tag not found in dist/index.html: ${pattern}`)
  return html.replace(pattern, tag)
}

const navLinks = routes
  .filter((r) => r.path.split('/').length <= 2)
  .map((r) => `<a href="${r.path}" style="margin-right:16px">${esc(r.h1)}</a>`)
  .join('')

for (const route of routes) {
  const url = `${baseUrl}${route.path}`
  const title = esc(route.title)
  const description = esc(route.description)

  // data-rh lets react-helmet-async replace these tags once the app loads.
  let html = template
  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  html = replaceTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${description}" data-rh="true" />`)
  html = replaceTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" data-rh="true" />`)
  html = replaceTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" data-rh="true" />`)
  html = replaceTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}" data-rh="true" />`)
  html = replaceTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${description}" data-rh="true" />`)
  html = replaceTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}" data-rh="true" />`)
  html = replaceTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${description}" data-rh="true" />`)

  // React replaces this on mount; until then crawlers and no-JS visitors see real content.
  const fallback =
    `<div id="root"><main style="max-width:760px;margin:0 auto;padding:120px 20px 60px;line-height:1.6">` +
    `<h1 style="font-size:2rem;margin-bottom:16px">${esc(route.h1)}</h1>` +
    `<p>${esc(route.intro)}</p>` +
    `<p><a href="/contact">Start a project with Code-With-Fred</a></p>` +
    `<nav aria-label="Site" style="margin-top:32px">${navLinks}</nav>` +
    `</main></div>`
  html = replaceTag(html, /<div id="root"><\/div>/, fallback)

  const outFile = route.path === '/' ? path.join(dist, 'index.html') : path.join(dist, `${route.path.slice(1)}.html`)
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, html)
}

console.log(`Prerendered ${routes.length} routes into dist/`)
