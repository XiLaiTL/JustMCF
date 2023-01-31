import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { FuncTagSettingsReplaceContext, FuncTagSettingsReplacedContext, FuncTagSIFuncImproveSContext, FuncTagSIFuncSContext, FuncTagSIFuncTagSContext, NameSpaceBiomeContext, NameSpaceBlockContext, NameSpaceBossbarContext, NameSpaceDimContext, NameSpaceFuncContext, NameSpaceItemContext, NameSpaceItemModifierContext, NameSpaceLootContext, NameSpacePredicateContext, NameSpaceSettingsBiomeContext, NameSpaceSettingsBossbarContext, NameSpaceSettingsDefaultContext, NameSpaceSettingsDimContext, NameSpaceSettingsItemContext, NameSpaceSettingsItemModifierContext, NameSpaceSettingsJustDefaultContext, NameSpaceSettingsLootContext, NameSpaceSettingsPredicateContext, NameSpaceSettingsStorageContext, NameSpaceStorageContext, TagNameSpaceBlockContext, TagNameSpaceContext, TagNameSpaceEntityContext, TagNameSpaceFuncContext, TagNameSpaceItemContext, ScbPlayerSIScbListContext, ScbObjSDeclareSingleContext, CriterionContext, BossbarSDeclareContext, BossbarSOperationContext, BossbarSIGetContext, BossbarSISetColorContext, BossbarSISetMaxContext, BossbarSISetNameContext, BossbarSISetPlayerContext, BossbarSISetPlayerNullContext, BossbarSISetStyleContext, BossbarSISetValueContext, BossbarSISetVisibleContext, BossbarOpExprGetContext, BossbarOpExprAssignValueContext, BossbarOpExprAssignMaxContext, TitleSCompoundContext, BossbarSIRemoveContext, BossbarStatementInnerContext, TitleSSelectorCompoundContext, TitleSISelectorSingleContext, TitleSISelectorCompoundContext, TitleSSIJsonContext, TitleSSIClearContext, TitleSSIResetContext, TitleSSITimesContext, TitleISIJsonContext, TitleISIClearContext, TitleISIResetContext, TitleISITimesContext, TitleSelectorStatementInnerContext, DisplaySCompoundContext, AttrISIGetBaseContext, AttrISIGetContext, AttrISIModifierAddContext, AttrISIModifierGetContext, AttrISIModifierRemoveContext, AttrISISetBaseContext, AttrSCompoundContext, AttrSISelectorCompoundContext, AttrSISingleContext, AttrSSelectorContext, BlockSCloneContext, BlockSCloneFilteredContext, BlockSFillContext, BlockSFillReplaceContext, BlockSSetblockContext, ClearISIContext, DisplayISIBossbarContext, DisplayISITextContext, DisplayISITitleCompoundContext, DisplayISITitleSingleContext, DisplaySIBossbarContext, DisplaySIScbContext, DisplaySISelectorCompoundContext, DisplaySISelectorSingleContext, DisplaySSelectorCompoundContext, EffectISIClearAllContext, EffectISIClearContext, EffectISIClearSpContext, EffectISIGiveContext, EntityISIAttrCompoundContext, EntityISIAttrSingleContext, EntityISIDisplayCompoundContext, EntityISIDisplaySingleContext, EntityISIEffectContext, EntityISIExecContext, EntityISIGiveAndClearContext, EntityISIItemCompoundContext, EntityISIItemSingleContext, EntityISIKillContext, EntityISILootCompoundContext, EntityISILootGiveSingleContext, EntityISILootSingleContext, EntityISITagContext, EntityISITitleCompoundContext, EntityISITpContext, EntitySCompoundContext, EntitySDeclareContext, EntitySDeclarePlayerContext, EntitySIEntityExpressionContext, EntitySISelectorCompoundContext, EntitySSelectorCompoundContext, GiveISIContext, ItemISIModifyContext, ItemISIReplaceFromBlockContext, ItemISIReplaceFromEntityContext, ItemISIReplaceWithContext, ItemSCompoundContext, ItemSIBlockContext, ItemSIEntityContext, ItemSIGiveAndClearContext, ItemSILootInnerContext, ItemSISelectorNestContext, ItemSSelectorCompoundContext, ItemSSIGiveAndClearContext, ItemSSIItemContext, ItemSSILootInnerContext, LootSCompoundContext, LootSIGiveContext, LootSIInsertContext, LootSIReplaceBlockContext, LootSIReplaceEntityContext, LootSISelectorNestContext, LootSISpawnContext, LootSourceFishHandContext, LootSourceFishToolContext, LootSourceKillContext, LootSourceLootContext, LootSourceMineHandContext, LootSourceMineToolContext, LootSSelectorCompoundContext, TagISIAddContext, TagISIListContext, TagISIRemoveContext, TpISIDestinationContext, TpISIFacingContext, TpISIFacingEntityContext, TpISIPosContext, TpISIRotatedContext, TpISIRotatedDivContext } from './antlr/JustMCFParser';
import { ScbFuncExpressionContext } from "./antlr/JustMCFParser";
import { ScbOptMulDivModExpressionContext } from "./antlr/JustMCFParser";
import { ScbOptAddSubExpressionContext } from "./antlr/JustMCFParser";
import { ScbTempNumberExpressionContext } from "./antlr/JustMCFParser";
import { ScbIdExpressionContext } from "./antlr/JustMCFParser";
import { ScbParenExpressionContext } from "./antlr/JustMCFParser";
import { ExecWithRunOrChildContext } from "./antlr/JustMCFParser";
import { ExecWithoutRunOrChildContext } from "./antlr/JustMCFParser";
import { ScbSIRemoveContext } from "./antlr/JustMCFParser";
import { ScbSIDisplaynameContext } from "./antlr/JustMCFParser";
import { ScbSIRendertypeContext } from "./antlr/JustMCFParser";
import { ScbSIDisplayContext } from "./antlr/JustMCFParser";
import { ExecAlignContext } from "./antlr/JustMCFParser";
import { ExecAnchoredContext } from "./antlr/JustMCFParser";
import { ExecInContext } from "./antlr/JustMCFParser";
import { ExecAsContext } from "./antlr/JustMCFParser";
import { ExecAtContext } from "./antlr/JustMCFParser";
import { ExecFacingPosContext } from "./antlr/JustMCFParser";
import { ExecFacingEntityContext } from "./antlr/JustMCFParser";
import { ExecPositionedPosContext } from "./antlr/JustMCFParser";
import { ExecPostionedAsContext } from "./antlr/JustMCFParser";
import { ExecRotatedPosContext } from "./antlr/JustMCFParser";
import { ExecRotatedAsContext } from "./antlr/JustMCFParser";
import { ExecIfEntityContext } from "./antlr/JustMCFParser";
import { ExecIfScoreContext } from "./antlr/JustMCFParser";
import { ExecIfScoreMatchesContext } from "./antlr/JustMCFParser";
import { ExecPredicateContext } from "./antlr/JustMCFParser";
import { ExecIfBlockContext } from "./antlr/JustMCFParser";
import { ExecIfBlocksContext } from "./antlr/JustMCFParser";
import { ExecIfDataContext } from "./antlr/JustMCFParser";
import { ExecIfBiomeContext } from "./antlr/JustMCFParser";
import { ExecStoreContext } from "./antlr/JustMCFParser";
import { DataStorageContext } from "./antlr/JustMCFParser";
import { DataEntityContext } from "./antlr/JustMCFParser";
import { DataBlockContext } from "./antlr/JustMCFParser";
import { ExecStoreResultScoreContext } from "./antlr/JustMCFParser";
import { ExecStoreSuccessScoreContext } from "./antlr/JustMCFParser";
import { ExecStoreResultDataContext } from "./antlr/JustMCFParser";
import { ExecStoreSuccessDataContext } from "./antlr/JustMCFParser";
import { ExecStoreResultBossbarContext } from "./antlr/JustMCFParser";
import { ExecStoreSuccessBossbarContext } from "./antlr/JustMCFParser";
import { DataMergeStorageContext } from "./antlr/JustMCFParser";
import { DataMergeEntityContext } from "./antlr/JustMCFParser";
import { DataMergeBlockContext } from "./antlr/JustMCFParser";
import { ExecDirectRunContext } from "./antlr/JustMCFParser";
import { ExecNamedRunContext } from "./antlr/JustMCFParser";
import { ExecAnonymousRunContext } from "./antlr/JustMCFParser";
import { NameSpaceSettingsFuncContext } from "./antlr/JustMCFParser";
import { NameSpaceSettingsBlockContext } from "./antlr/JustMCFParser";
import { NoInExecStatementRunFuncContext } from "./antlr/JustMCFParser";
import { NoInExecStatementStoreContext } from "./antlr/JustMCFParser";
import { DataGetContext } from "./antlr/JustMCFParser";
import { DataModifyMergeValueContext } from "./antlr/JustMCFParser";
import { DataModifyMergeFromContext } from "./antlr/JustMCFParser";
import { DataModifySetValueContext } from "./antlr/JustMCFParser";
import { DataModifySetFromContext } from "./antlr/JustMCFParser";
import { DataModifyAppendValueContext } from "./antlr/JustMCFParser";
import { DataModifyAppendFromContext } from "./antlr/JustMCFParser";
import { DataModifyPrependValueContext } from "./antlr/JustMCFParser";
import { DataModifyPrependFromContext } from "./antlr/JustMCFParser";
import { DataModifyInsertValueContext } from "./antlr/JustMCFParser";
import { DataModifyInsertFromContext } from "./antlr/JustMCFParser";
import { DataRemoveContext } from "./antlr/JustMCFParser";
import { ScbGetContext } from "./antlr/JustMCFParser";
import { ScbAddContext } from "./antlr/JustMCFParser";
import { ScbRemoveContext } from "./antlr/JustMCFParser";
import { ScbSetContext } from "./antlr/JustMCFParser";
import { ScbOptAddAssignContext } from "./antlr/JustMCFParser";
import { ScbOptSubAssignContext } from "./antlr/JustMCFParser";
import { ScbOptMulAssignContext } from "./antlr/JustMCFParser";
import { ScbOptDivAssignContext } from "./antlr/JustMCFParser";
import { ScbOptModAssignContext } from "./antlr/JustMCFParser";
import { ScbOptExcFuncContext } from "./antlr/JustMCFParser";
import { ScbOptMinFuncContext } from "./antlr/JustMCFParser";
import { ScbOptMaxFuncContext } from "./antlr/JustMCFParser";
import { ScbOptAssignContext } from "./antlr/JustMCFParser";
import { ScbResetContext } from "./antlr/JustMCFParser";
import { ScbOptExpressionContext } from "./antlr/JustMCFParser";
import { ScbObjSDeclareWithNameContext } from "./antlr/JustMCFParser";
import { ScbObjSDeclareDefaultContext } from "./antlr/JustMCFParser";
import { ScbObjSOperationContext } from "./antlr/JustMCFParser";
import { McfFileContext } from "./antlr/JustMCFParser";
import { LeagalCommandContext } from "./antlr/JustMCFParser";
import { NameSpaceStatementContext } from "./antlr/JustMCFParser";
import { FuncTagStatementContext } from "./antlr/JustMCFParser";
import { FuncStatementContext } from "./antlr/JustMCFParser";
import { FuncRunStatementContext } from "./antlr/JustMCFParser";
import { MatchPartContext } from "./antlr/JustMCFParser";
import { ScbSingleOperationExpressionContext } from "./antlr/JustMCFParser";
import { ScbIdentifierContext } from "./antlr/JustMCFParser";
import { Pos3IdentifierContext } from "./antlr/JustMCFParser";
import { Pos2IdentifierContext } from "./antlr/JustMCFParser";
import { Pos5IdentifierContext } from "./antlr/JustMCFParser";
import { Pos1Context } from "./antlr/JustMCFParser";
import { BlockIdentifierContext } from "./antlr/JustMCFParser";
import { BlockstateContext } from "./antlr/JustMCFParser";
import { SelectorContext } from "./antlr/JustMCFParser";
import { NameSpaceContext } from "./antlr/JustMCFParser";
import { RegisterNameContext } from "./antlr/JustMCFParser";
import { AcceptableNameContext } from "./antlr/JustMCFParser";
import { NbtNameContext } from "./antlr/JustMCFParser";
import { ResourceLocationContext } from "./antlr/JustMCFParser";
import { DataStatementContext } from "./antlr/JustMCFParser";
import { ScbPlayerStatementContext } from "./antlr/JustMCFParser";
import { NbtContext } from "./antlr/JustMCFParser";
import { JsonContext } from "./antlr/JustMCFParser";
import { NbtPathContext } from "./antlr/JustMCFParser";
import { JustMCFVisitor } from "./antlr/JustMCFVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

