import { McfFileContext, StatementAndCommandContext, CommandContext, StatementContext, FuncStatementContext, ExecStatementContext, ExecStoreChildContext, ExecRunChildContext, ExecChildContext, MatchPartContext, DataIdentifierContext, DataOperationExpressionContext, ScbOperationExpressionContext, ScbSingleOperationExpressionContext, ScbIdentifierContext, Pos3IdentifierContext, Pos2IdentifierContext, Pos5IdentifierContext, Pos1Context, BlockIdentifierContext, BlockstateContext, SelectorContext, NameSpaceContext, RegisterNameContext, NbtNameContext, ResourceLocationContext, NbtContext, JsonContext, NbtPathContext, SnbtValueContext, SnbtContext, NbtCompoundContext, NbtPairContext, NbtListContext, NbtValueContext, NbtByteArrContext, NbtIntArrContext, NbtLongArrContext, NbtStringContext, JsonTextValueContext, JsonTextContext, JsonObjContext, JsonPairContext, JsonArrContext, JsonValueContext, ExecNamedRunContext, ExecAnonymousRunContext, ExecDirectRunContext, ExecWithoutRunOrChildContext, ExecWithRunOrChildContext, LeagalCommandContext } from "./antlr/JustMCFParser";
import { JustMCFVisitor } from "./antlr/JustMCFVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

