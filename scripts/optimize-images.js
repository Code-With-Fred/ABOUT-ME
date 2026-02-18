import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const srcDirs = [path.join(process.cwd(), 'public'), path.join(process.cwd(), 'src', 'assets')]
const outDir = path.join(process.cwd(), 'public', 'optimized')

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const sizes = [1200, 800, 400]
const exts = ['.jpg', '.jpeg', '.png']

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!exts.includes(ext)) return
  const name = path.basename(filePath, ext)
  for (const w of sizes) {
    const outName = `${name}-${w}.webp`
    const outPath = path.join(outDir, outName)
    try {
      await sharp(filePath).resize({ width: w }).webp({ quality: 80 }).toFile(outPath)
      console.log('Wrote', outPath)
    } catch (err) {
      console.error('Failed to process', filePath, err)
    }
  }
}

async function walkAndProcess(dir) {
  const items = fs.readdirSync(dir)
  for (const it of items) {
    const full = path.join(dir, it)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) await walkAndProcess(full)
    else await processFile(full)
  }
}

;(async () => {
  for (const d of srcDirs) {
    if (fs.existsSync(d)) await walkAndProcess(d)
  }
  console.log('Image optimization complete. Output:', outDir)
})()
