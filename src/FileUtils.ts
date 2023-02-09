import { JustMCFResult, } from './JustMCFResult';
import { fileURLToPath } from 'node:url'
import { join, dirname, extname, basename } from 'node:path'
import { tmpdir } from 'node:os';
import {open, readFile, cp, writeFile, access, mkdir, appendFile, readdir, lstat, } from 'node:fs/promises'

const __dirname = dirname(fileURLToPath(import.meta.url))
export function toAbsolutionPath(path: string) {
    return join(__dirname, path)
}

export function getTargetPathDifferent() {
    return join(process.cwd(),`../${basename(process.cwd())}_output`) 
}

export class FileUtils {
    private sourcePath: string = ""
    private targetPath: string = ""
    private resultObj: JustMCFResult;
    constructor(result: JustMCFResult, _sourcePath: string = process.cwd(), _targePath: string = process.cwd()) {
        this.sourcePath =  (extname(_sourcePath)=="") ?_sourcePath: dirname(_sourcePath)
        this.targetPath = (extname(_targePath)=="") ?_targePath: dirname(_targePath)
        this.resultObj = result
    }
    async checkPackMcmeta(): Promise<[boolean, string]> {
        let success = false;
        let fileString = "";
        await readFile(join(this.sourcePath, './pack.mcmeta'), 'utf8')
            .then(data => {
                success = true
                fileString = data
            })
            .catch(err => {
                if (err.code === 'ENOENT') { success = false; return; }
                throw err;
            })
        return [success, fileString]
    }

    async checkMcfMcmeta(): Promise<boolean> {
        let success = false;
        await readFile(join(this.sourcePath, './mcf.mcmeta'), 'utf8')
            .then(data => {
                success = true
                this.resultObj.option = JSON.parse(data)
            })
            .catch(err => {
                if (err.code === 'ENOENT') { success = false; return; }
                throw err;
            })
        return success
    }

    async copyAllDataPack() {
        await cp(this.sourcePath, this.targetPath, { recursive: true }).catch(err => { throw err })
    }

    async createMcfMcmeta() {
        await writeFile(join(this.sourcePath, './mcf.mcmeta'), JSON.stringify(this.resultObj.option,null,"  "), 'utf-8').catch(err => { throw err })
    }

    async createFunctionTag() {
        await writeDir(this.targetPath)
        for (const functionTagName in this.resultObj.functionTags) {
            const path = join(this.targetPath, convertNamespaceIdToPath(functionTagName.replace('#',""), "tag/function"))
            const data = JSON.stringify(this.resultObj.functionTags[functionTagName],null,"  ")
            await writeDir(path)
            switch (this.resultObj.option.file?.mcfunctionGenerateMode) {
                case "cover": { await writeFile(path, data, 'utf-8').catch(err => { throw err }) } break;
                case "skip": {
                    await writeFile(path, data, {encoding:'utf-8',flag:'wx'}).catch(err => { })
                } break;
                case "append": {
                    await readFile(path, 'utf-8').then(async dataOrigin => {
                        let obj = JSON.parse(dataOrigin)
                        obj = {
                            replace: this.resultObj.functionTags[functionTagName].replace,
                            values: [...obj,...this.resultObj.functionTags[functionTagName].values]
                        }
                        await writeFile(path, JSON.stringify(obj,null,"  "), 'utf-8').catch(err => { throw err }) 
                    }).catch(async (err) => {
                        await writeFile(path,data, 'utf-8').catch(err => { throw err }) 
                    })
                } break;
                case "prepend": {
                    await readFile(path, 'utf-8').then(async dataOrigin => {
                        let obj = JSON.parse(dataOrigin)
                        obj = {
                            replace: this.resultObj.functionTags[functionTagName].replace,
                            values: [...this.resultObj.functionTags[functionTagName].values,...obj]
                        }
                        await writeFile(path, JSON.stringify(obj,null,"  "), 'utf-8').catch(err => { throw err }) 
                    }).catch(async (err) => {
                        await writeFile(path,data, 'utf-8').catch(err => { throw err }) 
                    })
                } break;
            }
        }

    }
    async readAllMcf(): Promise<{ path: string, code: string }[]> {
        const res: { path: string, code: string }[] = [];
        async function readAll(path: string) {
            const files = await readdir(path, 'utf-8')
            for (const fileName of files) {
                const pathNew = join(path, fileName)
                const stat = await lstat(pathNew)
                if (stat.isDirectory())
                    await readAll(pathNew)
                else if (stat.isFile() && extname(fileName) == ".mcf")
                    await readFile(pathNew, 'utf-8').then(code => res.push({ path: pathNew, code: code })).catch(err => { throw err })
            }
        }
        await readAll(this.sourcePath)        
        return res
    }
    async createMcfunction() {
        await writeDir(this.targetPath)
        for (const mcfunctionFileName in this.resultObj.mcfunctions) {
            const path = join(this.targetPath, convertNamespaceIdToPath(mcfunctionFileName, "function"))
            const data = this.resultObj.mcfunctions[mcfunctionFileName]
            await writeDir(path)
            switch (this.resultObj.option.file?.functionTagGenerateMode) {
                case "cover": {await writeFile(path,data,'utf-8').catch(err => { throw err })} break;
                case "skip": {
                    await writeFile(path, data, {encoding:'utf-8',flag:'wx'}).catch(err => { })
                } break;
                case "append": { await appendFile(path, data, 'utf-8').catch(err => { throw err }) } break;
                case "prepend": {
                    await readFile(path, 'utf-8').then(async dataOrigin => {
                        await writeFile(path, data + '\n'+dataOrigin, 'utf-8').catch(err => { throw err }) 
                    }).catch(async (err) => {
                        await writeFile(path,data, 'utf-8').catch(err => { throw err }) 
                    })
                } break;
            }
        }
    }
}

async function writeDir(filePath:string) {
    const dir = dirname(filePath);
    await access(dir).catch(async err => {
        await mkdir(dir, { recursive: true });
    })
}

function convertNamespaceIdToPath(namespaceId:string,type:string):string {
    switch (type) {
        case 'function': {
            const [namespace, resolutionPath] = namespaceId.split(":")
            return `./data/${namespace}/functions/${resolutionPath}.mcfunction`
        } break;
        case 'tag/function': {
            const [namespace, resolutionPath] = namespaceId.split(":")
            return `./data/${namespace.replace("#","")}/tags/functions/${resolutionPath}.json`
        }
    }
    return ""
}