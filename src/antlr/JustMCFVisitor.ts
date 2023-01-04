// Generated from ./antlr/JustMCF.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExecWithRunOrChildContext } from "./JustMCFParser";
import { ExecWithoutRunOrChildContext } from "./JustMCFParser";
import { ExecDirectRunContext } from "./JustMCFParser";
import { ExecNamedRunContext } from "./JustMCFParser";
import { ExecAnonymousRunContext } from "./JustMCFParser";
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

