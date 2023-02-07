// Generated from ./antlr/JustMCF.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JustMCFListener } from "./JustMCFListener";
import { JustMCFVisitor } from "./JustMCFVisitor";


export class JustMCFParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly CompareOperation = 52;
	public static readonly ByteNumber = 53;
	public static readonly ShortNumber = 54;
	public static readonly LongNumber = 55;
	public static readonly FloatNumber = 56;
	public static readonly DoubleNumber = 57;
	public static readonly STRING2 = 58;
	public static readonly TRUE = 59;
	public static readonly FALSE = 60;
	public static readonly NULL = 61;
	public static readonly STRING = 62;
	public static readonly UUID16_ = 63;
	public static readonly NUMBER_INT = 64;
	public static readonly NUMBER = 65;
	public static readonly WS = 66;
	public static readonly LeagalCommand = 67;
	public static readonly LineComment = 68;
	public static readonly BlockComment = 69;
	public static readonly NAMSP = 70;
	public static readonly NAMESPACE = 71;
	public static readonly LOCAL = 72;
	public static readonly EXEC = 73;
	public static readonly RUN = 74;
	public static readonly STORE = 75;
	public static readonly ALIGN = 76;
	public static readonly ANCHORED = 77;
	public static readonly EYES = 78;
	public static readonly FEET = 79;
	public static readonly IN = 80;
	public static readonly AS = 81;
	public static readonly AT = 82;
	public static readonly FACING = 83;
	public static readonly POSITIONED = 84;
	public static readonly POS = 85;
	public static readonly ROTATED = 86;
	public static readonly ROT = 87;
	public static readonly IF = 88;
	public static readonly UNLESS = 89;
	public static readonly ALL = 90;
	public static readonly MASKED = 91;
	public static readonly BIOME = 92;
	public static readonly VALUE = 93;
	public static readonly MAX = 94;
	public static readonly ENTITY = 95;
	public static readonly SCORE = 96;
	public static readonly PREDICATE = 97;
	public static readonly BLOCK = 98;
	public static readonly BLOCKS = 99;
	public static readonly MATCHES = 100;
	public static readonly RESULT = 101;
	public static readonly SUCCESS = 102;
	public static readonly SCB = 103;
	public static readonly DISPLAYNAME = 104;
	public static readonly RENDERTYPE = 105;
	public static readonly DISPLAY = 106;
	public static readonly ENABLE = 107;
	public static readonly LIST = 108;
	public static readonly HEARTS = 109;
	public static readonly INTEGER = 110;
	public static readonly DATA = 111;
	public static readonly STORAGE = 112;
	public static readonly RESET = 113;
	public static readonly ADD = 114;
	public static readonly REMOVE = 115;
	public static readonly FUNC = 116;
	public static readonly TAGGED = 117;
	public static readonly DEFAULT = 118;
	public static readonly PLAYER = 119;
	public static readonly PLAYERS = 120;
	public static readonly BOSSBAR = 121;
	public static readonly VISIBLE = 122;
	public static readonly BLUE = 123;
	public static readonly GREEN = 124;
	public static readonly PINK = 125;
	public static readonly PURPLE = 126;
	public static readonly RED = 127;
	public static readonly WHITE = 128;
	public static readonly YELLOW = 129;
	public static readonly COLOR = 130;
	public static readonly NAME = 131;
	public static readonly STYLE = 132;
	public static readonly NOTCHED_6 = 133;
	public static readonly NOTCHED_10 = 134;
	public static readonly NOTCHED_12 = 135;
	public static readonly NOTCHED_20 = 136;
	public static readonly PROGRESS = 137;
	public static readonly SET = 138;
	public static readonly TITLE = 139;
	public static readonly SUBTITLE = 140;
	public static readonly ACTIONBAR = 141;
	public static readonly TIMES = 142;
	public static readonly TEXT = 143;
	public static readonly ITEM = 144;
	public static readonly LOOT = 145;
	public static readonly GIVE = 146;
	public static readonly CLEAR = 147;
	public static readonly FISH = 148;
	public static readonly KILL = 149;
	public static readonly MINE = 150;
	public static readonly MAINHAND = 151;
	public static readonly OFFHAND = 152;
	public static readonly EFFECT = 153;
	public static readonly TAG = 154;
	public static readonly TP = 155;
	public static readonly GET = 156;
	public static readonly ATTR = 157;
	public static readonly BASE = 158;
	public static readonly DESTROY = 159;
	public static readonly KEEP = 160;
	public static readonly REPLACE = 161;
	public static readonly HOLLOW = 162;
	public static readonly OUTLINE = 163;
	public static readonly FORCE = 164;
	public static readonly MOVE = 165;
	public static readonly NORMAL = 166;
	public static readonly FILTERED = 167;
	public static readonly INTERFACE = 168;
	public static readonly WHILE = 169;
	public static readonly ELSE = 170;
	public static readonly FOR = 171;
	public static readonly YEILD = 172;
	public static readonly BREAK = 173;
	public static readonly RETURN = 174;
	public static readonly REPLACED = 175;
	public static readonly DIM = 176;
	public static readonly DIMENSION = 177;
	public static readonly ITEM_MODIFIER = 178;
	public static readonly Pos1 = 179;
	public static readonly Selector = 180;
	public static readonly BYTE = 181;
	public static readonly SHORT = 182;
	public static readonly INT_ = 183;
	public static readonly LONG = 184;
	public static readonly FLOAT = 185;
	public static readonly DOUBLE = 186;
	public static readonly AcceptableName = 187;
	public static readonly NBTName = 188;
	public static readonly RULE_mcfFile = 0;
	public static readonly RULE_fileStatementInner = 1;
	public static readonly RULE_statementInner = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_noInExecStatement = 4;
	public static readonly RULE_leagalCommand = 5;
	public static readonly RULE_nameSpaceStatement = 6;
	public static readonly RULE_nameSpaceSettings = 7;
	public static readonly RULE_nameSpaceStatementInner = 8;
	public static readonly RULE_namespaceSetStatement = 9;
	public static readonly RULE_funcTagStatement = 10;
	public static readonly RULE_funcTagSettings = 11;
	public static readonly RULE_funcTagStatementInner = 12;
	public static readonly RULE_funcStatement = 13;
	public static readonly RULE_funcImproveStatement = 14;
	public static readonly RULE_funcImproveParam = 15;
	public static readonly RULE_funcImproveStatementInner = 16;
	public static readonly RULE_yeildStatement = 17;
	public static readonly RULE_funcRunStatement = 18;
	public static readonly RULE_funcImproveRunStatement = 19;
	public static readonly RULE_funcImproveRunExpression = 20;
	public static readonly RULE_funcImproveRunParam = 21;
	public static readonly RULE_execStatement = 22;
	public static readonly RULE_execStoreChild = 23;
	public static readonly RULE_execRunChild = 24;
	public static readonly RULE_execChild = 25;
	public static readonly RULE_matchPart = 26;
	public static readonly RULE_scbCompareNumber = 27;
	public static readonly RULE_dataIdentifier = 28;
	public static readonly RULE_dataStorageIdentifier = 29;
	public static readonly RULE_dataEntityIdentifier = 30;
	public static readonly RULE_dataBlockIdentifier = 31;
	public static readonly RULE_dataMergeExpression = 32;
	public static readonly RULE_dataOperationExpression = 33;
	public static readonly RULE_dataRightValue = 34;
	public static readonly RULE_dataStatement = 35;
	public static readonly RULE_scbOperationExpression = 36;
	public static readonly RULE_scbSingleOperationExpression = 37;
	public static readonly RULE_scbCoreIdentifier = 38;
	public static readonly RULE_scbIdentifier = 39;
	public static readonly RULE_scbPlayerStatement = 40;
	public static readonly RULE_scbPlayerStatementInner = 41;
	public static readonly RULE_scbObjectiveStatement = 42;
	public static readonly RULE_scbStatementInner = 43;
	public static readonly RULE_bossbarStatement = 44;
	public static readonly RULE_bossbarStatementInner = 45;
	public static readonly RULE_bossbarOperationExpression = 46;
	public static readonly RULE_bossbarIdentifier = 47;
	public static readonly RULE_titleStatement = 48;
	public static readonly RULE_titleStatementInner = 49;
	public static readonly RULE_titleSelectorStatementInner = 50;
	public static readonly RULE_titleIndependentStatementInner = 51;
	public static readonly RULE_displayStatement = 52;
	public static readonly RULE_displayStatementInner = 53;
	public static readonly RULE_displayIndependentStatementInner = 54;
	public static readonly RULE_itemStatement = 55;
	public static readonly RULE_lootStatement = 56;
	public static readonly RULE_lootStatementInner = 57;
	public static readonly RULE_lootSelectorStatementInner = 58;
	public static readonly RULE_lootIndependentStatementInnerGive = 59;
	public static readonly RULE_lootIndependentStatementInnerReplaceEntity = 60;
	public static readonly RULE_lootSource = 61;
	public static readonly RULE_itemStatementInner = 62;
	public static readonly RULE_itemSelectorStatementInner = 63;
	public static readonly RULE_itemIndependentStatementInner = 64;
	public static readonly RULE_giveAndClearIndependentStatementInner = 65;
	public static readonly RULE_attrStatement = 66;
	public static readonly RULE_attrStatementInner = 67;
	public static readonly RULE_attrIndependentStatementInner = 68;
	public static readonly RULE_entityStatement = 69;
	public static readonly RULE_playerName = 70;
	public static readonly RULE_entityDeclareStatementInner = 71;
	public static readonly RULE_tagIndependentStatementInner = 72;
	public static readonly RULE_effectIndependentStatementInner = 73;
	public static readonly RULE_tpIndependentStatementInner = 74;
	public static readonly RULE_entityIndependentStatementInner = 75;
	public static readonly RULE_entityStatementInner = 76;
	public static readonly RULE_entityExpression = 77;
	public static readonly RULE_blockStatement = 78;
	public static readonly RULE_blockStatementInner = 79;
	public static readonly RULE_interfaceStatement = 80;
	public static readonly RULE_dataAssignExistExpression = 81;
	public static readonly RULE_existExpression = 82;
	public static readonly RULE_ifStatement = 83;
	public static readonly RULE_ifElseStatement = 84;
	public static readonly RULE_whileStatement = 85;
	public static readonly RULE_forStatement = 86;
	public static readonly RULE_nbt = 87;
	public static readonly RULE_json = 88;
	public static readonly RULE_nbtPathWithoutCompound = 89;
	public static readonly RULE_nbtPath = 90;
	public static readonly RULE_snbtValue = 91;
	public static readonly RULE_snbt = 92;
	public static readonly RULE_nbtCompound = 93;
	public static readonly RULE_nbtPair = 94;
	public static readonly RULE_nbtList = 95;
	public static readonly RULE_nbtValue = 96;
	public static readonly RULE_nbtByteArr = 97;
	public static readonly RULE_nbtIntArr = 98;
	public static readonly RULE_nbtLongArr = 99;
	public static readonly RULE_nbtString = 100;
	public static readonly RULE_jsonTextValue = 101;
	public static readonly RULE_jsonText = 102;
	public static readonly RULE_jsonObj = 103;
	public static readonly RULE_jsonPair = 104;
	public static readonly RULE_jsonArr = 105;
	public static readonly RULE_jsonValue = 106;
	public static readonly RULE_boolValue = 107;
	public static readonly RULE_number = 108;
	public static readonly RULE_key = 109;
	public static readonly RULE_pos3Identifier = 110;
	public static readonly RULE_pos2Identifier = 111;
	public static readonly RULE_pos5Identifier = 112;
	public static readonly RULE_pos1 = 113;
	public static readonly RULE_blockIdentifier = 114;
	public static readonly RULE_blockstate = 115;
	public static readonly RULE_selector = 116;
	public static readonly RULE_nameSpace = 117;
	public static readonly RULE_nameSpaceBlock = 118;
	public static readonly RULE_nameSpaceFunc = 119;
	public static readonly RULE_nameSpaceStorage = 120;
	public static readonly RULE_nameSpaceBossbar = 121;
	public static readonly RULE_nameSpaceBiome = 122;
	public static readonly RULE_nameSpaceDim = 123;
	public static readonly RULE_nameSpacePredicate = 124;
	public static readonly RULE_nameSpaceItem = 125;
	public static readonly RULE_nameSpaceEntity = 126;
	public static readonly RULE_nameSpaceLoot = 127;
	public static readonly RULE_nameSpaceItemModifier = 128;
	public static readonly RULE_tagNameSpace = 129;
	public static readonly RULE_tagNameSpaceItem = 130;
	public static readonly RULE_tagNameSpaceBlock = 131;
	public static readonly RULE_tagNameSpaceFunc = 132;
	public static readonly RULE_tagNameSpaceEntity = 133;
	public static readonly RULE_registerName = 134;
	public static readonly RULE_numberType = 135;
	public static readonly RULE_acceptableName = 136;
	public static readonly RULE_criterion = 137;
	public static readonly RULE_nbtName = 138;
	public static readonly RULE_resourceLocation = 139;
	public static readonly RULE_typeName = 140;
	public static readonly RULE_item_slot = 141;
	public static readonly RULE_string = 142;
	public static readonly RULE_item_predicate = 143;
	public static readonly RULE_block_predicate = 144;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"mcfFile", "fileStatementInner", "statementInner", "statement", "noInExecStatement", 
		"leagalCommand", "nameSpaceStatement", "nameSpaceSettings", "nameSpaceStatementInner", 
		"namespaceSetStatement", "funcTagStatement", "funcTagSettings", "funcTagStatementInner", 
		"funcStatement", "funcImproveStatement", "funcImproveParam", "funcImproveStatementInner", 
		"yeildStatement", "funcRunStatement", "funcImproveRunStatement", "funcImproveRunExpression", 
		"funcImproveRunParam", "execStatement", "execStoreChild", "execRunChild", 
		"execChild", "matchPart", "scbCompareNumber", "dataIdentifier", "dataStorageIdentifier", 
		"dataEntityIdentifier", "dataBlockIdentifier", "dataMergeExpression", 
		"dataOperationExpression", "dataRightValue", "dataStatement", "scbOperationExpression", 
		"scbSingleOperationExpression", "scbCoreIdentifier", "scbIdentifier", 
		"scbPlayerStatement", "scbPlayerStatementInner", "scbObjectiveStatement", 
		"scbStatementInner", "bossbarStatement", "bossbarStatementInner", "bossbarOperationExpression", 
		"bossbarIdentifier", "titleStatement", "titleStatementInner", "titleSelectorStatementInner", 
		"titleIndependentStatementInner", "displayStatement", "displayStatementInner", 
		"displayIndependentStatementInner", "itemStatement", "lootStatement", 
		"lootStatementInner", "lootSelectorStatementInner", "lootIndependentStatementInnerGive", 
		"lootIndependentStatementInnerReplaceEntity", "lootSource", "itemStatementInner", 
		"itemSelectorStatementInner", "itemIndependentStatementInner", "giveAndClearIndependentStatementInner", 
		"attrStatement", "attrStatementInner", "attrIndependentStatementInner", 
		"entityStatement", "playerName", "entityDeclareStatementInner", "tagIndependentStatementInner", 
		"effectIndependentStatementInner", "tpIndependentStatementInner", "entityIndependentStatementInner", 
		"entityStatementInner", "entityExpression", "blockStatement", "blockStatementInner", 
		"interfaceStatement", "dataAssignExistExpression", "existExpression", 
		"ifStatement", "ifElseStatement", "whileStatement", "forStatement", "nbt", 
		"json", "nbtPathWithoutCompound", "nbtPath", "snbtValue", "snbt", "nbtCompound", 
		"nbtPair", "nbtList", "nbtValue", "nbtByteArr", "nbtIntArr", "nbtLongArr", 
		"nbtString", "jsonTextValue", "jsonText", "jsonObj", "jsonPair", "jsonArr", 
		"jsonValue", "boolValue", "number", "key", "pos3Identifier", "pos2Identifier", 
		"pos5Identifier", "pos1", "blockIdentifier", "blockstate", "selector", 
		"nameSpace", "nameSpaceBlock", "nameSpaceFunc", "nameSpaceStorage", "nameSpaceBossbar", 
		"nameSpaceBiome", "nameSpaceDim", "nameSpacePredicate", "nameSpaceItem", 
		"nameSpaceEntity", "nameSpaceLoot", "nameSpaceItemModifier", "tagNameSpace", 
		"tagNameSpaceItem", "tagNameSpaceBlock", "tagNameSpaceFunc", "tagNameSpaceEntity", 
		"registerName", "numberType", "acceptableName", "criterion", "nbtName", 
		"resourceLocation", "typeName", "item_slot", "string", "item_predicate", 
		"block_predicate",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'->'", "'['", "','", "']'", "'{'", "'}'", "'='", "'('", "')'", 
		"'=>'", "'?=>'", "'?'", "'*'", "'..'", "'::'", "'|='", "'..0'", "'+='", 
		"'-='", "'*='", "'/='", "'%='", "'><'", "'<<'", "'>>'", "':='", "'/'", 
		"'%'", "'+'", "'-'", "':'", "'.'", "'*+'", "'#'", "'!'", "'&'", "'|'", 
		"'&&'", "'||'", "'[]'", "'n{'", "'n['", "'n[B;'", "'n[I;'", "'n[L;'", 
		"'[B;'", "'[I;'", "'[L;'", "'j{'", "'j['", "'@'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'true'", "'false'", 
		"'null'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'namsp'", "'namespace'", "'local'", "'exec'", "'run'", 
		"'store'", "'align'", "'anchored'", "'eyes'", "'feet'", "'in'", "'as'", 
		"'at'", "'facing'", "'positioned'", "'pos'", "'rotated'", "'rot'", "'if'", 
		"'unless'", "'all'", "'masked'", "'biome'", "'value'", "'max'", "'entity'", 
		"'score'", "'predicate'", "'block'", "'blocks'", "'matches'", "'result'", 
		"'successs'", "'scb'", "'displayname'", "'rendertype'", "'display'", "'enable'", 
		"'list'", "'hearts'", "'integer'", "'data'", "'storage'", "'reset'", "'add'", 
		"'remove'", "'func'", "'tagged'", "'default'", "'player'", "'players'", 
		"'bossbar'", "'visible'", "'blue'", "'green'", "'pink'", "'purple'", "'red'", 
		"'white'", "'yellow'", "'color'", "'name'", "'style'", "'notched_6'", 
		"'notched_10'", "'notched_12'", "'notched_20'", "'progress'", "'set'", 
		"'title'", "'subtitle'", "'actionbar'", "'times'", "'text'", "'item'", 
		"'loot'", "'give'", "'clear'", "'fish'", "'kill'", "'mine'", "'mainhand'", 
		"'offhand'", "'effect'", "'tag'", "'tp'", "'get'", "'attr'", "'base'", 
		"'destroy'", "'keep'", "'replace'", "'hollow'", "'outline'", "'force'", 
		"'move'", "'normal'", "'filtered'", "'interface'", "'while'", "'else'", 
		"'for'", "'yeild'", "'break'", "'return'", "'replaced'", "'dim'", "'dimension'", 
		"'item_modifier'", undefined, undefined, "'byte'", "'short'", "'int'", 
		"'long'", "'float'", "'double'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "CompareOperation", "ByteNumber", "ShortNumber", 
		"LongNumber", "FloatNumber", "DoubleNumber", "STRING2", "TRUE", "FALSE", 
		"NULL", "STRING", "UUID16_", "NUMBER_INT", "NUMBER", "WS", "LeagalCommand", 
		"LineComment", "BlockComment", "NAMSP", "NAMESPACE", "LOCAL", "EXEC", 
		"RUN", "STORE", "ALIGN", "ANCHORED", "EYES", "FEET", "IN", "AS", "AT", 
		"FACING", "POSITIONED", "POS", "ROTATED", "ROT", "IF", "UNLESS", "ALL", 
		"MASKED", "BIOME", "VALUE", "MAX", "ENTITY", "SCORE", "PREDICATE", "BLOCK", 
		"BLOCKS", "MATCHES", "RESULT", "SUCCESS", "SCB", "DISPLAYNAME", "RENDERTYPE", 
		"DISPLAY", "ENABLE", "LIST", "HEARTS", "INTEGER", "DATA", "STORAGE", "RESET", 
		"ADD", "REMOVE", "FUNC", "TAGGED", "DEFAULT", "PLAYER", "PLAYERS", "BOSSBAR", 
		"VISIBLE", "BLUE", "GREEN", "PINK", "PURPLE", "RED", "WHITE", "YELLOW", 
		"COLOR", "NAME", "STYLE", "NOTCHED_6", "NOTCHED_10", "NOTCHED_12", "NOTCHED_20", 
		"PROGRESS", "SET", "TITLE", "SUBTITLE", "ACTIONBAR", "TIMES", "TEXT", 
		"ITEM", "LOOT", "GIVE", "CLEAR", "FISH", "KILL", "MINE", "MAINHAND", "OFFHAND", 
		"EFFECT", "TAG", "TP", "GET", "ATTR", "BASE", "DESTROY", "KEEP", "REPLACE", 
		"HOLLOW", "OUTLINE", "FORCE", "MOVE", "NORMAL", "FILTERED", "INTERFACE", 
		"WHILE", "ELSE", "FOR", "YEILD", "BREAK", "RETURN", "REPLACED", "DIM", 
		"DIMENSION", "ITEM_MODIFIER", "Pos1", "Selector", "BYTE", "SHORT", "INT_", 
		"LONG", "FLOAT", "DOUBLE", "AcceptableName", "NBTName",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JustMCFParser._LITERAL_NAMES, JustMCFParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JustMCFParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JustMCF.g4"; }

	// @Override
	public get ruleNames(): string[] { return JustMCFParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JustMCFParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JustMCFParser._ATN, this);
	}
	// @RuleVersion(0)
	public mcfFile(): McfFileContext {
		let _localctx: McfFileContext = new McfFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JustMCFParser.RULE_mcfFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.NAMSP || _la === JustMCFParser.NAMESPACE || _la === JustMCFParser.FUNC || _la === JustMCFParser.INTERFACE) {
				{
				{
				this.state = 290;
				this.fileStatementInner();
				}
				}
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fileStatementInner(): FileStatementInnerContext {
		let _localctx: FileStatementInnerContext = new FileStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JustMCFParser.RULE_fileStatementInner);
		try {
			this.state = 298;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 296;
				this.nameSpaceStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 297;
				this.nameSpaceStatementInner();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementInner(): StatementInnerContext {
		let _localctx: StatementInnerContext = new StatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JustMCFParser.RULE_statementInner);
		try {
			this.state = 302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 300;
				this.noInExecStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 301;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JustMCFParser.RULE_statement);
		try {
			this.state = 327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 304;
				this.ifStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 305;
				this.forStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 306;
				this.whileStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 307;
				this.namespaceSetStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 308;
				this.funcRunStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 309;
				this.funcImproveRunStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 310;
				this.execStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 311;
				this.dataStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 312;
				this.scbPlayerStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 313;
				this.scbObjectiveStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 314;
				this.titleStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 315;
				this.displayStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 316;
				this.lootStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 317;
				this.itemStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 318;
				this.attrStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 319;
				this.entityStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 320;
				this.blockStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 321;
				this.dataOperationExpression();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 322;
				this.dataAssignExistExpression();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 323;
				this.scbOperationExpression();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 324;
				this.bossbarOperationExpression();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 325;
				this.entityExpression();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 326;
				this.leagalCommand();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public noInExecStatement(): NoInExecStatementContext {
		let _localctx: NoInExecStatementContext = new NoInExecStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JustMCFParser.RULE_noInExecStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 340;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				_localctx = new NoInExecStatementFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 329;
				this.funcStatement();
				}
				break;

			case 2:
				_localctx = new NoInExecStatementRunFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 330;
				(_localctx as NoInExecStatementRunFuncContext)._left = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__0 || _la === JustMCFParser.RUN)) {
					(_localctx as NoInExecStatementRunFuncContext)._left = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 331;
				this.funcStatement();
				}
				break;

			case 3:
				_localctx = new NoInExecStatementFuncImproveContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 332;
				this.funcImproveStatement();
				}
				break;

			case 4:
				_localctx = new NoInExecStatementInterfaceContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 333;
				this.interfaceStatement();
				}
				break;

			case 5:
				_localctx = new NoInExecStatementStoreContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 334;
				this.statement();
				this.state = 336;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 335;
						this.execStoreChild();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 338;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public leagalCommand(): LeagalCommandContext {
		let _localctx: LeagalCommandContext = new LeagalCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JustMCFParser.RULE_leagalCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.match(JustMCFParser.LeagalCommand);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceStatement(): NameSpaceStatementContext {
		let _localctx: NameSpaceStatementContext = new NameSpaceStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JustMCFParser.RULE_nameSpaceStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			_la = this._input.LA(1);
			if (!(_la === JustMCFParser.NAMSP || _la === JustMCFParser.NAMESPACE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
				{
				this.state = 345;
				this.acceptableName();
				}
			}

			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__1) {
				{
				this.state = 348;
				this.match(JustMCFParser.T__1);
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (JustMCFParser.BIOME - 92)) | (1 << (JustMCFParser.ENTITY - 92)) | (1 << (JustMCFParser.PREDICATE - 92)) | (1 << (JustMCFParser.BLOCK - 92)) | (1 << (JustMCFParser.STORAGE - 92)) | (1 << (JustMCFParser.FUNC - 92)) | (1 << (JustMCFParser.DEFAULT - 92)) | (1 << (JustMCFParser.BOSSBAR - 92)))) !== 0) || _la === JustMCFParser.ITEM || _la === JustMCFParser.LOOT || ((((_la - 176)) & ~0x1F) === 0 && ((1 << (_la - 176)) & ((1 << (JustMCFParser.DIM - 176)) | (1 << (JustMCFParser.DIMENSION - 176)) | (1 << (JustMCFParser.ITEM_MODIFIER - 176)))) !== 0)) {
					{
					{
					this.state = 349;
					this.nameSpaceSettings();
					this.state = 351;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__2) {
						{
						this.state = 350;
						this.match(JustMCFParser.T__2);
						}
					}

					}
					}
					this.state = 357;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 358;
				this.match(JustMCFParser.T__3);
				}
			}

			this.state = 361;
			this.match(JustMCFParser.T__4);
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.NAMSP || _la === JustMCFParser.NAMESPACE || _la === JustMCFParser.FUNC || _la === JustMCFParser.INTERFACE) {
				{
				{
				this.state = 362;
				this.nameSpaceStatementInner();
				}
				}
				this.state = 367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 368;
			this.match(JustMCFParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceSettings(): NameSpaceSettingsContext {
		let _localctx: NameSpaceSettingsContext = new NameSpaceSettingsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JustMCFParser.RULE_nameSpaceSettings);
		let _la: number;
		try {
			this.state = 407;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				_localctx = new NameSpaceSettingsFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 370;
				(_localctx as NameSpaceSettingsFuncContext)._type = this.match(JustMCFParser.FUNC);
				this.state = 371;
				this.match(JustMCFParser.T__6);
				this.state = 372;
				this.acceptableName();
				}
				break;

			case 2:
				_localctx = new NameSpaceSettingsBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 373;
				(_localctx as NameSpaceSettingsBlockContext)._type = this.match(JustMCFParser.BLOCK);
				this.state = 374;
				this.match(JustMCFParser.T__6);
				this.state = 375;
				this.acceptableName();
				}
				break;

			case 3:
				_localctx = new NameSpaceSettingsStorageContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 376;
				(_localctx as NameSpaceSettingsStorageContext)._type = this.match(JustMCFParser.STORAGE);
				this.state = 377;
				this.match(JustMCFParser.T__6);
				this.state = 378;
				this.acceptableName();
				}
				break;

			case 4:
				_localctx = new NameSpaceSettingsBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 379;
				(_localctx as NameSpaceSettingsBossbarContext)._type = this.match(JustMCFParser.BOSSBAR);
				this.state = 380;
				this.match(JustMCFParser.T__6);
				this.state = 381;
				this.acceptableName();
				}
				break;

			case 5:
				_localctx = new NameSpaceSettingsBiomeContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 382;
				(_localctx as NameSpaceSettingsBiomeContext)._type = this.match(JustMCFParser.BIOME);
				this.state = 383;
				this.match(JustMCFParser.T__6);
				this.state = 384;
				this.acceptableName();
				}
				break;

			case 6:
				_localctx = new NameSpaceSettingsEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 385;
				(_localctx as NameSpaceSettingsEntityContext)._type = this.match(JustMCFParser.ENTITY);
				this.state = 386;
				this.match(JustMCFParser.T__6);
				this.state = 387;
				this.acceptableName();
				}
				break;

			case 7:
				_localctx = new NameSpaceSettingsPredicateContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 388;
				(_localctx as NameSpaceSettingsPredicateContext)._type = this.match(JustMCFParser.PREDICATE);
				this.state = 389;
				this.match(JustMCFParser.T__6);
				this.state = 390;
				this.acceptableName();
				}
				break;

			case 8:
				_localctx = new NameSpaceSettingsDimContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 391;
				(_localctx as NameSpaceSettingsDimContext)._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.DIM || _la === JustMCFParser.DIMENSION)) {
					(_localctx as NameSpaceSettingsDimContext)._type = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 392;
				this.match(JustMCFParser.T__6);
				this.state = 393;
				this.acceptableName();
				}
				break;

			case 9:
				_localctx = new NameSpaceSettingsItemContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 394;
				(_localctx as NameSpaceSettingsItemContext)._type = this.match(JustMCFParser.ITEM);
				this.state = 395;
				this.match(JustMCFParser.T__6);
				this.state = 396;
				this.acceptableName();
				}
				break;

			case 10:
				_localctx = new NameSpaceSettingsLootContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 397;
				(_localctx as NameSpaceSettingsLootContext)._type = this.match(JustMCFParser.LOOT);
				this.state = 398;
				this.match(JustMCFParser.T__6);
				this.state = 399;
				this.acceptableName();
				}
				break;

			case 11:
				_localctx = new NameSpaceSettingsItemModifierContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 400;
				(_localctx as NameSpaceSettingsItemModifierContext)._type = this.match(JustMCFParser.ITEM_MODIFIER);
				this.state = 401;
				this.match(JustMCFParser.T__6);
				this.state = 402;
				this.acceptableName();
				}
				break;

			case 12:
				_localctx = new NameSpaceSettingsDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 403;
				(_localctx as NameSpaceSettingsDefaultContext)._type = this.match(JustMCFParser.DEFAULT);
				this.state = 404;
				this.match(JustMCFParser.T__6);
				this.state = 405;
				this.acceptableName();
				}
				break;

			case 13:
				_localctx = new NameSpaceSettingsJustDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 406;
				(_localctx as NameSpaceSettingsJustDefaultContext)._type = this.match(JustMCFParser.DEFAULT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceStatementInner(): NameSpaceStatementInnerContext {
		let _localctx: NameSpaceStatementInnerContext = new NameSpaceStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JustMCFParser.RULE_nameSpaceStatementInner);
		try {
			this.state = 413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 409;
				this.funcTagStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 410;
				this.funcTagStatementInner();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 411;
				this.interfaceStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 412;
				this.nameSpaceStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceSetStatement(): NamespaceSetStatementContext {
		let _localctx: NamespaceSetStatementContext = new NamespaceSetStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JustMCFParser.RULE_namespaceSetStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			_la = this._input.LA(1);
			if (!(_la === JustMCFParser.NAMSP || _la === JustMCFParser.NAMESPACE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
				{
				this.state = 416;
				this.acceptableName();
				}
			}

			this.state = 430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__1) {
				{
				this.state = 419;
				this.match(JustMCFParser.T__1);
				this.state = 426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (JustMCFParser.BIOME - 92)) | (1 << (JustMCFParser.ENTITY - 92)) | (1 << (JustMCFParser.PREDICATE - 92)) | (1 << (JustMCFParser.BLOCK - 92)) | (1 << (JustMCFParser.STORAGE - 92)) | (1 << (JustMCFParser.FUNC - 92)) | (1 << (JustMCFParser.DEFAULT - 92)) | (1 << (JustMCFParser.BOSSBAR - 92)))) !== 0) || _la === JustMCFParser.ITEM || _la === JustMCFParser.LOOT || ((((_la - 176)) & ~0x1F) === 0 && ((1 << (_la - 176)) & ((1 << (JustMCFParser.DIM - 176)) | (1 << (JustMCFParser.DIMENSION - 176)) | (1 << (JustMCFParser.ITEM_MODIFIER - 176)))) !== 0)) {
					{
					{
					this.state = 420;
					this.nameSpaceSettings();
					this.state = 422;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__2) {
						{
						this.state = 421;
						this.match(JustMCFParser.T__2);
						}
					}

					}
					}
					this.state = 428;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 429;
				this.match(JustMCFParser.T__3);
				}
			}

			this.state = 432;
			this.match(JustMCFParser.T__4);
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__0 || _la === JustMCFParser.T__4 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__50 - 34)) | (1 << (JustMCFParser.NUMBER_INT - 34)) | (1 << (JustMCFParser.NUMBER - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JustMCFParser.LeagalCommand - 67)) | (1 << (JustMCFParser.NAMSP - 67)) | (1 << (JustMCFParser.NAMESPACE - 67)) | (1 << (JustMCFParser.LOCAL - 67)) | (1 << (JustMCFParser.EXEC - 67)) | (1 << (JustMCFParser.RUN - 67)) | (1 << (JustMCFParser.STORE - 67)) | (1 << (JustMCFParser.ALIGN - 67)) | (1 << (JustMCFParser.ANCHORED - 67)) | (1 << (JustMCFParser.EYES - 67)) | (1 << (JustMCFParser.FEET - 67)) | (1 << (JustMCFParser.IN - 67)) | (1 << (JustMCFParser.AS - 67)) | (1 << (JustMCFParser.AT - 67)) | (1 << (JustMCFParser.FACING - 67)) | (1 << (JustMCFParser.POSITIONED - 67)) | (1 << (JustMCFParser.POS - 67)) | (1 << (JustMCFParser.ROTATED - 67)) | (1 << (JustMCFParser.ROT - 67)) | (1 << (JustMCFParser.IF - 67)) | (1 << (JustMCFParser.UNLESS - 67)) | (1 << (JustMCFParser.ALL - 67)) | (1 << (JustMCFParser.MASKED - 67)) | (1 << (JustMCFParser.BIOME - 67)) | (1 << (JustMCFParser.VALUE - 67)) | (1 << (JustMCFParser.MAX - 67)) | (1 << (JustMCFParser.ENTITY - 67)) | (1 << (JustMCFParser.SCORE - 67)) | (1 << (JustMCFParser.PREDICATE - 67)) | (1 << (JustMCFParser.BLOCK - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (JustMCFParser.BLOCKS - 99)) | (1 << (JustMCFParser.SCB - 99)) | (1 << (JustMCFParser.DISPLAYNAME - 99)) | (1 << (JustMCFParser.RENDERTYPE - 99)) | (1 << (JustMCFParser.DISPLAY - 99)) | (1 << (JustMCFParser.ENABLE - 99)) | (1 << (JustMCFParser.LIST - 99)) | (1 << (JustMCFParser.DATA - 99)) | (1 << (JustMCFParser.STORAGE - 99)) | (1 << (JustMCFParser.RESET - 99)) | (1 << (JustMCFParser.ADD - 99)) | (1 << (JustMCFParser.REMOVE - 99)) | (1 << (JustMCFParser.FUNC - 99)) | (1 << (JustMCFParser.TAGGED - 99)) | (1 << (JustMCFParser.DEFAULT - 99)) | (1 << (JustMCFParser.PLAYER - 99)) | (1 << (JustMCFParser.PLAYERS - 99)) | (1 << (JustMCFParser.BOSSBAR - 99)) | (1 << (JustMCFParser.VISIBLE - 99)) | (1 << (JustMCFParser.BLUE - 99)) | (1 << (JustMCFParser.GREEN - 99)) | (1 << (JustMCFParser.PINK - 99)) | (1 << (JustMCFParser.PURPLE - 99)) | (1 << (JustMCFParser.RED - 99)) | (1 << (JustMCFParser.WHITE - 99)) | (1 << (JustMCFParser.YELLOW - 99)) | (1 << (JustMCFParser.COLOR - 99)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (JustMCFParser.NAME - 131)) | (1 << (JustMCFParser.STYLE - 131)) | (1 << (JustMCFParser.NOTCHED_6 - 131)) | (1 << (JustMCFParser.NOTCHED_10 - 131)) | (1 << (JustMCFParser.NOTCHED_12 - 131)) | (1 << (JustMCFParser.NOTCHED_20 - 131)) | (1 << (JustMCFParser.PROGRESS - 131)) | (1 << (JustMCFParser.SET - 131)) | (1 << (JustMCFParser.TITLE - 131)) | (1 << (JustMCFParser.SUBTITLE - 131)) | (1 << (JustMCFParser.ACTIONBAR - 131)) | (1 << (JustMCFParser.TIMES - 131)) | (1 << (JustMCFParser.TEXT - 131)) | (1 << (JustMCFParser.ITEM - 131)) | (1 << (JustMCFParser.LOOT - 131)) | (1 << (JustMCFParser.GIVE - 131)) | (1 << (JustMCFParser.CLEAR - 131)) | (1 << (JustMCFParser.FISH - 131)) | (1 << (JustMCFParser.KILL - 131)) | (1 << (JustMCFParser.MINE - 131)) | (1 << (JustMCFParser.MAINHAND - 131)) | (1 << (JustMCFParser.OFFHAND - 131)) | (1 << (JustMCFParser.EFFECT - 131)) | (1 << (JustMCFParser.TAG - 131)) | (1 << (JustMCFParser.TP - 131)) | (1 << (JustMCFParser.GET - 131)) | (1 << (JustMCFParser.ATTR - 131)) | (1 << (JustMCFParser.BASE - 131)) | (1 << (JustMCFParser.DESTROY - 131)) | (1 << (JustMCFParser.KEEP - 131)) | (1 << (JustMCFParser.REPLACE - 131)) | (1 << (JustMCFParser.HOLLOW - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (JustMCFParser.OUTLINE - 163)) | (1 << (JustMCFParser.FORCE - 163)) | (1 << (JustMCFParser.MOVE - 163)) | (1 << (JustMCFParser.NORMAL - 163)) | (1 << (JustMCFParser.FILTERED - 163)) | (1 << (JustMCFParser.INTERFACE - 163)) | (1 << (JustMCFParser.WHILE - 163)) | (1 << (JustMCFParser.FOR - 163)) | (1 << (JustMCFParser.YEILD - 163)) | (1 << (JustMCFParser.BREAK - 163)) | (1 << (JustMCFParser.RETURN - 163)) | (1 << (JustMCFParser.REPLACED - 163)) | (1 << (JustMCFParser.DIM - 163)) | (1 << (JustMCFParser.DIMENSION - 163)) | (1 << (JustMCFParser.ITEM_MODIFIER - 163)) | (1 << (JustMCFParser.Pos1 - 163)) | (1 << (JustMCFParser.Selector - 163)) | (1 << (JustMCFParser.BYTE - 163)) | (1 << (JustMCFParser.SHORT - 163)) | (1 << (JustMCFParser.INT_ - 163)) | (1 << (JustMCFParser.LONG - 163)) | (1 << (JustMCFParser.FLOAT - 163)) | (1 << (JustMCFParser.DOUBLE - 163)) | (1 << (JustMCFParser.AcceptableName - 163)) | (1 << (JustMCFParser.NBTName - 163)))) !== 0)) {
				{
				{
				this.state = 433;
				this.statementInner();
				}
				}
				this.state = 438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 439;
			this.match(JustMCFParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcTagStatement(): FuncTagStatementContext {
		let _localctx: FuncTagStatementContext = new FuncTagStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JustMCFParser.RULE_funcTagStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.match(JustMCFParser.FUNC);
			this.state = 442;
			this.tagNameSpaceFunc();
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__1) {
				{
				this.state = 443;
				this.match(JustMCFParser.T__1);
				this.state = 450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.REPLACE || _la === JustMCFParser.REPLACED) {
					{
					{
					this.state = 444;
					this.funcTagSettings();
					this.state = 446;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__2) {
						{
						this.state = 445;
						this.match(JustMCFParser.T__2);
						}
					}

					}
					}
					this.state = 452;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 453;
				this.match(JustMCFParser.T__3);
				}
			}

			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.TAGGED) {
				{
				this.state = 456;
				this.match(JustMCFParser.TAGGED);
				this.state = 457;
				this.tagNameSpaceFunc();
				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 458;
					this.match(JustMCFParser.T__2);
					this.state = 459;
					this.tagNameSpaceFunc();
					}
					}
					this.state = 464;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 467;
			this.match(JustMCFParser.T__4);
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.FUNC) {
				{
				{
				this.state = 468;
				this.funcTagStatementInner();
				}
				}
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 474;
			this.match(JustMCFParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcTagSettings(): FuncTagSettingsContext {
		let _localctx: FuncTagSettingsContext = new FuncTagSettingsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JustMCFParser.RULE_funcTagSettings);
		try {
			this.state = 480;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.REPLACE:
				_localctx = new FuncTagSettingsReplaceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 476;
				this.match(JustMCFParser.REPLACE);
				this.state = 477;
				this.match(JustMCFParser.T__6);
				this.state = 478;
				this.boolValue();
				}
				break;
			case JustMCFParser.REPLACED:
				_localctx = new FuncTagSettingsReplacedContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 479;
				this.match(JustMCFParser.REPLACED);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcTagStatementInner(): FuncTagStatementInnerContext {
		let _localctx: FuncTagStatementInnerContext = new FuncTagStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JustMCFParser.RULE_funcTagStatementInner);
		try {
			this.state = 486;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				_localctx = new FuncTagSIFuncSContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 482;
				this.funcStatement();
				}
				break;

			case 2:
				_localctx = new FuncTagSIFuncRunSContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 483;
				this.funcRunStatement();
				}
				break;

			case 3:
				_localctx = new FuncTagSIFuncImproveSContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 484;
				this.funcImproveStatement();
				}
				break;

			case 4:
				_localctx = new FuncTagSIFuncTagSContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 485;
				this.funcTagStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcStatement(): FuncStatementContext {
		let _localctx: FuncStatementContext = new FuncStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JustMCFParser.RULE_funcStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this.match(JustMCFParser.FUNC);
			this.state = 489;
			this.nameSpaceFunc();
			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.TAGGED) {
				{
				this.state = 490;
				this.match(JustMCFParser.TAGGED);
				this.state = 491;
				this.tagNameSpaceFunc();
				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 492;
					this.match(JustMCFParser.T__2);
					this.state = 493;
					this.tagNameSpaceFunc();
					}
					}
					this.state = 498;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 501;
			this.match(JustMCFParser.T__4);
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__0 || _la === JustMCFParser.T__4 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__50 - 34)) | (1 << (JustMCFParser.NUMBER_INT - 34)) | (1 << (JustMCFParser.NUMBER - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JustMCFParser.LeagalCommand - 67)) | (1 << (JustMCFParser.NAMSP - 67)) | (1 << (JustMCFParser.NAMESPACE - 67)) | (1 << (JustMCFParser.LOCAL - 67)) | (1 << (JustMCFParser.EXEC - 67)) | (1 << (JustMCFParser.RUN - 67)) | (1 << (JustMCFParser.STORE - 67)) | (1 << (JustMCFParser.ALIGN - 67)) | (1 << (JustMCFParser.ANCHORED - 67)) | (1 << (JustMCFParser.EYES - 67)) | (1 << (JustMCFParser.FEET - 67)) | (1 << (JustMCFParser.IN - 67)) | (1 << (JustMCFParser.AS - 67)) | (1 << (JustMCFParser.AT - 67)) | (1 << (JustMCFParser.FACING - 67)) | (1 << (JustMCFParser.POSITIONED - 67)) | (1 << (JustMCFParser.POS - 67)) | (1 << (JustMCFParser.ROTATED - 67)) | (1 << (JustMCFParser.ROT - 67)) | (1 << (JustMCFParser.IF - 67)) | (1 << (JustMCFParser.UNLESS - 67)) | (1 << (JustMCFParser.ALL - 67)) | (1 << (JustMCFParser.MASKED - 67)) | (1 << (JustMCFParser.BIOME - 67)) | (1 << (JustMCFParser.VALUE - 67)) | (1 << (JustMCFParser.MAX - 67)) | (1 << (JustMCFParser.ENTITY - 67)) | (1 << (JustMCFParser.SCORE - 67)) | (1 << (JustMCFParser.PREDICATE - 67)) | (1 << (JustMCFParser.BLOCK - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (JustMCFParser.BLOCKS - 99)) | (1 << (JustMCFParser.SCB - 99)) | (1 << (JustMCFParser.DISPLAYNAME - 99)) | (1 << (JustMCFParser.RENDERTYPE - 99)) | (1 << (JustMCFParser.DISPLAY - 99)) | (1 << (JustMCFParser.ENABLE - 99)) | (1 << (JustMCFParser.LIST - 99)) | (1 << (JustMCFParser.DATA - 99)) | (1 << (JustMCFParser.STORAGE - 99)) | (1 << (JustMCFParser.RESET - 99)) | (1 << (JustMCFParser.ADD - 99)) | (1 << (JustMCFParser.REMOVE - 99)) | (1 << (JustMCFParser.FUNC - 99)) | (1 << (JustMCFParser.TAGGED - 99)) | (1 << (JustMCFParser.DEFAULT - 99)) | (1 << (JustMCFParser.PLAYER - 99)) | (1 << (JustMCFParser.PLAYERS - 99)) | (1 << (JustMCFParser.BOSSBAR - 99)) | (1 << (JustMCFParser.VISIBLE - 99)) | (1 << (JustMCFParser.BLUE - 99)) | (1 << (JustMCFParser.GREEN - 99)) | (1 << (JustMCFParser.PINK - 99)) | (1 << (JustMCFParser.PURPLE - 99)) | (1 << (JustMCFParser.RED - 99)) | (1 << (JustMCFParser.WHITE - 99)) | (1 << (JustMCFParser.YELLOW - 99)) | (1 << (JustMCFParser.COLOR - 99)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (JustMCFParser.NAME - 131)) | (1 << (JustMCFParser.STYLE - 131)) | (1 << (JustMCFParser.NOTCHED_6 - 131)) | (1 << (JustMCFParser.NOTCHED_10 - 131)) | (1 << (JustMCFParser.NOTCHED_12 - 131)) | (1 << (JustMCFParser.NOTCHED_20 - 131)) | (1 << (JustMCFParser.PROGRESS - 131)) | (1 << (JustMCFParser.SET - 131)) | (1 << (JustMCFParser.TITLE - 131)) | (1 << (JustMCFParser.SUBTITLE - 131)) | (1 << (JustMCFParser.ACTIONBAR - 131)) | (1 << (JustMCFParser.TIMES - 131)) | (1 << (JustMCFParser.TEXT - 131)) | (1 << (JustMCFParser.ITEM - 131)) | (1 << (JustMCFParser.LOOT - 131)) | (1 << (JustMCFParser.GIVE - 131)) | (1 << (JustMCFParser.CLEAR - 131)) | (1 << (JustMCFParser.FISH - 131)) | (1 << (JustMCFParser.KILL - 131)) | (1 << (JustMCFParser.MINE - 131)) | (1 << (JustMCFParser.MAINHAND - 131)) | (1 << (JustMCFParser.OFFHAND - 131)) | (1 << (JustMCFParser.EFFECT - 131)) | (1 << (JustMCFParser.TAG - 131)) | (1 << (JustMCFParser.TP - 131)) | (1 << (JustMCFParser.GET - 131)) | (1 << (JustMCFParser.ATTR - 131)) | (1 << (JustMCFParser.BASE - 131)) | (1 << (JustMCFParser.DESTROY - 131)) | (1 << (JustMCFParser.KEEP - 131)) | (1 << (JustMCFParser.REPLACE - 131)) | (1 << (JustMCFParser.HOLLOW - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (JustMCFParser.OUTLINE - 163)) | (1 << (JustMCFParser.FORCE - 163)) | (1 << (JustMCFParser.MOVE - 163)) | (1 << (JustMCFParser.NORMAL - 163)) | (1 << (JustMCFParser.FILTERED - 163)) | (1 << (JustMCFParser.INTERFACE - 163)) | (1 << (JustMCFParser.WHILE - 163)) | (1 << (JustMCFParser.FOR - 163)) | (1 << (JustMCFParser.YEILD - 163)) | (1 << (JustMCFParser.BREAK - 163)) | (1 << (JustMCFParser.RETURN - 163)) | (1 << (JustMCFParser.REPLACED - 163)) | (1 << (JustMCFParser.DIM - 163)) | (1 << (JustMCFParser.DIMENSION - 163)) | (1 << (JustMCFParser.ITEM_MODIFIER - 163)) | (1 << (JustMCFParser.Pos1 - 163)) | (1 << (JustMCFParser.Selector - 163)) | (1 << (JustMCFParser.BYTE - 163)) | (1 << (JustMCFParser.SHORT - 163)) | (1 << (JustMCFParser.INT_ - 163)) | (1 << (JustMCFParser.LONG - 163)) | (1 << (JustMCFParser.FLOAT - 163)) | (1 << (JustMCFParser.DOUBLE - 163)) | (1 << (JustMCFParser.AcceptableName - 163)) | (1 << (JustMCFParser.NBTName - 163)))) !== 0)) {
				{
				{
				this.state = 502;
				this.statementInner();
				}
				}
				this.state = 507;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 508;
			this.match(JustMCFParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcImproveStatement(): FuncImproveStatementContext {
		let _localctx: FuncImproveStatementContext = new FuncImproveStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, JustMCFParser.RULE_funcImproveStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this.match(JustMCFParser.FUNC);
			this.state = 511;
			this.nameSpaceFunc();
			this.state = 512;
			this.match(JustMCFParser.T__7);
			this.state = 513;
			this.funcImproveParam();
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 514;
				this.match(JustMCFParser.T__2);
				this.state = 515;
				this.funcImproveParam();
				}
				}
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 521;
			this.match(JustMCFParser.T__8);
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
				{
				this.state = 522;
				this.typeName();
				}
			}

			this.state = 525;
			this.match(JustMCFParser.T__4);
			this.state = 529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__0 || _la === JustMCFParser.T__4 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__50 - 34)) | (1 << (JustMCFParser.NUMBER_INT - 34)) | (1 << (JustMCFParser.NUMBER - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JustMCFParser.LeagalCommand - 67)) | (1 << (JustMCFParser.NAMSP - 67)) | (1 << (JustMCFParser.NAMESPACE - 67)) | (1 << (JustMCFParser.LOCAL - 67)) | (1 << (JustMCFParser.EXEC - 67)) | (1 << (JustMCFParser.RUN - 67)) | (1 << (JustMCFParser.STORE - 67)) | (1 << (JustMCFParser.ALIGN - 67)) | (1 << (JustMCFParser.ANCHORED - 67)) | (1 << (JustMCFParser.EYES - 67)) | (1 << (JustMCFParser.FEET - 67)) | (1 << (JustMCFParser.IN - 67)) | (1 << (JustMCFParser.AS - 67)) | (1 << (JustMCFParser.AT - 67)) | (1 << (JustMCFParser.FACING - 67)) | (1 << (JustMCFParser.POSITIONED - 67)) | (1 << (JustMCFParser.POS - 67)) | (1 << (JustMCFParser.ROTATED - 67)) | (1 << (JustMCFParser.ROT - 67)) | (1 << (JustMCFParser.IF - 67)) | (1 << (JustMCFParser.UNLESS - 67)) | (1 << (JustMCFParser.ALL - 67)) | (1 << (JustMCFParser.MASKED - 67)) | (1 << (JustMCFParser.BIOME - 67)) | (1 << (JustMCFParser.VALUE - 67)) | (1 << (JustMCFParser.MAX - 67)) | (1 << (JustMCFParser.ENTITY - 67)) | (1 << (JustMCFParser.SCORE - 67)) | (1 << (JustMCFParser.PREDICATE - 67)) | (1 << (JustMCFParser.BLOCK - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (JustMCFParser.BLOCKS - 99)) | (1 << (JustMCFParser.SCB - 99)) | (1 << (JustMCFParser.DISPLAYNAME - 99)) | (1 << (JustMCFParser.RENDERTYPE - 99)) | (1 << (JustMCFParser.DISPLAY - 99)) | (1 << (JustMCFParser.ENABLE - 99)) | (1 << (JustMCFParser.LIST - 99)) | (1 << (JustMCFParser.DATA - 99)) | (1 << (JustMCFParser.STORAGE - 99)) | (1 << (JustMCFParser.RESET - 99)) | (1 << (JustMCFParser.ADD - 99)) | (1 << (JustMCFParser.REMOVE - 99)) | (1 << (JustMCFParser.FUNC - 99)) | (1 << (JustMCFParser.TAGGED - 99)) | (1 << (JustMCFParser.DEFAULT - 99)) | (1 << (JustMCFParser.PLAYER - 99)) | (1 << (JustMCFParser.PLAYERS - 99)) | (1 << (JustMCFParser.BOSSBAR - 99)) | (1 << (JustMCFParser.VISIBLE - 99)) | (1 << (JustMCFParser.BLUE - 99)) | (1 << (JustMCFParser.GREEN - 99)) | (1 << (JustMCFParser.PINK - 99)) | (1 << (JustMCFParser.PURPLE - 99)) | (1 << (JustMCFParser.RED - 99)) | (1 << (JustMCFParser.WHITE - 99)) | (1 << (JustMCFParser.YELLOW - 99)) | (1 << (JustMCFParser.COLOR - 99)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (JustMCFParser.NAME - 131)) | (1 << (JustMCFParser.STYLE - 131)) | (1 << (JustMCFParser.NOTCHED_6 - 131)) | (1 << (JustMCFParser.NOTCHED_10 - 131)) | (1 << (JustMCFParser.NOTCHED_12 - 131)) | (1 << (JustMCFParser.NOTCHED_20 - 131)) | (1 << (JustMCFParser.PROGRESS - 131)) | (1 << (JustMCFParser.SET - 131)) | (1 << (JustMCFParser.TITLE - 131)) | (1 << (JustMCFParser.SUBTITLE - 131)) | (1 << (JustMCFParser.ACTIONBAR - 131)) | (1 << (JustMCFParser.TIMES - 131)) | (1 << (JustMCFParser.TEXT - 131)) | (1 << (JustMCFParser.ITEM - 131)) | (1 << (JustMCFParser.LOOT - 131)) | (1 << (JustMCFParser.GIVE - 131)) | (1 << (JustMCFParser.CLEAR - 131)) | (1 << (JustMCFParser.FISH - 131)) | (1 << (JustMCFParser.KILL - 131)) | (1 << (JustMCFParser.MINE - 131)) | (1 << (JustMCFParser.MAINHAND - 131)) | (1 << (JustMCFParser.OFFHAND - 131)) | (1 << (JustMCFParser.EFFECT - 131)) | (1 << (JustMCFParser.TAG - 131)) | (1 << (JustMCFParser.TP - 131)) | (1 << (JustMCFParser.GET - 131)) | (1 << (JustMCFParser.ATTR - 131)) | (1 << (JustMCFParser.BASE - 131)) | (1 << (JustMCFParser.DESTROY - 131)) | (1 << (JustMCFParser.KEEP - 131)) | (1 << (JustMCFParser.REPLACE - 131)) | (1 << (JustMCFParser.HOLLOW - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (JustMCFParser.OUTLINE - 163)) | (1 << (JustMCFParser.FORCE - 163)) | (1 << (JustMCFParser.MOVE - 163)) | (1 << (JustMCFParser.NORMAL - 163)) | (1 << (JustMCFParser.FILTERED - 163)) | (1 << (JustMCFParser.INTERFACE - 163)) | (1 << (JustMCFParser.WHILE - 163)) | (1 << (JustMCFParser.FOR - 163)) | (1 << (JustMCFParser.YEILD - 163)) | (1 << (JustMCFParser.BREAK - 163)) | (1 << (JustMCFParser.RETURN - 163)) | (1 << (JustMCFParser.REPLACED - 163)) | (1 << (JustMCFParser.DIM - 163)) | (1 << (JustMCFParser.DIMENSION - 163)) | (1 << (JustMCFParser.ITEM_MODIFIER - 163)) | (1 << (JustMCFParser.Pos1 - 163)) | (1 << (JustMCFParser.Selector - 163)) | (1 << (JustMCFParser.BYTE - 163)) | (1 << (JustMCFParser.SHORT - 163)) | (1 << (JustMCFParser.INT_ - 163)) | (1 << (JustMCFParser.LONG - 163)) | (1 << (JustMCFParser.FLOAT - 163)) | (1 << (JustMCFParser.DOUBLE - 163)) | (1 << (JustMCFParser.AcceptableName - 163)) | (1 << (JustMCFParser.NBTName - 163)))) !== 0)) {
				{
				{
				this.state = 526;
				this.funcImproveStatementInner();
				}
				}
				this.state = 531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 532;
			this.match(JustMCFParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcImproveParam(): FuncImproveParamContext {
		let _localctx: FuncImproveParamContext = new FuncImproveParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JustMCFParser.RULE_funcImproveParam);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 534;
				this.typeName();
				}
				break;
			}
			this.state = 537;
			this.acceptableName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcImproveStatementInner(): FuncImproveStatementInnerContext {
		let _localctx: FuncImproveStatementInnerContext = new FuncImproveStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JustMCFParser.RULE_funcImproveStatementInner);
		try {
			this.state = 541;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 539;
				this.statementInner();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 540;
				this.yeildStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yeildStatement(): YeildStatementContext {
		let _localctx: YeildStatementContext = new YeildStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, JustMCFParser.RULE_yeildStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.match(JustMCFParser.YEILD);
			this.state = 544;
			this.dataIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcRunStatement(): FuncRunStatementContext {
		let _localctx: FuncRunStatementContext = new FuncRunStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, JustMCFParser.RULE_funcRunStatement);
		try {
			this.state = 550;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 546;
				this.match(JustMCFParser.FUNC);
				this.state = 547;
				this.nameSpaceFunc();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 548;
				this.match(JustMCFParser.FUNC);
				this.state = 549;
				this.tagNameSpaceFunc();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcImproveRunStatement(): FuncImproveRunStatementContext {
		let _localctx: FuncImproveRunStatementContext = new FuncImproveRunStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, JustMCFParser.RULE_funcImproveRunStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.funcImproveRunExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcImproveRunExpression(): FuncImproveRunExpressionContext {
		let _localctx: FuncImproveRunExpressionContext = new FuncImproveRunExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, JustMCFParser.RULE_funcImproveRunExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.match(JustMCFParser.FUNC);
			this.state = 555;
			this.nameSpaceFunc();
			this.state = 556;
			this.match(JustMCFParser.T__7);
			this.state = 557;
			this.funcImproveRunParam();
			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 558;
				this.match(JustMCFParser.T__2);
				this.state = 559;
				this.funcImproveRunParam();
				}
				}
				this.state = 564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 565;
			this.match(JustMCFParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcImproveRunParam(): FuncImproveRunParamContext {
		let _localctx: FuncImproveRunParamContext = new FuncImproveRunParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, JustMCFParser.RULE_funcImproveRunParam);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			this.dataIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execStatement(): ExecStatementContext {
		let _localctx: ExecStatementContext = new ExecStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, JustMCFParser.RULE_execStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 605;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				_localctx = new ExecWithRunOrChildContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.EXEC) {
					{
					this.state = 569;
					this.match(JustMCFParser.EXEC);
					}
				}

				this.state = 572;
				this.match(JustMCFParser.T__4);
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__9) | (1 << JustMCFParser.T__10) | (1 << JustMCFParser.T__11))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__50 - 34)) | (1 << (JustMCFParser.NUMBER_INT - 34)) | (1 << (JustMCFParser.NUMBER - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Pos1 - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)) | (1 << (JustMCFParser.NBTName - 167)))) !== 0)) {
					{
					{
					this.state = 573;
					this.execChild();
					}
					}
					this.state = 578;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 579;
				this.match(JustMCFParser.T__5);
				this.state = 583;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 580;
						this.execStoreChild();
						}
						}
					}
					this.state = 585;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
				}
				this.state = 588;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JustMCFParser.T__0:
				case JustMCFParser.RUN:
					{
					this.state = 586;
					this.execRunChild();
					}
					break;
				case JustMCFParser.T__9:
				case JustMCFParser.T__10:
				case JustMCFParser.T__11:
				case JustMCFParser.STORE:
					{
					this.state = 587;
					this.execStoreChild();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 593;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 590;
						this.execStoreChild();
						}
						}
					}
					this.state = 595;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				}
				}
				break;

			case 2:
				_localctx = new ExecWithoutRunOrChildContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 596;
				this.match(JustMCFParser.EXEC);
				this.state = 597;
				this.match(JustMCFParser.T__4);
				this.state = 599;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 598;
					this.execChild();
					}
					}
					this.state = 601;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__9) | (1 << JustMCFParser.T__10) | (1 << JustMCFParser.T__11))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__50 - 34)) | (1 << (JustMCFParser.NUMBER_INT - 34)) | (1 << (JustMCFParser.NUMBER - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Pos1 - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)) | (1 << (JustMCFParser.NBTName - 167)))) !== 0));
				this.state = 603;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execStoreChild(): ExecStoreChildContext {
		let _localctx: ExecStoreChildContext = new ExecStoreChildContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, JustMCFParser.RULE_execStoreChild);
		let _la: number;
		try {
			this.state = 674;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				_localctx = new ExecStoreResultScoreContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 611;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 607;
					this.match(JustMCFParser.T__9);
					}
					break;

				case 2:
					{
					this.state = 608;
					this.match(JustMCFParser.STORE);
					}
					break;

				case 3:
					{
					{
					this.state = 609;
					this.match(JustMCFParser.STORE);
					this.state = 610;
					this.match(JustMCFParser.RESULT);
					}
					}
					break;
				}
				this.state = 613;
				this.scbIdentifier();
				}
				break;

			case 2:
				_localctx = new ExecStoreSuccessScoreContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 619;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JustMCFParser.T__10:
					{
					this.state = 614;
					this.match(JustMCFParser.T__10);
					}
					break;
				case JustMCFParser.T__11:
					{
					{
					this.state = 615;
					this.match(JustMCFParser.T__11);
					this.state = 616;
					this.match(JustMCFParser.STORE);
					}
					}
					break;
				case JustMCFParser.STORE:
					{
					{
					this.state = 617;
					this.match(JustMCFParser.STORE);
					this.state = 618;
					this.match(JustMCFParser.SUCCESS);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 621;
				this.scbIdentifier();
				}
				break;

			case 3:
				_localctx = new ExecStoreResultDataContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 626;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 622;
					this.match(JustMCFParser.T__9);
					}
					break;

				case 2:
					{
					this.state = 623;
					this.match(JustMCFParser.STORE);
					}
					break;

				case 3:
					{
					{
					this.state = 624;
					this.match(JustMCFParser.STORE);
					this.state = 625;
					this.match(JustMCFParser.RESULT);
					}
					}
					break;
				}
				this.state = 628;
				this.dataIdentifier();
				this.state = 635;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 629;
					this.numberType();
					this.state = 631;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__12) {
						{
						this.state = 630;
						this.match(JustMCFParser.T__12);
						}
					}

					this.state = 633;
					this.number();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new ExecStoreSuccessDataContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 642;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JustMCFParser.T__10:
					{
					this.state = 637;
					this.match(JustMCFParser.T__10);
					}
					break;
				case JustMCFParser.T__11:
					{
					{
					this.state = 638;
					this.match(JustMCFParser.T__11);
					this.state = 639;
					this.match(JustMCFParser.STORE);
					}
					}
					break;
				case JustMCFParser.STORE:
					{
					{
					this.state = 640;
					this.match(JustMCFParser.STORE);
					this.state = 641;
					this.match(JustMCFParser.SUCCESS);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 644;
				this.dataIdentifier();
				this.state = 651;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 645;
					this.numberType();
					this.state = 647;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__12) {
						{
						this.state = 646;
						this.match(JustMCFParser.T__12);
						}
					}

					this.state = 649;
					this.number();
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new ExecStoreResultBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 657;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 653;
					this.match(JustMCFParser.T__9);
					}
					break;

				case 2:
					{
					this.state = 654;
					this.match(JustMCFParser.STORE);
					}
					break;

				case 3:
					{
					{
					this.state = 655;
					this.match(JustMCFParser.STORE);
					this.state = 656;
					this.match(JustMCFParser.RESULT);
					}
					}
					break;
				}
				this.state = 659;
				this.bossbarIdentifier();
				this.state = 661;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 660;
					(_localctx as ExecStoreResultBossbarContext)._value = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.VALUE || _la === JustMCFParser.MAX)) {
						(_localctx as ExecStoreResultBossbarContext)._value = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				break;

			case 6:
				_localctx = new ExecStoreSuccessBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 668;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JustMCFParser.T__10:
					{
					this.state = 663;
					this.match(JustMCFParser.T__10);
					}
					break;
				case JustMCFParser.T__11:
					{
					{
					this.state = 664;
					this.match(JustMCFParser.T__11);
					this.state = 665;
					this.match(JustMCFParser.STORE);
					}
					}
					break;
				case JustMCFParser.STORE:
					{
					{
					this.state = 666;
					this.match(JustMCFParser.STORE);
					this.state = 667;
					this.match(JustMCFParser.SUCCESS);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 670;
				this.bossbarIdentifier();
				this.state = 672;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
				case 1:
					{
					this.state = 671;
					(_localctx as ExecStoreSuccessBossbarContext)._value = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.VALUE || _la === JustMCFParser.MAX)) {
						(_localctx as ExecStoreSuccessBossbarContext)._value = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execRunChild(): ExecRunChildContext {
		let _localctx: ExecRunChildContext = new ExecRunChildContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, JustMCFParser.RULE_execRunChild);
		let _la: number;
		try {
			this.state = 692;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				_localctx = new ExecDirectRunContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 676;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__0 || _la === JustMCFParser.RUN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 677;
				this.statement();
				}
				break;

			case 2:
				_localctx = new ExecNamedRunContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 678;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__0 || _la === JustMCFParser.RUN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 679;
				this.funcStatement();
				}
				break;

			case 3:
				_localctx = new ExecAnonymousRunContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 680;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__0 || _la === JustMCFParser.RUN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.FUNC) {
					{
					this.state = 681;
					this.match(JustMCFParser.FUNC);
					}
				}

				this.state = 684;
				this.match(JustMCFParser.T__4);
				this.state = 688;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__0 || _la === JustMCFParser.T__4 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__50 - 34)) | (1 << (JustMCFParser.NUMBER_INT - 34)) | (1 << (JustMCFParser.NUMBER - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JustMCFParser.LeagalCommand - 67)) | (1 << (JustMCFParser.NAMSP - 67)) | (1 << (JustMCFParser.NAMESPACE - 67)) | (1 << (JustMCFParser.LOCAL - 67)) | (1 << (JustMCFParser.EXEC - 67)) | (1 << (JustMCFParser.RUN - 67)) | (1 << (JustMCFParser.STORE - 67)) | (1 << (JustMCFParser.ALIGN - 67)) | (1 << (JustMCFParser.ANCHORED - 67)) | (1 << (JustMCFParser.EYES - 67)) | (1 << (JustMCFParser.FEET - 67)) | (1 << (JustMCFParser.IN - 67)) | (1 << (JustMCFParser.AS - 67)) | (1 << (JustMCFParser.AT - 67)) | (1 << (JustMCFParser.FACING - 67)) | (1 << (JustMCFParser.POSITIONED - 67)) | (1 << (JustMCFParser.POS - 67)) | (1 << (JustMCFParser.ROTATED - 67)) | (1 << (JustMCFParser.ROT - 67)) | (1 << (JustMCFParser.IF - 67)) | (1 << (JustMCFParser.UNLESS - 67)) | (1 << (JustMCFParser.ALL - 67)) | (1 << (JustMCFParser.MASKED - 67)) | (1 << (JustMCFParser.BIOME - 67)) | (1 << (JustMCFParser.VALUE - 67)) | (1 << (JustMCFParser.MAX - 67)) | (1 << (JustMCFParser.ENTITY - 67)) | (1 << (JustMCFParser.SCORE - 67)) | (1 << (JustMCFParser.PREDICATE - 67)) | (1 << (JustMCFParser.BLOCK - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (JustMCFParser.BLOCKS - 99)) | (1 << (JustMCFParser.SCB - 99)) | (1 << (JustMCFParser.DISPLAYNAME - 99)) | (1 << (JustMCFParser.RENDERTYPE - 99)) | (1 << (JustMCFParser.DISPLAY - 99)) | (1 << (JustMCFParser.ENABLE - 99)) | (1 << (JustMCFParser.LIST - 99)) | (1 << (JustMCFParser.DATA - 99)) | (1 << (JustMCFParser.STORAGE - 99)) | (1 << (JustMCFParser.RESET - 99)) | (1 << (JustMCFParser.ADD - 99)) | (1 << (JustMCFParser.REMOVE - 99)) | (1 << (JustMCFParser.FUNC - 99)) | (1 << (JustMCFParser.TAGGED - 99)) | (1 << (JustMCFParser.DEFAULT - 99)) | (1 << (JustMCFParser.PLAYER - 99)) | (1 << (JustMCFParser.PLAYERS - 99)) | (1 << (JustMCFParser.BOSSBAR - 99)) | (1 << (JustMCFParser.VISIBLE - 99)) | (1 << (JustMCFParser.BLUE - 99)) | (1 << (JustMCFParser.GREEN - 99)) | (1 << (JustMCFParser.PINK - 99)) | (1 << (JustMCFParser.PURPLE - 99)) | (1 << (JustMCFParser.RED - 99)) | (1 << (JustMCFParser.WHITE - 99)) | (1 << (JustMCFParser.YELLOW - 99)) | (1 << (JustMCFParser.COLOR - 99)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (JustMCFParser.NAME - 131)) | (1 << (JustMCFParser.STYLE - 131)) | (1 << (JustMCFParser.NOTCHED_6 - 131)) | (1 << (JustMCFParser.NOTCHED_10 - 131)) | (1 << (JustMCFParser.NOTCHED_12 - 131)) | (1 << (JustMCFParser.NOTCHED_20 - 131)) | (1 << (JustMCFParser.PROGRESS - 131)) | (1 << (JustMCFParser.SET - 131)) | (1 << (JustMCFParser.TITLE - 131)) | (1 << (JustMCFParser.SUBTITLE - 131)) | (1 << (JustMCFParser.ACTIONBAR - 131)) | (1 << (JustMCFParser.TIMES - 131)) | (1 << (JustMCFParser.TEXT - 131)) | (1 << (JustMCFParser.ITEM - 131)) | (1 << (JustMCFParser.LOOT - 131)) | (1 << (JustMCFParser.GIVE - 131)) | (1 << (JustMCFParser.CLEAR - 131)) | (1 << (JustMCFParser.FISH - 131)) | (1 << (JustMCFParser.KILL - 131)) | (1 << (JustMCFParser.MINE - 131)) | (1 << (JustMCFParser.MAINHAND - 131)) | (1 << (JustMCFParser.OFFHAND - 131)) | (1 << (JustMCFParser.EFFECT - 131)) | (1 << (JustMCFParser.TAG - 131)) | (1 << (JustMCFParser.TP - 131)) | (1 << (JustMCFParser.GET - 131)) | (1 << (JustMCFParser.ATTR - 131)) | (1 << (JustMCFParser.BASE - 131)) | (1 << (JustMCFParser.DESTROY - 131)) | (1 << (JustMCFParser.KEEP - 131)) | (1 << (JustMCFParser.REPLACE - 131)) | (1 << (JustMCFParser.HOLLOW - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (JustMCFParser.OUTLINE - 163)) | (1 << (JustMCFParser.FORCE - 163)) | (1 << (JustMCFParser.MOVE - 163)) | (1 << (JustMCFParser.NORMAL - 163)) | (1 << (JustMCFParser.FILTERED - 163)) | (1 << (JustMCFParser.INTERFACE - 163)) | (1 << (JustMCFParser.WHILE - 163)) | (1 << (JustMCFParser.FOR - 163)) | (1 << (JustMCFParser.YEILD - 163)) | (1 << (JustMCFParser.BREAK - 163)) | (1 << (JustMCFParser.RETURN - 163)) | (1 << (JustMCFParser.REPLACED - 163)) | (1 << (JustMCFParser.DIM - 163)) | (1 << (JustMCFParser.DIMENSION - 163)) | (1 << (JustMCFParser.ITEM_MODIFIER - 163)) | (1 << (JustMCFParser.Pos1 - 163)) | (1 << (JustMCFParser.Selector - 163)) | (1 << (JustMCFParser.BYTE - 163)) | (1 << (JustMCFParser.SHORT - 163)) | (1 << (JustMCFParser.INT_ - 163)) | (1 << (JustMCFParser.LONG - 163)) | (1 << (JustMCFParser.FLOAT - 163)) | (1 << (JustMCFParser.DOUBLE - 163)) | (1 << (JustMCFParser.AcceptableName - 163)) | (1 << (JustMCFParser.NBTName - 163)))) !== 0)) {
					{
					{
					this.state = 685;
					this.statementInner();
					}
					}
					this.state = 690;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 691;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execChild(): ExecChildContext {
		let _localctx: ExecChildContext = new ExecChildContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, JustMCFParser.RULE_execChild);
		let _la: number;
		try {
			this.state = 800;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				_localctx = new ExecAlignContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 694;
				this.match(JustMCFParser.ALIGN);
				this.state = 695;
				this.match(JustMCFParser.AcceptableName);
				}
				break;

			case 2:
				_localctx = new ExecAnchoredContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 696;
				this.match(JustMCFParser.ANCHORED);
				this.state = 697;
				(_localctx as ExecAnchoredContext)._anchor = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.EYES || _la === JustMCFParser.FEET)) {
					(_localctx as ExecAnchoredContext)._anchor = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				_localctx = new ExecInContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 698;
				this.match(JustMCFParser.IN);
				this.state = 699;
				this.nameSpaceDim();
				}
				break;

			case 4:
				_localctx = new ExecAsContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 700;
				this.match(JustMCFParser.AS);
				this.state = 701;
				this.selector();
				}
				break;

			case 5:
				_localctx = new ExecAtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 702;
				this.match(JustMCFParser.AT);
				this.state = 703;
				this.selector();
				}
				break;

			case 6:
				_localctx = new ExecFacingPosContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 704;
				this.match(JustMCFParser.FACING);
				this.state = 705;
				this.pos3Identifier();
				}
				break;

			case 7:
				_localctx = new ExecFacingEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 706;
				this.match(JustMCFParser.FACING);
				this.state = 708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.ENTITY) {
					{
					this.state = 707;
					this.match(JustMCFParser.ENTITY);
					}
				}

				this.state = 710;
				this.selector();
				this.state = 711;
				(_localctx as ExecFacingEntityContext)._anchor = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.EYES || _la === JustMCFParser.FEET)) {
					(_localctx as ExecFacingEntityContext)._anchor = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 8:
				_localctx = new ExecPositionedPosContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 713;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.POSITIONED || _la === JustMCFParser.POS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 714;
				this.pos3Identifier();
				}
				break;

			case 9:
				_localctx = new ExecPostionedAsContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 715;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.POSITIONED || _la === JustMCFParser.POS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.AS) {
					{
					this.state = 716;
					this.match(JustMCFParser.AS);
					}
				}

				this.state = 719;
				this.selector();
				}
				break;

			case 10:
				_localctx = new ExecRotatedPosContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 720;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.ROTATED || _la === JustMCFParser.ROT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 721;
				this.pos2Identifier();
				}
				break;

			case 11:
				_localctx = new ExecRotatedAsContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 722;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.ROTATED || _la === JustMCFParser.ROT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 724;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.AS) {
					{
					this.state = 723;
					this.match(JustMCFParser.AS);
					}
				}

				this.state = 726;
				this.selector();
				}
				break;

			case 12:
				_localctx = new ExecIfEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 728;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS) {
					{
					this.state = 727;
					(_localctx as ExecIfEntityContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS)) {
						(_localctx as ExecIfEntityContext)._cond = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.ENTITY) {
					{
					this.state = 730;
					this.match(JustMCFParser.ENTITY);
					}
				}

				this.state = 733;
				this.selector();
				}
				break;

			case 13:
				_localctx = new ExecIfScoreContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 735;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 734;
					(_localctx as ExecIfScoreContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS)) {
						(_localctx as ExecIfScoreContext)._cond = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				this.state = 738;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 737;
					this.match(JustMCFParser.SCORE);
					}
					break;
				}
				this.state = 740;
				this.scbCoreIdentifier();
				this.state = 741;
				this.match(JustMCFParser.CompareOperation);
				this.state = 742;
				this.scbCoreIdentifier();
				}
				break;

			case 14:
				_localctx = new ExecIfScoreMatchesContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 745;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 744;
					(_localctx as ExecIfScoreMatchesContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS)) {
						(_localctx as ExecIfScoreMatchesContext)._cond = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				this.state = 748;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
				case 1:
					{
					this.state = 747;
					this.match(JustMCFParser.SCORE);
					}
					break;
				}
				this.state = 750;
				this.scbCoreIdentifier();
				this.state = 756;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JustMCFParser.T__13:
				case JustMCFParser.NUMBER_INT:
				case JustMCFParser.MATCHES:
					{
					{
					this.state = 752;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.MATCHES) {
						{
						this.state = 751;
						this.match(JustMCFParser.MATCHES);
						}
					}

					this.state = 754;
					this.matchPart();
					}
					}
					break;
				case JustMCFParser.CompareOperation:
					{
					this.state = 755;
					this.scbCompareNumber();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 15:
				_localctx = new ExecIfBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 759;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS) {
					{
					this.state = 758;
					(_localctx as ExecIfBlockContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS)) {
						(_localctx as ExecIfBlockContext)._cond = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.BLOCK) {
					{
					this.state = 761;
					this.match(JustMCFParser.BLOCK);
					}
				}

				this.state = 764;
				this.pos3Identifier();
				this.state = 765;
				this.blockIdentifier();
				}
				break;

			case 16:
				_localctx = new ExecIfBlocksContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 768;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS) {
					{
					this.state = 767;
					(_localctx as ExecIfBlocksContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS)) {
						(_localctx as ExecIfBlocksContext)._cond = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 771;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.BLOCKS) {
					{
					this.state = 770;
					this.match(JustMCFParser.BLOCKS);
					}
				}

				this.state = 773;
				this.pos3Identifier();
				this.state = 774;
				this.pos3Identifier();
				this.state = 775;
				this.pos3Identifier();
				this.state = 776;
				(_localctx as ExecIfBlocksContext)._scan_mode = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.ALL || _la === JustMCFParser.MASKED)) {
					(_localctx as ExecIfBlocksContext)._scan_mode = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 17:
				_localctx = new ExecIfDataContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 779;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 778;
					(_localctx as ExecIfDataContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS)) {
						(_localctx as ExecIfDataContext)._cond = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				this.state = 782;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 781;
					this.match(JustMCFParser.DATA);
					}
					break;
				}
				this.state = 784;
				this.dataIdentifier();
				}
				break;

			case 18:
				_localctx = new ExecIfBiomeContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS) {
					{
					this.state = 785;
					(_localctx as ExecIfBiomeContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS)) {
						(_localctx as ExecIfBiomeContext)._cond = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 788;
				this.match(JustMCFParser.BIOME);
				this.state = 789;
				this.pos3Identifier();
				this.state = 790;
				this.nameSpaceBiome();
				}
				break;

			case 19:
				_localctx = new ExecPredicateContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 793;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
				case 1:
					{
					this.state = 792;
					(_localctx as ExecPredicateContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS)) {
						(_localctx as ExecPredicateContext)._cond = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				this.state = 796;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 795;
					this.match(JustMCFParser.PREDICATE);
					}
					break;
				}
				this.state = 798;
				this.nameSpacePredicate();
				}
				break;

			case 20:
				_localctx = new ExecStoreContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 799;
				this.execStoreChild();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchPart(): MatchPartContext {
		let _localctx: MatchPartContext = new MatchPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, JustMCFParser.RULE_matchPart);
		try {
			this.state = 810;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 802;
				this.match(JustMCFParser.NUMBER_INT);
				this.state = 803;
				this.match(JustMCFParser.T__13);
				this.state = 805;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 804;
					this.match(JustMCFParser.NUMBER_INT);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 807;
				this.match(JustMCFParser.T__13);
				this.state = 808;
				this.match(JustMCFParser.NUMBER_INT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 809;
				this.match(JustMCFParser.NUMBER_INT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scbCompareNumber(): ScbCompareNumberContext {
		let _localctx: ScbCompareNumberContext = new ScbCompareNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, JustMCFParser.RULE_scbCompareNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			this.match(JustMCFParser.CompareOperation);
			this.state = 813;
			this.match(JustMCFParser.NUMBER_INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataIdentifier(): DataIdentifierContext {
		let _localctx: DataIdentifierContext = new DataIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, JustMCFParser.RULE_dataIdentifier);
		try {
			this.state = 822;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				_localctx = new DataStorageLocalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 815;
				this.match(JustMCFParser.LOCAL);
				this.state = 816;
				this.match(JustMCFParser.T__14);
				this.state = 817;
				this.nbtPath();
				}
				break;

			case 2:
				_localctx = new DataStorageContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 818;
				this.dataStorageIdentifier();
				}
				break;

			case 3:
				_localctx = new DataStorageWithEnvContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 819;
				this.nbtPathWithoutCompound();
				}
				break;

			case 4:
				_localctx = new DataEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 820;
				this.dataEntityIdentifier();
				}
				break;

			case 5:
				_localctx = new DataBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 821;
				this.dataBlockIdentifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataStorageIdentifier(): DataStorageIdentifierContext {
		let _localctx: DataStorageIdentifierContext = new DataStorageIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, JustMCFParser.RULE_dataStorageIdentifier);
		try {
			this.state = 832;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 824;
				this.nameSpaceStorage();
				this.state = 825;
				this.match(JustMCFParser.T__14);
				this.state = 826;
				this.nbtPath();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 828;
				this.match(JustMCFParser.STORAGE);
				this.state = 829;
				this.nameSpaceStorage();
				this.state = 830;
				this.nbtPath();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataEntityIdentifier(): DataEntityIdentifierContext {
		let _localctx: DataEntityIdentifierContext = new DataEntityIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, JustMCFParser.RULE_dataEntityIdentifier);
		try {
			this.state = 842;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__33:
			case JustMCFParser.T__50:
			case JustMCFParser.Selector:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 834;
				this.selector();
				this.state = 835;
				this.match(JustMCFParser.T__14);
				this.state = 836;
				this.nbtPath();
				}
				break;
			case JustMCFParser.ENTITY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 838;
				this.match(JustMCFParser.ENTITY);
				this.state = 839;
				this.selector();
				this.state = 840;
				this.nbtPath();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataBlockIdentifier(): DataBlockIdentifierContext {
		let _localctx: DataBlockIdentifierContext = new DataBlockIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, JustMCFParser.RULE_dataBlockIdentifier);
		try {
			this.state = 852;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NUMBER_INT:
			case JustMCFParser.NUMBER:
			case JustMCFParser.Pos1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 844;
				this.pos3Identifier();
				this.state = 845;
				this.match(JustMCFParser.T__14);
				this.state = 846;
				this.nbtPath();
				}
				break;
			case JustMCFParser.BLOCK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 848;
				this.match(JustMCFParser.BLOCK);
				this.state = 849;
				this.pos3Identifier();
				this.state = 850;
				this.nbtPath();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataMergeExpression(): DataMergeExpressionContext {
		let _localctx: DataMergeExpressionContext = new DataMergeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, JustMCFParser.RULE_dataMergeExpression);
		try {
			this.state = 866;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NAMSP:
			case JustMCFParser.NAMESPACE:
			case JustMCFParser.LOCAL:
			case JustMCFParser.EXEC:
			case JustMCFParser.RUN:
			case JustMCFParser.STORE:
			case JustMCFParser.ALIGN:
			case JustMCFParser.ANCHORED:
			case JustMCFParser.EYES:
			case JustMCFParser.FEET:
			case JustMCFParser.IN:
			case JustMCFParser.AS:
			case JustMCFParser.AT:
			case JustMCFParser.FACING:
			case JustMCFParser.POSITIONED:
			case JustMCFParser.POS:
			case JustMCFParser.ROTATED:
			case JustMCFParser.ROT:
			case JustMCFParser.IF:
			case JustMCFParser.UNLESS:
			case JustMCFParser.ALL:
			case JustMCFParser.MASKED:
			case JustMCFParser.BIOME:
			case JustMCFParser.VALUE:
			case JustMCFParser.MAX:
			case JustMCFParser.ENTITY:
			case JustMCFParser.SCORE:
			case JustMCFParser.PREDICATE:
			case JustMCFParser.BLOCK:
			case JustMCFParser.BLOCKS:
			case JustMCFParser.SCB:
			case JustMCFParser.DISPLAYNAME:
			case JustMCFParser.RENDERTYPE:
			case JustMCFParser.DISPLAY:
			case JustMCFParser.ENABLE:
			case JustMCFParser.LIST:
			case JustMCFParser.DATA:
			case JustMCFParser.STORAGE:
			case JustMCFParser.RESET:
			case JustMCFParser.ADD:
			case JustMCFParser.REMOVE:
			case JustMCFParser.FUNC:
			case JustMCFParser.TAGGED:
			case JustMCFParser.DEFAULT:
			case JustMCFParser.PLAYER:
			case JustMCFParser.PLAYERS:
			case JustMCFParser.BOSSBAR:
			case JustMCFParser.VISIBLE:
			case JustMCFParser.BLUE:
			case JustMCFParser.GREEN:
			case JustMCFParser.PINK:
			case JustMCFParser.PURPLE:
			case JustMCFParser.RED:
			case JustMCFParser.WHITE:
			case JustMCFParser.YELLOW:
			case JustMCFParser.COLOR:
			case JustMCFParser.NAME:
			case JustMCFParser.STYLE:
			case JustMCFParser.NOTCHED_6:
			case JustMCFParser.NOTCHED_10:
			case JustMCFParser.NOTCHED_12:
			case JustMCFParser.NOTCHED_20:
			case JustMCFParser.PROGRESS:
			case JustMCFParser.SET:
			case JustMCFParser.TITLE:
			case JustMCFParser.SUBTITLE:
			case JustMCFParser.ACTIONBAR:
			case JustMCFParser.TIMES:
			case JustMCFParser.TEXT:
			case JustMCFParser.ITEM:
			case JustMCFParser.LOOT:
			case JustMCFParser.GIVE:
			case JustMCFParser.CLEAR:
			case JustMCFParser.FISH:
			case JustMCFParser.KILL:
			case JustMCFParser.MINE:
			case JustMCFParser.MAINHAND:
			case JustMCFParser.OFFHAND:
			case JustMCFParser.EFFECT:
			case JustMCFParser.TAG:
			case JustMCFParser.TP:
			case JustMCFParser.GET:
			case JustMCFParser.ATTR:
			case JustMCFParser.BASE:
			case JustMCFParser.DESTROY:
			case JustMCFParser.KEEP:
			case JustMCFParser.REPLACE:
			case JustMCFParser.HOLLOW:
			case JustMCFParser.OUTLINE:
			case JustMCFParser.FORCE:
			case JustMCFParser.MOVE:
			case JustMCFParser.NORMAL:
			case JustMCFParser.FILTERED:
			case JustMCFParser.INTERFACE:
			case JustMCFParser.WHILE:
			case JustMCFParser.FOR:
			case JustMCFParser.YEILD:
			case JustMCFParser.BREAK:
			case JustMCFParser.RETURN:
			case JustMCFParser.REPLACED:
			case JustMCFParser.DIM:
			case JustMCFParser.DIMENSION:
			case JustMCFParser.ITEM_MODIFIER:
			case JustMCFParser.BYTE:
			case JustMCFParser.SHORT:
			case JustMCFParser.INT_:
			case JustMCFParser.LONG:
			case JustMCFParser.FLOAT:
			case JustMCFParser.DOUBLE:
			case JustMCFParser.AcceptableName:
				_localctx = new DataMergeStorageContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 854;
				this.nameSpaceStorage();
				this.state = 855;
				this.match(JustMCFParser.T__15);
				this.state = 856;
				this.nbt();
				}
				break;
			case JustMCFParser.T__33:
			case JustMCFParser.T__50:
			case JustMCFParser.Selector:
				_localctx = new DataMergeEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 858;
				this.selector();
				this.state = 859;
				this.match(JustMCFParser.T__15);
				this.state = 860;
				this.nbt();
				}
				break;
			case JustMCFParser.NUMBER_INT:
			case JustMCFParser.NUMBER:
			case JustMCFParser.Pos1:
				_localctx = new DataMergeBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 862;
				this.pos3Identifier();
				this.state = 863;
				this.match(JustMCFParser.T__15);
				this.state = 864;
				this.nbt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataOperationExpression(): DataOperationExpressionContext {
		let _localctx: DataOperationExpressionContext = new DataOperationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, JustMCFParser.RULE_dataOperationExpression);
		let _la: number;
		try {
			this.state = 927;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				_localctx = new DataGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 868;
				this.dataIdentifier();
				this.state = 873;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 870;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__12) {
						{
						this.state = 869;
						this.match(JustMCFParser.T__12);
						}
					}

					this.state = 872;
					this.number();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new DataMergeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 875;
				this.dataMergeExpression();
				}
				break;

			case 3:
				_localctx = new DataModifyMergeValueContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 876;
				this.dataIdentifier();
				this.state = 877;
				this.match(JustMCFParser.T__15);
				this.state = 878;
				this.nbt();
				}
				break;

			case 4:
				_localctx = new DataModifyMergeFromContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 880;
				this.dataIdentifier();
				this.state = 881;
				this.match(JustMCFParser.T__15);
				this.state = 882;
				this.dataRightValue();
				}
				break;

			case 5:
				_localctx = new DataModifySetValueContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 885;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 884;
					this.typeName();
					}
					break;
				}
				this.state = 887;
				this.dataIdentifier();
				this.state = 888;
				this.match(JustMCFParser.T__6);
				this.state = 889;
				this.nbt();
				}
				break;

			case 6:
				_localctx = new DataModifySetFromContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 892;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 891;
					this.typeName();
					}
					break;
				}
				this.state = 894;
				this.dataIdentifier();
				this.state = 895;
				this.match(JustMCFParser.T__6);
				this.state = 896;
				this.dataRightValue();
				}
				break;

			case 7:
				_localctx = new DataModifyAppendValueContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 898;
				this.dataIdentifier();
				this.state = 899;
				this.match(JustMCFParser.T__13);
				this.state = 900;
				this.nbt();
				}
				break;

			case 8:
				_localctx = new DataModifyAppendFromContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 902;
				this.dataIdentifier();
				this.state = 903;
				this.match(JustMCFParser.T__13);
				this.state = 904;
				this.dataRightValue();
				}
				break;

			case 9:
				_localctx = new DataModifyPrependValueContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 906;
				this.dataIdentifier();
				this.state = 907;
				this.match(JustMCFParser.T__16);
				this.state = 908;
				this.nbt();
				}
				break;

			case 10:
				_localctx = new DataModifyPrependFromContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 910;
				this.dataIdentifier();
				this.state = 911;
				this.match(JustMCFParser.T__16);
				this.state = 912;
				this.dataRightValue();
				}
				break;

			case 11:
				_localctx = new DataModifyInsertValueContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 914;
				this.dataIdentifier();
				this.state = 915;
				this.match(JustMCFParser.T__13);
				this.state = 916;
				this.match(JustMCFParser.NUMBER_INT);
				this.state = 917;
				this.nbt();
				}
				break;

			case 12:
				_localctx = new DataModifyInsertFromContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 919;
				this.dataIdentifier();
				this.state = 920;
				this.match(JustMCFParser.T__13);
				this.state = 921;
				this.match(JustMCFParser.NUMBER_INT);
				this.state = 922;
				this.dataRightValue();
				}
				break;

			case 13:
				_localctx = new DataRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 924;
				this.dataIdentifier();
				this.state = 925;
				this.match(JustMCFParser.REMOVE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataRightValue(): DataRightValueContext {
		let _localctx: DataRightValueContext = new DataRightValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, JustMCFParser.RULE_dataRightValue);
		try {
			this.state = 931;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 929;
				this.dataIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 930;
				this.funcImproveRunExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataStatement(): DataStatementContext {
		let _localctx: DataStatementContext = new DataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, JustMCFParser.RULE_dataStatement);
		let _la: number;
		try {
			this.state = 957;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				_localctx = new DataSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 933;
				this.match(JustMCFParser.DATA);
				this.state = 934;
				this.match(JustMCFParser.T__4);
				this.state = 938;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__50 - 34)) | (1 << (JustMCFParser.NUMBER_INT - 34)) | (1 << (JustMCFParser.NUMBER - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Pos1 - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)) | (1 << (JustMCFParser.NBTName - 167)))) !== 0)) {
					{
					{
					this.state = 935;
					this.dataOperationExpression();
					}
					}
					this.state = 940;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 941;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				_localctx = new DataSIdentifierCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 942;
				this.match(JustMCFParser.DATA);
				this.state = 943;
				this.nameSpaceStorage();
				this.state = 946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__14) {
					{
					this.state = 944;
					this.match(JustMCFParser.T__14);
					this.state = 945;
					this.nbtPath();
					}
				}

				this.state = 948;
				this.match(JustMCFParser.T__4);
				this.state = 952;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__50 - 34)) | (1 << (JustMCFParser.NUMBER_INT - 34)) | (1 << (JustMCFParser.NUMBER - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Pos1 - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)) | (1 << (JustMCFParser.NBTName - 167)))) !== 0)) {
					{
					{
					this.state = 949;
					this.dataOperationExpression();
					}
					}
					this.state = 954;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 955;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scbOperationExpression(): ScbOperationExpressionContext {
		let _localctx: ScbOperationExpressionContext = new ScbOperationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, JustMCFParser.RULE_scbOperationExpression);
		try {
			this.state = 1018;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				_localctx = new ScbGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 959;
				this.scbCoreIdentifier();
				}
				break;

			case 2:
				_localctx = new ScbAddContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 960;
				this.scbCoreIdentifier();
				this.state = 961;
				this.match(JustMCFParser.T__17);
				this.state = 962;
				this.match(JustMCFParser.NUMBER_INT);
				}
				break;

			case 3:
				_localctx = new ScbRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 964;
				this.scbCoreIdentifier();
				this.state = 965;
				this.match(JustMCFParser.T__18);
				this.state = 966;
				this.match(JustMCFParser.NUMBER_INT);
				}
				break;

			case 4:
				_localctx = new ScbSetContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 968;
				this.scbCoreIdentifier();
				this.state = 969;
				this.match(JustMCFParser.T__6);
				this.state = 970;
				this.match(JustMCFParser.NUMBER_INT);
				}
				break;

			case 5:
				_localctx = new ScbOptAddAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 972;
				this.scbCoreIdentifier();
				this.state = 973;
				this.match(JustMCFParser.T__17);
				this.state = 974;
				this.scbCoreIdentifier();
				}
				break;

			case 6:
				_localctx = new ScbOptSubAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 976;
				this.scbCoreIdentifier();
				this.state = 977;
				this.match(JustMCFParser.T__18);
				this.state = 978;
				this.scbCoreIdentifier();
				}
				break;

			case 7:
				_localctx = new ScbOptMulAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 980;
				this.scbCoreIdentifier();
				this.state = 981;
				this.match(JustMCFParser.T__19);
				this.state = 982;
				this.scbCoreIdentifier();
				}
				break;

			case 8:
				_localctx = new ScbOptDivAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 984;
				this.scbCoreIdentifier();
				this.state = 985;
				this.match(JustMCFParser.T__20);
				this.state = 986;
				this.scbCoreIdentifier();
				}
				break;

			case 9:
				_localctx = new ScbOptModAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 988;
				this.scbCoreIdentifier();
				this.state = 989;
				this.match(JustMCFParser.T__21);
				this.state = 990;
				this.scbCoreIdentifier();
				}
				break;

			case 10:
				_localctx = new ScbOptExcFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 992;
				this.scbCoreIdentifier();
				this.state = 993;
				this.match(JustMCFParser.T__22);
				this.state = 994;
				this.scbCoreIdentifier();
				}
				break;

			case 11:
				_localctx = new ScbOptMinFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 996;
				this.scbCoreIdentifier();
				this.state = 997;
				this.match(JustMCFParser.T__23);
				this.state = 998;
				this.scbCoreIdentifier();
				}
				break;

			case 12:
				_localctx = new ScbOptMaxFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1000;
				this.scbCoreIdentifier();
				this.state = 1001;
				this.match(JustMCFParser.T__24);
				this.state = 1002;
				this.scbCoreIdentifier();
				}
				break;

			case 13:
				_localctx = new ScbOptAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1004;
				this.scbCoreIdentifier();
				this.state = 1005;
				this.match(JustMCFParser.T__6);
				this.state = 1006;
				this.scbCoreIdentifier();
				}
				break;

			case 14:
				_localctx = new ScbResetContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1008;
				this.scbCoreIdentifier();
				this.state = 1009;
				this.match(JustMCFParser.RESET);
				}
				break;

			case 15:
				_localctx = new ScbEnableContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1011;
				this.scbCoreIdentifier();
				this.state = 1012;
				this.match(JustMCFParser.ENABLE);
				}
				break;

			case 16:
				_localctx = new ScbOptExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1014;
				this.scbCoreIdentifier();
				this.state = 1015;
				this.match(JustMCFParser.T__25);
				this.state = 1016;
				this.scbSingleOperationExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public scbSingleOperationExpression(): ScbSingleOperationExpressionContext;
	public scbSingleOperationExpression(_p: number): ScbSingleOperationExpressionContext;
	// @RuleVersion(0)
	public scbSingleOperationExpression(_p?: number): ScbSingleOperationExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ScbSingleOperationExpressionContext = new ScbSingleOperationExpressionContext(this._ctx, _parentState);
		let _prevctx: ScbSingleOperationExpressionContext = _localctx;
		let _startState: number = 74;
		this.enterRecursionRule(_localctx, 74, JustMCFParser.RULE_scbSingleOperationExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1027;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NUMBER_INT:
				{
				_localctx = new ScbTempNumberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1021;
				this.match(JustMCFParser.NUMBER_INT);
				}
				break;
			case JustMCFParser.T__33:
			case JustMCFParser.T__50:
			case JustMCFParser.NAMSP:
			case JustMCFParser.NAMESPACE:
			case JustMCFParser.LOCAL:
			case JustMCFParser.EXEC:
			case JustMCFParser.RUN:
			case JustMCFParser.STORE:
			case JustMCFParser.ALIGN:
			case JustMCFParser.ANCHORED:
			case JustMCFParser.EYES:
			case JustMCFParser.FEET:
			case JustMCFParser.IN:
			case JustMCFParser.AS:
			case JustMCFParser.AT:
			case JustMCFParser.FACING:
			case JustMCFParser.POSITIONED:
			case JustMCFParser.POS:
			case JustMCFParser.ROTATED:
			case JustMCFParser.ROT:
			case JustMCFParser.IF:
			case JustMCFParser.UNLESS:
			case JustMCFParser.ALL:
			case JustMCFParser.MASKED:
			case JustMCFParser.BIOME:
			case JustMCFParser.VALUE:
			case JustMCFParser.MAX:
			case JustMCFParser.ENTITY:
			case JustMCFParser.SCORE:
			case JustMCFParser.PREDICATE:
			case JustMCFParser.BLOCK:
			case JustMCFParser.BLOCKS:
			case JustMCFParser.SCB:
			case JustMCFParser.DISPLAYNAME:
			case JustMCFParser.RENDERTYPE:
			case JustMCFParser.DISPLAY:
			case JustMCFParser.ENABLE:
			case JustMCFParser.LIST:
			case JustMCFParser.DATA:
			case JustMCFParser.STORAGE:
			case JustMCFParser.RESET:
			case JustMCFParser.ADD:
			case JustMCFParser.REMOVE:
			case JustMCFParser.FUNC:
			case JustMCFParser.TAGGED:
			case JustMCFParser.DEFAULT:
			case JustMCFParser.PLAYER:
			case JustMCFParser.PLAYERS:
			case JustMCFParser.BOSSBAR:
			case JustMCFParser.VISIBLE:
			case JustMCFParser.BLUE:
			case JustMCFParser.GREEN:
			case JustMCFParser.PINK:
			case JustMCFParser.PURPLE:
			case JustMCFParser.RED:
			case JustMCFParser.WHITE:
			case JustMCFParser.YELLOW:
			case JustMCFParser.COLOR:
			case JustMCFParser.NAME:
			case JustMCFParser.STYLE:
			case JustMCFParser.NOTCHED_6:
			case JustMCFParser.NOTCHED_10:
			case JustMCFParser.NOTCHED_12:
			case JustMCFParser.NOTCHED_20:
			case JustMCFParser.PROGRESS:
			case JustMCFParser.SET:
			case JustMCFParser.TITLE:
			case JustMCFParser.SUBTITLE:
			case JustMCFParser.ACTIONBAR:
			case JustMCFParser.TIMES:
			case JustMCFParser.TEXT:
			case JustMCFParser.ITEM:
			case JustMCFParser.LOOT:
			case JustMCFParser.GIVE:
			case JustMCFParser.CLEAR:
			case JustMCFParser.FISH:
			case JustMCFParser.KILL:
			case JustMCFParser.MINE:
			case JustMCFParser.MAINHAND:
			case JustMCFParser.OFFHAND:
			case JustMCFParser.EFFECT:
			case JustMCFParser.TAG:
			case JustMCFParser.TP:
			case JustMCFParser.GET:
			case JustMCFParser.ATTR:
			case JustMCFParser.BASE:
			case JustMCFParser.DESTROY:
			case JustMCFParser.KEEP:
			case JustMCFParser.REPLACE:
			case JustMCFParser.HOLLOW:
			case JustMCFParser.OUTLINE:
			case JustMCFParser.FORCE:
			case JustMCFParser.MOVE:
			case JustMCFParser.NORMAL:
			case JustMCFParser.FILTERED:
			case JustMCFParser.INTERFACE:
			case JustMCFParser.WHILE:
			case JustMCFParser.FOR:
			case JustMCFParser.YEILD:
			case JustMCFParser.BREAK:
			case JustMCFParser.RETURN:
			case JustMCFParser.REPLACED:
			case JustMCFParser.DIM:
			case JustMCFParser.DIMENSION:
			case JustMCFParser.ITEM_MODIFIER:
			case JustMCFParser.Selector:
			case JustMCFParser.BYTE:
			case JustMCFParser.SHORT:
			case JustMCFParser.INT_:
			case JustMCFParser.LONG:
			case JustMCFParser.FLOAT:
			case JustMCFParser.DOUBLE:
			case JustMCFParser.AcceptableName:
			case JustMCFParser.NBTName:
				{
				_localctx = new ScbIdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1022;
				this.scbCoreIdentifier();
				}
				break;
			case JustMCFParser.T__7:
				{
				_localctx = new ScbParenExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1023;
				this.match(JustMCFParser.T__7);
				this.state = 1024;
				this.scbSingleOperationExpression(0);
				this.state = 1025;
				this.match(JustMCFParser.T__8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1040;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1038;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
					case 1:
						{
						_localctx = new ScbFuncExpressionContext(new ScbSingleOperationExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
						this.state = 1029;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1030;
						(_localctx as ScbFuncExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JustMCFParser.T__23 || _la === JustMCFParser.T__24)) {
							(_localctx as ScbFuncExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1031;
						this.scbSingleOperationExpression(7);
						}
						break;

					case 2:
						{
						_localctx = new ScbOptMulDivModExpressionContext(new ScbSingleOperationExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
						this.state = 1032;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1033;
						(_localctx as ScbOptMulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__12) | (1 << JustMCFParser.T__26) | (1 << JustMCFParser.T__27))) !== 0))) {
							(_localctx as ScbOptMulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1034;
						this.scbSingleOperationExpression(6);
						}
						break;

					case 3:
						{
						_localctx = new ScbOptAddSubExpressionContext(new ScbSingleOperationExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
						this.state = 1035;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1036;
						(_localctx as ScbOptAddSubExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JustMCFParser.T__28 || _la === JustMCFParser.T__29)) {
							(_localctx as ScbOptAddSubExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1037;
						this.scbSingleOperationExpression(5);
						}
						break;
					}
					}
				}
				this.state = 1042;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scbCoreIdentifier(): ScbCoreIdentifierContext {
		let _localctx: ScbCoreIdentifierContext = new ScbCoreIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, JustMCFParser.RULE_scbCoreIdentifier);
		try {
			this.state = 1050;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NAMSP:
			case JustMCFParser.NAMESPACE:
			case JustMCFParser.LOCAL:
			case JustMCFParser.EXEC:
			case JustMCFParser.RUN:
			case JustMCFParser.STORE:
			case JustMCFParser.ALIGN:
			case JustMCFParser.ANCHORED:
			case JustMCFParser.EYES:
			case JustMCFParser.FEET:
			case JustMCFParser.IN:
			case JustMCFParser.AS:
			case JustMCFParser.AT:
			case JustMCFParser.FACING:
			case JustMCFParser.POSITIONED:
			case JustMCFParser.POS:
			case JustMCFParser.ROTATED:
			case JustMCFParser.ROT:
			case JustMCFParser.IF:
			case JustMCFParser.UNLESS:
			case JustMCFParser.ALL:
			case JustMCFParser.MASKED:
			case JustMCFParser.BIOME:
			case JustMCFParser.VALUE:
			case JustMCFParser.MAX:
			case JustMCFParser.ENTITY:
			case JustMCFParser.SCORE:
			case JustMCFParser.PREDICATE:
			case JustMCFParser.BLOCK:
			case JustMCFParser.BLOCKS:
			case JustMCFParser.SCB:
			case JustMCFParser.DISPLAYNAME:
			case JustMCFParser.RENDERTYPE:
			case JustMCFParser.DISPLAY:
			case JustMCFParser.ENABLE:
			case JustMCFParser.LIST:
			case JustMCFParser.DATA:
			case JustMCFParser.STORAGE:
			case JustMCFParser.RESET:
			case JustMCFParser.ADD:
			case JustMCFParser.REMOVE:
			case JustMCFParser.FUNC:
			case JustMCFParser.TAGGED:
			case JustMCFParser.DEFAULT:
			case JustMCFParser.PLAYER:
			case JustMCFParser.PLAYERS:
			case JustMCFParser.BOSSBAR:
			case JustMCFParser.VISIBLE:
			case JustMCFParser.BLUE:
			case JustMCFParser.GREEN:
			case JustMCFParser.PINK:
			case JustMCFParser.PURPLE:
			case JustMCFParser.RED:
			case JustMCFParser.WHITE:
			case JustMCFParser.YELLOW:
			case JustMCFParser.COLOR:
			case JustMCFParser.NAME:
			case JustMCFParser.STYLE:
			case JustMCFParser.NOTCHED_6:
			case JustMCFParser.NOTCHED_10:
			case JustMCFParser.NOTCHED_12:
			case JustMCFParser.NOTCHED_20:
			case JustMCFParser.PROGRESS:
			case JustMCFParser.SET:
			case JustMCFParser.TITLE:
			case JustMCFParser.SUBTITLE:
			case JustMCFParser.ACTIONBAR:
			case JustMCFParser.TIMES:
			case JustMCFParser.TEXT:
			case JustMCFParser.ITEM:
			case JustMCFParser.LOOT:
			case JustMCFParser.GIVE:
			case JustMCFParser.CLEAR:
			case JustMCFParser.FISH:
			case JustMCFParser.KILL:
			case JustMCFParser.MINE:
			case JustMCFParser.MAINHAND:
			case JustMCFParser.OFFHAND:
			case JustMCFParser.EFFECT:
			case JustMCFParser.TAG:
			case JustMCFParser.TP:
			case JustMCFParser.GET:
			case JustMCFParser.ATTR:
			case JustMCFParser.BASE:
			case JustMCFParser.DESTROY:
			case JustMCFParser.KEEP:
			case JustMCFParser.REPLACE:
			case JustMCFParser.HOLLOW:
			case JustMCFParser.OUTLINE:
			case JustMCFParser.FORCE:
			case JustMCFParser.MOVE:
			case JustMCFParser.NORMAL:
			case JustMCFParser.FILTERED:
			case JustMCFParser.INTERFACE:
			case JustMCFParser.WHILE:
			case JustMCFParser.FOR:
			case JustMCFParser.YEILD:
			case JustMCFParser.BREAK:
			case JustMCFParser.RETURN:
			case JustMCFParser.REPLACED:
			case JustMCFParser.DIM:
			case JustMCFParser.DIMENSION:
			case JustMCFParser.ITEM_MODIFIER:
			case JustMCFParser.BYTE:
			case JustMCFParser.SHORT:
			case JustMCFParser.INT_:
			case JustMCFParser.LONG:
			case JustMCFParser.FLOAT:
			case JustMCFParser.DOUBLE:
			case JustMCFParser.AcceptableName:
			case JustMCFParser.NBTName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1043;
				this.nbtName();
				this.state = 1044;
				this.selector();
				}
				break;
			case JustMCFParser.T__33:
			case JustMCFParser.T__50:
			case JustMCFParser.Selector:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1046;
				this.selector();
				this.state = 1047;
				this.match(JustMCFParser.T__30);
				this.state = 1048;
				this.nbtName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scbIdentifier(): ScbIdentifierContext {
		let _localctx: ScbIdentifierContext = new ScbIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, JustMCFParser.RULE_scbIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1053;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 1052;
				this.match(JustMCFParser.SCORE);
				}
				break;
			}
			this.state = 1055;
			this.scbCoreIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scbPlayerStatement(): ScbPlayerStatementContext {
		let _localctx: ScbPlayerStatementContext = new ScbPlayerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, JustMCFParser.RULE_scbPlayerStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1057;
			this.match(JustMCFParser.SCB);
			this.state = 1058;
			this.match(JustMCFParser.T__4);
			this.state = 1062;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__33 || _la === JustMCFParser.T__50 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)) | (1 << (JustMCFParser.NBTName - 167)))) !== 0)) {
				{
				{
				this.state = 1059;
				this.scbPlayerStatementInner();
				}
				}
				this.state = 1064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1065;
			this.match(JustMCFParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scbPlayerStatementInner(): ScbPlayerStatementInnerContext {
		let _localctx: ScbPlayerStatementInnerContext = new ScbPlayerStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, JustMCFParser.RULE_scbPlayerStatementInner);
		let _la: number;
		try {
			this.state = 1072;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				_localctx = new ScbPlayerSIScbOperationExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1067;
				this.scbOperationExpression();
				}
				break;

			case 2:
				_localctx = new ScbPlayerSIScbListContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1069;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__33 || _la === JustMCFParser.T__50 || _la === JustMCFParser.Selector) {
					{
					this.state = 1068;
					this.selector();
					}
				}

				this.state = 1071;
				this.match(JustMCFParser.LIST);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scbObjectiveStatement(): ScbObjectiveStatementContext {
		let _localctx: ScbObjectiveStatementContext = new ScbObjectiveStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, JustMCFParser.RULE_scbObjectiveStatement);
		let _la: number;
		try {
			this.state = 1138;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				_localctx = new ScbObjSDeclareWithNameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1074;
				this.match(JustMCFParser.SCB);
				this.state = 1079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__7) {
					{
					this.state = 1075;
					this.match(JustMCFParser.T__7);
					this.state = 1076;
					this.criterion();
					this.state = 1077;
					this.match(JustMCFParser.T__8);
					}
				}

				this.state = 1081;
				this.acceptableName();
				this.state = 1082;
				(_localctx as ScbObjSDeclareWithNameContext)._display = this.json();
				this.state = 1094;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 1083;
					this.match(JustMCFParser.T__4);
					this.state = 1090;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JustMCFParser.T__31 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (JustMCFParser.DISPLAYNAME - 104)) | (1 << (JustMCFParser.RENDERTYPE - 104)) | (1 << (JustMCFParser.DISPLAY - 104)) | (1 << (JustMCFParser.REMOVE - 104)))) !== 0)) {
						{
						{
						this.state = 1085;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__31) {
							{
							this.state = 1084;
							this.match(JustMCFParser.T__31);
							}
						}

						this.state = 1087;
						this.scbStatementInner();
						}
						}
						this.state = 1092;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1093;
					this.match(JustMCFParser.T__5);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new ScbObjSDeclareSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1096;
				this.match(JustMCFParser.SCB);
				this.state = 1097;
				this.match(JustMCFParser.T__7);
				this.state = 1098;
				this.criterion();
				this.state = 1099;
				this.match(JustMCFParser.T__8);
				this.state = 1100;
				this.acceptableName();
				}
				break;

			case 3:
				_localctx = new ScbObjSDeclareDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1102;
				this.match(JustMCFParser.SCB);
				this.state = 1107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__7) {
					{
					this.state = 1103;
					this.match(JustMCFParser.T__7);
					this.state = 1104;
					this.criterion();
					this.state = 1105;
					this.match(JustMCFParser.T__8);
					}
				}

				this.state = 1109;
				this.acceptableName();
				this.state = 1110;
				this.match(JustMCFParser.DEFAULT);
				this.state = 1122;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 1111;
					this.match(JustMCFParser.T__4);
					this.state = 1118;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JustMCFParser.T__31 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (JustMCFParser.DISPLAYNAME - 104)) | (1 << (JustMCFParser.RENDERTYPE - 104)) | (1 << (JustMCFParser.DISPLAY - 104)) | (1 << (JustMCFParser.REMOVE - 104)))) !== 0)) {
						{
						{
						this.state = 1113;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__31) {
							{
							this.state = 1112;
							this.match(JustMCFParser.T__31);
							}
						}

						this.state = 1115;
						this.scbStatementInner();
						}
						}
						this.state = 1120;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1121;
					this.match(JustMCFParser.T__5);
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new ScbObjSOperationContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1124;
				this.match(JustMCFParser.SCB);
				this.state = 1125;
				this.acceptableName();
				this.state = 1126;
				this.match(JustMCFParser.T__4);
				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__31 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (JustMCFParser.DISPLAYNAME - 104)) | (1 << (JustMCFParser.RENDERTYPE - 104)) | (1 << (JustMCFParser.DISPLAY - 104)) | (1 << (JustMCFParser.REMOVE - 104)))) !== 0)) {
					{
					{
					this.state = 1128;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__31) {
						{
						this.state = 1127;
						this.match(JustMCFParser.T__31);
						}
					}

					this.state = 1130;
					this.scbStatementInner();
					}
					}
					this.state = 1135;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1136;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scbStatementInner(): ScbStatementInnerContext {
		let _localctx: ScbStatementInnerContext = new ScbStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, JustMCFParser.RULE_scbStatementInner);
		let _la: number;
		try {
			this.state = 1147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.REMOVE:
				_localctx = new ScbSIRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1140;
				this.match(JustMCFParser.REMOVE);
				}
				break;
			case JustMCFParser.DISPLAYNAME:
				_localctx = new ScbSIDisplaynameContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1141;
				this.match(JustMCFParser.DISPLAYNAME);
				this.state = 1142;
				this.json();
				}
				break;
			case JustMCFParser.RENDERTYPE:
				_localctx = new ScbSIRendertypeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1143;
				this.match(JustMCFParser.RENDERTYPE);
				this.state = 1144;
				(_localctx as ScbSIRendertypeContext)._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.HEARTS || _la === JustMCFParser.INTEGER)) {
					(_localctx as ScbSIRendertypeContext)._type = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case JustMCFParser.DISPLAY:
				_localctx = new ScbSIDisplayContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1145;
				this.match(JustMCFParser.DISPLAY);
				this.state = 1146;
				this.acceptableName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bossbarStatement(): BossbarStatementContext {
		let _localctx: BossbarStatementContext = new BossbarStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, JustMCFParser.RULE_bossbarStatement);
		let _la: number;
		try {
			this.state = 1179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				_localctx = new BossbarSDeclareContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1149;
				this.match(JustMCFParser.BOSSBAR);
				this.state = 1150;
				this.nameSpaceBossbar();
				this.state = 1151;
				this.json();
				this.state = 1163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__4) {
					{
					this.state = 1152;
					this.match(JustMCFParser.T__4);
					this.state = 1159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JustMCFParser.T__31 || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (JustMCFParser.VALUE - 93)) | (1 << (JustMCFParser.MAX - 93)) | (1 << (JustMCFParser.REMOVE - 93)) | (1 << (JustMCFParser.PLAYER - 93)) | (1 << (JustMCFParser.PLAYERS - 93)) | (1 << (JustMCFParser.VISIBLE - 93)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (JustMCFParser.COLOR - 130)) | (1 << (JustMCFParser.NAME - 130)) | (1 << (JustMCFParser.STYLE - 130)) | (1 << (JustMCFParser.SET - 130)) | (1 << (JustMCFParser.GET - 130)))) !== 0)) {
						{
						{
						this.state = 1154;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__31) {
							{
							this.state = 1153;
							this.match(JustMCFParser.T__31);
							}
						}

						this.state = 1156;
						this.bossbarStatementInner();
						}
						}
						this.state = 1161;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1162;
					this.match(JustMCFParser.T__5);
					}
				}

				}
				break;

			case 2:
				_localctx = new BossbarSOperationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1165;
				this.match(JustMCFParser.BOSSBAR);
				this.state = 1166;
				this.nameSpaceBossbar();
				this.state = 1167;
				this.match(JustMCFParser.T__4);
				this.state = 1174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__31 || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (JustMCFParser.VALUE - 93)) | (1 << (JustMCFParser.MAX - 93)) | (1 << (JustMCFParser.REMOVE - 93)) | (1 << (JustMCFParser.PLAYER - 93)) | (1 << (JustMCFParser.PLAYERS - 93)) | (1 << (JustMCFParser.VISIBLE - 93)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (JustMCFParser.COLOR - 130)) | (1 << (JustMCFParser.NAME - 130)) | (1 << (JustMCFParser.STYLE - 130)) | (1 << (JustMCFParser.SET - 130)) | (1 << (JustMCFParser.GET - 130)))) !== 0)) {
					{
					{
					this.state = 1169;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__31) {
						{
						this.state = 1168;
						this.match(JustMCFParser.T__31);
						}
					}

					this.state = 1171;
					this.bossbarStatementInner();
					}
					}
					this.state = 1176;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1177;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bossbarStatementInner(): BossbarStatementInnerContext {
		let _localctx: BossbarStatementInnerContext = new BossbarStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, JustMCFParser.RULE_bossbarStatementInner);
		let _la: number;
		try {
			this.state = 1226;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				_localctx = new BossbarSIGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.GET) {
					{
					this.state = 1181;
					this.match(JustMCFParser.GET);
					}
				}

				this.state = 1184;
				(_localctx as BossbarSIGetContext)._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (JustMCFParser.VALUE - 93)) | (1 << (JustMCFParser.MAX - 93)) | (1 << (JustMCFParser.PLAYER - 93)) | (1 << (JustMCFParser.VISIBLE - 93)))) !== 0))) {
					(_localctx as BossbarSIGetContext)._type = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 2:
				_localctx = new BossbarSIRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1185;
				this.match(JustMCFParser.REMOVE);
				}
				break;

			case 3:
				_localctx = new BossbarSISetColorContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1186;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1189;
				this.match(JustMCFParser.COLOR);
				this.state = 1190;
				(_localctx as BossbarSISetColorContext)._color = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (JustMCFParser.BLUE - 123)) | (1 << (JustMCFParser.GREEN - 123)) | (1 << (JustMCFParser.PINK - 123)) | (1 << (JustMCFParser.PURPLE - 123)) | (1 << (JustMCFParser.RED - 123)) | (1 << (JustMCFParser.WHITE - 123)) | (1 << (JustMCFParser.YELLOW - 123)))) !== 0))) {
					(_localctx as BossbarSISetColorContext)._color = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 4:
				_localctx = new BossbarSISetMaxContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1191;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1194;
				this.match(JustMCFParser.MAX);
				this.state = 1195;
				this.match(JustMCFParser.NUMBER_INT);
				}
				break;

			case 5:
				_localctx = new BossbarSISetNameContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1196;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1199;
				this.match(JustMCFParser.NAME);
				this.state = 1200;
				this.json();
				}
				break;

			case 6:
				_localctx = new BossbarSISetPlayerContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1201;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1204;
				this.match(JustMCFParser.PLAYERS);
				this.state = 1205;
				this.selector();
				}
				break;

			case 7:
				_localctx = new BossbarSISetPlayerNullContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1206;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1209;
				this.match(JustMCFParser.PLAYERS);
				this.state = 1210;
				this.match(JustMCFParser.DEFAULT);
				}
				break;

			case 8:
				_localctx = new BossbarSISetStyleContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1211;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1214;
				this.match(JustMCFParser.STYLE);
				this.state = 1215;
				(_localctx as BossbarSISetStyleContext)._style = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (JustMCFParser.NOTCHED_6 - 133)) | (1 << (JustMCFParser.NOTCHED_10 - 133)) | (1 << (JustMCFParser.NOTCHED_12 - 133)) | (1 << (JustMCFParser.NOTCHED_20 - 133)) | (1 << (JustMCFParser.PROGRESS - 133)))) !== 0))) {
					(_localctx as BossbarSISetStyleContext)._style = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 9:
				_localctx = new BossbarSISetValueContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1216;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1219;
				this.match(JustMCFParser.VALUE);
				this.state = 1220;
				this.match(JustMCFParser.NUMBER_INT);
				}
				break;

			case 10:
				_localctx = new BossbarSISetVisibleContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1221;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1224;
				this.match(JustMCFParser.VISIBLE);
				this.state = 1225;
				this.boolValue();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bossbarOperationExpression(): BossbarOperationExpressionContext {
		let _localctx: BossbarOperationExpressionContext = new BossbarOperationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, JustMCFParser.RULE_bossbarOperationExpression);
		let _la: number;
		try {
			this.state = 1244;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				_localctx = new BossbarOpExprGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1228;
				this.bossbarIdentifier();
				this.state = 1230;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
				case 1:
					{
					this.state = 1229;
					(_localctx as BossbarOpExprGetContext)._type = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (JustMCFParser.VALUE - 93)) | (1 << (JustMCFParser.MAX - 93)) | (1 << (JustMCFParser.PLAYER - 93)) | (1 << (JustMCFParser.VISIBLE - 93)))) !== 0))) {
						(_localctx as BossbarOpExprGetContext)._type = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new BossbarOpExprAssignValueContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1232;
				this.bossbarIdentifier();
				this.state = 1234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.VALUE) {
					{
					this.state = 1233;
					this.match(JustMCFParser.VALUE);
					}
				}

				this.state = 1236;
				this.match(JustMCFParser.T__6);
				this.state = 1237;
				this.match(JustMCFParser.NUMBER_INT);
				}
				break;

			case 3:
				_localctx = new BossbarOpExprAssignMaxContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1239;
				this.bossbarIdentifier();
				this.state = 1240;
				this.match(JustMCFParser.MAX);
				this.state = 1241;
				this.match(JustMCFParser.T__6);
				this.state = 1242;
				this.match(JustMCFParser.NUMBER_INT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bossbarIdentifier(): BossbarIdentifierContext {
		let _localctx: BossbarIdentifierContext = new BossbarIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, JustMCFParser.RULE_bossbarIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1246;
			this.match(JustMCFParser.BOSSBAR);
			this.state = 1247;
			this.nameSpaceBossbar();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public titleStatement(): TitleStatementContext {
		let _localctx: TitleStatementContext = new TitleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, JustMCFParser.RULE_titleStatement);
		let _la: number;
		try {
			this.state = 1272;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				_localctx = new TitleSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1249;
				this.match(JustMCFParser.TITLE);
				this.state = 1250;
				this.match(JustMCFParser.T__4);
				this.state = 1254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__33 || _la === JustMCFParser.T__50 || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1251;
					this.titleStatementInner();
					}
					}
					this.state = 1256;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1257;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				_localctx = new TitleSSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1258;
				this.match(JustMCFParser.TITLE);
				this.state = 1259;
				this.selector();
				this.state = 1260;
				this.match(JustMCFParser.T__4);
				this.state = 1267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__31 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (JustMCFParser.RESET - 113)) | (1 << (JustMCFParser.TITLE - 113)) | (1 << (JustMCFParser.SUBTITLE - 113)) | (1 << (JustMCFParser.ACTIONBAR - 113)) | (1 << (JustMCFParser.TIMES - 113)))) !== 0) || _la === JustMCFParser.CLEAR) {
					{
					{
					this.state = 1262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__31) {
						{
						this.state = 1261;
						this.match(JustMCFParser.T__31);
						}
					}

					this.state = 1264;
					this.titleSelectorStatementInner();
					}
					}
					this.state = 1269;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1270;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public titleStatementInner(): TitleStatementInnerContext {
		let _localctx: TitleStatementInnerContext = new TitleStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, JustMCFParser.RULE_titleStatementInner);
		let _la: number;
		try {
			this.state = 1291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				_localctx = new TitleSISelectorSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1274;
				this.selector();
				this.state = 1275;
				this.match(JustMCFParser.T__31);
				this.state = 1276;
				this.titleSelectorStatementInner();
				}
				break;

			case 2:
				_localctx = new TitleSISelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1278;
				this.selector();
				this.state = 1279;
				this.match(JustMCFParser.T__4);
				this.state = 1286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__31 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (JustMCFParser.RESET - 113)) | (1 << (JustMCFParser.TITLE - 113)) | (1 << (JustMCFParser.SUBTITLE - 113)) | (1 << (JustMCFParser.ACTIONBAR - 113)) | (1 << (JustMCFParser.TIMES - 113)))) !== 0) || _la === JustMCFParser.CLEAR) {
					{
					{
					this.state = 1281;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__31) {
						{
						this.state = 1280;
						this.match(JustMCFParser.T__31);
						}
					}

					this.state = 1283;
					this.titleSelectorStatementInner();
					}
					}
					this.state = 1288;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1289;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public titleSelectorStatementInner(): TitleSelectorStatementInnerContext {
		let _localctx: TitleSelectorStatementInnerContext = new TitleSelectorStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, JustMCFParser.RULE_titleSelectorStatementInner);
		let _la: number;
		try {
			this.state = 1302;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.TITLE:
			case JustMCFParser.SUBTITLE:
			case JustMCFParser.ACTIONBAR:
				_localctx = new TitleSSIJsonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1293;
				(_localctx as TitleSSIJsonContext)._pos = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (JustMCFParser.TITLE - 139)) | (1 << (JustMCFParser.SUBTITLE - 139)) | (1 << (JustMCFParser.ACTIONBAR - 139)))) !== 0))) {
					(_localctx as TitleSSIJsonContext)._pos = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1294;
				this.json();
				}
				break;
			case JustMCFParser.CLEAR:
				_localctx = new TitleSSIClearContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1295;
				this.match(JustMCFParser.CLEAR);
				}
				break;
			case JustMCFParser.RESET:
				_localctx = new TitleSSIResetContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1296;
				this.match(JustMCFParser.RESET);
				}
				break;
			case JustMCFParser.TIMES:
				_localctx = new TitleSSITimesContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1297;
				this.match(JustMCFParser.TIMES);
				this.state = 1298;
				this.number();
				this.state = 1299;
				this.number();
				this.state = 1300;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public titleIndependentStatementInner(): TitleIndependentStatementInnerContext {
		let _localctx: TitleIndependentStatementInnerContext = new TitleIndependentStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, JustMCFParser.RULE_titleIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				_localctx = new TitleISIJsonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1304;
				(_localctx as TitleISIJsonContext)._pos = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (JustMCFParser.TITLE - 139)) | (1 << (JustMCFParser.SUBTITLE - 139)) | (1 << (JustMCFParser.ACTIONBAR - 139)))) !== 0))) {
					(_localctx as TitleISIJsonContext)._pos = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1305;
				this.json();
				}
				break;

			case 2:
				_localctx = new TitleISIClearContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1306;
				this.match(JustMCFParser.TITLE);
				this.state = 1307;
				this.match(JustMCFParser.T__31);
				this.state = 1308;
				this.match(JustMCFParser.CLEAR);
				}
				break;

			case 3:
				_localctx = new TitleISIResetContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1309;
				this.match(JustMCFParser.TITLE);
				this.state = 1310;
				this.match(JustMCFParser.T__31);
				this.state = 1311;
				this.match(JustMCFParser.RESET);
				}
				break;

			case 4:
				_localctx = new TitleISITimesContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1312;
				this.match(JustMCFParser.TITLE);
				this.state = 1313;
				this.match(JustMCFParser.T__31);
				this.state = 1314;
				this.match(JustMCFParser.TIMES);
				this.state = 1315;
				this.number();
				this.state = 1316;
				this.number();
				this.state = 1317;
				this.number();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public displayStatement(): DisplayStatementContext {
		let _localctx: DisplayStatementContext = new DisplayStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, JustMCFParser.RULE_displayStatement);
		let _la: number;
		try {
			this.state = 1344;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				_localctx = new DisplaySCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1321;
				this.match(JustMCFParser.DISPLAY);
				this.state = 1322;
				this.match(JustMCFParser.T__4);
				this.state = 1326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__33 || _la === JustMCFParser.T__50 || _la === JustMCFParser.SCB || _la === JustMCFParser.BOSSBAR || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1323;
					this.displayStatementInner();
					}
					}
					this.state = 1328;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1329;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				_localctx = new DisplaySSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1330;
				this.match(JustMCFParser.DISPLAY);
				this.state = 1331;
				this.selector();
				this.state = 1332;
				this.match(JustMCFParser.T__4);
				this.state = 1339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__31 || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (JustMCFParser.BOSSBAR - 121)) | (1 << (JustMCFParser.TITLE - 121)) | (1 << (JustMCFParser.SUBTITLE - 121)) | (1 << (JustMCFParser.ACTIONBAR - 121)) | (1 << (JustMCFParser.TEXT - 121)))) !== 0)) {
					{
					{
					this.state = 1334;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__31) {
						{
						this.state = 1333;
						this.match(JustMCFParser.T__31);
						}
					}

					this.state = 1336;
					this.displayIndependentStatementInner();
					}
					}
					this.state = 1341;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1342;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public displayStatementInner(): DisplayStatementInnerContext {
		let _localctx: DisplayStatementInnerContext = new DisplayStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, JustMCFParser.RULE_displayStatementInner);
		let _la: number;
		try {
			this.state = 1365;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				_localctx = new DisplaySIScbContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1346;
				this.scbObjectiveStatement();
				}
				break;

			case 2:
				_localctx = new DisplaySIBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1347;
				this.bossbarStatement();
				}
				break;

			case 3:
				_localctx = new DisplaySISelectorSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1348;
				this.selector();
				this.state = 1349;
				this.match(JustMCFParser.T__31);
				this.state = 1350;
				this.displayIndependentStatementInner();
				}
				break;

			case 4:
				_localctx = new DisplaySISelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1352;
				this.selector();
				this.state = 1353;
				this.match(JustMCFParser.T__4);
				this.state = 1360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__31 || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (JustMCFParser.BOSSBAR - 121)) | (1 << (JustMCFParser.TITLE - 121)) | (1 << (JustMCFParser.SUBTITLE - 121)) | (1 << (JustMCFParser.ACTIONBAR - 121)) | (1 << (JustMCFParser.TEXT - 121)))) !== 0)) {
					{
					{
					this.state = 1355;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__31) {
						{
						this.state = 1354;
						this.match(JustMCFParser.T__31);
						}
					}

					this.state = 1357;
					this.displayIndependentStatementInner();
					}
					}
					this.state = 1362;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1363;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public displayIndependentStatementInner(): DisplayIndependentStatementInnerContext {
		let _localctx: DisplayIndependentStatementInnerContext = new DisplayIndependentStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, JustMCFParser.RULE_displayIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1383;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				_localctx = new DisplayISITitleSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1367;
				this.titleIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new DisplayISITitleCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1368;
				this.match(JustMCFParser.TITLE);
				this.state = 1369;
				this.match(JustMCFParser.T__4);
				this.state = 1373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (JustMCFParser.RESET - 113)) | (1 << (JustMCFParser.TITLE - 113)) | (1 << (JustMCFParser.SUBTITLE - 113)) | (1 << (JustMCFParser.ACTIONBAR - 113)) | (1 << (JustMCFParser.TIMES - 113)))) !== 0) || _la === JustMCFParser.CLEAR) {
					{
					{
					this.state = 1370;
					this.titleSelectorStatementInner();
					}
					}
					this.state = 1375;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1376;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 3:
				_localctx = new DisplayISITextContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1377;
				this.match(JustMCFParser.TEXT);
				this.state = 1378;
				this.json();
				}
				break;

			case 4:
				_localctx = new DisplayISIBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1379;
				this.match(JustMCFParser.BOSSBAR);
				this.state = 1380;
				this.nameSpaceBossbar();
				this.state = 1381;
				this.json();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public itemStatement(): ItemStatementContext {
		let _localctx: ItemStatementContext = new ItemStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, JustMCFParser.RULE_itemStatement);
		let _la: number;
		try {
			this.state = 1405;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				_localctx = new ItemSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1385;
				this.match(JustMCFParser.ITEM);
				this.state = 1386;
				this.match(JustMCFParser.T__4);
				this.state = 1390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__50 - 34)) | (1 << (JustMCFParser.NUMBER_INT - 34)) | (1 << (JustMCFParser.NUMBER - 34)))) !== 0) || _la === JustMCFParser.Pos1 || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1387;
					this.itemStatementInner();
					}
					}
					this.state = 1392;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1393;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				_localctx = new ItemSSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1394;
				this.match(JustMCFParser.ITEM);
				this.state = 1395;
				this.selector();
				this.state = 1396;
				this.match(JustMCFParser.T__4);
				this.state = 1400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__17 || _la === JustMCFParser.T__18 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1397;
					this.itemSelectorStatementInner();
					}
					}
					this.state = 1402;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1403;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lootStatement(): LootStatementContext {
		let _localctx: LootStatementContext = new LootStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, JustMCFParser.RULE_lootStatement);
		let _la: number;
		try {
			this.state = 1427;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				_localctx = new LootSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1407;
				this.match(JustMCFParser.LOOT);
				this.state = 1408;
				this.match(JustMCFParser.T__4);
				this.state = 1412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__50 - 34)) | (1 << (JustMCFParser.NUMBER_INT - 34)) | (1 << (JustMCFParser.NUMBER - 34)))) !== 0) || _la === JustMCFParser.Pos1 || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1409;
					this.lootStatementInner();
					}
					}
					this.state = 1414;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1415;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				_localctx = new LootSSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1416;
				this.match(JustMCFParser.LOOT);
				this.state = 1417;
				this.selector();
				this.state = 1418;
				this.match(JustMCFParser.T__4);
				this.state = 1422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__17 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1419;
					this.lootSelectorStatementInner();
					}
					}
					this.state = 1424;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1425;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lootStatementInner(): LootStatementInnerContext {
		let _localctx: LootStatementInnerContext = new LootStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, JustMCFParser.RULE_lootStatementInner);
		let _la: number;
		try {
			this.state = 1458;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				_localctx = new LootSIInsertContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1429;
				this.pos3Identifier();
				this.state = 1430;
				this.match(JustMCFParser.T__17);
				this.state = 1431;
				this.lootSource();
				}
				break;

			case 2:
				_localctx = new LootSISpawnContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1433;
				this.pos3Identifier();
				this.state = 1434;
				this.match(JustMCFParser.T__6);
				this.state = 1435;
				this.lootSource();
				}
				break;

			case 3:
				_localctx = new LootSIReplaceBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1437;
				this.pos3Identifier();
				this.state = 1438;
				this.match(JustMCFParser.T__14);
				this.state = 1439;
				this.lootIndependentStatementInnerReplaceEntity();
				}
				break;

			case 4:
				_localctx = new LootSIGiveContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1441;
				this.selector();
				this.state = 1442;
				this.lootIndependentStatementInnerGive();
				}
				break;

			case 5:
				_localctx = new LootSIReplaceEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1444;
				this.selector();
				this.state = 1445;
				this.match(JustMCFParser.T__14);
				this.state = 1446;
				this.lootIndependentStatementInnerReplaceEntity();
				}
				break;

			case 6:
				_localctx = new LootSISelectorNestContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1448;
				this.selector();
				this.state = 1449;
				this.match(JustMCFParser.T__4);
				this.state = 1453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__17 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1450;
					this.lootSelectorStatementInner();
					}
					}
					this.state = 1455;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1456;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lootSelectorStatementInner(): LootSelectorStatementInnerContext {
		let _localctx: LootSelectorStatementInnerContext = new LootSelectorStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, JustMCFParser.RULE_lootSelectorStatementInner);
		try {
			this.state = 1462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1460;
				this.lootIndependentStatementInnerGive();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1461;
				this.lootIndependentStatementInnerReplaceEntity();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lootIndependentStatementInnerGive(): LootIndependentStatementInnerGiveContext {
		let _localctx: LootIndependentStatementInnerGiveContext = new LootIndependentStatementInnerGiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, JustMCFParser.RULE_lootIndependentStatementInnerGive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1464;
			_la = this._input.LA(1);
			if (!(_la === JustMCFParser.T__17 || _la === JustMCFParser.GIVE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1465;
			this.lootSource();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lootIndependentStatementInnerReplaceEntity(): LootIndependentStatementInnerReplaceEntityContext {
		let _localctx: LootIndependentStatementInnerReplaceEntityContext = new LootIndependentStatementInnerReplaceEntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, JustMCFParser.RULE_lootIndependentStatementInnerReplaceEntity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1467;
			this.item_slot();
			this.state = 1468;
			this.match(JustMCFParser.T__6);
			this.state = 1469;
			this.lootSource();
			this.state = 1474;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				{
				this.state = 1471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__12) {
					{
					this.state = 1470;
					this.match(JustMCFParser.T__12);
					}
				}

				this.state = 1473;
				this.match(JustMCFParser.NUMBER_INT);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lootSource(): LootSourceContext {
		let _localctx: LootSourceContext = new LootSourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, JustMCFParser.RULE_lootSource);
		let _la: number;
		try {
			this.state = 1500;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				_localctx = new LootSourceLootContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1476;
				this.match(JustMCFParser.LOOT);
				this.state = 1477;
				this.nameSpaceLoot();
				}
				break;

			case 2:
				_localctx = new LootSourceFishHandContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1478;
				this.match(JustMCFParser.FISH);
				this.state = 1479;
				this.nameSpaceLoot();
				this.state = 1480;
				this.pos3Identifier();
				this.state = 1482;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
				case 1:
					{
					this.state = 1481;
					(_localctx as LootSourceFishHandContext)._hand = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.MAINHAND || _la === JustMCFParser.OFFHAND)) {
						(_localctx as LootSourceFishHandContext)._hand = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new LootSourceFishToolContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1484;
				this.match(JustMCFParser.FISH);
				this.state = 1485;
				this.nameSpaceLoot();
				this.state = 1486;
				this.pos3Identifier();
				this.state = 1487;
				this.nameSpaceItem();
				}
				break;

			case 4:
				_localctx = new LootSourceKillContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1489;
				this.match(JustMCFParser.KILL);
				this.state = 1490;
				this.selector();
				}
				break;

			case 5:
				_localctx = new LootSourceMineHandContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1491;
				this.match(JustMCFParser.MINE);
				this.state = 1492;
				this.pos3Identifier();
				this.state = 1494;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
				case 1:
					{
					this.state = 1493;
					(_localctx as LootSourceMineHandContext)._hand = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.MAINHAND || _la === JustMCFParser.OFFHAND)) {
						(_localctx as LootSourceMineHandContext)._hand = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				break;

			case 6:
				_localctx = new LootSourceMineToolContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1496;
				this.match(JustMCFParser.MINE);
				this.state = 1497;
				this.pos3Identifier();
				this.state = 1498;
				this.nameSpaceItem();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public itemStatementInner(): ItemStatementInnerContext {
		let _localctx: ItemStatementInnerContext = new ItemStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, JustMCFParser.RULE_itemStatementInner);
		let _la: number;
		try {
			this.state = 1524;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				_localctx = new ItemSIGiveAndClearContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1502;
				this.selector();
				this.state = 1503;
				this.giveAndClearIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new ItemSIEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1505;
				this.selector();
				this.state = 1506;
				this.match(JustMCFParser.T__14);
				this.state = 1507;
				this.itemIndependentStatementInner();
				}
				break;

			case 3:
				_localctx = new ItemSIBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1509;
				this.pos3Identifier();
				this.state = 1510;
				this.match(JustMCFParser.T__14);
				this.state = 1511;
				this.itemIndependentStatementInner();
				}
				break;

			case 4:
				_localctx = new ItemSILootInnerContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1513;
				this.lootStatementInner();
				}
				break;

			case 5:
				_localctx = new ItemSISelectorNestContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1514;
				this.selector();
				this.state = 1515;
				this.match(JustMCFParser.T__4);
				this.state = 1519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__17 || _la === JustMCFParser.T__18 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1516;
					this.itemSelectorStatementInner();
					}
					}
					this.state = 1521;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1522;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public itemSelectorStatementInner(): ItemSelectorStatementInnerContext {
		let _localctx: ItemSelectorStatementInnerContext = new ItemSelectorStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, JustMCFParser.RULE_itemSelectorStatementInner);
		try {
			this.state = 1529;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				_localctx = new ItemSSIGiveAndClearContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1526;
				this.giveAndClearIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new ItemSSIItemContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1527;
				this.itemIndependentStatementInner();
				}
				break;

			case 3:
				_localctx = new ItemSSILootInnerContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1528;
				this.lootSelectorStatementInner();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public itemIndependentStatementInner(): ItemIndependentStatementInnerContext {
		let _localctx: ItemIndependentStatementInnerContext = new ItemIndependentStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, JustMCFParser.RULE_itemIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1560;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				_localctx = new ItemISIReplaceWithContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1531;
				this.item_slot();
				this.state = 1532;
				this.match(JustMCFParser.T__6);
				this.state = 1533;
				this.nameSpaceItem();
				this.state = 1538;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
				case 1:
					{
					this.state = 1535;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__12) {
						{
						this.state = 1534;
						this.match(JustMCFParser.T__12);
						}
					}

					this.state = 1537;
					this.match(JustMCFParser.NUMBER_INT);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new ItemISIReplaceFromEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1540;
				this.item_slot();
				this.state = 1541;
				this.match(JustMCFParser.T__6);
				this.state = 1542;
				this.selector();
				this.state = 1543;
				this.match(JustMCFParser.T__14);
				this.state = 1544;
				this.item_slot();
				this.state = 1546;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
				case 1:
					{
					this.state = 1545;
					this.nameSpaceItemModifier();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new ItemISIReplaceFromBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1548;
				this.item_slot();
				this.state = 1549;
				this.match(JustMCFParser.T__6);
				this.state = 1550;
				this.pos3Identifier();
				this.state = 1551;
				this.match(JustMCFParser.T__14);
				this.state = 1552;
				this.item_slot();
				this.state = 1554;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
				case 1:
					{
					this.state = 1553;
					this.nameSpaceItemModifier();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new ItemISIModifyContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1556;
				this.item_slot();
				this.state = 1557;
				this.match(JustMCFParser.T__17);
				this.state = 1558;
				this.nameSpaceItemModifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public giveAndClearIndependentStatementInner(): GiveAndClearIndependentStatementInnerContext {
		let _localctx: GiveAndClearIndependentStatementInnerContext = new GiveAndClearIndependentStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, JustMCFParser.RULE_giveAndClearIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1578;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__17:
			case JustMCFParser.GIVE:
				_localctx = new GiveISIContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1562;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__17 || _la === JustMCFParser.GIVE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1563;
				this.nameSpaceItem();
				this.state = 1568;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
				case 1:
					{
					this.state = 1565;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__12) {
						{
						this.state = 1564;
						this.match(JustMCFParser.T__12);
						}
					}

					this.state = 1567;
					this.match(JustMCFParser.NUMBER_INT);
					}
					break;
				}
				}
				break;
			case JustMCFParser.T__18:
			case JustMCFParser.CLEAR:
				_localctx = new ClearISIContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1570;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__18 || _la === JustMCFParser.CLEAR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1571;
				this.item_predicate();
				this.state = 1576;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
				case 1:
					{
					this.state = 1573;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__12) {
						{
						this.state = 1572;
						this.match(JustMCFParser.T__12);
						}
					}

					this.state = 1575;
					this.match(JustMCFParser.NUMBER_INT);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attrStatement(): AttrStatementContext {
		let _localctx: AttrStatementContext = new AttrStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, JustMCFParser.RULE_attrStatement);
		let _la: number;
		try {
			this.state = 1600;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
			case 1:
				_localctx = new AttrSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1580;
				this.match(JustMCFParser.ATTR);
				this.state = 1581;
				this.match(JustMCFParser.T__4);
				this.state = 1585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__33 || _la === JustMCFParser.T__50 || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1582;
					this.attrStatementInner();
					}
					}
					this.state = 1587;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1588;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				_localctx = new AttrSSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1589;
				this.match(JustMCFParser.ATTR);
				this.state = 1590;
				this.selector();
				this.state = 1591;
				this.match(JustMCFParser.T__4);
				this.state = 1595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1592;
					this.attrIndependentStatementInner();
					}
					}
					this.state = 1597;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1598;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attrStatementInner(): AttrStatementInnerContext {
		let _localctx: AttrStatementInnerContext = new AttrStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, JustMCFParser.RULE_attrStatementInner);
		let _la: number;
		try {
			this.state = 1616;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				_localctx = new AttrSISingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1602;
				this.selector();
				this.state = 1603;
				this.match(JustMCFParser.T__14);
				this.state = 1604;
				this.attrIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new AttrSISelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1606;
				this.selector();
				this.state = 1607;
				this.match(JustMCFParser.T__4);
				this.state = 1611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1608;
					this.attrIndependentStatementInner();
					}
					}
					this.state = 1613;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1614;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attrIndependentStatementInner(): AttrIndependentStatementInnerContext {
		let _localctx: AttrIndependentStatementInnerContext = new AttrIndependentStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, JustMCFParser.RULE_attrIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1662;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				_localctx = new AttrISIGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1618;
				this.registerName();
				this.state = 1620;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
				case 1:
					{
					this.state = 1619;
					this.match(JustMCFParser.ALL);
					}
					break;
				}
				this.state = 1626;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
				case 1:
					{
					this.state = 1623;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__12) {
						{
						this.state = 1622;
						this.match(JustMCFParser.T__12);
						}
					}

					this.state = 1625;
					this.number();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new AttrISIGetBaseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1628;
				this.registerName();
				this.state = 1629;
				this.match(JustMCFParser.BASE);
				this.state = 1634;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
				case 1:
					{
					this.state = 1631;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__12) {
						{
						this.state = 1630;
						this.match(JustMCFParser.T__12);
						}
					}

					this.state = 1633;
					this.number();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new AttrISISetBaseContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1636;
				this.registerName();
				this.state = 1637;
				this.match(JustMCFParser.BASE);
				this.state = 1638;
				this.match(JustMCFParser.T__6);
				this.state = 1639;
				this.number();
				}
				break;

			case 4:
				_localctx = new AttrISIModifierAddContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1641;
				this.registerName();
				this.state = 1642;
				this.match(JustMCFParser.T__17);
				this.state = 1643;
				this.match(JustMCFParser.UUID16_);
				this.state = 1644;
				this.string();
				this.state = 1645;
				this.match(JustMCFParser.T__7);
				this.state = 1646;
				(_localctx as AttrISIModifierAddContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (JustMCFParser.T__12 - 13)) | (1 << (JustMCFParser.T__28 - 13)) | (1 << (JustMCFParser.T__32 - 13)))) !== 0))) {
					(_localctx as AttrISIModifierAddContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1647;
				this.number();
				this.state = 1648;
				this.match(JustMCFParser.T__8);
				}
				break;

			case 5:
				_localctx = new AttrISIModifierRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1650;
				this.registerName();
				this.state = 1651;
				this.match(JustMCFParser.T__18);
				this.state = 1652;
				this.match(JustMCFParser.UUID16_);
				}
				break;

			case 6:
				_localctx = new AttrISIModifierGetContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1654;
				this.registerName();
				this.state = 1655;
				this.match(JustMCFParser.UUID16_);
				this.state = 1660;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
				case 1:
					{
					this.state = 1657;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__12) {
						{
						this.state = 1656;
						this.match(JustMCFParser.T__12);
						}
					}

					this.state = 1659;
					this.number();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entityStatement(): EntityStatementContext {
		let _localctx: EntityStatementContext = new EntityStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, JustMCFParser.RULE_entityStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1751;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				_localctx = new EntitySDeclarePlayerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1664;
				this.match(JustMCFParser.ENTITY);
				this.state = 1665;
				this.match(JustMCFParser.T__7);
				this.state = 1666;
				this.match(JustMCFParser.PLAYER);
				this.state = 1667;
				this.match(JustMCFParser.T__8);
				this.state = 1668;
				this.playerName();
				this.state = 1675;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1670;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__2) {
							{
							this.state = 1669;
							this.match(JustMCFParser.T__2);
							}
						}

						this.state = 1672;
						this.playerName();
						}
						}
					}
					this.state = 1677;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
				}
				}
				break;

			case 2:
				_localctx = new EntitySDeclareContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1678;
				this.match(JustMCFParser.ENTITY);
				this.state = 1679;
				this.match(JustMCFParser.T__7);
				this.state = 1680;
				(_localctx as EntitySDeclareContext)._type = this.nameSpaceEntity();
				this.state = 1681;
				this.match(JustMCFParser.T__8);
				this.state = 1682;
				this.pos3Identifier();
				this.state = 1684;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (JustMCFParser.T__40 - 41)) | (1 << (JustMCFParser.T__41 - 41)) | (1 << (JustMCFParser.T__42 - 41)) | (1 << (JustMCFParser.T__43 - 41)) | (1 << (JustMCFParser.T__44 - 41)) | (1 << (JustMCFParser.ByteNumber - 41)) | (1 << (JustMCFParser.ShortNumber - 41)) | (1 << (JustMCFParser.LongNumber - 41)) | (1 << (JustMCFParser.FloatNumber - 41)) | (1 << (JustMCFParser.DoubleNumber - 41)) | (1 << (JustMCFParser.STRING2 - 41)) | (1 << (JustMCFParser.STRING - 41)))) !== 0)) {
					{
					this.state = 1683;
					this.nbt();
					}
				}

				this.state = 1697;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
				case 1:
					{
					this.state = 1686;
					this.match(JustMCFParser.T__4);
					this.state = 1693;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JustMCFParser.T__31 || _la === JustMCFParser.TAG) {
						{
						{
						this.state = 1688;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__31) {
							{
							this.state = 1687;
							this.match(JustMCFParser.T__31);
							}
						}

						this.state = 1690;
						this.entityDeclareStatementInner();
						}
						}
						this.state = 1695;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1696;
					this.match(JustMCFParser.T__5);
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new EntitySDeclareWithNameContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1699;
				this.match(JustMCFParser.ENTITY);
				this.state = 1700;
				this.match(JustMCFParser.T__7);
				this.state = 1701;
				(_localctx as EntitySDeclareWithNameContext)._type = this.nameSpaceEntity();
				this.state = 1702;
				this.match(JustMCFParser.T__8);
				this.state = 1704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER_INT || _la === JustMCFParser.NUMBER || _la === JustMCFParser.Pos1) {
					{
					this.state = 1703;
					this.pos3Identifier();
					}
				}

				this.state = 1706;
				this.acceptableName();
				this.state = 1708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (JustMCFParser.T__40 - 41)) | (1 << (JustMCFParser.T__41 - 41)) | (1 << (JustMCFParser.T__42 - 41)) | (1 << (JustMCFParser.T__43 - 41)) | (1 << (JustMCFParser.T__44 - 41)) | (1 << (JustMCFParser.ByteNumber - 41)) | (1 << (JustMCFParser.ShortNumber - 41)) | (1 << (JustMCFParser.LongNumber - 41)) | (1 << (JustMCFParser.FloatNumber - 41)) | (1 << (JustMCFParser.DoubleNumber - 41)) | (1 << (JustMCFParser.STRING2 - 41)) | (1 << (JustMCFParser.STRING - 41)))) !== 0)) {
					{
					this.state = 1707;
					this.nbt();
					}
				}

				this.state = 1728;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
				case 1:
					{
					this.state = 1710;
					this.match(JustMCFParser.T__4);
					this.state = 1717;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1712;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === JustMCFParser.T__31) {
								{
								this.state = 1711;
								this.match(JustMCFParser.T__31);
								}
							}

							this.state = 1714;
							this.entityDeclareStatementInner();
							}
							}
						}
						this.state = 1719;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
					}
					this.state = 1724;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JustMCFParser.T__31) {
						{
						{
						this.state = 1720;
						this.match(JustMCFParser.T__31);
						this.state = 1721;
						this.entityIndependentStatementInner();
						}
						}
						this.state = 1726;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1727;
					this.match(JustMCFParser.T__5);
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new EntitySCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1730;
				this.match(JustMCFParser.ENTITY);
				this.state = 1731;
				this.match(JustMCFParser.T__4);
				this.state = 1735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__33 || _la === JustMCFParser.T__50 || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1732;
					this.entityStatementInner();
					}
					}
					this.state = 1737;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1738;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 5:
				_localctx = new EntitySSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1739;
				this.match(JustMCFParser.ENTITY);
				this.state = 1740;
				this.selector();
				this.state = 1741;
				this.match(JustMCFParser.T__4);
				this.state = 1746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__31) {
					{
					{
					this.state = 1742;
					this.match(JustMCFParser.T__31);
					this.state = 1743;
					this.entityIndependentStatementInner();
					}
					}
					this.state = 1748;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1749;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public playerName(): PlayerNameContext {
		let _localctx: PlayerNameContext = new PlayerNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, JustMCFParser.RULE_playerName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1754;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__33) {
				{
				this.state = 1753;
				_localctx._fake = this.match(JustMCFParser.T__33);
				}
			}

			this.state = 1756;
			this.acceptableName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entityDeclareStatementInner(): EntityDeclareStatementInnerContext {
		let _localctx: EntityDeclareStatementInnerContext = new EntityDeclareStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, JustMCFParser.RULE_entityDeclareStatementInner);
		let _la: number;
		try {
			_localctx = new EntityDeclareSITagContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1758;
			this.match(JustMCFParser.TAG);
			this.state = 1759;
			this.match(JustMCFParser.T__6);
			this.state = 1760;
			this.acceptableName();
			this.state = 1765;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 1761;
				this.match(JustMCFParser.T__2);
				this.state = 1762;
				this.acceptableName();
				}
				}
				this.state = 1767;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagIndependentStatementInner(): TagIndependentStatementInnerContext {
		let _localctx: TagIndependentStatementInnerContext = new TagIndependentStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, JustMCFParser.RULE_tagIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1776;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				_localctx = new TagISIAddContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1768;
				this.match(JustMCFParser.TAG);
				this.state = 1769;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__17 || _la === JustMCFParser.ADD)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1770;
				this.acceptableName();
				}
				break;

			case 2:
				_localctx = new TagISIRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1771;
				this.match(JustMCFParser.TAG);
				this.state = 1772;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__18 || _la === JustMCFParser.REMOVE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1773;
				this.acceptableName();
				}
				break;

			case 3:
				_localctx = new TagISIListContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1774;
				this.match(JustMCFParser.TAG);
				this.state = 1775;
				this.match(JustMCFParser.LIST);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public effectIndependentStatementInner(): EffectIndependentStatementInnerContext {
		let _localctx: EffectIndependentStatementInnerContext = new EffectIndependentStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, JustMCFParser.RULE_effectIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1809;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				_localctx = new EffectISIClearContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1778;
				this.match(JustMCFParser.EFFECT);
				this.state = 1779;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__18 || _la === JustMCFParser.CLEAR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1780;
				this.acceptableName();
				}
				break;

			case 2:
				_localctx = new EffectISIGiveContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1781;
				this.match(JustMCFParser.EFFECT);
				this.state = 1782;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__17 || _la === JustMCFParser.GIVE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1783;
				this.acceptableName();
				this.state = 1785;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
				case 1:
					{
					this.state = 1784;
					(_localctx as EffectISIGiveContext)._second = this.match(JustMCFParser.NUMBER_INT);
					}
					break;
				}
				this.state = 1788;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 214, this._ctx) ) {
				case 1:
					{
					this.state = 1787;
					(_localctx as EffectISIGiveContext)._amplifier = this.match(JustMCFParser.NUMBER_INT);
					}
					break;
				}
				this.state = 1791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.TRUE || _la === JustMCFParser.FALSE) {
					{
					this.state = 1790;
					this.boolValue();
					}
				}

				}
				break;

			case 3:
				_localctx = new EffectISIGiveSpContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1793;
				this.match(JustMCFParser.EFFECT);
				this.state = 1794;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__17 || _la === JustMCFParser.GIVE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1795;
				this.acceptableName();
				this.state = 1799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__7) {
					{
					this.state = 1796;
					this.match(JustMCFParser.T__7);
					this.state = 1797;
					(_localctx as EffectISIGiveSpContext)._amplifier = this.match(JustMCFParser.NUMBER_INT);
					this.state = 1798;
					this.match(JustMCFParser.T__8);
					}
				}

				this.state = 1802;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
				case 1:
					{
					this.state = 1801;
					(_localctx as EffectISIGiveSpContext)._second = this.match(JustMCFParser.NUMBER_INT);
					}
					break;
				}
				this.state = 1805;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.TRUE || _la === JustMCFParser.FALSE) {
					{
					this.state = 1804;
					this.boolValue();
					}
				}

				}
				break;

			case 4:
				_localctx = new EffectISIClearAllContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1807;
				this.match(JustMCFParser.EFFECT);
				this.state = 1808;
				this.match(JustMCFParser.CLEAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tpIndependentStatementInner(): TpIndependentStatementInnerContext {
		let _localctx: TpIndependentStatementInnerContext = new TpIndependentStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, JustMCFParser.RULE_tpIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1836;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				_localctx = new TpISIDestinationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1811;
				this.match(JustMCFParser.TP);
				this.state = 1812;
				this.selector();
				}
				break;

			case 2:
				_localctx = new TpISIPosContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1813;
				this.match(JustMCFParser.TP);
				this.state = 1814;
				this.pos3Identifier();
				}
				break;

			case 3:
				_localctx = new TpISIRotatedContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1815;
				this.match(JustMCFParser.TP);
				this.state = 1816;
				this.pos5Identifier();
				}
				break;

			case 4:
				_localctx = new TpISIRotatedDivContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1817;
				this.match(JustMCFParser.TP);
				this.state = 1818;
				this.pos3Identifier();
				this.state = 1819;
				this.pos2Identifier();
				}
				break;

			case 5:
				_localctx = new TpISIFacingContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1821;
				this.match(JustMCFParser.TP);
				this.state = 1822;
				this.pos3Identifier();
				this.state = 1823;
				this.match(JustMCFParser.FACING);
				this.state = 1824;
				this.pos3Identifier();
				}
				break;

			case 6:
				_localctx = new TpISIFacingEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1826;
				this.match(JustMCFParser.TP);
				this.state = 1827;
				this.pos3Identifier();
				this.state = 1828;
				this.match(JustMCFParser.FACING);
				this.state = 1830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.ENTITY) {
					{
					this.state = 1829;
					this.match(JustMCFParser.ENTITY);
					}
				}

				this.state = 1832;
				this.selector();
				this.state = 1834;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 221, this._ctx) ) {
				case 1:
					{
					this.state = 1833;
					(_localctx as TpISIFacingEntityContext)._anchor = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.EYES || _la === JustMCFParser.FEET)) {
						(_localctx as TpISIFacingEntityContext)._anchor = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entityIndependentStatementInner(): EntityIndependentStatementInnerContext {
		let _localctx: EntityIndependentStatementInnerContext = new EntityIndependentStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, JustMCFParser.RULE_entityIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1901;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				_localctx = new EntityISIGiveAndClearContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1838;
				this.giveAndClearIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new EntityISIKillContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1839;
				this.match(JustMCFParser.KILL);
				}
				break;

			case 3:
				_localctx = new EntityISITagContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1840;
				this.tagIndependentStatementInner();
				}
				break;

			case 4:
				_localctx = new EntityISIEffectContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1841;
				this.effectIndependentStatementInner();
				}
				break;

			case 5:
				_localctx = new EntityISITpContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1842;
				this.tpIndependentStatementInner();
				}
				break;

			case 6:
				_localctx = new EntityISITitleCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1843;
				this.match(JustMCFParser.TITLE);
				this.state = 1844;
				this.match(JustMCFParser.T__4);
				this.state = 1848;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (JustMCFParser.RESET - 113)) | (1 << (JustMCFParser.TITLE - 113)) | (1 << (JustMCFParser.SUBTITLE - 113)) | (1 << (JustMCFParser.ACTIONBAR - 113)) | (1 << (JustMCFParser.TIMES - 113)))) !== 0) || _la === JustMCFParser.CLEAR) {
					{
					{
					this.state = 1845;
					this.titleSelectorStatementInner();
					}
					}
					this.state = 1850;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1851;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 7:
				_localctx = new EntityISIDisplayCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1852;
				this.match(JustMCFParser.DISPLAY);
				this.state = 1853;
				this.match(JustMCFParser.T__4);
				this.state = 1857;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (JustMCFParser.BOSSBAR - 121)) | (1 << (JustMCFParser.TITLE - 121)) | (1 << (JustMCFParser.SUBTITLE - 121)) | (1 << (JustMCFParser.ACTIONBAR - 121)) | (1 << (JustMCFParser.TEXT - 121)))) !== 0)) {
					{
					{
					this.state = 1854;
					this.displayIndependentStatementInner();
					}
					}
					this.state = 1859;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1860;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 8:
				_localctx = new EntityISIDisplaySingleContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1861;
				this.displayIndependentStatementInner();
				}
				break;

			case 9:
				_localctx = new EntityISIItemSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1862;
				this.match(JustMCFParser.ITEM);
				this.state = 1863;
				this.match(JustMCFParser.T__14);
				this.state = 1864;
				this.itemIndependentStatementInner();
				}
				break;

			case 10:
				_localctx = new EntityISILootGiveSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1865;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.ITEM || _la === JustMCFParser.LOOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1866;
				this.lootIndependentStatementInnerGive();
				}
				break;

			case 11:
				_localctx = new EntityISILootSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1867;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.ITEM || _la === JustMCFParser.LOOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1868;
				this.match(JustMCFParser.T__14);
				this.state = 1869;
				this.lootIndependentStatementInnerReplaceEntity();
				}
				break;

			case 12:
				_localctx = new EntityISIItemCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1870;
				this.match(JustMCFParser.ITEM);
				this.state = 1871;
				this.match(JustMCFParser.T__4);
				this.state = 1875;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__17 || _la === JustMCFParser.T__18 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1872;
					this.itemSelectorStatementInner();
					}
					}
					this.state = 1877;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1878;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 13:
				_localctx = new EntityISILootCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1879;
				this.match(JustMCFParser.LOOT);
				this.state = 1880;
				this.match(JustMCFParser.T__4);
				this.state = 1884;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__17 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1881;
					this.lootSelectorStatementInner();
					}
					}
					this.state = 1886;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1887;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 14:
				_localctx = new EntityISIAttrSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1888;
				this.match(JustMCFParser.ATTR);
				this.state = 1889;
				this.match(JustMCFParser.T__14);
				this.state = 1890;
				this.attrIndependentStatementInner();
				}
				break;

			case 15:
				_localctx = new EntityISIAttrCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1891;
				this.match(JustMCFParser.ATTR);
				this.state = 1892;
				this.match(JustMCFParser.T__4);
				this.state = 1896;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1893;
					this.attrIndependentStatementInner();
					}
					}
					this.state = 1898;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1899;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 16:
				_localctx = new EntityISIExecContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1900;
				this.execStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entityStatementInner(): EntityStatementInnerContext {
		let _localctx: EntityStatementInnerContext = new EntityStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, JustMCFParser.RULE_entityStatementInner);
		let _la: number;
		try {
			this.state = 1915;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				_localctx = new EntitySIEntityExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1903;
				this.entityExpression();
				}
				break;

			case 2:
				_localctx = new EntitySISelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1904;
				this.selector();
				this.state = 1905;
				this.match(JustMCFParser.T__4);
				this.state = 1910;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__31) {
					{
					{
					this.state = 1906;
					this.match(JustMCFParser.T__31);
					this.state = 1907;
					this.entityIndependentStatementInner();
					}
					}
					this.state = 1912;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1913;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entityExpression(): EntityExpressionContext {
		let _localctx: EntityExpressionContext = new EntityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, JustMCFParser.RULE_entityExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1917;
			this.selector();
			this.state = 1918;
			this.match(JustMCFParser.T__31);
			this.state = 1919;
			this.entityIndependentStatementInner();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, JustMCFParser.RULE_blockStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1921;
			this.match(JustMCFParser.BLOCK);
			this.state = 1922;
			this.match(JustMCFParser.T__4);
			this.state = 1926;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.NUMBER_INT || _la === JustMCFParser.NUMBER || _la === JustMCFParser.Pos1) {
				{
				{
				this.state = 1923;
				this.blockStatementInner();
				}
				}
				this.state = 1928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1929;
			this.match(JustMCFParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatementInner(): BlockStatementInnerContext {
		let _localctx: BlockStatementInnerContext = new BlockStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, JustMCFParser.RULE_blockStatementInner);
		let _la: number;
		try {
			this.state = 1965;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				_localctx = new BlockSISetblockContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1931;
				this.pos3Identifier();
				this.state = 1932;
				this.blockIdentifier();
				this.state = 1934;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (JustMCFParser.DESTROY - 159)) | (1 << (JustMCFParser.KEEP - 159)) | (1 << (JustMCFParser.REPLACE - 159)))) !== 0)) {
					{
					this.state = 1933;
					(_localctx as BlockSISetblockContext)._mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (JustMCFParser.DESTROY - 159)) | (1 << (JustMCFParser.KEEP - 159)) | (1 << (JustMCFParser.REPLACE - 159)))) !== 0))) {
						(_localctx as BlockSISetblockContext)._mod = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;

			case 2:
				_localctx = new BlockSIFillContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1936;
				this.pos3Identifier();
				this.state = 1937;
				this.pos3Identifier();
				this.state = 1938;
				this.blockIdentifier();
				this.state = 1940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (JustMCFParser.DESTROY - 159)) | (1 << (JustMCFParser.KEEP - 159)) | (1 << (JustMCFParser.HOLLOW - 159)) | (1 << (JustMCFParser.OUTLINE - 159)))) !== 0)) {
					{
					this.state = 1939;
					(_localctx as BlockSIFillContext)._mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (JustMCFParser.DESTROY - 159)) | (1 << (JustMCFParser.KEEP - 159)) | (1 << (JustMCFParser.HOLLOW - 159)) | (1 << (JustMCFParser.OUTLINE - 159)))) !== 0))) {
						(_localctx as BlockSIFillContext)._mod = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;

			case 3:
				_localctx = new BlockSIFillReplaceContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1942;
				this.pos3Identifier();
				this.state = 1943;
				this.pos3Identifier();
				this.state = 1944;
				this.blockIdentifier();
				this.state = 1945;
				this.match(JustMCFParser.REPLACE);
				this.state = 1946;
				this.block_predicate();
				}
				break;

			case 4:
				_localctx = new BlockSICloneContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1948;
				this.pos3Identifier();
				this.state = 1949;
				this.pos3Identifier();
				this.state = 1950;
				this.pos3Identifier();
				this.state = 1952;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.MASKED || _la === JustMCFParser.REPLACE) {
					{
					this.state = 1951;
					(_localctx as BlockSICloneContext)._masked_mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.MASKED || _la === JustMCFParser.REPLACE)) {
						(_localctx as BlockSICloneContext)._masked_mod = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 1955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (JustMCFParser.FORCE - 164)) | (1 << (JustMCFParser.MOVE - 164)) | (1 << (JustMCFParser.NORMAL - 164)))) !== 0)) {
					{
					this.state = 1954;
					(_localctx as BlockSICloneContext)._mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (JustMCFParser.FORCE - 164)) | (1 << (JustMCFParser.MOVE - 164)) | (1 << (JustMCFParser.NORMAL - 164)))) !== 0))) {
						(_localctx as BlockSICloneContext)._mod = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;

			case 5:
				_localctx = new BlockSICloneFilteredContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1957;
				this.pos3Identifier();
				this.state = 1958;
				this.pos3Identifier();
				this.state = 1959;
				this.pos3Identifier();
				this.state = 1960;
				this.match(JustMCFParser.FILTERED);
				this.state = 1961;
				this.block_predicate();
				this.state = 1963;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (JustMCFParser.FORCE - 164)) | (1 << (JustMCFParser.MOVE - 164)) | (1 << (JustMCFParser.NORMAL - 164)))) !== 0)) {
					{
					this.state = 1962;
					(_localctx as BlockSICloneFilteredContext)._mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (JustMCFParser.FORCE - 164)) | (1 << (JustMCFParser.MOVE - 164)) | (1 << (JustMCFParser.NORMAL - 164)))) !== 0))) {
						(_localctx as BlockSICloneFilteredContext)._mod = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceStatement(): InterfaceStatementContext {
		let _localctx: InterfaceStatementContext = new InterfaceStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, JustMCFParser.RULE_interfaceStatement);
		try {
			this.state = 1975;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				_localctx = new InterfaceSNamespaceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1967;
				this.match(JustMCFParser.INTERFACE);
				this.state = 1968;
				this.nameSpaceStorage();
				this.state = 1969;
				this.nbt();
				}
				break;

			case 2:
				_localctx = new InterfaceSIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1971;
				this.match(JustMCFParser.INTERFACE);
				this.state = 1972;
				this.dataIdentifier();
				this.state = 1973;
				this.nbt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataAssignExistExpression(): DataAssignExistExpressionContext {
		let _localctx: DataAssignExistExpressionContext = new DataAssignExistExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, JustMCFParser.RULE_dataAssignExistExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1977;
			this.dataIdentifier();
			this.state = 1978;
			this.match(JustMCFParser.T__6);
			this.state = 1979;
			this.existExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public existExpression(): ExistExpressionContext;
	public existExpression(_p: number): ExistExpressionContext;
	// @RuleVersion(0)
	public existExpression(_p?: number): ExistExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExistExpressionContext = new ExistExpressionContext(this._ctx, _parentState);
		let _prevctx: ExistExpressionContext = _localctx;
		let _startState: number = 164;
		this.enterRecursionRule(_localctx, 164, JustMCFParser.RULE_existExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2000;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				{
				_localctx = new ExistExpressionExecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1982;
				this.match(JustMCFParser.T__4);
				this.state = 1986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__9) | (1 << JustMCFParser.T__10) | (1 << JustMCFParser.T__11))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__50 - 34)) | (1 << (JustMCFParser.NUMBER_INT - 34)) | (1 << (JustMCFParser.NUMBER - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Pos1 - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)) | (1 << (JustMCFParser.NBTName - 167)))) !== 0)) {
					{
					{
					this.state = 1983;
					this.execChild();
					}
					}
					this.state = 1988;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1989;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				{
				_localctx = new ExistExpressionIdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1990;
				this.dataIdentifier();
				}
				break;

			case 3:
				{
				_localctx = new ExisitExpressionFuncRunContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1991;
				this.funcImproveRunExpression();
				}
				break;

			case 4:
				{
				_localctx = new ExistExpressionTrueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1992;
				this.match(JustMCFParser.TRUE);
				}
				break;

			case 5:
				{
				_localctx = new ExistExpressionFalseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1993;
				this.match(JustMCFParser.FALSE);
				}
				break;

			case 6:
				{
				_localctx = new ExistExpressionNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1994;
				this.match(JustMCFParser.T__34);
				this.state = 1995;
				this.existExpression(6);
				}
				break;

			case 7:
				{
				_localctx = new ExistExpressionParenContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1996;
				this.match(JustMCFParser.T__7);
				this.state = 1997;
				this.existExpression(0);
				this.state = 1998;
				this.match(JustMCFParser.T__8);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2016;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2014;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
					case 1:
						{
						_localctx = new ExistExpressionBitAndContext(new ExistExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_existExpression);
						this.state = 2002;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 2003;
						(_localctx as ExistExpressionBitAndContext)._op = this.match(JustMCFParser.T__35);
						this.state = 2004;
						this.existExpression(6);
						}
						break;

					case 2:
						{
						_localctx = new ExistExpressionBitOrContext(new ExistExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_existExpression);
						this.state = 2005;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 2006;
						(_localctx as ExistExpressionBitOrContext)._op = this.match(JustMCFParser.T__36);
						this.state = 2007;
						this.existExpression(5);
						}
						break;

					case 3:
						{
						_localctx = new ExistExpressionAndContext(new ExistExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_existExpression);
						this.state = 2008;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2009;
						(_localctx as ExistExpressionAndContext)._op = this.match(JustMCFParser.T__37);
						this.state = 2010;
						this.existExpression(4);
						}
						break;

					case 4:
						{
						_localctx = new ExistExpressionOrContext(new ExistExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_existExpression);
						this.state = 2011;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2012;
						(_localctx as ExistExpressionOrContext)._op = this.match(JustMCFParser.T__38);
						this.state = 2013;
						this.existExpression(3);
						}
						break;
					}
					}
				}
				this.state = 2018;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, JustMCFParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2019;
			this.match(JustMCFParser.IF);
			this.state = 2020;
			this.existExpression(0);
			this.state = 2021;
			this.execRunChild();
			this.state = 2023;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 243, this._ctx) ) {
			case 1:
				{
				this.state = 2022;
				this.ifElseStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifElseStatement(): IfElseStatementContext {
		let _localctx: IfElseStatementContext = new IfElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, JustMCFParser.RULE_ifElseStatement);
		try {
			this.state = 2029;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				_localctx = new IfElseExecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2025;
				this.match(JustMCFParser.ELSE);
				this.state = 2026;
				this.execRunChild();
				}
				break;

			case 2:
				_localctx = new IfElseSIfSContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2027;
				this.match(JustMCFParser.ELSE);
				this.state = 2028;
				this.ifStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, JustMCFParser.RULE_whileStatement);
		let _la: number;
		try {
			this.state = 2045;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				_localctx = new WhileStatementExecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2031;
				this.match(JustMCFParser.WHILE);
				this.state = 2032;
				this.match(JustMCFParser.T__4);
				this.state = 2036;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__9) | (1 << JustMCFParser.T__10) | (1 << JustMCFParser.T__11))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__50 - 34)) | (1 << (JustMCFParser.NUMBER_INT - 34)) | (1 << (JustMCFParser.NUMBER - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Pos1 - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)) | (1 << (JustMCFParser.NBTName - 167)))) !== 0)) {
					{
					{
					this.state = 2033;
					this.execChild();
					}
					}
					this.state = 2038;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2039;
				this.match(JustMCFParser.T__5);
				this.state = 2040;
				this.execRunChild();
				}
				break;

			case 2:
				_localctx = new WhileStatementExistContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2041;
				this.match(JustMCFParser.WHILE);
				this.state = 2042;
				this.existExpression(0);
				this.state = 2043;
				this.execRunChild();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, JustMCFParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2047;
			this.match(JustMCFParser.FOR);
			this.state = 2048;
			this.match(JustMCFParser.T__4);
			this.state = 2049;
			this.dataOperationExpression();
			this.state = 2050;
			this.match(JustMCFParser.T__5);
			this.state = 2051;
			this.execRunChild();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbt(): NbtContext {
		let _localctx: NbtContext = new NbtContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, JustMCFParser.RULE_nbt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2053;
			this.snbtValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public json(): JsonContext {
		let _localctx: JsonContext = new JsonContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, JustMCFParser.RULE_json);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2055;
			this.jsonTextValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtPathWithoutCompound(): NbtPathWithoutCompoundContext {
		let _localctx: NbtPathWithoutCompoundContext = new NbtPathWithoutCompoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, JustMCFParser.RULE_nbtPathWithoutCompound);
		try {
			let _alt: number;
			this.state = 2077;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 250, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2057;
				this.nbtName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2058;
				this.nbtName();
				this.state = 2059;
				this.nbtCompound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2061;
				this.nbtName();
				this.state = 2068;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 248, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 2066;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case JustMCFParser.T__1:
							{
							this.state = 2062;
							this.match(JustMCFParser.T__1);
							this.state = 2063;
							this.match(JustMCFParser.NUMBER_INT);
							this.state = 2064;
							this.match(JustMCFParser.T__3);
							}
							break;
						case JustMCFParser.T__39:
							{
							this.state = 2065;
							this.match(JustMCFParser.T__39);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 2070;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 248, this._ctx);
				}
				this.state = 2075;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 249, this._ctx) ) {
				case 1:
					{
					this.state = 2071;
					this.match(JustMCFParser.T__1);
					this.state = 2072;
					this.nbtCompound();
					this.state = 2073;
					this.match(JustMCFParser.T__3);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtPath(): NbtPathContext {
		let _localctx: NbtPathContext = new NbtPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, JustMCFParser.RULE_nbtPath);
		try {
			let _alt: number;
			this.state = 2100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2079;
				this.nbtName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2080;
				this.nbtCompound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2081;
				this.nbtName();
				this.state = 2082;
				this.nbtCompound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2084;
				this.nbtName();
				this.state = 2091;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 2089;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case JustMCFParser.T__1:
							{
							this.state = 2085;
							this.match(JustMCFParser.T__1);
							this.state = 2086;
							this.match(JustMCFParser.NUMBER_INT);
							this.state = 2087;
							this.match(JustMCFParser.T__3);
							}
							break;
						case JustMCFParser.T__39:
							{
							this.state = 2088;
							this.match(JustMCFParser.T__39);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 2093;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
				}
				this.state = 2098;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 253, this._ctx) ) {
				case 1:
					{
					this.state = 2094;
					this.match(JustMCFParser.T__1);
					this.state = 2095;
					this.nbtCompound();
					this.state = 2096;
					this.match(JustMCFParser.T__3);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public snbtValue(): SnbtValueContext {
		let _localctx: SnbtValueContext = new SnbtValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, JustMCFParser.RULE_snbtValue);
		let _la: number;
		try {
			this.state = 2164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 260, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2102;
				this.match(JustMCFParser.T__40);
				this.state = 2103;
				this.nbtPair();
				this.state = 2108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2104;
					this.match(JustMCFParser.T__2);
					this.state = 2105;
					this.nbtPair();
					}
					}
					this.state = 2110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2111;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2113;
				this.match(JustMCFParser.T__40);
				this.state = 2114;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2115;
				this.match(JustMCFParser.T__41);
				this.state = 2116;
				this.nbtValue();
				this.state = 2121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2117;
					this.match(JustMCFParser.T__2);
					this.state = 2118;
					this.nbtValue();
					}
					}
					this.state = 2123;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2124;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2126;
				this.match(JustMCFParser.T__41);
				this.state = 2127;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2128;
				this.match(JustMCFParser.T__42);
				this.state = 2129;
				this.match(JustMCFParser.ByteNumber);
				this.state = 2134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2130;
					this.match(JustMCFParser.T__2);
					this.state = 2131;
					this.match(JustMCFParser.ByteNumber);
					}
					}
					this.state = 2136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2137;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2138;
				this.match(JustMCFParser.T__43);
				this.state = 2139;
				this.match(JustMCFParser.NUMBER_INT);
				this.state = 2144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2140;
					this.match(JustMCFParser.T__2);
					this.state = 2141;
					this.match(JustMCFParser.NUMBER_INT);
					}
					}
					this.state = 2146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2147;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2148;
				this.match(JustMCFParser.T__44);
				this.state = 2149;
				this.match(JustMCFParser.LongNumber);
				this.state = 2154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2150;
					this.match(JustMCFParser.T__2);
					this.state = 2151;
					this.match(JustMCFParser.LongNumber);
					}
					}
					this.state = 2156;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2157;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2158;
				this.nbtString();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2159;
				this.match(JustMCFParser.ByteNumber);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2160;
				this.match(JustMCFParser.ShortNumber);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2161;
				this.match(JustMCFParser.LongNumber);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2162;
				this.match(JustMCFParser.FloatNumber);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2163;
				this.match(JustMCFParser.DoubleNumber);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public snbt(): SnbtContext {
		let _localctx: SnbtContext = new SnbtContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, JustMCFParser.RULE_snbt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2166;
			this.nbtValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtCompound(): NbtCompoundContext {
		let _localctx: NbtCompoundContext = new NbtCompoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, JustMCFParser.RULE_nbtCompound);
		let _la: number;
		try {
			this.state = 2181;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2168;
				this.match(JustMCFParser.T__4);
				this.state = 2169;
				this.nbtPair();
				this.state = 2174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2170;
					this.match(JustMCFParser.T__2);
					this.state = 2171;
					this.nbtPair();
					}
					}
					this.state = 2176;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2177;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2179;
				this.match(JustMCFParser.T__4);
				this.state = 2180;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtPair(): NbtPairContext {
		let _localctx: NbtPairContext = new NbtPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, JustMCFParser.RULE_nbtPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2183;
			this.nbtName();
			this.state = 2184;
			this.match(JustMCFParser.T__30);
			this.state = 2185;
			this.nbtValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtList(): NbtListContext {
		let _localctx: NbtListContext = new NbtListContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, JustMCFParser.RULE_nbtList);
		let _la: number;
		try {
			this.state = 2200;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2187;
				this.match(JustMCFParser.T__1);
				this.state = 2188;
				this.nbtValue();
				this.state = 2193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2189;
					this.match(JustMCFParser.T__2);
					this.state = 2190;
					this.nbtValue();
					}
					}
					this.state = 2195;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2196;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2198;
				this.match(JustMCFParser.T__1);
				this.state = 2199;
				this.match(JustMCFParser.T__3);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtValue(): NbtValueContext {
		let _localctx: NbtValueContext = new NbtValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, JustMCFParser.RULE_nbtValue);
		try {
			this.state = 2213;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2202;
				this.nbtCompound();
				}
				break;
			case JustMCFParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2203;
				this.nbtList();
				}
				break;
			case JustMCFParser.T__45:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2204;
				this.nbtByteArr();
				}
				break;
			case JustMCFParser.T__46:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2205;
				this.nbtIntArr();
				}
				break;
			case JustMCFParser.T__47:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2206;
				this.nbtLongArr();
				}
				break;
			case JustMCFParser.STRING2:
			case JustMCFParser.STRING:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2207;
				this.nbtString();
				}
				break;
			case JustMCFParser.ByteNumber:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2208;
				this.match(JustMCFParser.ByteNumber);
				}
				break;
			case JustMCFParser.ShortNumber:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2209;
				this.match(JustMCFParser.ShortNumber);
				}
				break;
			case JustMCFParser.LongNumber:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2210;
				this.match(JustMCFParser.LongNumber);
				}
				break;
			case JustMCFParser.FloatNumber:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2211;
				this.match(JustMCFParser.FloatNumber);
				}
				break;
			case JustMCFParser.DoubleNumber:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2212;
				this.match(JustMCFParser.DoubleNumber);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtByteArr(): NbtByteArrContext {
		let _localctx: NbtByteArrContext = new NbtByteArrContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, JustMCFParser.RULE_nbtByteArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2215;
			this.match(JustMCFParser.T__45);
			this.state = 2216;
			this.match(JustMCFParser.ByteNumber);
			this.state = 2221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 2217;
				this.match(JustMCFParser.T__2);
				this.state = 2218;
				this.match(JustMCFParser.ByteNumber);
				}
				}
				this.state = 2223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2224;
			this.match(JustMCFParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtIntArr(): NbtIntArrContext {
		let _localctx: NbtIntArrContext = new NbtIntArrContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, JustMCFParser.RULE_nbtIntArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2226;
			this.match(JustMCFParser.T__46);
			this.state = 2227;
			this.match(JustMCFParser.NUMBER_INT);
			this.state = 2232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 2228;
				this.match(JustMCFParser.T__2);
				this.state = 2229;
				this.match(JustMCFParser.NUMBER_INT);
				}
				}
				this.state = 2234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2235;
			this.match(JustMCFParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtLongArr(): NbtLongArrContext {
		let _localctx: NbtLongArrContext = new NbtLongArrContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, JustMCFParser.RULE_nbtLongArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2237;
			this.match(JustMCFParser.T__47);
			this.state = 2238;
			this.match(JustMCFParser.LongNumber);
			this.state = 2243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 2239;
				this.match(JustMCFParser.T__2);
				this.state = 2240;
				this.match(JustMCFParser.LongNumber);
				}
				}
				this.state = 2245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2246;
			this.match(JustMCFParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtString(): NbtStringContext {
		let _localctx: NbtStringContext = new NbtStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, JustMCFParser.RULE_nbtString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2248;
			_la = this._input.LA(1);
			if (!(_la === JustMCFParser.STRING2 || _la === JustMCFParser.STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jsonTextValue(): JsonTextValueContext {
		let _localctx: JsonTextValueContext = new JsonTextValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, JustMCFParser.RULE_jsonTextValue);
		let _la: number;
		try {
			this.state = 2281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2250;
				this.match(JustMCFParser.T__48);
				this.state = 2251;
				this.jsonPair();
				this.state = 2256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2252;
					this.match(JustMCFParser.T__2);
					this.state = 2253;
					this.jsonPair();
					}
					}
					this.state = 2258;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2259;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2261;
				this.match(JustMCFParser.T__48);
				this.state = 2262;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2263;
				this.match(JustMCFParser.T__49);
				this.state = 2264;
				this.jsonValue();
				this.state = 2269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2265;
					this.match(JustMCFParser.T__2);
					this.state = 2266;
					this.jsonValue();
					}
					}
					this.state = 2271;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2272;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2274;
				this.match(JustMCFParser.T__1);
				this.state = 2275;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2276;
				this.match(JustMCFParser.STRING);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2277;
				this.number();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2278;
				this.match(JustMCFParser.TRUE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2279;
				this.match(JustMCFParser.FALSE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2280;
				this.match(JustMCFParser.NULL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jsonText(): JsonTextContext {
		let _localctx: JsonTextContext = new JsonTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, JustMCFParser.RULE_jsonText);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2283;
			this.jsonValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jsonObj(): JsonObjContext {
		let _localctx: JsonObjContext = new JsonObjContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, JustMCFParser.RULE_jsonObj);
		let _la: number;
		try {
			this.state = 2298;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 273, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2285;
				this.match(JustMCFParser.T__4);
				this.state = 2286;
				this.jsonPair();
				this.state = 2291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2287;
					this.match(JustMCFParser.T__2);
					this.state = 2288;
					this.jsonPair();
					}
					}
					this.state = 2293;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2294;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2296;
				this.match(JustMCFParser.T__4);
				this.state = 2297;
				this.match(JustMCFParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jsonPair(): JsonPairContext {
		let _localctx: JsonPairContext = new JsonPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, JustMCFParser.RULE_jsonPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2300;
			this.match(JustMCFParser.STRING);
			this.state = 2301;
			this.match(JustMCFParser.T__30);
			this.state = 2302;
			this.jsonValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jsonArr(): JsonArrContext {
		let _localctx: JsonArrContext = new JsonArrContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, JustMCFParser.RULE_jsonArr);
		let _la: number;
		try {
			this.state = 2317;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2304;
				this.match(JustMCFParser.T__1);
				this.state = 2305;
				this.jsonValue();
				this.state = 2310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2306;
					this.match(JustMCFParser.T__2);
					this.state = 2307;
					this.jsonValue();
					}
					}
					this.state = 2312;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2313;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2315;
				this.match(JustMCFParser.T__1);
				this.state = 2316;
				this.match(JustMCFParser.T__3);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jsonValue(): JsonValueContext {
		let _localctx: JsonValueContext = new JsonValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, JustMCFParser.RULE_jsonValue);
		try {
			this.state = 2326;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2319;
				this.match(JustMCFParser.STRING);
				}
				break;
			case JustMCFParser.NUMBER_INT:
			case JustMCFParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2320;
				this.number();
				}
				break;
			case JustMCFParser.T__4:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2321;
				this.jsonObj();
				}
				break;
			case JustMCFParser.T__1:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2322;
				this.jsonArr();
				}
				break;
			case JustMCFParser.TRUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2323;
				this.match(JustMCFParser.TRUE);
				}
				break;
			case JustMCFParser.FALSE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2324;
				this.match(JustMCFParser.FALSE);
				}
				break;
			case JustMCFParser.NULL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2325;
				this.match(JustMCFParser.NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolValue(): BoolValueContext {
		let _localctx: BoolValueContext = new BoolValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, JustMCFParser.RULE_boolValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2328;
			_la = this._input.LA(1);
			if (!(_la === JustMCFParser.TRUE || _la === JustMCFParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, JustMCFParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2330;
			_la = this._input.LA(1);
			if (!(_la === JustMCFParser.NUMBER_INT || _la === JustMCFParser.NUMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, JustMCFParser.RULE_key);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2332;
			_la = this._input.LA(1);
			if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.RUN - 70)) | (1 << (JustMCFParser.STORE - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (JustMCFParser.SCB - 103)) | (1 << (JustMCFParser.DISPLAYNAME - 103)) | (1 << (JustMCFParser.RENDERTYPE - 103)) | (1 << (JustMCFParser.DISPLAY - 103)) | (1 << (JustMCFParser.ENABLE - 103)) | (1 << (JustMCFParser.LIST - 103)) | (1 << (JustMCFParser.DATA - 103)) | (1 << (JustMCFParser.STORAGE - 103)) | (1 << (JustMCFParser.RESET - 103)) | (1 << (JustMCFParser.ADD - 103)) | (1 << (JustMCFParser.REMOVE - 103)) | (1 << (JustMCFParser.FUNC - 103)) | (1 << (JustMCFParser.TAGGED - 103)) | (1 << (JustMCFParser.DEFAULT - 103)) | (1 << (JustMCFParser.PLAYER - 103)) | (1 << (JustMCFParser.PLAYERS - 103)) | (1 << (JustMCFParser.BOSSBAR - 103)) | (1 << (JustMCFParser.VISIBLE - 103)) | (1 << (JustMCFParser.BLUE - 103)) | (1 << (JustMCFParser.GREEN - 103)) | (1 << (JustMCFParser.PINK - 103)) | (1 << (JustMCFParser.PURPLE - 103)) | (1 << (JustMCFParser.RED - 103)) | (1 << (JustMCFParser.WHITE - 103)) | (1 << (JustMCFParser.YELLOW - 103)) | (1 << (JustMCFParser.COLOR - 103)) | (1 << (JustMCFParser.NAME - 103)) | (1 << (JustMCFParser.STYLE - 103)) | (1 << (JustMCFParser.NOTCHED_6 - 103)) | (1 << (JustMCFParser.NOTCHED_10 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.NOTCHED_12 - 135)) | (1 << (JustMCFParser.NOTCHED_20 - 135)) | (1 << (JustMCFParser.PROGRESS - 135)) | (1 << (JustMCFParser.SET - 135)) | (1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)) | (1 << (JustMCFParser.TIMES - 135)) | (1 << (JustMCFParser.TEXT - 135)) | (1 << (JustMCFParser.ITEM - 135)) | (1 << (JustMCFParser.LOOT - 135)) | (1 << (JustMCFParser.GIVE - 135)) | (1 << (JustMCFParser.CLEAR - 135)) | (1 << (JustMCFParser.FISH - 135)) | (1 << (JustMCFParser.KILL - 135)) | (1 << (JustMCFParser.MINE - 135)) | (1 << (JustMCFParser.MAINHAND - 135)) | (1 << (JustMCFParser.OFFHAND - 135)) | (1 << (JustMCFParser.EFFECT - 135)) | (1 << (JustMCFParser.TAG - 135)) | (1 << (JustMCFParser.TP - 135)) | (1 << (JustMCFParser.GET - 135)) | (1 << (JustMCFParser.ATTR - 135)) | (1 << (JustMCFParser.BASE - 135)) | (1 << (JustMCFParser.DESTROY - 135)) | (1 << (JustMCFParser.KEEP - 135)) | (1 << (JustMCFParser.REPLACE - 135)) | (1 << (JustMCFParser.HOLLOW - 135)) | (1 << (JustMCFParser.OUTLINE - 135)) | (1 << (JustMCFParser.FORCE - 135)) | (1 << (JustMCFParser.MOVE - 135)) | (1 << (JustMCFParser.NORMAL - 135)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FILTERED - 167)) | (1 << (JustMCFParser.INTERFACE - 167)) | (1 << (JustMCFParser.WHILE - 167)) | (1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pos3Identifier(): Pos3IdentifierContext {
		let _localctx: Pos3IdentifierContext = new Pos3IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, JustMCFParser.RULE_pos3Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2334;
			this.pos1();
			this.state = 2335;
			this.pos1();
			this.state = 2336;
			this.pos1();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pos2Identifier(): Pos2IdentifierContext {
		let _localctx: Pos2IdentifierContext = new Pos2IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, JustMCFParser.RULE_pos2Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2338;
			this.pos1();
			this.state = 2339;
			this.pos1();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pos5Identifier(): Pos5IdentifierContext {
		let _localctx: Pos5IdentifierContext = new Pos5IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, JustMCFParser.RULE_pos5Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2341;
			this.pos1();
			this.state = 2342;
			this.pos1();
			this.state = 2343;
			this.pos1();
			this.state = 2344;
			this.pos1();
			this.state = 2345;
			this.pos1();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pos1(): Pos1Context {
		let _localctx: Pos1Context = new Pos1Context(this._ctx, this.state);
		this.enterRule(_localctx, 226, JustMCFParser.RULE_pos1);
		try {
			this.state = 2349;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.Pos1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2347;
				this.match(JustMCFParser.Pos1);
				}
				break;
			case JustMCFParser.NUMBER_INT:
			case JustMCFParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2348;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockIdentifier(): BlockIdentifierContext {
		let _localctx: BlockIdentifierContext = new BlockIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, JustMCFParser.RULE_blockIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2351;
			this.nameSpaceBlock();
			this.state = 2353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__1) {
				{
				this.state = 2352;
				this.blockstate();
				}
			}

			this.state = 2356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (JustMCFParser.T__40 - 41)) | (1 << (JustMCFParser.T__41 - 41)) | (1 << (JustMCFParser.T__42 - 41)) | (1 << (JustMCFParser.T__43 - 41)) | (1 << (JustMCFParser.T__44 - 41)) | (1 << (JustMCFParser.ByteNumber - 41)) | (1 << (JustMCFParser.ShortNumber - 41)) | (1 << (JustMCFParser.LongNumber - 41)) | (1 << (JustMCFParser.FloatNumber - 41)) | (1 << (JustMCFParser.DoubleNumber - 41)) | (1 << (JustMCFParser.STRING2 - 41)) | (1 << (JustMCFParser.STRING - 41)))) !== 0)) {
				{
				this.state = 2355;
				this.nbt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockstate(): BlockstateContext {
		let _localctx: BlockstateContext = new BlockstateContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, JustMCFParser.RULE_blockstate);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2358;
			this.match(JustMCFParser.T__1);
			this.state = 2360;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 2359;
					this.matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2362;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 280, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2364;
			this.match(JustMCFParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, JustMCFParser.RULE_selector);
		try {
			let _alt: number;
			this.state = 2381;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2366;
				this.match(JustMCFParser.Selector);
				this.state = 2374;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
				case 1:
					{
					this.state = 2367;
					this.match(JustMCFParser.T__1);
					this.state = 2369;
					this._errHandler.sync(this);
					_alt = 1 + 1;
					do {
						switch (_alt) {
						case 1 + 1:
							{
							{
							this.state = 2368;
							this.matchWildcard();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 2371;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 281, this._ctx);
					} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 2373;
					this.match(JustMCFParser.T__3);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2376;
				this.match(JustMCFParser.T__50);
				this.state = 2377;
				this.nbtName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2378;
				this.match(JustMCFParser.T__33);
				this.state = 2379;
				this.nbtName();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2380;
				this.match(JustMCFParser.T__33);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpace(): NameSpaceContext {
		let _localctx: NameSpaceContext = new NameSpaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, JustMCFParser.RULE_nameSpace);
		try {
			this.state = 2388;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 284, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2383;
				this.acceptableName();
				this.state = 2384;
				_localctx._op = this.match(JustMCFParser.T__30);
				this.state = 2385;
				this.resourceLocation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2387;
				this.resourceLocation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceBlock(): NameSpaceBlockContext {
		let _localctx: NameSpaceBlockContext = new NameSpaceBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, JustMCFParser.RULE_nameSpaceBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2390;
			this.nameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceFunc(): NameSpaceFuncContext {
		let _localctx: NameSpaceFuncContext = new NameSpaceFuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, JustMCFParser.RULE_nameSpaceFunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2392;
			this.nameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceStorage(): NameSpaceStorageContext {
		let _localctx: NameSpaceStorageContext = new NameSpaceStorageContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, JustMCFParser.RULE_nameSpaceStorage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2394;
			this.nameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		let _localctx: NameSpaceBossbarContext = new NameSpaceBossbarContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, JustMCFParser.RULE_nameSpaceBossbar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2396;
			this.nameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceBiome(): NameSpaceBiomeContext {
		let _localctx: NameSpaceBiomeContext = new NameSpaceBiomeContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, JustMCFParser.RULE_nameSpaceBiome);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2398;
			this.nameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceDim(): NameSpaceDimContext {
		let _localctx: NameSpaceDimContext = new NameSpaceDimContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, JustMCFParser.RULE_nameSpaceDim);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2400;
			this.nameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpacePredicate(): NameSpacePredicateContext {
		let _localctx: NameSpacePredicateContext = new NameSpacePredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, JustMCFParser.RULE_nameSpacePredicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2402;
			this.nameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceItem(): NameSpaceItemContext {
		let _localctx: NameSpaceItemContext = new NameSpaceItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, JustMCFParser.RULE_nameSpaceItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2404;
			this.nameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceEntity(): NameSpaceEntityContext {
		let _localctx: NameSpaceEntityContext = new NameSpaceEntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, JustMCFParser.RULE_nameSpaceEntity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2406;
			this.nameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceLoot(): NameSpaceLootContext {
		let _localctx: NameSpaceLootContext = new NameSpaceLootContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, JustMCFParser.RULE_nameSpaceLoot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2408;
			this.nameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceItemModifier(): NameSpaceItemModifierContext {
		let _localctx: NameSpaceItemModifierContext = new NameSpaceItemModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, JustMCFParser.RULE_nameSpaceItemModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2410;
			this.nameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagNameSpace(): TagNameSpaceContext {
		let _localctx: TagNameSpaceContext = new TagNameSpaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, JustMCFParser.RULE_tagNameSpace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2412;
			this.match(JustMCFParser.T__33);
			this.state = 2413;
			this.nameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagNameSpaceItem(): TagNameSpaceItemContext {
		let _localctx: TagNameSpaceItemContext = new TagNameSpaceItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, JustMCFParser.RULE_tagNameSpaceItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2415;
			this.tagNameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagNameSpaceBlock(): TagNameSpaceBlockContext {
		let _localctx: TagNameSpaceBlockContext = new TagNameSpaceBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, JustMCFParser.RULE_tagNameSpaceBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2417;
			this.tagNameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagNameSpaceFunc(): TagNameSpaceFuncContext {
		let _localctx: TagNameSpaceFuncContext = new TagNameSpaceFuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, JustMCFParser.RULE_tagNameSpaceFunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2419;
			this.tagNameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagNameSpaceEntity(): TagNameSpaceEntityContext {
		let _localctx: TagNameSpaceEntityContext = new TagNameSpaceEntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, JustMCFParser.RULE_tagNameSpaceEntity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2421;
			this.tagNameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public registerName(): RegisterNameContext {
		let _localctx: RegisterNameContext = new RegisterNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, JustMCFParser.RULE_registerName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 285, this._ctx) ) {
			case 1:
				{
				this.state = 2423;
				this.acceptableName();
				this.state = 2424;
				this.match(JustMCFParser.T__30);
				}
				break;
			}
			this.state = 2428;
			this.acceptableName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberType(): NumberTypeContext {
		let _localctx: NumberTypeContext = new NumberTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, JustMCFParser.RULE_numberType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2430;
			_la = this._input.LA(1);
			if (!(((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (JustMCFParser.BYTE - 181)) | (1 << (JustMCFParser.SHORT - 181)) | (1 << (JustMCFParser.INT_ - 181)) | (1 << (JustMCFParser.LONG - 181)) | (1 << (JustMCFParser.FLOAT - 181)) | (1 << (JustMCFParser.DOUBLE - 181)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public acceptableName(): AcceptableNameContext {
		let _localctx: AcceptableNameContext = new AcceptableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, JustMCFParser.RULE_acceptableName);
		try {
			this.state = 2435;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 286, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2432;
				this.match(JustMCFParser.AcceptableName);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2433;
				this.key();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2434;
				this.numberType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public criterion(): CriterionContext {
		let _localctx: CriterionContext = new CriterionContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, JustMCFParser.RULE_criterion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2437;
			this.nameSpace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtName(): NbtNameContext {
		let _localctx: NbtNameContext = new NbtNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, JustMCFParser.RULE_nbtName);
		try {
			this.state = 2443;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 287, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2439;
				this.match(JustMCFParser.AcceptableName);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2440;
				this.match(JustMCFParser.NBTName);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2441;
				this.key();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2442;
				this.numberType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceLocation(): ResourceLocationContext {
		let _localctx: ResourceLocationContext = new ResourceLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, JustMCFParser.RULE_resourceLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2445;
			this.acceptableName();
			this.state = 2450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__26) {
				{
				{
				this.state = 2446;
				this.match(JustMCFParser.T__26);
				this.state = 2447;
				this.acceptableName();
				}
				}
				this.state = 2452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, JustMCFParser.RULE_typeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2456;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 289, this._ctx) ) {
			case 1:
				{
				this.state = 2453;
				this.acceptableName();
				this.state = 2454;
				this.match(JustMCFParser.T__30);
				}
				break;
			}
			this.state = 2458;
			this.acceptableName();
			this.state = 2461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__1) {
				{
				this.state = 2459;
				this.match(JustMCFParser.T__1);
				this.state = 2460;
				this.match(JustMCFParser.T__3);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public item_slot(): Item_slotContext {
		let _localctx: Item_slotContext = new Item_slotContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, JustMCFParser.RULE_item_slot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2463;
			this.acceptableName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, JustMCFParser.RULE_string);
		try {
			this.state = 2467;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NAMSP:
			case JustMCFParser.NAMESPACE:
			case JustMCFParser.LOCAL:
			case JustMCFParser.EXEC:
			case JustMCFParser.RUN:
			case JustMCFParser.STORE:
			case JustMCFParser.ALIGN:
			case JustMCFParser.ANCHORED:
			case JustMCFParser.EYES:
			case JustMCFParser.FEET:
			case JustMCFParser.IN:
			case JustMCFParser.AS:
			case JustMCFParser.AT:
			case JustMCFParser.FACING:
			case JustMCFParser.POSITIONED:
			case JustMCFParser.POS:
			case JustMCFParser.ROTATED:
			case JustMCFParser.ROT:
			case JustMCFParser.IF:
			case JustMCFParser.UNLESS:
			case JustMCFParser.ALL:
			case JustMCFParser.MASKED:
			case JustMCFParser.BIOME:
			case JustMCFParser.VALUE:
			case JustMCFParser.MAX:
			case JustMCFParser.ENTITY:
			case JustMCFParser.SCORE:
			case JustMCFParser.PREDICATE:
			case JustMCFParser.BLOCK:
			case JustMCFParser.BLOCKS:
			case JustMCFParser.SCB:
			case JustMCFParser.DISPLAYNAME:
			case JustMCFParser.RENDERTYPE:
			case JustMCFParser.DISPLAY:
			case JustMCFParser.ENABLE:
			case JustMCFParser.LIST:
			case JustMCFParser.DATA:
			case JustMCFParser.STORAGE:
			case JustMCFParser.RESET:
			case JustMCFParser.ADD:
			case JustMCFParser.REMOVE:
			case JustMCFParser.FUNC:
			case JustMCFParser.TAGGED:
			case JustMCFParser.DEFAULT:
			case JustMCFParser.PLAYER:
			case JustMCFParser.PLAYERS:
			case JustMCFParser.BOSSBAR:
			case JustMCFParser.VISIBLE:
			case JustMCFParser.BLUE:
			case JustMCFParser.GREEN:
			case JustMCFParser.PINK:
			case JustMCFParser.PURPLE:
			case JustMCFParser.RED:
			case JustMCFParser.WHITE:
			case JustMCFParser.YELLOW:
			case JustMCFParser.COLOR:
			case JustMCFParser.NAME:
			case JustMCFParser.STYLE:
			case JustMCFParser.NOTCHED_6:
			case JustMCFParser.NOTCHED_10:
			case JustMCFParser.NOTCHED_12:
			case JustMCFParser.NOTCHED_20:
			case JustMCFParser.PROGRESS:
			case JustMCFParser.SET:
			case JustMCFParser.TITLE:
			case JustMCFParser.SUBTITLE:
			case JustMCFParser.ACTIONBAR:
			case JustMCFParser.TIMES:
			case JustMCFParser.TEXT:
			case JustMCFParser.ITEM:
			case JustMCFParser.LOOT:
			case JustMCFParser.GIVE:
			case JustMCFParser.CLEAR:
			case JustMCFParser.FISH:
			case JustMCFParser.KILL:
			case JustMCFParser.MINE:
			case JustMCFParser.MAINHAND:
			case JustMCFParser.OFFHAND:
			case JustMCFParser.EFFECT:
			case JustMCFParser.TAG:
			case JustMCFParser.TP:
			case JustMCFParser.GET:
			case JustMCFParser.ATTR:
			case JustMCFParser.BASE:
			case JustMCFParser.DESTROY:
			case JustMCFParser.KEEP:
			case JustMCFParser.REPLACE:
			case JustMCFParser.HOLLOW:
			case JustMCFParser.OUTLINE:
			case JustMCFParser.FORCE:
			case JustMCFParser.MOVE:
			case JustMCFParser.NORMAL:
			case JustMCFParser.FILTERED:
			case JustMCFParser.INTERFACE:
			case JustMCFParser.WHILE:
			case JustMCFParser.FOR:
			case JustMCFParser.YEILD:
			case JustMCFParser.BREAK:
			case JustMCFParser.RETURN:
			case JustMCFParser.REPLACED:
			case JustMCFParser.DIM:
			case JustMCFParser.DIMENSION:
			case JustMCFParser.ITEM_MODIFIER:
			case JustMCFParser.BYTE:
			case JustMCFParser.SHORT:
			case JustMCFParser.INT_:
			case JustMCFParser.LONG:
			case JustMCFParser.FLOAT:
			case JustMCFParser.DOUBLE:
			case JustMCFParser.AcceptableName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2465;
				this.acceptableName();
				}
				break;
			case JustMCFParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2466;
				this.match(JustMCFParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public item_predicate(): Item_predicateContext {
		let _localctx: Item_predicateContext = new Item_predicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, JustMCFParser.RULE_item_predicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2471;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NAMSP:
			case JustMCFParser.NAMESPACE:
			case JustMCFParser.LOCAL:
			case JustMCFParser.EXEC:
			case JustMCFParser.RUN:
			case JustMCFParser.STORE:
			case JustMCFParser.ALIGN:
			case JustMCFParser.ANCHORED:
			case JustMCFParser.EYES:
			case JustMCFParser.FEET:
			case JustMCFParser.IN:
			case JustMCFParser.AS:
			case JustMCFParser.AT:
			case JustMCFParser.FACING:
			case JustMCFParser.POSITIONED:
			case JustMCFParser.POS:
			case JustMCFParser.ROTATED:
			case JustMCFParser.ROT:
			case JustMCFParser.IF:
			case JustMCFParser.UNLESS:
			case JustMCFParser.ALL:
			case JustMCFParser.MASKED:
			case JustMCFParser.BIOME:
			case JustMCFParser.VALUE:
			case JustMCFParser.MAX:
			case JustMCFParser.ENTITY:
			case JustMCFParser.SCORE:
			case JustMCFParser.PREDICATE:
			case JustMCFParser.BLOCK:
			case JustMCFParser.BLOCKS:
			case JustMCFParser.SCB:
			case JustMCFParser.DISPLAYNAME:
			case JustMCFParser.RENDERTYPE:
			case JustMCFParser.DISPLAY:
			case JustMCFParser.ENABLE:
			case JustMCFParser.LIST:
			case JustMCFParser.DATA:
			case JustMCFParser.STORAGE:
			case JustMCFParser.RESET:
			case JustMCFParser.ADD:
			case JustMCFParser.REMOVE:
			case JustMCFParser.FUNC:
			case JustMCFParser.TAGGED:
			case JustMCFParser.DEFAULT:
			case JustMCFParser.PLAYER:
			case JustMCFParser.PLAYERS:
			case JustMCFParser.BOSSBAR:
			case JustMCFParser.VISIBLE:
			case JustMCFParser.BLUE:
			case JustMCFParser.GREEN:
			case JustMCFParser.PINK:
			case JustMCFParser.PURPLE:
			case JustMCFParser.RED:
			case JustMCFParser.WHITE:
			case JustMCFParser.YELLOW:
			case JustMCFParser.COLOR:
			case JustMCFParser.NAME:
			case JustMCFParser.STYLE:
			case JustMCFParser.NOTCHED_6:
			case JustMCFParser.NOTCHED_10:
			case JustMCFParser.NOTCHED_12:
			case JustMCFParser.NOTCHED_20:
			case JustMCFParser.PROGRESS:
			case JustMCFParser.SET:
			case JustMCFParser.TITLE:
			case JustMCFParser.SUBTITLE:
			case JustMCFParser.ACTIONBAR:
			case JustMCFParser.TIMES:
			case JustMCFParser.TEXT:
			case JustMCFParser.ITEM:
			case JustMCFParser.LOOT:
			case JustMCFParser.GIVE:
			case JustMCFParser.CLEAR:
			case JustMCFParser.FISH:
			case JustMCFParser.KILL:
			case JustMCFParser.MINE:
			case JustMCFParser.MAINHAND:
			case JustMCFParser.OFFHAND:
			case JustMCFParser.EFFECT:
			case JustMCFParser.TAG:
			case JustMCFParser.TP:
			case JustMCFParser.GET:
			case JustMCFParser.ATTR:
			case JustMCFParser.BASE:
			case JustMCFParser.DESTROY:
			case JustMCFParser.KEEP:
			case JustMCFParser.REPLACE:
			case JustMCFParser.HOLLOW:
			case JustMCFParser.OUTLINE:
			case JustMCFParser.FORCE:
			case JustMCFParser.MOVE:
			case JustMCFParser.NORMAL:
			case JustMCFParser.FILTERED:
			case JustMCFParser.INTERFACE:
			case JustMCFParser.WHILE:
			case JustMCFParser.FOR:
			case JustMCFParser.YEILD:
			case JustMCFParser.BREAK:
			case JustMCFParser.RETURN:
			case JustMCFParser.REPLACED:
			case JustMCFParser.DIM:
			case JustMCFParser.DIMENSION:
			case JustMCFParser.ITEM_MODIFIER:
			case JustMCFParser.BYTE:
			case JustMCFParser.SHORT:
			case JustMCFParser.INT_:
			case JustMCFParser.LONG:
			case JustMCFParser.FLOAT:
			case JustMCFParser.DOUBLE:
			case JustMCFParser.AcceptableName:
				{
				this.state = 2469;
				this.nameSpaceItem();
				}
				break;
			case JustMCFParser.T__33:
				{
				this.state = 2470;
				this.tagNameSpaceItem();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 293, this._ctx) ) {
			case 1:
				{
				this.state = 2473;
				this.snbt();
				}
				break;

			case 2:
				{
				this.state = 2474;
				this.nbt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block_predicate(): Block_predicateContext {
		let _localctx: Block_predicateContext = new Block_predicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, JustMCFParser.RULE_block_predicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2479;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NAMSP:
			case JustMCFParser.NAMESPACE:
			case JustMCFParser.LOCAL:
			case JustMCFParser.EXEC:
			case JustMCFParser.RUN:
			case JustMCFParser.STORE:
			case JustMCFParser.ALIGN:
			case JustMCFParser.ANCHORED:
			case JustMCFParser.EYES:
			case JustMCFParser.FEET:
			case JustMCFParser.IN:
			case JustMCFParser.AS:
			case JustMCFParser.AT:
			case JustMCFParser.FACING:
			case JustMCFParser.POSITIONED:
			case JustMCFParser.POS:
			case JustMCFParser.ROTATED:
			case JustMCFParser.ROT:
			case JustMCFParser.IF:
			case JustMCFParser.UNLESS:
			case JustMCFParser.ALL:
			case JustMCFParser.MASKED:
			case JustMCFParser.BIOME:
			case JustMCFParser.VALUE:
			case JustMCFParser.MAX:
			case JustMCFParser.ENTITY:
			case JustMCFParser.SCORE:
			case JustMCFParser.PREDICATE:
			case JustMCFParser.BLOCK:
			case JustMCFParser.BLOCKS:
			case JustMCFParser.SCB:
			case JustMCFParser.DISPLAYNAME:
			case JustMCFParser.RENDERTYPE:
			case JustMCFParser.DISPLAY:
			case JustMCFParser.ENABLE:
			case JustMCFParser.LIST:
			case JustMCFParser.DATA:
			case JustMCFParser.STORAGE:
			case JustMCFParser.RESET:
			case JustMCFParser.ADD:
			case JustMCFParser.REMOVE:
			case JustMCFParser.FUNC:
			case JustMCFParser.TAGGED:
			case JustMCFParser.DEFAULT:
			case JustMCFParser.PLAYER:
			case JustMCFParser.PLAYERS:
			case JustMCFParser.BOSSBAR:
			case JustMCFParser.VISIBLE:
			case JustMCFParser.BLUE:
			case JustMCFParser.GREEN:
			case JustMCFParser.PINK:
			case JustMCFParser.PURPLE:
			case JustMCFParser.RED:
			case JustMCFParser.WHITE:
			case JustMCFParser.YELLOW:
			case JustMCFParser.COLOR:
			case JustMCFParser.NAME:
			case JustMCFParser.STYLE:
			case JustMCFParser.NOTCHED_6:
			case JustMCFParser.NOTCHED_10:
			case JustMCFParser.NOTCHED_12:
			case JustMCFParser.NOTCHED_20:
			case JustMCFParser.PROGRESS:
			case JustMCFParser.SET:
			case JustMCFParser.TITLE:
			case JustMCFParser.SUBTITLE:
			case JustMCFParser.ACTIONBAR:
			case JustMCFParser.TIMES:
			case JustMCFParser.TEXT:
			case JustMCFParser.ITEM:
			case JustMCFParser.LOOT:
			case JustMCFParser.GIVE:
			case JustMCFParser.CLEAR:
			case JustMCFParser.FISH:
			case JustMCFParser.KILL:
			case JustMCFParser.MINE:
			case JustMCFParser.MAINHAND:
			case JustMCFParser.OFFHAND:
			case JustMCFParser.EFFECT:
			case JustMCFParser.TAG:
			case JustMCFParser.TP:
			case JustMCFParser.GET:
			case JustMCFParser.ATTR:
			case JustMCFParser.BASE:
			case JustMCFParser.DESTROY:
			case JustMCFParser.KEEP:
			case JustMCFParser.REPLACE:
			case JustMCFParser.HOLLOW:
			case JustMCFParser.OUTLINE:
			case JustMCFParser.FORCE:
			case JustMCFParser.MOVE:
			case JustMCFParser.NORMAL:
			case JustMCFParser.FILTERED:
			case JustMCFParser.INTERFACE:
			case JustMCFParser.WHILE:
			case JustMCFParser.FOR:
			case JustMCFParser.YEILD:
			case JustMCFParser.BREAK:
			case JustMCFParser.RETURN:
			case JustMCFParser.REPLACED:
			case JustMCFParser.DIM:
			case JustMCFParser.DIMENSION:
			case JustMCFParser.ITEM_MODIFIER:
			case JustMCFParser.BYTE:
			case JustMCFParser.SHORT:
			case JustMCFParser.INT_:
			case JustMCFParser.LONG:
			case JustMCFParser.FLOAT:
			case JustMCFParser.DOUBLE:
			case JustMCFParser.AcceptableName:
				{
				this.state = 2477;
				this.nameSpaceBlock();
				}
				break;
			case JustMCFParser.T__33:
				{
				this.state = 2478;
				this.tagNameSpaceBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2482;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 295, this._ctx) ) {
			case 1:
				{
				this.state = 2481;
				this.blockstate();
				}
				break;
			}
			this.state = 2486;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				{
				this.state = 2484;
				this.snbt();
				}
				break;

			case 2:
				{
				this.state = 2485;
				this.nbt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 37:
			return this.scbSingleOperationExpression_sempred(_localctx as ScbSingleOperationExpressionContext, predIndex);

		case 82:
			return this.existExpression_sempred(_localctx as ExistExpressionContext, predIndex);
		}
		return true;
	}
	private scbSingleOperationExpression_sempred(_localctx: ScbSingleOperationExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private existExpression_sempred(_localctx: ExistExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 5);

		case 4:
			return this.precpred(this._ctx, 4);

		case 5:
			return this.precpred(this._ctx, 3);

		case 6:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xBE\u09BB\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x03\x02\x07\x02\u0126\n\x02\f\x02\x0E\x02" +
		"\u0129\v\x02\x03\x03\x03\x03\x05\x03\u012D\n\x03\x03\x04\x03\x04\x05\x04" +
		"\u0131\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u014A\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\u0153" +
		"\n\x06\r\x06\x0E\x06\u0154\x05\x06\u0157\n\x06\x03\x07\x03\x07\x03\b\x03" +
		"\b\x05\b\u015D\n\b\x03\b\x03\b\x03\b\x05\b\u0162\n\b\x07\b\u0164\n\b\f" +
		"\b\x0E\b\u0167\v\b\x03\b\x05\b\u016A\n\b\x03\b\x03\b\x07\b\u016E\n\b\f" +
		"\b\x0E\b\u0171\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u019A\n\t\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n\u01A0\n\n\x03\v\x03\v\x05\v\u01A4\n\v\x03\v\x03\v\x03\v" +
		"\x05\v\u01A9\n\v\x07\v\u01AB\n\v\f\v\x0E\v\u01AE\v\v\x03\v\x05\v\u01B1" +
		"\n\v\x03\v\x03\v\x07\v\u01B5\n\v\f\v\x0E\v\u01B8\v\v\x03\v\x03\v\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x05\f\u01C1\n\f\x07\f\u01C3\n\f\f\f\x0E\f\u01C6" +
		"\v\f\x03\f\x05\f\u01C9\n\f\x03\f\x03\f\x03\f\x03\f\x07\f\u01CF\n\f\f\f" +
		"\x0E\f\u01D2\v\f\x05\f\u01D4\n\f\x03\f\x03\f\x07\f\u01D8\n\f\f\f\x0E\f" +
		"\u01DB\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x05\r\u01E3\n\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01E9\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x07\x0F\u01F1\n\x0F\f\x0F\x0E\x0F\u01F4\v\x0F\x05" +
		"\x0F\u01F6\n\x0F\x03\x0F\x03\x0F\x07\x0F\u01FA\n\x0F\f\x0F\x0E\x0F\u01FD" +
		"\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x07\x10\u0207\n\x10\f\x10\x0E\x10\u020A\v\x10\x03\x10\x03\x10\x05\x10" +
		"\u020E\n\x10\x03\x10\x03\x10\x07\x10\u0212\n\x10\f\x10\x0E\x10\u0215\v" +
		"\x10\x03\x10\x03\x10\x03\x11\x05\x11\u021A\n\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x05\x12\u0220\n\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\u0229\n\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x07\x16\u0233\n\x16\f\x16\x0E\x16\u0236\v\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x05\x18\u023D\n\x18\x03\x18\x03" +
		"\x18\x07\x18\u0241\n\x18\f\x18\x0E\x18\u0244\v\x18\x03\x18\x03\x18\x07" +
		"\x18\u0248\n\x18\f\x18\x0E\x18\u024B\v\x18\x03\x18\x03\x18\x05\x18\u024F" +
		"\n\x18\x03\x18\x07\x18\u0252\n\x18\f\x18\x0E\x18\u0255\v\x18\x03\x18\x03" +
		"\x18\x03\x18\x06\x18\u025A\n\x18\r\x18\x0E\x18\u025B\x03\x18\x03\x18\x05" +
		"\x18\u0260\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0266\n\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u026E\n\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0275\n\x19\x03\x19\x03\x19\x03" +
		"\x19\x05\x19\u027A\n\x19\x03\x19\x03\x19\x05\x19\u027E\n\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0285\n\x19\x03\x19\x03\x19\x03\x19" +
		"\x05\x19\u028A\n\x19\x03\x19\x03\x19\x05\x19\u028E\n\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x05\x19\u0294\n\x19\x03\x19\x03\x19\x05\x19\u0298\n\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u029F\n\x19\x03\x19\x03" +
		"\x19\x05\x19\u02A3\n\x19\x05\x19\u02A5\n\x19\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u02AD\n\x1A\x03\x1A\x03\x1A\x07\x1A\u02B1" +
		"\n\x1A\f\x1A\x0E\x1A\u02B4\v\x1A\x03\x1A\x05\x1A\u02B7\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02C7\n\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02D0\n\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x05\x1B\u02D7\n\x1B\x03\x1B\x03\x1B\x05\x1B\u02DB" +
		"\n\x1B\x03\x1B\x05\x1B\u02DE\n\x1B\x03\x1B\x03\x1B\x05\x1B\u02E2\n\x1B" +
		"\x03\x1B\x05\x1B\u02E5\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05" +
		"\x1B\u02EC\n\x1B\x03\x1B\x05\x1B\u02EF\n\x1B\x03\x1B\x03\x1B\x05\x1B\u02F3" +
		"\n\x1B\x03\x1B\x03\x1B\x05\x1B\u02F7\n\x1B\x03\x1B\x05\x1B\u02FA\n\x1B" +
		"\x03\x1B\x05\x1B\u02FD\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0303" +
		"\n\x1B\x03\x1B\x05\x1B\u0306\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x05\x1B\u030E\n\x1B\x03\x1B\x05\x1B\u0311\n\x1B\x03\x1B\x03" +
		"\x1B\x05\x1B\u0315\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B" +
		"\u031C\n\x1B\x03\x1B\x05\x1B\u031F\n\x1B\x03\x1B\x03\x1B\x05\x1B\u0323" +
		"\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0328\n\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x05\x1C\u032D\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0339\n\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0343\n\x1F\x03 " +
		"\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u034D\n \x03!\x03!\x03!\x03!" +
		"\x03!\x03!\x03!\x03!\x05!\u0357\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"" +
		"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0365\n\"\x03#\x03#\x05#\u0369" +
		"\n#\x03#\x05#\u036C\n#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x05#\u0378\n#\x03#\x03#\x03#\x03#\x03#\x05#\u037F\n#\x03#\x03#\x03#" +
		"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x05#\u03A2\n#\x03$\x03$\x05$\u03A6\n$\x03%\x03%\x03%\x07%" +
		"\u03AB\n%\f%\x0E%\u03AE\v%\x03%\x03%\x03%\x03%\x03%\x05%\u03B5\n%\x03" +
		"%\x03%\x07%\u03B9\n%\f%\x0E%\u03BC\v%\x03%\x03%\x05%\u03C0\n%\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x05&\u03FD\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0406" +
		"\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u0411" +
		"\n\'\f\'\x0E\'\u0414\v\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u041D" +
		"\n(\x03)\x05)\u0420\n)\x03)\x03)\x03*\x03*\x03*\x07*\u0427\n*\f*\x0E*" +
		"\u042A\v*\x03*\x03*\x03+\x03+\x05+\u0430\n+\x03+\x05+\u0433\n+\x03,\x03" +
		",\x03,\x03,\x03,\x05,\u043A\n,\x03,\x03,\x03,\x03,\x05,\u0440\n,\x03," +
		"\x07,\u0443\n,\f,\x0E,\u0446\v,\x03,\x05,\u0449\n,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u0456\n,\x03,\x03,\x03,\x03" +
		",\x05,\u045C\n,\x03,\x07,\u045F\n,\f,\x0E,\u0462\v,\x03,\x05,\u0465\n" +
		",\x03,\x03,\x03,\x03,\x05,\u046B\n,\x03,\x07,\u046E\n,\f,\x0E,\u0471\v" +
		",\x03,\x03,\x05,\u0475\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u047E" +
		"\n-\x03.\x03.\x03.\x03.\x03.\x05.\u0485\n.\x03.\x07.\u0488\n.\f.\x0E." +
		"\u048B\v.\x03.\x05.\u048E\n.\x03.\x03.\x03.\x03.\x05.\u0494\n.\x03.\x07" +
		".\u0497\n.\f.\x0E.\u049A\v.\x03.\x03.\x05.\u049E\n.\x03/\x05/\u04A1\n" +
		"/\x03/\x03/\x03/\x05/\u04A6\n/\x03/\x03/\x03/\x05/\u04AB\n/\x03/\x03/" +
		"\x03/\x05/\u04B0\n/\x03/\x03/\x03/\x05/\u04B5\n/\x03/\x03/\x03/\x05/\u04BA" +
		"\n/\x03/\x03/\x03/\x05/\u04BF\n/\x03/\x03/\x03/\x05/\u04C4\n/\x03/\x03" +
		"/\x03/\x05/\u04C9\n/\x03/\x03/\x05/\u04CD\n/\x030\x030\x050\u04D1\n0\x03" +
		"0\x030\x050\u04D5\n0\x030\x030\x030\x030\x030\x030\x030\x030\x050\u04DF" +
		"\n0\x031\x031\x031\x032\x032\x032\x072\u04E7\n2\f2\x0E2\u04EA\v2\x032" +
		"\x032\x032\x032\x032\x052\u04F1\n2\x032\x072\u04F4\n2\f2\x0E2\u04F7\v" +
		"2\x032\x032\x052\u04FB\n2\x033\x033\x033\x033\x033\x033\x033\x053\u0504" +
		"\n3\x033\x073\u0507\n3\f3\x0E3\u050A\v3\x033\x033\x053\u050E\n3\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x054\u0519\n4\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x055\u052A\n" +
		"5\x036\x036\x036\x076\u052F\n6\f6\x0E6\u0532\v6\x036\x036\x036\x036\x03" +
		"6\x056\u0539\n6\x036\x076\u053C\n6\f6\x0E6\u053F\v6\x036\x036\x056\u0543" +
		"\n6\x037\x037\x037\x037\x037\x037\x037\x037\x037\x057\u054E\n7\x037\x07" +
		"7\u0551\n7\f7\x0E7\u0554\v7\x037\x037\x057\u0558\n7\x038\x038\x038\x03" +
		"8\x078\u055E\n8\f8\x0E8\u0561\v8\x038\x038\x038\x038\x038\x038\x038\x05" +
		"8\u056A\n8\x039\x039\x039\x079\u056F\n9\f9\x0E9\u0572\v9\x039\x039\x03" +
		"9\x039\x039\x079\u0579\n9\f9\x0E9\u057C\v9\x039\x039\x059\u0580\n9\x03" +
		":\x03:\x03:\x07:\u0585\n:\f:\x0E:\u0588\v:\x03:\x03:\x03:\x03:\x03:\x07" +
		":\u058F\n:\f:\x0E:\u0592\v:\x03:\x03:\x05:\u0596\n:\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x07;\u05AE\n;\f;\x0E;\u05B1\v;\x03;\x03;\x05;\u05B5" +
		"\n;\x03<\x03<\x05<\u05B9\n<\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x05>\u05C2" +
		"\n>\x03>\x05>\u05C5\n>\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u05CD\n?\x03" +
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u05D9\n?\x03?\x03" +
		"?\x03?\x03?\x05?\u05DF\n?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x07@\u05F0\n@\f@\x0E@\u05F3\v@\x03@\x03" +
		"@\x05@\u05F7\n@\x03A\x03A\x03A\x05A\u05FC\nA\x03B\x03B\x03B\x03B\x05B" +
		"\u0602\nB\x03B\x05B\u0605\nB\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u060D" +
		"\nB\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u0615\nB\x03B\x03B\x03B\x03B\x05" +
		"B\u061B\nB\x03C\x03C\x03C\x05C\u0620\nC\x03C\x05C\u0623\nC\x03C\x03C\x03" +
		"C\x05C\u0628\nC\x03C\x05C\u062B\nC\x05C\u062D\nC\x03D\x03D\x03D\x07D\u0632" +
		"\nD\fD\x0ED\u0635\vD\x03D\x03D\x03D\x03D\x03D\x07D\u063C\nD\fD\x0ED\u063F" +
		"\vD\x03D\x03D\x05D\u0643\nD\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x07E\u064C" +
		"\nE\fE\x0EE\u064F\vE\x03E\x03E\x05E\u0653\nE\x03F\x03F\x05F\u0657\nF\x03" +
		"F\x05F\u065A\nF\x03F\x05F\u065D\nF\x03F\x03F\x03F\x05F\u0662\nF\x03F\x05" +
		"F\u0665\nF\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u067C\nF\x03F\x05" +
		"F\u067F\nF\x05F\u0681\nF\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u0689\nG\x03" +
		"G\x07G\u068C\nG\fG\x0EG\u068F\vG\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u0697" +
		"\nG\x03G\x03G\x05G\u069B\nG\x03G\x07G\u069E\nG\fG\x0EG\u06A1\vG\x03G\x05" +
		"G\u06A4\nG\x03G\x03G\x03G\x03G\x03G\x05G\u06AB\nG\x03G\x03G\x05G\u06AF" +
		"\nG\x03G\x03G\x05G\u06B3\nG\x03G\x07G\u06B6\nG\fG\x0EG\u06B9\vG\x03G\x03" +
		"G\x07G\u06BD\nG\fG\x0EG\u06C0\vG\x03G\x05G\u06C3\nG\x03G\x03G\x03G\x07" +
		"G\u06C8\nG\fG\x0EG\u06CB\vG\x03G\x03G\x03G\x03G\x03G\x03G\x07G\u06D3\n" +
		"G\fG\x0EG\u06D6\vG\x03G\x03G\x05G\u06DA\nG\x03H\x05H\u06DD\nH\x03H\x03" +
		"H\x03I\x03I\x03I\x03I\x03I\x07I\u06E6\nI\fI\x0EI\u06E9\vI\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x05J\u06F3\nJ\x03K\x03K\x03K\x03K\x03K\x03" +
		"K\x03K\x05K\u06FC\nK\x03K\x05K\u06FF\nK\x03K\x05K\u0702\nK\x03K\x03K\x03" +
		"K\x03K\x03K\x03K\x05K\u070A\nK\x03K\x05K\u070D\nK\x03K\x05K\u0710\nK\x03" +
		"K\x03K\x05K\u0714\nK\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u0729\nL\x03L\x03" +
		"L\x05L\u072D\nL\x05L\u072F\nL\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M" +
		"\x07M\u0739\nM\fM\x0EM\u073C\vM\x03M\x03M\x03M\x03M\x07M\u0742\nM\fM\x0E" +
		"M\u0745\vM\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
		"M\x03M\x07M\u0754\nM\fM\x0EM\u0757\vM\x03M\x03M\x03M\x03M\x07M\u075D\n" +
		"M\fM\x0EM\u0760\vM\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x07M\u0769\nM\f" +
		"M\x0EM\u076C\vM\x03M\x03M\x05M\u0770\nM\x03N\x03N\x03N\x03N\x03N\x07N" +
		"\u0777\nN\fN\x0EN\u077A\vN\x03N\x03N\x05N\u077E\nN\x03O\x03O\x03O\x03" +
		"O\x03P\x03P\x03P\x07P\u0787\nP\fP\x0EP\u078A\vP\x03P\x03P\x03Q\x03Q\x03" +
		"Q\x05Q\u0791\nQ\x03Q\x03Q\x03Q\x03Q\x05Q\u0797\nQ\x03Q\x03Q\x03Q\x03Q" +
		"\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u07A3\nQ\x03Q\x05Q\u07A6\nQ\x03Q\x03" +
		"Q\x03Q\x03Q\x03Q\x03Q\x05Q\u07AE\nQ\x05Q\u07B0\nQ\x03R\x03R\x03R\x03R" +
		"\x03R\x03R\x03R\x03R\x05R\u07BA\nR\x03S\x03S\x03S\x03S\x03T\x03T\x03T" +
		"\x07T\u07C3\nT\fT\x0ET\u07C6\vT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
		"T\x03T\x03T\x03T\x05T\u07D3\nT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
		"T\x03T\x03T\x03T\x03T\x07T\u07E1\nT\fT\x0ET\u07E4\vT\x03U\x03U\x03U\x03" +
		"U\x05U\u07EA\nU\x03V\x03V\x03V\x03V\x05V\u07F0\nV\x03W\x03W\x03W\x07W" +
		"\u07F5\nW\fW\x0EW\u07F8\vW\x03W\x03W\x03W\x03W\x03W\x03W\x05W\u0800\n" +
		"W\x03X\x03X\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x03[\x03[\x03[\x03" +
		"[\x03[\x03[\x03[\x03[\x03[\x07[\u0815\n[\f[\x0E[\u0818\v[\x03[\x03[\x03" +
		"[\x03[\x05[\u081E\n[\x05[\u0820\n[\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\" +
		"\x03\\\x03\\\x03\\\x03\\\x07\\\u082C\n\\\f\\\x0E\\\u082F\v\\\x03\\\x03" +
		"\\\x03\\\x03\\\x05\\\u0835\n\\\x05\\\u0837\n\\\x03]\x03]\x03]\x03]\x07" +
		"]\u083D\n]\f]\x0E]\u0840\v]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x07" +
		"]\u084A\n]\f]\x0E]\u084D\v]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x07" +
		"]\u0857\n]\f]\x0E]\u085A\v]\x03]\x03]\x03]\x03]\x03]\x07]\u0861\n]\f]" +
		"\x0E]\u0864\v]\x03]\x03]\x03]\x03]\x03]\x07]\u086B\n]\f]\x0E]\u086E\v" +
		"]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x05]\u0877\n]\x03^\x03^\x03_\x03" +
		"_\x03_\x03_\x07_\u087F\n_\f_\x0E_\u0882\v_\x03_\x03_\x03_\x03_\x05_\u0888" +
		"\n_\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x03a\x07a\u0892\na\fa\x0Ea\u0895" +
		"\va\x03a\x03a\x03a\x03a\x05a\u089B\na\x03b\x03b\x03b\x03b\x03b\x03b\x03" +
		"b\x03b\x03b\x03b\x03b\x05b\u08A8\nb\x03c\x03c\x03c\x03c\x07c\u08AE\nc" +
		"\fc\x0Ec\u08B1\vc\x03c\x03c\x03d\x03d\x03d\x03d\x07d\u08B9\nd\fd\x0Ed" +
		"\u08BC\vd\x03d\x03d\x03e\x03e\x03e\x03e\x07e\u08C4\ne\fe\x0Ee\u08C7\v" +
		"e\x03e\x03e\x03f\x03f\x03g\x03g\x03g\x03g\x07g\u08D1\ng\fg\x0Eg\u08D4" +
		"\vg\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x07g\u08DE\ng\fg\x0Eg\u08E1" +
		"\vg\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x05g\u08EC\ng\x03h\x03" +
		"h\x03i\x03i\x03i\x03i\x07i\u08F4\ni\fi\x0Ei\u08F7\vi\x03i\x03i\x03i\x03" +
		"i\x05i\u08FD\ni\x03j\x03j\x03j\x03j\x03k\x03k\x03k\x03k\x07k\u0907\nk" +
		"\fk\x0Ek\u090A\vk\x03k\x03k\x03k\x03k\x05k\u0910\nk\x03";
	private static readonly _serializedATNSegment1: string =
		"l\x03l\x03l\x03l\x03l\x03l\x03l\x05l\u0919\nl\x03m\x03m\x03n\x03n\x03" +
		"o\x03o\x03p\x03p\x03p\x03p\x03q\x03q\x03q\x03r\x03r\x03r\x03r\x03r\x03" +
		"r\x03s\x03s\x05s\u0930\ns\x03t\x03t\x05t\u0934\nt\x03t\x05t\u0937\nt\x03" +
		"u\x03u\x06u\u093B\nu\ru\x0Eu\u093C\x03u\x03u\x03v\x03v\x03v\x06v\u0944" +
		"\nv\rv\x0Ev\u0945\x03v\x05v\u0949\nv\x03v\x03v\x03v\x03v\x03v\x05v\u0950" +
		"\nv\x03w\x03w\x03w\x03w\x03w\x05w\u0957\nw\x03x\x03x\x03y\x03y\x03z\x03" +
		"z\x03{\x03{\x03|\x03|\x03}\x03}\x03~\x03~\x03\x7F\x03\x7F\x03\x80\x03" +
		"\x80\x03\x81\x03\x81\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83\x03\x84\x03" +
		"\x84\x03\x85\x03\x85\x03\x86\x03\x86\x03\x87\x03\x87\x03\x88\x03\x88\x03" +
		"\x88\x05\x88\u097D\n\x88\x03\x88\x03\x88\x03\x89\x03\x89\x03\x8A\x03\x8A" +
		"\x03\x8A\x05\x8A\u0986\n\x8A\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x03\x8C\x03" +
		"\x8C\x05\x8C\u098E\n\x8C\x03\x8D\x03\x8D\x03\x8D\x07\x8D\u0993\n\x8D\f" +
		"\x8D\x0E\x8D\u0996\v\x8D\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u099B\n\x8E\x03" +
		"\x8E\x03\x8E\x03\x8E\x05\x8E\u09A0\n\x8E\x03\x8F\x03\x8F\x03\x90\x03\x90" +
		"\x05\x90\u09A6\n\x90\x03\x91\x03\x91\x05\x91\u09AA\n\x91\x03\x91\x03\x91" +
		"\x05\x91\u09AE\n\x91\x03\x92\x03\x92\x05\x92\u09B2\n\x92\x03\x92\x05\x92" +
		"\u09B5\n\x92\x03\x92\x03\x92\x05\x92\u09B9\n\x92\x03\x92\x04\u093C\u0945" +
		"\x02\x04L\xA6\x93\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
		"\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0" +
		"\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2" +
		"\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4" +
		"\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6" +
		"\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8" +
		"\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108" +
		"\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116" +
		"\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\x02#" +
		"\x04\x02\x03\x03LL\x03\x02HI\x03\x02\xB2\xB3\x03\x02_`\x03\x02PQ\x03\x02" +
		"VW\x03\x02XY\x03\x02Z[\x03\x02\\]\x03\x02\x1A\x1B\x04\x02\x0F\x0F\x1D" +
		"\x1E\x03\x02\x1F \x03\x02op\x05\x02_`yy||\x03\x02}\x83\x03\x02\x87\x8B" +
		"\x03\x02\x8D\x8F\x04\x02\x14\x14\x94\x94\x03\x02\x99\x9A\x04\x02\x15\x15" +
		"\x95\x95\x05\x02\x0F\x0F\x1F\x1F##\x04\x02\x14\x14tt\x04\x02\x15\x15u" +
		"u\x03\x02\x92\x93\x03\x02\xA1\xA3\x04\x02\xA1\xA2\xA4\xA5\x04\x02]]\xA3" +
		"\xA3\x03\x02\xA6\xA8\x04\x02<<@@\x03\x02=>\x03\x02BC\x07\x02Heinq\xAB" +
		"\xAD\xB4\xB7\xBC\x03\x02\xB7\xBC\x02\u0B29\x02\u0127\x03\x02\x02\x02\x04" +
		"\u012C\x03\x02\x02\x02\x06\u0130\x03\x02\x02\x02\b\u0149\x03\x02\x02\x02" +
		"\n\u0156\x03\x02\x02\x02\f\u0158\x03\x02\x02\x02\x0E\u015A\x03\x02\x02" +
		"\x02\x10\u0199\x03\x02\x02\x02\x12\u019F\x03\x02\x02\x02\x14\u01A1\x03" +
		"\x02\x02\x02\x16\u01BB\x03\x02\x02\x02\x18\u01E2\x03\x02\x02\x02\x1A\u01E8" +
		"\x03\x02\x02\x02\x1C\u01EA\x03\x02\x02\x02\x1E\u0200\x03\x02\x02\x02 " +
		"\u0219\x03\x02\x02\x02\"\u021F\x03\x02\x02\x02$\u0221\x03\x02\x02\x02" +
		"&\u0228\x03\x02\x02\x02(\u022A\x03\x02\x02\x02*\u022C\x03\x02\x02\x02" +
		",\u0239\x03\x02\x02\x02.\u025F\x03\x02\x02\x020\u02A4\x03\x02\x02\x02" +
		"2\u02B6\x03\x02\x02\x024\u0322\x03\x02\x02\x026\u032C\x03\x02\x02\x02" +
		"8\u032E\x03\x02\x02\x02:\u0338\x03\x02\x02\x02<\u0342\x03\x02\x02\x02" +
		">\u034C\x03\x02\x02\x02@\u0356\x03\x02\x02\x02B\u0364\x03\x02\x02\x02" +
		"D\u03A1\x03\x02\x02\x02F\u03A5\x03\x02\x02\x02H\u03BF\x03\x02\x02\x02" +
		"J\u03FC\x03\x02\x02\x02L\u0405\x03\x02\x02\x02N\u041C\x03\x02\x02\x02" +
		"P\u041F\x03\x02\x02\x02R\u0423\x03\x02\x02\x02T\u0432\x03\x02\x02\x02" +
		"V\u0474\x03\x02\x02\x02X\u047D\x03\x02\x02\x02Z\u049D\x03\x02\x02\x02" +
		"\\\u04CC\x03\x02\x02\x02^\u04DE\x03\x02\x02\x02`\u04E0\x03\x02\x02\x02" +
		"b\u04FA\x03\x02\x02\x02d\u050D\x03\x02\x02\x02f\u0518\x03\x02\x02\x02" +
		"h\u0529\x03\x02\x02\x02j\u0542\x03\x02\x02\x02l\u0557\x03\x02\x02\x02" +
		"n\u0569\x03\x02\x02\x02p\u057F\x03\x02\x02\x02r\u0595\x03\x02\x02\x02" +
		"t\u05B4\x03\x02\x02\x02v\u05B8\x03\x02\x02\x02x\u05BA\x03\x02\x02\x02" +
		"z\u05BD\x03\x02\x02\x02|\u05DE\x03\x02\x02\x02~\u05F6\x03\x02\x02\x02" +
		"\x80\u05FB\x03\x02\x02\x02\x82\u061A\x03\x02\x02\x02\x84\u062C\x03\x02" +
		"\x02\x02\x86\u0642\x03\x02\x02\x02\x88\u0652\x03\x02\x02\x02\x8A\u0680" +
		"\x03\x02\x02\x02\x8C\u06D9\x03\x02\x02\x02\x8E\u06DC\x03\x02\x02\x02\x90" +
		"\u06E0\x03\x02\x02\x02\x92\u06F2\x03\x02\x02\x02\x94\u0713\x03\x02\x02" +
		"\x02\x96\u072E\x03\x02\x02\x02\x98\u076F\x03\x02\x02\x02\x9A\u077D\x03" +
		"\x02\x02\x02\x9C\u077F\x03\x02\x02\x02\x9E\u0783\x03\x02\x02\x02\xA0\u07AF" +
		"\x03\x02\x02\x02\xA2\u07B9\x03\x02\x02\x02\xA4\u07BB\x03\x02\x02\x02\xA6" +
		"\u07D2\x03\x02\x02\x02\xA8\u07E5\x03\x02\x02\x02\xAA\u07EF\x03\x02\x02" +
		"\x02\xAC\u07FF\x03\x02\x02\x02\xAE\u0801\x03\x02\x02\x02\xB0\u0807\x03" +
		"\x02\x02\x02\xB2\u0809\x03\x02\x02\x02\xB4\u081F\x03\x02\x02\x02\xB6\u0836" +
		"\x03\x02\x02\x02\xB8\u0876\x03\x02\x02\x02\xBA\u0878\x03\x02\x02\x02\xBC" +
		"\u0887\x03\x02\x02\x02\xBE\u0889\x03\x02\x02\x02\xC0\u089A\x03\x02\x02" +
		"\x02\xC2\u08A7\x03\x02\x02\x02\xC4\u08A9\x03\x02\x02\x02\xC6\u08B4\x03" +
		"\x02\x02\x02\xC8\u08BF\x03\x02\x02\x02\xCA\u08CA\x03\x02\x02\x02\xCC\u08EB" +
		"\x03\x02\x02\x02\xCE\u08ED\x03\x02\x02\x02\xD0\u08FC\x03\x02\x02\x02\xD2" +
		"\u08FE\x03\x02\x02\x02\xD4\u090F\x03\x02\x02\x02\xD6\u0918\x03\x02\x02" +
		"\x02\xD8\u091A\x03\x02\x02\x02\xDA\u091C\x03\x02\x02\x02\xDC\u091E\x03" +
		"\x02\x02\x02\xDE\u0920\x03\x02\x02\x02\xE0\u0924\x03\x02\x02\x02\xE2\u0927" +
		"\x03\x02\x02\x02\xE4\u092F\x03\x02\x02\x02\xE6\u0931\x03\x02\x02\x02\xE8" +
		"\u0938\x03\x02\x02\x02\xEA\u094F\x03\x02\x02\x02\xEC\u0956\x03\x02\x02" +
		"\x02\xEE\u0958\x03\x02\x02\x02\xF0\u095A\x03\x02\x02\x02\xF2\u095C\x03" +
		"\x02\x02\x02\xF4\u095E\x03\x02\x02\x02\xF6\u0960\x03\x02\x02\x02\xF8\u0962" +
		"\x03\x02\x02\x02\xFA\u0964\x03\x02\x02\x02\xFC\u0966\x03\x02\x02\x02\xFE" +
		"\u0968\x03\x02\x02\x02\u0100\u096A\x03\x02\x02\x02\u0102\u096C\x03\x02" +
		"\x02\x02\u0104\u096E\x03\x02\x02\x02\u0106\u0971\x03\x02\x02\x02\u0108" +
		"\u0973\x03\x02\x02\x02\u010A\u0975\x03\x02\x02\x02\u010C\u0977\x03\x02" +
		"\x02\x02\u010E\u097C\x03\x02\x02\x02\u0110\u0980\x03\x02\x02\x02\u0112" +
		"\u0985\x03\x02\x02\x02\u0114\u0987\x03\x02\x02\x02\u0116\u098D\x03\x02" +
		"\x02\x02\u0118\u098F\x03\x02\x02\x02\u011A\u099A\x03\x02\x02\x02\u011C" +
		"\u09A1\x03\x02\x02\x02\u011E\u09A5\x03\x02\x02\x02\u0120\u09A9\x03\x02" +
		"\x02\x02\u0122\u09B1\x03\x02\x02\x02\u0124\u0126\x05\x04\x03\x02\u0125" +
		"\u0124\x03\x02\x02\x02\u0126\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02" +
		"\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\x03\x03\x02\x02\x02\u0129\u0127" +
		"\x03\x02\x02\x02\u012A\u012D\x05\x0E\b\x02\u012B\u012D\x05\x12\n\x02\u012C" +
		"\u012A\x03\x02\x02\x02\u012C\u012B\x03\x02\x02\x02\u012D\x05\x03\x02\x02" +
		"\x02\u012E\u0131\x05\n\x06\x02\u012F\u0131\x05\b\x05\x02\u0130\u012E\x03" +
		"\x02\x02\x02\u0130\u012F\x03\x02\x02\x02\u0131\x07\x03\x02\x02\x02\u0132" +
		"\u014A\x05\xA8U\x02\u0133\u014A\x05\xAEX\x02\u0134\u014A\x05\xACW\x02" +
		"\u0135\u014A\x05\x14\v\x02\u0136\u014A\x05&\x14\x02\u0137\u014A\x05(\x15" +
		"\x02\u0138\u014A\x05.\x18\x02\u0139\u014A\x05H%\x02\u013A\u014A\x05R*" +
		"\x02\u013B\u014A\x05V,\x02\u013C\u014A\x05b2\x02\u013D\u014A\x05j6\x02" +
		"\u013E\u014A\x05r:\x02\u013F\u014A\x05p9\x02\u0140\u014A\x05\x86D\x02" +
		"\u0141\u014A\x05\x8CG\x02\u0142\u014A\x05\x9EP\x02\u0143\u014A\x05D#\x02" +
		"\u0144\u014A\x05\xA4S\x02\u0145\u014A\x05J&\x02\u0146\u014A\x05^0\x02" +
		"\u0147\u014A\x05\x9CO\x02\u0148\u014A\x05\f\x07\x02\u0149\u0132\x03\x02" +
		"\x02\x02\u0149\u0133\x03\x02\x02\x02\u0149\u0134\x03\x02\x02\x02\u0149" +
		"\u0135\x03\x02\x02\x02\u0149\u0136\x03\x02\x02\x02\u0149\u0137\x03\x02" +
		"\x02\x02\u0149\u0138\x03\x02\x02\x02\u0149\u0139\x03\x02\x02\x02\u0149" +
		"\u013A\x03\x02\x02\x02\u0149\u013B\x03\x02\x02\x02\u0149\u013C\x03\x02" +
		"\x02\x02\u0149\u013D\x03\x02\x02\x02\u0149\u013E\x03\x02\x02\x02\u0149" +
		"\u013F\x03\x02\x02\x02\u0149\u0140\x03\x02\x02\x02\u0149\u0141\x03\x02" +
		"\x02\x02\u0149\u0142\x03\x02\x02\x02\u0149\u0143\x03\x02\x02\x02\u0149" +
		"\u0144\x03\x02\x02\x02\u0149\u0145\x03\x02\x02\x02\u0149\u0146\x03\x02" +
		"\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u0148\x03\x02\x02\x02\u014A" +
		"\t\x03\x02\x02\x02\u014B\u0157\x05\x1C\x0F\x02\u014C\u014D\t\x02\x02\x02" +
		"\u014D\u0157\x05\x1C\x0F\x02\u014E\u0157\x05\x1E\x10\x02\u014F\u0157\x05" +
		"\xA2R\x02\u0150\u0152\x05\b\x05\x02\u0151\u0153\x050\x19\x02\u0152\u0151" +
		"\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02" +
		"\u0154\u0155\x03\x02\x02\x02\u0155\u0157\x03\x02\x02\x02\u0156\u014B\x03" +
		"\x02\x02\x02\u0156\u014C\x03\x02\x02\x02\u0156\u014E\x03\x02\x02\x02\u0156" +
		"\u014F\x03\x02\x02\x02\u0156\u0150\x03\x02\x02\x02\u0157\v\x03\x02\x02" +
		"\x02\u0158\u0159\x07E\x02\x02\u0159\r\x03\x02\x02\x02\u015A\u015C\t\x03" +
		"\x02\x02\u015B\u015D\x05\u0112\x8A\x02\u015C\u015B\x03\x02\x02\x02\u015C" +
		"\u015D\x03\x02\x02\x02\u015D\u0169\x03\x02\x02\x02\u015E\u0165\x07\x04" +
		"\x02\x02\u015F\u0161\x05\x10\t\x02\u0160\u0162\x07\x05\x02\x02\u0161\u0160" +
		"\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0164\x03\x02\x02\x02" +
		"\u0163\u015F\x03\x02\x02\x02\u0164\u0167\x03\x02\x02\x02\u0165\u0163\x03" +
		"\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0168\x03\x02\x02\x02\u0167" +
		"\u0165\x03\x02\x02\x02\u0168\u016A\x07\x06\x02\x02\u0169\u015E\x03\x02" +
		"\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B" +
		"\u016F\x07\x07\x02\x02\u016C\u016E\x05\x12\n\x02\u016D\u016C\x03\x02\x02" +
		"\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170" +
		"\x03\x02\x02\x02\u0170\u0172\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02" +
		"\u0172\u0173\x07\b\x02\x02\u0173\x0F\x03\x02\x02\x02\u0174\u0175\x07v" +
		"\x02\x02\u0175\u0176\x07\t\x02\x02\u0176\u019A\x05\u0112\x8A\x02\u0177" +
		"\u0178\x07d\x02\x02\u0178\u0179\x07\t\x02\x02\u0179\u019A\x05\u0112\x8A" +
		"\x02\u017A\u017B\x07r\x02\x02\u017B\u017C\x07\t\x02\x02\u017C\u019A\x05" +
		"\u0112\x8A\x02\u017D\u017E\x07{\x02\x02\u017E\u017F\x07\t\x02\x02\u017F" +
		"\u019A\x05\u0112\x8A\x02\u0180\u0181\x07^\x02\x02\u0181\u0182\x07\t\x02" +
		"\x02\u0182\u019A\x05\u0112\x8A\x02\u0183\u0184\x07a\x02\x02\u0184\u0185" +
		"\x07\t\x02\x02\u0185\u019A\x05\u0112\x8A\x02\u0186\u0187\x07c\x02\x02" +
		"\u0187\u0188\x07\t\x02\x02\u0188\u019A\x05\u0112\x8A\x02\u0189\u018A\t" +
		"\x04\x02\x02\u018A\u018B\x07\t\x02\x02\u018B\u019A\x05\u0112\x8A\x02\u018C" +
		"\u018D\x07\x92\x02\x02\u018D\u018E\x07\t\x02\x02\u018E\u019A\x05\u0112" +
		"\x8A\x02\u018F\u0190\x07\x93\x02\x02\u0190\u0191\x07\t\x02\x02\u0191\u019A" +
		"\x05\u0112\x8A\x02\u0192\u0193\x07\xB4\x02\x02\u0193\u0194\x07\t\x02\x02" +
		"\u0194\u019A\x05\u0112\x8A\x02\u0195\u0196\x07x\x02\x02\u0196\u0197\x07" +
		"\t\x02\x02\u0197\u019A\x05\u0112\x8A\x02\u0198\u019A\x07x\x02\x02\u0199" +
		"\u0174\x03\x02\x02\x02\u0199\u0177\x03\x02\x02\x02\u0199\u017A\x03\x02" +
		"\x02\x02\u0199\u017D\x03\x02\x02\x02\u0199\u0180\x03\x02\x02\x02\u0199" +
		"\u0183\x03\x02\x02\x02\u0199\u0186\x03\x02\x02\x02\u0199\u0189\x03\x02" +
		"\x02\x02\u0199\u018C\x03\x02\x02\x02\u0199\u018F\x03\x02\x02\x02\u0199" +
		"\u0192\x03\x02\x02\x02\u0199\u0195\x03\x02\x02\x02\u0199\u0198\x03\x02" +
		"\x02\x02\u019A\x11\x03\x02\x02\x02\u019B\u01A0\x05\x16\f\x02\u019C\u01A0" +
		"\x05\x1A\x0E\x02\u019D\u01A0\x05\xA2R\x02\u019E\u01A0\x05\x0E\b\x02\u019F" +
		"\u019B\x03\x02\x02\x02\u019F\u019C\x03\x02\x02\x02\u019F\u019D\x03\x02" +
		"\x02\x02\u019F\u019E\x03\x02\x02\x02\u01A0\x13\x03\x02\x02\x02\u01A1\u01A3" +
		"\t\x03\x02\x02\u01A2\u01A4\x05\u0112\x8A\x02\u01A3\u01A2\x03\x02\x02\x02" +
		"\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01B0\x03\x02\x02\x02\u01A5\u01AC\x07" +
		"\x04\x02\x02\u01A6\u01A8\x05\x10\t\x02\u01A7\u01A9\x07\x05\x02\x02\u01A8" +
		"\u01A7\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02" +
		"\x02\x02\u01AA\u01A6\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC" +
		"\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x03\x02" +
		"\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF\u01B1\x07\x06\x02\x02\u01B0" +
		"\u01A5\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B2\x03\x02" +
		"\x02\x02\u01B2\u01B6\x07\x07\x02\x02\u01B3\u01B5\x05\x06\x04\x02\u01B4" +
		"\u01B3\x03\x02\x02\x02\u01B5\u01B8\x03\x02\x02\x02\u01B6\u01B4\x03\x02" +
		"\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B9\x03\x02\x02\x02\u01B8" +
		"\u01B6\x03\x02\x02\x02\u01B9\u01BA\x07\b\x02\x02\u01BA\x15\x03\x02\x02" +
		"\x02\u01BB\u01BC\x07v\x02\x02\u01BC\u01C8\x05\u010A\x86\x02\u01BD\u01C4" +
		"\x07\x04\x02\x02\u01BE\u01C0\x05\x18\r\x02\u01BF\u01C1\x07\x05\x02\x02" +
		"\u01C0\u01BF\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C3\x03" +
		"\x02\x02\x02\u01C2\u01BE\x03\x02\x02\x02\u01C3\u01C6\x03\x02\x02\x02\u01C4" +
		"\u01C2\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C7\x03\x02" +
		"\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C7\u01C9\x07\x06\x02\x02\u01C8" +
		"\u01BD\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01D3\x03\x02" +
		"\x02\x02\u01CA\u01CB\x07w\x02\x02\u01CB\u01D0\x05\u010A\x86\x02\u01CC" +
		"\u01CD\x07\x05\x02\x02\u01CD\u01CF\x05\u010A\x86\x02\u01CE\u01CC\x03\x02" +
		"\x02\x02\u01CF\u01D2\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0" +
		"\u01D1\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D0\x03\x02" +
		"\x02\x02\u01D3\u01CA\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4" +
		"\u01D5\x03\x02\x02\x02\u01D5\u01D9\x07\x07\x02\x02\u01D6\u01D8\x05\x1A" +
		"\x0E\x02\u01D7\u01D6\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02\u01D9" +
		"\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DC\x03\x02" +
		"\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DC\u01DD\x07\b\x02\x02\u01DD\x17" +
		"\x03\x02\x02\x02\u01DE\u01DF\x07\xA3\x02\x02\u01DF\u01E0\x07\t\x02\x02" +
		"\u01E0\u01E3\x05\xD8m\x02\u01E1\u01E3\x07\xB1\x02\x02\u01E2\u01DE\x03" +
		"\x02\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\x19\x03\x02\x02\x02\u01E4" +
		"\u01E9\x05\x1C\x0F\x02\u01E5\u01E9\x05&\x14\x02\u01E6\u01E9\x05\x1E\x10" +
		"\x02\u01E7\u01E9\x05\x16\f\x02\u01E8\u01E4\x03\x02\x02\x02\u01E8\u01E5" +
		"\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E7\x03\x02\x02\x02" +
		"\u01E9\x1B\x03\x02\x02\x02\u01EA\u01EB\x07v\x02\x02\u01EB\u01F5\x05\xF0" +
		"y\x02\u01EC\u01ED\x07w\x02\x02\u01ED\u01F2\x05\u010A\x86\x02\u01EE\u01EF" +
		"\x07\x05\x02\x02\u01EF\u01F1\x05\u010A\x86\x02\u01F0\u01EE\x03\x02\x02" +
		"\x02\u01F1\u01F4\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3" +
		"\x03\x02\x02\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02" +
		"\u01F5\u01EC\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7\x03" +
		"\x02\x02\x02\u01F7\u01FB\x07\x07\x02\x02\u01F8\u01FA\x05\x06\x04\x02\u01F9" +
		"\u01F8\x03\x02\x02\x02\u01FA\u01FD\x03\x02\x02\x02\u01FB\u01F9\x03\x02" +
		"\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FE\x03\x02\x02\x02\u01FD" +
		"\u01FB\x03\x02\x02\x02\u01FE\u01FF\x07\b\x02\x02\u01FF\x1D\x03\x02\x02" +
		"\x02\u0200\u0201\x07v\x02\x02\u0201\u0202\x05\xF0y\x02\u0202\u0203\x07" +
		"\n\x02\x02\u0203\u0208\x05 \x11\x02\u0204\u0205\x07\x05\x02\x02\u0205" +
		"\u0207\x05 \x11\x02\u0206\u0204\x03\x02\x02\x02\u0207\u020A\x03\x02\x02" +
		"\x02\u0208\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020B" +
		"\x03\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020B\u020D\x07\v\x02\x02" +
		"\u020C\u020E\x05\u011A\x8E\x02\u020D\u020C\x03\x02\x02\x02\u020D\u020E" +
		"\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F\u0213\x07\x07\x02\x02" +
		"\u0210\u0212\x05\"\x12\x02\u0211\u0210\x03\x02\x02\x02\u0212\u0215\x03" +
		"\x02\x02\x02\u0213\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214" +
		"\u0216\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0216\u0217\x07\b\x02" +
		"\x02\u0217\x1F\x03\x02\x02\x02\u0218\u021A\x05\u011A\x8E\x02\u0219\u0218" +
		"\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02" +
		"\u021B\u021C\x05\u0112\x8A\x02\u021C!\x03\x02\x02\x02\u021D\u0220\x05" +
		"\x06\x04\x02\u021E\u0220\x05$\x13\x02\u021F\u021D\x03\x02\x02\x02\u021F" +
		"\u021E\x03\x02\x02\x02\u0220#\x03\x02\x02\x02\u0221\u0222\x07\xAE\x02" +
		"\x02\u0222\u0223\x05:\x1E\x02\u0223%\x03\x02\x02\x02\u0224\u0225\x07v" +
		"\x02\x02\u0225\u0229\x05\xF0y\x02\u0226\u0227\x07v\x02\x02\u0227\u0229" +
		"\x05\u010A\x86\x02\u0228\u0224\x03\x02\x02\x02\u0228\u0226\x03\x02\x02" +
		"\x02\u0229\'\x03\x02\x02\x02\u022A\u022B\x05*\x16\x02\u022B)\x03\x02\x02" +
		"\x02\u022C\u022D\x07v\x02\x02\u022D\u022E\x05\xF0y\x02\u022E\u022F\x07" +
		"\n\x02\x02\u022F\u0234\x05,\x17\x02\u0230\u0231\x07\x05\x02\x02\u0231" +
		"\u0233\x05,\x17\x02\u0232\u0230\x03\x02\x02\x02\u0233\u0236\x03\x02\x02" +
		"\x02\u0234\u0232\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0237" +
		"\x03\x02\x02\x02\u0236\u0234\x03\x02\x02\x02\u0237\u0238\x07\v\x02\x02" +
		"\u0238+\x03\x02\x02\x02\u0239\u023A\x05:\x1E\x02\u023A-\x03\x02\x02\x02" +
		"\u023B\u023D\x07K\x02\x02\u023C\u023B\x03\x02\x02\x02\u023C\u023D\x03" +
		"\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u0242\x07\x07\x02\x02\u023F" +
		"\u0241\x054\x1B\x02\u0240\u023F\x03\x02\x02\x02\u0241\u0244\x03\x02\x02" +
		"\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0245" +
		"\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0249\x07\b\x02\x02" +
		"\u0246\u0248\x050\x19\x02\u0247\u0246\x03\x02\x02\x02\u0248\u024B\x03" +
		"\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A" +
		"\u024E\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024C\u024F\x052\x1A" +
		"\x02\u024D\u024F\x050\x19\x02\u024E\u024C\x03\x02\x02\x02\u024E\u024D" +
		"\x03\x02\x02\x02\u024F\u0253\x03\x02\x02\x02\u0250\u0252\x050\x19\x02" +
		"\u0251\u0250\x03\x02\x02\x02\u0252\u0255\x03\x02\x02\x02\u0253\u0251\x03" +
		"\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0260\x03\x02\x02\x02\u0255" +
		"\u0253\x03\x02\x02\x02\u0256\u0257\x07K\x02\x02\u0257\u0259\x07\x07\x02" +
		"\x02\u0258\u025A\x054\x1B\x02\u0259\u0258\x03\x02\x02\x02\u025A\u025B" +
		"\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02" +
		"\u025C\u025D\x03\x02\x02\x02\u025D\u025E\x07\b\x02\x02\u025E\u0260\x03" +
		"\x02\x02\x02\u025F\u023C\x03\x02\x02\x02\u025F\u0256\x03\x02\x02\x02\u0260" +
		"/\x03\x02\x02\x02\u0261\u0266\x07\f\x02\x02\u0262\u0266\x07M\x02\x02\u0263" +
		"\u0264\x07M\x02\x02\u0264\u0266\x07g\x02\x02\u0265\u0261\x03\x02\x02\x02" +
		"\u0265\u0262\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0266\u0267\x03" +
		"\x02\x02\x02\u0267\u02A5\x05P)\x02\u0268\u026E\x07\r\x02\x02\u0269\u026A" +
		"\x07\x0E\x02\x02\u026A\u026E\x07M\x02\x02\u026B\u026C\x07M\x02\x02\u026C" +
		"\u026E\x07h\x02\x02\u026D\u0268\x03\x02\x02\x02\u026D\u0269\x03\x02\x02" +
		"\x02\u026D\u026B\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u02A5" +
		"\x05P)\x02\u0270\u0275\x07\f\x02\x02\u0271\u0275\x07M\x02\x02\u0272\u0273" +
		"\x07M\x02\x02\u0273\u0275\x07g\x02\x02\u0274\u0270\x03\x02\x02\x02\u0274" +
		"\u0271\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0275\u0276\x03\x02" +
		"\x02\x02\u0276\u027D\x05:\x1E\x02\u0277\u0279\x05\u0110\x89\x02\u0278" +
		"\u027A\x07\x0F\x02\x02\u0279\u0278\x03\x02\x02\x02\u0279\u027A\x03\x02" +
		"\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B\u027C\x05\xDAn\x02\u027C\u027E" +
		"\x03\x02\x02\x02\u027D\u0277\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02" +
		"\u027E\u02A5\x03\x02\x02\x02\u027F\u0285\x07\r\x02\x02\u0280\u0281\x07" +
		"\x0E\x02\x02\u0281\u0285\x07M\x02\x02\u0282\u0283\x07M\x02\x02\u0283\u0285" +
		"\x07h\x02\x02\u0284\u027F\x03\x02\x02\x02\u0284\u0280\x03\x02\x02\x02" +
		"\u0284\u0282\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u028D\x05" +
		":\x1E\x02\u0287\u0289\x05\u0110\x89\x02\u0288\u028A\x07\x0F\x02\x02\u0289" +
		"\u0288\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028B\x03\x02" +
		"\x02\x02\u028B\u028C\x05\xDAn\x02\u028C\u028E\x03\x02\x02\x02\u028D\u0287" +
		"\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u02A5\x03\x02\x02\x02" +
		"\u028F\u0294\x07\f\x02\x02\u0290\u0294\x07M\x02\x02\u0291\u0292\x07M\x02" +
		"\x02\u0292\u0294\x07g\x02\x02\u0293\u028F\x03\x02\x02\x02\u0293\u0290" +
		"\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02" +
		"\u0295\u0297\x05`1\x02\u0296\u0298\t\x05\x02\x02\u0297\u0296\x03\x02\x02" +
		"\x02\u0297\u0298\x03\x02\x02\x02\u0298\u02A5\x03\x02\x02\x02\u0299\u029F" +
		"\x07\r\x02\x02\u029A\u029B\x07\x0E\x02\x02\u029B\u029F\x07M\x02\x02\u029C" +
		"\u029D\x07M\x02\x02\u029D\u029F\x07h\x02\x02\u029E\u0299\x03\x02\x02\x02" +
		"\u029E\u029A\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029F\u02A0\x03" +
		"\x02\x02\x02\u02A0\u02A2\x05`1\x02\u02A1\u02A3\t\x05\x02\x02\u02A2\u02A1" +
		"\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A5\x03\x02\x02\x02" +
		"\u02A4\u0265\x03\x02\x02\x02\u02A4\u026D\x03\x02\x02\x02\u02A4\u0274\x03" +
		"\x02\x02\x02\u02A4\u0284\x03\x02\x02\x02\u02A4\u0293\x03\x02\x02\x02\u02A4" +
		"\u029E\x03\x02\x02\x02\u02A51\x03\x02\x02\x02\u02A6\u02A7\t\x02\x02\x02" +
		"\u02A7\u02B7\x05\b\x05\x02\u02A8\u02A9\t\x02\x02\x02\u02A9\u02B7\x05\x1C" +
		"\x0F\x02\u02AA\u02AC\t\x02\x02\x02\u02AB\u02AD\x07v\x02\x02\u02AC\u02AB" +
		"\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02" +
		"\u02AE\u02B2\x07\x07\x02\x02\u02AF\u02B1\x05\x06\x04\x02\u02B0\u02AF\x03" +
		"\x02\x02\x02\u02B1\u02B4\x03\x02\x02\x02\u02B2\u02B0\x03\x02\x02\x02\u02B2" +
		"\u02B3\x03\x02\x02\x02\u02B3\u02B5\x03\x02\x02\x02\u02B4\u02B2\x03\x02" +
		"\x02\x02\u02B5\u02B7\x07\b\x02\x02\u02B6\u02A6\x03\x02\x02\x02\u02B6\u02A8" +
		"\x03\x02\x02\x02\u02B6\u02AA\x03\x02\x02\x02\u02B73\x03\x02\x02\x02\u02B8" +
		"\u02B9\x07N\x02\x02\u02B9\u0323\x07\xBD\x02\x02\u02BA\u02BB\x07O\x02\x02" +
		"\u02BB\u0323\t\x06\x02\x02\u02BC\u02BD\x07R\x02\x02\u02BD\u0323\x05\xF8" +
		"}\x02\u02BE\u02BF\x07S\x02\x02\u02BF\u0323\x05\xEAv\x02\u02C0\u02C1\x07" +
		"T\x02\x02\u02C1\u0323\x05\xEAv\x02\u02C2\u02C3\x07U\x02\x02\u02C3\u0323" +
		"\x05\xDEp\x02\u02C4\u02C6\x07U\x02\x02\u02C5\u02C7\x07a\x02\x02\u02C6" +
		"\u02C5\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02C8\x03\x02" +
		"\x02\x02\u02C8\u02C9\x05\xEAv\x02\u02C9\u02CA\t\x06\x02\x02\u02CA\u0323" +
		"\x03\x02\x02\x02\u02CB\u02CC\t\x07\x02\x02\u02CC\u0323\x05\xDEp\x02\u02CD" +
		"\u02CF\t\x07\x02\x02\u02CE\u02D0\x07S\x02\x02\u02CF\u02CE\x03\x02\x02" +
		"\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u0323" +
		"\x05\xEAv\x02\u02D2\u02D3\t\b\x02\x02\u02D3\u0323\x05\xE0q\x02\u02D4\u02D6" +
		"\t\b\x02\x02\u02D5\u02D7\x07S\x02\x02\u02D6\u02D5\x03\x02\x02\x02\u02D6" +
		"\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u0323\x05\xEA" +
		"v\x02\u02D9\u02DB\t\t\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u02DA\u02D9\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DD" +
		"\x03\x02\x02\x02\u02DC\u02DE\x07a\x02\x02\u02DD\u02DC\x03\x02\x02\x02" +
		"\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\u0323\x05" +
		"\xEAv\x02\u02E0\u02E2\t\t\x02\x02\u02E1\u02E0\x03\x02\x02\x02\u02E1\u02E2" +
		"\x03\x02\x02\x02\u02E2\u02E4\x03\x02\x02\x02\u02E3\u02E5\x07b\x02\x02" +
		"\u02E4\u02E3\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x03" +
		"\x02\x02\x02\u02E6\u02E7\x05N(\x02\u02E7\u02E8\x076\x02\x02\u02E8\u02E9" +
		"\x05N(\x02\u02E9\u0323\x03\x02\x02\x02\u02EA\u02EC\t\t\x02\x02\u02EB\u02EA" +
		"\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02EE\x03\x02\x02\x02" +
		"\u02ED\u02EF\x07b\x02\x02\u02EE\u02ED\x03\x02\x02\x02\u02EE\u02EF\x03" +
		"\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F6\x05N(\x02\u02F1\u02F3" +
		"\x07f\x02\x02\u02F2\u02F1\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02" +
		"\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F7\x056\x1C\x02\u02F5\u02F7\x05" +
		"8\x1D\x02\u02F6\u02F2\x03\x02\x02\x02\u02F6\u02F5\x03\x02\x02\x02\u02F7" +
		"\u0323\x03\x02\x02\x02\u02F8\u02FA\t\t\x02\x02\u02F9\u02F8\x03\x02\x02" +
		"\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FC\x03\x02\x02\x02\u02FB\u02FD" +
		"\x07d\x02\x02\u02FC\u02FB\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02" +
		"\u02FD\u02FE\x03\x02\x02\x02\u02FE\u02FF\x05\xDEp\x02\u02FF\u0300\x05" +
		"\xE6t\x02\u0300\u0323\x03\x02\x02\x02\u0301\u0303\t\t\x02\x02\u0302\u0301" +
		"\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0305\x03\x02\x02\x02" +
		"\u0304\u0306\x07e\x02\x02\u0305\u0304\x03\x02\x02\x02\u0305\u0306\x03" +
		"\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u0308\x05\xDEp\x02\u0308" +
		"\u0309\x05\xDEp\x02\u0309\u030A\x05\xDEp\x02\u030A\u030B\t\n\x02\x02\u030B" +
		"\u0323\x03\x02\x02\x02\u030C\u030E\t\t\x02\x02\u030D\u030C\x03\x02\x02" +
		"\x02\u030D\u030E\x03\x02\x02\x02\u030E\u0310\x03\x02\x02\x02\u030F\u0311" +
		"\x07q\x02\x02\u0310\u030F\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02" +
		"\u0311\u0312\x03\x02\x02\x02\u0312\u0323\x05:\x1E\x02\u0313\u0315\t\t" +
		"\x02\x02\u0314\u0313\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315" +
		"\u0316\x03\x02\x02\x02\u0316\u0317\x07^\x02\x02\u0317\u0318\x05\xDEp\x02" +
		"\u0318\u0319\x05\xF6|\x02\u0319\u0323\x03\x02\x02\x02\u031A\u031C\t\t" +
		"\x02\x02\u031B\u031A\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C" +
		"\u031E\x03\x02\x02\x02\u031D\u031F\x07c\x02\x02\u031E\u031D\x03\x02\x02" +
		"\x02\u031E\u031F\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320\u0323" +
		"\x05\xFA~\x02\u0321\u0323\x050\x19\x02\u0322\u02B8\x03\x02\x02\x02\u0322" +
		"\u02BA\x03\x02\x02\x02\u0322\u02BC\x03\x02\x02\x02\u0322\u02BE\x03\x02" +
		"\x02\x02\u0322\u02C0\x03\x02\x02\x02\u0322\u02C2\x03\x02\x02\x02\u0322" +
		"\u02C4\x03\x02\x02\x02\u0322\u02CB\x03\x02\x02\x02\u0322\u02CD\x03\x02" +
		"\x02\x02\u0322\u02D2\x03\x02\x02\x02\u0322\u02D4\x03\x02\x02\x02\u0322" +
		"\u02DA\x03\x02\x02\x02\u0322\u02E1\x03\x02\x02\x02\u0322\u02EB\x03\x02" +
		"\x02\x02\u0322\u02F9\x03\x02\x02\x02\u0322\u0302\x03\x02\x02\x02\u0322" +
		"\u030D\x03\x02\x02\x02\u0322\u0314\x03\x02\x02\x02\u0322\u031B\x03\x02" +
		"\x02\x02\u0322\u0321\x03\x02\x02\x02\u03235\x03\x02\x02\x02\u0324\u0325" +
		"\x07B\x02\x02\u0325\u0327\x07\x10\x02\x02\u0326\u0328\x07B\x02\x02\u0327" +
		"\u0326\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328\u032D\x03\x02" +
		"\x02\x02\u0329\u032A\x07\x10\x02\x02\u032A\u032D\x07B\x02\x02\u032B\u032D" +
		"\x07B\x02\x02\u032C\u0324\x03\x02\x02\x02\u032C\u0329\x03\x02\x02\x02" +
		"\u032C\u032B\x03\x02\x02\x02\u032D7\x03\x02\x02\x02\u032E\u032F\x076\x02" +
		"\x02\u032F\u0330\x07B\x02\x02\u03309\x03\x02\x02\x02\u0331\u0332\x07J" +
		"\x02\x02\u0332\u0333\x07\x11\x02\x02\u0333\u0339\x05\xB6\\\x02\u0334\u0339" +
		"\x05<\x1F\x02\u0335\u0339\x05\xB4[\x02\u0336\u0339\x05> \x02\u0337\u0339" +
		"\x05@!\x02\u0338\u0331\x03\x02\x02\x02\u0338\u0334\x03\x02\x02\x02\u0338" +
		"\u0335\x03\x02\x02\x02\u0338\u0336\x03\x02\x02\x02\u0338\u0337\x03\x02" +
		"\x02\x02\u0339;\x03\x02\x02\x02\u033A\u033B\x05\xF2z\x02\u033B\u033C\x07" +
		"\x11\x02\x02\u033C\u033D\x05\xB6\\\x02\u033D\u0343\x03\x02\x02\x02\u033E" +
		"\u033F\x07r\x02\x02\u033F\u0340\x05\xF2z\x02\u0340\u0341\x05\xB6\\\x02" +
		"\u0341\u0343\x03\x02\x02\x02\u0342\u033A\x03\x02\x02\x02\u0342\u033E\x03" +
		"\x02\x02\x02\u0343=\x03\x02\x02\x02\u0344\u0345\x05\xEAv\x02\u0345\u0346" +
		"\x07\x11\x02\x02\u0346\u0347\x05\xB6\\\x02\u0347\u034D\x03\x02\x02\x02" +
		"\u0348\u0349\x07a\x02\x02\u0349\u034A\x05\xEAv\x02\u034A\u034B\x05\xB6" +
		"\\\x02\u034B\u034D\x03\x02\x02\x02\u034C\u0344\x03\x02\x02\x02\u034C\u0348" +
		"\x03\x02\x02\x02\u034D?\x03\x02\x02\x02\u034E\u034F\x05\xDEp\x02\u034F" +
		"\u0350\x07\x11\x02\x02\u0350\u0351\x05\xB6\\\x02\u0351\u0357\x03\x02\x02" +
		"\x02\u0352\u0353\x07d\x02\x02\u0353\u0354\x05\xDEp\x02\u0354\u0355\x05" +
		"\xB6\\\x02\u0355\u0357\x03\x02\x02\x02\u0356\u034E\x03\x02\x02\x02\u0356" +
		"\u0352\x03\x02\x02\x02\u0357A\x03\x02\x02\x02\u0358\u0359\x05\xF2z\x02" +
		"\u0359\u035A\x07\x12\x02\x02\u035A\u035B\x05\xB0Y\x02\u035B\u0365\x03" +
		"\x02\x02\x02\u035C\u035D\x05\xEAv\x02\u035D\u035E\x07\x12\x02\x02\u035E" +
		"\u035F\x05\xB0Y\x02\u035F\u0365\x03\x02\x02\x02\u0360\u0361\x05\xDEp\x02" +
		"\u0361\u0362\x07\x12\x02\x02\u0362\u0363\x05\xB0Y\x02\u0363\u0365\x03" +
		"\x02\x02\x02\u0364\u0358\x03\x02\x02\x02\u0364\u035C\x03\x02\x02\x02\u0364" +
		"\u0360\x03\x02\x02\x02\u0365C\x03\x02\x02\x02\u0366\u036B\x05:\x1E\x02" +
		"\u0367\u0369\x07\x0F\x02\x02\u0368\u0367\x03\x02\x02\x02\u0368\u0369\x03" +
		"\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036C\x05\xDAn\x02\u036B" +
		"\u0368\x03\x02\x02\x02\u036B\u036C\x03\x02\x02\x02\u036C\u03A2\x03\x02" +
		"\x02\x02\u036D\u03A2\x05B\"\x02\u036E\u036F\x05:\x1E\x02\u036F\u0370\x07" +
		"\x12\x02\x02\u0370\u0371\x05\xB0Y\x02\u0371\u03A2\x03\x02\x02\x02\u0372" +
		"\u0373\x05:\x1E\x02\u0373\u0374\x07\x12\x02\x02\u0374\u0375\x05F$\x02" +
		"\u0375\u03A2\x03\x02\x02\x02\u0376\u0378\x05\u011A\x8E\x02\u0377\u0376" +
		"\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02" +
		"\u0379\u037A\x05:\x1E\x02\u037A\u037B\x07\t\x02\x02\u037B\u037C\x05\xB0" +
		"Y\x02\u037C\u03A2\x03\x02\x02\x02\u037D\u037F\x05\u011A\x8E\x02\u037E" +
		"\u037D\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0380\x03\x02" +
		"\x02\x02\u0380\u0381\x05:\x1E\x02\u0381\u0382\x07\t\x02\x02\u0382\u0383" +
		"\x05F$\x02\u0383\u03A2\x03\x02\x02\x02\u0384\u0385\x05:\x1E\x02\u0385" +
		"\u0386\x07\x10\x02\x02\u0386\u0387\x05\xB0Y\x02\u0387\u03A2\x03\x02\x02" +
		"\x02\u0388\u0389\x05:\x1E\x02\u0389\u038A\x07\x10\x02\x02\u038A\u038B" +
		"\x05F$\x02\u038B\u03A2\x03\x02\x02\x02\u038C\u038D\x05:\x1E\x02\u038D" +
		"\u038E\x07\x13\x02\x02\u038E\u038F\x05\xB0Y\x02\u038F\u03A2\x03\x02\x02" +
		"\x02\u0390\u0391\x05:\x1E\x02\u0391\u0392\x07\x13\x02\x02\u0392\u0393" +
		"\x05F$\x02\u0393\u03A2\x03\x02\x02\x02\u0394\u0395\x05:\x1E\x02\u0395" +
		"\u0396\x07\x10\x02\x02\u0396\u0397\x07B\x02\x02\u0397\u0398\x05\xB0Y\x02" +
		"\u0398\u03A2\x03\x02\x02\x02\u0399\u039A\x05:\x1E\x02\u039A\u039B\x07" +
		"\x10\x02\x02\u039B\u039C\x07B\x02\x02\u039C\u039D\x05F$\x02\u039D\u03A2" +
		"\x03\x02\x02\x02\u039E\u039F\x05:\x1E\x02\u039F\u03A0\x07u\x02\x02\u03A0" +
		"\u03A2\x03\x02\x02\x02\u03A1\u0366\x03\x02\x02\x02\u03A1\u036D\x03\x02" +
		"\x02\x02\u03A1\u036E\x03\x02\x02\x02\u03A1\u0372\x03\x02\x02\x02\u03A1" +
		"\u0377\x03\x02\x02\x02\u03A1\u037E\x03\x02\x02\x02\u03A1\u0384\x03\x02" +
		"\x02\x02\u03A1\u0388\x03\x02\x02\x02\u03A1\u038C\x03\x02\x02\x02\u03A1" +
		"\u0390\x03\x02\x02\x02\u03A1\u0394\x03\x02\x02\x02\u03A1\u0399\x03\x02" +
		"\x02\x02\u03A1\u039E\x03\x02\x02\x02\u03A2E\x03\x02\x02\x02\u03A3\u03A6" +
		"\x05:\x1E\x02\u03A4\u03A6\x05*\x16\x02\u03A5\u03A3\x03\x02\x02\x02\u03A5" +
		"\u03A4\x03\x02\x02\x02\u03A6G\x03\x02\x02\x02\u03A7\u03A8\x07q\x02\x02" +
		"\u03A8\u03AC\x07\x07\x02\x02\u03A9\u03AB\x05D#\x02\u03AA\u03A9\x03\x02" +
		"\x02\x02\u03AB\u03AE\x03\x02\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AC" +
		"\u03AD\x03\x02\x02\x02\u03AD\u03AF\x03\x02\x02\x02\u03AE\u03AC\x03\x02" +
		"\x02\x02\u03AF\u03C0\x07\b\x02\x02\u03B0\u03B1\x07q\x02\x02\u03B1\u03B4" +
		"\x05\xF2z\x02\u03B2\u03B3\x07\x11\x02\x02\u03B3\u03B5\x05\xB6\\\x02\u03B4" +
		"\u03B2\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03B6\x03\x02" +
		"\x02\x02\u03B6\u03BA\x07\x07\x02\x02\u03B7\u03B9\x05D#\x02\u03B8\u03B7" +
		"\x03\x02\x02\x02\u03B9\u03BC\x03\x02\x02\x02\u03BA\u03B8\x03\x02\x02\x02" +
		"\u03BA\u03BB\x03\x02\x02\x02\u03BB\u03BD\x03\x02\x02\x02\u03BC\u03BA\x03" +
		"\x02\x02\x02\u03BD\u03BE\x07\b\x02\x02\u03BE\u03C0\x03\x02\x02\x02\u03BF" +
		"\u03A7\x03\x02\x02\x02\u03BF\u03B0\x03\x02\x02\x02\u03C0I\x03\x02\x02" +
		"\x02\u03C1\u03FD\x05N(\x02\u03C2\u03C3\x05N(\x02\u03C3\u03C4\x07\x14\x02" +
		"\x02\u03C4\u03C5\x07B\x02\x02\u03C5\u03FD\x03\x02\x02\x02\u03C6\u03C7" +
		"\x05N(\x02\u03C7\u03C8\x07\x15\x02\x02\u03C8\u03C9\x07B\x02\x02\u03C9" +
		"\u03FD\x03\x02\x02\x02\u03CA\u03CB\x05N(\x02\u03CB\u03CC\x07\t\x02\x02" +
		"\u03CC\u03CD\x07B\x02\x02\u03CD\u03FD\x03\x02\x02\x02\u03CE\u03CF\x05" +
		"N(\x02\u03CF\u03D0\x07\x14\x02\x02\u03D0\u03D1\x05N(\x02\u03D1\u03FD\x03" +
		"\x02\x02\x02\u03D2\u03D3\x05N(\x02\u03D3\u03D4\x07\x15\x02\x02\u03D4\u03D5" +
		"\x05N(\x02\u03D5\u03FD\x03\x02\x02\x02\u03D6\u03D7\x05N(\x02\u03D7\u03D8" +
		"\x07\x16\x02\x02\u03D8\u03D9\x05N(\x02\u03D9\u03FD\x03\x02\x02\x02\u03DA" +
		"\u03DB\x05N(\x02\u03DB\u03DC\x07\x17\x02\x02\u03DC\u03DD\x05N(\x02\u03DD" +
		"\u03FD\x03\x02\x02\x02\u03DE\u03DF\x05N(\x02\u03DF\u03E0\x07\x18\x02\x02" +
		"\u03E0\u03E1\x05N(\x02\u03E1\u03FD\x03\x02\x02\x02\u03E2\u03E3\x05N(\x02" +
		"\u03E3\u03E4\x07\x19\x02\x02\u03E4\u03E5\x05N(\x02\u03E5\u03FD\x03\x02" +
		"\x02\x02\u03E6\u03E7\x05N(\x02\u03E7\u03E8\x07\x1A\x02\x02\u03E8\u03E9" +
		"\x05N(\x02\u03E9\u03FD\x03\x02\x02\x02\u03EA\u03EB\x05N(\x02\u03EB\u03EC" +
		"\x07\x1B\x02\x02\u03EC\u03ED\x05N(\x02\u03ED\u03FD\x03\x02\x02\x02\u03EE" +
		"\u03EF\x05N(\x02\u03EF\u03F0\x07\t\x02\x02\u03F0\u03F1\x05N(\x02\u03F1" +
		"\u03FD\x03\x02\x02\x02\u03F2\u03F3\x05N(\x02\u03F3\u03F4\x07s\x02\x02" +
		"\u03F4\u03FD\x03\x02\x02\x02\u03F5\u03F6\x05N(\x02\u03F6\u03F7\x07m\x02" +
		"\x02\u03F7\u03FD\x03\x02\x02\x02\u03F8\u03F9\x05N(\x02\u03F9\u03FA\x07" +
		"\x1C\x02\x02\u03FA\u03FB\x05L\'\x02\u03FB\u03FD\x03\x02\x02\x02\u03FC" +
		"\u03C1\x03\x02\x02\x02\u03FC\u03C2\x03\x02\x02\x02\u03FC\u03C6\x03\x02" +
		"\x02\x02\u03FC\u03CA\x03\x02\x02\x02\u03FC\u03CE\x03\x02\x02\x02\u03FC" +
		"\u03D2\x03\x02\x02\x02\u03FC\u03D6\x03\x02\x02\x02\u03FC\u03DA\x03\x02" +
		"\x02\x02\u03FC\u03DE\x03\x02\x02\x02\u03FC\u03E2\x03\x02\x02\x02\u03FC" +
		"\u03E6\x03\x02\x02\x02\u03FC\u03EA\x03\x02\x02\x02\u03FC\u03EE\x03\x02" +
		"\x02\x02\u03FC\u03F2\x03\x02\x02\x02\u03FC\u03F5\x03\x02\x02\x02\u03FC" +
		"\u03F8\x03\x02\x02\x02\u03FDK\x03\x02\x02\x02\u03FE\u03FF\b\'\x01\x02" +
		"\u03FF\u0406\x07B\x02\x02\u0400\u0406\x05N(\x02\u0401\u0402\x07\n\x02" +
		"\x02\u0402\u0403\x05L\'\x02\u0403\u0404\x07\v\x02\x02\u0404\u0406\x03" +
		"\x02\x02\x02\u0405\u03FE\x03\x02\x02\x02\u0405\u0400\x03\x02\x02\x02\u0405" +
		"\u0401\x03\x02\x02\x02\u0406\u0412\x03\x02\x02\x02\u0407\u0408\f\b\x02" +
		"\x02\u0408\u0409\t\v\x02\x02\u0409\u0411\x05L\'\t\u040A\u040B\f\x07\x02" +
		"\x02\u040B\u040C\t\f\x02\x02\u040C\u0411\x05L\'\b\u040D\u040E\f\x06\x02" +
		"\x02\u040E\u040F\t\r\x02\x02\u040F\u0411\x05L\'\x07\u0410\u0407\x03\x02" +
		"\x02\x02\u0410\u040A\x03\x02\x02\x02\u0410\u040D\x03\x02\x02\x02\u0411" +
		"\u0414\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02\u0412\u0413\x03\x02" +
		"\x02\x02\u0413M\x03\x02\x02\x02\u0414\u0412\x03\x02\x02\x02\u0415\u0416" +
		"\x05\u0116\x8C\x02\u0416\u0417\x05\xEAv\x02\u0417\u041D\x03\x02\x02\x02" +
		"\u0418\u0419\x05\xEAv\x02\u0419\u041A\x07!\x02\x02\u041A\u041B\x05\u0116" +
		"\x8C\x02\u041B\u041D\x03\x02\x02\x02\u041C\u0415\x03\x02\x02\x02\u041C" +
		"\u0418\x03\x02\x02\x02\u041DO\x03\x02\x02\x02\u041E\u0420\x07b\x02\x02" +
		"\u041F\u041E\x03\x02\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420\u0421\x03" +
		"\x02\x02\x02\u0421\u0422\x05N(\x02\u0422Q\x03\x02\x02\x02\u0423\u0424" +
		"\x07i\x02\x02\u0424\u0428\x07\x07\x02\x02\u0425\u0427\x05T+\x02\u0426" +
		"\u0425\x03\x02\x02\x02\u0427\u042A\x03\x02\x02\x02\u0428\u0426\x03\x02" +
		"\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429\u042B\x03\x02\x02\x02\u042A" +
		"\u0428\x03\x02\x02\x02\u042B\u042C\x07\b\x02\x02\u042CS\x03\x02\x02\x02" +
		"\u042D\u0433\x05J&\x02\u042E\u0430\x05\xEAv\x02\u042F\u042E\x03\x02\x02" +
		"\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431\u0433" +
		"\x07n\x02\x02\u0432\u042D\x03\x02\x02\x02\u0432\u042F\x03\x02\x02\x02" +
		"\u0433U\x03\x02\x02\x02\u0434\u0439\x07i\x02\x02\u0435\u0436\x07\n\x02" +
		"\x02\u0436\u0437\x05\u0114\x8B\x02\u0437\u0438\x07\v\x02\x02\u0438\u043A" +
		"\x03\x02\x02\x02\u0439\u0435\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02" +
		"\u043A\u043B\x03\x02\x02\x02\u043B\u043C\x05\u0112\x8A\x02\u043C\u0448" +
		"\x05\xB2Z\x02\u043D\u0444\x07\x07\x02\x02\u043E\u0440\x07\"\x02\x02\u043F" +
		"\u043E\x03\x02\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\u0441\x03\x02" +
		"\x02\x02\u0441\u0443\x05X-\x02\u0442\u043F\x03\x02\x02\x02\u0443\u0446" +
		"\x03\x02\x02\x02\u0444\u0442\x03\x02\x02\x02\u0444\u0445\x03\x02\x02\x02" +
		"\u0445\u0447\x03\x02\x02\x02\u0446\u0444\x03\x02\x02\x02\u0447\u0449\x07" +
		"\b\x02\x02\u0448\u043D\x03\x02\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449" +
		"\u0475\x03\x02\x02\x02\u044A\u044B\x07i\x02\x02\u044B\u044C\x07\n\x02" +
		"\x02\u044C\u044D\x05\u0114\x8B\x02\u044D\u044E\x07\v\x02\x02\u044E\u044F" +
		"\x05\u0112\x8A\x02\u044F\u0475\x03\x02\x02\x02\u0450\u0455\x07i\x02\x02" +
		"\u0451\u0452\x07\n\x02\x02\u0452\u0453\x05\u0114\x8B\x02\u0453\u0454\x07" +
		"\v\x02\x02\u0454\u0456\x03\x02\x02\x02\u0455\u0451\x03\x02\x02\x02\u0455" +
		"\u0456\x03\x02\x02\x02\u0456\u0457\x03\x02\x02\x02\u0457\u0458\x05\u0112" +
		"\x8A\x02\u0458\u0464\x07x\x02\x02\u0459\u0460\x07\x07\x02\x02\u045A\u045C" +
		"\x07\"\x02\x02\u045B\u045A\x03\x02\x02\x02\u045B\u045C\x03\x02\x02\x02" +
		"\u045C\u045D\x03\x02\x02\x02\u045D\u045F\x05X-\x02\u045E\u045B\x03\x02" +
		"\x02\x02\u045F\u0462\x03\x02\x02\x02\u0460\u045E\x03\x02\x02\x02\u0460" +
		"\u0461\x03\x02\x02\x02\u0461\u0463\x03\x02\x02\x02\u0462\u0460\x03\x02" +
		"\x02\x02\u0463\u0465\x07\b\x02\x02\u0464\u0459\x03\x02\x02\x02\u0464\u0465" +
		"\x03\x02\x02\x02\u0465\u0475\x03\x02\x02\x02\u0466\u0467\x07i\x02\x02" +
		"\u0467\u0468\x05\u0112\x8A\x02\u0468\u046F\x07\x07\x02\x02\u0469\u046B" +
		"\x07\"\x02\x02\u046A\u0469\x03\x02\x02\x02\u046A\u046B\x03\x02\x02\x02" +
		"\u046B\u046C\x03\x02\x02\x02\u046C\u046E\x05X-\x02\u046D\u046A\x03\x02" +
		"\x02\x02\u046E\u0471\x03\x02\x02\x02\u046F\u046D\x03\x02\x02\x02\u046F" +
		"\u0470\x03\x02\x02\x02\u0470\u0472\x03\x02\x02\x02\u0471\u046F\x03\x02" +
		"\x02\x02\u0472\u0473\x07\b\x02\x02\u0473\u0475\x03\x02\x02\x02\u0474\u0434" +
		"\x03\x02\x02\x02\u0474\u044A\x03\x02\x02\x02\u0474\u0450\x03\x02\x02\x02" +
		"\u0474\u0466\x03\x02\x02\x02\u0475W\x03\x02\x02\x02\u0476\u047E\x07u\x02" +
		"\x02\u0477\u0478\x07j\x02\x02\u0478\u047E\x05\xB2Z\x02\u0479\u047A\x07" +
		"k\x02\x02\u047A\u047E\t\x0E\x02\x02\u047B\u047C\x07l\x02\x02\u047C\u047E" +
		"\x05\u0112\x8A\x02\u047D\u0476\x03\x02\x02\x02\u047D\u0477\x03\x02\x02" +
		"\x02\u047D\u0479\x03\x02\x02\x02\u047D\u047B\x03\x02\x02\x02\u047EY\x03" +
		"\x02\x02\x02\u047F\u0480\x07{\x02\x02\u0480\u0481\x05\xF4{\x02\u0481\u048D" +
		"\x05\xB2Z\x02\u0482\u0489\x07\x07\x02\x02\u0483\u0485\x07\"\x02\x02\u0484" +
		"\u0483\x03\x02\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485\u0486\x03\x02" +
		"\x02\x02\u0486\u0488\x05\\/\x02\u0487\u0484\x03\x02\x02\x02\u0488\u048B" +
		"\x03\x02\x02\x02\u0489\u0487\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02" +
		"\u048A\u048C\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048C\u048E\x07" +
		"\b\x02\x02\u048D\u0482\x03\x02\x02\x02\u048D\u048E\x03\x02\x02\x02\u048E" +
		"\u049E\x03\x02\x02\x02\u048F\u0490\x07{\x02\x02\u0490\u0491\x05\xF4{\x02" +
		"\u0491\u0498\x07\x07\x02\x02\u0492\u0494\x07\"\x02\x02\u0493\u0492\x03" +
		"\x02\x02\x02\u0493\u0494\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495" +
		"\u0497\x05\\/\x02\u0496\u0493\x03\x02\x02\x02\u0497\u049A\x03\x02\x02" +
		"\x02\u0498\u0496\x03\x02\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499\u049B" +
		"\x03\x02\x02\x02\u049A\u0498\x03\x02\x02\x02\u049B\u049C\x07\b\x02\x02" +
		"\u049C\u049E\x03\x02\x02\x02\u049D\u047F\x03\x02\x02\x02\u049D\u048F\x03" +
		"\x02\x02\x02\u049E[\x03\x02\x02\x02\u049F\u04A1\x07\x9E\x02\x02\u04A0" +
		"\u049F\x03\x02\x02\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1\u04A2\x03\x02" +
		"\x02\x02\u04A2\u04CD\t\x0F\x02\x02\u04A3\u04CD\x07u\x02\x02\u04A4\u04A6" +
		"\x07\x8C\x02\x02\u04A5\u04A4\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02" +
		"\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04A8\x07\x84\x02\x02\u04A8\u04CD\t" +
		"\x10\x02\x02\u04A9\u04AB\x07\x8C\x02\x02\u04AA\u04A9\x03\x02\x02\x02\u04AA" +
		"\u04AB\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AD\x07`\x02" +
		"\x02\u04AD\u04CD\x07B\x02\x02\u04AE\u04B0\x07\x8C\x02\x02\u04AF\u04AE" +
		"\x03\x02\x02\x02\u04AF\u04B0\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02" +
		"\u04B1\u04B2\x07\x85\x02\x02\u04B2\u04CD\x05\xB2Z\x02\u04B3\u04B5\x07" +
		"\x8C\x02\x02\u04B4\u04B3\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5" +
		"\u04B6\x03\x02\x02\x02\u04B6\u04B7\x07z\x02\x02\u04B7\u04CD\x05\xEAv\x02" +
		"\u04B8\u04BA\x07\x8C\x02\x02\u04B9\u04B8\x03\x02\x02\x02\u04B9\u04BA\x03" +
		"\x02\x02\x02\u04BA\u04BB\x03\x02\x02\x02\u04BB\u04BC\x07z\x02\x02\u04BC" +
		"\u04CD\x07x\x02\x02\u04BD\u04BF\x07\x8C\x02\x02\u04BE\u04BD\x03\x02\x02" +
		"\x02\u04BE\u04BF\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C1" +
		"\x07\x86\x02\x02\u04C1\u04CD\t\x11\x02\x02\u04C2\u04C4\x07\x8C\x02\x02" +
		"\u04C3\u04C2\x03\x02\x02\x02\u04C3\u04C4\x03\x02\x02\x02\u04C4\u04C5\x03" +
		"\x02\x02\x02\u04C5\u04C6\x07_\x02\x02\u04C6\u04CD\x07B\x02\x02\u04C7\u04C9" +
		"\x07\x8C\x02\x02\u04C8\u04C7\x03\x02\x02\x02\u04C8\u04C9\x03\x02\x02\x02" +
		"\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04CB\x07|\x02\x02\u04CB\u04CD\x05" +
		"\xD8m\x02\u04CC\u04A0\x03\x02\x02\x02\u04CC\u04A3\x03\x02\x02\x02\u04CC" +
		"\u04A5\x03\x02\x02\x02\u04CC\u04AA\x03\x02\x02\x02\u04CC\u04AF\x03\x02" +
		"\x02\x02\u04CC\u04B4\x03\x02\x02\x02\u04CC\u04B9\x03\x02\x02\x02\u04CC" +
		"\u04BE\x03\x02\x02\x02\u04CC\u04C3\x03\x02\x02\x02\u04CC\u04C8\x03\x02" +
		"\x02\x02\u04CD]\x03\x02\x02\x02\u04CE\u04D0\x05`1\x02\u04CF\u04D1\t\x0F" +
		"\x02\x02\u04D0\u04CF\x03\x02\x02\x02\u04D0\u04D1\x03\x02\x02\x02\u04D1" +
		"\u04DF\x03\x02\x02\x02\u04D2\u04D4\x05`1\x02\u04D3\u04D5\x07_\x02\x02" +
		"\u04D4\u04D3\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5\u04D6\x03" +
		"\x02\x02\x02\u04D6\u04D7\x07\t\x02\x02\u04D7\u04D8\x07B\x02\x02\u04D8" +
		"\u04DF\x03\x02\x02\x02\u04D9\u04DA\x05`1\x02\u04DA\u04DB\x07`\x02\x02" +
		"\u04DB\u04DC\x07\t\x02\x02\u04DC\u04DD\x07B\x02\x02\u04DD\u04DF\x03\x02" +
		"\x02\x02\u04DE\u04CE\x03\x02\x02\x02\u04DE\u04D2\x03\x02\x02\x02\u04DE" +
		"\u04D9\x03\x02\x02\x02\u04DF_\x03\x02\x02\x02\u04E0\u04E1\x07{\x02\x02" +
		"\u04E1\u04E2\x05\xF4{\x02\u04E2a\x03\x02\x02\x02\u04E3\u04E4\x07\x8D\x02" +
		"\x02\u04E4\u04E8\x07\x07\x02\x02\u04E5\u04E7\x05d3\x02\u04E6\u04E5\x03" +
		"\x02\x02\x02\u04E7\u04EA\x03\x02\x02\x02\u04E8\u04E6\x03\x02\x02\x02\u04E8" +
		"\u04E9\x03\x02\x02\x02\u04E9\u04EB\x03\x02\x02\x02\u04EA\u04E8\x03\x02" +
		"\x02\x02\u04EB\u04FB\x07\b\x02\x02\u04EC\u04ED\x07\x8D\x02\x02\u04ED\u04EE" +
		"\x05\xEAv\x02\u04EE\u04F5\x07\x07\x02\x02\u04EF\u04F1\x07\"\x02\x02\u04F0" +
		"\u04EF\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02\u04F1\u04F2\x03\x02" +
		"\x02\x02\u04F2\u04F4\x05f4\x02\u04F3\u04F0\x03\x02\x02\x02\u04F4\u04F7" +
		"\x03\x02\x02\x02\u04F5\u04F3\x03\x02\x02\x02\u04F5\u04F6\x03\x02\x02\x02" +
		"\u04F6\u04F8\x03\x02\x02\x02\u04F7\u04F5\x03\x02\x02\x02\u04F8\u04F9\x07" +
		"\b\x02\x02\u04F9\u04FB\x03\x02\x02\x02\u04FA\u04E3\x03\x02\x02\x02\u04FA" +
		"\u04EC\x03\x02\x02\x02\u04FBc\x03\x02\x02\x02\u04FC\u04FD\x05\xEAv\x02" +
		"\u04FD\u04FE\x07\"\x02\x02\u04FE\u04FF\x05f4\x02\u04FF\u050E\x03\x02\x02" +
		"\x02\u0500\u0501\x05\xEAv\x02\u0501\u0508\x07\x07\x02\x02\u0502\u0504" +
		"\x07\"\x02\x02\u0503\u0502\x03\x02\x02\x02\u0503\u0504\x03\x02\x02\x02" +
		"\u0504\u0505\x03\x02\x02\x02\u0505\u0507\x05f4\x02\u0506\u0503\x03\x02" +
		"\x02\x02\u0507\u050A\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02\u0508" +
		"\u0509\x03\x02\x02\x02\u0509\u050B\x03\x02\x02\x02\u050A\u0508\x03\x02" +
		"\x02\x02\u050B\u050C\x07\b\x02\x02\u050C\u050E\x03\x02\x02\x02\u050D\u04FC" +
		"\x03\x02\x02\x02\u050D\u0500\x03\x02\x02\x02\u050Ee\x03\x02\x02\x02\u050F" +
		"\u0510\t\x12\x02\x02\u0510\u0519\x05\xB2Z\x02\u0511\u0519\x07\x95\x02" +
		"\x02\u0512\u0519\x07s\x02\x02\u0513\u0514\x07\x90\x02\x02\u0514\u0515" +
		"\x05\xDAn\x02\u0515\u0516\x05\xDAn\x02\u0516\u0517\x05\xDAn\x02\u0517" +
		"\u0519\x03\x02\x02\x02\u0518\u050F\x03\x02\x02\x02\u0518\u0511\x03\x02" +
		"\x02\x02\u0518\u0512\x03\x02\x02\x02\u0518\u0513\x03\x02\x02\x02\u0519" +
		"g\x03\x02\x02\x02\u051A\u051B\t\x12\x02\x02\u051B\u052A\x05\xB2Z\x02\u051C" +
		"\u051D\x07\x8D\x02\x02\u051D\u051E\x07\"\x02\x02\u051E\u052A\x07\x95\x02" +
		"\x02\u051F\u0520\x07\x8D\x02\x02\u0520\u0521\x07\"\x02\x02\u0521\u052A" +
		"\x07s\x02\x02\u0522\u0523\x07\x8D\x02\x02\u0523\u0524\x07\"\x02\x02\u0524" +
		"\u0525\x07\x90\x02\x02\u0525\u0526\x05\xDAn\x02\u0526\u0527\x05\xDAn\x02" +
		"\u0527\u0528\x05\xDAn\x02\u0528\u052A\x03\x02\x02\x02\u0529\u051A\x03" +
		"\x02\x02\x02\u0529\u051C\x03\x02\x02\x02\u0529\u051F\x03\x02\x02\x02\u0529" +
		"\u0522\x03\x02\x02\x02\u052Ai\x03\x02\x02\x02\u052B\u052C\x07l\x02\x02" +
		"\u052C\u0530\x07\x07\x02\x02\u052D\u052F\x05l7\x02\u052E\u052D\x03\x02" +
		"\x02\x02\u052F\u0532\x03\x02\x02\x02\u0530\u052E\x03\x02\x02\x02\u0530" +
		"\u0531\x03\x02\x02\x02\u0531\u0533\x03\x02\x02\x02\u0532\u0530\x03\x02" +
		"\x02\x02\u0533\u0543\x07\b\x02\x02\u0534\u0535\x07l\x02\x02\u0535\u0536" +
		"\x05\xEAv\x02\u0536\u053D\x07\x07\x02\x02\u0537\u0539\x07\"\x02\x02\u0538" +
		"\u0537\x03\x02\x02\x02\u0538\u0539\x03\x02\x02\x02\u0539\u053A\x03\x02" +
		"\x02\x02\u053A\u053C\x05n8\x02\u053B\u0538\x03\x02\x02\x02\u053C\u053F" +
		"\x03\x02\x02\x02\u053D\u053B\x03\x02\x02\x02\u053D\u053E\x03\x02\x02\x02" +
		"\u053E\u0540\x03\x02\x02\x02\u053F\u053D\x03\x02\x02\x02\u0540\u0541\x07" +
		"\b\x02\x02\u0541\u0543\x03\x02\x02\x02\u0542\u052B\x03\x02\x02\x02\u0542" +
		"\u0534\x03\x02\x02\x02\u0543k\x03\x02\x02\x02\u0544\u0558\x05V,\x02\u0545" +
		"\u0558\x05Z.\x02\u0546\u0547\x05\xEAv\x02\u0547\u0548\x07\"\x02\x02\u0548" +
		"\u0549\x05n8\x02\u0549\u0558\x03\x02\x02\x02\u054A\u054B\x05\xEAv\x02" +
		"\u054B\u0552\x07\x07\x02\x02\u054C\u054E\x07\"\x02\x02\u054D\u054C\x03" +
		"\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\u054F\x03\x02\x02\x02\u054F" +
		"\u0551\x05n8\x02\u0550\u054D\x03\x02\x02\x02\u0551\u0554\x03\x02\x02\x02" +
		"\u0552\u0550\x03\x02\x02\x02\u0552\u0553\x03\x02\x02\x02\u0553\u0555\x03" +
		"\x02\x02\x02\u0554\u0552\x03\x02\x02\x02\u0555\u0556\x07\b\x02\x02\u0556" +
		"\u0558\x03\x02\x02\x02\u0557\u0544\x03\x02\x02\x02\u0557\u0545\x03\x02" +
		"\x02\x02\u0557\u0546\x03\x02\x02\x02\u0557\u054A\x03\x02\x02\x02\u0558" +
		"m\x03\x02\x02\x02\u0559\u056A\x05h5\x02\u055A\u055B\x07\x8D\x02\x02\u055B" +
		"\u055F\x07\x07\x02\x02\u055C\u055E\x05f4\x02\u055D\u055C\x03\x02\x02\x02" +
		"\u055E\u0561\x03\x02\x02\x02\u055F\u055D\x03\x02\x02\x02\u055F\u0560\x03" +
		"\x02\x02\x02\u0560\u0562\x03\x02\x02\x02\u0561\u055F\x03\x02\x02\x02\u0562" +
		"\u056A\x07\b\x02\x02\u0563\u0564\x07\x91\x02\x02\u0564\u056A\x05\xB2Z" +
		"\x02\u0565\u0566\x07{\x02\x02\u0566\u0567\x05\xF4{\x02\u0567\u0568\x05" +
		"\xB2Z\x02\u0568\u056A\x03\x02\x02\x02\u0569\u0559\x03\x02\x02\x02\u0569" +
		"\u055A\x03\x02\x02\x02\u0569\u0563\x03\x02\x02\x02\u0569\u0565\x03\x02" +
		"\x02\x02\u056Ao\x03\x02\x02\x02\u056B\u056C\x07\x92\x02\x02\u056C\u0570" +
		"\x07\x07\x02\x02\u056D\u056F\x05~@\x02\u056E\u056D\x03\x02\x02\x02\u056F" +
		"\u0572\x03\x02\x02\x02\u0570\u056E\x03\x02\x02\x02\u0570\u0571\x03\x02" +
		"\x02\x02\u0571\u0573\x03\x02\x02\x02\u0572\u0570\x03\x02\x02\x02\u0573" +
		"\u0580\x07\b\x02\x02\u0574\u0575\x07\x92\x02\x02\u0575\u0576\x05\xEAv" +
		"\x02\u0576";
	private static readonly _serializedATNSegment3: string =
		"\u057A\x07\x07\x02\x02\u0577\u0579\x05\x80A\x02\u0578\u0577\x03\x02\x02" +
		"\x02\u0579\u057C\x03\x02\x02\x02\u057A\u0578\x03\x02\x02\x02\u057A\u057B" +
		"\x03\x02\x02\x02\u057B\u057D\x03\x02\x02\x02\u057C\u057A\x03\x02\x02\x02" +
		"\u057D\u057E\x07\b\x02\x02\u057E\u0580\x03\x02\x02\x02\u057F\u056B\x03" +
		"\x02\x02\x02\u057F\u0574\x03\x02\x02\x02\u0580q\x03\x02\x02\x02\u0581" +
		"\u0582\x07\x93\x02\x02\u0582\u0586\x07\x07\x02\x02\u0583\u0585\x05t;\x02" +
		"\u0584\u0583\x03\x02\x02\x02\u0585\u0588\x03\x02\x02\x02\u0586\u0584\x03" +
		"\x02\x02\x02\u0586\u0587\x03\x02\x02\x02\u0587\u0589\x03\x02\x02\x02\u0588" +
		"\u0586\x03\x02\x02\x02\u0589\u0596\x07\b\x02\x02\u058A\u058B\x07\x93\x02" +
		"\x02\u058B\u058C\x05\xEAv\x02\u058C\u0590\x07\x07\x02\x02\u058D\u058F" +
		"\x05v<\x02\u058E\u058D\x03\x02\x02\x02\u058F\u0592\x03\x02\x02\x02\u0590" +
		"\u058E\x03\x02\x02\x02\u0590\u0591\x03\x02\x02\x02\u0591\u0593\x03\x02" +
		"\x02\x02\u0592\u0590\x03\x02\x02\x02\u0593\u0594\x07\b\x02\x02\u0594\u0596" +
		"\x03\x02\x02\x02\u0595\u0581\x03\x02\x02\x02\u0595\u058A\x03\x02\x02\x02" +
		"\u0596s\x03\x02\x02\x02\u0597\u0598\x05\xDEp\x02\u0598\u0599\x07\x14\x02" +
		"\x02\u0599\u059A\x05|?\x02\u059A\u05B5\x03\x02\x02\x02\u059B\u059C\x05" +
		"\xDEp\x02\u059C\u059D\x07\t\x02\x02\u059D\u059E\x05|?\x02\u059E\u05B5" +
		"\x03\x02\x02\x02\u059F\u05A0\x05\xDEp\x02\u05A0\u05A1\x07\x11\x02\x02" +
		"\u05A1\u05A2\x05z>\x02\u05A2\u05B5\x03\x02\x02\x02\u05A3\u05A4\x05\xEA" +
		"v\x02\u05A4\u05A5\x05x=\x02\u05A5\u05B5\x03\x02\x02\x02\u05A6\u05A7\x05" +
		"\xEAv\x02\u05A7\u05A8\x07\x11\x02\x02\u05A8\u05A9\x05z>\x02\u05A9\u05B5" +
		"\x03\x02\x02\x02\u05AA\u05AB\x05\xEAv\x02\u05AB\u05AF\x07\x07\x02\x02" +
		"\u05AC\u05AE\x05v<\x02\u05AD\u05AC\x03\x02\x02\x02\u05AE\u05B1\x03\x02" +
		"\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05AF\u05B0\x03\x02\x02\x02\u05B0" +
		"\u05B2\x03\x02\x02\x02\u05B1\u05AF\x03\x02\x02\x02\u05B2\u05B3\x07\b\x02" +
		"\x02\u05B3\u05B5\x03\x02\x02\x02\u05B4\u0597\x03\x02\x02\x02\u05B4\u059B" +
		"\x03\x02\x02\x02\u05B4\u059F\x03\x02\x02\x02\u05B4\u05A3\x03\x02\x02\x02" +
		"\u05B4\u05A6\x03\x02\x02\x02\u05B4\u05AA\x03\x02\x02\x02\u05B5u\x03\x02" +
		"\x02\x02\u05B6\u05B9\x05x=\x02\u05B7\u05B9\x05z>\x02\u05B8\u05B6\x03\x02" +
		"\x02\x02\u05B8\u05B7\x03\x02\x02\x02\u05B9w\x03\x02\x02\x02\u05BA\u05BB" +
		"\t\x13\x02\x02\u05BB\u05BC\x05|?\x02\u05BCy\x03\x02\x02\x02\u05BD\u05BE" +
		"\x05\u011C\x8F\x02\u05BE\u05BF\x07\t\x02\x02\u05BF\u05C4\x05|?\x02\u05C0" +
		"\u05C2\x07\x0F\x02\x02\u05C1\u05C0\x03\x02\x02\x02\u05C1\u05C2\x03\x02" +
		"\x02\x02\u05C2\u05C3\x03\x02\x02\x02\u05C3\u05C5\x07B\x02\x02\u05C4\u05C1" +
		"\x03\x02\x02\x02\u05C4\u05C5\x03\x02\x02\x02\u05C5{\x03\x02\x02\x02\u05C6" +
		"\u05C7\x07\x93\x02\x02\u05C7\u05DF\x05\u0100\x81\x02\u05C8\u05C9\x07\x96" +
		"\x02\x02\u05C9\u05CA\x05\u0100\x81\x02\u05CA\u05CC\x05\xDEp\x02\u05CB" +
		"\u05CD\t\x14\x02\x02\u05CC\u05CB\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02" +
		"\x02\u05CD\u05DF\x03\x02\x02\x02\u05CE\u05CF\x07\x96\x02\x02\u05CF\u05D0" +
		"\x05\u0100\x81\x02\u05D0\u05D1\x05\xDEp\x02\u05D1\u05D2\x05\xFC\x7F\x02" +
		"\u05D2\u05DF\x03\x02\x02\x02\u05D3\u05D4\x07\x97\x02\x02\u05D4\u05DF\x05" +
		"\xEAv\x02\u05D5\u05D6\x07\x98\x02\x02\u05D6\u05D8\x05\xDEp\x02\u05D7\u05D9" +
		"\t\x14\x02\x02\u05D8\u05D7\x03\x02\x02\x02\u05D8\u05D9\x03\x02\x02\x02" +
		"\u05D9\u05DF\x03\x02\x02\x02\u05DA\u05DB\x07\x98\x02\x02\u05DB\u05DC\x05" +
		"\xDEp\x02\u05DC\u05DD\x05\xFC\x7F\x02\u05DD\u05DF\x03\x02\x02\x02\u05DE" +
		"\u05C6\x03\x02\x02\x02\u05DE\u05C8\x03\x02\x02\x02\u05DE\u05CE\x03\x02" +
		"\x02\x02\u05DE\u05D3\x03\x02\x02\x02\u05DE\u05D5\x03\x02\x02\x02\u05DE" +
		"\u05DA\x03\x02\x02\x02\u05DF}\x03\x02\x02\x02\u05E0\u05E1\x05\xEAv\x02" +
		"\u05E1\u05E2\x05\x84C\x02\u05E2\u05F7\x03\x02\x02\x02\u05E3\u05E4\x05" +
		"\xEAv\x02\u05E4\u05E5\x07\x11\x02\x02\u05E5\u05E6\x05\x82B\x02\u05E6\u05F7" +
		"\x03\x02\x02\x02\u05E7\u05E8\x05\xDEp\x02\u05E8\u05E9\x07\x11\x02\x02" +
		"\u05E9\u05EA\x05\x82B\x02\u05EA\u05F7\x03\x02\x02\x02\u05EB\u05F7\x05" +
		"t;\x02\u05EC\u05ED\x05\xEAv\x02\u05ED\u05F1\x07\x07\x02\x02\u05EE\u05F0" +
		"\x05\x80A\x02\u05EF\u05EE\x03\x02\x02\x02\u05F0\u05F3\x03\x02\x02\x02" +
		"\u05F1\u05EF\x03\x02\x02\x02\u05F1\u05F2\x03\x02\x02\x02\u05F2\u05F4\x03" +
		"\x02\x02\x02\u05F3\u05F1\x03\x02\x02\x02\u05F4\u05F5\x07\b\x02\x02\u05F5" +
		"\u05F7\x03\x02\x02\x02\u05F6\u05E0\x03\x02\x02\x02\u05F6\u05E3\x03\x02" +
		"\x02\x02\u05F6\u05E7\x03\x02\x02\x02\u05F6\u05EB\x03\x02\x02\x02\u05F6" +
		"\u05EC\x03\x02\x02\x02\u05F7\x7F\x03\x02\x02\x02\u05F8\u05FC\x05\x84C" +
		"\x02\u05F9\u05FC\x05\x82B\x02\u05FA\u05FC\x05v<\x02\u05FB\u05F8\x03\x02" +
		"\x02\x02\u05FB\u05F9\x03\x02\x02\x02\u05FB\u05FA\x03\x02\x02\x02\u05FC" +
		"\x81\x03\x02\x02\x02\u05FD\u05FE\x05\u011C\x8F\x02\u05FE\u05FF\x07\t\x02" +
		"\x02\u05FF\u0604\x05\xFC\x7F\x02\u0600\u0602\x07\x0F\x02\x02\u0601\u0600" +
		"\x03\x02\x02\x02\u0601\u0602\x03\x02\x02\x02\u0602\u0603\x03\x02\x02\x02" +
		"\u0603\u0605\x07B\x02\x02\u0604\u0601\x03\x02\x02\x02\u0604\u0605\x03" +
		"\x02\x02\x02\u0605\u061B\x03\x02\x02\x02\u0606\u0607\x05\u011C\x8F\x02" +
		"\u0607\u0608\x07\t\x02\x02\u0608\u0609\x05\xEAv\x02\u0609\u060A\x07\x11" +
		"\x02\x02\u060A\u060C\x05\u011C\x8F\x02\u060B\u060D\x05\u0102\x82\x02\u060C" +
		"\u060B\x03\x02\x02\x02\u060C\u060D\x03\x02\x02\x02\u060D\u061B\x03\x02" +
		"\x02\x02\u060E\u060F\x05\u011C\x8F\x02\u060F\u0610\x07\t\x02\x02\u0610" +
		"\u0611\x05\xDEp\x02\u0611\u0612\x07\x11\x02\x02\u0612\u0614\x05\u011C" +
		"\x8F\x02\u0613\u0615\x05\u0102\x82\x02\u0614\u0613\x03\x02\x02\x02\u0614" +
		"\u0615\x03\x02\x02\x02\u0615\u061B\x03\x02\x02\x02\u0616\u0617\x05\u011C" +
		"\x8F\x02\u0617\u0618\x07\x14\x02\x02\u0618\u0619\x05\u0102\x82\x02\u0619" +
		"\u061B\x03\x02\x02\x02\u061A\u05FD\x03\x02\x02\x02\u061A\u0606\x03\x02" +
		"\x02\x02\u061A\u060E\x03\x02\x02\x02\u061A\u0616\x03\x02\x02\x02\u061B" +
		"\x83\x03\x02\x02\x02\u061C\u061D\t\x13\x02\x02\u061D\u0622\x05\xFC\x7F" +
		"\x02\u061E\u0620\x07\x0F\x02\x02\u061F\u061E\x03\x02\x02\x02\u061F\u0620" +
		"\x03\x02\x02\x02\u0620\u0621\x03\x02\x02\x02\u0621\u0623\x07B\x02\x02" +
		"\u0622\u061F\x03\x02\x02\x02\u0622\u0623\x03\x02\x02\x02\u0623\u062D\x03" +
		"\x02\x02\x02\u0624\u0625\t\x15\x02\x02\u0625\u062A\x05\u0120\x91\x02\u0626" +
		"\u0628\x07\x0F\x02\x02\u0627\u0626\x03\x02\x02\x02\u0627\u0628\x03\x02" +
		"\x02\x02\u0628\u0629\x03\x02\x02\x02\u0629\u062B\x07B\x02\x02\u062A\u0627" +
		"\x03\x02\x02\x02\u062A\u062B\x03\x02\x02\x02\u062B\u062D\x03\x02\x02\x02" +
		"\u062C\u061C\x03\x02\x02\x02\u062C\u0624\x03\x02\x02\x02\u062D\x85\x03" +
		"\x02\x02\x02\u062E\u062F\x07\x9F\x02\x02\u062F\u0633\x07\x07\x02\x02\u0630" +
		"\u0632\x05\x88E\x02\u0631\u0630\x03\x02\x02\x02\u0632\u0635\x03\x02\x02" +
		"\x02\u0633\u0631\x03\x02\x02\x02\u0633\u0634\x03\x02\x02\x02\u0634\u0636" +
		"\x03\x02\x02\x02\u0635\u0633\x03\x02\x02\x02\u0636\u0643\x07\b\x02\x02" +
		"\u0637\u0638\x07\x9F\x02\x02\u0638\u0639\x05\xEAv\x02\u0639\u063D\x07" +
		"\x07\x02\x02\u063A\u063C\x05\x8AF\x02\u063B\u063A\x03\x02\x02\x02\u063C" +
		"\u063F\x03\x02\x02\x02\u063D\u063B\x03\x02\x02\x02\u063D\u063E\x03\x02" +
		"\x02\x02\u063E\u0640\x03\x02\x02\x02\u063F\u063D\x03\x02\x02\x02\u0640" +
		"\u0641\x07\b\x02\x02\u0641\u0643\x03\x02\x02\x02\u0642\u062E\x03\x02\x02" +
		"\x02\u0642\u0637\x03\x02\x02\x02\u0643\x87\x03\x02\x02\x02\u0644\u0645" +
		"\x05\xEAv\x02\u0645\u0646\x07\x11\x02\x02\u0646\u0647\x05\x8AF\x02\u0647" +
		"\u0653\x03\x02\x02\x02\u0648\u0649\x05\xEAv\x02\u0649\u064D\x07\x07\x02" +
		"\x02\u064A\u064C\x05\x8AF\x02\u064B\u064A\x03\x02\x02\x02\u064C\u064F" +
		"\x03\x02\x02\x02\u064D\u064B\x03\x02\x02\x02\u064D\u064E\x03\x02\x02\x02" +
		"\u064E\u0650\x03\x02\x02\x02\u064F\u064D\x03\x02\x02\x02\u0650\u0651\x07" +
		"\b\x02\x02\u0651\u0653\x03\x02\x02\x02\u0652\u0644\x03\x02\x02\x02\u0652" +
		"\u0648\x03\x02\x02\x02\u0653\x89\x03\x02\x02\x02\u0654\u0656\x05\u010E" +
		"\x88\x02\u0655\u0657\x07\\\x02\x02\u0656\u0655\x03\x02\x02\x02\u0656\u0657" +
		"\x03\x02\x02\x02\u0657\u065C\x03\x02\x02\x02\u0658\u065A\x07\x0F\x02\x02" +
		"\u0659\u0658\x03\x02\x02\x02\u0659\u065A\x03\x02\x02\x02\u065A\u065B\x03" +
		"\x02\x02\x02\u065B\u065D\x05\xDAn\x02\u065C\u0659\x03\x02\x02\x02\u065C" +
		"\u065D\x03\x02\x02\x02\u065D\u0681\x03\x02\x02\x02\u065E\u065F\x05\u010E" +
		"\x88\x02\u065F\u0664\x07\xA0\x02\x02\u0660\u0662\x07\x0F\x02\x02\u0661" +
		"\u0660\x03\x02\x02\x02\u0661\u0662\x03\x02\x02\x02\u0662\u0663\x03\x02" +
		"\x02\x02\u0663\u0665\x05\xDAn\x02\u0664\u0661\x03\x02\x02\x02\u0664\u0665" +
		"\x03\x02\x02\x02\u0665\u0681\x03\x02\x02\x02\u0666\u0667\x05\u010E\x88" +
		"\x02\u0667\u0668\x07\xA0\x02\x02\u0668\u0669\x07\t\x02\x02\u0669\u066A" +
		"\x05\xDAn\x02\u066A\u0681\x03\x02\x02\x02\u066B\u066C\x05\u010E\x88\x02" +
		"\u066C\u066D\x07\x14\x02\x02\u066D\u066E\x07A\x02\x02\u066E\u066F\x05" +
		"\u011E\x90\x02\u066F\u0670\x07\n\x02\x02\u0670\u0671\t\x16\x02\x02\u0671" +
		"\u0672\x05\xDAn\x02\u0672\u0673\x07\v\x02\x02\u0673\u0681\x03\x02\x02" +
		"\x02\u0674\u0675\x05\u010E\x88\x02\u0675\u0676\x07\x15\x02\x02\u0676\u0677" +
		"\x07A\x02\x02\u0677\u0681\x03\x02\x02\x02\u0678\u0679\x05\u010E\x88\x02" +
		"\u0679\u067E\x07A\x02\x02\u067A\u067C\x07\x0F\x02\x02\u067B\u067A\x03" +
		"\x02\x02\x02\u067B\u067C\x03\x02\x02\x02\u067C\u067D\x03\x02\x02\x02\u067D" +
		"\u067F\x05\xDAn\x02\u067E\u067B\x03\x02\x02\x02\u067E\u067F\x03\x02\x02" +
		"\x02\u067F\u0681\x03\x02\x02\x02\u0680\u0654\x03\x02\x02\x02\u0680\u065E" +
		"\x03\x02\x02\x02\u0680\u0666\x03\x02\x02\x02\u0680\u066B\x03\x02\x02\x02" +
		"\u0680\u0674\x03\x02\x02\x02\u0680\u0678\x03\x02\x02\x02\u0681\x8B\x03" +
		"\x02\x02\x02\u0682\u0683\x07a\x02\x02\u0683\u0684\x07\n\x02\x02\u0684" +
		"\u0685\x07y\x02\x02\u0685\u0686\x07\v\x02\x02\u0686\u068D\x05\x8EH\x02" +
		"\u0687\u0689\x07\x05\x02\x02\u0688\u0687\x03\x02\x02\x02\u0688\u0689\x03" +
		"\x02\x02\x02\u0689\u068A\x03\x02\x02\x02\u068A\u068C\x05\x8EH\x02\u068B" +
		"\u0688\x03\x02\x02\x02\u068C\u068F\x03\x02\x02\x02\u068D\u068B\x03\x02" +
		"\x02\x02\u068D\u068E\x03\x02\x02\x02\u068E\u06DA\x03\x02\x02\x02\u068F" +
		"\u068D\x03\x02\x02\x02\u0690\u0691\x07a\x02\x02\u0691\u0692\x07\n\x02" +
		"\x02\u0692\u0693\x05\xFE\x80\x02\u0693\u0694\x07\v\x02\x02\u0694\u0696" +
		"\x05\xDEp\x02\u0695\u0697\x05\xB0Y\x02\u0696\u0695\x03\x02\x02\x02\u0696" +
		"\u0697\x03\x02\x02\x02\u0697\u06A3\x03\x02\x02\x02\u0698\u069F\x07\x07" +
		"\x02\x02\u0699\u069B\x07\"\x02\x02\u069A\u0699\x03\x02\x02\x02\u069A\u069B" +
		"\x03\x02\x02\x02\u069B\u069C\x03\x02\x02\x02\u069C\u069E\x05\x90I\x02" +
		"\u069D\u069A\x03\x02\x02\x02\u069E\u06A1\x03\x02\x02\x02\u069F\u069D\x03" +
		"\x02\x02\x02\u069F\u06A0\x03\x02\x02\x02\u06A0\u06A2\x03\x02\x02\x02\u06A1" +
		"\u069F\x03\x02\x02\x02\u06A2\u06A4\x07\b\x02\x02\u06A3\u0698\x03\x02\x02" +
		"\x02\u06A3\u06A4\x03\x02\x02\x02\u06A4\u06DA\x03\x02\x02\x02\u06A5\u06A6" +
		"\x07a\x02\x02\u06A6\u06A7\x07\n\x02\x02\u06A7\u06A8\x05\xFE\x80\x02\u06A8" +
		"\u06AA\x07\v\x02\x02\u06A9\u06AB\x05\xDEp\x02\u06AA\u06A9\x03\x02\x02" +
		"\x02\u06AA\u06AB\x03\x02\x02\x02\u06AB\u06AC\x03\x02\x02\x02\u06AC\u06AE" +
		"\x05\u0112\x8A\x02\u06AD\u06AF\x05\xB0Y\x02\u06AE\u06AD\x03\x02\x02\x02" +
		"\u06AE\u06AF\x03\x02\x02\x02\u06AF\u06C2\x03\x02\x02\x02\u06B0\u06B7\x07" +
		"\x07\x02\x02\u06B1\u06B3\x07\"\x02\x02\u06B2\u06B1\x03\x02\x02\x02\u06B2" +
		"\u06B3\x03\x02\x02\x02\u06B3\u06B4\x03\x02\x02\x02\u06B4\u06B6\x05\x90" +
		"I\x02\u06B5\u06B2\x03\x02\x02\x02\u06B6\u06B9\x03\x02\x02\x02\u06B7\u06B5" +
		"\x03\x02\x02\x02\u06B7\u06B8\x03\x02\x02\x02\u06B8\u06BE\x03\x02\x02\x02" +
		"\u06B9\u06B7\x03\x02\x02\x02\u06BA\u06BB\x07\"\x02\x02\u06BB\u06BD\x05" +
		"\x98M\x02\u06BC\u06BA\x03\x02\x02\x02\u06BD\u06C0\x03\x02\x02\x02\u06BE" +
		"\u06BC\x03\x02\x02\x02\u06BE\u06BF\x03\x02\x02\x02\u06BF\u06C1\x03\x02" +
		"\x02\x02\u06C0\u06BE\x03\x02\x02\x02\u06C1\u06C3\x07\b\x02\x02\u06C2\u06B0" +
		"\x03\x02\x02\x02\u06C2\u06C3\x03\x02\x02\x02\u06C3\u06DA\x03\x02\x02\x02" +
		"\u06C4\u06C5\x07a\x02\x02\u06C5\u06C9\x07\x07\x02\x02\u06C6\u06C8\x05" +
		"\x9AN\x02\u06C7\u06C6\x03\x02\x02\x02\u06C8\u06CB\x03\x02\x02\x02\u06C9" +
		"\u06C7\x03\x02\x02\x02\u06C9\u06CA\x03\x02\x02\x02\u06CA\u06CC\x03\x02" +
		"\x02\x02\u06CB\u06C9\x03\x02\x02\x02\u06CC\u06DA\x07\b\x02\x02\u06CD\u06CE" +
		"\x07a\x02\x02\u06CE\u06CF\x05\xEAv\x02\u06CF\u06D4\x07\x07\x02\x02\u06D0" +
		"\u06D1\x07\"\x02\x02\u06D1\u06D3\x05\x98M\x02\u06D2\u06D0\x03\x02\x02" +
		"\x02\u06D3\u06D6\x03\x02\x02\x02\u06D4\u06D2\x03\x02\x02\x02\u06D4\u06D5" +
		"\x03\x02\x02\x02\u06D5\u06D7\x03\x02\x02\x02\u06D6\u06D4\x03\x02\x02\x02" +
		"\u06D7\u06D8\x07\b\x02\x02\u06D8\u06DA\x03\x02\x02\x02\u06D9\u0682\x03" +
		"\x02\x02\x02\u06D9\u0690\x03\x02\x02\x02\u06D9\u06A5\x03\x02\x02\x02\u06D9" +
		"\u06C4\x03\x02\x02\x02\u06D9\u06CD\x03\x02\x02\x02\u06DA\x8D\x03\x02\x02" +
		"\x02\u06DB\u06DD\x07$\x02\x02\u06DC\u06DB\x03\x02\x02\x02\u06DC\u06DD" +
		"\x03\x02\x02\x02\u06DD\u06DE\x03\x02\x02\x02\u06DE\u06DF\x05\u0112\x8A" +
		"\x02\u06DF\x8F\x03\x02\x02\x02\u06E0\u06E1\x07\x9C\x02\x02\u06E1\u06E2" +
		"\x07\t\x02\x02\u06E2\u06E7\x05\u0112\x8A\x02\u06E3\u06E4\x07\x05\x02\x02" +
		"\u06E4\u06E6\x05\u0112\x8A\x02\u06E5\u06E3\x03\x02\x02\x02\u06E6\u06E9" +
		"\x03\x02\x02\x02\u06E7\u06E5\x03\x02\x02\x02\u06E7\u06E8\x03\x02\x02\x02" +
		"\u06E8\x91\x03\x02\x02\x02\u06E9\u06E7\x03\x02\x02\x02\u06EA\u06EB\x07" +
		"\x9C\x02\x02\u06EB\u06EC\t\x17\x02\x02\u06EC\u06F3\x05\u0112\x8A\x02\u06ED" +
		"\u06EE\x07\x9C\x02\x02\u06EE\u06EF\t\x18\x02\x02\u06EF\u06F3\x05\u0112" +
		"\x8A\x02\u06F0\u06F1\x07\x9C\x02\x02\u06F1\u06F3\x07n\x02\x02\u06F2\u06EA" +
		"\x03\x02\x02\x02\u06F2\u06ED\x03\x02\x02\x02\u06F2\u06F0\x03\x02\x02\x02" +
		"\u06F3\x93\x03\x02\x02\x02\u06F4\u06F5\x07\x9B\x02\x02\u06F5\u06F6\t\x15" +
		"\x02\x02\u06F6\u0714\x05\u0112\x8A\x02\u06F7\u06F8\x07\x9B\x02\x02\u06F8" +
		"\u06F9\t\x13\x02\x02\u06F9\u06FB\x05\u0112\x8A\x02\u06FA\u06FC\x07B\x02" +
		"\x02\u06FB\u06FA\x03\x02\x02\x02\u06FB\u06FC\x03\x02\x02\x02\u06FC\u06FE" +
		"\x03\x02\x02\x02\u06FD\u06FF\x07B\x02\x02\u06FE\u06FD\x03\x02\x02\x02" +
		"\u06FE\u06FF\x03\x02\x02\x02\u06FF\u0701\x03\x02\x02\x02\u0700\u0702\x05" +
		"\xD8m\x02\u0701\u0700\x03\x02\x02\x02\u0701\u0702\x03\x02\x02\x02\u0702" +
		"\u0714\x03\x02\x02\x02\u0703\u0704\x07\x9B\x02\x02\u0704\u0705\t\x13\x02" +
		"\x02\u0705\u0709\x05\u0112\x8A\x02\u0706\u0707\x07\n\x02\x02\u0707\u0708" +
		"\x07B\x02\x02\u0708\u070A\x07\v\x02\x02\u0709\u0706\x03\x02\x02\x02\u0709" +
		"\u070A\x03\x02\x02\x02\u070A\u070C\x03\x02\x02\x02\u070B\u070D\x07B\x02" +
		"\x02\u070C\u070B\x03\x02\x02\x02\u070C\u070D\x03\x02\x02\x02\u070D\u070F" +
		"\x03\x02\x02\x02\u070E\u0710\x05\xD8m\x02\u070F\u070E\x03\x02\x02\x02" +
		"\u070F\u0710\x03\x02\x02\x02\u0710\u0714\x03\x02\x02\x02\u0711\u0712\x07" +
		"\x9B\x02\x02\u0712\u0714\x07\x95\x02\x02\u0713\u06F4\x03\x02\x02\x02\u0713" +
		"\u06F7\x03\x02\x02\x02\u0713\u0703\x03\x02\x02\x02\u0713\u0711\x03\x02" +
		"\x02\x02\u0714\x95\x03\x02\x02\x02\u0715\u0716\x07\x9D\x02\x02\u0716\u072F" +
		"\x05\xEAv\x02\u0717\u0718\x07\x9D\x02\x02\u0718\u072F\x05\xDEp\x02\u0719" +
		"\u071A\x07\x9D\x02\x02\u071A\u072F\x05\xE2r\x02\u071B\u071C\x07\x9D\x02" +
		"\x02\u071C\u071D\x05\xDEp\x02\u071D\u071E\x05\xE0q\x02\u071E\u072F\x03" +
		"\x02\x02\x02\u071F\u0720\x07\x9D\x02\x02\u0720\u0721\x05\xDEp\x02\u0721" +
		"\u0722\x07U\x02\x02\u0722\u0723\x05\xDEp\x02\u0723\u072F\x03\x02\x02\x02" +
		"\u0724\u0725\x07\x9D\x02\x02\u0725\u0726\x05\xDEp\x02\u0726\u0728\x07" +
		"U\x02\x02\u0727\u0729\x07a\x02\x02\u0728\u0727\x03\x02\x02\x02\u0728\u0729" +
		"\x03\x02\x02\x02\u0729\u072A\x03\x02\x02\x02\u072A\u072C\x05\xEAv\x02" +
		"\u072B\u072D\t\x06\x02\x02\u072C\u072B\x03\x02\x02\x02\u072C\u072D\x03" +
		"\x02\x02\x02\u072D\u072F\x03\x02\x02\x02\u072E\u0715\x03\x02\x02\x02\u072E" +
		"\u0717\x03\x02\x02\x02\u072E\u0719\x03\x02\x02\x02\u072E\u071B\x03\x02" +
		"\x02\x02\u072E\u071F\x03\x02\x02\x02\u072E\u0724\x03\x02\x02\x02\u072F" +
		"\x97\x03\x02\x02\x02\u0730\u0770\x05\x84C\x02\u0731\u0770\x07\x97\x02" +
		"\x02\u0732\u0770\x05\x92J\x02\u0733\u0770\x05\x94K\x02\u0734\u0770\x05" +
		"\x96L\x02\u0735\u0736\x07\x8D\x02\x02\u0736\u073A\x07\x07\x02\x02\u0737" +
		"\u0739\x05f4\x02\u0738\u0737\x03\x02\x02\x02\u0739\u073C\x03\x02\x02\x02" +
		"\u073A\u0738\x03\x02\x02\x02\u073A\u073B\x03\x02\x02\x02\u073B\u073D\x03" +
		"\x02\x02\x02\u073C\u073A\x03\x02\x02\x02\u073D\u0770\x07\b\x02\x02\u073E" +
		"\u073F\x07l\x02\x02\u073F\u0743\x07\x07\x02\x02\u0740\u0742\x05n8\x02" +
		"\u0741\u0740\x03\x02\x02\x02\u0742\u0745\x03\x02\x02\x02\u0743\u0741\x03" +
		"\x02\x02\x02\u0743\u0744\x03\x02\x02\x02\u0744\u0746\x03\x02\x02\x02\u0745" +
		"\u0743\x03\x02\x02\x02\u0746\u0770\x07\b\x02\x02\u0747\u0770\x05n8\x02" +
		"\u0748\u0749\x07\x92\x02\x02\u0749\u074A\x07\x11\x02\x02\u074A\u0770\x05" +
		"\x82B\x02\u074B\u074C\t\x19\x02\x02\u074C\u0770\x05x=\x02\u074D\u074E" +
		"\t\x19\x02\x02\u074E\u074F\x07\x11\x02\x02\u074F\u0770\x05z>\x02\u0750" +
		"\u0751\x07\x92\x02\x02\u0751\u0755\x07\x07\x02\x02\u0752\u0754\x05\x80" +
		"A\x02\u0753\u0752\x03\x02\x02\x02\u0754\u0757\x03\x02\x02\x02\u0755\u0753" +
		"\x03\x02\x02\x02\u0755\u0756\x03\x02\x02\x02\u0756\u0758\x03\x02\x02\x02" +
		"\u0757\u0755\x03\x02\x02\x02\u0758\u0770\x07\b\x02\x02\u0759\u075A\x07" +
		"\x93\x02\x02\u075A\u075E\x07\x07\x02\x02\u075B\u075D\x05v<\x02\u075C\u075B" +
		"\x03\x02\x02\x02\u075D\u0760\x03\x02\x02\x02\u075E\u075C\x03\x02\x02\x02" +
		"\u075E\u075F\x03\x02\x02\x02\u075F\u0761\x03\x02\x02\x02\u0760\u075E\x03" +
		"\x02\x02\x02\u0761\u0770\x07\b\x02\x02\u0762\u0763\x07\x9F\x02\x02\u0763" +
		"\u0764\x07\x11\x02\x02\u0764\u0770\x05\x8AF\x02\u0765\u0766\x07\x9F\x02" +
		"\x02\u0766\u076A\x07\x07\x02\x02\u0767\u0769\x05\x8AF\x02\u0768\u0767" +
		"\x03\x02\x02\x02\u0769\u076C\x03\x02\x02\x02\u076A\u0768\x03\x02\x02\x02" +
		"\u076A\u076B\x03\x02\x02\x02\u076B\u076D\x03\x02\x02\x02\u076C\u076A\x03" +
		"\x02\x02\x02\u076D\u0770\x07\b\x02\x02\u076E\u0770\x05.\x18\x02\u076F" +
		"\u0730\x03\x02\x02\x02\u076F\u0731\x03\x02\x02\x02\u076F\u0732\x03\x02" +
		"\x02\x02\u076F\u0733\x03\x02\x02\x02\u076F\u0734\x03\x02\x02\x02\u076F" +
		"\u0735\x03\x02\x02\x02\u076F\u073E\x03\x02\x02\x02\u076F\u0747\x03\x02" +
		"\x02\x02\u076F\u0748\x03\x02\x02\x02\u076F\u074B\x03\x02\x02\x02\u076F" +
		"\u074D\x03\x02\x02\x02\u076F\u0750\x03\x02\x02\x02\u076F\u0759\x03\x02" +
		"\x02\x02\u076F\u0762\x03\x02\x02\x02\u076F\u0765\x03\x02\x02\x02\u076F" +
		"\u076E\x03\x02\x02\x02\u0770\x99\x03\x02\x02\x02\u0771\u077E\x05\x9CO" +
		"\x02\u0772\u0773\x05\xEAv\x02\u0773\u0778\x07\x07\x02\x02\u0774\u0775" +
		"\x07\"\x02\x02\u0775\u0777\x05\x98M\x02\u0776\u0774\x03\x02\x02\x02\u0777" +
		"\u077A\x03\x02\x02\x02\u0778\u0776\x03\x02\x02\x02\u0778\u0779\x03\x02" +
		"\x02\x02\u0779\u077B\x03\x02\x02\x02\u077A\u0778\x03\x02\x02\x02\u077B" +
		"\u077C\x07\b\x02\x02\u077C\u077E\x03\x02\x02\x02\u077D\u0771\x03\x02\x02" +
		"\x02\u077D\u0772\x03\x02\x02\x02\u077E\x9B\x03\x02\x02\x02\u077F\u0780" +
		"\x05\xEAv\x02\u0780\u0781\x07\"\x02\x02\u0781\u0782\x05\x98M\x02\u0782" +
		"\x9D\x03\x02\x02\x02\u0783\u0784\x07d\x02\x02\u0784\u0788\x07\x07\x02" +
		"\x02\u0785\u0787\x05\xA0Q\x02\u0786\u0785\x03\x02\x02\x02\u0787\u078A" +
		"\x03\x02\x02\x02\u0788\u0786\x03\x02\x02\x02\u0788\u0789\x03\x02\x02\x02" +
		"\u0789\u078B\x03\x02\x02\x02\u078A\u0788\x03\x02\x02\x02\u078B\u078C\x07" +
		"\b\x02\x02\u078C\x9F\x03\x02\x02\x02\u078D\u078E\x05\xDEp\x02\u078E\u0790" +
		"\x05\xE6t\x02\u078F\u0791\t\x1A\x02\x02\u0790\u078F\x03\x02\x02\x02\u0790" +
		"\u0791\x03\x02\x02\x02\u0791\u07B0\x03\x02\x02\x02\u0792\u0793\x05\xDE" +
		"p\x02\u0793\u0794\x05\xDEp\x02\u0794\u0796\x05\xE6t\x02\u0795\u0797\t" +
		"\x1B\x02\x02\u0796\u0795\x03\x02\x02\x02\u0796\u0797\x03\x02\x02\x02\u0797" +
		"\u07B0\x03\x02\x02\x02\u0798\u0799\x05\xDEp\x02\u0799\u079A\x05\xDEp\x02" +
		"\u079A\u079B\x05\xE6t\x02\u079B\u079C\x07\xA3\x02\x02\u079C\u079D\x05" +
		"\u0122\x92\x02\u079D\u07B0\x03\x02\x02\x02\u079E\u079F\x05\xDEp\x02\u079F" +
		"\u07A0\x05\xDEp\x02\u07A0\u07A2\x05\xDEp\x02\u07A1\u07A3\t\x1C\x02\x02" +
		"\u07A2\u07A1\x03\x02\x02\x02\u07A2\u07A3\x03\x02\x02\x02\u07A3\u07A5\x03" +
		"\x02\x02\x02\u07A4\u07A6\t\x1D\x02\x02\u07A5\u07A4\x03\x02\x02\x02\u07A5" +
		"\u07A6\x03\x02\x02\x02\u07A6\u07B0\x03\x02\x02\x02\u07A7\u07A8\x05\xDE" +
		"p\x02\u07A8\u07A9\x05\xDEp\x02\u07A9\u07AA\x05\xDEp\x02\u07AA\u07AB\x07" +
		"\xA9\x02\x02\u07AB\u07AD\x05\u0122\x92\x02\u07AC\u07AE\t\x1D\x02\x02\u07AD" +
		"\u07AC\x03\x02\x02\x02\u07AD\u07AE\x03\x02\x02\x02\u07AE\u07B0\x03\x02" +
		"\x02\x02\u07AF\u078D\x03\x02\x02\x02\u07AF\u0792\x03\x02\x02\x02\u07AF" +
		"\u0798\x03\x02\x02\x02\u07AF\u079E\x03\x02\x02\x02\u07AF\u07A7\x03\x02" +
		"\x02\x02\u07B0\xA1\x03\x02\x02\x02\u07B1\u07B2\x07\xAA\x02\x02\u07B2\u07B3" +
		"\x05\xF2z\x02\u07B3\u07B4\x05\xB0Y\x02\u07B4\u07BA\x03\x02\x02\x02\u07B5" +
		"\u07B6\x07\xAA\x02\x02\u07B6\u07B7\x05:\x1E\x02\u07B7\u07B8\x05\xB0Y\x02" +
		"\u07B8\u07BA\x03\x02\x02\x02\u07B9\u07B1\x03\x02\x02\x02\u07B9\u07B5\x03" +
		"\x02\x02\x02\u07BA\xA3\x03\x02\x02\x02\u07BB\u07BC\x05:\x1E\x02\u07BC" +
		"\u07BD\x07\t\x02\x02\u07BD\u07BE\x05\xA6T\x02\u07BE\xA5\x03\x02\x02\x02" +
		"\u07BF\u07C0\bT\x01\x02\u07C0\u07C4\x07\x07\x02\x02\u07C1\u07C3\x054\x1B" +
		"\x02\u07C2\u07C1\x03\x02\x02\x02\u07C3\u07C6\x03\x02\x02\x02\u07C4\u07C2" +
		"\x03\x02\x02\x02\u07C4\u07C5\x03\x02\x02\x02\u07C5\u07C7\x03\x02\x02\x02" +
		"\u07C6\u07C4\x03\x02\x02\x02\u07C7\u07D3\x07\b\x02\x02\u07C8\u07D3\x05" +
		":\x1E\x02\u07C9\u07D3\x05*\x16\x02\u07CA\u07D3\x07=\x02\x02\u07CB\u07D3" +
		"\x07>\x02\x02\u07CC\u07CD\x07%\x02\x02\u07CD\u07D3\x05\xA6T\b\u07CE\u07CF" +
		"\x07\n\x02\x02\u07CF\u07D0\x05\xA6T\x02\u07D0\u07D1\x07\v\x02\x02\u07D1" +
		"\u07D3\x03\x02\x02\x02\u07D2\u07BF\x03\x02\x02\x02\u07D2\u07C8\x03\x02" +
		"\x02\x02\u07D2\u07C9\x03\x02\x02\x02\u07D2\u07CA\x03\x02\x02\x02\u07D2" +
		"\u07CB\x03\x02\x02\x02\u07D2\u07CC\x03\x02\x02\x02\u07D2\u07CE\x03\x02" +
		"\x02\x02\u07D3\u07E2\x03\x02\x02\x02\u07D4\u07D5\f\x07\x02\x02\u07D5\u07D6" +
		"\x07&\x02\x02\u07D6\u07E1\x05\xA6T\b\u07D7\u07D8\f\x06\x02\x02\u07D8\u07D9" +
		"\x07\'\x02\x02\u07D9\u07E1\x05\xA6T\x07\u07DA\u07DB\f\x05\x02\x02\u07DB" +
		"\u07DC\x07(\x02\x02\u07DC\u07E1\x05\xA6T\x06\u07DD\u07DE\f\x04\x02\x02" +
		"\u07DE\u07DF\x07)\x02\x02\u07DF\u07E1\x05\xA6T\x05\u07E0\u07D4\x03\x02" +
		"\x02\x02\u07E0\u07D7\x03\x02\x02\x02\u07E0\u07DA\x03\x02\x02\x02\u07E0" +
		"\u07DD\x03\x02\x02\x02\u07E1\u07E4\x03\x02\x02\x02\u07E2\u07E0\x03\x02" +
		"\x02\x02\u07E2\u07E3\x03\x02\x02\x02\u07E3\xA7\x03\x02\x02\x02\u07E4\u07E2" +
		"\x03\x02\x02\x02\u07E5\u07E6\x07Z\x02\x02\u07E6\u07E7\x05\xA6T\x02\u07E7" +
		"\u07E9\x052\x1A\x02\u07E8\u07EA\x05\xAAV\x02\u07E9\u07E8\x03\x02\x02\x02" +
		"\u07E9\u07EA\x03\x02\x02\x02\u07EA\xA9\x03\x02\x02\x02\u07EB\u07EC\x07" +
		"\xAC\x02\x02\u07EC\u07F0\x052\x1A\x02\u07ED\u07EE\x07\xAC\x02\x02\u07EE" +
		"\u07F0\x05\xA8U\x02\u07EF\u07EB\x03\x02\x02\x02\u07EF\u07ED\x03\x02\x02" +
		"\x02\u07F0\xAB\x03\x02\x02\x02\u07F1\u07F2\x07\xAB\x02\x02\u07F2\u07F6" +
		"\x07\x07\x02\x02\u07F3\u07F5\x054\x1B\x02\u07F4\u07F3\x03\x02\x02\x02" +
		"\u07F5\u07F8\x03\x02\x02\x02\u07F6\u07F4\x03\x02\x02\x02\u07F6\u07F7\x03" +
		"\x02\x02\x02\u07F7\u07F9\x03\x02\x02\x02\u07F8\u07F6\x03\x02\x02\x02\u07F9" +
		"\u07FA\x07\b\x02\x02\u07FA\u0800\x052\x1A\x02\u07FB\u07FC\x07\xAB\x02" +
		"\x02\u07FC\u07FD\x05\xA6T\x02\u07FD\u07FE\x052\x1A\x02\u07FE\u0800\x03" +
		"\x02\x02\x02\u07FF\u07F1\x03\x02\x02\x02\u07FF\u07FB\x03\x02\x02\x02\u0800" +
		"\xAD\x03\x02\x02\x02\u0801\u0802\x07\xAD\x02\x02\u0802\u0803\x07\x07\x02" +
		"\x02\u0803\u0804\x05D#\x02\u0804\u0805\x07\b\x02\x02\u0805\u0806\x052" +
		"\x1A\x02\u0806\xAF\x03\x02\x02\x02\u0807\u0808\x05\xB8]\x02\u0808\xB1" +
		"\x03\x02\x02\x02\u0809\u080A\x05\xCCg\x02\u080A\xB3\x03\x02\x02\x02\u080B" +
		"\u0820\x05\u0116\x8C\x02\u080C\u080D\x05\u0116\x8C\x02\u080D\u080E\x05" +
		"\xBC_\x02\u080E\u0820\x03\x02\x02\x02\u080F\u0816\x05\u0116\x8C\x02\u0810" +
		"\u0811\x07\x04\x02\x02\u0811\u0812\x07B\x02\x02\u0812\u0815\x07\x06\x02" +
		"\x02\u0813\u0815\x07*\x02\x02\u0814\u0810\x03\x02\x02\x02\u0814\u0813" +
		"\x03\x02\x02\x02\u0815\u0818\x03\x02\x02\x02\u0816\u0814\x03\x02\x02\x02" +
		"\u0816\u0817\x03\x02\x02\x02\u0817\u081D\x03\x02\x02\x02\u0818\u0816\x03" +
		"\x02\x02\x02\u0819\u081A\x07\x04\x02\x02\u081A\u081B\x05\xBC_\x02\u081B" +
		"\u081C\x07\x06\x02\x02\u081C\u081E\x03\x02\x02\x02\u081D\u0819\x03\x02" +
		"\x02\x02\u081D\u081E\x03\x02\x02\x02\u081E\u0820\x03\x02\x02\x02\u081F" +
		"\u080B\x03\x02\x02\x02\u081F\u080C\x03\x02\x02\x02\u081F\u080F\x03\x02" +
		"\x02\x02\u0820\xB5\x03\x02\x02\x02\u0821\u0837\x05\u0116\x8C\x02\u0822" +
		"\u0837\x05\xBC_\x02\u0823\u0824\x05";
	private static readonly _serializedATNSegment4: string =
		"\u0116\x8C\x02\u0824\u0825\x05\xBC_\x02\u0825\u0837\x03\x02\x02\x02\u0826" +
		"\u082D\x05\u0116\x8C\x02\u0827\u0828\x07\x04\x02\x02\u0828\u0829\x07B" +
		"\x02\x02\u0829\u082C\x07\x06\x02\x02\u082A\u082C\x07*\x02\x02\u082B\u0827" +
		"\x03\x02\x02\x02\u082B\u082A\x03\x02\x02\x02\u082C\u082F\x03\x02\x02\x02" +
		"\u082D\u082B\x03\x02\x02\x02\u082D\u082E\x03\x02\x02\x02\u082E\u0834\x03" +
		"\x02\x02\x02\u082F\u082D\x03\x02\x02\x02\u0830\u0831\x07\x04\x02\x02\u0831" +
		"\u0832\x05\xBC_\x02\u0832\u0833\x07\x06\x02\x02\u0833\u0835\x03\x02\x02" +
		"\x02\u0834\u0830\x03\x02\x02\x02\u0834\u0835\x03\x02\x02\x02\u0835\u0837" +
		"\x03\x02\x02\x02\u0836\u0821\x03\x02\x02\x02\u0836\u0822\x03\x02\x02\x02" +
		"\u0836\u0823\x03\x02\x02\x02\u0836\u0826\x03\x02\x02\x02\u0837\xB7\x03" +
		"\x02\x02\x02\u0838\u0839\x07+\x02\x02\u0839\u083E\x05\xBE`\x02\u083A\u083B" +
		"\x07\x05\x02\x02\u083B\u083D\x05\xBE`\x02\u083C\u083A\x03\x02\x02\x02" +
		"\u083D\u0840\x03\x02\x02\x02\u083E\u083C\x03\x02\x02\x02\u083E\u083F\x03" +
		"\x02\x02\x02\u083F\u0841\x03\x02\x02\x02\u0840\u083E\x03\x02\x02\x02\u0841" +
		"\u0842\x07\b\x02\x02\u0842\u0877\x03\x02\x02\x02\u0843\u0844\x07+\x02" +
		"\x02\u0844\u0877\x07\b\x02\x02\u0845\u0846\x07,\x02\x02\u0846\u084B\x05" +
		"\xC2b\x02\u0847\u0848\x07\x05\x02\x02\u0848\u084A\x05\xC2b\x02\u0849\u0847" +
		"\x03\x02\x02\x02\u084A\u084D\x03\x02\x02\x02\u084B\u0849\x03\x02\x02\x02" +
		"\u084B\u084C\x03\x02\x02\x02\u084C\u084E\x03\x02\x02\x02\u084D\u084B\x03" +
		"\x02\x02\x02\u084E\u084F\x07\x06\x02\x02\u084F\u0877\x03\x02\x02\x02\u0850" +
		"\u0851\x07,\x02\x02\u0851\u0877\x07\x06\x02\x02\u0852\u0853\x07-\x02\x02" +
		"\u0853\u0858\x077\x02\x02\u0854\u0855\x07\x05\x02\x02\u0855\u0857\x07" +
		"7\x02\x02\u0856\u0854\x03\x02\x02\x02\u0857\u085A\x03\x02\x02\x02\u0858" +
		"\u0856\x03\x02\x02\x02\u0858\u0859\x03\x02\x02\x02\u0859\u085B\x03\x02" +
		"\x02\x02\u085A\u0858\x03\x02\x02\x02\u085B\u0877\x07\x06\x02\x02\u085C" +
		"\u085D\x07.\x02\x02\u085D\u0862\x07B\x02\x02\u085E\u085F\x07\x05\x02\x02" +
		"\u085F\u0861\x07B\x02\x02\u0860\u085E\x03\x02\x02\x02\u0861\u0864\x03" +
		"\x02\x02\x02\u0862\u0860\x03\x02\x02\x02\u0862\u0863\x03\x02\x02\x02\u0863" +
		"\u0865\x03\x02\x02\x02\u0864\u0862\x03\x02\x02\x02\u0865\u0877\x07\x06" +
		"\x02\x02\u0866\u0867\x07/\x02\x02\u0867\u086C\x079\x02\x02\u0868\u0869" +
		"\x07\x05\x02\x02\u0869\u086B\x079\x02\x02\u086A\u0868\x03\x02\x02\x02" +
		"\u086B\u086E\x03\x02\x02\x02\u086C\u086A\x03\x02\x02\x02\u086C\u086D\x03" +
		"\x02\x02\x02\u086D\u086F\x03\x02\x02\x02\u086E\u086C\x03\x02\x02\x02\u086F" +
		"\u0877\x07\x06\x02\x02\u0870\u0877\x05\xCAf\x02\u0871\u0877\x077\x02\x02" +
		"\u0872\u0877\x078\x02\x02\u0873\u0877\x079\x02\x02\u0874\u0877\x07:\x02" +
		"\x02\u0875\u0877\x07;\x02\x02\u0876\u0838\x03\x02\x02\x02\u0876\u0843" +
		"\x03\x02\x02\x02\u0876\u0845\x03\x02\x02\x02\u0876\u0850\x03\x02\x02\x02" +
		"\u0876\u0852\x03\x02\x02\x02\u0876\u085C\x03\x02\x02\x02\u0876\u0866\x03" +
		"\x02\x02\x02\u0876\u0870\x03\x02\x02\x02\u0876\u0871\x03\x02\x02\x02\u0876" +
		"\u0872\x03\x02\x02\x02\u0876\u0873\x03\x02\x02\x02\u0876\u0874\x03\x02" +
		"\x02\x02\u0876\u0875\x03\x02\x02\x02\u0877\xB9\x03\x02\x02\x02\u0878\u0879" +
		"\x05\xC2b\x02\u0879\xBB\x03\x02\x02\x02\u087A\u087B\x07\x07\x02\x02\u087B" +
		"\u0880\x05\xBE`\x02\u087C\u087D\x07\x05\x02\x02\u087D\u087F\x05\xBE`\x02" +
		"\u087E\u087C\x03\x02\x02\x02\u087F\u0882\x03\x02\x02\x02\u0880\u087E\x03" +
		"\x02\x02\x02\u0880\u0881\x03\x02\x02\x02\u0881\u0883\x03\x02\x02\x02\u0882" +
		"\u0880\x03\x02\x02\x02\u0883\u0884\x07\b\x02\x02\u0884\u0888\x03\x02\x02" +
		"\x02\u0885\u0886\x07\x07\x02\x02\u0886\u0888\x07\b\x02\x02\u0887\u087A" +
		"\x03\x02\x02\x02\u0887\u0885\x03\x02\x02\x02\u0888\xBD\x03\x02\x02\x02" +
		"\u0889\u088A\x05\u0116\x8C\x02\u088A\u088B\x07!\x02\x02\u088B\u088C\x05" +
		"\xC2b\x02\u088C\xBF\x03\x02\x02\x02\u088D\u088E\x07\x04\x02\x02\u088E" +
		"\u0893\x05\xC2b\x02\u088F\u0890\x07\x05\x02\x02\u0890\u0892\x05\xC2b\x02" +
		"\u0891\u088F\x03\x02\x02\x02\u0892\u0895\x03\x02\x02\x02\u0893\u0891\x03" +
		"\x02\x02\x02\u0893\u0894\x03\x02\x02\x02\u0894\u0896\x03\x02\x02\x02\u0895" +
		"\u0893\x03\x02\x02\x02\u0896\u0897\x07\x06\x02\x02\u0897\u089B\x03\x02" +
		"\x02\x02\u0898\u0899\x07\x04\x02\x02\u0899\u089B\x07\x06\x02\x02\u089A" +
		"\u088D\x03\x02\x02\x02\u089A\u0898\x03\x02\x02\x02\u089B\xC1\x03\x02\x02" +
		"\x02\u089C\u08A8\x05\xBC_\x02\u089D\u08A8\x05\xC0a\x02\u089E\u08A8\x05" +
		"\xC4c\x02\u089F\u08A8\x05\xC6d\x02\u08A0\u08A8\x05\xC8e\x02\u08A1\u08A8" +
		"\x05\xCAf\x02\u08A2\u08A8\x077\x02\x02\u08A3\u08A8\x078\x02\x02\u08A4" +
		"\u08A8\x079\x02\x02\u08A5\u08A8\x07:\x02\x02\u08A6\u08A8\x07;\x02\x02" +
		"\u08A7\u089C\x03\x02\x02\x02\u08A7\u089D\x03\x02\x02\x02\u08A7\u089E\x03" +
		"\x02\x02\x02\u08A7\u089F\x03\x02\x02\x02\u08A7\u08A0\x03\x02\x02\x02\u08A7" +
		"\u08A1\x03\x02\x02\x02\u08A7\u08A2\x03\x02\x02\x02\u08A7\u08A3\x03\x02" +
		"\x02\x02\u08A7\u08A4\x03\x02\x02\x02\u08A7\u08A5\x03\x02\x02\x02\u08A7" +
		"\u08A6\x03\x02\x02\x02\u08A8\xC3\x03\x02\x02\x02\u08A9\u08AA\x070\x02" +
		"\x02\u08AA\u08AF\x077\x02\x02\u08AB\u08AC\x07\x05\x02\x02\u08AC\u08AE" +
		"\x077\x02\x02\u08AD\u08AB\x03\x02\x02\x02\u08AE\u08B1\x03\x02\x02\x02" +
		"\u08AF\u08AD\x03\x02\x02\x02\u08AF\u08B0\x03\x02\x02\x02\u08B0\u08B2\x03" +
		"\x02\x02\x02\u08B1\u08AF\x03\x02\x02\x02\u08B2\u08B3\x07\x06\x02\x02\u08B3" +
		"\xC5\x03\x02\x02\x02\u08B4\u08B5\x071\x02\x02\u08B5\u08BA\x07B\x02\x02" +
		"\u08B6\u08B7\x07\x05\x02\x02\u08B7\u08B9\x07B\x02\x02\u08B8\u08B6\x03" +
		"\x02\x02\x02\u08B9\u08BC\x03\x02\x02\x02\u08BA\u08B8\x03\x02\x02\x02\u08BA" +
		"\u08BB\x03\x02\x02\x02\u08BB\u08BD\x03\x02\x02\x02\u08BC\u08BA\x03\x02" +
		"\x02\x02\u08BD\u08BE\x07\x06\x02\x02\u08BE\xC7\x03\x02\x02\x02\u08BF\u08C0" +
		"\x072\x02\x02\u08C0\u08C5\x079\x02\x02\u08C1\u08C2\x07\x05\x02\x02\u08C2" +
		"\u08C4\x079\x02\x02\u08C3\u08C1\x03\x02\x02\x02\u08C4\u08C7\x03\x02\x02" +
		"\x02\u08C5\u08C3\x03\x02\x02\x02\u08C5\u08C6\x03\x02\x02\x02\u08C6\u08C8" +
		"\x03\x02\x02\x02\u08C7\u08C5\x03\x02\x02\x02\u08C8\u08C9\x07\x06\x02\x02" +
		"\u08C9\xC9\x03\x02\x02\x02\u08CA\u08CB\t\x1E\x02\x02\u08CB\xCB\x03\x02" +
		"\x02\x02\u08CC\u08CD\x073\x02\x02\u08CD\u08D2\x05\xD2j\x02\u08CE\u08CF" +
		"\x07\x05\x02\x02\u08CF\u08D1\x05\xD2j\x02\u08D0\u08CE\x03\x02\x02\x02" +
		"\u08D1\u08D4\x03\x02\x02\x02\u08D2\u08D0\x03\x02\x02\x02\u08D2\u08D3\x03" +
		"\x02\x02\x02\u08D3\u08D5\x03\x02\x02\x02\u08D4\u08D2\x03\x02\x02\x02\u08D5" +
		"\u08D6\x07\b\x02\x02\u08D6\u08EC\x03\x02\x02\x02\u08D7\u08D8\x073\x02" +
		"\x02\u08D8\u08EC\x07\b\x02\x02\u08D9\u08DA\x074\x02\x02\u08DA\u08DF\x05" +
		"\xD6l\x02\u08DB\u08DC\x07\x05\x02\x02\u08DC\u08DE\x05\xD6l\x02\u08DD\u08DB" +
		"\x03\x02\x02\x02\u08DE\u08E1\x03\x02\x02\x02\u08DF\u08DD\x03\x02\x02\x02" +
		"\u08DF\u08E0\x03\x02\x02\x02\u08E0\u08E2\x03\x02\x02\x02\u08E1\u08DF\x03" +
		"\x02\x02\x02\u08E2\u08E3\x07\x06\x02\x02\u08E3\u08EC\x03\x02\x02\x02\u08E4" +
		"\u08E5\x07\x04\x02\x02\u08E5\u08EC\x07\x06\x02\x02\u08E6\u08EC\x07@\x02" +
		"\x02\u08E7\u08EC\x05\xDAn\x02\u08E8\u08EC\x07=\x02\x02\u08E9\u08EC\x07" +
		">\x02\x02\u08EA\u08EC\x07?\x02\x02\u08EB\u08CC\x03\x02\x02\x02\u08EB\u08D7" +
		"\x03\x02\x02\x02\u08EB\u08D9\x03\x02\x02\x02\u08EB\u08E4\x03\x02\x02\x02" +
		"\u08EB\u08E6\x03\x02\x02\x02\u08EB\u08E7\x03\x02\x02\x02\u08EB\u08E8\x03" +
		"\x02\x02\x02\u08EB\u08E9\x03\x02\x02\x02\u08EB\u08EA\x03\x02\x02\x02\u08EC" +
		"\xCD\x03\x02\x02\x02\u08ED\u08EE\x05\xD6l\x02\u08EE\xCF\x03\x02\x02\x02" +
		"\u08EF\u08F0\x07\x07\x02\x02\u08F0\u08F5\x05\xD2j\x02\u08F1\u08F2\x07" +
		"\x05\x02\x02\u08F2\u08F4\x05\xD2j\x02\u08F3\u08F1\x03\x02\x02\x02\u08F4" +
		"\u08F7\x03\x02\x02\x02\u08F5\u08F3\x03\x02\x02\x02\u08F5\u08F6\x03\x02" +
		"\x02\x02\u08F6\u08F8\x03\x02\x02\x02\u08F7\u08F5\x03\x02\x02\x02\u08F8" +
		"\u08F9\x07\b\x02\x02\u08F9\u08FD\x03\x02\x02\x02\u08FA\u08FB\x07\x07\x02" +
		"\x02\u08FB\u08FD\x07\b\x02\x02\u08FC\u08EF\x03\x02\x02\x02\u08FC\u08FA" +
		"\x03\x02\x02\x02\u08FD\xD1\x03\x02\x02\x02\u08FE\u08FF\x07@\x02\x02\u08FF" +
		"\u0900\x07!\x02\x02\u0900\u0901\x05\xD6l\x02\u0901\xD3\x03\x02\x02\x02" +
		"\u0902\u0903\x07\x04\x02\x02\u0903\u0908\x05\xD6l\x02\u0904\u0905\x07" +
		"\x05\x02\x02\u0905\u0907\x05\xD6l\x02\u0906\u0904\x03\x02\x02\x02\u0907" +
		"\u090A\x03\x02\x02\x02\u0908\u0906\x03\x02\x02\x02\u0908\u0909\x03\x02" +
		"\x02\x02\u0909\u090B\x03\x02\x02\x02\u090A\u0908\x03\x02\x02\x02\u090B" +
		"\u090C\x07\x06\x02\x02\u090C\u0910\x03\x02\x02\x02\u090D\u090E\x07\x04" +
		"\x02\x02\u090E\u0910\x07\x06\x02\x02\u090F\u0902\x03\x02\x02\x02\u090F" +
		"\u090D\x03\x02\x02\x02\u0910\xD5\x03\x02\x02\x02\u0911\u0919\x07@\x02" +
		"\x02\u0912\u0919\x05\xDAn\x02\u0913\u0919\x05\xD0i\x02\u0914\u0919\x05" +
		"\xD4k\x02\u0915\u0919\x07=\x02\x02\u0916\u0919\x07>\x02\x02\u0917\u0919" +
		"\x07?\x02\x02\u0918\u0911\x03\x02\x02\x02\u0918\u0912\x03\x02\x02\x02" +
		"\u0918\u0913\x03\x02\x02\x02\u0918\u0914\x03\x02\x02\x02\u0918\u0915\x03" +
		"\x02\x02\x02\u0918\u0916\x03\x02\x02\x02\u0918\u0917\x03\x02\x02\x02\u0919" +
		"\xD7\x03\x02\x02\x02\u091A\u091B\t\x1F\x02\x02\u091B\xD9\x03\x02\x02\x02" +
		"\u091C\u091D\t \x02\x02\u091D\xDB\x03\x02\x02\x02\u091E\u091F\t!\x02\x02" +
		"\u091F\xDD\x03\x02\x02\x02\u0920\u0921\x05\xE4s\x02\u0921\u0922\x05\xE4" +
		"s\x02\u0922\u0923\x05\xE4s\x02\u0923\xDF\x03\x02\x02\x02\u0924\u0925\x05" +
		"\xE4s\x02\u0925\u0926\x05\xE4s\x02\u0926\xE1\x03\x02\x02\x02\u0927\u0928" +
		"\x05\xE4s\x02\u0928\u0929\x05\xE4s\x02\u0929\u092A\x05\xE4s\x02\u092A" +
		"\u092B\x05\xE4s\x02\u092B\u092C\x05\xE4s\x02\u092C\xE3\x03\x02\x02\x02" +
		"\u092D\u0930\x07\xB5\x02\x02\u092E\u0930\x05\xDAn\x02\u092F\u092D\x03" +
		"\x02\x02\x02\u092F\u092E\x03\x02\x02\x02\u0930\xE5\x03\x02\x02\x02\u0931" +
		"\u0933\x05\xEEx\x02\u0932\u0934\x05\xE8u\x02\u0933\u0932\x03\x02\x02\x02" +
		"\u0933\u0934\x03\x02\x02\x02\u0934\u0936\x03\x02\x02\x02\u0935\u0937\x05" +
		"\xB0Y\x02\u0936\u0935\x03\x02\x02\x02\u0936\u0937\x03\x02\x02\x02\u0937" +
		"\xE7\x03\x02\x02\x02\u0938\u093A\x07\x04\x02\x02\u0939\u093B\v\x02\x02" +
		"\x02\u093A\u0939\x03\x02\x02\x02\u093B\u093C\x03\x02\x02\x02\u093C\u093D" +
		"\x03\x02\x02\x02\u093C\u093A\x03\x02\x02\x02\u093D\u093E\x03\x02\x02\x02" +
		"\u093E\u093F\x07\x06\x02\x02\u093F\xE9\x03\x02\x02\x02\u0940\u0948\x07" +
		"\xB6\x02\x02\u0941\u0943\x07\x04\x02\x02\u0942\u0944\v\x02\x02\x02\u0943" +
		"\u0942\x03\x02\x02\x02\u0944\u0945\x03\x02\x02\x02\u0945\u0946\x03\x02" +
		"\x02\x02\u0945\u0943\x03\x02\x02\x02\u0946\u0947\x03\x02\x02\x02\u0947" +
		"\u0949\x07\x06\x02\x02\u0948\u0941\x03\x02\x02\x02\u0948\u0949\x03\x02" +
		"\x02\x02\u0949\u0950\x03\x02\x02\x02\u094A\u094B\x075\x02\x02\u094B\u0950" +
		"\x05\u0116\x8C\x02\u094C\u094D\x07$\x02\x02\u094D\u0950\x05\u0116\x8C" +
		"\x02\u094E\u0950\x07$\x02\x02\u094F\u0940\x03\x02\x02\x02\u094F\u094A" +
		"\x03\x02\x02\x02\u094F\u094C\x03\x02\x02\x02\u094F\u094E\x03\x02\x02\x02" +
		"\u0950\xEB\x03\x02\x02\x02\u0951\u0952\x05\u0112\x8A\x02\u0952\u0953\x07" +
		"!\x02\x02\u0953\u0954\x05\u0118\x8D\x02\u0954\u0957\x03\x02\x02\x02\u0955" +
		"\u0957\x05\u0118\x8D\x02\u0956\u0951\x03\x02\x02\x02\u0956\u0955\x03\x02" +
		"\x02\x02\u0957\xED\x03\x02\x02\x02\u0958\u0959\x05\xECw\x02\u0959\xEF" +
		"\x03\x02\x02\x02\u095A\u095B\x05\xECw\x02\u095B\xF1\x03\x02\x02\x02\u095C" +
		"\u095D\x05\xECw\x02\u095D\xF3\x03\x02\x02\x02\u095E\u095F\x05\xECw\x02" +
		"\u095F\xF5\x03\x02\x02\x02\u0960\u0961\x05\xECw\x02\u0961\xF7\x03\x02" +
		"\x02\x02\u0962\u0963\x05\xECw\x02\u0963\xF9\x03\x02\x02\x02\u0964\u0965" +
		"\x05\xECw\x02\u0965\xFB\x03\x02\x02\x02\u0966\u0967\x05\xECw\x02\u0967" +
		"\xFD\x03\x02\x02\x02\u0968\u0969\x05\xECw\x02\u0969\xFF\x03\x02\x02\x02" +
		"\u096A\u096B\x05\xECw\x02\u096B\u0101\x03\x02\x02\x02\u096C\u096D\x05" +
		"\xECw\x02\u096D\u0103\x03\x02\x02\x02\u096E\u096F\x07$\x02\x02\u096F\u0970" +
		"\x05\xECw\x02\u0970\u0105\x03\x02\x02\x02\u0971\u0972\x05\u0104\x83\x02" +
		"\u0972\u0107\x03\x02\x02\x02\u0973\u0974\x05\u0104\x83\x02\u0974\u0109" +
		"\x03\x02\x02\x02\u0975\u0976\x05\u0104\x83\x02\u0976\u010B\x03\x02\x02" +
		"\x02\u0977\u0978\x05\u0104\x83\x02\u0978\u010D\x03\x02\x02\x02\u0979\u097A" +
		"\x05\u0112\x8A\x02\u097A\u097B\x07!\x02\x02\u097B\u097D\x03\x02\x02\x02" +
		"\u097C\u0979\x03\x02\x02\x02\u097C\u097D\x03\x02\x02\x02\u097D\u097E\x03" +
		"\x02\x02\x02\u097E\u097F\x05\u0112\x8A\x02\u097F\u010F\x03\x02\x02\x02" +
		"\u0980\u0981\t\"\x02\x02\u0981\u0111\x03\x02\x02\x02\u0982\u0986\x07\xBD" +
		"\x02\x02\u0983\u0986\x05\xDCo\x02\u0984\u0986\x05\u0110\x89\x02\u0985" +
		"\u0982\x03\x02\x02\x02\u0985\u0983\x03\x02\x02\x02\u0985\u0984\x03\x02" +
		"\x02\x02\u0986\u0113\x03\x02\x02\x02\u0987\u0988\x05\xECw\x02\u0988\u0115" +
		"\x03\x02\x02\x02\u0989\u098E\x07\xBD\x02\x02\u098A\u098E\x07\xBE\x02\x02" +
		"\u098B\u098E\x05\xDCo\x02\u098C\u098E\x05\u0110\x89\x02\u098D\u0989\x03" +
		"\x02\x02\x02\u098D\u098A\x03\x02\x02\x02\u098D\u098B\x03\x02\x02\x02\u098D" +
		"\u098C\x03\x02\x02\x02\u098E\u0117\x03\x02\x02\x02\u098F\u0994\x05\u0112" +
		"\x8A\x02\u0990\u0991\x07\x1D\x02\x02\u0991\u0993\x05\u0112\x8A\x02\u0992" +
		"\u0990\x03\x02\x02\x02\u0993\u0996\x03\x02\x02\x02\u0994\u0992\x03\x02" +
		"\x02\x02\u0994\u0995\x03\x02\x02\x02\u0995\u0119\x03\x02\x02\x02\u0996" +
		"\u0994\x03\x02\x02\x02\u0997\u0998\x05\u0112\x8A\x02\u0998\u0999\x07!" +
		"\x02\x02\u0999\u099B\x03\x02\x02\x02\u099A\u0997\x03\x02\x02\x02\u099A" +
		"\u099B\x03\x02\x02\x02\u099B\u099C\x03\x02\x02\x02\u099C\u099F\x05\u0112" +
		"\x8A\x02\u099D\u099E\x07\x04\x02\x02\u099E\u09A0\x07\x06\x02\x02\u099F" +
		"\u099D\x03\x02\x02\x02\u099F\u09A0\x03\x02\x02\x02\u09A0\u011B\x03\x02" +
		"\x02\x02\u09A1\u09A2\x05\u0112\x8A\x02\u09A2\u011D\x03\x02\x02\x02\u09A3" +
		"\u09A6\x05\u0112\x8A\x02\u09A4\u09A6\x07@\x02\x02\u09A5\u09A3\x03\x02" +
		"\x02\x02\u09A5\u09A4\x03\x02\x02\x02\u09A6\u011F\x03\x02\x02\x02\u09A7" +
		"\u09AA\x05\xFC\x7F\x02\u09A8\u09AA\x05\u0106\x84\x02\u09A9\u09A7\x03\x02" +
		"\x02\x02\u09A9\u09A8\x03\x02\x02\x02\u09AA\u09AD\x03\x02\x02\x02\u09AB" +
		"\u09AE\x05\xBA^\x02\u09AC\u09AE\x05\xB0Y\x02\u09AD\u09AB\x03\x02\x02\x02" +
		"\u09AD\u09AC\x03\x02\x02\x02\u09AD\u09AE\x03\x02\x02\x02\u09AE\u0121\x03" +
		"\x02\x02\x02\u09AF\u09B2\x05\xEEx\x02\u09B0\u09B2\x05\u0108\x85\x02\u09B1" +
		"\u09AF\x03\x02\x02\x02\u09B1\u09B0\x03\x02\x02\x02\u09B2\u09B4\x03\x02" +
		"\x02\x02\u09B3\u09B5\x05\xE8u\x02\u09B4\u09B3\x03\x02\x02\x02\u09B4\u09B5" +
		"\x03\x02\x02\x02\u09B5\u09B8\x03\x02\x02\x02\u09B6\u09B9\x05\xBA^\x02" +
		"\u09B7\u09B9\x05\xB0Y\x02\u09B8\u09B6\x03\x02\x02\x02\u09B8\u09B7\x03" +
		"\x02\x02\x02\u09B8\u09B9\x03\x02\x02\x02\u09B9\u0123\x03\x02\x02\x02\u012B" +
		"\u0127\u012C\u0130\u0149\u0154\u0156\u015C\u0161\u0165\u0169\u016F\u0199" +
		"\u019F\u01A3\u01A8\u01AC\u01B0\u01B6\u01C0\u01C4\u01C8\u01D0\u01D3\u01D9" +
		"\u01E2\u01E8\u01F2\u01F5\u01FB\u0208\u020D\u0213\u0219\u021F\u0228\u0234" +
		"\u023C\u0242\u0249\u024E\u0253\u025B\u025F\u0265\u026D\u0274\u0279\u027D" +
		"\u0284\u0289\u028D\u0293\u0297\u029E\u02A2\u02A4\u02AC\u02B2\u02B6\u02C6" +
		"\u02CF\u02D6\u02DA\u02DD\u02E1\u02E4\u02EB\u02EE\u02F2\u02F6\u02F9\u02FC" +
		"\u0302\u0305\u030D\u0310\u0314\u031B\u031E\u0322\u0327\u032C\u0338\u0342" +
		"\u034C\u0356\u0364\u0368\u036B\u0377\u037E\u03A1\u03A5\u03AC\u03B4\u03BA" +
		"\u03BF\u03FC\u0405\u0410\u0412\u041C\u041F\u0428\u042F\u0432\u0439\u043F" +
		"\u0444\u0448\u0455\u045B\u0460\u0464\u046A\u046F\u0474\u047D\u0484\u0489" +
		"\u048D\u0493\u0498\u049D\u04A0\u04A5\u04AA\u04AF\u04B4\u04B9\u04BE\u04C3" +
		"\u04C8\u04CC\u04D0\u04D4\u04DE\u04E8\u04F0\u04F5\u04FA\u0503\u0508\u050D" +
		"\u0518\u0529\u0530\u0538\u053D\u0542\u054D\u0552\u0557\u055F\u0569\u0570" +
		"\u057A\u057F\u0586\u0590\u0595\u05AF\u05B4\u05B8\u05C1\u05C4\u05CC\u05D8" +
		"\u05DE\u05F1\u05F6\u05FB\u0601\u0604\u060C\u0614\u061A\u061F\u0622\u0627" +
		"\u062A\u062C\u0633\u063D\u0642\u064D\u0652\u0656\u0659\u065C\u0661\u0664" +
		"\u067B\u067E\u0680\u0688\u068D\u0696\u069A\u069F\u06A3\u06AA\u06AE\u06B2" +
		"\u06B7\u06BE\u06C2\u06C9\u06D4\u06D9\u06DC\u06E7\u06F2\u06FB\u06FE\u0701" +
		"\u0709\u070C\u070F\u0713\u0728\u072C\u072E\u073A\u0743\u0755\u075E\u076A" +
		"\u076F\u0778\u077D\u0788\u0790\u0796\u07A2\u07A5\u07AD\u07AF\u07B9\u07C4" +
		"\u07D2\u07E0\u07E2\u07E9\u07EF\u07F6\u07FF\u0814\u0816\u081D\u081F\u082B" +
		"\u082D\u0834\u0836\u083E\u084B\u0858\u0862\u086C\u0876\u0880\u0887\u0893" +
		"\u089A\u08A7\u08AF\u08BA\u08C5\u08D2\u08DF\u08EB\u08F5\u08FC\u0908\u090F" +
		"\u0918\u092F\u0933\u0936\u093C\u0945\u0948\u094F\u0956\u097C\u0985\u098D" +
		"\u0994\u099A\u099F\u09A5\u09A9\u09AD\u09B1\u09B4\u09B8";
	public static readonly _serializedATN: string = Utils.join(
		[
			JustMCFParser._serializedATNSegment0,
			JustMCFParser._serializedATNSegment1,
			JustMCFParser._serializedATNSegment2,
			JustMCFParser._serializedATNSegment3,
			JustMCFParser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JustMCFParser.__ATN) {
			JustMCFParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JustMCFParser._serializedATN));
		}

		return JustMCFParser.__ATN;
	}

}

export class McfFileContext extends ParserRuleContext {
	public fileStatementInner(): FileStatementInnerContext[];
	public fileStatementInner(i: number): FileStatementInnerContext;
	public fileStatementInner(i?: number): FileStatementInnerContext | FileStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FileStatementInnerContext);
		} else {
			return this.getRuleContext(i, FileStatementInnerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_mcfFile; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterMcfFile) {
			listener.enterMcfFile(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitMcfFile) {
			listener.exitMcfFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitMcfFile) {
			return visitor.visitMcfFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileStatementInnerContext extends ParserRuleContext {
	public nameSpaceStatement(): NameSpaceStatementContext | undefined {
		return this.tryGetRuleContext(0, NameSpaceStatementContext);
	}
	public nameSpaceStatementInner(): NameSpaceStatementInnerContext | undefined {
		return this.tryGetRuleContext(0, NameSpaceStatementInnerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_fileStatementInner; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFileStatementInner) {
			listener.enterFileStatementInner(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFileStatementInner) {
			listener.exitFileStatementInner(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFileStatementInner) {
			return visitor.visitFileStatementInner(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementInnerContext extends ParserRuleContext {
	public noInExecStatement(): NoInExecStatementContext | undefined {
		return this.tryGetRuleContext(0, NoInExecStatementContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_statementInner; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterStatementInner) {
			listener.enterStatementInner(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitStatementInner) {
			listener.exitStatementInner(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitStatementInner) {
			return visitor.visitStatementInner(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public namespaceSetStatement(): NamespaceSetStatementContext | undefined {
		return this.tryGetRuleContext(0, NamespaceSetStatementContext);
	}
	public funcRunStatement(): FuncRunStatementContext | undefined {
		return this.tryGetRuleContext(0, FuncRunStatementContext);
	}
	public funcImproveRunStatement(): FuncImproveRunStatementContext | undefined {
		return this.tryGetRuleContext(0, FuncImproveRunStatementContext);
	}
	public execStatement(): ExecStatementContext | undefined {
		return this.tryGetRuleContext(0, ExecStatementContext);
	}
	public dataStatement(): DataStatementContext | undefined {
		return this.tryGetRuleContext(0, DataStatementContext);
	}
	public scbPlayerStatement(): ScbPlayerStatementContext | undefined {
		return this.tryGetRuleContext(0, ScbPlayerStatementContext);
	}
	public scbObjectiveStatement(): ScbObjectiveStatementContext | undefined {
		return this.tryGetRuleContext(0, ScbObjectiveStatementContext);
	}
	public titleStatement(): TitleStatementContext | undefined {
		return this.tryGetRuleContext(0, TitleStatementContext);
	}
	public displayStatement(): DisplayStatementContext | undefined {
		return this.tryGetRuleContext(0, DisplayStatementContext);
	}
	public lootStatement(): LootStatementContext | undefined {
		return this.tryGetRuleContext(0, LootStatementContext);
	}
	public itemStatement(): ItemStatementContext | undefined {
		return this.tryGetRuleContext(0, ItemStatementContext);
	}
	public attrStatement(): AttrStatementContext | undefined {
		return this.tryGetRuleContext(0, AttrStatementContext);
	}
	public entityStatement(): EntityStatementContext | undefined {
		return this.tryGetRuleContext(0, EntityStatementContext);
	}
	public blockStatement(): BlockStatementContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementContext);
	}
	public dataOperationExpression(): DataOperationExpressionContext | undefined {
		return this.tryGetRuleContext(0, DataOperationExpressionContext);
	}
	public dataAssignExistExpression(): DataAssignExistExpressionContext | undefined {
		return this.tryGetRuleContext(0, DataAssignExistExpressionContext);
	}
	public scbOperationExpression(): ScbOperationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ScbOperationExpressionContext);
	}
	public bossbarOperationExpression(): BossbarOperationExpressionContext | undefined {
		return this.tryGetRuleContext(0, BossbarOperationExpressionContext);
	}
	public entityExpression(): EntityExpressionContext | undefined {
		return this.tryGetRuleContext(0, EntityExpressionContext);
	}
	public leagalCommand(): LeagalCommandContext | undefined {
		return this.tryGetRuleContext(0, LeagalCommandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_statement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoInExecStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_noInExecStatement; }
	public copyFrom(ctx: NoInExecStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class NoInExecStatementFuncContext extends NoInExecStatementContext {
	public funcStatement(): FuncStatementContext {
		return this.getRuleContext(0, FuncStatementContext);
	}
	constructor(ctx: NoInExecStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNoInExecStatementFunc) {
			listener.enterNoInExecStatementFunc(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNoInExecStatementFunc) {
			listener.exitNoInExecStatementFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNoInExecStatementFunc) {
			return visitor.visitNoInExecStatementFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NoInExecStatementRunFuncContext extends NoInExecStatementContext {
	public _left!: Token;
	public funcStatement(): FuncStatementContext {
		return this.getRuleContext(0, FuncStatementContext);
	}
	public RUN(): TerminalNode { return this.getToken(JustMCFParser.RUN, 0); }
	constructor(ctx: NoInExecStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNoInExecStatementRunFunc) {
			listener.enterNoInExecStatementRunFunc(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNoInExecStatementRunFunc) {
			listener.exitNoInExecStatementRunFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNoInExecStatementRunFunc) {
			return visitor.visitNoInExecStatementRunFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NoInExecStatementFuncImproveContext extends NoInExecStatementContext {
	public funcImproveStatement(): FuncImproveStatementContext {
		return this.getRuleContext(0, FuncImproveStatementContext);
	}
	constructor(ctx: NoInExecStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNoInExecStatementFuncImprove) {
			listener.enterNoInExecStatementFuncImprove(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNoInExecStatementFuncImprove) {
			listener.exitNoInExecStatementFuncImprove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNoInExecStatementFuncImprove) {
			return visitor.visitNoInExecStatementFuncImprove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NoInExecStatementInterfaceContext extends NoInExecStatementContext {
	public interfaceStatement(): InterfaceStatementContext {
		return this.getRuleContext(0, InterfaceStatementContext);
	}
	constructor(ctx: NoInExecStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNoInExecStatementInterface) {
			listener.enterNoInExecStatementInterface(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNoInExecStatementInterface) {
			listener.exitNoInExecStatementInterface(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNoInExecStatementInterface) {
			return visitor.visitNoInExecStatementInterface(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NoInExecStatementStoreContext extends NoInExecStatementContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public execStoreChild(): ExecStoreChildContext[];
	public execStoreChild(i: number): ExecStoreChildContext;
	public execStoreChild(i?: number): ExecStoreChildContext | ExecStoreChildContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExecStoreChildContext);
		} else {
			return this.getRuleContext(i, ExecStoreChildContext);
		}
	}
	constructor(ctx: NoInExecStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNoInExecStatementStore) {
			listener.enterNoInExecStatementStore(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNoInExecStatementStore) {
			listener.exitNoInExecStatementStore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNoInExecStatementStore) {
			return visitor.visitNoInExecStatementStore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LeagalCommandContext extends ParserRuleContext {
	public LeagalCommand(): TerminalNode { return this.getToken(JustMCFParser.LeagalCommand, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_leagalCommand; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLeagalCommand) {
			listener.enterLeagalCommand(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLeagalCommand) {
			listener.exitLeagalCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLeagalCommand) {
			return visitor.visitLeagalCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceStatementContext extends ParserRuleContext {
	public NAMSP(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NAMSP, 0); }
	public NAMESPACE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NAMESPACE, 0); }
	public acceptableName(): AcceptableNameContext | undefined {
		return this.tryGetRuleContext(0, AcceptableNameContext);
	}
	public nameSpaceStatementInner(): NameSpaceStatementInnerContext[];
	public nameSpaceStatementInner(i: number): NameSpaceStatementInnerContext;
	public nameSpaceStatementInner(i?: number): NameSpaceStatementInnerContext | NameSpaceStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameSpaceStatementInnerContext);
		} else {
			return this.getRuleContext(i, NameSpaceStatementInnerContext);
		}
	}
	public nameSpaceSettings(): NameSpaceSettingsContext[];
	public nameSpaceSettings(i: number): NameSpaceSettingsContext;
	public nameSpaceSettings(i?: number): NameSpaceSettingsContext | NameSpaceSettingsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameSpaceSettingsContext);
		} else {
			return this.getRuleContext(i, NameSpaceSettingsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpaceStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceStatement) {
			listener.enterNameSpaceStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceStatement) {
			listener.exitNameSpaceStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceStatement) {
			return visitor.visitNameSpaceStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceSettingsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpaceSettings; }
	public copyFrom(ctx: NameSpaceSettingsContext): void {
		super.copyFrom(ctx);
	}
}
export class NameSpaceSettingsFuncContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public FUNC(): TerminalNode { return this.getToken(JustMCFParser.FUNC, 0); }
	constructor(ctx: NameSpaceSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceSettingsFunc) {
			listener.enterNameSpaceSettingsFunc(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceSettingsFunc) {
			listener.exitNameSpaceSettingsFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceSettingsFunc) {
			return visitor.visitNameSpaceSettingsFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameSpaceSettingsBlockContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public BLOCK(): TerminalNode { return this.getToken(JustMCFParser.BLOCK, 0); }
	constructor(ctx: NameSpaceSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceSettingsBlock) {
			listener.enterNameSpaceSettingsBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceSettingsBlock) {
			listener.exitNameSpaceSettingsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceSettingsBlock) {
			return visitor.visitNameSpaceSettingsBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameSpaceSettingsStorageContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public STORAGE(): TerminalNode { return this.getToken(JustMCFParser.STORAGE, 0); }
	constructor(ctx: NameSpaceSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceSettingsStorage) {
			listener.enterNameSpaceSettingsStorage(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceSettingsStorage) {
			listener.exitNameSpaceSettingsStorage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceSettingsStorage) {
			return visitor.visitNameSpaceSettingsStorage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameSpaceSettingsBossbarContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public BOSSBAR(): TerminalNode { return this.getToken(JustMCFParser.BOSSBAR, 0); }
	constructor(ctx: NameSpaceSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceSettingsBossbar) {
			listener.enterNameSpaceSettingsBossbar(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceSettingsBossbar) {
			listener.exitNameSpaceSettingsBossbar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceSettingsBossbar) {
			return visitor.visitNameSpaceSettingsBossbar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameSpaceSettingsBiomeContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public BIOME(): TerminalNode { return this.getToken(JustMCFParser.BIOME, 0); }
	constructor(ctx: NameSpaceSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceSettingsBiome) {
			listener.enterNameSpaceSettingsBiome(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceSettingsBiome) {
			listener.exitNameSpaceSettingsBiome(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceSettingsBiome) {
			return visitor.visitNameSpaceSettingsBiome(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameSpaceSettingsEntityContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public ENTITY(): TerminalNode { return this.getToken(JustMCFParser.ENTITY, 0); }
	constructor(ctx: NameSpaceSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceSettingsEntity) {
			listener.enterNameSpaceSettingsEntity(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceSettingsEntity) {
			listener.exitNameSpaceSettingsEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceSettingsEntity) {
			return visitor.visitNameSpaceSettingsEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameSpaceSettingsPredicateContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public PREDICATE(): TerminalNode { return this.getToken(JustMCFParser.PREDICATE, 0); }
	constructor(ctx: NameSpaceSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceSettingsPredicate) {
			listener.enterNameSpaceSettingsPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceSettingsPredicate) {
			listener.exitNameSpaceSettingsPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceSettingsPredicate) {
			return visitor.visitNameSpaceSettingsPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameSpaceSettingsDimContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public DIM(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DIM, 0); }
	public DIMENSION(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DIMENSION, 0); }
	constructor(ctx: NameSpaceSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceSettingsDim) {
			listener.enterNameSpaceSettingsDim(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceSettingsDim) {
			listener.exitNameSpaceSettingsDim(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceSettingsDim) {
			return visitor.visitNameSpaceSettingsDim(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameSpaceSettingsItemContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public ITEM(): TerminalNode { return this.getToken(JustMCFParser.ITEM, 0); }
	constructor(ctx: NameSpaceSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceSettingsItem) {
			listener.enterNameSpaceSettingsItem(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceSettingsItem) {
			listener.exitNameSpaceSettingsItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceSettingsItem) {
			return visitor.visitNameSpaceSettingsItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameSpaceSettingsLootContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public LOOT(): TerminalNode { return this.getToken(JustMCFParser.LOOT, 0); }
	constructor(ctx: NameSpaceSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceSettingsLoot) {
			listener.enterNameSpaceSettingsLoot(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceSettingsLoot) {
			listener.exitNameSpaceSettingsLoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceSettingsLoot) {
			return visitor.visitNameSpaceSettingsLoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameSpaceSettingsItemModifierContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public ITEM_MODIFIER(): TerminalNode { return this.getToken(JustMCFParser.ITEM_MODIFIER, 0); }
	constructor(ctx: NameSpaceSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceSettingsItemModifier) {
			listener.enterNameSpaceSettingsItemModifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceSettingsItemModifier) {
			listener.exitNameSpaceSettingsItemModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceSettingsItemModifier) {
			return visitor.visitNameSpaceSettingsItemModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameSpaceSettingsDefaultContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public DEFAULT(): TerminalNode { return this.getToken(JustMCFParser.DEFAULT, 0); }
	constructor(ctx: NameSpaceSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceSettingsDefault) {
			listener.enterNameSpaceSettingsDefault(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceSettingsDefault) {
			listener.exitNameSpaceSettingsDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceSettingsDefault) {
			return visitor.visitNameSpaceSettingsDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameSpaceSettingsJustDefaultContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public DEFAULT(): TerminalNode { return this.getToken(JustMCFParser.DEFAULT, 0); }
	constructor(ctx: NameSpaceSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceSettingsJustDefault) {
			listener.enterNameSpaceSettingsJustDefault(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceSettingsJustDefault) {
			listener.exitNameSpaceSettingsJustDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceSettingsJustDefault) {
			return visitor.visitNameSpaceSettingsJustDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceStatementInnerContext extends ParserRuleContext {
	public funcTagStatement(): FuncTagStatementContext | undefined {
		return this.tryGetRuleContext(0, FuncTagStatementContext);
	}
	public funcTagStatementInner(): FuncTagStatementInnerContext | undefined {
		return this.tryGetRuleContext(0, FuncTagStatementInnerContext);
	}
	public interfaceStatement(): InterfaceStatementContext | undefined {
		return this.tryGetRuleContext(0, InterfaceStatementContext);
	}
	public nameSpaceStatement(): NameSpaceStatementContext | undefined {
		return this.tryGetRuleContext(0, NameSpaceStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpaceStatementInner; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceStatementInner) {
			listener.enterNameSpaceStatementInner(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceStatementInner) {
			listener.exitNameSpaceStatementInner(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceStatementInner) {
			return visitor.visitNameSpaceStatementInner(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceSetStatementContext extends ParserRuleContext {
	public NAMSP(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NAMSP, 0); }
	public NAMESPACE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NAMESPACE, 0); }
	public acceptableName(): AcceptableNameContext | undefined {
		return this.tryGetRuleContext(0, AcceptableNameContext);
	}
	public statementInner(): StatementInnerContext[];
	public statementInner(i: number): StatementInnerContext;
	public statementInner(i?: number): StatementInnerContext | StatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementInnerContext);
		} else {
			return this.getRuleContext(i, StatementInnerContext);
		}
	}
	public nameSpaceSettings(): NameSpaceSettingsContext[];
	public nameSpaceSettings(i: number): NameSpaceSettingsContext;
	public nameSpaceSettings(i?: number): NameSpaceSettingsContext | NameSpaceSettingsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameSpaceSettingsContext);
		} else {
			return this.getRuleContext(i, NameSpaceSettingsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_namespaceSetStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNamespaceSetStatement) {
			listener.enterNamespaceSetStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNamespaceSetStatement) {
			listener.exitNamespaceSetStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNamespaceSetStatement) {
			return visitor.visitNamespaceSetStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncTagStatementContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(JustMCFParser.FUNC, 0); }
	public tagNameSpaceFunc(): TagNameSpaceFuncContext[];
	public tagNameSpaceFunc(i: number): TagNameSpaceFuncContext;
	public tagNameSpaceFunc(i?: number): TagNameSpaceFuncContext | TagNameSpaceFuncContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagNameSpaceFuncContext);
		} else {
			return this.getRuleContext(i, TagNameSpaceFuncContext);
		}
	}
	public TAGGED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.TAGGED, 0); }
	public funcTagStatementInner(): FuncTagStatementInnerContext[];
	public funcTagStatementInner(i: number): FuncTagStatementInnerContext;
	public funcTagStatementInner(i?: number): FuncTagStatementInnerContext | FuncTagStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FuncTagStatementInnerContext);
		} else {
			return this.getRuleContext(i, FuncTagStatementInnerContext);
		}
	}
	public funcTagSettings(): FuncTagSettingsContext[];
	public funcTagSettings(i: number): FuncTagSettingsContext;
	public funcTagSettings(i?: number): FuncTagSettingsContext | FuncTagSettingsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FuncTagSettingsContext);
		} else {
			return this.getRuleContext(i, FuncTagSettingsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_funcTagStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncTagStatement) {
			listener.enterFuncTagStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncTagStatement) {
			listener.exitFuncTagStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncTagStatement) {
			return visitor.visitFuncTagStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncTagSettingsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_funcTagSettings; }
	public copyFrom(ctx: FuncTagSettingsContext): void {
		super.copyFrom(ctx);
	}
}
export class FuncTagSettingsReplaceContext extends FuncTagSettingsContext {
	public REPLACE(): TerminalNode { return this.getToken(JustMCFParser.REPLACE, 0); }
	public boolValue(): BoolValueContext {
		return this.getRuleContext(0, BoolValueContext);
	}
	constructor(ctx: FuncTagSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncTagSettingsReplace) {
			listener.enterFuncTagSettingsReplace(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncTagSettingsReplace) {
			listener.exitFuncTagSettingsReplace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncTagSettingsReplace) {
			return visitor.visitFuncTagSettingsReplace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncTagSettingsReplacedContext extends FuncTagSettingsContext {
	public REPLACED(): TerminalNode { return this.getToken(JustMCFParser.REPLACED, 0); }
	constructor(ctx: FuncTagSettingsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncTagSettingsReplaced) {
			listener.enterFuncTagSettingsReplaced(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncTagSettingsReplaced) {
			listener.exitFuncTagSettingsReplaced(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncTagSettingsReplaced) {
			return visitor.visitFuncTagSettingsReplaced(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncTagStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_funcTagStatementInner; }
	public copyFrom(ctx: FuncTagStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class FuncTagSIFuncSContext extends FuncTagStatementInnerContext {
	public funcStatement(): FuncStatementContext {
		return this.getRuleContext(0, FuncStatementContext);
	}
	constructor(ctx: FuncTagStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncTagSIFuncS) {
			listener.enterFuncTagSIFuncS(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncTagSIFuncS) {
			listener.exitFuncTagSIFuncS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncTagSIFuncS) {
			return visitor.visitFuncTagSIFuncS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncTagSIFuncRunSContext extends FuncTagStatementInnerContext {
	public funcRunStatement(): FuncRunStatementContext {
		return this.getRuleContext(0, FuncRunStatementContext);
	}
	constructor(ctx: FuncTagStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncTagSIFuncRunS) {
			listener.enterFuncTagSIFuncRunS(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncTagSIFuncRunS) {
			listener.exitFuncTagSIFuncRunS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncTagSIFuncRunS) {
			return visitor.visitFuncTagSIFuncRunS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncTagSIFuncImproveSContext extends FuncTagStatementInnerContext {
	public funcImproveStatement(): FuncImproveStatementContext {
		return this.getRuleContext(0, FuncImproveStatementContext);
	}
	constructor(ctx: FuncTagStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncTagSIFuncImproveS) {
			listener.enterFuncTagSIFuncImproveS(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncTagSIFuncImproveS) {
			listener.exitFuncTagSIFuncImproveS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncTagSIFuncImproveS) {
			return visitor.visitFuncTagSIFuncImproveS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncTagSIFuncTagSContext extends FuncTagStatementInnerContext {
	public funcTagStatement(): FuncTagStatementContext {
		return this.getRuleContext(0, FuncTagStatementContext);
	}
	constructor(ctx: FuncTagStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncTagSIFuncTagS) {
			listener.enterFuncTagSIFuncTagS(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncTagSIFuncTagS) {
			listener.exitFuncTagSIFuncTagS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncTagSIFuncTagS) {
			return visitor.visitFuncTagSIFuncTagS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncStatementContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(JustMCFParser.FUNC, 0); }
	public nameSpaceFunc(): NameSpaceFuncContext {
		return this.getRuleContext(0, NameSpaceFuncContext);
	}
	public TAGGED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.TAGGED, 0); }
	public tagNameSpaceFunc(): TagNameSpaceFuncContext[];
	public tagNameSpaceFunc(i: number): TagNameSpaceFuncContext;
	public tagNameSpaceFunc(i?: number): TagNameSpaceFuncContext | TagNameSpaceFuncContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagNameSpaceFuncContext);
		} else {
			return this.getRuleContext(i, TagNameSpaceFuncContext);
		}
	}
	public statementInner(): StatementInnerContext[];
	public statementInner(i: number): StatementInnerContext;
	public statementInner(i?: number): StatementInnerContext | StatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementInnerContext);
		} else {
			return this.getRuleContext(i, StatementInnerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_funcStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncStatement) {
			listener.enterFuncStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncStatement) {
			listener.exitFuncStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncStatement) {
			return visitor.visitFuncStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncImproveStatementContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(JustMCFParser.FUNC, 0); }
	public nameSpaceFunc(): NameSpaceFuncContext {
		return this.getRuleContext(0, NameSpaceFuncContext);
	}
	public funcImproveParam(): FuncImproveParamContext[];
	public funcImproveParam(i: number): FuncImproveParamContext;
	public funcImproveParam(i?: number): FuncImproveParamContext | FuncImproveParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FuncImproveParamContext);
		} else {
			return this.getRuleContext(i, FuncImproveParamContext);
		}
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public funcImproveStatementInner(): FuncImproveStatementInnerContext[];
	public funcImproveStatementInner(i: number): FuncImproveStatementInnerContext;
	public funcImproveStatementInner(i?: number): FuncImproveStatementInnerContext | FuncImproveStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FuncImproveStatementInnerContext);
		} else {
			return this.getRuleContext(i, FuncImproveStatementInnerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_funcImproveStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncImproveStatement) {
			listener.enterFuncImproveStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncImproveStatement) {
			listener.exitFuncImproveStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncImproveStatement) {
			return visitor.visitFuncImproveStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncImproveParamContext extends ParserRuleContext {
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_funcImproveParam; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncImproveParam) {
			listener.enterFuncImproveParam(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncImproveParam) {
			listener.exitFuncImproveParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncImproveParam) {
			return visitor.visitFuncImproveParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncImproveStatementInnerContext extends ParserRuleContext {
	public statementInner(): StatementInnerContext | undefined {
		return this.tryGetRuleContext(0, StatementInnerContext);
	}
	public yeildStatement(): YeildStatementContext | undefined {
		return this.tryGetRuleContext(0, YeildStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_funcImproveStatementInner; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncImproveStatementInner) {
			listener.enterFuncImproveStatementInner(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncImproveStatementInner) {
			listener.exitFuncImproveStatementInner(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncImproveStatementInner) {
			return visitor.visitFuncImproveStatementInner(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YeildStatementContext extends ParserRuleContext {
	public YEILD(): TerminalNode { return this.getToken(JustMCFParser.YEILD, 0); }
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_yeildStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterYeildStatement) {
			listener.enterYeildStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitYeildStatement) {
			listener.exitYeildStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitYeildStatement) {
			return visitor.visitYeildStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncRunStatementContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(JustMCFParser.FUNC, 0); }
	public nameSpaceFunc(): NameSpaceFuncContext | undefined {
		return this.tryGetRuleContext(0, NameSpaceFuncContext);
	}
	public tagNameSpaceFunc(): TagNameSpaceFuncContext | undefined {
		return this.tryGetRuleContext(0, TagNameSpaceFuncContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_funcRunStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncRunStatement) {
			listener.enterFuncRunStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncRunStatement) {
			listener.exitFuncRunStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncRunStatement) {
			return visitor.visitFuncRunStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncImproveRunStatementContext extends ParserRuleContext {
	public funcImproveRunExpression(): FuncImproveRunExpressionContext {
		return this.getRuleContext(0, FuncImproveRunExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_funcImproveRunStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncImproveRunStatement) {
			listener.enterFuncImproveRunStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncImproveRunStatement) {
			listener.exitFuncImproveRunStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncImproveRunStatement) {
			return visitor.visitFuncImproveRunStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncImproveRunExpressionContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(JustMCFParser.FUNC, 0); }
	public nameSpaceFunc(): NameSpaceFuncContext {
		return this.getRuleContext(0, NameSpaceFuncContext);
	}
	public funcImproveRunParam(): FuncImproveRunParamContext[];
	public funcImproveRunParam(i: number): FuncImproveRunParamContext;
	public funcImproveRunParam(i?: number): FuncImproveRunParamContext | FuncImproveRunParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FuncImproveRunParamContext);
		} else {
			return this.getRuleContext(i, FuncImproveRunParamContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_funcImproveRunExpression; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncImproveRunExpression) {
			listener.enterFuncImproveRunExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncImproveRunExpression) {
			listener.exitFuncImproveRunExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncImproveRunExpression) {
			return visitor.visitFuncImproveRunExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncImproveRunParamContext extends ParserRuleContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_funcImproveRunParam; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterFuncImproveRunParam) {
			listener.enterFuncImproveRunParam(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitFuncImproveRunParam) {
			listener.exitFuncImproveRunParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitFuncImproveRunParam) {
			return visitor.visitFuncImproveRunParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_execStatement; }
	public copyFrom(ctx: ExecStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExecWithRunOrChildContext extends ExecStatementContext {
	public execRunChild(): ExecRunChildContext | undefined {
		return this.tryGetRuleContext(0, ExecRunChildContext);
	}
	public execStoreChild(): ExecStoreChildContext[];
	public execStoreChild(i: number): ExecStoreChildContext;
	public execStoreChild(i?: number): ExecStoreChildContext | ExecStoreChildContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExecStoreChildContext);
		} else {
			return this.getRuleContext(i, ExecStoreChildContext);
		}
	}
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.EXEC, 0); }
	public execChild(): ExecChildContext[];
	public execChild(i: number): ExecChildContext;
	public execChild(i?: number): ExecChildContext | ExecChildContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExecChildContext);
		} else {
			return this.getRuleContext(i, ExecChildContext);
		}
	}
	constructor(ctx: ExecStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecWithRunOrChild) {
			listener.enterExecWithRunOrChild(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecWithRunOrChild) {
			listener.exitExecWithRunOrChild(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecWithRunOrChild) {
			return visitor.visitExecWithRunOrChild(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecWithoutRunOrChildContext extends ExecStatementContext {
	public EXEC(): TerminalNode { return this.getToken(JustMCFParser.EXEC, 0); }
	public execChild(): ExecChildContext[];
	public execChild(i: number): ExecChildContext;
	public execChild(i?: number): ExecChildContext | ExecChildContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExecChildContext);
		} else {
			return this.getRuleContext(i, ExecChildContext);
		}
	}
	constructor(ctx: ExecStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecWithoutRunOrChild) {
			listener.enterExecWithoutRunOrChild(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecWithoutRunOrChild) {
			listener.exitExecWithoutRunOrChild(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecWithoutRunOrChild) {
			return visitor.visitExecWithoutRunOrChild(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecStoreChildContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_execStoreChild; }
	public copyFrom(ctx: ExecStoreChildContext): void {
		super.copyFrom(ctx);
	}
}
export class ExecStoreResultScoreContext extends ExecStoreChildContext {
	public scbIdentifier(): ScbIdentifierContext {
		return this.getRuleContext(0, ScbIdentifierContext);
	}
	public STORE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STORE, 0); }
	public RESULT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.RESULT, 0); }
	constructor(ctx: ExecStoreChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecStoreResultScore) {
			listener.enterExecStoreResultScore(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecStoreResultScore) {
			listener.exitExecStoreResultScore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecStoreResultScore) {
			return visitor.visitExecStoreResultScore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecStoreSuccessScoreContext extends ExecStoreChildContext {
	public scbIdentifier(): ScbIdentifierContext {
		return this.getRuleContext(0, ScbIdentifierContext);
	}
	public STORE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STORE, 0); }
	public SUCCESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SUCCESS, 0); }
	constructor(ctx: ExecStoreChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecStoreSuccessScore) {
			listener.enterExecStoreSuccessScore(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecStoreSuccessScore) {
			listener.exitExecStoreSuccessScore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecStoreSuccessScore) {
			return visitor.visitExecStoreSuccessScore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecStoreResultDataContext extends ExecStoreChildContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public STORE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STORE, 0); }
	public numberType(): NumberTypeContext | undefined {
		return this.tryGetRuleContext(0, NumberTypeContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public RESULT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.RESULT, 0); }
	constructor(ctx: ExecStoreChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecStoreResultData) {
			listener.enterExecStoreResultData(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecStoreResultData) {
			listener.exitExecStoreResultData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecStoreResultData) {
			return visitor.visitExecStoreResultData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecStoreSuccessDataContext extends ExecStoreChildContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public numberType(): NumberTypeContext | undefined {
		return this.tryGetRuleContext(0, NumberTypeContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public STORE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STORE, 0); }
	public SUCCESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SUCCESS, 0); }
	constructor(ctx: ExecStoreChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecStoreSuccessData) {
			listener.enterExecStoreSuccessData(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecStoreSuccessData) {
			listener.exitExecStoreSuccessData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecStoreSuccessData) {
			return visitor.visitExecStoreSuccessData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecStoreResultBossbarContext extends ExecStoreChildContext {
	public _value!: Token;
	public bossbarIdentifier(): BossbarIdentifierContext {
		return this.getRuleContext(0, BossbarIdentifierContext);
	}
	public STORE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STORE, 0); }
	public RESULT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.RESULT, 0); }
	public VALUE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.VALUE, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MAX, 0); }
	constructor(ctx: ExecStoreChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecStoreResultBossbar) {
			listener.enterExecStoreResultBossbar(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecStoreResultBossbar) {
			listener.exitExecStoreResultBossbar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecStoreResultBossbar) {
			return visitor.visitExecStoreResultBossbar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecStoreSuccessBossbarContext extends ExecStoreChildContext {
	public _value!: Token;
	public bossbarIdentifier(): BossbarIdentifierContext {
		return this.getRuleContext(0, BossbarIdentifierContext);
	}
	public STORE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STORE, 0); }
	public SUCCESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SUCCESS, 0); }
	public VALUE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.VALUE, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MAX, 0); }
	constructor(ctx: ExecStoreChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecStoreSuccessBossbar) {
			listener.enterExecStoreSuccessBossbar(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecStoreSuccessBossbar) {
			listener.exitExecStoreSuccessBossbar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecStoreSuccessBossbar) {
			return visitor.visitExecStoreSuccessBossbar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecRunChildContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_execRunChild; }
	public copyFrom(ctx: ExecRunChildContext): void {
		super.copyFrom(ctx);
	}
}
export class ExecDirectRunContext extends ExecRunChildContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public RUN(): TerminalNode { return this.getToken(JustMCFParser.RUN, 0); }
	constructor(ctx: ExecRunChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecDirectRun) {
			listener.enterExecDirectRun(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecDirectRun) {
			listener.exitExecDirectRun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecDirectRun) {
			return visitor.visitExecDirectRun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecNamedRunContext extends ExecRunChildContext {
	public funcStatement(): FuncStatementContext {
		return this.getRuleContext(0, FuncStatementContext);
	}
	public RUN(): TerminalNode { return this.getToken(JustMCFParser.RUN, 0); }
	constructor(ctx: ExecRunChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecNamedRun) {
			listener.enterExecNamedRun(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecNamedRun) {
			listener.exitExecNamedRun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecNamedRun) {
			return visitor.visitExecNamedRun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecAnonymousRunContext extends ExecRunChildContext {
	public RUN(): TerminalNode { return this.getToken(JustMCFParser.RUN, 0); }
	public FUNC(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FUNC, 0); }
	public statementInner(): StatementInnerContext[];
	public statementInner(i: number): StatementInnerContext;
	public statementInner(i?: number): StatementInnerContext | StatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementInnerContext);
		} else {
			return this.getRuleContext(i, StatementInnerContext);
		}
	}
	constructor(ctx: ExecRunChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecAnonymousRun) {
			listener.enterExecAnonymousRun(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecAnonymousRun) {
			listener.exitExecAnonymousRun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecAnonymousRun) {
			return visitor.visitExecAnonymousRun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecChildContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_execChild; }
	public copyFrom(ctx: ExecChildContext): void {
		super.copyFrom(ctx);
	}
}
export class ExecAlignContext extends ExecChildContext {
	public ALIGN(): TerminalNode { return this.getToken(JustMCFParser.ALIGN, 0); }
	public AcceptableName(): TerminalNode { return this.getToken(JustMCFParser.AcceptableName, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecAlign) {
			listener.enterExecAlign(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecAlign) {
			listener.exitExecAlign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecAlign) {
			return visitor.visitExecAlign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecAnchoredContext extends ExecChildContext {
	public _anchor!: Token;
	public ANCHORED(): TerminalNode { return this.getToken(JustMCFParser.ANCHORED, 0); }
	public EYES(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.EYES, 0); }
	public FEET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FEET, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecAnchored) {
			listener.enterExecAnchored(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecAnchored) {
			listener.exitExecAnchored(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecAnchored) {
			return visitor.visitExecAnchored(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecInContext extends ExecChildContext {
	public IN(): TerminalNode { return this.getToken(JustMCFParser.IN, 0); }
	public nameSpaceDim(): NameSpaceDimContext {
		return this.getRuleContext(0, NameSpaceDimContext);
	}
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecIn) {
			listener.enterExecIn(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecIn) {
			listener.exitExecIn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecIn) {
			return visitor.visitExecIn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecAsContext extends ExecChildContext {
	public AS(): TerminalNode { return this.getToken(JustMCFParser.AS, 0); }
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecAs) {
			listener.enterExecAs(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecAs) {
			listener.exitExecAs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecAs) {
			return visitor.visitExecAs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecAtContext extends ExecChildContext {
	public AT(): TerminalNode { return this.getToken(JustMCFParser.AT, 0); }
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecAt) {
			listener.enterExecAt(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecAt) {
			listener.exitExecAt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecAt) {
			return visitor.visitExecAt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecFacingPosContext extends ExecChildContext {
	public FACING(): TerminalNode { return this.getToken(JustMCFParser.FACING, 0); }
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecFacingPos) {
			listener.enterExecFacingPos(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecFacingPos) {
			listener.exitExecFacingPos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecFacingPos) {
			return visitor.visitExecFacingPos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecFacingEntityContext extends ExecChildContext {
	public _anchor!: Token;
	public FACING(): TerminalNode { return this.getToken(JustMCFParser.FACING, 0); }
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public EYES(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.EYES, 0); }
	public FEET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FEET, 0); }
	public ENTITY(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ENTITY, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecFacingEntity) {
			listener.enterExecFacingEntity(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecFacingEntity) {
			listener.exitExecFacingEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecFacingEntity) {
			return visitor.visitExecFacingEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecPositionedPosContext extends ExecChildContext {
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public POSITIONED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.POSITIONED, 0); }
	public POS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.POS, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecPositionedPos) {
			listener.enterExecPositionedPos(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecPositionedPos) {
			listener.exitExecPositionedPos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecPositionedPos) {
			return visitor.visitExecPositionedPos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecPostionedAsContext extends ExecChildContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public POSITIONED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.POSITIONED, 0); }
	public POS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.POS, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.AS, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecPostionedAs) {
			listener.enterExecPostionedAs(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecPostionedAs) {
			listener.exitExecPostionedAs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecPostionedAs) {
			return visitor.visitExecPostionedAs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecRotatedPosContext extends ExecChildContext {
	public pos2Identifier(): Pos2IdentifierContext {
		return this.getRuleContext(0, Pos2IdentifierContext);
	}
	public ROTATED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ROTATED, 0); }
	public ROT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ROT, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecRotatedPos) {
			listener.enterExecRotatedPos(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecRotatedPos) {
			listener.exitExecRotatedPos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecRotatedPos) {
			return visitor.visitExecRotatedPos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecRotatedAsContext extends ExecChildContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public ROTATED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ROTATED, 0); }
	public ROT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ROT, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.AS, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecRotatedAs) {
			listener.enterExecRotatedAs(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecRotatedAs) {
			listener.exitExecRotatedAs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecRotatedAs) {
			return visitor.visitExecRotatedAs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecIfEntityContext extends ExecChildContext {
	public _cond!: Token;
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public ENTITY(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ENTITY, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.IF, 0); }
	public UNLESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.UNLESS, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecIfEntity) {
			listener.enterExecIfEntity(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecIfEntity) {
			listener.exitExecIfEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecIfEntity) {
			return visitor.visitExecIfEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecIfScoreContext extends ExecChildContext {
	public _cond!: Token;
	public scbCoreIdentifier(): ScbCoreIdentifierContext[];
	public scbCoreIdentifier(i: number): ScbCoreIdentifierContext;
	public scbCoreIdentifier(i?: number): ScbCoreIdentifierContext | ScbCoreIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbCoreIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbCoreIdentifierContext);
		}
	}
	public CompareOperation(): TerminalNode { return this.getToken(JustMCFParser.CompareOperation, 0); }
	public SCORE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SCORE, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.IF, 0); }
	public UNLESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.UNLESS, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecIfScore) {
			listener.enterExecIfScore(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecIfScore) {
			listener.exitExecIfScore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecIfScore) {
			return visitor.visitExecIfScore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecIfScoreMatchesContext extends ExecChildContext {
	public _cond!: Token;
	public scbCoreIdentifier(): ScbCoreIdentifierContext {
		return this.getRuleContext(0, ScbCoreIdentifierContext);
	}
	public scbCompareNumber(): ScbCompareNumberContext | undefined {
		return this.tryGetRuleContext(0, ScbCompareNumberContext);
	}
	public SCORE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SCORE, 0); }
	public matchPart(): MatchPartContext | undefined {
		return this.tryGetRuleContext(0, MatchPartContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.IF, 0); }
	public UNLESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.UNLESS, 0); }
	public MATCHES(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MATCHES, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecIfScoreMatches) {
			listener.enterExecIfScoreMatches(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecIfScoreMatches) {
			listener.exitExecIfScoreMatches(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecIfScoreMatches) {
			return visitor.visitExecIfScoreMatches(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecIfBlockContext extends ExecChildContext {
	public _cond!: Token;
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public blockIdentifier(): BlockIdentifierContext {
		return this.getRuleContext(0, BlockIdentifierContext);
	}
	public BLOCK(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BLOCK, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.IF, 0); }
	public UNLESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.UNLESS, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecIfBlock) {
			listener.enterExecIfBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecIfBlock) {
			listener.exitExecIfBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecIfBlock) {
			return visitor.visitExecIfBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecIfBlocksContext extends ExecChildContext {
	public _cond!: Token;
	public _scan_mode!: Token;
	public pos3Identifier(): Pos3IdentifierContext[];
	public pos3Identifier(i: number): Pos3IdentifierContext;
	public pos3Identifier(i?: number): Pos3IdentifierContext | Pos3IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pos3IdentifierContext);
		} else {
			return this.getRuleContext(i, Pos3IdentifierContext);
		}
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ALL, 0); }
	public MASKED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MASKED, 0); }
	public BLOCKS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BLOCKS, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.IF, 0); }
	public UNLESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.UNLESS, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecIfBlocks) {
			listener.enterExecIfBlocks(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecIfBlocks) {
			listener.exitExecIfBlocks(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecIfBlocks) {
			return visitor.visitExecIfBlocks(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecIfDataContext extends ExecChildContext {
	public _cond!: Token;
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public DATA(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DATA, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.IF, 0); }
	public UNLESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.UNLESS, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecIfData) {
			listener.enterExecIfData(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecIfData) {
			listener.exitExecIfData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecIfData) {
			return visitor.visitExecIfData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecIfBiomeContext extends ExecChildContext {
	public _cond!: Token;
	public BIOME(): TerminalNode { return this.getToken(JustMCFParser.BIOME, 0); }
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public nameSpaceBiome(): NameSpaceBiomeContext {
		return this.getRuleContext(0, NameSpaceBiomeContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.IF, 0); }
	public UNLESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.UNLESS, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecIfBiome) {
			listener.enterExecIfBiome(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecIfBiome) {
			listener.exitExecIfBiome(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecIfBiome) {
			return visitor.visitExecIfBiome(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecPredicateContext extends ExecChildContext {
	public _cond!: Token;
	public nameSpacePredicate(): NameSpacePredicateContext {
		return this.getRuleContext(0, NameSpacePredicateContext);
	}
	public PREDICATE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.PREDICATE, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.IF, 0); }
	public UNLESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.UNLESS, 0); }
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecPredicate) {
			listener.enterExecPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecPredicate) {
			listener.exitExecPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecPredicate) {
			return visitor.visitExecPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecStoreContext extends ExecChildContext {
	public execStoreChild(): ExecStoreChildContext {
		return this.getRuleContext(0, ExecStoreChildContext);
	}
	constructor(ctx: ExecChildContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecStore) {
			listener.enterExecStore(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecStore) {
			listener.exitExecStore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecStore) {
			return visitor.visitExecStore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchPartContext extends ParserRuleContext {
	public NUMBER_INT(): TerminalNode[];
	public NUMBER_INT(i: number): TerminalNode;
	public NUMBER_INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER_INT);
		} else {
			return this.getToken(JustMCFParser.NUMBER_INT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_matchPart; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterMatchPart) {
			listener.enterMatchPart(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitMatchPart) {
			listener.exitMatchPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitMatchPart) {
			return visitor.visitMatchPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScbCompareNumberContext extends ParserRuleContext {
	public CompareOperation(): TerminalNode { return this.getToken(JustMCFParser.CompareOperation, 0); }
	public NUMBER_INT(): TerminalNode { return this.getToken(JustMCFParser.NUMBER_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_scbCompareNumber; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbCompareNumber) {
			listener.enterScbCompareNumber(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbCompareNumber) {
			listener.exitScbCompareNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbCompareNumber) {
			return visitor.visitScbCompareNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataIdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_dataIdentifier; }
	public copyFrom(ctx: DataIdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class DataStorageLocalContext extends DataIdentifierContext {
	public LOCAL(): TerminalNode { return this.getToken(JustMCFParser.LOCAL, 0); }
	public nbtPath(): NbtPathContext {
		return this.getRuleContext(0, NbtPathContext);
	}
	constructor(ctx: DataIdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataStorageLocal) {
			listener.enterDataStorageLocal(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataStorageLocal) {
			listener.exitDataStorageLocal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataStorageLocal) {
			return visitor.visitDataStorageLocal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataStorageContext extends DataIdentifierContext {
	public dataStorageIdentifier(): DataStorageIdentifierContext {
		return this.getRuleContext(0, DataStorageIdentifierContext);
	}
	constructor(ctx: DataIdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataStorage) {
			listener.enterDataStorage(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataStorage) {
			listener.exitDataStorage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataStorage) {
			return visitor.visitDataStorage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataStorageWithEnvContext extends DataIdentifierContext {
	public nbtPathWithoutCompound(): NbtPathWithoutCompoundContext {
		return this.getRuleContext(0, NbtPathWithoutCompoundContext);
	}
	constructor(ctx: DataIdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataStorageWithEnv) {
			listener.enterDataStorageWithEnv(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataStorageWithEnv) {
			listener.exitDataStorageWithEnv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataStorageWithEnv) {
			return visitor.visitDataStorageWithEnv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataEntityContext extends DataIdentifierContext {
	public dataEntityIdentifier(): DataEntityIdentifierContext {
		return this.getRuleContext(0, DataEntityIdentifierContext);
	}
	constructor(ctx: DataIdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataEntity) {
			listener.enterDataEntity(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataEntity) {
			listener.exitDataEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataEntity) {
			return visitor.visitDataEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataBlockContext extends DataIdentifierContext {
	public dataBlockIdentifier(): DataBlockIdentifierContext {
		return this.getRuleContext(0, DataBlockIdentifierContext);
	}
	constructor(ctx: DataIdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataBlock) {
			listener.enterDataBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataBlock) {
			listener.exitDataBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataBlock) {
			return visitor.visitDataBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataStorageIdentifierContext extends ParserRuleContext {
	public nameSpaceStorage(): NameSpaceStorageContext {
		return this.getRuleContext(0, NameSpaceStorageContext);
	}
	public nbtPath(): NbtPathContext {
		return this.getRuleContext(0, NbtPathContext);
	}
	public STORAGE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STORAGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_dataStorageIdentifier; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataStorageIdentifier) {
			listener.enterDataStorageIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataStorageIdentifier) {
			listener.exitDataStorageIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataStorageIdentifier) {
			return visitor.visitDataStorageIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataEntityIdentifierContext extends ParserRuleContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public nbtPath(): NbtPathContext {
		return this.getRuleContext(0, NbtPathContext);
	}
	public ENTITY(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ENTITY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_dataEntityIdentifier; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataEntityIdentifier) {
			listener.enterDataEntityIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataEntityIdentifier) {
			listener.exitDataEntityIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataEntityIdentifier) {
			return visitor.visitDataEntityIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataBlockIdentifierContext extends ParserRuleContext {
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public nbtPath(): NbtPathContext {
		return this.getRuleContext(0, NbtPathContext);
	}
	public BLOCK(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BLOCK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_dataBlockIdentifier; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataBlockIdentifier) {
			listener.enterDataBlockIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataBlockIdentifier) {
			listener.exitDataBlockIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataBlockIdentifier) {
			return visitor.visitDataBlockIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataMergeExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_dataMergeExpression; }
	public copyFrom(ctx: DataMergeExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DataMergeStorageContext extends DataMergeExpressionContext {
	public nameSpaceStorage(): NameSpaceStorageContext {
		return this.getRuleContext(0, NameSpaceStorageContext);
	}
	public nbt(): NbtContext {
		return this.getRuleContext(0, NbtContext);
	}
	constructor(ctx: DataMergeExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataMergeStorage) {
			listener.enterDataMergeStorage(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataMergeStorage) {
			listener.exitDataMergeStorage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataMergeStorage) {
			return visitor.visitDataMergeStorage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataMergeEntityContext extends DataMergeExpressionContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public nbt(): NbtContext {
		return this.getRuleContext(0, NbtContext);
	}
	constructor(ctx: DataMergeExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataMergeEntity) {
			listener.enterDataMergeEntity(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataMergeEntity) {
			listener.exitDataMergeEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataMergeEntity) {
			return visitor.visitDataMergeEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataMergeBlockContext extends DataMergeExpressionContext {
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public nbt(): NbtContext {
		return this.getRuleContext(0, NbtContext);
	}
	constructor(ctx: DataMergeExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataMergeBlock) {
			listener.enterDataMergeBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataMergeBlock) {
			listener.exitDataMergeBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataMergeBlock) {
			return visitor.visitDataMergeBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataOperationExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_dataOperationExpression; }
	public copyFrom(ctx: DataOperationExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DataGetContext extends DataOperationExpressionContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(ctx: DataOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataGet) {
			listener.enterDataGet(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataGet) {
			listener.exitDataGet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataGet) {
			return visitor.visitDataGet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataMergeContext extends DataOperationExpressionContext {
	public dataMergeExpression(): DataMergeExpressionContext {
		return this.getRuleContext(0, DataMergeExpressionContext);
	}
	constructor(ctx: DataOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataMerge) {
			listener.enterDataMerge(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataMerge) {
			listener.exitDataMerge(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataMerge) {
			return visitor.visitDataMerge(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataModifyMergeValueContext extends DataOperationExpressionContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public nbt(): NbtContext {
		return this.getRuleContext(0, NbtContext);
	}
	constructor(ctx: DataOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataModifyMergeValue) {
			listener.enterDataModifyMergeValue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataModifyMergeValue) {
			listener.exitDataModifyMergeValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataModifyMergeValue) {
			return visitor.visitDataModifyMergeValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataModifyMergeFromContext extends DataOperationExpressionContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public dataRightValue(): DataRightValueContext {
		return this.getRuleContext(0, DataRightValueContext);
	}
	constructor(ctx: DataOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataModifyMergeFrom) {
			listener.enterDataModifyMergeFrom(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataModifyMergeFrom) {
			listener.exitDataModifyMergeFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataModifyMergeFrom) {
			return visitor.visitDataModifyMergeFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataModifySetValueContext extends DataOperationExpressionContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public nbt(): NbtContext {
		return this.getRuleContext(0, NbtContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(ctx: DataOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataModifySetValue) {
			listener.enterDataModifySetValue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataModifySetValue) {
			listener.exitDataModifySetValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataModifySetValue) {
			return visitor.visitDataModifySetValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataModifySetFromContext extends DataOperationExpressionContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public dataRightValue(): DataRightValueContext {
		return this.getRuleContext(0, DataRightValueContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(ctx: DataOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataModifySetFrom) {
			listener.enterDataModifySetFrom(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataModifySetFrom) {
			listener.exitDataModifySetFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataModifySetFrom) {
			return visitor.visitDataModifySetFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataModifyAppendValueContext extends DataOperationExpressionContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public nbt(): NbtContext {
		return this.getRuleContext(0, NbtContext);
	}
	constructor(ctx: DataOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataModifyAppendValue) {
			listener.enterDataModifyAppendValue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataModifyAppendValue) {
			listener.exitDataModifyAppendValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataModifyAppendValue) {
			return visitor.visitDataModifyAppendValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataModifyAppendFromContext extends DataOperationExpressionContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public dataRightValue(): DataRightValueContext {
		return this.getRuleContext(0, DataRightValueContext);
	}
	constructor(ctx: DataOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataModifyAppendFrom) {
			listener.enterDataModifyAppendFrom(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataModifyAppendFrom) {
			listener.exitDataModifyAppendFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataModifyAppendFrom) {
			return visitor.visitDataModifyAppendFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataModifyPrependValueContext extends DataOperationExpressionContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public nbt(): NbtContext {
		return this.getRuleContext(0, NbtContext);
	}
	constructor(ctx: DataOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataModifyPrependValue) {
			listener.enterDataModifyPrependValue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataModifyPrependValue) {
			listener.exitDataModifyPrependValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataModifyPrependValue) {
			return visitor.visitDataModifyPrependValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataModifyPrependFromContext extends DataOperationExpressionContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public dataRightValue(): DataRightValueContext {
		return this.getRuleContext(0, DataRightValueContext);
	}
	constructor(ctx: DataOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataModifyPrependFrom) {
			listener.enterDataModifyPrependFrom(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataModifyPrependFrom) {
			listener.exitDataModifyPrependFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataModifyPrependFrom) {
			return visitor.visitDataModifyPrependFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataModifyInsertValueContext extends DataOperationExpressionContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public NUMBER_INT(): TerminalNode { return this.getToken(JustMCFParser.NUMBER_INT, 0); }
	public nbt(): NbtContext {
		return this.getRuleContext(0, NbtContext);
	}
	constructor(ctx: DataOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataModifyInsertValue) {
			listener.enterDataModifyInsertValue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataModifyInsertValue) {
			listener.exitDataModifyInsertValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataModifyInsertValue) {
			return visitor.visitDataModifyInsertValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataModifyInsertFromContext extends DataOperationExpressionContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public NUMBER_INT(): TerminalNode { return this.getToken(JustMCFParser.NUMBER_INT, 0); }
	public dataRightValue(): DataRightValueContext {
		return this.getRuleContext(0, DataRightValueContext);
	}
	constructor(ctx: DataOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataModifyInsertFrom) {
			listener.enterDataModifyInsertFrom(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataModifyInsertFrom) {
			listener.exitDataModifyInsertFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataModifyInsertFrom) {
			return visitor.visitDataModifyInsertFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataRemoveContext extends DataOperationExpressionContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public REMOVE(): TerminalNode { return this.getToken(JustMCFParser.REMOVE, 0); }
	constructor(ctx: DataOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataRemove) {
			listener.enterDataRemove(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataRemove) {
			listener.exitDataRemove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataRemove) {
			return visitor.visitDataRemove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataRightValueContext extends ParserRuleContext {
	public dataIdentifier(): DataIdentifierContext | undefined {
		return this.tryGetRuleContext(0, DataIdentifierContext);
	}
	public funcImproveRunExpression(): FuncImproveRunExpressionContext | undefined {
		return this.tryGetRuleContext(0, FuncImproveRunExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_dataRightValue; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataRightValue) {
			listener.enterDataRightValue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataRightValue) {
			listener.exitDataRightValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataRightValue) {
			return visitor.visitDataRightValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_dataStatement; }
	public copyFrom(ctx: DataStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DataSCompoundContext extends DataStatementContext {
	public DATA(): TerminalNode { return this.getToken(JustMCFParser.DATA, 0); }
	public dataOperationExpression(): DataOperationExpressionContext[];
	public dataOperationExpression(i: number): DataOperationExpressionContext;
	public dataOperationExpression(i?: number): DataOperationExpressionContext | DataOperationExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataOperationExpressionContext);
		} else {
			return this.getRuleContext(i, DataOperationExpressionContext);
		}
	}
	constructor(ctx: DataStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataSCompound) {
			listener.enterDataSCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataSCompound) {
			listener.exitDataSCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataSCompound) {
			return visitor.visitDataSCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataSIdentifierCompoundContext extends DataStatementContext {
	public DATA(): TerminalNode { return this.getToken(JustMCFParser.DATA, 0); }
	public nameSpaceStorage(): NameSpaceStorageContext {
		return this.getRuleContext(0, NameSpaceStorageContext);
	}
	public nbtPath(): NbtPathContext | undefined {
		return this.tryGetRuleContext(0, NbtPathContext);
	}
	public dataOperationExpression(): DataOperationExpressionContext[];
	public dataOperationExpression(i: number): DataOperationExpressionContext;
	public dataOperationExpression(i?: number): DataOperationExpressionContext | DataOperationExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataOperationExpressionContext);
		} else {
			return this.getRuleContext(i, DataOperationExpressionContext);
		}
	}
	constructor(ctx: DataStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataSIdentifierCompound) {
			listener.enterDataSIdentifierCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataSIdentifierCompound) {
			listener.exitDataSIdentifierCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataSIdentifierCompound) {
			return visitor.visitDataSIdentifierCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScbOperationExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_scbOperationExpression; }
	public copyFrom(ctx: ScbOperationExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ScbGetContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext {
		return this.getRuleContext(0, ScbCoreIdentifierContext);
	}
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbGet) {
			listener.enterScbGet(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbGet) {
			listener.exitScbGet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbGet) {
			return visitor.visitScbGet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbAddContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext {
		return this.getRuleContext(0, ScbCoreIdentifierContext);
	}
	public NUMBER_INT(): TerminalNode { return this.getToken(JustMCFParser.NUMBER_INT, 0); }
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbAdd) {
			listener.enterScbAdd(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbAdd) {
			listener.exitScbAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbAdd) {
			return visitor.visitScbAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbRemoveContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext {
		return this.getRuleContext(0, ScbCoreIdentifierContext);
	}
	public NUMBER_INT(): TerminalNode { return this.getToken(JustMCFParser.NUMBER_INT, 0); }
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbRemove) {
			listener.enterScbRemove(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbRemove) {
			listener.exitScbRemove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbRemove) {
			return visitor.visitScbRemove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbSetContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext {
		return this.getRuleContext(0, ScbCoreIdentifierContext);
	}
	public NUMBER_INT(): TerminalNode { return this.getToken(JustMCFParser.NUMBER_INT, 0); }
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbSet) {
			listener.enterScbSet(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbSet) {
			listener.exitScbSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbSet) {
			return visitor.visitScbSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbOptAddAssignContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext[];
	public scbCoreIdentifier(i: number): ScbCoreIdentifierContext;
	public scbCoreIdentifier(i?: number): ScbCoreIdentifierContext | ScbCoreIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbCoreIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbCoreIdentifierContext);
		}
	}
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbOptAddAssign) {
			listener.enterScbOptAddAssign(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbOptAddAssign) {
			listener.exitScbOptAddAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbOptAddAssign) {
			return visitor.visitScbOptAddAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbOptSubAssignContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext[];
	public scbCoreIdentifier(i: number): ScbCoreIdentifierContext;
	public scbCoreIdentifier(i?: number): ScbCoreIdentifierContext | ScbCoreIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbCoreIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbCoreIdentifierContext);
		}
	}
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbOptSubAssign) {
			listener.enterScbOptSubAssign(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbOptSubAssign) {
			listener.exitScbOptSubAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbOptSubAssign) {
			return visitor.visitScbOptSubAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbOptMulAssignContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext[];
	public scbCoreIdentifier(i: number): ScbCoreIdentifierContext;
	public scbCoreIdentifier(i?: number): ScbCoreIdentifierContext | ScbCoreIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbCoreIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbCoreIdentifierContext);
		}
	}
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbOptMulAssign) {
			listener.enterScbOptMulAssign(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbOptMulAssign) {
			listener.exitScbOptMulAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbOptMulAssign) {
			return visitor.visitScbOptMulAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbOptDivAssignContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext[];
	public scbCoreIdentifier(i: number): ScbCoreIdentifierContext;
	public scbCoreIdentifier(i?: number): ScbCoreIdentifierContext | ScbCoreIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbCoreIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbCoreIdentifierContext);
		}
	}
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbOptDivAssign) {
			listener.enterScbOptDivAssign(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbOptDivAssign) {
			listener.exitScbOptDivAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbOptDivAssign) {
			return visitor.visitScbOptDivAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbOptModAssignContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext[];
	public scbCoreIdentifier(i: number): ScbCoreIdentifierContext;
	public scbCoreIdentifier(i?: number): ScbCoreIdentifierContext | ScbCoreIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbCoreIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbCoreIdentifierContext);
		}
	}
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbOptModAssign) {
			listener.enterScbOptModAssign(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbOptModAssign) {
			listener.exitScbOptModAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbOptModAssign) {
			return visitor.visitScbOptModAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbOptExcFuncContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext[];
	public scbCoreIdentifier(i: number): ScbCoreIdentifierContext;
	public scbCoreIdentifier(i?: number): ScbCoreIdentifierContext | ScbCoreIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbCoreIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbCoreIdentifierContext);
		}
	}
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbOptExcFunc) {
			listener.enterScbOptExcFunc(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbOptExcFunc) {
			listener.exitScbOptExcFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbOptExcFunc) {
			return visitor.visitScbOptExcFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbOptMinFuncContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext[];
	public scbCoreIdentifier(i: number): ScbCoreIdentifierContext;
	public scbCoreIdentifier(i?: number): ScbCoreIdentifierContext | ScbCoreIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbCoreIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbCoreIdentifierContext);
		}
	}
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbOptMinFunc) {
			listener.enterScbOptMinFunc(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbOptMinFunc) {
			listener.exitScbOptMinFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbOptMinFunc) {
			return visitor.visitScbOptMinFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbOptMaxFuncContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext[];
	public scbCoreIdentifier(i: number): ScbCoreIdentifierContext;
	public scbCoreIdentifier(i?: number): ScbCoreIdentifierContext | ScbCoreIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbCoreIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbCoreIdentifierContext);
		}
	}
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbOptMaxFunc) {
			listener.enterScbOptMaxFunc(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbOptMaxFunc) {
			listener.exitScbOptMaxFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbOptMaxFunc) {
			return visitor.visitScbOptMaxFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbOptAssignContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext[];
	public scbCoreIdentifier(i: number): ScbCoreIdentifierContext;
	public scbCoreIdentifier(i?: number): ScbCoreIdentifierContext | ScbCoreIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbCoreIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbCoreIdentifierContext);
		}
	}
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbOptAssign) {
			listener.enterScbOptAssign(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbOptAssign) {
			listener.exitScbOptAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbOptAssign) {
			return visitor.visitScbOptAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbResetContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext {
		return this.getRuleContext(0, ScbCoreIdentifierContext);
	}
	public RESET(): TerminalNode { return this.getToken(JustMCFParser.RESET, 0); }
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbReset) {
			listener.enterScbReset(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbReset) {
			listener.exitScbReset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbReset) {
			return visitor.visitScbReset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbEnableContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext {
		return this.getRuleContext(0, ScbCoreIdentifierContext);
	}
	public ENABLE(): TerminalNode { return this.getToken(JustMCFParser.ENABLE, 0); }
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbEnable) {
			listener.enterScbEnable(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbEnable) {
			listener.exitScbEnable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbEnable) {
			return visitor.visitScbEnable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbOptExpressionContext extends ScbOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext {
		return this.getRuleContext(0, ScbCoreIdentifierContext);
	}
	public scbSingleOperationExpression(): ScbSingleOperationExpressionContext {
		return this.getRuleContext(0, ScbSingleOperationExpressionContext);
	}
	constructor(ctx: ScbOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbOptExpression) {
			listener.enterScbOptExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbOptExpression) {
			listener.exitScbOptExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbOptExpression) {
			return visitor.visitScbOptExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScbSingleOperationExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_scbSingleOperationExpression; }
	public copyFrom(ctx: ScbSingleOperationExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ScbFuncExpressionContext extends ScbSingleOperationExpressionContext {
	public _op!: Token;
	public scbSingleOperationExpression(): ScbSingleOperationExpressionContext[];
	public scbSingleOperationExpression(i: number): ScbSingleOperationExpressionContext;
	public scbSingleOperationExpression(i?: number): ScbSingleOperationExpressionContext | ScbSingleOperationExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbSingleOperationExpressionContext);
		} else {
			return this.getRuleContext(i, ScbSingleOperationExpressionContext);
		}
	}
	constructor(ctx: ScbSingleOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbFuncExpression) {
			listener.enterScbFuncExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbFuncExpression) {
			listener.exitScbFuncExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbFuncExpression) {
			return visitor.visitScbFuncExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbOptMulDivModExpressionContext extends ScbSingleOperationExpressionContext {
	public _op!: Token;
	public scbSingleOperationExpression(): ScbSingleOperationExpressionContext[];
	public scbSingleOperationExpression(i: number): ScbSingleOperationExpressionContext;
	public scbSingleOperationExpression(i?: number): ScbSingleOperationExpressionContext | ScbSingleOperationExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbSingleOperationExpressionContext);
		} else {
			return this.getRuleContext(i, ScbSingleOperationExpressionContext);
		}
	}
	constructor(ctx: ScbSingleOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbOptMulDivModExpression) {
			listener.enterScbOptMulDivModExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbOptMulDivModExpression) {
			listener.exitScbOptMulDivModExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbOptMulDivModExpression) {
			return visitor.visitScbOptMulDivModExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbOptAddSubExpressionContext extends ScbSingleOperationExpressionContext {
	public _op!: Token;
	public scbSingleOperationExpression(): ScbSingleOperationExpressionContext[];
	public scbSingleOperationExpression(i: number): ScbSingleOperationExpressionContext;
	public scbSingleOperationExpression(i?: number): ScbSingleOperationExpressionContext | ScbSingleOperationExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbSingleOperationExpressionContext);
		} else {
			return this.getRuleContext(i, ScbSingleOperationExpressionContext);
		}
	}
	constructor(ctx: ScbSingleOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbOptAddSubExpression) {
			listener.enterScbOptAddSubExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbOptAddSubExpression) {
			listener.exitScbOptAddSubExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbOptAddSubExpression) {
			return visitor.visitScbOptAddSubExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbTempNumberExpressionContext extends ScbSingleOperationExpressionContext {
	public NUMBER_INT(): TerminalNode { return this.getToken(JustMCFParser.NUMBER_INT, 0); }
	constructor(ctx: ScbSingleOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbTempNumberExpression) {
			listener.enterScbTempNumberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbTempNumberExpression) {
			listener.exitScbTempNumberExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbTempNumberExpression) {
			return visitor.visitScbTempNumberExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbIdExpressionContext extends ScbSingleOperationExpressionContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext {
		return this.getRuleContext(0, ScbCoreIdentifierContext);
	}
	constructor(ctx: ScbSingleOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbIdExpression) {
			listener.enterScbIdExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbIdExpression) {
			listener.exitScbIdExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbIdExpression) {
			return visitor.visitScbIdExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbParenExpressionContext extends ScbSingleOperationExpressionContext {
	public scbSingleOperationExpression(): ScbSingleOperationExpressionContext {
		return this.getRuleContext(0, ScbSingleOperationExpressionContext);
	}
	constructor(ctx: ScbSingleOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbParenExpression) {
			listener.enterScbParenExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbParenExpression) {
			listener.exitScbParenExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbParenExpression) {
			return visitor.visitScbParenExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScbCoreIdentifierContext extends ParserRuleContext {
	public nbtName(): NbtNameContext {
		return this.getRuleContext(0, NbtNameContext);
	}
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_scbCoreIdentifier; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbCoreIdentifier) {
			listener.enterScbCoreIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbCoreIdentifier) {
			listener.exitScbCoreIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbCoreIdentifier) {
			return visitor.visitScbCoreIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScbIdentifierContext extends ParserRuleContext {
	public scbCoreIdentifier(): ScbCoreIdentifierContext {
		return this.getRuleContext(0, ScbCoreIdentifierContext);
	}
	public SCORE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_scbIdentifier; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbIdentifier) {
			listener.enterScbIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbIdentifier) {
			listener.exitScbIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbIdentifier) {
			return visitor.visitScbIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScbPlayerStatementContext extends ParserRuleContext {
	public SCB(): TerminalNode { return this.getToken(JustMCFParser.SCB, 0); }
	public scbPlayerStatementInner(): ScbPlayerStatementInnerContext[];
	public scbPlayerStatementInner(i: number): ScbPlayerStatementInnerContext;
	public scbPlayerStatementInner(i?: number): ScbPlayerStatementInnerContext | ScbPlayerStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbPlayerStatementInnerContext);
		} else {
			return this.getRuleContext(i, ScbPlayerStatementInnerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_scbPlayerStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbPlayerStatement) {
			listener.enterScbPlayerStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbPlayerStatement) {
			listener.exitScbPlayerStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbPlayerStatement) {
			return visitor.visitScbPlayerStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScbPlayerStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_scbPlayerStatementInner; }
	public copyFrom(ctx: ScbPlayerStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class ScbPlayerSIScbOperationExpressionContext extends ScbPlayerStatementInnerContext {
	public scbOperationExpression(): ScbOperationExpressionContext {
		return this.getRuleContext(0, ScbOperationExpressionContext);
	}
	constructor(ctx: ScbPlayerStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbPlayerSIScbOperationExpression) {
			listener.enterScbPlayerSIScbOperationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbPlayerSIScbOperationExpression) {
			listener.exitScbPlayerSIScbOperationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbPlayerSIScbOperationExpression) {
			return visitor.visitScbPlayerSIScbOperationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbPlayerSIScbListContext extends ScbPlayerStatementInnerContext {
	public LIST(): TerminalNode { return this.getToken(JustMCFParser.LIST, 0); }
	public selector(): SelectorContext | undefined {
		return this.tryGetRuleContext(0, SelectorContext);
	}
	constructor(ctx: ScbPlayerStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbPlayerSIScbList) {
			listener.enterScbPlayerSIScbList(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbPlayerSIScbList) {
			listener.exitScbPlayerSIScbList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbPlayerSIScbList) {
			return visitor.visitScbPlayerSIScbList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScbObjectiveStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_scbObjectiveStatement; }
	public copyFrom(ctx: ScbObjectiveStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ScbObjSDeclareWithNameContext extends ScbObjectiveStatementContext {
	public _display!: JsonContext;
	public SCB(): TerminalNode { return this.getToken(JustMCFParser.SCB, 0); }
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public json(): JsonContext {
		return this.getRuleContext(0, JsonContext);
	}
	public criterion(): CriterionContext | undefined {
		return this.tryGetRuleContext(0, CriterionContext);
	}
	public scbStatementInner(): ScbStatementInnerContext[];
	public scbStatementInner(i: number): ScbStatementInnerContext;
	public scbStatementInner(i?: number): ScbStatementInnerContext | ScbStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbStatementInnerContext);
		} else {
			return this.getRuleContext(i, ScbStatementInnerContext);
		}
	}
	constructor(ctx: ScbObjectiveStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbObjSDeclareWithName) {
			listener.enterScbObjSDeclareWithName(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbObjSDeclareWithName) {
			listener.exitScbObjSDeclareWithName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbObjSDeclareWithName) {
			return visitor.visitScbObjSDeclareWithName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbObjSDeclareSingleContext extends ScbObjectiveStatementContext {
	public SCB(): TerminalNode { return this.getToken(JustMCFParser.SCB, 0); }
	public criterion(): CriterionContext {
		return this.getRuleContext(0, CriterionContext);
	}
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	constructor(ctx: ScbObjectiveStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbObjSDeclareSingle) {
			listener.enterScbObjSDeclareSingle(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbObjSDeclareSingle) {
			listener.exitScbObjSDeclareSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbObjSDeclareSingle) {
			return visitor.visitScbObjSDeclareSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbObjSDeclareDefaultContext extends ScbObjectiveStatementContext {
	public SCB(): TerminalNode { return this.getToken(JustMCFParser.SCB, 0); }
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public DEFAULT(): TerminalNode { return this.getToken(JustMCFParser.DEFAULT, 0); }
	public criterion(): CriterionContext | undefined {
		return this.tryGetRuleContext(0, CriterionContext);
	}
	public scbStatementInner(): ScbStatementInnerContext[];
	public scbStatementInner(i: number): ScbStatementInnerContext;
	public scbStatementInner(i?: number): ScbStatementInnerContext | ScbStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbStatementInnerContext);
		} else {
			return this.getRuleContext(i, ScbStatementInnerContext);
		}
	}
	constructor(ctx: ScbObjectiveStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbObjSDeclareDefault) {
			listener.enterScbObjSDeclareDefault(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbObjSDeclareDefault) {
			listener.exitScbObjSDeclareDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbObjSDeclareDefault) {
			return visitor.visitScbObjSDeclareDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbObjSOperationContext extends ScbObjectiveStatementContext {
	public SCB(): TerminalNode { return this.getToken(JustMCFParser.SCB, 0); }
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public scbStatementInner(): ScbStatementInnerContext[];
	public scbStatementInner(i: number): ScbStatementInnerContext;
	public scbStatementInner(i?: number): ScbStatementInnerContext | ScbStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbStatementInnerContext);
		} else {
			return this.getRuleContext(i, ScbStatementInnerContext);
		}
	}
	constructor(ctx: ScbObjectiveStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbObjSOperation) {
			listener.enterScbObjSOperation(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbObjSOperation) {
			listener.exitScbObjSOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbObjSOperation) {
			return visitor.visitScbObjSOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScbStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_scbStatementInner; }
	public copyFrom(ctx: ScbStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class ScbSIRemoveContext extends ScbStatementInnerContext {
	public REMOVE(): TerminalNode { return this.getToken(JustMCFParser.REMOVE, 0); }
	constructor(ctx: ScbStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbSIRemove) {
			listener.enterScbSIRemove(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbSIRemove) {
			listener.exitScbSIRemove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbSIRemove) {
			return visitor.visitScbSIRemove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbSIDisplaynameContext extends ScbStatementInnerContext {
	public DISPLAYNAME(): TerminalNode { return this.getToken(JustMCFParser.DISPLAYNAME, 0); }
	public json(): JsonContext {
		return this.getRuleContext(0, JsonContext);
	}
	constructor(ctx: ScbStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbSIDisplayname) {
			listener.enterScbSIDisplayname(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbSIDisplayname) {
			listener.exitScbSIDisplayname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbSIDisplayname) {
			return visitor.visitScbSIDisplayname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbSIRendertypeContext extends ScbStatementInnerContext {
	public _type!: Token;
	public RENDERTYPE(): TerminalNode { return this.getToken(JustMCFParser.RENDERTYPE, 0); }
	public HEARTS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.HEARTS, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.INTEGER, 0); }
	constructor(ctx: ScbStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbSIRendertype) {
			listener.enterScbSIRendertype(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbSIRendertype) {
			listener.exitScbSIRendertype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbSIRendertype) {
			return visitor.visitScbSIRendertype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScbSIDisplayContext extends ScbStatementInnerContext {
	public DISPLAY(): TerminalNode { return this.getToken(JustMCFParser.DISPLAY, 0); }
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	constructor(ctx: ScbStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbSIDisplay) {
			listener.enterScbSIDisplay(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbSIDisplay) {
			listener.exitScbSIDisplay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbSIDisplay) {
			return visitor.visitScbSIDisplay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BossbarStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_bossbarStatement; }
	public copyFrom(ctx: BossbarStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class BossbarSDeclareContext extends BossbarStatementContext {
	public BOSSBAR(): TerminalNode { return this.getToken(JustMCFParser.BOSSBAR, 0); }
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
	}
	public json(): JsonContext {
		return this.getRuleContext(0, JsonContext);
	}
	public bossbarStatementInner(): BossbarStatementInnerContext[];
	public bossbarStatementInner(i: number): BossbarStatementInnerContext;
	public bossbarStatementInner(i?: number): BossbarStatementInnerContext | BossbarStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BossbarStatementInnerContext);
		} else {
			return this.getRuleContext(i, BossbarStatementInnerContext);
		}
	}
	constructor(ctx: BossbarStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarSDeclare) {
			listener.enterBossbarSDeclare(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarSDeclare) {
			listener.exitBossbarSDeclare(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarSDeclare) {
			return visitor.visitBossbarSDeclare(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BossbarSOperationContext extends BossbarStatementContext {
	public BOSSBAR(): TerminalNode { return this.getToken(JustMCFParser.BOSSBAR, 0); }
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
	}
	public bossbarStatementInner(): BossbarStatementInnerContext[];
	public bossbarStatementInner(i: number): BossbarStatementInnerContext;
	public bossbarStatementInner(i?: number): BossbarStatementInnerContext | BossbarStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BossbarStatementInnerContext);
		} else {
			return this.getRuleContext(i, BossbarStatementInnerContext);
		}
	}
	constructor(ctx: BossbarStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarSOperation) {
			listener.enterBossbarSOperation(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarSOperation) {
			listener.exitBossbarSOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarSOperation) {
			return visitor.visitBossbarSOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BossbarStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_bossbarStatementInner; }
	public copyFrom(ctx: BossbarStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class BossbarSIGetContext extends BossbarStatementInnerContext {
	public _type!: Token;
	public MAX(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MAX, 0); }
	public PLAYER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.PLAYER, 0); }
	public VALUE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.VALUE, 0); }
	public VISIBLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.VISIBLE, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.GET, 0); }
	constructor(ctx: BossbarStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarSIGet) {
			listener.enterBossbarSIGet(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarSIGet) {
			listener.exitBossbarSIGet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarSIGet) {
			return visitor.visitBossbarSIGet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BossbarSIRemoveContext extends BossbarStatementInnerContext {
	public REMOVE(): TerminalNode { return this.getToken(JustMCFParser.REMOVE, 0); }
	constructor(ctx: BossbarStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarSIRemove) {
			listener.enterBossbarSIRemove(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarSIRemove) {
			listener.exitBossbarSIRemove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarSIRemove) {
			return visitor.visitBossbarSIRemove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BossbarSISetColorContext extends BossbarStatementInnerContext {
	public _color!: Token;
	public COLOR(): TerminalNode { return this.getToken(JustMCFParser.COLOR, 0); }
	public BLUE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BLUE, 0); }
	public GREEN(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.GREEN, 0); }
	public PINK(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.PINK, 0); }
	public PURPLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.PURPLE, 0); }
	public RED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.RED, 0); }
	public WHITE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.WHITE, 0); }
	public YELLOW(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.YELLOW, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SET, 0); }
	constructor(ctx: BossbarStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarSISetColor) {
			listener.enterBossbarSISetColor(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarSISetColor) {
			listener.exitBossbarSISetColor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarSISetColor) {
			return visitor.visitBossbarSISetColor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BossbarSISetMaxContext extends BossbarStatementInnerContext {
	public MAX(): TerminalNode { return this.getToken(JustMCFParser.MAX, 0); }
	public NUMBER_INT(): TerminalNode { return this.getToken(JustMCFParser.NUMBER_INT, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SET, 0); }
	constructor(ctx: BossbarStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarSISetMax) {
			listener.enterBossbarSISetMax(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarSISetMax) {
			listener.exitBossbarSISetMax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarSISetMax) {
			return visitor.visitBossbarSISetMax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BossbarSISetNameContext extends BossbarStatementInnerContext {
	public NAME(): TerminalNode { return this.getToken(JustMCFParser.NAME, 0); }
	public json(): JsonContext {
		return this.getRuleContext(0, JsonContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SET, 0); }
	constructor(ctx: BossbarStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarSISetName) {
			listener.enterBossbarSISetName(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarSISetName) {
			listener.exitBossbarSISetName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarSISetName) {
			return visitor.visitBossbarSISetName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BossbarSISetPlayerContext extends BossbarStatementInnerContext {
	public PLAYERS(): TerminalNode { return this.getToken(JustMCFParser.PLAYERS, 0); }
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SET, 0); }
	constructor(ctx: BossbarStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarSISetPlayer) {
			listener.enterBossbarSISetPlayer(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarSISetPlayer) {
			listener.exitBossbarSISetPlayer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarSISetPlayer) {
			return visitor.visitBossbarSISetPlayer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BossbarSISetPlayerNullContext extends BossbarStatementInnerContext {
	public PLAYERS(): TerminalNode { return this.getToken(JustMCFParser.PLAYERS, 0); }
	public DEFAULT(): TerminalNode { return this.getToken(JustMCFParser.DEFAULT, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SET, 0); }
	constructor(ctx: BossbarStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarSISetPlayerNull) {
			listener.enterBossbarSISetPlayerNull(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarSISetPlayerNull) {
			listener.exitBossbarSISetPlayerNull(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarSISetPlayerNull) {
			return visitor.visitBossbarSISetPlayerNull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BossbarSISetStyleContext extends BossbarStatementInnerContext {
	public _style!: Token;
	public STYLE(): TerminalNode { return this.getToken(JustMCFParser.STYLE, 0); }
	public NOTCHED_6(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NOTCHED_6, 0); }
	public NOTCHED_10(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NOTCHED_10, 0); }
	public NOTCHED_12(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NOTCHED_12, 0); }
	public NOTCHED_20(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NOTCHED_20, 0); }
	public PROGRESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.PROGRESS, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SET, 0); }
	constructor(ctx: BossbarStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarSISetStyle) {
			listener.enterBossbarSISetStyle(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarSISetStyle) {
			listener.exitBossbarSISetStyle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarSISetStyle) {
			return visitor.visitBossbarSISetStyle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BossbarSISetValueContext extends BossbarStatementInnerContext {
	public VALUE(): TerminalNode { return this.getToken(JustMCFParser.VALUE, 0); }
	public NUMBER_INT(): TerminalNode { return this.getToken(JustMCFParser.NUMBER_INT, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SET, 0); }
	constructor(ctx: BossbarStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarSISetValue) {
			listener.enterBossbarSISetValue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarSISetValue) {
			listener.exitBossbarSISetValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarSISetValue) {
			return visitor.visitBossbarSISetValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BossbarSISetVisibleContext extends BossbarStatementInnerContext {
	public VISIBLE(): TerminalNode { return this.getToken(JustMCFParser.VISIBLE, 0); }
	public boolValue(): BoolValueContext {
		return this.getRuleContext(0, BoolValueContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SET, 0); }
	constructor(ctx: BossbarStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarSISetVisible) {
			listener.enterBossbarSISetVisible(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarSISetVisible) {
			listener.exitBossbarSISetVisible(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarSISetVisible) {
			return visitor.visitBossbarSISetVisible(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BossbarOperationExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_bossbarOperationExpression; }
	public copyFrom(ctx: BossbarOperationExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class BossbarOpExprGetContext extends BossbarOperationExpressionContext {
	public _type!: Token;
	public bossbarIdentifier(): BossbarIdentifierContext {
		return this.getRuleContext(0, BossbarIdentifierContext);
	}
	public MAX(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MAX, 0); }
	public PLAYER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.PLAYER, 0); }
	public VALUE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.VALUE, 0); }
	public VISIBLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.VISIBLE, 0); }
	constructor(ctx: BossbarOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarOpExprGet) {
			listener.enterBossbarOpExprGet(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarOpExprGet) {
			listener.exitBossbarOpExprGet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarOpExprGet) {
			return visitor.visitBossbarOpExprGet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BossbarOpExprAssignValueContext extends BossbarOperationExpressionContext {
	public bossbarIdentifier(): BossbarIdentifierContext {
		return this.getRuleContext(0, BossbarIdentifierContext);
	}
	public NUMBER_INT(): TerminalNode { return this.getToken(JustMCFParser.NUMBER_INT, 0); }
	public VALUE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.VALUE, 0); }
	constructor(ctx: BossbarOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarOpExprAssignValue) {
			listener.enterBossbarOpExprAssignValue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarOpExprAssignValue) {
			listener.exitBossbarOpExprAssignValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarOpExprAssignValue) {
			return visitor.visitBossbarOpExprAssignValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BossbarOpExprAssignMaxContext extends BossbarOperationExpressionContext {
	public bossbarIdentifier(): BossbarIdentifierContext {
		return this.getRuleContext(0, BossbarIdentifierContext);
	}
	public MAX(): TerminalNode { return this.getToken(JustMCFParser.MAX, 0); }
	public NUMBER_INT(): TerminalNode { return this.getToken(JustMCFParser.NUMBER_INT, 0); }
	constructor(ctx: BossbarOperationExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarOpExprAssignMax) {
			listener.enterBossbarOpExprAssignMax(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarOpExprAssignMax) {
			listener.exitBossbarOpExprAssignMax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarOpExprAssignMax) {
			return visitor.visitBossbarOpExprAssignMax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BossbarIdentifierContext extends ParserRuleContext {
	public BOSSBAR(): TerminalNode { return this.getToken(JustMCFParser.BOSSBAR, 0); }
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_bossbarIdentifier; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBossbarIdentifier) {
			listener.enterBossbarIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBossbarIdentifier) {
			listener.exitBossbarIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBossbarIdentifier) {
			return visitor.visitBossbarIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TitleStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_titleStatement; }
	public copyFrom(ctx: TitleStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class TitleSCompoundContext extends TitleStatementContext {
	public TITLE(): TerminalNode { return this.getToken(JustMCFParser.TITLE, 0); }
	public titleStatementInner(): TitleStatementInnerContext[];
	public titleStatementInner(i: number): TitleStatementInnerContext;
	public titleStatementInner(i?: number): TitleStatementInnerContext | TitleStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TitleStatementInnerContext);
		} else {
			return this.getRuleContext(i, TitleStatementInnerContext);
		}
	}
	constructor(ctx: TitleStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTitleSCompound) {
			listener.enterTitleSCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTitleSCompound) {
			listener.exitTitleSCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTitleSCompound) {
			return visitor.visitTitleSCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TitleSSelectorCompoundContext extends TitleStatementContext {
	public TITLE(): TerminalNode { return this.getToken(JustMCFParser.TITLE, 0); }
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public titleSelectorStatementInner(): TitleSelectorStatementInnerContext[];
	public titleSelectorStatementInner(i: number): TitleSelectorStatementInnerContext;
	public titleSelectorStatementInner(i?: number): TitleSelectorStatementInnerContext | TitleSelectorStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TitleSelectorStatementInnerContext);
		} else {
			return this.getRuleContext(i, TitleSelectorStatementInnerContext);
		}
	}
	constructor(ctx: TitleStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTitleSSelectorCompound) {
			listener.enterTitleSSelectorCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTitleSSelectorCompound) {
			listener.exitTitleSSelectorCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTitleSSelectorCompound) {
			return visitor.visitTitleSSelectorCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TitleStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_titleStatementInner; }
	public copyFrom(ctx: TitleStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class TitleSISelectorSingleContext extends TitleStatementInnerContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public titleSelectorStatementInner(): TitleSelectorStatementInnerContext {
		return this.getRuleContext(0, TitleSelectorStatementInnerContext);
	}
	constructor(ctx: TitleStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTitleSISelectorSingle) {
			listener.enterTitleSISelectorSingle(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTitleSISelectorSingle) {
			listener.exitTitleSISelectorSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTitleSISelectorSingle) {
			return visitor.visitTitleSISelectorSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TitleSISelectorCompoundContext extends TitleStatementInnerContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public titleSelectorStatementInner(): TitleSelectorStatementInnerContext[];
	public titleSelectorStatementInner(i: number): TitleSelectorStatementInnerContext;
	public titleSelectorStatementInner(i?: number): TitleSelectorStatementInnerContext | TitleSelectorStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TitleSelectorStatementInnerContext);
		} else {
			return this.getRuleContext(i, TitleSelectorStatementInnerContext);
		}
	}
	constructor(ctx: TitleStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTitleSISelectorCompound) {
			listener.enterTitleSISelectorCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTitleSISelectorCompound) {
			listener.exitTitleSISelectorCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTitleSISelectorCompound) {
			return visitor.visitTitleSISelectorCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TitleSelectorStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_titleSelectorStatementInner; }
	public copyFrom(ctx: TitleSelectorStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class TitleSSIJsonContext extends TitleSelectorStatementInnerContext {
	public _pos!: Token;
	public json(): JsonContext {
		return this.getRuleContext(0, JsonContext);
	}
	public TITLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.TITLE, 0); }
	public SUBTITLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SUBTITLE, 0); }
	public ACTIONBAR(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ACTIONBAR, 0); }
	constructor(ctx: TitleSelectorStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTitleSSIJson) {
			listener.enterTitleSSIJson(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTitleSSIJson) {
			listener.exitTitleSSIJson(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTitleSSIJson) {
			return visitor.visitTitleSSIJson(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TitleSSIClearContext extends TitleSelectorStatementInnerContext {
	public CLEAR(): TerminalNode { return this.getToken(JustMCFParser.CLEAR, 0); }
	constructor(ctx: TitleSelectorStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTitleSSIClear) {
			listener.enterTitleSSIClear(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTitleSSIClear) {
			listener.exitTitleSSIClear(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTitleSSIClear) {
			return visitor.visitTitleSSIClear(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TitleSSIResetContext extends TitleSelectorStatementInnerContext {
	public RESET(): TerminalNode { return this.getToken(JustMCFParser.RESET, 0); }
	constructor(ctx: TitleSelectorStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTitleSSIReset) {
			listener.enterTitleSSIReset(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTitleSSIReset) {
			listener.exitTitleSSIReset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTitleSSIReset) {
			return visitor.visitTitleSSIReset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TitleSSITimesContext extends TitleSelectorStatementInnerContext {
	public TIMES(): TerminalNode { return this.getToken(JustMCFParser.TIMES, 0); }
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	constructor(ctx: TitleSelectorStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTitleSSITimes) {
			listener.enterTitleSSITimes(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTitleSSITimes) {
			listener.exitTitleSSITimes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTitleSSITimes) {
			return visitor.visitTitleSSITimes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TitleIndependentStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_titleIndependentStatementInner; }
	public copyFrom(ctx: TitleIndependentStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class TitleISIJsonContext extends TitleIndependentStatementInnerContext {
	public _pos!: Token;
	public json(): JsonContext {
		return this.getRuleContext(0, JsonContext);
	}
	public TITLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.TITLE, 0); }
	public SUBTITLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SUBTITLE, 0); }
	public ACTIONBAR(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ACTIONBAR, 0); }
	constructor(ctx: TitleIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTitleISIJson) {
			listener.enterTitleISIJson(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTitleISIJson) {
			listener.exitTitleISIJson(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTitleISIJson) {
			return visitor.visitTitleISIJson(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TitleISIClearContext extends TitleIndependentStatementInnerContext {
	public TITLE(): TerminalNode { return this.getToken(JustMCFParser.TITLE, 0); }
	public CLEAR(): TerminalNode { return this.getToken(JustMCFParser.CLEAR, 0); }
	constructor(ctx: TitleIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTitleISIClear) {
			listener.enterTitleISIClear(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTitleISIClear) {
			listener.exitTitleISIClear(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTitleISIClear) {
			return visitor.visitTitleISIClear(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TitleISIResetContext extends TitleIndependentStatementInnerContext {
	public TITLE(): TerminalNode { return this.getToken(JustMCFParser.TITLE, 0); }
	public RESET(): TerminalNode { return this.getToken(JustMCFParser.RESET, 0); }
	constructor(ctx: TitleIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTitleISIReset) {
			listener.enterTitleISIReset(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTitleISIReset) {
			listener.exitTitleISIReset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTitleISIReset) {
			return visitor.visitTitleISIReset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TitleISITimesContext extends TitleIndependentStatementInnerContext {
	public TITLE(): TerminalNode { return this.getToken(JustMCFParser.TITLE, 0); }
	public TIMES(): TerminalNode { return this.getToken(JustMCFParser.TIMES, 0); }
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	constructor(ctx: TitleIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTitleISITimes) {
			listener.enterTitleISITimes(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTitleISITimes) {
			listener.exitTitleISITimes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTitleISITimes) {
			return visitor.visitTitleISITimes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DisplayStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_displayStatement; }
	public copyFrom(ctx: DisplayStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DisplaySCompoundContext extends DisplayStatementContext {
	public DISPLAY(): TerminalNode { return this.getToken(JustMCFParser.DISPLAY, 0); }
	public displayStatementInner(): DisplayStatementInnerContext[];
	public displayStatementInner(i: number): DisplayStatementInnerContext;
	public displayStatementInner(i?: number): DisplayStatementInnerContext | DisplayStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DisplayStatementInnerContext);
		} else {
			return this.getRuleContext(i, DisplayStatementInnerContext);
		}
	}
	constructor(ctx: DisplayStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDisplaySCompound) {
			listener.enterDisplaySCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDisplaySCompound) {
			listener.exitDisplaySCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDisplaySCompound) {
			return visitor.visitDisplaySCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DisplaySSelectorCompoundContext extends DisplayStatementContext {
	public DISPLAY(): TerminalNode { return this.getToken(JustMCFParser.DISPLAY, 0); }
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public displayIndependentStatementInner(): DisplayIndependentStatementInnerContext[];
	public displayIndependentStatementInner(i: number): DisplayIndependentStatementInnerContext;
	public displayIndependentStatementInner(i?: number): DisplayIndependentStatementInnerContext | DisplayIndependentStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DisplayIndependentStatementInnerContext);
		} else {
			return this.getRuleContext(i, DisplayIndependentStatementInnerContext);
		}
	}
	constructor(ctx: DisplayStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDisplaySSelectorCompound) {
			listener.enterDisplaySSelectorCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDisplaySSelectorCompound) {
			listener.exitDisplaySSelectorCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDisplaySSelectorCompound) {
			return visitor.visitDisplaySSelectorCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DisplayStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_displayStatementInner; }
	public copyFrom(ctx: DisplayStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class DisplaySIScbContext extends DisplayStatementInnerContext {
	public scbObjectiveStatement(): ScbObjectiveStatementContext {
		return this.getRuleContext(0, ScbObjectiveStatementContext);
	}
	constructor(ctx: DisplayStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDisplaySIScb) {
			listener.enterDisplaySIScb(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDisplaySIScb) {
			listener.exitDisplaySIScb(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDisplaySIScb) {
			return visitor.visitDisplaySIScb(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DisplaySIBossbarContext extends DisplayStatementInnerContext {
	public bossbarStatement(): BossbarStatementContext {
		return this.getRuleContext(0, BossbarStatementContext);
	}
	constructor(ctx: DisplayStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDisplaySIBossbar) {
			listener.enterDisplaySIBossbar(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDisplaySIBossbar) {
			listener.exitDisplaySIBossbar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDisplaySIBossbar) {
			return visitor.visitDisplaySIBossbar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DisplaySISelectorSingleContext extends DisplayStatementInnerContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public displayIndependentStatementInner(): DisplayIndependentStatementInnerContext {
		return this.getRuleContext(0, DisplayIndependentStatementInnerContext);
	}
	constructor(ctx: DisplayStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDisplaySISelectorSingle) {
			listener.enterDisplaySISelectorSingle(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDisplaySISelectorSingle) {
			listener.exitDisplaySISelectorSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDisplaySISelectorSingle) {
			return visitor.visitDisplaySISelectorSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DisplaySISelectorCompoundContext extends DisplayStatementInnerContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public displayIndependentStatementInner(): DisplayIndependentStatementInnerContext[];
	public displayIndependentStatementInner(i: number): DisplayIndependentStatementInnerContext;
	public displayIndependentStatementInner(i?: number): DisplayIndependentStatementInnerContext | DisplayIndependentStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DisplayIndependentStatementInnerContext);
		} else {
			return this.getRuleContext(i, DisplayIndependentStatementInnerContext);
		}
	}
	constructor(ctx: DisplayStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDisplaySISelectorCompound) {
			listener.enterDisplaySISelectorCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDisplaySISelectorCompound) {
			listener.exitDisplaySISelectorCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDisplaySISelectorCompound) {
			return visitor.visitDisplaySISelectorCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DisplayIndependentStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_displayIndependentStatementInner; }
	public copyFrom(ctx: DisplayIndependentStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class DisplayISITitleSingleContext extends DisplayIndependentStatementInnerContext {
	public titleIndependentStatementInner(): TitleIndependentStatementInnerContext {
		return this.getRuleContext(0, TitleIndependentStatementInnerContext);
	}
	constructor(ctx: DisplayIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDisplayISITitleSingle) {
			listener.enterDisplayISITitleSingle(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDisplayISITitleSingle) {
			listener.exitDisplayISITitleSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDisplayISITitleSingle) {
			return visitor.visitDisplayISITitleSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DisplayISITitleCompoundContext extends DisplayIndependentStatementInnerContext {
	public TITLE(): TerminalNode { return this.getToken(JustMCFParser.TITLE, 0); }
	public titleSelectorStatementInner(): TitleSelectorStatementInnerContext[];
	public titleSelectorStatementInner(i: number): TitleSelectorStatementInnerContext;
	public titleSelectorStatementInner(i?: number): TitleSelectorStatementInnerContext | TitleSelectorStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TitleSelectorStatementInnerContext);
		} else {
			return this.getRuleContext(i, TitleSelectorStatementInnerContext);
		}
	}
	constructor(ctx: DisplayIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDisplayISITitleCompound) {
			listener.enterDisplayISITitleCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDisplayISITitleCompound) {
			listener.exitDisplayISITitleCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDisplayISITitleCompound) {
			return visitor.visitDisplayISITitleCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DisplayISITextContext extends DisplayIndependentStatementInnerContext {
	public TEXT(): TerminalNode { return this.getToken(JustMCFParser.TEXT, 0); }
	public json(): JsonContext {
		return this.getRuleContext(0, JsonContext);
	}
	constructor(ctx: DisplayIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDisplayISIText) {
			listener.enterDisplayISIText(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDisplayISIText) {
			listener.exitDisplayISIText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDisplayISIText) {
			return visitor.visitDisplayISIText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DisplayISIBossbarContext extends DisplayIndependentStatementInnerContext {
	public BOSSBAR(): TerminalNode { return this.getToken(JustMCFParser.BOSSBAR, 0); }
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
	}
	public json(): JsonContext {
		return this.getRuleContext(0, JsonContext);
	}
	constructor(ctx: DisplayIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDisplayISIBossbar) {
			listener.enterDisplayISIBossbar(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDisplayISIBossbar) {
			listener.exitDisplayISIBossbar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDisplayISIBossbar) {
			return visitor.visitDisplayISIBossbar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_itemStatement; }
	public copyFrom(ctx: ItemStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ItemSCompoundContext extends ItemStatementContext {
	public ITEM(): TerminalNode { return this.getToken(JustMCFParser.ITEM, 0); }
	public itemStatementInner(): ItemStatementInnerContext[];
	public itemStatementInner(i: number): ItemStatementInnerContext;
	public itemStatementInner(i?: number): ItemStatementInnerContext | ItemStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemStatementInnerContext);
		} else {
			return this.getRuleContext(i, ItemStatementInnerContext);
		}
	}
	constructor(ctx: ItemStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemSCompound) {
			listener.enterItemSCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemSCompound) {
			listener.exitItemSCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemSCompound) {
			return visitor.visitItemSCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ItemSSelectorCompoundContext extends ItemStatementContext {
	public ITEM(): TerminalNode { return this.getToken(JustMCFParser.ITEM, 0); }
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public itemSelectorStatementInner(): ItemSelectorStatementInnerContext[];
	public itemSelectorStatementInner(i: number): ItemSelectorStatementInnerContext;
	public itemSelectorStatementInner(i?: number): ItemSelectorStatementInnerContext | ItemSelectorStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemSelectorStatementInnerContext);
		} else {
			return this.getRuleContext(i, ItemSelectorStatementInnerContext);
		}
	}
	constructor(ctx: ItemStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemSSelectorCompound) {
			listener.enterItemSSelectorCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemSSelectorCompound) {
			listener.exitItemSSelectorCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemSSelectorCompound) {
			return visitor.visitItemSSelectorCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LootStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_lootStatement; }
	public copyFrom(ctx: LootStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class LootSCompoundContext extends LootStatementContext {
	public LOOT(): TerminalNode { return this.getToken(JustMCFParser.LOOT, 0); }
	public lootStatementInner(): LootStatementInnerContext[];
	public lootStatementInner(i: number): LootStatementInnerContext;
	public lootStatementInner(i?: number): LootStatementInnerContext | LootStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LootStatementInnerContext);
		} else {
			return this.getRuleContext(i, LootStatementInnerContext);
		}
	}
	constructor(ctx: LootStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSCompound) {
			listener.enterLootSCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSCompound) {
			listener.exitLootSCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSCompound) {
			return visitor.visitLootSCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LootSSelectorCompoundContext extends LootStatementContext {
	public LOOT(): TerminalNode { return this.getToken(JustMCFParser.LOOT, 0); }
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public lootSelectorStatementInner(): LootSelectorStatementInnerContext[];
	public lootSelectorStatementInner(i: number): LootSelectorStatementInnerContext;
	public lootSelectorStatementInner(i?: number): LootSelectorStatementInnerContext | LootSelectorStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LootSelectorStatementInnerContext);
		} else {
			return this.getRuleContext(i, LootSelectorStatementInnerContext);
		}
	}
	constructor(ctx: LootStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSSelectorCompound) {
			listener.enterLootSSelectorCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSSelectorCompound) {
			listener.exitLootSSelectorCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSSelectorCompound) {
			return visitor.visitLootSSelectorCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LootStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_lootStatementInner; }
	public copyFrom(ctx: LootStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class LootSIInsertContext extends LootStatementInnerContext {
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public lootSource(): LootSourceContext {
		return this.getRuleContext(0, LootSourceContext);
	}
	constructor(ctx: LootStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSIInsert) {
			listener.enterLootSIInsert(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSIInsert) {
			listener.exitLootSIInsert(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSIInsert) {
			return visitor.visitLootSIInsert(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LootSISpawnContext extends LootStatementInnerContext {
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public lootSource(): LootSourceContext {
		return this.getRuleContext(0, LootSourceContext);
	}
	constructor(ctx: LootStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSISpawn) {
			listener.enterLootSISpawn(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSISpawn) {
			listener.exitLootSISpawn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSISpawn) {
			return visitor.visitLootSISpawn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LootSIReplaceBlockContext extends LootStatementInnerContext {
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public lootIndependentStatementInnerReplaceEntity(): LootIndependentStatementInnerReplaceEntityContext {
		return this.getRuleContext(0, LootIndependentStatementInnerReplaceEntityContext);
	}
	constructor(ctx: LootStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSIReplaceBlock) {
			listener.enterLootSIReplaceBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSIReplaceBlock) {
			listener.exitLootSIReplaceBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSIReplaceBlock) {
			return visitor.visitLootSIReplaceBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LootSIGiveContext extends LootStatementInnerContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public lootIndependentStatementInnerGive(): LootIndependentStatementInnerGiveContext {
		return this.getRuleContext(0, LootIndependentStatementInnerGiveContext);
	}
	constructor(ctx: LootStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSIGive) {
			listener.enterLootSIGive(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSIGive) {
			listener.exitLootSIGive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSIGive) {
			return visitor.visitLootSIGive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LootSIReplaceEntityContext extends LootStatementInnerContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public lootIndependentStatementInnerReplaceEntity(): LootIndependentStatementInnerReplaceEntityContext {
		return this.getRuleContext(0, LootIndependentStatementInnerReplaceEntityContext);
	}
	constructor(ctx: LootStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSIReplaceEntity) {
			listener.enterLootSIReplaceEntity(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSIReplaceEntity) {
			listener.exitLootSIReplaceEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSIReplaceEntity) {
			return visitor.visitLootSIReplaceEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LootSISelectorNestContext extends LootStatementInnerContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public lootSelectorStatementInner(): LootSelectorStatementInnerContext[];
	public lootSelectorStatementInner(i: number): LootSelectorStatementInnerContext;
	public lootSelectorStatementInner(i?: number): LootSelectorStatementInnerContext | LootSelectorStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LootSelectorStatementInnerContext);
		} else {
			return this.getRuleContext(i, LootSelectorStatementInnerContext);
		}
	}
	constructor(ctx: LootStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSISelectorNest) {
			listener.enterLootSISelectorNest(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSISelectorNest) {
			listener.exitLootSISelectorNest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSISelectorNest) {
			return visitor.visitLootSISelectorNest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LootSelectorStatementInnerContext extends ParserRuleContext {
	public lootIndependentStatementInnerGive(): LootIndependentStatementInnerGiveContext | undefined {
		return this.tryGetRuleContext(0, LootIndependentStatementInnerGiveContext);
	}
	public lootIndependentStatementInnerReplaceEntity(): LootIndependentStatementInnerReplaceEntityContext | undefined {
		return this.tryGetRuleContext(0, LootIndependentStatementInnerReplaceEntityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_lootSelectorStatementInner; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSelectorStatementInner) {
			listener.enterLootSelectorStatementInner(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSelectorStatementInner) {
			listener.exitLootSelectorStatementInner(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSelectorStatementInner) {
			return visitor.visitLootSelectorStatementInner(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LootIndependentStatementInnerGiveContext extends ParserRuleContext {
	public lootSource(): LootSourceContext {
		return this.getRuleContext(0, LootSourceContext);
	}
	public GIVE(): TerminalNode { return this.getToken(JustMCFParser.GIVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_lootIndependentStatementInnerGive; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootIndependentStatementInnerGive) {
			listener.enterLootIndependentStatementInnerGive(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootIndependentStatementInnerGive) {
			listener.exitLootIndependentStatementInnerGive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootIndependentStatementInnerGive) {
			return visitor.visitLootIndependentStatementInnerGive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LootIndependentStatementInnerReplaceEntityContext extends ParserRuleContext {
	public item_slot(): Item_slotContext {
		return this.getRuleContext(0, Item_slotContext);
	}
	public lootSource(): LootSourceContext {
		return this.getRuleContext(0, LootSourceContext);
	}
	public NUMBER_INT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_lootIndependentStatementInnerReplaceEntity; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootIndependentStatementInnerReplaceEntity) {
			listener.enterLootIndependentStatementInnerReplaceEntity(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootIndependentStatementInnerReplaceEntity) {
			listener.exitLootIndependentStatementInnerReplaceEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootIndependentStatementInnerReplaceEntity) {
			return visitor.visitLootIndependentStatementInnerReplaceEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LootSourceContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_lootSource; }
	public copyFrom(ctx: LootSourceContext): void {
		super.copyFrom(ctx);
	}
}
export class LootSourceLootContext extends LootSourceContext {
	public LOOT(): TerminalNode { return this.getToken(JustMCFParser.LOOT, 0); }
	public nameSpaceLoot(): NameSpaceLootContext {
		return this.getRuleContext(0, NameSpaceLootContext);
	}
	constructor(ctx: LootSourceContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSourceLoot) {
			listener.enterLootSourceLoot(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSourceLoot) {
			listener.exitLootSourceLoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSourceLoot) {
			return visitor.visitLootSourceLoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LootSourceFishHandContext extends LootSourceContext {
	public _hand!: Token;
	public FISH(): TerminalNode { return this.getToken(JustMCFParser.FISH, 0); }
	public nameSpaceLoot(): NameSpaceLootContext {
		return this.getRuleContext(0, NameSpaceLootContext);
	}
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public MAINHAND(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MAINHAND, 0); }
	public OFFHAND(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.OFFHAND, 0); }
	constructor(ctx: LootSourceContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSourceFishHand) {
			listener.enterLootSourceFishHand(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSourceFishHand) {
			listener.exitLootSourceFishHand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSourceFishHand) {
			return visitor.visitLootSourceFishHand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LootSourceFishToolContext extends LootSourceContext {
	public FISH(): TerminalNode { return this.getToken(JustMCFParser.FISH, 0); }
	public nameSpaceLoot(): NameSpaceLootContext {
		return this.getRuleContext(0, NameSpaceLootContext);
	}
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public nameSpaceItem(): NameSpaceItemContext {
		return this.getRuleContext(0, NameSpaceItemContext);
	}
	constructor(ctx: LootSourceContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSourceFishTool) {
			listener.enterLootSourceFishTool(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSourceFishTool) {
			listener.exitLootSourceFishTool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSourceFishTool) {
			return visitor.visitLootSourceFishTool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LootSourceKillContext extends LootSourceContext {
	public KILL(): TerminalNode { return this.getToken(JustMCFParser.KILL, 0); }
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	constructor(ctx: LootSourceContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSourceKill) {
			listener.enterLootSourceKill(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSourceKill) {
			listener.exitLootSourceKill(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSourceKill) {
			return visitor.visitLootSourceKill(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LootSourceMineHandContext extends LootSourceContext {
	public _hand!: Token;
	public MINE(): TerminalNode { return this.getToken(JustMCFParser.MINE, 0); }
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public MAINHAND(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MAINHAND, 0); }
	public OFFHAND(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.OFFHAND, 0); }
	constructor(ctx: LootSourceContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSourceMineHand) {
			listener.enterLootSourceMineHand(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSourceMineHand) {
			listener.exitLootSourceMineHand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSourceMineHand) {
			return visitor.visitLootSourceMineHand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LootSourceMineToolContext extends LootSourceContext {
	public MINE(): TerminalNode { return this.getToken(JustMCFParser.MINE, 0); }
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public nameSpaceItem(): NameSpaceItemContext {
		return this.getRuleContext(0, NameSpaceItemContext);
	}
	constructor(ctx: LootSourceContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterLootSourceMineTool) {
			listener.enterLootSourceMineTool(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitLootSourceMineTool) {
			listener.exitLootSourceMineTool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitLootSourceMineTool) {
			return visitor.visitLootSourceMineTool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_itemStatementInner; }
	public copyFrom(ctx: ItemStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class ItemSIGiveAndClearContext extends ItemStatementInnerContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public giveAndClearIndependentStatementInner(): GiveAndClearIndependentStatementInnerContext {
		return this.getRuleContext(0, GiveAndClearIndependentStatementInnerContext);
	}
	constructor(ctx: ItemStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemSIGiveAndClear) {
			listener.enterItemSIGiveAndClear(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemSIGiveAndClear) {
			listener.exitItemSIGiveAndClear(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemSIGiveAndClear) {
			return visitor.visitItemSIGiveAndClear(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ItemSIEntityContext extends ItemStatementInnerContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public itemIndependentStatementInner(): ItemIndependentStatementInnerContext {
		return this.getRuleContext(0, ItemIndependentStatementInnerContext);
	}
	constructor(ctx: ItemStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemSIEntity) {
			listener.enterItemSIEntity(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemSIEntity) {
			listener.exitItemSIEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemSIEntity) {
			return visitor.visitItemSIEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ItemSIBlockContext extends ItemStatementInnerContext {
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public itemIndependentStatementInner(): ItemIndependentStatementInnerContext {
		return this.getRuleContext(0, ItemIndependentStatementInnerContext);
	}
	constructor(ctx: ItemStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemSIBlock) {
			listener.enterItemSIBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemSIBlock) {
			listener.exitItemSIBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemSIBlock) {
			return visitor.visitItemSIBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ItemSILootInnerContext extends ItemStatementInnerContext {
	public lootStatementInner(): LootStatementInnerContext {
		return this.getRuleContext(0, LootStatementInnerContext);
	}
	constructor(ctx: ItemStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemSILootInner) {
			listener.enterItemSILootInner(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemSILootInner) {
			listener.exitItemSILootInner(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemSILootInner) {
			return visitor.visitItemSILootInner(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ItemSISelectorNestContext extends ItemStatementInnerContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public itemSelectorStatementInner(): ItemSelectorStatementInnerContext[];
	public itemSelectorStatementInner(i: number): ItemSelectorStatementInnerContext;
	public itemSelectorStatementInner(i?: number): ItemSelectorStatementInnerContext | ItemSelectorStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemSelectorStatementInnerContext);
		} else {
			return this.getRuleContext(i, ItemSelectorStatementInnerContext);
		}
	}
	constructor(ctx: ItemStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemSISelectorNest) {
			listener.enterItemSISelectorNest(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemSISelectorNest) {
			listener.exitItemSISelectorNest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemSISelectorNest) {
			return visitor.visitItemSISelectorNest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemSelectorStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_itemSelectorStatementInner; }
	public copyFrom(ctx: ItemSelectorStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class ItemSSIGiveAndClearContext extends ItemSelectorStatementInnerContext {
	public giveAndClearIndependentStatementInner(): GiveAndClearIndependentStatementInnerContext {
		return this.getRuleContext(0, GiveAndClearIndependentStatementInnerContext);
	}
	constructor(ctx: ItemSelectorStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemSSIGiveAndClear) {
			listener.enterItemSSIGiveAndClear(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemSSIGiveAndClear) {
			listener.exitItemSSIGiveAndClear(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemSSIGiveAndClear) {
			return visitor.visitItemSSIGiveAndClear(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ItemSSIItemContext extends ItemSelectorStatementInnerContext {
	public itemIndependentStatementInner(): ItemIndependentStatementInnerContext {
		return this.getRuleContext(0, ItemIndependentStatementInnerContext);
	}
	constructor(ctx: ItemSelectorStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemSSIItem) {
			listener.enterItemSSIItem(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemSSIItem) {
			listener.exitItemSSIItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemSSIItem) {
			return visitor.visitItemSSIItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ItemSSILootInnerContext extends ItemSelectorStatementInnerContext {
	public lootSelectorStatementInner(): LootSelectorStatementInnerContext {
		return this.getRuleContext(0, LootSelectorStatementInnerContext);
	}
	constructor(ctx: ItemSelectorStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemSSILootInner) {
			listener.enterItemSSILootInner(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemSSILootInner) {
			listener.exitItemSSILootInner(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemSSILootInner) {
			return visitor.visitItemSSILootInner(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemIndependentStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_itemIndependentStatementInner; }
	public copyFrom(ctx: ItemIndependentStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class ItemISIReplaceWithContext extends ItemIndependentStatementInnerContext {
	public item_slot(): Item_slotContext {
		return this.getRuleContext(0, Item_slotContext);
	}
	public nameSpaceItem(): NameSpaceItemContext {
		return this.getRuleContext(0, NameSpaceItemContext);
	}
	public NUMBER_INT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER_INT, 0); }
	constructor(ctx: ItemIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemISIReplaceWith) {
			listener.enterItemISIReplaceWith(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemISIReplaceWith) {
			listener.exitItemISIReplaceWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemISIReplaceWith) {
			return visitor.visitItemISIReplaceWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ItemISIReplaceFromEntityContext extends ItemIndependentStatementInnerContext {
	public item_slot(): Item_slotContext[];
	public item_slot(i: number): Item_slotContext;
	public item_slot(i?: number): Item_slotContext | Item_slotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Item_slotContext);
		} else {
			return this.getRuleContext(i, Item_slotContext);
		}
	}
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public nameSpaceItemModifier(): NameSpaceItemModifierContext | undefined {
		return this.tryGetRuleContext(0, NameSpaceItemModifierContext);
	}
	constructor(ctx: ItemIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemISIReplaceFromEntity) {
			listener.enterItemISIReplaceFromEntity(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemISIReplaceFromEntity) {
			listener.exitItemISIReplaceFromEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemISIReplaceFromEntity) {
			return visitor.visitItemISIReplaceFromEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ItemISIReplaceFromBlockContext extends ItemIndependentStatementInnerContext {
	public item_slot(): Item_slotContext[];
	public item_slot(i: number): Item_slotContext;
	public item_slot(i?: number): Item_slotContext | Item_slotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Item_slotContext);
		} else {
			return this.getRuleContext(i, Item_slotContext);
		}
	}
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public nameSpaceItemModifier(): NameSpaceItemModifierContext | undefined {
		return this.tryGetRuleContext(0, NameSpaceItemModifierContext);
	}
	constructor(ctx: ItemIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemISIReplaceFromBlock) {
			listener.enterItemISIReplaceFromBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemISIReplaceFromBlock) {
			listener.exitItemISIReplaceFromBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemISIReplaceFromBlock) {
			return visitor.visitItemISIReplaceFromBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ItemISIModifyContext extends ItemIndependentStatementInnerContext {
	public item_slot(): Item_slotContext {
		return this.getRuleContext(0, Item_slotContext);
	}
	public nameSpaceItemModifier(): NameSpaceItemModifierContext {
		return this.getRuleContext(0, NameSpaceItemModifierContext);
	}
	constructor(ctx: ItemIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItemISIModify) {
			listener.enterItemISIModify(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItemISIModify) {
			listener.exitItemISIModify(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItemISIModify) {
			return visitor.visitItemISIModify(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GiveAndClearIndependentStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_giveAndClearIndependentStatementInner; }
	public copyFrom(ctx: GiveAndClearIndependentStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class GiveISIContext extends GiveAndClearIndependentStatementInnerContext {
	public nameSpaceItem(): NameSpaceItemContext {
		return this.getRuleContext(0, NameSpaceItemContext);
	}
	public GIVE(): TerminalNode { return this.getToken(JustMCFParser.GIVE, 0); }
	public NUMBER_INT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER_INT, 0); }
	constructor(ctx: GiveAndClearIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterGiveISI) {
			listener.enterGiveISI(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitGiveISI) {
			listener.exitGiveISI(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitGiveISI) {
			return visitor.visitGiveISI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClearISIContext extends GiveAndClearIndependentStatementInnerContext {
	public item_predicate(): Item_predicateContext {
		return this.getRuleContext(0, Item_predicateContext);
	}
	public CLEAR(): TerminalNode { return this.getToken(JustMCFParser.CLEAR, 0); }
	public NUMBER_INT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER_INT, 0); }
	constructor(ctx: GiveAndClearIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterClearISI) {
			listener.enterClearISI(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitClearISI) {
			listener.exitClearISI(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitClearISI) {
			return visitor.visitClearISI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttrStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_attrStatement; }
	public copyFrom(ctx: AttrStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class AttrSCompoundContext extends AttrStatementContext {
	public ATTR(): TerminalNode { return this.getToken(JustMCFParser.ATTR, 0); }
	public attrStatementInner(): AttrStatementInnerContext[];
	public attrStatementInner(i: number): AttrStatementInnerContext;
	public attrStatementInner(i?: number): AttrStatementInnerContext | AttrStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttrStatementInnerContext);
		} else {
			return this.getRuleContext(i, AttrStatementInnerContext);
		}
	}
	constructor(ctx: AttrStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterAttrSCompound) {
			listener.enterAttrSCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitAttrSCompound) {
			listener.exitAttrSCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitAttrSCompound) {
			return visitor.visitAttrSCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AttrSSelectorCompoundContext extends AttrStatementContext {
	public ATTR(): TerminalNode { return this.getToken(JustMCFParser.ATTR, 0); }
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public attrIndependentStatementInner(): AttrIndependentStatementInnerContext[];
	public attrIndependentStatementInner(i: number): AttrIndependentStatementInnerContext;
	public attrIndependentStatementInner(i?: number): AttrIndependentStatementInnerContext | AttrIndependentStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttrIndependentStatementInnerContext);
		} else {
			return this.getRuleContext(i, AttrIndependentStatementInnerContext);
		}
	}
	constructor(ctx: AttrStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterAttrSSelectorCompound) {
			listener.enterAttrSSelectorCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitAttrSSelectorCompound) {
			listener.exitAttrSSelectorCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitAttrSSelectorCompound) {
			return visitor.visitAttrSSelectorCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttrStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_attrStatementInner; }
	public copyFrom(ctx: AttrStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class AttrSISingleContext extends AttrStatementInnerContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public attrIndependentStatementInner(): AttrIndependentStatementInnerContext {
		return this.getRuleContext(0, AttrIndependentStatementInnerContext);
	}
	constructor(ctx: AttrStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterAttrSISingle) {
			listener.enterAttrSISingle(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitAttrSISingle) {
			listener.exitAttrSISingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitAttrSISingle) {
			return visitor.visitAttrSISingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AttrSISelectorCompoundContext extends AttrStatementInnerContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public attrIndependentStatementInner(): AttrIndependentStatementInnerContext[];
	public attrIndependentStatementInner(i: number): AttrIndependentStatementInnerContext;
	public attrIndependentStatementInner(i?: number): AttrIndependentStatementInnerContext | AttrIndependentStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttrIndependentStatementInnerContext);
		} else {
			return this.getRuleContext(i, AttrIndependentStatementInnerContext);
		}
	}
	constructor(ctx: AttrStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterAttrSISelectorCompound) {
			listener.enterAttrSISelectorCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitAttrSISelectorCompound) {
			listener.exitAttrSISelectorCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitAttrSISelectorCompound) {
			return visitor.visitAttrSISelectorCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttrIndependentStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_attrIndependentStatementInner; }
	public copyFrom(ctx: AttrIndependentStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class AttrISIGetContext extends AttrIndependentStatementInnerContext {
	public registerName(): RegisterNameContext {
		return this.getRuleContext(0, RegisterNameContext);
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ALL, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(ctx: AttrIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterAttrISIGet) {
			listener.enterAttrISIGet(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitAttrISIGet) {
			listener.exitAttrISIGet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitAttrISIGet) {
			return visitor.visitAttrISIGet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AttrISIGetBaseContext extends AttrIndependentStatementInnerContext {
	public registerName(): RegisterNameContext {
		return this.getRuleContext(0, RegisterNameContext);
	}
	public BASE(): TerminalNode { return this.getToken(JustMCFParser.BASE, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(ctx: AttrIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterAttrISIGetBase) {
			listener.enterAttrISIGetBase(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitAttrISIGetBase) {
			listener.exitAttrISIGetBase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitAttrISIGetBase) {
			return visitor.visitAttrISIGetBase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AttrISISetBaseContext extends AttrIndependentStatementInnerContext {
	public registerName(): RegisterNameContext {
		return this.getRuleContext(0, RegisterNameContext);
	}
	public BASE(): TerminalNode { return this.getToken(JustMCFParser.BASE, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(ctx: AttrIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterAttrISISetBase) {
			listener.enterAttrISISetBase(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitAttrISISetBase) {
			listener.exitAttrISISetBase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitAttrISISetBase) {
			return visitor.visitAttrISISetBase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AttrISIModifierAddContext extends AttrIndependentStatementInnerContext {
	public _op!: Token;
	public registerName(): RegisterNameContext {
		return this.getRuleContext(0, RegisterNameContext);
	}
	public UUID16_(): TerminalNode { return this.getToken(JustMCFParser.UUID16_, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(ctx: AttrIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterAttrISIModifierAdd) {
			listener.enterAttrISIModifierAdd(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitAttrISIModifierAdd) {
			listener.exitAttrISIModifierAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitAttrISIModifierAdd) {
			return visitor.visitAttrISIModifierAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AttrISIModifierRemoveContext extends AttrIndependentStatementInnerContext {
	public registerName(): RegisterNameContext {
		return this.getRuleContext(0, RegisterNameContext);
	}
	public UUID16_(): TerminalNode { return this.getToken(JustMCFParser.UUID16_, 0); }
	constructor(ctx: AttrIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterAttrISIModifierRemove) {
			listener.enterAttrISIModifierRemove(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitAttrISIModifierRemove) {
			listener.exitAttrISIModifierRemove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitAttrISIModifierRemove) {
			return visitor.visitAttrISIModifierRemove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AttrISIModifierGetContext extends AttrIndependentStatementInnerContext {
	public registerName(): RegisterNameContext {
		return this.getRuleContext(0, RegisterNameContext);
	}
	public UUID16_(): TerminalNode { return this.getToken(JustMCFParser.UUID16_, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(ctx: AttrIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterAttrISIModifierGet) {
			listener.enterAttrISIModifierGet(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitAttrISIModifierGet) {
			listener.exitAttrISIModifierGet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitAttrISIModifierGet) {
			return visitor.visitAttrISIModifierGet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_entityStatement; }
	public copyFrom(ctx: EntityStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class EntitySDeclarePlayerContext extends EntityStatementContext {
	public ENTITY(): TerminalNode { return this.getToken(JustMCFParser.ENTITY, 0); }
	public PLAYER(): TerminalNode { return this.getToken(JustMCFParser.PLAYER, 0); }
	public playerName(): PlayerNameContext[];
	public playerName(i: number): PlayerNameContext;
	public playerName(i?: number): PlayerNameContext | PlayerNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PlayerNameContext);
		} else {
			return this.getRuleContext(i, PlayerNameContext);
		}
	}
	constructor(ctx: EntityStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntitySDeclarePlayer) {
			listener.enterEntitySDeclarePlayer(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntitySDeclarePlayer) {
			listener.exitEntitySDeclarePlayer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntitySDeclarePlayer) {
			return visitor.visitEntitySDeclarePlayer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntitySDeclareContext extends EntityStatementContext {
	public _type!: NameSpaceEntityContext;
	public ENTITY(): TerminalNode { return this.getToken(JustMCFParser.ENTITY, 0); }
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public nameSpaceEntity(): NameSpaceEntityContext {
		return this.getRuleContext(0, NameSpaceEntityContext);
	}
	public nbt(): NbtContext | undefined {
		return this.tryGetRuleContext(0, NbtContext);
	}
	public entityDeclareStatementInner(): EntityDeclareStatementInnerContext[];
	public entityDeclareStatementInner(i: number): EntityDeclareStatementInnerContext;
	public entityDeclareStatementInner(i?: number): EntityDeclareStatementInnerContext | EntityDeclareStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EntityDeclareStatementInnerContext);
		} else {
			return this.getRuleContext(i, EntityDeclareStatementInnerContext);
		}
	}
	constructor(ctx: EntityStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntitySDeclare) {
			listener.enterEntitySDeclare(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntitySDeclare) {
			listener.exitEntitySDeclare(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntitySDeclare) {
			return visitor.visitEntitySDeclare(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntitySDeclareWithNameContext extends EntityStatementContext {
	public _type!: NameSpaceEntityContext;
	public ENTITY(): TerminalNode { return this.getToken(JustMCFParser.ENTITY, 0); }
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public nameSpaceEntity(): NameSpaceEntityContext {
		return this.getRuleContext(0, NameSpaceEntityContext);
	}
	public pos3Identifier(): Pos3IdentifierContext | undefined {
		return this.tryGetRuleContext(0, Pos3IdentifierContext);
	}
	public nbt(): NbtContext | undefined {
		return this.tryGetRuleContext(0, NbtContext);
	}
	public entityDeclareStatementInner(): EntityDeclareStatementInnerContext[];
	public entityDeclareStatementInner(i: number): EntityDeclareStatementInnerContext;
	public entityDeclareStatementInner(i?: number): EntityDeclareStatementInnerContext | EntityDeclareStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EntityDeclareStatementInnerContext);
		} else {
			return this.getRuleContext(i, EntityDeclareStatementInnerContext);
		}
	}
	public entityIndependentStatementInner(): EntityIndependentStatementInnerContext[];
	public entityIndependentStatementInner(i: number): EntityIndependentStatementInnerContext;
	public entityIndependentStatementInner(i?: number): EntityIndependentStatementInnerContext | EntityIndependentStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EntityIndependentStatementInnerContext);
		} else {
			return this.getRuleContext(i, EntityIndependentStatementInnerContext);
		}
	}
	constructor(ctx: EntityStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntitySDeclareWithName) {
			listener.enterEntitySDeclareWithName(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntitySDeclareWithName) {
			listener.exitEntitySDeclareWithName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntitySDeclareWithName) {
			return visitor.visitEntitySDeclareWithName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntitySCompoundContext extends EntityStatementContext {
	public ENTITY(): TerminalNode { return this.getToken(JustMCFParser.ENTITY, 0); }
	public entityStatementInner(): EntityStatementInnerContext[];
	public entityStatementInner(i: number): EntityStatementInnerContext;
	public entityStatementInner(i?: number): EntityStatementInnerContext | EntityStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EntityStatementInnerContext);
		} else {
			return this.getRuleContext(i, EntityStatementInnerContext);
		}
	}
	constructor(ctx: EntityStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntitySCompound) {
			listener.enterEntitySCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntitySCompound) {
			listener.exitEntitySCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntitySCompound) {
			return visitor.visitEntitySCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntitySSelectorCompoundContext extends EntityStatementContext {
	public ENTITY(): TerminalNode { return this.getToken(JustMCFParser.ENTITY, 0); }
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public entityIndependentStatementInner(): EntityIndependentStatementInnerContext[];
	public entityIndependentStatementInner(i: number): EntityIndependentStatementInnerContext;
	public entityIndependentStatementInner(i?: number): EntityIndependentStatementInnerContext | EntityIndependentStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EntityIndependentStatementInnerContext);
		} else {
			return this.getRuleContext(i, EntityIndependentStatementInnerContext);
		}
	}
	constructor(ctx: EntityStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntitySSelectorCompound) {
			listener.enterEntitySSelectorCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntitySSelectorCompound) {
			listener.exitEntitySSelectorCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntitySSelectorCompound) {
			return visitor.visitEntitySSelectorCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlayerNameContext extends ParserRuleContext {
	public _fake!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_playerName; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterPlayerName) {
			listener.enterPlayerName(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitPlayerName) {
			listener.exitPlayerName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitPlayerName) {
			return visitor.visitPlayerName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityDeclareStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_entityDeclareStatementInner; }
	public copyFrom(ctx: EntityDeclareStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class EntityDeclareSITagContext extends EntityDeclareStatementInnerContext {
	public TAG(): TerminalNode { return this.getToken(JustMCFParser.TAG, 0); }
	public acceptableName(): AcceptableNameContext[];
	public acceptableName(i: number): AcceptableNameContext;
	public acceptableName(i?: number): AcceptableNameContext | AcceptableNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AcceptableNameContext);
		} else {
			return this.getRuleContext(i, AcceptableNameContext);
		}
	}
	constructor(ctx: EntityDeclareStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityDeclareSITag) {
			listener.enterEntityDeclareSITag(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityDeclareSITag) {
			listener.exitEntityDeclareSITag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityDeclareSITag) {
			return visitor.visitEntityDeclareSITag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagIndependentStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_tagIndependentStatementInner; }
	public copyFrom(ctx: TagIndependentStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class TagISIAddContext extends TagIndependentStatementInnerContext {
	public TAG(): TerminalNode { return this.getToken(JustMCFParser.TAG, 0); }
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public ADD(): TerminalNode { return this.getToken(JustMCFParser.ADD, 0); }
	constructor(ctx: TagIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTagISIAdd) {
			listener.enterTagISIAdd(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTagISIAdd) {
			listener.exitTagISIAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTagISIAdd) {
			return visitor.visitTagISIAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TagISIRemoveContext extends TagIndependentStatementInnerContext {
	public TAG(): TerminalNode { return this.getToken(JustMCFParser.TAG, 0); }
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public REMOVE(): TerminalNode { return this.getToken(JustMCFParser.REMOVE, 0); }
	constructor(ctx: TagIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTagISIRemove) {
			listener.enterTagISIRemove(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTagISIRemove) {
			listener.exitTagISIRemove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTagISIRemove) {
			return visitor.visitTagISIRemove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TagISIListContext extends TagIndependentStatementInnerContext {
	public TAG(): TerminalNode { return this.getToken(JustMCFParser.TAG, 0); }
	public LIST(): TerminalNode { return this.getToken(JustMCFParser.LIST, 0); }
	constructor(ctx: TagIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTagISIList) {
			listener.enterTagISIList(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTagISIList) {
			listener.exitTagISIList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTagISIList) {
			return visitor.visitTagISIList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EffectIndependentStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_effectIndependentStatementInner; }
	public copyFrom(ctx: EffectIndependentStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class EffectISIClearContext extends EffectIndependentStatementInnerContext {
	public EFFECT(): TerminalNode { return this.getToken(JustMCFParser.EFFECT, 0); }
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public CLEAR(): TerminalNode { return this.getToken(JustMCFParser.CLEAR, 0); }
	constructor(ctx: EffectIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEffectISIClear) {
			listener.enterEffectISIClear(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEffectISIClear) {
			listener.exitEffectISIClear(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEffectISIClear) {
			return visitor.visitEffectISIClear(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EffectISIGiveContext extends EffectIndependentStatementInnerContext {
	public _second!: Token;
	public _amplifier!: Token;
	public EFFECT(): TerminalNode { return this.getToken(JustMCFParser.EFFECT, 0); }
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public GIVE(): TerminalNode { return this.getToken(JustMCFParser.GIVE, 0); }
	public boolValue(): BoolValueContext | undefined {
		return this.tryGetRuleContext(0, BoolValueContext);
	}
	public NUMBER_INT(): TerminalNode[];
	public NUMBER_INT(i: number): TerminalNode;
	public NUMBER_INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER_INT);
		} else {
			return this.getToken(JustMCFParser.NUMBER_INT, i);
		}
	}
	constructor(ctx: EffectIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEffectISIGive) {
			listener.enterEffectISIGive(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEffectISIGive) {
			listener.exitEffectISIGive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEffectISIGive) {
			return visitor.visitEffectISIGive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EffectISIGiveSpContext extends EffectIndependentStatementInnerContext {
	public _amplifier!: Token;
	public _second!: Token;
	public EFFECT(): TerminalNode { return this.getToken(JustMCFParser.EFFECT, 0); }
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public GIVE(): TerminalNode { return this.getToken(JustMCFParser.GIVE, 0); }
	public boolValue(): BoolValueContext | undefined {
		return this.tryGetRuleContext(0, BoolValueContext);
	}
	public NUMBER_INT(): TerminalNode[];
	public NUMBER_INT(i: number): TerminalNode;
	public NUMBER_INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER_INT);
		} else {
			return this.getToken(JustMCFParser.NUMBER_INT, i);
		}
	}
	constructor(ctx: EffectIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEffectISIGiveSp) {
			listener.enterEffectISIGiveSp(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEffectISIGiveSp) {
			listener.exitEffectISIGiveSp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEffectISIGiveSp) {
			return visitor.visitEffectISIGiveSp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EffectISIClearAllContext extends EffectIndependentStatementInnerContext {
	public EFFECT(): TerminalNode { return this.getToken(JustMCFParser.EFFECT, 0); }
	public CLEAR(): TerminalNode { return this.getToken(JustMCFParser.CLEAR, 0); }
	constructor(ctx: EffectIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEffectISIClearAll) {
			listener.enterEffectISIClearAll(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEffectISIClearAll) {
			listener.exitEffectISIClearAll(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEffectISIClearAll) {
			return visitor.visitEffectISIClearAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TpIndependentStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_tpIndependentStatementInner; }
	public copyFrom(ctx: TpIndependentStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class TpISIDestinationContext extends TpIndependentStatementInnerContext {
	public TP(): TerminalNode { return this.getToken(JustMCFParser.TP, 0); }
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	constructor(ctx: TpIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTpISIDestination) {
			listener.enterTpISIDestination(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTpISIDestination) {
			listener.exitTpISIDestination(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTpISIDestination) {
			return visitor.visitTpISIDestination(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TpISIPosContext extends TpIndependentStatementInnerContext {
	public TP(): TerminalNode { return this.getToken(JustMCFParser.TP, 0); }
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	constructor(ctx: TpIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTpISIPos) {
			listener.enterTpISIPos(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTpISIPos) {
			listener.exitTpISIPos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTpISIPos) {
			return visitor.visitTpISIPos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TpISIRotatedContext extends TpIndependentStatementInnerContext {
	public TP(): TerminalNode { return this.getToken(JustMCFParser.TP, 0); }
	public pos5Identifier(): Pos5IdentifierContext {
		return this.getRuleContext(0, Pos5IdentifierContext);
	}
	constructor(ctx: TpIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTpISIRotated) {
			listener.enterTpISIRotated(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTpISIRotated) {
			listener.exitTpISIRotated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTpISIRotated) {
			return visitor.visitTpISIRotated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TpISIRotatedDivContext extends TpIndependentStatementInnerContext {
	public TP(): TerminalNode { return this.getToken(JustMCFParser.TP, 0); }
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public pos2Identifier(): Pos2IdentifierContext {
		return this.getRuleContext(0, Pos2IdentifierContext);
	}
	constructor(ctx: TpIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTpISIRotatedDiv) {
			listener.enterTpISIRotatedDiv(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTpISIRotatedDiv) {
			listener.exitTpISIRotatedDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTpISIRotatedDiv) {
			return visitor.visitTpISIRotatedDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TpISIFacingContext extends TpIndependentStatementInnerContext {
	public TP(): TerminalNode { return this.getToken(JustMCFParser.TP, 0); }
	public pos3Identifier(): Pos3IdentifierContext[];
	public pos3Identifier(i: number): Pos3IdentifierContext;
	public pos3Identifier(i?: number): Pos3IdentifierContext | Pos3IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pos3IdentifierContext);
		} else {
			return this.getRuleContext(i, Pos3IdentifierContext);
		}
	}
	public FACING(): TerminalNode { return this.getToken(JustMCFParser.FACING, 0); }
	constructor(ctx: TpIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTpISIFacing) {
			listener.enterTpISIFacing(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTpISIFacing) {
			listener.exitTpISIFacing(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTpISIFacing) {
			return visitor.visitTpISIFacing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TpISIFacingEntityContext extends TpIndependentStatementInnerContext {
	public _anchor!: Token;
	public TP(): TerminalNode { return this.getToken(JustMCFParser.TP, 0); }
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public FACING(): TerminalNode { return this.getToken(JustMCFParser.FACING, 0); }
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public ENTITY(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ENTITY, 0); }
	public EYES(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.EYES, 0); }
	public FEET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FEET, 0); }
	constructor(ctx: TpIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTpISIFacingEntity) {
			listener.enterTpISIFacingEntity(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTpISIFacingEntity) {
			listener.exitTpISIFacingEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTpISIFacingEntity) {
			return visitor.visitTpISIFacingEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityIndependentStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_entityIndependentStatementInner; }
	public copyFrom(ctx: EntityIndependentStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class EntityISIGiveAndClearContext extends EntityIndependentStatementInnerContext {
	public giveAndClearIndependentStatementInner(): GiveAndClearIndependentStatementInnerContext {
		return this.getRuleContext(0, GiveAndClearIndependentStatementInnerContext);
	}
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISIGiveAndClear) {
			listener.enterEntityISIGiveAndClear(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISIGiveAndClear) {
			listener.exitEntityISIGiveAndClear(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISIGiveAndClear) {
			return visitor.visitEntityISIGiveAndClear(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISIKillContext extends EntityIndependentStatementInnerContext {
	public KILL(): TerminalNode { return this.getToken(JustMCFParser.KILL, 0); }
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISIKill) {
			listener.enterEntityISIKill(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISIKill) {
			listener.exitEntityISIKill(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISIKill) {
			return visitor.visitEntityISIKill(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISITagContext extends EntityIndependentStatementInnerContext {
	public tagIndependentStatementInner(): TagIndependentStatementInnerContext {
		return this.getRuleContext(0, TagIndependentStatementInnerContext);
	}
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISITag) {
			listener.enterEntityISITag(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISITag) {
			listener.exitEntityISITag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISITag) {
			return visitor.visitEntityISITag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISIEffectContext extends EntityIndependentStatementInnerContext {
	public effectIndependentStatementInner(): EffectIndependentStatementInnerContext {
		return this.getRuleContext(0, EffectIndependentStatementInnerContext);
	}
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISIEffect) {
			listener.enterEntityISIEffect(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISIEffect) {
			listener.exitEntityISIEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISIEffect) {
			return visitor.visitEntityISIEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISITpContext extends EntityIndependentStatementInnerContext {
	public tpIndependentStatementInner(): TpIndependentStatementInnerContext {
		return this.getRuleContext(0, TpIndependentStatementInnerContext);
	}
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISITp) {
			listener.enterEntityISITp(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISITp) {
			listener.exitEntityISITp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISITp) {
			return visitor.visitEntityISITp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISITitleCompoundContext extends EntityIndependentStatementInnerContext {
	public TITLE(): TerminalNode { return this.getToken(JustMCFParser.TITLE, 0); }
	public titleSelectorStatementInner(): TitleSelectorStatementInnerContext[];
	public titleSelectorStatementInner(i: number): TitleSelectorStatementInnerContext;
	public titleSelectorStatementInner(i?: number): TitleSelectorStatementInnerContext | TitleSelectorStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TitleSelectorStatementInnerContext);
		} else {
			return this.getRuleContext(i, TitleSelectorStatementInnerContext);
		}
	}
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISITitleCompound) {
			listener.enterEntityISITitleCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISITitleCompound) {
			listener.exitEntityISITitleCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISITitleCompound) {
			return visitor.visitEntityISITitleCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISIDisplayCompoundContext extends EntityIndependentStatementInnerContext {
	public DISPLAY(): TerminalNode { return this.getToken(JustMCFParser.DISPLAY, 0); }
	public displayIndependentStatementInner(): DisplayIndependentStatementInnerContext[];
	public displayIndependentStatementInner(i: number): DisplayIndependentStatementInnerContext;
	public displayIndependentStatementInner(i?: number): DisplayIndependentStatementInnerContext | DisplayIndependentStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DisplayIndependentStatementInnerContext);
		} else {
			return this.getRuleContext(i, DisplayIndependentStatementInnerContext);
		}
	}
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISIDisplayCompound) {
			listener.enterEntityISIDisplayCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISIDisplayCompound) {
			listener.exitEntityISIDisplayCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISIDisplayCompound) {
			return visitor.visitEntityISIDisplayCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISIDisplaySingleContext extends EntityIndependentStatementInnerContext {
	public displayIndependentStatementInner(): DisplayIndependentStatementInnerContext {
		return this.getRuleContext(0, DisplayIndependentStatementInnerContext);
	}
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISIDisplaySingle) {
			listener.enterEntityISIDisplaySingle(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISIDisplaySingle) {
			listener.exitEntityISIDisplaySingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISIDisplaySingle) {
			return visitor.visitEntityISIDisplaySingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISIItemSingleContext extends EntityIndependentStatementInnerContext {
	public ITEM(): TerminalNode { return this.getToken(JustMCFParser.ITEM, 0); }
	public itemIndependentStatementInner(): ItemIndependentStatementInnerContext {
		return this.getRuleContext(0, ItemIndependentStatementInnerContext);
	}
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISIItemSingle) {
			listener.enterEntityISIItemSingle(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISIItemSingle) {
			listener.exitEntityISIItemSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISIItemSingle) {
			return visitor.visitEntityISIItemSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISILootGiveSingleContext extends EntityIndependentStatementInnerContext {
	public lootIndependentStatementInnerGive(): LootIndependentStatementInnerGiveContext {
		return this.getRuleContext(0, LootIndependentStatementInnerGiveContext);
	}
	public LOOT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.LOOT, 0); }
	public ITEM(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ITEM, 0); }
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISILootGiveSingle) {
			listener.enterEntityISILootGiveSingle(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISILootGiveSingle) {
			listener.exitEntityISILootGiveSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISILootGiveSingle) {
			return visitor.visitEntityISILootGiveSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISILootSingleContext extends EntityIndependentStatementInnerContext {
	public lootIndependentStatementInnerReplaceEntity(): LootIndependentStatementInnerReplaceEntityContext {
		return this.getRuleContext(0, LootIndependentStatementInnerReplaceEntityContext);
	}
	public LOOT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.LOOT, 0); }
	public ITEM(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ITEM, 0); }
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISILootSingle) {
			listener.enterEntityISILootSingle(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISILootSingle) {
			listener.exitEntityISILootSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISILootSingle) {
			return visitor.visitEntityISILootSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISIItemCompoundContext extends EntityIndependentStatementInnerContext {
	public ITEM(): TerminalNode { return this.getToken(JustMCFParser.ITEM, 0); }
	public itemSelectorStatementInner(): ItemSelectorStatementInnerContext[];
	public itemSelectorStatementInner(i: number): ItemSelectorStatementInnerContext;
	public itemSelectorStatementInner(i?: number): ItemSelectorStatementInnerContext | ItemSelectorStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemSelectorStatementInnerContext);
		} else {
			return this.getRuleContext(i, ItemSelectorStatementInnerContext);
		}
	}
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISIItemCompound) {
			listener.enterEntityISIItemCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISIItemCompound) {
			listener.exitEntityISIItemCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISIItemCompound) {
			return visitor.visitEntityISIItemCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISILootCompoundContext extends EntityIndependentStatementInnerContext {
	public LOOT(): TerminalNode { return this.getToken(JustMCFParser.LOOT, 0); }
	public lootSelectorStatementInner(): LootSelectorStatementInnerContext[];
	public lootSelectorStatementInner(i: number): LootSelectorStatementInnerContext;
	public lootSelectorStatementInner(i?: number): LootSelectorStatementInnerContext | LootSelectorStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LootSelectorStatementInnerContext);
		} else {
			return this.getRuleContext(i, LootSelectorStatementInnerContext);
		}
	}
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISILootCompound) {
			listener.enterEntityISILootCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISILootCompound) {
			listener.exitEntityISILootCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISILootCompound) {
			return visitor.visitEntityISILootCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISIAttrSingleContext extends EntityIndependentStatementInnerContext {
	public ATTR(): TerminalNode { return this.getToken(JustMCFParser.ATTR, 0); }
	public attrIndependentStatementInner(): AttrIndependentStatementInnerContext {
		return this.getRuleContext(0, AttrIndependentStatementInnerContext);
	}
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISIAttrSingle) {
			listener.enterEntityISIAttrSingle(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISIAttrSingle) {
			listener.exitEntityISIAttrSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISIAttrSingle) {
			return visitor.visitEntityISIAttrSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISIAttrCompoundContext extends EntityIndependentStatementInnerContext {
	public ATTR(): TerminalNode { return this.getToken(JustMCFParser.ATTR, 0); }
	public attrIndependentStatementInner(): AttrIndependentStatementInnerContext[];
	public attrIndependentStatementInner(i: number): AttrIndependentStatementInnerContext;
	public attrIndependentStatementInner(i?: number): AttrIndependentStatementInnerContext | AttrIndependentStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttrIndependentStatementInnerContext);
		} else {
			return this.getRuleContext(i, AttrIndependentStatementInnerContext);
		}
	}
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISIAttrCompound) {
			listener.enterEntityISIAttrCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISIAttrCompound) {
			listener.exitEntityISIAttrCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISIAttrCompound) {
			return visitor.visitEntityISIAttrCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityISIExecContext extends EntityIndependentStatementInnerContext {
	public execStatement(): ExecStatementContext {
		return this.getRuleContext(0, ExecStatementContext);
	}
	constructor(ctx: EntityIndependentStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityISIExec) {
			listener.enterEntityISIExec(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityISIExec) {
			listener.exitEntityISIExec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityISIExec) {
			return visitor.visitEntityISIExec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_entityStatementInner; }
	public copyFrom(ctx: EntityStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class EntitySIEntityExpressionContext extends EntityStatementInnerContext {
	public entityExpression(): EntityExpressionContext {
		return this.getRuleContext(0, EntityExpressionContext);
	}
	constructor(ctx: EntityStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntitySIEntityExpression) {
			listener.enterEntitySIEntityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntitySIEntityExpression) {
			listener.exitEntitySIEntityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntitySIEntityExpression) {
			return visitor.visitEntitySIEntityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntitySISelectorCompoundContext extends EntityStatementInnerContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public entityIndependentStatementInner(): EntityIndependentStatementInnerContext[];
	public entityIndependentStatementInner(i: number): EntityIndependentStatementInnerContext;
	public entityIndependentStatementInner(i?: number): EntityIndependentStatementInnerContext | EntityIndependentStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EntityIndependentStatementInnerContext);
		} else {
			return this.getRuleContext(i, EntityIndependentStatementInnerContext);
		}
	}
	constructor(ctx: EntityStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntitySISelectorCompound) {
			listener.enterEntitySISelectorCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntitySISelectorCompound) {
			listener.exitEntitySISelectorCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntitySISelectorCompound) {
			return visitor.visitEntitySISelectorCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityExpressionContext extends ParserRuleContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public entityIndependentStatementInner(): EntityIndependentStatementInnerContext {
		return this.getRuleContext(0, EntityIndependentStatementInnerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_entityExpression; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterEntityExpression) {
			listener.enterEntityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEntityExpression) {
			listener.exitEntityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEntityExpression) {
			return visitor.visitEntityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public BLOCK(): TerminalNode { return this.getToken(JustMCFParser.BLOCK, 0); }
	public blockStatementInner(): BlockStatementInnerContext[];
	public blockStatementInner(i: number): BlockStatementInnerContext;
	public blockStatementInner(i?: number): BlockStatementInnerContext | BlockStatementInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementInnerContext);
		} else {
			return this.getRuleContext(i, BlockStatementInnerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementInnerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_blockStatementInner; }
	public copyFrom(ctx: BlockStatementInnerContext): void {
		super.copyFrom(ctx);
	}
}
export class BlockSISetblockContext extends BlockStatementInnerContext {
	public _mod!: Token;
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public blockIdentifier(): BlockIdentifierContext {
		return this.getRuleContext(0, BlockIdentifierContext);
	}
	public DESTROY(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DESTROY, 0); }
	public KEEP(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.KEEP, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.REPLACE, 0); }
	constructor(ctx: BlockStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlockSISetblock) {
			listener.enterBlockSISetblock(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlockSISetblock) {
			listener.exitBlockSISetblock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlockSISetblock) {
			return visitor.visitBlockSISetblock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockSIFillContext extends BlockStatementInnerContext {
	public _mod!: Token;
	public pos3Identifier(): Pos3IdentifierContext[];
	public pos3Identifier(i: number): Pos3IdentifierContext;
	public pos3Identifier(i?: number): Pos3IdentifierContext | Pos3IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pos3IdentifierContext);
		} else {
			return this.getRuleContext(i, Pos3IdentifierContext);
		}
	}
	public blockIdentifier(): BlockIdentifierContext {
		return this.getRuleContext(0, BlockIdentifierContext);
	}
	public DESTROY(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DESTROY, 0); }
	public HOLLOW(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.HOLLOW, 0); }
	public KEEP(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.KEEP, 0); }
	public OUTLINE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.OUTLINE, 0); }
	constructor(ctx: BlockStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlockSIFill) {
			listener.enterBlockSIFill(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlockSIFill) {
			listener.exitBlockSIFill(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlockSIFill) {
			return visitor.visitBlockSIFill(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockSIFillReplaceContext extends BlockStatementInnerContext {
	public pos3Identifier(): Pos3IdentifierContext[];
	public pos3Identifier(i: number): Pos3IdentifierContext;
	public pos3Identifier(i?: number): Pos3IdentifierContext | Pos3IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pos3IdentifierContext);
		} else {
			return this.getRuleContext(i, Pos3IdentifierContext);
		}
	}
	public blockIdentifier(): BlockIdentifierContext {
		return this.getRuleContext(0, BlockIdentifierContext);
	}
	public REPLACE(): TerminalNode { return this.getToken(JustMCFParser.REPLACE, 0); }
	public block_predicate(): Block_predicateContext {
		return this.getRuleContext(0, Block_predicateContext);
	}
	constructor(ctx: BlockStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlockSIFillReplace) {
			listener.enterBlockSIFillReplace(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlockSIFillReplace) {
			listener.exitBlockSIFillReplace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlockSIFillReplace) {
			return visitor.visitBlockSIFillReplace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockSICloneContext extends BlockStatementInnerContext {
	public _masked_mod!: Token;
	public _mod!: Token;
	public pos3Identifier(): Pos3IdentifierContext[];
	public pos3Identifier(i: number): Pos3IdentifierContext;
	public pos3Identifier(i?: number): Pos3IdentifierContext | Pos3IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pos3IdentifierContext);
		} else {
			return this.getRuleContext(i, Pos3IdentifierContext);
		}
	}
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.REPLACE, 0); }
	public MASKED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MASKED, 0); }
	public FORCE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FORCE, 0); }
	public MOVE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MOVE, 0); }
	public NORMAL(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NORMAL, 0); }
	constructor(ctx: BlockStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlockSIClone) {
			listener.enterBlockSIClone(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlockSIClone) {
			listener.exitBlockSIClone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlockSIClone) {
			return visitor.visitBlockSIClone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockSICloneFilteredContext extends BlockStatementInnerContext {
	public _mod!: Token;
	public pos3Identifier(): Pos3IdentifierContext[];
	public pos3Identifier(i: number): Pos3IdentifierContext;
	public pos3Identifier(i?: number): Pos3IdentifierContext | Pos3IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pos3IdentifierContext);
		} else {
			return this.getRuleContext(i, Pos3IdentifierContext);
		}
	}
	public FILTERED(): TerminalNode { return this.getToken(JustMCFParser.FILTERED, 0); }
	public block_predicate(): Block_predicateContext {
		return this.getRuleContext(0, Block_predicateContext);
	}
	public FORCE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FORCE, 0); }
	public MOVE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MOVE, 0); }
	public NORMAL(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NORMAL, 0); }
	constructor(ctx: BlockStatementInnerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlockSICloneFiltered) {
			listener.enterBlockSICloneFiltered(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlockSICloneFiltered) {
			listener.exitBlockSICloneFiltered(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlockSICloneFiltered) {
			return visitor.visitBlockSICloneFiltered(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_interfaceStatement; }
	public copyFrom(ctx: InterfaceStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class InterfaceSNamespaceContext extends InterfaceStatementContext {
	public INTERFACE(): TerminalNode { return this.getToken(JustMCFParser.INTERFACE, 0); }
	public nameSpaceStorage(): NameSpaceStorageContext {
		return this.getRuleContext(0, NameSpaceStorageContext);
	}
	public nbt(): NbtContext {
		return this.getRuleContext(0, NbtContext);
	}
	constructor(ctx: InterfaceStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterInterfaceSNamespace) {
			listener.enterInterfaceSNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitInterfaceSNamespace) {
			listener.exitInterfaceSNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitInterfaceSNamespace) {
			return visitor.visitInterfaceSNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InterfaceSIdentifierContext extends InterfaceStatementContext {
	public INTERFACE(): TerminalNode { return this.getToken(JustMCFParser.INTERFACE, 0); }
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public nbt(): NbtContext {
		return this.getRuleContext(0, NbtContext);
	}
	constructor(ctx: InterfaceStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterInterfaceSIdentifier) {
			listener.enterInterfaceSIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitInterfaceSIdentifier) {
			listener.exitInterfaceSIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitInterfaceSIdentifier) {
			return visitor.visitInterfaceSIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataAssignExistExpressionContext extends ParserRuleContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	public existExpression(): ExistExpressionContext {
		return this.getRuleContext(0, ExistExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_dataAssignExistExpression; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataAssignExistExpression) {
			listener.enterDataAssignExistExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataAssignExistExpression) {
			listener.exitDataAssignExistExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataAssignExistExpression) {
			return visitor.visitDataAssignExistExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExistExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_existExpression; }
	public copyFrom(ctx: ExistExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExistExpressionExecContext extends ExistExpressionContext {
	public execChild(): ExecChildContext[];
	public execChild(i: number): ExecChildContext;
	public execChild(i?: number): ExecChildContext | ExecChildContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExecChildContext);
		} else {
			return this.getRuleContext(i, ExecChildContext);
		}
	}
	constructor(ctx: ExistExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExistExpressionExec) {
			listener.enterExistExpressionExec(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExistExpressionExec) {
			listener.exitExistExpressionExec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExistExpressionExec) {
			return visitor.visitExistExpressionExec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistExpressionIdContext extends ExistExpressionContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	constructor(ctx: ExistExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExistExpressionId) {
			listener.enterExistExpressionId(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExistExpressionId) {
			listener.exitExistExpressionId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExistExpressionId) {
			return visitor.visitExistExpressionId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExisitExpressionFuncRunContext extends ExistExpressionContext {
	public funcImproveRunExpression(): FuncImproveRunExpressionContext {
		return this.getRuleContext(0, FuncImproveRunExpressionContext);
	}
	constructor(ctx: ExistExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExisitExpressionFuncRun) {
			listener.enterExisitExpressionFuncRun(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExisitExpressionFuncRun) {
			listener.exitExisitExpressionFuncRun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExisitExpressionFuncRun) {
			return visitor.visitExisitExpressionFuncRun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistExpressionTrueContext extends ExistExpressionContext {
	public TRUE(): TerminalNode { return this.getToken(JustMCFParser.TRUE, 0); }
	constructor(ctx: ExistExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExistExpressionTrue) {
			listener.enterExistExpressionTrue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExistExpressionTrue) {
			listener.exitExistExpressionTrue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExistExpressionTrue) {
			return visitor.visitExistExpressionTrue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistExpressionFalseContext extends ExistExpressionContext {
	public FALSE(): TerminalNode { return this.getToken(JustMCFParser.FALSE, 0); }
	constructor(ctx: ExistExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExistExpressionFalse) {
			listener.enterExistExpressionFalse(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExistExpressionFalse) {
			listener.exitExistExpressionFalse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExistExpressionFalse) {
			return visitor.visitExistExpressionFalse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistExpressionNotContext extends ExistExpressionContext {
	public existExpression(): ExistExpressionContext {
		return this.getRuleContext(0, ExistExpressionContext);
	}
	constructor(ctx: ExistExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExistExpressionNot) {
			listener.enterExistExpressionNot(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExistExpressionNot) {
			listener.exitExistExpressionNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExistExpressionNot) {
			return visitor.visitExistExpressionNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistExpressionBitAndContext extends ExistExpressionContext {
	public _op!: Token;
	public existExpression(): ExistExpressionContext[];
	public existExpression(i: number): ExistExpressionContext;
	public existExpression(i?: number): ExistExpressionContext | ExistExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExistExpressionContext);
		} else {
			return this.getRuleContext(i, ExistExpressionContext);
		}
	}
	constructor(ctx: ExistExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExistExpressionBitAnd) {
			listener.enterExistExpressionBitAnd(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExistExpressionBitAnd) {
			listener.exitExistExpressionBitAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExistExpressionBitAnd) {
			return visitor.visitExistExpressionBitAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistExpressionBitOrContext extends ExistExpressionContext {
	public _op!: Token;
	public existExpression(): ExistExpressionContext[];
	public existExpression(i: number): ExistExpressionContext;
	public existExpression(i?: number): ExistExpressionContext | ExistExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExistExpressionContext);
		} else {
			return this.getRuleContext(i, ExistExpressionContext);
		}
	}
	constructor(ctx: ExistExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExistExpressionBitOr) {
			listener.enterExistExpressionBitOr(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExistExpressionBitOr) {
			listener.exitExistExpressionBitOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExistExpressionBitOr) {
			return visitor.visitExistExpressionBitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistExpressionAndContext extends ExistExpressionContext {
	public _op!: Token;
	public existExpression(): ExistExpressionContext[];
	public existExpression(i: number): ExistExpressionContext;
	public existExpression(i?: number): ExistExpressionContext | ExistExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExistExpressionContext);
		} else {
			return this.getRuleContext(i, ExistExpressionContext);
		}
	}
	constructor(ctx: ExistExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExistExpressionAnd) {
			listener.enterExistExpressionAnd(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExistExpressionAnd) {
			listener.exitExistExpressionAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExistExpressionAnd) {
			return visitor.visitExistExpressionAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistExpressionOrContext extends ExistExpressionContext {
	public _op!: Token;
	public existExpression(): ExistExpressionContext[];
	public existExpression(i: number): ExistExpressionContext;
	public existExpression(i?: number): ExistExpressionContext | ExistExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExistExpressionContext);
		} else {
			return this.getRuleContext(i, ExistExpressionContext);
		}
	}
	constructor(ctx: ExistExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExistExpressionOr) {
			listener.enterExistExpressionOr(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExistExpressionOr) {
			listener.exitExistExpressionOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExistExpressionOr) {
			return visitor.visitExistExpressionOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistExpressionParenContext extends ExistExpressionContext {
	public existExpression(): ExistExpressionContext {
		return this.getRuleContext(0, ExistExpressionContext);
	}
	constructor(ctx: ExistExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExistExpressionParen) {
			listener.enterExistExpressionParen(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExistExpressionParen) {
			listener.exitExistExpressionParen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExistExpressionParen) {
			return visitor.visitExistExpressionParen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(JustMCFParser.IF, 0); }
	public existExpression(): ExistExpressionContext {
		return this.getRuleContext(0, ExistExpressionContext);
	}
	public execRunChild(): ExecRunChildContext {
		return this.getRuleContext(0, ExecRunChildContext);
	}
	public ifElseStatement(): IfElseStatementContext | undefined {
		return this.tryGetRuleContext(0, IfElseStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfElseStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_ifElseStatement; }
	public copyFrom(ctx: IfElseStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class IfElseExecContext extends IfElseStatementContext {
	public ELSE(): TerminalNode { return this.getToken(JustMCFParser.ELSE, 0); }
	public execRunChild(): ExecRunChildContext {
		return this.getRuleContext(0, ExecRunChildContext);
	}
	constructor(ctx: IfElseStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterIfElseExec) {
			listener.enterIfElseExec(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitIfElseExec) {
			listener.exitIfElseExec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitIfElseExec) {
			return visitor.visitIfElseExec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfElseSIfSContext extends IfElseStatementContext {
	public ELSE(): TerminalNode { return this.getToken(JustMCFParser.ELSE, 0); }
	public ifStatement(): IfStatementContext {
		return this.getRuleContext(0, IfStatementContext);
	}
	constructor(ctx: IfElseStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterIfElseSIfS) {
			listener.enterIfElseSIfS(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitIfElseSIfS) {
			listener.exitIfElseSIfS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitIfElseSIfS) {
			return visitor.visitIfElseSIfS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_whileStatement; }
	public copyFrom(ctx: WhileStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class WhileStatementExecContext extends WhileStatementContext {
	public WHILE(): TerminalNode { return this.getToken(JustMCFParser.WHILE, 0); }
	public execRunChild(): ExecRunChildContext {
		return this.getRuleContext(0, ExecRunChildContext);
	}
	public execChild(): ExecChildContext[];
	public execChild(i: number): ExecChildContext;
	public execChild(i?: number): ExecChildContext | ExecChildContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExecChildContext);
		} else {
			return this.getRuleContext(i, ExecChildContext);
		}
	}
	constructor(ctx: WhileStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterWhileStatementExec) {
			listener.enterWhileStatementExec(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitWhileStatementExec) {
			listener.exitWhileStatementExec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitWhileStatementExec) {
			return visitor.visitWhileStatementExec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStatementExistContext extends WhileStatementContext {
	public WHILE(): TerminalNode { return this.getToken(JustMCFParser.WHILE, 0); }
	public existExpression(): ExistExpressionContext {
		return this.getRuleContext(0, ExistExpressionContext);
	}
	public execRunChild(): ExecRunChildContext {
		return this.getRuleContext(0, ExecRunChildContext);
	}
	constructor(ctx: WhileStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterWhileStatementExist) {
			listener.enterWhileStatementExist(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitWhileStatementExist) {
			listener.exitWhileStatementExist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitWhileStatementExist) {
			return visitor.visitWhileStatementExist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(JustMCFParser.FOR, 0); }
	public dataOperationExpression(): DataOperationExpressionContext {
		return this.getRuleContext(0, DataOperationExpressionContext);
	}
	public execRunChild(): ExecRunChildContext {
		return this.getRuleContext(0, ExecRunChildContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtContext extends ParserRuleContext {
	public snbtValue(): SnbtValueContext {
		return this.getRuleContext(0, SnbtValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nbt; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNbt) {
			listener.enterNbt(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNbt) {
			listener.exitNbt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNbt) {
			return visitor.visitNbt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonContext extends ParserRuleContext {
	public jsonTextValue(): JsonTextValueContext {
		return this.getRuleContext(0, JsonTextValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_json; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterJson) {
			listener.enterJson(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitJson) {
			listener.exitJson(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitJson) {
			return visitor.visitJson(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtPathWithoutCompoundContext extends ParserRuleContext {
	public nbtName(): NbtNameContext {
		return this.getRuleContext(0, NbtNameContext);
	}
	public nbtCompound(): NbtCompoundContext | undefined {
		return this.tryGetRuleContext(0, NbtCompoundContext);
	}
	public NUMBER_INT(): TerminalNode[];
	public NUMBER_INT(i: number): TerminalNode;
	public NUMBER_INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER_INT);
		} else {
			return this.getToken(JustMCFParser.NUMBER_INT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nbtPathWithoutCompound; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNbtPathWithoutCompound) {
			listener.enterNbtPathWithoutCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNbtPathWithoutCompound) {
			listener.exitNbtPathWithoutCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNbtPathWithoutCompound) {
			return visitor.visitNbtPathWithoutCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtPathContext extends ParserRuleContext {
	public nbtName(): NbtNameContext | undefined {
		return this.tryGetRuleContext(0, NbtNameContext);
	}
	public nbtCompound(): NbtCompoundContext | undefined {
		return this.tryGetRuleContext(0, NbtCompoundContext);
	}
	public NUMBER_INT(): TerminalNode[];
	public NUMBER_INT(i: number): TerminalNode;
	public NUMBER_INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER_INT);
		} else {
			return this.getToken(JustMCFParser.NUMBER_INT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nbtPath; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNbtPath) {
			listener.enterNbtPath(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNbtPath) {
			listener.exitNbtPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNbtPath) {
			return visitor.visitNbtPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SnbtValueContext extends ParserRuleContext {
	public nbtPair(): NbtPairContext[];
	public nbtPair(i: number): NbtPairContext;
	public nbtPair(i?: number): NbtPairContext | NbtPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NbtPairContext);
		} else {
			return this.getRuleContext(i, NbtPairContext);
		}
	}
	public nbtValue(): NbtValueContext[];
	public nbtValue(i: number): NbtValueContext;
	public nbtValue(i?: number): NbtValueContext | NbtValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NbtValueContext);
		} else {
			return this.getRuleContext(i, NbtValueContext);
		}
	}
	public ByteNumber(): TerminalNode[];
	public ByteNumber(i: number): TerminalNode;
	public ByteNumber(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.ByteNumber);
		} else {
			return this.getToken(JustMCFParser.ByteNumber, i);
		}
	}
	public NUMBER_INT(): TerminalNode[];
	public NUMBER_INT(i: number): TerminalNode;
	public NUMBER_INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER_INT);
		} else {
			return this.getToken(JustMCFParser.NUMBER_INT, i);
		}
	}
	public LongNumber(): TerminalNode[];
	public LongNumber(i: number): TerminalNode;
	public LongNumber(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.LongNumber);
		} else {
			return this.getToken(JustMCFParser.LongNumber, i);
		}
	}
	public nbtString(): NbtStringContext | undefined {
		return this.tryGetRuleContext(0, NbtStringContext);
	}
	public ShortNumber(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ShortNumber, 0); }
	public FloatNumber(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FloatNumber, 0); }
	public DoubleNumber(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DoubleNumber, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_snbtValue; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterSnbtValue) {
			listener.enterSnbtValue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitSnbtValue) {
			listener.exitSnbtValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitSnbtValue) {
			return visitor.visitSnbtValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SnbtContext extends ParserRuleContext {
	public nbtValue(): NbtValueContext {
		return this.getRuleContext(0, NbtValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_snbt; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterSnbt) {
			listener.enterSnbt(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitSnbt) {
			listener.exitSnbt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitSnbt) {
			return visitor.visitSnbt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtCompoundContext extends ParserRuleContext {
	public nbtPair(): NbtPairContext[];
	public nbtPair(i: number): NbtPairContext;
	public nbtPair(i?: number): NbtPairContext | NbtPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NbtPairContext);
		} else {
			return this.getRuleContext(i, NbtPairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nbtCompound; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNbtCompound) {
			listener.enterNbtCompound(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNbtCompound) {
			listener.exitNbtCompound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNbtCompound) {
			return visitor.visitNbtCompound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtPairContext extends ParserRuleContext {
	public nbtName(): NbtNameContext {
		return this.getRuleContext(0, NbtNameContext);
	}
	public nbtValue(): NbtValueContext {
		return this.getRuleContext(0, NbtValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nbtPair; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNbtPair) {
			listener.enterNbtPair(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNbtPair) {
			listener.exitNbtPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNbtPair) {
			return visitor.visitNbtPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtListContext extends ParserRuleContext {
	public nbtValue(): NbtValueContext[];
	public nbtValue(i: number): NbtValueContext;
	public nbtValue(i?: number): NbtValueContext | NbtValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NbtValueContext);
		} else {
			return this.getRuleContext(i, NbtValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nbtList; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNbtList) {
			listener.enterNbtList(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNbtList) {
			listener.exitNbtList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNbtList) {
			return visitor.visitNbtList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtValueContext extends ParserRuleContext {
	public nbtCompound(): NbtCompoundContext | undefined {
		return this.tryGetRuleContext(0, NbtCompoundContext);
	}
	public nbtList(): NbtListContext | undefined {
		return this.tryGetRuleContext(0, NbtListContext);
	}
	public nbtByteArr(): NbtByteArrContext | undefined {
		return this.tryGetRuleContext(0, NbtByteArrContext);
	}
	public nbtIntArr(): NbtIntArrContext | undefined {
		return this.tryGetRuleContext(0, NbtIntArrContext);
	}
	public nbtLongArr(): NbtLongArrContext | undefined {
		return this.tryGetRuleContext(0, NbtLongArrContext);
	}
	public nbtString(): NbtStringContext | undefined {
		return this.tryGetRuleContext(0, NbtStringContext);
	}
	public ByteNumber(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ByteNumber, 0); }
	public ShortNumber(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ShortNumber, 0); }
	public LongNumber(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.LongNumber, 0); }
	public FloatNumber(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FloatNumber, 0); }
	public DoubleNumber(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DoubleNumber, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nbtValue; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNbtValue) {
			listener.enterNbtValue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNbtValue) {
			listener.exitNbtValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNbtValue) {
			return visitor.visitNbtValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtByteArrContext extends ParserRuleContext {
	public ByteNumber(): TerminalNode[];
	public ByteNumber(i: number): TerminalNode;
	public ByteNumber(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.ByteNumber);
		} else {
			return this.getToken(JustMCFParser.ByteNumber, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nbtByteArr; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNbtByteArr) {
			listener.enterNbtByteArr(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNbtByteArr) {
			listener.exitNbtByteArr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNbtByteArr) {
			return visitor.visitNbtByteArr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtIntArrContext extends ParserRuleContext {
	public NUMBER_INT(): TerminalNode[];
	public NUMBER_INT(i: number): TerminalNode;
	public NUMBER_INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER_INT);
		} else {
			return this.getToken(JustMCFParser.NUMBER_INT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nbtIntArr; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNbtIntArr) {
			listener.enterNbtIntArr(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNbtIntArr) {
			listener.exitNbtIntArr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNbtIntArr) {
			return visitor.visitNbtIntArr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtLongArrContext extends ParserRuleContext {
	public LongNumber(): TerminalNode[];
	public LongNumber(i: number): TerminalNode;
	public LongNumber(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.LongNumber);
		} else {
			return this.getToken(JustMCFParser.LongNumber, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nbtLongArr; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNbtLongArr) {
			listener.enterNbtLongArr(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNbtLongArr) {
			listener.exitNbtLongArr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNbtLongArr) {
			return visitor.visitNbtLongArr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtStringContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STRING, 0); }
	public STRING2(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STRING2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nbtString; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNbtString) {
			listener.enterNbtString(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNbtString) {
			listener.exitNbtString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNbtString) {
			return visitor.visitNbtString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonTextValueContext extends ParserRuleContext {
	public jsonPair(): JsonPairContext[];
	public jsonPair(i: number): JsonPairContext;
	public jsonPair(i?: number): JsonPairContext | JsonPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JsonPairContext);
		} else {
			return this.getRuleContext(i, JsonPairContext);
		}
	}
	public jsonValue(): JsonValueContext[];
	public jsonValue(i: number): JsonValueContext;
	public jsonValue(i?: number): JsonValueContext | JsonValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JsonValueContext);
		} else {
			return this.getRuleContext(i, JsonValueContext);
		}
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STRING, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FALSE, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_jsonTextValue; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterJsonTextValue) {
			listener.enterJsonTextValue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitJsonTextValue) {
			listener.exitJsonTextValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitJsonTextValue) {
			return visitor.visitJsonTextValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonTextContext extends ParserRuleContext {
	public jsonValue(): JsonValueContext {
		return this.getRuleContext(0, JsonValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_jsonText; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterJsonText) {
			listener.enterJsonText(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitJsonText) {
			listener.exitJsonText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitJsonText) {
			return visitor.visitJsonText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonObjContext extends ParserRuleContext {
	public jsonPair(): JsonPairContext[];
	public jsonPair(i: number): JsonPairContext;
	public jsonPair(i?: number): JsonPairContext | JsonPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JsonPairContext);
		} else {
			return this.getRuleContext(i, JsonPairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_jsonObj; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterJsonObj) {
			listener.enterJsonObj(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitJsonObj) {
			listener.exitJsonObj(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitJsonObj) {
			return visitor.visitJsonObj(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonPairContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(JustMCFParser.STRING, 0); }
	public jsonValue(): JsonValueContext {
		return this.getRuleContext(0, JsonValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_jsonPair; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterJsonPair) {
			listener.enterJsonPair(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitJsonPair) {
			listener.exitJsonPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitJsonPair) {
			return visitor.visitJsonPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonArrContext extends ParserRuleContext {
	public jsonValue(): JsonValueContext[];
	public jsonValue(i: number): JsonValueContext;
	public jsonValue(i?: number): JsonValueContext | JsonValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JsonValueContext);
		} else {
			return this.getRuleContext(i, JsonValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_jsonArr; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterJsonArr) {
			listener.enterJsonArr(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitJsonArr) {
			listener.exitJsonArr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitJsonArr) {
			return visitor.visitJsonArr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsonValueContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STRING, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public jsonObj(): JsonObjContext | undefined {
		return this.tryGetRuleContext(0, JsonObjContext);
	}
	public jsonArr(): JsonArrContext | undefined {
		return this.tryGetRuleContext(0, JsonArrContext);
	}
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FALSE, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_jsonValue; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterJsonValue) {
			listener.enterJsonValue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitJsonValue) {
			listener.exitJsonValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitJsonValue) {
			return visitor.visitJsonValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolValueContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_boolValue; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBoolValue) {
			listener.enterBoolValue(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBoolValue) {
			listener.exitBoolValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBoolValue) {
			return visitor.visitBoolValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER_INT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER_INT, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_number; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public NAMSP(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NAMSP, 0); }
	public NAMESPACE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NAMESPACE, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.LOCAL, 0); }
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.EXEC, 0); }
	public ALIGN(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ALIGN, 0); }
	public ANCHORED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ANCHORED, 0); }
	public EYES(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.EYES, 0); }
	public FEET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FEET, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.IN, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.AS, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.AT, 0); }
	public FACING(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FACING, 0); }
	public POSITIONED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.POSITIONED, 0); }
	public POS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.POS, 0); }
	public ROTATED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ROTATED, 0); }
	public ROT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ROT, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.IF, 0); }
	public UNLESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.UNLESS, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ALL, 0); }
	public MASKED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MASKED, 0); }
	public BIOME(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BIOME, 0); }
	public VALUE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.VALUE, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MAX, 0); }
	public RUN(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.RUN, 0); }
	public STORE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STORE, 0); }
	public ENTITY(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ENTITY, 0); }
	public SCORE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SCORE, 0); }
	public PREDICATE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.PREDICATE, 0); }
	public BLOCK(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BLOCK, 0); }
	public BLOCKS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BLOCKS, 0); }
	public SCB(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SCB, 0); }
	public DISPLAYNAME(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DISPLAYNAME, 0); }
	public RENDERTYPE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.RENDERTYPE, 0); }
	public DISPLAY(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DISPLAY, 0); }
	public ENABLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ENABLE, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.LIST, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DATA, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.RESET, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ADD, 0); }
	public REMOVE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.REMOVE, 0); }
	public STORAGE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STORAGE, 0); }
	public FUNC(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FUNC, 0); }
	public TAGGED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.TAGGED, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DEFAULT, 0); }
	public PLAYER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.PLAYER, 0); }
	public PLAYERS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.PLAYERS, 0); }
	public BOSSBAR(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BOSSBAR, 0); }
	public VISIBLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.VISIBLE, 0); }
	public BLUE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BLUE, 0); }
	public GREEN(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.GREEN, 0); }
	public PINK(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.PINK, 0); }
	public PURPLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.PURPLE, 0); }
	public RED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.RED, 0); }
	public WHITE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.WHITE, 0); }
	public YELLOW(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.YELLOW, 0); }
	public COLOR(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.COLOR, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NAME, 0); }
	public STYLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STYLE, 0); }
	public NOTCHED_6(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NOTCHED_6, 0); }
	public NOTCHED_10(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NOTCHED_10, 0); }
	public NOTCHED_12(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NOTCHED_12, 0); }
	public NOTCHED_20(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NOTCHED_20, 0); }
	public PROGRESS(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.PROGRESS, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SET, 0); }
	public TITLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.TITLE, 0); }
	public SUBTITLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SUBTITLE, 0); }
	public ACTIONBAR(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ACTIONBAR, 0); }
	public TIMES(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.TIMES, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.TEXT, 0); }
	public ITEM(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ITEM, 0); }
	public LOOT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.LOOT, 0); }
	public GIVE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.GIVE, 0); }
	public CLEAR(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.CLEAR, 0); }
	public FISH(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FISH, 0); }
	public KILL(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.KILL, 0); }
	public MINE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MINE, 0); }
	public MAINHAND(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MAINHAND, 0); }
	public OFFHAND(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.OFFHAND, 0); }
	public EFFECT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.EFFECT, 0); }
	public TAG(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.TAG, 0); }
	public TP(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.TP, 0); }
	public ATTR(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ATTR, 0); }
	public BASE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BASE, 0); }
	public DESTROY(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DESTROY, 0); }
	public KEEP(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.KEEP, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.REPLACE, 0); }
	public HOLLOW(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.HOLLOW, 0); }
	public OUTLINE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.OUTLINE, 0); }
	public FORCE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FORCE, 0); }
	public MOVE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MOVE, 0); }
	public NORMAL(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NORMAL, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.GET, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.INTERFACE, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.WHILE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FOR, 0); }
	public YEILD(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.YEILD, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BREAK, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.RETURN, 0); }
	public FILTERED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FILTERED, 0); }
	public REPLACED(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.REPLACED, 0); }
	public DIM(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DIM, 0); }
	public DIMENSION(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DIMENSION, 0); }
	public ITEM_MODIFIER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.ITEM_MODIFIER, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SHORT, 0); }
	public INT_(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.INT_, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.LONG, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_key; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pos3IdentifierContext extends ParserRuleContext {
	public pos1(): Pos1Context[];
	public pos1(i: number): Pos1Context;
	public pos1(i?: number): Pos1Context | Pos1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Pos1Context);
		} else {
			return this.getRuleContext(i, Pos1Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_pos3Identifier; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterPos3Identifier) {
			listener.enterPos3Identifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitPos3Identifier) {
			listener.exitPos3Identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitPos3Identifier) {
			return visitor.visitPos3Identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pos2IdentifierContext extends ParserRuleContext {
	public pos1(): Pos1Context[];
	public pos1(i: number): Pos1Context;
	public pos1(i?: number): Pos1Context | Pos1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Pos1Context);
		} else {
			return this.getRuleContext(i, Pos1Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_pos2Identifier; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterPos2Identifier) {
			listener.enterPos2Identifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitPos2Identifier) {
			listener.exitPos2Identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitPos2Identifier) {
			return visitor.visitPos2Identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pos5IdentifierContext extends ParserRuleContext {
	public pos1(): Pos1Context[];
	public pos1(i: number): Pos1Context;
	public pos1(i?: number): Pos1Context | Pos1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Pos1Context);
		} else {
			return this.getRuleContext(i, Pos1Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_pos5Identifier; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterPos5Identifier) {
			listener.enterPos5Identifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitPos5Identifier) {
			listener.exitPos5Identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitPos5Identifier) {
			return visitor.visitPos5Identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pos1Context extends ParserRuleContext {
	public Pos1(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.Pos1, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_pos1; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterPos1) {
			listener.enterPos1(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitPos1) {
			listener.exitPos1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitPos1) {
			return visitor.visitPos1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockIdentifierContext extends ParserRuleContext {
	public nameSpaceBlock(): NameSpaceBlockContext {
		return this.getRuleContext(0, NameSpaceBlockContext);
	}
	public blockstate(): BlockstateContext | undefined {
		return this.tryGetRuleContext(0, BlockstateContext);
	}
	public nbt(): NbtContext | undefined {
		return this.tryGetRuleContext(0, NbtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_blockIdentifier; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlockIdentifier) {
			listener.enterBlockIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlockIdentifier) {
			listener.exitBlockIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlockIdentifier) {
			return visitor.visitBlockIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockstateContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_blockstate; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlockstate) {
			listener.enterBlockstate(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlockstate) {
			listener.exitBlockstate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlockstate) {
			return visitor.visitBlockstate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	public Selector(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.Selector, 0); }
	public nbtName(): NbtNameContext | undefined {
		return this.tryGetRuleContext(0, NbtNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_selector; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterSelector) {
			listener.enterSelector(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitSelector) {
			listener.exitSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitSelector) {
			return visitor.visitSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceContext extends ParserRuleContext {
	public _op!: Token;
	public acceptableName(): AcceptableNameContext | undefined {
		return this.tryGetRuleContext(0, AcceptableNameContext);
	}
	public resourceLocation(): ResourceLocationContext {
		return this.getRuleContext(0, ResourceLocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpace; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpace) {
			listener.enterNameSpace(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpace) {
			listener.exitNameSpace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpace) {
			return visitor.visitNameSpace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceBlockContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpaceBlock; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceBlock) {
			listener.enterNameSpaceBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceBlock) {
			listener.exitNameSpaceBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceBlock) {
			return visitor.visitNameSpaceBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceFuncContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpaceFunc; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceFunc) {
			listener.enterNameSpaceFunc(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceFunc) {
			listener.exitNameSpaceFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceFunc) {
			return visitor.visitNameSpaceFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceStorageContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpaceStorage; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceStorage) {
			listener.enterNameSpaceStorage(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceStorage) {
			listener.exitNameSpaceStorage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceStorage) {
			return visitor.visitNameSpaceStorage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceBossbarContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpaceBossbar; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceBossbar) {
			listener.enterNameSpaceBossbar(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceBossbar) {
			listener.exitNameSpaceBossbar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceBossbar) {
			return visitor.visitNameSpaceBossbar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceBiomeContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpaceBiome; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceBiome) {
			listener.enterNameSpaceBiome(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceBiome) {
			listener.exitNameSpaceBiome(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceBiome) {
			return visitor.visitNameSpaceBiome(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceDimContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpaceDim; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceDim) {
			listener.enterNameSpaceDim(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceDim) {
			listener.exitNameSpaceDim(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceDim) {
			return visitor.visitNameSpaceDim(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpacePredicateContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpacePredicate; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpacePredicate) {
			listener.enterNameSpacePredicate(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpacePredicate) {
			listener.exitNameSpacePredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpacePredicate) {
			return visitor.visitNameSpacePredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceItemContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpaceItem; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceItem) {
			listener.enterNameSpaceItem(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceItem) {
			listener.exitNameSpaceItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceItem) {
			return visitor.visitNameSpaceItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceEntityContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpaceEntity; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceEntity) {
			listener.enterNameSpaceEntity(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceEntity) {
			listener.exitNameSpaceEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceEntity) {
			return visitor.visitNameSpaceEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceLootContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpaceLoot; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceLoot) {
			listener.enterNameSpaceLoot(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceLoot) {
			listener.exitNameSpaceLoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceLoot) {
			return visitor.visitNameSpaceLoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceItemModifierContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nameSpaceItemModifier; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNameSpaceItemModifier) {
			listener.enterNameSpaceItemModifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNameSpaceItemModifier) {
			listener.exitNameSpaceItemModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNameSpaceItemModifier) {
			return visitor.visitNameSpaceItemModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagNameSpaceContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_tagNameSpace; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTagNameSpace) {
			listener.enterTagNameSpace(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTagNameSpace) {
			listener.exitTagNameSpace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTagNameSpace) {
			return visitor.visitTagNameSpace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagNameSpaceItemContext extends ParserRuleContext {
	public tagNameSpace(): TagNameSpaceContext {
		return this.getRuleContext(0, TagNameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_tagNameSpaceItem; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTagNameSpaceItem) {
			listener.enterTagNameSpaceItem(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTagNameSpaceItem) {
			listener.exitTagNameSpaceItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTagNameSpaceItem) {
			return visitor.visitTagNameSpaceItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagNameSpaceBlockContext extends ParserRuleContext {
	public tagNameSpace(): TagNameSpaceContext {
		return this.getRuleContext(0, TagNameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_tagNameSpaceBlock; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTagNameSpaceBlock) {
			listener.enterTagNameSpaceBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTagNameSpaceBlock) {
			listener.exitTagNameSpaceBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTagNameSpaceBlock) {
			return visitor.visitTagNameSpaceBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagNameSpaceFuncContext extends ParserRuleContext {
	public tagNameSpace(): TagNameSpaceContext {
		return this.getRuleContext(0, TagNameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_tagNameSpaceFunc; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTagNameSpaceFunc) {
			listener.enterTagNameSpaceFunc(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTagNameSpaceFunc) {
			listener.exitTagNameSpaceFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTagNameSpaceFunc) {
			return visitor.visitTagNameSpaceFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagNameSpaceEntityContext extends ParserRuleContext {
	public tagNameSpace(): TagNameSpaceContext {
		return this.getRuleContext(0, TagNameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_tagNameSpaceEntity; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTagNameSpaceEntity) {
			listener.enterTagNameSpaceEntity(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTagNameSpaceEntity) {
			listener.exitTagNameSpaceEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTagNameSpaceEntity) {
			return visitor.visitTagNameSpaceEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegisterNameContext extends ParserRuleContext {
	public acceptableName(): AcceptableNameContext[];
	public acceptableName(i: number): AcceptableNameContext;
	public acceptableName(i?: number): AcceptableNameContext | AcceptableNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AcceptableNameContext);
		} else {
			return this.getRuleContext(i, AcceptableNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_registerName; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterRegisterName) {
			listener.enterRegisterName(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitRegisterName) {
			listener.exitRegisterName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitRegisterName) {
			return visitor.visitRegisterName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberTypeContext extends ParserRuleContext {
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.SHORT, 0); }
	public INT_(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.INT_, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.LONG, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_numberType; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNumberType) {
			listener.enterNumberType(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNumberType) {
			listener.exitNumberType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNumberType) {
			return visitor.visitNumberType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AcceptableNameContext extends ParserRuleContext {
	public AcceptableName(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.AcceptableName, 0); }
	public key(): KeyContext | undefined {
		return this.tryGetRuleContext(0, KeyContext);
	}
	public numberType(): NumberTypeContext | undefined {
		return this.tryGetRuleContext(0, NumberTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_acceptableName; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterAcceptableName) {
			listener.enterAcceptableName(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitAcceptableName) {
			listener.exitAcceptableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitAcceptableName) {
			return visitor.visitAcceptableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CriterionContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_criterion; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterCriterion) {
			listener.enterCriterion(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitCriterion) {
			listener.exitCriterion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitCriterion) {
			return visitor.visitCriterion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtNameContext extends ParserRuleContext {
	public AcceptableName(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.AcceptableName, 0); }
	public NBTName(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NBTName, 0); }
	public key(): KeyContext | undefined {
		return this.tryGetRuleContext(0, KeyContext);
	}
	public numberType(): NumberTypeContext | undefined {
		return this.tryGetRuleContext(0, NumberTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_nbtName; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNbtName) {
			listener.enterNbtName(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNbtName) {
			listener.exitNbtName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNbtName) {
			return visitor.visitNbtName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceLocationContext extends ParserRuleContext {
	public acceptableName(): AcceptableNameContext[];
	public acceptableName(i: number): AcceptableNameContext;
	public acceptableName(i?: number): AcceptableNameContext | AcceptableNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AcceptableNameContext);
		} else {
			return this.getRuleContext(i, AcceptableNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_resourceLocation; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterResourceLocation) {
			listener.enterResourceLocation(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitResourceLocation) {
			listener.exitResourceLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitResourceLocation) {
			return visitor.visitResourceLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public acceptableName(): AcceptableNameContext[];
	public acceptableName(i: number): AcceptableNameContext;
	public acceptableName(i?: number): AcceptableNameContext | AcceptableNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AcceptableNameContext);
		} else {
			return this.getRuleContext(i, AcceptableNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_typeName; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Item_slotContext extends ParserRuleContext {
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_item_slot; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItem_slot) {
			listener.enterItem_slot(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItem_slot) {
			listener.exitItem_slot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItem_slot) {
			return visitor.visitItem_slot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public acceptableName(): AcceptableNameContext | undefined {
		return this.tryGetRuleContext(0, AcceptableNameContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_string; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Item_predicateContext extends ParserRuleContext {
	public nameSpaceItem(): NameSpaceItemContext | undefined {
		return this.tryGetRuleContext(0, NameSpaceItemContext);
	}
	public tagNameSpaceItem(): TagNameSpaceItemContext | undefined {
		return this.tryGetRuleContext(0, TagNameSpaceItemContext);
	}
	public snbt(): SnbtContext | undefined {
		return this.tryGetRuleContext(0, SnbtContext);
	}
	public nbt(): NbtContext | undefined {
		return this.tryGetRuleContext(0, NbtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_item_predicate; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterItem_predicate) {
			listener.enterItem_predicate(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitItem_predicate) {
			listener.exitItem_predicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitItem_predicate) {
			return visitor.visitItem_predicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block_predicateContext extends ParserRuleContext {
	public nameSpaceBlock(): NameSpaceBlockContext | undefined {
		return this.tryGetRuleContext(0, NameSpaceBlockContext);
	}
	public tagNameSpaceBlock(): TagNameSpaceBlockContext | undefined {
		return this.tryGetRuleContext(0, TagNameSpaceBlockContext);
	}
	public blockstate(): BlockstateContext | undefined {
		return this.tryGetRuleContext(0, BlockstateContext);
	}
	public snbt(): SnbtContext | undefined {
		return this.tryGetRuleContext(0, SnbtContext);
	}
	public nbt(): NbtContext | undefined {
		return this.tryGetRuleContext(0, NbtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_block_predicate; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlock_predicate) {
			listener.enterBlock_predicate(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlock_predicate) {
			listener.exitBlock_predicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlock_predicate) {
			return visitor.visitBlock_predicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


