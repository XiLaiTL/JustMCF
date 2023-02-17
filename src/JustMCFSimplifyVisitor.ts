import { ParseTree } from 'antlr4ts/tree/ParseTree.js';
import { FuncTagSettingsReplaceContext, FuncTagSettingsReplacedContext, FuncTagSIFuncImproveSContext, FuncTagSIFuncSContext, FuncTagSIFuncTagSContext, NameSpaceBiomeContext, NameSpaceBlockContext, NameSpaceBossbarContext, NameSpaceDimContext, NameSpaceFuncContext, NameSpaceItemContext, NameSpaceItemModifierContext, NameSpaceLootContext, NameSpacePredicateContext, NameSpaceSettingsBiomeContext, NameSpaceSettingsBossbarContext, NameSpaceSettingsDefaultContext, NameSpaceSettingsDimContext, NameSpaceSettingsItemContext, NameSpaceSettingsItemModifierContext, NameSpaceSettingsJustDefaultContext, NameSpaceSettingsLootContext, NameSpaceSettingsPredicateContext, NameSpaceSettingsStorageContext, NameSpaceStorageContext, TagNameSpaceBlockContext, TagNameSpaceContext, TagNameSpaceEntityContext, TagNameSpaceFuncContext, TagNameSpaceItemContext, ScbPlayerSIScbListContext, ScbObjSDeclareSingleContext, CriterionContext, BossbarSDeclareContext, BossbarSOperationContext, BossbarSIGetContext, BossbarSISetColorContext, BossbarSISetMaxContext, BossbarSISetNameContext, BossbarSISetPlayerContext, BossbarSISetPlayerNullContext, BossbarSISetStyleContext, BossbarSISetValueContext, BossbarSISetVisibleContext, BossbarOpExprGetContext, BossbarOpExprAssignValueContext, BossbarOpExprAssignMaxContext, TitleSCompoundContext, BossbarSIRemoveContext, TitleSSelectorCompoundContext, TitleSISelectorSingleContext, TitleSISelectorCompoundContext, TitleSSIJsonContext, TitleSSIClearContext, TitleSSIResetContext, TitleSSITimesContext, TitleISIJsonContext, TitleISIClearContext, TitleISIResetContext, TitleISITimesContext, DisplaySCompoundContext, AttrISIGetBaseContext, AttrISIGetContext, AttrISIModifierAddContext, AttrISIModifierGetContext, AttrISIModifierRemoveContext, AttrISISetBaseContext, AttrSCompoundContext, AttrSISelectorCompoundContext, AttrSISingleContext, AttrSSelectorCompoundContext, BlockSICloneContext, BlockSICloneFilteredContext, BlockSIFillContext, BlockSIFillReplaceContext, BlockSISetblockContext, ClearISIContext, DisplayISIBossbarContext, DisplayISITextContext, DisplayISITitleCompoundContext, DisplaySISelectorCompoundContext, DisplaySISelectorSingleContext, DisplaySSelectorCompoundContext, EffectISIClearAllContext, EffectISIClearContext, EffectISIGiveSpContext, EffectISIGiveContext, EntityISIAttrCompoundContext, EntityISIDisplayCompoundContext, EntityISIExecContext, EntityISIItemCompoundContext, EntityISIKillContext, EntityISILootCompoundContext, EntityISITitleCompoundContext, EntitySCompoundContext, EntitySDeclareContext, EntitySDeclarePlayerContext, EntitySISelectorCompoundContext, EntitySSelectorCompoundContext, GiveISIContext, ItemISIModifyContext, ItemISIReplaceFromBlockContext, ItemISIReplaceFromEntityContext, ItemISIReplaceWithContext, ItemSCompoundContext, ItemSIBlockContext, ItemSIEntityContext, ItemSIGiveAndClearContext, ItemSISelectorNestContext, ItemSSelectorCompoundContext, LootSCompoundContext, LootSIGiveContext, LootSIInsertContext, LootSIReplaceBlockContext, LootSIReplaceEntityContext, LootSISelectorNestContext, LootSISpawnContext, LootSourceFishHandContext, LootSourceFishToolContext, LootSourceKillContext, LootSourceLootContext, LootSourceMineHandContext, LootSourceMineToolContext, LootSSelectorCompoundContext, TagISIAddContext, TagISIListContext, TagISIRemoveContext, TpISIDestinationContext, TpISIFacingContext, TpISIFacingEntityContext, TpISIPosContext, TpISIRotatedContext, TpISIRotatedDivContext, LootIndependentStatementInnerGiveContext, LootIndependentStatementInnerReplaceEntityContext, Item_slotContext, Item_predicateContext, SnbtContext, Block_predicateContext, BlockStatementContext, NameSpaceEntityContext, NameSpaceSettingsEntityContext, EntitySDeclareWithNameContext, EntityDeclareSITagContext, ExistExpressionExecContext, AcceptableNameContext, BlockIdentifierContext, BlockstateContext, DataBlockContext, DataEntityContext, DataGetContext, DataMergeBlockContext, DataMergeEntityContext, DataMergeStorageContext, DataModifyAppendFromContext, DataModifyAppendValueContext, DataModifyInsertFromContext, DataModifyInsertValueContext, DataModifyMergeFromContext, DataModifyMergeValueContext, DataModifyPrependFromContext, DataModifyPrependValueContext, DataModifySetFromContext, DataModifySetValueContext, DataRemoveContext, DataStorageContext, ExecAlignContext, ExecAnchoredContext, ExecAnonymousRunContext, ExecAsContext, ExecAtContext, ExecDirectRunContext, ExecFacingEntityContext, ExecFacingPosContext, ExecIfBiomeContext, ExecIfBlockContext, ExecIfBlocksContext, ExecIfDataContext, ExecIfEntityContext, ExecIfScoreContext, ExecIfScoreMatchesContext, ExecInContext, ExecNamedRunContext, ExecPositionedPosContext, ExecPostionedAsContext, ExecPredicateContext, ExecRotatedAsContext, ExecRotatedPosContext, ExecStoreContext, ExecStoreResultBossbarContext, ExecStoreResultDataContext, ExecStoreResultScoreContext, ExecStoreSuccessBossbarContext, ExecStoreSuccessDataContext, ExecStoreSuccessScoreContext, ExecWithoutRunOrChildContext, ExecWithRunOrChildContext, ExistExpressionAndContext, ExistExpressionBitAndContext, ExistExpressionBitOrContext, ExistExpressionFalseContext, ExistExpressionIdContext, ExistExpressionNotContext, ExistExpressionOrContext, ExistExpressionTrueContext, FuncRunStatementContext, FuncStatementContext, FuncTagStatementContext, JsonContext, LeagalCommandContext, McfFileContext, NameSpaceContext, NameSpaceSettingsBlockContext, NameSpaceSettingsFuncContext, NameSpaceStatementContext, NbtContext, NbtNameContext, NbtPathContext, NoInExecStatementRunFuncContext, NoInExecStatementStoreContext, Pos1Context, Pos2IdentifierContext, Pos3IdentifierContext, Pos5IdentifierContext, RegisterNameContext, ResourceLocationContext, ScbAddContext, ScbFuncExpressionContext, ScbGetContext, ScbCoreIdentifierContext, ScbIdExpressionContext, ScbObjSDeclareDefaultContext, ScbObjSDeclareWithNameContext, ScbObjSOperationContext, ScbOptAddAssignContext, ScbOptAddSubExpressionContext, ScbOptAssignContext, ScbOptDivAssignContext, ScbOptExcFuncContext, ScbOptExpressionContext, ScbOptMaxFuncContext, ScbOptMinFuncContext, ScbOptModAssignContext, ScbOptMulAssignContext, ScbOptMulDivModExpressionContext, ScbOptSubAssignContext, ScbParenExpressionContext, ScbPlayerStatementContext, ScbRemoveContext, ScbResetContext, ScbSetContext, ScbSIDisplayContext, ScbSIDisplaynameContext, ScbSingleOperationExpressionContext, ScbSIRemoveContext, ScbSIRendertypeContext, ScbTempNumberExpressionContext, SelectorContext, WhileStatementExecContext, WhileStatementExistContext, IfStatementContext, ForStatementContext, DataSCompoundContext, DataSIdentifierCompoundContext, DataStorageWithEnvContext, DataStorageLocalContext, FuncImproveStatementContext, YieldStatementContext, FuncImproveRunExpressionContext, ExisitExpressionFuncRunContext, FuncImproveRunStatementContext, DataAssignExistExpressionContext, ExistExpressionParenContext, InterfaceSIdentifierContext, InterfaceSNamespaceContext, ExistExpressionContext, IfElseSIfSContext, DataMergeContext, DataOperationExpressionContext, DataIdentifierContext, BoolValueContext, NumberTypeContext, ScbCompareNumberContext, PlayerNameContext, FuncTagSIFuncRunSContext, NamespaceSetStatementContext, NumberContext, DataStorageIdentifierContext, DataEntityIdentifierContext, DataBlockIdentifierContext, StringContext, ScbIdentifierContext, NbtPathWithoutCompoundContext, EntityExpressionContext, ScbOptDivAssignNumberContext, ScbOptModAssignNumberContext, ScbOptMulAssignNumberContext, ReturnStatementContext, BreakStatementContext, ContinueStatementContext, SelectorParamPredicateContext, SelectorAdvmPartCriteriaContext, SelectorAdvmPartDirectContext, SelectorFakeNameContext, SelectorNameContext, SelectorParamAdvmContext, SelectorParamDPosContext, SelectorParamDXYZContext, SelectorParamDistanceContext, SelectorParamGamemodeContext, SelectorParamLevelContext, SelectorParamLimitContext, SelectorParamLimitInfContext, SelectorParamLimitNumberContext, SelectorParamNameContext, SelectorParamNbtCompoundContext, SelectorParamNbtContext, SelectorParamPosContext, SelectorParamRotContext, SelectorParamRotationContext, SelectorParamScoreCompoundContext, SelectorParamScoresContext, SelectorParamSortContext, SelectorParamTagContext, SelectorParamTeamContext, SelectorParamTypeContext, SelectorParamXYZContext, SelectorParamsContext, SelectorScoresPartCompareContext, SelectorScoresPartRangeContext, SelectorTypeNotContext, SelectorTypeSingleContext, SelectorWithParamsContext, SelectorTypeContext, SelectorNbtCompoundContext, SelectorScoresPartContext, SelectorAdvancementsCriteriaContext, NameSpaceAdvancementContext, NameSpaceSettingsAdvmContext, IntRangeContext, PositiveNumberRangeContext, NumberRangeContext, AcceptableNameWithNumberContext, AcceptableNameWithoutPointWithKeyContext } from './antlr/JustMCFParser.js';
import { JustMCFVisitor } from "./antlr/JustMCFVisitor.js";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor.js";
import { UUID } from './lib/UUIDUtils.js';
import { JustMCFResult, namespaceInfo, option } from './JustMCFResult.js';
import { toSnakeCase } from './lib/StringUtils.js';
import { ArrayHelper } from './lib/ArrayHelper.js';

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
    private functions: {
        [mcfunctionFileName: string]: {
        using:boolean,
        lines: string[],
        //function namespace id `namespace:resource_loaction`  + number
        anonymousChildFunctionTimes: number, 
        //if the function is used exist expression, it should add exist_stack_frame
        isUsedExistExpression: boolean,
        type:string,
        has: {
            [tag:string]:boolean
        }
    }
    } = {};
    private functionTypeStack: string[] = [];
    private mcfunctions: { [mcfunctionFileName: string]: string } = {};
    initNewFunction(namespaceId:string,_using=true) {
        if (this.functions[namespaceId] === undefined) this.functions[namespaceId] = {
            using: _using,
            lines: [],anonymousChildFunctionTimes:0,isUsedExistExpression:false, type:"normal", has:{ break:true,continue:true,return:true}
        }
    }
    addNewFunction(functionNamespaceId: string, getCommands: () => string[], option: { flat: boolean, improveFunction?: boolean } = { flat: true }) {

        this.initNewFunction(functionNamespaceId)

        if (option?.improveFunction == true) this.tempFunctionNamespaceIdStack.push(functionNamespaceId.replace("/start",""))
        else this.tempFunctionNamespaceIdStack.push(functionNamespaceId)
        
        const commands = getCommands()
        if (option.flat && this.option.functionStatement?.flatWhenOneCommand && commands.length == 1) {
            if (!commands[0].includes("execute")) {
                this.functions[functionNamespaceId].using = false;
                this.tempFunctionNamespaceIdStack.pop()
                return commands[0]
            }
        }

        
        this.functions[functionNamespaceId].type = this.functionTypeStack[this.functionTypeStack.length - 1]
        this.functions[functionNamespaceId].lines = commands

        const hasFunction = /(^function$)|(run function)/g
        const has: {[tag:string]:RegExp} = {
            break: /^# break$/g,
            continue: /^# continue$/g,
            return: /^# return/g
        }
        const listLength = this.functions[functionNamespaceId].lines.length
        for (let i = 0; i < listLength; i++) {
            const command = this.functions[functionNamespaceId].lines[i]
            //找到function语句，判断这个function里面是否含有break或者return
            if (hasFunction.test(command)) {
                const runFuncNamespace = command.replace(/.*(run)?\s?function\s/, "")
                let execute_command = "execute"
                if (this.functions[runFuncNamespace] !== undefined) {
                    //如果是可以操作的function
                    for (const tag of ["break", "continue", "return"]) {
                        if (this.functions[runFuncNamespace].has[tag]) {
                            execute_command = `${execute_command} unless data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${tag}`
                            //传染性，从最里层往外传染。判断当前函数的类型，终止对应的传染
                            switch (this.functions[functionNamespaceId].type) {
                                case "for":
                                case "while": {
                                    if (tag == "continue") this.functions[functionNamespaceId].has[tag] = true
                                } break;
                                case "improve": {
                                    if (tag != "continue") this.functions[functionNamespaceId].has[tag] = true
                                } break;
                                default: this.functions[functionNamespaceId].has[tag] = true
                            }
                        }
                    }
                }

                if (listLength - 1 > i && execute_command != "execute" ) {
                    const newNamespace = this.getNewTempFunctionNamespaceId(`after`)
                    const leftCommands = this.functions[functionNamespaceId].lines.splice(i + 1, listLength - i)
                    this.functionTypeStack.push("normal")
                    const leftCommand = this.addNewFunction(newNamespace, () => leftCommands)
                    this.functionTypeStack.pop()
                    this.functions[functionNamespaceId].lines.push(`${execute_command} run ${leftCommand}`)
                }
            }
            for (const tag of ["break", "continue", "return"]) { 
                if (has[tag].test(command)) {
                    const shouldDeal = ((tag == "break"||(tag=="continue")) && (this.functionTypeStack.includes("while") || this.functionTypeStack.includes("for")))
                        ||(tag == "return" && this.functionTypeStack.includes("improve") )
                    if (shouldDeal) {
                        this.functions[functionNamespaceId].has[tag] = true
                        this.functions[functionNamespaceId].lines[i] = `data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${tag} set value 1b`
                        if (listLength - 1 > i) {
                            console.warn(`function ${functionNamespaceId} has unreachable command afer ${tag}`)
                            this.functions[functionNamespaceId].lines.splice(i, listLength - i)
                            i = listLength
                        }
                        break;
                    }
                }
            }
        }
        if (this.getIsUsedExistExpressionNow()) {
            this.functions[functionNamespaceId].lines = [
                `data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame prepend value {}`, // 为子函数创建变量内存空间
                ...this.functions[functionNamespaceId].lines,
                `data remove storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0]`, // 销毁子函数的变量内存空间
            ]
        }
        this.tempFunctionNamespaceIdStack.pop()

        return `function ${functionNamespaceId}`
    }
    //function namespace stack, to remember the namespace to be used in anonymous function
    private tempFunctionNamespaceIdStack: string[] = [];
    getNewTempFunctionNamespaceId(usage?:string) {
        const namespace = this.tempFunctionNamespaceIdStack[this.tempFunctionNamespaceIdStack.length - 1]
        this.functions[namespace].anonymousChildFunctionTimes += 1
        return `${namespace}/${usage}${this.functions[namespace].anonymousChildFunctionTimes}`
    }
    getIsUsedExistExpressionNow() {
        return this.functions[this.tempFunctionNamespaceIdStack[this.tempFunctionNamespaceIdStack.length - 1]].isUsedExistExpression
    }
    setUsedExistExpressionNow() {
        this.functions[this.tempFunctionNamespaceIdStack[this.tempFunctionNamespaceIdStack.length - 1]].isUsedExistExpression = true
    }

    //all function tags
    private functionTags: { [functionTagFileName: string]: { replace: boolean, values: string[] } } = {};
    //all improve functions' types
    private improveFunctionTypes: { [functionName: string]: improveFunctionType } = {};
    //improve function namespace stack, used in return statement
    private improveFunctionNamespaceIdStack: string[] = [];
    //all namespace `namespace`
    private namespaceStack: namespaceInfo[] = [];

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
        ArrayHelper.remove(this.tempScbTargetName,rightTempNumber)
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
        const initNamespaceId = `${this.option.namespace?.func}:init`
        this.initNewFunction(initNamespaceId)
        if (this.constScbInitFunc.length > 0) 
            this.functions[initNamespaceId].lines.push(`scoreboard objectives add ${this.option.scbExpression?.constNumberScbObjectiveName} dummy "const nummber scoreboard"`)
        if (this.tempScbTargetName.length > 0) 
            this.functions[initNamespaceId].lines.push(`scoreboard objectives add ${this.option.scbExpression?.tempScbObjectiveName} dummy "temp scoreboard"`)
        for (const num of this.constScbInitFunc) {
            this.functions[initNamespaceId].lines.push(`scoreboard players set ${num} ${this.option.scbExpression?.constNumberScbObjectiveName} ${num}`)
        }
        if (this.functionTags["#minecraft:init"] === undefined) this.functionTags["#minecraft:init"] = { replace: false, values: [] }
        this.functionTags["#minecraft:init"].values.push(initNamespaceId)
        for (const name in this.functions) {
            if(this.functions[name].using) this.mcfunctions[name] = this.functions[name].lines.join('\n')
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
    

//#region Deal the Identifiers
    // visitDataIdentifier?: ((ctx: DataIdentifierContext) => string[]) | undefined;
    visitDataStorageLocal(ctx: DataStorageLocalContext){
        return [`storage ${this.option.functionStatement?.stackNamespaceId!!} stack_frame[0].${this.v(ctx.nbtPath())}`]
    }
    visitDataStorageWithEnv(ctx: DataStorageWithEnvContext) {
        const [namespace,nbtpath] = this.getDataStorageIdentifier()
        return [`storage ${namespace} ${nbtpath != "" ? nbtpath + "." : ""}${this.v(ctx.nbtPathWithoutCompound())}`]
        
    }
    visitDataStorageIdentifier(ctx: DataStorageIdentifierContext) { return [`storage ${this.v(ctx.nameSpaceStorage())} ${this.v(ctx.nbtPath())}`] }
    visitDataEntityIdentifier(ctx: DataEntityIdentifierContext) { return [`entity ${this.v(ctx.selector())} ${this.v(ctx.nbtPath())}`] }
    visitDataBlockIdentifier(ctx: DataBlockIdentifierContext) { return [`block ${this.v(ctx.pos3Identifier())} ${this.v(ctx.nbtPath())}`] }
    visitDataStorage(ctx: DataStorageContext) { return this.visit(ctx.dataStorageIdentifier()) }
    visitDataEntity(ctx: DataEntityContext) { return this.visit(ctx.dataEntityIdentifier()) }
    visitDataBlock(ctx: DataBlockContext) { return this.visit(ctx.dataBlockIdentifier()) }
    visitScbIdentifier(ctx: ScbIdentifierContext){return this.visit(ctx.scbCoreIdentifier())}
    visitScbCoreIdentifier(ctx: ScbCoreIdentifierContext) { return [`${this.v(ctx.selector())} ${this.v(ctx.nbtName())}`] }
    visitPos3Identifier(ctx: Pos3IdentifierContext) { return [`${this.v(ctx.pos1(0))} ${this.v(ctx.pos1(1))} ${this.v(ctx.pos1(2))}`]}
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
    visitNumber(ctx: NumberContext){return [ctx.text]}
    visitString(ctx: StringContext){return [ctx.text]}
    visitIntRange(ctx: IntRangeContext) { return [ctx.text] }
    visitPositiveNumberRange(ctx: PositiveNumberRangeContext) { return [ctx.text] } //TODO: PositiveNumber Detect
    visitNumberRange(ctx: NumberRangeContext) {return [ctx.text]}
/* Deal the Namespace And Names */
    visitNameSpaceWithType(namespace_type: keyof namespaceInfo, ctx: NameSpaceContext) {
        if (ctx.acceptableName() === undefined) {
            return`${this.namespaceStack[this.namespaceStack.length-1]!![namespace_type]}:${ctx.text}`
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
    visitNameSpaceEntity(ctx: NameSpaceEntityContext){ return[this.visitNameSpaceWithType("entity",ctx.nameSpace())] }
    visitNameSpaceAdvancement(ctx: NameSpaceAdvancementContext){ return[this.visitNameSpaceWithType("advancement",ctx.nameSpace())] }

    visitTagNameSpaceWithType(namespace_type: keyof namespaceInfo, ctx: TagNameSpaceContext) {
        return `#${this.visitNameSpaceWithType(namespace_type, ctx.nameSpace())}`
    }
    visitTagNameSpaceBlock(ctx: TagNameSpaceBlockContext){return [this.visitTagNameSpaceWithType("block",ctx.tagNameSpace())]}
    visitTagNameSpaceItem(ctx: TagNameSpaceItemContext){return [this.visitTagNameSpaceWithType("item",ctx.tagNameSpace())]}
    visitTagNameSpaceFunc(ctx: TagNameSpaceFuncContext) {
        const res = this.visitTagNameSpaceWithType("func", ctx.tagNameSpace())
        if(this.functionTags[res]===undefined) this.functionTags[res]={replace:false,values:[]}
        return [res]
    }
    visitTagNameSpaceEntity(ctx: TagNameSpaceEntityContext){return [this.visitTagNameSpaceWithType("entity",ctx.tagNameSpace())]}

    visitCriterion(ctx: CriterionContext){return [ctx.text]}
    visitAcceptableName(ctx: AcceptableNameContext) { return [toSnakeCase(ctx.text)] }
    visitAcceptableNameWithNumber(ctx: AcceptableNameWithNumberContext) { return [ctx.text] }
    visitAcceptableNameWithoutPointWithKey(ctx: AcceptableNameWithoutPointWithKeyContext) { return [ctx.text] }
    visitRegisterName(ctx: RegisterNameContext) { return [ctx.text] }
    visitNbtName(ctx: NbtNameContext) { return [ctx.text] }
    visitResourceLocation(ctx: ResourceLocationContext) { return [ctx.text] }
    visitBoolValue(ctx: BoolValueContext) { return [ctx.text] }
    visitNumberType(ctx: NumberTypeContext){return [ctx.text]}
    
//#endregion
//#region Begin 
    visitMcfFile(ctx: McfFileContext) {
        for (const fileStatementInner of ctx.fileStatementInner()) this.visit(fileStatementInner)
        return []
    }
//#endregion
//#region Namespace Statement 
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
    visitNamespaceSetStatement(ctx: NamespaceSetStatementContext){
        this.namespaceStack.push({...this.namespaceStack[this.namespaceStack.length-1]})
        if (ctx.acceptableName() !== undefined) {
            let key: (keyof namespaceInfo)
            for ( key in this.option.namespace) {
                this.namespaceStack[this.namespaceStack.length-1][key] = this.v(ctx.acceptableName()!!)
            }
        }
        for (const setting of ctx.nameSpaceSettings()) { this.visit(setting) }
        for (const inner of ctx.statementInner()) { this.visit(inner) }
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
    visitNameSpaceSettingsAdvm(ctx: NameSpaceSettingsAdvmContext){this.namespaceStack[this.namespaceStack.length-1]["advancement"] = this.v(ctx.acceptableName()); return []}

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
//#endregion

//#region Function Tag Statement
    visitFuncTagStatement(ctx: FuncTagStatementContext) {
        const name = this.v(ctx.tagNameSpaceFunc(0))
        for (const tagNameSpaceContext of ctx.tagNameSpaceFunc().slice(1)) {
            const tagName = this.v(tagNameSpaceContext)
            this.functionTags[tagName].values.push(name)
        }
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
        return  this.visit(ctx.funcTagStatement().tagNameSpaceFunc(0))
    }

    visitFuncStatement(ctx: FuncStatementContext) {
        const namespace = this.v(ctx.nameSpaceFunc())
        for (const tagNameSpaceContext of ctx.tagNameSpaceFunc()) {
            const tagName = this.v(tagNameSpaceContext)
            this.functionTags[tagName].values.push(namespace)
        }
        this.functionTypeStack.push("normal")
        this.addNewFunction(namespace, () =>
            ctx.statementInner().flatMap(context => this.visit(context)),
            {flat:false}
        )
        this.functionTypeStack.pop()

        return []
    }

    visitExecNamedRun(ctx: ExecNamedRunContext) {
        //为了和Func区分，这里直接访问下一层级
        const ctxFunc = ctx.funcStatement()
        const namespace = this.v(ctxFunc.nameSpaceFunc())
        for (const tagNameSpaceContext of ctxFunc.tagNameSpaceFunc()) {
            const tagName = this.v(tagNameSpaceContext)
            this.functionTags[tagName].values.push(namespace)
        }

        this.addNewFunction(namespace, () =>
            ctxFunc.statementInner().flatMap(context => this.visit(context)),
            {flat:false}
        )

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

        this.initNewFunction(namespace)
        this.functions[namespace].lines = [
            `data remove storage ${resStorageNamespace} output`,
            `data modify storage ${this.option.functionStatement?.stackNamespaceId} stack_frame prepend value {}`, // 为子函数创建变量内存空间
            `data modify storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame prepend value {}`, // 为exist表达式创建变量内存空间
            ...preCommands,
            startCommand, // 给子函数打电话
            `data remove storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0]`, // 销毁exist表达式的变量内存空间
            `data remove storage ${this.option.functionStatement?.stackNamespaceId} stack_frame[0]`, // 销毁子函数的变量内存空间
        ]


        this.dataStorageIdentifierStack.push([namespace,"stack_frame[0]"])
        this.improveFunctionNamespaceIdStack.push(namespace)
        this.functionTypeStack.push("improve")
        this.addNewFunction(`${namespace}/start`,()=>ctx.statementInner().flatMap(context=>this.visit(context)),{flat:false,improveFunction:true})
        this.functionTypeStack.pop()
        this.improveFunctionNamespaceIdStack.pop()
        this.dataStorageIdentifierStack.pop()

        return []
    }
    visitContinueStatement(ctx: ContinueStatementContext) {
        if (!this.functionTypeStack.includes("while") && !this.functionTypeStack.includes("for")) { return ["# assume " + ctx.text] }
        if (ctx.nameSpaceFunc() !== undefined) {
            const namespace = this.v(ctx.nameSpaceFunc()!!)
            if (this.tempFunctionNamespaceIdStack.includes(namespace) && (this.functions[namespace].type == "while" || this.functions[namespace].type == "for")) {return ["# continue"] }
            return ["# assume"+ctx.text]
        }
        return ["# continue"]
    }
    visitBreakStatement(ctx: BreakStatementContext){
        if (!this.functionTypeStack.includes("while") && !this.functionTypeStack.includes("for")) { return ["# assume " + ctx.text] }
        return ["# break"]
    }
    visitReturnStatement(ctx: ReturnStatementContext) {
        const hasImprove = this.functionTypeStack.includes("improve");
        const hasWhile = this.functionTypeStack.includes("while");
        const hasFor = this.functionTypeStack.includes("for");
        const resStorageNamespace = this.option.functionStatement?.commonIO
            ? this.option.functionStatement.stackNamespaceId
            : this.improveFunctionNamespaceIdStack[this.improveFunctionNamespaceIdStack.length - 1]

        if (!hasImprove && !hasWhile && !hasFor) {
            return ["# assume "+ctx.text]}
        if (ctx.nameSpaceFunc() !== undefined) {
            const namespace = this.v(ctx.nameSpaceFunc()!!)
            if (this.tempFunctionNamespaceIdStack.includes(namespace)) {
                if (ctx.dataIdentifier() === undefined && (hasWhile || hasFor) && (this.functions[namespace].type == "while" || this.functions[namespace].type == "for")) {
                    return ["# break"] }
                if (hasImprove && this.functions[namespace].type == "improve") {
                    return [`data modify storage ${resStorageNamespace} output set from ${this.v(ctx.dataIdentifier()!!)}`,"# return"]}
            }
        }
        if (ctx.dataIdentifier() !== undefined) {
            return [`data modify storage ${resStorageNamespace} output set from ${this.v(ctx.dataIdentifier()!!)}`,"# return"]
        }
        return ["# return"]
        
    }
    visitYieldStatement(ctx: YieldStatementContext) {
        //TODO: type check
        if(!this.functionTypeStack.includes("improve")) return [" # assume "+ctx.text]
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
//#endregion
    visitLeagalCommand(ctx: LeagalCommandContext) {return [ctx.text]}




//#region Execute Statement 
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
        if (ctx.execRunChild() !== undefined) {
            this.functionTypeStack.push("exec")
            command = `${command} run ${this.v(ctx.execRunChild()!!)}`
            this.functionTypeStack.pop()
        }
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
        const storeScaleContext = ctx.number()
        const storeType = storeTypeContext === undefined ? "int" :this.v(storeTypeContext)
        const storeScale = storeScaleContext === undefined ? "1" : this.v(storeScaleContext)
        return [`store result ${this.v(ctx.dataIdentifier())} ${storeType} ${storeScale}`]
    }
    visitExecStoreSuccessData(ctx: ExecStoreSuccessDataContext) {
        const storeTypeContext = ctx.numberType()
        const storeScaleContext = ctx.number()
        const storeType = storeTypeContext === undefined ? "int": this.v(storeTypeContext)
        const storeScale = storeScaleContext === undefined ? "1" : this.v(storeScaleContext)
        return [`store success ${this.v(ctx.dataIdentifier())} ${storeType} ${storeScale}`]
    }
    visitExecStoreResultBossbar(ctx: ExecStoreResultBossbarContext) {return [`store result ${this.v(ctx.bossbarIdentifier())} ${(ctx._value!==undefined)? ctx._value.text:"value"}`]}
    visitExecStoreSuccessBossbar(ctx: ExecStoreSuccessBossbarContext) {return [`store success ${this.v(ctx.bossbarIdentifier())} ${(ctx._value!==undefined)? ctx._value.text:"value"}`]}
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
    visitExecIfEntity(ctx: ExecIfEntityContext) { return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} entity ${this.v(ctx.selector())}`] }
    visitExecIfScore(ctx: ExecIfScoreContext) {
        const operation = ctx.CompareOperation().text === "==" ? "=" : ctx.CompareOperation().text
        return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} score ${this.v(ctx.scbCoreIdentifier(0))} ${operation} ${this.v(ctx.scbCoreIdentifier(1))}`]
    }
    visitExecIfScoreMatches(ctx: ExecIfScoreMatchesContext) { return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} score ${this.v(ctx.scbCoreIdentifier())} matches ${ctx.intRange()!==undefined? this.v(ctx.intRange()!!):this.v(ctx.scbCompareNumber()!!)}`] }
    visitExecPredicate(ctx: ExecPredicateContext) { return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} predicate ${this.v(ctx.nameSpacePredicate())}`] }
    visitExecIfBlock(ctx: ExecIfBlockContext) { return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} block ${this.v(ctx.pos3Identifier())} ${this.v(ctx.blockIdentifier())}`] }
    visitExecIfBlocks(ctx: ExecIfBlocksContext) { return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} blocks ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.pos3Identifier(2))}`] }
    visitExecIfData(ctx: ExecIfDataContext) { return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} data ${this.v(ctx.dataIdentifier())}`] }
    visitExecIfBiome(ctx: ExecIfBiomeContext) { return [`${(ctx._cond!==undefined)?ctx._cond.text:"if"} biome ${this.v(ctx.pos3Identifier())} ${this.v(ctx.nameSpaceBiome())}`] }
    visitExecStore(ctx: ExecStoreContext) { return this.visit(ctx.execStoreChild()) }

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

//#endregion
//#region Data Statement 
    // visitDataOperationExpression?: ((ctx: DataOperationExpressionContext) => string[]) | undefined;
    visitDataMergeStorage(ctx: DataMergeStorageContext) { return [`data merge storage ${this.v(ctx.nameSpaceStorage())} ${this.v(ctx.nbt())}`] }
    visitDataMergeEntity(ctx: DataMergeEntityContext) { return [`data merge entity ${this.v(ctx.selector())} ${this.v(ctx.nbt())}`] }
    visitDataMergeBlock(ctx: DataMergeBlockContext) { return [`data merge block ${this.v(ctx.pos3Identifier())} ${this.v(ctx.nbt())}`] }
    visitDataGet(ctx: DataGetContext) { return [`data get ${this.v(ctx.dataIdentifier())}`+(ctx.number()!==undefined?` ${this.v(ctx.number()!!)}`:"")] }
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
//#endregion
//#region Scb Statement 
    // visitScbOperationExpression?: ((ctx: ScbOperationExpressionContext) => string[]) | undefined;
    visitScbGet(ctx: ScbGetContext) { return [`scoreboard players get ${this.v(ctx.scbCoreIdentifier())}`] }
    visitScbAdd(ctx: ScbAddContext) { return [`scoreboard players add ${this.v(ctx.scbCoreIdentifier())} ${ctx.NUMBER_INT().text}`] }
    visitScbRemove(ctx: ScbRemoveContext) { return [`scoreboard players remove ${this.v(ctx.scbCoreIdentifier())} ${ctx.NUMBER_INT().text}`] }
    visitScbSet(ctx: ScbSetContext) { return [`scoreboard players set ${this.v(ctx.scbCoreIdentifier())} ${ctx.NUMBER_INT().text}`] }
    visitScbOptMulAssignNumber(ctx: ScbOptMulAssignNumberContext) { return this.visitScbOptAssignNumberUtils(ctx) }
    visitScbOptDivAssignNumber(ctx: ScbOptDivAssignNumberContext) { return this.visitScbOptAssignNumberUtils(ctx) }
    visitScbOptModAssignNumber(ctx: ScbOptModAssignNumberContext) { return this.visitScbOptAssignNumberUtils(ctx) }
    visitScbOptAddAssign(ctx: ScbOptAddAssignContext) { return [`scoreboard players operation ${this.v(ctx.scbCoreIdentifier(0))} += ${this.v(ctx.scbCoreIdentifier(1))}`] }
    visitScbOptSubAssign(ctx: ScbOptSubAssignContext) { return [`scoreboard players operation ${this.v(ctx.scbCoreIdentifier(0))} -= ${this.v(ctx.scbCoreIdentifier(1))}`] }
    visitScbOptMulAssign(ctx: ScbOptMulAssignContext) { return [`scoreboard players operation ${this.v(ctx.scbCoreIdentifier(0))} *= ${this.v(ctx.scbCoreIdentifier(1))}`] }
    visitScbOptDivAssign(ctx: ScbOptDivAssignContext) { return [`scoreboard players operation ${this.v(ctx.scbCoreIdentifier(0))} /= ${this.v(ctx.scbCoreIdentifier(1))}`] }
    visitScbOptModAssign(ctx: ScbOptModAssignContext) { return [`scoreboard players operation ${this.v(ctx.scbCoreIdentifier(0))} %= ${this.v(ctx.scbCoreIdentifier(1))}`] }
    visitScbOptExcFunc(ctx: ScbOptExcFuncContext) { return [`scoreboard players operation ${this.v(ctx.scbCoreIdentifier(0))} >< ${this.v(ctx.scbCoreIdentifier(1))}`] }
    visitScbOptMinFunc(ctx: ScbOptMinFuncContext) { return [`scoreboard players operation ${this.v(ctx.scbCoreIdentifier(0))} << ${this.v(ctx.scbCoreIdentifier(1))}`] }
    visitScbOptMaxFunc(ctx: ScbOptMaxFuncContext) { return [`scoreboard players operation ${this.v(ctx.scbCoreIdentifier(0))} >> ${this.v(ctx.scbCoreIdentifier(1))}`] }
    visitScbOptAssign(ctx: ScbOptAssignContext) { return [`scoreboard players operation ${this.v(ctx.scbCoreIdentifier(0))} = ${this.v(ctx.scbCoreIdentifier(1))}`] }
    visitScbReset(ctx: ScbResetContext) { return [`scoreboard players reset ${this.v(ctx.scbCoreIdentifier())}`] } //TODO: the objective is not required
    visitScbOptExpression(ctx: ScbOptExpressionContext) {
        this.tempScbTargetName = []
        const res = this.visit(ctx.scbSingleOperationExpression())
        this.tempScbTargetName = []
        return res.slice(2).concat([`scoreboard players operation ${this.v(ctx.scbCoreIdentifier())} = ${res[1]}`])
    }

    // visitScbSingleOperationExpression?: ((ctx: ScbSingleOperationExpressionContext) => string[]) | undefined;
    visitScbOptAssignNumberUtils(ctx:  ScbOptDivAssignNumberContext | ScbOptModAssignNumberContext | ScbOptMulAssignNumberContext) {
        const num = Number.parseInt(ctx.NUMBER_INT().text);
        if (this.option?.scbExpression?.useConstNumberScbObjective) {
            if (!this.constScbInitFunc.includes(num)) this.constScbInitFunc.push(num)
            return [`scoreboard players operation ${this.v(ctx.scbCoreIdentifier())} ${ctx._op.text} ${num} ${this.option.scbExpression.constNumberScbObjectiveName}`]
        }
        else {
            const [tempNumber, tempId] = this.getVaildTempScbTargetName()
            return [ `scoreboard players set ${tempId} ${num}`,`scoreboard players operation ${this.v(ctx.scbCoreIdentifier())} ${ctx._op.text} ${tempId}`]
        }
    }
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
        const num = Number.parseInt(ctx.NUMBER_INT().text);
        if (this.option?.scbExpression?.useConstNumberScbObjective) {
            if (!this.constScbInitFunc.includes(num)) this.constScbInitFunc.push(num)
            return [`${-1}`, `${num} ${this.option.scbExpression.constNumberScbObjectiveName}`]
        }
        else {
            const [tempNumber, tempId] = this.getVaildTempScbTargetName()
            return [`${tempNumber}`, `${tempId}`, `scoreboard players set ${tempId} ${num}`]
        }
    }
    visitScbIdExpression(ctx: ScbIdExpressionContext) {
        return [`${-1}`, `${this.visit(ctx.scbCoreIdentifier())}`]
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
        const objectiveName = this.v(ctx.nbtName())
        const criterion = ctx.criterion()===undefined? 'dummy': this.v(ctx.criterion()!!)
        return [`scoreboard objectives add ${objectiveName} ${criterion} ${this.v(ctx.json())}`,...ctx.scbStatementInner().map(context=>this.v(context).replace("$$",objectiveName))]
    }
    visitScbObjSDeclareSingle(ctx: ScbObjSDeclareSingleContext) {return [`scoreboard objectives add ${this.v(ctx.nbtName())} ${this.v(ctx.criterion())}`]}
    visitScbObjSDeclareDefault(ctx: ScbObjSDeclareDefaultContext) {
        const objectiveName = this.v(ctx.nbtName())
        const criterion = ctx.criterion()===undefined? 'dummy': this.v(ctx.criterion()!!)
        return [`scoreboard objectives add ${objectiveName} ${criterion}`,...ctx.scbStatementInner().map(context=>this.v(context).replace("$$",objectiveName))]
    }
    visitScbObjSOperation(ctx: ScbObjSOperationContext) {
        const objectiveName = this.v(ctx.nbtName())
        return ctx.scbStatementInner().map(context=> this.v(context).replace("$$",objectiveName))
    }
    visitScbSIRemove(ctx: ScbSIRemoveContext) { return ["scoreboard objectives remove $$"] }
    visitScbSIDisplay(ctx: ScbSIDisplayContext) {
        const pos = this.v(ctx.acceptableName());
        const test = /^(list|sidebar|(sidebar\.team\.(black|dark_blue|dark_green|dark_aqua|dark_red|dark_purple|gold|gray|dark_gray|blue|green|aqua|red|light_purple|yellow|white)))$/.test(pos)
        if(!test) throw new JustMCFSimplifyError("scoreboard display position error")
        return [`scoreboard objectives setdisplay ${pos} $$`]
    }
    visitScbSIRendertype(ctx: ScbSIRendertypeContext){return [`scoreboard objectives modify $$ rendertype ${ctx._type.text}`]}
    visitScbSIDisplayname(ctx: ScbSIDisplaynameContext){return [`scoreboard objectives modify $$ displayname ${this.v(ctx.json())}`]}
//#endregion
//#region Bossbar Statement
    
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
    visitBossbarSISetColor(ctx: BossbarSISetColorContext) { return [`bossbar set $$ color ${ctx._color.text}`] }
    visitBossbarSISetMax(ctx: BossbarSISetMaxContext) { return [`bossbar set $$ max ${ctx.NUMBER_INT().text}`] }
    visitBossbarSISetName(ctx: BossbarSISetNameContext) { return [`bossbar set $$ name ${this.v(ctx.json())}`] }
    visitBossbarSISetPlayer(ctx: BossbarSISetPlayerContext) { return [`bossbar set $$ players ${this.v(ctx.selector())}`] }
    visitBossbarSISetPlayerNull(ctx: BossbarSISetPlayerNullContext) { return [`bossbar set $$ players`] }
    visitBossbarSISetStyle(ctx: BossbarSISetStyleContext) { return [`bossbar set $$ style ${ctx._style.text}`] }
    visitBossbarSISetValue(ctx: BossbarSISetValueContext) { return [`bossbar set $$ value ${ctx.NUMBER_INT().text}`] }
    visitBossbarSISetVisible(ctx: BossbarSISetVisibleContext) { return [`bossbar set $$ visible ${this.v(ctx.boolValue())}`] }
    visitBossbarOpExprGet(ctx: BossbarOpExprGetContext) { return [`bossbar get ${this.v(ctx.bossbarIdentifier())} ${ctx._type===undefined?"value":ctx._type.text}`] }
    visitBossbarOpExprAssignValue(ctx: BossbarOpExprAssignValueContext) { return [`bossbar set ${this.v(ctx.bossbarIdentifier())} value ${ctx.NUMBER_INT().text}`] }
    visitBossbarOpExprAssignMax(ctx: BossbarOpExprAssignMaxContext) { return [`bossbar set ${this.v(ctx.bossbarIdentifier())} max ${ctx.NUMBER_INT().text}`] }
//#endregion
//#region Title Statement
    
    visitTitleSCompound(ctx: TitleSCompoundContext) {
        return ctx.titleStatementInner().flatMap(context=>this.visit(context))
    }
    visitTitleSSelectorCompound(ctx: TitleSSelectorCompoundContext) {
        return this.visitSelectorCompound(ctx,ctx.titleSelectorStatementInner())
    }
    visitTitleSISelectorSingle(ctx: TitleSISelectorSingleContext) {
        return [ this.v(ctx.titleSelectorStatementInner()).replace("$$",this.v(ctx.selector())) ]
    }
    visitTitleSISelectorCompound(ctx: TitleSISelectorCompoundContext) {
        return this.visitSelectorCompound(ctx,ctx.titleSelectorStatementInner())
    }
    visitTitleSSIJson(ctx: TitleSSIJsonContext) { return [`title $$ ${ctx._pos.text} ${this.v(ctx.json())}`] }
    visitTitleSSIClear(ctx: TitleSSIClearContext) { return ["title $$ clear"] }
    visitTitleSSIReset(ctx: TitleSSIResetContext) { return ["title $$ reset"] }
    visitTitleSSITimes(ctx: TitleSSITimesContext) { return [`title $$ times ${this.v(ctx.number(0))} ${this.v(ctx.number(1))} ${this.v(ctx.number(2))}`] }
    visitTitleISIJson(ctx: TitleISIJsonContext) { return [`title $$ ${ctx._pos.text} ${this.v(ctx.json())}`] }
    visitTitleISIClear(ctx: TitleISIClearContext) { return ["title $$ clear"] }
    visitTitleISIReset(ctx: TitleISIResetContext) { return ["title $$ reset"] }
    visitTitleISITimes(ctx: TitleISITimesContext){return [`title $$ times ${this.v(ctx.number(0))} ${this.v(ctx.number(1))} ${this.v(ctx.number(2))}`]}
//#endregion
//#region Display Statement 

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
    visitDisplayISIBossbar(ctx: DisplayISIBossbarContext) {
        const namespace =this.v(ctx.nameSpaceBossbar())
        const commands = []
        if (ctx.json()!==undefined) commands.push(`bossbar add ${namespace} ${this.v(ctx.json()!!)}`)
        return [...commands,`bossbar set ${namespace} players $$`]
    }
//#endregion   
//#region Item Statement 
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
    visitLootSIGive(ctx: LootSIGiveContext) {return [this.v(ctx.lootIndependentStatementInnerGive()).replace("$$",this.v(ctx.selector()))]}
    visitLootSIReplaceEntity(ctx: LootSIReplaceEntityContext) {return [this.v(ctx.lootIndependentStatementInnerReplaceEntity()).replace("$$",this.v(ctx.selector()))]}
    visitLootSISelectorNest(ctx: LootSISelectorNestContext) {
        const selector =this.v(ctx.selector())
        return ctx.lootSelectorStatementInner().flatMap(context =>
            this.visit(context).map(command => command.replace("$$", selector)))
    }
    visitLootIndependentStatementInnerGive(ctx: LootIndependentStatementInnerGiveContext){ return [`loot give $$ ${this.v(ctx.lootSource())}`]}
    visitLootIndependentStatementInnerReplaceEntity(ctx: LootIndependentStatementInnerReplaceEntityContext) {
        return [`loot replace entity $$ ${this.v(ctx.item_slot())} ${this.v(ctx.lootSource())}`+(ctx.NUMBER_INT()!==undefined?` ${ctx.NUMBER_INT()?.text}`:"")]
    }
    visitLootSourceFishHand(ctx: LootSourceFishHandContext) {
        return [`fish ${this.v(ctx.nameSpaceLoot())} ${this.v(ctx.pos3Identifier())}`+(ctx._hand!==undefined?` ${ctx._hand.text}`:"")]
    }
    visitLootSourceFishTool(ctx: LootSourceFishToolContext) {return [`fish ${this.v(ctx.nameSpaceLoot())} ${this.v(ctx.pos3Identifier())} ${this.v(ctx.nameSpaceItem())}` ]}
    visitLootSourceLoot(ctx: LootSourceLootContext) {return [`loot ${this.v(ctx.nameSpaceLoot())}`]}
    visitLootSourceKill(ctx: LootSourceKillContext) {return [`kill ${this.v(ctx.selector())}`]}
    visitLootSourceMineHand(ctx: LootSourceMineHandContext) {
        return [`mine ${this.v(ctx.pos3Identifier())}`+(ctx._hand!==undefined?` ${ctx._hand.text}`:"")]
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
        return [`item replace entity $$ ${this.v(ctx.item_slot())} with ${this.v(ctx.nameSpaceItem())}`+(ctx.NUMBER_INT()!==undefined?` ${ctx.NUMBER_INT()?.text}`:"")]
    }
    visitItemISIReplaceFromEntity(ctx: ItemISIReplaceFromEntityContext) {
        return [`item replace entity $$ ${this.v(ctx.item_slot(0))} from entity ${this.v(ctx.selector())} ${this.v(ctx.item_slot(1))}`+(ctx.nameSpaceItemModifier()!==undefined?` ${this.v(ctx.nameSpaceItemModifier()!!)}`:"")]
    }
    visitItemISIReplaceFromBlock(ctx: ItemISIReplaceFromBlockContext) {
        return [`item replace entity $$ ${this.v(ctx.item_slot(0))} from block ${this.v(ctx.pos3Identifier())} ${this.v(ctx.item_slot(1))}`+(ctx.nameSpaceItemModifier()!==undefined?` ${this.v(ctx.nameSpaceItemModifier()!!)}`:"")]
    }
    visitItemISIModify(ctx: ItemISIModifyContext) {return [`item modify entity $$ ${this.v(ctx.item_slot())} ${this.v(ctx.nameSpaceItemModifier())}`]}
    visitGiveISI(ctx: GiveISIContext) {
        return [`give $$ ${this.v(ctx.nameSpaceItem())}`+(ctx.NUMBER_INT()!==undefined?` ${ctx.NUMBER_INT()?.text}`:"")]
    }
    visitClearISI(ctx: ClearISIContext) {
        return [`clear $$ ${this.v(ctx.item_predicate())}`+(ctx.NUMBER_INT()!==undefined?` ${ctx.NUMBER_INT()?.text}`:"")]
    }
//#endregion
//#region Attr Statement   
    
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
    visitAttrISIGet(ctx: AttrISIGetContext) {return [`attribute $$ ${this.v(ctx.registerName())} get`+(ctx.number()!==undefined?` ${this.v(ctx.number()!!)}`:"")]}
    visitAttrISIGetBase(ctx: AttrISIGetBaseContext) {return [`attribute $$ ${this.v(ctx.registerName())} base get`+(ctx.number()!==undefined?` ${this.v(ctx.number()!!)}`:"")]}
    visitAttrISISetBase(ctx: AttrISISetBaseContext) {return [`attribute $$ ${this.v(ctx.registerName())} base set ${this.v(ctx.number())}`]}
    visitAttrISIModifierAdd(ctx: AttrISIModifierAddContext) {
        const type = ctx._op.text == "+" ? "add"
            : ctx._op.text == "*+" ? "multiply_base"
            : ctx._op.text == "*" ? "multiply":"add";
        return [`attribute $$ ${this.v(ctx.registerName())} modifier add ${ctx.UUID16_().text} ${this.v(ctx.string())} ${this.v(ctx.number())} ${type}`]
    }
    visitAttrISIModifierRemove(ctx: AttrISIModifierRemoveContext) {return [`attribute $$ ${this.v(ctx.registerName())} modifier remove ${ctx.UUID16_().text}`]}
    visitAttrISIModifierGet(ctx: AttrISIModifierGetContext) { return [`attribute $$ ${this.v(ctx.registerName())} modifier value get ${ctx.UUID16_().text}` + (ctx.number() !== undefined ? ` ${this.v(ctx.number()!!)}` : "")] }

//#endregion
//#region Entity Statement
    visitEntitySDeclarePlayer(ctx: EntitySDeclarePlayerContext) {
        for (const playerNameContext of ctx.playerName()) {
            const name = this.v(playerNameContext)
            this.entityNameMap[name]="player"
        }
        return []
    }
    visitPlayerName(ctx: PlayerNameContext) { return [ctx.text] }
    visitEntityExpression(ctx: EntityExpressionContext){
        return this.visitSelectorCompound(ctx,[ctx.entityIndependentStatementInner()])
    }
    visitEntitySDeclare(ctx: EntitySDeclareContext) {
        let nbt = ctx.nbt() !== undefined ? this.v(ctx.nbt()!!) : ""
        for (const context of ctx.entityDeclareStatementInner()) {
            const arr = this.visit(context)
            nbt = insertIntoNbt(arr,nbt)
        } 
        return [`summon ${this.v(ctx.nameSpaceEntity())} ${this.v(ctx.pos3Identifier())}`+(nbt!=""?` ${nbt}`:"")]
    }
    visitEntitySDeclareWithName(ctx: EntitySDeclareWithNameContext) {
        let nbt = ctx.nbt() !== undefined ? this.v(ctx.nbt()!!) : ""
        for (const context of ctx.entityDeclareStatementInner()) {
            const arr = this.visit(context)
            nbt = insertIntoNbt(arr,nbt)
        } 
        const randomUUID = UUID.random()
        this.entityNameMap[this.v(ctx.acceptableName())] = randomUUID.toHex()
        nbt = insertIntoNbt(["UUID", "IntArray", "replace", randomUUID.toArray()], nbt)
        const pos = ctx.pos3Identifier() !== undefined ? this.v(ctx.pos3Identifier()!!) : "~ ~ ~"
        
        return[`summon ${this.v(ctx.nameSpaceEntity())} ${pos} ${nbt}`,...ctx.entityIndependentStatementInner().flatMap(context =>
            this.visit(context).map(command => command.replace("$$",randomUUID.toHex() )))]
    }
    visitEntitySCompound(ctx: EntitySCompoundContext) {return ctx.entityStatementInner().flatMap(context=>this.visit(context))}
    visitEntitySSelectorCompound(ctx: EntitySSelectorCompoundContext) {
        return this.visitSelectorCompound(ctx,ctx.entityIndependentStatementInner())
    }

    visitEntityDeclareSITag(ctx: EntityDeclareSITagContext){
        return ["Tags", "List", "append", ...ctx.nbtName().map(context => `"${ this.v(context) }"`)]
    }

    visitTagISIAdd(ctx: TagISIAddContext) { return [`tag $$ add ${this.v(ctx.nbtName())}`] }
    visitTagISIRemove(ctx: TagISIRemoveContext) {return [`tag $$ remove ${this.v(ctx.nbtName())}`]}
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
    visitTpISIFacingEntity(ctx: TpISIFacingEntityContext) {return [`tp $$ ${this.v(ctx.pos3Identifier())} facing entity ${this.v(ctx.selector())}`+(ctx._anchor!==undefined?` ${ctx._anchor.text}`:"")]}
    
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
//#endregion
//#region Block Statement

    visitBlockStatement(ctx: BlockStatementContext) {
        return ctx.blockStatementInner().flatMap(context=>this.visit(context))
    }
    visitBlockSISetblock(ctx: BlockSISetblockContext) {
        return [`setblock ${this.v(ctx.pos3Identifier())} ${this.v(ctx.blockIdentifier())}`+(ctx._mod!==undefined?` ${ctx._mod.text}`:"")]
    }
    visitBlockSIFill(ctx: BlockSIFillContext) {
        return [`fill ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.blockIdentifier())}`+(ctx._mod!==undefined?` ${ctx._mod.text}`:"")]
    }
    visitBlockSIFillReplace(ctx: BlockSIFillReplaceContext) {
        return [`fill ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.blockIdentifier())} replace ${this.v(ctx.block_predicate())}`]
    }
    visitBlockSIClone(ctx: BlockSICloneContext) {
        return [`clone ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.pos3Identifier(2))}`+(ctx._masked_mod===undefined?"":ctx._mod===undefined?` ${ctx._masked_mod.text}`:` ${ctx._masked_mod.text} ${ctx._mod.text}`)]
    }
    visitBlockSICloneFiltered(ctx: BlockSICloneFilteredContext) {
        return [`clone ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.pos3Identifier(2))} filtered ${this.v(ctx.block_predicate())}`+(ctx._mod!==undefined?` ${ctx._mod.text}`:"")]
    }
//#endregion
//#region Exist Statment
    
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
                            this.functionTypeStack.push("normal")
                            this.addNewFunction(namespace, () => right.slice(1))
                            this.functionTypeStack.pop()
                            
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
                            this.functionTypeStack.push("normal")
                            this.addNewFunction(namespace, () => right.slice(1))
                            this.functionTypeStack.pop
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
//#endregion
//#region If Statement

    visitIfStatement(ctx: IfStatementContext) {
        this.setUsedExistExpressionNow()
        const existCommands = this.visit(ctx.existExpression())
        this.functionTypeStack.push("if")
        const runCommand = this.visit(ctx.execRunChild())
        this.functionTypeStack.pop()
        let elseStatement:string[] = []
        if (ctx.ifElseStatement() !== undefined) {
            this.functionTypeStack.push("else")
            const elseCommand = this.v(ctx.ifElseStatement()!!)
            this.functionTypeStack.pop()
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
//#endregion
//#region Loop Statement
    visitWhileStatementExist(ctx: WhileStatementExistContext) {
        this.setUsedExistExpressionNow()
        const commands = this.visit(ctx.existExpression())
        this.functionTypeStack.push("while")
        const resList = [
            ...commands.slice(1),
            this.visitLoopUtils("while",`execute if data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${commands[0]}`,
                this.v(ctx.execRunChild()))
        ]
        this.functionTypeStack.pop()
        return resList
    }
    visitWhileStatementExec(ctx: WhileStatementExecContext) {
        let command = "execute"
        for (const context of ctx.execChild()) {
            command = `${command} ${this.v(context)}`
        }
        this.functionTypeStack.push("while")
        const res = this.visitLoopUtils("while", command, this.v(ctx.execRunChild()))
        this.functionTypeStack.pop()
        return [res ]       
    }
    //this loop util convert normal func to loop func by add recursion to the end of func
    visitLoopUtils(name:string,executePart:string, runCommand:string, ...left:string[]) {
        let command = executePart
        let namespace = ""
        if (runCommand.slice(0, 8) == "function") {
            namespace = runCommand.slice(9)
            command = `${command} run ${runCommand}`
        }
        else {
            namespace = this.getNewTempFunctionNamespaceId(name)
            command = `${command} run function ${namespace}`
            this.functionTypeStack.push("while")
            this.addNewFunction(namespace, () => [runCommand], { flat: false })
            this.functionTypeStack.pop()
        }
        let execute_command = "execute"
        for (const tag of ["break","return"]){
            if (this.functions[namespace].has[tag]) {
                execute_command = `${execute_command} unless data storage ${this.option.existExpression?.stackNamespaceId} exist_stack_frame[0].${tag}`
            }
        }
        if (execute_command != "execute") {
            const lastCommand = this.functions[namespace].lines[this.functions[namespace].lines.length - 1]
            const executePartNew =`${execute_command} run function `
            if (lastCommand.includes(executePartNew)) {
                //可以把递归部分塞进上一次分块的函数里
                namespace = lastCommand.replace(executePartNew, "")
            }
            else if (left.length > 0 && this.option.forStatement?.recursionPartNewFunctionFile) { 
                //开个新函数塞递归部分
                this.functionTypeStack.push("normal")
                const newNamespace = this.getNewTempFunctionNamespaceId("recursion")
                command = this.addNewFunction(newNamespace, () => [...left, command])
                this.functionTypeStack.pop()
                left = []
            }
            else {
                left = left?.map(com=>`${execute_command} run ${com}`)
                command = command.replace("execute",execute_command)
            }
        }
    
        this.functions[namespace].lines.push(...left)
        this.functions[namespace].lines.push(command)
        
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
        this.functionTypeStack.push("for")
        const res = [
            `execute store result score ${scbName} run data get ${dataIdentifier}`,
            this.visitLoopUtils("for",`execute if score ${scbName} matches 1..`, this.v(ctx.execRunChild()),
                `data modify ${dataIdentifier} append from ${dataIdentifier}[0]`,
                `data remove ${dataIdentifier}[0]`,
                `scoreboard players remove ${scbName} 1`
            )
        ]
        this.functionTypeStack.pop()
        this.removeUnusedTempScbTargetName(scbNumber)
        return res
    }
//#endregion
    //TODO: type check
    visitInterfaceSIdentifier(ctx: InterfaceSIdentifierContext) {return[`data modify ${this.v(ctx.dataIdentifier())} set value ${this.v(ctx.nbt())}`] }
    visitInterfaceSNamespace(ctx: InterfaceSNamespaceContext) {return [`data merge storage ${this.v(ctx.nameSpaceStorage())} ${this.v(ctx.nbt())}`]}

//#region Selector
    //visitSelector(ctx: SelectorContext) {return []}
    //visitSelectorParams(ctx: SelectorParamsContext){ return []}
    visitSelectorName(ctx: SelectorNameContext) {
        const name = this.v(ctx.acceptableNameWithoutPointWithKey())
        if (this.entityNameMap[name] !== undefined) {
            if (this.entityNameMap[name] == "player") return [name,"final"]
            else return [this.entityNameMap[name],"final"]
        }
        else throw new JustMCFSimplifyError("uuid-name should be init")
    }
    visitSelectorFakeName(ctx: SelectorFakeNameContext) {
        //不用检查FakeName
        return ["#" + this.v(ctx.acceptableNameWithoutPointWithKey()),"final"]
    }
    
    visitSelectorWithParams(ctx: SelectorWithParamsContext) {
        if (/^@s$/.test(ctx.text)) { return [ctx.text, "final"] }
        const selectorKey = ctx.SelectorKey().text
        const hasLimit = {
            limit: this.option.selector?.limitDefaultOne&&selectorKey!="a" //排除掉@a[]默认limit=1的情况，@a不能默认是1
                ? 1 : 0,
            defaultLimit:this.option.selector?.limitDefaultOne,
            nolimit: false
        }
        const res = ctx.selectorParam().reduce((arr:string[], context) => {
            const param = this.visit(context)
            if (param[0] == "nolimit") { hasLimit.nolimit = true }
            else if (param[0].includes("limit=")) {
                hasLimit.limit = Number.parseInt(param[0].replace("limit=", ""))
                hasLimit.defaultLimit = false
            }
            else { arr.push(...param) }
            return arr
        }, [])
        
        if (!hasLimit.nolimit&&hasLimit.limit!=0)
            res.push(`limit=${hasLimit.limit}`)
        if(ctx.selectorTypes()!==undefined)
            res.push(...this.visit(ctx.selectorTypes()!!))
        return [`@${selectorKey}[${res.join(",")}]`,(hasLimit.limit == 1)?"final":"nest"]
    }
    visitSelectorParamPos(ctx: SelectorParamPosContext) {
        const regex = /~|^/g
        const posList = ctx.pos3Identifier().pos1().map(pos => pos.text.replace(regex, ""))
        const params = []
        if (posList[0] != "") params.push(`x=${posList[0]}`)
        if (posList[1] != "") params.push(`y=${posList[1]}`)
        if (posList[2] != "") params.push(`z=${posList[2]}`)
        return params
    }
    visitSelectorParamDPos(ctx: SelectorParamDPosContext) {
        const regex = /~|^/g
        const posList = ctx.pos3Identifier().pos1().map(pos => pos.text.replace(regex, ""))
        const params = []
        if (posList[0] != "") params.push(`dx=${posList[0]}`)
        if (posList[1] != "") params.push(`dy=${posList[1]}`)
        if (posList[2] != "") params.push(`dz=${posList[2]}`)
        return params
    }
    visitSelectorParamRot(ctx: SelectorParamRotContext) {
        const regex = /~|^/g
        const posList = ctx.pos2Identifier().pos1().map(pos => pos.text.replace(regex, ""))
        const params = []
        if (posList[0] != "") params.push(`x_rotation=${posList[0]}`)
        if (posList[1] != "") params.push(`y_rotation=${posList[1]}`)
        return params
    }
    //TODO: change the ctx.text to visit
    visitSelectorParamXYZ(ctx: SelectorParamXYZContext){ return [ctx.text]}
    visitSelectorParamDXYZ(ctx: SelectorParamDXYZContext){ return [ctx.text]}
    visitSelectorParamRotation(ctx: SelectorParamRotationContext){ return [ctx.text]}
    visitSelectorParamDistance(ctx: SelectorParamDistanceContext){ return [`distance=${this.v(ctx.positiveNumberRange())}`]}
    visitSelectorParamNbt(ctx: SelectorParamNbtContext) {
        if(ctx.nbtCompound()!==undefined) return [`nbt=${this.v(ctx.nbtCompound()!!)}`]
        else return [`nbt=${this.v(ctx.selectorNbtCompound()!!)}`]
    }
    visitSelectorParamScores(ctx: SelectorParamScoresContext){ return [`scores={${ctx.selectorScoresPart().flatMap(context=>this.visit(context)).join(",")}}`]}
    visitSelectorParamTag(ctx: SelectorParamTagContext){ return [`tag=${ctx._not!==undefined?"!":""}${this.v(ctx.nbtName())}`]}
    visitSelectorParamTeam(ctx: SelectorParamTeamContext){ return [`team=${ctx._not!==undefined?"!":""}${this.v(ctx.nbtName())}`]}
    visitSelectorParamName(ctx: SelectorParamNameContext){ return [`name=${ctx._not!==undefined?"!":""}${this.v(ctx.nbtName())}`]}
    visitSelectorParamType(ctx: SelectorParamTypeContext){ return [`type=${ctx._not!==undefined?"!":""}${this.v(ctx.selectorType())}`]}
    visitSelectorParamLevel(ctx: SelectorParamLevelContext){ return [ctx.text]}
    visitSelectorParamPredicate(ctx: SelectorParamPredicateContext){ return [`predicate=${ctx._not!==undefined?"!":""}${this.v(ctx.nameSpacePredicate())}`]}
    visitSelectorParamGamemode(ctx: SelectorParamGamemodeContext){ return [ctx.text]}
    visitSelectorParamAdvm(ctx: SelectorParamAdvmContext){ return [`advancements={${ctx.selectorAdvancementsPart().flatMap(context=>this.visit(context)).join(",")}}`]}
    visitSelectorParamLimit(ctx: SelectorParamLimitContext) {
        if (ctx.text.includes("+")) return [`limit=${ ctx.NUMBER_INT().text.replace("-","") }`,"sort=nearest", ]
        else if(ctx.text.includes("-")) return [`limit=${ ctx.NUMBER_INT().text.replace("-","") }`,"sort=furthest"]
        return [ctx.text]
    }
    visitSelectorParamLimitInf(ctx: SelectorParamLimitInfContext){ return ["nolimit"]}
    visitSelectorParamSort(ctx: SelectorParamSortContext){ return [ctx.text]}
    visitSelectorParamLimitNumber(ctx: SelectorParamLimitNumberContext) {
        if (ctx.text.includes("+")) return [`limit=${ ctx.NUMBER_INT().text.replace("-","") }`,"sort=nearest", ]
        else if(ctx.text.includes("-")) return [`limit=${ ctx.NUMBER_INT().text.replace("-","") }`,"sort=furthest",]
        return [ctx.text]
    }
    visitSelectorParamNbtCompound(ctx: SelectorParamNbtCompoundContext){return [`nbt=${this.v(ctx.selectorNbtCompound()!!)}`]}
    visitSelectorParamScoreCompound(ctx: SelectorParamScoreCompoundContext) { return [`scores={${ctx.selectorScoresPartImprove().flatMap(context=>this.visit(context)).join(",")}}`] }
    
    visitSelectorType(ctx: SelectorTypeContext) {
        if (ctx.nameSpaceEntity() !== undefined) return this.visit(ctx.nameSpaceEntity()!!)
        else return this.visit(ctx.tagNameSpaceEntity()!!)
    }
    visitSelectorTypeSingle(ctx: SelectorTypeSingleContext){ return [`type=${this.v(ctx.selectorType())}`]}
    visitSelectorTypeNot(ctx: SelectorTypeNotContext) { return ctx.selectorType().map(context=>`type=!${this.v(context)}`) }
    
    visitSelectorNbtCompound(ctx: SelectorNbtCompoundContext) { return [ctx.text.replace("n{", "{").replace("n[", "[").replace(/(\n|\r)/g,"")] }
    
    visitSelectorScoresPart(ctx: SelectorScoresPartContext){return [`${this.v(ctx.nbtName())}=${this.v(ctx.intRange())}`]}
    visitSelectorScoresPartCompare(ctx: SelectorScoresPartCompareContext) {
        return [`${this.v(ctx.nbtName())}=${this.v(ctx.scbCompareNumber())}`]
    }
    visitSelectorScoresPartRange(ctx: SelectorScoresPartRangeContext){ return [`${this.v(ctx.nbtName())}=${this.v(ctx.intRange())}`]}
    visitSelectorAdvmPartDirect(ctx: SelectorAdvmPartDirectContext){ return [`${this.v(ctx.nameSpaceAdvancement())}=${this.v(ctx.boolValue())}`]}
    visitSelectorAdvmPartCriteria(ctx: SelectorAdvmPartCriteriaContext){ return [`${this.v(ctx.nameSpaceAdvancement())}={${ctx.selectorAdvancementsCriteria().flatMap(context=>this.visit(context)).join(",")}}`]}
    visitSelectorAdvancementsCriteria(ctx: SelectorAdvancementsCriteriaContext){ return [`${this.v(ctx.acceptableName())}=${this.v(ctx.boolValue())}`]}

//#endregion
    visitNbt(ctx: NbtContext) { return [ctx.text.replace("n{", "{").replace("n[", "[").replace(/(\n|\r)/g,"")] }
    visitJson(ctx: JsonContext) { return [ctx.text.replace("j{", "{").replace("j[", "[").replace(/(\n|\r)/g,"")] }
    visitNbtPath(ctx: NbtPathContext) { return [ctx.text.replace(/(\n|\r)/g,"")] }
    visitNbtPathWithoutCompound(ctx: NbtPathWithoutCompoundContext){return [ctx.text] }
    // visitSnbtValue?: ((ctx: SnbtValueContext) => string[]) | undefined;
    visitSnbt(ctx: SnbtContext){return [ctx.text.replace(/(\n|\r)/g,"")]}
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
        if (mode == "final"||nodes.length==1) {
            return nodes.flatMap(context =>
                this.visit(context).map(command => command.replace("$$", selector)))
        }
        else {
            const namespace = this.getNewTempFunctionNamespaceId("selector")
            this.functionTypeStack.push("normal")
            this.addNewFunction(namespace, () =>
                nodes.flatMap(context =>
                this.visit(context).map(command => command.replace("$$", "@s"))))
            this.functionTypeStack.pop()
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
            else return nbt.replace('{',`{${key}:[${value.join(",")}],`)
        }
    }
    else if (type == "IntArray") {
        if (mode == "replace") {
            const reg = new RegExp(`${key}\\s*:\\s*\\[I;(.)+?\\]`,'g')
            if (reg.test(nbt)) return nbt.replace(reg, `${key}:${value[0]}`)
            else return nbt.replace('{',`{${key}:${value[0]},`)
        }
    }
    return ""
}