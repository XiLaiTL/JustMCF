// Generated from ./antlr/JustMCF.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener.js";

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
 * This interface defines a complete listener for a parse tree produced by
 * `JustMCFParser`.
 */
export interface JustMCFListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `effectISIClear`
	 * labeled alternative in `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEffectISIClear?: (ctx: EffectISIClearContext) => void;
	/**
	 * Exit a parse tree produced by the `effectISIClear`
	 * labeled alternative in `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEffectISIClear?: (ctx: EffectISIClearContext) => void;

	/**
	 * Enter a parse tree produced by the `effectISIGive`
	 * labeled alternative in `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEffectISIGive?: (ctx: EffectISIGiveContext) => void;
	/**
	 * Exit a parse tree produced by the `effectISIGive`
	 * labeled alternative in `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEffectISIGive?: (ctx: EffectISIGiveContext) => void;

	/**
	 * Enter a parse tree produced by the `effectISIGiveSp`
	 * labeled alternative in `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEffectISIGiveSp?: (ctx: EffectISIGiveSpContext) => void;
	/**
	 * Exit a parse tree produced by the `effectISIGiveSp`
	 * labeled alternative in `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEffectISIGiveSp?: (ctx: EffectISIGiveSpContext) => void;

	/**
	 * Enter a parse tree produced by the `effectISIClearAll`
	 * labeled alternative in `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEffectISIClearAll?: (ctx: EffectISIClearAllContext) => void;
	/**
	 * Exit a parse tree produced by the `effectISIClearAll`
	 * labeled alternative in `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEffectISIClearAll?: (ctx: EffectISIClearAllContext) => void;

	/**
	 * Enter a parse tree produced by the `giveISI`
	 * labeled alternative in `JustMCFParser.giveAndClearIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterGiveISI?: (ctx: GiveISIContext) => void;
	/**
	 * Exit a parse tree produced by the `giveISI`
	 * labeled alternative in `JustMCFParser.giveAndClearIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitGiveISI?: (ctx: GiveISIContext) => void;

	/**
	 * Enter a parse tree produced by the `clearISI`
	 * labeled alternative in `JustMCFParser.giveAndClearIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterClearISI?: (ctx: ClearISIContext) => void;
	/**
	 * Exit a parse tree produced by the `clearISI`
	 * labeled alternative in `JustMCFParser.giveAndClearIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitClearISI?: (ctx: ClearISIContext) => void;

	/**
	 * Enter a parse tree produced by the `tagISIAdd`
	 * labeled alternative in `JustMCFParser.tagIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTagISIAdd?: (ctx: TagISIAddContext) => void;
	/**
	 * Exit a parse tree produced by the `tagISIAdd`
	 * labeled alternative in `JustMCFParser.tagIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTagISIAdd?: (ctx: TagISIAddContext) => void;

	/**
	 * Enter a parse tree produced by the `tagISIRemove`
	 * labeled alternative in `JustMCFParser.tagIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTagISIRemove?: (ctx: TagISIRemoveContext) => void;
	/**
	 * Exit a parse tree produced by the `tagISIRemove`
	 * labeled alternative in `JustMCFParser.tagIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTagISIRemove?: (ctx: TagISIRemoveContext) => void;

	/**
	 * Enter a parse tree produced by the `tagISIList`
	 * labeled alternative in `JustMCFParser.tagIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTagISIList?: (ctx: TagISIListContext) => void;
	/**
	 * Exit a parse tree produced by the `tagISIList`
	 * labeled alternative in `JustMCFParser.tagIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTagISIList?: (ctx: TagISIListContext) => void;

	/**
	 * Enter a parse tree produced by the `entitySIEntityExpression`
	 * labeled alternative in `JustMCFParser.entityStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntitySIEntityExpression?: (ctx: EntitySIEntityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `entitySIEntityExpression`
	 * labeled alternative in `JustMCFParser.entityStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntitySIEntityExpression?: (ctx: EntitySIEntityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `entitySISelectorCompound`
	 * labeled alternative in `JustMCFParser.entityStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntitySISelectorCompound?: (ctx: EntitySISelectorCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `entitySISelectorCompound`
	 * labeled alternative in `JustMCFParser.entityStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntitySISelectorCompound?: (ctx: EntitySISelectorCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `itemSIGiveAndClear`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemSIGiveAndClear?: (ctx: ItemSIGiveAndClearContext) => void;
	/**
	 * Exit a parse tree produced by the `itemSIGiveAndClear`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemSIGiveAndClear?: (ctx: ItemSIGiveAndClearContext) => void;

	/**
	 * Enter a parse tree produced by the `itemSIEntity`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemSIEntity?: (ctx: ItemSIEntityContext) => void;
	/**
	 * Exit a parse tree produced by the `itemSIEntity`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemSIEntity?: (ctx: ItemSIEntityContext) => void;

	/**
	 * Enter a parse tree produced by the `itemSIBlock`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemSIBlock?: (ctx: ItemSIBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `itemSIBlock`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemSIBlock?: (ctx: ItemSIBlockContext) => void;

	/**
	 * Enter a parse tree produced by the `itemSILootInner`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemSILootInner?: (ctx: ItemSILootInnerContext) => void;
	/**
	 * Exit a parse tree produced by the `itemSILootInner`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemSILootInner?: (ctx: ItemSILootInnerContext) => void;

	/**
	 * Enter a parse tree produced by the `itemSISelectorNest`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemSISelectorNest?: (ctx: ItemSISelectorNestContext) => void;
	/**
	 * Exit a parse tree produced by the `itemSISelectorNest`
	 * labeled alternative in `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemSISelectorNest?: (ctx: ItemSISelectorNestContext) => void;

	/**
	 * Enter a parse tree produced by the `scbFuncExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbFuncExpression?: (ctx: ScbFuncExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `scbFuncExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbFuncExpression?: (ctx: ScbFuncExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptMulDivModExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptMulDivModExpression?: (ctx: ScbOptMulDivModExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptMulDivModExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptMulDivModExpression?: (ctx: ScbOptMulDivModExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptAddSubExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptAddSubExpression?: (ctx: ScbOptAddSubExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptAddSubExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptAddSubExpression?: (ctx: ScbOptAddSubExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `scbTempNumberExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbTempNumberExpression?: (ctx: ScbTempNumberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `scbTempNumberExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbTempNumberExpression?: (ctx: ScbTempNumberExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `scbIdExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbIdExpression?: (ctx: ScbIdExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `scbIdExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbIdExpression?: (ctx: ScbIdExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `scbParenExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbParenExpression?: (ctx: ScbParenExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `scbParenExpression`
	 * labeled alternative in `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbParenExpression?: (ctx: ScbParenExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `execWithRunOrChild`
	 * labeled alternative in `JustMCFParser.execStatement`.
	 * @param ctx the parse tree
	 */
	enterExecWithRunOrChild?: (ctx: ExecWithRunOrChildContext) => void;
	/**
	 * Exit a parse tree produced by the `execWithRunOrChild`
	 * labeled alternative in `JustMCFParser.execStatement`.
	 * @param ctx the parse tree
	 */
	exitExecWithRunOrChild?: (ctx: ExecWithRunOrChildContext) => void;

	/**
	 * Enter a parse tree produced by the `execWithoutRunOrChild`
	 * labeled alternative in `JustMCFParser.execStatement`.
	 * @param ctx the parse tree
	 */
	enterExecWithoutRunOrChild?: (ctx: ExecWithoutRunOrChildContext) => void;
	/**
	 * Exit a parse tree produced by the `execWithoutRunOrChild`
	 * labeled alternative in `JustMCFParser.execStatement`.
	 * @param ctx the parse tree
	 */
	exitExecWithoutRunOrChild?: (ctx: ExecWithoutRunOrChildContext) => void;

	/**
	 * Enter a parse tree produced by the `scbSIRemove`
	 * labeled alternative in `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 */
	enterScbSIRemove?: (ctx: ScbSIRemoveContext) => void;
	/**
	 * Exit a parse tree produced by the `scbSIRemove`
	 * labeled alternative in `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 */
	exitScbSIRemove?: (ctx: ScbSIRemoveContext) => void;

	/**
	 * Enter a parse tree produced by the `scbSIDisplayname`
	 * labeled alternative in `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 */
	enterScbSIDisplayname?: (ctx: ScbSIDisplaynameContext) => void;
	/**
	 * Exit a parse tree produced by the `scbSIDisplayname`
	 * labeled alternative in `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 */
	exitScbSIDisplayname?: (ctx: ScbSIDisplaynameContext) => void;

	/**
	 * Enter a parse tree produced by the `scbSIRendertype`
	 * labeled alternative in `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 */
	enterScbSIRendertype?: (ctx: ScbSIRendertypeContext) => void;
	/**
	 * Exit a parse tree produced by the `scbSIRendertype`
	 * labeled alternative in `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 */
	exitScbSIRendertype?: (ctx: ScbSIRendertypeContext) => void;

	/**
	 * Enter a parse tree produced by the `scbSIDisplay`
	 * labeled alternative in `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 */
	enterScbSIDisplay?: (ctx: ScbSIDisplayContext) => void;
	/**
	 * Exit a parse tree produced by the `scbSIDisplay`
	 * labeled alternative in `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 */
	exitScbSIDisplay?: (ctx: ScbSIDisplayContext) => void;

	/**
	 * Enter a parse tree produced by the `attrSISingle`
	 * labeled alternative in `JustMCFParser.attrStatementInner`.
	 * @param ctx the parse tree
	 */
	enterAttrSISingle?: (ctx: AttrSISingleContext) => void;
	/**
	 * Exit a parse tree produced by the `attrSISingle`
	 * labeled alternative in `JustMCFParser.attrStatementInner`.
	 * @param ctx the parse tree
	 */
	exitAttrSISingle?: (ctx: AttrSISingleContext) => void;

	/**
	 * Enter a parse tree produced by the `attrSISelectorCompound`
	 * labeled alternative in `JustMCFParser.attrStatementInner`.
	 * @param ctx the parse tree
	 */
	enterAttrSISelectorCompound?: (ctx: AttrSISelectorCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `attrSISelectorCompound`
	 * labeled alternative in `JustMCFParser.attrStatementInner`.
	 * @param ctx the parse tree
	 */
	exitAttrSISelectorCompound?: (ctx: AttrSISelectorCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `execAlign`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecAlign?: (ctx: ExecAlignContext) => void;
	/**
	 * Exit a parse tree produced by the `execAlign`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecAlign?: (ctx: ExecAlignContext) => void;

	/**
	 * Enter a parse tree produced by the `execAnchored`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecAnchored?: (ctx: ExecAnchoredContext) => void;
	/**
	 * Exit a parse tree produced by the `execAnchored`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecAnchored?: (ctx: ExecAnchoredContext) => void;

	/**
	 * Enter a parse tree produced by the `execIn`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecIn?: (ctx: ExecInContext) => void;
	/**
	 * Exit a parse tree produced by the `execIn`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecIn?: (ctx: ExecInContext) => void;

	/**
	 * Enter a parse tree produced by the `execAs`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecAs?: (ctx: ExecAsContext) => void;
	/**
	 * Exit a parse tree produced by the `execAs`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecAs?: (ctx: ExecAsContext) => void;

	/**
	 * Enter a parse tree produced by the `execAt`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecAt?: (ctx: ExecAtContext) => void;
	/**
	 * Exit a parse tree produced by the `execAt`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecAt?: (ctx: ExecAtContext) => void;

	/**
	 * Enter a parse tree produced by the `execFacingPos`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecFacingPos?: (ctx: ExecFacingPosContext) => void;
	/**
	 * Exit a parse tree produced by the `execFacingPos`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecFacingPos?: (ctx: ExecFacingPosContext) => void;

	/**
	 * Enter a parse tree produced by the `execFacingEntity`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecFacingEntity?: (ctx: ExecFacingEntityContext) => void;
	/**
	 * Exit a parse tree produced by the `execFacingEntity`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecFacingEntity?: (ctx: ExecFacingEntityContext) => void;

	/**
	 * Enter a parse tree produced by the `execPositionedPos`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecPositionedPos?: (ctx: ExecPositionedPosContext) => void;
	/**
	 * Exit a parse tree produced by the `execPositionedPos`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecPositionedPos?: (ctx: ExecPositionedPosContext) => void;

	/**
	 * Enter a parse tree produced by the `execPostionedAs`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecPostionedAs?: (ctx: ExecPostionedAsContext) => void;
	/**
	 * Exit a parse tree produced by the `execPostionedAs`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecPostionedAs?: (ctx: ExecPostionedAsContext) => void;

	/**
	 * Enter a parse tree produced by the `execRotatedPos`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecRotatedPos?: (ctx: ExecRotatedPosContext) => void;
	/**
	 * Exit a parse tree produced by the `execRotatedPos`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecRotatedPos?: (ctx: ExecRotatedPosContext) => void;

	/**
	 * Enter a parse tree produced by the `execRotatedAs`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecRotatedAs?: (ctx: ExecRotatedAsContext) => void;
	/**
	 * Exit a parse tree produced by the `execRotatedAs`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecRotatedAs?: (ctx: ExecRotatedAsContext) => void;

	/**
	 * Enter a parse tree produced by the `execIfEntity`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecIfEntity?: (ctx: ExecIfEntityContext) => void;
	/**
	 * Exit a parse tree produced by the `execIfEntity`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecIfEntity?: (ctx: ExecIfEntityContext) => void;

	/**
	 * Enter a parse tree produced by the `execIfScore`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecIfScore?: (ctx: ExecIfScoreContext) => void;
	/**
	 * Exit a parse tree produced by the `execIfScore`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecIfScore?: (ctx: ExecIfScoreContext) => void;

	/**
	 * Enter a parse tree produced by the `execIfScoreMatches`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecIfScoreMatches?: (ctx: ExecIfScoreMatchesContext) => void;
	/**
	 * Exit a parse tree produced by the `execIfScoreMatches`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecIfScoreMatches?: (ctx: ExecIfScoreMatchesContext) => void;

	/**
	 * Enter a parse tree produced by the `execIfBlock`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecIfBlock?: (ctx: ExecIfBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `execIfBlock`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecIfBlock?: (ctx: ExecIfBlockContext) => void;

	/**
	 * Enter a parse tree produced by the `execIfBlocks`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecIfBlocks?: (ctx: ExecIfBlocksContext) => void;
	/**
	 * Exit a parse tree produced by the `execIfBlocks`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecIfBlocks?: (ctx: ExecIfBlocksContext) => void;

	/**
	 * Enter a parse tree produced by the `execIfData`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecIfData?: (ctx: ExecIfDataContext) => void;
	/**
	 * Exit a parse tree produced by the `execIfData`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecIfData?: (ctx: ExecIfDataContext) => void;

	/**
	 * Enter a parse tree produced by the `execIfBiome`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecIfBiome?: (ctx: ExecIfBiomeContext) => void;
	/**
	 * Exit a parse tree produced by the `execIfBiome`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecIfBiome?: (ctx: ExecIfBiomeContext) => void;

	/**
	 * Enter a parse tree produced by the `execPredicate`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecPredicate?: (ctx: ExecPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `execPredicate`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecPredicate?: (ctx: ExecPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `execStore`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecStore?: (ctx: ExecStoreContext) => void;
	/**
	 * Exit a parse tree produced by the `execStore`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecStore?: (ctx: ExecStoreContext) => void;

	/**
	 * Enter a parse tree produced by the `dataStorageLocal`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 */
	enterDataStorageLocal?: (ctx: DataStorageLocalContext) => void;
	/**
	 * Exit a parse tree produced by the `dataStorageLocal`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 */
	exitDataStorageLocal?: (ctx: DataStorageLocalContext) => void;

	/**
	 * Enter a parse tree produced by the `dataStorage`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 */
	enterDataStorage?: (ctx: DataStorageContext) => void;
	/**
	 * Exit a parse tree produced by the `dataStorage`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 */
	exitDataStorage?: (ctx: DataStorageContext) => void;

	/**
	 * Enter a parse tree produced by the `dataStorageWithEnv`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 */
	enterDataStorageWithEnv?: (ctx: DataStorageWithEnvContext) => void;
	/**
	 * Exit a parse tree produced by the `dataStorageWithEnv`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 */
	exitDataStorageWithEnv?: (ctx: DataStorageWithEnvContext) => void;

	/**
	 * Enter a parse tree produced by the `dataEntity`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 */
	enterDataEntity?: (ctx: DataEntityContext) => void;
	/**
	 * Exit a parse tree produced by the `dataEntity`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 */
	exitDataEntity?: (ctx: DataEntityContext) => void;

	/**
	 * Enter a parse tree produced by the `dataBlock`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 */
	enterDataBlock?: (ctx: DataBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `dataBlock`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 */
	exitDataBlock?: (ctx: DataBlockContext) => void;

	/**
	 * Enter a parse tree produced by the `attrISIGet`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterAttrISIGet?: (ctx: AttrISIGetContext) => void;
	/**
	 * Exit a parse tree produced by the `attrISIGet`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitAttrISIGet?: (ctx: AttrISIGetContext) => void;

	/**
	 * Enter a parse tree produced by the `attrISIGetBase`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterAttrISIGetBase?: (ctx: AttrISIGetBaseContext) => void;
	/**
	 * Exit a parse tree produced by the `attrISIGetBase`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitAttrISIGetBase?: (ctx: AttrISIGetBaseContext) => void;

	/**
	 * Enter a parse tree produced by the `attrISISetBase`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterAttrISISetBase?: (ctx: AttrISISetBaseContext) => void;
	/**
	 * Exit a parse tree produced by the `attrISISetBase`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitAttrISISetBase?: (ctx: AttrISISetBaseContext) => void;

	/**
	 * Enter a parse tree produced by the `attrISIModifierAdd`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterAttrISIModifierAdd?: (ctx: AttrISIModifierAddContext) => void;
	/**
	 * Exit a parse tree produced by the `attrISIModifierAdd`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitAttrISIModifierAdd?: (ctx: AttrISIModifierAddContext) => void;

	/**
	 * Enter a parse tree produced by the `attrISIModifierRemove`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterAttrISIModifierRemove?: (ctx: AttrISIModifierRemoveContext) => void;
	/**
	 * Exit a parse tree produced by the `attrISIModifierRemove`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitAttrISIModifierRemove?: (ctx: AttrISIModifierRemoveContext) => void;

	/**
	 * Enter a parse tree produced by the `attrISIModifierGet`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterAttrISIModifierGet?: (ctx: AttrISIModifierGetContext) => void;
	/**
	 * Exit a parse tree produced by the `attrISIModifierGet`
	 * labeled alternative in `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitAttrISIModifierGet?: (ctx: AttrISIModifierGetContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSCompound`
	 * labeled alternative in `JustMCFParser.lootStatement`.
	 * @param ctx the parse tree
	 */
	enterLootSCompound?: (ctx: LootSCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSCompound`
	 * labeled alternative in `JustMCFParser.lootStatement`.
	 * @param ctx the parse tree
	 */
	exitLootSCompound?: (ctx: LootSCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSSelectorCompound`
	 * labeled alternative in `JustMCFParser.lootStatement`.
	 * @param ctx the parse tree
	 */
	enterLootSSelectorCompound?: (ctx: LootSSelectorCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSSelectorCompound`
	 * labeled alternative in `JustMCFParser.lootStatement`.
	 * @param ctx the parse tree
	 */
	exitLootSSelectorCompound?: (ctx: LootSSelectorCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `itemSSIGiveAndClear`
	 * labeled alternative in `JustMCFParser.itemSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemSSIGiveAndClear?: (ctx: ItemSSIGiveAndClearContext) => void;
	/**
	 * Exit a parse tree produced by the `itemSSIGiveAndClear`
	 * labeled alternative in `JustMCFParser.itemSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemSSIGiveAndClear?: (ctx: ItemSSIGiveAndClearContext) => void;

	/**
	 * Enter a parse tree produced by the `itemSSIItem`
	 * labeled alternative in `JustMCFParser.itemSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemSSIItem?: (ctx: ItemSSIItemContext) => void;
	/**
	 * Exit a parse tree produced by the `itemSSIItem`
	 * labeled alternative in `JustMCFParser.itemSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemSSIItem?: (ctx: ItemSSIItemContext) => void;

	/**
	 * Enter a parse tree produced by the `itemSSILootInner`
	 * labeled alternative in `JustMCFParser.itemSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemSSILootInner?: (ctx: ItemSSILootInnerContext) => void;
	/**
	 * Exit a parse tree produced by the `itemSSILootInner`
	 * labeled alternative in `JustMCFParser.itemSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemSSILootInner?: (ctx: ItemSSILootInnerContext) => void;

	/**
	 * Enter a parse tree produced by the `entitySDeclarePlayer`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 */
	enterEntitySDeclarePlayer?: (ctx: EntitySDeclarePlayerContext) => void;
	/**
	 * Exit a parse tree produced by the `entitySDeclarePlayer`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 */
	exitEntitySDeclarePlayer?: (ctx: EntitySDeclarePlayerContext) => void;

	/**
	 * Enter a parse tree produced by the `entitySDeclare`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 */
	enterEntitySDeclare?: (ctx: EntitySDeclareContext) => void;
	/**
	 * Exit a parse tree produced by the `entitySDeclare`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 */
	exitEntitySDeclare?: (ctx: EntitySDeclareContext) => void;

	/**
	 * Enter a parse tree produced by the `entitySDeclareWithName`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 */
	enterEntitySDeclareWithName?: (ctx: EntitySDeclareWithNameContext) => void;
	/**
	 * Exit a parse tree produced by the `entitySDeclareWithName`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 */
	exitEntitySDeclareWithName?: (ctx: EntitySDeclareWithNameContext) => void;

	/**
	 * Enter a parse tree produced by the `entitySCompound`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 */
	enterEntitySCompound?: (ctx: EntitySCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `entitySCompound`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 */
	exitEntitySCompound?: (ctx: EntitySCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `entitySSelectorCompound`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 */
	enterEntitySSelectorCompound?: (ctx: EntitySSelectorCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `entitySSelectorCompound`
	 * labeled alternative in `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 */
	exitEntitySSelectorCompound?: (ctx: EntitySSelectorCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarSIGet`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBossbarSIGet?: (ctx: BossbarSIGetContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarSIGet`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBossbarSIGet?: (ctx: BossbarSIGetContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarSIRemove`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBossbarSIRemove?: (ctx: BossbarSIRemoveContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarSIRemove`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBossbarSIRemove?: (ctx: BossbarSIRemoveContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarSISetColor`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBossbarSISetColor?: (ctx: BossbarSISetColorContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarSISetColor`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBossbarSISetColor?: (ctx: BossbarSISetColorContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarSISetMax`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBossbarSISetMax?: (ctx: BossbarSISetMaxContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarSISetMax`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBossbarSISetMax?: (ctx: BossbarSISetMaxContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarSISetName`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBossbarSISetName?: (ctx: BossbarSISetNameContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarSISetName`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBossbarSISetName?: (ctx: BossbarSISetNameContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarSISetPlayer`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBossbarSISetPlayer?: (ctx: BossbarSISetPlayerContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarSISetPlayer`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBossbarSISetPlayer?: (ctx: BossbarSISetPlayerContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarSISetPlayerNull`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBossbarSISetPlayerNull?: (ctx: BossbarSISetPlayerNullContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarSISetPlayerNull`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBossbarSISetPlayerNull?: (ctx: BossbarSISetPlayerNullContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarSISetStyle`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBossbarSISetStyle?: (ctx: BossbarSISetStyleContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarSISetStyle`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBossbarSISetStyle?: (ctx: BossbarSISetStyleContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarSISetValue`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBossbarSISetValue?: (ctx: BossbarSISetValueContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarSISetValue`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBossbarSISetValue?: (ctx: BossbarSISetValueContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarSISetVisible`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBossbarSISetVisible?: (ctx: BossbarSISetVisibleContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarSISetVisible`
	 * labeled alternative in `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBossbarSISetVisible?: (ctx: BossbarSISetVisibleContext) => void;

	/**
	 * Enter a parse tree produced by the `titleISIJson`
	 * labeled alternative in `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTitleISIJson?: (ctx: TitleISIJsonContext) => void;
	/**
	 * Exit a parse tree produced by the `titleISIJson`
	 * labeled alternative in `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTitleISIJson?: (ctx: TitleISIJsonContext) => void;

	/**
	 * Enter a parse tree produced by the `titleISIClear`
	 * labeled alternative in `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTitleISIClear?: (ctx: TitleISIClearContext) => void;
	/**
	 * Exit a parse tree produced by the `titleISIClear`
	 * labeled alternative in `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTitleISIClear?: (ctx: TitleISIClearContext) => void;

	/**
	 * Enter a parse tree produced by the `titleISIReset`
	 * labeled alternative in `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTitleISIReset?: (ctx: TitleISIResetContext) => void;
	/**
	 * Exit a parse tree produced by the `titleISIReset`
	 * labeled alternative in `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTitleISIReset?: (ctx: TitleISIResetContext) => void;

	/**
	 * Enter a parse tree produced by the `titleISITimes`
	 * labeled alternative in `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTitleISITimes?: (ctx: TitleISITimesContext) => void;
	/**
	 * Exit a parse tree produced by the `titleISITimes`
	 * labeled alternative in `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTitleISITimes?: (ctx: TitleISITimesContext) => void;

	/**
	 * Enter a parse tree produced by the `ifElseExec`
	 * labeled alternative in `JustMCFParser.ifElseStatement`.
	 * @param ctx the parse tree
	 */
	enterIfElseExec?: (ctx: IfElseExecContext) => void;
	/**
	 * Exit a parse tree produced by the `ifElseExec`
	 * labeled alternative in `JustMCFParser.ifElseStatement`.
	 * @param ctx the parse tree
	 */
	exitIfElseExec?: (ctx: IfElseExecContext) => void;

	/**
	 * Enter a parse tree produced by the `ifElseSIfS`
	 * labeled alternative in `JustMCFParser.ifElseStatement`.
	 * @param ctx the parse tree
	 */
	enterIfElseSIfS?: (ctx: IfElseSIfSContext) => void;
	/**
	 * Exit a parse tree produced by the `ifElseSIfS`
	 * labeled alternative in `JustMCFParser.ifElseStatement`.
	 * @param ctx the parse tree
	 */
	exitIfElseSIfS?: (ctx: IfElseSIfSContext) => void;

	/**
	 * Enter a parse tree produced by the `interfaceSNamespace`
	 * labeled alternative in `JustMCFParser.interfaceStatement`.
	 * @param ctx the parse tree
	 */
	enterInterfaceSNamespace?: (ctx: InterfaceSNamespaceContext) => void;
	/**
	 * Exit a parse tree produced by the `interfaceSNamespace`
	 * labeled alternative in `JustMCFParser.interfaceStatement`.
	 * @param ctx the parse tree
	 */
	exitInterfaceSNamespace?: (ctx: InterfaceSNamespaceContext) => void;

	/**
	 * Enter a parse tree produced by the `interfaceSIdentifier`
	 * labeled alternative in `JustMCFParser.interfaceStatement`.
	 * @param ctx the parse tree
	 */
	enterInterfaceSIdentifier?: (ctx: InterfaceSIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `interfaceSIdentifier`
	 * labeled alternative in `JustMCFParser.interfaceStatement`.
	 * @param ctx the parse tree
	 */
	exitInterfaceSIdentifier?: (ctx: InterfaceSIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `existExpressionExec`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	enterExistExpressionExec?: (ctx: ExistExpressionExecContext) => void;
	/**
	 * Exit a parse tree produced by the `existExpressionExec`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	exitExistExpressionExec?: (ctx: ExistExpressionExecContext) => void;

	/**
	 * Enter a parse tree produced by the `existExpressionId`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	enterExistExpressionId?: (ctx: ExistExpressionIdContext) => void;
	/**
	 * Exit a parse tree produced by the `existExpressionId`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	exitExistExpressionId?: (ctx: ExistExpressionIdContext) => void;

	/**
	 * Enter a parse tree produced by the `exisitExpressionFuncRun`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	enterExisitExpressionFuncRun?: (ctx: ExisitExpressionFuncRunContext) => void;
	/**
	 * Exit a parse tree produced by the `exisitExpressionFuncRun`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	exitExisitExpressionFuncRun?: (ctx: ExisitExpressionFuncRunContext) => void;

	/**
	 * Enter a parse tree produced by the `existExpressionTrue`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	enterExistExpressionTrue?: (ctx: ExistExpressionTrueContext) => void;
	/**
	 * Exit a parse tree produced by the `existExpressionTrue`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	exitExistExpressionTrue?: (ctx: ExistExpressionTrueContext) => void;

	/**
	 * Enter a parse tree produced by the `existExpressionFalse`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	enterExistExpressionFalse?: (ctx: ExistExpressionFalseContext) => void;
	/**
	 * Exit a parse tree produced by the `existExpressionFalse`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	exitExistExpressionFalse?: (ctx: ExistExpressionFalseContext) => void;

	/**
	 * Enter a parse tree produced by the `existExpressionNot`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	enterExistExpressionNot?: (ctx: ExistExpressionNotContext) => void;
	/**
	 * Exit a parse tree produced by the `existExpressionNot`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	exitExistExpressionNot?: (ctx: ExistExpressionNotContext) => void;

	/**
	 * Enter a parse tree produced by the `existExpressionBitAnd`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	enterExistExpressionBitAnd?: (ctx: ExistExpressionBitAndContext) => void;
	/**
	 * Exit a parse tree produced by the `existExpressionBitAnd`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	exitExistExpressionBitAnd?: (ctx: ExistExpressionBitAndContext) => void;

	/**
	 * Enter a parse tree produced by the `existExpressionBitOr`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	enterExistExpressionBitOr?: (ctx: ExistExpressionBitOrContext) => void;
	/**
	 * Exit a parse tree produced by the `existExpressionBitOr`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	exitExistExpressionBitOr?: (ctx: ExistExpressionBitOrContext) => void;

	/**
	 * Enter a parse tree produced by the `existExpressionAnd`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	enterExistExpressionAnd?: (ctx: ExistExpressionAndContext) => void;
	/**
	 * Exit a parse tree produced by the `existExpressionAnd`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	exitExistExpressionAnd?: (ctx: ExistExpressionAndContext) => void;

	/**
	 * Enter a parse tree produced by the `existExpressionOr`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	enterExistExpressionOr?: (ctx: ExistExpressionOrContext) => void;
	/**
	 * Exit a parse tree produced by the `existExpressionOr`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	exitExistExpressionOr?: (ctx: ExistExpressionOrContext) => void;

	/**
	 * Enter a parse tree produced by the `existExpressionParen`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	enterExistExpressionParen?: (ctx: ExistExpressionParenContext) => void;
	/**
	 * Exit a parse tree produced by the `existExpressionParen`
	 * labeled alternative in `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	exitExistExpressionParen?: (ctx: ExistExpressionParenContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSourceLoot`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	enterLootSourceLoot?: (ctx: LootSourceLootContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSourceLoot`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	exitLootSourceLoot?: (ctx: LootSourceLootContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSourceFishHand`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	enterLootSourceFishHand?: (ctx: LootSourceFishHandContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSourceFishHand`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	exitLootSourceFishHand?: (ctx: LootSourceFishHandContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSourceFishTool`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	enterLootSourceFishTool?: (ctx: LootSourceFishToolContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSourceFishTool`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	exitLootSourceFishTool?: (ctx: LootSourceFishToolContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSourceKill`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	enterLootSourceKill?: (ctx: LootSourceKillContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSourceKill`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	exitLootSourceKill?: (ctx: LootSourceKillContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSourceMineHand`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	enterLootSourceMineHand?: (ctx: LootSourceMineHandContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSourceMineHand`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	exitLootSourceMineHand?: (ctx: LootSourceMineHandContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSourceMineTool`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	enterLootSourceMineTool?: (ctx: LootSourceMineToolContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSourceMineTool`
	 * labeled alternative in `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	exitLootSourceMineTool?: (ctx: LootSourceMineToolContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarSDeclare`
	 * labeled alternative in `JustMCFParser.bossbarStatement`.
	 * @param ctx the parse tree
	 */
	enterBossbarSDeclare?: (ctx: BossbarSDeclareContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarSDeclare`
	 * labeled alternative in `JustMCFParser.bossbarStatement`.
	 * @param ctx the parse tree
	 */
	exitBossbarSDeclare?: (ctx: BossbarSDeclareContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarSOperation`
	 * labeled alternative in `JustMCFParser.bossbarStatement`.
	 * @param ctx the parse tree
	 */
	enterBossbarSOperation?: (ctx: BossbarSOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarSOperation`
	 * labeled alternative in `JustMCFParser.bossbarStatement`.
	 * @param ctx the parse tree
	 */
	exitBossbarSOperation?: (ctx: BossbarSOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `itemSCompound`
	 * labeled alternative in `JustMCFParser.itemStatement`.
	 * @param ctx the parse tree
	 */
	enterItemSCompound?: (ctx: ItemSCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `itemSCompound`
	 * labeled alternative in `JustMCFParser.itemStatement`.
	 * @param ctx the parse tree
	 */
	exitItemSCompound?: (ctx: ItemSCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `itemSSelectorCompound`
	 * labeled alternative in `JustMCFParser.itemStatement`.
	 * @param ctx the parse tree
	 */
	enterItemSSelectorCompound?: (ctx: ItemSSelectorCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `itemSSelectorCompound`
	 * labeled alternative in `JustMCFParser.itemStatement`.
	 * @param ctx the parse tree
	 */
	exitItemSSelectorCompound?: (ctx: ItemSSelectorCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `itemISIReplaceWith`
	 * labeled alternative in `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemISIReplaceWith?: (ctx: ItemISIReplaceWithContext) => void;
	/**
	 * Exit a parse tree produced by the `itemISIReplaceWith`
	 * labeled alternative in `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemISIReplaceWith?: (ctx: ItemISIReplaceWithContext) => void;

	/**
	 * Enter a parse tree produced by the `itemISIReplaceFromEntity`
	 * labeled alternative in `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemISIReplaceFromEntity?: (ctx: ItemISIReplaceFromEntityContext) => void;
	/**
	 * Exit a parse tree produced by the `itemISIReplaceFromEntity`
	 * labeled alternative in `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemISIReplaceFromEntity?: (ctx: ItemISIReplaceFromEntityContext) => void;

	/**
	 * Enter a parse tree produced by the `itemISIReplaceFromBlock`
	 * labeled alternative in `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemISIReplaceFromBlock?: (ctx: ItemISIReplaceFromBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `itemISIReplaceFromBlock`
	 * labeled alternative in `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemISIReplaceFromBlock?: (ctx: ItemISIReplaceFromBlockContext) => void;

	/**
	 * Enter a parse tree produced by the `itemISIModify`
	 * labeled alternative in `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemISIModify?: (ctx: ItemISIModifyContext) => void;
	/**
	 * Exit a parse tree produced by the `itemISIModify`
	 * labeled alternative in `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemISIModify?: (ctx: ItemISIModifyContext) => void;

	/**
	 * Enter a parse tree produced by the `execStoreResultScore`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	enterExecStoreResultScore?: (ctx: ExecStoreResultScoreContext) => void;
	/**
	 * Exit a parse tree produced by the `execStoreResultScore`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	exitExecStoreResultScore?: (ctx: ExecStoreResultScoreContext) => void;

	/**
	 * Enter a parse tree produced by the `execStoreSuccessScore`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	enterExecStoreSuccessScore?: (ctx: ExecStoreSuccessScoreContext) => void;
	/**
	 * Exit a parse tree produced by the `execStoreSuccessScore`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	exitExecStoreSuccessScore?: (ctx: ExecStoreSuccessScoreContext) => void;

	/**
	 * Enter a parse tree produced by the `execStoreResultData`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	enterExecStoreResultData?: (ctx: ExecStoreResultDataContext) => void;
	/**
	 * Exit a parse tree produced by the `execStoreResultData`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	exitExecStoreResultData?: (ctx: ExecStoreResultDataContext) => void;

	/**
	 * Enter a parse tree produced by the `execStoreSuccessData`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	enterExecStoreSuccessData?: (ctx: ExecStoreSuccessDataContext) => void;
	/**
	 * Exit a parse tree produced by the `execStoreSuccessData`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	exitExecStoreSuccessData?: (ctx: ExecStoreSuccessDataContext) => void;

	/**
	 * Enter a parse tree produced by the `execStoreResultBossbar`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	enterExecStoreResultBossbar?: (ctx: ExecStoreResultBossbarContext) => void;
	/**
	 * Exit a parse tree produced by the `execStoreResultBossbar`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	exitExecStoreResultBossbar?: (ctx: ExecStoreResultBossbarContext) => void;

	/**
	 * Enter a parse tree produced by the `execStoreSuccessBossbar`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	enterExecStoreSuccessBossbar?: (ctx: ExecStoreSuccessBossbarContext) => void;
	/**
	 * Exit a parse tree produced by the `execStoreSuccessBossbar`
	 * labeled alternative in `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	exitExecStoreSuccessBossbar?: (ctx: ExecStoreSuccessBossbarContext) => void;

	/**
	 * Enter a parse tree produced by the `dataMergeStorage`
	 * labeled alternative in `JustMCFParser.dataMergeExpression`.
	 * @param ctx the parse tree
	 */
	enterDataMergeStorage?: (ctx: DataMergeStorageContext) => void;
	/**
	 * Exit a parse tree produced by the `dataMergeStorage`
	 * labeled alternative in `JustMCFParser.dataMergeExpression`.
	 * @param ctx the parse tree
	 */
	exitDataMergeStorage?: (ctx: DataMergeStorageContext) => void;

	/**
	 * Enter a parse tree produced by the `dataMergeEntity`
	 * labeled alternative in `JustMCFParser.dataMergeExpression`.
	 * @param ctx the parse tree
	 */
	enterDataMergeEntity?: (ctx: DataMergeEntityContext) => void;
	/**
	 * Exit a parse tree produced by the `dataMergeEntity`
	 * labeled alternative in `JustMCFParser.dataMergeExpression`.
	 * @param ctx the parse tree
	 */
	exitDataMergeEntity?: (ctx: DataMergeEntityContext) => void;

	/**
	 * Enter a parse tree produced by the `dataMergeBlock`
	 * labeled alternative in `JustMCFParser.dataMergeExpression`.
	 * @param ctx the parse tree
	 */
	enterDataMergeBlock?: (ctx: DataMergeBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `dataMergeBlock`
	 * labeled alternative in `JustMCFParser.dataMergeExpression`.
	 * @param ctx the parse tree
	 */
	exitDataMergeBlock?: (ctx: DataMergeBlockContext) => void;

	/**
	 * Enter a parse tree produced by the `scbPlayerSIScbOperationExpression`
	 * labeled alternative in `JustMCFParser.scbPlayerStatementInner`.
	 * @param ctx the parse tree
	 */
	enterScbPlayerSIScbOperationExpression?: (ctx: ScbPlayerSIScbOperationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `scbPlayerSIScbOperationExpression`
	 * labeled alternative in `JustMCFParser.scbPlayerStatementInner`.
	 * @param ctx the parse tree
	 */
	exitScbPlayerSIScbOperationExpression?: (ctx: ScbPlayerSIScbOperationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `scbPlayerSIScbList`
	 * labeled alternative in `JustMCFParser.scbPlayerStatementInner`.
	 * @param ctx the parse tree
	 */
	enterScbPlayerSIScbList?: (ctx: ScbPlayerSIScbListContext) => void;
	/**
	 * Exit a parse tree produced by the `scbPlayerSIScbList`
	 * labeled alternative in `JustMCFParser.scbPlayerStatementInner`.
	 * @param ctx the parse tree
	 */
	exitScbPlayerSIScbList?: (ctx: ScbPlayerSIScbListContext) => void;

	/**
	 * Enter a parse tree produced by the `titleSSIJson`
	 * labeled alternative in `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTitleSSIJson?: (ctx: TitleSSIJsonContext) => void;
	/**
	 * Exit a parse tree produced by the `titleSSIJson`
	 * labeled alternative in `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTitleSSIJson?: (ctx: TitleSSIJsonContext) => void;

	/**
	 * Enter a parse tree produced by the `titleSSIClear`
	 * labeled alternative in `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTitleSSIClear?: (ctx: TitleSSIClearContext) => void;
	/**
	 * Exit a parse tree produced by the `titleSSIClear`
	 * labeled alternative in `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTitleSSIClear?: (ctx: TitleSSIClearContext) => void;

	/**
	 * Enter a parse tree produced by the `titleSSIReset`
	 * labeled alternative in `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTitleSSIReset?: (ctx: TitleSSIResetContext) => void;
	/**
	 * Exit a parse tree produced by the `titleSSIReset`
	 * labeled alternative in `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTitleSSIReset?: (ctx: TitleSSIResetContext) => void;

	/**
	 * Enter a parse tree produced by the `titleSSITimes`
	 * labeled alternative in `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTitleSSITimes?: (ctx: TitleSSITimesContext) => void;
	/**
	 * Exit a parse tree produced by the `titleSSITimes`
	 * labeled alternative in `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTitleSSITimes?: (ctx: TitleSSITimesContext) => void;

	/**
	 * Enter a parse tree produced by the `TpISIDestination`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTpISIDestination?: (ctx: TpISIDestinationContext) => void;
	/**
	 * Exit a parse tree produced by the `TpISIDestination`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTpISIDestination?: (ctx: TpISIDestinationContext) => void;

	/**
	 * Enter a parse tree produced by the `TpISIPos`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTpISIPos?: (ctx: TpISIPosContext) => void;
	/**
	 * Exit a parse tree produced by the `TpISIPos`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTpISIPos?: (ctx: TpISIPosContext) => void;

	/**
	 * Enter a parse tree produced by the `TpISIRotated`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTpISIRotated?: (ctx: TpISIRotatedContext) => void;
	/**
	 * Exit a parse tree produced by the `TpISIRotated`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTpISIRotated?: (ctx: TpISIRotatedContext) => void;

	/**
	 * Enter a parse tree produced by the `TpISIRotatedDiv`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTpISIRotatedDiv?: (ctx: TpISIRotatedDivContext) => void;
	/**
	 * Exit a parse tree produced by the `TpISIRotatedDiv`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTpISIRotatedDiv?: (ctx: TpISIRotatedDivContext) => void;

	/**
	 * Enter a parse tree produced by the `TpISIFacing`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTpISIFacing?: (ctx: TpISIFacingContext) => void;
	/**
	 * Exit a parse tree produced by the `TpISIFacing`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTpISIFacing?: (ctx: TpISIFacingContext) => void;

	/**
	 * Enter a parse tree produced by the `TpISIFacingEntity`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTpISIFacingEntity?: (ctx: TpISIFacingEntityContext) => void;
	/**
	 * Exit a parse tree produced by the `TpISIFacingEntity`
	 * labeled alternative in `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTpISIFacingEntity?: (ctx: TpISIFacingEntityContext) => void;

	/**
	 * Enter a parse tree produced by the `execDirectRun`
	 * labeled alternative in `JustMCFParser.execRunChild`.
	 * @param ctx the parse tree
	 */
	enterExecDirectRun?: (ctx: ExecDirectRunContext) => void;
	/**
	 * Exit a parse tree produced by the `execDirectRun`
	 * labeled alternative in `JustMCFParser.execRunChild`.
	 * @param ctx the parse tree
	 */
	exitExecDirectRun?: (ctx: ExecDirectRunContext) => void;

	/**
	 * Enter a parse tree produced by the `execNamedRun`
	 * labeled alternative in `JustMCFParser.execRunChild`.
	 * @param ctx the parse tree
	 */
	enterExecNamedRun?: (ctx: ExecNamedRunContext) => void;
	/**
	 * Exit a parse tree produced by the `execNamedRun`
	 * labeled alternative in `JustMCFParser.execRunChild`.
	 * @param ctx the parse tree
	 */
	exitExecNamedRun?: (ctx: ExecNamedRunContext) => void;

	/**
	 * Enter a parse tree produced by the `execAnonymousRun`
	 * labeled alternative in `JustMCFParser.execRunChild`.
	 * @param ctx the parse tree
	 */
	enterExecAnonymousRun?: (ctx: ExecAnonymousRunContext) => void;
	/**
	 * Exit a parse tree produced by the `execAnonymousRun`
	 * labeled alternative in `JustMCFParser.execRunChild`.
	 * @param ctx the parse tree
	 */
	exitExecAnonymousRun?: (ctx: ExecAnonymousRunContext) => void;

	/**
	 * Enter a parse tree produced by the `displaySCompound`
	 * labeled alternative in `JustMCFParser.displayStatement`.
	 * @param ctx the parse tree
	 */
	enterDisplaySCompound?: (ctx: DisplaySCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `displaySCompound`
	 * labeled alternative in `JustMCFParser.displayStatement`.
	 * @param ctx the parse tree
	 */
	exitDisplaySCompound?: (ctx: DisplaySCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `displaySSelectorCompound`
	 * labeled alternative in `JustMCFParser.displayStatement`.
	 * @param ctx the parse tree
	 */
	enterDisplaySSelectorCompound?: (ctx: DisplaySSelectorCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `displaySSelectorCompound`
	 * labeled alternative in `JustMCFParser.displayStatement`.
	 * @param ctx the parse tree
	 */
	exitDisplaySSelectorCompound?: (ctx: DisplaySSelectorCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `entityDeclareSITag`
	 * labeled alternative in `JustMCFParser.entityDeclareStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityDeclareSITag?: (ctx: EntityDeclareSITagContext) => void;
	/**
	 * Exit a parse tree produced by the `entityDeclareSITag`
	 * labeled alternative in `JustMCFParser.entityDeclareStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityDeclareSITag?: (ctx: EntityDeclareSITagContext) => void;

	/**
	 * Enter a parse tree produced by the `titleSCompound`
	 * labeled alternative in `JustMCFParser.titleStatement`.
	 * @param ctx the parse tree
	 */
	enterTitleSCompound?: (ctx: TitleSCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `titleSCompound`
	 * labeled alternative in `JustMCFParser.titleStatement`.
	 * @param ctx the parse tree
	 */
	exitTitleSCompound?: (ctx: TitleSCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `titleSSelectorCompound`
	 * labeled alternative in `JustMCFParser.titleStatement`.
	 * @param ctx the parse tree
	 */
	enterTitleSSelectorCompound?: (ctx: TitleSSelectorCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `titleSSelectorCompound`
	 * labeled alternative in `JustMCFParser.titleStatement`.
	 * @param ctx the parse tree
	 */
	exitTitleSSelectorCompound?: (ctx: TitleSSelectorCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `nameSpaceSettingsFunc`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettingsFunc?: (ctx: NameSpaceSettingsFuncContext) => void;
	/**
	 * Exit a parse tree produced by the `nameSpaceSettingsFunc`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettingsFunc?: (ctx: NameSpaceSettingsFuncContext) => void;

	/**
	 * Enter a parse tree produced by the `nameSpaceSettingsBlock`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettingsBlock?: (ctx: NameSpaceSettingsBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `nameSpaceSettingsBlock`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettingsBlock?: (ctx: NameSpaceSettingsBlockContext) => void;

	/**
	 * Enter a parse tree produced by the `nameSpaceSettingsStorage`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettingsStorage?: (ctx: NameSpaceSettingsStorageContext) => void;
	/**
	 * Exit a parse tree produced by the `nameSpaceSettingsStorage`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettingsStorage?: (ctx: NameSpaceSettingsStorageContext) => void;

	/**
	 * Enter a parse tree produced by the `nameSpaceSettingsBossbar`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettingsBossbar?: (ctx: NameSpaceSettingsBossbarContext) => void;
	/**
	 * Exit a parse tree produced by the `nameSpaceSettingsBossbar`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettingsBossbar?: (ctx: NameSpaceSettingsBossbarContext) => void;

	/**
	 * Enter a parse tree produced by the `nameSpaceSettingsBiome`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettingsBiome?: (ctx: NameSpaceSettingsBiomeContext) => void;
	/**
	 * Exit a parse tree produced by the `nameSpaceSettingsBiome`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettingsBiome?: (ctx: NameSpaceSettingsBiomeContext) => void;

	/**
	 * Enter a parse tree produced by the `nameSpaceSettingsEntity`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettingsEntity?: (ctx: NameSpaceSettingsEntityContext) => void;
	/**
	 * Exit a parse tree produced by the `nameSpaceSettingsEntity`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettingsEntity?: (ctx: NameSpaceSettingsEntityContext) => void;

	/**
	 * Enter a parse tree produced by the `nameSpaceSettingsPredicate`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettingsPredicate?: (ctx: NameSpaceSettingsPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `nameSpaceSettingsPredicate`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettingsPredicate?: (ctx: NameSpaceSettingsPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `nameSpaceSettingsDim`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettingsDim?: (ctx: NameSpaceSettingsDimContext) => void;
	/**
	 * Exit a parse tree produced by the `nameSpaceSettingsDim`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettingsDim?: (ctx: NameSpaceSettingsDimContext) => void;

	/**
	 * Enter a parse tree produced by the `nameSpaceSettingsItem`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettingsItem?: (ctx: NameSpaceSettingsItemContext) => void;
	/**
	 * Exit a parse tree produced by the `nameSpaceSettingsItem`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettingsItem?: (ctx: NameSpaceSettingsItemContext) => void;

	/**
	 * Enter a parse tree produced by the `nameSpaceSettingsLoot`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettingsLoot?: (ctx: NameSpaceSettingsLootContext) => void;
	/**
	 * Exit a parse tree produced by the `nameSpaceSettingsLoot`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettingsLoot?: (ctx: NameSpaceSettingsLootContext) => void;

	/**
	 * Enter a parse tree produced by the `nameSpaceSettingsItemModifier`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettingsItemModifier?: (ctx: NameSpaceSettingsItemModifierContext) => void;
	/**
	 * Exit a parse tree produced by the `nameSpaceSettingsItemModifier`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettingsItemModifier?: (ctx: NameSpaceSettingsItemModifierContext) => void;

	/**
	 * Enter a parse tree produced by the `nameSpaceSettingsDefault`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettingsDefault?: (ctx: NameSpaceSettingsDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `nameSpaceSettingsDefault`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettingsDefault?: (ctx: NameSpaceSettingsDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `nameSpaceSettingsJustDefault`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettingsJustDefault?: (ctx: NameSpaceSettingsJustDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `nameSpaceSettingsJustDefault`
	 * labeled alternative in `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettingsJustDefault?: (ctx: NameSpaceSettingsJustDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `noInExecStatementFunc`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 */
	enterNoInExecStatementFunc?: (ctx: NoInExecStatementFuncContext) => void;
	/**
	 * Exit a parse tree produced by the `noInExecStatementFunc`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 */
	exitNoInExecStatementFunc?: (ctx: NoInExecStatementFuncContext) => void;

	/**
	 * Enter a parse tree produced by the `noInExecStatementRunFunc`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 */
	enterNoInExecStatementRunFunc?: (ctx: NoInExecStatementRunFuncContext) => void;
	/**
	 * Exit a parse tree produced by the `noInExecStatementRunFunc`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 */
	exitNoInExecStatementRunFunc?: (ctx: NoInExecStatementRunFuncContext) => void;

	/**
	 * Enter a parse tree produced by the `noInExecStatementFuncImprove`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 */
	enterNoInExecStatementFuncImprove?: (ctx: NoInExecStatementFuncImproveContext) => void;
	/**
	 * Exit a parse tree produced by the `noInExecStatementFuncImprove`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 */
	exitNoInExecStatementFuncImprove?: (ctx: NoInExecStatementFuncImproveContext) => void;

	/**
	 * Enter a parse tree produced by the `noInExecStatementInterface`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 */
	enterNoInExecStatementInterface?: (ctx: NoInExecStatementInterfaceContext) => void;
	/**
	 * Exit a parse tree produced by the `noInExecStatementInterface`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 */
	exitNoInExecStatementInterface?: (ctx: NoInExecStatementInterfaceContext) => void;

	/**
	 * Enter a parse tree produced by the `noInExecStatementStore`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 */
	enterNoInExecStatementStore?: (ctx: NoInExecStatementStoreContext) => void;
	/**
	 * Exit a parse tree produced by the `noInExecStatementStore`
	 * labeled alternative in `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 */
	exitNoInExecStatementStore?: (ctx: NoInExecStatementStoreContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISIGiveAndClear`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISIGiveAndClear?: (ctx: EntityISIGiveAndClearContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISIGiveAndClear`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISIGiveAndClear?: (ctx: EntityISIGiveAndClearContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISIKill`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISIKill?: (ctx: EntityISIKillContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISIKill`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISIKill?: (ctx: EntityISIKillContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISITag`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISITag?: (ctx: EntityISITagContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISITag`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISITag?: (ctx: EntityISITagContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISIEffect`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISIEffect?: (ctx: EntityISIEffectContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISIEffect`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISIEffect?: (ctx: EntityISIEffectContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISITp`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISITp?: (ctx: EntityISITpContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISITp`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISITp?: (ctx: EntityISITpContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISITitleCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISITitleCompound?: (ctx: EntityISITitleCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISITitleCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISITitleCompound?: (ctx: EntityISITitleCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISIDisplayCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISIDisplayCompound?: (ctx: EntityISIDisplayCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISIDisplayCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISIDisplayCompound?: (ctx: EntityISIDisplayCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISIDisplaySingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISIDisplaySingle?: (ctx: EntityISIDisplaySingleContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISIDisplaySingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISIDisplaySingle?: (ctx: EntityISIDisplaySingleContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISIItemSingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISIItemSingle?: (ctx: EntityISIItemSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISIItemSingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISIItemSingle?: (ctx: EntityISIItemSingleContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISILootGiveSingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISILootGiveSingle?: (ctx: EntityISILootGiveSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISILootGiveSingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISILootGiveSingle?: (ctx: EntityISILootGiveSingleContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISILootSingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISILootSingle?: (ctx: EntityISILootSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISILootSingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISILootSingle?: (ctx: EntityISILootSingleContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISIItemCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISIItemCompound?: (ctx: EntityISIItemCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISIItemCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISIItemCompound?: (ctx: EntityISIItemCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISILootCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISILootCompound?: (ctx: EntityISILootCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISILootCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISILootCompound?: (ctx: EntityISILootCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISIAttrSingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISIAttrSingle?: (ctx: EntityISIAttrSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISIAttrSingle`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISIAttrSingle?: (ctx: EntityISIAttrSingleContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISIAttrCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISIAttrCompound?: (ctx: EntityISIAttrCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISIAttrCompound`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISIAttrCompound?: (ctx: EntityISIAttrCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `entityISIExec`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityISIExec?: (ctx: EntityISIExecContext) => void;
	/**
	 * Exit a parse tree produced by the `entityISIExec`
	 * labeled alternative in `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityISIExec?: (ctx: EntityISIExecContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSIInsert`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	enterLootSIInsert?: (ctx: LootSIInsertContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSIInsert`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	exitLootSIInsert?: (ctx: LootSIInsertContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSISpawn`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	enterLootSISpawn?: (ctx: LootSISpawnContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSISpawn`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	exitLootSISpawn?: (ctx: LootSISpawnContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSIReplaceBlock`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	enterLootSIReplaceBlock?: (ctx: LootSIReplaceBlockContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSIReplaceBlock`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	exitLootSIReplaceBlock?: (ctx: LootSIReplaceBlockContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSIGive`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	enterLootSIGive?: (ctx: LootSIGiveContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSIGive`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	exitLootSIGive?: (ctx: LootSIGiveContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSIReplaceEntity`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	enterLootSIReplaceEntity?: (ctx: LootSIReplaceEntityContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSIReplaceEntity`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	exitLootSIReplaceEntity?: (ctx: LootSIReplaceEntityContext) => void;

	/**
	 * Enter a parse tree produced by the `lootSISelectorNest`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	enterLootSISelectorNest?: (ctx: LootSISelectorNestContext) => void;
	/**
	 * Exit a parse tree produced by the `lootSISelectorNest`
	 * labeled alternative in `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	exitLootSISelectorNest?: (ctx: LootSISelectorNestContext) => void;

	/**
	 * Enter a parse tree produced by the `dataGet`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataGet?: (ctx: DataGetContext) => void;
	/**
	 * Exit a parse tree produced by the `dataGet`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataGet?: (ctx: DataGetContext) => void;

	/**
	 * Enter a parse tree produced by the `dataMerge`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataMerge?: (ctx: DataMergeContext) => void;
	/**
	 * Exit a parse tree produced by the `dataMerge`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataMerge?: (ctx: DataMergeContext) => void;

	/**
	 * Enter a parse tree produced by the `dataModifyMergeValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataModifyMergeValue?: (ctx: DataModifyMergeValueContext) => void;
	/**
	 * Exit a parse tree produced by the `dataModifyMergeValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataModifyMergeValue?: (ctx: DataModifyMergeValueContext) => void;

	/**
	 * Enter a parse tree produced by the `dataModifyMergeFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataModifyMergeFrom?: (ctx: DataModifyMergeFromContext) => void;
	/**
	 * Exit a parse tree produced by the `dataModifyMergeFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataModifyMergeFrom?: (ctx: DataModifyMergeFromContext) => void;

	/**
	 * Enter a parse tree produced by the `dataModifySetValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataModifySetValue?: (ctx: DataModifySetValueContext) => void;
	/**
	 * Exit a parse tree produced by the `dataModifySetValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataModifySetValue?: (ctx: DataModifySetValueContext) => void;

	/**
	 * Enter a parse tree produced by the `dataModifySetFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataModifySetFrom?: (ctx: DataModifySetFromContext) => void;
	/**
	 * Exit a parse tree produced by the `dataModifySetFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataModifySetFrom?: (ctx: DataModifySetFromContext) => void;

	/**
	 * Enter a parse tree produced by the `dataModifyAppendValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataModifyAppendValue?: (ctx: DataModifyAppendValueContext) => void;
	/**
	 * Exit a parse tree produced by the `dataModifyAppendValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataModifyAppendValue?: (ctx: DataModifyAppendValueContext) => void;

	/**
	 * Enter a parse tree produced by the `dataModifyAppendFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataModifyAppendFrom?: (ctx: DataModifyAppendFromContext) => void;
	/**
	 * Exit a parse tree produced by the `dataModifyAppendFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataModifyAppendFrom?: (ctx: DataModifyAppendFromContext) => void;

	/**
	 * Enter a parse tree produced by the `dataModifyPrependValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataModifyPrependValue?: (ctx: DataModifyPrependValueContext) => void;
	/**
	 * Exit a parse tree produced by the `dataModifyPrependValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataModifyPrependValue?: (ctx: DataModifyPrependValueContext) => void;

	/**
	 * Enter a parse tree produced by the `dataModifyPrependFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataModifyPrependFrom?: (ctx: DataModifyPrependFromContext) => void;
	/**
	 * Exit a parse tree produced by the `dataModifyPrependFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataModifyPrependFrom?: (ctx: DataModifyPrependFromContext) => void;

	/**
	 * Enter a parse tree produced by the `dataModifyInsertValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataModifyInsertValue?: (ctx: DataModifyInsertValueContext) => void;
	/**
	 * Exit a parse tree produced by the `dataModifyInsertValue`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataModifyInsertValue?: (ctx: DataModifyInsertValueContext) => void;

	/**
	 * Enter a parse tree produced by the `dataModifyInsertFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataModifyInsertFrom?: (ctx: DataModifyInsertFromContext) => void;
	/**
	 * Exit a parse tree produced by the `dataModifyInsertFrom`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataModifyInsertFrom?: (ctx: DataModifyInsertFromContext) => void;

	/**
	 * Enter a parse tree produced by the `dataRemove`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataRemove?: (ctx: DataRemoveContext) => void;
	/**
	 * Exit a parse tree produced by the `dataRemove`
	 * labeled alternative in `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataRemove?: (ctx: DataRemoveContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarOpExprGet`
	 * labeled alternative in `JustMCFParser.bossbarOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterBossbarOpExprGet?: (ctx: BossbarOpExprGetContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarOpExprGet`
	 * labeled alternative in `JustMCFParser.bossbarOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitBossbarOpExprGet?: (ctx: BossbarOpExprGetContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarOpExprAssignValue`
	 * labeled alternative in `JustMCFParser.bossbarOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterBossbarOpExprAssignValue?: (ctx: BossbarOpExprAssignValueContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarOpExprAssignValue`
	 * labeled alternative in `JustMCFParser.bossbarOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitBossbarOpExprAssignValue?: (ctx: BossbarOpExprAssignValueContext) => void;

	/**
	 * Enter a parse tree produced by the `bossbarOpExprAssignMax`
	 * labeled alternative in `JustMCFParser.bossbarOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterBossbarOpExprAssignMax?: (ctx: BossbarOpExprAssignMaxContext) => void;
	/**
	 * Exit a parse tree produced by the `bossbarOpExprAssignMax`
	 * labeled alternative in `JustMCFParser.bossbarOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitBossbarOpExprAssignMax?: (ctx: BossbarOpExprAssignMaxContext) => void;

	/**
	 * Enter a parse tree produced by the `blockSISetblock`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBlockSISetblock?: (ctx: BlockSISetblockContext) => void;
	/**
	 * Exit a parse tree produced by the `blockSISetblock`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBlockSISetblock?: (ctx: BlockSISetblockContext) => void;

	/**
	 * Enter a parse tree produced by the `blockSIFill`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBlockSIFill?: (ctx: BlockSIFillContext) => void;
	/**
	 * Exit a parse tree produced by the `blockSIFill`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBlockSIFill?: (ctx: BlockSIFillContext) => void;

	/**
	 * Enter a parse tree produced by the `blockSIFillReplace`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBlockSIFillReplace?: (ctx: BlockSIFillReplaceContext) => void;
	/**
	 * Exit a parse tree produced by the `blockSIFillReplace`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBlockSIFillReplace?: (ctx: BlockSIFillReplaceContext) => void;

	/**
	 * Enter a parse tree produced by the `blockSIClone`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBlockSIClone?: (ctx: BlockSICloneContext) => void;
	/**
	 * Exit a parse tree produced by the `blockSIClone`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBlockSIClone?: (ctx: BlockSICloneContext) => void;

	/**
	 * Enter a parse tree produced by the `blockSICloneFiltered`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBlockSICloneFiltered?: (ctx: BlockSICloneFilteredContext) => void;
	/**
	 * Exit a parse tree produced by the `blockSICloneFiltered`
	 * labeled alternative in `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBlockSICloneFiltered?: (ctx: BlockSICloneFilteredContext) => void;

	/**
	 * Enter a parse tree produced by the `attrSCompound`
	 * labeled alternative in `JustMCFParser.attrStatement`.
	 * @param ctx the parse tree
	 */
	enterAttrSCompound?: (ctx: AttrSCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `attrSCompound`
	 * labeled alternative in `JustMCFParser.attrStatement`.
	 * @param ctx the parse tree
	 */
	exitAttrSCompound?: (ctx: AttrSCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `attrSSelectorCompound`
	 * labeled alternative in `JustMCFParser.attrStatement`.
	 * @param ctx the parse tree
	 */
	enterAttrSSelectorCompound?: (ctx: AttrSSelectorCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `attrSSelectorCompound`
	 * labeled alternative in `JustMCFParser.attrStatement`.
	 * @param ctx the parse tree
	 */
	exitAttrSSelectorCompound?: (ctx: AttrSSelectorCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `scbGet`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbGet?: (ctx: ScbGetContext) => void;
	/**
	 * Exit a parse tree produced by the `scbGet`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbGet?: (ctx: ScbGetContext) => void;

	/**
	 * Enter a parse tree produced by the `scbAdd`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbAdd?: (ctx: ScbAddContext) => void;
	/**
	 * Exit a parse tree produced by the `scbAdd`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbAdd?: (ctx: ScbAddContext) => void;

	/**
	 * Enter a parse tree produced by the `scbRemove`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbRemove?: (ctx: ScbRemoveContext) => void;
	/**
	 * Exit a parse tree produced by the `scbRemove`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbRemove?: (ctx: ScbRemoveContext) => void;

	/**
	 * Enter a parse tree produced by the `scbSet`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbSet?: (ctx: ScbSetContext) => void;
	/**
	 * Exit a parse tree produced by the `scbSet`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbSet?: (ctx: ScbSetContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptMulAssignNumber`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptMulAssignNumber?: (ctx: ScbOptMulAssignNumberContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptMulAssignNumber`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptMulAssignNumber?: (ctx: ScbOptMulAssignNumberContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptDivAssignNumber`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptDivAssignNumber?: (ctx: ScbOptDivAssignNumberContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptDivAssignNumber`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptDivAssignNumber?: (ctx: ScbOptDivAssignNumberContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptModAssignNumber`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptModAssignNumber?: (ctx: ScbOptModAssignNumberContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptModAssignNumber`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptModAssignNumber?: (ctx: ScbOptModAssignNumberContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptAddAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptAddAssign?: (ctx: ScbOptAddAssignContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptAddAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptAddAssign?: (ctx: ScbOptAddAssignContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptSubAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptSubAssign?: (ctx: ScbOptSubAssignContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptSubAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptSubAssign?: (ctx: ScbOptSubAssignContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptMulAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptMulAssign?: (ctx: ScbOptMulAssignContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptMulAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptMulAssign?: (ctx: ScbOptMulAssignContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptDivAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptDivAssign?: (ctx: ScbOptDivAssignContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptDivAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptDivAssign?: (ctx: ScbOptDivAssignContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptModAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptModAssign?: (ctx: ScbOptModAssignContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptModAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptModAssign?: (ctx: ScbOptModAssignContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptExcFunc`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptExcFunc?: (ctx: ScbOptExcFuncContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptExcFunc`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptExcFunc?: (ctx: ScbOptExcFuncContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptMinFunc`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptMinFunc?: (ctx: ScbOptMinFuncContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptMinFunc`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptMinFunc?: (ctx: ScbOptMinFuncContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptMaxFunc`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptMaxFunc?: (ctx: ScbOptMaxFuncContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptMaxFunc`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptMaxFunc?: (ctx: ScbOptMaxFuncContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptAssign?: (ctx: ScbOptAssignContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptAssign`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptAssign?: (ctx: ScbOptAssignContext) => void;

	/**
	 * Enter a parse tree produced by the `scbReset`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbReset?: (ctx: ScbResetContext) => void;
	/**
	 * Exit a parse tree produced by the `scbReset`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbReset?: (ctx: ScbResetContext) => void;

	/**
	 * Enter a parse tree produced by the `scbEnable`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbEnable?: (ctx: ScbEnableContext) => void;
	/**
	 * Exit a parse tree produced by the `scbEnable`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbEnable?: (ctx: ScbEnableContext) => void;

	/**
	 * Enter a parse tree produced by the `scbOptExpression`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOptExpression?: (ctx: ScbOptExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `scbOptExpression`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOptExpression?: (ctx: ScbOptExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `funcTagSIFuncS`
	 * labeled alternative in `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 */
	enterFuncTagSIFuncS?: (ctx: FuncTagSIFuncSContext) => void;
	/**
	 * Exit a parse tree produced by the `funcTagSIFuncS`
	 * labeled alternative in `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 */
	exitFuncTagSIFuncS?: (ctx: FuncTagSIFuncSContext) => void;

	/**
	 * Enter a parse tree produced by the `funcTagSIFuncRunS`
	 * labeled alternative in `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 */
	enterFuncTagSIFuncRunS?: (ctx: FuncTagSIFuncRunSContext) => void;
	/**
	 * Exit a parse tree produced by the `funcTagSIFuncRunS`
	 * labeled alternative in `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 */
	exitFuncTagSIFuncRunS?: (ctx: FuncTagSIFuncRunSContext) => void;

	/**
	 * Enter a parse tree produced by the `funcTagSIFuncImproveS`
	 * labeled alternative in `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 */
	enterFuncTagSIFuncImproveS?: (ctx: FuncTagSIFuncImproveSContext) => void;
	/**
	 * Exit a parse tree produced by the `funcTagSIFuncImproveS`
	 * labeled alternative in `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 */
	exitFuncTagSIFuncImproveS?: (ctx: FuncTagSIFuncImproveSContext) => void;

	/**
	 * Enter a parse tree produced by the `funcTagSIFuncTagS`
	 * labeled alternative in `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 */
	enterFuncTagSIFuncTagS?: (ctx: FuncTagSIFuncTagSContext) => void;
	/**
	 * Exit a parse tree produced by the `funcTagSIFuncTagS`
	 * labeled alternative in `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 */
	exitFuncTagSIFuncTagS?: (ctx: FuncTagSIFuncTagSContext) => void;

	/**
	 * Enter a parse tree produced by the `displaySIScb`
	 * labeled alternative in `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 */
	enterDisplaySIScb?: (ctx: DisplaySIScbContext) => void;
	/**
	 * Exit a parse tree produced by the `displaySIScb`
	 * labeled alternative in `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 */
	exitDisplaySIScb?: (ctx: DisplaySIScbContext) => void;

	/**
	 * Enter a parse tree produced by the `displaySIBossbar`
	 * labeled alternative in `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 */
	enterDisplaySIBossbar?: (ctx: DisplaySIBossbarContext) => void;
	/**
	 * Exit a parse tree produced by the `displaySIBossbar`
	 * labeled alternative in `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 */
	exitDisplaySIBossbar?: (ctx: DisplaySIBossbarContext) => void;

	/**
	 * Enter a parse tree produced by the `displaySISelectorSingle`
	 * labeled alternative in `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 */
	enterDisplaySISelectorSingle?: (ctx: DisplaySISelectorSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `displaySISelectorSingle`
	 * labeled alternative in `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 */
	exitDisplaySISelectorSingle?: (ctx: DisplaySISelectorSingleContext) => void;

	/**
	 * Enter a parse tree produced by the `displaySISelectorCompound`
	 * labeled alternative in `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 */
	enterDisplaySISelectorCompound?: (ctx: DisplaySISelectorCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `displaySISelectorCompound`
	 * labeled alternative in `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 */
	exitDisplaySISelectorCompound?: (ctx: DisplaySISelectorCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `whileStatementExec`
	 * labeled alternative in `JustMCFParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatementExec?: (ctx: WhileStatementExecContext) => void;
	/**
	 * Exit a parse tree produced by the `whileStatementExec`
	 * labeled alternative in `JustMCFParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatementExec?: (ctx: WhileStatementExecContext) => void;

	/**
	 * Enter a parse tree produced by the `whileStatementExist`
	 * labeled alternative in `JustMCFParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatementExist?: (ctx: WhileStatementExistContext) => void;
	/**
	 * Exit a parse tree produced by the `whileStatementExist`
	 * labeled alternative in `JustMCFParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatementExist?: (ctx: WhileStatementExistContext) => void;

	/**
	 * Enter a parse tree produced by the `funcTagSettingsReplace`
	 * labeled alternative in `JustMCFParser.funcTagSettings`.
	 * @param ctx the parse tree
	 */
	enterFuncTagSettingsReplace?: (ctx: FuncTagSettingsReplaceContext) => void;
	/**
	 * Exit a parse tree produced by the `funcTagSettingsReplace`
	 * labeled alternative in `JustMCFParser.funcTagSettings`.
	 * @param ctx the parse tree
	 */
	exitFuncTagSettingsReplace?: (ctx: FuncTagSettingsReplaceContext) => void;

	/**
	 * Enter a parse tree produced by the `funcTagSettingsReplaced`
	 * labeled alternative in `JustMCFParser.funcTagSettings`.
	 * @param ctx the parse tree
	 */
	enterFuncTagSettingsReplaced?: (ctx: FuncTagSettingsReplacedContext) => void;
	/**
	 * Exit a parse tree produced by the `funcTagSettingsReplaced`
	 * labeled alternative in `JustMCFParser.funcTagSettings`.
	 * @param ctx the parse tree
	 */
	exitFuncTagSettingsReplaced?: (ctx: FuncTagSettingsReplacedContext) => void;

	/**
	 * Enter a parse tree produced by the `dataSCompound`
	 * labeled alternative in `JustMCFParser.dataStatement`.
	 * @param ctx the parse tree
	 */
	enterDataSCompound?: (ctx: DataSCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `dataSCompound`
	 * labeled alternative in `JustMCFParser.dataStatement`.
	 * @param ctx the parse tree
	 */
	exitDataSCompound?: (ctx: DataSCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `dataSIdentifierCompound`
	 * labeled alternative in `JustMCFParser.dataStatement`.
	 * @param ctx the parse tree
	 */
	enterDataSIdentifierCompound?: (ctx: DataSIdentifierCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `dataSIdentifierCompound`
	 * labeled alternative in `JustMCFParser.dataStatement`.
	 * @param ctx the parse tree
	 */
	exitDataSIdentifierCompound?: (ctx: DataSIdentifierCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `displayISITitleSingle`
	 * labeled alternative in `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterDisplayISITitleSingle?: (ctx: DisplayISITitleSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `displayISITitleSingle`
	 * labeled alternative in `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitDisplayISITitleSingle?: (ctx: DisplayISITitleSingleContext) => void;

	/**
	 * Enter a parse tree produced by the `displayISITitleCompound`
	 * labeled alternative in `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterDisplayISITitleCompound?: (ctx: DisplayISITitleCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `displayISITitleCompound`
	 * labeled alternative in `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitDisplayISITitleCompound?: (ctx: DisplayISITitleCompoundContext) => void;

	/**
	 * Enter a parse tree produced by the `displayISIText`
	 * labeled alternative in `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterDisplayISIText?: (ctx: DisplayISITextContext) => void;
	/**
	 * Exit a parse tree produced by the `displayISIText`
	 * labeled alternative in `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitDisplayISIText?: (ctx: DisplayISITextContext) => void;

	/**
	 * Enter a parse tree produced by the `displayISIBossbar`
	 * labeled alternative in `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterDisplayISIBossbar?: (ctx: DisplayISIBossbarContext) => void;
	/**
	 * Exit a parse tree produced by the `displayISIBossbar`
	 * labeled alternative in `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitDisplayISIBossbar?: (ctx: DisplayISIBossbarContext) => void;

	/**
	 * Enter a parse tree produced by the `scbObjSDeclareWithName`
	 * labeled alternative in `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 */
	enterScbObjSDeclareWithName?: (ctx: ScbObjSDeclareWithNameContext) => void;
	/**
	 * Exit a parse tree produced by the `scbObjSDeclareWithName`
	 * labeled alternative in `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 */
	exitScbObjSDeclareWithName?: (ctx: ScbObjSDeclareWithNameContext) => void;

	/**
	 * Enter a parse tree produced by the `scbObjSDeclareSingle`
	 * labeled alternative in `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 */
	enterScbObjSDeclareSingle?: (ctx: ScbObjSDeclareSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `scbObjSDeclareSingle`
	 * labeled alternative in `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 */
	exitScbObjSDeclareSingle?: (ctx: ScbObjSDeclareSingleContext) => void;

	/**
	 * Enter a parse tree produced by the `scbObjSDeclareDefault`
	 * labeled alternative in `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 */
	enterScbObjSDeclareDefault?: (ctx: ScbObjSDeclareDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `scbObjSDeclareDefault`
	 * labeled alternative in `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 */
	exitScbObjSDeclareDefault?: (ctx: ScbObjSDeclareDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `scbObjSOperation`
	 * labeled alternative in `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 */
	enterScbObjSOperation?: (ctx: ScbObjSOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `scbObjSOperation`
	 * labeled alternative in `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 */
	exitScbObjSOperation?: (ctx: ScbObjSOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `titleSISelectorSingle`
	 * labeled alternative in `JustMCFParser.titleStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTitleSISelectorSingle?: (ctx: TitleSISelectorSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `titleSISelectorSingle`
	 * labeled alternative in `JustMCFParser.titleStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTitleSISelectorSingle?: (ctx: TitleSISelectorSingleContext) => void;

	/**
	 * Enter a parse tree produced by the `titleSISelectorCompound`
	 * labeled alternative in `JustMCFParser.titleStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTitleSISelectorCompound?: (ctx: TitleSISelectorCompoundContext) => void;
	/**
	 * Exit a parse tree produced by the `titleSISelectorCompound`
	 * labeled alternative in `JustMCFParser.titleStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTitleSISelectorCompound?: (ctx: TitleSISelectorCompoundContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.mcfFile`.
	 * @param ctx the parse tree
	 */
	enterMcfFile?: (ctx: McfFileContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.mcfFile`.
	 * @param ctx the parse tree
	 */
	exitMcfFile?: (ctx: McfFileContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.fileStatementInner`.
	 * @param ctx the parse tree
	 */
	enterFileStatementInner?: (ctx: FileStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.fileStatementInner`.
	 * @param ctx the parse tree
	 */
	exitFileStatementInner?: (ctx: FileStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.statementInner`.
	 * @param ctx the parse tree
	 */
	enterStatementInner?: (ctx: StatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.statementInner`.
	 * @param ctx the parse tree
	 */
	exitStatementInner?: (ctx: StatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 */
	enterNoInExecStatement?: (ctx: NoInExecStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.noInExecStatement`.
	 * @param ctx the parse tree
	 */
	exitNoInExecStatement?: (ctx: NoInExecStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.leagalCommand`.
	 * @param ctx the parse tree
	 */
	enterLeagalCommand?: (ctx: LeagalCommandContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.leagalCommand`.
	 * @param ctx the parse tree
	 */
	exitLeagalCommand?: (ctx: LeagalCommandContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpaceStatement`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceStatement?: (ctx: NameSpaceStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpaceStatement`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceStatement?: (ctx: NameSpaceStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceSettings?: (ctx: NameSpaceSettingsContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpaceSettings`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceSettings?: (ctx: NameSpaceSettingsContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpaceStatementInner`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceStatementInner?: (ctx: NameSpaceStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpaceStatementInner`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceStatementInner?: (ctx: NameSpaceStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.namespaceSetStatement`.
	 * @param ctx the parse tree
	 */
	enterNamespaceSetStatement?: (ctx: NamespaceSetStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.namespaceSetStatement`.
	 * @param ctx the parse tree
	 */
	exitNamespaceSetStatement?: (ctx: NamespaceSetStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.funcTagStatement`.
	 * @param ctx the parse tree
	 */
	enterFuncTagStatement?: (ctx: FuncTagStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.funcTagStatement`.
	 * @param ctx the parse tree
	 */
	exitFuncTagStatement?: (ctx: FuncTagStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.funcTagSettings`.
	 * @param ctx the parse tree
	 */
	enterFuncTagSettings?: (ctx: FuncTagSettingsContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.funcTagSettings`.
	 * @param ctx the parse tree
	 */
	exitFuncTagSettings?: (ctx: FuncTagSettingsContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 */
	enterFuncTagStatementInner?: (ctx: FuncTagStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.funcTagStatementInner`.
	 * @param ctx the parse tree
	 */
	exitFuncTagStatementInner?: (ctx: FuncTagStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.funcStatement`.
	 * @param ctx the parse tree
	 */
	enterFuncStatement?: (ctx: FuncStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.funcStatement`.
	 * @param ctx the parse tree
	 */
	exitFuncStatement?: (ctx: FuncStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.funcImproveStatement`.
	 * @param ctx the parse tree
	 */
	enterFuncImproveStatement?: (ctx: FuncImproveStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.funcImproveStatement`.
	 * @param ctx the parse tree
	 */
	exitFuncImproveStatement?: (ctx: FuncImproveStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.funcImproveParam`.
	 * @param ctx the parse tree
	 */
	enterFuncImproveParam?: (ctx: FuncImproveParamContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.funcImproveParam`.
	 * @param ctx the parse tree
	 */
	exitFuncImproveParam?: (ctx: FuncImproveParamContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.funcImproveStatementInner`.
	 * @param ctx the parse tree
	 */
	enterFuncImproveStatementInner?: (ctx: FuncImproveStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.funcImproveStatementInner`.
	 * @param ctx the parse tree
	 */
	exitFuncImproveStatementInner?: (ctx: FuncImproveStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	enterYieldStatement?: (ctx: YieldStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	exitYieldStatement?: (ctx: YieldStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.funcRunStatement`.
	 * @param ctx the parse tree
	 */
	enterFuncRunStatement?: (ctx: FuncRunStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.funcRunStatement`.
	 * @param ctx the parse tree
	 */
	exitFuncRunStatement?: (ctx: FuncRunStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.funcImproveRunStatement`.
	 * @param ctx the parse tree
	 */
	enterFuncImproveRunStatement?: (ctx: FuncImproveRunStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.funcImproveRunStatement`.
	 * @param ctx the parse tree
	 */
	exitFuncImproveRunStatement?: (ctx: FuncImproveRunStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.funcImproveRunExpression`.
	 * @param ctx the parse tree
	 */
	enterFuncImproveRunExpression?: (ctx: FuncImproveRunExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.funcImproveRunExpression`.
	 * @param ctx the parse tree
	 */
	exitFuncImproveRunExpression?: (ctx: FuncImproveRunExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.funcImproveRunParam`.
	 * @param ctx the parse tree
	 */
	enterFuncImproveRunParam?: (ctx: FuncImproveRunParamContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.funcImproveRunParam`.
	 * @param ctx the parse tree
	 */
	exitFuncImproveRunParam?: (ctx: FuncImproveRunParamContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.execStatement`.
	 * @param ctx the parse tree
	 */
	enterExecStatement?: (ctx: ExecStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.execStatement`.
	 * @param ctx the parse tree
	 */
	exitExecStatement?: (ctx: ExecStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	enterExecStoreChild?: (ctx: ExecStoreChildContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.execStoreChild`.
	 * @param ctx the parse tree
	 */
	exitExecStoreChild?: (ctx: ExecStoreChildContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.execRunChild`.
	 * @param ctx the parse tree
	 */
	enterExecRunChild?: (ctx: ExecRunChildContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.execRunChild`.
	 * @param ctx the parse tree
	 */
	exitExecRunChild?: (ctx: ExecRunChildContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	enterExecChild?: (ctx: ExecChildContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 */
	exitExecChild?: (ctx: ExecChildContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.matchPart`.
	 * @param ctx the parse tree
	 */
	enterMatchPart?: (ctx: MatchPartContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.matchPart`.
	 * @param ctx the parse tree
	 */
	exitMatchPart?: (ctx: MatchPartContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.scbCompareNumber`.
	 * @param ctx the parse tree
	 */
	enterScbCompareNumber?: (ctx: ScbCompareNumberContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.scbCompareNumber`.
	 * @param ctx the parse tree
	 */
	exitScbCompareNumber?: (ctx: ScbCompareNumberContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 */
	enterDataIdentifier?: (ctx: DataIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 */
	exitDataIdentifier?: (ctx: DataIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.dataStorageIdentifier`.
	 * @param ctx the parse tree
	 */
	enterDataStorageIdentifier?: (ctx: DataStorageIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.dataStorageIdentifier`.
	 * @param ctx the parse tree
	 */
	exitDataStorageIdentifier?: (ctx: DataStorageIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.dataEntityIdentifier`.
	 * @param ctx the parse tree
	 */
	enterDataEntityIdentifier?: (ctx: DataEntityIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.dataEntityIdentifier`.
	 * @param ctx the parse tree
	 */
	exitDataEntityIdentifier?: (ctx: DataEntityIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.dataBlockIdentifier`.
	 * @param ctx the parse tree
	 */
	enterDataBlockIdentifier?: (ctx: DataBlockIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.dataBlockIdentifier`.
	 * @param ctx the parse tree
	 */
	exitDataBlockIdentifier?: (ctx: DataBlockIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.dataMergeExpression`.
	 * @param ctx the parse tree
	 */
	enterDataMergeExpression?: (ctx: DataMergeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.dataMergeExpression`.
	 * @param ctx the parse tree
	 */
	exitDataMergeExpression?: (ctx: DataMergeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterDataOperationExpression?: (ctx: DataOperationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.dataOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitDataOperationExpression?: (ctx: DataOperationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.dataRightValue`.
	 * @param ctx the parse tree
	 */
	enterDataRightValue?: (ctx: DataRightValueContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.dataRightValue`.
	 * @param ctx the parse tree
	 */
	exitDataRightValue?: (ctx: DataRightValueContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.dataStatement`.
	 * @param ctx the parse tree
	 */
	enterDataStatement?: (ctx: DataStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.dataStatement`.
	 * @param ctx the parse tree
	 */
	exitDataStatement?: (ctx: DataStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbOperationExpression?: (ctx: ScbOperationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbOperationExpression?: (ctx: ScbOperationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterScbSingleOperationExpression?: (ctx: ScbSingleOperationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.scbSingleOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitScbSingleOperationExpression?: (ctx: ScbSingleOperationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.scbCoreIdentifier`.
	 * @param ctx the parse tree
	 */
	enterScbCoreIdentifier?: (ctx: ScbCoreIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.scbCoreIdentifier`.
	 * @param ctx the parse tree
	 */
	exitScbCoreIdentifier?: (ctx: ScbCoreIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.scbIdentifier`.
	 * @param ctx the parse tree
	 */
	enterScbIdentifier?: (ctx: ScbIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.scbIdentifier`.
	 * @param ctx the parse tree
	 */
	exitScbIdentifier?: (ctx: ScbIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.scbPlayerStatement`.
	 * @param ctx the parse tree
	 */
	enterScbPlayerStatement?: (ctx: ScbPlayerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.scbPlayerStatement`.
	 * @param ctx the parse tree
	 */
	exitScbPlayerStatement?: (ctx: ScbPlayerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.scbPlayerStatementInner`.
	 * @param ctx the parse tree
	 */
	enterScbPlayerStatementInner?: (ctx: ScbPlayerStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.scbPlayerStatementInner`.
	 * @param ctx the parse tree
	 */
	exitScbPlayerStatementInner?: (ctx: ScbPlayerStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 */
	enterScbObjectiveStatement?: (ctx: ScbObjectiveStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.scbObjectiveStatement`.
	 * @param ctx the parse tree
	 */
	exitScbObjectiveStatement?: (ctx: ScbObjectiveStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 */
	enterScbStatementInner?: (ctx: ScbStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.scbStatementInner`.
	 * @param ctx the parse tree
	 */
	exitScbStatementInner?: (ctx: ScbStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.bossbarStatement`.
	 * @param ctx the parse tree
	 */
	enterBossbarStatement?: (ctx: BossbarStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.bossbarStatement`.
	 * @param ctx the parse tree
	 */
	exitBossbarStatement?: (ctx: BossbarStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBossbarStatementInner?: (ctx: BossbarStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.bossbarStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBossbarStatementInner?: (ctx: BossbarStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.bossbarOperationExpression`.
	 * @param ctx the parse tree
	 */
	enterBossbarOperationExpression?: (ctx: BossbarOperationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.bossbarOperationExpression`.
	 * @param ctx the parse tree
	 */
	exitBossbarOperationExpression?: (ctx: BossbarOperationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.bossbarIdentifier`.
	 * @param ctx the parse tree
	 */
	enterBossbarIdentifier?: (ctx: BossbarIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.bossbarIdentifier`.
	 * @param ctx the parse tree
	 */
	exitBossbarIdentifier?: (ctx: BossbarIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.titleStatement`.
	 * @param ctx the parse tree
	 */
	enterTitleStatement?: (ctx: TitleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.titleStatement`.
	 * @param ctx the parse tree
	 */
	exitTitleStatement?: (ctx: TitleStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.titleStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTitleStatementInner?: (ctx: TitleStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.titleStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTitleStatementInner?: (ctx: TitleStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTitleSelectorStatementInner?: (ctx: TitleSelectorStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.titleSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTitleSelectorStatementInner?: (ctx: TitleSelectorStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTitleIndependentStatementInner?: (ctx: TitleIndependentStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.titleIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTitleIndependentStatementInner?: (ctx: TitleIndependentStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.displayStatement`.
	 * @param ctx the parse tree
	 */
	enterDisplayStatement?: (ctx: DisplayStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.displayStatement`.
	 * @param ctx the parse tree
	 */
	exitDisplayStatement?: (ctx: DisplayStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 */
	enterDisplayStatementInner?: (ctx: DisplayStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.displayStatementInner`.
	 * @param ctx the parse tree
	 */
	exitDisplayStatementInner?: (ctx: DisplayStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterDisplayIndependentStatementInner?: (ctx: DisplayIndependentStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.displayIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitDisplayIndependentStatementInner?: (ctx: DisplayIndependentStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.itemStatement`.
	 * @param ctx the parse tree
	 */
	enterItemStatement?: (ctx: ItemStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.itemStatement`.
	 * @param ctx the parse tree
	 */
	exitItemStatement?: (ctx: ItemStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.lootStatement`.
	 * @param ctx the parse tree
	 */
	enterLootStatement?: (ctx: LootStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.lootStatement`.
	 * @param ctx the parse tree
	 */
	exitLootStatement?: (ctx: LootStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	enterLootStatementInner?: (ctx: LootStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.lootStatementInner`.
	 * @param ctx the parse tree
	 */
	exitLootStatementInner?: (ctx: LootStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.lootSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	enterLootSelectorStatementInner?: (ctx: LootSelectorStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.lootSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	exitLootSelectorStatementInner?: (ctx: LootSelectorStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.lootIndependentStatementInnerGive`.
	 * @param ctx the parse tree
	 */
	enterLootIndependentStatementInnerGive?: (ctx: LootIndependentStatementInnerGiveContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.lootIndependentStatementInnerGive`.
	 * @param ctx the parse tree
	 */
	exitLootIndependentStatementInnerGive?: (ctx: LootIndependentStatementInnerGiveContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.lootIndependentStatementInnerReplaceEntity`.
	 * @param ctx the parse tree
	 */
	enterLootIndependentStatementInnerReplaceEntity?: (ctx: LootIndependentStatementInnerReplaceEntityContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.lootIndependentStatementInnerReplaceEntity`.
	 * @param ctx the parse tree
	 */
	exitLootIndependentStatementInnerReplaceEntity?: (ctx: LootIndependentStatementInnerReplaceEntityContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	enterLootSource?: (ctx: LootSourceContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.lootSource`.
	 * @param ctx the parse tree
	 */
	exitLootSource?: (ctx: LootSourceContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemStatementInner?: (ctx: ItemStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.itemStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemStatementInner?: (ctx: ItemStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.itemSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemSelectorStatementInner?: (ctx: ItemSelectorStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.itemSelectorStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemSelectorStatementInner?: (ctx: ItemSelectorStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterItemIndependentStatementInner?: (ctx: ItemIndependentStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.itemIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitItemIndependentStatementInner?: (ctx: ItemIndependentStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.giveAndClearIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterGiveAndClearIndependentStatementInner?: (ctx: GiveAndClearIndependentStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.giveAndClearIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitGiveAndClearIndependentStatementInner?: (ctx: GiveAndClearIndependentStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.attrStatement`.
	 * @param ctx the parse tree
	 */
	enterAttrStatement?: (ctx: AttrStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.attrStatement`.
	 * @param ctx the parse tree
	 */
	exitAttrStatement?: (ctx: AttrStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.attrStatementInner`.
	 * @param ctx the parse tree
	 */
	enterAttrStatementInner?: (ctx: AttrStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.attrStatementInner`.
	 * @param ctx the parse tree
	 */
	exitAttrStatementInner?: (ctx: AttrStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterAttrIndependentStatementInner?: (ctx: AttrIndependentStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.attrIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitAttrIndependentStatementInner?: (ctx: AttrIndependentStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 */
	enterEntityStatement?: (ctx: EntityStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.entityStatement`.
	 * @param ctx the parse tree
	 */
	exitEntityStatement?: (ctx: EntityStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.playerName`.
	 * @param ctx the parse tree
	 */
	enterPlayerName?: (ctx: PlayerNameContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.playerName`.
	 * @param ctx the parse tree
	 */
	exitPlayerName?: (ctx: PlayerNameContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.entityDeclareStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityDeclareStatementInner?: (ctx: EntityDeclareStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.entityDeclareStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityDeclareStatementInner?: (ctx: EntityDeclareStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.tagIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTagIndependentStatementInner?: (ctx: TagIndependentStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.tagIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTagIndependentStatementInner?: (ctx: TagIndependentStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEffectIndependentStatementInner?: (ctx: EffectIndependentStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.effectIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEffectIndependentStatementInner?: (ctx: EffectIndependentStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterTpIndependentStatementInner?: (ctx: TpIndependentStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.tpIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitTpIndependentStatementInner?: (ctx: TpIndependentStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityIndependentStatementInner?: (ctx: EntityIndependentStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.entityIndependentStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityIndependentStatementInner?: (ctx: EntityIndependentStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.entityStatementInner`.
	 * @param ctx the parse tree
	 */
	enterEntityStatementInner?: (ctx: EntityStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.entityStatementInner`.
	 * @param ctx the parse tree
	 */
	exitEntityStatementInner?: (ctx: EntityStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.entityExpression`.
	 * @param ctx the parse tree
	 */
	enterEntityExpression?: (ctx: EntityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.entityExpression`.
	 * @param ctx the parse tree
	 */
	exitEntityExpression?: (ctx: EntityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 */
	enterBlockStatementInner?: (ctx: BlockStatementInnerContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.blockStatementInner`.
	 * @param ctx the parse tree
	 */
	exitBlockStatementInner?: (ctx: BlockStatementInnerContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.interfaceStatement`.
	 * @param ctx the parse tree
	 */
	enterInterfaceStatement?: (ctx: InterfaceStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.interfaceStatement`.
	 * @param ctx the parse tree
	 */
	exitInterfaceStatement?: (ctx: InterfaceStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.dataAssignExistExpression`.
	 * @param ctx the parse tree
	 */
	enterDataAssignExistExpression?: (ctx: DataAssignExistExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.dataAssignExistExpression`.
	 * @param ctx the parse tree
	 */
	exitDataAssignExistExpression?: (ctx: DataAssignExistExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	enterExistExpression?: (ctx: ExistExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.existExpression`.
	 * @param ctx the parse tree
	 */
	exitExistExpression?: (ctx: ExistExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.ifElseStatement`.
	 * @param ctx the parse tree
	 */
	enterIfElseStatement?: (ctx: IfElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.ifElseStatement`.
	 * @param ctx the parse tree
	 */
	exitIfElseStatement?: (ctx: IfElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nbt`.
	 * @param ctx the parse tree
	 */
	enterNbt?: (ctx: NbtContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nbt`.
	 * @param ctx the parse tree
	 */
	exitNbt?: (ctx: NbtContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.json`.
	 * @param ctx the parse tree
	 */
	enterJson?: (ctx: JsonContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.json`.
	 * @param ctx the parse tree
	 */
	exitJson?: (ctx: JsonContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nbtPathWithoutCompound`.
	 * @param ctx the parse tree
	 */
	enterNbtPathWithoutCompound?: (ctx: NbtPathWithoutCompoundContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nbtPathWithoutCompound`.
	 * @param ctx the parse tree
	 */
	exitNbtPathWithoutCompound?: (ctx: NbtPathWithoutCompoundContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nbtPath`.
	 * @param ctx the parse tree
	 */
	enterNbtPath?: (ctx: NbtPathContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nbtPath`.
	 * @param ctx the parse tree
	 */
	exitNbtPath?: (ctx: NbtPathContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.snbtValue`.
	 * @param ctx the parse tree
	 */
	enterSnbtValue?: (ctx: SnbtValueContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.snbtValue`.
	 * @param ctx the parse tree
	 */
	exitSnbtValue?: (ctx: SnbtValueContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.snbt`.
	 * @param ctx the parse tree
	 */
	enterSnbt?: (ctx: SnbtContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.snbt`.
	 * @param ctx the parse tree
	 */
	exitSnbt?: (ctx: SnbtContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nbtCompound`.
	 * @param ctx the parse tree
	 */
	enterNbtCompound?: (ctx: NbtCompoundContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nbtCompound`.
	 * @param ctx the parse tree
	 */
	exitNbtCompound?: (ctx: NbtCompoundContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nbtPair`.
	 * @param ctx the parse tree
	 */
	enterNbtPair?: (ctx: NbtPairContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nbtPair`.
	 * @param ctx the parse tree
	 */
	exitNbtPair?: (ctx: NbtPairContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nbtList`.
	 * @param ctx the parse tree
	 */
	enterNbtList?: (ctx: NbtListContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nbtList`.
	 * @param ctx the parse tree
	 */
	exitNbtList?: (ctx: NbtListContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nbtValue`.
	 * @param ctx the parse tree
	 */
	enterNbtValue?: (ctx: NbtValueContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nbtValue`.
	 * @param ctx the parse tree
	 */
	exitNbtValue?: (ctx: NbtValueContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nbtByteArr`.
	 * @param ctx the parse tree
	 */
	enterNbtByteArr?: (ctx: NbtByteArrContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nbtByteArr`.
	 * @param ctx the parse tree
	 */
	exitNbtByteArr?: (ctx: NbtByteArrContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nbtIntArr`.
	 * @param ctx the parse tree
	 */
	enterNbtIntArr?: (ctx: NbtIntArrContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nbtIntArr`.
	 * @param ctx the parse tree
	 */
	exitNbtIntArr?: (ctx: NbtIntArrContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nbtLongArr`.
	 * @param ctx the parse tree
	 */
	enterNbtLongArr?: (ctx: NbtLongArrContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nbtLongArr`.
	 * @param ctx the parse tree
	 */
	exitNbtLongArr?: (ctx: NbtLongArrContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nbtString`.
	 * @param ctx the parse tree
	 */
	enterNbtString?: (ctx: NbtStringContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nbtString`.
	 * @param ctx the parse tree
	 */
	exitNbtString?: (ctx: NbtStringContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.jsonTextValue`.
	 * @param ctx the parse tree
	 */
	enterJsonTextValue?: (ctx: JsonTextValueContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.jsonTextValue`.
	 * @param ctx the parse tree
	 */
	exitJsonTextValue?: (ctx: JsonTextValueContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.jsonText`.
	 * @param ctx the parse tree
	 */
	enterJsonText?: (ctx: JsonTextContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.jsonText`.
	 * @param ctx the parse tree
	 */
	exitJsonText?: (ctx: JsonTextContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.jsonObj`.
	 * @param ctx the parse tree
	 */
	enterJsonObj?: (ctx: JsonObjContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.jsonObj`.
	 * @param ctx the parse tree
	 */
	exitJsonObj?: (ctx: JsonObjContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.jsonPair`.
	 * @param ctx the parse tree
	 */
	enterJsonPair?: (ctx: JsonPairContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.jsonPair`.
	 * @param ctx the parse tree
	 */
	exitJsonPair?: (ctx: JsonPairContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.jsonArr`.
	 * @param ctx the parse tree
	 */
	enterJsonArr?: (ctx: JsonArrContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.jsonArr`.
	 * @param ctx the parse tree
	 */
	exitJsonArr?: (ctx: JsonArrContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.jsonValue`.
	 * @param ctx the parse tree
	 */
	enterJsonValue?: (ctx: JsonValueContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.jsonValue`.
	 * @param ctx the parse tree
	 */
	exitJsonValue?: (ctx: JsonValueContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.boolValue`.
	 * @param ctx the parse tree
	 */
	enterBoolValue?: (ctx: BoolValueContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.boolValue`.
	 * @param ctx the parse tree
	 */
	exitBoolValue?: (ctx: BoolValueContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.end`.
	 * @param ctx the parse tree
	 */
	enterEnd?: (ctx: EndContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.end`.
	 * @param ctx the parse tree
	 */
	exitEnd?: (ctx: EndContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.ends`.
	 * @param ctx the parse tree
	 */
	enterEnds?: (ctx: EndsContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.ends`.
	 * @param ctx the parse tree
	 */
	exitEnds?: (ctx: EndsContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.p_`.
	 * @param ctx the parse tree
	 */
	enterP_?: (ctx: P_Context) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.p_`.
	 * @param ctx the parse tree
	 */
	exitP_?: (ctx: P_Context) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.pn_`.
	 * @param ctx the parse tree
	 */
	enterPn_?: (ctx: Pn_Context) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.pn_`.
	 * @param ctx the parse tree
	 */
	exitPn_?: (ctx: Pn_Context) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.s_`.
	 * @param ctx the parse tree
	 */
	enterS_?: (ctx: S_Context) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.s_`.
	 * @param ctx the parse tree
	 */
	exitS_?: (ctx: S_Context) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.pos3Identifier`.
	 * @param ctx the parse tree
	 */
	enterPos3Identifier?: (ctx: Pos3IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.pos3Identifier`.
	 * @param ctx the parse tree
	 */
	exitPos3Identifier?: (ctx: Pos3IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.pos2Identifier`.
	 * @param ctx the parse tree
	 */
	enterPos2Identifier?: (ctx: Pos2IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.pos2Identifier`.
	 * @param ctx the parse tree
	 */
	exitPos2Identifier?: (ctx: Pos2IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.pos5Identifier`.
	 * @param ctx the parse tree
	 */
	enterPos5Identifier?: (ctx: Pos5IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.pos5Identifier`.
	 * @param ctx the parse tree
	 */
	exitPos5Identifier?: (ctx: Pos5IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.pos1`.
	 * @param ctx the parse tree
	 */
	enterPos1?: (ctx: Pos1Context) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.pos1`.
	 * @param ctx the parse tree
	 */
	exitPos1?: (ctx: Pos1Context) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.blockIdentifier`.
	 * @param ctx the parse tree
	 */
	enterBlockIdentifier?: (ctx: BlockIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.blockIdentifier`.
	 * @param ctx the parse tree
	 */
	exitBlockIdentifier?: (ctx: BlockIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.blockstate`.
	 * @param ctx the parse tree
	 */
	enterBlockstate?: (ctx: BlockstateContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.blockstate`.
	 * @param ctx the parse tree
	 */
	exitBlockstate?: (ctx: BlockstateContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpace`.
	 * @param ctx the parse tree
	 */
	enterNameSpace?: (ctx: NameSpaceContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpace`.
	 * @param ctx the parse tree
	 */
	exitNameSpace?: (ctx: NameSpaceContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpaceBlock`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceBlock?: (ctx: NameSpaceBlockContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpaceBlock`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceBlock?: (ctx: NameSpaceBlockContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpaceFunc`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceFunc?: (ctx: NameSpaceFuncContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpaceFunc`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceFunc?: (ctx: NameSpaceFuncContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpaceStorage`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceStorage?: (ctx: NameSpaceStorageContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpaceStorage`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceStorage?: (ctx: NameSpaceStorageContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpaceBossbar`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceBossbar?: (ctx: NameSpaceBossbarContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpaceBossbar`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceBossbar?: (ctx: NameSpaceBossbarContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpaceBiome`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceBiome?: (ctx: NameSpaceBiomeContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpaceBiome`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceBiome?: (ctx: NameSpaceBiomeContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpaceDim`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceDim?: (ctx: NameSpaceDimContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpaceDim`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceDim?: (ctx: NameSpaceDimContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpacePredicate`.
	 * @param ctx the parse tree
	 */
	enterNameSpacePredicate?: (ctx: NameSpacePredicateContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpacePredicate`.
	 * @param ctx the parse tree
	 */
	exitNameSpacePredicate?: (ctx: NameSpacePredicateContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpaceItem`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceItem?: (ctx: NameSpaceItemContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpaceItem`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceItem?: (ctx: NameSpaceItemContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpaceEntity`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceEntity?: (ctx: NameSpaceEntityContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpaceEntity`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceEntity?: (ctx: NameSpaceEntityContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpaceLoot`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceLoot?: (ctx: NameSpaceLootContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpaceLoot`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceLoot?: (ctx: NameSpaceLootContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nameSpaceItemModifier`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceItemModifier?: (ctx: NameSpaceItemModifierContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nameSpaceItemModifier`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceItemModifier?: (ctx: NameSpaceItemModifierContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.tagNameSpace`.
	 * @param ctx the parse tree
	 */
	enterTagNameSpace?: (ctx: TagNameSpaceContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.tagNameSpace`.
	 * @param ctx the parse tree
	 */
	exitTagNameSpace?: (ctx: TagNameSpaceContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.tagNameSpaceItem`.
	 * @param ctx the parse tree
	 */
	enterTagNameSpaceItem?: (ctx: TagNameSpaceItemContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.tagNameSpaceItem`.
	 * @param ctx the parse tree
	 */
	exitTagNameSpaceItem?: (ctx: TagNameSpaceItemContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.tagNameSpaceBlock`.
	 * @param ctx the parse tree
	 */
	enterTagNameSpaceBlock?: (ctx: TagNameSpaceBlockContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.tagNameSpaceBlock`.
	 * @param ctx the parse tree
	 */
	exitTagNameSpaceBlock?: (ctx: TagNameSpaceBlockContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.tagNameSpaceFunc`.
	 * @param ctx the parse tree
	 */
	enterTagNameSpaceFunc?: (ctx: TagNameSpaceFuncContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.tagNameSpaceFunc`.
	 * @param ctx the parse tree
	 */
	exitTagNameSpaceFunc?: (ctx: TagNameSpaceFuncContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.tagNameSpaceEntity`.
	 * @param ctx the parse tree
	 */
	enterTagNameSpaceEntity?: (ctx: TagNameSpaceEntityContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.tagNameSpaceEntity`.
	 * @param ctx the parse tree
	 */
	exitTagNameSpaceEntity?: (ctx: TagNameSpaceEntityContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.registerName`.
	 * @param ctx the parse tree
	 */
	enterRegisterName?: (ctx: RegisterNameContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.registerName`.
	 * @param ctx the parse tree
	 */
	exitRegisterName?: (ctx: RegisterNameContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.numberType`.
	 * @param ctx the parse tree
	 */
	enterNumberType?: (ctx: NumberTypeContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.numberType`.
	 * @param ctx the parse tree
	 */
	exitNumberType?: (ctx: NumberTypeContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.acceptableNameWithoutPointWithKey`.
	 * @param ctx the parse tree
	 */
	enterAcceptableNameWithoutPointWithKey?: (ctx: AcceptableNameWithoutPointWithKeyContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.acceptableNameWithoutPointWithKey`.
	 * @param ctx the parse tree
	 */
	exitAcceptableNameWithoutPointWithKey?: (ctx: AcceptableNameWithoutPointWithKeyContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.criterion`.
	 * @param ctx the parse tree
	 */
	enterCriterion?: (ctx: CriterionContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.criterion`.
	 * @param ctx the parse tree
	 */
	exitCriterion?: (ctx: CriterionContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.nbtName`.
	 * @param ctx the parse tree
	 */
	enterNbtName?: (ctx: NbtNameContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.nbtName`.
	 * @param ctx the parse tree
	 */
	exitNbtName?: (ctx: NbtNameContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.acceptableName`.
	 * @param ctx the parse tree
	 */
	enterAcceptableName?: (ctx: AcceptableNameContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.acceptableName`.
	 * @param ctx the parse tree
	 */
	exitAcceptableName?: (ctx: AcceptableNameContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.acceptableNameWithNumber`.
	 * @param ctx the parse tree
	 */
	enterAcceptableNameWithNumber?: (ctx: AcceptableNameWithNumberContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.acceptableNameWithNumber`.
	 * @param ctx the parse tree
	 */
	exitAcceptableNameWithNumber?: (ctx: AcceptableNameWithNumberContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.resourceLocation`.
	 * @param ctx the parse tree
	 */
	enterResourceLocation?: (ctx: ResourceLocationContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.resourceLocation`.
	 * @param ctx the parse tree
	 */
	exitResourceLocation?: (ctx: ResourceLocationContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.item_slot`.
	 * @param ctx the parse tree
	 */
	enterItem_slot?: (ctx: Item_slotContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.item_slot`.
	 * @param ctx the parse tree
	 */
	exitItem_slot?: (ctx: Item_slotContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.item_predicate`.
	 * @param ctx the parse tree
	 */
	enterItem_predicate?: (ctx: Item_predicateContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.item_predicate`.
	 * @param ctx the parse tree
	 */
	exitItem_predicate?: (ctx: Item_predicateContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.block_predicate`.
	 * @param ctx the parse tree
	 */
	enterBlock_predicate?: (ctx: Block_predicateContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.block_predicate`.
	 * @param ctx the parse tree
	 */
	exitBlock_predicate?: (ctx: Block_predicateContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.selector`.
	 * @param ctx the parse tree
	 */
	enterSelector?: (ctx: SelectorContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.selector`.
	 * @param ctx the parse tree
	 */
	exitSelector?: (ctx: SelectorContext) => void;
}

