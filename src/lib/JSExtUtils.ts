import { open,lstat, readFile, readdir, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";


const regexpNames = /(from\s+)(["'])(?!.*\.js)(((\.?\.\/)|antlr4ts\/).*)(["'])/gm

async function addJsExt(path: string) {
    const files = await readdir(path, 'utf-8')
    for (const fileName of files) {
        const pathNew = join(path, fileName)
        const stat = await lstat(pathNew)
        if (stat.isDirectory()) {
            await addJsExt(pathNew)
        }
        else if (stat.isFile() && extname(fileName) == ".ts") {
            const codes = await readFile(pathNew, { encoding: 'utf-8' }).catch(err=>{throw err})
            await writeFile(pathNew, codes.replace(regexpNames,"$1$2$3.js$6"), {encoding: "utf8"}).catch(err=>{throw err})
        }
    }
}
const path = join(process.cwd(), process.argv[2])
await addJsExt(path)

export {}