import { CharStreams, CommonTokenStream } from 'antlr4ts'; 
import { evalAndReplace } from './EvalScript';
import { JustMCFLexer } from './antlr/JustMCFLexer';
import { JustMCFParser } from './antlr/JustMCFParser';
import { JustMCFSimplifyVisitor } from './JustMCFSimplifyVisitor';
import { convertBackLeagalCommands, convertLeagalCommands } from './LeagalCommand';
import { JustMCFResult } from './JustMCFResult';


export function execute(code: string) {
    const evalScriptCode = evalAndReplace(code)
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
    backConvert(result)
}


function backConvert(result: JustMCFResult) {
    for (const mcfunctionFileName in result.mcfunctions) {
        result.mcfunctions[mcfunctionFileName] = result.mcfunctions[mcfunctionFileName].map(command=>convertBackLeagalCommands(command))
    }
}

function print(result:JustMCFResult) {
    for (const mcfunctionFileName in result.mcfunctions) {
        console.log(mcfunctionFileName)
        for (const command of result.mcfunctions[mcfunctionFileName]) {
            console.log(`   ${command}`)
        }
    }
}