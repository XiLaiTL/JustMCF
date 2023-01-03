// Generated from ./antlr/JustMCF.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { McfFileContext } from "./JustMCFParser";
import { StatementAndCommandContext } from "./JustMCFParser";
import { CommandContext } from "./JustMCFParser";
import { StatementContext } from "./JustMCFParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `JustMCFParser`.
 */
export interface JustMCFListener extends ParseTreeListener {
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

