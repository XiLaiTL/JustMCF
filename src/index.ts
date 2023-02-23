import { FileUtils } from "FileUtils.js"
import { JustMCFResult, defaultOption } from "JustMCFResult.js"
import { build as simpleBuild, execute as simpleExecute } from './ManageSimplify.js';
import { BuildAction, InitAction } from "JustMCFCli.js";

export async function build(source_path: string, target_path: string) {
    if (source_path === undefined) {
        throw new JustMCFPathError("error source_path")
    }
    if (target_path === undefined) {
        throw new JustMCFPathError("error target_path")
    }
    const result = new JustMCFResult()
    const fileUtils = new FileUtils(result, source_path, target_path)
    const [hasPackMcmeta, _] = await fileUtils.checkPackMcmeta()
    if (!hasPackMcmeta) {
        throw new JustMCFPathError("there was not minecraft data pack in source path, you need to create pack.mcmeta firstly")
    }
    const hasMcfMcmeta = await fileUtils.checkMcfMcmeta()
    if (!hasMcfMcmeta) {
        throw new JustMCFPathError("there was not Just MCF project in source path, you need to initialize firstly")
    }
    const codesObj = await fileUtils.readAllMcf()
    simpleBuild(codesObj.map(obj => obj.code), result)

    if(!source_path.includes(target_path)) await fileUtils.copyAllDataPack()
    await fileUtils.createFunctionTag()
    await fileUtils.createMcfunction()
    await fileUtils.createMcfMcmeta()
} 

export async function init(source_path:string) {
    const option = defaultOption()
    const res = new JustMCFResult() 
    res.option = option
    const file = new FileUtils(res)
    await file.createMcfMcmeta()
}

export const execute = simpleExecute

export const initInCli = InitAction
export const buildInCli = BuildAction
    
class JustMCFPathError extends Error {
    constructor(message: string) {
        super(message);
    }
}