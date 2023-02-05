import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { FuncTagSettingsReplaceContext, FuncTagSettingsReplacedContext, FuncTagSIFuncImproveSContext, FuncTagSIFuncSContext, FuncTagSIFuncTagSContext, NameSpaceBiomeContext, NameSpaceBlockContext, NameSpaceBossbarContext, NameSpaceDimContext, NameSpaceFuncContext, NameSpaceItemContext, NameSpaceItemModifierContext, NameSpaceLootContext, NameSpacePredicateContext, NameSpaceSettingsBiomeContext, NameSpaceSettingsBossbarContext, NameSpaceSettingsDefaultContext, NameSpaceSettingsDimContext, NameSpaceSettingsItemContext, NameSpaceSettingsItemModifierContext, NameSpaceSettingsJustDefaultContext, NameSpaceSettingsLootContext, NameSpaceSettingsPredicateContext, NameSpaceSettingsStorageContext, NameSpaceStorageContext, TagNameSpaceBlockContext, TagNameSpaceContext, TagNameSpaceEntityContext, TagNameSpaceFuncContext, TagNameSpaceItemContext, ScbPlayerSIScbListContext, ScbObjSDeclareSingleContext, CriterionContext, BossbarSDeclareContext, BossbarSOperationContext, BossbarSIGetContext, BossbarSISetColorContext, BossbarSISetMaxContext, BossbarSISetNameContext, BossbarSISetPlayerContext, BossbarSISetPlayerNullContext, BossbarSISetStyleContext, BossbarSISetValueContext, BossbarSISetVisibleContext, BossbarOpExprGetContext, BossbarOpExprAssignValueContext, BossbarOpExprAssignMaxContext, TitleSCompoundContext, BossbarSIRemoveContext, BossbarStatementInnerContext, TitleSSelectorCompoundContext, TitleSISelectorSingleContext, TitleSISelectorCompoundContext, TitleSSIJsonContext, TitleSSIClearContext, TitleSSIResetContext, TitleSSITimesContext, TitleISIJsonContext, TitleISIClearContext, TitleISIResetContext, TitleISITimesContext, TitleSelectorStatementInnerContext, DisplaySCompoundContext, AttrISIGetBaseContext, AttrISIGetContext, AttrISIModifierAddContext, AttrISIModifierGetContext, AttrISIModifierRemoveContext, AttrISISetBaseContext, AttrSCompoundContext, AttrSISelectorCompoundContext, AttrSISingleContext, AttrSSelectorCompoundContext, BlockSICloneContext, BlockSICloneFilteredContext, BlockSIFillContext, BlockSIFillReplaceContext, BlockSISetblockContext, ClearISIContext, DisplayISIBossbarContext, DisplayISITextContext, DisplayISITitleCompoundContext, DisplayISITitleSingleContext, DisplaySIBossbarContext, DisplaySIScbContext, DisplaySISelectorCompoundContext, DisplaySISelectorSingleContext, DisplaySSelectorCompoundContext, EffectISIClearAllContext, EffectISIClearContext, EffectISIGiveSpContext, EffectISIGiveContext, EntityISIAttrCompoundContext, EntityISIAttrSingleContext, EntityISIDisplayCompoundContext, EntityISIDisplaySingleContext, EntityISIEffectContext, EntityISIExecContext, EntityISIGiveAndClearContext, EntityISIItemCompoundContext, EntityISIItemSingleContext, EntityISIKillContext, EntityISILootCompoundContext, EntityISILootGiveSingleContext, EntityISILootSingleContext, EntityISITagContext, EntityISITitleCompoundContext, EntityISITpContext, EntitySCompoundContext, EntitySDeclareContext, EntitySDeclarePlayerContext, EntitySIEntityExpressionContext, EntitySISelectorCompoundContext, EntitySSelectorCompoundContext, GiveISIContext, ItemISIModifyContext, ItemISIReplaceFromBlockContext, ItemISIReplaceFromEntityContext, ItemISIReplaceWithContext, ItemSCompoundContext, ItemSIBlockContext, ItemSIEntityContext, ItemSIGiveAndClearContext, ItemSILootInnerContext, ItemSISelectorNestContext, ItemSSelectorCompoundContext, ItemSSIGiveAndClearContext, ItemSSIItemContext, ItemSSILootInnerContext, LootSCompoundContext, LootSIGiveContext, LootSIInsertContext, LootSIReplaceBlockContext, LootSIReplaceEntityContext, LootSISelectorNestContext, LootSISpawnContext, LootSourceFishHandContext, LootSourceFishToolContext, LootSourceKillContext, LootSourceLootContext, LootSourceMineHandContext, LootSourceMineToolContext, LootSSelectorCompoundContext, TagISIAddContext, TagISIListContext, TagISIRemoveContext, TpISIDestinationContext, TpISIFacingContext, TpISIFacingEntityContext, TpISIPosContext, TpISIRotatedContext, TpISIRotatedDivContext, LootIndependentStatementInnerGiveContext, LootIndependentStatementInnerReplaceEntityContext, Item_slotContext, Item_predicateContext, SnbtContext, Block_predicateContext, BlockStatementContext, NameSpaceEntityContext, NameSpaceSettingsEntityContext, EntitySDeclareWithNameContext, EntityDeclareSITagContext, ExistExpressionExecContext, AcceptableNameContext, BlockIdentifierContext, BlockstateContext, DataBlockContext, DataEntityContext, DataGetContext, DataMergeBlockContext, DataMergeEntityContext, DataMergeStorageContext, DataModifyAppendFromContext, DataModifyAppendValueContext, DataModifyInsertFromContext, DataModifyInsertValueContext, DataModifyMergeFromContext, DataModifyMergeValueContext, DataModifyPrependFromContext, DataModifyPrependValueContext, DataModifySetFromContext, DataModifySetValueContext, DataRemoveContext, DataStatementContext, DataStorageContext, ExecAlignContext, ExecAnchoredContext, ExecAnonymousRunContext, ExecAsContext, ExecAtContext, ExecDirectRunContext, ExecFacingEntityContext, ExecFacingPosContext, ExecIfBiomeContext, ExecIfBlockContext, ExecIfBlocksContext, ExecIfDataContext, ExecIfEntityContext, ExecIfScoreContext, ExecIfScoreMatchesContext, ExecInContext, ExecNamedRunContext, ExecPositionedPosContext, ExecPostionedAsContext, ExecPredicateContext, ExecRotatedAsContext, ExecRotatedPosContext, ExecStoreContext, ExecStoreResultBossbarContext, ExecStoreResultDataContext, ExecStoreResultScoreContext, ExecStoreSuccessBossbarContext, ExecStoreSuccessDataContext, ExecStoreSuccessScoreContext, ExecWithoutRunOrChildContext, ExecWithRunOrChildContext, ExistExpressionAndContext, ExistExpressionBitAndContext, ExistExpressionBitOrContext, ExistExpressionFalseContext, ExistExpressionIdContext, ExistExpressionNotContext, ExistExpressionOrContext, ExistExpressionTrueContext, FuncRunStatementContext, FuncStatementContext, FuncTagStatementContext, JsonContext, LeagalCommandContext, MatchPartContext, McfFileContext, NameSpaceContext, NameSpaceSettingsBlockContext, NameSpaceSettingsFuncContext, NameSpaceStatementContext, NbtContext, NbtNameContext, NbtPathContext, NoInExecStatementRunFuncContext, NoInExecStatementStoreContext, Pos1Context, Pos2IdentifierContext, Pos3IdentifierContext, Pos5IdentifierContext, RegisterNameContext, ResourceLocationContext, ScbAddContext, ScbFuncExpressionContext, ScbGetContext, ScbIdentifierContext, ScbIdExpressionContext, ScbObjSDeclareDefaultContext, ScbObjSDeclareWithNameContext, ScbObjSOperationContext, ScbOptAddAssignContext, ScbOptAddSubExpressionContext, ScbOptAssignContext, ScbOptDivAssignContext, ScbOptExcFuncContext, ScbOptExpressionContext, ScbOptMaxFuncContext, ScbOptMinFuncContext, ScbOptModAssignContext, ScbOptMulAssignContext, ScbOptMulDivModExpressionContext, ScbOptSubAssignContext, ScbParenExpressionContext, ScbPlayerStatementContext, ScbRemoveContext, ScbResetContext, ScbSetContext, ScbSIDisplayContext, ScbSIDisplaynameContext, ScbSingleOperationExpressionContext, ScbSIRemoveContext, ScbSIRendertypeContext, ScbTempNumberExpressionContext, SelectorContext, WhileStatementExecContext, WhileStatementExistContext, IfStatementContext, ForStatementContext, DataSCompoundContext, DataSIdentifierCompoundContext, DataStorageWithEnvContext, DataStorageLocalContext, FuncImproveStatementContext, FuncImproveParamContext, YeildStatementContext, FuncImproveRunExpressionContext, ExisitExpressionFuncRunContext, FuncImproveRunStatementContext, DataAssignExistExpressionContext, ExistExpressionParenContext, InterfaceStatementContext, InterfaceSIdentifierContext, InterfaceSNamespaceContext, ExistExpressionContext, IfElseSIfSContext, DataMergeContext, DataOperationExpressionContext, DataIdentifierContext, BoolValueContext, NumberTypeContext, ScbCompareNumberContext, PlayerNameContext, FuncTagSIFuncRunSContext } from './antlr/JustMCFParser';
import { JustMCFVisitor } from "./antlr/JustMCFVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { UUID } from './lib/UUIDUtils';
import { JustMCFResult, namespaceInfo, option } from './JustMCFResult';
import { toSnakeCase } from 'lib/StringUtils';

export interface improveFunctionType{
    namespace: string,
    inputType: { name: string, type: string }[],
    outputType: string
}