export class JustMCFSimplifyVisitor extends AbstractParseTreeVisitor<string>
    implements JustMCFVisitor<string> {
    protected defaultResult(): string {
        return ""
    }

    private mcfunction: { [mcfunctionFileName: string]: string[] } = {};
    private anonymousFunctionFatherNamespaceTimes: { [mcfunctionFileName: string]: number } = {};
    private tempFunctionNamespace: string[] = [];

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
        return ""
    }
    visitFuncStatement(ctx: FuncStatementContext) {
        const namespace = this.visit(ctx.nameSpace(0))
        this.tempFunctionNamespace.push(namespace) //use for child anonymous func
        const commands: string[] = []
        for (const singleContext of ctx.statementAndCommand()) {
            commands.push(this.visit(singleContext))
        }
        this.tempFunctionNamespace.pop()
        this.mcfunction[namespace] = commands
        return ""
    }

    visitExecNamedRun(ctx: ExecNamedRunContext) {
        this.visit(ctx.funcStatement())
        const namespace = this.visit(ctx.funcStatement().nameSpace(0))
        return `function ${namespace}`
    }

    visitExecAnonymousRun(ctx: ExecAnonymousRunContext) {
        let namespace = this.tempFunctionNamespace[this.tempFunctionNamespace.length - 1]
        if (this.anonymousFunctionFatherNamespaceTimes[namespace] === undefined)
            this.anonymousFunctionFatherNamespaceTimes[namespace] = 0
        else 
            this.anonymousFunctionFatherNamespaceTimes[namespace] += 1
        namespace = `${namespace}/${this.anonymousFunctionFatherNamespaceTimes[namespace]}`
        this.tempFunctionNamespace.push(namespace) //use for child anonymous func
        const commands: string[] = [];
        for (const singleContext of ctx.statementAndCommand()) {
            commands.push(this.visit(singleContext))
        }
        this.tempFunctionNamespace.pop()
        this.mcfunction[namespace] = commands
        return `function ${namespace}`
    }
    visitExecDirectRun(ctx: ExecDirectRunContext) {
        return this.visit(ctx.command())
    }


    visitStatementAndCommand?: ((ctx: StatementAndCommandContext) => string) | undefined;
    visitCommand?: ((ctx: CommandContext) => string) | undefined;
    visitStatement(ctx: StatementContext) {
        this.visit(ctx.funcStatement())
        const namespace = this.visit(ctx.funcStatement().nameSpace(0))
        if (ctx._left)
            return `function ${namespace}`
        else
            return ""
    }
    visitLeagalCommand(ctx: LeagalCommandContext) {
        return ctx.text
    }
    visitExecWithRunOrChild(ctx: ExecWithRunOrChildContext) {
        let command: string = "execute"
        for (const execChildContext of ctx.execChild()) {
//            command = `${command} ${this.visit(execChildContext)[0]}`
            command = `${command} ${execChildContext.text}`
        }
        for (const execStoreChildContext of ctx.execStoreChild()) {
            command = `${command} ${execStoreChildContext.text}`
        }
        if (ctx.execRunChild() !== undefined)
            command = `${command} run ${this.visit(ctx.execRunChild()!!)}`
        return command
    }
    visitExecWithoutRunOrChild(ctx: ExecWithoutRunOrChildContext) {
        let command: string = "execute"
        for (const execChildContext of ctx.execChild()) {
//            command = `${command} ${this.visit(execChildContext)[0]}`
            command = `${command} ${execChildContext.text}`
        }
        return command
    }


    visitExecStatement?: ((ctx: ExecStatementContext) => string) | undefined;
    visitExecStoreChild?: ((ctx: ExecStoreChildContext) => string) | undefined;
    visitExecRunChild?: ((ctx: ExecRunChildContext) => string) | undefined;

    visitExecChild?: ((ctx: ExecChildContext) => string) | undefined;
    visitMatchPart?: ((ctx: MatchPartContext) => string) | undefined;
    visitDataIdentifier?: ((ctx: DataIdentifierContext) => string) | undefined;
    visitDataOperationExpression?: ((ctx: DataOperationExpressionContext) => string) | undefined;
    visitScbOperationExpression?: ((ctx: ScbOperationExpressionContext) => string) | undefined;
    visitScbSingleOperationExpression?: ((ctx: ScbSingleOperationExpressionContext) => string) | undefined;
    visitScbIdentifier?: ((ctx: ScbIdentifierContext) => string) | undefined;
    visitPos3Identifier?: ((ctx: Pos3IdentifierContext) => string) | undefined;
    visitPos2Identifier?: ((ctx: Pos2IdentifierContext) => string) | undefined;
    visitPos5Identifier?: ((ctx: Pos5IdentifierContext) => string) | undefined;
    visitPos1?: ((ctx: Pos1Context) => string) | undefined;
    visitBlockIdentifier?: ((ctx: BlockIdentifierContext) => string) | undefined;
    visitBlockstate?: ((ctx: BlockstateContext) => string) | undefined;
    visitSelector?: ((ctx: SelectorContext) => string) | undefined;
    visitNameSpace(ctx: NameSpaceContext) {
        return ctx.text
    }
    visitRegisterName?: ((ctx: RegisterNameContext) => string) | undefined;
    visitNbtName?: ((ctx: NbtNameContext) => string) | undefined;
    visitResourceLocation?: ((ctx: ResourceLocationContext) => string) | undefined;
    visitNbt?: ((ctx: NbtContext) => string) | undefined;
    visitJson?: ((ctx: JsonContext) => string) | undefined;
    visitNbtPath?: ((ctx: NbtPathContext) => string) | undefined;
    visitSnbtValue?: ((ctx: SnbtValueContext) => string) | undefined;
    visitSnbt?: ((ctx: SnbtContext) => string) | undefined;
    visitNbtCompound?: ((ctx: NbtCompoundContext) => string) | undefined;
    visitNbtPair?: ((ctx: NbtPairContext) => string) | undefined;
    visitNbtList?: ((ctx: NbtListContext) => string) | undefined;
    visitNbtValue?: ((ctx: NbtValueContext) => string) | undefined;
    visitNbtByteArr?: ((ctx: NbtByteArrContext) => string) | undefined;
    visitNbtIntArr?: ((ctx: NbtIntArrContext) => string) | undefined;
    visitNbtLongArr?: ((ctx: NbtLongArrContext) => string) | undefined;
    visitNbtString?: ((ctx: NbtStringContext) => string) | undefined;
    visitJsonTextValue?: ((ctx: JsonTextValueContext) => string) | undefined;
    visitJsonText?: ((ctx: JsonTextContext) => string) | undefined;
    visitJsonObj?: ((ctx: JsonObjContext) => string) | undefined;
    visitJsonPair?: ((ctx: JsonPairContext) => string) | undefined;
    visitJsonArr?: ((ctx: JsonArrContext) => string) | undefined;
    visitJsonValue?: ((ctx: JsonValueContext) => string) | undefined;

    
    
}
