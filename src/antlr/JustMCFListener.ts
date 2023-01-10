// Generated from ./antlr/JustMCF.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExecStoreResultScoreContext } from "./JustMCFParser";
import { ExecStoreSuccessScoreContext } from "./JustMCFParser";
import { ExecStoreResultDataContext } from "./JustMCFParser";
import { ExecStoreSuccessDataContext } from "./JustMCFParser";
import { ExecStoreResultBossbarContext } from "./JustMCFParser";
import { ExecStoreSuccessBossbarContext } from "./JustMCFParser";
import { DataMergeStorageContext } from "./JustMCFParser";
import { DataMergeEntityContext } from "./JustMCFParser";
import { DataMergeBlockContext } from "./JustMCFParser";
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
import { ScbFuncExpressionContext } from "./JustMCFParser";
import { ScbOptMulDivModExpressionContext } from "./JustMCFParser";
import { ScbOptAddSubExpressionContext } from "./JustMCFParser";
import { ScbTempNumberExpressionContext } from "./JustMCFParser";
import { ScbIdExpressionContext } from "./JustMCFParser";
import { ScbParenExpressionContext } from "./JustMCFParser";
import { ExecWithRunOrChildContext } from "./JustMCFParser";
import { ExecWithoutRunOrChildContext } from "./JustMCFParser";
import { ExecDirectRunContext } from "./JustMCFParser";
import { ExecNamedRunContext } from "./JustMCFParser";
import { ExecAnonymousRunContext } from "./JustMCFParser";
import { ScbGetContext } from "./JustMCFParser";
import { ScbAddContext } from "./JustMCFParser";
import { ScbRemoveContext } from "./JustMCFParser";
import { ScbSetContext } from "./JustMCFParser";
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
import { ScbOptExpressionContext } from "./JustMCFParser";
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
import { ExecPredicateContext } from "./JustMCFParser";
import { ExecIfBlockContext } from "./JustMCFParser";
import { ExecIfBlocksContext } from "./JustMCFParser";
import { ExecIfDataContext } from "./JustMCFParser";
import { ExecIfBiomeContext } from "./JustMCFParser";
import { ExecStoreContext } from "./JustMCFParser";
import { DataStorageContext } from "./JustMCFParser";
import { DataEntityContext } from "./JustMCFParser";
import { DataBlockContext } from "./JustMCFParser";
import { McfFileContext } from "./JustMCFParser";
import { StatementAndCommandContext } from "./JustMCFParser";
import { CommandContext } from "./JustMCFParser";
import { StatementContext } from "./JustMCFParser";
import { LeagalCommandContext } from "./JustMCFParser";
import { FuncStatementContext } from "./JustMCFParser";
import { ExecStatementContext } from "./JustMCFParser";
import { ExecStoreChildContext } from "./JustMCFParser";
import { ExecRunChildContext } from "./JustMCFParser";
import { ExecChildContext } from "./JustMCFParser";
import { MatchPartContext } from "./JustMCFParser";
import { DataIdentifierContext } from "./JustMCFParser";
import { DataMergeExpressionContext } from "./JustMCFParser";
import { DataOperationExpressionContext } from "./JustMCFParser";
import { ScbOperationExpressionContext } from "./JustMCFParser";
import { ScbSingleOperationExpressionContext } from "./JustMCFParser";
import { ScbIdentifierContext } from "./JustMCFParser";
import { Pos3IdentifierContext } from "./JustMCFParser";
import { Pos2IdentifierContext } from "./JustMCFParser";
import { Pos5IdentifierContext } from "./JustMCFParser";
import { Pos1Context } from "./JustMCFParser";
import { BlockIdentifierContext } from "./JustMCFParser";
import { BlockstateContext } from "./JustMCFParser";
import { SelectorContext } from "./JustMCFParser";
import { NameSpaceContext } from "./JustMCFParser";
import { RegisterNameContext } from "./JustMCFParser";
import { NbtNameContext } from "./JustMCFParser";
import { ResourceLocationContext } from "./JustMCFParser";
import { NbtContext } from "./JustMCFParser";
import { JsonContext } from "./JustMCFParser";
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


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JustMCFParser`.
 */
export interface JustMCFListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `JustMCFParser.statementAndCommand`.
	 * @param ctx the parse tree
	 */
	enterStatementAndCommand?: (ctx: StatementAndCommandContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.statementAndCommand`.
	 * @param ctx the parse tree
	 */
	exitStatementAndCommand?: (ctx: StatementAndCommandContext) => void;

	/**
	 * Enter a parse tree produced by `JustMCFParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

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
	 * Enter a parse tree produced by `JustMCFParser.selector`.
	 * @param ctx the parse tree
	 */
	enterSelector?: (ctx: SelectorContext) => void;
	/**
	 * Exit a parse tree produced by `JustMCFParser.selector`.
	 * @param ctx the parse tree
	 */
	exitSelector?: (ctx: SelectorContext) => void;

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
}