export class JustMCFSimplifyVisitor extends AbstractParseTreeVisitor<string[]>
    implements JustMCFVisitor<string[]> {
    protected defaultResult(): string[] {
        return []
    }

    //all mcfunction files
    private mcfunctions: { [mcfunctionFileName: string]: string[] } = {};
    addNewFunction(namespace: string, getCommands: () => string[], flat:boolean = true) {
        this.tempFunctionNamespaceIdStack.push(namespace)
        this.mcfunctions[namespace] = getCommands()
        this.tempFunctionNamespaceIdStack.pop()
        if (this.getIsUsedExistExpressionNow()) {
            this.mcfunctions[namespace] = [
                `data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame prepend value {}`, // 为子函数创建变量内存空间
                ...this.mcfunctions[namespace],
                `data remove storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0]`, // 销毁子函数的变量内存空间
            ]
        }
        if (flat&&this.option.functionStatement?.flatWhenOneCommand&&this.mcfunctions[namespace].length==1) {
            const oneCommand = this.mcfunctions[namespace][0]
            delete this.mcfunctions[namespace]
            return oneCommand
        }
        else {
            return `function ${namespace}`
        }
    }
    //all function tags
    private functionTags: { [functionTagFileName: string]: { replace: boolean, values: string[] } } = {};
    //all improve functions' types
    private improveFunctionTypes: { [functionName: string]: improveFunctionType } = {};

    //all namespace `namespace`
    private namespaceStack: namespaceInfo[] = [];

    //function namespace id `namespace:resource_loaction`  + number
    private anonymousFunctionFatherNamespaceIdTimes: { [mcfunctionFileName: string]: number } = {};
    //function namespace stack, to remember the namespace to be used in anonymous function
    private tempFunctionNamespaceIdStack: string[] = [];
    getNewTempFunctionNamespaceId(usage?:string) {
        const namespace = this.tempFunctionNamespaceIdStack[this.tempFunctionNamespaceIdStack.length - 1]
        if (this.anonymousFunctionFatherNamespaceIdTimes[namespace] === undefined)
            this.anonymousFunctionFatherNamespaceIdTimes[namespace] = 0
        else
            this.anonymousFunctionFatherNamespaceIdTimes[namespace] += 1
        return `${namespace}/${usage}${this.anonymousFunctionFatherNamespaceIdTimes[namespace]}`
    }
    //if the function is used exist expression, it should add exist_stack_frame
    private isUsedExistExpression: { [namespace: string]: boolean } = {};    
    getIsUsedExistExpressionNow() { return this.isUsedExistExpression[this.tempFunctionNamespaceIdStack[this.tempFunctionNamespaceIdStack.length - 1]] }
    setUsedExistExpressionNow(){  this.isUsedExistExpression[this.tempFunctionNamespaceIdStack[this.tempFunctionNamespaceIdStack.length - 1]] = true }
    //improve function namespace stack, used in return statement
    private improveFunctionNamespaceIdStack: string[] = [];

    //data storage identifier stack
    private dataStorageIdentifierStack: [namespaceId:string,nbtPath:string][] = [];
    getDataStorageIdentifier() {
        return this.dataStorageIdentifierStack[this.dataStorageIdentifierStack.length - 1]
    }

    //all entity name, key: name, value: "player" or hex uuid_
    private entityNameMap: { [name: string]: string } = {}

    //const number will register in init.mcfunction
    private constScbInitFunc: number[] = [];

    //the scb player tagetName pool
    private tempScbTargetName: number[] = [];
    private tempScbTargetNameUsed: number[] = [];
    removeUnusedTempScbTargetName(rightTempNumber: number) {
        this.tempScbTargetName.remove(rightTempNumber)
        this.tempScbTargetNameUsed.push(rightTempNumber)
    }
    getVaildTempScbTargetName(targetName: string ='temp'): [number, string] {
        let tempNumber = this.tempScbTargetName.length
        if (this.tempScbTargetNameUsed.length > 0) { tempNumber = this.tempScbTargetNameUsed.pop()!! }
        this.tempScbTargetName.push(tempNumber)
        return [tempNumber, `${targetName + tempNumber} ${this.option.scbExpression?.tempScbObjectiveName}`]
    }
    private tempExistName: number = 0;

    private option: option = {};

    createInitFunc() {
        if (this.mcfunctions["init"] === undefined) this.mcfunctions["init"] = []
        for (const num of this.constScbInitFunc) {
            this.mcfunctions["init"].push(`scoreboard players set ${num} ${this.option.scbExpression?.constNumberScbObjectiveName} ${num}`)
        }
    }
    constructor(result: JustMCFResult) {
        super();
        this.mcfunctions = result.mcfunctions;
        this.functionTags = result.functionTags;
        this.option = result.option;
        this.namespaceStack.push({ ...this.option.namespace }) 
        this.dataStorageIdentifierStack.push([this.namespaceStack[0].storage!!,""])
        this.entityNameMap = this.option.entityNameMap!!
    }
    

/* Deal the Identifiers */
    // visitDataIdentifier?: ((ctx: DataIdentifierContext) => string[]) | undefined;
    visitDataStorageLocal(ctx: DataStorageLocalContext){
        return [`storage ${this.option.functionStatement?.stackNamespaceId!!} stack_frame[0].${this.v(ctx.nbtPath())}`]
    }
    visitDataStorageWithEnv(ctx: DataStorageWithEnvContext) {
        const [namespace,nbtpath] = this.getDataStorageIdentifier()
        return [`storage ${namespace} ${nbtpath!=""?nbtpath+".":""}${this.v(ctx.nbtPath())}`]
    }
    visitDataStorage(ctx: DataStorageContext) { return [`storage ${this.v(ctx.nameSpaceStorage())} ${this.v(ctx.nbtPath())}`] }
    visitDataEntity(ctx: DataEntityContext) { return [`entity ${this.v(ctx.selector())} ${this.v(ctx.nbtPath())}`] }
    visitDataBlock(ctx: DataBlockContext) { return [`block ${this.v(ctx.pos3Identifier())} ${this.v(ctx.nbtPath())}`] }
    visitScbIdentifier(ctx: ScbIdentifierContext) { return [`${this.v(ctx.selector())} ${this.v(ctx.nbtName())}`] }
    visitPos3Identifier(ctx: Pos3IdentifierContext) { return [`${this.v(ctx.pos1(0))} ${this.v(ctx.pos1(1))} ${this.v(ctx.pos1(2))}`] }
    visitPos2Identifier(ctx: Pos2IdentifierContext) { return [`${this.v(ctx.pos1(0))} ${this.v(ctx.pos1(1))}`] }
    visitPos5Identifier(ctx: Pos5IdentifierContext) { return [`${this.v(ctx.pos1(0))} ${this.v(ctx.pos1(1))} ${this.v(ctx.pos1(2))} ${this.v(ctx.pos1(3))} ${this.v(ctx.pos1(4))}`] }
    visitPos1(ctx: Pos1Context) { return [ctx.text] }
    visitBlockIdentifier(ctx: BlockIdentifierContext) {
        let block = `${this.v(ctx.nameSpaceBlock())}`
        if (ctx.blockstate() !== undefined) block = `${block}${this.v(ctx.blockstate()!!)}`
        if (ctx.nbt() !== undefined) block = `${block} ${this.v(ctx.nbt()!!)}`
        return [block]
    }
    visitBlockstate(ctx: BlockstateContext) { return [ctx.text] }
    
    visitSelector(ctx: SelectorContext) {
        if (/^@s$/.test(ctx.text)) { return [ctx.text, "final"] }
        else if (/@[parse]/.test(ctx.text)) {
            return [ctx.text,"nest"]
        }
        else {
            if(ctx.text.includes("[")) throw new JustMCFSimplifyError("selector params should not be in uuid-name")
            const name = ctx.text.replace("@", "")
            if (this.entityNameMap[name] !== undefined) {
                if (this.entityNameMap[name] == "player") return [name,"final"]
                else return [this.entityNameMap[name],"final"]
            }
            else throw new JustMCFSimplifyError("uuid-name should be init")
        } 
    }
    visitItem_slot(ctx: Item_slotContext) { return [ctx.text] }
    visitItem_predicate(ctx: Item_predicateContext) {
        const name = (ctx.nameSpaceItem() !== undefined)
            ? this.v(ctx.nameSpaceItem()!!)
            : this.v(ctx.tagNameSpaceItem()!!);
        const nbt = (ctx.snbt() !== undefined) ? this.v(ctx.snbt()!!)
            : (ctx.nbt() !== undefined) ? this.v(ctx.nbt()!!) : "";
        return [`${name}${nbt}`]
        
    }
    visitBlock_predicate(ctx: Block_predicateContext) {
        const name = (ctx.nameSpaceBlock() !== undefined)
            ? this.v(ctx.nameSpaceBlock()!!)
            : this.v(ctx.tagNameSpaceBlock()!!);
        const blockstate = (ctx.blockstate() !== undefined) ? this.v(ctx.blockstate()!!) : "";
        const nbt = (ctx.snbt() !== undefined) ? this.v(ctx.snbt()!!)
            : (ctx.nbt() !== undefined) ? this.v(ctx.nbt()!!) : "";
        return [`${name}${blockstate}${nbt}`]
    }

/* Deal the Namespace And Names */
    visitNameSpaceWithType(namespace_type: keyof namespaceInfo, ctx: NameSpaceContext) {
        if (ctx.acceptableName() === undefined) {
            return`${this.namespaceStack[this.namespaceStack.length-1]!![namespace_type]}:${toSnakeCase(ctx.text)}`
        }
        else { return toSnakeCase(ctx.text) }
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
    visitNameSpaceEntity(ctx: NameSpaceEntityContext){ return[this.visitNameSpaceWithType("entity",ctx.nameSpace())] }

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
    visitBoolValue(ctx: BoolValueContext) { return [ctx.text] }
    visitNumberType(ctx: NumberTypeContext){return [ctx.text]}
    
/* Begin  */
    visitMcfFile(ctx: McfFileContext) {
        for (const fileStatementInner of ctx.fileStatementInner()) this.visit(fileStatementInner)
        return []
    }

/* Namespace Statement */
    visitNameSpaceStatement(ctx: NameSpaceStatementContext) {
        this.namespaceStack.push({...this.namespaceStack[this.namespaceStack.length-1]})
        if (ctx.acceptableName() !== undefined) {
            let key: (keyof namespaceInfo)
            for ( key in this.option.namespace) {
                this.namespaceStack[this.namespaceStack.length-1][key] = this.v(ctx.acceptableName()!!)
            }
        }
        for (const setting of ctx.nameSpaceSettings()) { this.visit(setting) }
        for (const inner of ctx.nameSpaceStatementInner()) { this.visit(inner) }
        //Recover the namespace 复原命名空间，命名空间只作用在Inner里
        this.namespaceStack.pop()
        return []
    }
    visitNameSpaceSettingsFunc(ctx: NameSpaceSettingsFuncContext) { this.namespaceStack[this.namespaceStack.length-1]["func"] = this.v(ctx.acceptableName()); return [] }
    visitNameSpaceSettingsBlock(ctx: NameSpaceSettingsBlockContext){this.namespaceStack[this.namespaceStack.length-1]["block"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsStorage(ctx: NameSpaceSettingsStorageContext) { this.namespaceStack[this.namespaceStack.length-1]["storage"] = this.v(ctx.acceptableName()); return [] }
    visitNameSpaceSettingsBiome(ctx: NameSpaceSettingsBiomeContext){this.namespaceStack[this.namespaceStack.length-1]["biome"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsBossbar(ctx: NameSpaceSettingsBossbarContext){this.namespaceStack[this.namespaceStack.length-1]["bossbar"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsPredicate(ctx: NameSpaceSettingsPredicateContext){this.namespaceStack[this.namespaceStack.length-1]["predicate"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsItem(ctx: NameSpaceSettingsItemContext){this.namespaceStack[this.namespaceStack.length-1]["item"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsLoot(ctx: NameSpaceSettingsLootContext){this.namespaceStack[this.namespaceStack.length-1]["loot"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsItemModifier(ctx: NameSpaceSettingsItemModifierContext){this.namespaceStack[this.namespaceStack.length-1]["item_modifier"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsDim(ctx: NameSpaceSettingsDimContext){this.namespaceStack[this.namespaceStack.length-1]["dimension"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsEntity(ctx: NameSpaceSettingsEntityContext){this.namespaceStack[this.namespaceStack.length-1]["entity"] = this.v(ctx.acceptableName()); return []}

    visitNameSpaceSettingsDefault(ctx: NameSpaceSettingsDefaultContext) {
        let key: (keyof namespaceInfo)
        for (key in this.option.namespace) {
            if(key != "func" && key != "storage")
                this.namespaceStack[this.namespaceStack.length-1][key] = this.v(ctx.acceptableName())
        }
        return []
    }
    
    visitNameSpaceSettingsJustDefault(ctx: NameSpaceSettingsJustDefaultContext) {
        let key: (keyof namespaceInfo)
        for (key in this.option.namespace) {
            if(key != "func" && key !="storage")
                this.namespaceStack[this.namespaceStack.length-1][key] = "minecraft"
        }
        return []
    }

/* Function Tag Statement */
    visitFuncTagStatement(ctx: FuncTagStatementContext) {
        const name = this.v(ctx.tagNameSpaceFunc())
        for (const funcTagStatementSetting of ctx.funcTagSettings()) {
            const [key, value] = this.visit(funcTagStatementSetting)
            this.functionTags[name]["replace"] = value=="true"
        }
        for (const funcTagStatementInner of ctx.funcTagStatementInner()) {
            this.functionTags[name].values.push(this.v(funcTagStatementInner))
        }
        return []
    }
    visitFuncTagSettingsReplace(ctx: FuncTagSettingsReplaceContext) {
        //return [key,value]
        return ["replace",this.v(ctx.boolValue())]
    }
    visitFuncTagSettingsReplaced(ctx: FuncTagSettingsReplacedContext) {
        return ["replace","true"]
    }
    visitFuncTagSIFuncS(ctx: FuncTagSIFuncSContext) {
        this.visit(ctx.funcStatement())
        return this.visit(ctx.funcStatement().nameSpaceFunc())
    }
    visitFuncTagSIFuncRunS(ctx: FuncTagSIFuncRunSContext) {
        return this.visit((ctx.funcRunStatement().nameSpaceFunc()!==undefined?ctx.funcRunStatement().nameSpaceFunc()!!:ctx.funcRunStatement().tagNameSpaceFunc()!!))
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
        const namespace = this.v(ctx.nameSpaceFunc())
        for (const tagNameSpaceContext of ctx.tagNameSpaceFunc()) {
            const tagName = this.v(tagNameSpaceContext)
            this.functionTags[tagName].values.push(namespace)
        }
        this.addNewFunction(namespace, () =>
            ctx.statementInner().flatMap(context => this.visit(context)),
            false
        )

        return []
    }

    visitExecNamedRun(ctx: ExecNamedRunContext) {
        this.visit(ctx.funcStatement())
        const namespace = this.v(ctx.funcStatement().nameSpaceFunc())
        return [`function ${namespace}`]
    }
    visitExecAnonymousRun(ctx: ExecAnonymousRunContext) {
        return [
            this.addNewFunction(this.getNewTempFunctionNamespaceId("exec"), () =>
                ctx.statementInner().flatMap(context => this.visit(context)))
        ]
    }
    visitExecDirectRun(ctx: ExecDirectRunContext) {
        return [
            this.addNewFunction(this.getNewTempFunctionNamespaceId("exec_compound"), () =>
                this.visit(ctx.statement()))]
    }
    visitFuncRunStatement(ctx: FuncRunStatementContext){
        if (ctx.nameSpaceFunc() !== undefined) 
            return [`function ${this.v(ctx.nameSpaceFunc()!!)}`]
        else 
            return [`function ${this.v(ctx.tagNameSpaceFunc()!!)}`]
    }

    visitFuncImproveStatement(ctx: FuncImproveStatementContext) {
        //TODO: type check
        //TODO: default params and params template
        const namespace = this.v(ctx.nameSpaceFunc())
        const preCommands: string[] = [];
        let ifCommand = ""
        const inputSourceNamespace = this.option.functionStatement?.commonIO
            ? this.option.functionStatement.stackNamespaceId
            : namespace;
        const resStorageNamespace = inputSourceNamespace

        const params: { name: string, type: string }[] =
            ctx.funcImproveParam().map(context => {
                const name = this.v(context.acceptableName())
                const type = context.typeName() !== undefined ? this.v(context.typeName()!!) : "nbt";
                preCommands.push(`data motify storage ${this.option.functionStatement?.stackNamespaceId} stack_frame[0].${name} set from storage ${inputSourceNamespace} input.${name}`)
                ifCommand = `${ifCommand} if data storage ${inputSourceNamespace} input.${name}`
                return { name: name, type: type }
            });
        const resType = ctx.typeName()!==undefined?this.v(ctx.typeName()!!):"unit"
        this.improveFunctionTypes[namespace] = {
            namespace: namespace,
            inputType: params,
            outputType:resType
        }
        const startCommand = (ifCommand!=""?`execute ${ifCommand} run `:"")+ `function ${namespace}/start`

        this.improveFunctionNamespaceIdStack.push(namespace)
        this.tempFunctionNamespaceIdStack.push(namespace)

        this.mcfunctions[namespace] = [
            `data remove storage ${resStorageNamespace} output`,
            `data modify storage ${this.option.functionStatement?.stackNamespaceId} stack_frame prepend value {}`, // 为子函数创建变量内存空间
            `data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame prepend value {}`, // 为exist表达式创建变量内存空间
            ...preCommands,
            startCommand, // 给子函数打电话
            `data remove storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0]`, // 销毁exist表达式的变量内存空间
            `data remove storage ${this.option.functionStatement?.stackNamespaceId} stack_frame[0]`, // 销毁子函数的变量内存空间
        ]
        this.mcfunctions[`${namespace}/start`] = ctx.funcImproveStatementInner().flatMap(context=>this.visit(context))

        this.tempFunctionNamespaceIdStack.pop()
        this.improveFunctionNamespaceIdStack.pop()


        return []
    }
    visitYeildStatement(ctx: YeildStatementContext) {
        //TODO: type check
        const resStorageNamespace = this.option.functionStatement?.commonIO
            ? this.option.functionStatement.stackNamespaceId
            : this.improveFunctionNamespaceIdStack[this.improveFunctionNamespaceIdStack.length - 1]
            
        return [`data modify storage ${resStorageNamespace} output set from ${this.v(ctx.dataIdentifier())}`]
    }
    //visitFuncImproveParam(ctx: FuncImproveParamContext) {return []}
    visitFuncImproveRunStatement(ctx: FuncImproveRunStatementContext) {
        return this.visit(ctx.funcImproveRunExpression()).slice(1)
    }
    visitFuncImproveRunExpression(ctx: FuncImproveRunExpressionContext) {
        const namespace = this.v(ctx.nameSpaceFunc())
        if(ctx.funcImproveRunParam().length<this.improveFunctionTypes[namespace].inputType.length) throw new JustMCFSimplifyError("the called function params were less than its definition")
        const inputSourceNamespace = this.option.functionStatement?.commonIO
            ? this.option.functionStatement.stackNamespaceId
            : namespace;
        const resStorageNamespace = inputSourceNamespace
        const clearInputCommand = `data remove storage ${inputSourceNamespace} input`
        let ifCommand = ""
        const setParamsCommands = ctx.funcImproveRunParam().map((context, i) => {
            const sourceIdentifier = this.v(context.dataIdentifier())
            ifCommand = ifCommand = `${ifCommand} if data storage ${sourceIdentifier}`
            return `data modify storage ${inputSourceNamespace} input.${this.improveFunctionTypes[namespace].inputType[i].name} set from ${sourceIdentifier}` 
        })
        const startCommand = (ifCommand!=""?`execute ${ifCommand} run `:"")+`function ${namespace}`
        return [`storage ${resStorageNamespace} output`,clearInputCommand,...setParamsCommands,startCommand]
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
            command = `${command} ${this.v(execStoreChildContext)}`
        command = `${command} run ${this.v(ctx.statement())}`
        return [command]
    }

    visitExecWithRunOrChild(ctx: ExecWithRunOrChildContext) {
        let command: string = "execute"
        for (const execChildContext of ctx.execChild())
            command = `${command} ${this.v(execChildContext)}`
        for (const execStoreChildContext of ctx.execStoreChild())
            command = `${command} ${this.v(execStoreChildContext)}`
        if (ctx.execRunChild() !== undefined)
            command = `${command} run ${this.v(ctx.execRunChild()!!)}`
        return [command]
    }
    visitExecWithoutRunOrChild(ctx: ExecWithoutRunOrChildContext) {
        let command: string = "execute"
        for (const execChildContext of ctx.execChild())
            command = `${command} ${this.v(execChildContext)}`
        return [command]
    }
    visitExecStoreResultScore(ctx: ExecStoreResultScoreContext) { return [`store result score ${this.v(ctx.scbIdentifier())}`] }
    visitExecStoreSuccessScore(ctx: ExecStoreSuccessScoreContext) { return [`store success score ${this.v(ctx.scbIdentifier())}`] }
    visitExecStoreResultData(ctx: ExecStoreResultDataContext) {
        const storeTypeContext = ctx.numberType()
        const storeScaleContext = ctx.NUMBER()
        const storeType = storeTypeContext === undefined ? "int" :this.v(storeTypeContext)
        const storeScale = storeScaleContext === undefined ? "1" : storeScaleContext.text
        return [`store result ${this.v(ctx.dataIdentifier())} ${storeType} ${storeScale}`]
    }
    visitExecStoreSuccessData(ctx: ExecStoreSuccessDataContext) {
        const storeTypeContext = ctx.numberType()
        const storeScaleContext = ctx.NUMBER()
        const storeType = storeTypeContext === undefined ? "int": this.v(storeTypeContext)
        const storeScale = storeScaleContext === undefined ? "1" : storeScaleContext.text
        return [`store success ${this.v(ctx.dataIdentifier())} ${storeType} ${storeScale}`]
    }
    visitExecStoreResultBossbar(ctx: ExecStoreResultBossbarContext) {return [`store result ${this.v(ctx.nameSpaceBossbar())} ${(ctx._value!==undefined)? ctx._value.text:"value"}`]}
    visitExecStoreSuccessBossbar(ctx: ExecStoreSuccessBossbarContext) {return [`store success ${this.v(ctx.nameSpaceBossbar())} ${(ctx._value!==undefined)? ctx._value.text:"value"}`]}
    visitExecAlign(ctx: ExecAlignContext) {
        const axesDefault = ctx.AcceptableName().text
        const axes = `${/x/.test(axesDefault) ? "x" : ""}${/y/.test(axesDefault) ? "y" : ""}${/z/.test(axesDefault) ? "z" : ""}`
        if (axes === "") throw new JustMCFSimplifyError("Error on execute align axes token")
        return [`align ${axes}`]
    }
    visitExecAnchored(ctx: ExecAnchoredContext) { return [`anchored ${ctx._anchor.text}`] }
    visitExecIn(ctx: ExecInContext) { return [`in ${this.v(ctx.nameSpaceDim())}`] }
    visitExecAs(ctx: ExecAsContext) { return [`as ${this.v(ctx.selector())}`] }
    visitExecAt(ctx: ExecAtContext) { return [`at ${this.v(ctx.selector())}`] }
    visitExecFacingPos(ctx: ExecFacingPosContext) { return [`facing ${this.v(ctx.pos3Identifier())}`] }
    visitExecFacingEntity(ctx: ExecFacingEntityContext) { return [`facing entity ${this.v(ctx.selector())}`] }
    visitExecPositionedPos(ctx: ExecPositionedPosContext) { return [`positioned ${this.v(ctx.pos3Identifier())}`] }
    visitExecPostionedAs(ctx: ExecPostionedAsContext) { return [`positioned as ${this.v(ctx.selector())}`] }
    visitExecRotatedPos(ctx: ExecRotatedPosContext) { return [`rotated ${this.v(ctx.pos2Identifier())}`] }
    visitExecRotatedAs(ctx: ExecRotatedAsContext) { return [`rotated as ${this.v(ctx.selector())}`] }
    visitExecIfEntity(ctx: ExecIfEntityContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} entity ${this.v(ctx.selector())}`] }
    visitExecIfScore(ctx: ExecIfScoreContext) {
        const operation = ctx.CompareOperation().text === "==" ? "=" : ctx.CompareOperation().text
        return [`${(ctx._cond.text!="unless")?"if":"unless"} score ${this.v(ctx.scbIdentifier(0))} ${operation} ${this.v(ctx.scbIdentifier(1))}`]
    }
    visitExecIfScoreMatches(ctx: ExecIfScoreMatchesContext) { return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} score ${this.v(ctx.scbIdentifier())} matches ${ctx.matchPart()!==undefined? this.v(ctx.matchPart()!!):this.v(ctx.scbCompareNumber()!!)}`] }
    visitExecPredicate(ctx: ExecPredicateContext) { return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} predicate ${this.v(ctx.nameSpacePredicate())}`] }
    visitExecIfBlock(ctx: ExecIfBlockContext) { return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} block ${this.v(ctx.pos3Identifier())} ${this.v(ctx.blockIdentifier())}`] }
    visitExecIfBlocks(ctx: ExecIfBlocksContext) { return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} blocks ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.pos3Identifier(2))}`] }
    visitExecIfData(ctx: ExecIfDataContext) { return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} ${this.v(ctx.dataIdentifier())}`] }
    visitExecIfBiome(ctx: ExecIfBiomeContext) { return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} biome ${this.v(ctx.pos3Identifier())} ${this.v(ctx.nameSpaceBiome())}`] }
    visitExecStore(ctx: ExecStoreContext) { return this.visit(ctx.execStoreChild()) }
    visitMatchPart(ctx: MatchPartContext) { return [ctx.text] }
    visitScbCompareNumber(ctx: ScbCompareNumberContext) {
        const num = Number.parseInt(ctx.NUMBER_INT().text)
        switch (ctx.CompareOperation().text) {
            case '<': return [`..${num - 1}`]
            case '<=': return [`..${num}`]
            case '==': return [`${num}`]
            case '>=': return [`${num}..`]
            case '>': return [`${num + 1}..`]
        }
        return []
    }

/* Data Statement */
    // visitDataOperationExpression?: ((ctx: DataOperationExpressionContext) => string[]) | undefined;
    visitDataMergeStorage(ctx: DataMergeStorageContext) { return [`data merge storage ${this.v(ctx.nameSpaceStorage())} ${this.v(ctx.nbt())}`] }
    visitDataMergeEntity(ctx: DataMergeEntityContext) { return [`data merge entity ${this.v(ctx.selector())} ${this.v(ctx.nbt())}`] }
    visitDataMergeBlock(ctx: DataMergeBlockContext) { return [`data merge block ${this.v(ctx.pos3Identifier())} ${this.v(ctx.nbt())}`] }
    visitDataGet(ctx: DataGetContext) { return [`data get ${this.v(ctx.dataIdentifier())}`+ctx.NUMBER()!==undefined?` ${ctx.NUMBER()?.text}`:""] }
    visitDataModifyMergeValue(ctx: DataModifyMergeValueContext) { return [`data modify ${this.v(ctx.dataIdentifier())} merge value ${this.v(ctx.nbt())}`] }
    visitDataModifyMergeFrom(ctx: DataModifyMergeFromContext) {
        const commands = this.visit(ctx.dataRightValue())
        return [...commands.slice(1), `data modify ${this.v(ctx.dataIdentifier())} merge from ${commands[0]}`]
    }
    visitDataModifySetValue(ctx: DataModifySetValueContext) { return [`data modify ${this.v(ctx.dataIdentifier())} set value ${this.v(ctx.nbt())}`] }
    visitDataModifySetFrom(ctx: DataModifySetFromContext) {
        const commands = this.visit(ctx.dataRightValue())
        return [...commands.slice(1),`data modify ${this.v(ctx.dataIdentifier())} set from ${commands[0]}`]
    }
    visitDataModifyAppendValue(ctx: DataModifyAppendValueContext) { return [`data modify ${this.v(ctx.dataIdentifier())} append value ${this.v(ctx.nbt())}`] }
    visitDataModifyAppendFrom(ctx: DataModifyAppendFromContext) {
        const commands = this.visit(ctx.dataRightValue())
        return [...commands.slice(1),`data modify ${this.v(ctx.dataIdentifier())} append from ${commands[0]}`]
    }
    visitDataModifyPrependValue(ctx: DataModifyPrependValueContext) { return [`data modify ${this.v(ctx.dataIdentifier())} prepend value ${this.v(ctx.nbt())}`] }
    visitDataModifyPrependFrom(ctx: DataModifyPrependFromContext) {
        const commands = this.visit(ctx.dataRightValue())
        return [...commands.slice(1),`data modify ${this.v(ctx.dataIdentifier())} prepend from ${commands[0]}`]
    }
    visitDataModifyInsertValue(ctx: DataModifyInsertValueContext) { return [`data modify ${this.v(ctx.dataIdentifier())} insert value ${this.v(ctx.nbt())}`] }
    visitDataModifyInsertFrom(ctx: DataModifyInsertFromContext) {
        const commands = this.visit(ctx.dataRightValue())
        return [...commands.slice(1),`data modify ${this.v(ctx.dataIdentifier())} insert from ${commands[0]}`]
    }
    visitDataRemove(ctx: DataRemoveContext) { return [`data remove ${this.v(ctx.dataIdentifier())}`] }

    visitDataSCompound(ctx: DataSCompoundContext) {
        return ctx.dataOperationExpression().flatMap(context=>this.visit(context))
    }
    visitDataSIdentifierCompound(ctx: DataSIdentifierCompoundContext) {
        this.dataStorageIdentifierStack.push([this.v(ctx.nameSpaceStorage()), ctx.nbtPath() === undefined ? "" : this.v(ctx.nbtPath()!!)])
        const commands = ctx.dataOperationExpression().flatMap(context=>this.visit(context))
        this.dataStorageIdentifierStack.pop()
        return commands
    }
/* Scb Statement */
    // visitScbOperationExpression?: ((ctx: ScbOperationExpressionContext) => string[]) | undefined;
    visitScbGet(ctx: ScbGetContext) { return [`scoreboard players get ${this.v(ctx.scbIdentifier())}`] }
    visitScbAdd(ctx: ScbAddContext) { return [`scoreboard players add ${this.v(ctx.scbIdentifier())} ${this.v(ctx.NUMBER_INT())}`] }
    visitScbRemove(ctx: ScbRemoveContext) { return [`scoreboard players remove ${this.v(ctx.scbIdentifier())} ${this.v(ctx.NUMBER_INT())}`] }
    visitScbSet(ctx: ScbSetContext) { return [`scoreboard players set ${this.v(ctx.scbIdentifier())} ${this.v(ctx.NUMBER_INT())}`] }
    visitScbOptAddAssign(ctx: ScbOptAddAssignContext) { return [`scoreboard players operation ${this.v(ctx.scbIdentifier(0))} += ${this.v(ctx.scbIdentifier(1))}`] }
    visitScbOptSubAssign(ctx: ScbOptSubAssignContext) { return [`scoreboard players operation ${this.v(ctx.scbIdentifier(0))} -= ${this.v(ctx.scbIdentifier(1))}`] }
    visitScbOptMulAssign(ctx: ScbOptMulAssignContext) { return [`scoreboard players operation ${this.v(ctx.scbIdentifier(0))} *= ${this.v(ctx.scbIdentifier(1))}`] }
    visitScbOptDivAssign(ctx: ScbOptDivAssignContext) { return [`scoreboard players operation ${this.v(ctx.scbIdentifier(0))} /= ${this.v(ctx.scbIdentifier(1))}`] }
    visitScbOptModAssign(ctx: ScbOptModAssignContext) { return [`scoreboard players operation ${this.v(ctx.scbIdentifier(0))} %= ${this.v(ctx.scbIdentifier(1))}`] }
    visitScbOptExcFunc(ctx: ScbOptExcFuncContext) { return [`scoreboard players operation ${this.v(ctx.scbIdentifier(0))} >< ${this.v(ctx.scbIdentifier(1))}`] }
    visitScbOptMinFunc(ctx: ScbOptMinFuncContext) { return [`scoreboard players operation ${this.v(ctx.scbIdentifier(0))} << ${this.v(ctx.scbIdentifier(1))}`] }
    visitScbOptMaxFunc(ctx: ScbOptMaxFuncContext) { return [`scoreboard players operation ${this.v(ctx.scbIdentifier(0))} >> ${this.v(ctx.scbIdentifier(1))}`] }
    visitScbOptAssign(ctx: ScbOptAssignContext) { return [`scoreboard players operation ${this.v(ctx.scbIdentifier(0))} = ${this.v(ctx.scbIdentifier(1))}`] }
    visitScbReset(ctx: ScbResetContext) { return [`scoreboard players reset ${this.v(ctx.scbIdentifier())}`] } //TODO: the objective is not required
    visitScbOptExpression(ctx: ScbOptExpressionContext) {
        this.tempScbTargetName = []
        const res = this.visit(ctx.scbSingleOperationExpression())
        this.tempScbTargetName = []
        return res.slice(2).concat([`scoreboard players operation ${this.v(ctx.scbIdentifier())} = ${res[1]}`])
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
        if (this.option?.scbExpression?.useConstNumberScbObjective) {
            if (!this.constScbInitFunc.includes(Number.parseInt(ctx.NUMBER_INT().text))) this.constScbInitFunc.push(Number.parseInt(ctx.NUMBER_INT().text))
            return [`${-1}`, `${ctx.NUMBER_INT().text} ${this.option.scbExpression.constNumberScbObjectiveName}`]
        }
        else {
            const [tempNumber, tempId] = this.getVaildTempScbTargetName()
            return [`${tempNumber}`, `${tempId}`, `scoreboard players set ${tempId} ${ctx.NUMBER_INT().text}`]
        }
    }
    visitScbIdExpression(ctx: ScbIdExpressionContext) {
        return [`${-1}`, `${this.visit(ctx.scbIdentifier())}`]
    }
    visitScbParenExpression(ctx: ScbParenExpressionContext) { return this.visit(ctx.scbSingleOperationExpression()) }

/* Scb Statement {} */
    visitScbPlayerStatement(ctx: ScbPlayerStatementContext) {
        return ctx.scbPlayerStatementInner().flatMap(context=>this.visit(context))
    }
    visitScbPlayerSIScbList(ctx: ScbPlayerSIScbListContext) {
        if (ctx.selector() !== undefined) 
            return [`scoreboard players list ${this.v(ctx.selector()!!)}`]
        else return [`scoreboard objectives list`]
    }

/* Scb Objectives Statement */
    visitScbObjSDeclareWithName(ctx: ScbObjSDeclareWithNameContext) {
        const objectiveName = this.v(ctx.acceptableName())
        const criterion = ctx.criterion()===undefined? 'dummy': this.v(ctx.criterion()!!)
        return [`scoreboard objectives add ${objectiveName} ${criterion} ${this.v(ctx.json())}`,...ctx.scbStatementInner().map(context=>this.v(context).replace("$$",objectiveName))]
    }
    visitScbObjSDeclareSingle(ctx: ScbObjSDeclareSingleContext) {return [`scoreboard objectives add ${this.v(ctx.acceptableName())} ${this.v(ctx.criterion())}`]}
    visitScbObjSDeclareDefault(ctx: ScbObjSDeclareDefaultContext) {
        const objectiveName = this.v(ctx.acceptableName())
        const criterion = ctx.criterion()===undefined? 'dummy': this.v(ctx.criterion()!!)
        return [`scoreboard objectives add ${objectiveName} ${criterion}`,...ctx.scbStatementInner().map(context=>this.v(context).replace("$$",objectiveName))]
    }
    visitScbObjSOperation(ctx: ScbObjSOperationContext) {
        const objectiveName = this.v(ctx.acceptableName())
        return ctx.scbStatementInner().map(context=> this.v(context).replace("$$",objectiveName))
    }
    visitScbSIRemove(ctx: ScbSIRemoveContext) { return ["scoreboard objectives remove $$"] }
    visitScbSIDisplay(ctx: ScbSIDisplayContext) {
        const pos = this.v(ctx.acceptableName());
        const test = /^(list|sidebar|(sidebar\.team\.(black|dark_blue|dark_green|dark_aqua|dark_red|dark_purple|gold|gray|dark_gray|blue|green|aqua|red|light_purple|yellow|white)))$/.test(pos)
        if(!test) throw new JustMCFSimplifyError("scoreboard display position error")
        return [`scoreboard objectives setdisplay ${pos} $$`]
    }
    visitScbSIRendertype(ctx: ScbSIRendertypeContext){return [`scoreboard objectives modify $$ rendertype ${ctx._type.text}}`]}
    visitScbSIDisplayname(ctx: ScbSIDisplaynameContext){return [`scoreboard objectives modify $$ displayname ${this.v(ctx.json())}`]}

/* Bossbar Statement */
    
    visitBossbarSDeclare(ctx: BossbarSDeclareContext) {
        const namespace = this.v(ctx.nameSpaceBossbar())
        return [`bossbar add ${namespace} ${this.v(ctx.json())}`,...ctx.bossbarStatementInner().map(context=>this.v(context).replace("$$",namespace))]
    }
    visitBossbarSOperation(ctx: BossbarSOperationContext) {
        const namespace = this.v(ctx.nameSpaceBossbar())
        return ctx.bossbarStatementInner().map(context=> this.v(context).replace("$$",namespace))
    }
    visitBossbarSIGet(ctx: BossbarSIGetContext) { return [`bossbar get $$ ${ctx._type.text}`] }
    visitBossbarSIRemove(ctx: BossbarSIRemoveContext){return [`bossbar remove $$`]}
    visitBossbarSISetColor(ctx: BossbarSISetColorContext) { return [`bossbar set $$ color ${ctx._color}`] }
    visitBossbarSISetMax(ctx: BossbarSISetMaxContext) { return [`bossbar set $$ max ${ctx.NUMBER().text}`] }
    visitBossbarSISetName(ctx: BossbarSISetNameContext) { return [`bossbar set $$ name ${this.v(ctx.json())}`] }
    visitBossbarSISetPlayer(ctx: BossbarSISetPlayerContext) { return [`bossbar set $$ players ${this.v(ctx.selector())}`] }
    visitBossbarSISetPlayerNull(ctx: BossbarSISetPlayerNullContext) { return [`bossbar set $$ players`] }
    visitBossbarSISetStyle(ctx: BossbarSISetStyleContext) { return [`bossbar set $$ style ${ctx._style}`] }
    visitBossbarSISetValue(ctx: BossbarSISetValueContext) { return [`bossbar set $$ value ${ctx.NUMBER().text}`] }
    visitBossbarSISetVisible(ctx: BossbarSISetVisibleContext) { return [`bossbar set $$ visible ${this.v(ctx.boolValue())}`] }
    visitBossbarOpExprGet(ctx: BossbarOpExprGetContext) { return [`bossbar get ${this.v(ctx.nameSpaceBossbar())} ${ctx._type===undefined?"value":ctx._type.text}`] }
    visitBossbarOpExprAssignValue(ctx: BossbarOpExprAssignValueContext) { return [`bossbar set ${this.v(ctx.nameSpaceBossbar())} value ${ctx.NUMBER().text}`] }
    visitBossbarOpExprAssignMax(ctx: BossbarOpExprAssignMaxContext) { return [`bossbar set ${this.v(ctx.nameSpaceBossbar())} max ${ctx.NUMBER().text}`] }

/* Title Statement */
    
    visitTitleSCompound(ctx: TitleSCompoundContext) {
        return ctx.titleStatementInner().flatMap(context=>this.visit(context))
    }
    visitTitleSSelectorCompound(ctx: TitleSSelectorCompoundContext) {
        return this.visitSelectorCompound(ctx,ctx.titleSelectorStatementInner())
    }
    visitTitleSISelectorSingle(ctx: TitleSISelectorSingleContext) {
        return [ this.v(ctx.titleIndependentStatementInner()).replace("$$",this.v(ctx.selector())) ]
    }
    visitTitleSISelectorCompound(ctx: TitleSISelectorCompoundContext) {
        return this.visitSelectorCompound(ctx,ctx.titleSelectorStatementInner())
    }
    visitTitleSSIJson(ctx: TitleSSIJsonContext) { return [`title $$ ${ctx._pos.text} ${this.v(ctx.json())}`] }
    visitTitleSSIClear(ctx: TitleSSIClearContext) { return ["title $$ clear"] }
    visitTitleSSIReset(ctx: TitleSSIResetContext) { return ["title $$ reset"] }
    visitTitleSSITimes(ctx: TitleSSITimesContext) { return [`title $$ times ${ctx.NUMBER(0).text} ${ctx.NUMBER(1).text} ${ctx.NUMBER(2).text}`] }
    visitTitleISIJson(ctx: TitleISIJsonContext) { return [`title $$ ${ctx._pos.text} ${this.v(ctx.json())}`] }
    visitTitleISIClear(ctx: TitleISIClearContext) { return ["title $$ clear"] }
    visitTitleISIReset(ctx: TitleISIResetContext) { return ["title $$ reset"] }
    visitTitleISITimes(ctx: TitleISITimesContext){return [`title $$ times ${ctx.NUMBER(0).text} ${ctx.NUMBER(1).text} ${ctx.NUMBER(2).text}`]}

/* Display Statement */

    visitDisplaySCompound(ctx: DisplaySCompoundContext) {return ctx.displayStatementInner().flatMap(context=>this.visit(context))}
    visitDisplaySSelectorCompound(ctx: DisplaySSelectorCompoundContext) {
        return this.visitSelectorCompound(ctx,ctx.displayIndependentStatementInner())
    }
    //visitDisplaySIScb(ctx: DisplaySIScbContext) {return []}
    //visitDisplaySIBossbar(ctx: DisplaySIBossbarContext) {return []}
    visitDisplaySISelectorSingle(ctx: DisplaySISelectorSingleContext) {
        return this.visitSelectorCompound(ctx,[ctx.displayIndependentStatementInner()])
    }
    visitDisplaySISelectorCompound(ctx: DisplaySISelectorCompoundContext) {
        return this.visitSelectorCompound(ctx,ctx.displayIndependentStatementInner())
    }
    
    //visitDisplayISITitleSingle(ctx: DisplayISITitleSingleContext) { return [] }
    visitDisplayISITitleCompound(ctx: DisplayISITitleCompoundContext) {
        return ctx.titleSelectorStatementInner().map(context=>this.v(context))
    }
    visitDisplayISIText(ctx: DisplayISITextContext) {return [`tellraw $$ ${this.v(ctx.json())}`]}
    visitDisplayISIBossbar(ctx: DisplayISIBossbarContext) {return [`bossbar set ${this.v(ctx.nameSpaceBossbar())} players $$`]}
    
    
    visitItemSCompound(ctx: ItemSCompoundContext) { return ctx.itemStatementInner().flatMap(context=>this.visit(context)) }
    visitItemSSelectorCompound(ctx: ItemSSelectorCompoundContext) {
        return this.visitSelectorCompound(ctx,ctx.itemSelectorStatementInner())
    }
    visitLootSCompound(ctx: LootSCompoundContext) {return ctx.lootStatementInner().flatMap(context=>this.visit(context))}
    visitLootSSelectorCompound(ctx: LootSSelectorCompoundContext) {
        return this.visitSelectorCompound(ctx,ctx.lootSelectorStatementInner())

    }
    visitLootSIInsert(ctx: LootSIInsertContext) {return [`loot insert ${this.v(ctx.pos3Identifier())} ${this.v(ctx.lootSource())}`]}
    visitLootSISpawn(ctx: LootSISpawnContext) {return [`loot spawn ${this.v(ctx.pos3Identifier())} ${this.v(ctx.lootSource())}`]}
    visitLootSIReplaceBlock(ctx: LootSIReplaceBlockContext) {return [this.v(ctx.lootIndependentStatementInnerReplaceEntity()).replace("entity $$",`block ${this.v(ctx.pos3Identifier())}`)]}
    visitLootSIGive(ctx: LootSIGiveContext) {return [this.v(ctx).replace("$$",this.v(ctx.selector()))]}
    visitLootSIReplaceEntity(ctx: LootSIReplaceEntityContext) {return [this.v(ctx).replace("$$",this.v(ctx.selector()))]}
    visitLootSISelectorNest(ctx: LootSISelectorNestContext) {
        const selector =this.v(ctx.selector())
        return ctx.lootSelectorStatementInner().flatMap(context =>
            this.visit(context).map(command => command.replace("$$", selector)))
    }
    visitLootIndependentStatementInnerGive(ctx: LootIndependentStatementInnerGiveContext){ return [`loot give $$ ${this.v(ctx.lootSource())}`]}
    visitLootIndependentStatementInnerReplaceEntity(ctx: LootIndependentStatementInnerReplaceEntityContext) {
        return [`loot replace entity $$ ${this.v(ctx.item_slot())} ${this.v(ctx.lootSource())}`+ctx.NUMBER_INT()!==undefined?` ${ctx.NUMBER_INT()?.text}`:""]
    }
    visitLootSourceFishHand(ctx: LootSourceFishHandContext) {
        return [`fish ${this.v(ctx.nameSpaceLoot())} ${this.v(ctx.pos3Identifier())}`+ctx._hand!==undefined?` ${ctx._hand.text}`:""]
    }
    visitLootSourceFishTool(ctx: LootSourceFishToolContext) {return [`fish ${this.v(ctx.nameSpaceLoot())} ${this.v(ctx.pos3Identifier())} ${this.v(ctx.nameSpaceItem())}` ]}
    visitLootSourceLoot(ctx: LootSourceLootContext) {return [`loot ${this.v(ctx.nameSpaceLoot())}`]}
    visitLootSourceKill(ctx: LootSourceKillContext) {return [`kill ${this.v(ctx.selector())}`]}
    visitLootSourceMineHand(ctx: LootSourceMineHandContext) {
        return [`mine ${this.v(ctx.pos3Identifier())}`+ctx._hand!==undefined?` ${ctx._hand.text}`:""]
    }
    visitLootSourceMineTool(ctx: LootSourceMineToolContext) {return [`mine ${this.v(ctx.pos3Identifier())} ${this.v(ctx.nameSpaceItem())}`]}
    visitItemSIGiveAndClear(ctx: ItemSIGiveAndClearContext) {return [this.v(ctx.giveAndClearIndependentStatementInner()).replace("$$",this.v(ctx.selector()))]}
    visitItemSIEntity(ctx: ItemSIEntityContext) {return [this.v(ctx.itemIndependentStatementInner()).replace("$$",this.v(ctx.selector()))]}
    visitItemSIBlock(ctx: ItemSIBlockContext) {return [this.v(ctx.itemIndependentStatementInner()).replace("entity $$",`block ${this.v(ctx.pos3Identifier())}`)]}
    //visitItemSILootInner(ctx: ItemSILootInnerContext) {return []}
    visitItemSISelectorNest(ctx: ItemSISelectorNestContext) {
        const selector =this.v(ctx.selector())
        return ctx.itemSelectorStatementInner().flatMap(context =>
            this.visit(context).map(command => command.replace("$$", selector)))
    }
    //visitItemSSIGiveAndClear(ctx: ItemSSIGiveAndClearContext) {return []}
    //visitItemSSIItem(ctx: ItemSSIItemContext) {return []}
    //visitItemSSILootInner(ctx: ItemSSILootInnerContext) {return []}
    visitItemISIReplaceWith(ctx: ItemISIReplaceWithContext) {
        return [`item replace entity $$ ${this.v(ctx.item_slot())} with ${this.v(ctx.nameSpaceItem())}`+ctx.NUMBER_INT()!==undefined?` ${ctx.NUMBER_INT()?.text}`:""]
    }
    visitItemISIReplaceFromEntity(ctx: ItemISIReplaceFromEntityContext) {
        return [`item replace entity $$ ${this.v(ctx.item_slot(0))} from entity ${this.v(ctx.selector())} ${this.v(ctx.item_slot(1))}`+ctx.nameSpaceItemModifier()!==undefined?` ${this.v(ctx.nameSpaceItemModifier()!!)}`:""]
    }
    visitItemISIReplaceFromBlock(ctx: ItemISIReplaceFromBlockContext) {
        return [`item replace entity $$ ${this.v(ctx.item_slot(0))} from block ${this.v(ctx.pos3Identifier())} ${this.v(ctx.item_slot(1))}`+ctx.nameSpaceItemModifier()!==undefined?` ${this.v(ctx.nameSpaceItemModifier()!!)}`:""]
    }
    visitItemISIModify(ctx: ItemISIModifyContext) {return [`item modify entity $$ ${this.v(ctx.item_slot())} ${this.v(ctx.nameSpaceItemModifier())}`]}
    visitGiveISI(ctx: GiveISIContext) {
        return [`give $$ ${this.v(ctx.nameSpaceItem())}`+ctx.NUMBER_INT()!==undefined?` ${ctx.NUMBER_INT()?.text}`:""]
    }
    visitClearISI(ctx: ClearISIContext) {
        return [`clear $$ ${this.v(ctx.item_predicate())}`+ctx.NUMBER_INT()!==undefined?` ${ctx.NUMBER_INT()?.text}`:""]
    }
    
    
    visitAttrSCompound(ctx: AttrSCompoundContext) { return ctx.attrStatementInner().flatMap(context=>this.visit(context)) }
    visitAttrSSelectorCompound(ctx: AttrSSelectorCompoundContext) {
        const selector =this.v(ctx.selector())
        return ctx.attrIndependentStatementInner().flatMap(context =>
            this.visit(context).map(command => command.replace("$$", selector)))
    }
    visitAttrSISingle(ctx: AttrSISingleContext) {return [this.v(ctx.attrIndependentStatementInner()).replace("$$", this.v(ctx.selector()))]}
    visitAttrSISelectorCompound(ctx: AttrSISelectorCompoundContext) {
        const selector =this.v(ctx.selector())
        return ctx.attrIndependentStatementInner().map(context =>this.v(context).replace("$$", selector))
    }
    visitAttrISIGet(ctx: AttrISIGetContext) {return [`attribute $$ ${this.v(ctx.registerName())} get`+ctx.NUMBER()!==undefined?` ${ctx.NUMBER()?.text}`:""]}
    visitAttrISIGetBase(ctx: AttrISIGetBaseContext) {return [`attribute $$ ${this.v(ctx.registerName())} base get`+ctx.NUMBER()!==undefined?` ${ctx.NUMBER()?.text}`:""]}
    visitAttrISISetBase(ctx: AttrISISetBaseContext) {return [`attribute $$ ${this.v(ctx.registerName())} base set ${ctx.NUMBER().text}`]}
    visitAttrISIModifierAdd(ctx: AttrISIModifierAddContext) {
        const type = ctx._op.text == "+" ? "add"
            : ctx._op.text == "*+" ? "multiply_base"
            : ctx._op.text == "*" ? "multiply":"add";
        return [`attribute $$ ${this.v(ctx.registerName())} modifier add ${ctx.UUID16_().text} ${this.v(ctx.acceptableName())} ${ctx.NUMBER().text} ${type}`]
    }
    visitAttrISIModifierRemove(ctx: AttrISIModifierRemoveContext) {return [`attribute $$ ${this.v(ctx.registerName())} modifier remove ${ctx.UUID16_().text}`]}
    visitAttrISIModifierGet(ctx: AttrISIModifierGetContext) {return [`attribute $$ ${this.v(ctx.registerName())} modifier value get ${ctx.UUID16_().text}`+ctx.NUMBER()!==undefined?` ${ctx.NUMBER()?.text}`:""]}
    
    
    visitEntitySDeclarePlayer(ctx: EntitySDeclarePlayerContext) {
        for (const playerNameContext of ctx.playerName()) {
            const name = this.v(playerNameContext)
            this.entityNameMap[name]="player"
        }
        return []
    }
    visitPlayerName(ctx: PlayerNameContext){return [ctx.text]}
    visitEntitySDeclare(ctx: EntitySDeclareContext) {
        let nbt = ctx.nbt() !== undefined ? this.v(ctx.nbt()!!) : ""
        for (const context of ctx.entityDeclareStatementInner()) {
            const arr = this.visit(context)
            nbt = insertIntoNbt(arr,nbt)
        } 
        return [`summon ${this.v(ctx.nameSpaceEntity())} ${this.v(ctx.pos3Identifier())}`+nbt!=""?` ${nbt}`:""]
    }
    visitEntitySDeclareWithName(ctx: EntitySDeclareWithNameContext) {
        let nbt = ctx.nbt() !== undefined ? this.v(ctx.nbt()!!) : ""
        for (const context of ctx.entityDeclareStatementInner()) {
            const arr = this.visit(context)
            nbt = insertIntoNbt(arr,nbt)
        } 
        const randomUUID = UUID.random()
        this.entityNameMap[this.v(ctx.acceptableName())] = randomUUID.toHex()
        nbt = insertIntoNbt(["UUID","IntArray","replace",randomUUID.toArray()],nbt)
        const pos = ctx.pos3Identifier()!==undefined? this.v(ctx.pos3Identifier()!!):"~ ~ ~"

        return[`summon ${this.v(ctx.nameSpaceEntity())} ${pos} ${nbt}`]
    }
    visitEntitySCompound(ctx: EntitySCompoundContext) {return ctx.entityStatementInner().flatMap(context=>this.visit(context))}
    visitEntitySSelectorCompound(ctx: EntitySSelectorCompoundContext) {
        return this.visitSelectorCompound(ctx,ctx.entityIndependentStatementInner())
    }

    visitEntityDeclareSITag(ctx: EntityDeclareSITagContext){
        return ["Tags","List","append",...ctx.acceptableName().map(context=>this.v(context))]
    }

    visitTagISIAdd(ctx: TagISIAddContext) { return [`tag $$ add ${this.v(ctx.acceptableName())}`] }
    visitTagISIRemove(ctx: TagISIRemoveContext) {return [`tag $$ remove ${this.v(ctx.acceptableName())}`]}
    visitTagISIList(ctx: TagISIListContext) {return [`tag $$ list`]}
    
    visitEffectISIGive(ctx: EffectISIGiveContext) {
        const left = ctx._second === undefined ? "" :
            ctx._amplifier === undefined ? ` ${ctx._second.text}` :
            ctx.boolValue() === undefined ? ` ${ctx._second.text} ${ctx._amplifier.text}` :
                    ` ${ctx._second.text} ${ctx._amplifier.text} ${this.v(ctx.boolValue()!!)}`;
        return [`effect give $$ ${this.v(ctx.acceptableName())}`+ left]
    }
    visitEffectISIClear(ctx: EffectISIClearContext) {return [`effect clear $$ ${this.v(ctx.acceptableName())}`]}
    visitEffectISIGiveSp(ctx: EffectISIGiveSpContext) {
        const left = ctx._second === undefined ? "" :
            ctx._amplifier === undefined ? ` ${ctx._second.text}` :
            ctx.boolValue() === undefined ? ` ${ctx._second.text} ${ctx._amplifier.text}` :
                    ` ${ctx._second.text} ${ctx._amplifier.text} ${this.v(ctx.boolValue()!!)}`;
                
        return [`effect give $$ ${this.v(ctx.acceptableName())}`+ left]
    }
    visitEffectISIClearAll(ctx: EffectISIClearAllContext) {return [`effect clear $$`]}
    
    visitTpISIDestination(ctx: TpISIDestinationContext) { return [`tp $$ ${this.v(ctx.selector())}`] }
    visitTpISIPos(ctx: TpISIPosContext) {return [`tp $$ ${this.v(ctx.pos3Identifier())}`]}
    visitTpISIRotated(ctx: TpISIRotatedContext) {return [`tp $$ ${this.v(ctx.pos5Identifier())}`]}
    visitTpISIRotatedDiv(ctx: TpISIRotatedDivContext) {return [`tp $$ ${this.v(ctx.pos3Identifier())} ${this.v(ctx.pos2Identifier())}`]}
    visitTpISIFacing(ctx: TpISIFacingContext) {return [`tp $$ ${this.v(ctx.pos3Identifier(0))} facing ${this.v(ctx.pos3Identifier(1))}`]}
    visitTpISIFacingEntity(ctx: TpISIFacingEntityContext) {return [`tp $$ ${this.v(ctx.pos3Identifier())} facing entity ${this.v(ctx.selector())}`+ctx._anchor!==undefined?` ${ctx._anchor.text}`:""]}
    
//    visitEntityISIGiveAndClear(ctx: EntityISIGiveAndClearContext) { return [] }
    visitEntityISIKill(ctx: EntityISIKillContext) {return [`kill $$`]}
//    visitEntityISITag(ctx: EntityISITagContext) {return []}
//    visitEntityISIEffect(ctx: EntityISIEffectContext) {return []}
//    visitEntityISITp(ctx: EntityISITpContext) {return []}
    visitEntityISITitleCompound(ctx: EntityISITitleCompoundContext) {
        return ctx.titleSelectorStatementInner().flatMap(context=>this.visit(context))
    }
    visitEntityISIDisplayCompound(ctx: EntityISIDisplayCompoundContext) {
        return ctx.displayIndependentStatementInner().flatMap(context=>this.visit(context))
    }
//    visitEntityISIDisplaySingle(ctx: EntityISIDisplaySingleContext) {return []}
//    visitEntityISIItemSingle(ctx: EntityISIItemSingleContext) {return []}
//    visitEntityISILootGiveSingle(ctx: EntityISILootGiveSingleContext) {return []}
//    visitEntityISILootSingle(ctx: EntityISILootSingleContext) {return []}
    visitEntityISIItemCompound(ctx: EntityISIItemCompoundContext) {
        return ctx.itemSelectorStatementInner().flatMap(context=>this.visit(context))
    }
    visitEntityISILootCompound(ctx: EntityISILootCompoundContext) {
        return ctx.lootSelectorStatementInner().flatMap(context=>this.visit(context))
    }
 //   visitEntityISIAttrSingle(ctx: EntityISIAttrSingleContext) {return []}
    visitEntityISIAttrCompound(ctx: EntityISIAttrCompoundContext) {
        return ctx.attrIndependentStatementInner().flatMap(context=>this.visit(context))
    }
    visitEntityISIExec(ctx: EntityISIExecContext) {
        return [this.v(ctx.execStatement()).replace("execute","execute as $$")]
    }
    
    //visitEntitySIEntityExpression(ctx: EntitySIEntityExpressionContext) { return [] }
    visitEntitySISelectorCompound(ctx: EntitySISelectorCompoundContext) {
        return this.visitSelectorCompound(ctx,ctx.entityIndependentStatementInner())
    }
    
    visitBlockStatement(ctx: BlockStatementContext){
        return ctx.blockStatementInner().flatMap(context=>this.visit(context))
    }
    visitBlockSISetblock(ctx: BlockSISetblockContext) {
        return [`setblock ${this.v(ctx.pos3Identifier())} ${this.v(ctx.blockIdentifier())}`+ctx._mod!==undefined?` ${ctx._mod.text}`:""]
    }
    visitBlockSIFill(ctx: BlockSIFillContext) {
        return [`fill ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.blockIdentifier())}`+ctx._mod!==undefined?` ${ctx._mod.text}`:""]
    }
    visitBlockSIFillReplace(ctx: BlockSIFillReplaceContext) {
        return [`fill ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.blockIdentifier())} replace ${this.v(ctx.block_predicate())}`]
    }
    visitBlockSIClone(ctx: BlockSICloneContext) {
        return [`clone ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.pos3Identifier(2))}`+ctx._masked_mod===undefined?"":ctx._mod===undefined?` ${ctx._masked_mod.text}`:` ${ctx._masked_mod.text} ${ctx._mod.text}`]
    }
    visitBlockSICloneFiltered(ctx: BlockSICloneFilteredContext) {
        return [`clone ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.pos3Identifier(2))} filtered ${this.v(ctx.block_predicate())}`+ctx._mod!==undefined?` ${ctx._mod.text}`:""]
    }

    visitDataAssignExistExpression(ctx: DataAssignExistExpressionContext) {
        this.setUsedExistExpressionNow()
        const res = this.visit(ctx.existExpression())
        const identifier = this.v(ctx.dataIdentifier())
        if (res[0] == "true") return [...res.slice(1), `data modify ${identifier} set value 1b`]
        else if(res[0]=="false") return [...res.slice(1), `data remove ${identifier}`]
        else return [...res.slice(1), `execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${res[0]} run data modify ${identifier} set value 1b`]
        return []
    }

    visitExistExpressionOperationUtils(ctx: ExistExpressionBitAndContext | ExistExpressionBitAndContext | ExistExpressionBitOrContext | ExistExpressionOrContext) {
        const left = this.visit(ctx.existExpression(0) as ExistExpressionContext)
        const leftName = left[0]
        const right = this.visit(ctx.existExpression(1) as ExistExpressionContext)
        const rightName = right[0]
        const mos = (leftName == "true" ? "1": leftName == "false" ? "0" : "2") + (rightName == "true" ? "1": rightName == "false" ? "0" : "2");
        switch (ctx._op.text) {
            case "&": {
                switch (mos) {
                    case "00": {return ["false",...left.slice(1),...right.slice(1)] } break;
                    case "01": {return ["false",...left.slice(1),...right.slice(1)] } break;
                    case "10": {return ["false",...left.slice(1),...right.slice(1)]} break;
                    case "11": {return ["true",...left.slice(1),...right.slice(1)] } break;
                    case "02": {return ["false",...left.slice(1),...right.slice(1)]} break;
                    case "12": {return [rightName,...left.slice(1),...right.slice(1)]} break;
                    case "20": {return ["false",...left.slice(1),...right.slice(1)] } break;
                    case "21": {return [leftName,...left.slice(1),...right.slice(1)] } break;
                    case "22": {
                        return [`temp${++this.tempExistName}`,
                            `data remove storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${this.tempExistName}`,
                            ...left.slice(1), ...right.slice(1),
                            `execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${leftName} if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${rightName} run data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${this.tempExistName} set value 1b`]
                    } break;
                }
            } break;
            case "|": {
                switch (mos) {
                    case "00": {return ["false",...left.slice(1),...right.slice(1)] } break;
                    case "01": {return ["true",...left.slice(1),...right.slice(1)] } break;
                    case "10": {return ["true",...left.slice(1),...right.slice(1)]} break;
                    case "11": {return ["true",...left.slice(1),...right.slice(1)] } break;
                    case "02": {return [rightName,...left.slice(1),...right.slice(1)]} break;
                    case "12": {return ["true",...left.slice(1),...right.slice(1)]} break;
                    case "20": {return [leftName,...left.slice(1),...right.slice(1)] } break;
                    case "21": {return ["true",...left.slice(1),...right.slice(1)] } break;
                    case "22": {
                        return [`temp${++this.tempExistName}`,
                            `data remove storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${this.tempExistName}`,
                            ...left.slice(1), ...right.slice(1),
                            `execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${leftName} run data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${this.tempExistName} set value 1b`,
                            `execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${rightName} run data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${this.tempExistName} set value 1b`]
                    } break;
                }
            } break;
            case '&&': {
                switch (mos) {
                    case "00": {return ["false",...left.slice(1)] } break;
                    case "01": {return ["false",...left.slice(1)] } break;
                    case "10": {return ["false",...left.slice(1),...right.slice(1)]} break;
                    case "11": {return ["true",...left.slice(1),...right.slice(1)] } break;
                    case "02": {return ["false",...left.slice(1)]} break;
                    case "12": {return [rightName,...left.slice(1),...right.slice(1)]} break;
                    case "20": {return ["false",...left.slice(1),...right.slice(1)] } break;
                    case "21": {return [leftName,...left.slice(1),...right.slice(1)] } break;
                    case "22": {
                        const newExprName = ++this.tempExistName
                        if (this.option.existExpression?.everyConditionNewFunctionFile&&right.length>2) {
                            const namespace = this.getNewTempFunctionNamespaceId("and_right")
                            this.addNewFunction(namespace,()=>right.slice(1))
                            
                            return [`temp${newExprName}`,
                                /* bool a=false */                 `data remove storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName}`,
                                /* getcond1 */                     ...left.slice(1),
                                /* if cond1 -> a=true */           `execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${leftName} run data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} set value 1b`,
                                /* if a -> getcond2 */             `execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} run function ${namespace}`,
                                /* if a unless cond2 -> a=false */ `execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} unless data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${rightName} run data remove storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName}`
                            ]
                        }
                        else {
                            return [`temp${newExprName}`,
                                `data remove storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName}`,
                                ...left.slice(1),
                                `execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${leftName} run data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} set value 1b`,
                                ...right.slice(1).map(command => `execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} run ${command}`),
                                `execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} unless data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${rightName} run data remove storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName}`
                            ]
                        }
                        
                    } break;
                }
            } break;
            case '||': {
                switch (mos) {
                    case "00": { return ["false", ...left.slice(1),...right.slice(1)] } break;
                    case "01": { return ["true", ...left.slice(1),...right.slice(1)] } break;
                    case "10": { return ["true", ...left.slice(1)] } break;
                    case "11": { return ["true", ...left.slice(1)] } break;
                    case "02": { return [rightName, ...left.slice(1),...right.slice(1)] } break;
                    case "12": { return ["true", ...left.slice(1)] } break;
                    case "20": { return [leftName, ...left.slice(1), ...right.slice(1)] } break;
                    case "21": { return ["true", ...left.slice(1), ...right.slice(1)] } break;
                    case "22": {
                        const newExprName = ++this.tempExistName
                        if (this.option.existExpression?.everyConditionNewFunctionFile&&right.length>2) {
                            const namespace = this.getNewTempFunctionNamespaceId("or_right")
                            this.addNewFunction(namespace,()=>right.slice(1))
                            return [`temp${newExprName}`,
                                /* bool a=false */                `data remove storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName}`,
                                /* getcond1 */                    ...left.slice(1),
                                /* if cond1 -> a=true */          `execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${leftName} run data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} set value 1b`,
                                /* unless a -> getcond2 */        `execute unless data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} run function ${namespace}`,
                                /* unless a if cond2- > a=true */ `execute unless data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${rightName} run data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} set value 1b`
                                ]
                        }
                        else {
                            return [`temp${newExprName}`,
                            `data remove storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName}`,
                            ...left.slice(1),
                            `execute unless data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${leftName} run data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} set value 1b`,
                            ...right.slice(1).map(command => `execute unless data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} run ${command}`),
                            `execute unless data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${rightName} run data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${newExprName} set value 1b`
                            ]
                        }
                        
                    } break;
                }
            } break; 
        }
        return []
    }

    visitExistExpressionExec(ctx: ExistExpressionExecContext) {
        let command = "execute"
        for (const context of ctx.execChild()) {
            command = `${command} ${this.v(context)}`
        }
        return [`temp${++this.tempExistName}`,`${command} run data data modify ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${this.tempExistName} set value 1b`]
    }
    visitExisitExpressionFuncRun(ctx: ExisitExpressionFuncRunContext) {
        const res = this.visit(ctx)
        return [`temp${++this.tempExistName}`,...res.slice(1),`execute if data ${res[0]} run data modify ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${this.tempExistName} set value 1b`]
    }
    visitExistExpressionId(ctx: ExistExpressionIdContext) {
        return [`temp${++this.tempExistName}`,`execute if data ${this.v(ctx.dataIdentifier())} run data modify ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${this.tempExistName} set value 1b`]
    }
    visitExistExpressionTrue(ctx: ExistExpressionTrueContext){return ["true"]}
    visitExistExpressionFalse(ctx: ExistExpressionFalseContext){return ["false"]}
    visitExistExpressionNot(ctx: ExistExpressionNotContext) {
        const res = this.visit(ctx.existExpression())
        if (res[0] == "true") { res[0] = "false"; return res }
        else if (res[0] == "false") { res[0] = "true"; return res }
        else {
            return [`temp${++this.tempExistName}`,
                `data remove storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${this.tempExistName}`,
                ...res.slice(1),
                `execute unless data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${res[0]} run data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].temp${this.tempExistName} set value 1b`]
        }
    }
    visitExistExpressionBitAnd(ctx: ExistExpressionBitAndContext) {return this.visitExistExpressionOperationUtils(ctx)}
    visitExistExpressionBitOr(ctx: ExistExpressionBitOrContext) {return this.visitExistExpressionOperationUtils(ctx)}
    visitExistExpressionAnd(ctx: ExistExpressionAndContext) {return this.visitExistExpressionOperationUtils(ctx)}
    visitExistExpressionOr(ctx: ExistExpressionOrContext) {return this.visitExistExpressionOperationUtils(ctx)}
    visitExistExpressionParen(ctx: ExistExpressionParenContext){return this.visit(ctx.existExpression())}

    visitIfStatement(ctx: IfStatementContext) {
        this.setUsedExistExpressionNow()
        const existCommands = this.visit(ctx.existExpression())
        const runCommand = this.visit(ctx.execRunChild())
        let elseStatement:string[] = []
        if (ctx.ifElseStatement() !== undefined) {
            const elseCommand = this.v(ctx.ifElseStatement()!!)
            elseStatement = [`execute unless data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame.${existCommands[0]} run ${elseCommand}`]
        }
        return [...existCommands.slice(1),
            `execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame.${existCommands[0]} run ${runCommand}`,
            ...elseStatement
        ]        
    }
    visitIfElseSIfS(ctx: IfElseSIfSContext) {
        return [this.addNewFunction(this.getNewTempFunctionNamespaceId("else"), () =>
            this.visit(ctx.ifStatement()))]
    }
    visitWhileStatementExist(ctx: WhileStatementExistContext) {
        this.setUsedExistExpressionNow()
        const commands = this.visit(ctx.existExpression())
        return [
            ...commands.slice(1),
            this.visitLoopUtils(`execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${commands[0]}`,
                this.v(ctx.execRunChild()))
        ]
    }
    visitWhileStatementExec(ctx: WhileStatementExecContext) {
        let command = "execute"
        for (const context of ctx.execChild()) {
            command = `${command} ${this.v(context)}`
        }
        return [this.visitLoopUtils(command,this.v(ctx.execRunChild())) ]       
    }
    visitLoopUtils(executePart:string, runCommand:string, ...left:string[]) {
        let command = executePart
        let namespace = ""
        if (runCommand.slice(0, 8) == "function") {
            namespace = runCommand.slice(9)
            command = `${command} run ${runCommand}`
        }
        else {
            namespace = this.getNewTempFunctionNamespaceId("while")
            command = `${command} run function ${namespace}`
            this.addNewFunction(namespace, () => [runCommand],false)
        }
        this.mcfunctions[namespace].push(...left)
        this.mcfunctions[namespace].push(command)
        return command
    }
    visitForStatement(ctx: ForStatementContext) {
        //TODO: typecheck
        if (ctx.dataOperationExpression() instanceof DataMergeContext) {
            throw new JustMCFSimplifyError("for statement with error data list which has no data identifier")
        }
        const identifierContext = ctx.dataOperationExpression() as DataOperationIdentifierContext
        const dataIdentifier = this.visit(identifierContext.dataIdentifier())
        const dataCommands = this.visit(ctx.dataOperationExpression())
        const [scbNumber, scbName] = this.getVaildTempScbTargetName("loop")
        const res = [
            `execute store result score ${scbName} run data get ${dataIdentifier}`,
            this.visitLoopUtils(`execute if score ${scbName} matches 1.. `, this.v(ctx.execRunChild()),
                `data modify ${dataIdentifier} append from ${dataIdentifier}[0]`,
                `data remove ${dataIdentifier}[0]`,
                `scoreboard players remove ${scbName} 1`
            )
        ]
        this.removeUnusedTempScbTargetName(scbNumber)
        return res
    }

    //TODO: type check
    visitInterfaceSIdentifier(ctx: InterfaceSIdentifierContext) {return[`data modify ${this.v(ctx.dataIdentifier())} set value ${this.v(ctx.nbt())}`] }
    visitInterfaceSNamespace(ctx: InterfaceSNamespaceContext) {return [`data merge storage ${this.v(ctx.nameSpaceStorage())} ${this.v(ctx.nbt())}`]}


    visitNbt(ctx: NbtContext) { return [ctx.text.replace("n{", "{").replace("n[", "[")] }
    visitJson(ctx: JsonContext) { return [ctx.text.replace("j{", "{").replace("j[", "[")] }
    visitNbtPath(ctx: NbtPathContext) { return [ctx.text] }
    // visitSnbtValue?: ((ctx: SnbtValueContext) => string[]) | undefined;
    visitSnbt(ctx: SnbtContext){return [ctx.text]}
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



    visitSelectorCompound(ctx:SelectorCompoundContext,nodes: ParseTree[]) {
        const [selector, mode] = this.visit(ctx.selector())
        if (mode == "final") {
            return nodes.flatMap(context =>
                this.visit(context).map(command => command.replace("$$", selector)))
        }
        else {
            const namespace = this.getNewTempFunctionNamespaceId("selector")
            this.addNewFunction(namespace, () =>
                nodes.flatMap(context =>
                this.visit(context).map(command => command.replace("$$", "@s"))))

            return [`execute as ${selector} run function ${namespace}`]
        }
    }

    //because use string[] as the result type, need a new method to get first child of answer
    //visitAndReturnFirst
    v(tree: ParseTree) {
        return this.visit(tree)[0]
    }
}

interface SelectorCompoundContext extends ParseTree{
    selector(): SelectorContext
}
interface DataOperationIdentifierContext extends DataOperationExpressionContext{
    dataIdentifier(): DataIdentifierContext
}

class JustMCFSimplifyError extends Error {
    constructor(message: string) {
        super(message);
    }
}

function insertIntoNbt([key, type, mode, ...value]:string[], nbt: string) {
    if (type == "List") {
        if (mode == "append") {
            const reg = new RegExp(`${key}\\s*:\\s*\\[`, 'g')
            if (reg.test(nbt)) return nbt.replace(reg, `${key}:[${value.join(",")}`)
            else return nbt.replace('{',`{${key}:[${value.join(",")}]`)
        }
    }
    else if (type == "IntArray") {
        if (mode == "replace") {
            const reg = new RegExp(`${key}\\s*:\\s*\\[I;(.)+?\\]`,'g')
            if (reg.test(nbt)) return nbt.replace(reg, `${key}:${value[0]}`)
            else return nbt.replace('{',`{${key}:${value[0]}`)
        }
    }
    return ""
}