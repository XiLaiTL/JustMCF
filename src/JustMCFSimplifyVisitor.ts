import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { McfFileContext, StatementAndCommandContext, CommandContext, StatementContext, FuncStatementContext, ExecStatementContext, ExecStoreChildContext, ExecRunChildContext, ExecChildContext, MatchPartContext, DataIdentifierContext, DataOperationExpressionContext, ScbOperationExpressionContext, ScbSingleOperationExpressionContext, ScbIdentifierContext, Pos3IdentifierContext, Pos2IdentifierContext, Pos5IdentifierContext, Pos1Context, BlockIdentifierContext, BlockstateContext, SelectorContext, NameSpaceContext, RegisterNameContext, NbtNameContext, ResourceLocationContext, NbtContext, JsonContext, NbtPathContext, SnbtValueContext, SnbtContext, NbtCompoundContext, NbtPairContext, NbtListContext, NbtValueContext, NbtByteArrContext, NbtIntArrContext, NbtLongArrContext, NbtStringContext, JsonTextValueContext, JsonTextContext, JsonObjContext, JsonPairContext, JsonArrContext, JsonValueContext, ExecNamedRunContext, ExecAnonymousRunContext, ExecDirectRunContext, ExecWithoutRunOrChildContext, ExecWithRunOrChildContext, LeagalCommandContext, DataStorageContext, ExecStoreResultBossbarContext, ExecAlignContext,ExecAnchoredContext, ExecInContext, ExecAsContext, DataEntityContext, ExecAtContext, ExecFacingEntityContext, ExecFacingPosContext, ExecIfBiomeContext, ExecIfBlockContext, ExecIfBlocksContext, ExecIfDataContext, ExecIfEntityContext, ExecIfScoreContext, ExecIfScoreMatchesContext, ExecPositionedPosContext, ExecPostionedAsContext, ExecPredicateContext, ExecRotatedAsContext, ExecRotatedPosContext, ExecStoreSuccessScoreContext, ExecStoreSuccessDataContext, ExecStoreSuccessBossbarContext, ExecStoreResultScoreContext, ExecStoreResultDataContext, ExecStoreContext, DataBlockContext } from './antlr/JustMCFParser';
import { JustMCFVisitor } from "./antlr/JustMCFVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

