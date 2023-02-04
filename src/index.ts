#!/usr/bin/env node --experimental-specifier-resolution=node
import { registerOnArray } from './lib/ArrayHelper';
import { Command } from 'commander'
import { readPackageJSON } from 'pkg-types'
import i18n, { init } from 'i18next';
import FsBackend, { FsBackendOptions } from 'i18next-fs-backend'
import inquirer from 'inquirer'
import { toAbsolutionPath, FileUtils } from './FileUtils';
import { option, defaultOption, JustMCFResult } from './JustMCFResult';
import { toSnakeCase } from './lib/StringUtils';
import { build } from 'Simplify';

registerOnArray()

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

const InitAction = async () => {
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
}

const BuildActionWhenNoSourcePath = async () => {
    let source_path = process.cwd()
    await inquirer.prompt([{

    }]).then(({ }) => {
        
    })
    return source_path
}

const BuildActionWhenNoTargetPath = async () => {
    let target_path = process.cwd()
    await inquirer.prompt([{

    }]).then(({ }) => {
        
    })
    return target_path
}

const BuildActionWhenNoPackMcmeta = async () => {
    
}

const BuildActionWhenNoMcfMcmeta = async () => {
    
    await inquirer.prompt([{

    }]).then(({ }) => {
        
    })
    
}
const BuildAction = async (source_path:string,target_path:string) => {
    if (source_path === undefined) {
        source_path = await BuildActionWhenNoSourcePath()
    }
    if (target_path === undefined) {
        target_path = await BuildActionWhenNoTargetPath()
    }
    const result = new JustMCFResult()
    const fileUtils = new FileUtils(result, source_path, target_path)
    const [hasPackMcmeta, _] = await fileUtils.checkPackMcmeta()
    if (!hasPackMcmeta) {
        await BuildActionWhenNoPackMcmeta()
    }
    const hasMcfMcmeta = await fileUtils.checkMcfMcmeta()
    if (!hasMcfMcmeta) {
        await BuildActionWhenNoMcfMcmeta()
    }
    const codesObj = await fileUtils.readAllMcf()
    build(codesObj.map(obj=>obj.code),result)
    fileUtils.createFunctionTag()
    fileUtils.createMcfunction()
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