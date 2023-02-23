import { readFile, copyFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const srcPath = resolve(__dirname, '../README.md')
const destPath = resolve(__dirname, '../packages/editor/README.md')

run()

async function run() {
  const srcFile = await readFile(srcPath, { encoding: 'utf-8' })
  const destFile = await readFile(destPath, { encoding: 'utf-8' })
  if (srcFile !== destFile) {
    await copyFile(srcPath, destPath)
    console.log(`README.md synchronization succeeded.`)
  }
}
