#!/usr/bin/env node --loader=@u6x/jsext --experimental-specifier-resolution=node
import { Command } from 'commander'
import { readPackageJSON } from 'pkg-types'
import i18n from 'i18next';
import FsBackend, { FsBackendOptions } from 'i18next-fs-backend'
import inquirer from 'inquirer'
import { toAbsolutionPath, FileUtils,  getTargetPathDifferent } from './FileUtils';
import { option, defaultOption, JustMCFResult } from './JustMCFResult';
import { toSnakeCase } from './lib/StringUtils';
import { build, execute } from './ManageSimplify';

await i18n
    .use(FsBackend)
    //.use(resourcesToBackend((language:string,namespace:string)=>import(`./locales/${language}.json`,{ assert: { type: 'json' } })))
    .init<FsBackendOptions>({
        backend: {
            loadPath:toAbsolutionPath('./locales/{{lng}}.json'),
        },
        lng: 'en',
        fallbackLng: 'en',
        supportedLngs: ['en', 'zh-CN']
    });

const ChooseLanguageAction = async () => {
    await inquirer.prompt([
        {
            name: "lang",
            type: "list",
            choices: ["en", "zh-CN"],
            default: "en",
            message:i18n.t("init.choose.lang")
        }
    ]).then(async ({ lang }) => {
        await i18n.changeLanguage(lang)
    })
}

const InitAction = async () => {
    await ChooseLanguageAction()
    
    const option: option = defaultOption()
    
    let sectionName: keyof option
    const allList: any[][] = []
    const sectionNameList: string[] = []; let sec = 0;
    for (sectionName in option) {
        if(sectionName == "file") continue
        const sectionInformationName =`init.${toSnakeCase(sectionName)}`
        //console.log(sectionInformationName)
        sectionNameList.push(i18n.t(sectionInformationName))
        
        const promptList: any = []
        const sectionObj = option[sectionName]
        for (const keyName in sectionObj) {
            const value = sectionObj[keyName as keyof typeof sectionObj]
            const valueType = typeof value
            const messageName = `${sectionInformationName}.${toSnakeCase(keyName)}`
            //console.log(messageName)
            promptList.push(
                {
                    name: keyName,
                    type: valueType == "boolean" ? "confirm" : "input",
                    default: value,
                    message: i18n.t(messageName) 
                })
        }
        allList.push(promptList)
    }
    
    for (const promptList of allList) {
        console.log(sectionNameList[sec++])
        await inquirer.prompt(promptList).then(ans => { option[sectionName] = ans })
    }
    console.log(i18n.t('init.file'))
    const modeChoices = [
        { name: i18n.t('init.file.mode_cover'), value: "cover" },
        { name: i18n.t('init.file.mode_skip'), value: "skip" },
        { name: i18n.t('init.file.mode_append'), value: "append" },
        { name: i18n.t('init.file.mode_prepend'), value: "prepend" },
    ]
    await inquirer.prompt([
        {
            name: "mcfunctionGenerateMode",
            type: "list",
            choices: modeChoices,
            default: "cover",
            message:i18n.t("init.file.mcfunction_generate_mode")
        },
        {
            name: "functionTagGenerateMode",
            type: "list",
            choices: modeChoices,
            default: "cover",
            message:i18n.t("init.file.function_tag_generate_mode")
        },
        
    ]).then(ans => { option["file"] = ans })
    
    const res = new JustMCFResult() 
    res.option = option
    const file = new FileUtils(res)
    await file.createMcfMcmeta()
    console.log(i18n.t('init.finish'))
}

const BuildActionWhenNoSourcePath = async () => {
    let source_path = process.cwd()
    const { asSourcePath } = await inquirer.prompt([{
        name: "asSourcePath",
        type: "confirm",
        default: true,
        message:i18n.t('build.source_path.as_source_path')
    }])
    if (!asSourcePath) {
        await inquirer.prompt([{
            name: "newSourcePath",
            type: "input",
            default: source_path,
            message:i18n.t('build.source_path.new_source_path')
            
        }]).then(({ newSourcePath }) => {
            source_path = newSourcePath
        }) 
    }
    return source_path
}

