import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { FuncTagSettingsReplaceContext, FuncTagSettingsReplacedContext, FuncTagSIFuncImproveSContext, FuncTagSIFuncSContext, FuncTagSIFuncTagSContext, NameSpaceBiomeContext, NameSpaceBlockContext, NameSpaceBossbarContext, NameSpaceDimContext, NameSpaceFuncContext, NameSpaceItemContext, NameSpaceItemModifierContext, NameSpaceLootContext, NameSpacePredicateContext, NameSpaceSettingsBiomeContext, NameSpaceSettingsBossbarContext, NameSpaceSettingsDefaultContext, NameSpaceSettingsDimContext, NameSpaceSettingsItemContext, NameSpaceSettingsItemModifierContext, NameSpaceSettingsJustDefaultContext, NameSpaceSettingsLootContext, NameSpaceSettingsPredicateContext, NameSpaceSettingsStorageContext, NameSpaceStorageContext, TagNameSpaceBlockContext, TagNameSpaceContext, TagNameSpaceEntityContext, TagNameSpaceFuncContext, TagNameSpaceItemContext, ScbPlayerSIScbListContext, ScbObjSDeclareSingleContext, CriterionContext, BossbarSDeclareContext, BossbarSOperationContext, BossbarSIGetContext, BossbarSISetColorContext, BossbarSISetMaxContext, BossbarSISetNameContext, BossbarSISetPlayerContext, BossbarSISetPlayerNullContext, BossbarSISetStyleContext, BossbarSISetValueContext, BossbarSISetVisibleContext, BossbarOpExprGetContext, BossbarOpExprAssignValueContext, BossbarOpExprAssignMaxContext, TitleSCompoundContext, BossbarSIRemoveContext, BossbarStatementInnerContext, TitleSSelectorCompoundContext, TitleSISelectorSingleContext, TitleSISelectorCompoundContext, TitleSSIJsonContext, TitleSSIClearContext, TitleSSIResetContext, TitleSSITimesContext, TitleISIJsonContext, TitleISIClearContext, TitleISIResetContext, TitleISITimesContext, TitleSelectorStatementInnerContext, DisplaySCompoundContext, AttrISIGetBaseContext, AttrISIGetContext, AttrISIModifierAddContext, AttrISIModifierGetContext, AttrISIModifierRemoveContext, AttrISISetBaseContext, AttrSCompoundContext, AttrSISelectorCompoundContext, AttrSISingleContext, AttrSSelectorCompoundContext, BlockSICloneContext, BlockSICloneFilteredContext, BlockSIFillContext, BlockSIFillReplaceContext, BlockSISetblockContext, ClearISIContext, DisplayISIBossbarContext, DisplayISITextContext, DisplayISITitleCompoundContext, DisplayISITitleSingleContext, DisplaySIBossbarContext, DisplaySIScbContext, DisplaySISelectorCompoundContext, DisplaySISelectorSingleContext, DisplaySSelectorCompoundContext, EffectISIClearAllContext, EffectISIClearContext, EffectISIGiveSpContext, EffectISIGiveContext, EntityISIAttrCompoundContext, EntityISIAttrSingleContext, EntityISIDisplayCompoundContext, EntityISIDisplaySingleContext, EntityISIEffectContext, EntityISIExecContext, EntityISIGiveAndClearContext, EntityISIItemCompoundContext, EntityISIItemSingleContext, EntityISIKillContext, EntityISILootCompoundContext, EntityISILootGiveSingleContext, EntityISILootSingleContext, EntityISITagContext, EntityISITitleCompoundContext, EntityISITpContext, EntitySCompoundContext, EntitySDeclareContext, EntitySDeclarePlayerContext, EntitySIEntityExpressionContext, EntitySISelectorCompoundContext, EntitySSelectorCompoundContext, GiveISIContext, ItemISIModifyContext, ItemISIReplaceFromBlockContext, ItemISIReplaceFromEntityContext, ItemISIReplaceWithContext, ItemSCompoundContext, ItemSIBlockContext, ItemSIEntityContext, ItemSIGiveAndClearContext, ItemSILootInnerContext, ItemSISelectorNestContext, ItemSSelectorCompoundContext, ItemSSIGiveAndClearContext, ItemSSIItemContext, ItemSSILootInnerContext, LootSCompoundContext, LootSIGiveContext, LootSIInsertContext, LootSIReplaceBlockContext, LootSIReplaceEntityContext, LootSISelectorNestContext, LootSISpawnContext, LootSourceFishHandContext, LootSourceFishToolContext, LootSourceKillContext, LootSourceLootContext, LootSourceMineHandContext, LootSourceMineToolContext, LootSSelectorCompoundContext, TagISIAddContext, TagISIListContext, TagISIRemoveContext, TpISIDestinationContext, TpISIFacingContext, TpISIFacingEntityContext, TpISIPosContext, TpISIRotatedContext, TpISIRotatedDivContext, LootIndependentStatementInnerGiveContext, LootIndependentStatementInnerReplaceEntityContext, Item_slotContext, Item_predicateContext, SnbtContext, Block_predicateContext, BlockStatementContext, NameSpaceEntityContext, NameSpaceSettingsEntityContext, EntitySDeclareWithNameContext, EntityDeclareSITagContext } from './antlr/JustMCFParser';
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
import { UUID } from './lib/UUIDUtils';

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
    },
    entityNameMap?: {
        [name:string]:string
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

    getNewTempFunctionNamespace() {
        const namespace = this.tempFunctionNamespace[this.tempFunctionNamespace.length - 1]
        if (this.anonymousFunctionFatherNamespaceTimes[namespace] === undefined)
            this.anonymousFunctionFatherNamespaceTimes[namespace] = 0
        else
            this.anonymousFunctionFatherNamespaceTimes[namespace] += 1
        return `${namespace}/${this.anonymousFunctionFatherNamespaceTimes[namespace]}`
    }
    //function namespace stack
    private tempFunctionNamespace: string[] = [];

    private entityNameMap: { [name: string]: string } = {}

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
            },
            entityNameMap: {
                ...val.entityNameMap
            }
        }
        this.namespace.push({ ...this._option.namespace }) 
        this.entityNameMap = this.entityNameMap
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
    //TODO: need to use UUID map and need environment
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
                this.namespace[this.namespace.length-1][key] = this.v(ctx.acceptableName()!!)
            }
        }
        for (const setting of ctx.nameSpaceSettings()) { this.visit(setting) }
        for (const inner of ctx.nameSpaceStatementInner()) { this.visit(inner) }
        //Recover the namespace 复原命名空间，命名空间只作用在Inner里
        this.namespace.pop()
        return []
    }
    visitNameSpaceSettingsFunc(ctx: NameSpaceSettingsFuncContext) { this.namespace[this.namespace.length-1]["func"] = this.v(ctx.acceptableName()); return [] }
    visitNameSpaceSettingsBlock(ctx: NameSpaceSettingsBlockContext){this.namespace[this.namespace.length-1]["block"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsStorage(ctx: NameSpaceSettingsStorageContext) { this.namespace[this.namespace.length-1]["storage"] = this.v(ctx.acceptableName()); return [] }
    visitNameSpaceSettingsBiome(ctx: NameSpaceSettingsBiomeContext){this.namespace[this.namespace.length-1]["biome"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsBossbar(ctx: NameSpaceSettingsBossbarContext){this.namespace[this.namespace.length-1]["bossbar"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsPredicate(ctx: NameSpaceSettingsPredicateContext){this.namespace[this.namespace.length-1]["predicate"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsItem(ctx: NameSpaceSettingsItemContext){this.namespace[this.namespace.length-1]["item"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsLoot(ctx: NameSpaceSettingsLootContext){this.namespace[this.namespace.length-1]["loot"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsItemModifier(ctx: NameSpaceSettingsItemModifierContext){this.namespace[this.namespace.length-1]["item_modifier"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsDim(ctx: NameSpaceSettingsDimContext){this.namespace[this.namespace.length-1]["dimension"] = this.v(ctx.acceptableName()); return []}
    visitNameSpaceSettingsEntity(ctx: NameSpaceSettingsEntityContext){this.namespace[this.namespace.length-1]["entity"] = this.v(ctx.acceptableName()); return []}

    visitNameSpaceSettingsDefault(ctx: NameSpaceSettingsDefaultContext) {
        let key: (keyof namespaceInfo)
        for (key in this._option.namespace) {
            if(key != "func" && key != "storage")
                this.namespace[this.namespace.length-1][key] = this.v(ctx.acceptableName())
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
        const name = this.v(ctx.tagNameSpaceFunc())
        for (const funcTagStatementSetting of ctx.funcTagSettings()) {
            const [key, value] = this.visit(funcTagStatementSetting)
            this.functionTag[name]["replace"] = value=="true"
        }
        for (const funcTagStatementInner of ctx.funcTagStatementInner()) {
            this.functionTag[name].values.push(this.v(funcTagStatementInner))
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
        const namespace = this.v(ctx.nameSpaceFunc())
        for (const tagNameSpaceContext of ctx.tagNameSpaceFunc()) {
            const tagName = this.v(tagNameSpaceContext)
            this.functionTag[tagName].values.push(namespace)
        }
        this.tempFunctionNamespace.push(namespace) //use for child anonymous func

        this.mcfunction[namespace] = ctx.statementInner().flatMap(context => this.visit(context))
        
        this.tempFunctionNamespace.pop()
        return []
    }

    visitExecNamedRun(ctx: ExecNamedRunContext) {
        this.visit(ctx.funcStatement())
        const namespace = this.v(ctx.funcStatement().nameSpaceFunc())
        return [`function ${namespace}`]
    }
    visitExecAnonymousRun(ctx: ExecAnonymousRunContext) {
        const namespace = this.getNewTempFunctionNamespace()
        this.tempFunctionNamespace.push(namespace) //use for child anonymous func

        this.mcfunction[namespace] = ctx.statementInner().flatMap(context=>this.visit(context))
        
        this.tempFunctionNamespace.pop()
        return [`function ${namespace}`]
    }
    visitExecDirectRun(ctx: ExecDirectRunContext) {
        const commands = this.visit(ctx.statement())
        if (commands.length > 1) {
            const namespace = this.getNewTempFunctionNamespace()
            this.tempFunctionNamespace.push(namespace) //use for child anonymous func

            this.mcfunction[namespace] = commands

            this.tempFunctionNamespace.pop()
            return [`function ${namespace}`]
        }
        else {
            return commands
        }
    }
    visitFuncRunStatement(ctx: FuncRunStatementContext){
        if (ctx.nameSpaceFunc() !== undefined) 
            return [`function ${this.v(ctx.nameSpaceFunc()!!)}`]
        else 
            return [`function ${this.v(ctx.tagNameSpaceFunc()!!)}`]
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
        const storeTypeContext = ctx.NumberType()
        const storeScaleContext = ctx.NUMBER()
        const storeType = storeTypeContext === undefined ? "int" :storeTypeContext.text
        const storeScale = storeScaleContext === undefined ? "1" : storeScaleContext.text
        return [`store result ${this.v(ctx.dataIdentifier())} ${storeType} ${storeScale}`]
    }
    visitExecStoreSuccessData(ctx: ExecStoreSuccessDataContext) {
        const storeTypeContext = ctx.NumberType()
        const storeScaleContext = ctx.NUMBER()
        const storeType = storeTypeContext === undefined ? "int": storeTypeContext.text
        const storeScale = storeScaleContext === undefined ? "1" : storeScaleContext.text
        return [`store success ${this.v(ctx.dataIdentifier())} ${storeType} ${storeScale}`]
    }
    visitExecStoreResultBossbar(ctx: ExecStoreResultBossbarContext) {return [`store result ${this.v(ctx.nameSpaceBossbar())} ${(ctx._value.text!="max")? "value":"max"}`]}
    visitExecStoreSuccessBossbar(ctx: ExecStoreSuccessBossbarContext) {return [`store success ${this.v(ctx.nameSpaceBossbar())} ${(ctx._value.text!="max")? "value":"max"}`]}
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
    visitExecIfScoreMatches(ctx: ExecIfScoreMatchesContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} score ${this.v(ctx.scbIdentifier())} matches ${this.v(ctx.matchPart())}`] }
    visitExecPredicate(ctx: ExecPredicateContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} predicate ${this.v(ctx.nameSpacePredicate())}`] }
    visitExecIfBlock(ctx: ExecIfBlockContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} block ${this.v(ctx.pos3Identifier())} ${this.v(ctx.blockIdentifier())}`] }
    visitExecIfBlocks(ctx: ExecIfBlocksContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} blocks ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.pos3Identifier(2))}`] }
    visitExecIfData(ctx: ExecIfDataContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} ${this.v(ctx.dataIdentifier())}`] }
    visitExecIfBiome(ctx: ExecIfBiomeContext) { return [`${(ctx._cond.text!="unless")?"if":"unless"} biome ${this.v(ctx.pos3Identifier())} ${this.v(ctx.nameSpaceBiome())}`] }
    visitExecStore(ctx: ExecStoreContext) { return this.visit(ctx.execStoreChild()) }
    visitMatchPart(ctx: MatchPartContext) { return [ctx.text] }

/* Data Statement */
    // visitDataOperationExpression?: ((ctx: DataOperationExpressionContext) => string[]) | undefined;
    visitDataMergeStorage(ctx: DataMergeStorageContext) { return [`data merge storage ${this.v(ctx.nameSpaceStorage())} ${this.v(ctx.nbt())}`] }
    visitDataMergeEntity(ctx: DataMergeEntityContext) { return [`data merge entity ${this.v(ctx.selector())} ${this.v(ctx.nbt())}`] }
    visitDataMergeBlock(ctx: DataMergeBlockContext) { return [`data merge block ${this.v(ctx.pos3Identifier())} ${this.v(ctx.nbt())}`] }
    visitDataGet(ctx: DataGetContext) { return [`data get ${this.v(ctx.dataIdentifier())}`] }
    visitDataModifyMergeValue(ctx: DataModifyMergeValueContext) { return [`data modify ${this.v(ctx.dataIdentifier())} merge value ${this.v(ctx.nbt())}`] }
    visitDataModifyMergeFrom(ctx: DataModifyMergeFromContext) { return [`data modify ${this.v(ctx.dataIdentifier(0))} merge from ${this.v(ctx.dataIdentifier(1))}`] }
    visitDataModifySetValue(ctx: DataModifySetValueContext) { return [`data modify ${this.v(ctx.dataIdentifier())} set value ${this.v(ctx.nbt())}`] }
    visitDataModifySetFrom(ctx: DataModifySetFromContext) { return [`data modify ${this.v(ctx.dataIdentifier(0))} set from ${this.v(ctx.dataIdentifier(1))}`] }
    visitDataModifyAppendValue(ctx: DataModifyAppendValueContext) { return [`data modify ${this.v(ctx.dataIdentifier())} append value ${this.v(ctx.nbt())}`] }
    visitDataModifyAppendFrom(ctx: DataModifyAppendFromContext) { return [`data modify ${this.v(ctx.dataIdentifier(0))} append from ${this.v(ctx.dataIdentifier(1))}`] }
    visitDataModifyPrependValue(ctx: DataModifyPrependValueContext) { return [`data modify ${this.v(ctx.dataIdentifier())} prepend value ${this.v(ctx.nbt())}`] }
    visitDataModifyPrependFrom(ctx: DataModifyPrependFromContext) { return [`data modify ${this.v(ctx.dataIdentifier(0))} prepend from ${this.v(ctx.dataIdentifier(1))}`] }
    visitDataModifyInsertValue(ctx: DataModifyInsertValueContext) { return [`data modify ${this.v(ctx.dataIdentifier())} insert value ${this.v(ctx.nbt())}`] }
    visitDataModifyInsertFrom(ctx: DataModifyInsertFromContext) { return [`data modify ${this.v(ctx.dataIdentifier(0))} insert from ${this.v(ctx.dataIdentifier(1))}`] }
    visitDataRemove(ctx: DataRemoveContext) { return [`data remove ${this.v(ctx.dataIdentifier())}`] }

    visitDataStatement(ctx: DataStatementContext) {
        return ctx.dataOperationExpression().flatMap(context=>this.visit(context))
    }
/* Scb Statement */
    // visitScbOperationExpression?: ((ctx: ScbOperationExpressionContext) => string[]) | undefined;
    visitScbGet(ctx: ScbGetContext) { return [`scoreboard players get ${this.v(ctx.scbIdentifier())}`] }
    visitScbAdd(ctx: ScbAddContext) { return [`scoreboard players add ${this.v(ctx.scbIdentifier())} ${this.v(ctx.NUMBER())}`] }
    visitScbRemove(ctx: ScbRemoveContext) { return [`scoreboard players remove ${this.v(ctx.scbIdentifier())} ${this.v(ctx.NUMBER())}`] }
    visitScbSet(ctx: ScbSetContext) { return [`scoreboard players set ${this.v(ctx.scbIdentifier())} ${this.v(ctx.NUMBER())}`] }
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
    visitBossbarSISetVisible(ctx: BossbarSISetVisibleContext) { return [`bossbar set $$ visible ${ctx._bool.text}`] }
    visitBossbarOpExprGet(ctx: BossbarOpExprGetContext) { return [`bossbar get ${this.v(ctx.nameSpaceBossbar())} ${ctx._type.text===undefined?"value":ctx._type.text}`] }
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
        return [`loot replace entity $$ ${this.v(ctx.item_slot())} ${this.v(ctx.lootSource())}`+ctx.NUMBER()!==undefined?` ${ctx.NUMBER()?.text}`:""]
    }
    visitLootSourceFishHand(ctx: LootSourceFishHandContext) {
        return [`fish ${this.v(ctx.nameSpaceLoot())} ${this.v(ctx.pos3Identifier())}`+ctx._hand.text!==undefined?` ${ctx._hand.text}`:""]
    }
    visitLootSourceFishTool(ctx: LootSourceFishToolContext) {return [`fish ${this.v(ctx.nameSpaceLoot())} ${this.v(ctx.pos3Identifier())} ${this.v(ctx.nameSpaceItem())}` ]}
    visitLootSourceLoot(ctx: LootSourceLootContext) {return [`loot ${this.v(ctx.nameSpaceLoot())}`]}
    visitLootSourceKill(ctx: LootSourceKillContext) {return [`kill ${this.v(ctx.selector())}`]}
    visitLootSourceMineHand(ctx: LootSourceMineHandContext) {
        return [`mine ${this.v(ctx.pos3Identifier())}`+ctx._hand.text!==undefined?` ${ctx._hand.text}`:""]
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
        return [`item replace entity $$ ${this.v(ctx.item_slot())} with ${this.v(ctx.nameSpaceItem())}`+ctx.NUMBER()!==undefined?` ${ctx.NUMBER()?.text}`:""]
    }
    visitItemISIReplaceFromEntity(ctx: ItemISIReplaceFromEntityContext) {
        return [`item replace entity $$ ${this.v(ctx.item_slot(0))} from entity ${this.v(ctx.selector())} ${this.v(ctx.item_slot(1))}`+ctx.nameSpaceItemModifier()!==undefined?` ${this.v(ctx.nameSpaceItemModifier()!!)}`:""]
    }
    visitItemISIReplaceFromBlock(ctx: ItemISIReplaceFromBlockContext) {
        return [`item replace entity $$ ${this.v(ctx.item_slot(0))} from block ${this.v(ctx.pos3Identifier())} ${this.v(ctx.item_slot(1))}`+ctx.nameSpaceItemModifier()!==undefined?` ${this.v(ctx.nameSpaceItemModifier()!!)}`:""]
    }
    visitItemISIModify(ctx: ItemISIModifyContext) {return [`item modify entity $$ ${this.v(ctx.item_slot())} ${this.v(ctx.nameSpaceItemModifier())}`]}
    visitGiveISI(ctx: GiveISIContext) {
        return [`give $$ ${this.v(ctx.nameSpaceItem())}`+ctx.NUMBER()!==undefined?` ${ctx.NUMBER()?.text}`:""]
    }
    visitClearISI(ctx: ClearISIContext) {
        return [`clear $$ ${this.v(ctx.item_predicate())}`+ctx.NUMBER()!==undefined?` ${ctx.NUMBER()?.text}`:""]
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
        const name = ctx._fake.text!==undefined?"#":""+this.v(ctx.acceptableName())
        this.entityNameMap[name]="player"
        return []
    }
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
        const left = ctx._second.text === undefined ? "" :
            ctx._amplifier.text === undefined ? ` ${ctx._second.text}` :
                ctx.BOOL() === undefined ? ` ${ctx._second.text} ${ctx._amplifier.text}` :
                    ` ${ctx._second.text} ${ctx._amplifier.text} ${ctx.BOOL()?.text}`;
        return [`effect give $$ ${this.v(ctx.acceptableName())}`+ left]
    }
    visitEffectISIClear(ctx: EffectISIClearContext) {return [`effect clear $$ ${this.v(ctx.acceptableName())}`]}
    visitEffectISIGiveSp(ctx: EffectISIGiveSpContext) {
        const left = ctx._second.text === undefined ? "" :
            ctx._amplifier.text === undefined ? ` ${ctx._second.text}` :
                ctx.BOOL() === undefined ? ` ${ctx._second.text} ${ctx._amplifier.text}` :
                    ` ${ctx._second.text} ${ctx._amplifier.text} ${ctx.BOOL()?.text}`;
                
        return [`effect give $$ ${this.v(ctx.acceptableName())}`+ left]
    }
    visitEffectISIClearAll(ctx: EffectISIClearAllContext) {return [`effect clear $$`]}
    
    visitTpISIDestination(ctx: TpISIDestinationContext) { return [`tp $$ ${this.v(ctx.selector())}`] }
    visitTpISIPos(ctx: TpISIPosContext) {return [`tp $$ ${this.v(ctx.pos3Identifier())}`]}
    visitTpISIRotated(ctx: TpISIRotatedContext) {return [`tp $$ ${this.v(ctx.pos5Identifier())}`]}
    visitTpISIRotatedDiv(ctx: TpISIRotatedDivContext) {return [`tp $$ ${this.v(ctx.pos3Identifier())} ${this.v(ctx.pos2Identifier())}`]}
    visitTpISIFacing(ctx: TpISIFacingContext) {return [`tp $$ ${this.v(ctx.pos3Identifier(0))} facing ${this.v(ctx.pos3Identifier(1))}`]}
    visitTpISIFacingEntity(ctx: TpISIFacingEntityContext) {return [`tp $$ ${this.v(ctx.pos3Identifier())} facing entity ${this.v(ctx.selector())}`+ctx._anchor.text!==undefined?` ${ctx._anchor.text}`:""]}
    
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
        return [`setblock ${this.v(ctx.pos3Identifier())} ${this.v(ctx.blockIdentifier())}`+ctx._mod.text!==undefined?` ${ctx._mod.text}`:""]
    }
    visitBlockSIFill(ctx: BlockSIFillContext) {
        return [`fill ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.blockIdentifier())}`+ctx._mod.text!==undefined?` ${ctx._mod.text}`:""]
    }
    visitBlockSIFillReplace(ctx: BlockSIFillReplaceContext) {
        return [`fill ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.blockIdentifier())} replace ${this.v(ctx.block_predicate())}`]
    }
    visitBlockSIClone(ctx: BlockSICloneContext) {
        return [`clone ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.pos3Identifier(2))}`+ctx._masked_mod.text===undefined?"":ctx._mod===undefined?` ${ctx._masked_mod.text}`:` ${ctx._masked_mod.text} ${ctx._mod.text}`]
    }
    visitBlockSICloneFiltered(ctx: BlockSICloneFilteredContext) {
        return [`clone ${this.v(ctx.pos3Identifier(0))} ${this.v(ctx.pos3Identifier(1))} ${this.v(ctx.pos3Identifier(2))} filtered ${this.v(ctx.block_predicate())}`+ctx._mod.text!==undefined?` ${ctx._mod.text}`:""]
    }


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
            const namespace = this.getNewTempFunctionNamespace()
            this.tempFunctionNamespace.push(namespace) //use for child anonymous func

            this.mcfunction[namespace] = nodes.flatMap(context =>
                this.visit(context).map(command => command.replace("$$", "@s")))
            
            this.tempFunctionNamespace.pop()

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