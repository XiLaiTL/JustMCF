// Generated from ./antlr/JustMCF.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JustMCFParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JustMCFVisitor<Result> extends ParseTreeVisitor<Result> {
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
	 * Visit a parse tree produced by the `scbOptExpression`
	 * labeled alternative in `JustMCFParser.scbOperationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbOptExpression?: (ctx: ScbOptExpressionContext) => Result;

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
	 * Visit a parse tree produced by the `execPredicate`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecPredicate?: (ctx: ExecPredicateContext) => Result;

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
	 * Visit a parse tree produced by the `execStore`
	 * labeled alternative in `JustMCFParser.execChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStore?: (ctx: ExecStoreContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataStorage`
	 * labeled alternative in `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStorage?: (ctx: DataStorageContext) => Result;

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
	 * Visit a parse tree produced by `JustMCFParser.mcfFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMcfFile?: (ctx: McfFileContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.statementAndCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementAndCommand?: (ctx: StatementAndCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.leagalCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeagalCommand?: (ctx: LeagalCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.funcStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncStatement?: (ctx: FuncStatementContext) => Result;

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
	 * Visit a parse tree produced by `JustMCFParser.dataIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataIdentifier?: (ctx: DataIdentifierContext) => Result;

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
	 * Visit a parse tree produced by `JustMCFParser.scbIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScbIdentifier?: (ctx: ScbIdentifierContext) => Result;

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
	 * Visit a parse tree produced by `JustMCFParser.selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector?: (ctx: SelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nameSpace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpace?: (ctx: NameSpaceContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.registerName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegisterName?: (ctx: RegisterNameContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.nbtName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtName?: (ctx: NbtNameContext) => Result;

	/**
	 * Visit a parse tree produced by `JustMCFParser.resourceLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceLocation?: (ctx: ResourceLocationContext) => Result;

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
}

