import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DEFAULT_DIST = resolve(__dirname, '../../dist')

function listHtmlFiles(dir) {
  if (!existsSync(dir)) return []

  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(dir, entry.name)
    if (entry.isDirectory()) return listHtmlFiles(path)
    return entry.isFile() && entry.name.endsWith('.html') && entry.name !== '404.html' ? [path] : []
  })
}

function readIfExists(filePath) {
  return existsSync(filePath) ? readFileSync(filePath, 'utf8') : ''
}

export function checkDist(distDir = DEFAULT_DIST) {
  const errors = []
  const requiredFiles = ['robots.txt', 'llms.txt', 'content-index.json', 'sitemap.xml']

  for (const file of requiredFiles) {
    if (!existsSync(resolve(distDir, file))) {
      errors.push(`${file} is missing from dist.`)
    }
  }

  const sitemap = readIfExists(resolve(distDir, 'sitemap.xml'))
  if (sitemap.includes('toolguide.top/AI/') || sitemap.includes('/AI/')) {
    errors.push('sitemap.xml contains uppercase /AI/ URL variants.')
  }
  if (sitemap.includes('/superpowers/') || sitemap.includes('source-check.html')) {
    errors.push('sitemap.xml contains internal-only pages.')
  }

  for (const filePath of listHtmlFiles(distDir)) {
    const html = readFileSync(filePath, 'utf8')
    const displayPath = relative(distDir, filePath).replace(/\\/g, '/')

    if (!/<meta name="description" content="[^"]+"/.test(html)) {
      errors.push(`${displayPath} is missing a meta description.`)
    }
    if (!/<link rel="canonical" href="https:\/\/toolguide\.top\//.test(html)) {
      errors.push(`${displayPath} is missing a canonical link.`)
    }
    if (!/<script type="application\/ld\+json">/.test(html)) {
      errors.push(`${displayPath} is missing JSON-LD structured data.`)
    }
  }

  return errors
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const errors = checkDist(process.argv[2] ? resolve(process.argv[2]) : DEFAULT_DIST)
  if (errors.length > 0) {
    console.error(errors.join('\n'))
    process.exit(1)
  }
  console.log('SEO checks passed.')
}
