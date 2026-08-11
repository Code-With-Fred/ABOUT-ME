const fs = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')

const inputPath = path.join(__dirname, '..', 'public', 'Eze_Favour_Chimereze_Resume.txt')
const outputPath = path.join(__dirname, '..', 'public', 'fred-resume.pdf')

if (!fs.existsSync(inputPath)) {
  console.error('Input resume not found:', inputPath)
  process.exit(1)
}

const text = fs.readFileSync(inputPath, 'utf8')

const doc = new PDFDocument({ margin: 50 })
const stream = fs.createWriteStream(outputPath)
doc.pipe(stream)

doc.font('Times-Roman').fontSize(12)

const paragraphs = text.split('\n\n')
paragraphs.forEach((p, idx) => {
  const lines = p.split('\n')
  lines.forEach(line => {
    doc.text(line.replace(/\u2022/g, '•'))
  })
  if (idx !== paragraphs.length - 1) doc.moveDown()
})

doc.end()

stream.on('finish', () => {
  console.log('PDF generated at', outputPath)
})