const BuildActionWhenNoTargetPath = async () => {
    let target_path = getTargetPathDifferent() 
    const {asTargetPath} = await inquirer.prompt([{
        name: "asTargetPath",
        type: "confirm",
        default: false,
        message:i18n.t('build.target_path.as_target_path')
    }])
    if (!asTargetPath) {
        await inquirer.prompt([{
            name: "newTargetPath",
            type: "input",
            default: target_path,
            message:i18n.t('build.target_path.new_source_path')
            
        }]).then(({ newTargetPath }) => {
            target_path = newTargetPath
        }) 
    }
    return target_path
}

const BuildActionWhenNoPackMcmeta = async () => {
    console.log(i18n.t('build.pack_mcmeta'))
}

const BuildActionWhenNoMcfMcmeta = async () => {
    
    const { needInit } = await inquirer.prompt([{
        name: "needInit",
        type: "confirm",
        default: true,
        message: i18n.t('build.mcf_mcmeta')
    }])
    if (needInit) {
        await InitAction()
        return true
    }
    return false
}
const BuildAction = async (source_path: string, target_path: string) => {
    let chooseLanguageFlag =false
    if (source_path === undefined) {
        if (chooseLanguageFlag == false) { await ChooseLanguageAction(); chooseLanguageFlag = true }
        source_path = await BuildActionWhenNoSourcePath()
    }
    if (target_path === undefined) {
        if (chooseLanguageFlag == false) { await ChooseLanguageAction(); chooseLanguageFlag = true }
        target_path = await BuildActionWhenNoTargetPath()
    }
    const result = new JustMCFResult()
    const fileUtils = new FileUtils(result, source_path, target_path)
    const [hasPackMcmeta, _] = await fileUtils.checkPackMcmeta()
    if (!hasPackMcmeta) {
        if (chooseLanguageFlag == false) { await ChooseLanguageAction(); chooseLanguageFlag = true }
        await BuildActionWhenNoPackMcmeta()
        return
    }
    const hasMcfMcmeta = await fileUtils.checkMcfMcmeta()
    if (!hasMcfMcmeta) {
        if (chooseLanguageFlag == false) { await ChooseLanguageAction(); chooseLanguageFlag = true }
        const next = await BuildActionWhenNoMcfMcmeta()
        if(!next) return
    }
    const codesObj = await fileUtils.readAllMcf()
    build(codesObj.map(obj => obj.code), result)
    if(!source_path.includes(target_path)) fileUtils.copyAllDataPack()
    fileUtils.createFunctionTag()
    fileUtils.createMcfunction()
    fileUtils.createMcfMcmeta()
}

const pkg = await readPackageJSON(toAbsolutionPath('../package.json'))
const program = new Command("mcf").description(pkg.description!!).version(pkg.version!!)
const pathNow = process.cwd()
program.command("init")
    .description(i18n.t('init.description'))
    .action(async () => {
        await InitAction()
    })

//program.command("init-datapack")

program.command("build [source-path]")
    .option("-o,--output <target-path>","output path")
    .description(i18n.t('build.description'))
    .action(async (source_path, { output }) => {
        await BuildAction(source_path,output)
    })


program.parse(process.argv)


// console.log(i18n.t('init.scb_expression'))
// inquirer.prompt([
//     {
//         name: "tempScbObjectiveName",
//         type: "input",
//         default: "justmcf-temp-scoreboard",
//         message: i18n.t('init.scb_expression.temp_scb_objective_name')
//     },
//     {
//         name: "useConstNumberScbObjective",
//         type: "confirm",
//         default: false,
//         message: i18n.t('init.scb_expression.use_const_number_scb_objective')
//     },
//     {
//         name: "constNumberScbObjectiveName",
//         type: "input",
//         default: "justmcf-const-scoreboard",
//         message:i18n.t('init.scb_expression.const_number_scb_objective_name')
//     }
// ]).then((ans) => {
//     option.scbExpression = ans
// })