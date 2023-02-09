import { CharStreams, CommonTokenStream } from 'antlr4ts'; 
import { evalAndReplace } from './ManageEvalScript';
import { JustMCFLexer } from './antlr/JustMCFLexer';
import { JustMCFParser } from './antlr/JustMCFParser';
import { JustMCFSimplifyVisitor } from './JustMCFSimplifyVisitor';
import { convertBackLeagalCommands, convertLeagalCommands } from './ManageLeagalCommand';
import { JustMCFResult } from './JustMCFResult';


export function execute(code: TemplateStringsArray | string) {
    let codeShouldWork: string = code[0]
    if (typeof code == "string") {
        codeShouldWork = code as string
    }
    const evalScriptCode = evalAndReplace(codeShouldWork)
    const leagalCommandConvertCode = convertLeagalCommands(evalScriptCode)

    const input = CharStreams.fromString(leagalCommandConvertCode)
    const lexer = new JustMCFLexer(input)
    const tokens = new CommonTokenStream(lexer)
    const parser = new JustMCFParser(tokens)
    const result = new JustMCFResult()
    const visitor = new JustMCFSimplifyVisitor(result)

    const mcfFile = parser.mcfFile()
//    console.log(mcfFile.toStringTree())

    visitor.visit(mcfFile);
    visitor.createInitFunc();
    backConvert(result)
    print(result)
}

export function build(codes: string[],result:JustMCFResult) {
    const codesConverted = codes.map(code =>
        convertLeagalCommands(evalAndReplace(code))).join('\n')
    const input = CharStreams.fromString(codesConverted)
    const lexer = new JustMCFLexer(input)
    const tokens = new CommonTokenStream(lexer)
    const parser = new JustMCFParser(tokens)
    const visitor = new JustMCFSimplifyVisitor(result)

    const mcfFile = parser.mcfFile()

    visitor.visit(mcfFile);
    visitor.createInitFunc();
    backConvert(result)
}


function backConvert(result: JustMCFResult) {
    for (const mcfunctionFileName in result.mcfunctions) {
        let resCommand = convertBackLeagalCommands(result.mcfunctions[mcfunctionFileName])
        for (const entityName in result.option.entityNameMap) {
            if(result.option.entityNameMap[entityName]!="player")
            resCommand = resCommand.replace(new RegExp(String.raw`@${entityName}`,'g'),result.option.entityNameMap[entityName])
        }
        result.mcfunctions[mcfunctionFileName] = resCommand
    }
}

function print(result:JustMCFResult) {
    for (const mcfunctionFileName in result.mcfunctions) {
        console.log(mcfunctionFileName)
        console.log("    "+result.mcfunctions[mcfunctionFileName].replace(/\n/g,'\n    '))
    }
    for (const functionTagName in result.functionTags) {
        console.log(functionTagName)
        console.log(JSON.stringify(result.functionTags[functionTagName],null,"  "))
    }
}