import { McfFileContext, StatementAndCommandContext, CommandContext, StatementContext, FuncStatementContext, ExecStatementContext, ExecStoreChildContext, ExecRunChildContext, ExecChildContext, MatchPartContext, DataIdentifierContext, DataOperationExpressionContext, ScbOperationExpressionContext, ScbSingleOperationExpressionContext, ScbIdentifierContext, Pos3IdentifierContext, Pos2IdentifierContext, Pos5IdentifierContext, Pos1Context, BlockIdentifierContext, BlockstateContext, SelectorContext, NameSpaceContext, RegisterNameContext, NbtNameContext, ResourceLocationContext, NbtContext, JsonContext, NbtPathContext, SnbtValueContext, SnbtContext, NbtCompoundContext, NbtPairContext, NbtListContext, NbtValueContext, NbtByteArrContext, NbtIntArrContext, NbtLongArrContext, NbtStringContext, JsonTextValueContext, JsonTextContext, JsonObjContext, JsonPairContext, JsonArrContext, JsonValueContext } from "antlr/JustMCFParser";
import { JustMCFVisitor } from "antlr/JustMCFVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

export class JustMCFSimplifyVisitor extends AbstractParseTreeVisitor<string[]>
    implements JustMCFVisitor<string[]> {
    protected defaultResult(): string[] {
        return []
    }

    private mcfunction: { [mcfunctionFileName: string]: string[] } = {};

    printAllMcfunction() {
        for (const mcfunctionFileName in this.mcfunction) {
            console.log(mcfunctionFileName)
            for (const command of this.mcfunction[mcfunctionFileName]) {
                console.log(` ${command}`)
            }
        }
    }

    visitMcfFile(ctx: McfFileContext) {
        for(const functionStatement of ctx.funcStatement())
            this.visit(functionStatement)
        return []
    }
    visitFuncStatement(ctx: FuncStatementContext) {
        const commands: string[] = [];
        for (const singleContext of ctx.statementAndCommand()) {
            for(const command of this.visit(singleContext))
                commands.push(command)
        }
        const namespace = this.visit(ctx.nameSpace(0))[0]
        this.mcfunction[namespace] = commands
        return []
    }

    
    visitStatementAndCommand(ctx: StatementAndCommandContext) {
        return [ctx.text]
    }
    visitCommand?: ((ctx: CommandContext) => string[]) | undefined;
    visitStatement?: ((ctx: StatementContext) => string[]) | undefined;
    
    visitExecStatement?: ((ctx: ExecStatementContext) => string[]) | undefined;
    visitExecStoreChild?: ((ctx: ExecStoreChildContext) => string[]) | undefined;
    visitExecRunChild?: ((ctx: ExecRunChildContext) => string[]) | undefined;
    visitExecChild?: ((ctx: ExecChildContext) => string[]) | undefined;
    visitMatchPart?: ((ctx: MatchPartContext) => string[]) | undefined;
    visitDataIdentifier?: ((ctx: DataIdentifierContext) => string[]) | undefined;
    visitDataOperationExpression?: ((ctx: DataOperationExpressionContext) => string[]) | undefined;
    visitScbOperationExpression?: ((ctx: ScbOperationExpressionContext) => string[]) | undefined;
    visitScbSingleOperationExpression?: ((ctx: ScbSingleOperationExpressionContext) => string[]) | undefined;
    visitScbIdentifier?: ((ctx: ScbIdentifierContext) => string[]) | undefined;
    visitPos3Identifier?: ((ctx: Pos3IdentifierContext) => string[]) | undefined;
    visitPos2Identifier?: ((ctx: Pos2IdentifierContext) => string[]) | undefined;
    visitPos5Identifier?: ((ctx: Pos5IdentifierContext) => string[]) | undefined;
    visitPos1?: ((ctx: Pos1Context) => string[]) | undefined;
    visitBlockIdentifier?: ((ctx: BlockIdentifierContext) => string[]) | undefined;
    visitBlockstate?: ((ctx: BlockstateContext) => string[]) | undefined;
    visitSelector?: ((ctx: SelectorContext) => string[]) | undefined;
    visitNameSpace(ctx: NameSpaceContext) {
        return [ctx.text]
    }
    visitRegisterName?: ((ctx: RegisterNameContext) => string[]) | undefined;
    visitNbtName?: ((ctx: NbtNameContext) => string[]) | undefined;
    visitResourceLocation?: ((ctx: ResourceLocationContext) => string[]) | undefined;
    visitNbt?: ((ctx: NbtContext) => string[]) | undefined;
    visitJson?: ((ctx: JsonContext) => string[]) | undefined;
    visitNbtPath?: ((ctx: NbtPathContext) => string[]) | undefined;
    visitSnbtValue?: ((ctx: SnbtValueContext) => string[]) | undefined;
    visitSnbt?: ((ctx: SnbtContext) => string[]) | undefined;
    visitNbtCompound?: ((ctx: NbtCompoundContext) => string[]) | undefined;
    visitNbtPair?: ((ctx: NbtPairContext) => string[]) | undefined;
    visitNbtList?: ((ctx: NbtListContext) => string[]) | undefined;
    visitNbtValue?: ((ctx: NbtValueContext) => string[]) | undefined;
    visitNbtByteArr?: ((ctx: NbtByteArrContext) => string[]) | undefined;
    visitNbtIntArr?: ((ctx: NbtIntArrContext) => string[]) | undefined;
    visitNbtLongArr?: ((ctx: NbtLongArrContext) => string[]) | undefined;
    visitNbtString?: ((ctx: NbtStringContext) => string[]) | undefined;
    visitJsonTextValue?: ((ctx: JsonTextValueContext) => string[]) | undefined;
    visitJsonText?: ((ctx: JsonTextContext) => string[]) | undefined;
    visitJsonObj?: ((ctx: JsonObjContext) => string[]) | undefined;
    visitJsonPair?: ((ctx: JsonPairContext) => string[]) | undefined;
    visitJsonArr?: ((ctx: JsonArrContext) => string[]) | undefined;
    visitJsonValue?: ((ctx: JsonValueContext) => string[]) | undefined;

    
    
}