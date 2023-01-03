import { CharStream, CharStreams, CommonTokenStream } from 'antlr4ts'; 
import { JustMCFLexer } from './antlr/JustMCFLexer';
import { JustMCFParser } from './antlr/JustMCFParser';
import { JustMCFSimplifyVisitor } from './JustMCFSimplifyVisitor';

function execute(code: string) {
    const input = CharStreams.fromString(code)
    const lexer = new JustMCFLexer(input)
    const tokens = new CommonTokenStream(lexer)
    const parser = new JustMCFParser(tokens)
    const visitor = new JustMCFSimplifyVisitor()

    const mcfFile = parser.mcfFile()
    console.log(mcfFile.toStringTree())
    visitor.visit(mcfFile);
    visitor.printAllMcfunction()
}

execute(`
func test:foo {
    say hello
    say 1111
}

func test:a2 {
    say no
    say qaq

    func test:a3 {
        say nonono
    }
}

`)