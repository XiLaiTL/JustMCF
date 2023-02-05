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
	public static readonly T__51 = 52;
	public static readonly CompareOperation = 53;
	public static readonly ByteNumber = 54;
	public static readonly ShortNumber = 55;
	public static readonly LongNumber = 56;
	public static readonly FloatNumber = 57;
	public static readonly DoubleNumber = 58;
	public static readonly STRING2 = 59;
	public static readonly TRUE = 60;
	public static readonly FALSE = 61;
	public static readonly NULL = 62;
	public static readonly STRING = 63;
	public static readonly UUID16_ = 64;
	public static readonly NUMBER = 65;
	public static readonly WS = 66;
	public static readonly LeagalCommand = 67;
	public static readonly LineComment = 68;
	public static readonly BlockComment = 69;
	public static readonly NAMSP = 70;
	public static readonly NAMESPACE = 71;
	public static readonly LOCAL = 72;
	public static readonly EXEC = 73;
	public static readonly ALIGN = 74;
	public static readonly ANCHORED = 75;
	public static readonly EYES = 76;
	public static readonly FEET = 77;
	public static readonly IN = 78;
	public static readonly AS = 79;
	public static readonly AT = 80;
	public static readonly FACING = 81;
	public static readonly POSITIONED = 82;
	public static readonly POS = 83;
	public static readonly ROTATED = 84;
	public static readonly ROT = 85;
	public static readonly IF = 86;
	public static readonly UNLESS = 87;
	public static readonly ALL = 88;
	public static readonly MASKED = 89;
	public static readonly BIOME = 90;
	public static readonly VALUE = 91;
	public static readonly MAX = 92;
	public static readonly ENTITY = 93;
	public static readonly SCORE = 94;
	public static readonly PREDICATE = 95;
	public static readonly BLOCK = 96;
	public static readonly BLOCKS = 97;
	public static readonly MATCHES = 98;
	public static readonly SCB = 99;
	public static readonly DISPLAYNAME = 100;
	public static readonly RENDERTYPE = 101;
	public static readonly DISPLAY = 102;
	public static readonly ENABLE = 103;
	public static readonly LIST = 104;
	public static readonly HEARTS = 105;
	public static readonly INTEGER = 106;
	public static readonly DATA = 107;
	public static readonly STORAGE = 108;
	public static readonly RESET = 109;
	public static readonly ADD = 110;
	public static readonly REMOVE = 111;
	public static readonly FUNC = 112;
	public static readonly TAGGED = 113;
	public static readonly DEFAULT = 114;
	public static readonly PLAYER = 115;
	public static readonly PLAYERS = 116;
	public static readonly BOSSBAR = 117;
	public static readonly VISIBLE = 118;
	public static readonly BLUE = 119;
	public static readonly GREEN = 120;
	public static readonly PINK = 121;
	public static readonly PURPLE = 122;
	public static readonly RED = 123;
	public static readonly WHITE = 124;
	public static readonly YELLOW = 125;
	public static readonly COLOR = 126;
	public static readonly NAME = 127;
	public static readonly STYLE = 128;
	public static readonly NOTCHED_6 = 129;
	public static readonly NOTCHED_10 = 130;
	public static readonly NOTCHED_12 = 131;
	public static readonly NOTCHED_20 = 132;
	public static readonly PROGRESS = 133;
	public static readonly SET = 134;
	public static readonly TITLE = 135;
	public static readonly SUBTITLE = 136;
	public static readonly ACTIONBAR = 137;
	public static readonly TIMES = 138;
	public static readonly TEXT = 139;
	public static readonly ITEM = 140;
	public static readonly LOOT = 141;
	public static readonly GIVE = 142;
	public static readonly CLEAR = 143;
	public static readonly FISH = 144;
	public static readonly KILL = 145;
	public static readonly MINE = 146;
	public static readonly MAINHAND = 147;
	public static readonly OFFHAND = 148;
	public static readonly EFFECT = 149;
	public static readonly TAG = 150;
	public static readonly TP = 151;
	public static readonly GET = 152;
	public static readonly ATTR = 153;
	public static readonly BASE = 154;
	public static readonly DESTROY = 155;
	public static readonly KEEP = 156;
	public static readonly REPLACE = 157;
	public static readonly HOLLOW = 158;
	public static readonly OUTLINE = 159;
	public static readonly FORCE = 160;
	public static readonly MOVE = 161;
	public static readonly NORMAL = 162;
	public static readonly FILTERED = 163;
	public static readonly INTERFACE = 164;
	public static readonly WHILE = 165;
	public static readonly ELSE = 166;
	public static readonly FOR = 167;
	public static readonly YEILD = 168;
	public static readonly BREAK = 169;
	public static readonly RETURN = 170;
	public static readonly REPLACED = 171;
	public static readonly DIM = 172;
	public static readonly DIMENSION = 173;
	public static readonly ITEM_MODIFIER = 174;
	public static readonly Pos1 = 175;
	public static readonly Selector = 176;
	public static readonly BYTE = 177;
	public static readonly SHORT = 178;
	public static readonly INT_ = 179;
	public static readonly LONG = 180;
	public static readonly FLOAT = 181;
	public static readonly DOUBLE = 182;
	public static readonly AcceptableName = 183;
	public static readonly NBTName = 184;
	public static readonly RULE_mcfFile = 0;
	public static readonly RULE_fileStatementInner = 1;
	public static readonly RULE_statementInner = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_noInExecStatement = 4;
	public static readonly RULE_leagalCommand = 5;
	public static readonly RULE_nameSpaceStatement = 6;
	public static readonly RULE_nameSpaceSettings = 7;
	public static readonly RULE_nameSpaceStatementInner = 8;
	public static readonly RULE_funcTagStatement = 9;
	public static readonly RULE_funcTagSettings = 10;
	public static readonly RULE_funcTagStatementInner = 11;
	public static readonly RULE_funcStatement = 12;
	public static readonly RULE_funcImproveStatement = 13;
	public static readonly RULE_funcImproveParam = 14;
	public static readonly RULE_funcImproveStatementInner = 15;
	public static readonly RULE_yeildStatement = 16;
	public static readonly RULE_funcRunStatement = 17;
	public static readonly RULE_funcImproveRunStatement = 18;
	public static readonly RULE_funcImproveRunExpression = 19;
	public static readonly RULE_funcImproveRunParam = 20;
	public static readonly RULE_execStatement = 21;
	public static readonly RULE_execStoreChild = 22;
	public static readonly RULE_execRunChild = 23;
	public static readonly RULE_execChild = 24;
	public static readonly RULE_matchPart = 25;
	public static readonly RULE_scbCompareNumber = 26;
	public static readonly RULE_dataIdentifier = 27;
	public static readonly RULE_dataMergeExpression = 28;
	public static readonly RULE_dataOperationExpression = 29;
	public static readonly RULE_dataRightValue = 30;
	public static readonly RULE_scbOperationExpression = 31;
	public static readonly RULE_scbSingleOperationExpression = 32;
	public static readonly RULE_scbIdentifier = 33;
	public static readonly RULE_dataStatement = 34;
	public static readonly RULE_scbPlayerStatement = 35;
	public static readonly RULE_scbPlayerStatementInner = 36;
	public static readonly RULE_scbObjectiveStatement = 37;
	public static readonly RULE_scbStatementInner = 38;
	public static readonly RULE_bossbarStatement = 39;
	public static readonly RULE_bossbarStatementInner = 40;
	public static readonly RULE_bossbarOperationExpression = 41;
	public static readonly RULE_titleStatement = 42;
	public static readonly RULE_titleStatementInner = 43;
	public static readonly RULE_titleSelectorStatementInner = 44;
	public static readonly RULE_titleIndependentStatementInner = 45;
	public static readonly RULE_displayStatement = 46;
	public static readonly RULE_displayStatementInner = 47;
	public static readonly RULE_displayIndependentStatementInner = 48;
	public static readonly RULE_itemStatement = 49;
	public static readonly RULE_lootStatement = 50;
	public static readonly RULE_lootStatementInner = 51;
	public static readonly RULE_lootSelectorStatementInner = 52;
	public static readonly RULE_lootIndependentStatementInnerGive = 53;
	public static readonly RULE_lootIndependentStatementInnerReplaceEntity = 54;
	public static readonly RULE_lootSource = 55;
	public static readonly RULE_itemStatementInner = 56;
	public static readonly RULE_itemSelectorStatementInner = 57;
	public static readonly RULE_itemIndependentStatementInner = 58;
	public static readonly RULE_giveAndClearIndependentStatementInner = 59;
	public static readonly RULE_attrStatement = 60;
	public static readonly RULE_attrStatementInner = 61;
	public static readonly RULE_attrIndependentStatementInner = 62;
	public static readonly RULE_entityStatement = 63;
	public static readonly RULE_playerName = 64;
	public static readonly RULE_entityDeclareStatementInner = 65;
	public static readonly RULE_tagIndependentStatementInner = 66;
	public static readonly RULE_effectIndependentStatementInner = 67;
	public static readonly RULE_tpIndependentStatementInner = 68;
	public static readonly RULE_entityIndependentStatementInner = 69;
	public static readonly RULE_entityStatementInner = 70;
	public static readonly RULE_entityExpression = 71;
	public static readonly RULE_blockStatement = 72;
	public static readonly RULE_blockStatementInner = 73;
	public static readonly RULE_interfaceStatement = 74;
	public static readonly RULE_dataAssignExistExpression = 75;
	public static readonly RULE_existExpression = 76;
	public static readonly RULE_ifStatement = 77;
	public static readonly RULE_ifElseStatement = 78;
	public static readonly RULE_whileStatement = 79;
	public static readonly RULE_forStatement = 80;
	public static readonly RULE_nbt = 81;
	public static readonly RULE_json = 82;
	public static readonly RULE_nbtPath = 83;
	public static readonly RULE_snbtValue = 84;
	public static readonly RULE_snbt = 85;
	public static readonly RULE_nbtCompound = 86;
	public static readonly RULE_nbtPair = 87;
	public static readonly RULE_nbtList = 88;
	public static readonly RULE_nbtValue = 89;
	public static readonly RULE_nbtByteArr = 90;
	public static readonly RULE_nbtIntArr = 91;
	public static readonly RULE_nbtLongArr = 92;
	public static readonly RULE_nbtString = 93;
	public static readonly RULE_jsonTextValue = 94;
	public static readonly RULE_jsonText = 95;
	public static readonly RULE_jsonObj = 96;
	public static readonly RULE_jsonPair = 97;
	public static readonly RULE_jsonArr = 98;
	public static readonly RULE_jsonValue = 99;
	public static readonly RULE_boolValue = 100;
	public static readonly RULE_key = 101;
	public static readonly RULE_pos3Identifier = 102;
	public static readonly RULE_pos2Identifier = 103;
	public static readonly RULE_pos5Identifier = 104;
	public static readonly RULE_pos1 = 105;
	public static readonly RULE_blockIdentifier = 106;
	public static readonly RULE_blockstate = 107;
	public static readonly RULE_selector = 108;
	public static readonly RULE_nameSpace = 109;
	public static readonly RULE_nameSpaceBlock = 110;
	public static readonly RULE_nameSpaceFunc = 111;
	public static readonly RULE_nameSpaceStorage = 112;
	public static readonly RULE_nameSpaceBossbar = 113;
	public static readonly RULE_nameSpaceBiome = 114;
	public static readonly RULE_nameSpaceDim = 115;
	public static readonly RULE_nameSpacePredicate = 116;
	public static readonly RULE_nameSpaceItem = 117;
	public static readonly RULE_nameSpaceEntity = 118;
	public static readonly RULE_nameSpaceLoot = 119;
	public static readonly RULE_nameSpaceItemModifier = 120;
	public static readonly RULE_tagNameSpace = 121;
	public static readonly RULE_tagNameSpaceItem = 122;
	public static readonly RULE_tagNameSpaceBlock = 123;
	public static readonly RULE_tagNameSpaceFunc = 124;
	public static readonly RULE_tagNameSpaceEntity = 125;
	public static readonly RULE_registerName = 126;
	public static readonly RULE_numberType = 127;
	public static readonly RULE_acceptableName = 128;
	public static readonly RULE_criterion = 129;
	public static readonly RULE_nbtName = 130;
	public static readonly RULE_resourceLocation = 131;
	public static readonly RULE_typeName = 132;
	public static readonly RULE_item_slot = 133;
	public static readonly RULE_item_predicate = 134;
	public static readonly RULE_block_predicate = 135;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"mcfFile", "fileStatementInner", "statementInner", "statement", "noInExecStatement", 
		"leagalCommand", "nameSpaceStatement", "nameSpaceSettings", "nameSpaceStatementInner", 
		"funcTagStatement", "funcTagSettings", "funcTagStatementInner", "funcStatement", 
		"funcImproveStatement", "funcImproveParam", "funcImproveStatementInner", 
		"yeildStatement", "funcRunStatement", "funcImproveRunStatement", "funcImproveRunExpression", 
		"funcImproveRunParam", "execStatement", "execStoreChild", "execRunChild", 
		"execChild", "matchPart", "scbCompareNumber", "dataIdentifier", "dataMergeExpression", 
		"dataOperationExpression", "dataRightValue", "scbOperationExpression", 
		"scbSingleOperationExpression", "scbIdentifier", "dataStatement", "scbPlayerStatement", 
		"scbPlayerStatementInner", "scbObjectiveStatement", "scbStatementInner", 
		"bossbarStatement", "bossbarStatementInner", "bossbarOperationExpression", 
		"titleStatement", "titleStatementInner", "titleSelectorStatementInner", 
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
		"json", "nbtPath", "snbtValue", "snbt", "nbtCompound", "nbtPair", "nbtList", 
		"nbtValue", "nbtByteArr", "nbtIntArr", "nbtLongArr", "nbtString", "jsonTextValue", 
		"jsonText", "jsonObj", "jsonPair", "jsonArr", "jsonValue", "boolValue", 
		"key", "pos3Identifier", "pos2Identifier", "pos5Identifier", "pos1", "blockIdentifier", 
		"blockstate", "selector", "nameSpace", "nameSpaceBlock", "nameSpaceFunc", 
		"nameSpaceStorage", "nameSpaceBossbar", "nameSpaceBiome", "nameSpaceDim", 
		"nameSpacePredicate", "nameSpaceItem", "nameSpaceEntity", "nameSpaceLoot", 
		"nameSpaceItemModifier", "tagNameSpace", "tagNameSpaceItem", "tagNameSpaceBlock", 
		"tagNameSpaceFunc", "tagNameSpaceEntity", "registerName", "numberType", 
		"acceptableName", "criterion", "nbtName", "resourceLocation", "typeName", 
		"item_slot", "item_predicate", "block_predicate",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'->'", "'['", "','", "']'", "'{'", "'}'", "'='", "'('", "')'", 
		"'=>'", "'?=>'", "'*'", "'..'", "'::'", "'|='", "'..0'", "'+='", "'-='", 
		"'*='", "'/='", "'%='", "'><'", "'<<'", "'>>'", "':='", "'/'", "'%'", 
		"'+'", "'-'", "':'", "'.'", "'*+'", "'#'", "'!'", "'&'", "'|'", "'&&'", 
		"'||'", "'[]'", "'n{'", "'n['", "'n[B;'", "'n[I;'", "'n[L;'", "'[B;'", 
		"'[I;'", "'[L;'", "'j{'", "'j['", "'<'", "'>'", "'@'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'true'", "'false'", 
		"'null'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'namsp'", "'namespace'", "'local'", "'exec'", "'align'", "'anchored'", 
		"'eyes'", "'feet'", "'in'", "'as'", "'at'", "'facing'", "'positioned'", 
		"'pos'", "'rotated'", "'rot'", "'if'", "'unless'", "'all'", "'masked'", 
		"'biome'", "'value'", "'max'", "'entity'", "'score'", "'predicate'", "'block'", 
		"'blocks'", "'matches'", "'scb'", "'displayname'", "'rendertype'", "'display'", 
		"'enable'", "'list'", "'hearts'", "'integer'", "'data'", "'storage'", 
		"'reset'", "'add'", "'remove'", "'func'", "'tagged'", "'default'", "'player'", 
		"'players'", "'bossbar'", "'visible'", "'blue'", "'green'", "'pink'", 
		"'purple'", "'red'", "'white'", "'yellow'", "'color'", "'name'", "'style'", 
		"'notched_6'", "'notched_10'", "'notched_12'", "'notched_20'", "'progress'", 
		"'set'", "'title'", "'subtitle'", "'actionbar'", "'times'", "'text'", 
		"'item'", "'loot'", "'give'", "'clear'", "'fish'", "'kill'", "'mine'", 
		"'mainhand'", "'offhand'", "'effect'", "'tag'", "'tp'", "'get'", "'attr'", 
		"'base'", "'destroy'", "'keep'", "'replace'", "'hollow'", "'outline'", 
		"'force'", "'move'", "'normal'", "'filtered'", "'interface'", "'while'", 
		"'else'", "'for'", "'yeild'", "'break'", "'return'", "'replaced'", "'dim'", 
		"'dimension'", "'item_modifier'", undefined, undefined, "'byte'", "'short'", 
		"'int'", "'long'", "'float'", "'double'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "CompareOperation", "ByteNumber", 
		"ShortNumber", "LongNumber", "FloatNumber", "DoubleNumber", "STRING2", 
		"TRUE", "FALSE", "NULL", "STRING", "UUID16_", "NUMBER", "WS", "LeagalCommand", 
		"LineComment", "BlockComment", "NAMSP", "NAMESPACE", "LOCAL", "EXEC", 
		"ALIGN", "ANCHORED", "EYES", "FEET", "IN", "AS", "AT", "FACING", "POSITIONED", 
		"POS", "ROTATED", "ROT", "IF", "UNLESS", "ALL", "MASKED", "BIOME", "VALUE", 
		"MAX", "ENTITY", "SCORE", "PREDICATE", "BLOCK", "BLOCKS", "MATCHES", "SCB", 
		"DISPLAYNAME", "RENDERTYPE", "DISPLAY", "ENABLE", "LIST", "HEARTS", "INTEGER", 
		"DATA", "STORAGE", "RESET", "ADD", "REMOVE", "FUNC", "TAGGED", "DEFAULT", 
		"PLAYER", "PLAYERS", "BOSSBAR", "VISIBLE", "BLUE", "GREEN", "PINK", "PURPLE", 
		"RED", "WHITE", "YELLOW", "COLOR", "NAME", "STYLE", "NOTCHED_6", "NOTCHED_10", 
		"NOTCHED_12", "NOTCHED_20", "PROGRESS", "SET", "TITLE", "SUBTITLE", "ACTIONBAR", 
		"TIMES", "TEXT", "ITEM", "LOOT", "GIVE", "CLEAR", "FISH", "KILL", "MINE", 
		"MAINHAND", "OFFHAND", "EFFECT", "TAG", "TP", "GET", "ATTR", "BASE", "DESTROY", 
		"KEEP", "REPLACE", "HOLLOW", "OUTLINE", "FORCE", "MOVE", "NORMAL", "FILTERED", 
		"INTERFACE", "WHILE", "ELSE", "FOR", "YEILD", "BREAK", "RETURN", "REPLACED", 
		"DIM", "DIMENSION", "ITEM_MODIFIER", "Pos1", "Selector", "BYTE", "SHORT", 
		"INT_", "LONG", "FLOAT", "DOUBLE", "AcceptableName", "NBTName",
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
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.NAMSP || _la === JustMCFParser.NAMESPACE || _la === JustMCFParser.FUNC || _la === JustMCFParser.INTERFACE) {
				{
				{
				this.state = 272;
				this.fileStatementInner();
				}
				}
				this.state = 277;
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
			this.state = 280;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NAMSP:
			case JustMCFParser.NAMESPACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 278;
				this.nameSpaceStatement();
				}
				break;
			case JustMCFParser.FUNC:
			case JustMCFParser.INTERFACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 279;
				this.nameSpaceStatementInner();
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
	public statementInner(): StatementInnerContext {
		let _localctx: StatementInnerContext = new StatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JustMCFParser.RULE_statementInner);
		try {
			this.state = 284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 282;
				this.noInExecStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 283;
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
			this.state = 308;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 286;
				this.ifStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 287;
				this.forStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 288;
				this.whileStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 289;
				this.funcRunStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 290;
				this.funcImproveRunStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 291;
				this.execStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 292;
				this.dataOperationExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 293;
				this.dataAssignExistExpression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 294;
				this.scbOperationExpression();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 295;
				this.bossbarOperationExpression();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 296;
				this.entityExpression();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 297;
				this.dataStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 298;
				this.scbPlayerStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 299;
				this.scbObjectiveStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 300;
				this.titleStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 301;
				this.displayStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 302;
				this.lootStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 303;
				this.itemStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 304;
				this.attrStatement();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 305;
				this.entityStatement();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 306;
				this.blockStatement();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 307;
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
			this.state = 322;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				_localctx = new NoInExecStatementFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 310;
				this.funcStatement();
				}
				break;

			case 2:
				_localctx = new NoInExecStatementRunFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 311;
				(_localctx as NoInExecStatementRunFuncContext)._left = this.match(JustMCFParser.T__0);
				this.state = 312;
				this.funcStatement();
				}
				break;

			case 3:
				_localctx = new NoInExecStatementFuncImproveContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 313;
				this.funcImproveStatement();
				}
				break;

			case 4:
				_localctx = new NoInExecStatementNameSpaceContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 314;
				this.nameSpaceStatement();
				}
				break;

			case 5:
				_localctx = new NoInExecStatementInterfaceContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 315;
				this.interfaceStatement();
				}
				break;

			case 6:
				_localctx = new NoInExecStatementStoreContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 316;
				this.statement();
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 317;
					this.execStoreChild();
					}
					}
					this.state = 320;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === JustMCFParser.T__9 || _la === JustMCFParser.T__10);
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
			this.state = 324;
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
			this.state = 326;
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
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
				{
				this.state = 327;
				this.acceptableName();
				}
			}

			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__1) {
				{
				this.state = 330;
				this.match(JustMCFParser.T__1);
				this.state = 337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (JustMCFParser.BIOME - 90)) | (1 << (JustMCFParser.ENTITY - 90)) | (1 << (JustMCFParser.PREDICATE - 90)) | (1 << (JustMCFParser.BLOCK - 90)) | (1 << (JustMCFParser.STORAGE - 90)) | (1 << (JustMCFParser.FUNC - 90)) | (1 << (JustMCFParser.DEFAULT - 90)) | (1 << (JustMCFParser.BOSSBAR - 90)))) !== 0) || _la === JustMCFParser.ITEM || _la === JustMCFParser.LOOT || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & ((1 << (JustMCFParser.DIM - 172)) | (1 << (JustMCFParser.DIMENSION - 172)) | (1 << (JustMCFParser.ITEM_MODIFIER - 172)))) !== 0)) {
					{
					{
					this.state = 331;
					this.nameSpaceSettings();
					this.state = 333;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__2) {
						{
						this.state = 332;
						this.match(JustMCFParser.T__2);
						}
					}

					}
					}
					this.state = 339;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 340;
				this.match(JustMCFParser.T__3);
				}
			}

			this.state = 343;
			this.match(JustMCFParser.T__4);
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.FUNC || _la === JustMCFParser.INTERFACE) {
				{
				{
				this.state = 344;
				this.nameSpaceStatementInner();
				}
				}
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 350;
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
			this.state = 389;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				_localctx = new NameSpaceSettingsFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 352;
				(_localctx as NameSpaceSettingsFuncContext)._type = this.match(JustMCFParser.FUNC);
				this.state = 353;
				this.match(JustMCFParser.T__6);
				this.state = 354;
				this.acceptableName();
				}
				break;

			case 2:
				_localctx = new NameSpaceSettingsBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 355;
				(_localctx as NameSpaceSettingsBlockContext)._type = this.match(JustMCFParser.BLOCK);
				this.state = 356;
				this.match(JustMCFParser.T__6);
				this.state = 357;
				this.acceptableName();
				}
				break;

			case 3:
				_localctx = new NameSpaceSettingsStorageContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 358;
				(_localctx as NameSpaceSettingsStorageContext)._type = this.match(JustMCFParser.STORAGE);
				this.state = 359;
				this.match(JustMCFParser.T__6);
				this.state = 360;
				this.acceptableName();
				}
				break;

			case 4:
				_localctx = new NameSpaceSettingsBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 361;
				(_localctx as NameSpaceSettingsBossbarContext)._type = this.match(JustMCFParser.BOSSBAR);
				this.state = 362;
				this.match(JustMCFParser.T__6);
				this.state = 363;
				this.acceptableName();
				}
				break;

			case 5:
				_localctx = new NameSpaceSettingsBiomeContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 364;
				(_localctx as NameSpaceSettingsBiomeContext)._type = this.match(JustMCFParser.BIOME);
				this.state = 365;
				this.match(JustMCFParser.T__6);
				this.state = 366;
				this.acceptableName();
				}
				break;

			case 6:
				_localctx = new NameSpaceSettingsEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 367;
				(_localctx as NameSpaceSettingsEntityContext)._type = this.match(JustMCFParser.ENTITY);
				this.state = 368;
				this.match(JustMCFParser.T__6);
				this.state = 369;
				this.acceptableName();
				}
				break;

			case 7:
				_localctx = new NameSpaceSettingsPredicateContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 370;
				(_localctx as NameSpaceSettingsPredicateContext)._type = this.match(JustMCFParser.PREDICATE);
				this.state = 371;
				this.match(JustMCFParser.T__6);
				this.state = 372;
				this.acceptableName();
				}
				break;

			case 8:
				_localctx = new NameSpaceSettingsDimContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 373;
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
				this.state = 374;
				this.match(JustMCFParser.T__6);
				this.state = 375;
				this.acceptableName();
				}
				break;

			case 9:
				_localctx = new NameSpaceSettingsItemContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 376;
				(_localctx as NameSpaceSettingsItemContext)._type = this.match(JustMCFParser.ITEM);
				this.state = 377;
				this.match(JustMCFParser.T__6);
				this.state = 378;
				this.acceptableName();
				}
				break;

			case 10:
				_localctx = new NameSpaceSettingsLootContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 379;
				(_localctx as NameSpaceSettingsLootContext)._type = this.match(JustMCFParser.LOOT);
				this.state = 380;
				this.match(JustMCFParser.T__6);
				this.state = 381;
				this.acceptableName();
				}
				break;

			case 11:
				_localctx = new NameSpaceSettingsItemModifierContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 382;
				(_localctx as NameSpaceSettingsItemModifierContext)._type = this.match(JustMCFParser.ITEM_MODIFIER);
				this.state = 383;
				this.match(JustMCFParser.T__6);
				this.state = 384;
				this.acceptableName();
				}
				break;

			case 12:
				_localctx = new NameSpaceSettingsDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 385;
				(_localctx as NameSpaceSettingsDefaultContext)._type = this.match(JustMCFParser.DEFAULT);
				this.state = 386;
				this.match(JustMCFParser.T__6);
				this.state = 387;
				this.acceptableName();
				}
				break;

			case 13:
				_localctx = new NameSpaceSettingsJustDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 388;
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
			this.state = 394;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 391;
				this.funcTagStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 392;
				this.funcTagStatementInner();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 393;
				this.interfaceStatement();
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
	public funcTagStatement(): FuncTagStatementContext {
		let _localctx: FuncTagStatementContext = new FuncTagStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JustMCFParser.RULE_funcTagStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(JustMCFParser.FUNC);
			this.state = 397;
			this.tagNameSpaceFunc();
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__1) {
				{
				this.state = 398;
				this.match(JustMCFParser.T__1);
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.REPLACE || _la === JustMCFParser.REPLACED) {
					{
					{
					this.state = 399;
					this.funcTagSettings();
					this.state = 401;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__2) {
						{
						this.state = 400;
						this.match(JustMCFParser.T__2);
						}
					}

					}
					}
					this.state = 407;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 408;
				this.match(JustMCFParser.T__3);
				}
			}

			this.state = 411;
			this.match(JustMCFParser.T__4);
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.FUNC) {
				{
				{
				this.state = 412;
				this.funcTagStatementInner();
				}
				}
				this.state = 417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 418;
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
		this.enterRule(_localctx, 20, JustMCFParser.RULE_funcTagSettings);
		try {
			this.state = 424;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.REPLACE:
				_localctx = new FuncTagSettingsReplaceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 420;
				this.match(JustMCFParser.REPLACE);
				this.state = 421;
				this.match(JustMCFParser.T__6);
				this.state = 422;
				this.boolValue();
				}
				break;
			case JustMCFParser.REPLACED:
				_localctx = new FuncTagSettingsReplacedContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 423;
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
		this.enterRule(_localctx, 22, JustMCFParser.RULE_funcTagStatementInner);
		try {
			this.state = 429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				_localctx = new FuncTagSIFuncSContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 426;
				this.funcStatement();
				}
				break;

			case 2:
				_localctx = new FuncTagSIFuncImproveSContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 427;
				this.funcImproveStatement();
				}
				break;

			case 3:
				_localctx = new FuncTagSIFuncTagSContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 428;
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
		this.enterRule(_localctx, 24, JustMCFParser.RULE_funcStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.match(JustMCFParser.FUNC);
			this.state = 432;
			this.nameSpaceFunc();
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.TAGGED) {
				{
				this.state = 433;
				this.match(JustMCFParser.TAGGED);
				this.state = 434;
				this.tagNameSpaceFunc();
				this.state = 439;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 435;
					this.match(JustMCFParser.T__2);
					this.state = 436;
					this.tagNameSpaceFunc();
					}
					}
					this.state = 441;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 444;
			this.match(JustMCFParser.T__4);
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__0 || _la === JustMCFParser.T__4 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JustMCFParser.T__32 - 33)) | (1 << (JustMCFParser.T__49 - 33)) | (1 << (JustMCFParser.T__51 - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JustMCFParser.LeagalCommand - 67)) | (1 << (JustMCFParser.NAMSP - 67)) | (1 << (JustMCFParser.NAMESPACE - 67)) | (1 << (JustMCFParser.LOCAL - 67)) | (1 << (JustMCFParser.EXEC - 67)) | (1 << (JustMCFParser.ALIGN - 67)) | (1 << (JustMCFParser.ANCHORED - 67)) | (1 << (JustMCFParser.EYES - 67)) | (1 << (JustMCFParser.FEET - 67)) | (1 << (JustMCFParser.IN - 67)) | (1 << (JustMCFParser.AS - 67)) | (1 << (JustMCFParser.AT - 67)) | (1 << (JustMCFParser.FACING - 67)) | (1 << (JustMCFParser.POSITIONED - 67)) | (1 << (JustMCFParser.POS - 67)) | (1 << (JustMCFParser.ROTATED - 67)) | (1 << (JustMCFParser.ROT - 67)) | (1 << (JustMCFParser.IF - 67)) | (1 << (JustMCFParser.UNLESS - 67)) | (1 << (JustMCFParser.ALL - 67)) | (1 << (JustMCFParser.MASKED - 67)) | (1 << (JustMCFParser.BIOME - 67)) | (1 << (JustMCFParser.VALUE - 67)) | (1 << (JustMCFParser.MAX - 67)) | (1 << (JustMCFParser.ENTITY - 67)) | (1 << (JustMCFParser.SCORE - 67)) | (1 << (JustMCFParser.PREDICATE - 67)) | (1 << (JustMCFParser.BLOCK - 67)) | (1 << (JustMCFParser.BLOCKS - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (JustMCFParser.SCB - 99)) | (1 << (JustMCFParser.DISPLAYNAME - 99)) | (1 << (JustMCFParser.RENDERTYPE - 99)) | (1 << (JustMCFParser.DISPLAY - 99)) | (1 << (JustMCFParser.ENABLE - 99)) | (1 << (JustMCFParser.LIST - 99)) | (1 << (JustMCFParser.DATA - 99)) | (1 << (JustMCFParser.STORAGE - 99)) | (1 << (JustMCFParser.RESET - 99)) | (1 << (JustMCFParser.ADD - 99)) | (1 << (JustMCFParser.REMOVE - 99)) | (1 << (JustMCFParser.FUNC - 99)) | (1 << (JustMCFParser.TAGGED - 99)) | (1 << (JustMCFParser.DEFAULT - 99)) | (1 << (JustMCFParser.PLAYER - 99)) | (1 << (JustMCFParser.PLAYERS - 99)) | (1 << (JustMCFParser.BOSSBAR - 99)) | (1 << (JustMCFParser.VISIBLE - 99)) | (1 << (JustMCFParser.BLUE - 99)) | (1 << (JustMCFParser.GREEN - 99)) | (1 << (JustMCFParser.PINK - 99)) | (1 << (JustMCFParser.PURPLE - 99)) | (1 << (JustMCFParser.RED - 99)) | (1 << (JustMCFParser.WHITE - 99)) | (1 << (JustMCFParser.YELLOW - 99)) | (1 << (JustMCFParser.COLOR - 99)) | (1 << (JustMCFParser.NAME - 99)) | (1 << (JustMCFParser.STYLE - 99)) | (1 << (JustMCFParser.NOTCHED_6 - 99)) | (1 << (JustMCFParser.NOTCHED_10 - 99)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (JustMCFParser.NOTCHED_12 - 131)) | (1 << (JustMCFParser.NOTCHED_20 - 131)) | (1 << (JustMCFParser.PROGRESS - 131)) | (1 << (JustMCFParser.SET - 131)) | (1 << (JustMCFParser.TITLE - 131)) | (1 << (JustMCFParser.SUBTITLE - 131)) | (1 << (JustMCFParser.ACTIONBAR - 131)) | (1 << (JustMCFParser.TIMES - 131)) | (1 << (JustMCFParser.TEXT - 131)) | (1 << (JustMCFParser.ITEM - 131)) | (1 << (JustMCFParser.LOOT - 131)) | (1 << (JustMCFParser.GIVE - 131)) | (1 << (JustMCFParser.CLEAR - 131)) | (1 << (JustMCFParser.FISH - 131)) | (1 << (JustMCFParser.KILL - 131)) | (1 << (JustMCFParser.MINE - 131)) | (1 << (JustMCFParser.MAINHAND - 131)) | (1 << (JustMCFParser.OFFHAND - 131)) | (1 << (JustMCFParser.EFFECT - 131)) | (1 << (JustMCFParser.TAG - 131)) | (1 << (JustMCFParser.TP - 131)) | (1 << (JustMCFParser.GET - 131)) | (1 << (JustMCFParser.ATTR - 131)) | (1 << (JustMCFParser.BASE - 131)) | (1 << (JustMCFParser.DESTROY - 131)) | (1 << (JustMCFParser.KEEP - 131)) | (1 << (JustMCFParser.REPLACE - 131)) | (1 << (JustMCFParser.HOLLOW - 131)) | (1 << (JustMCFParser.OUTLINE - 131)) | (1 << (JustMCFParser.FORCE - 131)) | (1 << (JustMCFParser.MOVE - 131)) | (1 << (JustMCFParser.NORMAL - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (JustMCFParser.FILTERED - 163)) | (1 << (JustMCFParser.INTERFACE - 163)) | (1 << (JustMCFParser.WHILE - 163)) | (1 << (JustMCFParser.FOR - 163)) | (1 << (JustMCFParser.YEILD - 163)) | (1 << (JustMCFParser.BREAK - 163)) | (1 << (JustMCFParser.RETURN - 163)) | (1 << (JustMCFParser.REPLACED - 163)) | (1 << (JustMCFParser.DIM - 163)) | (1 << (JustMCFParser.DIMENSION - 163)) | (1 << (JustMCFParser.ITEM_MODIFIER - 163)) | (1 << (JustMCFParser.Selector - 163)) | (1 << (JustMCFParser.BYTE - 163)) | (1 << (JustMCFParser.SHORT - 163)) | (1 << (JustMCFParser.INT_ - 163)) | (1 << (JustMCFParser.LONG - 163)) | (1 << (JustMCFParser.FLOAT - 163)) | (1 << (JustMCFParser.DOUBLE - 163)) | (1 << (JustMCFParser.AcceptableName - 163)) | (1 << (JustMCFParser.NBTName - 163)))) !== 0)) {
				{
				{
				this.state = 445;
				this.statementInner();
				}
				}
				this.state = 450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 451;
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
		this.enterRule(_localctx, 26, JustMCFParser.RULE_funcImproveStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(JustMCFParser.FUNC);
			this.state = 454;
			this.nameSpaceFunc();
			this.state = 455;
			this.match(JustMCFParser.T__7);
			this.state = 456;
			this.funcImproveParam();
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 457;
				this.match(JustMCFParser.T__2);
				this.state = 458;
				this.funcImproveParam();
				}
				}
				this.state = 463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 464;
			this.match(JustMCFParser.T__8);
			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
				{
				this.state = 465;
				this.typeName();
				}
			}

			this.state = 468;
			this.match(JustMCFParser.T__4);
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__0 || _la === JustMCFParser.T__4 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JustMCFParser.T__32 - 33)) | (1 << (JustMCFParser.T__49 - 33)) | (1 << (JustMCFParser.T__51 - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JustMCFParser.LeagalCommand - 67)) | (1 << (JustMCFParser.NAMSP - 67)) | (1 << (JustMCFParser.NAMESPACE - 67)) | (1 << (JustMCFParser.LOCAL - 67)) | (1 << (JustMCFParser.EXEC - 67)) | (1 << (JustMCFParser.ALIGN - 67)) | (1 << (JustMCFParser.ANCHORED - 67)) | (1 << (JustMCFParser.EYES - 67)) | (1 << (JustMCFParser.FEET - 67)) | (1 << (JustMCFParser.IN - 67)) | (1 << (JustMCFParser.AS - 67)) | (1 << (JustMCFParser.AT - 67)) | (1 << (JustMCFParser.FACING - 67)) | (1 << (JustMCFParser.POSITIONED - 67)) | (1 << (JustMCFParser.POS - 67)) | (1 << (JustMCFParser.ROTATED - 67)) | (1 << (JustMCFParser.ROT - 67)) | (1 << (JustMCFParser.IF - 67)) | (1 << (JustMCFParser.UNLESS - 67)) | (1 << (JustMCFParser.ALL - 67)) | (1 << (JustMCFParser.MASKED - 67)) | (1 << (JustMCFParser.BIOME - 67)) | (1 << (JustMCFParser.VALUE - 67)) | (1 << (JustMCFParser.MAX - 67)) | (1 << (JustMCFParser.ENTITY - 67)) | (1 << (JustMCFParser.SCORE - 67)) | (1 << (JustMCFParser.PREDICATE - 67)) | (1 << (JustMCFParser.BLOCK - 67)) | (1 << (JustMCFParser.BLOCKS - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (JustMCFParser.SCB - 99)) | (1 << (JustMCFParser.DISPLAYNAME - 99)) | (1 << (JustMCFParser.RENDERTYPE - 99)) | (1 << (JustMCFParser.DISPLAY - 99)) | (1 << (JustMCFParser.ENABLE - 99)) | (1 << (JustMCFParser.LIST - 99)) | (1 << (JustMCFParser.DATA - 99)) | (1 << (JustMCFParser.STORAGE - 99)) | (1 << (JustMCFParser.RESET - 99)) | (1 << (JustMCFParser.ADD - 99)) | (1 << (JustMCFParser.REMOVE - 99)) | (1 << (JustMCFParser.FUNC - 99)) | (1 << (JustMCFParser.TAGGED - 99)) | (1 << (JustMCFParser.DEFAULT - 99)) | (1 << (JustMCFParser.PLAYER - 99)) | (1 << (JustMCFParser.PLAYERS - 99)) | (1 << (JustMCFParser.BOSSBAR - 99)) | (1 << (JustMCFParser.VISIBLE - 99)) | (1 << (JustMCFParser.BLUE - 99)) | (1 << (JustMCFParser.GREEN - 99)) | (1 << (JustMCFParser.PINK - 99)) | (1 << (JustMCFParser.PURPLE - 99)) | (1 << (JustMCFParser.RED - 99)) | (1 << (JustMCFParser.WHITE - 99)) | (1 << (JustMCFParser.YELLOW - 99)) | (1 << (JustMCFParser.COLOR - 99)) | (1 << (JustMCFParser.NAME - 99)) | (1 << (JustMCFParser.STYLE - 99)) | (1 << (JustMCFParser.NOTCHED_6 - 99)) | (1 << (JustMCFParser.NOTCHED_10 - 99)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (JustMCFParser.NOTCHED_12 - 131)) | (1 << (JustMCFParser.NOTCHED_20 - 131)) | (1 << (JustMCFParser.PROGRESS - 131)) | (1 << (JustMCFParser.SET - 131)) | (1 << (JustMCFParser.TITLE - 131)) | (1 << (JustMCFParser.SUBTITLE - 131)) | (1 << (JustMCFParser.ACTIONBAR - 131)) | (1 << (JustMCFParser.TIMES - 131)) | (1 << (JustMCFParser.TEXT - 131)) | (1 << (JustMCFParser.ITEM - 131)) | (1 << (JustMCFParser.LOOT - 131)) | (1 << (JustMCFParser.GIVE - 131)) | (1 << (JustMCFParser.CLEAR - 131)) | (1 << (JustMCFParser.FISH - 131)) | (1 << (JustMCFParser.KILL - 131)) | (1 << (JustMCFParser.MINE - 131)) | (1 << (JustMCFParser.MAINHAND - 131)) | (1 << (JustMCFParser.OFFHAND - 131)) | (1 << (JustMCFParser.EFFECT - 131)) | (1 << (JustMCFParser.TAG - 131)) | (1 << (JustMCFParser.TP - 131)) | (1 << (JustMCFParser.GET - 131)) | (1 << (JustMCFParser.ATTR - 131)) | (1 << (JustMCFParser.BASE - 131)) | (1 << (JustMCFParser.DESTROY - 131)) | (1 << (JustMCFParser.KEEP - 131)) | (1 << (JustMCFParser.REPLACE - 131)) | (1 << (JustMCFParser.HOLLOW - 131)) | (1 << (JustMCFParser.OUTLINE - 131)) | (1 << (JustMCFParser.FORCE - 131)) | (1 << (JustMCFParser.MOVE - 131)) | (1 << (JustMCFParser.NORMAL - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (JustMCFParser.FILTERED - 163)) | (1 << (JustMCFParser.INTERFACE - 163)) | (1 << (JustMCFParser.WHILE - 163)) | (1 << (JustMCFParser.FOR - 163)) | (1 << (JustMCFParser.YEILD - 163)) | (1 << (JustMCFParser.BREAK - 163)) | (1 << (JustMCFParser.RETURN - 163)) | (1 << (JustMCFParser.REPLACED - 163)) | (1 << (JustMCFParser.DIM - 163)) | (1 << (JustMCFParser.DIMENSION - 163)) | (1 << (JustMCFParser.ITEM_MODIFIER - 163)) | (1 << (JustMCFParser.Selector - 163)) | (1 << (JustMCFParser.BYTE - 163)) | (1 << (JustMCFParser.SHORT - 163)) | (1 << (JustMCFParser.INT_ - 163)) | (1 << (JustMCFParser.LONG - 163)) | (1 << (JustMCFParser.FLOAT - 163)) | (1 << (JustMCFParser.DOUBLE - 163)) | (1 << (JustMCFParser.AcceptableName - 163)) | (1 << (JustMCFParser.NBTName - 163)))) !== 0)) {
				{
				{
				this.state = 469;
				this.funcImproveStatementInner();
				}
				}
				this.state = 474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 475;
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
		this.enterRule(_localctx, 28, JustMCFParser.RULE_funcImproveParam);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 477;
				this.typeName();
				}
				break;
			}
			this.state = 480;
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
		this.enterRule(_localctx, 30, JustMCFParser.RULE_funcImproveStatementInner);
		try {
			this.state = 484;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 482;
				this.statementInner();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 483;
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
		this.enterRule(_localctx, 32, JustMCFParser.RULE_yeildStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.match(JustMCFParser.YEILD);
			this.state = 487;
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
		this.enterRule(_localctx, 34, JustMCFParser.RULE_funcRunStatement);
		try {
			this.state = 493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 489;
				this.match(JustMCFParser.FUNC);
				this.state = 490;
				this.nameSpaceFunc();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 491;
				this.match(JustMCFParser.FUNC);
				this.state = 492;
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
		this.enterRule(_localctx, 36, JustMCFParser.RULE_funcImproveRunStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
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
		this.enterRule(_localctx, 38, JustMCFParser.RULE_funcImproveRunExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.match(JustMCFParser.FUNC);
			this.state = 498;
			this.nameSpaceFunc();
			this.state = 499;
			this.match(JustMCFParser.T__7);
			this.state = 500;
			this.funcImproveRunParam();
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 501;
				this.match(JustMCFParser.T__2);
				this.state = 502;
				this.funcImproveRunParam();
				}
				}
				this.state = 507;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 508;
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
		this.enterRule(_localctx, 40, JustMCFParser.RULE_funcImproveRunParam);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
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
		this.enterRule(_localctx, 42, JustMCFParser.RULE_execStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 548;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				_localctx = new ExecWithRunOrChildContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.EXEC) {
					{
					this.state = 512;
					this.match(JustMCFParser.EXEC);
					}
				}

				this.state = 515;
				this.match(JustMCFParser.T__4);
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__9 || _la === JustMCFParser.T__10 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JustMCFParser.T__32 - 33)) | (1 << (JustMCFParser.T__49 - 33)) | (1 << (JustMCFParser.T__51 - 33)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)) | (1 << (JustMCFParser.NBTName - 167)))) !== 0)) {
					{
					{
					this.state = 516;
					this.execChild();
					}
					}
					this.state = 521;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 522;
				this.match(JustMCFParser.T__5);
				this.state = 526;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 523;
						this.execStoreChild();
						}
						}
					}
					this.state = 528;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				}
				this.state = 531;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JustMCFParser.T__0:
					{
					this.state = 529;
					this.execRunChild();
					}
					break;
				case JustMCFParser.T__9:
				case JustMCFParser.T__10:
					{
					this.state = 530;
					this.execStoreChild();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 536;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 533;
						this.execStoreChild();
						}
						}
					}
					this.state = 538;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				}
				}
				break;

			case 2:
				_localctx = new ExecWithoutRunOrChildContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 539;
				this.match(JustMCFParser.EXEC);
				this.state = 540;
				this.match(JustMCFParser.T__4);
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 541;
					this.execChild();
					}
					}
					this.state = 544;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === JustMCFParser.T__9 || _la === JustMCFParser.T__10 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JustMCFParser.T__32 - 33)) | (1 << (JustMCFParser.T__49 - 33)) | (1 << (JustMCFParser.T__51 - 33)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)) | (1 << (JustMCFParser.NBTName - 167)))) !== 0));
				this.state = 546;
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
		this.enterRule(_localctx, 44, JustMCFParser.RULE_execStoreChild);
		let _la: number;
		try {
			this.state = 586;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				_localctx = new ExecStoreResultScoreContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 550;
				this.match(JustMCFParser.T__9);
				this.state = 551;
				this.scbIdentifier();
				}
				break;

			case 2:
				_localctx = new ExecStoreSuccessScoreContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 552;
				this.match(JustMCFParser.T__10);
				this.state = 553;
				this.scbIdentifier();
				}
				break;

			case 3:
				_localctx = new ExecStoreResultDataContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 554;
				this.match(JustMCFParser.T__9);
				this.state = 555;
				this.dataIdentifier();
				this.state = 562;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 556;
					this.numberType();
					this.state = 558;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__11) {
						{
						this.state = 557;
						this.match(JustMCFParser.T__11);
						}
					}

					this.state = 560;
					this.match(JustMCFParser.NUMBER);
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new ExecStoreSuccessDataContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 564;
				this.match(JustMCFParser.T__10);
				this.state = 565;
				this.dataIdentifier();
				this.state = 572;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 566;
					this.numberType();
					this.state = 568;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__11) {
						{
						this.state = 567;
						this.match(JustMCFParser.T__11);
						}
					}

					this.state = 570;
					this.match(JustMCFParser.NUMBER);
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new ExecStoreResultBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 574;
				this.match(JustMCFParser.T__9);
				this.state = 575;
				this.match(JustMCFParser.BOSSBAR);
				this.state = 576;
				this.nameSpaceBossbar();
				this.state = 578;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 577;
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
				this.state = 580;
				this.match(JustMCFParser.T__10);
				this.state = 581;
				this.match(JustMCFParser.BOSSBAR);
				this.state = 582;
				this.nameSpaceBossbar();
				this.state = 584;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 583;
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
		this.enterRule(_localctx, 46, JustMCFParser.RULE_execRunChild);
		let _la: number;
		try {
			this.state = 604;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				_localctx = new ExecDirectRunContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 588;
				this.match(JustMCFParser.T__0);
				this.state = 589;
				this.statement();
				}
				break;

			case 2:
				_localctx = new ExecNamedRunContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.match(JustMCFParser.T__0);
				this.state = 591;
				this.funcStatement();
				}
				break;

			case 3:
				_localctx = new ExecAnonymousRunContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 592;
				this.match(JustMCFParser.T__0);
				this.state = 594;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.FUNC) {
					{
					this.state = 593;
					this.match(JustMCFParser.FUNC);
					}
				}

				this.state = 596;
				this.match(JustMCFParser.T__4);
				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__0 || _la === JustMCFParser.T__4 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JustMCFParser.T__32 - 33)) | (1 << (JustMCFParser.T__49 - 33)) | (1 << (JustMCFParser.T__51 - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JustMCFParser.LeagalCommand - 67)) | (1 << (JustMCFParser.NAMSP - 67)) | (1 << (JustMCFParser.NAMESPACE - 67)) | (1 << (JustMCFParser.LOCAL - 67)) | (1 << (JustMCFParser.EXEC - 67)) | (1 << (JustMCFParser.ALIGN - 67)) | (1 << (JustMCFParser.ANCHORED - 67)) | (1 << (JustMCFParser.EYES - 67)) | (1 << (JustMCFParser.FEET - 67)) | (1 << (JustMCFParser.IN - 67)) | (1 << (JustMCFParser.AS - 67)) | (1 << (JustMCFParser.AT - 67)) | (1 << (JustMCFParser.FACING - 67)) | (1 << (JustMCFParser.POSITIONED - 67)) | (1 << (JustMCFParser.POS - 67)) | (1 << (JustMCFParser.ROTATED - 67)) | (1 << (JustMCFParser.ROT - 67)) | (1 << (JustMCFParser.IF - 67)) | (1 << (JustMCFParser.UNLESS - 67)) | (1 << (JustMCFParser.ALL - 67)) | (1 << (JustMCFParser.MASKED - 67)) | (1 << (JustMCFParser.BIOME - 67)) | (1 << (JustMCFParser.VALUE - 67)) | (1 << (JustMCFParser.MAX - 67)) | (1 << (JustMCFParser.ENTITY - 67)) | (1 << (JustMCFParser.SCORE - 67)) | (1 << (JustMCFParser.PREDICATE - 67)) | (1 << (JustMCFParser.BLOCK - 67)) | (1 << (JustMCFParser.BLOCKS - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (JustMCFParser.SCB - 99)) | (1 << (JustMCFParser.DISPLAYNAME - 99)) | (1 << (JustMCFParser.RENDERTYPE - 99)) | (1 << (JustMCFParser.DISPLAY - 99)) | (1 << (JustMCFParser.ENABLE - 99)) | (1 << (JustMCFParser.LIST - 99)) | (1 << (JustMCFParser.DATA - 99)) | (1 << (JustMCFParser.STORAGE - 99)) | (1 << (JustMCFParser.RESET - 99)) | (1 << (JustMCFParser.ADD - 99)) | (1 << (JustMCFParser.REMOVE - 99)) | (1 << (JustMCFParser.FUNC - 99)) | (1 << (JustMCFParser.TAGGED - 99)) | (1 << (JustMCFParser.DEFAULT - 99)) | (1 << (JustMCFParser.PLAYER - 99)) | (1 << (JustMCFParser.PLAYERS - 99)) | (1 << (JustMCFParser.BOSSBAR - 99)) | (1 << (JustMCFParser.VISIBLE - 99)) | (1 << (JustMCFParser.BLUE - 99)) | (1 << (JustMCFParser.GREEN - 99)) | (1 << (JustMCFParser.PINK - 99)) | (1 << (JustMCFParser.PURPLE - 99)) | (1 << (JustMCFParser.RED - 99)) | (1 << (JustMCFParser.WHITE - 99)) | (1 << (JustMCFParser.YELLOW - 99)) | (1 << (JustMCFParser.COLOR - 99)) | (1 << (JustMCFParser.NAME - 99)) | (1 << (JustMCFParser.STYLE - 99)) | (1 << (JustMCFParser.NOTCHED_6 - 99)) | (1 << (JustMCFParser.NOTCHED_10 - 99)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (JustMCFParser.NOTCHED_12 - 131)) | (1 << (JustMCFParser.NOTCHED_20 - 131)) | (1 << (JustMCFParser.PROGRESS - 131)) | (1 << (JustMCFParser.SET - 131)) | (1 << (JustMCFParser.TITLE - 131)) | (1 << (JustMCFParser.SUBTITLE - 131)) | (1 << (JustMCFParser.ACTIONBAR - 131)) | (1 << (JustMCFParser.TIMES - 131)) | (1 << (JustMCFParser.TEXT - 131)) | (1 << (JustMCFParser.ITEM - 131)) | (1 << (JustMCFParser.LOOT - 131)) | (1 << (JustMCFParser.GIVE - 131)) | (1 << (JustMCFParser.CLEAR - 131)) | (1 << (JustMCFParser.FISH - 131)) | (1 << (JustMCFParser.KILL - 131)) | (1 << (JustMCFParser.MINE - 131)) | (1 << (JustMCFParser.MAINHAND - 131)) | (1 << (JustMCFParser.OFFHAND - 131)) | (1 << (JustMCFParser.EFFECT - 131)) | (1 << (JustMCFParser.TAG - 131)) | (1 << (JustMCFParser.TP - 131)) | (1 << (JustMCFParser.GET - 131)) | (1 << (JustMCFParser.ATTR - 131)) | (1 << (JustMCFParser.BASE - 131)) | (1 << (JustMCFParser.DESTROY - 131)) | (1 << (JustMCFParser.KEEP - 131)) | (1 << (JustMCFParser.REPLACE - 131)) | (1 << (JustMCFParser.HOLLOW - 131)) | (1 << (JustMCFParser.OUTLINE - 131)) | (1 << (JustMCFParser.FORCE - 131)) | (1 << (JustMCFParser.MOVE - 131)) | (1 << (JustMCFParser.NORMAL - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (JustMCFParser.FILTERED - 163)) | (1 << (JustMCFParser.INTERFACE - 163)) | (1 << (JustMCFParser.WHILE - 163)) | (1 << (JustMCFParser.FOR - 163)) | (1 << (JustMCFParser.YEILD - 163)) | (1 << (JustMCFParser.BREAK - 163)) | (1 << (JustMCFParser.RETURN - 163)) | (1 << (JustMCFParser.REPLACED - 163)) | (1 << (JustMCFParser.DIM - 163)) | (1 << (JustMCFParser.DIMENSION - 163)) | (1 << (JustMCFParser.ITEM_MODIFIER - 163)) | (1 << (JustMCFParser.Selector - 163)) | (1 << (JustMCFParser.BYTE - 163)) | (1 << (JustMCFParser.SHORT - 163)) | (1 << (JustMCFParser.INT_ - 163)) | (1 << (JustMCFParser.LONG - 163)) | (1 << (JustMCFParser.FLOAT - 163)) | (1 << (JustMCFParser.DOUBLE - 163)) | (1 << (JustMCFParser.AcceptableName - 163)) | (1 << (JustMCFParser.NBTName - 163)))) !== 0)) {
					{
					{
					this.state = 597;
					this.statementInner();
					}
					}
					this.state = 602;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public execChild(): ExecChildContext {
		let _localctx: ExecChildContext = new ExecChildContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, JustMCFParser.RULE_execChild);
		let _la: number;
		try {
			this.state = 703;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				_localctx = new ExecAlignContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 606;
				this.match(JustMCFParser.ALIGN);
				this.state = 607;
				this.match(JustMCFParser.AcceptableName);
				}
				break;

			case 2:
				_localctx = new ExecAnchoredContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 608;
				this.match(JustMCFParser.ANCHORED);
				this.state = 609;
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
				this.state = 610;
				this.match(JustMCFParser.IN);
				this.state = 611;
				this.nameSpaceDim();
				}
				break;

			case 4:
				_localctx = new ExecAsContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 612;
				this.match(JustMCFParser.AS);
				this.state = 613;
				this.selector();
				}
				break;

			case 5:
				_localctx = new ExecAtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 614;
				this.match(JustMCFParser.AT);
				this.state = 615;
				this.selector();
				}
				break;

			case 6:
				_localctx = new ExecFacingPosContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 616;
				this.match(JustMCFParser.FACING);
				this.state = 617;
				this.pos3Identifier();
				}
				break;

			case 7:
				_localctx = new ExecFacingEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 618;
				this.match(JustMCFParser.FACING);
				this.state = 619;
				this.selector();
				this.state = 620;
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
				this.state = 622;
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
				this.state = 623;
				this.pos3Identifier();
				}
				break;

			case 9:
				_localctx = new ExecPostionedAsContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 624;
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
				this.state = 625;
				this.selector();
				}
				break;

			case 10:
				_localctx = new ExecRotatedPosContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 626;
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
				this.state = 627;
				this.pos2Identifier();
				}
				break;

			case 11:
				_localctx = new ExecRotatedAsContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 628;
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
				this.state = 629;
				this.selector();
				}
				break;

			case 12:
				_localctx = new ExecIfEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS) {
					{
					this.state = 630;
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

				this.state = 634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.ENTITY) {
					{
					this.state = 633;
					this.match(JustMCFParser.ENTITY);
					}
				}

				this.state = 636;
				this.selector();
				}
				break;

			case 13:
				_localctx = new ExecIfScoreContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 638;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 637;
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
				this.state = 641;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 640;
					this.match(JustMCFParser.SCORE);
					}
					break;
				}
				this.state = 643;
				this.scbIdentifier();
				this.state = 644;
				this.match(JustMCFParser.CompareOperation);
				this.state = 645;
				this.scbIdentifier();
				}
				break;

			case 14:
				_localctx = new ExecIfScoreMatchesContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 648;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 647;
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
				this.state = 651;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 650;
					this.match(JustMCFParser.SCORE);
					}
					break;
				}
				this.state = 653;
				this.scbIdentifier();
				this.state = 659;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JustMCFParser.T__12:
				case JustMCFParser.NUMBER:
				case JustMCFParser.MATCHES:
					{
					{
					this.state = 655;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.MATCHES) {
						{
						this.state = 654;
						this.match(JustMCFParser.MATCHES);
						}
					}

					this.state = 657;
					this.matchPart();
					}
					}
					break;
				case JustMCFParser.CompareOperation:
					{
					this.state = 658;
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
				this.state = 662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS) {
					{
					this.state = 661;
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

				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.BLOCK) {
					{
					this.state = 664;
					this.match(JustMCFParser.BLOCK);
					}
				}

				this.state = 667;
				this.pos3Identifier();
				this.state = 668;
				this.blockIdentifier();
				}
				break;

			case 16:
				_localctx = new ExecIfBlocksContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS) {
					{
					this.state = 670;
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

				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.BLOCKS) {
					{
					this.state = 673;
					this.match(JustMCFParser.BLOCKS);
					}
				}

				this.state = 676;
				this.pos3Identifier();
				this.state = 677;
				this.pos3Identifier();
				this.state = 678;
				this.pos3Identifier();
				this.state = 679;
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
				this.state = 682;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 681;
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
				this.state = 685;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 684;
					this.match(JustMCFParser.DATA);
					}
					break;
				}
				this.state = 687;
				this.dataIdentifier();
				}
				break;

			case 18:
				_localctx = new ExecIfBiomeContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 689;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.IF || _la === JustMCFParser.UNLESS) {
					{
					this.state = 688;
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

				this.state = 691;
				this.match(JustMCFParser.BIOME);
				this.state = 692;
				this.pos3Identifier();
				this.state = 693;
				this.nameSpaceBiome();
				}
				break;

			case 19:
				_localctx = new ExecPredicateContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 696;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
				case 1:
					{
					this.state = 695;
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
				this.state = 699;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
				case 1:
					{
					this.state = 698;
					this.match(JustMCFParser.PREDICATE);
					}
					break;
				}
				this.state = 701;
				this.nameSpacePredicate();
				}
				break;

			case 20:
				_localctx = new ExecStoreContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 702;
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
		this.enterRule(_localctx, 50, JustMCFParser.RULE_matchPart);
		let _la: number;
		try {
			this.state = 713;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 705;
				this.match(JustMCFParser.NUMBER);
				this.state = 706;
				this.match(JustMCFParser.T__12);
				this.state = 708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 707;
					this.match(JustMCFParser.NUMBER);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 710;
				this.match(JustMCFParser.T__12);
				this.state = 711;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 712;
				this.match(JustMCFParser.NUMBER);
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
		this.enterRule(_localctx, 52, JustMCFParser.RULE_scbCompareNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 715;
			this.match(JustMCFParser.CompareOperation);
			this.state = 716;
			this.match(JustMCFParser.NUMBER);
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
		this.enterRule(_localctx, 54, JustMCFParser.RULE_dataIdentifier);
		try {
			this.state = 734;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				_localctx = new DataStorageLocalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 718;
				this.match(JustMCFParser.LOCAL);
				this.state = 719;
				this.match(JustMCFParser.T__13);
				this.state = 720;
				this.nbtPath();
				}
				break;

			case 2:
				_localctx = new DataStorageContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 721;
				this.nameSpaceStorage();
				this.state = 722;
				this.match(JustMCFParser.T__13);
				this.state = 723;
				this.nbtPath();
				}
				break;

			case 3:
				_localctx = new DataStorageWithEnvContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 725;
				this.acceptableName();
				}
				break;

			case 4:
				_localctx = new DataEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 726;
				this.selector();
				this.state = 727;
				this.match(JustMCFParser.T__13);
				this.state = 728;
				this.nbtPath();
				}
				break;

			case 5:
				_localctx = new DataBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 730;
				this.pos3Identifier();
				this.state = 731;
				this.match(JustMCFParser.T__13);
				this.state = 732;
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
	public dataMergeExpression(): DataMergeExpressionContext {
		let _localctx: DataMergeExpressionContext = new DataMergeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, JustMCFParser.RULE_dataMergeExpression);
		try {
			this.state = 748;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NAMSP:
			case JustMCFParser.NAMESPACE:
			case JustMCFParser.LOCAL:
			case JustMCFParser.EXEC:
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
				this.state = 736;
				this.nameSpaceStorage();
				this.state = 737;
				this.match(JustMCFParser.T__14);
				this.state = 738;
				this.nbt();
				}
				break;
			case JustMCFParser.T__32:
			case JustMCFParser.T__51:
			case JustMCFParser.Selector:
				_localctx = new DataMergeEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 740;
				this.selector();
				this.state = 741;
				this.match(JustMCFParser.T__14);
				this.state = 742;
				this.nbt();
				}
				break;
			case JustMCFParser.T__49:
				_localctx = new DataMergeBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 744;
				this.pos3Identifier();
				this.state = 745;
				this.match(JustMCFParser.T__14);
				this.state = 746;
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
		this.enterRule(_localctx, 58, JustMCFParser.RULE_dataOperationExpression);
		let _la: number;
		try {
			this.state = 809;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				_localctx = new DataGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 750;
				this.dataIdentifier();
				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__11 || _la === JustMCFParser.NUMBER) {
					{
					this.state = 752;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__11) {
						{
						this.state = 751;
						this.match(JustMCFParser.T__11);
						}
					}

					this.state = 754;
					this.match(JustMCFParser.NUMBER);
					}
				}

				}
				break;

			case 2:
				_localctx = new DataMergeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 757;
				this.dataMergeExpression();
				}
				break;

			case 3:
				_localctx = new DataModifyMergeValueContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 758;
				this.dataIdentifier();
				this.state = 759;
				this.match(JustMCFParser.T__14);
				this.state = 760;
				this.nbt();
				}
				break;

			case 4:
				_localctx = new DataModifyMergeFromContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 762;
				this.dataIdentifier();
				this.state = 763;
				this.match(JustMCFParser.T__14);
				this.state = 764;
				this.dataRightValue();
				}
				break;

			case 5:
				_localctx = new DataModifySetValueContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 767;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 766;
					this.typeName();
					}
					break;
				}
				this.state = 769;
				this.dataIdentifier();
				this.state = 770;
				this.match(JustMCFParser.T__6);
				this.state = 771;
				this.nbt();
				}
				break;

			case 6:
				_localctx = new DataModifySetFromContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 774;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
				case 1:
					{
					this.state = 773;
					this.typeName();
					}
					break;
				}
				this.state = 776;
				this.dataIdentifier();
				this.state = 777;
				this.match(JustMCFParser.T__6);
				this.state = 778;
				this.dataRightValue();
				}
				break;

			case 7:
				_localctx = new DataModifyAppendValueContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 780;
				this.dataIdentifier();
				this.state = 781;
				this.match(JustMCFParser.T__12);
				this.state = 782;
				this.nbt();
				}
				break;

			case 8:
				_localctx = new DataModifyAppendFromContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 784;
				this.dataIdentifier();
				this.state = 785;
				this.match(JustMCFParser.T__12);
				this.state = 786;
				this.dataRightValue();
				}
				break;

			case 9:
				_localctx = new DataModifyPrependValueContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 788;
				this.dataIdentifier();
				this.state = 789;
				this.match(JustMCFParser.T__15);
				this.state = 790;
				this.nbt();
				}
				break;

			case 10:
				_localctx = new DataModifyPrependFromContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 792;
				this.dataIdentifier();
				this.state = 793;
				this.match(JustMCFParser.T__15);
				this.state = 794;
				this.dataRightValue();
				}
				break;

			case 11:
				_localctx = new DataModifyInsertValueContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 796;
				this.dataIdentifier();
				this.state = 797;
				this.match(JustMCFParser.T__12);
				this.state = 798;
				this.match(JustMCFParser.NUMBER);
				this.state = 799;
				this.nbt();
				}
				break;

			case 12:
				_localctx = new DataModifyInsertFromContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 801;
				this.dataIdentifier();
				this.state = 802;
				this.match(JustMCFParser.T__12);
				this.state = 803;
				this.match(JustMCFParser.NUMBER);
				this.state = 804;
				this.dataRightValue();
				}
				break;

			case 13:
				_localctx = new DataRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 806;
				this.dataIdentifier();
				this.state = 807;
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
		this.enterRule(_localctx, 60, JustMCFParser.RULE_dataRightValue);
		try {
			this.state = 813;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 811;
				this.dataIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 812;
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
	public scbOperationExpression(): ScbOperationExpressionContext {
		let _localctx: ScbOperationExpressionContext = new ScbOperationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, JustMCFParser.RULE_scbOperationExpression);
		try {
			this.state = 874;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				_localctx = new ScbGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 815;
				this.scbIdentifier();
				}
				break;

			case 2:
				_localctx = new ScbAddContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 816;
				this.scbIdentifier();
				this.state = 817;
				this.match(JustMCFParser.T__16);
				this.state = 818;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 3:
				_localctx = new ScbRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 820;
				this.scbIdentifier();
				this.state = 821;
				this.match(JustMCFParser.T__17);
				this.state = 822;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 4:
				_localctx = new ScbSetContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 824;
				this.scbIdentifier();
				this.state = 825;
				this.match(JustMCFParser.T__6);
				this.state = 826;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 5:
				_localctx = new ScbOptAddAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 828;
				this.scbIdentifier();
				this.state = 829;
				this.match(JustMCFParser.T__16);
				this.state = 830;
				this.scbIdentifier();
				}
				break;

			case 6:
				_localctx = new ScbOptSubAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 832;
				this.scbIdentifier();
				this.state = 833;
				this.match(JustMCFParser.T__17);
				this.state = 834;
				this.scbIdentifier();
				}
				break;

			case 7:
				_localctx = new ScbOptMulAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 836;
				this.scbIdentifier();
				this.state = 837;
				this.match(JustMCFParser.T__18);
				this.state = 838;
				this.scbIdentifier();
				}
				break;

			case 8:
				_localctx = new ScbOptDivAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 840;
				this.scbIdentifier();
				this.state = 841;
				this.match(JustMCFParser.T__19);
				this.state = 842;
				this.scbIdentifier();
				}
				break;

			case 9:
				_localctx = new ScbOptModAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 844;
				this.scbIdentifier();
				this.state = 845;
				this.match(JustMCFParser.T__20);
				this.state = 846;
				this.scbIdentifier();
				}
				break;

			case 10:
				_localctx = new ScbOptExcFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 848;
				this.scbIdentifier();
				this.state = 849;
				this.match(JustMCFParser.T__21);
				this.state = 850;
				this.scbIdentifier();
				}
				break;

			case 11:
				_localctx = new ScbOptMinFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 852;
				this.scbIdentifier();
				this.state = 853;
				this.match(JustMCFParser.T__22);
				this.state = 854;
				this.scbIdentifier();
				}
				break;

			case 12:
				_localctx = new ScbOptMaxFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 856;
				this.scbIdentifier();
				this.state = 857;
				this.match(JustMCFParser.T__23);
				this.state = 858;
				this.scbIdentifier();
				}
				break;

			case 13:
				_localctx = new ScbOptAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 860;
				this.scbIdentifier();
				this.state = 861;
				this.match(JustMCFParser.T__6);
				this.state = 862;
				this.scbIdentifier();
				}
				break;

			case 14:
				_localctx = new ScbResetContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 864;
				this.scbIdentifier();
				this.state = 865;
				this.match(JustMCFParser.RESET);
				}
				break;

			case 15:
				_localctx = new ScbEnableContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 867;
				this.scbIdentifier();
				this.state = 868;
				this.match(JustMCFParser.ENABLE);
				}
				break;

			case 16:
				_localctx = new ScbOptExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 870;
				this.scbIdentifier();
				this.state = 871;
				this.match(JustMCFParser.T__24);
				this.state = 872;
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
		let _startState: number = 64;
		this.enterRecursionRule(_localctx, 64, JustMCFParser.RULE_scbSingleOperationExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 883;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NUMBER:
				{
				_localctx = new ScbTempNumberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 877;
				this.match(JustMCFParser.NUMBER);
				}
				break;
			case JustMCFParser.T__32:
			case JustMCFParser.T__51:
			case JustMCFParser.NAMSP:
			case JustMCFParser.NAMESPACE:
			case JustMCFParser.LOCAL:
			case JustMCFParser.EXEC:
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
				this.state = 878;
				this.scbIdentifier();
				}
				break;
			case JustMCFParser.T__7:
				{
				_localctx = new ScbParenExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 879;
				this.match(JustMCFParser.T__7);
				this.state = 880;
				this.scbSingleOperationExpression(0);
				this.state = 881;
				this.match(JustMCFParser.T__8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 896;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 894;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
					case 1:
						{
						_localctx = new ScbFuncExpressionContext(new ScbSingleOperationExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
						this.state = 885;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 886;
						(_localctx as ScbFuncExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JustMCFParser.T__22 || _la === JustMCFParser.T__23)) {
							(_localctx as ScbFuncExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 887;
						this.scbSingleOperationExpression(7);
						}
						break;

					case 2:
						{
						_localctx = new ScbOptMulDivModExpressionContext(new ScbSingleOperationExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
						this.state = 888;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 889;
						(_localctx as ScbOptMulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__11) | (1 << JustMCFParser.T__25) | (1 << JustMCFParser.T__26))) !== 0))) {
							(_localctx as ScbOptMulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 890;
						this.scbSingleOperationExpression(6);
						}
						break;

					case 3:
						{
						_localctx = new ScbOptAddSubExpressionContext(new ScbSingleOperationExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
						this.state = 891;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 892;
						(_localctx as ScbOptAddSubExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JustMCFParser.T__27 || _la === JustMCFParser.T__28)) {
							(_localctx as ScbOptAddSubExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 893;
						this.scbSingleOperationExpression(5);
						}
						break;
					}
					}
				}
				this.state = 898;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
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
	public scbIdentifier(): ScbIdentifierContext {
		let _localctx: ScbIdentifierContext = new ScbIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, JustMCFParser.RULE_scbIdentifier);
		try {
			this.state = 906;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NAMSP:
			case JustMCFParser.NAMESPACE:
			case JustMCFParser.LOCAL:
			case JustMCFParser.EXEC:
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
				this.state = 899;
				this.nbtName();
				this.state = 900;
				this.selector();
				}
				break;
			case JustMCFParser.T__32:
			case JustMCFParser.T__51:
			case JustMCFParser.Selector:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 902;
				this.selector();
				this.state = 903;
				this.match(JustMCFParser.T__29);
				this.state = 904;
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
	public dataStatement(): DataStatementContext {
		let _localctx: DataStatementContext = new DataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, JustMCFParser.RULE_dataStatement);
		let _la: number;
		try {
			this.state = 932;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				_localctx = new DataSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 908;
				this.match(JustMCFParser.DATA);
				this.state = 909;
				this.match(JustMCFParser.T__4);
				this.state = 913;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JustMCFParser.T__32 - 33)) | (1 << (JustMCFParser.T__49 - 33)) | (1 << (JustMCFParser.T__51 - 33)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 910;
					this.dataOperationExpression();
					}
					}
					this.state = 915;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 916;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				_localctx = new DataSIdentifierCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 917;
				this.match(JustMCFParser.DATA);
				this.state = 918;
				this.nameSpaceStorage();
				this.state = 921;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__13) {
					{
					this.state = 919;
					this.match(JustMCFParser.T__13);
					this.state = 920;
					this.acceptableName();
					}
				}

				this.state = 923;
				this.match(JustMCFParser.T__4);
				this.state = 927;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JustMCFParser.T__32 - 33)) | (1 << (JustMCFParser.T__49 - 33)) | (1 << (JustMCFParser.T__51 - 33)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 924;
					this.dataOperationExpression();
					}
					}
					this.state = 929;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 930;
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
	public scbPlayerStatement(): ScbPlayerStatementContext {
		let _localctx: ScbPlayerStatementContext = new ScbPlayerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, JustMCFParser.RULE_scbPlayerStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 934;
			this.match(JustMCFParser.SCB);
			this.state = 935;
			this.match(JustMCFParser.T__4);
			this.state = 939;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__32 || _la === JustMCFParser.T__51 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)) | (1 << (JustMCFParser.NBTName - 167)))) !== 0)) {
				{
				{
				this.state = 936;
				this.scbPlayerStatementInner();
				}
				}
				this.state = 941;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 942;
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
		this.enterRule(_localctx, 72, JustMCFParser.RULE_scbPlayerStatementInner);
		let _la: number;
		try {
			this.state = 949;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				_localctx = new ScbPlayerSIScbOperationExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 944;
				this.scbOperationExpression();
				}
				break;

			case 2:
				_localctx = new ScbPlayerSIScbListContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__32 || _la === JustMCFParser.T__51 || _la === JustMCFParser.Selector) {
					{
					this.state = 945;
					this.selector();
					}
				}

				this.state = 948;
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
		this.enterRule(_localctx, 74, JustMCFParser.RULE_scbObjectiveStatement);
		let _la: number;
		try {
			this.state = 1015;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				_localctx = new ScbObjSDeclareWithNameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 951;
				this.match(JustMCFParser.SCB);
				this.state = 956;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__7) {
					{
					this.state = 952;
					this.match(JustMCFParser.T__7);
					this.state = 953;
					this.criterion();
					this.state = 954;
					this.match(JustMCFParser.T__8);
					}
				}

				this.state = 958;
				this.acceptableName();
				this.state = 959;
				(_localctx as ScbObjSDeclareWithNameContext)._display = this.json();
				this.state = 971;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 960;
					this.match(JustMCFParser.T__4);
					this.state = 967;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JustMCFParser.T__30 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (JustMCFParser.DISPLAYNAME - 100)) | (1 << (JustMCFParser.RENDERTYPE - 100)) | (1 << (JustMCFParser.DISPLAY - 100)) | (1 << (JustMCFParser.REMOVE - 100)))) !== 0)) {
						{
						{
						this.state = 962;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__30) {
							{
							this.state = 961;
							this.match(JustMCFParser.T__30);
							}
						}

						this.state = 964;
						this.scbStatementInner();
						}
						}
						this.state = 969;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 970;
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
				this.state = 973;
				this.match(JustMCFParser.SCB);
				this.state = 974;
				this.match(JustMCFParser.T__7);
				this.state = 975;
				this.criterion();
				this.state = 976;
				this.match(JustMCFParser.T__8);
				this.state = 977;
				this.acceptableName();
				}
				break;

			case 3:
				_localctx = new ScbObjSDeclareDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 979;
				this.match(JustMCFParser.SCB);
				this.state = 984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__7) {
					{
					this.state = 980;
					this.match(JustMCFParser.T__7);
					this.state = 981;
					this.criterion();
					this.state = 982;
					this.match(JustMCFParser.T__8);
					}
				}

				this.state = 986;
				this.acceptableName();
				this.state = 987;
				this.match(JustMCFParser.DEFAULT);
				this.state = 999;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					this.state = 988;
					this.match(JustMCFParser.T__4);
					this.state = 995;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JustMCFParser.T__30 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (JustMCFParser.DISPLAYNAME - 100)) | (1 << (JustMCFParser.RENDERTYPE - 100)) | (1 << (JustMCFParser.DISPLAY - 100)) | (1 << (JustMCFParser.REMOVE - 100)))) !== 0)) {
						{
						{
						this.state = 990;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__30) {
							{
							this.state = 989;
							this.match(JustMCFParser.T__30);
							}
						}

						this.state = 992;
						this.scbStatementInner();
						}
						}
						this.state = 997;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 998;
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
				this.state = 1001;
				this.match(JustMCFParser.SCB);
				this.state = 1002;
				this.acceptableName();
				this.state = 1003;
				this.match(JustMCFParser.T__4);
				this.state = 1010;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__30 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (JustMCFParser.DISPLAYNAME - 100)) | (1 << (JustMCFParser.RENDERTYPE - 100)) | (1 << (JustMCFParser.DISPLAY - 100)) | (1 << (JustMCFParser.REMOVE - 100)))) !== 0)) {
					{
					{
					this.state = 1005;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__30) {
						{
						this.state = 1004;
						this.match(JustMCFParser.T__30);
						}
					}

					this.state = 1007;
					this.scbStatementInner();
					}
					}
					this.state = 1012;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1013;
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
		this.enterRule(_localctx, 76, JustMCFParser.RULE_scbStatementInner);
		let _la: number;
		try {
			this.state = 1024;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.REMOVE:
				_localctx = new ScbSIRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1017;
				this.match(JustMCFParser.REMOVE);
				}
				break;
			case JustMCFParser.DISPLAYNAME:
				_localctx = new ScbSIDisplaynameContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1018;
				this.match(JustMCFParser.DISPLAYNAME);
				this.state = 1019;
				this.json();
				}
				break;
			case JustMCFParser.RENDERTYPE:
				_localctx = new ScbSIRendertypeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1020;
				this.match(JustMCFParser.RENDERTYPE);
				this.state = 1021;
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
				this.state = 1022;
				this.match(JustMCFParser.DISPLAY);
				this.state = 1023;
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
		this.enterRule(_localctx, 78, JustMCFParser.RULE_bossbarStatement);
		let _la: number;
		try {
			this.state = 1056;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				_localctx = new BossbarSDeclareContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1026;
				this.match(JustMCFParser.BOSSBAR);
				this.state = 1027;
				this.nameSpaceBossbar();
				this.state = 1028;
				this.json();
				this.state = 1040;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__4) {
					{
					this.state = 1029;
					this.match(JustMCFParser.T__4);
					this.state = 1036;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JustMCFParser.T__30 || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JustMCFParser.VALUE - 91)) | (1 << (JustMCFParser.MAX - 91)) | (1 << (JustMCFParser.REMOVE - 91)) | (1 << (JustMCFParser.PLAYER - 91)) | (1 << (JustMCFParser.PLAYERS - 91)) | (1 << (JustMCFParser.VISIBLE - 91)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (JustMCFParser.COLOR - 126)) | (1 << (JustMCFParser.NAME - 126)) | (1 << (JustMCFParser.STYLE - 126)) | (1 << (JustMCFParser.SET - 126)) | (1 << (JustMCFParser.GET - 126)))) !== 0)) {
						{
						{
						this.state = 1031;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__30) {
							{
							this.state = 1030;
							this.match(JustMCFParser.T__30);
							}
						}

						this.state = 1033;
						this.bossbarStatementInner();
						}
						}
						this.state = 1038;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1039;
					this.match(JustMCFParser.T__5);
					}
				}

				}
				break;

			case 2:
				_localctx = new BossbarSOperationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1042;
				this.match(JustMCFParser.BOSSBAR);
				this.state = 1043;
				this.nameSpaceBossbar();
				this.state = 1044;
				this.match(JustMCFParser.T__4);
				this.state = 1051;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__30 || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JustMCFParser.VALUE - 91)) | (1 << (JustMCFParser.MAX - 91)) | (1 << (JustMCFParser.REMOVE - 91)) | (1 << (JustMCFParser.PLAYER - 91)) | (1 << (JustMCFParser.PLAYERS - 91)) | (1 << (JustMCFParser.VISIBLE - 91)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (JustMCFParser.COLOR - 126)) | (1 << (JustMCFParser.NAME - 126)) | (1 << (JustMCFParser.STYLE - 126)) | (1 << (JustMCFParser.SET - 126)) | (1 << (JustMCFParser.GET - 126)))) !== 0)) {
					{
					{
					this.state = 1046;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__30) {
						{
						this.state = 1045;
						this.match(JustMCFParser.T__30);
						}
					}

					this.state = 1048;
					this.bossbarStatementInner();
					}
					}
					this.state = 1053;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1054;
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
		this.enterRule(_localctx, 80, JustMCFParser.RULE_bossbarStatementInner);
		let _la: number;
		try {
			this.state = 1103;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				_localctx = new BossbarSIGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1059;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.GET) {
					{
					this.state = 1058;
					this.match(JustMCFParser.GET);
					}
				}

				this.state = 1061;
				(_localctx as BossbarSIGetContext)._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JustMCFParser.VALUE - 91)) | (1 << (JustMCFParser.MAX - 91)) | (1 << (JustMCFParser.PLAYER - 91)) | (1 << (JustMCFParser.VISIBLE - 91)))) !== 0))) {
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
				this.state = 1062;
				this.match(JustMCFParser.REMOVE);
				}
				break;

			case 3:
				_localctx = new BossbarSISetColorContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1063;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1066;
				this.match(JustMCFParser.COLOR);
				this.state = 1067;
				(_localctx as BossbarSISetColorContext)._color = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (JustMCFParser.BLUE - 119)) | (1 << (JustMCFParser.GREEN - 119)) | (1 << (JustMCFParser.PINK - 119)) | (1 << (JustMCFParser.PURPLE - 119)) | (1 << (JustMCFParser.RED - 119)) | (1 << (JustMCFParser.WHITE - 119)) | (1 << (JustMCFParser.YELLOW - 119)))) !== 0))) {
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
				this.state = 1069;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1068;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1071;
				this.match(JustMCFParser.MAX);
				this.state = 1072;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 5:
				_localctx = new BossbarSISetNameContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1073;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1076;
				this.match(JustMCFParser.NAME);
				this.state = 1077;
				this.json();
				}
				break;

			case 6:
				_localctx = new BossbarSISetPlayerContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1078;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1081;
				this.match(JustMCFParser.PLAYERS);
				this.state = 1082;
				this.selector();
				}
				break;

			case 7:
				_localctx = new BossbarSISetPlayerNullContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1083;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1086;
				this.match(JustMCFParser.PLAYERS);
				this.state = 1087;
				this.match(JustMCFParser.DEFAULT);
				}
				break;

			case 8:
				_localctx = new BossbarSISetStyleContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1089;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1088;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1091;
				this.match(JustMCFParser.STYLE);
				this.state = 1092;
				(_localctx as BossbarSISetStyleContext)._style = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (JustMCFParser.NOTCHED_6 - 129)) | (1 << (JustMCFParser.NOTCHED_10 - 129)) | (1 << (JustMCFParser.NOTCHED_12 - 129)) | (1 << (JustMCFParser.NOTCHED_20 - 129)) | (1 << (JustMCFParser.PROGRESS - 129)))) !== 0))) {
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
				this.state = 1094;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1093;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1096;
				this.match(JustMCFParser.VALUE);
				this.state = 1097;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 10:
				_localctx = new BossbarSISetVisibleContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1099;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.SET) {
					{
					this.state = 1098;
					this.match(JustMCFParser.SET);
					}
				}

				this.state = 1101;
				this.match(JustMCFParser.VISIBLE);
				this.state = 1102;
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
		this.enterRule(_localctx, 82, JustMCFParser.RULE_bossbarOperationExpression);
		let _la: number;
		try {
			this.state = 1124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				_localctx = new BossbarOpExprGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1105;
				this.match(JustMCFParser.BOSSBAR);
				this.state = 1106;
				this.nameSpaceBossbar();
				this.state = 1108;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 1107;
					(_localctx as BossbarOpExprGetContext)._type = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JustMCFParser.VALUE - 91)) | (1 << (JustMCFParser.MAX - 91)) | (1 << (JustMCFParser.PLAYER - 91)) | (1 << (JustMCFParser.VISIBLE - 91)))) !== 0))) {
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
				this.state = 1110;
				this.match(JustMCFParser.BOSSBAR);
				this.state = 1111;
				this.nameSpaceBossbar();
				this.state = 1113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.VALUE) {
					{
					this.state = 1112;
					this.match(JustMCFParser.VALUE);
					}
				}

				this.state = 1115;
				this.match(JustMCFParser.T__6);
				this.state = 1116;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 3:
				_localctx = new BossbarOpExprAssignMaxContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1118;
				this.match(JustMCFParser.BOSSBAR);
				this.state = 1119;
				this.nameSpaceBossbar();
				this.state = 1120;
				this.match(JustMCFParser.MAX);
				this.state = 1121;
				this.match(JustMCFParser.T__6);
				this.state = 1122;
				this.match(JustMCFParser.NUMBER);
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
	public titleStatement(): TitleStatementContext {
		let _localctx: TitleStatementContext = new TitleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, JustMCFParser.RULE_titleStatement);
		let _la: number;
		try {
			this.state = 1149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				_localctx = new TitleSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1126;
				this.match(JustMCFParser.TITLE);
				this.state = 1127;
				this.match(JustMCFParser.T__4);
				this.state = 1131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__32 || _la === JustMCFParser.T__51 || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1128;
					this.titleStatementInner();
					}
					}
					this.state = 1133;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1134;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				_localctx = new TitleSSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1135;
				this.match(JustMCFParser.TITLE);
				this.state = 1136;
				this.selector();
				this.state = 1137;
				this.match(JustMCFParser.T__4);
				this.state = 1144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__30 || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (JustMCFParser.RESET - 109)) | (1 << (JustMCFParser.TITLE - 109)) | (1 << (JustMCFParser.SUBTITLE - 109)) | (1 << (JustMCFParser.ACTIONBAR - 109)) | (1 << (JustMCFParser.TIMES - 109)))) !== 0) || _la === JustMCFParser.CLEAR) {
					{
					{
					this.state = 1139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__30) {
						{
						this.state = 1138;
						this.match(JustMCFParser.T__30);
						}
					}

					this.state = 1141;
					this.titleSelectorStatementInner();
					}
					}
					this.state = 1146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1147;
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
		this.enterRule(_localctx, 86, JustMCFParser.RULE_titleStatementInner);
		let _la: number;
		try {
			this.state = 1168;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				_localctx = new TitleSISelectorSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1151;
				this.selector();
				this.state = 1152;
				this.match(JustMCFParser.T__30);
				this.state = 1153;
				this.titleIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new TitleSISelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1155;
				this.selector();
				this.state = 1156;
				this.match(JustMCFParser.T__4);
				this.state = 1163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__30 || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (JustMCFParser.RESET - 109)) | (1 << (JustMCFParser.TITLE - 109)) | (1 << (JustMCFParser.SUBTITLE - 109)) | (1 << (JustMCFParser.ACTIONBAR - 109)) | (1 << (JustMCFParser.TIMES - 109)))) !== 0) || _la === JustMCFParser.CLEAR) {
					{
					{
					this.state = 1158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__30) {
						{
						this.state = 1157;
						this.match(JustMCFParser.T__30);
						}
					}

					this.state = 1160;
					this.titleSelectorStatementInner();
					}
					}
					this.state = 1165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1166;
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
		this.enterRule(_localctx, 88, JustMCFParser.RULE_titleSelectorStatementInner);
		let _la: number;
		try {
			this.state = 1178;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.TITLE:
			case JustMCFParser.SUBTITLE:
			case JustMCFParser.ACTIONBAR:
				_localctx = new TitleSSIJsonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1170;
				(_localctx as TitleSSIJsonContext)._pos = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)))) !== 0))) {
					(_localctx as TitleSSIJsonContext)._pos = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1171;
				this.json();
				}
				break;
			case JustMCFParser.CLEAR:
				_localctx = new TitleSSIClearContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1172;
				this.match(JustMCFParser.CLEAR);
				}
				break;
			case JustMCFParser.RESET:
				_localctx = new TitleSSIResetContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1173;
				this.match(JustMCFParser.RESET);
				}
				break;
			case JustMCFParser.TIMES:
				_localctx = new TitleSSITimesContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1174;
				this.match(JustMCFParser.TIMES);
				this.state = 1175;
				this.match(JustMCFParser.NUMBER);
				this.state = 1176;
				this.match(JustMCFParser.NUMBER);
				this.state = 1177;
				this.match(JustMCFParser.NUMBER);
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
		this.enterRule(_localctx, 90, JustMCFParser.RULE_titleIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				_localctx = new TitleISIJsonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1180;
				(_localctx as TitleISIJsonContext)._pos = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (JustMCFParser.TITLE - 135)) | (1 << (JustMCFParser.SUBTITLE - 135)) | (1 << (JustMCFParser.ACTIONBAR - 135)))) !== 0))) {
					(_localctx as TitleISIJsonContext)._pos = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1181;
				this.json();
				}
				break;

			case 2:
				_localctx = new TitleISIClearContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1182;
				this.match(JustMCFParser.TITLE);
				this.state = 1183;
				this.match(JustMCFParser.T__30);
				this.state = 1184;
				this.match(JustMCFParser.CLEAR);
				}
				break;

			case 3:
				_localctx = new TitleISIResetContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1185;
				this.match(JustMCFParser.TITLE);
				this.state = 1186;
				this.match(JustMCFParser.T__30);
				this.state = 1187;
				this.match(JustMCFParser.RESET);
				}
				break;

			case 4:
				_localctx = new TitleISITimesContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1188;
				this.match(JustMCFParser.TITLE);
				this.state = 1189;
				this.match(JustMCFParser.T__30);
				this.state = 1190;
				this.match(JustMCFParser.TIMES);
				this.state = 1191;
				this.match(JustMCFParser.NUMBER);
				this.state = 1192;
				this.match(JustMCFParser.NUMBER);
				this.state = 1193;
				this.match(JustMCFParser.NUMBER);
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
		this.enterRule(_localctx, 92, JustMCFParser.RULE_displayStatement);
		let _la: number;
		try {
			this.state = 1219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				_localctx = new DisplaySCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1196;
				this.match(JustMCFParser.DISPLAY);
				this.state = 1197;
				this.match(JustMCFParser.T__4);
				this.state = 1201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__32 || _la === JustMCFParser.T__51 || _la === JustMCFParser.SCB || _la === JustMCFParser.BOSSBAR || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1198;
					this.displayStatementInner();
					}
					}
					this.state = 1203;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1204;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				_localctx = new DisplaySSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1205;
				this.match(JustMCFParser.DISPLAY);
				this.state = 1206;
				this.selector();
				this.state = 1207;
				this.match(JustMCFParser.T__4);
				this.state = 1214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__30 || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (JustMCFParser.BOSSBAR - 117)) | (1 << (JustMCFParser.TITLE - 117)) | (1 << (JustMCFParser.SUBTITLE - 117)) | (1 << (JustMCFParser.ACTIONBAR - 117)) | (1 << (JustMCFParser.TEXT - 117)))) !== 0)) {
					{
					{
					this.state = 1209;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__30) {
						{
						this.state = 1208;
						this.match(JustMCFParser.T__30);
						}
					}

					this.state = 1211;
					this.displayIndependentStatementInner();
					}
					}
					this.state = 1216;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1217;
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
		this.enterRule(_localctx, 94, JustMCFParser.RULE_displayStatementInner);
		let _la: number;
		try {
			this.state = 1240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				_localctx = new DisplaySIScbContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1221;
				this.scbObjectiveStatement();
				}
				break;

			case 2:
				_localctx = new DisplaySIBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1222;
				this.bossbarStatement();
				}
				break;

			case 3:
				_localctx = new DisplaySISelectorSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1223;
				this.selector();
				this.state = 1224;
				this.match(JustMCFParser.T__30);
				this.state = 1225;
				this.displayIndependentStatementInner();
				}
				break;

			case 4:
				_localctx = new DisplaySISelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1227;
				this.selector();
				this.state = 1228;
				this.match(JustMCFParser.T__4);
				this.state = 1235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__30 || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (JustMCFParser.BOSSBAR - 117)) | (1 << (JustMCFParser.TITLE - 117)) | (1 << (JustMCFParser.SUBTITLE - 117)) | (1 << (JustMCFParser.ACTIONBAR - 117)) | (1 << (JustMCFParser.TEXT - 117)))) !== 0)) {
					{
					{
					this.state = 1230;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__30) {
						{
						this.state = 1229;
						this.match(JustMCFParser.T__30);
						}
					}

					this.state = 1232;
					this.displayIndependentStatementInner();
					}
					}
					this.state = 1237;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1238;
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
		this.enterRule(_localctx, 96, JustMCFParser.RULE_displayIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				_localctx = new DisplayISITitleSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1242;
				this.titleIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new DisplayISITitleCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1243;
				this.match(JustMCFParser.TITLE);
				this.state = 1244;
				this.match(JustMCFParser.T__4);
				this.state = 1248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (JustMCFParser.RESET - 109)) | (1 << (JustMCFParser.TITLE - 109)) | (1 << (JustMCFParser.SUBTITLE - 109)) | (1 << (JustMCFParser.ACTIONBAR - 109)) | (1 << (JustMCFParser.TIMES - 109)))) !== 0) || _la === JustMCFParser.CLEAR) {
					{
					{
					this.state = 1245;
					this.titleSelectorStatementInner();
					}
					}
					this.state = 1250;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1251;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 3:
				_localctx = new DisplayISITextContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1252;
				this.match(JustMCFParser.TEXT);
				this.state = 1253;
				this.json();
				}
				break;

			case 4:
				_localctx = new DisplayISIBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1254;
				this.match(JustMCFParser.BOSSBAR);
				this.state = 1255;
				this.nameSpaceBossbar();
				this.state = 1256;
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
		this.enterRule(_localctx, 98, JustMCFParser.RULE_itemStatement);
		let _la: number;
		try {
			this.state = 1280;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				_localctx = new ItemSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1260;
				this.match(JustMCFParser.ITEM);
				this.state = 1261;
				this.match(JustMCFParser.T__4);
				this.state = 1265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JustMCFParser.T__32 - 33)) | (1 << (JustMCFParser.T__49 - 33)) | (1 << (JustMCFParser.T__51 - 33)))) !== 0) || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1262;
					this.itemStatementInner();
					}
					}
					this.state = 1267;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1268;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				_localctx = new ItemSSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1269;
				this.match(JustMCFParser.ITEM);
				this.state = 1270;
				this.selector();
				this.state = 1271;
				this.match(JustMCFParser.T__4);
				this.state = 1275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__16 || _la === JustMCFParser.T__17 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1272;
					this.itemSelectorStatementInner();
					}
					}
					this.state = 1277;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1278;
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
		this.enterRule(_localctx, 100, JustMCFParser.RULE_lootStatement);
		let _la: number;
		try {
			this.state = 1302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				_localctx = new LootSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1282;
				this.match(JustMCFParser.LOOT);
				this.state = 1283;
				this.match(JustMCFParser.T__4);
				this.state = 1287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JustMCFParser.T__32 - 33)) | (1 << (JustMCFParser.T__49 - 33)) | (1 << (JustMCFParser.T__51 - 33)))) !== 0) || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1284;
					this.lootStatementInner();
					}
					}
					this.state = 1289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1290;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				_localctx = new LootSSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1291;
				this.match(JustMCFParser.LOOT);
				this.state = 1292;
				this.selector();
				this.state = 1293;
				this.match(JustMCFParser.T__4);
				this.state = 1297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__16 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1294;
					this.lootSelectorStatementInner();
					}
					}
					this.state = 1299;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1300;
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
		this.enterRule(_localctx, 102, JustMCFParser.RULE_lootStatementInner);
		let _la: number;
		try {
			this.state = 1333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				_localctx = new LootSIInsertContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1304;
				this.pos3Identifier();
				this.state = 1305;
				this.match(JustMCFParser.T__16);
				this.state = 1306;
				this.lootSource();
				}
				break;

			case 2:
				_localctx = new LootSISpawnContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1308;
				this.pos3Identifier();
				this.state = 1309;
				this.match(JustMCFParser.T__6);
				this.state = 1310;
				this.lootSource();
				}
				break;

			case 3:
				_localctx = new LootSIReplaceBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1312;
				this.pos3Identifier();
				this.state = 1313;
				this.match(JustMCFParser.T__13);
				this.state = 1314;
				this.lootIndependentStatementInnerReplaceEntity();
				}
				break;

			case 4:
				_localctx = new LootSIGiveContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1316;
				this.selector();
				this.state = 1317;
				this.lootIndependentStatementInnerGive();
				}
				break;

			case 5:
				_localctx = new LootSIReplaceEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1319;
				this.selector();
				this.state = 1320;
				this.match(JustMCFParser.T__13);
				this.state = 1321;
				this.lootIndependentStatementInnerReplaceEntity();
				}
				break;

			case 6:
				_localctx = new LootSISelectorNestContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1323;
				this.selector();
				this.state = 1324;
				this.match(JustMCFParser.T__4);
				this.state = 1328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__16 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1325;
					this.lootSelectorStatementInner();
					}
					}
					this.state = 1330;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1331;
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
		this.enterRule(_localctx, 104, JustMCFParser.RULE_lootSelectorStatementInner);
		try {
			this.state = 1337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1335;
				this.lootIndependentStatementInnerGive();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1336;
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
		this.enterRule(_localctx, 106, JustMCFParser.RULE_lootIndependentStatementInnerGive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1339;
			_la = this._input.LA(1);
			if (!(_la === JustMCFParser.T__16 || _la === JustMCFParser.GIVE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1340;
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
		this.enterRule(_localctx, 108, JustMCFParser.RULE_lootIndependentStatementInnerReplaceEntity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1342;
			this.item_slot();
			this.state = 1343;
			this.match(JustMCFParser.T__6);
			this.state = 1344;
			this.lootSource();
			this.state = 1346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__11) {
				{
				this.state = 1345;
				this.match(JustMCFParser.T__11);
				}
			}

			this.state = 1349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.NUMBER) {
				{
				this.state = 1348;
				this.match(JustMCFParser.NUMBER);
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
	public lootSource(): LootSourceContext {
		let _localctx: LootSourceContext = new LootSourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, JustMCFParser.RULE_lootSource);
		let _la: number;
		try {
			this.state = 1383;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				_localctx = new LootSourceFishHandContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1351;
				this.match(JustMCFParser.FISH);
				this.state = 1352;
				this.nameSpaceLoot();
				this.state = 1353;
				this.pos3Identifier();
				this.state = 1355;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
				case 1:
					{
					this.state = 1354;
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

			case 2:
				_localctx = new LootSourceFishToolContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1357;
				this.match(JustMCFParser.FISH);
				this.state = 1358;
				this.nameSpaceLoot();
				this.state = 1359;
				this.pos3Identifier();
				this.state = 1360;
				this.nameSpaceItem();
				}
				break;

			case 3:
				_localctx = new LootSourceLootContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1363;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
				case 1:
					{
					this.state = 1362;
					this.match(JustMCFParser.LOOT);
					}
					break;
				}
				this.state = 1365;
				this.nameSpaceLoot();
				}
				break;

			case 4:
				_localctx = new LootSourceKillContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.KILL) {
					{
					this.state = 1366;
					this.match(JustMCFParser.KILL);
					}
				}

				this.state = 1369;
				this.selector();
				}
				break;

			case 5:
				_localctx = new LootSourceMineHandContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.MINE) {
					{
					this.state = 1370;
					this.match(JustMCFParser.MINE);
					}
				}

				this.state = 1373;
				this.pos3Identifier();
				this.state = 1375;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
				case 1:
					{
					this.state = 1374;
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
				this.state = 1378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.MINE) {
					{
					this.state = 1377;
					this.match(JustMCFParser.MINE);
					}
				}

				this.state = 1380;
				this.pos3Identifier();
				this.state = 1381;
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
		this.enterRule(_localctx, 112, JustMCFParser.RULE_itemStatementInner);
		let _la: number;
		try {
			this.state = 1407;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				_localctx = new ItemSIGiveAndClearContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1385;
				this.selector();
				this.state = 1386;
				this.giveAndClearIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new ItemSIEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1388;
				this.selector();
				this.state = 1389;
				this.match(JustMCFParser.T__13);
				this.state = 1390;
				this.itemIndependentStatementInner();
				}
				break;

			case 3:
				_localctx = new ItemSIBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1392;
				this.pos3Identifier();
				this.state = 1393;
				this.match(JustMCFParser.T__13);
				this.state = 1394;
				this.itemIndependentStatementInner();
				}
				break;

			case 4:
				_localctx = new ItemSILootInnerContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1396;
				this.lootStatementInner();
				}
				break;

			case 5:
				_localctx = new ItemSISelectorNestContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1397;
				this.selector();
				this.state = 1398;
				this.match(JustMCFParser.T__4);
				this.state = 1402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__16 || _la === JustMCFParser.T__17 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1399;
					this.itemSelectorStatementInner();
					}
					}
					this.state = 1404;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1405;
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
		this.enterRule(_localctx, 114, JustMCFParser.RULE_itemSelectorStatementInner);
		try {
			this.state = 1412;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				_localctx = new ItemSSIGiveAndClearContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1409;
				this.giveAndClearIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new ItemSSIItemContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1410;
				this.itemIndependentStatementInner();
				}
				break;

			case 3:
				_localctx = new ItemSSILootInnerContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1411;
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
		this.enterRule(_localctx, 116, JustMCFParser.RULE_itemIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1440;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				_localctx = new ItemISIReplaceWithContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1414;
				this.item_slot();
				this.state = 1415;
				this.match(JustMCFParser.T__6);
				this.state = 1416;
				this.nameSpaceItem();
				this.state = 1418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 1417;
					this.match(JustMCFParser.NUMBER);
					}
				}

				}
				break;

			case 2:
				_localctx = new ItemISIReplaceFromEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1420;
				this.item_slot();
				this.state = 1421;
				this.match(JustMCFParser.T__6);
				this.state = 1422;
				this.selector();
				this.state = 1423;
				this.match(JustMCFParser.T__13);
				this.state = 1424;
				this.item_slot();
				this.state = 1426;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
				case 1:
					{
					this.state = 1425;
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
				this.state = 1428;
				this.item_slot();
				this.state = 1429;
				this.match(JustMCFParser.T__6);
				this.state = 1430;
				this.pos3Identifier();
				this.state = 1431;
				this.match(JustMCFParser.T__13);
				this.state = 1432;
				this.item_slot();
				this.state = 1434;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
				case 1:
					{
					this.state = 1433;
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
				this.state = 1436;
				this.item_slot();
				this.state = 1437;
				this.match(JustMCFParser.T__16);
				this.state = 1438;
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
		this.enterRule(_localctx, 118, JustMCFParser.RULE_giveAndClearIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1452;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__16:
			case JustMCFParser.GIVE:
				_localctx = new GiveISIContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1442;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__16 || _la === JustMCFParser.GIVE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1443;
				this.nameSpaceItem();
				this.state = 1445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 1444;
					this.match(JustMCFParser.NUMBER);
					}
				}

				}
				break;
			case JustMCFParser.T__17:
			case JustMCFParser.CLEAR:
				_localctx = new ClearISIContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1447;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__17 || _la === JustMCFParser.CLEAR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1448;
				this.item_predicate();
				this.state = 1450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 1449;
					this.match(JustMCFParser.NUMBER);
					}
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
		this.enterRule(_localctx, 120, JustMCFParser.RULE_attrStatement);
		let _la: number;
		try {
			this.state = 1474;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				_localctx = new AttrSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1454;
				this.match(JustMCFParser.ATTR);
				this.state = 1455;
				this.match(JustMCFParser.T__4);
				this.state = 1459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__32 || _la === JustMCFParser.T__51 || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1456;
					this.attrStatementInner();
					}
					}
					this.state = 1461;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1462;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				_localctx = new AttrSSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1463;
				this.match(JustMCFParser.ATTR);
				this.state = 1464;
				this.selector();
				this.state = 1465;
				this.match(JustMCFParser.T__4);
				this.state = 1469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1466;
					this.attrIndependentStatementInner();
					}
					}
					this.state = 1471;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1472;
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
		this.enterRule(_localctx, 122, JustMCFParser.RULE_attrStatementInner);
		let _la: number;
		try {
			this.state = 1490;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				_localctx = new AttrSISingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1476;
				this.selector();
				this.state = 1477;
				this.match(JustMCFParser.T__13);
				this.state = 1478;
				this.attrIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new AttrSISelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1480;
				this.selector();
				this.state = 1481;
				this.match(JustMCFParser.T__4);
				this.state = 1485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1482;
					this.attrIndependentStatementInner();
					}
					}
					this.state = 1487;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1488;
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
		this.enterRule(_localctx, 124, JustMCFParser.RULE_attrIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1536;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				_localctx = new AttrISIGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1492;
				this.registerName();
				this.state = 1494;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
				case 1:
					{
					this.state = 1493;
					this.match(JustMCFParser.ALL);
					}
					break;
				}
				this.state = 1500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__11 || _la === JustMCFParser.NUMBER) {
					{
					this.state = 1497;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__11) {
						{
						this.state = 1496;
						this.match(JustMCFParser.T__11);
						}
					}

					this.state = 1499;
					this.match(JustMCFParser.NUMBER);
					}
				}

				}
				break;

			case 2:
				_localctx = new AttrISIGetBaseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1502;
				this.registerName();
				this.state = 1503;
				this.match(JustMCFParser.BASE);
				this.state = 1508;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__11 || _la === JustMCFParser.NUMBER) {
					{
					this.state = 1505;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__11) {
						{
						this.state = 1504;
						this.match(JustMCFParser.T__11);
						}
					}

					this.state = 1507;
					this.match(JustMCFParser.NUMBER);
					}
				}

				}
				break;

			case 3:
				_localctx = new AttrISISetBaseContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1510;
				this.registerName();
				this.state = 1511;
				this.match(JustMCFParser.BASE);
				this.state = 1512;
				this.match(JustMCFParser.T__6);
				this.state = 1513;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 4:
				_localctx = new AttrISIModifierAddContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1515;
				this.registerName();
				this.state = 1516;
				this.match(JustMCFParser.T__16);
				this.state = 1517;
				this.match(JustMCFParser.UUID16_);
				this.state = 1518;
				this.acceptableName();
				this.state = 1519;
				this.match(JustMCFParser.T__7);
				this.state = 1520;
				(_localctx as AttrISIModifierAddContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (JustMCFParser.T__11 - 12)) | (1 << (JustMCFParser.T__27 - 12)) | (1 << (JustMCFParser.T__31 - 12)))) !== 0))) {
					(_localctx as AttrISIModifierAddContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1521;
				this.match(JustMCFParser.NUMBER);
				this.state = 1522;
				this.match(JustMCFParser.T__8);
				}
				break;

			case 5:
				_localctx = new AttrISIModifierRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1524;
				this.registerName();
				this.state = 1525;
				this.match(JustMCFParser.T__17);
				this.state = 1526;
				this.match(JustMCFParser.UUID16_);
				}
				break;

			case 6:
				_localctx = new AttrISIModifierGetContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1528;
				this.registerName();
				this.state = 1529;
				this.match(JustMCFParser.UUID16_);
				this.state = 1534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__11 || _la === JustMCFParser.NUMBER) {
					{
					this.state = 1531;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__11) {
						{
						this.state = 1530;
						this.match(JustMCFParser.T__11);
						}
					}

					this.state = 1533;
					this.match(JustMCFParser.NUMBER);
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
	public entityStatement(): EntityStatementContext {
		let _localctx: EntityStatementContext = new EntityStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, JustMCFParser.RULE_entityStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1625;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				_localctx = new EntitySDeclarePlayerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1538;
				this.match(JustMCFParser.ENTITY);
				this.state = 1539;
				this.match(JustMCFParser.T__7);
				this.state = 1540;
				this.match(JustMCFParser.PLAYER);
				this.state = 1541;
				this.match(JustMCFParser.T__8);
				this.state = 1542;
				this.playerName();
				this.state = 1549;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1544;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__2) {
							{
							this.state = 1543;
							this.match(JustMCFParser.T__2);
							}
						}

						this.state = 1546;
						this.playerName();
						}
						}
					}
					this.state = 1551;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
				}
				}
				break;

			case 2:
				_localctx = new EntitySDeclareContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1552;
				this.match(JustMCFParser.ENTITY);
				this.state = 1553;
				this.match(JustMCFParser.T__7);
				this.state = 1554;
				(_localctx as EntitySDeclareContext)._type = this.nameSpaceEntity();
				this.state = 1555;
				this.match(JustMCFParser.T__8);
				this.state = 1556;
				this.pos3Identifier();
				this.state = 1558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (JustMCFParser.T__39 - 40)) | (1 << (JustMCFParser.T__40 - 40)) | (1 << (JustMCFParser.T__41 - 40)) | (1 << (JustMCFParser.T__42 - 40)) | (1 << (JustMCFParser.T__43 - 40)) | (1 << (JustMCFParser.ByteNumber - 40)) | (1 << (JustMCFParser.ShortNumber - 40)) | (1 << (JustMCFParser.LongNumber - 40)) | (1 << (JustMCFParser.FloatNumber - 40)) | (1 << (JustMCFParser.DoubleNumber - 40)) | (1 << (JustMCFParser.STRING2 - 40)) | (1 << (JustMCFParser.STRING - 40)))) !== 0)) {
					{
					this.state = 1557;
					this.nbt();
					}
				}

				this.state = 1571;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
				case 1:
					{
					this.state = 1560;
					this.match(JustMCFParser.T__4);
					this.state = 1567;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JustMCFParser.T__30 || _la === JustMCFParser.TAG) {
						{
						{
						this.state = 1562;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__30) {
							{
							this.state = 1561;
							this.match(JustMCFParser.T__30);
							}
						}

						this.state = 1564;
						this.entityDeclareStatementInner();
						}
						}
						this.state = 1569;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1570;
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
				this.state = 1573;
				this.match(JustMCFParser.ENTITY);
				this.state = 1574;
				this.match(JustMCFParser.T__7);
				this.state = 1575;
				(_localctx as EntitySDeclareWithNameContext)._type = this.nameSpaceEntity();
				this.state = 1576;
				this.match(JustMCFParser.T__8);
				this.state = 1578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__49) {
					{
					this.state = 1577;
					this.pos3Identifier();
					}
				}

				this.state = 1580;
				this.acceptableName();
				this.state = 1582;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (JustMCFParser.T__39 - 40)) | (1 << (JustMCFParser.T__40 - 40)) | (1 << (JustMCFParser.T__41 - 40)) | (1 << (JustMCFParser.T__42 - 40)) | (1 << (JustMCFParser.T__43 - 40)) | (1 << (JustMCFParser.ByteNumber - 40)) | (1 << (JustMCFParser.ShortNumber - 40)) | (1 << (JustMCFParser.LongNumber - 40)) | (1 << (JustMCFParser.FloatNumber - 40)) | (1 << (JustMCFParser.DoubleNumber - 40)) | (1 << (JustMCFParser.STRING2 - 40)) | (1 << (JustMCFParser.STRING - 40)))) !== 0)) {
					{
					this.state = 1581;
					this.nbt();
					}
				}

				this.state = 1584;
				this.match(JustMCFParser.T__4);
				this.state = 1591;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1586;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__30) {
							{
							this.state = 1585;
							this.match(JustMCFParser.T__30);
							}
						}

						this.state = 1588;
						this.entityDeclareStatementInner();
						}
						}
					}
					this.state = 1593;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
				}
				this.state = 1598;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1594;
						this.match(JustMCFParser.T__30);
						this.state = 1595;
						this.entityIndependentStatementInner();
						}
						}
					}
					this.state = 1600;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
				}
				this.state = 1602;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
				case 1:
					{
					this.state = 1601;
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
				this.state = 1604;
				this.match(JustMCFParser.ENTITY);
				this.state = 1605;
				this.match(JustMCFParser.T__4);
				this.state = 1609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__32 || _la === JustMCFParser.T__51 || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1606;
					this.entityStatementInner();
					}
					}
					this.state = 1611;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1612;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 5:
				_localctx = new EntitySSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1613;
				this.match(JustMCFParser.ENTITY);
				this.state = 1614;
				this.selector();
				this.state = 1615;
				this.match(JustMCFParser.T__4);
				this.state = 1620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__30) {
					{
					{
					this.state = 1616;
					this.match(JustMCFParser.T__30);
					this.state = 1617;
					this.entityIndependentStatementInner();
					}
					}
					this.state = 1622;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1623;
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
		this.enterRule(_localctx, 128, JustMCFParser.RULE_playerName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__32) {
				{
				this.state = 1627;
				_localctx._fake = this.match(JustMCFParser.T__32);
				}
			}

			this.state = 1630;
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
		this.enterRule(_localctx, 130, JustMCFParser.RULE_entityDeclareStatementInner);
		let _la: number;
		try {
			_localctx = new EntityDeclareSITagContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1632;
			this.match(JustMCFParser.TAG);
			this.state = 1633;
			this.match(JustMCFParser.T__6);
			this.state = 1634;
			this.acceptableName();
			this.state = 1639;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 1635;
				this.match(JustMCFParser.T__2);
				this.state = 1636;
				this.acceptableName();
				}
				}
				this.state = 1641;
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
		this.enterRule(_localctx, 132, JustMCFParser.RULE_tagIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1650;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				_localctx = new TagISIAddContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1642;
				this.match(JustMCFParser.TAG);
				this.state = 1643;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__16 || _la === JustMCFParser.ADD)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1644;
				this.acceptableName();
				}
				break;

			case 2:
				_localctx = new TagISIRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1645;
				this.match(JustMCFParser.TAG);
				this.state = 1646;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__17 || _la === JustMCFParser.REMOVE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1647;
				this.acceptableName();
				}
				break;

			case 3:
				_localctx = new TagISIListContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1648;
				this.match(JustMCFParser.TAG);
				this.state = 1649;
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
		this.enterRule(_localctx, 134, JustMCFParser.RULE_effectIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1683;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
			case 1:
				_localctx = new EffectISIClearContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1652;
				this.match(JustMCFParser.EFFECT);
				this.state = 1653;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__17 || _la === JustMCFParser.CLEAR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1654;
				this.acceptableName();
				}
				break;

			case 2:
				_localctx = new EffectISIGiveContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1655;
				this.match(JustMCFParser.EFFECT);
				this.state = 1656;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__16 || _la === JustMCFParser.GIVE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1657;
				this.acceptableName();
				this.state = 1659;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
				case 1:
					{
					this.state = 1658;
					(_localctx as EffectISIGiveContext)._second = this.match(JustMCFParser.NUMBER);
					}
					break;
				}
				this.state = 1662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 1661;
					(_localctx as EffectISIGiveContext)._amplifier = this.match(JustMCFParser.NUMBER);
					}
				}

				this.state = 1665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.TRUE || _la === JustMCFParser.FALSE) {
					{
					this.state = 1664;
					this.boolValue();
					}
				}

				}
				break;

			case 3:
				_localctx = new EffectISIGiveSpContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1667;
				this.match(JustMCFParser.EFFECT);
				this.state = 1668;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__16 || _la === JustMCFParser.GIVE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1669;
				this.acceptableName();
				this.state = 1673;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__7) {
					{
					this.state = 1670;
					this.match(JustMCFParser.T__7);
					this.state = 1671;
					(_localctx as EffectISIGiveSpContext)._amplifier = this.match(JustMCFParser.NUMBER);
					this.state = 1672;
					this.match(JustMCFParser.T__8);
					}
				}

				this.state = 1676;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 1675;
					(_localctx as EffectISIGiveSpContext)._second = this.match(JustMCFParser.NUMBER);
					}
				}

				this.state = 1679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.TRUE || _la === JustMCFParser.FALSE) {
					{
					this.state = 1678;
					this.boolValue();
					}
				}

				}
				break;

			case 4:
				_localctx = new EffectISIClearAllContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1681;
				this.match(JustMCFParser.EFFECT);
				this.state = 1682;
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
		this.enterRule(_localctx, 136, JustMCFParser.RULE_tpIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1707;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				_localctx = new TpISIDestinationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1685;
				this.match(JustMCFParser.TP);
				this.state = 1686;
				this.selector();
				}
				break;

			case 2:
				_localctx = new TpISIPosContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1687;
				this.match(JustMCFParser.TP);
				this.state = 1688;
				this.pos3Identifier();
				}
				break;

			case 3:
				_localctx = new TpISIRotatedContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1689;
				this.match(JustMCFParser.TP);
				this.state = 1690;
				this.pos5Identifier();
				}
				break;

			case 4:
				_localctx = new TpISIRotatedDivContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1691;
				this.match(JustMCFParser.TP);
				this.state = 1692;
				this.pos3Identifier();
				this.state = 1693;
				this.pos2Identifier();
				}
				break;

			case 5:
				_localctx = new TpISIFacingContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1695;
				this.match(JustMCFParser.TP);
				this.state = 1696;
				this.pos3Identifier();
				this.state = 1697;
				this.match(JustMCFParser.FACING);
				this.state = 1698;
				this.pos3Identifier();
				}
				break;

			case 6:
				_localctx = new TpISIFacingEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1700;
				this.match(JustMCFParser.TP);
				this.state = 1701;
				this.pos3Identifier();
				this.state = 1702;
				this.match(JustMCFParser.FACING);
				this.state = 1703;
				this.selector();
				this.state = 1705;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
				case 1:
					{
					this.state = 1704;
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
		this.enterRule(_localctx, 138, JustMCFParser.RULE_entityIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1772;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				_localctx = new EntityISIGiveAndClearContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1709;
				this.giveAndClearIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new EntityISIKillContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1710;
				this.match(JustMCFParser.KILL);
				}
				break;

			case 3:
				_localctx = new EntityISITagContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1711;
				this.tagIndependentStatementInner();
				}
				break;

			case 4:
				_localctx = new EntityISIEffectContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1712;
				this.effectIndependentStatementInner();
				}
				break;

			case 5:
				_localctx = new EntityISITpContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1713;
				this.tpIndependentStatementInner();
				}
				break;

			case 6:
				_localctx = new EntityISITitleCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1714;
				this.match(JustMCFParser.TITLE);
				this.state = 1715;
				this.match(JustMCFParser.T__4);
				this.state = 1719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (JustMCFParser.RESET - 109)) | (1 << (JustMCFParser.TITLE - 109)) | (1 << (JustMCFParser.SUBTITLE - 109)) | (1 << (JustMCFParser.ACTIONBAR - 109)) | (1 << (JustMCFParser.TIMES - 109)))) !== 0) || _la === JustMCFParser.CLEAR) {
					{
					{
					this.state = 1716;
					this.titleSelectorStatementInner();
					}
					}
					this.state = 1721;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1722;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 7:
				_localctx = new EntityISIDisplayCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1723;
				this.match(JustMCFParser.DISPLAY);
				this.state = 1724;
				this.match(JustMCFParser.T__4);
				this.state = 1728;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (JustMCFParser.BOSSBAR - 117)) | (1 << (JustMCFParser.TITLE - 117)) | (1 << (JustMCFParser.SUBTITLE - 117)) | (1 << (JustMCFParser.ACTIONBAR - 117)) | (1 << (JustMCFParser.TEXT - 117)))) !== 0)) {
					{
					{
					this.state = 1725;
					this.displayIndependentStatementInner();
					}
					}
					this.state = 1730;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1731;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 8:
				_localctx = new EntityISIDisplaySingleContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1732;
				this.displayIndependentStatementInner();
				}
				break;

			case 9:
				_localctx = new EntityISIItemSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1733;
				this.match(JustMCFParser.ITEM);
				this.state = 1734;
				this.match(JustMCFParser.T__13);
				this.state = 1735;
				this.itemIndependentStatementInner();
				}
				break;

			case 10:
				_localctx = new EntityISILootGiveSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1736;
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
				this.state = 1737;
				this.lootIndependentStatementInnerGive();
				}
				break;

			case 11:
				_localctx = new EntityISILootSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1738;
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
				this.state = 1739;
				this.match(JustMCFParser.T__13);
				this.state = 1740;
				this.lootIndependentStatementInnerReplaceEntity();
				}
				break;

			case 12:
				_localctx = new EntityISIItemCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1741;
				this.match(JustMCFParser.ITEM);
				this.state = 1742;
				this.match(JustMCFParser.T__4);
				this.state = 1746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__16 || _la === JustMCFParser.T__17 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1743;
					this.itemSelectorStatementInner();
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

			case 13:
				_localctx = new EntityISILootCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1750;
				this.match(JustMCFParser.LOOT);
				this.state = 1751;
				this.match(JustMCFParser.T__4);
				this.state = 1755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__16 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1752;
					this.lootSelectorStatementInner();
					}
					}
					this.state = 1757;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1758;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 14:
				_localctx = new EntityISIAttrSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1759;
				this.match(JustMCFParser.ATTR);
				this.state = 1760;
				this.match(JustMCFParser.T__13);
				this.state = 1761;
				this.attrIndependentStatementInner();
				}
				break;

			case 15:
				_localctx = new EntityISIAttrCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1762;
				this.match(JustMCFParser.ATTR);
				this.state = 1763;
				this.match(JustMCFParser.T__4);
				this.state = 1767;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)))) !== 0)) {
					{
					{
					this.state = 1764;
					this.attrIndependentStatementInner();
					}
					}
					this.state = 1769;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1770;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 16:
				_localctx = new EntityISIExecContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1771;
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
		this.enterRule(_localctx, 140, JustMCFParser.RULE_entityStatementInner);
		let _la: number;
		try {
			this.state = 1786;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				_localctx = new EntitySIEntityExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1774;
				this.entityExpression();
				}
				break;

			case 2:
				_localctx = new EntitySISelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1775;
				this.selector();
				this.state = 1776;
				this.match(JustMCFParser.T__4);
				this.state = 1781;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__30) {
					{
					{
					this.state = 1777;
					this.match(JustMCFParser.T__30);
					this.state = 1778;
					this.entityIndependentStatementInner();
					}
					}
					this.state = 1783;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1784;
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
		this.enterRule(_localctx, 142, JustMCFParser.RULE_entityExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1788;
			this.selector();
			this.state = 1789;
			this.match(JustMCFParser.T__30);
			this.state = 1790;
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
		this.enterRule(_localctx, 144, JustMCFParser.RULE_blockStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1792;
			this.match(JustMCFParser.BLOCK);
			this.state = 1793;
			this.match(JustMCFParser.T__4);
			this.state = 1797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__49) {
				{
				{
				this.state = 1794;
				this.blockStatementInner();
				}
				}
				this.state = 1799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1800;
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
		this.enterRule(_localctx, 146, JustMCFParser.RULE_blockStatementInner);
		let _la: number;
		try {
			this.state = 1836;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				_localctx = new BlockSISetblockContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1802;
				this.pos3Identifier();
				this.state = 1803;
				this.blockIdentifier();
				this.state = 1805;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (JustMCFParser.DESTROY - 155)) | (1 << (JustMCFParser.KEEP - 155)) | (1 << (JustMCFParser.REPLACE - 155)))) !== 0)) {
					{
					this.state = 1804;
					(_localctx as BlockSISetblockContext)._mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (JustMCFParser.DESTROY - 155)) | (1 << (JustMCFParser.KEEP - 155)) | (1 << (JustMCFParser.REPLACE - 155)))) !== 0))) {
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
				this.state = 1807;
				this.pos3Identifier();
				this.state = 1808;
				this.pos3Identifier();
				this.state = 1809;
				this.blockIdentifier();
				this.state = 1811;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (JustMCFParser.DESTROY - 155)) | (1 << (JustMCFParser.KEEP - 155)) | (1 << (JustMCFParser.HOLLOW - 155)) | (1 << (JustMCFParser.OUTLINE - 155)))) !== 0)) {
					{
					this.state = 1810;
					(_localctx as BlockSIFillContext)._mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (JustMCFParser.DESTROY - 155)) | (1 << (JustMCFParser.KEEP - 155)) | (1 << (JustMCFParser.HOLLOW - 155)) | (1 << (JustMCFParser.OUTLINE - 155)))) !== 0))) {
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
				this.state = 1813;
				this.pos3Identifier();
				this.state = 1814;
				this.pos3Identifier();
				this.state = 1815;
				this.blockIdentifier();
				this.state = 1816;
				this.match(JustMCFParser.REPLACE);
				this.state = 1817;
				this.block_predicate();
				}
				break;

			case 4:
				_localctx = new BlockSICloneContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1819;
				this.pos3Identifier();
				this.state = 1820;
				this.pos3Identifier();
				this.state = 1821;
				this.pos3Identifier();
				this.state = 1823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.MASKED || _la === JustMCFParser.REPLACE) {
					{
					this.state = 1822;
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

				this.state = 1826;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.FORCE - 160)) | (1 << (JustMCFParser.MOVE - 160)) | (1 << (JustMCFParser.NORMAL - 160)))) !== 0)) {
					{
					this.state = 1825;
					(_localctx as BlockSICloneContext)._mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.FORCE - 160)) | (1 << (JustMCFParser.MOVE - 160)) | (1 << (JustMCFParser.NORMAL - 160)))) !== 0))) {
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
				this.state = 1828;
				this.pos3Identifier();
				this.state = 1829;
				this.pos3Identifier();
				this.state = 1830;
				this.pos3Identifier();
				this.state = 1831;
				this.match(JustMCFParser.FILTERED);
				this.state = 1832;
				this.block_predicate();
				this.state = 1834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.FORCE - 160)) | (1 << (JustMCFParser.MOVE - 160)) | (1 << (JustMCFParser.NORMAL - 160)))) !== 0)) {
					{
					this.state = 1833;
					(_localctx as BlockSICloneFilteredContext)._mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.FORCE - 160)) | (1 << (JustMCFParser.MOVE - 160)) | (1 << (JustMCFParser.NORMAL - 160)))) !== 0))) {
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
		this.enterRule(_localctx, 148, JustMCFParser.RULE_interfaceStatement);
		try {
			this.state = 1846;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				_localctx = new InterfaceSNamespaceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1838;
				this.match(JustMCFParser.INTERFACE);
				this.state = 1839;
				this.nameSpaceStorage();
				this.state = 1840;
				this.nbt();
				}
				break;

			case 2:
				_localctx = new InterfaceSIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1842;
				this.match(JustMCFParser.INTERFACE);
				this.state = 1843;
				this.dataIdentifier();
				this.state = 1844;
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
		this.enterRule(_localctx, 150, JustMCFParser.RULE_dataAssignExistExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1848;
			this.dataIdentifier();
			this.state = 1849;
			this.match(JustMCFParser.T__6);
			this.state = 1850;
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
		let _startState: number = 152;
		this.enterRecursionRule(_localctx, 152, JustMCFParser.RULE_existExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1871;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				{
				_localctx = new ExistExpressionExecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1853;
				this.match(JustMCFParser.T__4);
				this.state = 1857;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__9 || _la === JustMCFParser.T__10 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JustMCFParser.T__32 - 33)) | (1 << (JustMCFParser.T__49 - 33)) | (1 << (JustMCFParser.T__51 - 33)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)) | (1 << (JustMCFParser.NBTName - 167)))) !== 0)) {
					{
					{
					this.state = 1854;
					this.execChild();
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

			case 2:
				{
				_localctx = new ExistExpressionIdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1861;
				this.dataIdentifier();
				}
				break;

			case 3:
				{
				_localctx = new ExisitExpressionFuncRunContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1862;
				this.funcImproveRunExpression();
				}
				break;

			case 4:
				{
				_localctx = new ExistExpressionTrueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1863;
				this.match(JustMCFParser.TRUE);
				}
				break;

			case 5:
				{
				_localctx = new ExistExpressionFalseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1864;
				this.match(JustMCFParser.FALSE);
				}
				break;

			case 6:
				{
				_localctx = new ExistExpressionNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1865;
				this.match(JustMCFParser.T__33);
				this.state = 1866;
				this.existExpression(6);
				}
				break;

			case 7:
				{
				_localctx = new ExistExpressionParenContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1867;
				this.match(JustMCFParser.T__7);
				this.state = 1868;
				this.existExpression(0);
				this.state = 1869;
				this.match(JustMCFParser.T__8);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1887;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1885;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 221, this._ctx) ) {
					case 1:
						{
						_localctx = new ExistExpressionBitAndContext(new ExistExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_existExpression);
						this.state = 1873;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1874;
						(_localctx as ExistExpressionBitAndContext)._op = this.match(JustMCFParser.T__34);
						this.state = 1875;
						this.existExpression(6);
						}
						break;

					case 2:
						{
						_localctx = new ExistExpressionBitOrContext(new ExistExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_existExpression);
						this.state = 1876;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1877;
						(_localctx as ExistExpressionBitOrContext)._op = this.match(JustMCFParser.T__35);
						this.state = 1878;
						this.existExpression(5);
						}
						break;

					case 3:
						{
						_localctx = new ExistExpressionAndContext(new ExistExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_existExpression);
						this.state = 1879;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1880;
						(_localctx as ExistExpressionAndContext)._op = this.match(JustMCFParser.T__36);
						this.state = 1881;
						this.existExpression(4);
						}
						break;

					case 4:
						{
						_localctx = new ExistExpressionOrContext(new ExistExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_existExpression);
						this.state = 1882;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1883;
						(_localctx as ExistExpressionOrContext)._op = this.match(JustMCFParser.T__37);
						this.state = 1884;
						this.existExpression(3);
						}
						break;
					}
					}
				}
				this.state = 1889;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
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
		this.enterRule(_localctx, 154, JustMCFParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1890;
			this.match(JustMCFParser.IF);
			this.state = 1891;
			this.existExpression(0);
			this.state = 1892;
			this.execRunChild();
			this.state = 1894;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				{
				this.state = 1893;
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
		this.enterRule(_localctx, 156, JustMCFParser.RULE_ifElseStatement);
		try {
			this.state = 1900;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				_localctx = new IfElseExecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1896;
				this.match(JustMCFParser.ELSE);
				this.state = 1897;
				this.execRunChild();
				}
				break;

			case 2:
				_localctx = new IfElseSIfSContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1898;
				this.match(JustMCFParser.ELSE);
				this.state = 1899;
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
		this.enterRule(_localctx, 158, JustMCFParser.RULE_whileStatement);
		let _la: number;
		try {
			this.state = 1916;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 226, this._ctx) ) {
			case 1:
				_localctx = new WhileStatementExecContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1902;
				this.match(JustMCFParser.WHILE);
				this.state = 1903;
				this.match(JustMCFParser.T__4);
				this.state = 1907;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__9 || _la === JustMCFParser.T__10 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JustMCFParser.T__32 - 33)) | (1 << (JustMCFParser.T__49 - 33)) | (1 << (JustMCFParser.T__51 - 33)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.Selector - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)) | (1 << (JustMCFParser.AcceptableName - 167)) | (1 << (JustMCFParser.NBTName - 167)))) !== 0)) {
					{
					{
					this.state = 1904;
					this.execChild();
					}
					}
					this.state = 1909;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1910;
				this.match(JustMCFParser.T__5);
				this.state = 1911;
				this.execRunChild();
				}
				break;

			case 2:
				_localctx = new WhileStatementExistContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1912;
				this.match(JustMCFParser.WHILE);
				this.state = 1913;
				this.existExpression(0);
				this.state = 1914;
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
		this.enterRule(_localctx, 160, JustMCFParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1918;
			this.match(JustMCFParser.FOR);
			this.state = 1919;
			this.match(JustMCFParser.T__4);
			this.state = 1920;
			this.dataOperationExpression();
			this.state = 1921;
			this.match(JustMCFParser.T__5);
			this.state = 1922;
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
		this.enterRule(_localctx, 162, JustMCFParser.RULE_nbt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1924;
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
		this.enterRule(_localctx, 164, JustMCFParser.RULE_json);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1926;
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
	public nbtPath(): NbtPathContext {
		let _localctx: NbtPathContext = new NbtPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, JustMCFParser.RULE_nbtPath);
		try {
			let _alt: number;
			this.state = 1949;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1928;
				this.nbtName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1929;
				this.nbtCompound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1930;
				this.nbtName();
				this.state = 1931;
				this.nbtCompound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1933;
				this.nbtName();
				this.state = 1940;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 1938;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case JustMCFParser.T__1:
							{
							this.state = 1934;
							this.match(JustMCFParser.T__1);
							this.state = 1935;
							this.match(JustMCFParser.NUMBER);
							this.state = 1936;
							this.match(JustMCFParser.T__3);
							}
							break;
						case JustMCFParser.T__38:
							{
							this.state = 1937;
							this.match(JustMCFParser.T__38);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 1942;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
				}
				this.state = 1947;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
				case 1:
					{
					this.state = 1943;
					this.match(JustMCFParser.T__1);
					this.state = 1944;
					this.nbtCompound();
					this.state = 1945;
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
		this.enterRule(_localctx, 168, JustMCFParser.RULE_snbtValue);
		let _la: number;
		try {
			this.state = 2013;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1951;
				this.match(JustMCFParser.T__39);
				this.state = 1952;
				this.nbtPair();
				this.state = 1957;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 1953;
					this.match(JustMCFParser.T__2);
					this.state = 1954;
					this.nbtPair();
					}
					}
					this.state = 1959;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1960;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1962;
				this.match(JustMCFParser.T__39);
				this.state = 1963;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1964;
				this.match(JustMCFParser.T__40);
				this.state = 1965;
				this.nbtValue();
				this.state = 1970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 1966;
					this.match(JustMCFParser.T__2);
					this.state = 1967;
					this.nbtValue();
					}
					}
					this.state = 1972;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1973;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1975;
				this.match(JustMCFParser.T__40);
				this.state = 1976;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1977;
				this.match(JustMCFParser.T__41);
				this.state = 1978;
				this.match(JustMCFParser.ByteNumber);
				this.state = 1983;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 1979;
					this.match(JustMCFParser.T__2);
					this.state = 1980;
					this.match(JustMCFParser.ByteNumber);
					}
					}
					this.state = 1985;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1986;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1987;
				this.match(JustMCFParser.T__42);
				this.state = 1988;
				this.match(JustMCFParser.NUMBER);
				this.state = 1993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 1989;
					this.match(JustMCFParser.T__2);
					this.state = 1990;
					this.match(JustMCFParser.NUMBER);
					}
					}
					this.state = 1995;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1996;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1997;
				this.match(JustMCFParser.T__43);
				this.state = 1998;
				this.match(JustMCFParser.LongNumber);
				this.state = 2003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 1999;
					this.match(JustMCFParser.T__2);
					this.state = 2000;
					this.match(JustMCFParser.LongNumber);
					}
					}
					this.state = 2005;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2006;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2007;
				this.nbtString();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2008;
				this.match(JustMCFParser.ByteNumber);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2009;
				this.match(JustMCFParser.ShortNumber);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2010;
				this.match(JustMCFParser.LongNumber);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2011;
				this.match(JustMCFParser.FloatNumber);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2012;
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
		this.enterRule(_localctx, 170, JustMCFParser.RULE_snbt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2015;
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
		this.enterRule(_localctx, 172, JustMCFParser.RULE_nbtCompound);
		let _la: number;
		try {
			this.state = 2030;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2017;
				this.match(JustMCFParser.T__4);
				this.state = 2018;
				this.nbtPair();
				this.state = 2023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2019;
					this.match(JustMCFParser.T__2);
					this.state = 2020;
					this.nbtPair();
					}
					}
					this.state = 2025;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2026;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2028;
				this.match(JustMCFParser.T__4);
				this.state = 2029;
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
		this.enterRule(_localctx, 174, JustMCFParser.RULE_nbtPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2032;
			this.nbtName();
			this.state = 2033;
			this.match(JustMCFParser.T__29);
			this.state = 2034;
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
		this.enterRule(_localctx, 176, JustMCFParser.RULE_nbtList);
		let _la: number;
		try {
			this.state = 2049;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2036;
				this.match(JustMCFParser.T__1);
				this.state = 2037;
				this.nbtValue();
				this.state = 2042;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2038;
					this.match(JustMCFParser.T__2);
					this.state = 2039;
					this.nbtValue();
					}
					}
					this.state = 2044;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2045;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2047;
				this.match(JustMCFParser.T__1);
				this.state = 2048;
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
		this.enterRule(_localctx, 178, JustMCFParser.RULE_nbtValue);
		try {
			this.state = 2062;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2051;
				this.nbtCompound();
				}
				break;
			case JustMCFParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2052;
				this.nbtList();
				}
				break;
			case JustMCFParser.T__44:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2053;
				this.nbtByteArr();
				}
				break;
			case JustMCFParser.T__45:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2054;
				this.nbtIntArr();
				}
				break;
			case JustMCFParser.T__46:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2055;
				this.nbtLongArr();
				}
				break;
			case JustMCFParser.STRING2:
			case JustMCFParser.STRING:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2056;
				this.nbtString();
				}
				break;
			case JustMCFParser.ByteNumber:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2057;
				this.match(JustMCFParser.ByteNumber);
				}
				break;
			case JustMCFParser.ShortNumber:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2058;
				this.match(JustMCFParser.ShortNumber);
				}
				break;
			case JustMCFParser.LongNumber:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2059;
				this.match(JustMCFParser.LongNumber);
				}
				break;
			case JustMCFParser.FloatNumber:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2060;
				this.match(JustMCFParser.FloatNumber);
				}
				break;
			case JustMCFParser.DoubleNumber:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2061;
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
		this.enterRule(_localctx, 180, JustMCFParser.RULE_nbtByteArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2064;
			this.match(JustMCFParser.T__44);
			this.state = 2065;
			this.match(JustMCFParser.ByteNumber);
			this.state = 2070;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 2066;
				this.match(JustMCFParser.T__2);
				this.state = 2067;
				this.match(JustMCFParser.ByteNumber);
				}
				}
				this.state = 2072;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2073;
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
		this.enterRule(_localctx, 182, JustMCFParser.RULE_nbtIntArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2075;
			this.match(JustMCFParser.T__45);
			this.state = 2076;
			this.match(JustMCFParser.NUMBER);
			this.state = 2081;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 2077;
				this.match(JustMCFParser.T__2);
				this.state = 2078;
				this.match(JustMCFParser.NUMBER);
				}
				}
				this.state = 2083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2084;
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
		this.enterRule(_localctx, 184, JustMCFParser.RULE_nbtLongArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2086;
			this.match(JustMCFParser.T__46);
			this.state = 2087;
			this.match(JustMCFParser.LongNumber);
			this.state = 2092;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 2088;
				this.match(JustMCFParser.T__2);
				this.state = 2089;
				this.match(JustMCFParser.LongNumber);
				}
				}
				this.state = 2094;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2095;
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
		this.enterRule(_localctx, 186, JustMCFParser.RULE_nbtString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2097;
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
		this.enterRule(_localctx, 188, JustMCFParser.RULE_jsonTextValue);
		let _la: number;
		try {
			this.state = 2130;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 247, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2099;
				this.match(JustMCFParser.T__47);
				this.state = 2100;
				this.jsonPair();
				this.state = 2105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2101;
					this.match(JustMCFParser.T__2);
					this.state = 2102;
					this.jsonPair();
					}
					}
					this.state = 2107;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2108;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2110;
				this.match(JustMCFParser.T__47);
				this.state = 2111;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2112;
				this.match(JustMCFParser.T__48);
				this.state = 2113;
				this.jsonValue();
				this.state = 2118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2114;
					this.match(JustMCFParser.T__2);
					this.state = 2115;
					this.jsonValue();
					}
					}
					this.state = 2120;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2121;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2123;
				this.match(JustMCFParser.T__1);
				this.state = 2124;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2125;
				this.match(JustMCFParser.STRING);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2126;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2127;
				this.match(JustMCFParser.TRUE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2128;
				this.match(JustMCFParser.FALSE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2129;
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
		this.enterRule(_localctx, 190, JustMCFParser.RULE_jsonText);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2132;
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
		this.enterRule(_localctx, 192, JustMCFParser.RULE_jsonObj);
		let _la: number;
		try {
			this.state = 2147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 249, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2134;
				this.match(JustMCFParser.T__4);
				this.state = 2135;
				this.jsonPair();
				this.state = 2140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2136;
					this.match(JustMCFParser.T__2);
					this.state = 2137;
					this.jsonPair();
					}
					}
					this.state = 2142;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2143;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2145;
				this.match(JustMCFParser.T__4);
				this.state = 2146;
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
		this.enterRule(_localctx, 194, JustMCFParser.RULE_jsonPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2149;
			this.match(JustMCFParser.STRING);
			this.state = 2150;
			this.match(JustMCFParser.T__29);
			this.state = 2151;
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
		this.enterRule(_localctx, 196, JustMCFParser.RULE_jsonArr);
		let _la: number;
		try {
			this.state = 2166;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 251, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2153;
				this.match(JustMCFParser.T__1);
				this.state = 2154;
				this.jsonValue();
				this.state = 2159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 2155;
					this.match(JustMCFParser.T__2);
					this.state = 2156;
					this.jsonValue();
					}
					}
					this.state = 2161;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2162;
				this.match(JustMCFParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2164;
				this.match(JustMCFParser.T__1);
				this.state = 2165;
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
		this.enterRule(_localctx, 198, JustMCFParser.RULE_jsonValue);
		try {
			this.state = 2175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2168;
				this.match(JustMCFParser.STRING);
				}
				break;
			case JustMCFParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2169;
				this.match(JustMCFParser.NUMBER);
				}
				break;
			case JustMCFParser.T__4:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2170;
				this.jsonObj();
				}
				break;
			case JustMCFParser.T__1:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2171;
				this.jsonArr();
				}
				break;
			case JustMCFParser.TRUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2172;
				this.match(JustMCFParser.TRUE);
				}
				break;
			case JustMCFParser.FALSE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2173;
				this.match(JustMCFParser.FALSE);
				}
				break;
			case JustMCFParser.NULL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2174;
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
		this.enterRule(_localctx, 200, JustMCFParser.RULE_boolValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2177;
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
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, JustMCFParser.RULE_key);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2179;
			_la = this._input.LA(1);
			if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JustMCFParser.NAMSP - 70)) | (1 << (JustMCFParser.NAMESPACE - 70)) | (1 << (JustMCFParser.LOCAL - 70)) | (1 << (JustMCFParser.EXEC - 70)) | (1 << (JustMCFParser.ALIGN - 70)) | (1 << (JustMCFParser.ANCHORED - 70)) | (1 << (JustMCFParser.EYES - 70)) | (1 << (JustMCFParser.FEET - 70)) | (1 << (JustMCFParser.IN - 70)) | (1 << (JustMCFParser.AS - 70)) | (1 << (JustMCFParser.AT - 70)) | (1 << (JustMCFParser.FACING - 70)) | (1 << (JustMCFParser.POSITIONED - 70)) | (1 << (JustMCFParser.POS - 70)) | (1 << (JustMCFParser.ROTATED - 70)) | (1 << (JustMCFParser.ROT - 70)) | (1 << (JustMCFParser.IF - 70)) | (1 << (JustMCFParser.UNLESS - 70)) | (1 << (JustMCFParser.ALL - 70)) | (1 << (JustMCFParser.MASKED - 70)) | (1 << (JustMCFParser.BIOME - 70)) | (1 << (JustMCFParser.VALUE - 70)) | (1 << (JustMCFParser.MAX - 70)) | (1 << (JustMCFParser.ENTITY - 70)) | (1 << (JustMCFParser.SCORE - 70)) | (1 << (JustMCFParser.PREDICATE - 70)) | (1 << (JustMCFParser.BLOCK - 70)) | (1 << (JustMCFParser.BLOCKS - 70)) | (1 << (JustMCFParser.SCB - 70)) | (1 << (JustMCFParser.DISPLAYNAME - 70)) | (1 << (JustMCFParser.RENDERTYPE - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.DISPLAY - 102)) | (1 << (JustMCFParser.ENABLE - 102)) | (1 << (JustMCFParser.LIST - 102)) | (1 << (JustMCFParser.DATA - 102)) | (1 << (JustMCFParser.STORAGE - 102)) | (1 << (JustMCFParser.RESET - 102)) | (1 << (JustMCFParser.ADD - 102)) | (1 << (JustMCFParser.REMOVE - 102)) | (1 << (JustMCFParser.FUNC - 102)) | (1 << (JustMCFParser.TAGGED - 102)) | (1 << (JustMCFParser.DEFAULT - 102)) | (1 << (JustMCFParser.PLAYER - 102)) | (1 << (JustMCFParser.PLAYERS - 102)) | (1 << (JustMCFParser.BOSSBAR - 102)) | (1 << (JustMCFParser.VISIBLE - 102)) | (1 << (JustMCFParser.BLUE - 102)) | (1 << (JustMCFParser.GREEN - 102)) | (1 << (JustMCFParser.PINK - 102)) | (1 << (JustMCFParser.PURPLE - 102)) | (1 << (JustMCFParser.RED - 102)) | (1 << (JustMCFParser.WHITE - 102)) | (1 << (JustMCFParser.YELLOW - 102)) | (1 << (JustMCFParser.COLOR - 102)) | (1 << (JustMCFParser.NAME - 102)) | (1 << (JustMCFParser.STYLE - 102)) | (1 << (JustMCFParser.NOTCHED_6 - 102)) | (1 << (JustMCFParser.NOTCHED_10 - 102)) | (1 << (JustMCFParser.NOTCHED_12 - 102)) | (1 << (JustMCFParser.NOTCHED_20 - 102)) | (1 << (JustMCFParser.PROGRESS - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (JustMCFParser.SET - 134)) | (1 << (JustMCFParser.TITLE - 134)) | (1 << (JustMCFParser.SUBTITLE - 134)) | (1 << (JustMCFParser.ACTIONBAR - 134)) | (1 << (JustMCFParser.TIMES - 134)) | (1 << (JustMCFParser.TEXT - 134)) | (1 << (JustMCFParser.ITEM - 134)) | (1 << (JustMCFParser.LOOT - 134)) | (1 << (JustMCFParser.GIVE - 134)) | (1 << (JustMCFParser.CLEAR - 134)) | (1 << (JustMCFParser.FISH - 134)) | (1 << (JustMCFParser.KILL - 134)) | (1 << (JustMCFParser.MINE - 134)) | (1 << (JustMCFParser.MAINHAND - 134)) | (1 << (JustMCFParser.OFFHAND - 134)) | (1 << (JustMCFParser.EFFECT - 134)) | (1 << (JustMCFParser.TAG - 134)) | (1 << (JustMCFParser.TP - 134)) | (1 << (JustMCFParser.GET - 134)) | (1 << (JustMCFParser.ATTR - 134)) | (1 << (JustMCFParser.BASE - 134)) | (1 << (JustMCFParser.DESTROY - 134)) | (1 << (JustMCFParser.KEEP - 134)) | (1 << (JustMCFParser.REPLACE - 134)) | (1 << (JustMCFParser.HOLLOW - 134)) | (1 << (JustMCFParser.OUTLINE - 134)) | (1 << (JustMCFParser.FORCE - 134)) | (1 << (JustMCFParser.MOVE - 134)) | (1 << (JustMCFParser.NORMAL - 134)) | (1 << (JustMCFParser.FILTERED - 134)) | (1 << (JustMCFParser.INTERFACE - 134)) | (1 << (JustMCFParser.WHILE - 134)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (JustMCFParser.FOR - 167)) | (1 << (JustMCFParser.YEILD - 167)) | (1 << (JustMCFParser.BREAK - 167)) | (1 << (JustMCFParser.RETURN - 167)) | (1 << (JustMCFParser.REPLACED - 167)) | (1 << (JustMCFParser.DIM - 167)) | (1 << (JustMCFParser.DIMENSION - 167)) | (1 << (JustMCFParser.ITEM_MODIFIER - 167)) | (1 << (JustMCFParser.BYTE - 167)) | (1 << (JustMCFParser.SHORT - 167)) | (1 << (JustMCFParser.INT_ - 167)) | (1 << (JustMCFParser.LONG - 167)) | (1 << (JustMCFParser.FLOAT - 167)) | (1 << (JustMCFParser.DOUBLE - 167)))) !== 0))) {
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
		this.enterRule(_localctx, 204, JustMCFParser.RULE_pos3Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2181;
			this.match(JustMCFParser.T__49);
			this.state = 2182;
			this.pos1();
			this.state = 2183;
			this.pos1();
			this.state = 2184;
			this.pos1();
			this.state = 2185;
			this.match(JustMCFParser.T__50);
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
		this.enterRule(_localctx, 206, JustMCFParser.RULE_pos2Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2187;
			this.match(JustMCFParser.T__49);
			this.state = 2188;
			this.pos1();
			this.state = 2189;
			this.pos1();
			this.state = 2190;
			this.match(JustMCFParser.T__50);
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
		this.enterRule(_localctx, 208, JustMCFParser.RULE_pos5Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2192;
			this.match(JustMCFParser.T__49);
			this.state = 2193;
			this.pos1();
			this.state = 2194;
			this.pos1();
			this.state = 2195;
			this.pos1();
			this.state = 2196;
			this.pos1();
			this.state = 2197;
			this.pos1();
			this.state = 2198;
			this.match(JustMCFParser.T__50);
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
		this.enterRule(_localctx, 210, JustMCFParser.RULE_pos1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2200;
			_la = this._input.LA(1);
			if (!(_la === JustMCFParser.NUMBER || _la === JustMCFParser.Pos1)) {
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
	public blockIdentifier(): BlockIdentifierContext {
		let _localctx: BlockIdentifierContext = new BlockIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, JustMCFParser.RULE_blockIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2202;
			this.nameSpaceBlock();
			this.state = 2204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__1) {
				{
				this.state = 2203;
				this.blockstate();
				}
			}

			this.state = 2207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (JustMCFParser.T__39 - 40)) | (1 << (JustMCFParser.T__40 - 40)) | (1 << (JustMCFParser.T__41 - 40)) | (1 << (JustMCFParser.T__42 - 40)) | (1 << (JustMCFParser.T__43 - 40)) | (1 << (JustMCFParser.ByteNumber - 40)) | (1 << (JustMCFParser.ShortNumber - 40)) | (1 << (JustMCFParser.LongNumber - 40)) | (1 << (JustMCFParser.FloatNumber - 40)) | (1 << (JustMCFParser.DoubleNumber - 40)) | (1 << (JustMCFParser.STRING2 - 40)) | (1 << (JustMCFParser.STRING - 40)))) !== 0)) {
				{
				this.state = 2206;
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
		this.enterRule(_localctx, 214, JustMCFParser.RULE_blockstate);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2209;
			this.match(JustMCFParser.T__1);
			this.state = 2211;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 2210;
					this.matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2213;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2215;
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
		this.enterRule(_localctx, 216, JustMCFParser.RULE_selector);
		try {
			let _alt: number;
			this.state = 2232;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2217;
				this.match(JustMCFParser.Selector);
				this.state = 2225;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
				case 1:
					{
					this.state = 2218;
					this.match(JustMCFParser.T__1);
					this.state = 2220;
					this._errHandler.sync(this);
					_alt = 1 + 1;
					do {
						switch (_alt) {
						case 1 + 1:
							{
							{
							this.state = 2219;
							this.matchWildcard();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 2222;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 256, this._ctx);
					} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 2224;
					this.match(JustMCFParser.T__3);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2227;
				this.match(JustMCFParser.T__51);
				this.state = 2228;
				this.nbtName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2229;
				this.match(JustMCFParser.T__32);
				this.state = 2230;
				this.nbtName();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2231;
				this.match(JustMCFParser.T__32);
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
		this.enterRule(_localctx, 218, JustMCFParser.RULE_nameSpace);
		try {
			this.state = 2239;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2234;
				this.acceptableName();
				this.state = 2235;
				_localctx._op = this.match(JustMCFParser.T__29);
				this.state = 2236;
				this.resourceLocation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2238;
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
		this.enterRule(_localctx, 220, JustMCFParser.RULE_nameSpaceBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2241;
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
		this.enterRule(_localctx, 222, JustMCFParser.RULE_nameSpaceFunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2243;
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
		this.enterRule(_localctx, 224, JustMCFParser.RULE_nameSpaceStorage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2245;
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
		this.enterRule(_localctx, 226, JustMCFParser.RULE_nameSpaceBossbar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2247;
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
		this.enterRule(_localctx, 228, JustMCFParser.RULE_nameSpaceBiome);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2249;
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
		this.enterRule(_localctx, 230, JustMCFParser.RULE_nameSpaceDim);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2251;
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
		this.enterRule(_localctx, 232, JustMCFParser.RULE_nameSpacePredicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2253;
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
		this.enterRule(_localctx, 234, JustMCFParser.RULE_nameSpaceItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2255;
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
		this.enterRule(_localctx, 236, JustMCFParser.RULE_nameSpaceEntity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2257;
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
		this.enterRule(_localctx, 238, JustMCFParser.RULE_nameSpaceLoot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2259;
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
		this.enterRule(_localctx, 240, JustMCFParser.RULE_nameSpaceItemModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2261;
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
		this.enterRule(_localctx, 242, JustMCFParser.RULE_tagNameSpace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2263;
			this.match(JustMCFParser.T__32);
			this.state = 2264;
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
		this.enterRule(_localctx, 244, JustMCFParser.RULE_tagNameSpaceItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2266;
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
		this.enterRule(_localctx, 246, JustMCFParser.RULE_tagNameSpaceBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2268;
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
		this.enterRule(_localctx, 248, JustMCFParser.RULE_tagNameSpaceFunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2270;
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
		this.enterRule(_localctx, 250, JustMCFParser.RULE_tagNameSpaceEntity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2272;
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
		this.enterRule(_localctx, 252, JustMCFParser.RULE_registerName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 260, this._ctx) ) {
			case 1:
				{
				this.state = 2274;
				this.acceptableName();
				this.state = 2275;
				this.match(JustMCFParser.T__29);
				}
				break;
			}
			this.state = 2279;
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
		this.enterRule(_localctx, 254, JustMCFParser.RULE_numberType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2281;
			_la = this._input.LA(1);
			if (!(((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & ((1 << (JustMCFParser.BYTE - 177)) | (1 << (JustMCFParser.SHORT - 177)) | (1 << (JustMCFParser.INT_ - 177)) | (1 << (JustMCFParser.LONG - 177)) | (1 << (JustMCFParser.FLOAT - 177)) | (1 << (JustMCFParser.DOUBLE - 177)))) !== 0))) {
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
		this.enterRule(_localctx, 256, JustMCFParser.RULE_acceptableName);
		try {
			this.state = 2286;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2283;
				this.match(JustMCFParser.AcceptableName);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2284;
				this.key();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2285;
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
		this.enterRule(_localctx, 258, JustMCFParser.RULE_criterion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2288;
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
		this.enterRule(_localctx, 260, JustMCFParser.RULE_nbtName);
		try {
			this.state = 2294;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2290;
				this.match(JustMCFParser.AcceptableName);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2291;
				this.match(JustMCFParser.NBTName);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2292;
				this.key();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2293;
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
		this.enterRule(_localctx, 262, JustMCFParser.RULE_resourceLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2296;
			this.acceptableName();
			this.state = 2301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__25) {
				{
				{
				this.state = 2297;
				this.match(JustMCFParser.T__25);
				this.state = 2298;
				this.acceptableName();
				}
				}
				this.state = 2303;
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
		this.enterRule(_localctx, 264, JustMCFParser.RULE_typeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2307;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
			case 1:
				{
				this.state = 2304;
				this.acceptableName();
				this.state = 2305;
				this.match(JustMCFParser.T__29);
				}
				break;
			}
			this.state = 2309;
			this.acceptableName();
			this.state = 2312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__1) {
				{
				this.state = 2310;
				this.match(JustMCFParser.T__1);
				this.state = 2311;
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
		this.enterRule(_localctx, 266, JustMCFParser.RULE_item_slot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2314;
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
	public item_predicate(): Item_predicateContext {
		let _localctx: Item_predicateContext = new Item_predicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, JustMCFParser.RULE_item_predicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2318;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NAMSP:
			case JustMCFParser.NAMESPACE:
			case JustMCFParser.LOCAL:
			case JustMCFParser.EXEC:
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
				this.state = 2316;
				this.nameSpaceItem();
				}
				break;
			case JustMCFParser.T__32:
				{
				this.state = 2317;
				this.tagNameSpaceItem();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2322;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 267, this._ctx) ) {
			case 1:
				{
				this.state = 2320;
				this.snbt();
				}
				break;

			case 2:
				{
				this.state = 2321;
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
		this.enterRule(_localctx, 270, JustMCFParser.RULE_block_predicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2326;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NAMSP:
			case JustMCFParser.NAMESPACE:
			case JustMCFParser.LOCAL:
			case JustMCFParser.EXEC:
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
				this.state = 2324;
				this.nameSpaceBlock();
				}
				break;
			case JustMCFParser.T__32:
				{
				this.state = 2325;
				this.tagNameSpaceBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2329;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 269, this._ctx) ) {
			case 1:
				{
				this.state = 2328;
				this.blockstate();
				}
				break;
			}
			this.state = 2333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				{
				this.state = 2331;
				this.snbt();
				}
				break;

			case 2:
				{
				this.state = 2332;
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
		case 32:
			return this.scbSingleOperationExpression_sempred(_localctx as ScbSingleOperationExpressionContext, predIndex);

		case 76:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xBA\u0922\x04" +
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
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x03\x02\x07\x02\u0114\n\x02" +
		"\f\x02\x0E\x02\u0117\v\x02\x03\x03\x03\x03\x05\x03\u011B\n\x03\x03\x04" +
		"\x03\x04\x05\x04\u011F\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0137" +
		"\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x06\x06\u0141\n\x06\r\x06\x0E\x06\u0142\x05\x06\u0145\n\x06\x03\x07\x03" +
		"\x07\x03\b\x03\b\x05\b\u014B\n\b\x03\b\x03\b\x03\b\x05\b\u0150\n\b\x07" +
		"\b\u0152\n\b\f\b\x0E\b\u0155\v\b\x03\b\x05\b\u0158\n\b\x03\b\x03\b\x07" +
		"\b\u015C\n\b\f\b\x0E\b\u015F\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0188\n\t\x03" +
		"\n\x03\n\x03\n\x05\n\u018D\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0194" +
		"\n\v\x07\v\u0196\n\v\f\v\x0E\v\u0199\v\v\x03\v\x05\v\u019C\n\v\x03\v\x03" +
		"\v\x07\v\u01A0\n\v\f\v\x0E\v\u01A3\v\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\u01AB\n\f\x03\r\x03\r\x03\r\x05\r\u01B0\n\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u01B8\n\x0E\f\x0E\x0E\x0E\u01BB\v" +
		"\x0E\x05\x0E\u01BD\n\x0E\x03\x0E\x03\x0E\x07\x0E\u01C1\n\x0E\f\x0E\x0E" +
		"\x0E\u01C4\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x07\x0F\u01CE\n\x0F\f\x0F\x0E\x0F\u01D1\v\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u01D5\n\x0F\x03\x0F\x03\x0F\x07\x0F\u01D9\n\x0F\f\x0F\x0E\x0F" +
		"\u01DC\v\x0F\x03\x0F\x03\x0F\x03\x10\x05\x10\u01E1\n\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x05\x11\u01E7\n\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x05\x13\u01F0\n\x13\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u01FA\n\x15\f\x15\x0E\x15\u01FD" +
		"\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x05\x17\u0204\n\x17\x03" +
		"\x17\x03\x17\x07\x17\u0208\n\x17\f\x17\x0E\x17\u020B\v\x17\x03\x17\x03" +
		"\x17\x07\x17\u020F\n\x17\f\x17\x0E\x17\u0212\v\x17\x03\x17\x03\x17\x05" +
		"\x17\u0216\n\x17\x03\x17\x07\x17\u0219\n\x17\f\x17\x0E\x17\u021C\v\x17" +
		"\x03\x17\x03\x17\x03\x17\x06\x17\u0221\n\x17\r\x17\x0E\x17\u0222\x03\x17" +
		"\x03\x17\x05\x17\u0227\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x05\x18\u0231\n\x18\x03\x18\x03\x18\x05\x18\u0235" +
		"\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u023B\n\x18\x03\x18\x03" +
		"\x18\x05\x18\u023F\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0245" +
		"\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u024B\n\x18\x05\x18\u024D" +
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0255\n" +
		"\x19\x03\x19\x03\x19\x07\x19\u0259\n\x19\f\x19\x0E\x19\u025C\v\x19\x03" +
		"\x19\x05\x19\u025F\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x05\x1A\u027A\n\x1A\x03\x1A\x05\x1A\u027D\n\x1A\x03\x1A\x03\x1A" +
		"\x05\x1A\u0281\n\x1A\x03\x1A\x05\x1A\u0284\n\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u028B\n\x1A\x03\x1A\x05\x1A\u028E\n\x1A\x03\x1A" +
		"\x03\x1A\x05\x1A\u0292\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0296\n\x1A\x03\x1A" +
		"\x05\x1A\u0299\n\x1A\x03\x1A\x05\x1A\u029C\n\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x05\x1A\u02A2\n\x1A\x03\x1A\x05\x1A\u02A5\n\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02AD\n\x1A\x03\x1A\x05\x1A\u02B0" +
		"\n\x1A\x03\x1A\x03\x1A\x05\x1A\u02B4\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u02BB\n\x1A\x03\x1A\x05\x1A\u02BE\n\x1A\x03\x1A\x03" +
		"\x1A\x05\x1A\u02C2\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02C7\n\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x05\x1B\u02CC\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u02E1\n\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x05\x1E\u02EF\n\x1E\x03\x1F\x03\x1F\x05\x1F\u02F3" +
		"\n\x1F\x03\x1F\x05\x1F\u02F6\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0302\n\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0309\n\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u032C\n\x1F\x03 \x03 \x05 \u0330" +
		"\n \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x05!\u036D\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x05\"\u0376\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x07\"\u0381\n\"\f\"\x0E\"\u0384\v\"\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x05#\u038D\n#\x03$\x03$\x03$\x07$\u0392\n$\f$\x0E$\u0395\v$\x03$\x03" +
		"$\x03$\x03$\x03$\x05$\u039C\n$\x03$\x03$\x07$\u03A0\n$\f$\x0E$\u03A3\v" +
		"$\x03$\x03$\x05$\u03A7\n$\x03%\x03%\x03%\x07%\u03AC\n%\f%\x0E%\u03AF\v" +
		"%\x03%\x03%\x03&\x03&\x05&\u03B5\n&\x03&\x05&\u03B8\n&\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x05\'\u03BF\n\'\x03\'\x03\'\x03\'\x03\'\x05\'\u03C5\n\'" +
		"\x03\'\x07\'\u03C8\n\'\f\'\x0E\'\u03CB\v\'\x03\'\x05\'\u03CE\n\'\x03\'" +
		"\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u03DB" +
		"\n\'\x03\'\x03\'\x03\'\x03\'\x05\'\u03E1\n\'\x03\'\x07\'\u03E4\n\'\f\'" +
		"\x0E\'\u03E7\v\'\x03\'\x05\'\u03EA\n\'\x03\'\x03\'\x03\'\x03\'\x05\'\u03F0" +
		"\n\'\x03\'\x07\'\u03F3\n\'\f\'\x0E\'\u03F6\v\'\x03\'\x03\'\x05\'\u03FA" +
		"\n\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0403\n(\x03)\x03)\x03)\x03" +
		")\x03)\x05)\u040A\n)\x03)\x07)\u040D\n)\f)\x0E)\u0410\v)\x03)\x05)\u0413" +
		"\n)\x03)\x03)\x03)\x03)\x05)\u0419\n)\x03)\x07)\u041C\n)\f)\x0E)\u041F" +
		"\v)\x03)\x03)\x05)\u0423\n)\x03*\x05*\u0426\n*\x03*\x03*\x03*\x05*\u042B" +
		"\n*\x03*\x03*\x03*\x05*\u0430\n*\x03*\x03*\x03*\x05*\u0435\n*\x03*\x03" +
		"*\x03*\x05*\u043A\n*\x03*\x03*\x03*\x05*\u043F\n*\x03*\x03*\x03*\x05*" +
		"\u0444\n*\x03*\x03*\x03*\x05*\u0449\n*\x03*\x03*\x03*\x05*\u044E\n*\x03" +
		"*\x03*\x05*\u0452\n*\x03+\x03+\x03+\x05+\u0457\n+\x03+\x03+\x03+\x05+" +
		"\u045C\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0467\n+\x03" +
		",\x03,\x03,\x07,\u046C\n,\f,\x0E,\u046F\v,\x03,\x03,\x03,\x03,\x03,\x05" +
		",\u0476\n,\x03,\x07,\u0479\n,\f,\x0E,\u047C\v,\x03,\x03,\x05,\u0480\n" +
		",\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0489\n-\x03-\x07-\u048C\n-" +
		"\f-\x0E-\u048F\v-\x03-\x03-\x05-\u0493\n-\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x05.\u049D\n.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x05/\u04AD\n/\x030\x030\x030\x070\u04B2\n0" +
		"\f0\x0E0\u04B5\v0\x030\x030\x030\x030\x030\x050\u04BC\n0\x030\x070\u04BF" +
		"\n0\f0\x0E0\u04C2\v0\x030\x030\x050\u04C6\n0\x031\x031\x031\x031\x031" +
		"\x031\x031\x031\x031\x051\u04D1\n1\x031\x071\u04D4\n1\f1\x0E1\u04D7\v" +
		"1\x031\x031\x051\u04DB\n1\x032\x032\x032\x032\x072\u04E1\n2\f2\x0E2\u04E4" +
		"\v2\x032\x032\x032\x032\x032\x032\x032\x052\u04ED\n2\x033\x033\x033\x07" +
		"3\u04F2\n3\f3\x0E3\u04F5\v3\x033\x033\x033\x033\x033\x073\u04FC\n3\f3" +
		"\x0E3\u04FF\v3\x033\x033\x053\u0503\n3\x034\x034\x034\x074\u0508\n4\f" +
		"4\x0E4\u050B\v4\x034\x034\x034\x034\x034\x074\u0512\n4\f4\x0E4\u0515\v" +
		"4\x034\x034\x054\u0519\n4\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x07" +
		"5\u0531\n5\f5\x0E5\u0534\v5\x035\x035\x055\u0538\n5\x036\x036\x056\u053C" +
		"\n6\x037\x037\x037\x038\x038\x038\x038\x058\u0545\n8\x038\x058\u0548\n" +
		"8\x039\x039\x039\x039\x059\u054E\n9\x039\x039\x039\x039\x039\x039\x05" +
		"9\u0556\n9\x039\x039\x059\u055A\n9\x039\x039\x059\u055E\n9\x039\x039\x05" +
		"9\u0562\n9\x039\x059\u0565\n9\x039\x039\x039\x059\u056A\n9\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u057B" +
		"\n:\f:\x0E:\u057E\v:\x03:\x03:\x05:\u0582\n:\x03;\x03;\x03;\x05;\u0587" +
		"\n;\x03<\x03<\x03<\x03<\x05<\u058D\n<\x03<\x03<\x03<\x03<\x03<\x03<\x05" +
		"<\u0595\n<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u059D\n<\x03<\x03<\x03<" +
		"\x03<\x05<\u05A3\n<\x03=\x03=\x03=\x05=\u05A8\n=\x03=\x03=\x03=\x05=\u05AD" +
		"\n=\x05=\u05AF\n=\x03>\x03>\x03>\x07>\u05B4\n>\f>\x0E>\u05B7\v>\x03>\x03" +
		">\x03>\x03>\x03>\x07>\u05BE\n>\f>\x0E>\u05C1\v>\x03>\x03>\x05>\u05C5\n" +
		">\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x07?\u05CE\n?\f?\x0E?\u05D1\v?\x03" +
		"?\x03?\x05?\u05D5\n?\x03@\x03@\x05@\u05D9\n@\x03@\x05@\u05DC\n@\x03@\x05" +
		"@\u05DF\n@\x03@\x03@\x03@\x05@\u05E4\n@\x03@\x05@\u05E7\n@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x05@\u05FE\n@\x03@\x05@\u0601\n@\x05@\u0603\n@\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x05A\u060B\nA\x03A\x07A\u060E\nA\fA\x0EA\u0611" +
		"\vA\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u0619\nA\x03A\x03A\x05A\u061D\n" +
		"A\x03A\x07A\u0620\nA\fA\x0EA\u0623\vA\x03A\x05A\u0626\nA\x03A\x03A\x03" +
		"A\x03A\x03A\x05A\u062D\nA\x03A\x03A\x05A\u0631\nA\x03A\x03A\x05A\u0635" +
		"\nA\x03A\x07A\u0638\nA\fA\x0EA\u063B\vA\x03A\x03A\x07A\u063F\nA\fA\x0E" +
		"A\u0642\vA\x03A\x05A\u0645\nA\x03A\x03A\x03A\x07A\u064A\nA\fA\x0EA\u064D" +
		"\vA\x03A\x03A\x03A\x03A\x03A\x03A\x07A\u0655\nA\fA\x0EA\u0658\vA\x03A" +
		"\x03A\x05A\u065C\nA\x03B\x05B\u065F\nB\x03B\x03B\x03C\x03C\x03C\x03C\x03" +
		"C\x07C\u0668\nC\fC\x0EC\u066B\vC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x05D\u0675\nD\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u067E\nE\x03E" +
		"\x05E\u0681\nE\x03E\x05E\u0684\nE\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u068C" +
		"\nE\x03E\x05E\u068F\nE\x03E\x05E\u0692\nE\x03E\x03E\x05E\u0696\nE\x03" +
		"F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x03F\x03F\x03F\x05F\u06AC\nF\x05F\u06AE\nF\x03G\x03G\x03G" +
		"\x03G\x03G\x03G\x03G\x03G\x07G\u06B8\nG\fG\x0EG\u06BB\vG\x03G\x03G\x03" +
		"G\x03G\x07G\u06C1\nG\fG\x0EG\u06C4\vG\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x07G\u06D3\nG\fG\x0EG\u06D6\vG\x03G\x03" +
		"G\x03G\x03G\x07G\u06DC\nG\fG\x0EG\u06DF\vG\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x07G\u06E8\nG\fG\x0EG\u06EB\vG\x03G\x03G\x05G\u06EF\nG\x03H\x03" +
		"H\x03H\x03H\x03H\x07H\u06F6\nH\fH\x0EH\u06F9\vH\x03H\x03H\x05H\u06FD\n" +
		"H\x03I\x03I\x03I\x03I\x03J\x03J\x03J\x07J\u0706\nJ\fJ\x0EJ\u0709\vJ\x03" +
		"J\x03J\x03K\x03K\x03K\x05K\u0710\nK\x03K\x03K\x03K\x03K\x05K\u0716\nK" +
		"\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u0722\nK\x03K" +
		"\x05K\u0725\nK\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u072D\nK\x05K\u072F" +
		"\nK\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u0739\nL\x03M\x03M\x03" +
		"M\x03M\x03N\x03N\x03N\x07N\u0742\nN\fN\x0EN\u0745\vN\x03N\x03N\x03N\x03" +
		"N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u0752\nN\x03N\x03N\x03N\x03" +
		"N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x07N\u0760\nN\fN\x0EN\u0763" +
		"\vN\x03O\x03O\x03O\x03O\x05O\u0769\nO\x03P\x03P\x03P\x03P\x05P\u076F\n" +
		"P\x03Q\x03Q\x03Q\x07Q\u0774\nQ\fQ\x0EQ\u0777\vQ\x03Q\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x05Q\u077F\nQ\x03R\x03R\x03R\x03R\x03R\x03R\x03S\x03S\x03T\x03" +
		"T\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x07U\u0795\nU\fU\x0E" +
		"U\u0798\vU\x03U\x03U\x03U\x03U\x05U\u079E\nU\x05U\u07A0\nU\x03V\x03V\x03" +
		"V\x03V\x07V\u07A6\nV\fV\x0EV\u07A9\vV\x03V\x03V\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x07V\u07B3\nV\fV\x0EV\u07B6\vV\x03V\x03V\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x07V\u07C0\nV\fV\x0EV\u07C3\vV\x03V\x03V\x03V\x03V\x03V\x07V\u07CA" +
		"\nV\fV\x0EV\u07CD\vV\x03V\x03V\x03V\x03V\x03V\x07V\u07D4\nV\fV\x0EV\u07D7" +
		"\vV\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u07E0\nV\x03W\x03W\x03X\x03" +
		"X\x03X\x03X\x07X\u07E8\nX\fX\x0EX\u07EB\vX\x03X\x03X\x03X\x03X\x05X\u07F1" +
		"\nX\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x07Z\u07FB\nZ\fZ\x0EZ\u07FE" +
		"\vZ\x03Z\x03Z\x03Z\x03Z\x05Z\u0804\nZ\x03[\x03[\x03[\x03[\x03[\x03[\x03" +
		"[\x03[\x03[\x03[\x03[\x05[\u0811\n[\x03\\\x03\\\x03\\\x03\\\x07\\\u0817" +
		"\n\\\f\\\x0E\\\u081A\v\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x07]\u0822\n" +
		"]\f]\x0E]\u0825\v]\x03]\x03]\x03^\x03^\x03^\x03^\x07^\u082D\n^\f^\x0E" +
		"^\u0830\v^\x03^\x03^\x03_\x03_\x03`\x03`\x03`\x03`\x07`\u083A\n`\f`\x0E" +
		"`\u083D\v`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x07`\u0847\n`\f`\x0E" +
		"`\u084A\v`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x05`\u0855\n`" +
		"\x03a\x03a\x03b\x03b\x03b\x03b\x07b\u085D\nb\fb\x0Eb\u0860\vb\x03b\x03" +
		"b\x03b\x03b\x05b\u0866\nb\x03c\x03c\x03c\x03c\x03d\x03d\x03d\x03d\x07" +
		"d\u0870\nd\fd\x0Ed\u0873\vd\x03d\x03d\x03d\x03d\x05d\u0879\nd\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x05e\u0882\ne\x03f\x03f\x03g\x03g\x03h\x03" +
		"h\x03h\x03h\x03h\x03h\x03i\x03i\x03i\x03i\x03i\x03j\x03j\x03j\x03j\x03" +
		"j\x03j\x03j\x03j\x03k\x03k\x03l\x03l\x05l\u089F\nl\x03l\x05l\u08A2\nl" +
		"\x03m\x03m\x06m\u08A6\nm\rm\x0Em\u08A7\x03m\x03m\x03n\x03n\x03n\x06n\u08AF" +
		"\nn\rn\x0En\u08B0\x03n\x05n\u08B4\nn\x03n\x03n\x03n\x03n\x03n\x05n\u08BB" +
		"\nn\x03o\x03o\x03o\x03o\x03o\x05o\u08C2\no\x03p\x03p\x03q\x03q\x03r\x03" +
		"r\x03s\x03s\x03t\x03t\x03u\x03u\x03v\x03v\x03w\x03w\x03x\x03x\x03y\x03" +
		"y\x03z\x03z\x03{\x03{\x03{\x03|\x03|\x03}\x03}\x03~\x03~\x03\x7F\x03\x7F" +
		"\x03\x80\x03\x80\x03\x80\x05\x80\u08E8\n\x80\x03\x80\x03\x80\x03\x81\x03" +
		"\x81\x03\x82\x03\x82\x03\x82\x05\x82\u08F1\n\x82\x03\x83\x03\x83\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x05\x84\u08F9\n\x84\x03\x85\x03\x85\x03\x85\x07" +
		"\x85\u08FE\n\x85\f\x85\x0E\x85\u0901\v\x85\x03\x86\x03\x86\x03\x86\x05" +
		"\x86\u0906\n\x86\x03\x86\x03\x86\x03\x86\x05\x86\u090B\n\x86\x03\x87\x03" +
		"\x87\x03\x88\x03\x88\x05\x88\u0911\n\x88\x03\x88\x03\x88\x05\x88\u0915" +
		"\n";
	private static readonly _serializedATNSegment1: string =
		"\x88\x03\x89\x03\x89\x05\x89\u0919\n\x89\x03\x89\x05\x89\u091C\n\x89\x03" +
		"\x89\x03\x89\x05\x89\u0920\n\x89\x03\x89\x04\u08A7\u08B0\x02\x04B\x9A" +
		"\x8A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
		"|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E" +
		"\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0" +
		"\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2" +
		"\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4" +
		"\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6" +
		"\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8" +
		"\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA" +
		"\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02" +
		"\u010A\x02\u010C\x02\u010E\x02\u0110\x02\x02\"\x03\x02HI\x03\x02\xAE\xAF" +
		"\x03\x02]^\x03\x02NO\x03\x02TU\x03\x02VW\x03\x02XY\x03\x02Z[\x03\x02\x19" +
		"\x1A\x04\x02\x0E\x0E\x1C\x1D\x03\x02\x1E\x1F\x03\x02kl\x05\x02]^uuxx\x03" +
		"\x02y\x7F\x03\x02\x83\x87\x03\x02\x89\x8B\x04\x02\x13\x13\x90\x90\x03" +
		"\x02\x95\x96\x04\x02\x14\x14\x91\x91\x05\x02\x0E\x0E\x1E\x1E\"\"\x04\x02" +
		"\x13\x13pp\x04\x02\x14\x14qq\x03\x02\x8E\x8F\x03\x02\x9D\x9F\x04\x02\x9D" +
		"\x9E\xA0\xA1\x04\x02[[\x9F\x9F\x03\x02\xA2\xA4\x04\x02==AA\x03\x02>?\x07" +
		"\x02Hcejm\xA7\xA9\xB0\xB3\xB8\x04\x02CC\xB1\xB1\x03\x02\xB3\xB8\x02\u0A76" +
		"\x02\u0115\x03\x02\x02\x02\x04\u011A\x03\x02\x02\x02\x06\u011E\x03\x02" +
		"\x02\x02\b\u0136\x03\x02\x02\x02\n\u0144\x03\x02\x02\x02\f\u0146\x03\x02" +
		"\x02\x02\x0E\u0148\x03\x02\x02\x02\x10\u0187\x03\x02\x02\x02\x12\u018C" +
		"\x03\x02\x02\x02\x14\u018E\x03\x02\x02\x02\x16\u01AA\x03\x02\x02\x02\x18" +
		"\u01AF\x03\x02\x02\x02\x1A\u01B1\x03\x02\x02\x02\x1C\u01C7\x03\x02\x02" +
		"\x02\x1E\u01E0\x03\x02\x02\x02 \u01E6\x03\x02\x02\x02\"\u01E8\x03\x02" +
		"\x02\x02$\u01EF\x03\x02\x02\x02&\u01F1\x03\x02\x02\x02(\u01F3\x03\x02" +
		"\x02\x02*\u0200\x03\x02\x02\x02,\u0226\x03\x02\x02\x02.\u024C\x03\x02" +
		"\x02\x020\u025E\x03\x02\x02\x022\u02C1\x03\x02\x02\x024\u02CB\x03\x02" +
		"\x02\x026\u02CD\x03\x02\x02\x028\u02E0\x03\x02\x02\x02:\u02EE\x03\x02" +
		"\x02\x02<\u032B\x03\x02\x02\x02>\u032F\x03\x02\x02\x02@\u036C\x03\x02" +
		"\x02\x02B\u0375\x03\x02\x02\x02D\u038C\x03\x02\x02\x02F\u03A6\x03\x02" +
		"\x02\x02H\u03A8\x03\x02\x02\x02J\u03B7\x03\x02\x02\x02L\u03F9\x03\x02" +
		"\x02\x02N\u0402\x03\x02\x02\x02P\u0422\x03\x02\x02\x02R\u0451\x03\x02" +
		"\x02\x02T\u0466\x03\x02\x02\x02V\u047F\x03\x02\x02\x02X\u0492\x03\x02" +
		"\x02\x02Z\u049C\x03\x02\x02\x02\\\u04AC\x03\x02\x02\x02^\u04C5\x03\x02" +
		"\x02\x02`\u04DA\x03\x02\x02\x02b\u04EC\x03\x02\x02\x02d\u0502\x03\x02" +
		"\x02\x02f\u0518\x03\x02\x02\x02h\u0537\x03\x02\x02\x02j\u053B\x03\x02" +
		"\x02\x02l\u053D\x03\x02\x02\x02n\u0540\x03\x02\x02\x02p\u0569\x03\x02" +
		"\x02\x02r\u0581\x03\x02\x02\x02t\u0586\x03\x02\x02\x02v\u05A2\x03\x02" +
		"\x02\x02x\u05AE\x03\x02\x02\x02z\u05C4\x03\x02\x02\x02|\u05D4\x03\x02" +
		"\x02\x02~\u0602\x03\x02\x02\x02\x80\u065B\x03\x02\x02\x02\x82\u065E\x03" +
		"\x02\x02\x02\x84\u0662\x03\x02\x02\x02\x86\u0674\x03\x02\x02\x02\x88\u0695" +
		"\x03\x02\x02\x02\x8A\u06AD\x03\x02\x02\x02\x8C\u06EE\x03\x02\x02\x02\x8E" +
		"\u06FC\x03\x02\x02\x02\x90\u06FE\x03\x02\x02\x02\x92\u0702\x03\x02\x02" +
		"\x02\x94\u072E\x03\x02\x02\x02\x96\u0738\x03\x02\x02\x02\x98\u073A\x03" +
		"\x02\x02\x02\x9A\u0751\x03\x02\x02\x02\x9C\u0764\x03\x02\x02\x02\x9E\u076E" +
		"\x03\x02\x02\x02\xA0\u077E\x03\x02\x02\x02\xA2\u0780\x03\x02\x02\x02\xA4" +
		"\u0786\x03\x02\x02\x02\xA6\u0788\x03\x02\x02\x02\xA8\u079F\x03\x02\x02" +
		"\x02\xAA\u07DF\x03\x02\x02\x02\xAC\u07E1\x03\x02\x02\x02\xAE\u07F0\x03" +
		"\x02\x02\x02\xB0\u07F2\x03\x02\x02\x02\xB2\u0803\x03\x02\x02\x02\xB4\u0810" +
		"\x03\x02\x02\x02\xB6\u0812\x03\x02\x02\x02\xB8\u081D\x03\x02\x02\x02\xBA" +
		"\u0828\x03\x02\x02\x02\xBC\u0833\x03\x02\x02\x02\xBE\u0854\x03\x02\x02" +
		"\x02\xC0\u0856\x03\x02\x02\x02\xC2\u0865\x03\x02\x02\x02\xC4\u0867\x03" +
		"\x02\x02\x02\xC6\u0878\x03\x02\x02\x02\xC8\u0881\x03\x02\x02\x02\xCA\u0883" +
		"\x03\x02\x02\x02\xCC\u0885\x03\x02\x02\x02\xCE\u0887\x03\x02\x02\x02\xD0" +
		"\u088D\x03\x02\x02\x02\xD2\u0892\x03\x02\x02\x02\xD4\u089A\x03\x02\x02" +
		"\x02\xD6\u089C\x03\x02\x02\x02\xD8\u08A3\x03\x02\x02\x02\xDA\u08BA\x03" +
		"\x02\x02\x02\xDC\u08C1\x03\x02\x02\x02\xDE\u08C3\x03\x02\x02\x02\xE0\u08C5" +
		"\x03\x02\x02\x02\xE2\u08C7\x03\x02\x02\x02\xE4\u08C9\x03\x02\x02\x02\xE6" +
		"\u08CB\x03\x02\x02\x02\xE8\u08CD\x03\x02\x02\x02\xEA\u08CF\x03\x02\x02" +
		"\x02\xEC\u08D1\x03\x02\x02\x02\xEE\u08D3\x03\x02\x02\x02\xF0\u08D5\x03" +
		"\x02\x02\x02\xF2\u08D7\x03\x02\x02\x02\xF4\u08D9\x03\x02\x02\x02\xF6\u08DC" +
		"\x03\x02\x02\x02\xF8\u08DE\x03\x02\x02\x02\xFA\u08E0\x03\x02\x02\x02\xFC" +
		"\u08E2\x03\x02\x02\x02\xFE\u08E7\x03\x02\x02\x02\u0100\u08EB\x03\x02\x02" +
		"\x02\u0102\u08F0\x03\x02\x02\x02\u0104\u08F2\x03\x02\x02\x02\u0106\u08F8" +
		"\x03\x02\x02\x02\u0108\u08FA\x03\x02\x02\x02\u010A\u0905\x03\x02\x02\x02" +
		"\u010C\u090C\x03\x02\x02\x02\u010E\u0910\x03\x02\x02\x02\u0110\u0918\x03" +
		"\x02\x02\x02\u0112\u0114\x05\x04\x03\x02\u0113\u0112\x03\x02\x02\x02\u0114" +
		"\u0117\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02" +
		"\x02\x02\u0116\x03\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118\u011B" +
		"\x05\x0E\b\x02\u0119\u011B\x05\x12\n\x02\u011A\u0118\x03\x02\x02\x02\u011A" +
		"\u0119\x03\x02\x02\x02\u011B\x05\x03\x02\x02\x02\u011C\u011F\x05\n\x06" +
		"\x02\u011D\u011F\x05\b\x05\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011D" +
		"\x03\x02\x02\x02\u011F\x07\x03\x02\x02\x02\u0120\u0137\x05\x9CO\x02\u0121" +
		"\u0137\x05\xA2R\x02\u0122\u0137\x05\xA0Q\x02\u0123\u0137\x05$\x13\x02" +
		"\u0124\u0137\x05&\x14\x02\u0125\u0137\x05,\x17\x02\u0126\u0137\x05<\x1F" +
		"\x02\u0127\u0137\x05\x98M\x02\u0128\u0137\x05@!\x02\u0129\u0137\x05T+" +
		"\x02\u012A\u0137\x05\x90I\x02\u012B\u0137\x05F$\x02\u012C\u0137\x05H%" +
		"\x02\u012D\u0137\x05L\'\x02\u012E\u0137\x05V,\x02\u012F\u0137\x05^0\x02" +
		"\u0130\u0137\x05f4\x02\u0131\u0137\x05d3\x02\u0132\u0137\x05z>\x02\u0133" +
		"\u0137\x05\x80A\x02\u0134\u0137\x05\x92J\x02\u0135\u0137\x05\f\x07\x02" +
		"\u0136\u0120\x03\x02\x02\x02\u0136\u0121\x03\x02\x02\x02\u0136\u0122\x03" +
		"\x02\x02\x02\u0136\u0123\x03\x02\x02\x02\u0136\u0124\x03\x02\x02\x02\u0136" +
		"\u0125\x03\x02\x02\x02\u0136\u0126\x03\x02\x02\x02\u0136\u0127\x03\x02" +
		"\x02\x02\u0136\u0128\x03\x02\x02\x02\u0136\u0129\x03\x02\x02\x02\u0136" +
		"\u012A\x03\x02\x02\x02\u0136\u012B\x03\x02\x02\x02\u0136\u012C\x03\x02" +
		"\x02\x02\u0136\u012D\x03\x02\x02\x02\u0136\u012E\x03\x02\x02\x02\u0136" +
		"\u012F\x03\x02\x02\x02\u0136\u0130\x03\x02\x02\x02\u0136\u0131\x03\x02" +
		"\x02\x02\u0136\u0132\x03\x02\x02\x02\u0136\u0133\x03\x02\x02\x02\u0136" +
		"\u0134\x03\x02\x02\x02\u0136\u0135\x03\x02\x02\x02\u0137\t\x03\x02\x02" +
		"\x02\u0138\u0145\x05\x1A\x0E\x02\u0139\u013A\x07\x03\x02\x02\u013A\u0145" +
		"\x05\x1A\x0E\x02\u013B\u0145\x05\x1C\x0F\x02\u013C\u0145\x05\x0E\b\x02" +
		"\u013D\u0145\x05\x96L\x02\u013E\u0140\x05\b\x05\x02\u013F\u0141\x05.\x18" +
		"\x02\u0140\u013F\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0140" +
		"\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0145\x03\x02\x02\x02" +
		"\u0144\u0138\x03\x02\x02\x02\u0144\u0139\x03\x02\x02\x02\u0144\u013B\x03" +
		"\x02\x02\x02\u0144\u013C\x03\x02\x02\x02\u0144\u013D\x03\x02\x02\x02\u0144" +
		"\u013E\x03\x02\x02\x02\u0145\v\x03\x02\x02\x02\u0146\u0147\x07E\x02\x02" +
		"\u0147\r\x03\x02\x02\x02\u0148\u014A\t\x02\x02\x02\u0149\u014B\x05\u0102" +
		"\x82\x02\u014A\u0149\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B" +
		"\u0157\x03\x02\x02\x02\u014C\u0153\x07\x04\x02\x02\u014D\u014F\x05\x10" +
		"\t\x02\u014E\u0150\x07\x05\x02\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150" +
		"\x03\x02\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u014D\x03\x02\x02\x02" +
		"\u0152\u0155\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03" +
		"\x02\x02\x02\u0154\u0156\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0156" +
		"\u0158\x07\x06\x02\x02\u0157\u014C\x03\x02\x02\x02\u0157\u0158\x03\x02" +
		"\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015D\x07\x07\x02\x02\u015A" +
		"\u015C\x05\x12\n\x02\u015B\u015A\x03\x02\x02\x02\u015C\u015F\x03\x02\x02" +
		"\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0160" +
		"\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160\u0161\x07\b\x02\x02" +
		"\u0161\x0F\x03\x02\x02\x02\u0162\u0163\x07r\x02\x02\u0163\u0164\x07\t" +
		"\x02\x02\u0164\u0188\x05\u0102\x82\x02\u0165\u0166\x07b\x02\x02\u0166" +
		"\u0167\x07\t\x02\x02\u0167\u0188\x05\u0102\x82\x02\u0168\u0169\x07n\x02" +
		"\x02\u0169\u016A\x07\t\x02\x02\u016A\u0188\x05\u0102\x82\x02\u016B\u016C" +
		"\x07w\x02\x02\u016C\u016D\x07\t\x02\x02\u016D\u0188\x05\u0102\x82\x02" +
		"\u016E\u016F\x07\\\x02\x02\u016F\u0170\x07\t\x02\x02\u0170\u0188\x05\u0102" +
		"\x82\x02\u0171\u0172\x07_\x02\x02\u0172\u0173\x07\t\x02\x02\u0173\u0188" +
		"\x05\u0102\x82\x02\u0174\u0175\x07a\x02\x02\u0175\u0176\x07\t\x02\x02" +
		"\u0176\u0188\x05\u0102\x82\x02\u0177\u0178\t\x03\x02\x02\u0178\u0179\x07" +
		"\t\x02\x02\u0179\u0188\x05\u0102\x82\x02\u017A\u017B\x07\x8E\x02\x02\u017B" +
		"\u017C\x07\t\x02\x02\u017C\u0188\x05\u0102\x82\x02\u017D\u017E\x07\x8F" +
		"\x02\x02\u017E\u017F\x07\t\x02\x02\u017F\u0188\x05\u0102\x82\x02\u0180" +
		"\u0181\x07\xB0\x02\x02\u0181\u0182\x07\t\x02\x02\u0182\u0188\x05\u0102" +
		"\x82\x02\u0183\u0184\x07t\x02\x02\u0184\u0185\x07\t\x02\x02\u0185\u0188" +
		"\x05\u0102\x82\x02\u0186\u0188\x07t\x02\x02\u0187\u0162\x03\x02\x02\x02" +
		"\u0187\u0165\x03\x02\x02\x02\u0187\u0168\x03\x02\x02\x02\u0187\u016B\x03" +
		"\x02\x02\x02\u0187\u016E\x03\x02\x02\x02\u0187\u0171\x03\x02\x02\x02\u0187" +
		"\u0174\x03\x02\x02\x02\u0187\u0177\x03\x02\x02\x02\u0187\u017A\x03\x02" +
		"\x02\x02\u0187\u017D\x03\x02\x02\x02\u0187\u0180\x03\x02\x02\x02\u0187" +
		"\u0183\x03\x02\x02\x02\u0187\u0186\x03\x02\x02\x02\u0188\x11\x03\x02\x02" +
		"\x02\u0189\u018D\x05\x14\v\x02\u018A\u018D\x05\x18\r\x02\u018B\u018D\x05" +
		"\x96L\x02\u018C\u0189\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C" +
		"\u018B\x03\x02\x02\x02\u018D\x13\x03\x02\x02\x02\u018E\u018F\x07r\x02" +
		"\x02\u018F\u019B\x05\xFA~\x02\u0190\u0197\x07\x04\x02\x02\u0191\u0193" +
		"\x05\x16\f\x02\u0192\u0194\x07\x05\x02\x02\u0193\u0192\x03\x02\x02\x02" +
		"\u0193\u0194\x03\x02\x02\x02\u0194\u0196\x03\x02\x02\x02\u0195\u0191\x03" +
		"\x02\x02\x02\u0196\u0199\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0197" +
		"\u0198\x03\x02\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199\u0197\x03\x02" +
		"\x02\x02\u019A\u019C\x07\x06\x02\x02\u019B\u0190\x03\x02\x02\x02\u019B" +
		"\u019C\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u01A1\x07\x07" +
		"\x02\x02\u019E\u01A0\x05\x18\r\x02\u019F\u019E\x03\x02\x02\x02\u01A0\u01A3" +
		"\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02" +
		"\u01A2\u01A4\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A4\u01A5\x07" +
		"\b\x02\x02\u01A5\x15\x03\x02\x02\x02\u01A6\u01A7\x07\x9F\x02\x02\u01A7" +
		"\u01A8\x07\t\x02\x02\u01A8\u01AB\x05\xCAf\x02\u01A9\u01AB\x07\xAD\x02" +
		"\x02\u01AA\u01A6\x03\x02\x02\x02\u01AA\u01A9\x03\x02\x02\x02\u01AB\x17" +
		"\x03\x02\x02\x02\u01AC\u01B0\x05\x1A\x0E\x02\u01AD\u01B0\x05\x1C\x0F\x02" +
		"\u01AE\u01B0\x05\x14\v\x02\u01AF\u01AC\x03\x02\x02\x02\u01AF\u01AD\x03" +
		"\x02\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0\x19\x03\x02\x02\x02\u01B1" +
		"\u01B2\x07r\x02\x02\u01B2\u01BC\x05\xE0q\x02\u01B3\u01B4\x07s\x02\x02" +
		"\u01B4\u01B9\x05\xFA~\x02\u01B5\u01B6\x07\x05\x02\x02\u01B6\u01B8\x05" +
		"\xFA~\x02\u01B7\u01B5\x03\x02\x02\x02\u01B8\u01BB\x03\x02\x02\x02\u01B9" +
		"\u01B7\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BD\x03\x02" +
		"\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BC\u01B3\x03\x02\x02\x02\u01BC" +
		"\u01BD\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01C2\x07\x07" +
		"\x02\x02\u01BF\u01C1\x05\x06\x04\x02\u01C0\u01BF\x03\x02\x02\x02\u01C1" +
		"\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02" +
		"\x02\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5" +
		"\u01C6\x07\b\x02\x02\u01C6\x1B\x03\x02\x02\x02\u01C7\u01C8\x07r\x02\x02" +
		"\u01C8\u01C9\x05\xE0q\x02\u01C9\u01CA\x07\n\x02\x02\u01CA\u01CF\x05\x1E" +
		"\x10\x02\u01CB\u01CC\x07\x05\x02\x02\u01CC\u01CE\x05\x1E\x10\x02\u01CD" +
		"\u01CB\x03\x02\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03\x02" +
		"\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D2\x03\x02\x02\x02\u01D1" +
		"\u01CF\x03\x02\x02\x02\u01D2\u01D4\x07\v\x02\x02\u01D3\u01D5\x05\u010A" +
		"\x86\x02\u01D4\u01D3\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5" +
		"\u01D6\x03\x02\x02\x02\u01D6\u01DA\x07\x07\x02\x02\u01D7\u01D9\x05 \x11" +
		"\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8" +
		"\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD\x03\x02\x02\x02" +
		"\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01DE\x07\b\x02\x02\u01DE\x1D\x03\x02" +
		"\x02\x02\u01DF\u01E1\x05\u010A\x86\x02\u01E0\u01DF\x03\x02\x02\x02\u01E0" +
		"\u01E1\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x05\u0102" +
		"\x82\x02\u01E3\x1F\x03\x02\x02\x02\u01E4\u01E7\x05\x06\x04\x02\u01E5\u01E7" +
		"\x05\"\x12\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E5\x03\x02\x02\x02" +
		"\u01E7!\x03\x02\x02\x02\u01E8\u01E9\x07\xAA\x02\x02\u01E9\u01EA\x058\x1D" +
		"\x02\u01EA#\x03\x02\x02\x02\u01EB\u01EC\x07r\x02\x02\u01EC\u01F0\x05\xE0" +
		"q\x02\u01ED\u01EE\x07r\x02\x02\u01EE\u01F0\x05\xFA~\x02\u01EF\u01EB\x03" +
		"\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01F0%\x03\x02\x02\x02\u01F1" +
		"\u01F2\x05(\x15\x02\u01F2\'\x03\x02\x02\x02\u01F3\u01F4\x07r\x02\x02\u01F4" +
		"\u01F5\x05\xE0q\x02\u01F5\u01F6\x07\n\x02\x02\u01F6\u01FB\x05*\x16\x02" +
		"\u01F7\u01F8\x07\x05\x02\x02\u01F8\u01FA\x05*\x16\x02\u01F9\u01F7\x03" +
		"\x02\x02\x02\u01FA\u01FD\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FB" +
		"\u01FC\x03\x02\x02\x02\u01FC\u01FE\x03\x02\x02\x02\u01FD\u01FB\x03\x02" +
		"\x02\x02\u01FE\u01FF\x07\v\x02\x02\u01FF)\x03\x02\x02\x02\u0200\u0201" +
		"\x058\x1D\x02\u0201+\x03\x02\x02\x02\u0202\u0204\x07K\x02\x02\u0203\u0202" +
		"\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02" +
		"\u0205\u0209\x07\x07\x02\x02\u0206\u0208\x052\x1A\x02\u0207\u0206\x03" +
		"\x02\x02\x02\u0208\u020B\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209" +
		"\u020A\x03\x02\x02\x02\u020A\u020C\x03\x02\x02\x02\u020B\u0209\x03\x02" +
		"\x02\x02\u020C\u0210\x07\b\x02\x02\u020D\u020F\x05.\x18\x02\u020E\u020D" +
		"\x03\x02\x02\x02\u020F\u0212\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02" +
		"\u0210\u0211\x03\x02\x02\x02\u0211\u0215\x03\x02\x02\x02\u0212\u0210\x03" +
		"\x02\x02\x02\u0213\u0216\x050\x19\x02\u0214\u0216\x05.\x18\x02\u0215\u0213" +
		"\x03\x02\x02\x02\u0215\u0214\x03\x02\x02\x02\u0216\u021A\x03\x02\x02\x02" +
		"\u0217\u0219\x05.\x18\x02\u0218\u0217\x03\x02\x02\x02\u0219\u021C\x03" +
		"\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B" +
		"\u0227\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D\u021E\x07K\x02" +
		"\x02\u021E\u0220\x07\x07\x02\x02\u021F\u0221\x052\x1A\x02\u0220\u021F" +
		"\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02" +
		"\u0222\u0223\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0225\x07" +
		"\b\x02\x02\u0225\u0227\x03\x02\x02\x02\u0226\u0203\x03\x02\x02\x02\u0226" +
		"\u021D\x03\x02\x02\x02\u0227-\x03\x02\x02\x02\u0228\u0229\x07\f\x02\x02" +
		"\u0229\u024D\x05D#\x02\u022A\u022B\x07\r\x02\x02\u022B\u024D\x05D#\x02" +
		"\u022C\u022D\x07\f\x02\x02\u022D\u0234\x058\x1D\x02\u022E\u0230\x05\u0100" +
		"\x81\x02\u022F\u0231\x07\x0E\x02\x02\u0230\u022F\x03\x02\x02\x02\u0230" +
		"\u0231\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0233\x07C\x02" +
		"\x02\u0233\u0235\x03\x02\x02\x02\u0234\u022E\x03\x02\x02\x02\u0234\u0235" +
		"\x03\x02\x02\x02\u0235\u024D\x03\x02\x02\x02\u0236\u0237\x07\r\x02\x02" +
		"\u0237\u023E\x058\x1D\x02\u0238\u023A\x05\u0100\x81\x02\u0239\u023B\x07" +
		"\x0E\x02\x02\u023A\u0239\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B" +
		"\u023C\x03\x02\x02\x02\u023C\u023D\x07C\x02\x02\u023D\u023F\x03\x02\x02" +
		"\x02\u023E\u0238\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u024D" +
		"\x03\x02\x02\x02\u0240\u0241\x07\f\x02\x02\u0241\u0242\x07w\x02\x02\u0242" +
		"\u0244\x05\xE4s\x02\u0243\u0245\t\x04\x02\x02\u0244\u0243\x03\x02\x02" +
		"\x02\u0244\u0245\x03\x02\x02\x02\u0245\u024D\x03\x02\x02\x02\u0246\u0247" +
		"\x07\r\x02\x02\u0247\u0248\x07w\x02\x02\u0248\u024A\x05\xE4s\x02\u0249" +
		"\u024B\t\x04\x02\x02\u024A\u0249\x03\x02\x02\x02\u024A\u024B\x03\x02\x02" +
		"\x02\u024B\u024D\x03\x02\x02\x02\u024C\u0228\x03\x02\x02\x02\u024C\u022A" +
		"\x03\x02\x02\x02\u024C\u022C\x03\x02\x02\x02\u024C\u0236\x03\x02\x02\x02" +
		"\u024C\u0240\x03\x02\x02\x02\u024C\u0246\x03\x02\x02\x02\u024D/\x03\x02" +
		"\x02\x02\u024E\u024F\x07\x03\x02\x02\u024F\u025F\x05\b\x05\x02\u0250\u0251" +
		"\x07\x03\x02\x02\u0251\u025F\x05\x1A\x0E\x02\u0252\u0254\x07\x03\x02\x02" +
		"\u0253\u0255\x07r\x02\x02\u0254\u0253\x03\x02\x02\x02\u0254\u0255\x03" +
		"\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u025A\x07\x07\x02\x02\u0257" +
		"\u0259\x05\x06\x04\x02\u0258\u0257\x03\x02\x02\x02\u0259\u025C\x03\x02" +
		"\x02\x02\u025A\u0258\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B" +
		"\u025D\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025D\u025F\x07\b\x02" +
		"\x02\u025E\u024E\x03\x02\x02\x02\u025E\u0250\x03\x02\x02\x02\u025E\u0252" +
		"\x03\x02\x02\x02\u025F1\x03\x02\x02\x02\u0260\u0261\x07L\x02\x02\u0261" +
		"\u02C2\x07\xB9\x02\x02\u0262\u0263\x07M\x02\x02\u0263\u02C2\t\x05\x02" +
		"\x02\u0264\u0265\x07P\x02\x02\u0265\u02C2\x05\xE8u\x02\u0266\u0267\x07" +
		"Q\x02\x02\u0267\u02C2\x05\xDAn\x02\u0268\u0269\x07R\x02\x02\u0269\u02C2" +
		"\x05\xDAn\x02\u026A\u026B\x07S\x02\x02\u026B\u02C2\x05\xCEh\x02\u026C" +
		"\u026D\x07S\x02\x02\u026D\u026E\x05\xDAn\x02\u026E\u026F\t\x05\x02\x02" +
		"\u026F\u02C2\x03\x02\x02\x02\u0270\u0271\t\x06\x02\x02\u0271\u02C2\x05" +
		"\xCEh\x02\u0272\u0273\t\x06\x02\x02\u0273\u02C2\x05\xDAn\x02\u0274\u0275" +
		"\t\x07\x02\x02\u0275\u02C2\x05\xD0i\x02\u0276\u0277\t\x07\x02\x02\u0277" +
		"\u02C2\x05\xDAn\x02\u0278\u027A\t\b\x02\x02\u0279\u0278\x03\x02\x02\x02" +
		"\u0279\u027A\x03\x02\x02\x02\u027A\u027C\x03\x02\x02\x02\u027B\u027D\x07" +
		"_\x02\x02\u027C\u027B\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D" +
		"\u027E\x03\x02\x02\x02\u027E\u02C2\x05\xDAn\x02\u027F\u0281\t\b\x02\x02" +
		"\u0280\u027F\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0283\x03" +
		"\x02\x02\x02\u0282\u0284\x07`\x02\x02\u0283\u0282\x03\x02\x02\x02\u0283" +
		"\u0284\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286\x05D#\x02" +
		"\u0286\u0287\x077\x02\x02\u0287\u0288\x05D#\x02\u0288\u02C2\x03\x02\x02" +
		"\x02\u0289\u028B\t\b\x02\x02\u028A\u0289\x03\x02\x02\x02\u028A\u028B\x03" +
		"\x02\x02\x02\u028B\u028D\x03\x02\x02\x02\u028C\u028E\x07`\x02\x02\u028D" +
		"\u028C\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u028F\x03\x02" +
		"\x02\x02\u028F\u0295\x05D#\x02\u0290\u0292\x07d\x02\x02\u0291\u0290\x03" +
		"\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293" +
		"\u0296\x054\x1B\x02\u0294\u0296\x056\x1C\x02\u0295\u0291\x03\x02\x02\x02" +
		"\u0295\u0294\x03\x02\x02\x02\u0296\u02C2\x03\x02\x02\x02\u0297\u0299\t" +
		"\b\x02\x02\u0298\u0297\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299" +
		"\u029B\x03\x02\x02\x02\u029A\u029C\x07b\x02\x02\u029B\u029A\x03\x02\x02" +
		"\x02\u029B\u029C\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029E" +
		"\x05\xCEh\x02\u029E\u029F\x05\xD6l\x02\u029F\u02C2\x03\x02\x02\x02\u02A0" +
		"\u02A2\t\b\x02\x02\u02A1\u02A0\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02" +
		"\x02\u02A2\u02A4\x03\x02\x02\x02\u02A3\u02A5\x07c\x02\x02\u02A4\u02A3" +
		"\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02" +
		"\u02A6\u02A7\x05\xCEh\x02\u02A7\u02A8\x05\xCEh\x02\u02A8\u02A9\x05\xCE" +
		"h\x02\u02A9\u02AA\t\t\x02\x02\u02AA\u02C2\x03\x02\x02\x02\u02AB\u02AD" +
		"\t\b\x02\x02\u02AC\u02AB\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD" +
		"\u02AF\x03\x02\x02\x02\u02AE\u02B0\x07m\x02\x02\u02AF\u02AE\x03\x02\x02" +
		"\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02C2" +
		"\x058\x1D\x02\u02B2\u02B4\t\b\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B3" +
		"\u02B4\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6\x07\\\x02" +
		"\x02\u02B6\u02B7\x05\xCEh\x02\u02B7\u02B8\x05\xE6t\x02\u02B8\u02C2\x03" +
		"\x02\x02\x02\u02B9\u02BB\t\b\x02\x02\u02BA\u02B9\x03\x02\x02\x02\u02BA" +
		"\u02BB\x03\x02\x02\x02\u02BB\u02BD\x03\x02\x02\x02\u02BC\u02BE\x07a\x02" +
		"\x02\u02BD\u02BC\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02BF" +
		"\x03\x02\x02\x02\u02BF\u02C2\x05\xEAv\x02\u02C0\u02C2\x05.\x18\x02\u02C1" +
		"\u0260\x03\x02\x02\x02\u02C1\u0262\x03\x02\x02\x02\u02C1\u0264\x03\x02" +
		"\x02\x02\u02C1\u0266\x03\x02\x02\x02\u02C1\u0268\x03\x02\x02\x02\u02C1" +
		"\u026A\x03\x02\x02\x02\u02C1\u026C\x03\x02\x02\x02\u02C1\u0270\x03\x02" +
		"\x02\x02\u02C1\u0272\x03\x02\x02\x02\u02C1\u0274\x03\x02\x02\x02\u02C1" +
		"\u0276\x03\x02\x02\x02\u02C1\u0279\x03\x02\x02\x02\u02C1\u0280\x03\x02" +
		"\x02\x02\u02C1\u028A\x03\x02\x02\x02\u02C1\u0298\x03\x02\x02\x02\u02C1" +
		"\u02A1\x03\x02\x02\x02\u02C1\u02AC\x03\x02\x02\x02\u02C1\u02B3\x03\x02" +
		"\x02\x02\u02C1\u02BA\x03\x02\x02\x02\u02C1\u02C0\x03\x02\x02\x02\u02C2" +
		"3\x03\x02\x02\x02\u02C3\u02C4\x07C\x02\x02\u02C4\u02C6\x07\x0F\x02\x02" +
		"\u02C5\u02C7\x07C\x02\x02\u02C6\u02C5\x03\x02\x02\x02\u02C6\u02C7\x03" +
		"\x02\x02\x02\u02C7\u02CC\x03\x02\x02\x02\u02C8\u02C9\x07\x0F\x02\x02\u02C9" +
		"\u02CC\x07C\x02\x02\u02CA\u02CC\x07C\x02\x02\u02CB\u02C3\x03\x02\x02\x02" +
		"\u02CB\u02C8\x03\x02\x02\x02\u02CB\u02CA\x03\x02\x02\x02\u02CC5\x03\x02" +
		"\x02\x02\u02CD\u02CE\x077\x02\x02\u02CE\u02CF\x07C\x02\x02\u02CF7\x03" +
		"\x02\x02\x02\u02D0\u02D1\x07J\x02\x02\u02D1\u02D2\x07\x10\x02\x02\u02D2" +
		"\u02E1\x05\xA8U\x02\u02D3\u02D4\x05\xE2r\x02\u02D4\u02D5\x07\x10\x02\x02" +
		"\u02D5\u02D6\x05\xA8U\x02\u02D6\u02E1\x03\x02\x02\x02\u02D7\u02E1\x05" +
		"\u0102\x82\x02\u02D8\u02D9\x05\xDAn\x02\u02D9\u02DA\x07\x10\x02\x02\u02DA" +
		"\u02DB\x05\xA8U\x02\u02DB\u02E1\x03\x02\x02\x02\u02DC\u02DD\x05\xCEh\x02" +
		"\u02DD\u02DE\x07\x10\x02\x02\u02DE\u02DF\x05\xA8U\x02\u02DF\u02E1\x03" +
		"\x02\x02\x02\u02E0\u02D0\x03\x02\x02\x02\u02E0\u02D3\x03\x02\x02\x02\u02E0" +
		"\u02D7\x03\x02\x02\x02\u02E0\u02D8\x03\x02\x02\x02\u02E0\u02DC\x03\x02" +
		"\x02\x02\u02E19\x03\x02\x02\x02\u02E2\u02E3\x05\xE2r\x02\u02E3\u02E4\x07" +
		"\x11\x02\x02\u02E4\u02E5\x05\xA4S\x02\u02E5\u02EF\x03\x02\x02\x02\u02E6" +
		"\u02E7\x05\xDAn\x02\u02E7\u02E8\x07\x11\x02\x02\u02E8\u02E9\x05\xA4S\x02" +
		"\u02E9\u02EF\x03\x02\x02\x02\u02EA\u02EB\x05\xCEh\x02\u02EB\u02EC\x07" +
		"\x11\x02\x02\u02EC\u02ED\x05\xA4S\x02\u02ED\u02EF\x03\x02\x02\x02\u02EE" +
		"\u02E2\x03\x02\x02\x02\u02EE\u02E6\x03\x02\x02\x02\u02EE\u02EA\x03\x02" +
		"\x02\x02\u02EF;\x03\x02\x02\x02\u02F0\u02F5\x058\x1D\x02\u02F1\u02F3\x07" +
		"\x0E\x02\x02\u02F2\u02F1\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3" +
		"\u02F4\x03\x02\x02\x02\u02F4\u02F6\x07C\x02\x02\u02F5\u02F2\x03\x02\x02" +
		"\x02\u02F5\u02F6";
	private static readonly _serializedATNSegment2: string =
		"\x03\x02\x02\x02\u02F6\u032C\x03\x02\x02\x02\u02F7\u032C\x05:\x1E\x02" +
		"\u02F8\u02F9\x058\x1D\x02\u02F9\u02FA\x07\x11\x02\x02\u02FA\u02FB\x05" +
		"\xA4S\x02\u02FB\u032C\x03\x02\x02\x02\u02FC\u02FD\x058\x1D\x02\u02FD\u02FE" +
		"\x07\x11\x02\x02\u02FE\u02FF\x05> \x02\u02FF\u032C\x03\x02\x02\x02\u0300" +
		"\u0302\x05\u010A\x86\x02\u0301\u0300\x03\x02\x02\x02\u0301\u0302\x03\x02" +
		"\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0304\x058\x1D\x02\u0304\u0305" +
		"\x07\t\x02\x02\u0305\u0306\x05\xA4S\x02\u0306\u032C\x03\x02\x02\x02\u0307" +
		"\u0309\x05\u010A\x86\x02\u0308\u0307\x03\x02\x02\x02\u0308\u0309\x03\x02" +
		"\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u030B\x058\x1D\x02\u030B\u030C" +
		"\x07\t\x02\x02\u030C\u030D\x05> \x02\u030D\u032C\x03\x02\x02\x02\u030E" +
		"\u030F\x058\x1D\x02\u030F\u0310\x07\x0F\x02\x02\u0310\u0311\x05\xA4S\x02" +
		"\u0311\u032C\x03\x02\x02\x02\u0312\u0313\x058\x1D\x02\u0313\u0314\x07" +
		"\x0F\x02\x02\u0314\u0315\x05> \x02\u0315\u032C\x03\x02\x02\x02\u0316\u0317" +
		"\x058\x1D\x02\u0317\u0318\x07\x12\x02\x02\u0318\u0319\x05\xA4S\x02\u0319" +
		"\u032C\x03\x02\x02\x02\u031A\u031B\x058\x1D\x02\u031B\u031C\x07\x12\x02" +
		"\x02\u031C\u031D\x05> \x02\u031D\u032C\x03\x02\x02\x02\u031E\u031F\x05" +
		"8\x1D\x02\u031F\u0320\x07\x0F\x02\x02\u0320\u0321\x07C\x02\x02\u0321\u0322" +
		"\x05\xA4S\x02\u0322\u032C\x03\x02\x02\x02\u0323\u0324\x058\x1D\x02\u0324" +
		"\u0325\x07\x0F\x02\x02\u0325\u0326\x07C\x02\x02\u0326\u0327\x05> \x02" +
		"\u0327\u032C\x03\x02\x02\x02\u0328\u0329\x058\x1D\x02\u0329\u032A\x07" +
		"q\x02\x02\u032A\u032C\x03\x02\x02\x02\u032B\u02F0\x03\x02\x02\x02\u032B" +
		"\u02F7\x03\x02\x02\x02\u032B\u02F8\x03\x02\x02\x02\u032B\u02FC\x03\x02" +
		"\x02\x02\u032B\u0301\x03\x02\x02\x02\u032B\u0308\x03\x02\x02\x02\u032B" +
		"\u030E\x03\x02\x02\x02\u032B\u0312\x03\x02\x02\x02\u032B\u0316\x03\x02" +
		"\x02\x02\u032B\u031A\x03\x02\x02\x02\u032B\u031E\x03\x02\x02\x02\u032B" +
		"\u0323\x03\x02\x02\x02\u032B\u0328\x03\x02\x02\x02\u032C=\x03\x02\x02" +
		"\x02\u032D\u0330\x058\x1D\x02\u032E\u0330\x05(\x15\x02\u032F\u032D\x03" +
		"\x02\x02\x02\u032F\u032E\x03\x02\x02\x02\u0330?\x03\x02\x02\x02\u0331" +
		"\u036D\x05D#\x02\u0332\u0333\x05D#\x02\u0333\u0334\x07\x13\x02\x02\u0334" +
		"\u0335\x07C\x02\x02\u0335\u036D\x03\x02\x02\x02\u0336\u0337\x05D#\x02" +
		"\u0337\u0338\x07\x14\x02\x02\u0338\u0339\x07C\x02\x02\u0339\u036D\x03" +
		"\x02\x02\x02\u033A\u033B\x05D#\x02\u033B\u033C\x07\t\x02\x02\u033C\u033D" +
		"\x07C\x02\x02\u033D\u036D\x03\x02\x02\x02\u033E\u033F\x05D#\x02\u033F" +
		"\u0340\x07\x13\x02\x02\u0340\u0341\x05D#\x02\u0341\u036D\x03\x02\x02\x02" +
		"\u0342\u0343\x05D#\x02\u0343\u0344\x07\x14\x02\x02\u0344\u0345\x05D#\x02" +
		"\u0345\u036D\x03\x02\x02\x02\u0346\u0347\x05D#\x02\u0347\u0348\x07\x15" +
		"\x02\x02\u0348\u0349\x05D#\x02\u0349\u036D\x03\x02\x02\x02\u034A\u034B" +
		"\x05D#\x02\u034B\u034C\x07\x16\x02\x02\u034C\u034D\x05D#\x02\u034D\u036D" +
		"\x03\x02\x02\x02\u034E\u034F\x05D#\x02\u034F\u0350\x07\x17\x02\x02\u0350" +
		"\u0351\x05D#\x02\u0351\u036D\x03\x02\x02\x02\u0352\u0353\x05D#\x02\u0353" +
		"\u0354\x07\x18\x02\x02\u0354\u0355\x05D#\x02\u0355\u036D\x03\x02\x02\x02" +
		"\u0356\u0357\x05D#\x02\u0357\u0358\x07\x19\x02\x02\u0358\u0359\x05D#\x02" +
		"\u0359\u036D\x03\x02\x02\x02\u035A\u035B\x05D#\x02\u035B\u035C\x07\x1A" +
		"\x02\x02\u035C\u035D\x05D#\x02\u035D\u036D\x03\x02\x02\x02\u035E\u035F" +
		"\x05D#\x02\u035F\u0360\x07\t\x02\x02\u0360\u0361\x05D#\x02\u0361\u036D" +
		"\x03\x02\x02\x02\u0362\u0363\x05D#\x02\u0363\u0364\x07o\x02\x02\u0364" +
		"\u036D\x03\x02\x02\x02\u0365\u0366\x05D#\x02\u0366\u0367\x07i\x02\x02" +
		"\u0367\u036D\x03\x02\x02\x02\u0368\u0369\x05D#\x02\u0369\u036A\x07\x1B" +
		"\x02\x02\u036A\u036B\x05B\"\x02\u036B\u036D\x03\x02\x02\x02\u036C\u0331" +
		"\x03\x02\x02\x02\u036C\u0332\x03\x02\x02\x02\u036C\u0336\x03\x02\x02\x02" +
		"\u036C\u033A\x03\x02\x02\x02\u036C\u033E\x03\x02\x02\x02\u036C\u0342\x03" +
		"\x02\x02\x02\u036C\u0346\x03\x02\x02\x02\u036C\u034A\x03\x02\x02\x02\u036C" +
		"\u034E\x03\x02\x02\x02\u036C\u0352\x03\x02\x02\x02\u036C\u0356\x03\x02" +
		"\x02\x02\u036C\u035A\x03\x02\x02\x02\u036C\u035E\x03\x02\x02\x02\u036C" +
		"\u0362\x03\x02\x02\x02\u036C\u0365\x03\x02\x02\x02\u036C\u0368\x03\x02" +
		"\x02\x02\u036DA\x03\x02\x02\x02\u036E\u036F\b\"\x01\x02\u036F\u0376\x07" +
		"C\x02\x02\u0370\u0376\x05D#\x02\u0371\u0372\x07\n\x02\x02\u0372\u0373" +
		"\x05B\"\x02\u0373\u0374\x07\v\x02\x02\u0374\u0376\x03\x02\x02\x02\u0375" +
		"\u036E\x03\x02\x02\x02\u0375\u0370\x03\x02\x02\x02\u0375\u0371\x03\x02" +
		"\x02\x02\u0376\u0382\x03\x02\x02\x02\u0377\u0378\f\b\x02\x02\u0378\u0379" +
		"\t\n\x02\x02\u0379\u0381\x05B\"\t\u037A\u037B\f\x07\x02\x02\u037B\u037C" +
		"\t\v\x02\x02\u037C\u0381\x05B\"\b\u037D\u037E\f\x06\x02\x02\u037E\u037F" +
		"\t\f\x02\x02\u037F\u0381\x05B\"\x07\u0380\u0377\x03\x02\x02\x02\u0380" +
		"\u037A\x03\x02\x02\x02\u0380\u037D\x03\x02\x02\x02\u0381\u0384\x03\x02" +
		"\x02\x02\u0382\u0380\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383" +
		"C\x03\x02\x02\x02\u0384\u0382\x03\x02\x02\x02\u0385\u0386\x05\u0106\x84" +
		"\x02\u0386\u0387\x05\xDAn\x02\u0387\u038D\x03\x02\x02\x02\u0388\u0389" +
		"\x05\xDAn\x02\u0389\u038A\x07 \x02\x02\u038A\u038B\x05\u0106\x84\x02\u038B" +
		"\u038D\x03\x02\x02\x02\u038C\u0385\x03\x02\x02\x02\u038C\u0388\x03\x02" +
		"\x02\x02\u038DE\x03\x02\x02\x02\u038E\u038F\x07m\x02\x02\u038F\u0393\x07" +
		"\x07\x02\x02\u0390\u0392\x05<\x1F\x02\u0391\u0390\x03\x02\x02\x02\u0392" +
		"\u0395\x03\x02\x02\x02\u0393\u0391\x03\x02\x02\x02\u0393\u0394\x03\x02" +
		"\x02\x02\u0394\u0396\x03\x02\x02\x02\u0395\u0393\x03\x02\x02\x02\u0396" +
		"\u03A7\x07\b\x02\x02\u0397\u0398\x07m\x02\x02\u0398\u039B\x05\xE2r\x02" +
		"\u0399\u039A\x07\x10\x02\x02\u039A\u039C\x05\u0102\x82\x02\u039B\u0399" +
		"\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02" +
		"\u039D\u03A1\x07\x07\x02\x02\u039E\u03A0\x05<\x1F\x02\u039F\u039E\x03" +
		"\x02\x02\x02\u03A0\u03A3\x03\x02\x02\x02\u03A1\u039F\x03\x02\x02\x02\u03A1" +
		"\u03A2\x03\x02\x02\x02\u03A2\u03A4\x03\x02\x02\x02\u03A3\u03A1\x03\x02" +
		"\x02\x02\u03A4\u03A5\x07\b\x02\x02\u03A5\u03A7\x03\x02\x02\x02\u03A6\u038E" +
		"\x03\x02\x02\x02\u03A6\u0397\x03\x02\x02\x02\u03A7G\x03\x02\x02\x02\u03A8" +
		"\u03A9\x07e\x02\x02\u03A9\u03AD\x07\x07\x02\x02\u03AA\u03AC\x05J&\x02" +
		"\u03AB\u03AA\x03\x02\x02\x02\u03AC\u03AF\x03\x02\x02\x02\u03AD\u03AB\x03" +
		"\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03B0\x03\x02\x02\x02\u03AF" +
		"\u03AD\x03\x02\x02\x02\u03B0\u03B1\x07\b\x02\x02\u03B1I\x03\x02\x02\x02" +
		"\u03B2\u03B8\x05@!\x02\u03B3\u03B5\x05\xDAn\x02\u03B4\u03B3\x03\x02\x02" +
		"\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03B8" +
		"\x07j\x02\x02\u03B7\u03B2\x03\x02\x02\x02\u03B7\u03B4\x03\x02\x02\x02" +
		"\u03B8K\x03\x02\x02\x02\u03B9\u03BE\x07e\x02\x02\u03BA\u03BB\x07\n\x02" +
		"\x02\u03BB\u03BC\x05\u0104\x83\x02\u03BC\u03BD\x07\v\x02\x02\u03BD\u03BF" +
		"\x03\x02\x02\x02\u03BE\u03BA\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02" +
		"\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03C1\x05\u0102\x82\x02\u03C1\u03CD" +
		"\x05\xA6T\x02\u03C2\u03C9\x07\x07\x02\x02\u03C3\u03C5\x07!\x02\x02\u03C4" +
		"\u03C3\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C6\x03\x02" +
		"\x02\x02\u03C6\u03C8\x05N(\x02\u03C7\u03C4\x03\x02\x02\x02\u03C8\u03CB" +
		"\x03\x02\x02\x02\u03C9\u03C7\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02" +
		"\u03CA\u03CC\x03\x02\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CC\u03CE\x07" +
		"\b\x02\x02\u03CD\u03C2\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE" +
		"\u03FA\x03\x02\x02\x02\u03CF\u03D0\x07e\x02\x02\u03D0\u03D1\x07\n\x02" +
		"\x02\u03D1\u03D2\x05\u0104\x83\x02\u03D2\u03D3\x07\v\x02\x02\u03D3\u03D4" +
		"\x05\u0102\x82\x02\u03D4\u03FA\x03\x02\x02\x02\u03D5\u03DA\x07e\x02\x02" +
		"\u03D6\u03D7\x07\n\x02\x02\u03D7\u03D8\x05\u0104\x83\x02\u03D8\u03D9\x07" +
		"\v\x02\x02\u03D9\u03DB\x03\x02\x02\x02\u03DA\u03D6\x03\x02\x02\x02\u03DA" +
		"\u03DB\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DD\x05\u0102" +
		"\x82\x02\u03DD\u03E9\x07t\x02\x02\u03DE\u03E5\x07\x07\x02\x02\u03DF\u03E1" +
		"\x07!\x02\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02" +
		"\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E4\x05N(\x02\u03E3\u03E0\x03\x02" +
		"\x02\x02\u03E4\u03E7\x03\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02\u03E5" +
		"\u03E6\x03\x02\x02\x02\u03E6\u03E8\x03\x02\x02\x02\u03E7\u03E5\x03\x02" +
		"\x02\x02\u03E8\u03EA\x07\b\x02\x02\u03E9\u03DE\x03\x02\x02\x02\u03E9\u03EA" +
		"\x03\x02\x02\x02\u03EA\u03FA\x03\x02\x02\x02\u03EB\u03EC\x07e\x02\x02" +
		"\u03EC\u03ED\x05\u0102\x82\x02\u03ED\u03F4\x07\x07\x02\x02\u03EE\u03F0" +
		"\x07!\x02\x02\u03EF\u03EE\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02" +
		"\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F3\x05N(\x02\u03F2\u03EF\x03\x02" +
		"\x02\x02\u03F3\u03F6\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F4" +
		"\u03F5\x03\x02\x02\x02\u03F5\u03F7\x03\x02\x02\x02\u03F6\u03F4\x03\x02" +
		"\x02\x02\u03F7\u03F8\x07\b\x02\x02\u03F8\u03FA\x03\x02\x02\x02\u03F9\u03B9" +
		"\x03\x02\x02\x02\u03F9\u03CF\x03\x02\x02\x02\u03F9\u03D5\x03\x02\x02\x02" +
		"\u03F9\u03EB\x03\x02\x02\x02\u03FAM\x03\x02\x02\x02\u03FB\u0403\x07q\x02" +
		"\x02\u03FC\u03FD\x07f\x02\x02\u03FD\u0403\x05\xA6T\x02\u03FE\u03FF\x07" +
		"g\x02\x02\u03FF\u0403\t\r\x02\x02\u0400\u0401\x07h\x02\x02\u0401\u0403" +
		"\x05\u0102\x82\x02\u0402\u03FB\x03\x02\x02\x02\u0402\u03FC\x03\x02\x02" +
		"\x02\u0402\u03FE\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0403O\x03" +
		"\x02\x02\x02\u0404\u0405\x07w\x02\x02\u0405\u0406\x05\xE4s\x02\u0406\u0412" +
		"\x05\xA6T\x02\u0407\u040E\x07\x07\x02\x02\u0408\u040A\x07!\x02\x02\u0409" +
		"\u0408\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\u040B\x03\x02" +
		"\x02\x02\u040B\u040D\x05R*\x02\u040C\u0409\x03\x02\x02\x02\u040D\u0410" +
		"\x03\x02\x02\x02\u040E\u040C\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02" +
		"\u040F\u0411\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0411\u0413\x07" +
		"\b\x02\x02\u0412\u0407\x03\x02\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413" +
		"\u0423\x03\x02\x02\x02\u0414\u0415\x07w\x02\x02\u0415\u0416\x05\xE4s\x02" +
		"\u0416\u041D\x07\x07\x02\x02\u0417\u0419\x07!\x02\x02\u0418\u0417\x03" +
		"\x02\x02\x02\u0418\u0419\x03\x02\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A" +
		"\u041C\x05R*\x02\u041B\u0418\x03\x02\x02\x02\u041C\u041F\x03\x02\x02\x02" +
		"\u041D\u041B\x03\x02\x02\x02\u041D\u041E\x03\x02\x02\x02\u041E\u0420\x03" +
		"\x02\x02\x02\u041F\u041D\x03\x02\x02\x02\u0420\u0421\x07\b\x02\x02\u0421" +
		"\u0423\x03\x02\x02\x02\u0422\u0404\x03\x02\x02\x02\u0422\u0414\x03\x02" +
		"\x02\x02\u0423Q\x03\x02\x02\x02\u0424\u0426\x07\x9A\x02\x02\u0425\u0424" +
		"\x03\x02\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02" +
		"\u0427\u0452\t\x0E\x02\x02\u0428\u0452\x07q\x02\x02\u0429\u042B\x07\x88" +
		"\x02\x02\u042A\u0429\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B" +
		"\u042C\x03\x02\x02\x02\u042C\u042D\x07\x80\x02\x02\u042D\u0452\t\x0F\x02" +
		"\x02\u042E\u0430\x07\x88\x02\x02\u042F\u042E\x03\x02\x02\x02\u042F\u0430" +
		"\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431\u0432\x07^\x02\x02" +
		"\u0432\u0452\x07C\x02\x02\u0433\u0435\x07\x88\x02\x02\u0434\u0433\x03" +
		"\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0436\x03\x02\x02\x02\u0436" +
		"\u0437\x07\x81\x02\x02\u0437\u0452\x05\xA6T\x02\u0438\u043A\x07\x88\x02" +
		"\x02\u0439\u0438\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u043B" +
		"\x03\x02\x02\x02\u043B\u043C\x07v\x02\x02\u043C\u0452\x05\xDAn\x02\u043D" +
		"\u043F\x07\x88\x02\x02\u043E\u043D\x03\x02\x02\x02\u043E\u043F\x03\x02" +
		"\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\u0441\x07v\x02\x02\u0441\u0452" +
		"\x07t\x02\x02\u0442\u0444\x07\x88\x02\x02\u0443\u0442\x03\x02\x02\x02" +
		"\u0443\u0444\x03\x02\x02\x02\u0444\u0445\x03\x02\x02\x02\u0445\u0446\x07" +
		"\x82\x02\x02\u0446\u0452\t\x10\x02\x02\u0447\u0449\x07\x88\x02\x02\u0448" +
		"\u0447\x03\x02\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449\u044A\x03\x02" +
		"\x02\x02\u044A\u044B\x07]\x02\x02\u044B\u0452\x07C\x02\x02\u044C\u044E" +
		"\x07\x88\x02\x02\u044D\u044C\x03\x02\x02\x02\u044D\u044E\x03\x02\x02\x02" +
		"\u044E\u044F\x03\x02\x02\x02\u044F\u0450\x07x\x02\x02\u0450\u0452\x05" +
		"\xCAf\x02\u0451\u0425\x03\x02\x02\x02\u0451\u0428\x03\x02\x02\x02\u0451" +
		"\u042A\x03\x02\x02\x02\u0451\u042F\x03\x02\x02\x02\u0451\u0434\x03\x02" +
		"\x02\x02\u0451\u0439\x03\x02\x02\x02\u0451\u043E\x03\x02\x02\x02\u0451" +
		"\u0443\x03\x02\x02\x02\u0451\u0448\x03\x02\x02\x02\u0451\u044D\x03\x02" +
		"\x02\x02\u0452S\x03\x02\x02\x02\u0453\u0454\x07w\x02\x02\u0454\u0456\x05" +
		"\xE4s\x02\u0455\u0457\t\x0E\x02\x02\u0456\u0455\x03\x02\x02\x02\u0456" +
		"\u0457\x03\x02\x02\x02\u0457\u0467\x03\x02\x02\x02\u0458\u0459\x07w\x02" +
		"\x02\u0459\u045B\x05\xE4s\x02\u045A\u045C\x07]\x02\x02\u045B\u045A\x03" +
		"\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D" +
		"\u045E\x07\t\x02\x02\u045E\u045F\x07C\x02\x02\u045F\u0467\x03\x02\x02" +
		"\x02\u0460\u0461\x07w\x02\x02\u0461\u0462\x05\xE4s\x02\u0462\u0463\x07" +
		"^\x02\x02\u0463\u0464\x07\t\x02\x02\u0464\u0465\x07C\x02\x02\u0465\u0467" +
		"\x03\x02\x02\x02\u0466\u0453\x03\x02\x02\x02\u0466\u0458\x03\x02\x02\x02" +
		"\u0466\u0460\x03\x02\x02\x02\u0467U\x03\x02\x02\x02\u0468\u0469\x07\x89" +
		"\x02\x02\u0469\u046D\x07\x07\x02\x02\u046A\u046C\x05X-\x02\u046B\u046A" +
		"\x03\x02\x02\x02\u046C\u046F\x03\x02\x02\x02\u046D\u046B\x03\x02\x02\x02" +
		"\u046D\u046E\x03\x02\x02\x02\u046E\u0470\x03\x02\x02\x02\u046F\u046D\x03" +
		"\x02\x02\x02\u0470\u0480\x07\b\x02\x02\u0471\u0472\x07\x89\x02\x02\u0472" +
		"\u0473\x05\xDAn\x02\u0473\u047A\x07\x07\x02\x02\u0474\u0476\x07!\x02\x02" +
		"\u0475\u0474\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476\u0477\x03" +
		"\x02\x02\x02\u0477\u0479\x05Z.\x02\u0478\u0475\x03\x02\x02\x02\u0479\u047C" +
		"\x03\x02\x02\x02\u047A\u0478\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02" +
		"\u047B\u047D\x03\x02\x02\x02\u047C\u047A\x03\x02\x02\x02\u047D\u047E\x07" +
		"\b\x02\x02\u047E\u0480\x03\x02\x02\x02\u047F\u0468\x03\x02\x02\x02\u047F" +
		"\u0471\x03\x02\x02\x02\u0480W\x03\x02\x02\x02\u0481\u0482\x05\xDAn\x02" +
		"\u0482\u0483\x07!\x02\x02\u0483\u0484\x05\\/\x02\u0484\u0493\x03\x02\x02" +
		"\x02\u0485\u0486\x05\xDAn\x02\u0486\u048D\x07\x07\x02\x02\u0487\u0489" +
		"\x07!\x02\x02\u0488\u0487\x03\x02\x02\x02\u0488\u0489\x03\x02\x02\x02" +
		"\u0489\u048A\x03\x02\x02\x02\u048A\u048C\x05Z.\x02\u048B\u0488\x03\x02" +
		"\x02\x02\u048C\u048F\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048D" +
		"\u048E\x03\x02\x02\x02\u048E\u0490\x03\x02\x02\x02\u048F\u048D\x03\x02" +
		"\x02\x02\u0490\u0491\x07\b\x02\x02\u0491\u0493\x03\x02\x02\x02\u0492\u0481" +
		"\x03\x02\x02\x02\u0492\u0485\x03\x02\x02\x02\u0493Y\x03\x02\x02\x02\u0494" +
		"\u0495\t\x11\x02\x02\u0495\u049D\x05\xA6T\x02\u0496\u049D\x07\x91\x02" +
		"\x02\u0497\u049D\x07o\x02\x02\u0498\u0499\x07\x8C\x02\x02\u0499\u049A" +
		"\x07C\x02\x02\u049A\u049B\x07C\x02\x02\u049B\u049D\x07C\x02\x02\u049C" +
		"\u0494\x03\x02\x02\x02\u049C\u0496\x03\x02\x02\x02\u049C\u0497\x03\x02" +
		"\x02\x02\u049C\u0498\x03\x02\x02\x02\u049D[\x03\x02\x02\x02\u049E\u049F" +
		"\t\x11\x02\x02\u049F\u04AD\x05\xA6T\x02\u04A0\u04A1\x07\x89\x02\x02\u04A1" +
		"\u04A2\x07!\x02\x02\u04A2\u04AD\x07\x91\x02\x02\u04A3\u04A4\x07\x89\x02" +
		"\x02\u04A4\u04A5\x07!\x02\x02\u04A5\u04AD\x07o\x02\x02\u04A6\u04A7\x07" +
		"\x89\x02\x02\u04A7\u04A8\x07!\x02\x02\u04A8\u04A9\x07\x8C\x02\x02\u04A9" +
		"\u04AA\x07C\x02\x02\u04AA\u04AB\x07C\x02\x02\u04AB\u04AD\x07C\x02\x02" +
		"\u04AC\u049E\x03\x02\x02\x02\u04AC\u04A0\x03\x02\x02\x02\u04AC\u04A3\x03" +
		"\x02\x02\x02\u04AC\u04A6\x03\x02\x02\x02\u04AD]\x03\x02\x02\x02\u04AE" +
		"\u04AF\x07h\x02\x02\u04AF\u04B3\x07\x07\x02\x02\u04B0\u04B2\x05`1\x02" +
		"\u04B1\u04B0\x03\x02\x02\x02\u04B2\u04B5\x03\x02\x02\x02\u04B3\u04B1\x03" +
		"\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04B6\x03\x02\x02\x02\u04B5" +
		"\u04B3\x03\x02\x02\x02\u04B6\u04C6\x07\b\x02\x02\u04B7\u04B8\x07h\x02" +
		"\x02\u04B8\u04B9\x05\xDAn\x02\u04B9\u04C0\x07\x07\x02\x02\u04BA\u04BC" +
		"\x07!\x02\x02\u04BB\u04BA\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02\x02" +
		"\u04BC\u04BD\x03\x02\x02\x02\u04BD\u04BF\x05b2\x02\u04BE\u04BB\x03\x02" +
		"\x02\x02\u04BF\u04C2\x03\x02\x02\x02\u04C0\u04BE\x03\x02\x02\x02\u04C0" +
		"\u04C1\x03\x02\x02\x02\u04C1\u04C3\x03\x02\x02\x02\u04C2\u04C0\x03\x02" +
		"\x02\x02\u04C3\u04C4\x07\b\x02\x02\u04C4\u04C6\x03\x02\x02\x02\u04C5\u04AE" +
		"\x03\x02\x02\x02\u04C5\u04B7\x03\x02\x02\x02\u04C6_\x03\x02\x02\x02\u04C7" +
		"\u04DB\x05L\'\x02\u04C8\u04DB\x05P)\x02\u04C9\u04CA\x05\xDAn\x02\u04CA" +
		"\u04CB\x07!\x02\x02\u04CB\u04CC\x05b2\x02\u04CC\u04DB\x03\x02\x02\x02" +
		"\u04CD\u04CE\x05\xDAn\x02\u04CE\u04D5\x07\x07\x02\x02\u04CF\u04D1\x07" +
		"!\x02\x02\u04D0\u04CF\x03\x02\x02\x02\u04D0\u04D1\x03\x02\x02\x02\u04D1" +
		"\u04D2\x03\x02\x02\x02\u04D2\u04D4\x05b2\x02\u04D3\u04D0\x03\x02\x02\x02" +
		"\u04D4\u04D7\x03\x02\x02\x02\u04D5\u04D3\x03\x02\x02\x02\u04D5\u04D6\x03" +
		"\x02\x02\x02\u04D6\u04D8\x03\x02\x02\x02\u04D7\u04D5\x03\x02\x02\x02\u04D8" +
		"\u04D9\x07\b\x02\x02\u04D9\u04DB\x03\x02\x02\x02\u04DA\u04C7\x03\x02\x02" +
		"\x02\u04DA\u04C8\x03\x02\x02\x02\u04DA\u04C9\x03\x02\x02\x02\u04DA\u04CD" +
		"\x03\x02\x02\x02\u04DBa\x03\x02\x02\x02\u04DC\u04ED\x05\\/\x02\u04DD\u04DE" +
		"\x07\x89\x02\x02\u04DE\u04E2\x07\x07\x02\x02\u04DF\u04E1\x05Z.\x02\u04E0" +
		"\u04DF\x03\x02\x02\x02\u04E1\u04E4\x03\x02\x02\x02\u04E2\u04E0\x03\x02" +
		"\x02\x02\u04E2\u04E3\x03\x02\x02\x02\u04E3\u04E5\x03\x02\x02\x02\u04E4" +
		"\u04E2\x03\x02\x02\x02\u04E5\u04ED\x07\b\x02\x02\u04E6\u04E7\x07\x8D\x02" +
		"\x02\u04E7\u04ED\x05\xA6T\x02\u04E8\u04E9\x07w\x02\x02\u04E9\u04EA\x05" +
		"\xE4s\x02\u04EA\u04EB\x05\xA6T\x02\u04EB\u04ED\x03\x02\x02\x02\u04EC\u04DC" +
		"\x03\x02\x02\x02\u04EC\u04DD\x03\x02\x02\x02\u04EC\u04E6\x03\x02\x02\x02" +
		"\u04EC\u04E8\x03\x02\x02\x02\u04EDc\x03\x02\x02\x02\u04EE\u04EF\x07\x8E" +
		"\x02\x02\u04EF\u04F3\x07\x07\x02\x02\u04F0\u04F2\x05r:\x02\u04F1\u04F0" +
		"\x03\x02\x02\x02\u04F2\u04F5\x03\x02\x02\x02\u04F3\u04F1\x03\x02\x02\x02" +
		"\u04F3\u04F4\x03\x02\x02\x02\u04F4\u04F6\x03\x02\x02\x02\u04F5\u04F3\x03" +
		"\x02\x02\x02\u04F6\u0503\x07\b\x02\x02\u04F7\u04F8\x07\x8E\x02\x02\u04F8" +
		"\u04F9\x05\xDAn\x02\u04F9\u04FD\x07\x07\x02\x02\u04FA\u04FC\x05t;\x02" +
		"\u04FB\u04FA\x03\x02\x02\x02\u04FC\u04FF\x03\x02\x02\x02\u04FD\u04FB\x03" +
		"\x02\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u0500\x03\x02\x02\x02\u04FF" +
		"\u04FD\x03\x02\x02\x02\u0500\u0501\x07\b\x02\x02\u0501\u0503\x03\x02\x02" +
		"\x02\u0502\u04EE\x03\x02\x02\x02\u0502\u04F7\x03\x02\x02\x02\u0503e\x03" +
		"\x02\x02\x02\u0504\u0505\x07\x8F\x02\x02\u0505\u0509\x07\x07\x02\x02\u0506" +
		"\u0508\x05h5\x02\u0507\u0506\x03\x02\x02\x02\u0508\u050B\x03\x02\x02\x02" +
		"\u0509\u0507\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02\u050A\u050C\x03" +
		"\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050C\u0519\x07\b\x02\x02\u050D" +
		"\u050E\x07\x8F\x02\x02\u050E\u050F\x05\xDAn\x02\u050F\u0513\x07\x07\x02" +
		"\x02\u0510\u0512\x05j6\x02\u0511\u0510\x03\x02\x02\x02\u0512\u0515\x03" +
		"\x02\x02\x02\u0513\u0511\x03\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514" +
		"\u0516\x03\x02\x02\x02\u0515\u0513\x03\x02\x02\x02\u0516\u0517\x07\b\x02" +
		"\x02\u0517\u0519\x03\x02\x02\x02\u0518\u0504\x03\x02\x02\x02\u0518\u050D" +
		"\x03\x02\x02\x02\u0519g\x03\x02\x02\x02\u051A\u051B\x05\xCEh\x02\u051B" +
		"\u051C\x07\x13\x02\x02\u051C\u051D\x05p9\x02\u051D\u0538\x03\x02\x02\x02" +
		"\u051E\u051F\x05\xCEh\x02\u051F\u0520\x07\t\x02\x02\u0520\u0521\x05p9" +
		"\x02\u0521\u0538\x03\x02\x02\x02\u0522\u0523\x05\xCEh\x02\u0523\u0524" +
		"\x07\x10\x02\x02\u0524\u0525\x05n8\x02\u0525\u0538\x03\x02\x02\x02\u0526" +
		"\u0527\x05\xDAn\x02\u0527\u0528\x05l7\x02\u0528\u0538\x03\x02\x02\x02" +
		"\u0529\u052A\x05\xDAn\x02\u052A\u052B\x07\x10\x02\x02\u052B\u052C\x05" +
		"n8\x02\u052C\u0538\x03\x02\x02\x02\u052D\u052E\x05\xDAn\x02\u052E\u0532" +
		"\x07\x07\x02\x02\u052F\u0531\x05j6\x02\u0530\u052F\x03\x02\x02\x02\u0531" +
		"\u0534\x03\x02\x02\x02\u0532\u0530\x03\x02\x02\x02\u0532\u0533\x03\x02" +
		"\x02\x02\u0533\u0535\x03\x02\x02\x02\u0534\u0532\x03\x02\x02\x02\u0535" +
		"\u0536\x07\b\x02\x02\u0536\u0538\x03\x02\x02\x02\u0537\u051A\x03\x02\x02" +
		"\x02\u0537\u051E\x03\x02\x02\x02\u0537\u0522\x03\x02\x02\x02\u0537\u0526" +
		"\x03\x02\x02\x02\u0537\u0529\x03\x02\x02\x02\u0537\u052D\x03\x02\x02\x02" +
		"\u0538i\x03\x02\x02\x02\u0539\u053C\x05l7\x02\u053A\u053C\x05n8\x02\u053B" +
		"\u0539\x03\x02\x02\x02\u053B\u053A\x03\x02\x02\x02\u053Ck\x03\x02\x02" +
		"\x02\u053D\u053E\t\x12\x02\x02\u053E\u053F\x05p9\x02\u053Fm\x03\x02\x02" +
		"\x02\u0540\u0541\x05\u010C\x87\x02\u0541\u0542\x07\t\x02\x02\u0542\u0544" +
		"\x05p9\x02\u0543\u0545\x07\x0E\x02\x02\u0544\u0543\x03\x02\x02\x02\u0544" +
		"\u0545\x03\x02\x02\x02\u0545\u0547\x03\x02\x02\x02\u0546\u0548\x07C\x02" +
		"\x02\u0547\u0546\x03\x02\x02\x02\u0547\u0548\x03\x02\x02\x02\u0548o\x03" +
		"\x02\x02\x02\u0549\u054A\x07\x92\x02\x02\u054A\u054B\x05\xF0y\x02\u054B" +
		"\u054D\x05\xCEh\x02\u054C\u054E\t\x13\x02\x02\u054D\u054C\x03\x02\x02" +
		"\x02\u054D\u054E\x03\x02\x02\x02\u054E\u056A\x03\x02\x02\x02\u054F\u0550" +
		"\x07\x92\x02\x02\u0550\u0551\x05\xF0y\x02\u0551\u0552\x05\xCEh\x02\u0552" +
		"\u0553\x05\xECw\x02\u0553\u056A\x03\x02\x02\x02\u0554\u0556\x07\x8F\x02" +
		"\x02\u0555\u0554\x03\x02\x02\x02\u0555\u0556\x03\x02\x02\x02\u0556\u0557" +
		"\x03\x02\x02\x02\u0557\u056A\x05\xF0y\x02\u0558\u055A\x07\x93\x02\x02" +
		"\u0559\u0558\x03\x02\x02\x02\u0559\u055A\x03\x02\x02\x02\u055A\u055B\x03" +
		"\x02\x02\x02\u055B\u056A\x05\xDAn\x02\u055C\u055E\x07\x94\x02\x02\u055D" +
		"\u055C\x03\x02\x02\x02\u055D\u055E\x03\x02\x02\x02\u055E\u055F\x03\x02" +
		"\x02\x02\u055F\u0561\x05\xCEh\x02\u0560\u0562\t\x13\x02\x02\u0561\u0560" +
		"\x03\x02\x02\x02\u0561\u0562\x03\x02\x02\x02\u0562\u056A\x03\x02\x02\x02" +
		"\u0563\u0565\x07\x94\x02\x02\u0564\u0563\x03\x02\x02\x02\u0564\u0565\x03" +
		"\x02\x02\x02\u0565\u0566\x03\x02\x02\x02\u0566\u0567\x05\xCEh\x02\u0567" +
		"\u0568\x05\xECw\x02\u0568\u056A\x03\x02\x02\x02\u0569\u0549\x03\x02\x02" +
		"\x02\u0569\u054F\x03\x02\x02\x02\u0569\u0555\x03\x02\x02\x02\u0569\u0559" +
		"\x03\x02\x02\x02\u0569\u055D\x03\x02\x02\x02\u0569\u0564\x03\x02\x02\x02" +
		"\u056Aq\x03\x02\x02\x02\u056B\u056C\x05\xDAn\x02\u056C\u056D\x05x=\x02" +
		"\u056D\u0582\x03\x02\x02\x02\u056E\u056F\x05\xDAn\x02\u056F\u0570\x07" +
		"\x10\x02\x02\u0570\u0571\x05v<\x02\u0571\u0582\x03\x02\x02\x02\u0572\u0573" +
		"\x05\xCEh\x02\u0573\u0574\x07\x10\x02\x02\u0574\u0575\x05v<\x02\u0575" +
		"\u0582\x03\x02\x02\x02\u0576\u0582\x05h5\x02\u0577\u0578\x05\xDAn\x02" +
		"\u0578\u057C\x07\x07\x02\x02\u0579\u057B\x05t;\x02\u057A\u0579\x03\x02" +
		"\x02\x02\u057B\u057E\x03\x02\x02\x02\u057C\u057A\x03\x02\x02\x02\u057C" +
		"\u057D\x03\x02\x02\x02\u057D\u057F\x03\x02\x02\x02\u057E\u057C\x03\x02" +
		"\x02\x02\u057F\u0580\x07\b\x02\x02\u0580\u0582\x03\x02\x02\x02\u0581\u056B" +
		"\x03\x02\x02\x02\u0581\u056E\x03\x02\x02\x02\u0581\u0572\x03\x02\x02\x02" +
		"\u0581\u0576\x03\x02\x02\x02\u0581\u0577\x03\x02\x02\x02\u0582s\x03\x02" +
		"\x02\x02\u0583\u0587\x05x=\x02\u0584\u0587\x05v<\x02\u0585\u0587\x05j" +
		"6\x02\u0586\u0583\x03\x02\x02\x02\u0586\u0584\x03\x02\x02\x02\u0586\u0585" +
		"\x03\x02\x02\x02\u0587u\x03\x02\x02\x02\u0588\u0589\x05\u010C\x87\x02" +
		"\u0589\u058A\x07\t\x02\x02\u058A\u058C\x05\xECw\x02\u058B\u058D\x07C\x02" +
		"\x02\u058C\u058B\x03\x02\x02\x02\u058C\u058D\x03\x02\x02\x02\u058D\u05A3" +
		"\x03\x02\x02\x02\u058E\u058F\x05\u010C\x87\x02\u058F\u0590\x07\t\x02\x02" +
		"\u0590\u0591\x05\xDAn\x02\u0591\u0592\x07\x10\x02\x02\u0592\u0594\x05" +
		"\u010C\x87\x02\u0593\u0595\x05\xF2z\x02\u0594\u0593\x03\x02\x02\x02\u0594" +
		"\u0595\x03\x02\x02\x02\u0595\u05A3\x03\x02\x02\x02\u0596\u0597\x05\u010C" +
		"\x87\x02\u0597\u0598\x07\t\x02\x02\u0598\u0599\x05\xCEh\x02\u0599\u059A" +
		"\x07\x10\x02\x02\u059A\u059C\x05\u010C\x87\x02\u059B\u059D\x05\xF2z\x02" +
		"\u059C\u059B\x03\x02\x02\x02\u059C\u059D\x03\x02\x02\x02\u059D\u05A3\x03" +
		"\x02\x02\x02\u059E\u059F\x05\u010C\x87\x02\u059F\u05A0\x07\x13\x02\x02" +
		"\u05A0\u05A1\x05\xF2z\x02\u05A1\u05A3\x03\x02";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\u05A2\u0588\x03\x02\x02\x02\u05A2\u058E\x03\x02\x02\x02\u05A2" +
		"\u0596\x03\x02\x02\x02\u05A2\u059E\x03\x02\x02\x02\u05A3w\x03\x02\x02" +
		"\x02\u05A4\u05A5\t\x12\x02\x02\u05A5\u05A7\x05\xECw\x02\u05A6\u05A8\x07" +
		"C\x02\x02\u05A7\u05A6\x03\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8" +
		"\u05AF\x03\x02\x02\x02\u05A9\u05AA\t\x14\x02\x02\u05AA\u05AC\x05\u010E" +
		"\x88\x02\u05AB\u05AD\x07C\x02\x02\u05AC\u05AB\x03\x02\x02\x02\u05AC\u05AD" +
		"\x03\x02\x02\x02\u05AD\u05AF\x03\x02\x02\x02\u05AE\u05A4\x03\x02\x02\x02" +
		"\u05AE\u05A9\x03\x02\x02\x02\u05AFy\x03\x02\x02\x02\u05B0\u05B1\x07\x9B" +
		"\x02\x02\u05B1\u05B5\x07\x07\x02\x02\u05B2\u05B4\x05|?\x02\u05B3\u05B2" +
		"\x03\x02\x02\x02\u05B4\u05B7\x03\x02\x02\x02\u05B5\u05B3\x03\x02\x02\x02" +
		"\u05B5\u05B6\x03\x02\x02\x02\u05B6\u05B8\x03\x02\x02\x02\u05B7\u05B5\x03" +
		"\x02\x02\x02\u05B8\u05C5\x07\b\x02\x02\u05B9\u05BA\x07\x9B\x02\x02\u05BA" +
		"\u05BB\x05\xDAn\x02\u05BB\u05BF\x07\x07\x02\x02\u05BC\u05BE\x05~@\x02" +
		"\u05BD\u05BC\x03\x02\x02\x02\u05BE\u05C1\x03\x02\x02\x02\u05BF\u05BD\x03" +
		"\x02\x02\x02\u05BF\u05C0\x03\x02\x02\x02\u05C0\u05C2\x03\x02\x02\x02\u05C1" +
		"\u05BF\x03\x02\x02\x02\u05C2\u05C3\x07\b\x02\x02\u05C3\u05C5\x03\x02\x02" +
		"\x02\u05C4\u05B0\x03\x02\x02\x02\u05C4\u05B9\x03\x02\x02\x02\u05C5{\x03" +
		"\x02\x02\x02\u05C6\u05C7\x05\xDAn\x02\u05C7\u05C8\x07\x10\x02\x02\u05C8" +
		"\u05C9\x05~@\x02\u05C9\u05D5\x03\x02\x02\x02\u05CA\u05CB\x05\xDAn\x02" +
		"\u05CB\u05CF\x07\x07\x02\x02\u05CC\u05CE\x05~@\x02\u05CD\u05CC\x03\x02" +
		"\x02\x02\u05CE\u05D1\x03\x02\x02\x02\u05CF\u05CD\x03\x02\x02\x02\u05CF" +
		"\u05D0\x03\x02\x02\x02\u05D0\u05D2\x03\x02\x02\x02\u05D1\u05CF\x03\x02" +
		"\x02\x02\u05D2\u05D3\x07\b\x02\x02\u05D3\u05D5\x03\x02\x02\x02\u05D4\u05C6" +
		"\x03\x02\x02\x02\u05D4\u05CA\x03\x02\x02\x02\u05D5}\x03\x02\x02\x02\u05D6" +
		"\u05D8\x05\xFE\x80\x02\u05D7\u05D9\x07Z\x02\x02\u05D8\u05D7\x03\x02\x02" +
		"\x02\u05D8\u05D9\x03\x02\x02\x02\u05D9\u05DE\x03\x02\x02\x02\u05DA\u05DC" +
		"\x07\x0E\x02\x02\u05DB\u05DA\x03\x02\x02\x02\u05DB\u05DC\x03\x02\x02\x02" +
		"\u05DC\u05DD\x03\x02\x02\x02\u05DD\u05DF\x07C\x02\x02\u05DE\u05DB\x03" +
		"\x02\x02\x02\u05DE\u05DF\x03\x02\x02\x02\u05DF\u0603\x03\x02\x02\x02\u05E0" +
		"\u05E1\x05\xFE\x80\x02\u05E1\u05E6\x07\x9C\x02\x02\u05E2\u05E4\x07\x0E" +
		"\x02\x02\u05E3\u05E2\x03\x02\x02\x02\u05E3\u05E4\x03\x02\x02\x02\u05E4" +
		"\u05E5\x03\x02\x02\x02\u05E5\u05E7\x07C\x02\x02\u05E6\u05E3\x03\x02\x02" +
		"\x02\u05E6\u05E7\x03\x02\x02\x02\u05E7\u0603\x03\x02\x02\x02\u05E8\u05E9" +
		"\x05\xFE\x80\x02\u05E9\u05EA\x07\x9C\x02\x02\u05EA\u05EB\x07\t\x02\x02" +
		"\u05EB\u05EC\x07C\x02\x02\u05EC\u0603\x03\x02\x02\x02\u05ED\u05EE\x05" +
		"\xFE\x80\x02\u05EE\u05EF\x07\x13\x02\x02\u05EF\u05F0\x07B\x02\x02\u05F0" +
		"\u05F1\x05\u0102\x82\x02\u05F1\u05F2\x07\n\x02\x02\u05F2\u05F3\t\x15\x02" +
		"\x02\u05F3\u05F4\x07C\x02\x02\u05F4\u05F5\x07\v\x02\x02\u05F5\u0603\x03" +
		"\x02\x02\x02\u05F6\u05F7\x05\xFE\x80\x02\u05F7\u05F8\x07\x14\x02\x02\u05F8" +
		"\u05F9\x07B\x02\x02\u05F9\u0603\x03\x02\x02\x02\u05FA\u05FB\x05\xFE\x80" +
		"\x02\u05FB\u0600\x07B\x02\x02\u05FC\u05FE\x07\x0E\x02\x02\u05FD\u05FC" +
		"\x03\x02\x02\x02\u05FD\u05FE\x03\x02\x02\x02\u05FE\u05FF\x03\x02\x02\x02" +
		"\u05FF\u0601\x07C\x02\x02\u0600\u05FD\x03\x02\x02\x02\u0600\u0601\x03" +
		"\x02\x02\x02\u0601\u0603\x03\x02\x02\x02\u0602\u05D6\x03\x02\x02\x02\u0602" +
		"\u05E0\x03\x02\x02\x02\u0602\u05E8\x03\x02\x02\x02\u0602\u05ED\x03\x02" +
		"\x02\x02\u0602\u05F6\x03\x02\x02\x02\u0602\u05FA\x03\x02\x02\x02\u0603" +
		"\x7F\x03\x02\x02\x02\u0604\u0605\x07_\x02\x02\u0605\u0606\x07\n\x02\x02" +
		"\u0606\u0607\x07u\x02\x02\u0607\u0608\x07\v\x02\x02\u0608\u060F\x05\x82" +
		"B\x02\u0609\u060B\x07\x05\x02\x02\u060A\u0609\x03\x02\x02\x02\u060A\u060B" +
		"\x03\x02\x02\x02\u060B\u060C\x03\x02\x02\x02\u060C\u060E\x05\x82B\x02" +
		"\u060D\u060A\x03\x02\x02\x02\u060E\u0611\x03\x02\x02\x02\u060F\u060D\x03" +
		"\x02\x02\x02\u060F\u0610\x03\x02\x02\x02\u0610\u065C\x03\x02\x02\x02\u0611" +
		"\u060F\x03\x02\x02\x02\u0612\u0613\x07_\x02\x02\u0613\u0614\x07\n\x02" +
		"\x02\u0614\u0615\x05\xEEx\x02\u0615\u0616\x07\v\x02\x02\u0616\u0618\x05" +
		"\xCEh\x02\u0617\u0619\x05\xA4S\x02\u0618\u0617\x03\x02\x02\x02\u0618\u0619" +
		"\x03\x02\x02\x02\u0619\u0625\x03\x02\x02\x02\u061A\u0621\x07\x07\x02\x02" +
		"\u061B\u061D\x07!\x02\x02\u061C\u061B\x03\x02\x02\x02\u061C\u061D\x03" +
		"\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E\u0620\x05\x84C\x02\u061F" +
		"\u061C\x03\x02\x02\x02\u0620\u0623\x03\x02\x02\x02\u0621\u061F\x03\x02" +
		"\x02\x02\u0621\u0622\x03\x02\x02\x02\u0622\u0624\x03\x02\x02\x02\u0623" +
		"\u0621\x03\x02\x02\x02\u0624\u0626\x07\b\x02\x02\u0625\u061A\x03\x02\x02" +
		"\x02\u0625\u0626\x03\x02\x02\x02\u0626\u065C\x03\x02\x02\x02\u0627\u0628" +
		"\x07_\x02\x02\u0628\u0629\x07\n\x02\x02\u0629\u062A\x05\xEEx\x02\u062A" +
		"\u062C\x07\v\x02\x02\u062B\u062D\x05\xCEh\x02\u062C\u062B\x03\x02\x02" +
		"\x02\u062C\u062D\x03\x02\x02\x02\u062D\u062E\x03\x02\x02\x02\u062E\u0630" +
		"\x05\u0102\x82\x02\u062F\u0631\x05\xA4S\x02\u0630\u062F\x03\x02\x02\x02" +
		"\u0630\u0631\x03\x02\x02\x02\u0631\u0632\x03\x02\x02\x02\u0632\u0639\x07" +
		"\x07\x02\x02\u0633\u0635\x07!\x02\x02\u0634\u0633\x03\x02\x02\x02\u0634" +
		"\u0635\x03\x02\x02\x02\u0635\u0636\x03\x02\x02\x02\u0636\u0638\x05\x84" +
		"C\x02\u0637\u0634\x03\x02\x02\x02\u0638\u063B\x03\x02\x02\x02\u0639\u0637" +
		"\x03\x02\x02\x02\u0639\u063A\x03\x02\x02\x02\u063A\u0640\x03\x02\x02\x02" +
		"\u063B\u0639\x03\x02\x02\x02\u063C\u063D\x07!\x02\x02\u063D\u063F\x05" +
		"\x8CG\x02\u063E\u063C\x03\x02\x02\x02\u063F\u0642\x03\x02\x02\x02\u0640" +
		"\u063E\x03\x02\x02\x02\u0640\u0641\x03\x02\x02\x02\u0641\u0644\x03\x02" +
		"\x02\x02\u0642\u0640\x03\x02\x02\x02\u0643\u0645\x07\b\x02\x02\u0644\u0643" +
		"\x03\x02\x02\x02\u0644\u0645\x03\x02\x02\x02\u0645\u065C\x03\x02\x02\x02" +
		"\u0646\u0647\x07_\x02\x02\u0647\u064B\x07\x07\x02\x02\u0648\u064A\x05" +
		"\x8EH\x02\u0649\u0648\x03\x02\x02\x02\u064A\u064D\x03\x02\x02\x02\u064B" +
		"\u0649\x03\x02\x02\x02\u064B\u064C\x03\x02\x02\x02\u064C\u064E\x03\x02" +
		"\x02\x02\u064D\u064B\x03\x02\x02\x02\u064E\u065C\x07\b\x02\x02\u064F\u0650" +
		"\x07_\x02\x02\u0650\u0651\x05\xDAn\x02\u0651\u0656\x07\x07\x02\x02\u0652" +
		"\u0653\x07!\x02\x02\u0653\u0655\x05\x8CG\x02\u0654\u0652\x03\x02\x02\x02" +
		"\u0655\u0658\x03\x02\x02\x02\u0656\u0654\x03\x02\x02\x02\u0656\u0657\x03" +
		"\x02\x02\x02\u0657\u0659\x03\x02\x02\x02\u0658\u0656\x03\x02\x02\x02\u0659" +
		"\u065A\x07\b\x02\x02\u065A\u065C\x03\x02\x02\x02\u065B\u0604\x03\x02\x02" +
		"\x02\u065B\u0612\x03\x02\x02\x02\u065B\u0627\x03\x02\x02\x02\u065B\u0646" +
		"\x03\x02\x02\x02\u065B\u064F\x03\x02\x02\x02\u065C\x81\x03\x02\x02\x02" +
		"\u065D\u065F\x07#\x02\x02\u065E\u065D\x03\x02\x02\x02\u065E\u065F\x03" +
		"\x02\x02\x02\u065F\u0660\x03\x02\x02\x02\u0660\u0661\x05\u0102\x82\x02" +
		"\u0661\x83\x03\x02\x02\x02\u0662\u0663\x07\x98\x02\x02\u0663\u0664\x07" +
		"\t\x02\x02\u0664\u0669\x05\u0102\x82\x02\u0665\u0666\x07\x05\x02\x02\u0666" +
		"\u0668\x05\u0102\x82\x02\u0667\u0665\x03\x02\x02\x02\u0668\u066B\x03\x02" +
		"\x02\x02\u0669\u0667\x03\x02\x02\x02\u0669\u066A\x03\x02\x02\x02\u066A" +
		"\x85\x03\x02\x02\x02\u066B\u0669\x03\x02\x02\x02\u066C\u066D\x07\x98\x02" +
		"\x02\u066D\u066E\t\x16\x02\x02\u066E\u0675\x05\u0102\x82\x02\u066F\u0670" +
		"\x07\x98\x02\x02\u0670\u0671\t\x17\x02\x02\u0671\u0675\x05\u0102\x82\x02" +
		"\u0672\u0673\x07\x98\x02\x02\u0673\u0675\x07j\x02\x02\u0674\u066C\x03" +
		"\x02\x02\x02\u0674\u066F\x03\x02\x02\x02\u0674\u0672\x03\x02\x02\x02\u0675" +
		"\x87\x03\x02\x02\x02\u0676\u0677\x07\x97\x02\x02\u0677\u0678\t\x14\x02" +
		"\x02\u0678\u0696\x05\u0102\x82\x02\u0679\u067A\x07\x97\x02\x02\u067A\u067B" +
		"\t\x12\x02\x02\u067B\u067D\x05\u0102\x82\x02\u067C\u067E\x07C\x02\x02" +
		"\u067D\u067C\x03\x02\x02\x02\u067D\u067E\x03\x02\x02\x02\u067E\u0680\x03" +
		"\x02\x02\x02\u067F\u0681\x07C\x02\x02\u0680\u067F\x03\x02\x02\x02\u0680" +
		"\u0681\x03\x02\x02\x02\u0681\u0683\x03\x02\x02\x02\u0682\u0684\x05\xCA" +
		"f\x02\u0683\u0682\x03\x02\x02\x02\u0683\u0684\x03\x02\x02\x02\u0684\u0696" +
		"\x03\x02\x02\x02\u0685\u0686\x07\x97\x02\x02\u0686\u0687\t\x12\x02\x02" +
		"\u0687\u068B\x05\u0102\x82\x02\u0688\u0689\x07\n\x02\x02\u0689\u068A\x07" +
		"C\x02\x02\u068A\u068C\x07\v\x02\x02\u068B\u0688\x03\x02\x02\x02\u068B" +
		"\u068C\x03\x02\x02\x02\u068C\u068E\x03\x02\x02\x02\u068D\u068F\x07C\x02" +
		"\x02\u068E\u068D\x03\x02\x02\x02\u068E\u068F\x03\x02\x02\x02\u068F\u0691" +
		"\x03\x02\x02\x02\u0690\u0692\x05\xCAf\x02\u0691\u0690\x03\x02\x02\x02" +
		"\u0691\u0692\x03\x02\x02\x02\u0692\u0696\x03\x02\x02\x02\u0693\u0694\x07" +
		"\x97\x02\x02\u0694\u0696\x07\x91\x02\x02\u0695\u0676\x03\x02\x02\x02\u0695" +
		"\u0679\x03\x02\x02\x02\u0695\u0685\x03\x02\x02\x02\u0695\u0693\x03\x02" +
		"\x02\x02\u0696\x89\x03\x02\x02\x02\u0697\u0698\x07\x99\x02\x02\u0698\u06AE" +
		"\x05\xDAn\x02\u0699\u069A\x07\x99\x02\x02\u069A\u06AE\x05\xCEh\x02\u069B" +
		"\u069C\x07\x99\x02\x02\u069C\u06AE\x05\xD2j\x02\u069D\u069E\x07\x99\x02" +
		"\x02\u069E\u069F\x05\xCEh\x02\u069F\u06A0\x05\xD0i\x02\u06A0\u06AE\x03" +
		"\x02\x02\x02\u06A1\u06A2\x07\x99\x02\x02\u06A2\u06A3\x05\xCEh\x02\u06A3" +
		"\u06A4\x07S\x02\x02\u06A4\u06A5\x05\xCEh\x02\u06A5\u06AE\x03\x02\x02\x02" +
		"\u06A6\u06A7\x07\x99\x02\x02\u06A7\u06A8\x05\xCEh\x02\u06A8\u06A9\x07" +
		"S\x02\x02\u06A9\u06AB\x05\xDAn\x02\u06AA\u06AC\t\x05\x02\x02\u06AB\u06AA" +
		"\x03\x02\x02\x02\u06AB\u06AC\x03\x02\x02\x02\u06AC\u06AE\x03\x02\x02\x02" +
		"\u06AD\u0697\x03\x02\x02\x02\u06AD\u0699\x03\x02\x02\x02\u06AD\u069B\x03" +
		"\x02\x02\x02\u06AD\u069D\x03\x02\x02\x02\u06AD\u06A1\x03\x02\x02\x02\u06AD" +
		"\u06A6\x03\x02\x02\x02\u06AE\x8B\x03\x02\x02\x02\u06AF\u06EF\x05x=\x02" +
		"\u06B0\u06EF\x07\x93\x02\x02\u06B1\u06EF\x05\x86D\x02\u06B2\u06EF\x05" +
		"\x88E\x02\u06B3\u06EF\x05\x8AF\x02\u06B4\u06B5\x07\x89\x02\x02\u06B5\u06B9" +
		"\x07\x07\x02\x02\u06B6\u06B8\x05Z.\x02\u06B7\u06B6\x03\x02\x02\x02\u06B8" +
		"\u06BB\x03\x02\x02\x02\u06B9\u06B7\x03\x02\x02\x02\u06B9\u06BA\x03\x02" +
		"\x02\x02\u06BA\u06BC\x03\x02\x02\x02\u06BB\u06B9\x03\x02\x02\x02\u06BC" +
		"\u06EF\x07\b\x02\x02\u06BD\u06BE\x07h\x02\x02\u06BE\u06C2\x07\x07\x02" +
		"\x02\u06BF\u06C1\x05b2\x02\u06C0\u06BF\x03\x02\x02\x02\u06C1\u06C4\x03" +
		"\x02\x02\x02\u06C2\u06C0\x03\x02\x02\x02\u06C2\u06C3\x03\x02\x02\x02\u06C3" +
		"\u06C5\x03\x02\x02\x02\u06C4\u06C2\x03\x02\x02\x02\u06C5\u06EF\x07\b\x02" +
		"\x02\u06C6\u06EF\x05b2\x02\u06C7\u06C8\x07\x8E\x02\x02\u06C8\u06C9\x07" +
		"\x10\x02\x02\u06C9\u06EF\x05v<\x02\u06CA\u06CB\t\x18\x02\x02\u06CB\u06EF" +
		"\x05l7\x02\u06CC\u06CD\t\x18\x02\x02\u06CD\u06CE\x07\x10\x02\x02\u06CE" +
		"\u06EF\x05n8\x02\u06CF\u06D0\x07\x8E\x02\x02\u06D0\u06D4\x07\x07\x02\x02" +
		"\u06D1\u06D3\x05t;\x02\u06D2\u06D1\x03\x02\x02\x02\u06D3\u06D6\x03\x02" +
		"\x02\x02\u06D4\u06D2\x03\x02\x02\x02\u06D4\u06D5\x03\x02\x02\x02\u06D5" +
		"\u06D7\x03\x02\x02\x02\u06D6\u06D4\x03\x02\x02\x02\u06D7\u06EF\x07\b\x02" +
		"\x02\u06D8\u06D9\x07\x8F\x02\x02\u06D9\u06DD\x07\x07\x02\x02\u06DA\u06DC" +
		"\x05j6\x02\u06DB\u06DA\x03\x02\x02\x02\u06DC\u06DF\x03\x02\x02\x02\u06DD" +
		"\u06DB\x03\x02\x02\x02\u06DD\u06DE\x03\x02\x02\x02\u06DE\u06E0\x03\x02" +
		"\x02\x02\u06DF\u06DD\x03\x02\x02\x02\u06E0\u06EF\x07\b\x02\x02\u06E1\u06E2" +
		"\x07\x9B\x02\x02\u06E2\u06E3\x07\x10\x02\x02\u06E3\u06EF\x05~@\x02\u06E4" +
		"\u06E5\x07\x9B\x02\x02\u06E5\u06E9\x07\x07\x02\x02\u06E6\u06E8\x05~@\x02" +
		"\u06E7\u06E6\x03\x02\x02\x02\u06E8\u06EB\x03\x02\x02\x02\u06E9\u06E7\x03" +
		"\x02\x02\x02\u06E9\u06EA\x03\x02\x02\x02\u06EA\u06EC\x03\x02\x02\x02\u06EB" +
		"\u06E9\x03\x02\x02\x02\u06EC\u06EF\x07\b\x02\x02\u06ED\u06EF\x05,\x17" +
		"\x02\u06EE\u06AF\x03\x02\x02\x02\u06EE\u06B0\x03\x02\x02\x02\u06EE\u06B1" +
		"\x03\x02\x02\x02\u06EE\u06B2\x03\x02\x02\x02\u06EE\u06B3\x03\x02\x02\x02" +
		"\u06EE\u06B4\x03\x02\x02\x02\u06EE\u06BD\x03\x02\x02\x02\u06EE\u06C6\x03" +
		"\x02\x02\x02\u06EE\u06C7\x03\x02\x02\x02\u06EE\u06CA\x03\x02\x02\x02\u06EE" +
		"\u06CC\x03\x02\x02\x02\u06EE\u06CF\x03\x02\x02\x02\u06EE\u06D8\x03\x02" +
		"\x02\x02\u06EE\u06E1\x03\x02\x02\x02\u06EE\u06E4\x03\x02\x02\x02\u06EE" +
		"\u06ED\x03\x02\x02\x02\u06EF\x8D\x03\x02\x02\x02\u06F0\u06FD\x05\x90I" +
		"\x02\u06F1\u06F2\x05\xDAn\x02\u06F2\u06F7\x07\x07\x02\x02\u06F3\u06F4" +
		"\x07!\x02\x02\u06F4\u06F6\x05\x8CG\x02\u06F5\u06F3\x03\x02\x02\x02\u06F6" +
		"\u06F9\x03\x02\x02\x02\u06F7\u06F5\x03\x02\x02\x02\u06F7\u06F8\x03\x02" +
		"\x02\x02\u06F8\u06FA\x03\x02\x02\x02\u06F9\u06F7\x03\x02\x02\x02\u06FA" +
		"\u06FB\x07\b\x02\x02\u06FB\u06FD\x03\x02\x02\x02\u06FC\u06F0\x03\x02\x02" +
		"\x02\u06FC\u06F1\x03\x02\x02\x02\u06FD\x8F\x03\x02\x02\x02\u06FE\u06FF" +
		"\x05\xDAn\x02\u06FF\u0700\x07!\x02\x02\u0700\u0701\x05\x8CG\x02\u0701" +
		"\x91\x03\x02\x02\x02\u0702\u0703\x07b\x02\x02\u0703\u0707\x07\x07\x02" +
		"\x02\u0704\u0706\x05\x94K\x02\u0705\u0704\x03\x02\x02\x02\u0706\u0709" +
		"\x03\x02\x02\x02\u0707\u0705\x03\x02\x02\x02\u0707\u0708\x03\x02\x02\x02" +
		"\u0708\u070A\x03\x02\x02\x02\u0709\u0707\x03\x02\x02\x02\u070A\u070B\x07" +
		"\b\x02\x02\u070B\x93\x03\x02\x02\x02\u070C\u070D\x05\xCEh\x02\u070D\u070F" +
		"\x05\xD6l\x02\u070E\u0710\t\x19\x02\x02\u070F\u070E\x03\x02\x02\x02\u070F" +
		"\u0710\x03\x02\x02\x02\u0710\u072F\x03\x02\x02\x02\u0711\u0712\x05\xCE" +
		"h\x02\u0712\u0713\x05\xCEh\x02\u0713\u0715\x05\xD6l\x02\u0714\u0716\t" +
		"\x1A\x02\x02\u0715\u0714\x03\x02\x02\x02\u0715\u0716\x03\x02\x02\x02\u0716" +
		"\u072F\x03\x02\x02\x02\u0717\u0718\x05\xCEh\x02\u0718\u0719\x05\xCEh\x02" +
		"\u0719\u071A\x05\xD6l\x02\u071A\u071B\x07\x9F\x02\x02\u071B\u071C\x05" +
		"\u0110\x89\x02\u071C\u072F\x03\x02\x02\x02\u071D\u071E\x05\xCEh\x02\u071E" +
		"\u071F\x05\xCEh\x02\u071F\u0721\x05\xCEh\x02\u0720\u0722\t\x1B\x02\x02" +
		"\u0721\u0720\x03\x02\x02\x02\u0721\u0722\x03\x02\x02\x02\u0722\u0724\x03" +
		"\x02\x02\x02\u0723\u0725\t\x1C\x02\x02\u0724\u0723\x03\x02\x02\x02\u0724" +
		"\u0725\x03\x02\x02\x02\u0725\u072F\x03\x02\x02\x02\u0726\u0727\x05\xCE" +
		"h\x02\u0727\u0728\x05\xCEh\x02\u0728\u0729\x05\xCEh\x02\u0729\u072A\x07" +
		"\xA5\x02\x02\u072A\u072C\x05\u0110\x89\x02\u072B\u072D\t\x1C\x02\x02\u072C" +
		"\u072B\x03\x02\x02\x02\u072C\u072D\x03\x02\x02\x02\u072D\u072F\x03\x02" +
		"\x02\x02\u072E\u070C\x03\x02\x02\x02\u072E\u0711\x03\x02\x02\x02\u072E" +
		"\u0717\x03\x02\x02\x02\u072E\u071D\x03\x02\x02\x02\u072E\u0726\x03\x02" +
		"\x02\x02\u072F\x95\x03\x02\x02\x02\u0730\u0731\x07\xA6\x02\x02\u0731\u0732" +
		"\x05\xE2r\x02\u0732\u0733\x05\xA4S\x02\u0733\u0739\x03\x02\x02\x02\u0734" +
		"\u0735\x07\xA6\x02\x02\u0735\u0736\x058\x1D\x02\u0736\u0737\x05\xA4S\x02" +
		"\u0737\u0739\x03\x02\x02\x02\u0738\u0730\x03\x02\x02\x02\u0738\u0734\x03" +
		"\x02\x02\x02\u0739\x97\x03\x02\x02\x02\u073A\u073B\x058\x1D\x02\u073B" +
		"\u073C\x07\t\x02\x02\u073C\u073D\x05\x9AN\x02\u073D\x99\x03\x02\x02\x02" +
		"\u073E\u073F\bN\x01\x02\u073F\u0743\x07\x07\x02\x02\u0740\u0742\x052\x1A" +
		"\x02\u0741\u0740\x03\x02\x02\x02\u0742\u0745\x03\x02\x02\x02\u0743\u0741" +
		"\x03\x02\x02\x02\u0743\u0744\x03\x02\x02\x02\u0744\u0746\x03\x02\x02\x02" +
		"\u0745\u0743\x03\x02\x02\x02\u0746\u0752\x07\b\x02\x02\u0747\u0752\x05" +
		"8\x1D\x02\u0748\u0752\x05(\x15\x02\u0749\u0752\x07>\x02\x02\u074A\u0752" +
		"\x07?\x02\x02\u074B\u074C\x07$\x02\x02\u074C\u0752\x05\x9AN\b\u074D\u074E" +
		"\x07\n\x02\x02\u074E\u074F\x05\x9AN\x02\u074F\u0750\x07\v\x02\x02\u0750" +
		"\u0752\x03\x02\x02\x02\u0751\u073E\x03\x02\x02\x02\u0751\u0747\x03\x02" +
		"\x02\x02\u0751\u0748\x03\x02\x02\x02\u0751\u0749\x03\x02\x02\x02\u0751" +
		"\u074A\x03\x02\x02\x02\u0751\u074B\x03\x02\x02\x02\u0751\u074D\x03\x02" +
		"\x02\x02\u0752\u0761\x03\x02\x02\x02\u0753\u0754\f\x07\x02\x02\u0754\u0755" +
		"\x07%\x02\x02\u0755\u0760\x05\x9AN\b\u0756\u0757\f\x06\x02\x02\u0757\u0758" +
		"\x07&\x02\x02\u0758\u0760\x05\x9AN\x07\u0759\u075A\f\x05\x02\x02\u075A" +
		"\u075B\x07\'\x02\x02\u075B\u0760\x05\x9AN\x06\u075C\u075D\f\x04\x02\x02" +
		"\u075D\u075E\x07(\x02\x02\u075E\u0760\x05\x9AN\x05\u075F\u0753\x03\x02" +
		"\x02\x02\u075F\u0756\x03\x02\x02\x02\u075F\u0759\x03\x02\x02\x02\u075F" +
		"\u075C\x03\x02\x02\x02\u0760\u0763\x03\x02\x02\x02\u0761\u075F\x03\x02" +
		"\x02\x02\u0761\u0762\x03\x02\x02\x02\u0762\x9B\x03\x02\x02\x02\u0763\u0761" +
		"\x03\x02\x02\x02\u0764\u0765\x07X\x02\x02\u0765\u0766\x05\x9AN\x02\u0766" +
		"\u0768\x050\x19\x02\u0767\u0769\x05\x9EP\x02\u0768\u0767\x03\x02\x02\x02" +
		"\u0768\u0769\x03\x02\x02\x02\u0769\x9D\x03\x02\x02\x02\u076A\u076B\x07" +
		"\xA8\x02\x02\u076B\u076F\x050\x19\x02\u076C\u076D\x07\xA8\x02\x02\u076D" +
		"\u076F\x05\x9CO\x02\u076E\u076A\x03\x02\x02\x02\u076E\u076C\x03\x02\x02" +
		"\x02\u076F\x9F\x03\x02\x02\x02\u0770\u0771\x07\xA7\x02\x02\u0771\u0775" +
		"\x07\x07\x02\x02\u0772\u0774\x052\x1A\x02\u0773\u0772\x03\x02\x02\x02" +
		"\u0774\u0777\x03\x02\x02\x02\u0775\u0773\x03\x02\x02\x02\u0775\u0776\x03" +
		"\x02\x02\x02\u0776\u0778\x03\x02\x02\x02\u0777\u0775\x03\x02\x02\x02\u0778" +
		"\u0779\x07\b\x02\x02\u0779\u077F\x050\x19\x02\u077A\u077B\x07\xA7\x02" +
		"\x02\u077B\u077C\x05\x9AN\x02\u077C\u077D\x050\x19\x02\u077D\u077F\x03" +
		"\x02\x02\x02\u077E\u0770\x03\x02\x02\x02\u077E\u077A\x03\x02\x02\x02\u077F" +
		"\xA1\x03\x02\x02\x02\u0780\u0781\x07\xA9\x02\x02\u0781\u0782\x07\x07\x02" +
		"\x02\u0782\u0783\x05<\x1F\x02\u0783\u0784\x07\b\x02\x02\u0784\u0785\x05" +
		"0\x19\x02\u0785\xA3\x03\x02\x02\x02\u0786\u0787\x05\xAAV\x02\u0787\xA5" +
		"\x03\x02\x02\x02\u0788\u0789\x05\xBE`\x02\u0789\xA7\x03\x02\x02\x02\u078A" +
		"\u07A0\x05\u0106\x84\x02\u078B\u07A0\x05\xAEX\x02\u078C\u078D\x05\u0106" +
		"\x84\x02\u078D\u078E\x05\xAEX\x02\u078E\u07A0\x03\x02\x02\x02\u078F\u0796" +
		"\x05\u0106\x84\x02\u0790\u0791\x07\x04\x02\x02\u0791\u0792\x07C\x02\x02" +
		"\u0792\u0795\x07\x06\x02\x02\u0793\u0795\x07)\x02\x02\u0794\u0790\x03" +
		"\x02\x02\x02\u0794\u0793\x03\x02\x02\x02\u0795\u0798\x03\x02\x02\x02\u0796" +
		"\u0794\x03\x02\x02\x02\u0796\u0797\x03\x02\x02\x02\u0797\u079D\x03\x02" +
		"\x02\x02\u0798\u0796\x03\x02\x02\x02\u0799\u079A\x07\x04\x02\x02\u079A" +
		"\u079B\x05\xAEX\x02\u079B\u079C\x07\x06\x02\x02\u079C\u079E\x03\x02\x02" +
		"\x02\u079D\u0799\x03\x02\x02\x02\u079D\u079E\x03\x02\x02\x02\u079E\u07A0" +
		"\x03\x02\x02\x02\u079F\u078A\x03\x02\x02\x02\u079F\u078B\x03\x02\x02\x02" +
		"\u079F\u078C\x03\x02\x02\x02\u079F\u078F\x03\x02\x02\x02\u07A0\xA9\x03" +
		"\x02\x02\x02\u07A1\u07A2\x07*\x02\x02\u07A2\u07A7\x05\xB0Y\x02\u07A3\u07A4" +
		"\x07\x05\x02\x02\u07A4\u07A6\x05\xB0Y\x02\u07A5\u07A3\x03\x02\x02\x02" +
		"\u07A6\u07A9\x03\x02\x02\x02\u07A7\u07A5\x03\x02\x02\x02\u07A7\u07A8\x03" +
		"\x02\x02\x02\u07A8\u07AA\x03\x02\x02\x02\u07A9\u07A7\x03\x02\x02\x02\u07AA" +
		"\u07AB\x07\b\x02\x02\u07AB\u07E0\x03\x02\x02\x02\u07AC\u07AD\x07*\x02" +
		"\x02\u07AD\u07E0\x07\b\x02\x02\u07AE\u07AF\x07+\x02\x02\u07AF\u07B4\x05" +
		"\xB4[\x02\u07B0\u07B1\x07\x05\x02\x02\u07B1\u07B3\x05\xB4[\x02\u07B2\u07B0" +
		"\x03\x02\x02\x02\u07B3\u07B6\x03\x02\x02\x02\u07B4\u07B2\x03\x02\x02\x02" +
		"\u07B4\u07B5\x03\x02\x02\x02\u07B5\u07B7\x03\x02\x02\x02\u07B6\u07B4\x03" +
		"\x02\x02\x02\u07B7\u07B8\x07\x06\x02\x02\u07B8\u07E0\x03\x02\x02\x02\u07B9" +
		"\u07BA\x07+\x02\x02\u07BA\u07E0\x07\x06\x02\x02\u07BB\u07BC\x07,\x02\x02" +
		"\u07BC\u07C1\x078\x02\x02\u07BD\u07BE\x07\x05\x02\x02\u07BE\u07C0\x07" +
		"8\x02\x02\u07BF\u07BD\x03\x02\x02\x02\u07C0\u07C3\x03\x02\x02\x02\u07C1" +
		"\u07BF\x03\x02\x02\x02\u07C1\u07C2\x03\x02\x02\x02\u07C2\u07C4\x03\x02" +
		"\x02\x02\u07C3\u07C1\x03\x02\x02\x02\u07C4\u07E0\x07\x06\x02\x02\u07C5" +
		"\u07C6\x07-\x02\x02\u07C6\u07CB\x07C\x02\x02\u07C7\u07C8\x07\x05\x02\x02" +
		"\u07C8\u07CA\x07C\x02\x02\u07C9\u07C7\x03\x02\x02\x02\u07CA\u07CD\x03" +
		"\x02\x02\x02\u07CB\u07C9\x03\x02\x02\x02\u07CB\u07CC\x03\x02\x02\x02\u07CC" +
		"\u07CE\x03\x02\x02\x02\u07CD\u07CB\x03\x02\x02\x02\u07CE\u07E0\x07\x06" +
		"\x02\x02\u07CF\u07D0\x07.\x02\x02\u07D0\u07D5\x07:\x02\x02\u07D1\u07D2" +
		"\x07\x05\x02\x02\u07D2\u07D4\x07:\x02\x02\u07D3\u07D1\x03\x02\x02\x02" +
		"\u07D4\u07D7\x03\x02\x02\x02\u07D5\u07D3\x03\x02\x02\x02\u07D5\u07D6\x03" +
		"\x02\x02\x02\u07D6\u07D8\x03\x02\x02\x02\u07D7\u07D5\x03\x02\x02\x02\u07D8" +
		"\u07E0\x07\x06\x02\x02\u07D9\u07E0\x05\xBC_\x02\u07DA\u07E0\x078\x02\x02" +
		"\u07DB\u07E0\x079\x02\x02\u07DC\u07E0\x07:\x02\x02\u07DD\u07E0\x07;\x02" +
		"\x02\u07DE\u07E0\x07<\x02\x02\u07DF\u07A1\x03\x02\x02\x02\u07DF\u07AC" +
		"\x03\x02\x02\x02\u07DF\u07AE\x03\x02\x02\x02\u07DF\u07B9\x03\x02\x02\x02" +
		"\u07DF\u07BB\x03\x02\x02\x02\u07DF\u07C5\x03\x02\x02\x02\u07DF\u07CF\x03" +
		"\x02\x02\x02\u07DF\u07D9\x03\x02\x02\x02\u07DF\u07DA\x03\x02\x02\x02\u07DF" +
		"\u07DB\x03\x02\x02\x02\u07DF\u07DC\x03\x02\x02\x02\u07DF\u07DD\x03\x02" +
		"\x02\x02\u07DF\u07DE\x03\x02\x02\x02\u07E0\xAB\x03\x02\x02\x02\u07E1\u07E2" +
		"\x05\xB4[\x02\u07E2\xAD\x03\x02\x02\x02\u07E3\u07E4\x07\x07\x02\x02\u07E4" +
		"\u07E9\x05\xB0Y\x02\u07E5\u07E6\x07\x05\x02\x02\u07E6\u07E8\x05\xB0Y\x02" +
		"\u07E7\u07E5\x03\x02\x02\x02\u07E8\u07EB\x03\x02\x02\x02\u07E9\u07E7\x03" +
		"\x02\x02\x02\u07E9\u07EA\x03\x02\x02\x02\u07EA\u07EC\x03\x02\x02\x02\u07EB" +
		"\u07E9\x03\x02\x02\x02\u07EC\u07ED\x07\b\x02\x02\u07ED\u07F1\x03\x02\x02" +
		"\x02\u07EE\u07EF\x07\x07\x02\x02\u07EF\u07F1\x07\b\x02\x02\u07F0\u07E3" +
		"\x03\x02\x02\x02\u07F0\u07EE\x03\x02\x02\x02\u07F1\xAF\x03\x02\x02\x02" +
		"\u07F2\u07F3\x05\u0106\x84\x02\u07F3\u07F4\x07 \x02\x02\u07F4\u07F5\x05" +
		"\xB4[\x02\u07F5\xB1\x03\x02\x02\x02\u07F6\u07F7\x07\x04\x02\x02\u07F7" +
		"\u07FC\x05\xB4[\x02\u07F8\u07F9\x07\x05\x02\x02\u07F9\u07FB\x05\xB4[\x02" +
		"\u07FA\u07F8\x03\x02\x02\x02\u07FB\u07FE\x03\x02\x02\x02\u07FC\u07FA\x03" +
		"\x02\x02\x02\u07FC\u07FD\x03\x02\x02\x02\u07FD\u07FF\x03\x02\x02\x02\u07FE" +
		"\u07FC\x03\x02\x02\x02\u07FF\u0800\x07\x06\x02\x02\u0800\u0804\x03\x02" +
		"\x02\x02\u0801\u0802\x07\x04\x02\x02\u0802\u0804\x07\x06\x02\x02\u0803" +
		"\u07F6\x03\x02\x02\x02\u0803\u0801\x03\x02\x02\x02\u0804\xB3\x03\x02\x02" +
		"\x02\u0805\u0811\x05\xAEX\x02\u0806\u0811\x05\xB2Z\x02\u0807\u0811\x05" +
		"\xB6\\\x02\u0808\u0811\x05\xB8]\x02\u0809\u0811\x05\xBA^\x02\u080A\u0811" +
		"\x05\xBC_\x02\u080B\u0811\x078\x02\x02\u080C\u0811\x079\x02\x02\u080D" +
		"\u0811\x07:\x02\x02\u080E\u0811\x07;\x02\x02\u080F\u0811\x07<\x02\x02" +
		"\u0810\u0805\x03\x02\x02\x02\u0810\u0806\x03\x02\x02\x02\u0810\u0807\x03" +
		"\x02\x02\x02\u0810\u0808\x03\x02\x02\x02\u0810\u0809\x03\x02\x02\x02\u0810" +
		"\u080A\x03\x02\x02\x02\u0810\u080B\x03\x02\x02\x02\u0810\u080C\x03\x02" +
		"\x02\x02\u0810\u080D\x03\x02\x02\x02\u0810\u080E\x03\x02\x02\x02\u0810" +
		"\u080F\x03\x02\x02\x02\u0811\xB5\x03\x02\x02\x02\u0812\u0813\x07/\x02" +
		"\x02\u0813\u0818\x078\x02\x02\u0814\u0815\x07\x05\x02\x02\u0815\u0817" +
		"\x078\x02\x02\u0816\u0814\x03\x02\x02\x02\u0817\u081A\x03\x02\x02\x02" +
		"\u0818\u0816\x03\x02\x02\x02\u0818\u0819\x03\x02\x02\x02\u0819\u081B\x03" +
		"\x02\x02\x02\u081A\u0818\x03\x02\x02\x02\u081B\u081C\x07\x06\x02\x02\u081C" +
		"\xB7\x03\x02\x02\x02\u081D\u081E\x070\x02\x02\u081E\u0823\x07C\x02\x02" +
		"\u081F\u0820\x07\x05\x02\x02\u0820\u0822\x07C\x02\x02\u0821\u081F\x03" +
		"\x02\x02\x02\u0822\u0825\x03\x02\x02\x02\u0823\u0821\x03\x02\x02\x02\u0823" +
		"\u0824\x03\x02\x02\x02\u0824\u0826\x03\x02\x02\x02\u0825\u0823\x03\x02" +
		"\x02\x02\u0826\u0827\x07\x06\x02\x02\u0827\xB9\x03\x02\x02\x02\u0828\u0829" +
		"\x071\x02\x02\u0829\u082E\x07:\x02\x02\u082A\u082B\x07\x05\x02\x02\u082B" +
		"\u082D\x07:\x02\x02\u082C\u082A\x03\x02\x02\x02\u082D\u0830\x03\x02\x02" +
		"\x02\u082E\u082C\x03\x02\x02\x02\u082E\u082F\x03\x02\x02\x02\u082F\u0831" +
		"\x03\x02\x02\x02\u0830\u082E\x03\x02\x02\x02\u0831\u0832\x07\x06\x02\x02" +
		"\u0832\xBB\x03\x02\x02\x02\u0833\u0834\t\x1D\x02\x02\u0834\xBD\x03\x02" +
		"\x02\x02\u0835\u0836\x072\x02\x02\u0836\u083B\x05\xC4c\x02\u0837\u0838" +
		"\x07\x05\x02\x02\u0838\u083A\x05\xC4c\x02\u0839\u0837\x03\x02\x02\x02" +
		"\u083A\u083D\x03\x02\x02\x02\u083B\u0839\x03\x02\x02\x02\u083B\u083C\x03" +
		"\x02\x02\x02\u083C\u083E\x03\x02\x02\x02\u083D\u083B\x03\x02\x02\x02\u083E" +
		"\u083F\x07\b\x02\x02\u083F\u0855\x03\x02\x02\x02\u0840\u0841\x072\x02" +
		"\x02\u0841\u0855\x07\b\x02\x02\u0842\u0843\x073\x02\x02\u0843\u0848\x05" +
		"\xC8e\x02\u0844\u0845\x07\x05\x02\x02\u0845\u0847\x05\xC8e\x02\u0846\u0844" +
		"\x03\x02\x02\x02\u0847\u084A\x03\x02\x02\x02\u0848\u0846\x03\x02\x02\x02" +
		"\u0848\u0849\x03\x02\x02\x02\u0849\u084B\x03\x02\x02\x02\u084A\u0848\x03" +
		"\x02\x02\x02\u084B\u084C\x07\x06\x02\x02\u084C\u0855\x03\x02\x02\x02";
	private static readonly _serializedATNSegment4: string =
		"\u084D\u084E\x07\x04\x02\x02\u084E\u0855\x07\x06\x02\x02\u084F\u0855\x07" +
		"A\x02\x02\u0850\u0855\x07C\x02\x02\u0851\u0855\x07>\x02\x02\u0852\u0855" +
		"\x07?\x02\x02\u0853\u0855\x07@\x02\x02\u0854\u0835\x03\x02\x02\x02\u0854" +
		"\u0840\x03\x02\x02\x02\u0854\u0842\x03\x02\x02\x02\u0854\u084D\x03\x02" +
		"\x02\x02\u0854\u084F\x03\x02\x02\x02\u0854\u0850\x03\x02\x02\x02\u0854" +
		"\u0851\x03\x02\x02\x02\u0854\u0852\x03\x02\x02\x02\u0854\u0853\x03\x02" +
		"\x02\x02\u0855\xBF\x03\x02\x02\x02\u0856\u0857\x05\xC8e\x02\u0857\xC1" +
		"\x03\x02\x02\x02\u0858\u0859\x07\x07\x02\x02\u0859\u085E\x05\xC4c\x02" +
		"\u085A\u085B\x07\x05\x02\x02\u085B\u085D\x05\xC4c\x02\u085C\u085A\x03" +
		"\x02\x02\x02\u085D\u0860\x03\x02\x02\x02\u085E\u085C\x03\x02\x02\x02\u085E" +
		"\u085F\x03\x02\x02\x02\u085F\u0861\x03\x02\x02\x02\u0860\u085E\x03\x02" +
		"\x02\x02\u0861\u0862\x07\b\x02\x02\u0862\u0866\x03\x02\x02\x02\u0863\u0864" +
		"\x07\x07\x02\x02\u0864\u0866\x07\b\x02\x02\u0865\u0858\x03\x02\x02\x02" +
		"\u0865\u0863\x03\x02\x02\x02\u0866\xC3\x03\x02\x02\x02\u0867\u0868\x07" +
		"A\x02\x02\u0868\u0869\x07 \x02\x02\u0869\u086A\x05\xC8e\x02\u086A\xC5" +
		"\x03\x02\x02\x02\u086B\u086C\x07\x04\x02\x02\u086C\u0871\x05\xC8e\x02" +
		"\u086D\u086E\x07\x05\x02\x02\u086E\u0870\x05\xC8e\x02\u086F\u086D\x03" +
		"\x02\x02\x02\u0870\u0873\x03\x02\x02\x02\u0871\u086F\x03\x02\x02\x02\u0871" +
		"\u0872\x03\x02\x02\x02\u0872\u0874\x03\x02\x02\x02\u0873\u0871\x03\x02" +
		"\x02\x02\u0874\u0875\x07\x06\x02\x02\u0875\u0879\x03\x02\x02\x02\u0876" +
		"\u0877\x07\x04\x02\x02\u0877\u0879\x07\x06\x02\x02\u0878\u086B\x03\x02" +
		"\x02\x02\u0878\u0876\x03\x02\x02\x02\u0879\xC7\x03\x02\x02\x02\u087A\u0882" +
		"\x07A\x02\x02\u087B\u0882\x07C\x02\x02\u087C\u0882\x05\xC2b\x02\u087D" +
		"\u0882\x05\xC6d\x02\u087E\u0882\x07>\x02\x02\u087F\u0882\x07?\x02\x02" +
		"\u0880\u0882\x07@\x02\x02\u0881\u087A\x03\x02\x02\x02\u0881\u087B\x03" +
		"\x02\x02\x02\u0881\u087C\x03\x02\x02\x02\u0881\u087D\x03\x02\x02\x02\u0881" +
		"\u087E\x03\x02\x02\x02\u0881\u087F\x03\x02\x02\x02\u0881\u0880\x03\x02" +
		"\x02\x02\u0882\xC9\x03\x02\x02\x02\u0883\u0884\t\x1E\x02\x02\u0884\xCB" +
		"\x03\x02\x02\x02\u0885\u0886\t\x1F\x02\x02\u0886\xCD\x03\x02\x02\x02\u0887" +
		"\u0888\x074\x02\x02\u0888\u0889\x05\xD4k\x02\u0889\u088A\x05\xD4k\x02" +
		"\u088A\u088B\x05\xD4k\x02\u088B\u088C\x075\x02\x02\u088C\xCF\x03\x02\x02" +
		"\x02\u088D\u088E\x074\x02\x02\u088E\u088F\x05\xD4k\x02\u088F\u0890\x05" +
		"\xD4k\x02\u0890\u0891\x075\x02\x02\u0891\xD1\x03\x02\x02\x02\u0892\u0893" +
		"\x074\x02\x02\u0893\u0894\x05\xD4k\x02\u0894\u0895\x05\xD4k\x02\u0895" +
		"\u0896\x05\xD4k\x02\u0896\u0897\x05\xD4k\x02\u0897\u0898\x05\xD4k\x02" +
		"\u0898\u0899\x075\x02\x02\u0899\xD3\x03\x02\x02\x02\u089A\u089B\t \x02" +
		"\x02\u089B\xD5\x03\x02\x02\x02\u089C\u089E\x05\xDEp\x02\u089D\u089F\x05" +
		"\xD8m\x02\u089E\u089D\x03\x02\x02\x02\u089E\u089F\x03\x02\x02\x02\u089F" +
		"\u08A1\x03\x02\x02\x02\u08A0\u08A2\x05\xA4S\x02\u08A1\u08A0\x03\x02\x02" +
		"\x02\u08A1\u08A2\x03\x02\x02\x02\u08A2\xD7\x03\x02\x02\x02\u08A3\u08A5" +
		"\x07\x04\x02\x02\u08A4\u08A6\v\x02\x02\x02\u08A5\u08A4\x03\x02\x02\x02" +
		"\u08A6\u08A7\x03\x02\x02\x02\u08A7\u08A8\x03\x02\x02\x02\u08A7\u08A5\x03" +
		"\x02\x02\x02\u08A8\u08A9\x03\x02\x02\x02\u08A9\u08AA\x07\x06\x02\x02\u08AA" +
		"\xD9\x03\x02\x02\x02\u08AB\u08B3\x07\xB2\x02\x02\u08AC\u08AE\x07\x04\x02" +
		"\x02\u08AD\u08AF\v\x02\x02\x02\u08AE\u08AD\x03\x02\x02\x02\u08AF\u08B0" +
		"\x03\x02\x02\x02\u08B0\u08B1\x03\x02\x02\x02\u08B0\u08AE\x03\x02\x02\x02" +
		"\u08B1\u08B2\x03\x02\x02\x02\u08B2\u08B4\x07\x06\x02\x02\u08B3\u08AC\x03" +
		"\x02\x02\x02\u08B3\u08B4\x03\x02\x02\x02\u08B4\u08BB\x03\x02\x02\x02\u08B5" +
		"\u08B6\x076\x02\x02\u08B6\u08BB\x05\u0106\x84\x02\u08B7\u08B8\x07#\x02" +
		"\x02\u08B8\u08BB\x05\u0106\x84\x02\u08B9\u08BB\x07#\x02\x02\u08BA\u08AB" +
		"\x03\x02\x02\x02\u08BA\u08B5\x03\x02\x02\x02\u08BA\u08B7\x03\x02\x02\x02" +
		"\u08BA\u08B9\x03\x02\x02\x02\u08BB\xDB\x03\x02\x02\x02\u08BC\u08BD\x05" +
		"\u0102\x82\x02\u08BD\u08BE\x07 \x02\x02\u08BE\u08BF\x05\u0108\x85\x02" +
		"\u08BF\u08C2\x03\x02\x02\x02\u08C0\u08C2\x05\u0108\x85\x02\u08C1\u08BC" +
		"\x03\x02\x02\x02\u08C1\u08C0\x03\x02\x02\x02\u08C2\xDD\x03\x02\x02\x02" +
		"\u08C3\u08C4\x05\xDCo\x02\u08C4\xDF\x03\x02\x02\x02\u08C5\u08C6\x05\xDC" +
		"o\x02\u08C6\xE1\x03\x02\x02\x02\u08C7\u08C8\x05\xDCo\x02\u08C8\xE3\x03" +
		"\x02\x02\x02\u08C9\u08CA\x05\xDCo\x02\u08CA\xE5\x03\x02\x02\x02\u08CB" +
		"\u08CC\x05\xDCo\x02\u08CC\xE7\x03\x02\x02\x02\u08CD\u08CE\x05\xDCo\x02" +
		"\u08CE\xE9\x03\x02\x02\x02\u08CF\u08D0\x05\xDCo\x02\u08D0\xEB\x03\x02" +
		"\x02\x02\u08D1\u08D2\x05\xDCo\x02\u08D2\xED\x03\x02\x02\x02\u08D3\u08D4" +
		"\x05\xDCo\x02\u08D4\xEF\x03\x02\x02\x02\u08D5\u08D6\x05\xDCo\x02\u08D6" +
		"\xF1\x03\x02\x02\x02\u08D7\u08D8\x05\xDCo\x02\u08D8\xF3\x03\x02\x02\x02" +
		"\u08D9\u08DA\x07#\x02\x02\u08DA\u08DB\x05\xDCo\x02\u08DB\xF5\x03\x02\x02" +
		"\x02\u08DC\u08DD\x05\xF4{\x02\u08DD\xF7\x03\x02\x02\x02\u08DE\u08DF\x05" +
		"\xF4{\x02\u08DF\xF9\x03\x02\x02\x02\u08E0\u08E1\x05\xF4{\x02\u08E1\xFB" +
		"\x03\x02\x02\x02\u08E2\u08E3\x05\xF4{\x02\u08E3\xFD\x03\x02\x02\x02\u08E4" +
		"\u08E5\x05\u0102\x82\x02\u08E5\u08E6\x07 \x02\x02\u08E6\u08E8\x03\x02" +
		"\x02\x02\u08E7\u08E4\x03\x02\x02\x02\u08E7\u08E8\x03\x02\x02\x02\u08E8" +
		"\u08E9\x03\x02\x02\x02\u08E9\u08EA\x05\u0102\x82\x02\u08EA\xFF\x03\x02" +
		"\x02\x02\u08EB\u08EC\t!\x02\x02\u08EC\u0101\x03\x02\x02\x02\u08ED\u08F1" +
		"\x07\xB9\x02\x02\u08EE\u08F1\x05\xCCg\x02\u08EF\u08F1\x05\u0100\x81\x02" +
		"\u08F0\u08ED\x03\x02\x02\x02\u08F0\u08EE\x03\x02\x02\x02\u08F0\u08EF\x03" +
		"\x02\x02\x02\u08F1\u0103\x03\x02\x02\x02\u08F2\u08F3\x05\xDCo\x02\u08F3" +
		"\u0105\x03\x02\x02\x02\u08F4\u08F9\x07\xB9\x02\x02\u08F5\u08F9\x07\xBA" +
		"\x02\x02\u08F6\u08F9\x05\xCCg\x02\u08F7\u08F9\x05\u0100\x81\x02\u08F8" +
		"\u08F4\x03\x02\x02\x02\u08F8\u08F5\x03\x02\x02\x02\u08F8\u08F6\x03\x02" +
		"\x02\x02\u08F8\u08F7\x03\x02\x02\x02\u08F9\u0107\x03\x02\x02\x02\u08FA" +
		"\u08FF\x05\u0102\x82\x02\u08FB\u08FC\x07\x1C\x02\x02\u08FC\u08FE\x05\u0102" +
		"\x82\x02\u08FD\u08FB\x03\x02\x02\x02\u08FE\u0901\x03\x02\x02\x02\u08FF" +
		"\u08FD\x03\x02\x02\x02\u08FF\u0900\x03\x02\x02\x02\u0900\u0109\x03\x02" +
		"\x02\x02\u0901\u08FF\x03\x02\x02\x02\u0902\u0903\x05\u0102\x82\x02\u0903" +
		"\u0904\x07 \x02\x02\u0904\u0906\x03\x02\x02\x02\u0905\u0902\x03\x02\x02" +
		"\x02\u0905\u0906\x03\x02\x02\x02\u0906\u0907\x03\x02\x02\x02\u0907\u090A" +
		"\x05\u0102\x82\x02\u0908\u0909\x07\x04\x02\x02\u0909\u090B\x07\x06\x02" +
		"\x02\u090A\u0908\x03\x02\x02\x02\u090A\u090B\x03\x02\x02\x02\u090B\u010B" +
		"\x03\x02\x02\x02\u090C\u090D\x05\u0102\x82\x02\u090D\u010D\x03\x02\x02" +
		"\x02\u090E\u0911\x05\xECw\x02\u090F\u0911\x05\xF6|\x02\u0910\u090E\x03" +
		"\x02\x02\x02\u0910\u090F\x03\x02\x02\x02\u0911\u0914\x03\x02\x02\x02\u0912" +
		"\u0915\x05\xACW\x02\u0913\u0915\x05\xA4S\x02\u0914\u0912\x03\x02\x02\x02" +
		"\u0914\u0913\x03\x02\x02\x02\u0914\u0915\x03\x02\x02\x02\u0915\u010F\x03" +
		"\x02\x02\x02\u0916\u0919\x05\xDEp\x02\u0917\u0919\x05\xF8}\x02\u0918\u0916" +
		"\x03\x02\x02\x02\u0918\u0917\x03\x02\x02\x02\u0919\u091B\x03\x02\x02\x02" +
		"\u091A\u091C\x05\xD8m\x02\u091B\u091A\x03\x02\x02\x02\u091B\u091C\x03" +
		"\x02\x02\x02\u091C\u091F\x03\x02\x02\x02\u091D\u0920\x05\xACW\x02\u091E" +
		"\u0920\x05\xA4S\x02\u091F\u091D\x03\x02\x02\x02\u091F\u091E\x03\x02\x02" +
		"\x02\u091F\u0920\x03\x02\x02\x02\u0920\u0111\x03\x02\x02\x02\u0111\u0115" +
		"\u011A\u011E\u0136\u0142\u0144\u014A\u014F\u0153\u0157\u015D\u0187\u018C" +
		"\u0193\u0197\u019B\u01A1\u01AA\u01AF\u01B9\u01BC\u01C2\u01CF\u01D4\u01DA" +
		"\u01E0\u01E6\u01EF\u01FB\u0203\u0209\u0210\u0215\u021A\u0222\u0226\u0230" +
		"\u0234\u023A\u023E\u0244\u024A\u024C\u0254\u025A\u025E\u0279\u027C\u0280" +
		"\u0283\u028A\u028D\u0291\u0295\u0298\u029B\u02A1\u02A4\u02AC\u02AF\u02B3" +
		"\u02BA\u02BD\u02C1\u02C6\u02CB\u02E0\u02EE\u02F2\u02F5\u0301\u0308\u032B" +
		"\u032F\u036C\u0375\u0380\u0382\u038C\u0393\u039B\u03A1\u03A6\u03AD\u03B4" +
		"\u03B7\u03BE\u03C4\u03C9\u03CD\u03DA\u03E0\u03E5\u03E9\u03EF\u03F4\u03F9" +
		"\u0402\u0409\u040E\u0412\u0418\u041D\u0422\u0425\u042A\u042F\u0434\u0439" +
		"\u043E\u0443\u0448\u044D\u0451\u0456\u045B\u0466\u046D\u0475\u047A\u047F" +
		"\u0488\u048D\u0492\u049C\u04AC\u04B3\u04BB\u04C0\u04C5\u04D0\u04D5\u04DA" +
		"\u04E2\u04EC\u04F3\u04FD\u0502\u0509\u0513\u0518\u0532\u0537\u053B\u0544" +
		"\u0547\u054D\u0555\u0559\u055D\u0561\u0564\u0569\u057C\u0581\u0586\u058C" +
		"\u0594\u059C\u05A2\u05A7\u05AC\u05AE\u05B5\u05BF\u05C4\u05CF\u05D4\u05D8" +
		"\u05DB\u05DE\u05E3\u05E6\u05FD\u0600\u0602\u060A\u060F\u0618\u061C\u0621" +
		"\u0625\u062C\u0630\u0634\u0639\u0640\u0644\u064B\u0656\u065B\u065E\u0669" +
		"\u0674\u067D\u0680\u0683\u068B\u068E\u0691\u0695\u06AB\u06AD\u06B9\u06C2" +
		"\u06D4\u06DD\u06E9\u06EE\u06F7\u06FC\u0707\u070F\u0715\u0721\u0724\u072C" +
		"\u072E\u0738\u0743\u0751\u075F\u0761\u0768\u076E\u0775\u077E\u0794\u0796" +
		"\u079D\u079F\u07A7\u07B4\u07C1\u07CB\u07D5\u07DF\u07E9\u07F0\u07FC\u0803" +
		"\u0810\u0818\u0823\u082E\u083B\u0848\u0854\u085E\u0865\u0871\u0878\u0881" +
		"\u089E\u08A1\u08A7\u08B0\u08B3\u08BA\u08C1\u08E7\u08F0\u08F8\u08FF\u0905" +
		"\u090A\u0910\u0914\u0918\u091B\u091F";
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
	public funcRunStatement(): FuncRunStatementContext | undefined {
		return this.tryGetRuleContext(0, FuncRunStatementContext);
	}
	public funcImproveRunStatement(): FuncImproveRunStatementContext | undefined {
		return this.tryGetRuleContext(0, FuncImproveRunStatementContext);
	}
	public execStatement(): ExecStatementContext | undefined {
		return this.tryGetRuleContext(0, ExecStatementContext);
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
export class NoInExecStatementNameSpaceContext extends NoInExecStatementContext {
	public nameSpaceStatement(): NameSpaceStatementContext {
		return this.getRuleContext(0, NameSpaceStatementContext);
	}
	constructor(ctx: NoInExecStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterNoInExecStatementNameSpace) {
			listener.enterNoInExecStatementNameSpace(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitNoInExecStatementNameSpace) {
			listener.exitNoInExecStatementNameSpace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitNoInExecStatementNameSpace) {
			return visitor.visitNoInExecStatementNameSpace(this);
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


export class FuncTagStatementContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(JustMCFParser.FUNC, 0); }
	public tagNameSpaceFunc(): TagNameSpaceFuncContext {
		return this.getRuleContext(0, TagNameSpaceFuncContext);
	}
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
	public numberType(): NumberTypeContext | undefined {
		return this.tryGetRuleContext(0, NumberTypeContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
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
	public BOSSBAR(): TerminalNode { return this.getToken(JustMCFParser.BOSSBAR, 0); }
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
	}
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
	public BOSSBAR(): TerminalNode { return this.getToken(JustMCFParser.BOSSBAR, 0); }
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
	}
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
	public scbIdentifier(): ScbIdentifierContext[];
	public scbIdentifier(i: number): ScbIdentifierContext;
	public scbIdentifier(i?: number): ScbIdentifierContext | ScbIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbIdentifierContext);
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
	public scbIdentifier(): ScbIdentifierContext {
		return this.getRuleContext(0, ScbIdentifierContext);
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
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER);
		} else {
			return this.getToken(JustMCFParser.NUMBER, i);
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
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public nameSpaceStorage(): NameSpaceStorageContext {
		return this.getRuleContext(0, NameSpaceStorageContext);
	}
	public nbtPath(): NbtPathContext {
		return this.getRuleContext(0, NbtPathContext);
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
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
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
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public nbtPath(): NbtPathContext {
		return this.getRuleContext(0, NbtPathContext);
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
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public nbtPath(): NbtPathContext {
		return this.getRuleContext(0, NbtPathContext);
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
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
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public scbIdentifier(): ScbIdentifierContext {
		return this.getRuleContext(0, ScbIdentifierContext);
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
	public scbIdentifier(): ScbIdentifierContext {
		return this.getRuleContext(0, ScbIdentifierContext);
	}
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public scbIdentifier(): ScbIdentifierContext {
		return this.getRuleContext(0, ScbIdentifierContext);
	}
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public scbIdentifier(): ScbIdentifierContext {
		return this.getRuleContext(0, ScbIdentifierContext);
	}
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public scbIdentifier(): ScbIdentifierContext[];
	public scbIdentifier(i: number): ScbIdentifierContext;
	public scbIdentifier(i?: number): ScbIdentifierContext | ScbIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbIdentifierContext);
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
	public scbIdentifier(): ScbIdentifierContext[];
	public scbIdentifier(i: number): ScbIdentifierContext;
	public scbIdentifier(i?: number): ScbIdentifierContext | ScbIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbIdentifierContext);
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
	public scbIdentifier(): ScbIdentifierContext[];
	public scbIdentifier(i: number): ScbIdentifierContext;
	public scbIdentifier(i?: number): ScbIdentifierContext | ScbIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbIdentifierContext);
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
	public scbIdentifier(): ScbIdentifierContext[];
	public scbIdentifier(i: number): ScbIdentifierContext;
	public scbIdentifier(i?: number): ScbIdentifierContext | ScbIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbIdentifierContext);
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
	public scbIdentifier(): ScbIdentifierContext[];
	public scbIdentifier(i: number): ScbIdentifierContext;
	public scbIdentifier(i?: number): ScbIdentifierContext | ScbIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbIdentifierContext);
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
	public scbIdentifier(): ScbIdentifierContext[];
	public scbIdentifier(i: number): ScbIdentifierContext;
	public scbIdentifier(i?: number): ScbIdentifierContext | ScbIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbIdentifierContext);
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
	public scbIdentifier(): ScbIdentifierContext[];
	public scbIdentifier(i: number): ScbIdentifierContext;
	public scbIdentifier(i?: number): ScbIdentifierContext | ScbIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbIdentifierContext);
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
	public scbIdentifier(): ScbIdentifierContext[];
	public scbIdentifier(i: number): ScbIdentifierContext;
	public scbIdentifier(i?: number): ScbIdentifierContext | ScbIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbIdentifierContext);
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
	public scbIdentifier(): ScbIdentifierContext[];
	public scbIdentifier(i: number): ScbIdentifierContext;
	public scbIdentifier(i?: number): ScbIdentifierContext | ScbIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbIdentifierContext);
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
	public scbIdentifier(): ScbIdentifierContext {
		return this.getRuleContext(0, ScbIdentifierContext);
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
	public scbIdentifier(): ScbIdentifierContext {
		return this.getRuleContext(0, ScbIdentifierContext);
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
	public scbIdentifier(): ScbIdentifierContext {
		return this.getRuleContext(0, ScbIdentifierContext);
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
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public scbIdentifier(): ScbIdentifierContext {
		return this.getRuleContext(0, ScbIdentifierContext);
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


export class ScbIdentifierContext extends ParserRuleContext {
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
	public acceptableName(): AcceptableNameContext | undefined {
		return this.tryGetRuleContext(0, AcceptableNameContext);
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
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public BOSSBAR(): TerminalNode { return this.getToken(JustMCFParser.BOSSBAR, 0); }
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
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
	public BOSSBAR(): TerminalNode { return this.getToken(JustMCFParser.BOSSBAR, 0); }
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
	}
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public BOSSBAR(): TerminalNode { return this.getToken(JustMCFParser.BOSSBAR, 0); }
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
	}
	public MAX(): TerminalNode { return this.getToken(JustMCFParser.MAX, 0); }
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public titleIndependentStatementInner(): TitleIndependentStatementInnerContext {
		return this.getRuleContext(0, TitleIndependentStatementInnerContext);
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
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER);
		} else {
			return this.getToken(JustMCFParser.NUMBER, i);
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
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER);
		} else {
			return this.getToken(JustMCFParser.NUMBER, i);
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
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
export class LootSourceLootContext extends LootSourceContext {
	public nameSpaceLoot(): NameSpaceLootContext {
		return this.getRuleContext(0, NameSpaceLootContext);
	}
	public LOOT(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.LOOT, 0); }
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
export class LootSourceKillContext extends LootSourceContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public KILL(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.KILL, 0); }
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
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public MINE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MINE, 0); }
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
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public nameSpaceItem(): NameSpaceItemContext {
		return this.getRuleContext(0, NameSpaceItemContext);
	}
	public MINE(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.MINE, 0); }
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
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
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
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
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER);
		} else {
			return this.getToken(JustMCFParser.NUMBER, i);
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
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER);
		} else {
			return this.getToken(JustMCFParser.NUMBER, i);
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


export class NbtPathContext extends ParserRuleContext {
	public nbtName(): NbtNameContext | undefined {
		return this.tryGetRuleContext(0, NbtNameContext);
	}
	public nbtCompound(): NbtCompoundContext | undefined {
		return this.tryGetRuleContext(0, NbtCompoundContext);
	}
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER);
		} else {
			return this.getToken(JustMCFParser.NUMBER, i);
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
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER);
		} else {
			return this.getToken(JustMCFParser.NUMBER, i);
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
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.NUMBER);
		} else {
			return this.getToken(JustMCFParser.NUMBER, i);
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
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