export interface namespaceInfo{
    block?: string,
    func?: string,
    storage?: string,
    bossbar?: string,
    biome?: string,
    predicate?: string,
    dimension?: string,
    item?: string,
    loot?: string,
    item_modifier?: string,
    entity?:string,
}
export interface option {
    selector?: {
        limitMode?: string,
    }
    namespace?:namespaceInfo,
    scbExpression?: {
        tempScbObjectiveName?: string,
        useConstNumberScbObjective?: boolean,
        constNumberScbObjectiveName?: string
    }
}
export class JustMCFSimplifyVisitor extends AbstractParseTreeVisitor<string[]>
    implements JustMCFVisitor<string[]> {
    protected defaultResult(): string[] {
        return []
    }

    //all mcfunction files
    private mcfunction: { [mcfunctionFileName: string]: string[] } = {};
    //all function tags
    private functionTag: { [functionTagFileName: string]: {replace:boolean,values:string[]} } = {};
    //const number will register in init.mcfunction
    private constScbInitFunc: number[] = [];

    //all namespace `namespace`
    private namespace: namespaceInfo[] = [];

    //function namespace id `namespace:resource_loaction`  + number
    private anonymousFunctionFatherNamespaceTimes: { [mcfunctionFileName: string]: number } = {};
    //function namespace stack
    private tempFunctionNamespace: string[] = [];


    private _option: option = {
        scbExpression: {
            tempScbObjectiveName: "justmcf-temp-scoreboard",
            useConstNumberScbObjective: false,
            constNumberScbObjectiveName: "justmcf-const-scoreboard"
        },
        namespace: {
            block: "minecraft",
            storage: "minecraft",
            func: "minecraft",
            biome: "minecraft",
            predicate: "minecraft",
            dimension: "minecraft",
            item: "minecraft",
            item_modifier: "minecraft",
            loot: "minecraft",
            bossbar: "minecraft",
            entity: "minecraft"
        }
    }
    public set option(val: option) {
        this._option = {
            scbExpression: {
                ...this._option.scbExpression, ...val.scbExpression
            },
            namespace: {
                ...this._option.namespace, ...val.namespace
            }
        }
        this.namespace.push({ ...this._option.namespace }) 
    }

    private tempScbTargetName: number[] = [];
    private tempScbTargetNameUsed: number[] = [];
    removeUnusedTempScbTargetName(rightTempNumber: number) {
        this.tempScbTargetName.remove(rightTempNumber)
        this.tempScbTargetNameUsed.push(rightTempNumber)
    }
    getVaildTempScbTargetName(): [number, string] {
        let tempNumber = this.tempScbTargetName.length
        if (this.tempScbTargetNameUsed.length > 0) { tempNumber = this.tempScbTargetNameUsed.pop()!! }
        this.tempScbTargetName.push(tempNumber)
        return [tempNumber, `${'temp' + tempNumber} ${this._option.scbExpression?.tempScbObjectiveName}`]
    }

    createInitFunc() {
        if (this.mcfunction["init"] === undefined) this.mcfunction["init"] = []
        for (const num of this.constScbInitFunc) {
            this.mcfunction["init"].push(`scoreboard players set ${num} ${this._option.scbExpression?.constNumberScbObjectiveName} ${num}`)
        }
    }
    printAllMcfunction(dealCommand: (code: string) => string) {
        this.createInitFunc()
        for (const mcfunctionFileName in this.mcfunction) {
            console.log(mcfunctionFileName)
            for (const command of this.mcfunction[mcfunctionFileName]) {
                console.log(`   ${dealCommand(command)}`)
                //TODO: add the commands which had deal to list
            }
        }
    }

/* Deal the Identifiers */
    // visitDataIdentifier?: ((ctx: DataIdentifierContext) => string[]) | undefined;
    visitDataStorage(ctx: DataStorageContext) { return [`storage ${this.visitAndReturnFirst(ctx.nameSpaceStorage())} ${this.visitAndReturnFirst(ctx.nbtPath())}`] }
    visitDataEntity(ctx: DataEntityContext) { return [`entity ${this.visitAndReturnFirst(ctx.selector())} ${this.visitAndReturnFirst(ctx.nbtPath())}`] }
    visitDataBlock(ctx: DataBlockContext) { return [`block ${this.visitAndReturnFirst(ctx.pos3Identifier())} ${this.visitAndReturnFirst(ctx.nbtPath())}`] }
    visitScbIdentifier(ctx: ScbIdentifierContext) { return [`${this.visitAndReturnFirst(ctx.selector())} ${this.visitAndReturnFirst(ctx.nbtName())}`] }
    visitPos3Identifier(ctx: Pos3IdentifierContext) { return [`${this.visitAndReturnFirst(ctx.pos1(0))} ${this.visitAndReturnFirst(ctx.pos1(1))} ${this.visitAndReturnFirst(ctx.pos1(2))}`] }
    visitPos2Identifier(ctx: Pos2IdentifierContext) { return [`${this.visitAndReturnFirst(ctx.pos1(0))} ${this.visitAndReturnFirst(ctx.pos1(1))}`] }
    visitPos5Identifier(ctx: Pos5IdentifierContext) { return [`${this.visitAndReturnFirst(ctx.pos1(0))} ${this.visitAndReturnFirst(ctx.pos1(1))} ${this.visitAndReturnFirst(ctx.pos1(2))} ${this.visitAndReturnFirst(ctx.pos1(3))} ${this.visitAndReturnFirst(ctx.pos1(4))}`] }
    visitPos1(ctx: Pos1Context) { return [ctx.text] }
    visitBlockIdentifier(ctx: BlockIdentifierContext) {
        let block = `${this.visitAndReturnFirst(ctx.nameSpaceBlock())}`
        if (ctx.blockstate() !== undefined) block = `${block}${this.visitAndReturnFirst(ctx.blockstate()!!)}`
        if (ctx.nbt() !== undefined) block = `${block} ${this.visitAndReturnFirst(ctx.nbt()!!)}`
        return [block]
    }
    visitBlockstate(ctx: BlockstateContext) { return [ctx.text] }
    //TODO: need to use UUID map and need environment
    visitSelector(ctx: SelectorContext) {
        if (/^@[parse]$/.test(ctx.text)) return [ctx.text]
        else return [ctx.text.replace("@", "")]
    }

/* Deal the Namespace And Names */
    visitNameSpaceWithType(namespace_type: keyof namespaceInfo, ctx: NameSpaceContext) {
        if (ctx.acceptableName() === undefined) {
            return`${this.namespace[this.namespace.length-1]!![namespace_type]}:${ctx.text}`
        }
        else { return ctx.text }
    }
    visitNameSpaceBlock(ctx: NameSpaceBlockContext) { return [this.visitNameSpaceWithType("block", ctx.nameSpace())] }
    visitNameSpaceBiome(ctx: NameSpaceBiomeContext){ return[this.visitNameSpaceWithType("biome",ctx.nameSpace())] }
    visitNameSpaceBossbar(ctx: NameSpaceBossbarContext){ return[this.visitNameSpaceWithType("bossbar",ctx.nameSpace())] }
    visitNameSpaceDim(ctx: NameSpaceDimContext){ return[this.visitNameSpaceWithType("dimension",ctx.nameSpace())] }
    visitNameSpacePredicate(ctx: NameSpacePredicateContext){ return[this.visitNameSpaceWithType("predicate",ctx.nameSpace())] }
    visitNameSpaceItem(ctx: NameSpaceItemContext){ return[this.visitNameSpaceWithType("item",ctx.nameSpace())] }
    visitNameSpaceItemModifier(ctx: NameSpaceItemModifierContext){ return[this.visitNameSpaceWithType("item_modifier",ctx.nameSpace())] }
    visitNameSpaceLoot(ctx: NameSpaceLootContext){ return[this.visitNameSpaceWithType("loot",ctx.nameSpace())] }
    visitNameSpaceFunc(ctx: NameSpaceFuncContext){ return[this.visitNameSpaceWithType("func",ctx.nameSpace())] }
    visitNameSpaceStorage(ctx: NameSpaceStorageContext){ return[this.visitNameSpaceWithType("storage",ctx.nameSpace())] }

    visitTagNameSpaceWithType(namespace_type: keyof namespaceInfo, ctx: TagNameSpaceContext) {
        return `#${this.visitNameSpaceWithType(namespace_type,ctx.nameSpace())}`
    }
    visitTagNameSpaceBlock(ctx: TagNameSpaceBlockContext){return [this.visitTagNameSpaceWithType("block",ctx.tagNameSpace())]}
    visitTagNameSpaceItem(ctx: TagNameSpaceItemContext){return [this.visitTagNameSpaceWithType("item",ctx.tagNameSpace())]}
    visitTagNameSpaceFunc(ctx: TagNameSpaceFuncContext){return [this.visitTagNameSpaceWithType("func",ctx.tagNameSpace())]}
    visitTagNameSpaceEntity(ctx: TagNameSpaceEntityContext){return [this.visitTagNameSpaceWithType("entity",ctx.tagNameSpace())]}

    visitCriterion(ctx: CriterionContext){return [ctx.text]}
    visitAcceptableName(ctx: AcceptableNameContext) { return [ctx.text] }
    visitRegisterName(ctx: RegisterNameContext) { return [ctx.text] }
    visitNbtName(ctx: NbtNameContext) { return [ctx.text] }
    visitResourceLocation(ctx: ResourceLocationContext) { return [ctx.text] }
    
/* Begin  */
    visitMcfFile(ctx: McfFileContext) {
        for (const fileStatementInner of ctx.fileStatementInner()) this.visit(fileStatementInner)
        return []
    }

/* Namespace Statement */
    visitNameSpaceStatement(ctx: NameSpaceStatementContext) {
        this.namespace.push({})
        if (ctx.acceptableName() !== undefined) {
            let key: (keyof namespaceInfo)
            for ( key in this._option.namespace) {
                this.namespace[this.namespace.length-1][key] = this.visitAndReturnFirst(ctx.acceptableName()!!)
            }
        }
        for (const setting of ctx.nameSpaceSettings()) { this.visit(setting) }
        for (const inner of ctx.nameSpaceStatementInner()) { this.visit(inner) }
        //Recover the namespace 复原命名空间，命名空间只作用在Inner里
        this.namespace.pop()
        return []
    }
    visitNameSpaceSettingsFunc(ctx: NameSpaceSettingsFuncContext) { this.namespace[this.namespace.length-1]["func"] = this.visitAndReturnFirst(ctx.acceptableName()); return [] }
    visitNameSpaceSettingsBlock(ctx: NameSpaceSettingsBlockContext){this.namespace[this.namespace.length-1]["block"] = this.visitAndReturnFirst(ctx.acceptableName()); return []}
    visitNameSpaceSettingsStorage(ctx: NameSpaceSettingsStorageContext) { this.namespace[this.namespace.length-1]["storage"] = this.visitAndReturnFirst(ctx.acceptableName()); return [] }
    visitNameSpaceSettingsBiome(ctx: NameSpaceSettingsBiomeContext){this.namespace[this.namespace.length-1]["biome"] = this.visitAndReturnFirst(ctx.acceptableName()); return []}
    visitNameSpaceSettingsBossbar(ctx: NameSpaceSettingsBossbarContext){this.namespace[this.namespace.length-1]["bossbar"] = this.visitAndReturnFirst(ctx.acceptableName()); return []}
    visitNameSpaceSettingsPredicate(ctx: NameSpaceSettingsPredicateContext){this.namespace[this.namespace.length-1]["predicate"] = this.visitAndReturnFirst(ctx.acceptableName()); return []}
    visitNameSpaceSettingsItem(ctx: NameSpaceSettingsItemContext){this.namespace[this.namespace.length-1]["item"] = this.visitAndReturnFirst(ctx.acceptableName()); return []}
    visitNameSpaceSettingsLoot(ctx: NameSpaceSettingsLootContext){this.namespace[this.namespace.length-1]["loot"] = this.visitAndReturnFirst(ctx.acceptableName()); return []}
    visitNameSpaceSettingsItemModifier(ctx: NameSpaceSettingsItemModifierContext){this.namespace[this.namespace.length-1]["item_modifier"] = this.visitAndReturnFirst(ctx.acceptableName()); return []}
    visitNameSpaceSettingsDim(ctx: NameSpaceSettingsDimContext){this.namespace[this.namespace.length-1]["dimension"] = this.visitAndReturnFirst(ctx.acceptableName()); return []}

    visitNameSpaceSettingsDefault(ctx: NameSpaceSettingsDefaultContext) {
        let key: (keyof namespaceInfo)
        for (key in this._option.namespace) {
            if(key != "func" && key != "storage")
                this.namespace[this.namespace.length-1][key] = this.visitAndReturnFirst(ctx.acceptableName())
        }
        return []
    }
    
    visitNameSpaceSettingsJustDefault(ctx: NameSpaceSettingsJustDefaultContext) {
        let key: (keyof namespaceInfo)
        for (key in this._option.namespace) {
            if(key != "func" && key !="storage")
                this.namespace[this.namespace.length-1][key] = "minecraft"
        }
        return []
    }

/* Function Tag Statement */
    visitFuncTagStatement(ctx: FuncTagStatementContext) {
        const name = this.visitAndReturnFirst(ctx.tagNameSpaceFunc())
        for (const funcTagStatementSetting of ctx.funcTagSettings()) {
            const [key, value] = this.visit(funcTagStatementSetting)
            this.functionTag[name]["replace"] = value=="true"
        }
        for (const funcTagStatementInner of ctx.funcTagStatementInner()) {
            this.functionTag[name].values.push(this.visitAndReturnFirst(funcTagStatementInner))
        }
        return []
    }
    visitFuncTagSettingsReplace(ctx: FuncTagSettingsReplaceContext) {
        //return [key,value]
        return ["replace",ctx.BOOL().text]
    }
    visitFuncTagSettingsReplaced(ctx: FuncTagSettingsReplacedContext) {
        return ["replace","true"]
    }
    visitFuncTagSIFuncS(ctx: FuncTagSIFuncSContext) {
        this.visit(ctx.funcStatement())
        return this.visit(ctx.funcStatement().nameSpaceFunc())
    }
    visitFuncTagSIFuncImproveS(ctx: FuncTagSIFuncImproveSContext) {
        this.visit(ctx.funcImproveStatement())
        return this.visit(ctx.funcImproveStatement().nameSpaceFunc())
    }
    visitFuncTagSIFuncTagS(ctx: FuncTagSIFuncTagSContext){
        this.visit(ctx.funcTagStatement())
        return  this.visit(ctx.funcTagStatement().tagNameSpaceFunc())
    }

    visitFuncStatement(ctx: FuncStatementContext) {
        const namespace = this.visitAndReturnFirst(ctx.nameSpaceFunc())
        for (const tagNameSpaceContext of ctx.tagNameSpaceFunc()) {
            const tagName = this.visitAndReturnFirst(tagNameSpaceContext)
            this.functionTag[tagName].values.push(namespace)
        }
        this.tempFunctionNamespace.push(namespace) //use for child anonymous func
        const commands: string[] = []
        for (const singleContext of ctx.statementInner()) {
            commands.pushAll(this.visit(singleContext))
        }
        this.tempFunctionNamespace.pop()
        this.mcfunction[namespace] = commands
        return []
    }

    visitExecNamedRun(ctx: ExecNamedRunContext) {
        this.visit(ctx.funcStatement())
        const namespace = this.visitAndReturnFirst(ctx.funcStatement().nameSpaceFunc())
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
        for (const singleContext of ctx.statementInner()) {
            commands.pushAll(this.visit(singleContext))
        }
        this.tempFunctionNamespace.pop()
        this.mcfunction[namespace] = commands
        return [`function ${namespace}`]
    }
    visitExecDirectRun(ctx: ExecDirectRunContext) {
        const commands = this.visit(ctx.statement())
        if (commands.length > 1) {
            let namespace = this.tempFunctionNamespace[this.tempFunctionNamespace.length - 1]
            if (this.anonymousFunctionFatherNamespaceTimes[namespace] === undefined)
                this.anonymousFunctionFatherNamespaceTimes[namespace] = 0
            else
                this.anonymousFunctionFatherNamespaceTimes[namespace] += 1
            namespace = `${namespace}/${this.anonymousFunctionFatherNamespaceTimes[namespace]}`
            this.mcfunction[namespace] = commands
            return [`function ${namespace}`]
        }
        else {
            return commands
        }
    }
    visitFuncRunStatement(ctx: FuncRunStatementContext){
        if (ctx.nameSpaceFunc() !== undefined) 
            return [`function ${this.visitAndReturnFirst(ctx.nameSpaceFunc()!!)}`]
        else 
            return [`function ${this.visitAndReturnFirst(ctx.tagNameSpaceFunc()!!)}`]
    }
    visitLeagalCommand(ctx: LeagalCommandContext) {return [ctx.text]}

/* Execute Statement */
    // visitExecStatement?: ((ctx: ExecStatementContext) => string[]) | undefined;
    // visitExecStoreChild?: ((ctx: ExecStoreChildContext) => string[]) | undefined;
    // visitExecRunChild?: ((ctx: ExecRunChildContext) => string[]) | undefined;
    // visitExecChild?: ((ctx: ExecChildContext) => string[]) | undefined;
    visitNoInExecStatementRunFunc(ctx: NoInExecStatementRunFuncContext) {
        this.visit(ctx.funcStatement())
        const namespace = this.visit(ctx.funcStatement().nameSpaceFunc())
        return [`function ${namespace}`]
    }
    visitNoInExecStatementStore(ctx: NoInExecStatementStoreContext){
        let command: string = "execute"
        for (const execStoreChildContext of ctx.execStoreChild())
            command = `${command} ${this.visitAndReturnFirst(execStoreChildContext)}`
        command = `${command} run ${this.visitAndReturnFirst(ctx.statement())}`
        return [command]
    }

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
    visitExecStoreResultScore(ctx: ExecStoreResultScoreContext) { return [`store result score ${this.visitAndReturnFirst(ctx.scbIdentifier())}`] }
    visitExecStoreSuccessScore(ctx: ExecStoreSuccessScoreContext) { return [`store success score ${this.visitAndReturnFirst(ctx.scbIdentifier())}`] }
    visitExecStoreResultData(ctx: ExecStoreResultDataContext) {
        const storeTypeContext = ctx.NumberType()
        const storeScaleContext = ctx.NUMBER()
        const storeType = storeTypeContext === undefined ? "int" :storeTypeContext.text
        const storeScale = storeScaleContext === undefined ? "1" : storeScaleContext.text
        return [`store result ${this.visitAndReturnFirst(ctx.dataIdentifier())} ${storeType} ${storeScale}`]
    }
    visitExecStoreSuccessData(ctx: ExecStoreSuccessDataContext) {
        const storeTypeContext = ctx.NumberType()
        const storeScaleContext = ctx.NUMBER()
        const storeType = storeTypeContext === undefined ? "int": storeTypeContext.text
        const storeScale = storeScaleContext === undefined ? "1" : storeScaleContext.text
        return [`store success ${this.visitAndReturnFirst(ctx.dataIdentifier())} ${storeType} ${storeScale}`]
    }
    visitExecStoreResultBossbar(ctx: ExecStoreResultBossbarContext) {return [`store result ${this.visitAndReturnFirst(ctx.nameSpaceBossbar())} ${(ctx._value.text!="max")? "value":"max"}`]}
    visitExecStoreSuccessBossbar(ctx: ExecStoreSuccessBossbarContext) {return [`store success ${this.visitAndReturnFirst(ctx.nameSpaceBossbar())} ${(ctx._value.text!="max")? "value":"max"}`]}
    visitExecAlign(ctx: ExecAlignContext) {
        const axesDefault = ctx.AcceptableName().text
        const axes = `${/x/.test(axesDefault) ? "x" : ""}${/y/.test(axesDefault) ? "y" : ""}${/z/.test(axesDefault) ? "z" : ""}`
        if (axes === "") throw new JustMCFSimplifyError("Error on execute align axes token")
        return [`align ${axes}`]
    }
    visitExecAnchored(ctx: ExecAnchoredContext) { return [`anchored ${ctx._anchor.text}`] }
    visitExecIn(ctx: ExecInContext) { return [`in ${this.visitAndReturnFirst(ctx.nameSpaceDim())}`] }
    visitExecAs(ctx: ExecAsContext) { return [`as ${this.visitAndReturnFirst(ctx.selector())}`] }
    visitExecAt(ctx: ExecAtContext) { return [`at ${this.visitAndReturnFirst(ctx.selector())}`] }
    visitExecFacingPos(ctx: ExecFacingPosContext) { return [`facing ${this.visitAndReturnFirst(ctx.pos3Identifier())}`] }
    visitExecFacingEntity(ctx: ExecFacingEntityContext) { return [`facing entity ${this.visitAndReturnFirst(ctx.selector())}`] }
    visitExecPositionedPos(ctx: ExecPositionedPosContext) { return [`positioned ${this.visitAndReturnFirst(ctx.pos3Identifier())}`] }
    visitExecPostionedAs(ctx: ExecPostionedAsContext) { return [`positioned as ${this.visitAndReturnFirst(ctx.selector())}`] }
    visitExecRotatedPos(ctx: ExecRotatedPosContext) { return [`rotated ${this.visitAndReturnFirst(ctx.pos2Identifier())}`] }
    visitExecRotatedAs(ctx: ExecRotatedAsContext) { return [`rotated as ${this.visitAndReturnFirst(ctx.selector())}`] }
    visitExecIfEntity(ctx: ExecIfEntityContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} entity ${this.visitAndReturnFirst(ctx.selector())}`] }
    visitExecIfScore(ctx: ExecIfScoreContext) {
        const operation = ctx.CompareOperation().text === "==" ? "=" : ctx.CompareOperation().text
        return [`${(ctx._cond.text!="unless")?"if":"unless"} score ${this.visitAndReturnFirst(ctx.scbIdentifier(0))} ${operation} ${this.visitAndReturnFirst(ctx.scbIdentifier(1))}`]
    }
    visitExecIfScoreMatches(ctx: ExecIfScoreMatchesContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} score ${this.visitAndReturnFirst(ctx.scbIdentifier())} matches ${this.visitAndReturnFirst(ctx.matchPart())}`] }
    visitExecPredicate(ctx: ExecPredicateContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} predicate ${this.visitAndReturnFirst(ctx.nameSpacePredicate())}`] }
    visitExecIfBlock(ctx: ExecIfBlockContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} block ${this.visitAndReturnFirst(ctx.pos3Identifier())} ${this.visitAndReturnFirst(ctx.blockIdentifier())}`] }
    visitExecIfBlocks(ctx: ExecIfBlocksContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} blocks ${this.visitAndReturnFirst(ctx.pos3Identifier(0))} ${this.visitAndReturnFirst(ctx.pos3Identifier(1))} ${this.visitAndReturnFirst(ctx.pos3Identifier(2))}`] }
    visitExecIfData(ctx: ExecIfDataContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} ${this.visitAndReturnFirst(ctx.dataIdentifier())}`] }
    visitExecIfBiome(ctx: ExecIfBiomeContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} biome ${this.visitAndReturnFirst(ctx.pos3Identifier())} ${this.visitAndReturnFirst(ctx.nameSpaceBiome())}`] }
    visitExecStore(ctx: ExecStoreContext) { return this.visit(ctx.execStoreChild()) }
    visitMatchPart(ctx: MatchPartContext) { return [ctx.text] }

/* Data Statement */
    // visitDataOperationExpression?: ((ctx: DataOperationExpressionContext) => string[]) | undefined;
    visitDataMergeStorage(ctx: DataMergeStorageContext) { return [`data merge storage ${this.visitAndReturnFirst(ctx.nameSpaceStorage())} ${this.visitAndReturnFirst(ctx.nbt())}`] }
    visitDataMergeEntity(ctx: DataMergeEntityContext) { return [`data merge entity ${this.visitAndReturnFirst(ctx.selector())} ${this.visitAndReturnFirst(ctx.nbt())}`] }
    visitDataMergeBlock(ctx: DataMergeBlockContext) { return [`data merge block ${this.visitAndReturnFirst(ctx.pos3Identifier())} ${this.visitAndReturnFirst(ctx.nbt())}`] }
    visitDataGet(ctx: DataGetContext) { return [`data get ${this.visitAndReturnFirst(ctx.dataIdentifier())}`] }
    visitDataModifyMergeValue(ctx: DataModifyMergeValueContext) { return [`data modify ${this.visitAndReturnFirst(ctx.dataIdentifier())} merge value ${this.visitAndReturnFirst(ctx.nbt())}`] }
    visitDataModifyMergeFrom(ctx: DataModifyMergeFromContext) { return [`data modify ${this.visitAndReturnFirst(ctx.dataIdentifier(0))} merge from ${this.visitAndReturnFirst(ctx.dataIdentifier(1))}`] }
    visitDataModifySetValue(ctx: DataModifySetValueContext) { return [`data modify ${this.visitAndReturnFirst(ctx.dataIdentifier())} set value ${this.visitAndReturnFirst(ctx.nbt())}`] }
    visitDataModifySetFrom(ctx: DataModifySetFromContext) { return [`data modify ${this.visitAndReturnFirst(ctx.dataIdentifier(0))} set from ${this.visitAndReturnFirst(ctx.dataIdentifier(1))}`] }
    visitDataModifyAppendValue(ctx: DataModifyAppendValueContext) { return [`data modify ${this.visitAndReturnFirst(ctx.dataIdentifier())} append value ${this.visitAndReturnFirst(ctx.nbt())}`] }
    visitDataModifyAppendFrom(ctx: DataModifyAppendFromContext) { return [`data modify ${this.visitAndReturnFirst(ctx.dataIdentifier(0))} append from ${this.visitAndReturnFirst(ctx.dataIdentifier(1))}`] }
    visitDataModifyPrependValue(ctx: DataModifyPrependValueContext) { return [`data modify ${this.visitAndReturnFirst(ctx.dataIdentifier())} prepend value ${this.visitAndReturnFirst(ctx.nbt())}`] }
    visitDataModifyPrependFrom(ctx: DataModifyPrependFromContext) { return [`data modify ${this.visitAndReturnFirst(ctx.dataIdentifier(0))} prepend from ${this.visitAndReturnFirst(ctx.dataIdentifier(1))}`] }
    visitDataModifyInsertValue(ctx: DataModifyInsertValueContext) { return [`data modify ${this.visitAndReturnFirst(ctx.dataIdentifier())} insert value ${this.visitAndReturnFirst(ctx.nbt())}`] }
    visitDataModifyInsertFrom(ctx: DataModifyInsertFromContext) { return [`data modify ${this.visitAndReturnFirst(ctx.dataIdentifier(0))} insert from ${this.visitAndReturnFirst(ctx.dataIdentifier(1))}`] }
    visitDataRemove(ctx: DataRemoveContext) { return [`data remove ${this.visitAndReturnFirst(ctx.dataIdentifier())}`] }

    visitDataStatement(ctx: DataStatementContext) {
        const commands:string[] = [];
        for (const dataOperationExpressionContext of ctx.dataOperationExpression()) {
            commands.pushAll(this.visit(dataOperationExpressionContext))
        }
        return commands
    }
/* Scb Statement */
    // visitScbOperationExpression?: ((ctx: ScbOperationExpressionContext) => string[]) | undefined;
    visitScbGet(ctx: ScbGetContext) { return [`scoreboard players get ${this.visitAndReturnFirst(ctx.scbIdentifier())}`] }
    visitScbAdd(ctx: ScbAddContext) { return [`scoreboard players add ${this.visitAndReturnFirst(ctx.scbIdentifier())} ${this.visitAndReturnFirst(ctx.NUMBER())}`] }
    visitScbRemove(ctx: ScbRemoveContext) { return [`scoreboard players remove ${this.visitAndReturnFirst(ctx.scbIdentifier())} ${this.visitAndReturnFirst(ctx.NUMBER())}`] }
    visitScbSet(ctx: ScbSetContext) { return [`scoreboard players set ${this.visitAndReturnFirst(ctx.scbIdentifier())} ${this.visitAndReturnFirst(ctx.NUMBER())}`] }
    visitScbOptAddAssign(ctx: ScbOptAddAssignContext) { return [`scoreboard players operation ${this.visitAndReturnFirst(ctx.scbIdentifier(0))} += ${this.visitAndReturnFirst(ctx.scbIdentifier(1))}`] }
    visitScbOptSubAssign(ctx: ScbOptSubAssignContext) { return [`scoreboard players operation ${this.visitAndReturnFirst(ctx.scbIdentifier(0))} -= ${this.visitAndReturnFirst(ctx.scbIdentifier(1))}`] }
    visitScbOptMulAssign(ctx: ScbOptMulAssignContext) { return [`scoreboard players operation ${this.visitAndReturnFirst(ctx.scbIdentifier(0))} *= ${this.visitAndReturnFirst(ctx.scbIdentifier(1))}`] }
    visitScbOptDivAssign(ctx: ScbOptDivAssignContext) { return [`scoreboard players operation ${this.visitAndReturnFirst(ctx.scbIdentifier(0))} /= ${this.visitAndReturnFirst(ctx.scbIdentifier(1))}`] }
    visitScbOptModAssign(ctx: ScbOptModAssignContext) { return [`scoreboard players operation ${this.visitAndReturnFirst(ctx.scbIdentifier(0))} %= ${this.visitAndReturnFirst(ctx.scbIdentifier(1))}`] }
    visitScbOptExcFunc(ctx: ScbOptExcFuncContext) { return [`scoreboard players operation ${this.visitAndReturnFirst(ctx.scbIdentifier(0))} >< ${this.visitAndReturnFirst(ctx.scbIdentifier(1))}`] }
    visitScbOptMinFunc(ctx: ScbOptMinFuncContext) { return [`scoreboard players operation ${this.visitAndReturnFirst(ctx.scbIdentifier(0))} << ${this.visitAndReturnFirst(ctx.scbIdentifier(1))}`] }
    visitScbOptMaxFunc(ctx: ScbOptMaxFuncContext) { return [`scoreboard players operation ${this.visitAndReturnFirst(ctx.scbIdentifier(0))} >> ${this.visitAndReturnFirst(ctx.scbIdentifier(1))}`] }
    visitScbOptAssign(ctx: ScbOptAssignContext) { return [`scoreboard players operation ${this.visitAndReturnFirst(ctx.scbIdentifier(0))} = ${this.visitAndReturnFirst(ctx.scbIdentifier(1))}`] }
    visitScbReset(ctx: ScbResetContext) { return [`scoreboard players reset ${this.visitAndReturnFirst(ctx.scbIdentifier())}`] } //TODO: the objective is not required
    visitScbOptExpression(ctx: ScbOptExpressionContext) {
        this.tempScbTargetName = []
        const res = this.visit(ctx.scbSingleOperationExpression())
        this.tempScbTargetName = []
        return res.slice(2).concat([`scoreboard players operation ${this.visitAndReturnFirst(ctx.scbIdentifier())} = ${res[1]}`])
    }

    // visitScbSingleOperationExpression?: ((ctx: ScbSingleOperationExpressionContext) => string[]) | undefined;

    visitScbOptExpressionUtils(ctx: ScbFuncExpressionContext | ScbOptMulDivModExpressionContext | ScbOptAddSubExpressionContext) {
        const left = this.visit(ctx.scbSingleOperationExpression(0) as ScbSingleOperationExpressionContext)
        const right = this.visit(ctx.scbSingleOperationExpression(1) as ScbSingleOperationExpressionContext)
        let op = ""
        let couldExchange = false
        switch (ctx._op.text) {
            case "<<": op = "<"; couldExchange = true; break;
            case ">>": op = ">"; couldExchange = true; break;
            case "+": op = "+="; couldExchange = true; break;
            case "-": op = "-="; break;
            case "*": op = "*="; couldExchange = true; break;
            case "/": op = "/="; break;
            case "%": op = "%="; break;
            default: throw new JustMCFSimplifyError("error operation symbol")
        }
        const commands = []
        const leftTempNumber = Number.parseInt(left[0])
        const rightTempNumber = Number.parseInt(right[0])
        const isOriginalId = (i: number) => i == -1 // -1 means using original id
        let [resTempNumber, resScbId] = [leftTempNumber, left[1]]
        if (isOriginalId(leftTempNumber)) {
            if (!isOriginalId(rightTempNumber) && couldExchange == true) {
                [resTempNumber, resScbId] = [rightTempNumber, right[1]]
                commands.push(`scoreboard players operation ${right[1]} ${op} ${left[1]}`)
            }
            else {
                [resTempNumber, resScbId] = this.getVaildTempScbTargetName()
                commands.push(`scoreboard players operation ${resScbId} = ${left[1]}`)
                commands.push(`scoreboard players operation ${resScbId} ${op} ${right[1]}`)
            }
        }
        else {
            if (!isOriginalId(rightTempNumber)) {
                this.removeUnusedTempScbTargetName(rightTempNumber) //release right node temp name which is not use
            }
            commands.push(`scoreboard players operation ${left[1]} ${op} ${right[1]}`)
        }

        //return [ number of temp,name of scb, ..commands]
        return [`${resTempNumber}`, `${resScbId}`].concat(left.slice(2)).concat(right.slice(2)).concat(commands)
    }
    visitScbFuncExpression(ctx: ScbFuncExpressionContext) { return this.visitScbOptExpressionUtils(ctx) }
    visitScbOptMulDivModExpression(ctx: ScbOptMulDivModExpressionContext) { return this.visitScbOptExpressionUtils(ctx) }
    visitScbOptAddSubExpression(ctx: ScbOptAddSubExpressionContext) { return this.visitScbOptExpressionUtils(ctx) }
    visitScbTempNumberExpression(ctx: ScbTempNumberExpressionContext) {
        if (this._option?.scbExpression?.useConstNumberScbObjective) {
            if (!this.constScbInitFunc.includes(Number.parseInt(ctx.NUMBER().text))) this.constScbInitFunc.push(Number.parseInt(ctx.NUMBER().text))
            return [`${-1}`, `${ctx.NUMBER().text} ${this._option.scbExpression.constNumberScbObjectiveName}`]
        }
        else {
            const [tempNumber, tempId] = this.getVaildTempScbTargetName()
            return [`${tempNumber}`, `${tempId}`, `scoreboard players set ${tempId} ${ctx.NUMBER().text}`]
        }
    }
    visitScbIdExpression(ctx: ScbIdExpressionContext) {
        return [`${-1}`, `${this.visit(ctx.scbIdentifier())}`]
    }
    visitScbParenExpression(ctx: ScbParenExpressionContext) { return this.visit(ctx.scbSingleOperationExpression()) }

/* Scb Statement {} */
    visitScbPlayerStatement(ctx: ScbPlayerStatementContext) {
        const commands: string[] = [];
        for (const scbOperationExpressionContext of ctx.scbPlayerStatementInner()) {
            commands.pushAll(this.visit(scbOperationExpressionContext))
        }
        return commands
    }
    visitScbPlayerSIScbList(ctx: ScbPlayerSIScbListContext) {
        if (ctx.selector() !== undefined) 
            return [`scoreboard players list ${this.visitAndReturnFirst(ctx.selector()!!)}`]
        else return [`scoreboard objectives list`]
    }

/* Scb Objectives Statement */
    visitScbObjSDeclareWithName(ctx: ScbObjSDeclareWithNameContext) {
        const commands: string[] = [];
        const objectiveName = this.visitAndReturnFirst(ctx.acceptableName())
        const criterion = ctx.criterion()===undefined? 'dummy': this.visitAndReturnFirst(ctx.criterion()!!)
        commands.push(`scoreboard objectives add ${objectiveName} ${criterion} ${this.visitAndReturnFirst(ctx.json())}`)
        for (const scbStatementInnerContext of ctx.scbStatementInner()) {
            const command = this.visitAndReturnFirst(scbStatementInnerContext)
            commands.push(command.replace("$$",objectiveName))
        }
        return commands
    }
    visitScbObjSDeclareSingle(ctx: ScbObjSDeclareSingleContext) {return [`scoreboard objectives add ${this.visitAndReturnFirst(ctx.acceptableName())} ${this.visitAndReturnFirst(ctx.criterion())}`]}
    visitScbObjSDeclareDefault(ctx: ScbObjSDeclareDefaultContext) {
        const commands: string[] = [];
        const objectiveName = this.visitAndReturnFirst(ctx.acceptableName())
        const criterion = ctx.criterion()===undefined? 'dummy': this.visitAndReturnFirst(ctx.criterion()!!)
        commands.push(`scoreboard objectives add ${objectiveName} ${criterion}`)
        for (const scbStatementInnerContext of ctx.scbStatementInner()) {
            const command = this.visitAndReturnFirst(scbStatementInnerContext)
            commands.push(command.replace("$$",objectiveName))
        }
        return commands
    }
    visitScbObjSOperation(ctx: ScbObjSOperationContext) {
        const commands: string[] = [];
        const objectiveName = this.visitAndReturnFirst(ctx.acceptableName())
        for (const scbStatementInnerContext of ctx.scbStatementInner()) {
            const command = this.visitAndReturnFirst(scbStatementInnerContext)
            commands.push(command.replace("$$",objectiveName))
        }
        return commands
    }
    visitScbSIRemove(ctx: ScbSIRemoveContext) { return ["scoreboard objectives remove $$"] }
    visitScbSIDisplay(ctx: ScbSIDisplayContext) {
        const pos = this.visitAndReturnFirst(ctx.acceptableName());
        const test = /^(list|sidebar|(sidebar\.team\.(black|dark_blue|dark_green|dark_aqua|dark_red|dark_purple|gold|gray|dark_gray|blue|green|aqua|red|light_purple|yellow|white)))$/.test(pos)
        if(!test) throw new JustMCFSimplifyError("scoreboard display position error")
        return [`scoreboard objectives setdisplay ${pos} $$`]
    }
    visitScbSIRendertype(ctx: ScbSIRendertypeContext){return [`scoreboard objectives modify $$ rendertype ${ctx._type.text}}`]}
    visitScbSIDisplayname(ctx: ScbSIDisplaynameContext){return [`scoreboard objectives modify $$ displayname ${this.visitAndReturnFirst(ctx.json())}`]}

/* Bossbar Statement */
    
    visitBossbarSDeclare(ctx: BossbarSDeclareContext) {
        const commands: string[] = [];
        const namespace = this.visitAndReturnFirst(ctx.nameSpaceBossbar())
        commands.push(`bossbar add ${namespace} ${this.visitAndReturnFirst(ctx.json())}`)
        for (const bossbarStatementInnerContext of ctx.bossbarStatementInner()) {
            const command = this.visitAndReturnFirst(bossbarStatementInnerContext)
            commands.push(command.replace("$$",namespace))
        }
        return commands
    }
    visitBossbarSOperation(ctx: BossbarSOperationContext) {
        const commands: string[] = [];
        const namespace = this.visitAndReturnFirst(ctx.nameSpaceBossbar())
        for (const bossbarStatementInnerContext of ctx.bossbarStatementInner()) {
            const command = this.visitAndReturnFirst(bossbarStatementInnerContext)
            commands.push(command.replace("$$",namespace))
        }
        return commands
    }
    visitBossbarSIGet(ctx: BossbarSIGetContext) { return [`bossbar get $$ ${ctx._type.text}`] }
    visitBossbarSIRemove(ctx: BossbarSIRemoveContext){return [`bossbar remove $$`]}
    visitBossbarSISetColor(ctx: BossbarSISetColorContext) { return [`bossbar set $$ color ${ctx._color}`] }
    visitBossbarSISetMax(ctx: BossbarSISetMaxContext) { return [`bossbar set $$ max ${ctx.NUMBER().text}`] }
    visitBossbarSISetName(ctx: BossbarSISetNameContext) { return [`bossbar set $$ name ${this.visitAndReturnFirst(ctx.json())}`] }
    visitBossbarSISetPlayer(ctx: BossbarSISetPlayerContext) { return [`bossbar set $$ players ${this.visitAndReturnFirst(ctx.selector())}`] }
    visitBossbarSISetPlayerNull(ctx: BossbarSISetPlayerNullContext) { return [`bossbar set $$ players`] }
    visitBossbarSISetStyle(ctx: BossbarSISetStyleContext) { return [`bossbar set $$ style ${ctx._style}`] }
    visitBossbarSISetValue(ctx: BossbarSISetValueContext) { return [`bossbar set $$ value ${ctx.NUMBER().text}`] }
    visitBossbarSISetVisible(ctx: BossbarSISetVisibleContext) { return [`bossbar set $$ visible ${ctx._bool.text}`] }
    visitBossbarOpExprGet(ctx: BossbarOpExprGetContext) { return [`bossbar get ${this.visitAndReturnFirst(ctx.nameSpaceBossbar())} ${ctx._type.text===undefined?"value":ctx._type.text}`] }
    visitBossbarOpExprAssignValue(ctx: BossbarOpExprAssignValueContext) { return [`bossbar set ${this.visitAndReturnFirst(ctx.nameSpaceBossbar())} value ${ctx.NUMBER().text}`] }
    visitBossbarOpExprAssignMax(ctx: BossbarOpExprAssignMaxContext) { return [`bossbar set ${this.visitAndReturnFirst(ctx.nameSpaceBossbar())} max ${ctx.NUMBER().text}`] }

/* Title Statement */
    
    visitTitleSCompound(ctx: TitleSCompoundContext) {
        const commands: string[] = [];
        for (const titleStatementInnerContext of ctx.titleStatementInner())
            commands.pushAll(this.visit(titleStatementInnerContext))
        return commands
    }
    visitTitleSSelectorCompound(ctx: TitleSSelectorCompoundContext) {
        const commands: string[] = [];
        const selector = this.visitAndReturnFirst(ctx.selector())
        for (const titleSelectorStatementInnerContext of ctx.titleSelectorStatementInner()) {
            const command = this.visitAndReturnFirst(titleSelectorStatementInnerContext)
            commands.push(command.replace("$$",selector))
        }
        return commands
    }
    visitTitleSISelectorSingle(ctx: TitleSISelectorSingleContext) {
        const command = this.visitAndReturnFirst(ctx.titleIndependentStatementInner())
        return [ command.replace("$$",this.visitAndReturnFirst(ctx.selector())) ]
    }
    visitTitleSISelectorCompound(ctx: TitleSISelectorCompoundContext) {
        const commands: string[] = [];
        const selector = this.visitAndReturnFirst(ctx.selector())
        for (const titleSelectorStatementInnerContext of ctx.titleSelectorStatementInner()) {
            const command = this.visitAndReturnFirst(titleSelectorStatementInnerContext)
            commands.push(command.replace("$$",selector))
        }
        return commands
    }
    visitTitleSSIJson(ctx: TitleSSIJsonContext) { return [`title $$ ${ctx._pos.text} ${this.visitAndReturnFirst(ctx.json())}`] }
    visitTitleSSIClear(ctx: TitleSSIClearContext) { return ["title $$ clear"] }
    visitTitleSSIReset(ctx: TitleSSIResetContext) { return ["title $$ reset"] }
    visitTitleSSITimes(ctx: TitleSSITimesContext) { return [`title $$ times ${ctx.NUMBER(0).text} ${ctx.NUMBER(1).text} ${ctx.NUMBER(2).text}`] }
    visitTitleISIJson(ctx: TitleISIJsonContext) { return [`title $$ ${ctx._pos.text} ${this.visitAndReturnFirst(ctx.json())}`] }
    visitTitleISIClear(ctx: TitleISIClearContext) { return ["title $$ clear"] }
    visitTitleISIReset(ctx: TitleISIResetContext) { return ["title $$ reset"] }
    visitTitleISITimes(ctx: TitleISITimesContext){return [`title $$ times ${ctx.NUMBER(0).text} ${ctx.NUMBER(1).text} ${ctx.NUMBER(2).text}`]}

/* Display Statement */

    visitDisplaySCompound(ctx: DisplaySCompoundContext) {return []}
    visitDisplaySSelectorCompound(ctx: DisplaySSelectorCompoundContext) {return []}
    visitDisplaySIScb(ctx: DisplaySIScbContext) {return []}
    visitDisplaySIBossbar(ctx: DisplaySIBossbarContext) {return []}
    visitDisplaySISelectorSingle(ctx: DisplaySISelectorSingleContext) {return []}
    visitDisplaySISelectorCompound(ctx: DisplaySISelectorCompoundContext) {return []}
    
    //visitDisplayISITitleSingle(ctx: DisplayISITitleSingleContext) { return [] }
    visitDisplayISITitleCompound(ctx: DisplayISITitleCompoundContext) {
        const commands: string[] = [];
        for (const titleSelectorStatementInnerContext of ctx.titleSelectorStatementInner()) {
            commands.push(this.visitAndReturnFirst(titleSelectorStatementInnerContext))
        }
        return commands
    }
    visitDisplayISIText(ctx: DisplayISITextContext) {return [`tellraw $$ ${this.visitAndReturnFirst(ctx.json())}`]}
    visitDisplayISIBossbar(ctx: DisplayISIBossbarContext) {return [`bossbar set ${this.visitAndReturnFirst(ctx.nameSpaceBossbar())} players $$`]}
    
    
    visitItemSCompound(ctx: ItemSCompoundContext) { return [] }
    visitItemSSelectorCompound(ctx: ItemSSelectorCompoundContext) {return []}
    visitLootSCompound(ctx: LootSCompoundContext) {return []}
    visitLootSSelectorCompound(ctx: LootSSelectorCompoundContext) {return []}
    visitLootSIInsert(ctx: LootSIInsertContext) {return []}
    visitLootSISpawn(ctx: LootSISpawnContext) {return []}
    visitLootSIReplaceBlock(ctx: LootSIReplaceBlockContext) {return []}
    visitLootSIGive(ctx: LootSIGiveContext) {return []}
    visitLootSIReplaceEntity(ctx: LootSIReplaceEntityContext) {return []}
    visitLootSISelectorNest(ctx: LootSISelectorNestContext) {return []}
    visitLootSourceFishHand(ctx: LootSourceFishHandContext) {return []}
    visitLootSourceFishTool(ctx: LootSourceFishToolContext) {return []}
    visitLootSourceLoot(ctx: LootSourceLootContext) {return []}
    visitLootSourceKill(ctx: LootSourceKillContext) {return []}
    visitLootSourceMineHand(ctx: LootSourceMineHandContext) {return []}
    visitLootSourceMineTool(ctx: LootSourceMineToolContext) {return []}
    visitItemSIGiveAndClear(ctx: ItemSIGiveAndClearContext) {return []}
    visitItemSIEntity(ctx: ItemSIEntityContext) {return []}
    visitItemSIBlock(ctx: ItemSIBlockContext) {return []}
    visitItemSILootInner(ctx: ItemSILootInnerContext) {return []}
    visitItemSISelectorNest(ctx: ItemSISelectorNestContext) {return []}
    visitItemSSIGiveAndClear(ctx: ItemSSIGiveAndClearContext) {return []}
    visitItemSSIItem(ctx: ItemSSIItemContext) {return []}
    visitItemSSILootInner(ctx: ItemSSILootInnerContext) {return []}
    visitItemISIReplaceWith(ctx: ItemISIReplaceWithContext) {return []}
    visitItemISIReplaceFromEntity(ctx: ItemISIReplaceFromEntityContext) {return []}
    visitItemISIReplaceFromBlock(ctx: ItemISIReplaceFromBlockContext) {return []}
    visitItemISIModify(ctx: ItemISIModifyContext) {return []}
    visitGiveISI(ctx: GiveISIContext) {return []}
    visitClearISI(ctx: ClearISIContext) {return []}
    
    
    visitAttrSCompound(ctx: AttrSCompoundContext) { return [] }
    visitAttrSSelector(ctx: AttrSSelectorContext) {return []}
    visitAttrSISingle(ctx: AttrSISingleContext) {return []}
    visitAttrSISelectorCompound(ctx: AttrSISelectorCompoundContext) {return []}
    visitAttrISIGet(ctx: AttrISIGetContext) {return []}
    visitAttrISIGetBase(ctx: AttrISIGetBaseContext) {return []}
    visitAttrISISetBase(ctx: AttrISISetBaseContext) {return []}
    visitAttrISIModifierAdd(ctx: AttrISIModifierAddContext) {return []}
    visitAttrISIModifierRemove(ctx: AttrISIModifierRemoveContext) {return []}
    visitAttrISIModifierGet(ctx: AttrISIModifierGetContext) {return []}
    
    
    visitEntitySDeclarePlayer(ctx: EntitySDeclarePlayerContext) { return [] }
    visitEntitySDeclare(ctx: EntitySDeclareContext) {return []}
    visitEntitySCompound(ctx: EntitySCompoundContext) {return []}
    visitEntitySSelectorCompound(ctx: EntitySSelectorCompoundContext) {return []}
    
    visitTagISIAdd(ctx: TagISIAddContext) { return [] }
    visitTagISIRemove(ctx: TagISIRemoveContext) {return []}
    visitTagISIList(ctx: TagISIListContext) {return []}
    
    visitEffectISIGive(ctx: EffectISIGiveContext) { return [] }
    visitEffectISIClear(ctx: EffectISIClearContext) {return []}
    visitEffectISIClearSp(ctx: EffectISIClearSpContext) {return []}
    visitEffectISIClearAll(ctx: EffectISIClearAllContext) {return []}
    
    visitTpISIDestination(ctx: TpISIDestinationContext) { return [] }
    visitTpISIPos(ctx: TpISIPosContext) {return []}
    visitTpISIRotated(ctx: TpISIRotatedContext) {return []}
    visitTpISIRotatedDiv(ctx: TpISIRotatedDivContext) {return []}
    visitTpISIFacing(ctx: TpISIFacingContext) {return []}
    visitTpISIFacingEntity(ctx: TpISIFacingEntityContext) {return []}
    
    visitEntityISIGiveAndClear(ctx: EntityISIGiveAndClearContext) { return [] }
    visitEntityISIKill(ctx: EntityISIKillContext) {return []}
    visitEntityISITag(ctx: EntityISITagContext) {return []}
    visitEntityISIEffect(ctx: EntityISIEffectContext) {return []}
    visitEntityISITp(ctx: EntityISITpContext) {return []}
    visitEntityISITitleCompound(ctx: EntityISITitleCompoundContext) {return []}
    visitEntityISIDisplayCompound(ctx: EntityISIDisplayCompoundContext) {return []}
    visitEntityISIDisplaySingle(ctx: EntityISIDisplaySingleContext) {return []}
    visitEntityISIItemSingle(ctx: EntityISIItemSingleContext) {return []}
    visitEntityISILootGiveSingle(ctx: EntityISILootGiveSingleContext) {return []}
    visitEntityISILootSingle(ctx: EntityISILootSingleContext) {return []}
    visitEntityISIItemCompound(ctx: EntityISIItemCompoundContext) {return []}
    visitEntityISILootCompound(ctx: EntityISILootCompoundContext) {return []}
    visitEntityISIAttrSingle(ctx: EntityISIAttrSingleContext) {return []}
    visitEntityISIAttrCompound(ctx: EntityISIAttrCompoundContext) {return []}
    visitEntityISIExec(ctx: EntityISIExecContext) {return []}
    visitEntitySIEntityExpression(ctx: EntitySIEntityExpressionContext) {return []}
    visitEntitySISelectorCompound(ctx: EntitySISelectorCompoundContext) {return []}
    
    visitBlockSSetblock(ctx: BlockSSetblockContext) { return [] }
    visitBlockSFill(ctx: BlockSFillContext) {return []}
    visitBlockSFillReplace(ctx: BlockSFillReplaceContext) {return []}
    visitBlockSClone(ctx: BlockSCloneContext) {return []}
    visitBlockSCloneFiltered(ctx: BlockSCloneFilteredContext) {return []}


    visitNbt(ctx: NbtContext) { return [ctx.text.replace("n{", "{").replace("n[", "[")] }
    visitJson(ctx: JsonContext) { return [ctx.text.replace("j{", "{").replace("j[", "[")] }
    visitNbtPath(ctx: NbtPathContext) { return [ctx.text] }
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

class JustMCFSimplifyError extends Error {
    constructor(message: string) {
        super(message);
    }
}