export class JustMCFSimplifyVisitor extends AbstractParseTreeVisitor<string[]>
    implements JustMCFVisitor<string[]> {
    protected defaultResult(): string[] {
        return []
    }

    private mcfunction: { [mcfunctionFileName: string]: string[] } = {};

    private anonymousFunctionFatherNamespaceTimes: { [mcfunctionFileName: string]: number } = {};
    private tempFunctionNamespace: string[] = [];

    printAllMcfunction() {
        for (const mcfunctionFileName in this.mcfunction) {
            console.log(mcfunctionFileName)
            for (const command of this.mcfunction[mcfunctionFileName]) {
                console.log(`   ${command}`)
            }
        }
    }

    //visitDataIdentifier?: ((ctx: DataIdentifierContext) => string[]) | undefined;
    visitDataStorage(ctx: DataStorageContext) {return [`storage ${this.visitAndReturnFirst(ctx.nameSpace())} ${this.visitAndReturnFirst(ctx.nbtPath())}`]}
    visitDataEntity(ctx: DataEntityContext){return [`entity ${this.visitAndReturnFirst(ctx.selector())} ${this.visitAndReturnFirst(ctx.nbtPath())}`]}
    visitDataBlock(ctx: DataBlockContext){return [`block ${this.visitAndReturnFirst(ctx.pos3Identifier())} ${this.visitAndReturnFirst(ctx.nbtPath())}`]}
    visitScbIdentifier(ctx: ScbIdentifierContext){return [`${this.visitAndReturnFirst(ctx.selector())} ${this.visitAndReturnFirst(ctx.nbtName())}`]}
    visitPos3Identifier(ctx: Pos3IdentifierContext){return [`${this.visitAndReturnFirst(ctx.pos1(0))} ${this.visitAndReturnFirst(ctx.pos1(1))} ${this.visitAndReturnFirst(ctx.pos1(2))}`]}
    visitPos2Identifier(ctx: Pos2IdentifierContext){return [`${this.visitAndReturnFirst(ctx.pos1(0))} ${this.visitAndReturnFirst(ctx.pos1(1))}`]}
    visitPos5Identifier(ctx: Pos5IdentifierContext){return [`${this.visitAndReturnFirst(ctx.pos1(0))} ${this.visitAndReturnFirst(ctx.pos1(1))} ${this.visitAndReturnFirst(ctx.pos1(2))} ${this.visitAndReturnFirst(ctx.pos1(3))} ${this.visitAndReturnFirst(ctx.pos1(4))}`]}
    visitPos1(ctx: Pos1Context){return [ctx.text]}
    visitBlockIdentifier(ctx: BlockIdentifierContext) {
        let block = `${this.visitAndReturnFirst(ctx.registerName())}`
        if (ctx.blockstate() !== undefined) block = `${block}${this.visitAndReturnFirst(ctx.blockstate()!!)}`
        if(ctx.nbt()!==undefined) block = `${block} ${this.visitAndReturnFirst(ctx.nbt()!!)}`
        return [block]
    }
    visitBlockstate(ctx: BlockstateContext) { return [ctx.text]} 
    //TODO: need to use UUID map and need environment
    visitSelector(ctx: SelectorContext) {
        if (/^@[parse]$/.test(ctx.text)) return [ctx.text]
        else return [ctx.text.replace("@","")]
    }
    visitNameSpace(ctx: NameSpaceContext) {return [ctx.text]}
    visitRegisterName(ctx: RegisterNameContext){return [ctx.text]}
    visitNbtName(ctx: NbtNameContext){return [ctx.text]}
    visitResourceLocation(ctx: ResourceLocationContext){return [ctx.text]}

    visitMcfFile(ctx: McfFileContext) {
        for(const functionStatement of ctx.funcStatement())
            this.visit(functionStatement)
        return []
    }
    visitFuncStatement(ctx: FuncStatementContext) {
        const namespace = this.visitAndReturnFirst(ctx.nameSpace(0))
        this.tempFunctionNamespace.push(namespace) //use for child anonymous func
        const commands: string[] = []
        for (const singleContext of ctx.statementAndCommand()) {
            commands.pushAll(this.visit(singleContext))
        }
        this.tempFunctionNamespace.pop()
        this.mcfunction[namespace] = commands
        return []
    }

    visitExecNamedRun(ctx: ExecNamedRunContext) {
        this.visit(ctx.funcStatement())
        const namespace = this.visitAndReturnFirst(ctx.funcStatement().nameSpace(0))
        return [`function ${namespace}`]
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
            commands.pushAll(this.visit(singleContext))
        }
        this.tempFunctionNamespace.pop()
        this.mcfunction[namespace] = commands
        return [`function ${namespace}`]
    }
    visitExecDirectRun(ctx: ExecDirectRunContext) {return this.visit(ctx.command())}

    visitStatementAndCommand?: ((ctx: StatementAndCommandContext) => string[]) | undefined;
    visitCommand?: ((ctx: CommandContext) => string[]) | undefined;
    visitStatement(ctx: StatementContext) {
        this.visit(ctx.funcStatement())
        const namespace = this.visitAndReturnFirst(ctx.funcStatement().nameSpace(0))
        if (ctx._left) return [`function ${namespace}`]
        else return []
    }
    visitLeagalCommand(ctx: LeagalCommandContext) {
        return [ctx.text]
    }

 //execute       
    // visitExecStatement?: ((ctx: ExecStatementContext) => string[]) | undefined;
    // visitExecStoreChild?: ((ctx: ExecStoreChildContext) => string[]) | undefined;
    // visitExecRunChild?: ((ctx: ExecRunChildContext) => string[]) | undefined;
    // visitExecChild?: ((ctx: ExecChildContext) => string[]) | undefined;
    visitExecWithRunOrChild(ctx: ExecWithRunOrChildContext) {
        let command: string = "execute"
        for (const execChildContext of ctx.execChild())
            command = `${command} ${this.visitAndReturnFirst(execChildContext)}`
        for (const execStoreChildContext of ctx.execStoreChild())
            command = `${command} ${this.visitAndReturnFirst(execStoreChildContext)}`
        if (ctx.execRunChild() !== undefined)
            command = `${command} run ${this.visitAndReturnFirst(ctx.execRunChild()!!)}`
        return [command]
    }
    visitExecWithoutRunOrChild(ctx: ExecWithoutRunOrChildContext) {
        let command: string = "execute"
        for (const execChildContext of ctx.execChild())
            command = `${command} ${this.visitAndReturnFirst(execChildContext)}`
        return [command]
    }
    visitExecStoreResultScore(ctx: ExecStoreResultScoreContext) {return [`store result score ${this.visitAndReturnFirst(ctx.scbIdentifier())}`]}
    visitExecStoreSuccessScore(ctx: ExecStoreSuccessScoreContext) {return [`store success score ${this.visitAndReturnFirst(ctx.scbIdentifier())}`]}
    visitExecStoreResultData(ctx: ExecStoreResultDataContext) {
        const storeTypeContext = ctx.AcceptableName()
        const storeScaleContext = ctx.NUMBER()
        const storeType = storeTypeContext === undefined ? "int"
            : /byte|short|int|long|float|double/.test(storeTypeContext.text) ? storeTypeContext.text
                : "";if(storeType==="") throw new JustMCFSimplifyError("execute store data type error")
        const storeScale = storeScaleContext === undefined ? "1" : storeScaleContext.text
        return [`store result ${this.visitAndReturnFirst(ctx.dataIdentifier())} ${storeType} ${storeScale}`]
    }
    visitExecStoreSuccessData(ctx: ExecStoreSuccessDataContext) {
        const storeTypeContext = ctx.AcceptableName()
        const storeScaleContext = ctx.NUMBER()
        const storeType = storeTypeContext === undefined ? "int"
            : /byte|short|int|long|float|double/.test(storeTypeContext.text) ? storeTypeContext.text
                : "";if(storeType==="") throw new JustMCFSimplifyError("execute store data type error")
        const storeScale = storeScaleContext === undefined ? "1" : storeScaleContext.text
        return [`store success ${this.visitAndReturnFirst(ctx.dataIdentifier())} ${storeType} ${storeScale}`]
    }
    visitExecStoreResultBossbar(ctx: ExecStoreResultBossbarContext){return [`store result ${this.visitAndReturnFirst(ctx.nameSpace())} ${ctx._value.text}`]}
    visitExecStoreSuccessBossbar(ctx: ExecStoreSuccessBossbarContext){return [`store success ${this.visitAndReturnFirst(ctx.nameSpace())} ${ctx._value.text}`]}
    visitExecAlign(ctx: ExecAlignContext) {
        const axesDefault = ctx.AcceptableName().text
        const axes = `${/x/.test(axesDefault) ? "x" : ""}${/y/.test(axesDefault) ? "y" : ""}${/z/.test(axesDefault) ? "z" : ""}`
        if (axes === "") throw new JustMCFSimplifyError("Error on execute align axes token")
        return [`align ${axes}`]
    }
    visitExecAnchored(ctx: ExecAnchoredContext){ return [`anchored ${ctx._anchor.text}`] }
    visitExecIn(ctx: ExecInContext) { return [`in ${this.visitAndReturnFirst(ctx.nameSpace())}`]}
    visitExecAs(ctx: ExecAsContext){ return [`as ${this.visitAndReturnFirst(ctx.selector())}`]}
    visitExecAt(ctx: ExecAtContext) {return [`at ${this.visitAndReturnFirst(ctx.selector())}`]}
    visitExecFacingPos(ctx: ExecFacingPosContext){return [`facing ${this.visitAndReturnFirst(ctx.pos3Identifier())}`]}
    visitExecFacingEntity(ctx: ExecFacingEntityContext) {return [`facing entity ${this.visitAndReturnFirst(ctx.selector())}`]}
    visitExecPositionedPos(ctx: ExecPositionedPosContext) {return [`positioned ${this.visitAndReturnFirst(ctx.pos3Identifier())}`]}
    visitExecPostionedAs(ctx: ExecPostionedAsContext) {return [`positioned as ${this.visitAndReturnFirst(ctx.selector())}`] }
	visitExecRotatedPos(ctx: ExecRotatedPosContext) {return [`rotated ${this.visitAndReturnFirst(ctx.pos2Identifier())}`]}
    visitExecRotatedAs(ctx: ExecRotatedAsContext) { return [`rotated as ${this.visitAndReturnFirst(ctx.selector())}`]}
    visitExecIfEntity(ctx: ExecIfEntityContext) { return [`${ctx._cond.text} entity ${this.visitAndReturnFirst(ctx.selector())}`] }
    visitExecIfScore(ctx: ExecIfScoreContext) {
        const operation = ctx.CompareOperation().text === "=="? "=" : ctx.CompareOperation().text
        return [`${ctx._cond.text} score ${this.visitAndReturnFirst(ctx.scbIdentifier(0))} ${operation} ${this.visitAndReturnFirst(ctx.scbIdentifier(1))}`]
    }
	visitExecIfScoreMatches(ctx: ExecIfScoreMatchesContext){ return [`${ctx._cond.text} score ${this.visitAndReturnFirst(ctx.scbIdentifier())} matches ${this.visitAndReturnFirst(ctx.matchPart())}`]}
	visitExecPredicate(ctx: ExecPredicateContext){return [`${ctx._cond.text} predicate ${this.visitAndReturnFirst(ctx.nameSpace())}`]}
	visitExecIfBlock(ctx: ExecIfBlockContext){return [`${ctx._cond.text} block ${this.visitAndReturnFirst(ctx.pos3Identifier())} ${this.visitAndReturnFirst(ctx.blockIdentifier())}`]}
	visitExecIfBlocks(ctx: ExecIfBlocksContext){return [`${ctx._cond.text} blocks ${this.visitAndReturnFirst(ctx.pos3Identifier(0))} ${this.visitAndReturnFirst(ctx.pos3Identifier(1))} ${this.visitAndReturnFirst(ctx.pos3Identifier(2))}`]}
	visitExecIfData(ctx: ExecIfDataContext){return [`${ctx._cond.text} ${this.visitAndReturnFirst(ctx.dataIdentifier())}`]}
	visitExecIfBiome(ctx: ExecIfBiomeContext){return [`${ctx._cond.text} biome ${this.visitAndReturnFirst(ctx.pos3Identifier())} ${this.visitAndReturnFirst(ctx.nameSpace())}`]}
    visitExecStore(ctx: ExecStoreContext) {return this.visit(ctx.execStoreChild())}
    visitMatchPart(ctx: MatchPartContext) { return [ctx.text] }
    
    visitDataOperationExpression?: ((ctx: DataOperationExpressionContext) => string[]) | undefined;
    visitScbOperationExpression?: ((ctx: ScbOperationExpressionContext) => string[]) | undefined;
    visitScbSingleOperationExpression?: ((ctx: ScbSingleOperationExpressionContext) => string[]) | undefined;
    
    visitNbt(ctx: NbtContext){ return [ctx.text.replace("n{","{").replace("n[","[") ]}
    visitJson(ctx: JsonContext){ return [ctx.text.replace("j{","{").replace("j[","[") ]}
    visitNbtPath(ctx: NbtPathContext) {return [ctx.text]}
    // visitSnbtValue?: ((ctx: SnbtValueContext) => string[]) | undefined;
    // visitSnbt?: ((ctx: SnbtContext) => string[]) | undefined;
    // visitNbtCompound?: ((ctx: NbtCompoundContext) => string[]) | undefined;
    // visitNbtPair?: ((ctx: NbtPairContext) => string[]) | undefined;
    // visitNbtList?: ((ctx: NbtListContext) => string[]) | undefined;
    // visitNbtValue?: ((ctx: NbtValueContext) => string[]) | undefined;
    // visitNbtByteArr?: ((ctx: NbtByteArrContext) => string[]) | undefined;
    // visitNbtIntArr?: ((ctx: NbtIntArrContext) => string[]) | undefined;
    // visitNbtLongArr?: ((ctx: NbtLongArrContext) => string[]) | undefined;
    // visitNbtString?: ((ctx: NbtStringContext) => string[]) | undefined;
    // visitJsonTextValue?: ((ctx: JsonTextValueContext) => string[]) | undefined;
    // visitJsonText?: ((ctx: JsonTextContext) => string[]) | undefined;
    // visitJsonObj?: ((ctx: JsonObjContext) => string[]) | undefined;
    // visitJsonPair?: ((ctx: JsonPairContext) => string[]) | undefined;
    // visitJsonArr?: ((ctx: JsonArrContext) => string[]) | undefined;
    // visitJsonValue?: ((ctx: JsonValueContext) => string[]) | undefined;
    
//because use string[] as the result type, need a new method to get first child of answer
    visitAndReturnFirst(tree: ParseTree) {
        return this.visit(tree)[0]
    }
}

class JustMCFSimplifyError extends Error{
    constructor(message: string) {
        super(message);
    }
}