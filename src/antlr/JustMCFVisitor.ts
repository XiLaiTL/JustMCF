// Generated from ./antlr/JustMCF.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor.js";

import { EffectISIClearContext } from "./JustMCFParser.js";
import { EffectISIGiveContext } from "./JustMCFParser.js";
import { EffectISIGiveSpContext } from "./JustMCFParser.js";
import { EffectISIClearAllContext } from "./JustMCFParser.js";
import { GiveISIContext } from "./JustMCFParser.js";
import { ClearISIContext } from "./JustMCFParser.js";
import { TagISIAddContext } from "./JustMCFParser.js";
import { TagISIRemoveContext } from "./JustMCFParser.js";
import { TagISIListContext } from "./JustMCFParser.js";
import { EntitySIEntityExpressionContext } from "./JustMCFParser.js";
import { EntitySISelectorCompoundContext } from "./JustMCFParser.js";
import { ItemSIGiveAndClearContext } from "./JustMCFParser.js";
import { ItemSIEntityContext } from "./JustMCFParser.js";
import { ItemSIBlockContext } from "./JustMCFParser.js";
import { ItemSILootInnerContext } from "./JustMCFParser.js";
import { ItemSISelectorNestContext } from "./JustMCFParser.js";
import { ScbFuncExpressionContext } from "./JustMCFParser.js";
import { ScbOptMulDivModExpressionContext } from "./JustMCFParser.js";
import { ScbOptAddSubExpressionContext } from "./JustMCFParser.js";
import { ScbTempNumberExpressionContext } from "./JustMCFParser.js";
import { ScbIdExpressionContext } from "./JustMCFParser.js";
import { ScbParenExpressionContext } from "./JustMCFParser.js";
import { ExecWithRunOrChildContext } from "./JustMCFParser.js";
import { ExecWithoutRunOrChildContext } from "./JustMCFParser.js";
import { ScbSIRemoveContext } from "./JustMCFParser.js";
import { ScbSIDisplaynameContext } from "./JustMCFParser.js";
import { ScbSIRendertypeContext } from "./JustMCFParser.js";
import { ScbSIDisplayContext } from "./JustMCFParser.js";
import { AttrSISingleContext } from "./JustMCFParser.js";
import { AttrSISelectorCompoundContext } from "./JustMCFParser.js";
import { ExecAlignContext } from "./JustMCFParser.js";
import { ExecAnchoredContext } from "./JustMCFParser.js";
import { ExecInContext } from "./JustMCFParser.js";
import { ExecAsContext } from "./JustMCFParser.js";
import { ExecAtContext } from "./JustMCFParser.js";
import { ExecFacingPosContext } from "./JustMCFParser.js";
import { ExecFacingEntityContext } from "./JustMCFParser.js";
import { ExecPositionedPosContext } from "./JustMCFParser.js";
import { ExecPostionedAsContext } from "./JustMCFParser.js";
import { ExecRotatedPosContext } from "./JustMCFParser.js";
import { ExecRotatedAsContext } from "./JustMCFParser.js";
import { ExecIfEntityContext } from "./JustMCFParser.js";
import { ExecIfScoreContext } from "./JustMCFParser.js";
import { ExecIfScoreMatchesContext } from "./JustMCFParser.js";
import { ExecIfBlockContext } from "./JustMCFParser.js";
import { ExecIfBlocksContext } from "./JustMCFParser.js";
import { ExecIfDataContext } from "./JustMCFParser.js";
import { ExecIfBiomeContext } from "./JustMCFParser.js";
import { ExecPredicateContext } from "./JustMCFParser.js";
import { ExecStoreContext } from "./JustMCFParser.js";
import { DataStorageLocalContext } from "./JustMCFParser.js";
import { DataStorageContext } from "./JustMCFParser.js";
import { DataStorageWithEnvContext } from "./JustMCFParser.js";
import { DataEntityContext } from "./JustMCFParser.js";
import { DataBlockContext } from "./JustMCFParser.js";
import { AttrISIGetContext } from "./JustMCFParser.js";
import { AttrISIGetBaseContext } from "./JustMCFParser.js";
import { AttrISISetBaseContext } from "./JustMCFParser.js";
import { AttrISIModifierAddContext } from "./JustMCFParser.js";
import { AttrISIModifierRemoveContext } from "./JustMCFParser.js";
import { AttrISIModifierGetContext } from "./JustMCFParser.js";
import { LootSCompoundContext } from "./JustMCFParser.js";
import { LootSSelectorCompoundContext } from "./JustMCFParser.js";
import { ItemSSIGiveAndClearContext } from "./JustMCFParser.js";
import { ItemSSIItemContext } from "./JustMCFParser.js";
import { ItemSSILootInnerContext } from "./JustMCFParser.js";
import { EntitySDeclarePlayerContext } from "./JustMCFParser.js";
import { EntitySDeclareContext } from "./JustMCFParser.js";
import { EntitySDeclareWithNameContext } from "./JustMCFParser.js";
import { EntitySCompoundContext } from "./JustMCFParser.js";
import { EntitySSelectorCompoundContext } from "./JustMCFParser.js";
import { BossbarSIGetContext } from "./JustMCFParser.js";
import { BossbarSIRemoveContext } from "./JustMCFParser.js";
import { BossbarSISetColorContext } from "./JustMCFParser.js";
import { BossbarSISetMaxContext } from "./JustMCFParser.js";
import { BossbarSISetNameContext } from "./JustMCFParser.js";
import { BossbarSISetPlayerContext } from "./JustMCFParser.js";
import { BossbarSISetPlayerNullContext } from "./JustMCFParser.js";
import { BossbarSISetStyleContext } from "./JustMCFParser.js";
import { BossbarSISetValueContext } from "./JustMCFParser.js";
import { BossbarSISetVisibleContext } from "./JustMCFParser.js";
import { TitleISIJsonContext } from "./JustMCFParser.js";
import { TitleISIClearContext } from "./JustMCFParser.js";
import { TitleISIResetContext } from "./JustMCFParser.js";
import { TitleISITimesContext } from "./JustMCFParser.js";
import { IfElseExecContext } from "./JustMCFParser.js";
import { IfElseSIfSContext } from "./JustMCFParser.js";
import { InterfaceSNamespaceContext } from "./JustMCFParser.js";
import { InterfaceSIdentifierContext } from "./JustMCFParser.js";
import { ExistExpressionExecContext } from "./JustMCFParser.js";
import { ExistExpressionIdContext } from "./JustMCFParser.js";
import { ExisitExpressionFuncRunContext } from "./JustMCFParser.js";
import { ExistExpressionTrueContext } from "./JustMCFParser.js";
import { ExistExpressionFalseContext } from "./JustMCFParser.js";
import { ExistExpressionNotContext } from "./JustMCFParser.js";
import { ExistExpressionBitAndContext } from "./JustMCFParser.js";
import { ExistExpressionBitOrContext } from "./JustMCFParser.js";
import { ExistExpressionAndContext } from "./JustMCFParser.js";
import { ExistExpressionOrContext } from "./JustMCFParser.js";
import { ExistExpressionParenContext } from "./JustMCFParser.js";
import { LootSourceLootContext } from "./JustMCFParser.js";
import { LootSourceFishHandContext } from "./JustMCFParser.js";
import { LootSourceFishToolContext } from "./JustMCFParser.js";
import { LootSourceKillContext } from "./JustMCFParser.js";
import { LootSourceMineHandContext } from "./JustMCFParser.js";
import { LootSourceMineToolContext } from "./JustMCFParser.js";
import { BossbarSDeclareContext } from "./JustMCFParser.js";
import { BossbarSOperationContext } from "./JustMCFParser.js";
import { ItemSCompoundContext } from "./JustMCFParser.js";
import { ItemSSelectorCompoundContext } from "./JustMCFParser.js";
import { ItemISIReplaceWithContext } from "./JustMCFParser.js";
import { ItemISIReplaceFromEntityContext } from "./JustMCFParser.js";
import { ItemISIReplaceFromBlockContext } from "./JustMCFParser.js";
import { ItemISIModifyContext } from "./JustMCFParser.js";
import { ExecStoreResultScoreContext } from "./JustMCFParser.js";
import { ExecStoreSuccessScoreContext } from "./JustMCFParser.js";
import { ExecStoreResultDataContext } from "./JustMCFParser.js";
import { ExecStoreSuccessDataContext } from "./JustMCFParser.js";
import { ExecStoreResultBossbarContext } from "./JustMCFParser.js";
import { ExecStoreSuccessBossbarContext } from "./JustMCFParser.js";
import { DataMergeStorageContext } from "./JustMCFParser.js";
import { DataMergeEntityContext } from "./JustMCFParser.js";
import { DataMergeBlockContext } from "./JustMCFParser.js";
import { ScbPlayerSIScbOperationExpressionContext } from "./JustMCFParser.js";
import { ScbPlayerSIScbListContext } from "./JustMCFParser.js";
import { TitleSSIJsonContext } from "./JustMCFParser.js";
import { TitleSSIClearContext } from "./JustMCFParser.js";
import { TitleSSIResetContext } from "./JustMCFParser.js";
import { TitleSSITimesContext } from "./JustMCFParser.js";
import { TpISIDestinationContext } from "./JustMCFParser.js";
import { TpISIPosContext } from "./JustMCFParser.js";
import { TpISIRotatedContext } from "./JustMCFParser.js";
import { TpISIRotatedDivContext } from "./JustMCFParser.js";
import { TpISIFacingContext } from "./JustMCFParser.js";
import { TpISIFacingEntityContext } from "./JustMCFParser.js";
import { ExecDirectRunContext } from "./JustMCFParser.js";
import { ExecNamedRunContext } from "./JustMCFParser.js";
import { ExecAnonymousRunContext } from "./JustMCFParser.js";
import { DisplaySCompoundContext } from "./JustMCFParser.js";
import { DisplaySSelectorCompoundContext } from "./JustMCFParser.js";
import { EntityDeclareSITagContext } from "./JustMCFParser.js";
import { TitleSCompoundContext } from "./JustMCFParser.js";
import { TitleSSelectorCompoundContext } from "./JustMCFParser.js";
import { NameSpaceSettingsFuncContext } from "./JustMCFParser.js";
import { NameSpaceSettingsBlockContext } from "./JustMCFParser.js";
import { NameSpaceSettingsStorageContext } from "./JustMCFParser.js";
import { NameSpaceSettingsBossbarContext } from "./JustMCFParser.js";
import { NameSpaceSettingsBiomeContext } from "./JustMCFParser.js";
import { NameSpaceSettingsEntityContext } from "./JustMCFParser.js";
import { NameSpaceSettingsPredicateContext } from "./JustMCFParser.js";
import { NameSpaceSettingsDimContext } from "./JustMCFParser.js";
import { NameSpaceSettingsItemContext } from "./JustMCFParser.js";
import { NameSpaceSettingsLootContext } from "./JustMCFParser.js";
import { NameSpaceSettingsItemModifierContext } from "./JustMCFParser.js";
import { NameSpaceSettingsDefaultContext } from "./JustMCFParser.js";
import { NameSpaceSettingsJustDefaultContext } from "./JustMCFParser.js";
import { NoInExecStatementFuncContext } from "./JustMCFParser.js";
import { NoInExecStatementRunFuncContext } from "./JustMCFParser.js";
import { NoInExecStatementFuncImproveContext } from "./JustMCFParser.js";
import { NoInExecStatementInterfaceContext } from "./JustMCFParser.js";
import { NoInExecStatementStoreContext } from "./JustMCFParser.js";
import { EntityISIGiveAndClearContext } from "./JustMCFParser.js";
import { EntityISIKillContext } from "./JustMCFParser.js";
import { EntityISITagContext } from "./JustMCFParser.js";
import { EntityISIEffectContext } from "./JustMCFParser.js";
import { EntityISITpContext } from "./JustMCFParser.js";
import { EntityISITitleCompoundContext } from "./JustMCFParser.js";
import { EntityISIDisplayCompoundContext } from "./JustMCFParser.js";
import { EntityISIDisplaySingleContext } from "./JustMCFParser.js";
import { EntityISIItemSingleContext } from "./JustMCFParser.js";
import { EntityISILootGiveSingleContext } from "./JustMCFParser.js";
import { EntityISILootSingleContext } from "./JustMCFParser.js";
import { EntityISIItemCompoundContext } from "./JustMCFParser.js";
import { EntityISILootCompoundContext } from "./JustMCFParser.js";
import { EntityISIAttrSingleContext } from "./JustMCFParser.js";
import { EntityISIAttrCompoundContext } from "./JustMCFParser.js";
import { EntityISIExecContext } from "./JustMCFParser.js";
import { LootSIInsertContext } from "./JustMCFParser.js";
import { LootSISpawnContext } from "./JustMCFParser.js";
import { LootSIReplaceBlockContext } from "./JustMCFParser.js";
import { LootSIGiveContext } from "./JustMCFParser.js";
import { LootSIReplaceEntityContext } from "./JustMCFParser.js";
import { LootSISelectorNestContext } from "./JustMCFParser.js";
import { DataGetContext } from "./JustMCFParser.js";
import { DataMergeContext } from "./JustMCFParser.js";
import { DataModifyMergeValueContext } from "./JustMCFParser.js";
import { DataModifyMergeFromContext } from "./JustMCFParser.js";
import { DataModifySetValueContext } from "./JustMCFParser.js";
import { DataModifySetFromContext } from "./JustMCFParser.js";
import { DataModifyAppendValueContext } from "./JustMCFParser.js";
import { DataModifyAppendFromContext } from "./JustMCFParser.js";
import { DataModifyPrependValueContext } from "./JustMCFParser.js";
import { DataModifyPrependFromContext } from "./JustMCFParser.js";
import { DataModifyInsertValueContext } from "./JustMCFParser.js";
import { DataModifyInsertFromContext } from "./JustMCFParser.js";
import { DataRemoveContext } from "./JustMCFParser.js";
import { BossbarOpExprGetContext } from "./JustMCFParser.js";
import { BossbarOpExprAssignValueContext } from "./JustMCFParser.js";
import { BossbarOpExprAssignMaxContext } from "./JustMCFParser.js";
import { BlockSISetblockContext } from "./JustMCFParser.js";
import { BlockSIFillContext } from "./JustMCFParser.js";
import { BlockSIFillReplaceContext } from "./JustMCFParser.js";
import { BlockSICloneContext } from "./JustMCFParser.js";
import { BlockSICloneFilteredContext } from "./JustMCFParser.js";
import { AttrSCompoundContext } from "./JustMCFParser.js";
import { AttrSSelectorCompoundContext } from "./JustMCFParser.js";
import { ScbGetContext } from "./JustMCFParser.js";
import { ScbAddContext } from "./JustMCFParser.js";
import { ScbRemoveContext } from "./JustMCFParser.js";
import { ScbSetContext } from "./JustMCFParser.js";
import { ScbOptMulAssignNumberContext } from "./JustMCFParser.js";
import { ScbOptDivAssignNumberContext } from "./JustMCFParser.js";
import { ScbOptModAssignNumberContext } from "./JustMCFParser.js";
import { ScbOptAddAssignContext } from "./JustMCFParser.js";
import { ScbOptSubAssignContext } from "./JustMCFParser.js";
import { ScbOptMulAssignContext } from "./JustMCFParser.js";
import { ScbOptDivAssignContext } from "./JustMCFParser.js";
import { ScbOptModAssignContext } from "./JustMCFParser.js";
import { ScbOptExcFuncContext } from "./JustMCFParser.js";
import { ScbOptMinFuncContext } from "./JustMCFParser.js";
import { ScbOptMaxFuncContext } from "./JustMCFParser.js";
import { ScbOptAssignContext } from "./JustMCFParser.js";
import { ScbResetContext } from "./JustMCFParser.js";
import { ScbEnableContext } from "./JustMCFParser.js";
import { ScbOptExpressionContext } from "./JustMCFParser.js";
import { FuncTagSIFuncSContext } from "./JustMCFParser.js";
import { FuncTagSIFuncRunSContext } from "./JustMCFParser.js";
import { FuncTagSIFuncImproveSContext } from "./JustMCFParser.js";
import { FuncTagSIFuncTagSContext } from "./JustMCFParser.js";
import { DisplaySIScbContext } from "./JustMCFParser.js";
import { DisplaySIBossbarContext } from "./JustMCFParser.js";
import { DisplaySISelectorSingleContext } from "./JustMCFParser.js";
import { DisplaySISelectorCompoundContext } from "./JustMCFParser.js";
import { WhileStatementExecContext } from "./JustMCFParser.js";
import { WhileStatementExistContext } from "./JustMCFParser.js";
import { FuncTagSettingsReplaceContext } from "./JustMCFParser.js";
import { FuncTagSettingsReplacedContext } from "./JustMCFParser.js";
import { DataSCompoundContext } from "./JustMCFParser.js";
import { DataSIdentifierCompoundContext } from "./JustMCFParser.js";
import { DisplayISITitleSingleContext } from "./JustMCFParser.js";
import { DisplayISITitleCompoundContext } from "./JustMCFParser.js";
import { DisplayISITextContext } from "./JustMCFParser.js";
import { DisplayISIBossbarContext } from "./JustMCFParser.js";
import { ScbObjSDeclareWithNameContext } from "./JustMCFParser.js";
import { ScbObjSDeclareSingleContext } from "./JustMCFParser.js";
import { ScbObjSDeclareDefaultContext } from "./JustMCFParser.js";
import { ScbObjSOperationContext } from "./JustMCFParser.js";
import { TitleSISelectorSingleContext } from "./JustMCFParser.js";
import { TitleSISelectorCompoundContext } from "./JustMCFParser.js";
import { McfFileContext } from "./JustMCFParser.js";
import { FileStatementInnerContext } from "./JustMCFParser.js";
import { StatementInnerContext } from "./JustMCFParser.js";
import { StatementContext } from "./JustMCFParser.js";
import { NoInExecStatementContext } from "./JustMCFParser.js";
import { LeagalCommandContext } from "./JustMCFParser.js";
import { NameSpaceStatementContext } from "./JustMCFParser.js";
import { NameSpaceSettingsContext } from "./JustMCFParser.js";
import { NameSpaceStatementInnerContext } from "./JustMCFParser.js";
import { NamespaceSetStatementContext } from "./JustMCFParser.js";
import { FuncTagStatementContext } from "./JustMCFParser.js";
import { FuncTagSettingsContext } from "./JustMCFParser.js";
import { FuncTagStatementInnerContext } from "./JustMCFParser.js";
import { FuncStatementContext } from "./JustMCFParser.js";
import { FuncImproveStatementContext } from "./JustMCFParser.js";
import { FuncImproveParamContext } from "./JustMCFParser.js";
import { FuncImproveStatementInnerContext } from "./JustMCFParser.js";
import { YieldStatementContext } from "./JustMCFParser.js";
import { FuncRunStatementContext } from "./JustMCFParser.js";
import { FuncImproveRunStatementContext } from "./JustMCFParser.js";
import { FuncImproveRunExpressionContext } from "./JustMCFParser.js";
import { FuncImproveRunParamContext } from "./JustMCFParser.js";
import { ExecStatementContext } from "./JustMCFParser.js";
import { ExecStoreChildContext } from "./JustMCFParser.js";
import { ExecRunChildContext } from "./JustMCFParser.js";
import { ExecChildContext } from "./JustMCFParser.js";
import { MatchPartContext } from "./JustMCFParser.js";
import { ScbCompareNumberContext } from "./JustMCFParser.js";
import { DataIdentifierContext } from "./JustMCFParser.js";
import { DataStorageIdentifierContext } from "./JustMCFParser.js";
import { DataEntityIdentifierContext } from "./JustMCFParser.js";
import { DataBlockIdentifierContext } from "./JustMCFParser.js";
import { DataMergeExpressionContext } from "./JustMCFParser.js";
import { DataOperationExpressionContext } from "./JustMCFParser.js";
import { DataRightValueContext } from "./JustMCFParser.js";
import { DataStatementContext } from "./JustMCFParser.js";
import { ScbOperationExpressionContext } from "./JustMCFParser.js";
import { ScbSingleOperationExpressionContext } from "./JustMCFParser.js";
import { ScbCoreIdentifierContext } from "./JustMCFParser.js";
import { ScbIdentifierContext } from "./JustMCFParser.js";
import { ScbPlayerStatementContext } from "./JustMCFParser.js";
import { ScbPlayerStatementInnerContext } from "./JustMCFParser.js";
import { ScbObjectiveStatementContext } from "./JustMCFParser.js";
import { ScbStatementInnerContext } from "./JustMCFParser.js";
import { BossbarStatementContext } from "./JustMCFParser.js";
import { BossbarStatementInnerContext } from "./JustMCFParser.js";
import { BossbarOperationExpressionContext } from "./JustMCFParser.js";
import { BossbarIdentifierContext } from "./JustMCFParser.js";
import { TitleStatementContext } from "./JustMCFParser.js";
import { TitleStatementInnerContext } from "./JustMCFParser.js";
import { TitleSelectorStatementInnerContext } from "./JustMCFParser.js";
import { TitleIndependentStatementInnerContext } from "./JustMCFParser.js";
import { DisplayStatementContext } from "./JustMCFParser.js";
import { DisplayStatementInnerContext } from "./JustMCFParser.js";
import { DisplayIndependentStatementInnerContext } from "./JustMCFParser.js";
import { ItemStatementContext } from "./JustMCFParser.js";
import { LootStatementContext } from "./JustMCFParser.js";
import { LootStatementInnerContext } from "./JustMCFParser.js";
import { LootSelectorStatementInnerContext } from "./JustMCFParser.js";
import { LootIndependentStatementInnerGiveContext } from "./JustMCFParser.js";
import { LootIndependentStatementInnerReplaceEntityContext } from "./JustMCFParser.js";
import { LootSourceContext } from "./JustMCFParser.js";
import { ItemStatementInnerContext } from "./JustMCFParser.js";
import { ItemSelectorStatementInnerContext } from "./JustMCFParser.js";
import { ItemIndependentStatementInnerContext } from "./JustMCFParser.js";
import { GiveAndClearIndependentStatementInnerContext } from "./JustMCFParser.js";
import { AttrStatementContext } from "./JustMCFParser.js";
import { AttrStatementInnerContext } from "./JustMCFParser.js";
import { AttrIndependentStatementInnerContext } from "./JustMCFParser.js";
import { EntityStatementContext } from "./JustMCFParser.js";
import { PlayerNameContext } from "./JustMCFParser.js";
import { EntityDeclareStatementInnerContext } from "./JustMCFParser.js";
import { TagIndependentStatementInnerContext } from "./JustMCFParser.js";
import { EffectIndependentStatementInnerContext } from "./JustMCFParser.js";
import { TpIndependentStatementInnerContext } from "./JustMCFParser.js";
import { EntityIndependentStatementInnerContext } from "./JustMCFParser.js";
import { EntityStatementInnerContext } from "./JustMCFParser.js";
import { EntityExpressionContext } from "./JustMCFParser.js";
import { BlockStatementContext } from "./JustMCFParser.js";
import { BlockStatementInnerContext } from "./JustMCFParser.js";
import { InterfaceStatementContext } from "./JustMCFParser.js";
import { DataAssignExistExpressionContext } from "./JustMCFParser.js";
import { ExistExpressionContext } from "./JustMCFParser.js";
import { IfStatementContext } from "./JustMCFParser.js";
import { IfElseStatementContext } from "./JustMCFParser.js";
import { WhileStatementContext } from "./JustMCFParser.js";
import { ForStatementContext } from "./JustMCFParser.js";
import { NbtContext } from "./JustMCFParser.js";
import { JsonContext } from "./JustMCFParser.js";
import { NbtPathWithoutCompoundContext } from "./JustMCFParser.js";
import { NbtPathContext } from "./JustMCFParser.js";
import { SnbtValueContext } from "./JustMCFParser.js";
import { SnbtContext } from "./JustMCFParser.js";
import { NbtCompoundContext } from "./JustMCFParser.js";
import { NbtPairContext } from "./JustMCFParser.js";
import { NbtListContext } from "./JustMCFParser.js";
import { NbtValueContext } from "./JustMCFParser.js";
import { NbtByteArrContext } from "./JustMCFParser.js";
import { NbtIntArrContext } from "./JustMCFParser.js";
import { NbtLongArrContext } from "./JustMCFParser.js";
import { NbtStringContext } from "./JustMCFParser.js";
import { JsonTextValueContext } from "./JustMCFParser.js";
import { JsonTextContext } from "./JustMCFParser.js";
import { JsonObjContext } from "./JustMCFParser.js";
import { JsonPairContext } from "./JustMCFParser.js";
import { JsonArrContext } from "./JustMCFParser.js";
import { JsonValueContext } from "./JustMCFParser.js";
import { BoolValueContext } from "./JustMCFParser.js";
import { NumberContext } from "./JustMCFParser.js";
import { EndContext } from "./JustMCFParser.js";
import { EndsContext } from "./JustMCFParser.js";
import { P_Context } from "./JustMCFParser.js";
import { Pn_Context } from "./JustMCFParser.js";
import { S_Context } from "./JustMCFParser.js";
import { KeyContext } from "./JustMCFParser.js";
import { Pos3IdentifierContext } from "./JustMCFParser.js";
import { Pos2IdentifierContext } from "./JustMCFParser.js";
import { Pos5IdentifierContext } from "./JustMCFParser.js";
import { Pos1Context } from "./JustMCFParser.js";
import { BlockIdentifierContext } from "./JustMCFParser.js";
import { BlockstateContext } from "./JustMCFParser.js";
import { NameSpaceContext } from "./JustMCFParser.js";
import { NameSpaceBlockContext } from "./JustMCFParser.js";
import { NameSpaceFuncContext } from "./JustMCFParser.js";
import { NameSpaceStorageContext } from "./JustMCFParser.js";
import { NameSpaceBossbarContext } from "./JustMCFParser.js";
import { NameSpaceBiomeContext } from "./JustMCFParser.js";
import { NameSpaceDimContext } from "./JustMCFParser.js";
import { NameSpacePredicateContext } from "./JustMCFParser.js";
import { NameSpaceItemContext } from "./JustMCFParser.js";
import { NameSpaceEntityContext } from "./JustMCFParser.js";
import { NameSpaceLootContext } from "./JustMCFParser.js";
import { NameSpaceItemModifierContext } from "./JustMCFParser.js";
import { TagNameSpaceContext } from "./JustMCFParser.js";
import { TagNameSpaceItemContext } from "./JustMCFParser.js";
import { TagNameSpaceBlockContext } from "./JustMCFParser.js";
import { TagNameSpaceFuncContext } from "./JustMCFParser.js";
import { TagNameSpaceEntityContext } from "./JustMCFParser.js";
import { RegisterNameContext } from "./JustMCFParser.js";
import { NumberTypeContext } from "./JustMCFParser.js";
import { AcceptableNameWithoutPointWithKeyContext } from "./JustMCFParser.js";
import { CriterionContext } from "./JustMCFParser.js";
import { NbtNameContext } from "./JustMCFParser.js";
import { AcceptableNameContext } from "./JustMCFParser.js";
import { AcceptableNameWithNumberContext } from "./JustMCFParser.js";
import { ResourceLocationContext } from "./JustMCFParser.js";
import { TypeNameContext } from "./JustMCFParser.js";
import { Item_slotContext } from "./JustMCFParser.js";
import { StringContext } from "./JustMCFParser.js";
import { Item_predicateContext } from "./JustMCFParser.js";
import { Block_predicateContext } from "./JustMCFParser.js";
import { SelectorContext } from "./JustMCFParser.js";


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
	 * Visit a parse tree produced by `JustMCFParser.yieldStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldStatement?: (ctx: YieldStatementContext) => Result;

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

