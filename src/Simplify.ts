import { CharStream, CharStreams, CommonTokenStream } from 'antlr4ts'; 
import { evalAndReplace } from './EvalScript';
import { JustMCFLexer } from './antlr/JustMCFLexer';
import { JustMCFParser } from './antlr/JustMCFParser';
import { JustMCFSimplifyVisitor } from './JustMCFSimplifyVisitor';

export function execute(code: string) {
    const evalScriptCode = evalAndReplace(code)

    const input = CharStreams.fromString(evalScriptCode)
    const lexer = new JustMCFLexer(input)
    const tokens = new CommonTokenStream(lexer)
    const parser = new JustMCFParser(tokens)
    const visitor = new JustMCFSimplifyVisitor()

    const mcfFile = parser.mcfFile()
//    console.log(mcfFile.toStringTree())
    visitor.option = {
        scbExpression: {
            useConstNumberScbObjective: true
        }
    }
    visitor.visit(mcfFile);
    visitor.printAllMcfunction()
}
