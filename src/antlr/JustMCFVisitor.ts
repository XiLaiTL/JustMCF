// Generated from ./antlr/JustMCF.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { EffectISIClearContext } from "./JustMCFParser";
import { EffectISIGiveContext } from "./JustMCFParser";
import { EffectISIGiveSpContext } from "./JustMCFParser";
import { EffectISIClearAllContext } from "./JustMCFParser";
import { GiveISIContext } from "./JustMCFParser";
import { ClearISIContext } from "./JustMCFParser";
import { TagISIAddContext } from "./JustMCFParser";
import { TagISIRemoveContext } from "./JustMCFParser";
import { TagISIListContext } from "./JustMCFParser";
import { EntitySIEntityExpressionContext } from "./JustMCFParser";
import { EntitySISelectorCompoundContext } from "./JustMCFParser";
import { ItemSIGiveAndClearContext } from "./JustMCFParser";
import { ItemSIEntityContext } from "./JustMCFParser";
import { ItemSIBlockContext } from "./JustMCFParser";
import { ItemSILootInnerContext } from "./JustMCFParser";
import { ItemSISelectorNestContext } from "./JustMCFParser";
import { ScbFuncExpressionContext } from "./JustMCFParser";
import { ScbOptMulDivModExpressionContext } from "./JustMCFParser";
import { ScbOptAddSubExpressionContext } from "./JustMCFParser";
import { ScbTempNumberExpressionContext } from "./JustMCFParser";
import { ScbIdExpressionContext } from "./JustMCFParser";
import { ScbParenExpressionContext } from "./JustMCFParser";
import { ExecWithRunOrChildContext } from "./JustMCFParser";
import { ExecWithoutRunOrChildContext } from "./JustMCFParser";
import { ScbSIRemoveContext } from "./JustMCFParser";
import { ScbSIDisplaynameContext } from "./JustMCFParser";
import { ScbSIRendertypeContext } from "./JustMCFParser";
import { ScbSIDisplayContext } from "./JustMCFParser";
import { AttrSISingleContext } from "./JustMCFParser";
import { AttrSISelectorCompoundContext } from "./JustMCFParser";
import { ExecAlignContext } from "./JustMCFParser";
import { ExecAnchoredContext } from "./JustMCFParser";
import { ExecInContext } from "./JustMCFParser";
import { ExecAsContext } from "./JustMCFParser";
import { ExecAtContext } from "./JustMCFParser";
import { ExecFacingPosContext } from "./JustMCFParser";
import { ExecFacingEntityContext } from "./JustMCFParser";
import { ExecPositionedPosContext } from "./JustMCFParser";
import { ExecPostionedAsContext } from "./JustMCFParser";
import { ExecRotatedPosContext } from "./JustMCFParser";
import { ExecRotatedAsContext } from "./JustMCFParser";
import { ExecIfEntityContext } from "./JustMCFParser";
import { ExecIfScoreContext } from "./JustMCFParser";
import { ExecIfScoreMatchesContext } from "./JustMCFParser";
import { ExecIfBlockContext } from "./JustMCFParser";
import { ExecIfBlocksContext } from "./JustMCFParser";
import { ExecIfDataContext } from "./JustMCFParser";
import { ExecIfBiomeContext } from "./JustMCFParser";
import { ExecPredicateContext } from "./JustMCFParser";
import { ExecStoreContext } from "./JustMCFParser";
import { DataStorageLocalContext } from "./JustMCFParser";
import { DataStorageContext } from "./JustMCFParser";
import { DataStorageWithEnvContext } from "./JustMCFParser";
import { DataEntityContext } from "./JustMCFParser";
import { DataBlockContext } from "./JustMCFParser";
import { AttrISIGetContext } from "./JustMCFParser";
import { AttrISIGetBaseContext } from "./JustMCFParser";
import { AttrISISetBaseContext } from "./JustMCFParser";
import { AttrISIModifierAddContext } from "./JustMCFParser";
import { AttrISIModifierRemoveContext } from "./JustMCFParser";
import { AttrISIModifierGetContext } from "./JustMCFParser";
import { LootSCompoundContext } from "./JustMCFParser";
import { LootSSelectorCompoundContext } from "./JustMCFParser";
import { ItemSSIGiveAndClearContext } from "./JustMCFParser";
import { ItemSSIItemContext } from "./JustMCFParser";
import { ItemSSILootInnerContext } from "./JustMCFParser";
import { EntitySDeclarePlayerContext } from "./JustMCFParser";
import { EntitySDeclareContext } from "./JustMCFParser";
import { EntitySDeclareWithNameContext } from "./JustMCFParser";
import { EntitySCompoundContext } from "./JustMCFParser";
import { EntitySSelectorCompoundContext } from "./JustMCFParser";
import { BossbarSIGetContext } from "./JustMCFParser";
import { BossbarSIRemoveContext } from "./JustMCFParser";
import { BossbarSISetColorContext } from "./JustMCFParser";
import { BossbarSISetMaxContext } from "./JustMCFParser";
import { BossbarSISetNameContext } from "./JustMCFParser";
import { BossbarSISetPlayerContext } from "./JustMCFParser";
import { BossbarSISetPlayerNullContext } from "./JustMCFParser";
import { BossbarSISetStyleContext } from "./JustMCFParser";
import { BossbarSISetValueContext } from "./JustMCFParser";
import { BossbarSISetVisibleContext } from "./JustMCFParser";
import { TitleISIJsonContext } from "./JustMCFParser";
import { TitleISIClearContext } from "./JustMCFParser";
import { TitleISIResetContext } from "./JustMCFParser";
import { TitleISITimesContext } from "./JustMCFParser";
import { IfElseExecContext } from "./JustMCFParser";
import { IfElseSIfSContext } from "./JustMCFParser";
import { InterfaceSNamespaceContext } from "./JustMCFParser";
import { InterfaceSIdentifierContext } from "./JustMCFParser";
import { ExistExpressionExecContext } from "./JustMCFParser";
import { ExistExpressionIdContext } from "./JustMCFParser";
import { ExisitExpressionFuncRunContext } from "./JustMCFParser";
import { ExistExpressionTrueContext } from "./JustMCFParser";
import { ExistExpressionFalseContext } from "./JustMCFParser";
import { ExistExpressionNotContext } from "./JustMCFParser";
import { ExistExpressionBitAndContext } from "./JustMCFParser";
import { ExistExpressionBitOrContext } from "./JustMCFParser";
import { ExistExpressionAndContext } from "./JustMCFParser";
import { ExistExpressionOrContext } from "./JustMCFParser";
import { ExistExpressionParenContext } from "./JustMCFParser";
import { LootSourceLootContext } from "./JustMCFParser";
import { LootSourceFishHandContext } from "./JustMCFParser";
import { LootSourceFishToolContext } from "./JustMCFParser";
import { LootSourceKillContext } from "./JustMCFParser";
import { LootSourceMineHandContext } from "./JustMCFParser";
import { LootSourceMineToolContext } from "./JustMCFParser";
import { BossbarSDeclareContext } from "./JustMCFParser";
import { BossbarSOperationContext } from "./JustMCFParser";
import { ItemSCompoundContext } from "./JustMCFParser";
import { ItemSSelectorCompoundContext } from "./JustMCFParser";
import { ItemISIReplaceWithContext } from "./JustMCFParser";
import { ItemISIReplaceFromEntityContext } from "./JustMCFParser";
import { ItemISIReplaceFromBlockContext } from "./JustMCFParser";
import { ItemISIModifyContext } from "./JustMCFParser";
import { ExecStoreResultScoreContext } from "./JustMCFParser";
import { ExecStoreSuccessScoreContext } from "./JustMCFParser";
import { ExecStoreResultDataContext } from "./JustMCFParser";
import { ExecStoreSuccessDataContext } from "./JustMCFParser";
import { ExecStoreResultBossbarContext } from "./JustMCFParser";
import { ExecStoreSuccessBossbarContext } from "./JustMCFParser";
import { DataMergeStorageContext } from "./JustMCFParser";
import { DataMergeEntityContext } from "./JustMCFParser";
import { DataMergeBlockContext } from "./JustMCFParser";
import { ScbPlayerSIScbOperationExpressionContext } from "./JustMCFParser";
import { ScbPlayerSIScbListContext } from "./JustMCFParser";
import { TitleSSIJsonContext } from "./JustMCFParser";
import { TitleSSIClearContext } from "./JustMCFParser";
import { TitleSSIResetContext } from "./JustMCFParser";
import { TitleSSITimesContext } from "./JustMCFParser";
import { TpISIDestinationContext } from "./JustMCFParser";
import { TpISIPosContext } from "./JustMCFParser";
import { TpISIRotatedContext } from "./JustMCFParser";
import { TpISIRotatedDivContext } from "./JustMCFParser";
import { TpISIFacingContext } from "./JustMCFParser";
import { TpISIFacingEntityContext } from "./JustMCFParser";
import { ExecDirectRunContext } from "./JustMCFParser";
import { ExecNamedRunContext } from "./JustMCFParser";
import { ExecAnonymousRunContext } from "./JustMCFParser";
import { DisplaySCompoundContext } from "./JustMCFParser";
import { DisplaySSelectorCompoundContext } from "./JustMCFParser";
import { EntityDeclareSITagContext } from "./JustMCFParser";
import { TitleSCompoundContext } from "./JustMCFParser";
import { TitleSSelectorCompoundContext } from "./JustMCFParser";
import { NameSpaceSettingsFuncContext } from "./JustMCFParser";
import { NameSpaceSettingsBlockContext } from "./JustMCFParser";
import { NameSpaceSettingsStorageContext } from "./JustMCFParser";
import { NameSpaceSettingsBossbarContext } from "./JustMCFParser";
import { NameSpaceSettingsBiomeContext } from "./JustMCFParser";
import { NameSpaceSettingsEntityContext } from "./JustMCFParser";
import { NameSpaceSettingsPredicateContext } from "./JustMCFParser";
import { NameSpaceSettingsDimContext } from "./JustMCFParser";
import { NameSpaceSettingsItemContext } from "./JustMCFParser";
import { NameSpaceSettingsLootContext } from "./JustMCFParser";
import { NameSpaceSettingsItemModifierContext } from "./JustMCFParser";
import { NameSpaceSettingsDefaultContext } from "./JustMCFParser";
import { NameSpaceSettingsJustDefaultContext } from "./JustMCFParser";
import { NoInExecStatementFuncContext } from "./JustMCFParser";
import { NoInExecStatementRunFuncContext } from "./JustMCFParser";
import { NoInExecStatementFuncImproveContext } from "./JustMCFParser";
import { NoInExecStatementInterfaceContext } from "./JustMCFParser";
import { NoInExecStatementStoreContext } from "./JustMCFParser";
import { EntityISIGiveAndClearContext } from "./JustMCFParser";
import { EntityISIKillContext } from "./JustMCFParser";
import { EntityISITagContext } from "./JustMCFParser";
import { EntityISIEffectContext } from "./JustMCFParser";
import { EntityISITpContext } from "./JustMCFParser";
import { EntityISITitleCompoundContext } from "./JustMCFParser";
import { EntityISIDisplayCompoundContext } from "./JustMCFParser";
import { EntityISIDisplaySingleContext } from "./JustMCFParser";
import { EntityISIItemSingleContext } from "./JustMCFParser";
import { EntityISILootGiveSingleContext } from "./JustMCFParser";
import { EntityISILootSingleContext } from "./JustMCFParser";
import { EntityISIItemCompoundContext } from "./JustMCFParser";
import { EntityISILootCompoundContext } from "./JustMCFParser";
import { EntityISIAttrSingleContext } from "./JustMCFParser";
import { EntityISIAttrCompoundContext } from "./JustMCFParser";
import { EntityISIExecContext } from "./JustMCFParser";
import { LootSIInsertContext } from "./JustMCFParser";
import { LootSISpawnContext } from "./JustMCFParser";
import { LootSIReplaceBlockContext } from "./JustMCFParser";
import { LootSIGiveContext } from "./JustMCFParser";
import { LootSIReplaceEntityContext } from "./JustMCFParser";
import { LootSISelectorNestContext } from "./JustMCFParser";
import { DataGetContext } from "./JustMCFParser";
import { DataMergeContext } from "./JustMCFParser";
import { DataModifyMergeValueContext } from "./JustMCFParser";
import { DataModifyMergeFromContext } from "./JustMCFParser";
import { DataModifySetValueContext } from "./JustMCFParser";
import { DataModifySetFromContext } from "./JustMCFParser";
import { DataModifyAppendValueContext } from "./JustMCFParser";
import { DataModifyAppendFromContext } from "./JustMCFParser";
import { DataModifyPrependValueContext } from "./JustMCFParser";
import { DataModifyPrependFromContext } from "./JustMCFParser";
import { DataModifyInsertValueContext } from "./JustMCFParser";
import { DataModifyInsertFromContext } from "./JustMCFParser";
import { DataRemoveContext } from "./JustMCFParser";
import { BossbarOpExprGetContext } from "./JustMCFParser";
import { BossbarOpExprAssignValueContext } from "./JustMCFParser";
import { BossbarOpExprAssignMaxContext } from "./JustMCFParser";
import { BlockSISetblockContext } from "./JustMCFParser";
import { BlockSIFillContext } from "./JustMCFParser";
import { BlockSIFillReplaceContext } from "./JustMCFParser";
import { BlockSICloneContext } from "./JustMCFParser";
import { BlockSICloneFilteredContext } from "./JustMCFParser";
import { AttrSCompoundContext } from "./JustMCFParser";
import { AttrSSelectorCompoundContext } from "./JustMCFParser";
import { ScbGetContext } from "./JustMCFParser";
import { ScbAddContext } from "./JustMCFParser";
import { ScbRemoveContext } from "./JustMCFParser";
import { ScbSetContext } from "./JustMCFParser";
import { ScbOptMulAssignNumberContext } from "./JustMCFParser";
import { ScbOptDivAssignNumberContext } from "./JustMCFParser";
import { ScbOptModAssignNumberContext } from "./JustMCFParser";
import { ScbOptAddAssignContext } from "./JustMCFParser";
import { ScbOptSubAssignContext } from "./JustMCFParser";
import { ScbOptMulAssignContext } from "./JustMCFParser";
import { ScbOptDivAssignContext } from "./JustMCFParser";
import { ScbOptModAssignContext } from "./JustMCFParser";
import { ScbOptExcFuncContext } from "./JustMCFParser";
import { ScbOptMinFuncContext } from "./JustMCFParser";
import { ScbOptMaxFuncContext } from "./JustMCFParser";
import { ScbOptAssignContext } from "./JustMCFParser";
import { ScbResetContext } from "./JustMCFParser";
import { ScbEnableContext } from "./JustMCFParser";
import { ScbOptExpressionContext } from "./JustMCFParser";
import { FuncTagSIFuncSContext } from "./JustMCFParser";
import { FuncTagSIFuncRunSContext } from "./JustMCFParser";
import { FuncTagSIFuncImproveSContext } from "./JustMCFParser";
import { FuncTagSIFuncTagSContext } from "./JustMCFParser";
import { DisplaySIScbContext } from "./JustMCFParser";
import { DisplaySIBossbarContext } from "./JustMCFParser";
import { DisplaySISelectorSingleContext } from "./JustMCFParser";
import { DisplaySISelectorCompoundContext } from "./JustMCFParser";
import { WhileStatementExecContext } from "./JustMCFParser";
import { WhileStatementExistContext } from "./JustMCFParser";
import { FuncTagSettingsReplaceContext } from "./JustMCFParser";
import { FuncTagSettingsReplacedContext } from "./JustMCFParser";
import { DataSCompoundContext } from "./JustMCFParser";
import { DataSIdentifierCompoundContext } from "./JustMCFParser";
import { DisplayISITitleSingleContext } from "./JustMCFParser";
import { DisplayISITitleCompoundContext } from "./JustMCFParser";
import { DisplayISITextContext } from "./JustMCFParser";
import { DisplayISIBossbarContext } from "./JustMCFParser";
import { ScbObjSDeclareWithNameContext } from "./JustMCFParser";
import { ScbObjSDeclareSingleContext } from "./JustMCFParser";
import { ScbObjSDeclareDefaultContext } from "./JustMCFParser";
import { ScbObjSOperationContext } from "./JustMCFParser";
import { TitleSISelectorSingleContext } from "./JustMCFParser";
import { TitleSISelectorCompoundContext } from "./JustMCFParser";
import { McfFileContext } from "./JustMCFParser";
import { FileStatementInnerContext } from "./JustMCFParser";
import { StatementInnerContext } from "./JustMCFParser";
import { StatementContext } from "./JustMCFParser";
import { NoInExecStatementContext } from "./JustMCFParser";
import { LeagalCommandContext } from "./JustMCFParser";
import { NameSpaceStatementContext } from "./JustMCFParser";
import { NameSpaceSettingsContext } from "./JustMCFParser";
import { NameSpaceStatementInnerContext } from "./JustMCFParser";
import { NamespaceSetStatementContext } from "./JustMCFParser";
import { FuncTagStatementContext } from "./JustMCFParser";
import { FuncTagSettingsContext } from "./JustMCFParser";
import { FuncTagStatementInnerContext } from "./JustMCFParser";
import { FuncStatementContext } from "./JustMCFParser";
import { FuncImproveStatementContext } from "./JustMCFParser";
import { FuncImproveParamContext } from "./JustMCFParser";
import { FuncImproveStatementInnerContext } from "./JustMCFParser";
import { YeildStatementContext } from "./JustMCFParser";
import { FuncRunStatementContext } from "./JustMCFParser";
import { FuncImproveRunStatementContext } from "./JustMCFParser";
import { FuncImproveRunExpressionContext } from "./JustMCFParser";
import { FuncImproveRunParamContext } from "./JustMCFParser";
import { ExecStatementContext } from "./JustMCFParser";
import { ExecStoreChildContext } from "./JustMCFParser";
import { ExecRunChildContext } from "./JustMCFParser";
import { ExecChildContext } from "./JustMCFParser";
import { MatchPartContext } from "./JustMCFParser";
import { ScbCompareNumberContext } from "./JustMCFParser";
import { DataIdentifierContext } from "./JustMCFParser";
import { DataStorageIdentifierContext } from "./JustMCFParser";
import { DataEntityIdentifierContext } from "./JustMCFParser";
import { DataBlockIdentifierContext } from "./JustMCFParser";
import { DataMergeExpressionContext } from "./JustMCFParser";
import { DataOperationExpressionContext } from "./JustMCFParser";
import { DataRightValueContext } from "./JustMCFParser";
import { DataStatementContext } from "./JustMCFParser";
import { ScbOperationExpressionContext } from "./JustMCFParser";
import { ScbSingleOperationExpressionContext } from "./JustMCFParser";
import { ScbCoreIdentifierContext } from "./JustMCFParser";
import { ScbIdentifierContext } from "./JustMCFParser";
import { ScbPlayerStatementContext } from "./JustMCFParser";
import { ScbPlayerStatementInnerContext } from "./JustMCFParser";
import { ScbObjectiveStatementContext } from "./JustMCFParser";
import { ScbStatementInnerContext } from "./JustMCFParser";
import { BossbarStatementContext } from "./JustMCFParser";
import { BossbarStatementInnerContext } from "./JustMCFParser";
import { BossbarOperationExpressionContext } from "./JustMCFParser";
import { BossbarIdentifierContext } from "./JustMCFParser";
import { TitleStatementContext } from "./JustMCFParser";
import { TitleStatementInnerContext } from "./JustMCFParser";
import { TitleSelectorStatementInnerContext } from "./JustMCFParser";
import { TitleIndependentStatementInnerContext } from "./JustMCFParser";
import { DisplayStatementContext } from "./JustMCFParser";
import { DisplayStatementInnerContext } from "./JustMCFParser";
import { DisplayIndependentStatementInnerContext } from "./JustMCFParser";
import { ItemStatementContext } from "./JustMCFParser";
import { LootStatementContext } from "./JustMCFParser";
import { LootStatementInnerContext } from "./JustMCFParser";
import { LootSelectorStatementInnerContext } from "./JustMCFParser";
import { LootIndependentStatementInnerGiveContext } from "./JustMCFParser";
import { LootIndependentStatementInnerReplaceEntityContext } from "./JustMCFParser";
import { LootSourceContext } from "./JustMCFParser";
import { ItemStatementInnerContext } from "./JustMCFParser";
import { ItemSelectorStatementInnerContext } from "./JustMCFParser";
import { ItemIndependentStatementInnerContext } from "./JustMCFParser";
import { GiveAndClearIndependentStatementInnerContext } from "./JustMCFParser";
import { AttrStatementContext } from "./JustMCFParser";
import { AttrStatementInnerContext } from "./JustMCFParser";
import { AttrIndependentStatementInnerContext } from "./JustMCFParser";
import { EntityStatementContext } from "./JustMCFParser";
import { PlayerNameContext } from "./JustMCFParser";
import { EntityDeclareStatementInnerContext } from "./JustMCFParser";
import { TagIndependentStatementInnerContext } from "./JustMCFParser";
import { EffectIndependentStatementInnerContext } from "./JustMCFParser";
import { TpIndependentStatementInnerContext } from "./JustMCFParser";
import { EntityIndependentStatementInnerContext } from "./JustMCFParser";
import { EntityStatementInnerContext } from "./JustMCFParser";
import { EntityExpressionContext } from "./JustMCFParser";
import { BlockStatementContext } from "./JustMCFParser";
import { BlockStatementInnerContext } from "./JustMCFParser";
import { InterfaceStatementContext } from "./JustMCFParser";
import { DataAssignExistExpressionContext } from "./JustMCFParser";
import { ExistExpressionContext } from "./JustMCFParser";
import { IfStatementContext } from "./JustMCFParser";
import { IfElseStatementContext } from "./JustMCFParser";
import { WhileStatementContext } from "./JustMCFParser";
import { ForStatementContext } from "./JustMCFParser";
import { NbtContext } from "./JustMCFParser";
import { JsonContext } from "./JustMCFParser";
import { NbtPathWithoutCompoundContext } from "./JustMCFParser";
import { NbtPathContext } from "./JustMCFParser";
import { SnbtValueContext } from "./JustMCFParser";
import { SnbtContext } from "./JustMCFParser";
import { NbtCompoundContext } from "./JustMCFParser";
import { NbtPairContext } from "./JustMCFParser";
import { NbtListContext } from "./JustMCFParser";
import { NbtValueContext } from "./JustMCFParser";
import { NbtByteArrContext } from "./JustMCFParser";
import { NbtIntArrContext } from "./JustMCFParser";
import { NbtLongArrContext } from "./JustMCFParser";
import { NbtStringContext } from "./JustMCFParser";
import { JsonTextValueContext } from "./JustMCFParser";
import { JsonTextContext } from "./JustMCFParser";
import { JsonObjContext } from "./JustMCFParser";
import { JsonPairContext } from "./JustMCFParser";
import { JsonArrContext } from "./JustMCFParser";
import { JsonValueContext } from "./JustMCFParser";
import { BoolValueContext } from "./JustMCFParser";
import { NumberContext } from "./JustMCFParser";
import { EndContext } from "./JustMCFParser";
import { EndsContext } from "./JustMCFParser";
import { P_Context } from "./JustMCFParser";
import { Pn_Context } from "./JustMCFParser";
import { S_Context } from "./JustMCFParser";
import { KeyContext } from "./JustMCFParser";
import { Pos3IdentifierContext } from "./JustMCFParser";
import { Pos2IdentifierContext } from "./JustMCFParser";
import { Pos5IdentifierContext } from "./JustMCFParser";
import { Pos1Context } from "./JustMCFParser";
import { BlockIdentifierContext } from "./JustMCFParser";
import { BlockstateContext } from "./JustMCFParser";
import { NameSpaceContext } from "./JustMCFParser";
import { NameSpaceBlockContext } from "./JustMCFParser";
import { NameSpaceFuncContext } from "./JustMCFParser";
import { NameSpaceStorageContext } from "./JustMCFParser";
import { NameSpaceBossbarContext } from "./JustMCFParser";
import { NameSpaceBiomeContext } from "./JustMCFParser";
import { NameSpaceDimContext } from "./JustMCFParser";
import { NameSpacePredicateContext } from "./JustMCFParser";
import { NameSpaceItemContext } from "./JustMCFParser";
import { NameSpaceEntityContext } from "./JustMCFParser";
import { NameSpaceLootContext } from "./JustMCFParser";
import { NameSpaceItemModifierContext } from "./JustMCFParser";
import { TagNameSpaceContext } from "./JustMCFParser";
import { TagNameSpaceItemContext } from "./JustMCFParser";
import { TagNameSpaceBlockContext } from "./JustMCFParser";
import { TagNameSpaceFuncContext } from "./JustMCFParser";
import { TagNameSpaceEntityContext } from "./JustMCFParser";
import { RegisterNameContext } from "./JustMCFParser";
import { NumberTypeContext } from "./JustMCFParser";
import { AcceptableNameWithoutPointWithKeyContext } from "./JustMCFParser";
import { CriterionContext } from "./JustMCFParser";
import { NbtNameContext } from "./JustMCFParser";
import { AcceptableNameContext } from "./JustMCFParser";
import { AcceptableNameWithNumberContext } from "./JustMCFParser";
import { ResourceLocationContext } from "./JustMCFParser";
import { TypeNameContext } from "./JustMCFParser";
import { Item_slotContext } from "./JustMCFParser";
import { StringContext } from "./JustMCFParser";
import { Item_predicateContext } from "./JustMCFParser";
import { Block_predicateContext } from "./JustMCFParser";
import { SelectorContext } from "./JustMCFParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JustMCFParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JustMCFVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `effectISIClear`
	 * labeled alternative in `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEffectISIClear?: (ctx: EffectISIClearContext) => Result;

	/**
	 * Visit a parse tree produced by the `effectISIGive`
	 * labeled alternative in `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEffectISIGive?: (ctx: EffectISIGiveContext) => Result;

	/**
	 * Visit a parse tree produced by the `effectISIGiveSp`
	 * labeled alternative in `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEffectISIGiveSp?: (ctx: EffectISIGiveSpContext) => Result;

	/**
	 * Visit a parse tree produced by the `effectISIClearAll`
	 * labeled alternative in `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEffectISIClearAll?: (ctx: EffectISIClearAllContext) => Result;

	/**
	 * Visit a parse tree produced by the `giveISI`
	 * labeled alternative in `JustMCFParser.giveAndClearIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGiveISI?: (ctx: GiveISIContext) => Result;

	/**
	 * Visit a parse tree produced by the `clearISI`
	 * labeled alternative in `JustMCFParser.giveAndClearIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClearISI?: (ctx: ClearISIContext) => Result;

	/**
	 * Visit a parse tree produced by the `tagISIAdd`
	 * labeled alternative in `JustMCFParser.tagIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagISIAdd?: (ctx: TagISIAddContext) => Result;

	/**
	 * Visit a parse tree produced by the `tagISIRemove`
	 * labeled alternative in `JustMCFParser.tagIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagISIRemove?: (ctx: TagISIRemoveContext) => Result;

	/**
	 * Visit a parse tree produced by the `tagISIList`
	 * labeled alternative in `JustMCFParser.tagIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagISIList?: (ctx: TagISIListContext) => Result;

	/**
	 * Visit a parse tree produced by the `entitySIEntityExpression`
	 * labeled alternative in `JustMCFParser.entityStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntitySIEntityExpression?: (ctx: EntitySIEntityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `entitySISelectorCompound`
	 * labeled alternative in `JustMCFParser.entityStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntitySISelectorCompound?: (ctx: EntitySISelectorCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemSIGiveAndClear`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemSIGiveAndClear?: (ctx: ItemSIGiveAndClearContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemSIEntity`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemSIEntity?: (ctx: ItemSIEntityContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemSIBlock`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemSIBlock?: (ctx: ItemSIBlockContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemSILootInner`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemSILootInner?: (ctx: ItemSILootInnerContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemSISelectorNest`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemSISelectorNest?: (ctx: ItemSISelectorNestContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbFuncExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbFuncExpression?: (ctx: ScbFuncExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptMulDivModExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptMulDivModExpression?: (ctx: ScbOptMulDivModExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptAddSubExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptAddSubExpression?: (ctx: ScbOptAddSubExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbTempNumberExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbTempNumberExpression?: (ctx: ScbTempNumberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbIdExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbIdExpression?: (ctx: ScbIdExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbParenExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbParenExpression?: (ctx: ScbParenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `execWithRunOrChild`
	 * labeled alternative in `JustMCFParser.execStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecWithRunOrChild?: (ctx: ExecWithRunOrChildContext) => Result;

	/**
	 * Visit a parse tree produced by the `execWithoutRunOrChild`
	 * labeled alternative in `JustMCFParser.execStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecWithoutRunOrChild?: (ctx: ExecWithoutRunOrChildContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbSIRemove`
	 * labeled alternative in `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbSIRemove?: (ctx: ScbSIRemoveContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbSIDisplayname`
	 * labeled alternative in `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbSIDisplayname?: (ctx: ScbSIDisplaynameContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbSIRendertype`
	 * labeled alternative in `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbSIRendertype?: (ctx: ScbSIRendertypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbSIDisplay`
	 * labeled alternative in `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbSIDisplay?: (ctx: ScbSIDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by the `attrSISingle`
	 * labeled alternative in `JustMCFParser.attrStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrSISingle?: (ctx: AttrSISingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `attrSISelectorCompound`
	 * labeled alternative in `JustMCFParser.attrStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrSISelectorCompound?: (ctx: AttrSISelectorCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `execAlign`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecAlign?: (ctx: ExecAlignContext) => Result;

	/**
	 * Visit a parse tree produced by the `execAnchored`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecAnchored?: (ctx: ExecAnchoredContext) => Result;

	/**
	 * Visit a parse tree produced by the `execIn`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecIn?: (ctx: ExecInContext) => Result;

	/**
	 * Visit a parse tree produced by the `execAs`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecAs?: (ctx: ExecAsContext) => Result;

	/**
	 * Visit a parse tree produced by the `execAt`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecAt?: (ctx: ExecAtContext) => Result;

	/**
	 * Visit a parse tree produced by the `execFacingPos`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecFacingPos?: (ctx: ExecFacingPosContext) => Result;

	/**
	 * Visit a parse tree produced by the `execFacingEntity`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecFacingEntity?: (ctx: ExecFacingEntityContext) => Result;

	/**
	 * Visit a parse tree produced by the `execPositionedPos`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecPositionedPos?: (ctx: ExecPositionedPosContext) => Result;

	/**
	 * Visit a parse tree produced by the `execPostionedAs`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecPostionedAs?: (ctx: ExecPostionedAsContext) => Result;

	/**
	 * Visit a parse tree produced by the `execRotatedPos`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecRotatedPos?: (ctx: ExecRotatedPosContext) => Result;

	/**
	 * Visit a parse tree produced by the `execRotatedAs`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecRotatedAs?: (ctx: ExecRotatedAsContext) => Result;

	/**
	 * Visit a parse tree produced by the `execIfEntity`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecIfEntity?: (ctx: ExecIfEntityContext) => Result;

	/**
	 * Visit a parse tree produced by the `execIfScore`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecIfScore?: (ctx: ExecIfScoreContext) => Result;

	/**
	 * Visit a parse tree produced by the `execIfScoreMatches`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecIfScoreMatches?: (ctx: ExecIfScoreMatchesContext) => Result;

	/**
	 * Visit a parse tree produced by the `execIfBlock`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecIfBlock?: (ctx: ExecIfBlockContext) => Result;

	/**
	 * Visit a parse tree produced by the `execIfBlocks`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecIfBlocks?: (ctx: ExecIfBlocksContext) => Result;

	/**
	 * Visit a parse tree produced by the `execIfData`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecIfData?: (ctx: ExecIfDataContext) => Result;

	/**
	 * Visit a parse tree produced by the `execIfBiome`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecIfBiome?: (ctx: ExecIfBiomeContext) => Result;

	/**
	 * Visit a parse tree produced by the `execPredicate`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecPredicate?: (ctx: ExecPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `execStore`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStore?: (ctx: ExecStoreContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataStorageLocal`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStorageLocal?: (ctx: DataStorageLocalContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataStorage`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStorage?: (ctx: DataStorageContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataStorageWithEnv`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStorageWithEnv?: (ctx: DataStorageWithEnvContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataEntity`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataEntity?: (ctx: DataEntityContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataBlock`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataBlock?: (ctx: DataBlockContext) => Result;

	/**
	 * Visit a parse tree produced by the `attrISIGet`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrISIGet?: (ctx: AttrISIGetContext) => Result;

	/**
	 * Visit a parse tree produced by the `attrISIGetBase`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrISIGetBase?: (ctx: AttrISIGetBaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `attrISISetBase`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrISISetBase?: (ctx: AttrISISetBaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `attrISIModifierAdd`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrISIModifierAdd?: (ctx: AttrISIModifierAddContext) => Result;

	/**
	 * Visit a parse tree produced by the `attrISIModifierRemove`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrISIModifierRemove?: (ctx: AttrISIModifierRemoveContext) => Result;

	/**
	 * Visit a parse tree produced by the `attrISIModifierGet`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrISIModifierGet?: (ctx: AttrISIModifierGetContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSCompound`
	 * labeled alternative in `JustMCFParser.lootStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSCompound?: (ctx: LootSCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSSelectorCompound`
	 * labeled alternative in `JustMCFParser.lootStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSSelectorCompound?: (ctx: LootSSelectorCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemSSIGiveAndClear`
	 * labeled alternative in `JustMCFParser.itemSelectorStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemSSIGiveAndClear?: (ctx: ItemSSIGiveAndClearContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemSSIItem`
	 * labeled alternative in `JustMCFParser.itemSelectorStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemSSIItem?: (ctx: ItemSSIItemContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemSSILootInner`
	 * labeled alternative in `JustMCFParser.itemSelectorStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemSSILootInner?: (ctx: ItemSSILootInnerContext) => Result;

	/**
	 * Visit a parse tree produced by the `entitySDeclarePlayer`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntitySDeclarePlayer?: (ctx: EntitySDeclarePlayerContext) => Result;

	/**
	 * Visit a parse tree produced by the `entitySDeclare`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntitySDeclare?: (ctx: EntitySDeclareContext) => Result;

	/**
	 * Visit a parse tree produced by the `entitySDeclareWithName`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntitySDeclareWithName?: (ctx: EntitySDeclareWithNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `entitySCompound`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntitySCompound?: (ctx: EntitySCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `entitySSelectorCompound`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntitySSelectorCompound?: (ctx: EntitySSelectorCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarSIGet`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarSIGet?: (ctx: BossbarSIGetContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarSIRemove`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarSIRemove?: (ctx: BossbarSIRemoveContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarSISetColor`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarSISetColor?: (ctx: BossbarSISetColorContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarSISetMax`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarSISetMax?: (ctx: BossbarSISetMaxContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarSISetName`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarSISetName?: (ctx: BossbarSISetNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarSISetPlayer`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarSISetPlayer?: (ctx: BossbarSISetPlayerContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarSISetPlayerNull`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarSISetPlayerNull?: (ctx: BossbarSISetPlayerNullContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarSISetStyle`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarSISetStyle?: (ctx: BossbarSISetStyleContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarSISetValue`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarSISetValue?: (ctx: BossbarSISetValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarSISetVisible`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarSISetVisible?: (ctx: BossbarSISetVisibleContext) => Result;

	/**
	 * Visit a parse tree produced by the `titleISIJson`
	 * labeled alternative in `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleISIJson?: (ctx: TitleISIJsonContext) => Result;

	/**
	 * Visit a parse tree produced by the `titleISIClear`
	 * labeled alternative in `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleISIClear?: (ctx: TitleISIClearContext) => Result;

	/**
	 * Visit a parse tree produced by the `titleISIReset`
	 * labeled alternative in `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleISIReset?: (ctx: TitleISIResetContext) => Result;

	/**
	 * Visit a parse tree produced by the `titleISITimes`
	 * labeled alternative in `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleISITimes?: (ctx: TitleISITimesContext) => Result;

	/**
	 * Visit a parse tree produced by the `ifElseExec`
	 * labeled alternative in `JustMCFParser.ifElseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseExec?: (ctx: IfElseExecContext) => Result;

	/**
	 * Visit a parse tree produced by the `ifElseSIfS`
	 * labeled alternative in `JustMCFParser.ifElseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseSIfS?: (ctx: IfElseSIfSContext) => Result;

	/**
	 * Visit a parse tree produced by the `interfaceSNamespace`
	 * labeled alternative in `JustMCFParser.interfaceStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceSNamespace?: (ctx: InterfaceSNamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by the `interfaceSIdentifier`
	 * labeled alternative in `JustMCFParser.interfaceStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceSIdentifier?: (ctx: InterfaceSIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `existExpressionExec`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistExpressionExec?: (ctx: ExistExpressionExecContext) => Result;

	/**
	 * Visit a parse tree produced by the `existExpressionId`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistExpressionId?: (ctx: ExistExpressionIdContext) => Result;

	/**
	 * Visit a parse tree produced by the `exisitExpressionFuncRun`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExisitExpressionFuncRun?: (ctx: ExisitExpressionFuncRunContext) => Result;

	/**
	 * Visit a parse tree produced by the `existExpressionTrue`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistExpressionTrue?: (ctx: ExistExpressionTrueContext) => Result;

	/**
	 * Visit a parse tree produced by the `existExpressionFalse`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistExpressionFalse?: (ctx: ExistExpressionFalseContext) => Result;

	/**
	 * Visit a parse tree produced by the `existExpressionNot`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistExpressionNot?: (ctx: ExistExpressionNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `existExpressionBitAnd`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistExpressionBitAnd?: (ctx: ExistExpressionBitAndContext) => Result;

	/**
	 * Visit a parse tree produced by the `existExpressionBitOr`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistExpressionBitOr?: (ctx: ExistExpressionBitOrContext) => Result;

	/**
	 * Visit a parse tree produced by the `existExpressionAnd`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistExpressionAnd?: (ctx: ExistExpressionAndContext) => Result;

	/**
	 * Visit a parse tree produced by the `existExpressionOr`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistExpressionOr?: (ctx: ExistExpressionOrContext) => Result;

	/**
	 * Visit a parse tree produced by the `existExpressionParen`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistExpressionParen?: (ctx: ExistExpressionParenContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSourceLoot`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSourceLoot?: (ctx: LootSourceLootContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSourceFishHand`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSourceFishHand?: (ctx: LootSourceFishHandContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSourceFishTool`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSourceFishTool?: (ctx: LootSourceFishToolContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSourceKill`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSourceKill?: (ctx: LootSourceKillContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSourceMineHand`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSourceMineHand?: (ctx: LootSourceMineHandContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSourceMineTool`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSourceMineTool?: (ctx: LootSourceMineToolContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarSDeclare`
	 * labeled alternative in `JustMCFParser.bossbarStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarSDeclare?: (ctx: BossbarSDeclareContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarSOperation`
	 * labeled alternative in `JustMCFParser.bossbarStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarSOperation?: (ctx: BossbarSOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemSCompound`
	 * labeled alternative in `JustMCFParser.itemStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemSCompound?: (ctx: ItemSCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemSSelectorCompound`
	 * labeled alternative in `JustMCFParser.itemStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemSSelectorCompound?: (ctx: ItemSSelectorCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemISIReplaceWith`
	 * labeled alternative in `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemISIReplaceWith?: (ctx: ItemISIReplaceWithContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemISIReplaceFromEntity`
	 * labeled alternative in `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemISIReplaceFromEntity?: (ctx: ItemISIReplaceFromEntityContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemISIReplaceFromBlock`
	 * labeled alternative in `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemISIReplaceFromBlock?: (ctx: ItemISIReplaceFromBlockContext) => Result;

	/**
	 * Visit a parse tree produced by the `itemISIModify`
	 * labeled alternative in `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemISIModify?: (ctx: ItemISIModifyContext) => Result;

	/**
	 * Visit a parse tree produced by the `execStoreResultScore`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStoreResultScore?: (ctx: ExecStoreResultScoreContext) => Result;

	/**
	 * Visit a parse tree produced by the `execStoreSuccessScore`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStoreSuccessScore?: (ctx: ExecStoreSuccessScoreContext) => Result;

	/**
	 * Visit a parse tree produced by the `execStoreResultData`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStoreResultData?: (ctx: ExecStoreResultDataContext) => Result;

	/**
	 * Visit a parse tree produced by the `execStoreSuccessData`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStoreSuccessData?: (ctx: ExecStoreSuccessDataContext) => Result;

	/**
	 * Visit a parse tree produced by the `execStoreResultBossbar`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStoreResultBossbar?: (ctx: ExecStoreResultBossbarContext) => Result;

	/**
	 * Visit a parse tree produced by the `execStoreSuccessBossbar`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStoreSuccessBossbar?: (ctx: ExecStoreSuccessBossbarContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataMergeStorage`
	 * labeled alternative in `JustMCFParser.dataMergeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataMergeStorage?: (ctx: DataMergeStorageContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataMergeEntity`
	 * labeled alternative in `JustMCFParser.dataMergeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataMergeEntity?: (ctx: DataMergeEntityContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataMergeBlock`
	 * labeled alternative in `JustMCFParser.dataMergeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataMergeBlock?: (ctx: DataMergeBlockContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbPlayerSIScbOperationExpression`
	 * labeled alternative in `JustMCFParser.scbPlayerStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbPlayerSIScbOperationExpression?: (ctx: ScbPlayerSIScbOperationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbPlayerSIScbList`
	 * labeled alternative in `JustMCFParser.scbPlayerStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbPlayerSIScbList?: (ctx: ScbPlayerSIScbListContext) => Result;

	/**
	 * Visit a parse tree produced by the `titleSSIJson`
	 * labeled alternative in `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleSSIJson?: (ctx: TitleSSIJsonContext) => Result;

	/**
	 * Visit a parse tree produced by the `titleSSIClear`
	 * labeled alternative in `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleSSIClear?: (ctx: TitleSSIClearContext) => Result;

	/**
	 * Visit a parse tree produced by the `titleSSIReset`
	 * labeled alternative in `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleSSIReset?: (ctx: TitleSSIResetContext) => Result;

	/**
	 * Visit a parse tree produced by the `titleSSITimes`
	 * labeled alternative in `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleSSITimes?: (ctx: TitleSSITimesContext) => Result;

	/**
	 * Visit a parse tree produced by the `TpISIDestination`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTpISIDestination?: (ctx: TpISIDestinationContext) => Result;

	/**
	 * Visit a parse tree produced by the `TpISIPos`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTpISIPos?: (ctx: TpISIPosContext) => Result;

	/**
	 * Visit a parse tree produced by the `TpISIRotated`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTpISIRotated?: (ctx: TpISIRotatedContext) => Result;

	/**
	 * Visit a parse tree produced by the `TpISIRotatedDiv`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTpISIRotatedDiv?: (ctx: TpISIRotatedDivContext) => Result;

	/**
	 * Visit a parse tree produced by the `TpISIFacing`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTpISIFacing?: (ctx: TpISIFacingContext) => Result;

	/**
	 * Visit a parse tree produced by the `TpISIFacingEntity`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTpISIFacingEntity?: (ctx: TpISIFacingEntityContext) => Result;

	/**
	 * Visit a parse tree produced by the `execDirectRun`
	 * labeled alternative in `JustMCFParser.execRunChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecDirectRun?: (ctx: ExecDirectRunContext) => Result;

	/**
	 * Visit a parse tree produced by the `execNamedRun`
	 * labeled alternative in `JustMCFParser.execRunChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecNamedRun?: (ctx: ExecNamedRunContext) => Result;

	/**
	 * Visit a parse tree produced by the `execAnonymousRun`
	 * labeled alternative in `JustMCFParser.execRunChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecAnonymousRun?: (ctx: ExecAnonymousRunContext) => Result;

	/**
	 * Visit a parse tree produced by the `displaySCompound`
	 * labeled alternative in `JustMCFParser.displayStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplaySCompound?: (ctx: DisplaySCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `displaySSelectorCompound`
	 * labeled alternative in `JustMCFParser.displayStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplaySSelectorCompound?: (ctx: DisplaySSelectorCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityDeclareSITag`
	 * labeled alternative in `JustMCFParser.entityDeclareStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityDeclareSITag?: (ctx: EntityDeclareSITagContext) => Result;

	/**
	 * Visit a parse tree produced by the `titleSCompound`
	 * labeled alternative in `JustMCFParser.titleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleSCompound?: (ctx: TitleSCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `titleSSelectorCompound`
	 * labeled alternative in `JustMCFParser.titleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleSSelectorCompound?: (ctx: TitleSSelectorCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameSpaceSettingsFunc`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettingsFunc?: (ctx: NameSpaceSettingsFuncContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameSpaceSettingsBlock`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettingsBlock?: (ctx: NameSpaceSettingsBlockContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameSpaceSettingsStorage`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettingsStorage?: (ctx: NameSpaceSettingsStorageContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameSpaceSettingsBossbar`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettingsBossbar?: (ctx: NameSpaceSettingsBossbarContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameSpaceSettingsBiome`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettingsBiome?: (ctx: NameSpaceSettingsBiomeContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameSpaceSettingsEntity`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettingsEntity?: (ctx: NameSpaceSettingsEntityContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameSpaceSettingsPredicate`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettingsPredicate?: (ctx: NameSpaceSettingsPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameSpaceSettingsDim`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettingsDim?: (ctx: NameSpaceSettingsDimContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameSpaceSettingsItem`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettingsItem?: (ctx: NameSpaceSettingsItemContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameSpaceSettingsLoot`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettingsLoot?: (ctx: NameSpaceSettingsLootContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameSpaceSettingsItemModifier`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettingsItemModifier?: (ctx: NameSpaceSettingsItemModifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameSpaceSettingsDefault`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettingsDefault?: (ctx: NameSpaceSettingsDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameSpaceSettingsJustDefault`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettingsJustDefault?: (ctx: NameSpaceSettingsJustDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `noInExecStatementFunc`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoInExecStatementFunc?: (ctx: NoInExecStatementFuncContext) => Result;

	/**
	 * Visit a parse tree produced by the `noInExecStatementRunFunc`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoInExecStatementRunFunc?: (ctx: NoInExecStatementRunFuncContext) => Result;

	/**
	 * Visit a parse tree produced by the `noInExecStatementFuncImprove`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoInExecStatementFuncImprove?: (ctx: NoInExecStatementFuncImproveContext) => Result;

	/**
	 * Visit a parse tree produced by the `noInExecStatementInterface`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoInExecStatementInterface?: (ctx: NoInExecStatementInterfaceContext) => Result;

	/**
	 * Visit a parse tree produced by the `noInExecStatementStore`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoInExecStatementStore?: (ctx: NoInExecStatementStoreContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISIGiveAndClear`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISIGiveAndClear?: (ctx: EntityISIGiveAndClearContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISIKill`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISIKill?: (ctx: EntityISIKillContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISITag`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISITag?: (ctx: EntityISITagContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISIEffect`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISIEffect?: (ctx: EntityISIEffectContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISITp`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISITp?: (ctx: EntityISITpContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISITitleCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISITitleCompound?: (ctx: EntityISITitleCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISIDisplayCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISIDisplayCompound?: (ctx: EntityISIDisplayCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISIDisplaySingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISIDisplaySingle?: (ctx: EntityISIDisplaySingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISIItemSingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISIItemSingle?: (ctx: EntityISIItemSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISILootGiveSingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISILootGiveSingle?: (ctx: EntityISILootGiveSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISILootSingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISILootSingle?: (ctx: EntityISILootSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISIItemCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISIItemCompound?: (ctx: EntityISIItemCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISILootCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISILootCompound?: (ctx: EntityISILootCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISIAttrSingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISIAttrSingle?: (ctx: EntityISIAttrSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISIAttrCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISIAttrCompound?: (ctx: EntityISIAttrCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityISIExec`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityISIExec?: (ctx: EntityISIExecContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSIInsert`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSIInsert?: (ctx: LootSIInsertContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSISpawn`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSISpawn?: (ctx: LootSISpawnContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSIReplaceBlock`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSIReplaceBlock?: (ctx: LootSIReplaceBlockContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSIGive`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSIGive?: (ctx: LootSIGiveContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSIReplaceEntity`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSIReplaceEntity?: (ctx: LootSIReplaceEntityContext) => Result;

	/**
	 * Visit a parse tree produced by the `lootSISelectorNest`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSISelectorNest?: (ctx: LootSISelectorNestContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataGet`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataGet?: (ctx: DataGetContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataMerge`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataMerge?: (ctx: DataMergeContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataModifyMergeValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataModifyMergeValue?: (ctx: DataModifyMergeValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataModifyMergeFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataModifyMergeFrom?: (ctx: DataModifyMergeFromContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataModifySetValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataModifySetValue?: (ctx: DataModifySetValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataModifySetFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataModifySetFrom?: (ctx: DataModifySetFromContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataModifyAppendValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataModifyAppendValue?: (ctx: DataModifyAppendValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataModifyAppendFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataModifyAppendFrom?: (ctx: DataModifyAppendFromContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataModifyPrependValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataModifyPrependValue?: (ctx: DataModifyPrependValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataModifyPrependFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataModifyPrependFrom?: (ctx: DataModifyPrependFromContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataModifyInsertValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataModifyInsertValue?: (ctx: DataModifyInsertValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataModifyInsertFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataModifyInsertFrom?: (ctx: DataModifyInsertFromContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataRemove`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataRemove?: (ctx: DataRemoveContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarOpExprGet`
	 * labeled alternative in `JustMCFParser.bossbarOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarOpExprGet?: (ctx: BossbarOpExprGetContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarOpExprAssignValue`
	 * labeled alternative in `JustMCFParser.bossbarOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarOpExprAssignValue?: (ctx: BossbarOpExprAssignValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `bossbarOpExprAssignMax`
	 * labeled alternative in `JustMCFParser.bossbarOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarOpExprAssignMax?: (ctx: BossbarOpExprAssignMaxContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockSISetblock`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockSISetblock?: (ctx: BlockSISetblockContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockSIFill`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockSIFill?: (ctx: BlockSIFillContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockSIFillReplace`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockSIFillReplace?: (ctx: BlockSIFillReplaceContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockSIClone`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockSIClone?: (ctx: BlockSICloneContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockSICloneFiltered`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockSICloneFiltered?: (ctx: BlockSICloneFilteredContext) => Result;

	/**
	 * Visit a parse tree produced by the `attrSCompound`
	 * labeled alternative in `JustMCFParser.attrStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrSCompound?: (ctx: AttrSCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `attrSSelectorCompound`
	 * labeled alternative in `JustMCFParser.attrStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrSSelectorCompound?: (ctx: AttrSSelectorCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbGet`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbGet?: (ctx: ScbGetContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbAdd`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbAdd?: (ctx: ScbAddContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbRemove`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbRemove?: (ctx: ScbRemoveContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbSet`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbSet?: (ctx: ScbSetContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptMulAssignNumber`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptMulAssignNumber?: (ctx: ScbOptMulAssignNumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptDivAssignNumber`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptDivAssignNumber?: (ctx: ScbOptDivAssignNumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptModAssignNumber`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptModAssignNumber?: (ctx: ScbOptModAssignNumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptAddAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptAddAssign?: (ctx: ScbOptAddAssignContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptSubAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptSubAssign?: (ctx: ScbOptSubAssignContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptMulAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptMulAssign?: (ctx: ScbOptMulAssignContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptDivAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptDivAssign?: (ctx: ScbOptDivAssignContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptModAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptModAssign?: (ctx: ScbOptModAssignContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptExcFunc`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptExcFunc?: (ctx: ScbOptExcFuncContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptMinFunc`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptMinFunc?: (ctx: ScbOptMinFuncContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptMaxFunc`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptMaxFunc?: (ctx: ScbOptMaxFuncContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptAssign?: (ctx: ScbOptAssignContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbReset`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbReset?: (ctx: ScbResetContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbEnable`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbEnable?: (ctx: ScbEnableContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbOptExpression`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptExpression?: (ctx: ScbOptExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcTagSIFuncS`
	 * labeled alternative in `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncTagSIFuncS?: (ctx: FuncTagSIFuncSContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcTagSIFuncRunS`
	 * labeled alternative in `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncTagSIFuncRunS?: (ctx: FuncTagSIFuncRunSContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcTagSIFuncImproveS`
	 * labeled alternative in `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncTagSIFuncImproveS?: (ctx: FuncTagSIFuncImproveSContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcTagSIFuncTagS`
	 * labeled alternative in `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncTagSIFuncTagS?: (ctx: FuncTagSIFuncTagSContext) => Result;

	/**
	 * Visit a parse tree produced by the `displaySIScb`
	 * labeled alternative in `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplaySIScb?: (ctx: DisplaySIScbContext) => Result;

	/**
	 * Visit a parse tree produced by the `displaySIBossbar`
	 * labeled alternative in `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplaySIBossbar?: (ctx: DisplaySIBossbarContext) => Result;

	/**
	 * Visit a parse tree produced by the `displaySISelectorSingle`
	 * labeled alternative in `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplaySISelectorSingle?: (ctx: DisplaySISelectorSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `displaySISelectorCompound`
	 * labeled alternative in `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplaySISelectorCompound?: (ctx: DisplaySISelectorCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `whileStatementExec`
	 * labeled alternative in `JustMCFParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatementExec?: (ctx: WhileStatementExecContext) => Result;

	/**
	 * Visit a parse tree produced by the `whileStatementExist`
	 * labeled alternative in `JustMCFParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatementExist?: (ctx: WhileStatementExistContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcTagSettingsReplace`
	 * labeled alternative in `JustMCFParser.funcTagSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncTagSettingsReplace?: (ctx: FuncTagSettingsReplaceContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcTagSettingsReplaced`
	 * labeled alternative in `JustMCFParser.funcTagSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncTagSettingsReplaced?: (ctx: FuncTagSettingsReplacedContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataSCompound`
	 * labeled alternative in `JustMCFParser.dataStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataSCompound?: (ctx: DataSCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataSIdentifierCompound`
	 * labeled alternative in `JustMCFParser.dataStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataSIdentifierCompound?: (ctx: DataSIdentifierCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `displayISITitleSingle`
	 * labeled alternative in `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayISITitleSingle?: (ctx: DisplayISITitleSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `displayISITitleCompound`
	 * labeled alternative in `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayISITitleCompound?: (ctx: DisplayISITitleCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `displayISIText`
	 * labeled alternative in `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayISIText?: (ctx: DisplayISITextContext) => Result;

	/**
	 * Visit a parse tree produced by the `displayISIBossbar`
	 * labeled alternative in `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayISIBossbar?: (ctx: DisplayISIBossbarContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbObjSDeclareWithName`
	 * labeled alternative in `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbObjSDeclareWithName?: (ctx: ScbObjSDeclareWithNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbObjSDeclareSingle`
	 * labeled alternative in `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbObjSDeclareSingle?: (ctx: ScbObjSDeclareSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbObjSDeclareDefault`
	 * labeled alternative in `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbObjSDeclareDefault?: (ctx: ScbObjSDeclareDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `scbObjSOperation`
	 * labeled alternative in `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbObjSOperation?: (ctx: ScbObjSOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `titleSISelectorSingle`
	 * labeled alternative in `JustMCFParser.titleStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleSISelectorSingle?: (ctx: TitleSISelectorSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `titleSISelectorCompound`
	 * labeled alternative in `JustMCFParser.titleStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleSISelectorCompound?: (ctx: TitleSISelectorCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.mcfFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMcfFile?: (ctx: McfFileContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.fileStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileStatementInner?: (ctx: FileStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.statementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementInner?: (ctx: StatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoInExecStatement?: (ctx: NoInExecStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.leagalCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeagalCommand?: (ctx: LeagalCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpaceStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceStatement?: (ctx: NameSpaceStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceSettings?: (ctx: NameSpaceSettingsContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpaceStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceStatementInner?: (ctx: NameSpaceStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.namespaceSetStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceSetStatement?: (ctx: NamespaceSetStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.funcTagStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncTagStatement?: (ctx: FuncTagStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.funcTagSettings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncTagSettings?: (ctx: FuncTagSettingsContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncTagStatementInner?: (ctx: FuncTagStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.funcStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncStatement?: (ctx: FuncStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.funcImproveStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncImproveStatement?: (ctx: FuncImproveStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.funcImproveParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncImproveParam?: (ctx: FuncImproveParamContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.funcImproveStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncImproveStatementInner?: (ctx: FuncImproveStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.yeildStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYeildStatement?: (ctx: YeildStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.funcRunStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncRunStatement?: (ctx: FuncRunStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.funcImproveRunStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncImproveRunStatement?: (ctx: FuncImproveRunStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.funcImproveRunExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncImproveRunExpression?: (ctx: FuncImproveRunExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.funcImproveRunParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncImproveRunParam?: (ctx: FuncImproveRunParamContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.execStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStatement?: (ctx: ExecStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStoreChild?: (ctx: ExecStoreChildContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.execRunChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecRunChild?: (ctx: ExecRunChildContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecChild?: (ctx: ExecChildContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.matchPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchPart?: (ctx: MatchPartContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.scbCompareNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbCompareNumber?: (ctx: ScbCompareNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataIdentifier?: (ctx: DataIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.dataStorageIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStorageIdentifier?: (ctx: DataStorageIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.dataEntityIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataEntityIdentifier?: (ctx: DataEntityIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.dataBlockIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataBlockIdentifier?: (ctx: DataBlockIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.dataMergeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataMergeExpression?: (ctx: DataMergeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataOperationExpression?: (ctx: DataOperationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.dataRightValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataRightValue?: (ctx: DataRightValueContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.dataStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStatement?: (ctx: DataStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOperationExpression?: (ctx: ScbOperationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbSingleOperationExpression?: (ctx: ScbSingleOperationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.scbCoreIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbCoreIdentifier?: (ctx: ScbCoreIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.scbIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbIdentifier?: (ctx: ScbIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.scbPlayerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbPlayerStatement?: (ctx: ScbPlayerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.scbPlayerStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbPlayerStatementInner?: (ctx: ScbPlayerStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbObjectiveStatement?: (ctx: ScbObjectiveStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbStatementInner?: (ctx: ScbStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.bossbarStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarStatement?: (ctx: BossbarStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarStatementInner?: (ctx: BossbarStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.bossbarOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarOperationExpression?: (ctx: BossbarOperationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.bossbarIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBossbarIdentifier?: (ctx: BossbarIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.titleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleStatement?: (ctx: TitleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.titleStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleStatementInner?: (ctx: TitleStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleSelectorStatementInner?: (ctx: TitleSelectorStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleIndependentStatementInner?: (ctx: TitleIndependentStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.displayStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayStatement?: (ctx: DisplayStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayStatementInner?: (ctx: DisplayStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayIndependentStatementInner?: (ctx: DisplayIndependentStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.itemStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemStatement?: (ctx: ItemStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.lootStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootStatement?: (ctx: LootStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootStatementInner?: (ctx: LootStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.lootSelectorStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSelectorStatementInner?: (ctx: LootSelectorStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.lootIndependentStatementInnerGive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootIndependentStatementInnerGive?: (ctx: LootIndependentStatementInnerGiveContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.lootIndependentStatementInnerReplaceEntity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootIndependentStatementInnerReplaceEntity?: (ctx: LootIndependentStatementInnerReplaceEntityContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLootSource?: (ctx: LootSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemStatementInner?: (ctx: ItemStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.itemSelectorStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemSelectorStatementInner?: (ctx: ItemSelectorStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemIndependentStatementInner?: (ctx: ItemIndependentStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.giveAndClearIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGiveAndClearIndependentStatementInner?: (ctx: GiveAndClearIndependentStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.attrStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrStatement?: (ctx: AttrStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.attrStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrStatementInner?: (ctx: AttrStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrIndependentStatementInner?: (ctx: AttrIndependentStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityStatement?: (ctx: EntityStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.playerName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlayerName?: (ctx: PlayerNameContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.entityDeclareStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityDeclareStatementInner?: (ctx: EntityDeclareStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.tagIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagIndependentStatementInner?: (ctx: TagIndependentStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEffectIndependentStatementInner?: (ctx: EffectIndependentStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTpIndependentStatementInner?: (ctx: TpIndependentStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityIndependentStatementInner?: (ctx: EntityIndependentStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.entityStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityStatementInner?: (ctx: EntityStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.entityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityExpression?: (ctx: EntityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatementInner?: (ctx: BlockStatementInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.interfaceStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceStatement?: (ctx: InterfaceStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.dataAssignExistExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataAssignExistExpression?: (ctx: DataAssignExistExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistExpression?: (ctx: ExistExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.ifElseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseStatement?: (ctx: IfElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nbt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbt?: (ctx: NbtContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.json`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJson?: (ctx: JsonContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nbtPathWithoutCompound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtPathWithoutCompound?: (ctx: NbtPathWithoutCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nbtPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtPath?: (ctx: NbtPathContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.snbtValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSnbtValue?: (ctx: SnbtValueContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.snbt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSnbt?: (ctx: SnbtContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nbtCompound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtCompound?: (ctx: NbtCompoundContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nbtPair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtPair?: (ctx: NbtPairContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nbtList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtList?: (ctx: NbtListContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nbtValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtValue?: (ctx: NbtValueContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nbtByteArr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtByteArr?: (ctx: NbtByteArrContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nbtIntArr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtIntArr?: (ctx: NbtIntArrContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nbtLongArr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtLongArr?: (ctx: NbtLongArrContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nbtString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtString?: (ctx: NbtStringContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.jsonTextValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonTextValue?: (ctx: JsonTextValueContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.jsonText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonText?: (ctx: JsonTextContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.jsonObj`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonObj?: (ctx: JsonObjContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.jsonPair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonPair?: (ctx: JsonPairContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.jsonArr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonArr?: (ctx: JsonArrContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.jsonValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonValue?: (ctx: JsonValueContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.boolValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolValue?: (ctx: BoolValueContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.end`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd?: (ctx: EndContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.ends`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnds?: (ctx: EndsContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.p_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitP_?: (ctx: P_Context) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.pn_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPn_?: (ctx: Pn_Context) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.s_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitS_?: (ctx: S_Context) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.pos3Identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPos3Identifier?: (ctx: Pos3IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.pos2Identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPos2Identifier?: (ctx: Pos2IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.pos5Identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPos5Identifier?: (ctx: Pos5IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.pos1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPos1?: (ctx: Pos1Context) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.blockIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockIdentifier?: (ctx: BlockIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.blockstate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockstate?: (ctx: BlockstateContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpace?: (ctx: NameSpaceContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpaceBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceBlock?: (ctx: NameSpaceBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpaceFunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceFunc?: (ctx: NameSpaceFuncContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpaceStorage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceStorage?: (ctx: NameSpaceStorageContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpaceBossbar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceBossbar?: (ctx: NameSpaceBossbarContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpaceBiome`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceBiome?: (ctx: NameSpaceBiomeContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpaceDim`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceDim?: (ctx: NameSpaceDimContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpacePredicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpacePredicate?: (ctx: NameSpacePredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpaceItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceItem?: (ctx: NameSpaceItemContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpaceEntity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceEntity?: (ctx: NameSpaceEntityContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpaceLoot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceLoot?: (ctx: NameSpaceLootContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpaceItemModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceItemModifier?: (ctx: NameSpaceItemModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.tagNameSpace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagNameSpace?: (ctx: TagNameSpaceContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.tagNameSpaceItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagNameSpaceItem?: (ctx: TagNameSpaceItemContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.tagNameSpaceBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagNameSpaceBlock?: (ctx: TagNameSpaceBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.tagNameSpaceFunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagNameSpaceFunc?: (ctx: TagNameSpaceFuncContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.tagNameSpaceEntity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagNameSpaceEntity?: (ctx: TagNameSpaceEntityContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.registerName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegisterName?: (ctx: RegisterNameContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.numberType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberType?: (ctx: NumberTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.acceptableNameWithoutPointWithKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcceptableNameWithoutPointWithKey?: (ctx: AcceptableNameWithoutPointWithKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.criterion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCriterion?: (ctx: CriterionContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nbtName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtName?: (ctx: NbtNameContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.acceptableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcceptableName?: (ctx: AcceptableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.acceptableNameWithNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcceptableNameWithNumber?: (ctx: AcceptableNameWithNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.resourceLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceLocation?: (ctx: ResourceLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.item_slot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItem_slot?: (ctx: Item_slotContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.item_predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItem_predicate?: (ctx: Item_predicateContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.block_predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_predicate?: (ctx: Block_predicateContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector?: (ctx: SelectorContext) => Result;
}

