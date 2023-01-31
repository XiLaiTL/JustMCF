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
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly T__96 = 97;
	public static readonly T__97 = 98;
	public static readonly T__98 = 99;
	public static readonly T__99 = 100;
	public static readonly T__100 = 101;
	public static readonly T__101 = 102;
	public static readonly T__102 = 103;
	public static readonly T__103 = 104;
	public static readonly T__104 = 105;
	public static readonly T__105 = 106;
	public static readonly T__106 = 107;
	public static readonly T__107 = 108;
	public static readonly T__108 = 109;
	public static readonly T__109 = 110;
	public static readonly T__110 = 111;
	public static readonly T__111 = 112;
	public static readonly T__112 = 113;
	public static readonly T__113 = 114;
	public static readonly T__114 = 115;
	public static readonly T__115 = 116;
	public static readonly T__116 = 117;
	public static readonly T__117 = 118;
	public static readonly T__118 = 119;
	public static readonly T__119 = 120;
	public static readonly T__120 = 121;
	public static readonly T__121 = 122;
	public static readonly T__122 = 123;
	public static readonly T__123 = 124;
	public static readonly T__124 = 125;
	public static readonly T__125 = 126;
	public static readonly T__126 = 127;
	public static readonly T__127 = 128;
	public static readonly T__128 = 129;
	public static readonly T__129 = 130;
	public static readonly T__130 = 131;
	public static readonly T__131 = 132;
	public static readonly T__132 = 133;
	public static readonly T__133 = 134;
	public static readonly T__134 = 135;
	public static readonly T__135 = 136;
	public static readonly T__136 = 137;
	public static readonly T__137 = 138;
	public static readonly T__138 = 139;
	public static readonly T__139 = 140;
	public static readonly T__140 = 141;
	public static readonly T__141 = 142;
	public static readonly T__142 = 143;
	public static readonly T__143 = 144;
	public static readonly T__144 = 145;
	public static readonly T__145 = 146;
	public static readonly T__146 = 147;
	public static readonly T__147 = 148;
	public static readonly T__148 = 149;
	public static readonly T__149 = 150;
	public static readonly T__150 = 151;
	public static readonly T__151 = 152;
	public static readonly T__152 = 153;
	public static readonly T__153 = 154;
	public static readonly T__154 = 155;
	public static readonly T__155 = 156;
	public static readonly CompareOperation = 157;
	public static readonly Pos1 = 158;
	public static readonly Selector = 159;
	public static readonly Key = 160;
	public static readonly NumberType = 161;
	public static readonly AcceptableName = 162;
	public static readonly NBTName = 163;
	public static readonly UUID16_ = 164;
	public static readonly ByteNumber = 165;
	public static readonly ShortNumber = 166;
	public static readonly LongNumber = 167;
	public static readonly FloatNumber = 168;
	public static readonly DoubleNumber = 169;
	public static readonly STRING2 = 170;
	public static readonly BOOL = 171;
	public static readonly STRING = 172;
	public static readonly NUMBER = 173;
	public static readonly WS = 174;
	public static readonly LeagalCommand = 175;
	public static readonly LineComment = 176;
	public static readonly BlockComment = 177;
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
	public static readonly RULE_returnStatement = 16;
	public static readonly RULE_funcRunStatement = 17;
	public static readonly RULE_funcImproveRunExpression = 18;
	public static readonly RULE_funcImproveRunParam = 19;
	public static readonly RULE_execStatement = 20;
	public static readonly RULE_execStoreChild = 21;
	public static readonly RULE_execRunChild = 22;
	public static readonly RULE_execChild = 23;
	public static readonly RULE_matchPart = 24;
	public static readonly RULE_dataIdentifier = 25;
	public static readonly RULE_dataMergeExpression = 26;
	public static readonly RULE_dataOperationExpression = 27;
	public static readonly RULE_scbOperationExpression = 28;
	public static readonly RULE_scbSingleOperationExpression = 29;
	public static readonly RULE_scbIdentifier = 30;
	public static readonly RULE_pos3Identifier = 31;
	public static readonly RULE_pos2Identifier = 32;
	public static readonly RULE_pos5Identifier = 33;
	public static readonly RULE_pos1 = 34;
	public static readonly RULE_blockIdentifier = 35;
	public static readonly RULE_blockstate = 36;
	public static readonly RULE_selector = 37;
	public static readonly RULE_nameSpace = 38;
	public static readonly RULE_nameSpaceBlock = 39;
	public static readonly RULE_nameSpaceFunc = 40;
	public static readonly RULE_nameSpaceStorage = 41;
	public static readonly RULE_nameSpaceBossbar = 42;
	public static readonly RULE_nameSpaceBiome = 43;
	public static readonly RULE_nameSpaceDim = 44;
	public static readonly RULE_nameSpacePredicate = 45;
	public static readonly RULE_nameSpaceItem = 46;
	public static readonly RULE_nameSpaceLoot = 47;
	public static readonly RULE_nameSpaceItemModifier = 48;
	public static readonly RULE_tagNameSpace = 49;
	public static readonly RULE_tagNameSpaceItem = 50;
	public static readonly RULE_tagNameSpaceBlock = 51;
	public static readonly RULE_tagNameSpaceFunc = 52;
	public static readonly RULE_tagNameSpaceEntity = 53;
	public static readonly RULE_registerName = 54;
	public static readonly RULE_acceptableName = 55;
	public static readonly RULE_criterion = 56;
	public static readonly RULE_nbtName = 57;
	public static readonly RULE_resourceLocation = 58;
	public static readonly RULE_typeName = 59;
	public static readonly RULE_item_slot = 60;
	public static readonly RULE_item_predicate = 61;
	public static readonly RULE_block_predicate = 62;
	public static readonly RULE_dataStatement = 63;
	public static readonly RULE_scbPlayerStatement = 64;
	public static readonly RULE_scbPlayerStatementInner = 65;
	public static readonly RULE_scbObjectiveStatement = 66;
	public static readonly RULE_scbStatementInner = 67;
	public static readonly RULE_bossbarStatement = 68;
	public static readonly RULE_bossbarStatementInner = 69;
	public static readonly RULE_bossbarOperationExpression = 70;
	public static readonly RULE_titleStatement = 71;
	public static readonly RULE_titleStatementInner = 72;
	public static readonly RULE_titleSelectorStatementInner = 73;
	public static readonly RULE_titleIndependentStatementInner = 74;
	public static readonly RULE_displayStatement = 75;
	public static readonly RULE_displayStatementInner = 76;
	public static readonly RULE_displayIndependentStatementInner = 77;
	public static readonly RULE_itemStatement = 78;
	public static readonly RULE_lootStatement = 79;
	public static readonly RULE_lootStatementInner = 80;
	public static readonly RULE_lootSelectorStatementInner = 81;
	public static readonly RULE_lootIndependentStatementInnerGive = 82;
	public static readonly RULE_lootIndependentStatementInnerReplaceEntity = 83;
	public static readonly RULE_lootSource = 84;
	public static readonly RULE_itemStatementInner = 85;
	public static readonly RULE_itemSelectorStatementInner = 86;
	public static readonly RULE_itemIndependentStatementInner = 87;
	public static readonly RULE_giveAndClearIndependentStatementInner = 88;
	public static readonly RULE_attrStatement = 89;
	public static readonly RULE_attrStatementInner = 90;
	public static readonly RULE_attrIndependentStatementInner = 91;
	public static readonly RULE_entityStatement = 92;
	public static readonly RULE_tagIndependentStatementInner = 93;
	public static readonly RULE_effectIndependentStatementInner = 94;
	public static readonly RULE_tpIndependentStatementInner = 95;
	public static readonly RULE_entityIndependentStatementInner = 96;
	public static readonly RULE_entityStatementInner = 97;
	public static readonly RULE_entityExpression = 98;
	public static readonly RULE_blockStatement = 99;
	public static readonly RULE_interfaceStatement = 100;
	public static readonly RULE_dataAssignExistExpression = 101;
	public static readonly RULE_existExpression = 102;
	public static readonly RULE_ifStatement = 103;
	public static readonly RULE_whileStatement = 104;
	public static readonly RULE_forStatement = 105;
	public static readonly RULE_nbt = 106;
	public static readonly RULE_json = 107;
	public static readonly RULE_nbtPath = 108;
	public static readonly RULE_snbtValue = 109;
	public static readonly RULE_snbt = 110;
	public static readonly RULE_nbtCompound = 111;
	public static readonly RULE_nbtPair = 112;
	public static readonly RULE_nbtList = 113;
	public static readonly RULE_nbtValue = 114;
	public static readonly RULE_nbtByteArr = 115;
	public static readonly RULE_nbtIntArr = 116;
	public static readonly RULE_nbtLongArr = 117;
	public static readonly RULE_nbtString = 118;
	public static readonly RULE_jsonTextValue = 119;
	public static readonly RULE_jsonText = 120;
	public static readonly RULE_jsonObj = 121;
	public static readonly RULE_jsonPair = 122;
	public static readonly RULE_jsonArr = 123;
	public static readonly RULE_jsonValue = 124;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"mcfFile", "fileStatementInner", "statementInner", "statement", "noInExecStatement", 
		"leagalCommand", "nameSpaceStatement", "nameSpaceSettings", "nameSpaceStatementInner", 
		"funcTagStatement", "funcTagSettings", "funcTagStatementInner", "funcStatement", 
		"funcImproveStatement", "funcImproveParam", "funcImproveStatementInner", 
		"returnStatement", "funcRunStatement", "funcImproveRunExpression", "funcImproveRunParam", 
		"execStatement", "execStoreChild", "execRunChild", "execChild", "matchPart", 
		"dataIdentifier", "dataMergeExpression", "dataOperationExpression", "scbOperationExpression", 
		"scbSingleOperationExpression", "scbIdentifier", "pos3Identifier", "pos2Identifier", 
		"pos5Identifier", "pos1", "blockIdentifier", "blockstate", "selector", 
		"nameSpace", "nameSpaceBlock", "nameSpaceFunc", "nameSpaceStorage", "nameSpaceBossbar", 
		"nameSpaceBiome", "nameSpaceDim", "nameSpacePredicate", "nameSpaceItem", 
		"nameSpaceLoot", "nameSpaceItemModifier", "tagNameSpace", "tagNameSpaceItem", 
		"tagNameSpaceBlock", "tagNameSpaceFunc", "tagNameSpaceEntity", "registerName", 
		"acceptableName", "criterion", "nbtName", "resourceLocation", "typeName", 
		"item_slot", "item_predicate", "block_predicate", "dataStatement", "scbPlayerStatement", 
		"scbPlayerStatementInner", "scbObjectiveStatement", "scbStatementInner", 
		"bossbarStatement", "bossbarStatementInner", "bossbarOperationExpression", 
		"titleStatement", "titleStatementInner", "titleSelectorStatementInner", 
		"titleIndependentStatementInner", "displayStatement", "displayStatementInner", 
		"displayIndependentStatementInner", "itemStatement", "lootStatement", 
		"lootStatementInner", "lootSelectorStatementInner", "lootIndependentStatementInnerGive", 
		"lootIndependentStatementInnerReplaceEntity", "lootSource", "itemStatementInner", 
		"itemSelectorStatementInner", "itemIndependentStatementInner", "giveAndClearIndependentStatementInner", 
		"attrStatement", "attrStatementInner", "attrIndependentStatementInner", 
		"entityStatement", "tagIndependentStatementInner", "effectIndependentStatementInner", 
		"tpIndependentStatementInner", "entityIndependentStatementInner", "entityStatementInner", 
		"entityExpression", "blockStatement", "interfaceStatement", "dataAssignExistExpression", 
		"existExpression", "ifStatement", "whileStatement", "forStatement", "nbt", 
		"json", "nbtPath", "snbtValue", "snbt", "nbtCompound", "nbtPair", "nbtList", 
		"nbtValue", "nbtByteArr", "nbtIntArr", "nbtLongArr", "nbtString", "jsonTextValue", 
		"jsonText", "jsonObj", "jsonPair", "jsonArr", "jsonValue",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'->'", "'namsp'", "'namespace'", "'['", "','", "']'", "'{'", 
		"'}'", "'func'", "'='", "'block'", "'storage'", "'bossbar'", "'biome'", 
		"'predicate'", "'dim'", "'dimension'", "'item'", "'loot'", "'item_modifier'", 
		"'default'", "'replace'", "'replaced'", "'tagged'", "'('", "')'", "'return'", 
		"'exec'", "'=>'", "'?=>'", "'*'", "'value'", "'max'", "'align'", "'anchored'", 
		"'eyes'", "'feet'", "'in'", "'as'", "'at'", "'facing'", "'positioned'", 
		"'pos'", "'rotated'", "'rot'", "'if'", "'unless'", "'entity'", "'score'", 
		"'blocks'", "'all'", "'masked'", "'data'", "'..'", "'::'", "'|='", "'..0'", 
		"'remove'", "'+='", "'-='", "'*='", "'/='", "'%='", "'><'", "'<<'", "'>>'", 
		"'reset'", "'enable'", "':='", "'/'", "'%'", "'+'", "'-'", "':'", "'<'", 
		"'>'", "'@'", "'#'", "'scb'", "'list'", "'.'", "'displayname'", "'rendertype'", 
		"'hearts'", "'integer'", "'display'", "'get'", "'player'", "'visible'", 
		"'set'", "'color'", "'blue'", "'green'", "'pink'", "'purple'", "'red'", 
		"'white'", "'yellow'", "'name'", "'players'", "'style'", "'notched_6'", 
		"'notched_10'", "'notched_12'", "'notched_20'", "'progress'", "'true'", 
		"'false'", "'title'", "'subtitle'", "'actionbar'", "'clear'", "'times'", 
		"'text'", "'give'", "'fish'", "'mainhand'", "'offhand'", "'kill'", "'mine'", 
		"'attr'", "'base'", "'*+'", "'tag'", "'add'", "'effect'", "'tp'", "'destroy'", 
		"'keep'", "'hollow'", "'outline'", "'force'", "'move'", "'normal'", "'filtered '", 
		"'interface'", "'!'", "'&'", "'|'", "'&&'", "'||'", "'else'", "'while'", 
		"'for'", "'[]'", "'n{'", "'n['", "'n[B;'", "'n[I;'", "'n[L;'", "'[B;'", 
		"'[I;'", "'[L;'", "'j{'", "'j['", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "CompareOperation", "Pos1", "Selector", 
		"Key", "NumberType", "AcceptableName", "NBTName", "UUID16_", "ByteNumber", 
		"ShortNumber", "LongNumber", "FloatNumber", "DoubleNumber", "STRING2", 
		"BOOL", "STRING", "NUMBER", "WS", "LeagalCommand", "LineComment", "BlockComment",
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
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__1) | (1 << JustMCFParser.T__2) | (1 << JustMCFParser.T__8))) !== 0)) {
				{
				{
				this.state = 250;
				this.fileStatementInner();
				}
				}
				this.state = 255;
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
			this.state = 258;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__1:
			case JustMCFParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 256;
				this.nameSpaceStatement();
				}
				break;
			case JustMCFParser.T__8:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 257;
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
			this.state = 262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 260;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 261;
				this.noInExecStatement();
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
			this.state = 286;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 264;
				this.execStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 265;
				this.dataOperationExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 266;
				this.dataAssignExistExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 267;
				this.scbOperationExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 268;
				this.bossbarOperationExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 269;
				this.entityExpression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 270;
				this.dataStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 271;
				this.scbPlayerStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 272;
				this.scbObjectiveStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 273;
				this.titleStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 274;
				this.displayStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 275;
				this.lootStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 276;
				this.itemStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 277;
				this.attrStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 278;
				this.entityStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 279;
				this.blockStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 280;
				this.ifStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 281;
				this.forStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 282;
				this.whileStatement();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 283;
				this.funcRunStatement();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 284;
				this.funcImproveRunExpression();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 285;
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
			this.state = 299;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				_localctx = new NoInExecStatementFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 288;
				this.funcStatement();
				}
				break;

			case 2:
				_localctx = new NoInExecStatementRunFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 289;
				(_localctx as NoInExecStatementRunFuncContext)._left = this.match(JustMCFParser.T__0);
				this.state = 290;
				this.funcStatement();
				}
				break;

			case 3:
				_localctx = new NoInExecStatementFuncImproveContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 291;
				this.funcImproveStatement();
				}
				break;

			case 4:
				_localctx = new NoInExecStatementNameSpaceContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 292;
				this.nameSpaceStatement();
				}
				break;

			case 5:
				_localctx = new NoInExecStatementStoreContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 293;
				this.statement();
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 294;
					this.execStoreChild();
					}
					}
					this.state = 297;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === JustMCFParser.T__28 || _la === JustMCFParser.T__29);
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
			this.state = 301;
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
			this.state = 303;
			_la = this._input.LA(1);
			if (!(_la === JustMCFParser.T__1 || _la === JustMCFParser.T__2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.Key - 160)) | (1 << (JustMCFParser.NumberType - 160)) | (1 << (JustMCFParser.AcceptableName - 160)))) !== 0)) {
				{
				this.state = 304;
				this.acceptableName();
				}
			}

			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__3) {
				{
				this.state = 307;
				this.match(JustMCFParser.T__3);
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__8) | (1 << JustMCFParser.T__10) | (1 << JustMCFParser.T__11) | (1 << JustMCFParser.T__12) | (1 << JustMCFParser.T__13) | (1 << JustMCFParser.T__14) | (1 << JustMCFParser.T__15) | (1 << JustMCFParser.T__16) | (1 << JustMCFParser.T__17) | (1 << JustMCFParser.T__18) | (1 << JustMCFParser.T__19) | (1 << JustMCFParser.T__20))) !== 0)) {
					{
					{
					this.state = 308;
					this.nameSpaceSettings();
					this.state = 310;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__4) {
						{
						this.state = 309;
						this.match(JustMCFParser.T__4);
						}
					}

					}
					}
					this.state = 316;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 317;
				this.match(JustMCFParser.T__5);
				}
			}

			this.state = 320;
			this.match(JustMCFParser.T__6);
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__8) {
				{
				{
				this.state = 321;
				this.nameSpaceStatementInner();
				}
				}
				this.state = 326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 327;
			this.match(JustMCFParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 363;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				_localctx = new NameSpaceSettingsFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 329;
				(_localctx as NameSpaceSettingsFuncContext)._type = this.match(JustMCFParser.T__8);
				this.state = 330;
				this.match(JustMCFParser.T__9);
				this.state = 331;
				this.acceptableName();
				}
				break;

			case 2:
				_localctx = new NameSpaceSettingsBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 332;
				(_localctx as NameSpaceSettingsBlockContext)._type = this.match(JustMCFParser.T__10);
				this.state = 333;
				this.match(JustMCFParser.T__9);
				this.state = 334;
				this.acceptableName();
				}
				break;

			case 3:
				_localctx = new NameSpaceSettingsStorageContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 335;
				(_localctx as NameSpaceSettingsStorageContext)._type = this.match(JustMCFParser.T__11);
				this.state = 336;
				this.match(JustMCFParser.T__9);
				this.state = 337;
				this.acceptableName();
				}
				break;

			case 4:
				_localctx = new NameSpaceSettingsBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 338;
				(_localctx as NameSpaceSettingsBossbarContext)._type = this.match(JustMCFParser.T__12);
				this.state = 339;
				this.match(JustMCFParser.T__9);
				this.state = 340;
				this.acceptableName();
				}
				break;

			case 5:
				_localctx = new NameSpaceSettingsBiomeContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 341;
				(_localctx as NameSpaceSettingsBiomeContext)._type = this.match(JustMCFParser.T__13);
				this.state = 342;
				this.match(JustMCFParser.T__9);
				this.state = 343;
				this.acceptableName();
				}
				break;

			case 6:
				_localctx = new NameSpaceSettingsPredicateContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 344;
				(_localctx as NameSpaceSettingsPredicateContext)._type = this.match(JustMCFParser.T__14);
				this.state = 345;
				this.match(JustMCFParser.T__9);
				this.state = 346;
				this.acceptableName();
				}
				break;

			case 7:
				_localctx = new NameSpaceSettingsDimContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 347;
				(_localctx as NameSpaceSettingsDimContext)._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__15 || _la === JustMCFParser.T__16)) {
					(_localctx as NameSpaceSettingsDimContext)._type = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 348;
				this.match(JustMCFParser.T__9);
				this.state = 349;
				this.acceptableName();
				}
				break;

			case 8:
				_localctx = new NameSpaceSettingsItemContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 350;
				(_localctx as NameSpaceSettingsItemContext)._type = this.match(JustMCFParser.T__17);
				this.state = 351;
				this.match(JustMCFParser.T__9);
				this.state = 352;
				this.acceptableName();
				}
				break;

			case 9:
				_localctx = new NameSpaceSettingsLootContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 353;
				(_localctx as NameSpaceSettingsLootContext)._type = this.match(JustMCFParser.T__18);
				this.state = 354;
				this.match(JustMCFParser.T__9);
				this.state = 355;
				this.acceptableName();
				}
				break;

			case 10:
				_localctx = new NameSpaceSettingsItemModifierContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 356;
				(_localctx as NameSpaceSettingsItemModifierContext)._type = this.match(JustMCFParser.T__19);
				this.state = 357;
				this.match(JustMCFParser.T__9);
				this.state = 358;
				this.acceptableName();
				}
				break;

			case 11:
				_localctx = new NameSpaceSettingsDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 359;
				(_localctx as NameSpaceSettingsDefaultContext)._type = this.match(JustMCFParser.T__20);
				this.state = 360;
				this.match(JustMCFParser.T__9);
				this.state = 361;
				this.acceptableName();
				}
				break;

			case 12:
				_localctx = new NameSpaceSettingsJustDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 362;
				(_localctx as NameSpaceSettingsJustDefaultContext)._type = this.match(JustMCFParser.T__20);
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
			this.state = 367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 365;
				this.funcTagStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 366;
				this.funcTagStatementInner();
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
			this.state = 369;
			this.match(JustMCFParser.T__8);
			this.state = 370;
			this.tagNameSpaceFunc();
			this.state = 382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__3) {
				{
				this.state = 371;
				this.match(JustMCFParser.T__3);
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__21 || _la === JustMCFParser.T__22) {
					{
					{
					this.state = 372;
					this.funcTagSettings();
					this.state = 374;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__4) {
						{
						this.state = 373;
						this.match(JustMCFParser.T__4);
						}
					}

					}
					}
					this.state = 380;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 381;
				this.match(JustMCFParser.T__5);
				}
			}

			this.state = 384;
			this.match(JustMCFParser.T__6);
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__8) {
				{
				{
				this.state = 385;
				this.funcTagStatementInner();
				}
				}
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 391;
			this.match(JustMCFParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 397;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__21:
				_localctx = new FuncTagSettingsReplaceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 393;
				this.match(JustMCFParser.T__21);
				this.state = 394;
				this.match(JustMCFParser.T__9);
				this.state = 395;
				this.match(JustMCFParser.BOOL);
				}
				break;
			case JustMCFParser.T__22:
				_localctx = new FuncTagSettingsReplacedContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 396;
				this.match(JustMCFParser.T__22);
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
			this.state = 402;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				_localctx = new FuncTagSIFuncSContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 399;
				this.funcStatement();
				}
				break;

			case 2:
				_localctx = new FuncTagSIFuncImproveSContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 400;
				this.funcImproveStatement();
				}
				break;

			case 3:
				_localctx = new FuncTagSIFuncTagSContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 401;
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
			this.state = 404;
			this.match(JustMCFParser.T__8);
			this.state = 405;
			this.nameSpaceFunc();
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__23) {
				{
				this.state = 406;
				this.match(JustMCFParser.T__23);
				this.state = 407;
				this.tagNameSpaceFunc();
				this.state = 412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__4) {
					{
					{
					this.state = 408;
					this.match(JustMCFParser.T__4);
					this.state = 409;
					this.tagNameSpaceFunc();
					}
					}
					this.state = 414;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 417;
			this.match(JustMCFParser.T__6);
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__0) | (1 << JustMCFParser.T__1) | (1 << JustMCFParser.T__2) | (1 << JustMCFParser.T__6) | (1 << JustMCFParser.T__8) | (1 << JustMCFParser.T__12) | (1 << JustMCFParser.T__17) | (1 << JustMCFParser.T__18) | (1 << JustMCFParser.T__27))) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (JustMCFParser.T__45 - 46)) | (1 << (JustMCFParser.T__47 - 46)) | (1 << (JustMCFParser.T__52 - 46)) | (1 << (JustMCFParser.T__74 - 46)) | (1 << (JustMCFParser.T__76 - 46)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (JustMCFParser.T__77 - 78)) | (1 << (JustMCFParser.T__78 - 78)) | (1 << (JustMCFParser.T__85 - 78)) | (1 << (JustMCFParser.T__108 - 78)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (JustMCFParser.T__120 - 121)) | (1 << (JustMCFParser.T__142 - 121)) | (1 << (JustMCFParser.T__143 - 121)))) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (JustMCFParser.Selector - 159)) | (1 << (JustMCFParser.Key - 159)) | (1 << (JustMCFParser.NumberType - 159)) | (1 << (JustMCFParser.AcceptableName - 159)) | (1 << (JustMCFParser.NBTName - 159)) | (1 << (JustMCFParser.LeagalCommand - 159)))) !== 0)) {
				{
				{
				this.state = 418;
				this.statementInner();
				}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 424;
			this.match(JustMCFParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 426;
			this.match(JustMCFParser.T__8);
			this.state = 427;
			this.nameSpaceFunc();
			this.state = 428;
			this.match(JustMCFParser.T__24);
			this.state = 429;
			this.funcImproveParam();
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__4) {
				{
				{
				this.state = 430;
				this.match(JustMCFParser.T__4);
				this.state = 431;
				this.funcImproveParam();
				}
				}
				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 437;
			this.match(JustMCFParser.T__25);
			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.Key - 160)) | (1 << (JustMCFParser.NumberType - 160)) | (1 << (JustMCFParser.AcceptableName - 160)))) !== 0)) {
				{
				this.state = 438;
				this.typeName();
				}
			}

			this.state = 441;
			this.match(JustMCFParser.T__6);
			this.state = 445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__0) | (1 << JustMCFParser.T__1) | (1 << JustMCFParser.T__2) | (1 << JustMCFParser.T__6) | (1 << JustMCFParser.T__8) | (1 << JustMCFParser.T__12) | (1 << JustMCFParser.T__17) | (1 << JustMCFParser.T__18) | (1 << JustMCFParser.T__26) | (1 << JustMCFParser.T__27))) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (JustMCFParser.T__45 - 46)) | (1 << (JustMCFParser.T__47 - 46)) | (1 << (JustMCFParser.T__52 - 46)) | (1 << (JustMCFParser.T__74 - 46)) | (1 << (JustMCFParser.T__76 - 46)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (JustMCFParser.T__77 - 78)) | (1 << (JustMCFParser.T__78 - 78)) | (1 << (JustMCFParser.T__85 - 78)) | (1 << (JustMCFParser.T__108 - 78)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (JustMCFParser.T__120 - 121)) | (1 << (JustMCFParser.T__142 - 121)) | (1 << (JustMCFParser.T__143 - 121)))) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (JustMCFParser.Selector - 159)) | (1 << (JustMCFParser.Key - 159)) | (1 << (JustMCFParser.NumberType - 159)) | (1 << (JustMCFParser.AcceptableName - 159)) | (1 << (JustMCFParser.NBTName - 159)) | (1 << (JustMCFParser.LeagalCommand - 159)))) !== 0)) {
				{
				{
				this.state = 442;
				this.funcImproveStatementInner();
				}
				}
				this.state = 447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 448;
			this.match(JustMCFParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 451;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 450;
				this.typeName();
				}
				break;
			}
			this.state = 453;
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
			this.state = 457;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__0:
			case JustMCFParser.T__1:
			case JustMCFParser.T__2:
			case JustMCFParser.T__6:
			case JustMCFParser.T__8:
			case JustMCFParser.T__12:
			case JustMCFParser.T__17:
			case JustMCFParser.T__18:
			case JustMCFParser.T__27:
			case JustMCFParser.T__45:
			case JustMCFParser.T__47:
			case JustMCFParser.T__52:
			case JustMCFParser.T__74:
			case JustMCFParser.T__76:
			case JustMCFParser.T__77:
			case JustMCFParser.T__78:
			case JustMCFParser.T__85:
			case JustMCFParser.T__108:
			case JustMCFParser.T__120:
			case JustMCFParser.T__142:
			case JustMCFParser.T__143:
			case JustMCFParser.Selector:
			case JustMCFParser.Key:
			case JustMCFParser.NumberType:
			case JustMCFParser.AcceptableName:
			case JustMCFParser.NBTName:
			case JustMCFParser.LeagalCommand:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 455;
				this.statementInner();
				}
				break;
			case JustMCFParser.T__26:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 456;
				this.returnStatement();
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JustMCFParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this.match(JustMCFParser.T__26);
			this.state = 460;
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
			this.state = 466;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 462;
				this.match(JustMCFParser.T__8);
				this.state = 463;
				this.nameSpaceFunc();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 464;
				this.match(JustMCFParser.T__8);
				this.state = 465;
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
	public funcImproveRunExpression(): FuncImproveRunExpressionContext {
		let _localctx: FuncImproveRunExpressionContext = new FuncImproveRunExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, JustMCFParser.RULE_funcImproveRunExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.match(JustMCFParser.T__8);
			this.state = 469;
			this.nameSpaceFunc();
			this.state = 470;
			this.match(JustMCFParser.T__24);
			this.state = 471;
			this.funcImproveRunParam();
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__4) {
				{
				{
				this.state = 472;
				this.match(JustMCFParser.T__4);
				this.state = 473;
				this.funcImproveRunParam();
				}
				}
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 479;
			this.match(JustMCFParser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 38, JustMCFParser.RULE_funcImproveRunParam);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
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
		this.enterRule(_localctx, 40, JustMCFParser.RULE_execStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 519;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				_localctx = new ExecWithRunOrChildContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__27) {
					{
					this.state = 483;
					this.match(JustMCFParser.T__27);
					}
				}

				this.state = 486;
				this.match(JustMCFParser.T__6);
				this.state = 490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__10) | (1 << JustMCFParser.T__13) | (1 << JustMCFParser.T__14) | (1 << JustMCFParser.T__28) | (1 << JustMCFParser.T__29))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__34 - 34)) | (1 << (JustMCFParser.T__37 - 34)) | (1 << (JustMCFParser.T__38 - 34)) | (1 << (JustMCFParser.T__39 - 34)) | (1 << (JustMCFParser.T__40 - 34)) | (1 << (JustMCFParser.T__41 - 34)) | (1 << (JustMCFParser.T__42 - 34)) | (1 << (JustMCFParser.T__43 - 34)) | (1 << (JustMCFParser.T__44 - 34)) | (1 << (JustMCFParser.T__45 - 34)) | (1 << (JustMCFParser.T__46 - 34)) | (1 << (JustMCFParser.T__47 - 34)) | (1 << (JustMCFParser.T__48 - 34)) | (1 << (JustMCFParser.T__49 - 34)) | (1 << (JustMCFParser.T__52 - 34)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (JustMCFParser.T__74 - 75)) | (1 << (JustMCFParser.T__76 - 75)) | (1 << (JustMCFParser.T__77 - 75)))) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (JustMCFParser.Selector - 159)) | (1 << (JustMCFParser.Key - 159)) | (1 << (JustMCFParser.NumberType - 159)) | (1 << (JustMCFParser.AcceptableName - 159)) | (1 << (JustMCFParser.NBTName - 159)))) !== 0)) {
					{
					{
					this.state = 487;
					this.execChild();
					}
					}
					this.state = 492;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 493;
				this.match(JustMCFParser.T__7);
				this.state = 497;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 494;
						this.execStoreChild();
						}
						}
					}
					this.state = 499;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				}
				this.state = 502;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JustMCFParser.T__0:
					{
					this.state = 500;
					this.execRunChild();
					}
					break;
				case JustMCFParser.T__28:
				case JustMCFParser.T__29:
					{
					this.state = 501;
					this.execStoreChild();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 507;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 504;
						this.execStoreChild();
						}
						}
					}
					this.state = 509;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				}
				}
				break;

			case 2:
				_localctx = new ExecWithoutRunOrChildContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 510;
				this.match(JustMCFParser.T__27);
				this.state = 511;
				this.match(JustMCFParser.T__6);
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 512;
					this.execChild();
					}
					}
					this.state = 515;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__10) | (1 << JustMCFParser.T__13) | (1 << JustMCFParser.T__14) | (1 << JustMCFParser.T__28) | (1 << JustMCFParser.T__29))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__34 - 34)) | (1 << (JustMCFParser.T__37 - 34)) | (1 << (JustMCFParser.T__38 - 34)) | (1 << (JustMCFParser.T__39 - 34)) | (1 << (JustMCFParser.T__40 - 34)) | (1 << (JustMCFParser.T__41 - 34)) | (1 << (JustMCFParser.T__42 - 34)) | (1 << (JustMCFParser.T__43 - 34)) | (1 << (JustMCFParser.T__44 - 34)) | (1 << (JustMCFParser.T__45 - 34)) | (1 << (JustMCFParser.T__46 - 34)) | (1 << (JustMCFParser.T__47 - 34)) | (1 << (JustMCFParser.T__48 - 34)) | (1 << (JustMCFParser.T__49 - 34)) | (1 << (JustMCFParser.T__52 - 34)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (JustMCFParser.T__74 - 75)) | (1 << (JustMCFParser.T__76 - 75)) | (1 << (JustMCFParser.T__77 - 75)))) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (JustMCFParser.Selector - 159)) | (1 << (JustMCFParser.Key - 159)) | (1 << (JustMCFParser.NumberType - 159)) | (1 << (JustMCFParser.AcceptableName - 159)) | (1 << (JustMCFParser.NBTName - 159)))) !== 0));
				this.state = 517;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 42, JustMCFParser.RULE_execStoreChild);
		let _la: number;
		try {
			this.state = 555;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				_localctx = new ExecStoreResultScoreContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 521;
				this.match(JustMCFParser.T__28);
				this.state = 522;
				this.scbIdentifier();
				}
				break;

			case 2:
				_localctx = new ExecStoreSuccessScoreContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 523;
				this.match(JustMCFParser.T__29);
				this.state = 524;
				this.scbIdentifier();
				}
				break;

			case 3:
				_localctx = new ExecStoreResultDataContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 525;
				this.match(JustMCFParser.T__28);
				this.state = 526;
				this.dataIdentifier();
				this.state = 532;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 527;
					this.match(JustMCFParser.NumberType);
					this.state = 529;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__30) {
						{
						this.state = 528;
						this.match(JustMCFParser.T__30);
						}
					}

					this.state = 531;
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
				this.state = 534;
				this.match(JustMCFParser.T__29);
				this.state = 535;
				this.dataIdentifier();
				this.state = 541;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 536;
					this.match(JustMCFParser.NumberType);
					this.state = 538;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__30) {
						{
						this.state = 537;
						this.match(JustMCFParser.T__30);
						}
					}

					this.state = 540;
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
				this.state = 543;
				this.match(JustMCFParser.T__28);
				this.state = 544;
				this.match(JustMCFParser.T__12);
				this.state = 545;
				this.nameSpaceBossbar();
				this.state = 547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__31 || _la === JustMCFParser.T__32) {
					{
					this.state = 546;
					(_localctx as ExecStoreResultBossbarContext)._value = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__31 || _la === JustMCFParser.T__32)) {
						(_localctx as ExecStoreResultBossbarContext)._value = this._errHandler.recoverInline(this);
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

			case 6:
				_localctx = new ExecStoreSuccessBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 549;
				this.match(JustMCFParser.T__29);
				this.state = 550;
				this.match(JustMCFParser.T__12);
				this.state = 551;
				this.nameSpaceBossbar();
				this.state = 553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__31 || _la === JustMCFParser.T__32) {
					{
					this.state = 552;
					(_localctx as ExecStoreSuccessBossbarContext)._value = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__31 || _la === JustMCFParser.T__32)) {
						(_localctx as ExecStoreSuccessBossbarContext)._value = this._errHandler.recoverInline(this);
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
	public execRunChild(): ExecRunChildContext {
		let _localctx: ExecRunChildContext = new ExecRunChildContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, JustMCFParser.RULE_execRunChild);
		let _la: number;
		try {
			this.state = 573;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				_localctx = new ExecDirectRunContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 557;
				this.match(JustMCFParser.T__0);
				this.state = 558;
				this.statement();
				}
				break;

			case 2:
				_localctx = new ExecNamedRunContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 559;
				this.match(JustMCFParser.T__0);
				this.state = 560;
				this.funcStatement();
				}
				break;

			case 3:
				_localctx = new ExecAnonymousRunContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 561;
				this.match(JustMCFParser.T__0);
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__8) {
					{
					this.state = 562;
					this.match(JustMCFParser.T__8);
					}
				}

				this.state = 565;
				this.match(JustMCFParser.T__6);
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__0) | (1 << JustMCFParser.T__1) | (1 << JustMCFParser.T__2) | (1 << JustMCFParser.T__6) | (1 << JustMCFParser.T__8) | (1 << JustMCFParser.T__12) | (1 << JustMCFParser.T__17) | (1 << JustMCFParser.T__18) | (1 << JustMCFParser.T__27))) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (JustMCFParser.T__45 - 46)) | (1 << (JustMCFParser.T__47 - 46)) | (1 << (JustMCFParser.T__52 - 46)) | (1 << (JustMCFParser.T__74 - 46)) | (1 << (JustMCFParser.T__76 - 46)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (JustMCFParser.T__77 - 78)) | (1 << (JustMCFParser.T__78 - 78)) | (1 << (JustMCFParser.T__85 - 78)) | (1 << (JustMCFParser.T__108 - 78)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (JustMCFParser.T__120 - 121)) | (1 << (JustMCFParser.T__142 - 121)) | (1 << (JustMCFParser.T__143 - 121)))) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (JustMCFParser.Selector - 159)) | (1 << (JustMCFParser.Key - 159)) | (1 << (JustMCFParser.NumberType - 159)) | (1 << (JustMCFParser.AcceptableName - 159)) | (1 << (JustMCFParser.NBTName - 159)) | (1 << (JustMCFParser.LeagalCommand - 159)))) !== 0)) {
					{
					{
					this.state = 566;
					this.statementInner();
					}
					}
					this.state = 571;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 572;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 46, JustMCFParser.RULE_execChild);
		let _la: number;
		try {
			this.state = 667;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				_localctx = new ExecAlignContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 575;
				this.match(JustMCFParser.T__33);
				this.state = 576;
				this.match(JustMCFParser.AcceptableName);
				}
				break;

			case 2:
				_localctx = new ExecAnchoredContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 577;
				this.match(JustMCFParser.T__34);
				this.state = 578;
				(_localctx as ExecAnchoredContext)._anchor = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__35 || _la === JustMCFParser.T__36)) {
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
				this.state = 579;
				this.match(JustMCFParser.T__37);
				this.state = 580;
				this.nameSpaceDim();
				}
				break;

			case 4:
				_localctx = new ExecAsContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 581;
				this.match(JustMCFParser.T__38);
				this.state = 582;
				this.selector();
				}
				break;

			case 5:
				_localctx = new ExecAtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 583;
				this.match(JustMCFParser.T__39);
				this.state = 584;
				this.selector();
				}
				break;

			case 6:
				_localctx = new ExecFacingPosContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 585;
				this.match(JustMCFParser.T__40);
				this.state = 586;
				this.pos3Identifier();
				}
				break;

			case 7:
				_localctx = new ExecFacingEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 587;
				this.match(JustMCFParser.T__40);
				this.state = 588;
				this.selector();
				this.state = 589;
				(_localctx as ExecFacingEntityContext)._anchor = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__35 || _la === JustMCFParser.T__36)) {
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
				this.state = 591;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__41 || _la === JustMCFParser.T__42)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 592;
				this.pos3Identifier();
				}
				break;

			case 9:
				_localctx = new ExecPostionedAsContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 593;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__41 || _la === JustMCFParser.T__42)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 594;
				this.selector();
				}
				break;

			case 10:
				_localctx = new ExecRotatedPosContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 595;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__43 || _la === JustMCFParser.T__44)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 596;
				this.pos2Identifier();
				}
				break;

			case 11:
				_localctx = new ExecRotatedAsContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 597;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__43 || _la === JustMCFParser.T__44)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 598;
				this.selector();
				}
				break;

			case 12:
				_localctx = new ExecIfEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46) {
					{
					this.state = 599;
					(_localctx as ExecIfEntityContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46)) {
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

				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__47) {
					{
					this.state = 602;
					this.match(JustMCFParser.T__47);
					}
				}

				this.state = 605;
				this.selector();
				}
				break;

			case 13:
				_localctx = new ExecIfScoreContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46) {
					{
					this.state = 606;
					(_localctx as ExecIfScoreContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46)) {
						(_localctx as ExecIfScoreContext)._cond = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__48) {
					{
					this.state = 609;
					this.match(JustMCFParser.T__48);
					}
				}

				this.state = 612;
				this.scbIdentifier();
				this.state = 613;
				this.match(JustMCFParser.CompareOperation);
				this.state = 614;
				this.scbIdentifier();
				}
				break;

			case 14:
				_localctx = new ExecIfScoreMatchesContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46) {
					{
					this.state = 616;
					(_localctx as ExecIfScoreMatchesContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46)) {
						(_localctx as ExecIfScoreMatchesContext)._cond = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__48) {
					{
					this.state = 619;
					this.match(JustMCFParser.T__48);
					}
				}

				this.state = 622;
				this.scbIdentifier();
				this.state = 623;
				this.matchPart();
				}
				break;

			case 15:
				_localctx = new ExecPredicateContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46) {
					{
					this.state = 625;
					(_localctx as ExecPredicateContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46)) {
						(_localctx as ExecPredicateContext)._cond = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__14) {
					{
					this.state = 628;
					this.match(JustMCFParser.T__14);
					}
				}

				this.state = 631;
				this.nameSpacePredicate();
				}
				break;

			case 16:
				_localctx = new ExecIfBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46) {
					{
					this.state = 632;
					(_localctx as ExecIfBlockContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46)) {
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

				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__10) {
					{
					this.state = 635;
					this.match(JustMCFParser.T__10);
					}
				}

				this.state = 638;
				this.pos3Identifier();
				this.state = 639;
				this.blockIdentifier();
				}
				break;

			case 17:
				_localctx = new ExecIfBlocksContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46) {
					{
					this.state = 641;
					(_localctx as ExecIfBlocksContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46)) {
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

				this.state = 645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__49) {
					{
					this.state = 644;
					this.match(JustMCFParser.T__49);
					}
				}

				this.state = 647;
				this.pos3Identifier();
				this.state = 648;
				this.pos3Identifier();
				this.state = 649;
				this.pos3Identifier();
				this.state = 650;
				(_localctx as ExecIfBlocksContext)._scan_mode = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__50 || _la === JustMCFParser.T__51)) {
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

			case 18:
				_localctx = new ExecIfDataContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 653;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46) {
					{
					this.state = 652;
					(_localctx as ExecIfDataContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46)) {
						(_localctx as ExecIfDataContext)._cond = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 656;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__52) {
					{
					this.state = 655;
					this.match(JustMCFParser.T__52);
					}
				}

				this.state = 658;
				this.dataIdentifier();
				}
				break;

			case 19:
				_localctx = new ExecIfBiomeContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46) {
					{
					this.state = 659;
					(_localctx as ExecIfBiomeContext)._cond = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__45 || _la === JustMCFParser.T__46)) {
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

				this.state = 662;
				this.match(JustMCFParser.T__13);
				this.state = 663;
				this.pos3Identifier();
				this.state = 664;
				this.nameSpaceBiome();
				}
				break;

			case 20:
				_localctx = new ExecStoreContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 666;
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
		this.enterRule(_localctx, 48, JustMCFParser.RULE_matchPart);
		let _la: number;
		try {
			this.state = 677;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 669;
				this.match(JustMCFParser.NUMBER);
				this.state = 670;
				this.match(JustMCFParser.T__53);
				this.state = 672;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 671;
					this.match(JustMCFParser.NUMBER);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 674;
				this.match(JustMCFParser.T__53);
				this.state = 675;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 676;
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
	public dataIdentifier(): DataIdentifierContext {
		let _localctx: DataIdentifierContext = new DataIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, JustMCFParser.RULE_dataIdentifier);
		try {
			this.state = 691;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.Key:
			case JustMCFParser.NumberType:
			case JustMCFParser.AcceptableName:
				_localctx = new DataStorageContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 679;
				this.nameSpaceStorage();
				this.state = 680;
				this.match(JustMCFParser.T__54);
				this.state = 681;
				this.nbtPath();
				}
				break;
			case JustMCFParser.T__76:
			case JustMCFParser.T__77:
			case JustMCFParser.Selector:
				_localctx = new DataEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 683;
				this.selector();
				this.state = 684;
				this.match(JustMCFParser.T__54);
				this.state = 685;
				this.nbtPath();
				}
				break;
			case JustMCFParser.T__74:
				_localctx = new DataBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 687;
				this.pos3Identifier();
				this.state = 688;
				this.match(JustMCFParser.T__54);
				this.state = 689;
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
		this.enterRule(_localctx, 52, JustMCFParser.RULE_dataMergeExpression);
		try {
			this.state = 705;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.Key:
			case JustMCFParser.NumberType:
			case JustMCFParser.AcceptableName:
				_localctx = new DataMergeStorageContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 693;
				this.nameSpaceStorage();
				this.state = 694;
				this.match(JustMCFParser.T__55);
				this.state = 695;
				this.nbt();
				}
				break;
			case JustMCFParser.T__76:
			case JustMCFParser.T__77:
			case JustMCFParser.Selector:
				_localctx = new DataMergeEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 697;
				this.selector();
				this.state = 698;
				this.match(JustMCFParser.T__55);
				this.state = 699;
				this.nbt();
				}
				break;
			case JustMCFParser.T__74:
				_localctx = new DataMergeBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 701;
				this.pos3Identifier();
				this.state = 702;
				this.match(JustMCFParser.T__55);
				this.state = 703;
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
		this.enterRule(_localctx, 54, JustMCFParser.RULE_dataOperationExpression);
		try {
			this.state = 760;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				_localctx = new DataGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 707;
				this.dataIdentifier();
				}
				break;

			case 2:
				_localctx = new DataMergeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 708;
				this.dataMergeExpression();
				}
				break;

			case 3:
				_localctx = new DataModifyMergeValueContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 709;
				this.dataIdentifier();
				this.state = 710;
				this.match(JustMCFParser.T__55);
				this.state = 711;
				this.nbt();
				}
				break;

			case 4:
				_localctx = new DataModifyMergeFromContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 713;
				this.dataIdentifier();
				this.state = 714;
				this.match(JustMCFParser.T__55);
				this.state = 715;
				this.dataIdentifier();
				}
				break;

			case 5:
				_localctx = new DataModifySetValueContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 718;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 717;
					this.typeName();
					}
					break;
				}
				this.state = 720;
				this.dataIdentifier();
				this.state = 721;
				this.match(JustMCFParser.T__9);
				this.state = 722;
				this.nbt();
				}
				break;

			case 6:
				_localctx = new DataModifySetFromContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 725;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
				case 1:
					{
					this.state = 724;
					this.typeName();
					}
					break;
				}
				this.state = 727;
				this.dataIdentifier();
				this.state = 728;
				this.match(JustMCFParser.T__9);
				this.state = 729;
				this.dataIdentifier();
				}
				break;

			case 7:
				_localctx = new DataModifyAppendValueContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 731;
				this.dataIdentifier();
				this.state = 732;
				this.match(JustMCFParser.T__53);
				this.state = 733;
				this.nbt();
				}
				break;

			case 8:
				_localctx = new DataModifyAppendFromContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 735;
				this.dataIdentifier();
				this.state = 736;
				this.match(JustMCFParser.T__53);
				this.state = 737;
				this.dataIdentifier();
				}
				break;

			case 9:
				_localctx = new DataModifyPrependValueContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 739;
				this.dataIdentifier();
				this.state = 740;
				this.match(JustMCFParser.T__56);
				this.state = 741;
				this.nbt();
				}
				break;

			case 10:
				_localctx = new DataModifyPrependFromContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 743;
				this.dataIdentifier();
				this.state = 744;
				this.match(JustMCFParser.T__56);
				this.state = 745;
				this.dataIdentifier();
				}
				break;

			case 11:
				_localctx = new DataModifyInsertValueContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 747;
				this.dataIdentifier();
				this.state = 748;
				this.match(JustMCFParser.T__53);
				this.state = 749;
				this.match(JustMCFParser.NUMBER);
				this.state = 750;
				this.nbt();
				}
				break;

			case 12:
				_localctx = new DataModifyInsertFromContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 752;
				this.dataIdentifier();
				this.state = 753;
				this.match(JustMCFParser.T__53);
				this.state = 754;
				this.match(JustMCFParser.NUMBER);
				this.state = 755;
				this.dataIdentifier();
				}
				break;

			case 13:
				_localctx = new DataRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 757;
				this.dataIdentifier();
				this.state = 758;
				this.match(JustMCFParser.T__57);
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
		this.enterRule(_localctx, 56, JustMCFParser.RULE_scbOperationExpression);
		try {
			this.state = 821;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				_localctx = new ScbGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 762;
				this.scbIdentifier();
				}
				break;

			case 2:
				_localctx = new ScbAddContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 763;
				this.scbIdentifier();
				this.state = 764;
				this.match(JustMCFParser.T__58);
				this.state = 765;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 3:
				_localctx = new ScbRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 767;
				this.scbIdentifier();
				this.state = 768;
				this.match(JustMCFParser.T__59);
				this.state = 769;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 4:
				_localctx = new ScbSetContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 771;
				this.scbIdentifier();
				this.state = 772;
				this.match(JustMCFParser.T__9);
				this.state = 773;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 5:
				_localctx = new ScbOptAddAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 775;
				this.scbIdentifier();
				this.state = 776;
				this.match(JustMCFParser.T__58);
				this.state = 777;
				this.scbIdentifier();
				}
				break;

			case 6:
				_localctx = new ScbOptSubAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 779;
				this.scbIdentifier();
				this.state = 780;
				this.match(JustMCFParser.T__59);
				this.state = 781;
				this.scbIdentifier();
				}
				break;

			case 7:
				_localctx = new ScbOptMulAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 783;
				this.scbIdentifier();
				this.state = 784;
				this.match(JustMCFParser.T__60);
				this.state = 785;
				this.scbIdentifier();
				}
				break;

			case 8:
				_localctx = new ScbOptDivAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 787;
				this.scbIdentifier();
				this.state = 788;
				this.match(JustMCFParser.T__61);
				this.state = 789;
				this.scbIdentifier();
				}
				break;

			case 9:
				_localctx = new ScbOptModAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 791;
				this.scbIdentifier();
				this.state = 792;
				this.match(JustMCFParser.T__62);
				this.state = 793;
				this.scbIdentifier();
				}
				break;

			case 10:
				_localctx = new ScbOptExcFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 795;
				this.scbIdentifier();
				this.state = 796;
				this.match(JustMCFParser.T__63);
				this.state = 797;
				this.scbIdentifier();
				}
				break;

			case 11:
				_localctx = new ScbOptMinFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 799;
				this.scbIdentifier();
				this.state = 800;
				this.match(JustMCFParser.T__64);
				this.state = 801;
				this.scbIdentifier();
				}
				break;

			case 12:
				_localctx = new ScbOptMaxFuncContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 803;
				this.scbIdentifier();
				this.state = 804;
				this.match(JustMCFParser.T__65);
				this.state = 805;
				this.scbIdentifier();
				}
				break;

			case 13:
				_localctx = new ScbOptAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 807;
				this.scbIdentifier();
				this.state = 808;
				this.match(JustMCFParser.T__9);
				this.state = 809;
				this.scbIdentifier();
				}
				break;

			case 14:
				_localctx = new ScbResetContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 811;
				this.scbIdentifier();
				this.state = 812;
				this.match(JustMCFParser.T__66);
				}
				break;

			case 15:
				_localctx = new ScbEnableContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 814;
				this.scbIdentifier();
				this.state = 815;
				this.match(JustMCFParser.T__67);
				}
				break;

			case 16:
				_localctx = new ScbOptExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 817;
				this.scbIdentifier();
				this.state = 818;
				this.match(JustMCFParser.T__68);
				this.state = 819;
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
		let _startState: number = 58;
		this.enterRecursionRule(_localctx, 58, JustMCFParser.RULE_scbSingleOperationExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NUMBER:
				{
				_localctx = new ScbTempNumberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 824;
				this.match(JustMCFParser.NUMBER);
				}
				break;
			case JustMCFParser.T__76:
			case JustMCFParser.T__77:
			case JustMCFParser.Selector:
			case JustMCFParser.Key:
			case JustMCFParser.NumberType:
			case JustMCFParser.AcceptableName:
			case JustMCFParser.NBTName:
				{
				_localctx = new ScbIdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 825;
				this.scbIdentifier();
				}
				break;
			case JustMCFParser.T__24:
				{
				_localctx = new ScbParenExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 826;
				this.match(JustMCFParser.T__24);
				this.state = 827;
				this.scbSingleOperationExpression(0);
				this.state = 828;
				this.match(JustMCFParser.T__25);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 843;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 841;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
					case 1:
						{
						_localctx = new ScbFuncExpressionContext(new ScbSingleOperationExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
						this.state = 832;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 833;
						(_localctx as ScbFuncExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JustMCFParser.T__64 || _la === JustMCFParser.T__65)) {
							(_localctx as ScbFuncExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 834;
						this.scbSingleOperationExpression(7);
						}
						break;

					case 2:
						{
						_localctx = new ScbOptMulDivModExpressionContext(new ScbSingleOperationExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
						this.state = 835;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 836;
						(_localctx as ScbOptMulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JustMCFParser.T__30 || _la === JustMCFParser.T__69 || _la === JustMCFParser.T__70)) {
							(_localctx as ScbOptMulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 837;
						this.scbSingleOperationExpression(6);
						}
						break;

					case 3:
						{
						_localctx = new ScbOptAddSubExpressionContext(new ScbSingleOperationExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
						this.state = 838;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 839;
						(_localctx as ScbOptAddSubExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JustMCFParser.T__71 || _la === JustMCFParser.T__72)) {
							(_localctx as ScbOptAddSubExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 840;
						this.scbSingleOperationExpression(5);
						}
						break;
					}
					}
				}
				this.state = 845;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
		this.enterRule(_localctx, 60, JustMCFParser.RULE_scbIdentifier);
		try {
			this.state = 853;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.Key:
			case JustMCFParser.NumberType:
			case JustMCFParser.AcceptableName:
			case JustMCFParser.NBTName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 846;
				this.nbtName();
				this.state = 847;
				this.selector();
				}
				break;
			case JustMCFParser.T__76:
			case JustMCFParser.T__77:
			case JustMCFParser.Selector:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 849;
				this.selector();
				this.state = 850;
				this.match(JustMCFParser.T__73);
				this.state = 851;
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
	public pos3Identifier(): Pos3IdentifierContext {
		let _localctx: Pos3IdentifierContext = new Pos3IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, JustMCFParser.RULE_pos3Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			this.match(JustMCFParser.T__74);
			this.state = 856;
			this.pos1();
			this.state = 857;
			this.pos1();
			this.state = 858;
			this.pos1();
			this.state = 859;
			this.match(JustMCFParser.T__75);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 64, JustMCFParser.RULE_pos2Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this.match(JustMCFParser.T__74);
			this.state = 862;
			this.pos1();
			this.state = 863;
			this.pos1();
			this.state = 864;
			this.match(JustMCFParser.T__75);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 66, JustMCFParser.RULE_pos5Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 866;
			this.match(JustMCFParser.T__74);
			this.state = 867;
			this.pos1();
			this.state = 868;
			this.pos1();
			this.state = 869;
			this.pos1();
			this.state = 870;
			this.pos1();
			this.state = 871;
			this.pos1();
			this.state = 872;
			this.match(JustMCFParser.T__75);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 68, JustMCFParser.RULE_pos1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			_la = this._input.LA(1);
			if (!(_la === JustMCFParser.Pos1 || _la === JustMCFParser.NUMBER)) {
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
		this.enterRule(_localctx, 70, JustMCFParser.RULE_blockIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 876;
			this.nameSpaceBlock();
			this.state = 878;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__3) {
				{
				this.state = 877;
				this.blockstate();
				}
			}

			this.state = 881;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & ((1 << (JustMCFParser.T__145 - 146)) | (1 << (JustMCFParser.T__146 - 146)) | (1 << (JustMCFParser.T__147 - 146)) | (1 << (JustMCFParser.T__148 - 146)) | (1 << (JustMCFParser.T__149 - 146)) | (1 << (JustMCFParser.ByteNumber - 146)) | (1 << (JustMCFParser.ShortNumber - 146)) | (1 << (JustMCFParser.LongNumber - 146)) | (1 << (JustMCFParser.FloatNumber - 146)) | (1 << (JustMCFParser.DoubleNumber - 146)) | (1 << (JustMCFParser.STRING2 - 146)) | (1 << (JustMCFParser.STRING - 146)))) !== 0)) {
				{
				this.state = 880;
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
		this.enterRule(_localctx, 72, JustMCFParser.RULE_blockstate);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 883;
			this.match(JustMCFParser.T__3);
			this.state = 885;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 884;
					this.matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 887;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 889;
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
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, JustMCFParser.RULE_selector);
		try {
			let _alt: number;
			this.state = 906;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 891;
				this.match(JustMCFParser.Selector);
				this.state = 899;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 892;
					this.match(JustMCFParser.T__3);
					this.state = 894;
					this._errHandler.sync(this);
					_alt = 1 + 1;
					do {
						switch (_alt) {
						case 1 + 1:
							{
							{
							this.state = 893;
							this.matchWildcard();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 896;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
					} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 898;
					this.match(JustMCFParser.T__5);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 901;
				this.match(JustMCFParser.T__76);
				this.state = 902;
				this.nbtName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 903;
				this.match(JustMCFParser.T__77);
				this.state = 904;
				this.nbtName();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 905;
				this.match(JustMCFParser.T__77);
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
		this.enterRule(_localctx, 76, JustMCFParser.RULE_nameSpace);
		try {
			this.state = 913;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 908;
				this.acceptableName();
				this.state = 909;
				_localctx._op = this.match(JustMCFParser.T__73);
				this.state = 910;
				this.resourceLocation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 912;
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
		this.enterRule(_localctx, 78, JustMCFParser.RULE_nameSpaceBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 915;
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
		this.enterRule(_localctx, 80, JustMCFParser.RULE_nameSpaceFunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
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
		this.enterRule(_localctx, 82, JustMCFParser.RULE_nameSpaceStorage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 919;
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
		this.enterRule(_localctx, 84, JustMCFParser.RULE_nameSpaceBossbar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 921;
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
		this.enterRule(_localctx, 86, JustMCFParser.RULE_nameSpaceBiome);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 923;
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
		this.enterRule(_localctx, 88, JustMCFParser.RULE_nameSpaceDim);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 925;
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
		this.enterRule(_localctx, 90, JustMCFParser.RULE_nameSpacePredicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 927;
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
		this.enterRule(_localctx, 92, JustMCFParser.RULE_nameSpaceItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 929;
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
		this.enterRule(_localctx, 94, JustMCFParser.RULE_nameSpaceLoot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 931;
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
		this.enterRule(_localctx, 96, JustMCFParser.RULE_nameSpaceItemModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 933;
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
		this.enterRule(_localctx, 98, JustMCFParser.RULE_tagNameSpace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 935;
			this.match(JustMCFParser.T__77);
			this.state = 936;
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
		this.enterRule(_localctx, 100, JustMCFParser.RULE_tagNameSpaceItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 938;
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
		this.enterRule(_localctx, 102, JustMCFParser.RULE_tagNameSpaceBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 940;
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
		this.enterRule(_localctx, 104, JustMCFParser.RULE_tagNameSpaceFunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 942;
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
		this.enterRule(_localctx, 106, JustMCFParser.RULE_tagNameSpaceEntity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 944;
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
		this.enterRule(_localctx, 108, JustMCFParser.RULE_registerName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 949;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				{
				this.state = 946;
				this.acceptableName();
				this.state = 947;
				this.match(JustMCFParser.T__73);
				}
				break;
			}
			this.state = 951;
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
	public acceptableName(): AcceptableNameContext {
		let _localctx: AcceptableNameContext = new AcceptableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, JustMCFParser.RULE_acceptableName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 953;
			_la = this._input.LA(1);
			if (!(((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.Key - 160)) | (1 << (JustMCFParser.NumberType - 160)) | (1 << (JustMCFParser.AcceptableName - 160)))) !== 0))) {
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
	public criterion(): CriterionContext {
		let _localctx: CriterionContext = new CriterionContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, JustMCFParser.RULE_criterion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 955;
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
		this.enterRule(_localctx, 114, JustMCFParser.RULE_nbtName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 957;
			_la = this._input.LA(1);
			if (!(((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.Key - 160)) | (1 << (JustMCFParser.NumberType - 160)) | (1 << (JustMCFParser.AcceptableName - 160)) | (1 << (JustMCFParser.NBTName - 160)))) !== 0))) {
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
	public resourceLocation(): ResourceLocationContext {
		let _localctx: ResourceLocationContext = new ResourceLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, JustMCFParser.RULE_resourceLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 959;
			this.acceptableName();
			this.state = 964;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__69) {
				{
				{
				this.state = 960;
				this.match(JustMCFParser.T__69);
				this.state = 961;
				this.acceptableName();
				}
				}
				this.state = 966;
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
		this.enterRule(_localctx, 118, JustMCFParser.RULE_typeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 967;
				this.acceptableName();
				this.state = 968;
				this.match(JustMCFParser.T__73);
				}
				break;
			}
			this.state = 972;
			this.acceptableName();
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__3) {
				{
				this.state = 973;
				this.match(JustMCFParser.T__3);
				this.state = 974;
				this.match(JustMCFParser.T__5);
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
		this.enterRule(_localctx, 120, JustMCFParser.RULE_item_slot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 977;
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
		this.enterRule(_localctx, 122, JustMCFParser.RULE_item_predicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 981;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.Key:
			case JustMCFParser.NumberType:
			case JustMCFParser.AcceptableName:
				{
				this.state = 979;
				this.nameSpaceItem();
				}
				break;
			case JustMCFParser.T__77:
				{
				this.state = 980;
				this.tagNameSpaceItem();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 985;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 983;
				this.snbt();
				}
				break;

			case 2:
				{
				this.state = 984;
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
		this.enterRule(_localctx, 124, JustMCFParser.RULE_block_predicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 989;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.Key:
			case JustMCFParser.NumberType:
			case JustMCFParser.AcceptableName:
				{
				this.state = 987;
				this.nameSpaceBlock();
				}
				break;
			case JustMCFParser.T__77:
				{
				this.state = 988;
				this.tagNameSpaceBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 992;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 991;
				this.blockstate();
				}
				break;
			}
			this.state = 996;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 994;
				this.snbt();
				}
				break;

			case 2:
				{
				this.state = 995;
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
	public dataStatement(): DataStatementContext {
		let _localctx: DataStatementContext = new DataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, JustMCFParser.RULE_dataStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 998;
			this.match(JustMCFParser.T__52);
			this.state = 999;
			this.match(JustMCFParser.T__6);
			this.state = 1003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (JustMCFParser.T__74 - 75)) | (1 << (JustMCFParser.T__76 - 75)) | (1 << (JustMCFParser.T__77 - 75)))) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (JustMCFParser.Selector - 159)) | (1 << (JustMCFParser.Key - 159)) | (1 << (JustMCFParser.NumberType - 159)) | (1 << (JustMCFParser.AcceptableName - 159)))) !== 0)) {
				{
				{
				this.state = 1000;
				this.dataOperationExpression();
				}
				}
				this.state = 1005;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1006;
			this.match(JustMCFParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 128, JustMCFParser.RULE_scbPlayerStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1008;
			this.match(JustMCFParser.T__78);
			this.state = 1009;
			this.match(JustMCFParser.T__6);
			this.state = 1013;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (JustMCFParser.T__76 - 77)) | (1 << (JustMCFParser.T__77 - 77)) | (1 << (JustMCFParser.T__79 - 77)))) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (JustMCFParser.Selector - 159)) | (1 << (JustMCFParser.Key - 159)) | (1 << (JustMCFParser.NumberType - 159)) | (1 << (JustMCFParser.AcceptableName - 159)) | (1 << (JustMCFParser.NBTName - 159)))) !== 0)) {
				{
				{
				this.state = 1010;
				this.scbPlayerStatementInner();
				}
				}
				this.state = 1015;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1016;
			this.match(JustMCFParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 130, JustMCFParser.RULE_scbPlayerStatementInner);
		let _la: number;
		try {
			this.state = 1023;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				_localctx = new ScbPlayerSIScbOperationExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1018;
				this.scbOperationExpression();
				}
				break;

			case 2:
				_localctx = new ScbPlayerSIScbListContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1020;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__76 || _la === JustMCFParser.T__77 || _la === JustMCFParser.Selector) {
					{
					this.state = 1019;
					this.selector();
					}
				}

				this.state = 1022;
				this.match(JustMCFParser.T__79);
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
		this.enterRule(_localctx, 132, JustMCFParser.RULE_scbObjectiveStatement);
		let _la: number;
		try {
			this.state = 1089;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				_localctx = new ScbObjSDeclareWithNameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1025;
				this.match(JustMCFParser.T__78);
				this.state = 1030;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__24) {
					{
					this.state = 1026;
					this.match(JustMCFParser.T__24);
					this.state = 1027;
					this.criterion();
					this.state = 1028;
					this.match(JustMCFParser.T__25);
					}
				}

				this.state = 1032;
				this.acceptableName();
				this.state = 1033;
				(_localctx as ScbObjSDeclareWithNameContext)._display = this.json();
				this.state = 1045;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
				case 1:
					{
					this.state = 1034;
					this.match(JustMCFParser.T__6);
					this.state = 1041;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (JustMCFParser.T__57 - 58)) | (1 << (JustMCFParser.T__80 - 58)) | (1 << (JustMCFParser.T__81 - 58)) | (1 << (JustMCFParser.T__82 - 58)) | (1 << (JustMCFParser.T__85 - 58)))) !== 0)) {
						{
						{
						this.state = 1036;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__80) {
							{
							this.state = 1035;
							this.match(JustMCFParser.T__80);
							}
						}

						this.state = 1038;
						this.scbStatementInner();
						}
						}
						this.state = 1043;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1044;
					this.match(JustMCFParser.T__7);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new ScbObjSDeclareSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1047;
				this.match(JustMCFParser.T__78);
				this.state = 1048;
				this.match(JustMCFParser.T__24);
				this.state = 1049;
				this.criterion();
				this.state = 1050;
				this.match(JustMCFParser.T__25);
				this.state = 1051;
				this.acceptableName();
				}
				break;

			case 3:
				_localctx = new ScbObjSDeclareDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1053;
				this.match(JustMCFParser.T__78);
				this.state = 1058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__24) {
					{
					this.state = 1054;
					this.match(JustMCFParser.T__24);
					this.state = 1055;
					this.criterion();
					this.state = 1056;
					this.match(JustMCFParser.T__25);
					}
				}

				this.state = 1060;
				this.acceptableName();
				this.state = 1061;
				this.match(JustMCFParser.T__20);
				this.state = 1073;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 1062;
					this.match(JustMCFParser.T__6);
					this.state = 1069;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (JustMCFParser.T__57 - 58)) | (1 << (JustMCFParser.T__80 - 58)) | (1 << (JustMCFParser.T__81 - 58)) | (1 << (JustMCFParser.T__82 - 58)) | (1 << (JustMCFParser.T__85 - 58)))) !== 0)) {
						{
						{
						this.state = 1064;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__80) {
							{
							this.state = 1063;
							this.match(JustMCFParser.T__80);
							}
						}

						this.state = 1066;
						this.scbStatementInner();
						}
						}
						this.state = 1071;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1072;
					this.match(JustMCFParser.T__7);
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new ScbObjSOperationContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1075;
				this.match(JustMCFParser.T__78);
				this.state = 1076;
				this.acceptableName();
				this.state = 1077;
				this.match(JustMCFParser.T__6);
				this.state = 1084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (JustMCFParser.T__57 - 58)) | (1 << (JustMCFParser.T__80 - 58)) | (1 << (JustMCFParser.T__81 - 58)) | (1 << (JustMCFParser.T__82 - 58)) | (1 << (JustMCFParser.T__85 - 58)))) !== 0)) {
					{
					{
					this.state = 1079;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__80) {
						{
						this.state = 1078;
						this.match(JustMCFParser.T__80);
						}
					}

					this.state = 1081;
					this.scbStatementInner();
					}
					}
					this.state = 1086;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1087;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 134, JustMCFParser.RULE_scbStatementInner);
		let _la: number;
		try {
			this.state = 1098;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__57:
				_localctx = new ScbSIRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1091;
				this.match(JustMCFParser.T__57);
				}
				break;
			case JustMCFParser.T__81:
				_localctx = new ScbSIDisplaynameContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1092;
				this.match(JustMCFParser.T__81);
				this.state = 1093;
				this.json();
				}
				break;
			case JustMCFParser.T__82:
				_localctx = new ScbSIRendertypeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1094;
				this.match(JustMCFParser.T__82);
				this.state = 1095;
				(_localctx as ScbSIRendertypeContext)._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__83 || _la === JustMCFParser.T__84)) {
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
			case JustMCFParser.T__85:
				_localctx = new ScbSIDisplayContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1096;
				this.match(JustMCFParser.T__85);
				this.state = 1097;
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
		this.enterRule(_localctx, 136, JustMCFParser.RULE_bossbarStatement);
		let _la: number;
		try {
			this.state = 1130;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				_localctx = new BossbarSDeclareContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1100;
				this.match(JustMCFParser.T__12);
				this.state = 1101;
				this.nameSpaceBossbar();
				this.state = 1102;
				this.json();
				this.state = 1114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__6) {
					{
					this.state = 1103;
					this.match(JustMCFParser.T__6);
					this.state = 1110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JustMCFParser.T__31 - 32)) | (1 << (JustMCFParser.T__32 - 32)) | (1 << (JustMCFParser.T__57 - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (JustMCFParser.T__80 - 81)) | (1 << (JustMCFParser.T__86 - 81)) | (1 << (JustMCFParser.T__87 - 81)) | (1 << (JustMCFParser.T__88 - 81)) | (1 << (JustMCFParser.T__89 - 81)) | (1 << (JustMCFParser.T__90 - 81)) | (1 << (JustMCFParser.T__98 - 81)) | (1 << (JustMCFParser.T__99 - 81)) | (1 << (JustMCFParser.T__100 - 81)))) !== 0)) {
						{
						{
						this.state = 1105;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JustMCFParser.T__80) {
							{
							this.state = 1104;
							this.match(JustMCFParser.T__80);
							}
						}

						this.state = 1107;
						this.bossbarStatementInner();
						}
						}
						this.state = 1112;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1113;
					this.match(JustMCFParser.T__7);
					}
				}

				}
				break;

			case 2:
				_localctx = new BossbarSOperationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1116;
				this.match(JustMCFParser.T__12);
				this.state = 1117;
				this.nameSpaceBossbar();
				this.state = 1118;
				this.match(JustMCFParser.T__6);
				this.state = 1125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JustMCFParser.T__31 - 32)) | (1 << (JustMCFParser.T__32 - 32)) | (1 << (JustMCFParser.T__57 - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (JustMCFParser.T__80 - 81)) | (1 << (JustMCFParser.T__86 - 81)) | (1 << (JustMCFParser.T__87 - 81)) | (1 << (JustMCFParser.T__88 - 81)) | (1 << (JustMCFParser.T__89 - 81)) | (1 << (JustMCFParser.T__90 - 81)) | (1 << (JustMCFParser.T__98 - 81)) | (1 << (JustMCFParser.T__99 - 81)) | (1 << (JustMCFParser.T__100 - 81)))) !== 0)) {
					{
					{
					this.state = 1120;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__80) {
						{
						this.state = 1119;
						this.match(JustMCFParser.T__80);
						}
					}

					this.state = 1122;
					this.bossbarStatementInner();
					}
					}
					this.state = 1127;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1128;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 138, JustMCFParser.RULE_bossbarStatementInner);
		let _la: number;
		try {
			this.state = 1177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				_localctx = new BossbarSIGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__86) {
					{
					this.state = 1132;
					this.match(JustMCFParser.T__86);
					}
				}

				this.state = 1135;
				(_localctx as BossbarSIGetContext)._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__31 || _la === JustMCFParser.T__32 || _la === JustMCFParser.T__87 || _la === JustMCFParser.T__88)) {
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
				this.state = 1136;
				this.match(JustMCFParser.T__57);
				}
				break;

			case 3:
				_localctx = new BossbarSISetColorContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__89) {
					{
					this.state = 1137;
					this.match(JustMCFParser.T__89);
					}
				}

				this.state = 1140;
				this.match(JustMCFParser.T__90);
				this.state = 1141;
				(_localctx as BossbarSISetColorContext)._color = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (JustMCFParser.T__91 - 92)) | (1 << (JustMCFParser.T__92 - 92)) | (1 << (JustMCFParser.T__93 - 92)) | (1 << (JustMCFParser.T__94 - 92)) | (1 << (JustMCFParser.T__95 - 92)) | (1 << (JustMCFParser.T__96 - 92)) | (1 << (JustMCFParser.T__97 - 92)))) !== 0))) {
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
				this.state = 1143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__89) {
					{
					this.state = 1142;
					this.match(JustMCFParser.T__89);
					}
				}

				this.state = 1145;
				this.match(JustMCFParser.T__32);
				this.state = 1146;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 5:
				_localctx = new BossbarSISetNameContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__89) {
					{
					this.state = 1147;
					this.match(JustMCFParser.T__89);
					}
				}

				this.state = 1150;
				this.match(JustMCFParser.T__98);
				this.state = 1151;
				this.json();
				}
				break;

			case 6:
				_localctx = new BossbarSISetPlayerContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__89) {
					{
					this.state = 1152;
					this.match(JustMCFParser.T__89);
					}
				}

				this.state = 1155;
				this.match(JustMCFParser.T__99);
				this.state = 1156;
				this.selector();
				}
				break;

			case 7:
				_localctx = new BossbarSISetPlayerNullContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__89) {
					{
					this.state = 1157;
					this.match(JustMCFParser.T__89);
					}
				}

				this.state = 1160;
				this.match(JustMCFParser.T__99);
				this.state = 1161;
				this.match(JustMCFParser.T__20);
				}
				break;

			case 8:
				_localctx = new BossbarSISetStyleContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__89) {
					{
					this.state = 1162;
					this.match(JustMCFParser.T__89);
					}
				}

				this.state = 1165;
				this.match(JustMCFParser.T__100);
				this.state = 1166;
				(_localctx as BossbarSISetStyleContext)._style = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JustMCFParser.T__101 - 102)) | (1 << (JustMCFParser.T__102 - 102)) | (1 << (JustMCFParser.T__103 - 102)) | (1 << (JustMCFParser.T__104 - 102)) | (1 << (JustMCFParser.T__105 - 102)))) !== 0))) {
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
				this.state = 1168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__89) {
					{
					this.state = 1167;
					this.match(JustMCFParser.T__89);
					}
				}

				this.state = 1170;
				this.match(JustMCFParser.T__31);
				this.state = 1171;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 10:
				_localctx = new BossbarSISetVisibleContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__89) {
					{
					this.state = 1172;
					this.match(JustMCFParser.T__89);
					}
				}

				this.state = 1175;
				this.match(JustMCFParser.T__88);
				this.state = 1176;
				(_localctx as BossbarSISetVisibleContext)._bool = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__106 || _la === JustMCFParser.T__107)) {
					(_localctx as BossbarSISetVisibleContext)._bool = this._errHandler.recoverInline(this);
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 140, JustMCFParser.RULE_bossbarOperationExpression);
		let _la: number;
		try {
			this.state = 1198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				_localctx = new BossbarOpExprGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1179;
				this.match(JustMCFParser.T__12);
				this.state = 1180;
				this.nameSpaceBossbar();
				this.state = 1182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__31 || _la === JustMCFParser.T__32 || _la === JustMCFParser.T__87 || _la === JustMCFParser.T__88) {
					{
					this.state = 1181;
					(_localctx as BossbarOpExprGetContext)._type = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__31 || _la === JustMCFParser.T__32 || _la === JustMCFParser.T__87 || _la === JustMCFParser.T__88)) {
						(_localctx as BossbarOpExprGetContext)._type = this._errHandler.recoverInline(this);
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
				_localctx = new BossbarOpExprAssignValueContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1184;
				this.match(JustMCFParser.T__12);
				this.state = 1185;
				this.nameSpaceBossbar();
				this.state = 1187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__31) {
					{
					this.state = 1186;
					this.match(JustMCFParser.T__31);
					}
				}

				this.state = 1189;
				this.match(JustMCFParser.T__9);
				this.state = 1190;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 3:
				_localctx = new BossbarOpExprAssignMaxContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1192;
				this.match(JustMCFParser.T__12);
				this.state = 1193;
				this.nameSpaceBossbar();
				this.state = 1194;
				this.match(JustMCFParser.T__32);
				this.state = 1195;
				this.match(JustMCFParser.T__9);
				this.state = 1196;
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
		this.enterRule(_localctx, 142, JustMCFParser.RULE_titleStatement);
		let _la: number;
		try {
			this.state = 1223;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				_localctx = new TitleSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1200;
				this.match(JustMCFParser.T__108);
				this.state = 1201;
				this.match(JustMCFParser.T__6);
				this.state = 1205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__76 || _la === JustMCFParser.T__77 || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1202;
					this.titleStatementInner();
					}
					}
					this.state = 1207;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1208;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 2:
				_localctx = new TitleSSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1209;
				this.match(JustMCFParser.T__108);
				this.state = 1210;
				this.selector();
				this.state = 1211;
				this.match(JustMCFParser.T__6);
				this.state = 1218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__66 || _la === JustMCFParser.T__80 || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (JustMCFParser.T__108 - 109)) | (1 << (JustMCFParser.T__109 - 109)) | (1 << (JustMCFParser.T__110 - 109)) | (1 << (JustMCFParser.T__111 - 109)) | (1 << (JustMCFParser.T__112 - 109)))) !== 0)) {
					{
					{
					this.state = 1213;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__80) {
						{
						this.state = 1212;
						this.match(JustMCFParser.T__80);
						}
					}

					this.state = 1215;
					this.titleSelectorStatementInner();
					}
					}
					this.state = 1220;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1221;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 144, JustMCFParser.RULE_titleStatementInner);
		let _la: number;
		try {
			this.state = 1242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				_localctx = new TitleSISelectorSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1225;
				this.selector();
				this.state = 1226;
				this.match(JustMCFParser.T__80);
				this.state = 1227;
				this.titleIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new TitleSISelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1229;
				this.selector();
				this.state = 1230;
				this.match(JustMCFParser.T__6);
				this.state = 1237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__66 || _la === JustMCFParser.T__80 || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (JustMCFParser.T__108 - 109)) | (1 << (JustMCFParser.T__109 - 109)) | (1 << (JustMCFParser.T__110 - 109)) | (1 << (JustMCFParser.T__111 - 109)) | (1 << (JustMCFParser.T__112 - 109)))) !== 0)) {
					{
					{
					this.state = 1232;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__80) {
						{
						this.state = 1231;
						this.match(JustMCFParser.T__80);
						}
					}

					this.state = 1234;
					this.titleSelectorStatementInner();
					}
					}
					this.state = 1239;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1240;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 146, JustMCFParser.RULE_titleSelectorStatementInner);
		let _la: number;
		try {
			this.state = 1252;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__108:
			case JustMCFParser.T__109:
			case JustMCFParser.T__110:
				_localctx = new TitleSSIJsonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1244;
				(_localctx as TitleSSIJsonContext)._pos = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (JustMCFParser.T__108 - 109)) | (1 << (JustMCFParser.T__109 - 109)) | (1 << (JustMCFParser.T__110 - 109)))) !== 0))) {
					(_localctx as TitleSSIJsonContext)._pos = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1245;
				this.json();
				}
				break;
			case JustMCFParser.T__111:
				_localctx = new TitleSSIClearContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1246;
				this.match(JustMCFParser.T__111);
				}
				break;
			case JustMCFParser.T__66:
				_localctx = new TitleSSIResetContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1247;
				this.match(JustMCFParser.T__66);
				}
				break;
			case JustMCFParser.T__112:
				_localctx = new TitleSSITimesContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1248;
				this.match(JustMCFParser.T__112);
				this.state = 1249;
				this.match(JustMCFParser.NUMBER);
				this.state = 1250;
				this.match(JustMCFParser.NUMBER);
				this.state = 1251;
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
		this.enterRule(_localctx, 148, JustMCFParser.RULE_titleIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				_localctx = new TitleISIJsonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1254;
				(_localctx as TitleISIJsonContext)._pos = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (JustMCFParser.T__108 - 109)) | (1 << (JustMCFParser.T__109 - 109)) | (1 << (JustMCFParser.T__110 - 109)))) !== 0))) {
					(_localctx as TitleISIJsonContext)._pos = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1255;
				this.json();
				}
				break;

			case 2:
				_localctx = new TitleISIClearContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1256;
				this.match(JustMCFParser.T__108);
				this.state = 1257;
				this.match(JustMCFParser.T__80);
				this.state = 1258;
				this.match(JustMCFParser.T__111);
				}
				break;

			case 3:
				_localctx = new TitleISIResetContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1259;
				this.match(JustMCFParser.T__108);
				this.state = 1260;
				this.match(JustMCFParser.T__80);
				this.state = 1261;
				this.match(JustMCFParser.T__66);
				}
				break;

			case 4:
				_localctx = new TitleISITimesContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1262;
				this.match(JustMCFParser.T__108);
				this.state = 1263;
				this.match(JustMCFParser.T__80);
				this.state = 1264;
				this.match(JustMCFParser.T__112);
				this.state = 1265;
				this.match(JustMCFParser.NUMBER);
				this.state = 1266;
				this.match(JustMCFParser.NUMBER);
				this.state = 1267;
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
		this.enterRule(_localctx, 150, JustMCFParser.RULE_displayStatement);
		let _la: number;
		try {
			this.state = 1293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				_localctx = new DisplaySCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1270;
				this.match(JustMCFParser.T__85);
				this.state = 1271;
				this.match(JustMCFParser.T__6);
				this.state = 1275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__12 || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (JustMCFParser.T__76 - 77)) | (1 << (JustMCFParser.T__77 - 77)) | (1 << (JustMCFParser.T__78 - 77)))) !== 0) || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1272;
					this.displayStatementInner();
					}
					}
					this.state = 1277;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1278;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 2:
				_localctx = new DisplaySSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1279;
				this.match(JustMCFParser.T__85);
				this.state = 1280;
				this.selector();
				this.state = 1281;
				this.match(JustMCFParser.T__6);
				this.state = 1288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__12 || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (JustMCFParser.T__80 - 81)) | (1 << (JustMCFParser.T__108 - 81)) | (1 << (JustMCFParser.T__109 - 81)) | (1 << (JustMCFParser.T__110 - 81)))) !== 0) || _la === JustMCFParser.T__113) {
					{
					{
					this.state = 1283;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__80) {
						{
						this.state = 1282;
						this.match(JustMCFParser.T__80);
						}
					}

					this.state = 1285;
					this.displayIndependentStatementInner();
					}
					}
					this.state = 1290;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1291;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 152, JustMCFParser.RULE_displayStatementInner);
		let _la: number;
		try {
			this.state = 1314;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				_localctx = new DisplaySIScbContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1295;
				this.scbObjectiveStatement();
				}
				break;

			case 2:
				_localctx = new DisplaySIBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1296;
				this.bossbarStatement();
				}
				break;

			case 3:
				_localctx = new DisplaySISelectorSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1297;
				this.selector();
				this.state = 1298;
				this.match(JustMCFParser.T__80);
				this.state = 1299;
				this.displayIndependentStatementInner();
				}
				break;

			case 4:
				_localctx = new DisplaySISelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1301;
				this.selector();
				this.state = 1302;
				this.match(JustMCFParser.T__6);
				this.state = 1309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__12 || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (JustMCFParser.T__80 - 81)) | (1 << (JustMCFParser.T__108 - 81)) | (1 << (JustMCFParser.T__109 - 81)) | (1 << (JustMCFParser.T__110 - 81)))) !== 0) || _la === JustMCFParser.T__113) {
					{
					{
					this.state = 1304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__80) {
						{
						this.state = 1303;
						this.match(JustMCFParser.T__80);
						}
					}

					this.state = 1306;
					this.displayIndependentStatementInner();
					}
					}
					this.state = 1311;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1312;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 154, JustMCFParser.RULE_displayIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1332;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				_localctx = new DisplayISITitleSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1316;
				this.titleIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new DisplayISITitleCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1317;
				this.match(JustMCFParser.T__108);
				this.state = 1318;
				this.match(JustMCFParser.T__6);
				this.state = 1322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__66 || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (JustMCFParser.T__108 - 109)) | (1 << (JustMCFParser.T__109 - 109)) | (1 << (JustMCFParser.T__110 - 109)) | (1 << (JustMCFParser.T__111 - 109)) | (1 << (JustMCFParser.T__112 - 109)))) !== 0)) {
					{
					{
					this.state = 1319;
					this.titleSelectorStatementInner();
					}
					}
					this.state = 1324;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1325;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 3:
				_localctx = new DisplayISITextContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1326;
				this.match(JustMCFParser.T__113);
				this.state = 1327;
				this.json();
				}
				break;

			case 4:
				_localctx = new DisplayISIBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1328;
				this.match(JustMCFParser.T__12);
				this.state = 1329;
				this.nameSpaceBossbar();
				this.state = 1330;
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
		this.enterRule(_localctx, 156, JustMCFParser.RULE_itemStatement);
		let _la: number;
		try {
			this.state = 1354;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				_localctx = new ItemSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1334;
				this.match(JustMCFParser.T__17);
				this.state = 1335;
				this.match(JustMCFParser.T__6);
				this.state = 1339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (JustMCFParser.T__74 - 75)) | (1 << (JustMCFParser.T__76 - 75)) | (1 << (JustMCFParser.T__77 - 75)))) !== 0) || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1336;
					this.itemStatementInner();
					}
					}
					this.state = 1341;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1342;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 2:
				_localctx = new ItemSSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1343;
				this.match(JustMCFParser.T__17);
				this.state = 1344;
				this.selector();
				this.state = 1345;
				this.match(JustMCFParser.T__6);
				this.state = 1349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__58 || _la === JustMCFParser.T__59 || _la === JustMCFParser.T__111 || _la === JustMCFParser.T__114 || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.Key - 160)) | (1 << (JustMCFParser.NumberType - 160)) | (1 << (JustMCFParser.AcceptableName - 160)))) !== 0)) {
					{
					{
					this.state = 1346;
					this.itemSelectorStatementInner();
					}
					}
					this.state = 1351;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1352;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 158, JustMCFParser.RULE_lootStatement);
		let _la: number;
		try {
			this.state = 1376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				_localctx = new LootSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1356;
				this.match(JustMCFParser.T__18);
				this.state = 1357;
				this.match(JustMCFParser.T__6);
				this.state = 1361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (JustMCFParser.T__74 - 75)) | (1 << (JustMCFParser.T__76 - 75)) | (1 << (JustMCFParser.T__77 - 75)))) !== 0) || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1358;
					this.lootStatementInner();
					}
					}
					this.state = 1363;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1364;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 2:
				_localctx = new LootSSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1365;
				this.match(JustMCFParser.T__18);
				this.state = 1366;
				this.selector();
				this.state = 1367;
				this.match(JustMCFParser.T__6);
				this.state = 1371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__58 || _la === JustMCFParser.T__114 || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.Key - 160)) | (1 << (JustMCFParser.NumberType - 160)) | (1 << (JustMCFParser.AcceptableName - 160)))) !== 0)) {
					{
					{
					this.state = 1368;
					this.lootSelectorStatementInner();
					}
					}
					this.state = 1373;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1374;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 160, JustMCFParser.RULE_lootStatementInner);
		let _la: number;
		try {
			this.state = 1407;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				_localctx = new LootSIInsertContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1378;
				this.pos3Identifier();
				this.state = 1379;
				this.match(JustMCFParser.T__58);
				this.state = 1380;
				this.lootSource();
				}
				break;

			case 2:
				_localctx = new LootSISpawnContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1382;
				this.pos3Identifier();
				this.state = 1383;
				this.match(JustMCFParser.T__9);
				this.state = 1384;
				this.lootSource();
				}
				break;

			case 3:
				_localctx = new LootSIReplaceBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1386;
				this.pos3Identifier();
				this.state = 1387;
				this.match(JustMCFParser.T__54);
				this.state = 1388;
				this.lootIndependentStatementInnerReplaceEntity();
				}
				break;

			case 4:
				_localctx = new LootSIGiveContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1390;
				this.selector();
				this.state = 1391;
				this.lootIndependentStatementInnerGive();
				}
				break;

			case 5:
				_localctx = new LootSIReplaceEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1393;
				this.selector();
				this.state = 1394;
				this.match(JustMCFParser.T__54);
				this.state = 1395;
				this.lootIndependentStatementInnerReplaceEntity();
				}
				break;

			case 6:
				_localctx = new LootSISelectorNestContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1397;
				this.selector();
				this.state = 1398;
				this.match(JustMCFParser.T__6);
				this.state = 1402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__58 || _la === JustMCFParser.T__114 || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.Key - 160)) | (1 << (JustMCFParser.NumberType - 160)) | (1 << (JustMCFParser.AcceptableName - 160)))) !== 0)) {
					{
					{
					this.state = 1399;
					this.lootSelectorStatementInner();
					}
					}
					this.state = 1404;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1405;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 162, JustMCFParser.RULE_lootSelectorStatementInner);
		try {
			this.state = 1411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__58:
			case JustMCFParser.T__114:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1409;
				this.lootIndependentStatementInnerGive();
				}
				break;
			case JustMCFParser.Key:
			case JustMCFParser.NumberType:
			case JustMCFParser.AcceptableName:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1410;
				this.lootIndependentStatementInnerReplaceEntity();
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
	public lootIndependentStatementInnerGive(): LootIndependentStatementInnerGiveContext {
		let _localctx: LootIndependentStatementInnerGiveContext = new LootIndependentStatementInnerGiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, JustMCFParser.RULE_lootIndependentStatementInnerGive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1413;
			_la = this._input.LA(1);
			if (!(_la === JustMCFParser.T__58 || _la === JustMCFParser.T__114)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1414;
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
		this.enterRule(_localctx, 166, JustMCFParser.RULE_lootIndependentStatementInnerReplaceEntity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1416;
			this.item_slot();
			this.state = 1417;
			this.match(JustMCFParser.T__9);
			this.state = 1418;
			this.lootSource();
			this.state = 1420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__30) {
				{
				this.state = 1419;
				this.match(JustMCFParser.T__30);
				}
			}

			this.state = 1423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.NUMBER) {
				{
				this.state = 1422;
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
		this.enterRule(_localctx, 168, JustMCFParser.RULE_lootSource);
		let _la: number;
		try {
			this.state = 1457;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				_localctx = new LootSourceFishHandContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1425;
				this.match(JustMCFParser.T__115);
				this.state = 1426;
				this.nameSpaceLoot();
				this.state = 1427;
				this.pos3Identifier();
				this.state = 1429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__116 || _la === JustMCFParser.T__117) {
					{
					this.state = 1428;
					(_localctx as LootSourceFishHandContext)._hand = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__116 || _la === JustMCFParser.T__117)) {
						(_localctx as LootSourceFishHandContext)._hand = this._errHandler.recoverInline(this);
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
				_localctx = new LootSourceFishToolContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1431;
				this.match(JustMCFParser.T__115);
				this.state = 1432;
				this.nameSpaceLoot();
				this.state = 1433;
				this.pos3Identifier();
				this.state = 1434;
				this.nameSpaceItem();
				}
				break;

			case 3:
				_localctx = new LootSourceLootContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__18) {
					{
					this.state = 1436;
					this.match(JustMCFParser.T__18);
					}
				}

				this.state = 1439;
				this.nameSpaceLoot();
				}
				break;

			case 4:
				_localctx = new LootSourceKillContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__118) {
					{
					this.state = 1440;
					this.match(JustMCFParser.T__118);
					}
				}

				this.state = 1443;
				this.selector();
				}
				break;

			case 5:
				_localctx = new LootSourceMineHandContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__119) {
					{
					this.state = 1444;
					this.match(JustMCFParser.T__119);
					}
				}

				this.state = 1447;
				this.pos3Identifier();
				this.state = 1449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__116 || _la === JustMCFParser.T__117) {
					{
					this.state = 1448;
					(_localctx as LootSourceMineHandContext)._hand = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__116 || _la === JustMCFParser.T__117)) {
						(_localctx as LootSourceMineHandContext)._hand = this._errHandler.recoverInline(this);
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

			case 6:
				_localctx = new LootSourceMineToolContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__119) {
					{
					this.state = 1451;
					this.match(JustMCFParser.T__119);
					}
				}

				this.state = 1454;
				this.pos3Identifier();
				this.state = 1455;
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
		this.enterRule(_localctx, 170, JustMCFParser.RULE_itemStatementInner);
		let _la: number;
		try {
			this.state = 1481;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				_localctx = new ItemSIGiveAndClearContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1459;
				this.selector();
				this.state = 1460;
				this.giveAndClearIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new ItemSIEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1462;
				this.selector();
				this.state = 1463;
				this.match(JustMCFParser.T__54);
				this.state = 1464;
				this.itemIndependentStatementInner();
				}
				break;

			case 3:
				_localctx = new ItemSIBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1466;
				this.pos3Identifier();
				this.state = 1467;
				this.match(JustMCFParser.T__54);
				this.state = 1468;
				this.itemIndependentStatementInner();
				}
				break;

			case 4:
				_localctx = new ItemSILootInnerContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1470;
				this.lootStatementInner();
				}
				break;

			case 5:
				_localctx = new ItemSISelectorNestContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1471;
				this.selector();
				this.state = 1472;
				this.match(JustMCFParser.T__6);
				this.state = 1476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__58 || _la === JustMCFParser.T__59 || _la === JustMCFParser.T__111 || _la === JustMCFParser.T__114 || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.Key - 160)) | (1 << (JustMCFParser.NumberType - 160)) | (1 << (JustMCFParser.AcceptableName - 160)))) !== 0)) {
					{
					{
					this.state = 1473;
					this.itemSelectorStatementInner();
					}
					}
					this.state = 1478;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1479;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 172, JustMCFParser.RULE_itemSelectorStatementInner);
		try {
			this.state = 1486;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				_localctx = new ItemSSIGiveAndClearContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1483;
				this.giveAndClearIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new ItemSSIItemContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1484;
				this.itemIndependentStatementInner();
				}
				break;

			case 3:
				_localctx = new ItemSSILootInnerContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1485;
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
		this.enterRule(_localctx, 174, JustMCFParser.RULE_itemIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1514;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				_localctx = new ItemISIReplaceWithContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1488;
				this.item_slot();
				this.state = 1489;
				this.match(JustMCFParser.T__9);
				this.state = 1490;
				this.nameSpaceItem();
				this.state = 1492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 1491;
					this.match(JustMCFParser.NUMBER);
					}
				}

				}
				break;

			case 2:
				_localctx = new ItemISIReplaceFromEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1494;
				this.item_slot();
				this.state = 1495;
				this.match(JustMCFParser.T__9);
				this.state = 1496;
				this.selector();
				this.state = 1497;
				this.match(JustMCFParser.T__54);
				this.state = 1498;
				this.item_slot();
				this.state = 1500;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
				case 1:
					{
					this.state = 1499;
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
				this.state = 1502;
				this.item_slot();
				this.state = 1503;
				this.match(JustMCFParser.T__9);
				this.state = 1504;
				this.pos3Identifier();
				this.state = 1505;
				this.match(JustMCFParser.T__54);
				this.state = 1506;
				this.item_slot();
				this.state = 1508;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
				case 1:
					{
					this.state = 1507;
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
				this.state = 1510;
				this.item_slot();
				this.state = 1511;
				this.match(JustMCFParser.T__58);
				this.state = 1512;
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
		this.enterRule(_localctx, 176, JustMCFParser.RULE_giveAndClearIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1526;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__58:
			case JustMCFParser.T__114:
				_localctx = new GiveISIContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1516;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__58 || _la === JustMCFParser.T__114)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1517;
				this.nameSpaceItem();
				this.state = 1519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 1518;
					this.match(JustMCFParser.NUMBER);
					}
				}

				}
				break;
			case JustMCFParser.T__59:
			case JustMCFParser.T__111:
				_localctx = new ClearISIContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1521;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__59 || _la === JustMCFParser.T__111)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1522;
				this.item_predicate();
				this.state = 1524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 1523;
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
		this.enterRule(_localctx, 178, JustMCFParser.RULE_attrStatement);
		let _la: number;
		try {
			this.state = 1548;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				_localctx = new AttrSCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1528;
				this.match(JustMCFParser.T__120);
				this.state = 1529;
				this.match(JustMCFParser.T__6);
				this.state = 1533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__76 || _la === JustMCFParser.T__77 || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1530;
					this.attrStatementInner();
					}
					}
					this.state = 1535;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1536;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 2:
				_localctx = new AttrSSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1537;
				this.match(JustMCFParser.T__120);
				this.state = 1538;
				this.selector();
				this.state = 1539;
				this.match(JustMCFParser.T__6);
				this.state = 1543;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.Key - 160)) | (1 << (JustMCFParser.NumberType - 160)) | (1 << (JustMCFParser.AcceptableName - 160)))) !== 0)) {
					{
					{
					this.state = 1540;
					this.attrIndependentStatementInner();
					}
					}
					this.state = 1545;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1546;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 180, JustMCFParser.RULE_attrStatementInner);
		let _la: number;
		try {
			this.state = 1564;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				_localctx = new AttrSISingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1550;
				this.selector();
				this.state = 1551;
				this.match(JustMCFParser.T__54);
				this.state = 1552;
				this.attrIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new AttrSISelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1554;
				this.selector();
				this.state = 1555;
				this.match(JustMCFParser.T__6);
				this.state = 1559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.Key - 160)) | (1 << (JustMCFParser.NumberType - 160)) | (1 << (JustMCFParser.AcceptableName - 160)))) !== 0)) {
					{
					{
					this.state = 1556;
					this.attrIndependentStatementInner();
					}
					}
					this.state = 1561;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1562;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 182, JustMCFParser.RULE_attrIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1610;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				_localctx = new AttrISIGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1566;
				this.registerName();
				this.state = 1568;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__50) {
					{
					this.state = 1567;
					this.match(JustMCFParser.T__50);
					}
				}

				this.state = 1574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__30 || _la === JustMCFParser.NUMBER) {
					{
					this.state = 1571;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__30) {
						{
						this.state = 1570;
						this.match(JustMCFParser.T__30);
						}
					}

					this.state = 1573;
					this.match(JustMCFParser.NUMBER);
					}
				}

				}
				break;

			case 2:
				_localctx = new AttrISIGetBaseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1576;
				this.registerName();
				this.state = 1577;
				this.match(JustMCFParser.T__121);
				this.state = 1582;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__30 || _la === JustMCFParser.NUMBER) {
					{
					this.state = 1579;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__30) {
						{
						this.state = 1578;
						this.match(JustMCFParser.T__30);
						}
					}

					this.state = 1581;
					this.match(JustMCFParser.NUMBER);
					}
				}

				}
				break;

			case 3:
				_localctx = new AttrISISetBaseContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1584;
				this.registerName();
				this.state = 1585;
				this.match(JustMCFParser.T__121);
				this.state = 1586;
				this.match(JustMCFParser.T__9);
				this.state = 1587;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 4:
				_localctx = new AttrISIModifierAddContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1589;
				this.registerName();
				this.state = 1590;
				this.match(JustMCFParser.T__58);
				this.state = 1591;
				this.match(JustMCFParser.UUID16_);
				this.state = 1592;
				this.acceptableName();
				this.state = 1593;
				this.match(JustMCFParser.T__24);
				this.state = 1594;
				(_localctx as AttrISIModifierAddContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__30 || _la === JustMCFParser.T__71 || _la === JustMCFParser.T__122)) {
					(_localctx as AttrISIModifierAddContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1595;
				this.match(JustMCFParser.NUMBER);
				this.state = 1596;
				this.match(JustMCFParser.T__25);
				}
				break;

			case 5:
				_localctx = new AttrISIModifierRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1598;
				this.registerName();
				this.state = 1599;
				this.match(JustMCFParser.T__59);
				this.state = 1600;
				this.match(JustMCFParser.UUID16_);
				}
				break;

			case 6:
				_localctx = new AttrISIModifierGetContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1602;
				this.registerName();
				this.state = 1603;
				this.match(JustMCFParser.UUID16_);
				this.state = 1608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__30 || _la === JustMCFParser.NUMBER) {
					{
					this.state = 1605;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JustMCFParser.T__30) {
						{
						this.state = 1604;
						this.match(JustMCFParser.T__30);
						}
					}

					this.state = 1607;
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
		this.enterRule(_localctx, 184, JustMCFParser.RULE_entityStatement);
		let _la: number;
		try {
			this.state = 1645;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				_localctx = new EntitySDeclarePlayerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1612;
				this.match(JustMCFParser.T__47);
				this.state = 1613;
				this.match(JustMCFParser.T__24);
				this.state = 1614;
				this.match(JustMCFParser.T__87);
				this.state = 1615;
				this.match(JustMCFParser.T__25);
				this.state = 1616;
				this.acceptableName();
				}
				break;

			case 2:
				_localctx = new EntitySDeclareContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1617;
				this.match(JustMCFParser.T__47);
				this.state = 1618;
				this.match(JustMCFParser.T__24);
				this.state = 1619;
				(_localctx as EntitySDeclareContext)._type = this.registerName();
				this.state = 1620;
				this.match(JustMCFParser.T__25);
				this.state = 1622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__74) {
					{
					this.state = 1621;
					this.pos3Identifier();
					}
				}

				this.state = 1624;
				this.acceptableName();
				this.state = 1626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & ((1 << (JustMCFParser.T__145 - 146)) | (1 << (JustMCFParser.T__146 - 146)) | (1 << (JustMCFParser.T__147 - 146)) | (1 << (JustMCFParser.T__148 - 146)) | (1 << (JustMCFParser.T__149 - 146)) | (1 << (JustMCFParser.ByteNumber - 146)) | (1 << (JustMCFParser.ShortNumber - 146)) | (1 << (JustMCFParser.LongNumber - 146)) | (1 << (JustMCFParser.FloatNumber - 146)) | (1 << (JustMCFParser.DoubleNumber - 146)) | (1 << (JustMCFParser.STRING2 - 146)) | (1 << (JustMCFParser.STRING - 146)))) !== 0)) {
					{
					this.state = 1625;
					this.nbt();
					}
				}

				}
				break;

			case 3:
				_localctx = new EntitySCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1628;
				this.match(JustMCFParser.T__47);
				this.state = 1629;
				this.match(JustMCFParser.T__6);
				this.state = 1633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__76 || _la === JustMCFParser.T__77 || _la === JustMCFParser.Selector) {
					{
					{
					this.state = 1630;
					this.entityStatementInner();
					}
					}
					this.state = 1635;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1636;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 4:
				_localctx = new EntitySSelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1637;
				this.match(JustMCFParser.T__47);
				this.state = 1638;
				this.selector();
				this.state = 1639;
				this.match(JustMCFParser.T__6);
				{
				this.state = 1640;
				this.match(JustMCFParser.T__80);
				this.state = 1641;
				this.entityIndependentStatementInner();
				}
				this.state = 1643;
				this.match(JustMCFParser.T__7);
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
	public tagIndependentStatementInner(): TagIndependentStatementInnerContext {
		let _localctx: TagIndependentStatementInnerContext = new TagIndependentStatementInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, JustMCFParser.RULE_tagIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1655;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				_localctx = new TagISIAddContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1647;
				this.match(JustMCFParser.T__123);
				this.state = 1648;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__58 || _la === JustMCFParser.T__124)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1649;
				this.acceptableName();
				}
				break;

			case 2:
				_localctx = new TagISIRemoveContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1650;
				this.match(JustMCFParser.T__123);
				this.state = 1651;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__57 || _la === JustMCFParser.T__59)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1652;
				this.acceptableName();
				}
				break;

			case 3:
				_localctx = new TagISIListContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1653;
				this.match(JustMCFParser.T__123);
				this.state = 1654;
				this.match(JustMCFParser.T__79);
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
		this.enterRule(_localctx, 188, JustMCFParser.RULE_effectIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1688;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				_localctx = new EffectISIGiveContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1657;
				this.match(JustMCFParser.T__125);
				this.state = 1658;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__58 || _la === JustMCFParser.T__114)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1659;
				this.acceptableName();
				}
				break;

			case 2:
				_localctx = new EffectISIClearContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1660;
				this.match(JustMCFParser.T__125);
				this.state = 1661;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__59 || _la === JustMCFParser.T__111)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1662;
				this.acceptableName();
				this.state = 1664;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
				case 1:
					{
					this.state = 1663;
					(_localctx as EffectISIClearContext)._second = this.match(JustMCFParser.NUMBER);
					}
					break;
				}
				this.state = 1667;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 1666;
					(_localctx as EffectISIClearContext)._amplifier = this.match(JustMCFParser.NUMBER);
					}
				}

				this.state = 1670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.BOOL) {
					{
					this.state = 1669;
					this.match(JustMCFParser.BOOL);
					}
				}

				}
				break;

			case 3:
				_localctx = new EffectISIClearSpContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1672;
				this.match(JustMCFParser.T__125);
				this.state = 1673;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__59 || _la === JustMCFParser.T__111)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1674;
				this.acceptableName();
				this.state = 1678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__24) {
					{
					this.state = 1675;
					this.match(JustMCFParser.T__24);
					this.state = 1676;
					(_localctx as EffectISIClearSpContext)._amplifier = this.match(JustMCFParser.NUMBER);
					this.state = 1677;
					this.match(JustMCFParser.T__25);
					}
				}

				this.state = 1681;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 1680;
					(_localctx as EffectISIClearSpContext)._second = this.match(JustMCFParser.NUMBER);
					}
				}

				this.state = 1684;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.BOOL) {
					{
					this.state = 1683;
					this.match(JustMCFParser.BOOL);
					}
				}

				}
				break;

			case 4:
				_localctx = new EffectISIClearAllContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1686;
				this.match(JustMCFParser.T__125);
				this.state = 1687;
				this.match(JustMCFParser.T__111);
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
		this.enterRule(_localctx, 190, JustMCFParser.RULE_tpIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1712;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				_localctx = new TpISIDestinationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1690;
				this.match(JustMCFParser.T__126);
				this.state = 1691;
				this.selector();
				}
				break;

			case 2:
				_localctx = new TpISIPosContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1692;
				this.match(JustMCFParser.T__126);
				this.state = 1693;
				this.pos3Identifier();
				}
				break;

			case 3:
				_localctx = new TpISIRotatedContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1694;
				this.match(JustMCFParser.T__126);
				this.state = 1695;
				this.pos5Identifier();
				}
				break;

			case 4:
				_localctx = new TpISIRotatedDivContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1696;
				this.match(JustMCFParser.T__126);
				this.state = 1697;
				this.pos3Identifier();
				this.state = 1698;
				this.pos2Identifier();
				}
				break;

			case 5:
				_localctx = new TpISIFacingContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1700;
				this.match(JustMCFParser.T__126);
				this.state = 1701;
				this.pos3Identifier();
				this.state = 1702;
				this.match(JustMCFParser.T__40);
				this.state = 1703;
				this.pos3Identifier();
				}
				break;

			case 6:
				_localctx = new TpISIFacingEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1705;
				this.match(JustMCFParser.T__126);
				this.state = 1706;
				this.pos3Identifier();
				this.state = 1707;
				this.match(JustMCFParser.T__40);
				this.state = 1708;
				this.selector();
				this.state = 1710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__35 || _la === JustMCFParser.T__36) {
					{
					this.state = 1709;
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__35 || _la === JustMCFParser.T__36)) {
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
		this.enterRule(_localctx, 192, JustMCFParser.RULE_entityIndependentStatementInner);
		let _la: number;
		try {
			this.state = 1777;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				_localctx = new EntityISIGiveAndClearContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1714;
				this.giveAndClearIndependentStatementInner();
				}
				break;

			case 2:
				_localctx = new EntityISIKillContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1715;
				this.match(JustMCFParser.T__118);
				}
				break;

			case 3:
				_localctx = new EntityISITagContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1716;
				this.tagIndependentStatementInner();
				}
				break;

			case 4:
				_localctx = new EntityISIEffectContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1717;
				this.effectIndependentStatementInner();
				}
				break;

			case 5:
				_localctx = new EntityISITpContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1718;
				this.tpIndependentStatementInner();
				}
				break;

			case 6:
				_localctx = new EntityISITitleCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1719;
				this.match(JustMCFParser.T__108);
				this.state = 1720;
				this.match(JustMCFParser.T__6);
				this.state = 1724;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__66 || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (JustMCFParser.T__108 - 109)) | (1 << (JustMCFParser.T__109 - 109)) | (1 << (JustMCFParser.T__110 - 109)) | (1 << (JustMCFParser.T__111 - 109)) | (1 << (JustMCFParser.T__112 - 109)))) !== 0)) {
					{
					{
					this.state = 1721;
					this.titleSelectorStatementInner();
					}
					}
					this.state = 1726;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1727;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 7:
				_localctx = new EntityISIDisplayCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1728;
				this.match(JustMCFParser.T__85);
				this.state = 1729;
				this.match(JustMCFParser.T__6);
				this.state = 1733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__12 || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (JustMCFParser.T__108 - 109)) | (1 << (JustMCFParser.T__109 - 109)) | (1 << (JustMCFParser.T__110 - 109)) | (1 << (JustMCFParser.T__113 - 109)))) !== 0)) {
					{
					{
					this.state = 1730;
					this.displayIndependentStatementInner();
					}
					}
					this.state = 1735;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1736;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 8:
				_localctx = new EntityISIDisplaySingleContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1737;
				this.displayIndependentStatementInner();
				}
				break;

			case 9:
				_localctx = new EntityISIItemSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1738;
				this.match(JustMCFParser.T__17);
				this.state = 1739;
				this.match(JustMCFParser.T__54);
				this.state = 1740;
				this.itemIndependentStatementInner();
				}
				break;

			case 10:
				_localctx = new EntityISILootGiveSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1741;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__17 || _la === JustMCFParser.T__18)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1742;
				this.lootIndependentStatementInnerGive();
				}
				break;

			case 11:
				_localctx = new EntityISILootSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1743;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__17 || _la === JustMCFParser.T__18)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1744;
				this.match(JustMCFParser.T__54);
				this.state = 1745;
				this.lootIndependentStatementInnerReplaceEntity();
				}
				break;

			case 12:
				_localctx = new EntityISIItemCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1746;
				this.match(JustMCFParser.T__17);
				this.state = 1747;
				this.match(JustMCFParser.T__6);
				this.state = 1751;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__58 || _la === JustMCFParser.T__59 || _la === JustMCFParser.T__111 || _la === JustMCFParser.T__114 || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.Key - 160)) | (1 << (JustMCFParser.NumberType - 160)) | (1 << (JustMCFParser.AcceptableName - 160)))) !== 0)) {
					{
					{
					this.state = 1748;
					this.itemSelectorStatementInner();
					}
					}
					this.state = 1753;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1754;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 13:
				_localctx = new EntityISILootCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1755;
				this.match(JustMCFParser.T__18);
				this.state = 1756;
				this.match(JustMCFParser.T__6);
				this.state = 1760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__58 || _la === JustMCFParser.T__114 || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.Key - 160)) | (1 << (JustMCFParser.NumberType - 160)) | (1 << (JustMCFParser.AcceptableName - 160)))) !== 0)) {
					{
					{
					this.state = 1757;
					this.lootSelectorStatementInner();
					}
					}
					this.state = 1762;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1763;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 14:
				_localctx = new EntityISIAttrSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1764;
				this.match(JustMCFParser.T__120);
				this.state = 1765;
				this.match(JustMCFParser.T__54);
				this.state = 1766;
				this.attrIndependentStatementInner();
				}
				break;

			case 15:
				_localctx = new EntityISIAttrCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1767;
				this.match(JustMCFParser.T__120);
				this.state = 1768;
				this.match(JustMCFParser.T__6);
				this.state = 1772;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (JustMCFParser.Key - 160)) | (1 << (JustMCFParser.NumberType - 160)) | (1 << (JustMCFParser.AcceptableName - 160)))) !== 0)) {
					{
					{
					this.state = 1769;
					this.attrIndependentStatementInner();
					}
					}
					this.state = 1774;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1775;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 16:
				_localctx = new EntityISIExecContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1776;
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
		this.enterRule(_localctx, 194, JustMCFParser.RULE_entityStatementInner);
		try {
			this.state = 1787;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				_localctx = new EntitySIEntityExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1779;
				this.entityExpression();
				}
				break;

			case 2:
				_localctx = new EntitySISelectorCompoundContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1780;
				this.selector();
				this.state = 1781;
				this.match(JustMCFParser.T__6);
				{
				this.state = 1782;
				this.match(JustMCFParser.T__80);
				this.state = 1783;
				this.entityIndependentStatementInner();
				}
				this.state = 1785;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 196, JustMCFParser.RULE_entityExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1789;
			this.selector();
			this.state = 1790;
			this.match(JustMCFParser.T__80);
			this.state = 1791;
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
		this.enterRule(_localctx, 198, JustMCFParser.RULE_blockStatement);
		let _la: number;
		try {
			this.state = 1827;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				_localctx = new BlockSSetblockContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1793;
				this.pos3Identifier();
				this.state = 1794;
				this.blockIdentifier();
				this.state = 1796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__21 || _la === JustMCFParser.T__127 || _la === JustMCFParser.T__128) {
					{
					this.state = 1795;
					(_localctx as BlockSSetblockContext)._mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__21 || _la === JustMCFParser.T__127 || _la === JustMCFParser.T__128)) {
						(_localctx as BlockSSetblockContext)._mod = this._errHandler.recoverInline(this);
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
				_localctx = new BlockSFillContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1798;
				this.pos3Identifier();
				this.state = 1799;
				this.pos3Identifier();
				this.state = 1800;
				this.blockIdentifier();
				this.state = 1802;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (JustMCFParser.T__127 - 128)) | (1 << (JustMCFParser.T__128 - 128)) | (1 << (JustMCFParser.T__129 - 128)) | (1 << (JustMCFParser.T__130 - 128)))) !== 0)) {
					{
					this.state = 1801;
					(_localctx as BlockSFillContext)._mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (JustMCFParser.T__127 - 128)) | (1 << (JustMCFParser.T__128 - 128)) | (1 << (JustMCFParser.T__129 - 128)) | (1 << (JustMCFParser.T__130 - 128)))) !== 0))) {
						(_localctx as BlockSFillContext)._mod = this._errHandler.recoverInline(this);
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
				_localctx = new BlockSFillReplaceContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1804;
				this.pos3Identifier();
				this.state = 1805;
				this.pos3Identifier();
				this.state = 1806;
				this.blockIdentifier();
				this.state = 1807;
				this.match(JustMCFParser.T__21);
				this.state = 1808;
				this.block_predicate();
				}
				break;

			case 4:
				_localctx = new BlockSCloneContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1810;
				this.pos3Identifier();
				this.state = 1811;
				this.pos3Identifier();
				this.state = 1812;
				this.pos3Identifier();
				this.state = 1814;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__21 || _la === JustMCFParser.T__51) {
					{
					this.state = 1813;
					(_localctx as BlockSCloneContext)._masked_mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === JustMCFParser.T__21 || _la === JustMCFParser.T__51)) {
						(_localctx as BlockSCloneContext)._masked_mod = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 1817;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (JustMCFParser.T__131 - 132)) | (1 << (JustMCFParser.T__132 - 132)) | (1 << (JustMCFParser.T__133 - 132)))) !== 0)) {
					{
					this.state = 1816;
					(_localctx as BlockSCloneContext)._mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (JustMCFParser.T__131 - 132)) | (1 << (JustMCFParser.T__132 - 132)) | (1 << (JustMCFParser.T__133 - 132)))) !== 0))) {
						(_localctx as BlockSCloneContext)._mod = this._errHandler.recoverInline(this);
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
				_localctx = new BlockSCloneFilteredContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1819;
				this.pos3Identifier();
				this.state = 1820;
				this.pos3Identifier();
				this.state = 1821;
				this.pos3Identifier();
				this.state = 1822;
				this.match(JustMCFParser.T__134);
				this.state = 1823;
				this.block_predicate();
				this.state = 1825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (JustMCFParser.T__131 - 132)) | (1 << (JustMCFParser.T__132 - 132)) | (1 << (JustMCFParser.T__133 - 132)))) !== 0)) {
					{
					this.state = 1824;
					(_localctx as BlockSCloneFilteredContext)._mod = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (JustMCFParser.T__131 - 132)) | (1 << (JustMCFParser.T__132 - 132)) | (1 << (JustMCFParser.T__133 - 132)))) !== 0))) {
						(_localctx as BlockSCloneFilteredContext)._mod = this._errHandler.recoverInline(this);
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
		this.enterRule(_localctx, 200, JustMCFParser.RULE_interfaceStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1829;
			this.match(JustMCFParser.T__135);
			this.state = 1830;
			this.nameSpaceStorage();
			this.state = 1831;
			this.nbt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 202, JustMCFParser.RULE_dataAssignExistExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1833;
			this.dataIdentifier();
			this.state = 1834;
			this.match(JustMCFParser.T__9);
			this.state = 1835;
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
		let _startState: number = 204;
		this.enterRecursionRule(_localctx, 204, JustMCFParser.RULE_existExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1851;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__6:
				{
				_localctx = new ExistExpressionExecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1838;
				this.match(JustMCFParser.T__6);
				this.state = 1842;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__10) | (1 << JustMCFParser.T__13) | (1 << JustMCFParser.T__14) | (1 << JustMCFParser.T__28) | (1 << JustMCFParser.T__29))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__34 - 34)) | (1 << (JustMCFParser.T__37 - 34)) | (1 << (JustMCFParser.T__38 - 34)) | (1 << (JustMCFParser.T__39 - 34)) | (1 << (JustMCFParser.T__40 - 34)) | (1 << (JustMCFParser.T__41 - 34)) | (1 << (JustMCFParser.T__42 - 34)) | (1 << (JustMCFParser.T__43 - 34)) | (1 << (JustMCFParser.T__44 - 34)) | (1 << (JustMCFParser.T__45 - 34)) | (1 << (JustMCFParser.T__46 - 34)) | (1 << (JustMCFParser.T__47 - 34)) | (1 << (JustMCFParser.T__48 - 34)) | (1 << (JustMCFParser.T__49 - 34)) | (1 << (JustMCFParser.T__52 - 34)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (JustMCFParser.T__74 - 75)) | (1 << (JustMCFParser.T__76 - 75)) | (1 << (JustMCFParser.T__77 - 75)))) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (JustMCFParser.Selector - 159)) | (1 << (JustMCFParser.Key - 159)) | (1 << (JustMCFParser.NumberType - 159)) | (1 << (JustMCFParser.AcceptableName - 159)) | (1 << (JustMCFParser.NBTName - 159)))) !== 0)) {
					{
					{
					this.state = 1839;
					this.execChild();
					}
					}
					this.state = 1844;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1845;
				this.match(JustMCFParser.T__7);
				}
				break;
			case JustMCFParser.T__74:
			case JustMCFParser.T__76:
			case JustMCFParser.T__77:
			case JustMCFParser.Selector:
			case JustMCFParser.Key:
			case JustMCFParser.NumberType:
			case JustMCFParser.AcceptableName:
				{
				_localctx = new ExistExpressionIdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1846;
				this.dataIdentifier();
				}
				break;
			case JustMCFParser.T__106:
				{
				_localctx = new ExistExpressionTrueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1847;
				this.match(JustMCFParser.T__106);
				}
				break;
			case JustMCFParser.T__107:
				{
				_localctx = new ExistExpressionFalseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1848;
				this.match(JustMCFParser.T__107);
				}
				break;
			case JustMCFParser.T__136:
				{
				_localctx = new ExistExpressionNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1849;
				this.match(JustMCFParser.T__136);
				this.state = 1850;
				this.existExpression(5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1867;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1865;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
					case 1:
						{
						_localctx = new ExistExpressionBitAndContext(new ExistExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_existExpression);
						this.state = 1853;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1854;
						(_localctx as ExistExpressionBitAndContext)._op = this.match(JustMCFParser.T__137);
						this.state = 1855;
						this.existExpression(5);
						}
						break;

					case 2:
						{
						_localctx = new ExistExpressionBitOrContext(new ExistExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_existExpression);
						this.state = 1856;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1857;
						(_localctx as ExistExpressionBitOrContext)._op = this.match(JustMCFParser.T__138);
						this.state = 1858;
						this.existExpression(4);
						}
						break;

					case 3:
						{
						_localctx = new ExistExpressionAndContext(new ExistExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_existExpression);
						this.state = 1859;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1860;
						(_localctx as ExistExpressionAndContext)._op = this.match(JustMCFParser.T__139);
						this.state = 1861;
						this.existExpression(3);
						}
						break;

					case 4:
						{
						_localctx = new ExistExpressionOrContext(new ExistExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_existExpression);
						this.state = 1862;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1863;
						(_localctx as ExistExpressionOrContext)._op = this.match(JustMCFParser.T__140);
						this.state = 1864;
						this.existExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1869;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
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
		this.enterRule(_localctx, 206, JustMCFParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1870;
			this.match(JustMCFParser.T__45);
			this.state = 1871;
			this.match(JustMCFParser.T__24);
			this.state = 1872;
			this.existExpression(0);
			this.state = 1873;
			this.match(JustMCFParser.T__25);
			this.state = 1874;
			this.execRunChild();
			this.state = 1877;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 215, this._ctx) ) {
			case 1:
				{
				this.state = 1875;
				this.match(JustMCFParser.T__141);
				this.state = 1876;
				this.execRunChild();
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, JustMCFParser.RULE_whileStatement);
		let _la: number;
		try {
			this.state = 1895;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				_localctx = new WhileStatementExistContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1879;
				this.match(JustMCFParser.T__142);
				this.state = 1880;
				this.match(JustMCFParser.T__24);
				this.state = 1881;
				this.existExpression(0);
				this.state = 1882;
				this.match(JustMCFParser.T__25);
				this.state = 1883;
				this.execRunChild();
				}
				break;

			case 2:
				_localctx = new WhileStatementExecContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1885;
				this.match(JustMCFParser.T__142);
				this.state = 1886;
				this.match(JustMCFParser.T__6);
				this.state = 1890;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__10) | (1 << JustMCFParser.T__13) | (1 << JustMCFParser.T__14) | (1 << JustMCFParser.T__28) | (1 << JustMCFParser.T__29))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (JustMCFParser.T__33 - 34)) | (1 << (JustMCFParser.T__34 - 34)) | (1 << (JustMCFParser.T__37 - 34)) | (1 << (JustMCFParser.T__38 - 34)) | (1 << (JustMCFParser.T__39 - 34)) | (1 << (JustMCFParser.T__40 - 34)) | (1 << (JustMCFParser.T__41 - 34)) | (1 << (JustMCFParser.T__42 - 34)) | (1 << (JustMCFParser.T__43 - 34)) | (1 << (JustMCFParser.T__44 - 34)) | (1 << (JustMCFParser.T__45 - 34)) | (1 << (JustMCFParser.T__46 - 34)) | (1 << (JustMCFParser.T__47 - 34)) | (1 << (JustMCFParser.T__48 - 34)) | (1 << (JustMCFParser.T__49 - 34)) | (1 << (JustMCFParser.T__52 - 34)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (JustMCFParser.T__74 - 75)) | (1 << (JustMCFParser.T__76 - 75)) | (1 << (JustMCFParser.T__77 - 75)))) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (JustMCFParser.Selector - 159)) | (1 << (JustMCFParser.Key - 159)) | (1 << (JustMCFParser.NumberType - 159)) | (1 << (JustMCFParser.AcceptableName - 159)) | (1 << (JustMCFParser.NBTName - 159)))) !== 0)) {
					{
					{
					this.state = 1887;
					this.execChild();
					}
					}
					this.state = 1892;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1893;
				this.match(JustMCFParser.T__7);
				this.state = 1894;
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
		this.enterRule(_localctx, 210, JustMCFParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1897;
			this.match(JustMCFParser.T__143);
			this.state = 1898;
			this.match(JustMCFParser.T__6);
			this.state = 1899;
			this.dataOperationExpression();
			this.state = 1900;
			this.match(JustMCFParser.T__7);
			this.state = 1901;
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
		this.enterRule(_localctx, 212, JustMCFParser.RULE_nbt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1903;
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
		this.enterRule(_localctx, 214, JustMCFParser.RULE_json);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1905;
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
		this.enterRule(_localctx, 216, JustMCFParser.RULE_nbtPath);
		try {
			let _alt: number;
			this.state = 1928;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 221, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1907;
				this.nbtName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1908;
				this.nbtCompound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1909;
				this.nbtName();
				this.state = 1910;
				this.nbtCompound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1912;
				this.nbtName();
				this.state = 1919;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 1917;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case JustMCFParser.T__3:
							{
							this.state = 1913;
							this.match(JustMCFParser.T__3);
							this.state = 1914;
							this.match(JustMCFParser.NUMBER);
							this.state = 1915;
							this.match(JustMCFParser.T__5);
							}
							break;
						case JustMCFParser.T__144:
							{
							this.state = 1916;
							this.match(JustMCFParser.T__144);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 1921;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
				}
				this.state = 1926;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
				case 1:
					{
					this.state = 1922;
					this.match(JustMCFParser.T__3);
					this.state = 1923;
					this.nbtCompound();
					this.state = 1924;
					this.match(JustMCFParser.T__5);
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
		this.enterRule(_localctx, 218, JustMCFParser.RULE_snbtValue);
		let _la: number;
		try {
			this.state = 1992;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1930;
				this.match(JustMCFParser.T__145);
				this.state = 1931;
				this.nbtPair();
				this.state = 1936;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__4) {
					{
					{
					this.state = 1932;
					this.match(JustMCFParser.T__4);
					this.state = 1933;
					this.nbtPair();
					}
					}
					this.state = 1938;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1939;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1941;
				this.match(JustMCFParser.T__145);
				this.state = 1942;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1943;
				this.match(JustMCFParser.T__146);
				this.state = 1944;
				this.nbtValue();
				this.state = 1949;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__4) {
					{
					{
					this.state = 1945;
					this.match(JustMCFParser.T__4);
					this.state = 1946;
					this.nbtValue();
					}
					}
					this.state = 1951;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1952;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1954;
				this.match(JustMCFParser.T__146);
				this.state = 1955;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1956;
				this.match(JustMCFParser.T__147);
				this.state = 1957;
				this.match(JustMCFParser.ByteNumber);
				this.state = 1962;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__4) {
					{
					{
					this.state = 1958;
					this.match(JustMCFParser.T__4);
					this.state = 1959;
					this.match(JustMCFParser.ByteNumber);
					}
					}
					this.state = 1964;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1965;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1966;
				this.match(JustMCFParser.T__148);
				this.state = 1967;
				this.match(JustMCFParser.NUMBER);
				this.state = 1972;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__4) {
					{
					{
					this.state = 1968;
					this.match(JustMCFParser.T__4);
					this.state = 1969;
					this.match(JustMCFParser.NUMBER);
					}
					}
					this.state = 1974;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1975;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1976;
				this.match(JustMCFParser.T__149);
				this.state = 1977;
				this.match(JustMCFParser.LongNumber);
				this.state = 1982;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__4) {
					{
					{
					this.state = 1978;
					this.match(JustMCFParser.T__4);
					this.state = 1979;
					this.match(JustMCFParser.LongNumber);
					}
					}
					this.state = 1984;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1985;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1986;
				this.nbtString();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1987;
				this.match(JustMCFParser.ByteNumber);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1988;
				this.match(JustMCFParser.ShortNumber);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1989;
				this.match(JustMCFParser.LongNumber);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1990;
				this.match(JustMCFParser.FloatNumber);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1991;
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
		this.enterRule(_localctx, 220, JustMCFParser.RULE_snbt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1994;
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
		this.enterRule(_localctx, 222, JustMCFParser.RULE_nbtCompound);
		let _la: number;
		try {
			this.state = 2009;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1996;
				this.match(JustMCFParser.T__6);
				this.state = 1997;
				this.nbtPair();
				this.state = 2002;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__4) {
					{
					{
					this.state = 1998;
					this.match(JustMCFParser.T__4);
					this.state = 1999;
					this.nbtPair();
					}
					}
					this.state = 2004;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2005;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2007;
				this.match(JustMCFParser.T__6);
				this.state = 2008;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 224, JustMCFParser.RULE_nbtPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2011;
			this.nbtName();
			this.state = 2012;
			this.match(JustMCFParser.T__73);
			this.state = 2013;
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
		this.enterRule(_localctx, 226, JustMCFParser.RULE_nbtList);
		let _la: number;
		try {
			this.state = 2028;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2015;
				this.match(JustMCFParser.T__3);
				this.state = 2016;
				this.nbtValue();
				this.state = 2021;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__4) {
					{
					{
					this.state = 2017;
					this.match(JustMCFParser.T__4);
					this.state = 2018;
					this.nbtValue();
					}
					}
					this.state = 2023;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2024;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2026;
				this.match(JustMCFParser.T__3);
				this.state = 2027;
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
	public nbtValue(): NbtValueContext {
		let _localctx: NbtValueContext = new NbtValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, JustMCFParser.RULE_nbtValue);
		try {
			this.state = 2041;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__6:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2030;
				this.nbtCompound();
				}
				break;
			case JustMCFParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2031;
				this.nbtList();
				}
				break;
			case JustMCFParser.T__150:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2032;
				this.nbtByteArr();
				}
				break;
			case JustMCFParser.T__151:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2033;
				this.nbtIntArr();
				}
				break;
			case JustMCFParser.T__152:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2034;
				this.nbtLongArr();
				}
				break;
			case JustMCFParser.STRING2:
			case JustMCFParser.STRING:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2035;
				this.nbtString();
				}
				break;
			case JustMCFParser.ByteNumber:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2036;
				this.match(JustMCFParser.ByteNumber);
				}
				break;
			case JustMCFParser.ShortNumber:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2037;
				this.match(JustMCFParser.ShortNumber);
				}
				break;
			case JustMCFParser.LongNumber:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2038;
				this.match(JustMCFParser.LongNumber);
				}
				break;
			case JustMCFParser.FloatNumber:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2039;
				this.match(JustMCFParser.FloatNumber);
				}
				break;
			case JustMCFParser.DoubleNumber:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2040;
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
		this.enterRule(_localctx, 230, JustMCFParser.RULE_nbtByteArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2043;
			this.match(JustMCFParser.T__150);
			this.state = 2044;
			this.match(JustMCFParser.ByteNumber);
			this.state = 2049;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__4) {
				{
				{
				this.state = 2045;
				this.match(JustMCFParser.T__4);
				this.state = 2046;
				this.match(JustMCFParser.ByteNumber);
				}
				}
				this.state = 2051;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2052;
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
	public nbtIntArr(): NbtIntArrContext {
		let _localctx: NbtIntArrContext = new NbtIntArrContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, JustMCFParser.RULE_nbtIntArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2054;
			this.match(JustMCFParser.T__151);
			this.state = 2055;
			this.match(JustMCFParser.NUMBER);
			this.state = 2060;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__4) {
				{
				{
				this.state = 2056;
				this.match(JustMCFParser.T__4);
				this.state = 2057;
				this.match(JustMCFParser.NUMBER);
				}
				}
				this.state = 2062;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2063;
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
	public nbtLongArr(): NbtLongArrContext {
		let _localctx: NbtLongArrContext = new NbtLongArrContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, JustMCFParser.RULE_nbtLongArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2065;
			this.match(JustMCFParser.T__152);
			this.state = 2066;
			this.match(JustMCFParser.LongNumber);
			this.state = 2071;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__4) {
				{
				{
				this.state = 2067;
				this.match(JustMCFParser.T__4);
				this.state = 2068;
				this.match(JustMCFParser.LongNumber);
				}
				}
				this.state = 2073;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2074;
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
	public nbtString(): NbtStringContext {
		let _localctx: NbtStringContext = new NbtStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, JustMCFParser.RULE_nbtString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2076;
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
		this.enterRule(_localctx, 238, JustMCFParser.RULE_jsonTextValue);
		let _la: number;
		try {
			this.state = 2109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2078;
				this.match(JustMCFParser.T__153);
				this.state = 2079;
				this.jsonPair();
				this.state = 2084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__4) {
					{
					{
					this.state = 2080;
					this.match(JustMCFParser.T__4);
					this.state = 2081;
					this.jsonPair();
					}
					}
					this.state = 2086;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2087;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2089;
				this.match(JustMCFParser.T__153);
				this.state = 2090;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2091;
				this.match(JustMCFParser.T__154);
				this.state = 2092;
				this.jsonValue();
				this.state = 2097;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__4) {
					{
					{
					this.state = 2093;
					this.match(JustMCFParser.T__4);
					this.state = 2094;
					this.jsonValue();
					}
					}
					this.state = 2099;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2100;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2102;
				this.match(JustMCFParser.T__3);
				this.state = 2103;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2104;
				this.match(JustMCFParser.STRING);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2105;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2106;
				this.match(JustMCFParser.T__106);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2107;
				this.match(JustMCFParser.T__107);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2108;
				this.match(JustMCFParser.T__155);
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
		this.enterRule(_localctx, 240, JustMCFParser.RULE_jsonText);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2111;
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
		this.enterRule(_localctx, 242, JustMCFParser.RULE_jsonObj);
		let _la: number;
		try {
			this.state = 2126;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2113;
				this.match(JustMCFParser.T__6);
				this.state = 2114;
				this.jsonPair();
				this.state = 2119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__4) {
					{
					{
					this.state = 2115;
					this.match(JustMCFParser.T__4);
					this.state = 2116;
					this.jsonPair();
					}
					}
					this.state = 2121;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2122;
				this.match(JustMCFParser.T__7);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2124;
				this.match(JustMCFParser.T__6);
				this.state = 2125;
				this.match(JustMCFParser.T__7);
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
		this.enterRule(_localctx, 244, JustMCFParser.RULE_jsonPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2128;
			this.match(JustMCFParser.STRING);
			this.state = 2129;
			this.match(JustMCFParser.T__73);
			this.state = 2130;
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
		this.enterRule(_localctx, 246, JustMCFParser.RULE_jsonArr);
		let _la: number;
		try {
			this.state = 2145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2132;
				this.match(JustMCFParser.T__3);
				this.state = 2133;
				this.jsonValue();
				this.state = 2138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__4) {
					{
					{
					this.state = 2134;
					this.match(JustMCFParser.T__4);
					this.state = 2135;
					this.jsonValue();
					}
					}
					this.state = 2140;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2141;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2143;
				this.match(JustMCFParser.T__3);
				this.state = 2144;
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
	public jsonValue(): JsonValueContext {
		let _localctx: JsonValueContext = new JsonValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, JustMCFParser.RULE_jsonValue);
		try {
			this.state = 2154;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2147;
				this.match(JustMCFParser.STRING);
				}
				break;
			case JustMCFParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2148;
				this.match(JustMCFParser.NUMBER);
				}
				break;
			case JustMCFParser.T__6:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2149;
				this.jsonObj();
				}
				break;
			case JustMCFParser.T__3:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2150;
				this.jsonArr();
				}
				break;
			case JustMCFParser.T__106:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2151;
				this.match(JustMCFParser.T__106);
				}
				break;
			case JustMCFParser.T__107:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2152;
				this.match(JustMCFParser.T__107);
				}
				break;
			case JustMCFParser.T__155:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2153;
				this.match(JustMCFParser.T__155);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 29:
			return this.scbSingleOperationExpression_sempred(_localctx as ScbSingleOperationExpressionContext, predIndex);

		case 102:
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
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 3);

		case 5:
			return this.precpred(this._ctx, 2);

		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xB3\u086F\x04" +
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
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x03\x02\x07\x02\xFE\n\x02\f\x02\x0E\x02\u0101" +
		"\v\x02\x03\x03\x03\x03\x05\x03\u0105\n\x03\x03\x04\x03\x04\x05\x04\u0109" +
		"\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0121\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\u012A\n\x06\r\x06" +
		"\x0E\x06\u012B\x05\x06\u012E\n\x06\x03\x07\x03\x07\x03\b\x03\b\x05\b\u0134" +
		"\n\b\x03\b\x03\b\x03\b\x05\b\u0139\n\b\x07\b\u013B\n\b\f\b\x0E\b\u013E" +
		"\v\b\x03\b\x05\b\u0141\n\b\x03\b\x03\b\x07\b\u0145\n\b\f\b\x0E\b\u0148" +
		"\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\u016E\n\t\x03\n\x03\n\x05\n\u0172\n\n\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x05\v\u0179\n\v\x07\v\u017B\n\v\f\v\x0E\v\u017E\v\v\x03\v" +
		"\x05\v\u0181\n\v\x03\v\x03\v\x07\v\u0185\n\v\f\v\x0E\v\u0188\v\v\x03\v" +
		"\x03\v\x03\f\x03\f\x03\f\x03\f\x05\f\u0190\n\f\x03\r\x03\r\x03\r\x05\r" +
		"\u0195\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u019D" +
		"\n\x0E\f\x0E\x0E\x0E\u01A0\v\x0E\x05\x0E\u01A2\n\x0E\x03\x0E\x03\x0E\x07" +
		"\x0E\u01A6\n\x0E\f\x0E\x0E\x0E\u01A9\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01B3\n\x0F\f\x0F\x0E\x0F" +
		"\u01B6\v\x0F\x03\x0F\x03\x0F\x05\x0F\u01BA\n\x0F\x03\x0F\x03\x0F\x07\x0F" +
		"\u01BE\n\x0F\f\x0F\x0E\x0F\u01C1\v\x0F\x03\x0F\x03\x0F\x03\x10\x05\x10" +
		"\u01C6\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x05\x11\u01CC\n\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01D5\n\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u01DD\n\x14\f\x14" +
		"\x0E\x14\u01E0\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x05\x16\u01E7" +
		"\n\x16\x03\x16\x03\x16\x07\x16\u01EB\n\x16\f\x16\x0E\x16\u01EE\v\x16\x03" +
		"\x16\x03\x16\x07\x16\u01F2\n\x16\f\x16\x0E\x16\u01F5\v\x16\x03\x16\x03" +
		"\x16\x05\x16\u01F9\n\x16\x03\x16\x07\x16\u01FC\n\x16\f\x16\x0E\x16\u01FF" +
		"\v\x16\x03\x16\x03\x16\x03\x16\x06\x16\u0204\n\x16\r\x16\x0E\x16\u0205" +
		"\x03\x16\x03\x16\x05\x16\u020A\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0214\n\x17\x03\x17\x05\x17\u0217" +
		"\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u021D\n\x17\x03\x17\x05" +
		"\x17\u0220\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0226\n\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x05\x17\u022C\n\x17\x05\x17\u022E\n\x17\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0236\n\x18\x03\x18" +
		"\x03\x18\x07\x18\u023A\n\x18\f\x18\x0E\x18\u023D\v\x18\x03\x18\x05\x18" +
		"\u0240\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05" +
		"\x19\u025B\n\x19\x03\x19\x05\x19\u025E\n\x19\x03\x19\x03\x19\x05\x19\u0262" +
		"\n\x19\x03\x19\x05\x19\u0265\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x05\x19\u026C\n\x19\x03\x19\x05\x19\u026F\n\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x05\x19\u0275\n\x19\x03\x19\x05\x19\u0278\n\x19\x03\x19\x03" +
		"\x19\x05\x19\u027C\n\x19\x03\x19\x05\x19\u027F\n\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x05\x19\u0285\n\x19\x03\x19\x05\x19\u0288\n\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0290\n\x19\x03\x19\x05\x19" +
		"\u0293\n\x19\x03\x19\x03\x19\x05\x19\u0297\n\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x05\x19\u029E\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02A3" +
		"\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02A8\n\x1A\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x05\x1B\u02B6\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u02C4\n\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u02D1\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x05\x1D\u02D8\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u02FB\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0338" +
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F" +
		"\u0341\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x07\x1F\u034C\n\x1F\f\x1F\x0E\x1F\u034F\v\x1F\x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x05 \u0358\n \x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"$\x03$\x03%\x03%\x05%\u0371\n%\x03%\x05%\u0374\n%\x03&\x03&\x06&\u0378" +
		"\n&\r&\x0E&\u0379\x03&\x03&\x03\'\x03\'\x03\'\x06\'\u0381\n\'\r\'\x0E" +
		"\'\u0382\x03\'\x05\'\u0386\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u038D" +
		"\n\'\x03(\x03(\x03(\x03(\x03(\x05(\u0394\n(\x03)\x03)\x03*\x03*\x03+\x03" +
		"+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x031\x031\x032\x03" +
		"2\x033\x033\x033\x034\x034\x035\x035\x036\x036\x037\x037\x038\x038\x03" +
		"8\x058\u03B8\n8\x038\x038\x039\x039\x03:\x03:\x03;\x03;\x03<\x03<\x03" +
		"<\x07<\u03C5\n<\f<\x0E<\u03C8\v<\x03=\x03=\x03=\x05=\u03CD\n=\x03=\x03" +
		"=\x03=\x05=\u03D2\n=\x03>\x03>\x03?\x03?\x05?\u03D8\n?\x03?\x03?\x05?" +
		"\u03DC\n?\x03@\x03@\x05@\u03E0\n@\x03@\x05@\u03E3\n@\x03@\x03@\x05@\u03E7" +
		"\n@\x03A\x03A\x03A\x07A\u03EC\nA\fA\x0EA\u03EF\vA\x03A\x03A\x03B\x03B" +
		"\x03B\x07B\u03F6\nB\fB\x0EB\u03F9\vB\x03B\x03B\x03C\x03C\x05C\u03FF\n" +
		"C\x03C\x05C\u0402\nC\x03D\x03D\x03D\x03D\x03D\x05D\u0409\nD\x03D\x03D" +
		"\x03D\x03D\x05D\u040F\nD\x03D\x07D\u0412\nD\fD\x0ED\u0415\vD\x03D\x05" +
		"D\u0418\nD\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05" +
		"D\u0425\nD\x03D\x03D\x03D\x03D\x05D\u042B\nD\x03D\x07D\u042E\nD\fD\x0E" +
		"D\u0431\vD\x03D\x05D\u0434\nD\x03D\x03D\x03D\x03D\x05D\u043A\nD\x03D\x07" +
		"D\u043D\nD\fD\x0ED\u0440\vD\x03D\x03D\x05D\u0444\nD\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x05E\u044D\nE\x03F\x03F\x03F\x03F\x03F\x05F\u0454\nF" +
		"\x03F\x07F\u0457\nF\fF\x0EF\u045A\vF\x03F\x05F\u045D\nF\x03F\x03F\x03" +
		"F\x03F\x05F\u0463\nF\x03F\x07F\u0466\nF\fF\x0EF\u0469\vF\x03F\x03F\x05" +
		"F\u046D\nF\x03G\x05G\u0470\nG\x03G\x03G\x03G\x05G\u0475\nG\x03G\x03G\x03" +
		"G\x05G\u047A\nG\x03G\x03G\x03G\x05G\u047F\nG\x03G\x03G\x03G\x05G\u0484" +
		"\nG\x03G\x03G\x03G\x05G\u0489\nG\x03G\x03G\x03G\x05G\u048E\nG\x03G\x03" +
		"G\x03G\x05G\u0493\nG\x03G\x03G\x03G\x05G\u0498\nG\x03G\x03G\x05G\u049C" +
		"\nG\x03H\x03H\x03H\x05H\u04A1\nH\x03H\x03H\x03H\x05H\u04A6\nH\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u04B1\nH\x03I\x03I\x03I\x07" +
		"I\u04B6\nI\fI\x0EI\u04B9\vI\x03I\x03I\x03I\x03I\x03I\x05I\u04C0\nI\x03" +
		"I\x07I\u04C3\nI\fI\x0EI\u04C6\vI\x03I\x03I\x05I\u04CA\nI\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x05J\u04D3\nJ\x03J\x07J\u04D6\nJ\fJ\x0EJ\u04D9\v" +
		"J\x03J\x03J\x05J\u04DD\nJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05" +
		"K\u04E7\nK\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x05L\u04F7\nL\x03M\x03M\x03M\x07M\u04FC\nM\fM\x0EM\u04FF\v" +
		"M\x03M\x03M\x03M\x03M\x03M\x05M\u0506\nM\x03M\x07M\u0509\nM\fM\x0EM\u050C" +
		"\vM\x03M\x03M\x05M\u0510\nM\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03" +
		"N\x05N\u051B\nN\x03N\x07N\u051E\nN\fN\x0EN\u0521\vN\x03N\x03N\x05N\u0525" +
		"\nN\x03O\x03O\x03O\x03O\x07O\u052B\nO\fO\x0EO\u052E\vO\x03O\x03O\x03O" +
		"\x03O\x03O\x03O\x03O\x05O\u0537\nO\x03P\x03P\x03P\x07P\u053C\nP\fP\x0E" +
		"P\u053F\vP\x03P\x03P\x03P\x03P\x03P\x07P\u0546\nP\fP\x0EP\u0549\vP\x03" +
		"P\x03P\x05P\u054D\nP\x03Q\x03Q\x03Q\x07Q\u0552\nQ\fQ\x0EQ\u0555\vQ\x03" +
		"Q\x03Q\x03Q\x03Q\x03Q\x07Q\u055C\nQ\fQ\x0EQ\u055F\vQ\x03Q\x03Q\x05Q\u0563" +
		"\nQ\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
		"R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x07R\u057B\nR\fR\x0ER\u057E" +
		"\vR\x03R\x03R\x05R\u0582\nR\x03S\x03S\x05S\u0586\nS\x03T\x03T\x03T\x03" +
		"U\x03U\x03U\x03U\x05U\u058F\nU\x03U\x05U\u0592\nU\x03V\x03V\x03V\x03V" +
		"\x05V\u0598\nV\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u05A0\nV\x03V\x03V\x05" +
		"V\u05A4\nV\x03V\x03V\x05V\u05A8\nV\x03V\x03V\x05V\u05AC\nV\x03V\x05V\u05AF" +
		"\nV\x03V\x03V\x03V\x05V\u05B4\nV\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03" +
		"W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x07W\u05C5\nW\fW\x0EW\u05C8\vW\x03" +
		"W\x03W\x05W\u05CC\nW\x03X\x03X\x03X\x05X\u05D1\nX\x03Y\x03Y\x03Y\x03Y" +
		"\x05Y\u05D7\nY\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u05DF\nY\x03Y\x03Y\x03" +
		"Y\x03Y\x03Y\x03Y\x05Y\u05E7\nY\x03Y\x03Y\x03Y\x03Y\x05Y\u05ED\nY\x03Z" +
		"\x03Z\x03Z\x05Z\u05F2\nZ\x03Z\x03Z\x03Z\x05Z\u05F7\nZ\x05Z\u05F9\nZ\x03" +
		"[\x03[\x03[\x07[\u05FE\n[\f[\x0E[\u0601\v[\x03[\x03[\x03[\x03[\x03[\x07" +
		"[\u0608\n[\f[\x0E[\u060B\v[\x03[\x03[\x05[\u060F\n[\x03\\\x03\\\x03\\" +
		"\x03\\\x03\\\x03\\\x03\\\x07\\\u0618\n\\\f\\\x0E\\\u061B\v\\\x03\\\x03" +
		"\\\x05\\\u061F\n\\\x03]\x03]\x05]\u0623\n]\x03]\x05]\u0626\n]\x03]\x05" +
		"]\u0629\n]\x03]\x03]\x03]\x05]\u062E\n]\x03]\x05]\u0631\n]\x03]\x03]\x03" +
		"]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03" +
		"]\x03]\x03]\x03]\x03]\x05]\u0648\n]\x03]\x05]\u064B\n]\x05]\u064D\n]\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u0659\n^\x03^\x03" +
		"^\x05^\u065D\n^\x03^\x03^\x03^\x07^\u0662\n^\f^\x0E^\u0665\v^\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u0670\n^\x03_\x03_\x03_\x03" +
		"_\x03_\x03_\x03_\x03_\x05_\u067A\n_\x03`\x03`\x03`\x03`\x03`\x03`\x03" +
		"`\x05`\u0683\n`\x03`\x05`\u0686\n`\x03`\x05`\u0689\n`\x03`\x03`\x03`\x03" +
		"`\x03`\x03`\x05`\u0691\n`\x03`\x05`\u0694\n`\x03`\x05`\u0697\n`\x03`\x03" +
		"`\x05`\u069B\n`\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03" +
		"a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x05a\u06B1\na\x05a\u06B3" +
		"\na\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x07b\u06BD\nb\fb\x0Eb\u06C0" +
		"\vb\x03b\x03b\x03b\x03b\x07b\u06C6\nb\fb\x0Eb\u06C9\vb\x03b\x03b\x03b" +
		"\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x07b\u06D8\nb\fb\x0E" +
		"b\u06DB\vb\x03b\x03b\x03b\x03b\x07b\u06E1\nb\fb\x0Eb\u06E4\vb\x03b\x03" +
		"b\x03b\x03b\x03b\x03b\x03b\x07b\u06ED\nb\fb\x0Eb\u06F0\vb\x03b\x03b\x05" +
		"b\u06F4\nb\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x05c\u06FE\nc\x03d" +
		"\x03d\x03d\x03d\x03e\x03e\x03e\x05e\u0707\ne\x03e\x03e\x03e\x03e\x05e" +
		"\u070D\ne\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u0719" +
		"\ne\x03e\x05e\u071C\ne\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u0724\ne\x05" +
		"e\u0726\ne\x03f\x03f\x03f\x03f\x03g\x03g\x03g\x03g\x03h\x03h\x03h\x07" +
		"h\u0733\nh\fh\x0Eh\u0736\vh\x03h\x03h\x03h\x03h\x03h\x03h\x05h\u073E\n" +
		"h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x07h\u074C" +
		"\nh\fh\x0Eh\u074F\vh\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x05i\u0758\ni" +
		"\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x07j\u0763\nj\fj\x0Ej\u0766" +
		"\vj\x03j\x03j\x05j\u076A\nj\x03k\x03k\x03k\x03k\x03k\x03k\x03l\x03l\x03" +
		"m\x03m\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x07n\u0780\n" +
		"n\fn\x0En\u0783\vn\x03n\x03n\x03n\x03n\x05n\u0789\nn\x05n\u078B\nn\x03" +
		"o\x03o\x03o\x03o\x07o\u0791\no\fo\x0Eo\u0794\vo\x03o\x03o\x03o\x03o\x03" +
		"o\x03o\x03o\x03o\x07o\u079E\no\fo\x0Eo\u07A1\vo\x03o\x03o\x03o\x03o\x03" +
		"o\x03o\x03o\x03o\x07o\u07AB\no\fo\x0Eo\u07AE\vo\x03o\x03o\x03o\x03o\x03" +
		"o\x07o\u07B5\no\fo\x0Eo\u07B8\vo\x03o\x03o\x03o\x03o\x03o\x07o\u07BF\n" +
		"o\fo\x0Eo\u07C2\vo\x03o\x03o\x03o\x03o\x03o\x03o\x03o\x05o\u07CB\no\x03" +
		"p\x03p\x03q\x03q\x03q\x03q\x07q\u07D3\nq\fq\x0Eq\u07D6\vq\x03q\x03q\x03" +
		"q\x03q\x05q\u07DC\nq\x03r\x03r\x03r\x03r\x03s\x03s\x03s\x03s\x07s\u07E6" +
		"\ns\fs\x0Es\u07E9\vs\x03s\x03s\x03s\x03s\x05s\u07EF\ns\x03t\x03t\x03t" +
		"\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x05t\u07FC\nt\x03u\x03u\x03u" +
		"\x03u\x07u\u0802\nu\fu\x0Eu\u0805\vu\x03u\x03u\x03v\x03v\x03v\x03v\x07" +
		"v\u080D\nv\fv\x0Ev\u0810\vv\x03v\x03v\x03w\x03w\x03w\x03w\x07w\u0818\n" +
		"w\fw\x0Ew\u081B\vw\x03w\x03w\x03x\x03x\x03y\x03y\x03y\x03y\x07y\u0825" +
		"\ny\fy\x0Ey\u0828\vy\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x07y\u0832" +
		"\ny\fy\x0Ey\u0835\vy\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x05" +
		"y\u0840\ny\x03z\x03z\x03{\x03{\x03{\x03{\x07{\u0848\n{\f{\x0E{\u084B\v" +
		"{\x03{\x03{\x03{\x03{\x05{\u0851\n{\x03|\x03|\x03|\x03|\x03}\x03}\x03" +
		"}\x03}\x07}\u085B\n}\f}\x0E}\u085E\v}\x03}\x03}\x03}\x03}\x05}\u0864\n" +
		"}\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x05~\u086D\n~\x03~\x04\u0379\u0382" +
		"\x02\x04<\xCE\x7F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
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
		"\x02\xFA\x02\x02\"\x03\x02\x04\x05\x03\x02\x12\x13\x03\x02\"#\x03\x02" +
		"&\'\x03\x02,-\x03\x02./\x03\x0201\x03\x0256\x03\x02CD\x04\x02!!HI\x03" +
		"\x02JK\x04\x02\xA0\xA0\xAF\xAF\x03\x02\xA2\xA4\x03\x02\xA2\xA5\x03\x02" +
		"VW\x04\x02\"#Z[\x03\x02^d\x03\x02hl\x03\x02mn\x03\x02oq\x04\x02==uu\x03" +
		"\x02wx\x04\x02>>rr\x05\x02!!";
	private static readonly _serializedATNSegment1: string =
		"JJ}}\x04\x02==\x7F\x7F\x04\x02<<>>\x03\x02\x14\x15\x04\x02\x18\x18\x82" +
		"\x83\x03\x02\x82\x85\x04\x02\x18\x1866\x03\x02\x86\x88\x04\x02\xAC\xAC" +
		"\xAE\xAE\x02\u09A8\x02\xFF\x03\x02\x02\x02\x04\u0104\x03\x02\x02\x02\x06" +
		"\u0108\x03\x02\x02\x02\b\u0120\x03\x02\x02\x02\n\u012D\x03\x02\x02\x02" +
		"\f\u012F\x03\x02\x02\x02\x0E\u0131\x03\x02\x02\x02\x10\u016D\x03\x02\x02" +
		"\x02\x12\u0171\x03\x02\x02\x02\x14\u0173\x03\x02\x02\x02\x16\u018F\x03" +
		"\x02\x02\x02\x18\u0194\x03\x02\x02\x02\x1A\u0196\x03\x02\x02\x02\x1C\u01AC" +
		"\x03\x02\x02\x02\x1E\u01C5\x03\x02\x02\x02 \u01CB\x03\x02\x02\x02\"\u01CD" +
		"\x03\x02\x02\x02$\u01D4\x03\x02\x02\x02&\u01D6\x03\x02\x02\x02(\u01E3" +
		"\x03\x02\x02\x02*\u0209\x03\x02\x02\x02,\u022D\x03\x02\x02\x02.\u023F" +
		"\x03\x02\x02\x020\u029D\x03\x02\x02\x022\u02A7\x03\x02\x02\x024\u02B5" +
		"\x03\x02\x02\x026\u02C3\x03\x02\x02\x028\u02FA\x03\x02\x02\x02:\u0337" +
		"\x03\x02\x02\x02<\u0340\x03\x02\x02\x02>\u0357\x03\x02\x02\x02@\u0359" +
		"\x03\x02\x02\x02B\u035F\x03\x02\x02\x02D\u0364\x03\x02\x02\x02F\u036C" +
		"\x03\x02\x02\x02H\u036E\x03\x02\x02\x02J\u0375\x03\x02\x02\x02L\u038C" +
		"\x03\x02\x02\x02N\u0393\x03\x02\x02\x02P\u0395\x03\x02\x02\x02R\u0397" +
		"\x03\x02\x02\x02T\u0399\x03\x02\x02\x02V\u039B\x03\x02\x02\x02X\u039D" +
		"\x03\x02\x02\x02Z\u039F\x03\x02\x02\x02\\\u03A1\x03\x02\x02\x02^\u03A3" +
		"\x03\x02\x02\x02`\u03A5\x03\x02\x02\x02b\u03A7\x03\x02\x02\x02d\u03A9" +
		"\x03\x02\x02\x02f\u03AC\x03\x02\x02\x02h\u03AE\x03\x02\x02\x02j\u03B0" +
		"\x03\x02\x02\x02l\u03B2\x03\x02\x02\x02n\u03B7\x03\x02\x02\x02p\u03BB" +
		"\x03\x02\x02\x02r\u03BD\x03\x02\x02\x02t\u03BF\x03\x02\x02\x02v\u03C1" +
		"\x03\x02\x02\x02x\u03CC\x03\x02\x02\x02z\u03D3\x03\x02\x02\x02|\u03D7" +
		"\x03\x02\x02\x02~\u03DF\x03\x02\x02\x02\x80\u03E8\x03\x02\x02\x02\x82" +
		"\u03F2\x03\x02\x02\x02\x84\u0401\x03\x02\x02\x02\x86\u0443\x03\x02\x02" +
		"\x02\x88\u044C\x03\x02\x02\x02\x8A\u046C\x03\x02\x02\x02\x8C\u049B\x03" +
		"\x02\x02\x02\x8E\u04B0\x03\x02\x02\x02\x90\u04C9\x03\x02\x02\x02\x92\u04DC" +
		"\x03\x02\x02\x02\x94\u04E6\x03\x02\x02\x02\x96\u04F6\x03\x02\x02\x02\x98" +
		"\u050F\x03\x02\x02\x02\x9A\u0524\x03\x02\x02\x02\x9C\u0536\x03\x02\x02" +
		"\x02\x9E\u054C\x03\x02\x02\x02\xA0\u0562\x03\x02\x02\x02\xA2\u0581\x03" +
		"\x02\x02\x02\xA4\u0585\x03\x02\x02\x02\xA6\u0587\x03\x02\x02\x02\xA8\u058A" +
		"\x03\x02\x02\x02\xAA\u05B3\x03\x02\x02\x02\xAC\u05CB\x03\x02\x02\x02\xAE" +
		"\u05D0\x03\x02\x02\x02\xB0\u05EC\x03\x02\x02\x02\xB2\u05F8\x03\x02\x02" +
		"\x02\xB4\u060E\x03\x02\x02\x02\xB6\u061E\x03\x02\x02\x02\xB8\u064C\x03" +
		"\x02\x02\x02\xBA\u066F\x03\x02\x02\x02\xBC\u0679\x03\x02\x02\x02\xBE\u069A" +
		"\x03\x02\x02\x02\xC0\u06B2\x03\x02\x02\x02\xC2\u06F3\x03\x02\x02\x02\xC4" +
		"\u06FD\x03\x02\x02\x02\xC6\u06FF\x03\x02\x02\x02\xC8\u0725\x03\x02\x02" +
		"\x02\xCA\u0727\x03\x02\x02\x02\xCC\u072B\x03\x02\x02\x02\xCE\u073D\x03" +
		"\x02\x02\x02\xD0\u0750\x03\x02\x02\x02\xD2\u0769\x03\x02\x02\x02\xD4\u076B" +
		"\x03\x02\x02\x02\xD6\u0771\x03\x02\x02\x02\xD8\u0773\x03\x02\x02\x02\xDA" +
		"\u078A\x03\x02\x02\x02\xDC\u07CA\x03\x02\x02\x02\xDE\u07CC\x03\x02\x02" +
		"\x02\xE0\u07DB\x03\x02\x02\x02\xE2\u07DD\x03\x02\x02\x02\xE4\u07EE\x03" +
		"\x02\x02\x02\xE6\u07FB\x03\x02\x02\x02\xE8\u07FD\x03\x02\x02\x02\xEA\u0808" +
		"\x03\x02\x02\x02\xEC\u0813\x03\x02\x02\x02\xEE\u081E\x03\x02\x02\x02\xF0" +
		"\u083F\x03\x02\x02\x02\xF2\u0841\x03\x02\x02\x02\xF4\u0850\x03\x02\x02" +
		"\x02\xF6\u0852\x03\x02\x02\x02\xF8\u0863\x03\x02\x02\x02\xFA\u086C\x03" +
		"\x02\x02\x02\xFC\xFE\x05\x04\x03\x02\xFD\xFC\x03\x02\x02\x02\xFE\u0101" +
		"\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100" +
		"\x03\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102\u0105\x05\x0E\b\x02" +
		"\u0103\u0105\x05\x12\n\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0103\x03" +
		"\x02\x02\x02\u0105\x05\x03\x02\x02\x02\u0106\u0109\x05\b\x05\x02\u0107" +
		"\u0109\x05\n\x06\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0107\x03\x02\x02" +
		"\x02\u0109\x07\x03\x02\x02\x02\u010A\u0121\x05*\x16\x02\u010B\u0121\x05" +
		"8\x1D\x02\u010C\u0121\x05\xCCg\x02\u010D\u0121\x05:\x1E\x02\u010E\u0121" +
		"\x05\x8EH\x02\u010F\u0121\x05\xC6d\x02\u0110\u0121\x05\x80A\x02\u0111" +
		"\u0121\x05\x82B\x02\u0112\u0121\x05\x86D\x02\u0113\u0121\x05\x90I\x02" +
		"\u0114\u0121\x05\x98M\x02\u0115\u0121\x05\xA0Q\x02\u0116\u0121\x05\x9E" +
		"P\x02\u0117\u0121\x05\xB4[\x02\u0118\u0121\x05\xBA^\x02\u0119\u0121\x05" +
		"\xC8e\x02\u011A\u0121\x05\xD0i\x02\u011B\u0121\x05\xD4k\x02\u011C\u0121" +
		"\x05\xD2j\x02\u011D\u0121\x05$\x13\x02\u011E\u0121\x05&\x14\x02\u011F" +
		"\u0121\x05\f\x07\x02\u0120\u010A\x03\x02\x02\x02\u0120\u010B\x03\x02\x02" +
		"\x02\u0120\u010C\x03\x02\x02\x02\u0120\u010D\x03\x02\x02\x02\u0120\u010E" +
		"\x03\x02\x02\x02\u0120\u010F\x03\x02\x02\x02\u0120\u0110\x03\x02\x02\x02" +
		"\u0120\u0111\x03\x02\x02\x02\u0120\u0112\x03\x02\x02\x02\u0120\u0113\x03" +
		"\x02\x02\x02\u0120\u0114\x03\x02\x02\x02\u0120\u0115\x03\x02\x02\x02\u0120" +
		"\u0116\x03\x02\x02\x02\u0120\u0117\x03\x02\x02\x02\u0120\u0118\x03\x02" +
		"\x02\x02\u0120\u0119\x03\x02\x02\x02\u0120\u011A\x03\x02\x02\x02\u0120" +
		"\u011B\x03\x02\x02\x02\u0120\u011C\x03\x02\x02\x02\u0120\u011D\x03\x02" +
		"\x02\x02\u0120\u011E\x03\x02\x02\x02\u0120\u011F\x03\x02\x02\x02\u0121" +
		"\t\x03\x02\x02\x02\u0122\u012E\x05\x1A\x0E\x02\u0123\u0124\x07\x03\x02" +
		"\x02\u0124\u012E\x05\x1A\x0E\x02\u0125\u012E\x05\x1C\x0F\x02\u0126\u012E" +
		"\x05\x0E\b\x02\u0127\u0129\x05\b\x05\x02\u0128\u012A\x05,\x17\x02\u0129" +
		"\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u0129\x03\x02" +
		"\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012E\x03\x02\x02\x02\u012D" +
		"\u0122\x03\x02\x02\x02\u012D\u0123\x03\x02\x02\x02\u012D\u0125\x03\x02" +
		"\x02\x02\u012D\u0126\x03\x02\x02\x02\u012D\u0127\x03\x02\x02\x02\u012E" +
		"\v\x03\x02\x02\x02\u012F\u0130\x07\xB1\x02\x02\u0130\r\x03\x02\x02\x02" +
		"\u0131\u0133\t\x02\x02\x02\u0132\u0134\x05p9\x02\u0133\u0132\x03\x02\x02" +
		"\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0140\x03\x02\x02\x02\u0135\u013C" +
		"\x07\x06\x02\x02\u0136\u0138\x05\x10\t\x02\u0137\u0139\x07\x07\x02\x02" +
		"\u0138\u0137\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013B\x03" +
		"\x02\x02\x02\u013A\u0136\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C" +
		"\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013F\x03\x02" +
		"\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0141\x07\b\x02\x02\u0140\u0135" +
		"\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02" +
		"\u0142\u0146\x07\t\x02\x02\u0143\u0145\x05\x12\n\x02\u0144\u0143\x03\x02" +
		"\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0146" +
		"\u0147\x03\x02\x02\x02\u0147\u0149\x03\x02\x02\x02\u0148\u0146\x03\x02" +
		"\x02\x02\u0149\u014A\x07\n\x02\x02\u014A\x0F\x03\x02\x02\x02\u014B\u014C" +
		"\x07\v\x02\x02\u014C\u014D\x07\f\x02\x02\u014D\u016E\x05p9\x02\u014E\u014F" +
		"\x07\r\x02\x02\u014F\u0150\x07\f\x02\x02\u0150\u016E\x05p9\x02\u0151\u0152" +
		"\x07\x0E\x02\x02\u0152\u0153\x07\f\x02\x02\u0153\u016E\x05p9\x02\u0154" +
		"\u0155\x07\x0F\x02\x02\u0155\u0156\x07\f\x02\x02\u0156\u016E\x05p9\x02" +
		"\u0157\u0158\x07\x10\x02\x02\u0158\u0159\x07\f\x02\x02\u0159\u016E\x05" +
		"p9\x02\u015A\u015B\x07\x11\x02\x02\u015B\u015C\x07\f\x02\x02\u015C\u016E" +
		"\x05p9\x02\u015D\u015E\t\x03\x02\x02\u015E\u015F\x07\f\x02\x02\u015F\u016E" +
		"\x05p9\x02\u0160\u0161\x07\x14\x02\x02\u0161\u0162\x07\f\x02\x02\u0162" +
		"\u016E\x05p9\x02\u0163\u0164\x07\x15\x02\x02\u0164\u0165\x07\f\x02\x02" +
		"\u0165\u016E\x05p9\x02\u0166\u0167\x07\x16\x02\x02\u0167\u0168\x07\f\x02" +
		"\x02\u0168\u016E\x05p9\x02\u0169\u016A\x07\x17\x02\x02\u016A\u016B\x07" +
		"\f\x02\x02\u016B\u016E\x05p9\x02\u016C\u016E\x07\x17\x02\x02\u016D\u014B" +
		"\x03\x02\x02\x02\u016D\u014E\x03\x02\x02\x02\u016D\u0151\x03\x02\x02\x02" +
		"\u016D\u0154\x03\x02\x02\x02\u016D\u0157\x03\x02\x02\x02\u016D\u015A\x03" +
		"\x02\x02\x02\u016D\u015D\x03\x02\x02\x02\u016D\u0160\x03\x02\x02\x02\u016D" +
		"\u0163\x03\x02\x02\x02\u016D\u0166\x03\x02\x02\x02\u016D\u0169\x03\x02" +
		"\x02\x02\u016D\u016C\x03\x02\x02\x02\u016E\x11\x03\x02\x02\x02\u016F\u0172" +
		"\x05\x14\v\x02\u0170\u0172\x05\x18\r\x02\u0171\u016F\x03\x02\x02\x02\u0171" +
		"\u0170\x03\x02\x02\x02\u0172\x13\x03\x02\x02\x02\u0173\u0174\x07\v\x02" +
		"\x02\u0174\u0180\x05j6\x02\u0175\u017C\x07\x06\x02\x02\u0176\u0178\x05" +
		"\x16\f\x02\u0177\u0179\x07\x07\x02\x02\u0178\u0177\x03\x02\x02\x02\u0178" +
		"\u0179\x03\x02\x02\x02\u0179\u017B\x03\x02\x02\x02\u017A\u0176\x03\x02" +
		"\x02\x02\u017B\u017E\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C" +
		"\u017D\x03\x02\x02\x02\u017D\u017F\x03\x02\x02\x02\u017E\u017C\x03\x02" +
		"\x02\x02\u017F\u0181\x07\b\x02\x02\u0180\u0175\x03\x02\x02\x02\u0180\u0181" +
		"\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0186\x07\t\x02\x02" +
		"\u0183\u0185\x05\x18\r\x02\u0184\u0183\x03\x02\x02\x02\u0185\u0188\x03" +
		"\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187" +
		"\u0189\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018A\x07\n\x02" +
		"\x02\u018A\x15\x03\x02\x02\x02\u018B\u018C\x07\x18\x02\x02\u018C\u018D" +
		"\x07\f\x02\x02\u018D\u0190\x07\xAD\x02\x02\u018E\u0190\x07\x19\x02\x02" +
		"\u018F\u018B\x03\x02\x02\x02\u018F\u018E\x03\x02\x02\x02\u0190\x17\x03" +
		"\x02\x02\x02\u0191\u0195\x05\x1A\x0E\x02\u0192\u0195\x05\x1C\x0F\x02\u0193" +
		"\u0195\x05\x14\v\x02\u0194\u0191\x03\x02\x02\x02\u0194\u0192\x03\x02\x02" +
		"\x02\u0194\u0193\x03\x02\x02\x02\u0195\x19\x03\x02\x02\x02\u0196\u0197" +
		"\x07\v\x02\x02\u0197\u01A1\x05R*\x02\u0198\u0199\x07\x1A\x02\x02\u0199" +
		"\u019E\x05j6\x02\u019A\u019B\x07\x07\x02\x02\u019B\u019D\x05j6\x02\u019C" +
		"\u019A\x03\x02\x02\x02\u019D\u01A0\x03\x02\x02\x02\u019E\u019C\x03\x02" +
		"\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A2\x03\x02\x02\x02\u01A0" +
		"\u019E\x03\x02\x02\x02\u01A1\u0198\x03\x02\x02\x02\u01A1\u01A2\x03\x02" +
		"\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A7\x07\t\x02\x02\u01A4\u01A6" +
		"\x05\x06\x04\x02\u01A5\u01A4\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02" +
		"\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AA\x03" +
		"\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AB\x07\n\x02\x02\u01AB" +
		"\x1B\x03\x02\x02\x02\u01AC\u01AD\x07\v\x02\x02\u01AD\u01AE\x05R*\x02\u01AE" +
		"\u01AF\x07\x1B\x02\x02\u01AF\u01B4\x05\x1E\x10\x02\u01B0\u01B1\x07\x07" +
		"\x02\x02\u01B1\u01B3\x05\x1E\x10\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3" +
		"\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02" +
		"\x02\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B7" +
		"\u01B9\x07\x1C\x02\x02\u01B8\u01BA\x05x=\x02\u01B9\u01B8\x03\x02\x02\x02" +
		"\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BF\x07" +
		"\t\x02\x02\u01BC\u01BE\x05 \x11\x02\u01BD\u01BC\x03\x02\x02\x02\u01BE" +
		"\u01C1\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03\x02" +
		"\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2" +
		"\u01C3\x07\n\x02\x02\u01C3\x1D\x03\x02\x02\x02\u01C4\u01C6\x05x=\x02\u01C5" +
		"\u01C4\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7\x03\x02" +
		"\x02\x02\u01C7\u01C8\x05p9\x02\u01C8\x1F\x03\x02\x02\x02\u01C9\u01CC\x05" +
		"\x06\x04\x02\u01CA\u01CC\x05\"\x12\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB" +
		"\u01CA\x03\x02\x02\x02\u01CC!\x03\x02\x02\x02\u01CD\u01CE\x07\x1D\x02" +
		"\x02\u01CE\u01CF\x054\x1B\x02\u01CF#\x03\x02\x02\x02\u01D0\u01D1\x07\v" +
		"\x02\x02\u01D1\u01D5\x05R*\x02\u01D2\u01D3\x07\v\x02\x02\u01D3\u01D5\x05" +
		"j6\x02\u01D4\u01D0\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5%" +
		"\x03\x02\x02\x02\u01D6\u01D7\x07\v\x02\x02\u01D7\u01D8\x05R*\x02\u01D8" +
		"\u01D9\x07\x1B\x02\x02\u01D9\u01DE\x05(\x15\x02\u01DA\u01DB\x07\x07\x02" +
		"\x02\u01DB\u01DD\x05(\x15\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01E0" +
		"\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02" +
		"\u01DF\u01E1\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1\u01E2\x07" +
		"\x1C\x02\x02\u01E2\'\x03\x02\x02\x02\u01E3\u01E4\x054\x1B\x02\u01E4)\x03" +
		"\x02\x02\x02\u01E5\u01E7\x07\x1E\x02\x02\u01E6\u01E5\x03\x02\x02\x02\u01E6" +
		"\u01E7\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EC\x07\t\x02" +
		"\x02\u01E9\u01EB\x050\x19\x02\u01EA\u01E9\x03\x02\x02\x02\u01EB\u01EE" +
		"\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02" +
		"\u01ED\u01EF\x03\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F3\x07" +
		"\n\x02\x02\u01F0\u01F2\x05,\x17\x02\u01F1\u01F0\x03\x02\x02\x02\u01F2" +
		"\u01F5\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F3\u01F4\x03\x02" +
		"\x02\x02\u01F4\u01F8\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F6" +
		"\u01F9\x05.\x18\x02\u01F7\u01F9\x05,\x17\x02\u01F8\u01F6\x03\x02\x02\x02" +
		"\u01F8\u01F7\x03\x02\x02\x02\u01F9\u01FD\x03\x02\x02\x02\u01FA\u01FC\x05" +
		",\x17\x02\u01FB\u01FA\x03\x02\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD" +
		"\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u020A\x03\x02" +
		"\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u0200\u0201\x07\x1E\x02\x02\u0201" +
		"\u0203\x07\t\x02\x02\u0202\u0204\x050\x19\x02\u0203\u0202\x03\x02\x02" +
		"\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206" +
		"\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0208\x07\n\x02\x02" +
		"\u0208\u020A\x03\x02\x02\x02\u0209\u01E6\x03\x02\x02\x02\u0209\u0200\x03" +
		"\x02\x02\x02\u020A+\x03\x02\x02\x02\u020B\u020C\x07\x1F\x02\x02\u020C" +
		"\u022E\x05> \x02\u020D\u020E\x07 \x02\x02\u020E\u022E\x05> \x02\u020F" +
		"\u0210\x07\x1F\x02\x02\u0210\u0216\x054\x1B\x02\u0211\u0213\x07\xA3\x02" +
		"\x02\u0212\u0214\x07!\x02\x02\u0213\u0212\x03\x02\x02\x02\u0213\u0214" +
		"\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0217\x07\xAF\x02\x02" +
		"\u0216\u0211\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u022E\x03" +
		"\x02\x02\x02\u0218\u0219\x07 \x02\x02\u0219\u021F\x054\x1B\x02\u021A\u021C" +
		"\x07\xA3\x02\x02\u021B\u021D\x07!\x02\x02\u021C\u021B\x03\x02\x02\x02" +
		"\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u0220\x07" +
		"\xAF\x02\x02\u021F\u021A\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220" +
		"\u022E\x03\x02\x02\x02\u0221\u0222\x07\x1F\x02\x02\u0222\u0223\x07\x0F" +
		"\x02\x02\u0223\u0225\x05V,\x02\u0224\u0226\t\x04\x02\x02\u0225\u0224\x03" +
		"\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u022E\x03\x02\x02\x02\u0227" +
		"\u0228\x07 \x02\x02\u0228\u0229\x07\x0F\x02\x02\u0229\u022B\x05V,\x02" +
		"\u022A\u022C\t\x04\x02\x02\u022B\u022A\x03\x02\x02\x02\u022B\u022C\x03" +
		"\x02\x02\x02\u022C\u022E\x03\x02\x02\x02\u022D\u020B\x03\x02\x02\x02\u022D" +
		"\u020D\x03\x02\x02\x02\u022D\u020F\x03\x02\x02\x02\u022D\u0218\x03\x02" +
		"\x02\x02\u022D\u0221\x03\x02\x02\x02\u022D\u0227\x03\x02\x02\x02\u022E" +
		"-\x03\x02\x02\x02\u022F\u0230\x07\x03\x02\x02\u0230\u0240\x05\b\x05\x02" +
		"\u0231\u0232\x07\x03\x02\x02\u0232\u0240\x05\x1A\x0E\x02\u0233\u0235\x07" +
		"\x03\x02\x02\u0234\u0236\x07\v\x02\x02\u0235\u0234\x03\x02\x02\x02\u0235" +
		"\u0236\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u023B\x07\t\x02" +
		"\x02\u0238\u023A\x05\x06\x04\x02\u0239\u0238\x03\x02\x02\x02\u023A\u023D" +
		"\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02" +
		"\u023C\u023E\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023E\u0240\x07" +
		"\n\x02\x02\u023F\u022F\x03\x02\x02\x02\u023F\u0231\x03\x02\x02\x02\u023F" +
		"\u0233\x03\x02\x02\x02\u0240/\x03\x02\x02\x02\u0241\u0242\x07$\x02\x02" +
		"\u0242\u029E\x07\xA4\x02\x02\u0243\u0244\x07%\x02\x02\u0244\u029E\t\x05" +
		"\x02\x02\u0245\u0246\x07(\x02\x02\u0246\u029E\x05Z.\x02\u0247\u0248\x07" +
		")\x02\x02\u0248\u029E\x05L\'\x02\u0249\u024A\x07*\x02\x02\u024A\u029E" +
		"\x05L\'\x02\u024B\u024C\x07+\x02\x02\u024C\u029E\x05@!\x02\u024D\u024E" +
		"\x07+\x02\x02\u024E\u024F\x05L\'\x02\u024F\u0250\t\x05\x02\x02\u0250\u029E" +
		"\x03\x02\x02\x02\u0251\u0252\t\x06\x02\x02\u0252\u029E\x05@!\x02\u0253" +
		"\u0254\t\x06\x02\x02\u0254\u029E\x05L\'\x02\u0255\u0256\t\x07\x02\x02" +
		"\u0256\u029E\x05B\"\x02\u0257\u0258\t\x07\x02\x02\u0258\u029E\x05L\'\x02" +
		"\u0259\u025B\t\b\x02\x02\u025A\u0259\x03\x02\x02\x02\u025A\u025B\x03\x02" +
		"\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C\u025E\x072\x02\x02\u025D\u025C" +
		"\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02" +
		"\u025F\u029E\x05L\'\x02\u0260\u0262\t\b\x02\x02\u0261\u0260\x03\x02\x02" +
		"\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0264\x03\x02\x02\x02\u0263\u0265" +
		"\x073\x02\x02\u0264\u0263\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02" +
		"\u0265\u0266\x03\x02\x02\x02\u0266\u0267\x05> \x02\u0267\u0268\x07\x9F" +
		"\x02\x02\u0268\u0269\x05> \x02\u0269\u029E\x03\x02\x02\x02\u026A\u026C" +
		"\t\b\x02\x02\u026B\u026A\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C" +
		"\u026E\x03\x02\x02\x02\u026D\u026F\x073\x02\x02\u026E\u026D\x03\x02\x02" +
		"\x02\u026E\u026F\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270\u0271" +
		"\x05> \x02\u0271\u0272\x052\x1A\x02\u0272\u029E\x03\x02\x02\x02\u0273" +
		"\u0275\t\b\x02\x02\u0274\u0273\x03\x02\x02\x02\u0274\u0275\x03\x02\x02" +
		"\x02\u0275\u0277\x03\x02\x02\x02\u0276\u0278\x07\x11\x02\x02\u0277\u0276" +
		"\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02" +
		"\u0279\u029E\x05\\/\x02\u027A\u027C\t\b\x02\x02\u027B\u027A\x03\x02\x02" +
		"\x02\u027B\u027C\x03\x02\x02\x02\u027C\u027E\x03\x02\x02\x02\u027D\u027F" +
		"\x07\r\x02\x02\u027E\u027D\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02" +
		"\u027F\u0280\x03\x02\x02\x02\u0280\u0281\x05@!\x02\u0281\u0282\x05H%\x02" +
		"\u0282\u029E\x03\x02\x02\x02\u0283\u0285\t\b\x02\x02\u0284\u0283\x03\x02" +
		"\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0287\x03\x02\x02\x02\u0286" +
		"\u0288\x074\x02\x02\u0287\u0286\x03\x02\x02\x02\u0287\u0288\x03\x02\x02" +
		"\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028A\x05@!\x02\u028A\u028B\x05" +
		"@!\x02\u028B\u028C\x05@!\x02\u028C\u028D\t\t\x02\x02\u028D\u029E\x03\x02" +
		"\x02\x02\u028E\u0290\t\b\x02\x02\u028F\u028E\x03\x02\x02\x02\u028F\u0290" +
		"\x03\x02\x02\x02\u0290\u0292\x03\x02\x02\x02\u0291\u0293\x077\x02\x02" +
		"\u0292\u0291\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0294\x03" +
		"\x02\x02\x02\u0294\u029E\x054\x1B\x02\u0295\u0297\t\b\x02\x02\u0296\u0295" +
		"\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02" +
		"\u0298\u0299\x07\x10\x02\x02\u0299\u029A\x05@!\x02\u029A\u029B\x05X-\x02" +
		"\u029B\u029E\x03\x02\x02\x02\u029C\u029E\x05,\x17\x02\u029D\u0241\x03" +
		"\x02\x02\x02\u029D\u0243\x03\x02\x02\x02\u029D\u0245\x03\x02\x02\x02\u029D" +
		"\u0247\x03\x02\x02\x02\u029D\u0249\x03\x02\x02\x02\u029D\u024B\x03\x02" +
		"\x02\x02\u029D\u024D\x03\x02\x02\x02\u029D\u0251\x03\x02\x02\x02\u029D" +
		"\u0253\x03\x02\x02\x02\u029D\u0255\x03\x02\x02\x02\u029D\u0257\x03\x02" +
		"\x02\x02\u029D\u025A\x03\x02\x02\x02\u029D\u0261\x03\x02\x02\x02\u029D" +
		"\u026B\x03\x02\x02\x02\u029D\u0274\x03\x02\x02\x02\u029D\u027B\x03\x02" +
		"\x02\x02\u029D\u0284\x03\x02\x02\x02\u029D\u028F\x03\x02\x02\x02\u029D" +
		"\u0296\x03\x02\x02\x02\u029D\u029C\x03\x02\x02\x02\u029E1\x03\x02\x02" +
		"\x02\u029F\u02A0\x07\xAF\x02\x02\u02A0\u02A2\x078\x02\x02\u02A1\u02A3" +
		"\x07\xAF\x02\x02\u02A2\u02A1\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02" +
		"\u02A3\u02A8\x03\x02\x02\x02\u02A4\u02A5\x078\x02\x02\u02A5\u02A8\x07" +
		"\xAF\x02\x02\u02A6\u02A8\x07\xAF\x02\x02\u02A7\u029F\x03\x02\x02\x02\u02A7" +
		"\u02A4\x03\x02\x02\x02\u02A7\u02A6\x03\x02\x02\x02\u02A83\x03\x02\x02" +
		"\x02\u02A9\u02AA\x05T+\x02\u02AA\u02AB\x079\x02\x02\u02AB\u02AC\x05\xDA" +
		"n\x02\u02AC\u02B6\x03\x02\x02\x02\u02AD\u02AE\x05L\'\x02\u02AE\u02AF\x07" +
		"9\x02\x02\u02AF\u02B0\x05\xDAn\x02\u02B0\u02B6\x03\x02\x02\x02\u02B1\u02B2" +
		"\x05@!\x02\u02B2\u02B3\x079\x02\x02\u02B3\u02B4\x05\xDAn\x02\u02B4\u02B6" +
		"\x03\x02\x02\x02\u02B5\u02A9\x03\x02\x02\x02\u02B5\u02AD\x03\x02\x02\x02" +
		"\u02B5\u02B1\x03\x02\x02\x02\u02B65\x03\x02\x02\x02\u02B7\u02B8\x05T+" +
		"\x02\u02B8\u02B9\x07:\x02\x02\u02B9\u02BA\x05\xD6l\x02\u02BA\u02C4\x03" +
		"\x02\x02\x02\u02BB\u02BC\x05L\'\x02\u02BC\u02BD\x07:\x02\x02\u02BD\u02BE" +
		"\x05\xD6l\x02\u02BE\u02C4\x03\x02\x02\x02\u02BF\u02C0\x05@!\x02\u02C0" +
		"\u02C1\x07:\x02\x02\u02C1\u02C2\x05\xD6l\x02\u02C2\u02C4\x03\x02\x02\x02" +
		"\u02C3\u02B7\x03\x02\x02\x02\u02C3\u02BB\x03\x02\x02\x02\u02C3\u02BF\x03" +
		"\x02\x02\x02\u02C47\x03\x02\x02\x02\u02C5\u02FB\x054\x1B\x02\u02C6\u02FB" +
		"\x056\x1C\x02\u02C7\u02C8\x054\x1B\x02\u02C8\u02C9\x07:\x02\x02\u02C9" +
		"\u02CA\x05\xD6l\x02\u02CA\u02FB\x03\x02\x02\x02\u02CB\u02CC\x054\x1B\x02" +
		"\u02CC\u02CD\x07:\x02\x02\u02CD\u02CE\x054\x1B\x02\u02CE\u02FB\x03\x02" +
		"\x02\x02\u02CF\u02D1\x05x=\x02\u02D0\u02CF\x03\x02\x02\x02\u02D0\u02D1" +
		"\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D3\x054\x1B\x02" +
		"\u02D3\u02D4\x07\f\x02\x02\u02D4\u02D5\x05\xD6l\x02\u02D5\u02FB\x03\x02" +
		"\x02\x02\u02D6\u02D8\x05x=\x02\u02D7\u02D6\x03\x02\x02\x02\u02D7\u02D8" +
		"\x03\x02\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DA\x054\x1B\x02" +
		"\u02DA\u02DB\x07\f\x02\x02\u02DB\u02DC\x054\x1B\x02\u02DC\u02FB\x03\x02" +
		"\x02\x02\u02DD\u02DE\x054\x1B\x02\u02DE\u02DF\x078\x02\x02\u02DF\u02E0" +
		"\x05\xD6l\x02\u02E0\u02FB\x03\x02\x02\x02\u02E1\u02E2\x054\x1B\x02\u02E2" +
		"\u02E3\x078\x02\x02\u02E3\u02E4\x054\x1B\x02\u02E4\u02FB\x03\x02\x02\x02" +
		"\u02E5\u02E6\x054\x1B\x02\u02E6\u02E7\x07;\x02\x02\u02E7\u02E8\x05\xD6" +
		"l\x02\u02E8\u02FB\x03\x02\x02\x02\u02E9\u02EA\x054\x1B\x02\u02EA\u02EB" +
		"\x07;\x02\x02\u02EB\u02EC\x054\x1B\x02\u02EC\u02FB\x03\x02\x02\x02\u02ED" +
		"\u02EE\x054\x1B\x02\u02EE\u02EF\x078\x02\x02\u02EF\u02F0\x07\xAF\x02\x02" +
		"\u02F0\u02F1\x05\xD6l\x02\u02F1\u02FB\x03\x02\x02\x02\u02F2\u02F3\x05" +
		"4\x1B\x02\u02F3\u02F4\x078\x02\x02\u02F4\u02F5\x07\xAF\x02\x02\u02F5\u02F6" +
		"\x054\x1B\x02\u02F6\u02FB\x03\x02\x02\x02\u02F7\u02F8\x054\x1B\x02\u02F8" +
		"\u02F9\x07<\x02\x02\u02F9\u02FB\x03\x02\x02\x02\u02FA\u02C5\x03\x02\x02" +
		"\x02\u02FA\u02C6\x03\x02\x02\x02\u02FA\u02C7\x03\x02\x02\x02\u02FA\u02CB" +
		"\x03\x02\x02\x02\u02FA\u02D0\x03\x02\x02\x02\u02FA\u02D7\x03\x02\x02\x02" +
		"\u02FA\u02DD\x03\x02\x02\x02\u02FA\u02E1\x03\x02\x02\x02\u02FA\u02E5\x03" +
		"\x02\x02\x02\u02FA\u02E9\x03\x02\x02\x02\u02FA\u02ED\x03\x02\x02\x02\u02FA" +
		"\u02F2\x03\x02\x02\x02\u02FA\u02F7\x03\x02\x02\x02\u02FB9\x03\x02\x02" +
		"\x02\u02FC\u0338\x05> \x02\u02FD\u02FE\x05> \x02\u02FE\u02FF\x07=\x02" +
		"\x02\u02FF\u0300\x07\xAF\x02\x02\u0300\u0338\x03\x02\x02\x02\u0301\u0302" +
		"\x05> \x02\u0302\u0303\x07>\x02\x02\u0303\u0304\x07\xAF\x02\x02\u0304" +
		"\u0338\x03\x02\x02\x02\u0305\u0306\x05> \x02\u0306\u0307\x07\f\x02\x02" +
		"\u0307\u0308\x07\xAF\x02\x02\u0308\u0338\x03\x02\x02\x02\u0309\u030A\x05" +
		"> \x02\u030A\u030B\x07=\x02\x02\u030B\u030C\x05> \x02\u030C\u0338\x03" +
		"\x02\x02\x02\u030D\u030E\x05> \x02\u030E\u030F\x07>\x02\x02\u030F\u0310" +
		"\x05> \x02\u0310\u0338\x03\x02\x02\x02\u0311\u0312\x05> \x02\u0312\u0313" +
		"\x07?\x02\x02\u0313\u0314\x05> \x02\u0314\u0338\x03\x02\x02\x02\u0315" +
		"\u0316\x05> \x02\u0316\u0317\x07@\x02\x02\u0317\u0318\x05> \x02\u0318" +
		"\u0338\x03\x02\x02\x02\u0319\u031A\x05> \x02\u031A\u031B\x07A\x02\x02" +
		"\u031B\u031C\x05> \x02\u031C\u0338\x03\x02\x02\x02\u031D\u031E\x05> \x02" +
		"\u031E\u031F\x07B\x02\x02\u031F\u0320\x05> \x02\u0320\u0338\x03\x02\x02" +
		"\x02\u0321\u0322\x05> \x02\u0322\u0323\x07C\x02\x02\u0323\u0324\x05> " +
		"\x02\u0324\u0338\x03\x02\x02\x02\u0325\u0326\x05> \x02\u0326\u0327\x07" +
		"D\x02\x02\u0327\u0328\x05> \x02\u0328\u0338\x03\x02\x02\x02\u0329\u032A" +
		"\x05> \x02\u032A\u032B\x07\f\x02\x02\u032B\u032C\x05> \x02\u032C\u0338";
	private static readonly _serializedATNSegment2: string =
		"\x03\x02\x02\x02\u032D\u032E\x05> \x02\u032E\u032F\x07E\x02\x02\u032F" +
		"\u0338\x03\x02\x02\x02\u0330\u0331\x05> \x02\u0331\u0332\x07F\x02\x02" +
		"\u0332\u0338\x03\x02\x02\x02\u0333\u0334\x05> \x02\u0334\u0335\x07G\x02" +
		"\x02\u0335\u0336\x05<\x1F\x02\u0336\u0338\x03\x02\x02\x02\u0337\u02FC" +
		"\x03\x02\x02\x02\u0337\u02FD\x03\x02\x02\x02\u0337\u0301\x03\x02\x02\x02" +
		"\u0337\u0305\x03\x02\x02\x02\u0337\u0309\x03\x02\x02\x02\u0337\u030D\x03" +
		"\x02\x02\x02\u0337\u0311\x03\x02\x02\x02\u0337\u0315\x03\x02\x02\x02\u0337" +
		"\u0319\x03\x02\x02\x02\u0337\u031D\x03\x02\x02\x02\u0337\u0321\x03\x02" +
		"\x02\x02\u0337\u0325\x03\x02\x02\x02\u0337\u0329\x03\x02\x02\x02\u0337" +
		"\u032D\x03\x02\x02\x02\u0337\u0330\x03\x02\x02\x02\u0337\u0333\x03\x02" +
		"\x02\x02\u0338;\x03\x02\x02\x02\u0339\u033A\b\x1F\x01\x02\u033A\u0341" +
		"\x07\xAF\x02\x02\u033B\u0341\x05> \x02\u033C\u033D\x07\x1B\x02\x02\u033D" +
		"\u033E\x05<\x1F\x02\u033E\u033F\x07\x1C\x02\x02\u033F\u0341\x03\x02\x02" +
		"\x02\u0340\u0339\x03\x02\x02\x02\u0340\u033B\x03\x02\x02\x02\u0340\u033C" +
		"\x03\x02\x02\x02\u0341\u034D\x03\x02\x02\x02\u0342\u0343\f\b\x02\x02\u0343" +
		"\u0344\t\n\x02\x02\u0344\u034C\x05<\x1F\t\u0345\u0346\f\x07\x02\x02\u0346" +
		"\u0347\t\v\x02\x02\u0347\u034C\x05<\x1F\b\u0348\u0349\f\x06\x02\x02\u0349" +
		"\u034A\t\f\x02\x02\u034A\u034C\x05<\x1F\x07\u034B\u0342\x03\x02\x02\x02" +
		"\u034B\u0345\x03\x02\x02\x02\u034B\u0348\x03\x02\x02\x02\u034C\u034F\x03" +
		"\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E" +
		"=\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02\u0350\u0351\x05t;\x02\u0351" +
		"\u0352\x05L\'\x02\u0352\u0358\x03\x02\x02\x02\u0353\u0354\x05L\'\x02\u0354" +
		"\u0355\x07L\x02\x02\u0355\u0356\x05t;\x02\u0356\u0358\x03\x02\x02\x02" +
		"\u0357\u0350\x03\x02\x02\x02\u0357\u0353\x03\x02\x02\x02\u0358?\x03\x02" +
		"\x02\x02\u0359\u035A\x07M\x02\x02\u035A\u035B\x05F$\x02\u035B\u035C\x05" +
		"F$\x02\u035C\u035D\x05F$\x02\u035D\u035E\x07N\x02\x02\u035EA\x03\x02\x02" +
		"\x02\u035F\u0360\x07M\x02\x02\u0360\u0361\x05F$\x02\u0361\u0362\x05F$" +
		"\x02\u0362\u0363\x07N\x02\x02\u0363C\x03\x02\x02\x02\u0364\u0365\x07M" +
		"\x02\x02\u0365\u0366\x05F$\x02\u0366\u0367\x05F$\x02\u0367\u0368\x05F" +
		"$\x02\u0368\u0369\x05F$\x02\u0369\u036A\x05F$\x02\u036A\u036B\x07N\x02" +
		"\x02\u036BE\x03\x02\x02\x02\u036C\u036D\t\r\x02\x02\u036DG\x03\x02\x02" +
		"\x02\u036E\u0370\x05P)\x02\u036F\u0371\x05J&\x02\u0370\u036F\x03\x02\x02" +
		"\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0373\x03\x02\x02\x02\u0372\u0374" +
		"\x05\xD6l\x02\u0373\u0372\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02" +
		"\u0374I\x03\x02\x02\x02\u0375\u0377\x07\x06\x02\x02\u0376\u0378\v\x02" +
		"\x02\x02\u0377\u0376\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379" +
		"\u037A\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u037A\u037B\x03\x02" +
		"\x02\x02\u037B\u037C\x07\b\x02\x02\u037CK\x03\x02\x02\x02\u037D\u0385" +
		"\x07\xA1\x02\x02\u037E\u0380\x07\x06\x02\x02\u037F\u0381\v\x02\x02\x02" +
		"\u0380\u037F\x03\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382\u0383\x03" +
		"\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384" +
		"\u0386\x07\b\x02\x02\u0385\u037E\x03\x02\x02\x02\u0385\u0386\x03\x02\x02" +
		"\x02\u0386\u038D\x03\x02\x02\x02\u0387\u0388\x07O\x02\x02\u0388\u038D" +
		"\x05t;\x02\u0389\u038A\x07P\x02\x02\u038A\u038D\x05t;\x02\u038B\u038D" +
		"\x07P\x02\x02\u038C\u037D\x03\x02\x02\x02\u038C\u0387\x03\x02\x02\x02" +
		"\u038C\u0389\x03\x02\x02\x02\u038C\u038B\x03\x02\x02\x02\u038DM\x03\x02" +
		"\x02\x02\u038E\u038F\x05p9\x02\u038F\u0390\x07L\x02\x02\u0390\u0391\x05" +
		"v<\x02\u0391\u0394\x03\x02\x02\x02\u0392\u0394\x05v<\x02\u0393\u038E\x03" +
		"\x02\x02\x02\u0393\u0392\x03\x02\x02\x02\u0394O\x03\x02\x02\x02\u0395" +
		"\u0396\x05N(\x02\u0396Q\x03\x02\x02\x02\u0397\u0398\x05N(\x02\u0398S\x03" +
		"\x02\x02\x02\u0399\u039A\x05N(\x02\u039AU\x03\x02\x02\x02\u039B\u039C" +
		"\x05N(\x02\u039CW\x03\x02\x02\x02\u039D\u039E\x05N(\x02\u039EY\x03\x02" +
		"\x02\x02\u039F\u03A0\x05N(\x02\u03A0[\x03\x02\x02\x02\u03A1\u03A2\x05" +
		"N(\x02\u03A2]\x03\x02\x02\x02\u03A3\u03A4\x05N(\x02\u03A4_\x03\x02\x02" +
		"\x02\u03A5\u03A6\x05N(\x02\u03A6a\x03\x02\x02\x02\u03A7\u03A8\x05N(\x02" +
		"\u03A8c\x03\x02\x02\x02\u03A9\u03AA\x07P\x02\x02\u03AA\u03AB\x05N(\x02" +
		"\u03ABe\x03\x02\x02\x02\u03AC\u03AD\x05d3\x02\u03ADg\x03\x02\x02\x02\u03AE" +
		"\u03AF\x05d3\x02\u03AFi\x03\x02\x02\x02\u03B0\u03B1\x05d3\x02\u03B1k\x03" +
		"\x02\x02\x02\u03B2\u03B3\x05d3\x02\u03B3m\x03\x02\x02\x02\u03B4\u03B5" +
		"\x05p9\x02\u03B5\u03B6\x07L\x02\x02\u03B6\u03B8\x03\x02\x02\x02\u03B7" +
		"\u03B4\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8\u03B9\x03\x02" +
		"\x02\x02\u03B9\u03BA\x05p9\x02\u03BAo\x03\x02\x02\x02\u03BB\u03BC\t\x0E" +
		"\x02\x02\u03BCq\x03\x02\x02\x02\u03BD\u03BE\x05N(\x02\u03BEs\x03\x02\x02" +
		"\x02\u03BF\u03C0\t\x0F\x02\x02\u03C0u\x03\x02\x02\x02\u03C1\u03C6\x05" +
		"p9\x02\u03C2\u03C3\x07H\x02\x02\u03C3\u03C5\x05p9\x02\u03C4\u03C2\x03" +
		"\x02\x02\x02\u03C5\u03C8\x03\x02\x02\x02\u03C6\u03C4\x03\x02\x02\x02\u03C6" +
		"\u03C7\x03\x02\x02\x02\u03C7w\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02" +
		"\x02\u03C9\u03CA\x05p9\x02\u03CA\u03CB\x07L\x02\x02\u03CB\u03CD\x03\x02" +
		"\x02\x02\u03CC\u03C9\x03\x02\x02\x02\u03CC\u03CD\x03\x02\x02\x02\u03CD" +
		"\u03CE\x03\x02\x02\x02\u03CE\u03D1\x05p9\x02\u03CF\u03D0\x07\x06\x02\x02" +
		"\u03D0\u03D2\x07\b\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D1\u03D2\x03" +
		"\x02\x02\x02\u03D2y\x03\x02\x02\x02\u03D3\u03D4\x05p9\x02\u03D4{\x03\x02" +
		"\x02\x02\u03D5\u03D8\x05^0\x02\u03D6\u03D8\x05f4\x02\u03D7\u03D5\x03\x02" +
		"\x02\x02\u03D7\u03D6\x03\x02\x02\x02\u03D8\u03DB\x03\x02\x02\x02\u03D9" +
		"\u03DC\x05\xDEp\x02\u03DA\u03DC\x05\xD6l\x02\u03DB\u03D9\x03\x02\x02\x02" +
		"\u03DB\u03DA\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC}\x03\x02" +
		"\x02\x02\u03DD\u03E0\x05P)\x02\u03DE\u03E0\x05h5\x02\u03DF\u03DD\x03\x02" +
		"\x02\x02\u03DF\u03DE\x03\x02\x02\x02\u03E0\u03E2\x03\x02\x02\x02\u03E1" +
		"\u03E3\x05J&\x02\u03E2\u03E1\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02" +
		"\u03E3\u03E6\x03\x02\x02\x02\u03E4\u03E7\x05\xDEp\x02\u03E5\u03E7\x05" +
		"\xD6l\x02\u03E6\u03E4\x03\x02\x02\x02\u03E6\u03E5\x03\x02\x02\x02\u03E6" +
		"\u03E7\x03\x02\x02\x02\u03E7\x7F\x03\x02\x02\x02\u03E8\u03E9\x077\x02" +
		"\x02\u03E9\u03ED\x07\t\x02\x02\u03EA\u03EC\x058\x1D\x02\u03EB\u03EA\x03" +
		"\x02\x02\x02\u03EC\u03EF\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03ED" +
		"\u03EE\x03\x02\x02\x02\u03EE\u03F0\x03\x02\x02\x02\u03EF\u03ED\x03\x02" +
		"\x02\x02\u03F0\u03F1\x07\n\x02\x02\u03F1\x81\x03\x02\x02\x02\u03F2\u03F3" +
		"\x07Q\x02\x02\u03F3\u03F7\x07\t\x02\x02\u03F4\u03F6\x05\x84C\x02\u03F5" +
		"\u03F4\x03\x02\x02\x02\u03F6\u03F9\x03\x02\x02\x02\u03F7\u03F5\x03\x02" +
		"\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8\u03FA\x03\x02\x02\x02\u03F9" +
		"\u03F7\x03\x02\x02\x02\u03FA\u03FB\x07\n\x02\x02\u03FB\x83\x03\x02\x02" +
		"\x02\u03FC\u0402\x05:\x1E\x02\u03FD\u03FF\x05L\'\x02\u03FE\u03FD\x03\x02" +
		"\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400" +
		"\u0402\x07R\x02\x02\u0401\u03FC\x03\x02\x02\x02\u0401\u03FE\x03\x02\x02" +
		"\x02\u0402\x85\x03\x02\x02\x02\u0403\u0408\x07Q\x02\x02\u0404\u0405\x07" +
		"\x1B\x02\x02\u0405\u0406\x05r:\x02\u0406\u0407\x07\x1C\x02\x02\u0407\u0409" +
		"\x03\x02\x02\x02\u0408\u0404\x03\x02\x02\x02\u0408\u0409\x03\x02\x02\x02" +
		"\u0409\u040A\x03\x02\x02\x02\u040A\u040B\x05p9\x02\u040B\u0417\x05\xD8" +
		"m\x02\u040C\u0413\x07\t\x02\x02\u040D\u040F\x07S\x02\x02\u040E\u040D\x03" +
		"\x02\x02\x02\u040E\u040F\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410" +
		"\u0412\x05\x88E\x02\u0411\u040E\x03\x02\x02\x02\u0412\u0415\x03\x02\x02" +
		"\x02\u0413\u0411\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414\u0416" +
		"\x03\x02\x02\x02\u0415\u0413\x03\x02\x02\x02\u0416\u0418\x07\n\x02\x02" +
		"\u0417\u040C\x03\x02\x02\x02\u0417\u0418\x03\x02\x02\x02\u0418\u0444\x03" +
		"\x02\x02\x02\u0419\u041A\x07Q\x02\x02\u041A\u041B\x07\x1B\x02\x02\u041B" +
		"\u041C\x05r:\x02\u041C\u041D\x07\x1C\x02\x02\u041D\u041E\x05p9\x02\u041E" +
		"\u0444\x03\x02\x02\x02\u041F\u0424\x07Q\x02\x02\u0420\u0421\x07\x1B\x02" +
		"\x02\u0421\u0422\x05r:\x02\u0422\u0423\x07\x1C\x02\x02\u0423\u0425\x03" +
		"\x02\x02\x02\u0424\u0420\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425" +
		"\u0426\x03\x02\x02\x02\u0426\u0427\x05p9\x02\u0427\u0433\x07\x17\x02\x02" +
		"\u0428\u042F\x07\t\x02\x02\u0429\u042B\x07S\x02\x02\u042A\u0429\x03\x02" +
		"\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C" +
		"\u042E\x05\x88E\x02\u042D\u042A\x03\x02\x02\x02\u042E\u0431\x03\x02\x02" +
		"\x02\u042F\u042D\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0432" +
		"\x03\x02\x02\x02\u0431\u042F\x03\x02\x02\x02\u0432\u0434\x07\n\x02\x02" +
		"\u0433\u0428\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0444\x03" +
		"\x02\x02\x02\u0435\u0436\x07Q\x02\x02\u0436\u0437\x05p9\x02\u0437\u043E" +
		"\x07\t\x02\x02\u0438\u043A\x07S\x02\x02\u0439\u0438\x03\x02\x02\x02\u0439" +
		"\u043A\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B\u043D\x05\x88" +
		"E\x02\u043C\u0439\x03\x02\x02\x02\u043D\u0440\x03\x02\x02\x02\u043E\u043C" +
		"\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02\u043F\u0441\x03\x02\x02\x02" +
		"\u0440\u043E\x03\x02\x02\x02\u0441\u0442\x07\n\x02\x02\u0442\u0444\x03" +
		"\x02\x02\x02\u0443\u0403\x03\x02\x02\x02\u0443\u0419\x03\x02\x02\x02\u0443" +
		"\u041F\x03\x02\x02\x02\u0443\u0435\x03\x02\x02\x02\u0444\x87\x03\x02\x02" +
		"\x02\u0445\u044D\x07<\x02\x02\u0446\u0447\x07T\x02\x02\u0447\u044D\x05" +
		"\xD8m\x02\u0448\u0449\x07U\x02\x02\u0449\u044D\t\x10\x02\x02\u044A\u044B" +
		"\x07X\x02\x02\u044B\u044D\x05p9\x02\u044C\u0445\x03\x02\x02\x02\u044C" +
		"\u0446\x03\x02\x02\x02\u044C\u0448\x03\x02\x02\x02\u044C\u044A\x03\x02" +
		"\x02\x02\u044D\x89\x03\x02\x02\x02\u044E\u044F\x07\x0F\x02\x02\u044F\u0450" +
		"\x05V,\x02\u0450\u045C\x05\xD8m\x02\u0451\u0458\x07\t\x02\x02\u0452\u0454" +
		"\x07S\x02\x02\u0453\u0452\x03\x02\x02\x02\u0453\u0454\x03\x02\x02\x02" +
		"\u0454\u0455\x03\x02\x02\x02\u0455\u0457\x05\x8CG\x02\u0456\u0453\x03" +
		"\x02\x02\x02\u0457\u045A\x03\x02\x02\x02\u0458\u0456\x03\x02\x02\x02\u0458" +
		"\u0459\x03\x02\x02\x02\u0459\u045B\x03\x02\x02\x02\u045A\u0458\x03\x02" +
		"\x02\x02\u045B\u045D\x07\n\x02\x02\u045C\u0451\x03\x02\x02\x02\u045C\u045D" +
		"\x03\x02\x02\x02\u045D\u046D\x03\x02\x02\x02\u045E\u045F\x07\x0F\x02\x02" +
		"\u045F\u0460\x05V,\x02\u0460\u0467\x07\t\x02\x02\u0461\u0463\x07S\x02" +
		"\x02\u0462\u0461\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463\u0464" +
		"\x03\x02\x02\x02\u0464\u0466\x05\x8CG\x02\u0465\u0462\x03\x02\x02\x02" +
		"\u0466\u0469\x03\x02\x02\x02\u0467\u0465\x03\x02\x02\x02\u0467\u0468\x03" +
		"\x02\x02\x02\u0468\u046A\x03\x02\x02\x02\u0469\u0467\x03\x02\x02\x02\u046A" +
		"\u046B\x07\n\x02\x02\u046B\u046D\x03\x02\x02\x02\u046C\u044E\x03\x02\x02" +
		"\x02\u046C\u045E\x03\x02\x02\x02\u046D\x8B\x03\x02\x02\x02\u046E\u0470" +
		"\x07Y\x02\x02\u046F\u046E\x03\x02\x02\x02\u046F\u0470\x03\x02\x02\x02" +
		"\u0470\u0471\x03\x02\x02\x02\u0471\u049C\t\x11\x02\x02\u0472\u049C\x07" +
		"<\x02\x02\u0473\u0475\x07\\\x02\x02\u0474\u0473\x03\x02\x02\x02\u0474" +
		"\u0475\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476\u0477\x07]\x02" +
		"\x02\u0477\u049C\t\x12\x02\x02\u0478\u047A\x07\\\x02\x02\u0479\u0478\x03" +
		"\x02\x02\x02\u0479\u047A\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B" +
		"\u047C\x07#\x02\x02\u047C\u049C\x07\xAF\x02\x02\u047D\u047F\x07\\\x02" +
		"\x02\u047E\u047D\x03\x02\x02\x02\u047E\u047F\x03\x02\x02\x02\u047F\u0480" +
		"\x03\x02\x02\x02\u0480\u0481\x07e\x02\x02\u0481\u049C\x05\xD8m\x02\u0482" +
		"\u0484\x07\\\x02\x02\u0483\u0482\x03\x02\x02\x02\u0483\u0484\x03\x02\x02" +
		"\x02\u0484\u0485\x03\x02\x02\x02\u0485\u0486\x07f\x02\x02\u0486\u049C" +
		"\x05L\'\x02\u0487\u0489\x07\\\x02\x02\u0488\u0487\x03\x02\x02\x02\u0488" +
		"\u0489\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\u048B\x07f\x02" +
		"\x02\u048B\u049C\x07\x17\x02\x02\u048C\u048E\x07\\\x02\x02\u048D\u048C" +
		"\x03\x02\x02\x02\u048D\u048E\x03\x02\x02\x02\u048E\u048F\x03\x02\x02\x02" +
		"\u048F\u0490\x07g\x02\x02\u0490\u049C\t\x13\x02\x02\u0491\u0493\x07\\" +
		"\x02\x02\u0492\u0491\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493" +
		"\u0494\x03\x02\x02\x02\u0494\u0495\x07\"\x02\x02\u0495\u049C\x07\xAF\x02" +
		"\x02\u0496\u0498\x07\\\x02\x02\u0497\u0496\x03\x02\x02\x02\u0497\u0498" +
		"\x03\x02\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499\u049A\x07[\x02\x02" +
		"\u049A\u049C\t\x14\x02\x02\u049B\u046F\x03\x02\x02\x02\u049B\u0472\x03" +
		"\x02\x02\x02\u049B\u0474\x03\x02\x02\x02\u049B\u0479\x03\x02\x02\x02\u049B" +
		"\u047E\x03\x02\x02\x02\u049B\u0483\x03\x02\x02\x02\u049B\u0488\x03\x02" +
		"\x02\x02\u049B\u048D\x03\x02\x02\x02\u049B\u0492\x03\x02\x02\x02\u049B" +
		"\u0497\x03\x02\x02\x02\u049C\x8D\x03\x02\x02\x02\u049D\u049E\x07\x0F\x02" +
		"\x02\u049E\u04A0\x05V,\x02\u049F\u04A1\t\x11\x02\x02\u04A0\u049F\x03\x02" +
		"\x02\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1\u04B1\x03\x02\x02\x02\u04A2" +
		"\u04A3\x07\x0F\x02\x02\u04A3\u04A5\x05V,\x02\u04A4\u04A6\x07\"\x02\x02" +
		"\u04A5\u04A4\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A7\x03" +
		"\x02\x02\x02\u04A7\u04A8\x07\f\x02\x02\u04A8\u04A9\x07\xAF\x02\x02\u04A9" +
		"\u04B1\x03\x02\x02\x02\u04AA\u04AB\x07\x0F\x02\x02\u04AB\u04AC\x05V,\x02" +
		"\u04AC\u04AD\x07#\x02\x02\u04AD\u04AE\x07\f\x02\x02\u04AE\u04AF\x07\xAF" +
		"\x02\x02\u04AF\u04B1\x03\x02\x02\x02\u04B0\u049D\x03\x02\x02\x02\u04B0" +
		"\u04A2\x03\x02\x02\x02\u04B0\u04AA\x03\x02\x02\x02\u04B1\x8F\x03\x02\x02" +
		"\x02\u04B2\u04B3\x07o\x02\x02\u04B3\u04B7\x07\t\x02\x02\u04B4\u04B6\x05" +
		"\x92J\x02\u04B5\u04B4\x03\x02\x02\x02\u04B6\u04B9\x03\x02\x02\x02\u04B7" +
		"\u04B5\x03\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8\u04BA\x03\x02" +
		"\x02\x02\u04B9\u04B7\x03\x02\x02\x02\u04BA\u04CA\x07\n\x02\x02\u04BB\u04BC" +
		"\x07o\x02\x02\u04BC\u04BD\x05L\'\x02\u04BD\u04C4\x07\t\x02\x02\u04BE\u04C0" +
		"\x07S\x02\x02\u04BF\u04BE\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02" +
		"\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04C3\x05\x94K\x02\u04C2\u04BF\x03" +
		"\x02\x02\x02\u04C3\u04C6\x03\x02\x02\x02\u04C4\u04C2\x03\x02\x02\x02\u04C4" +
		"\u04C5\x03\x02\x02\x02\u04C5\u04C7\x03\x02\x02\x02\u04C6\u04C4\x03\x02" +
		"\x02\x02\u04C7\u04C8\x07\n\x02\x02\u04C8\u04CA\x03\x02\x02\x02\u04C9\u04B2" +
		"\x03\x02\x02\x02\u04C9\u04BB\x03\x02\x02\x02\u04CA\x91\x03\x02\x02\x02" +
		"\u04CB\u04CC\x05L\'\x02\u04CC\u04CD\x07S\x02\x02\u04CD\u04CE\x05\x96L" +
		"\x02\u04CE\u04DD\x03\x02\x02\x02\u04CF\u04D0\x05L\'\x02\u04D0\u04D7\x07" +
		"\t\x02\x02\u04D1\u04D3\x07S\x02\x02\u04D2\u04D1\x03\x02\x02\x02\u04D2" +
		"\u04D3\x03\x02\x02\x02\u04D3\u04D4\x03\x02\x02\x02\u04D4\u04D6\x05\x94" +
		"K\x02\u04D5\u04D2\x03\x02\x02\x02\u04D6\u04D9\x03\x02\x02\x02\u04D7\u04D5" +
		"\x03\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04DA\x03\x02\x02\x02" +
		"\u04D9\u04D7\x03\x02\x02\x02\u04DA\u04DB\x07\n\x02\x02\u04DB\u04DD\x03" +
		"\x02\x02\x02\u04DC\u04CB\x03\x02\x02\x02\u04DC\u04CF\x03\x02\x02\x02\u04DD" +
		"\x93\x03\x02\x02\x02\u04DE\u04DF\t\x15\x02\x02\u04DF\u04E7\x05\xD8m\x02" +
		"\u04E0\u04E7\x07r\x02\x02\u04E1\u04E7\x07E\x02\x02\u04E2\u04E3\x07s\x02" +
		"\x02\u04E3\u04E4\x07\xAF\x02\x02\u04E4\u04E5\x07\xAF\x02\x02\u04E5\u04E7" +
		"\x07\xAF\x02\x02\u04E6\u04DE\x03\x02\x02\x02\u04E6\u04E0\x03\x02\x02\x02" +
		"\u04E6\u04E1\x03\x02\x02\x02\u04E6\u04E2\x03\x02\x02\x02\u04E7\x95\x03" +
		"\x02\x02\x02\u04E8\u04E9\t\x15\x02\x02\u04E9\u04F7\x05\xD8m\x02\u04EA" +
		"\u04EB\x07o\x02\x02\u04EB\u04EC\x07S\x02\x02\u04EC\u04F7\x07r\x02\x02" +
		"\u04ED\u04EE\x07o\x02\x02\u04EE\u04EF\x07S\x02\x02\u04EF\u04F7\x07E\x02" +
		"\x02\u04F0\u04F1\x07o\x02\x02\u04F1\u04F2\x07S\x02\x02\u04F2\u04F3\x07" +
		"s\x02\x02\u04F3\u04F4\x07\xAF\x02\x02\u04F4\u04F5\x07\xAF\x02\x02\u04F5" +
		"\u04F7\x07\xAF\x02\x02\u04F6\u04E8\x03\x02\x02\x02\u04F6\u04EA\x03\x02" +
		"\x02\x02\u04F6\u04ED\x03\x02\x02\x02\u04F6\u04F0\x03\x02\x02\x02\u04F7" +
		"\x97\x03\x02\x02\x02\u04F8\u04F9\x07X\x02\x02\u04F9\u04FD\x07\t\x02\x02" +
		"\u04FA\u04FC\x05\x9AN\x02\u04FB\u04FA\x03\x02\x02\x02\u04FC\u04FF\x03" +
		"\x02\x02\x02\u04FD\u04FB\x03\x02\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE" +
		"\u0500\x03\x02\x02\x02\u04FF\u04FD\x03\x02\x02\x02\u0500\u0510\x07\n\x02" +
		"\x02\u0501\u0502\x07X\x02\x02\u0502\u0503\x05L\'\x02\u0503\u050A\x07\t" +
		"\x02\x02\u0504\u0506\x07S\x02\x02\u0505\u0504\x03\x02\x02\x02\u0505\u0506" +
		"\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507\u0509\x05\x9CO\x02" +
		"\u0508\u0505\x03\x02\x02\x02\u0509\u050C\x03\x02\x02\x02\u050A\u0508\x03" +
		"\x02\x02\x02\u050A\u050B\x03\x02\x02\x02\u050B\u050D\x03\x02\x02\x02\u050C" +
		"\u050A\x03\x02\x02\x02\u050D\u050E\x07\n\x02\x02\u050E\u0510\x03\x02\x02" +
		"\x02\u050F\u04F8\x03\x02\x02\x02\u050F\u0501\x03\x02\x02\x02\u0510\x99" +
		"\x03\x02\x02\x02\u0511\u0525\x05\x86D\x02\u0512\u0525\x05\x8AF\x02\u0513" +
		"\u0514\x05L\'\x02\u0514\u0515\x07S\x02\x02\u0515\u0516\x05\x9CO\x02\u0516" +
		"\u0525\x03\x02\x02\x02\u0517\u0518\x05L\'\x02\u0518\u051F\x07\t\x02\x02" +
		"\u0519\u051B\x07S\x02\x02\u051A\u0519\x03\x02\x02\x02\u051A\u051B\x03" +
		"\x02\x02\x02\u051B\u051C\x03\x02\x02\x02\u051C\u051E\x05\x9CO\x02\u051D" +
		"\u051A\x03\x02\x02\x02\u051E\u0521\x03\x02\x02\x02\u051F\u051D\x03\x02" +
		"\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520\u0522\x03\x02\x02\x02\u0521" +
		"\u051F\x03\x02\x02\x02\u0522\u0523\x07\n\x02\x02\u0523\u0525\x03\x02\x02" +
		"\x02\u0524\u0511\x03\x02\x02\x02\u0524\u0512\x03\x02\x02\x02\u0524\u0513" +
		"\x03\x02\x02\x02\u0524\u0517\x03\x02\x02\x02\u0525\x9B\x03\x02\x02\x02" +
		"\u0526\u0537\x05\x96L\x02\u0527\u0528\x07o\x02\x02\u0528\u052C\x07\t\x02" +
		"\x02\u0529\u052B\x05\x94K\x02\u052A\u0529\x03\x02\x02\x02\u052B\u052E" +
		"\x03\x02\x02\x02\u052C\u052A\x03\x02\x02\x02\u052C\u052D\x03\x02\x02\x02" +
		"\u052D\u052F\x03\x02\x02\x02\u052E\u052C\x03\x02\x02\x02\u052F\u0537\x07" +
		"\n\x02\x02\u0530\u0531\x07t\x02\x02\u0531\u0537\x05\xD8m\x02\u0532\u0533" +
		"\x07\x0F\x02\x02\u0533\u0534\x05V,\x02\u0534\u0535\x05\xD8m\x02\u0535" +
		"\u0537\x03\x02\x02\x02\u0536\u0526\x03\x02\x02\x02\u0536\u0527\x03\x02" +
		"\x02\x02\u0536\u0530\x03\x02\x02\x02\u0536\u0532\x03\x02\x02\x02\u0537" +
		"\x9D\x03\x02\x02\x02\u0538\u0539\x07\x14\x02\x02\u0539\u053D\x07\t\x02" +
		"\x02\u053A\u053C\x05\xACW\x02\u053B\u053A\x03\x02\x02\x02\u053C\u053F" +
		"\x03\x02\x02\x02\u053D\u053B\x03\x02\x02\x02\u053D\u053E\x03\x02\x02\x02" +
		"\u053E\u0540\x03\x02\x02\x02\u053F\u053D\x03\x02\x02\x02\u0540\u054D\x07" +
		"\n\x02\x02\u0541\u0542\x07\x14\x02\x02\u0542\u0543\x05L\'\x02\u0543\u0547" +
		"\x07\t\x02\x02\u0544\u0546\x05\xAEX\x02\u0545\u0544\x03\x02\x02\x02\u0546" +
		"\u0549\x03\x02\x02\x02\u0547\u0545\x03\x02\x02\x02\u0547\u0548\x03\x02" +
		"\x02\x02\u0548\u054A\x03\x02\x02\x02\u0549\u0547\x03\x02\x02\x02\u054A" +
		"\u054B\x07\n\x02\x02\u054B\u054D\x03\x02\x02\x02\u054C\u0538\x03\x02\x02" +
		"\x02\u054C\u0541\x03\x02\x02\x02\u054D\x9F\x03\x02\x02\x02\u054E\u054F" +
		"\x07\x15\x02\x02\u054F\u0553\x07\t\x02\x02\u0550\u0552\x05\xA2R\x02\u0551" +
		"\u0550\x03\x02\x02\x02\u0552\u0555\x03\x02\x02\x02\u0553\u0551\x03\x02" +
		"\x02\x02\u0553\u0554\x03\x02\x02\x02\u0554\u0556\x03\x02\x02\x02\u0555" +
		"\u0553\x03\x02\x02\x02\u0556\u0563\x07\n\x02\x02\u0557\u0558\x07\x15\x02" +
		"\x02\u0558\u0559\x05L\'\x02\u0559\u055D\x07\t\x02\x02\u055A\u055C\x05" +
		"\xA4S\x02\u055B\u055A\x03\x02\x02\x02\u055C\u055F\x03\x02\x02\x02\u055D" +
		"\u055B\x03\x02\x02\x02\u055D\u055E\x03\x02\x02\x02\u055E\u0560\x03\x02" +
		"\x02\x02\u055F\u055D\x03\x02\x02\x02\u0560\u0561\x07\n\x02\x02\u0561\u0563" +
		"\x03\x02\x02\x02\u0562\u054E\x03\x02\x02\x02\u0562\u0557\x03\x02\x02\x02" +
		"\u0563\xA1\x03\x02\x02\x02\u0564\u0565\x05@!\x02\u0565\u0566\x07=\x02" +
		"\x02\u0566\u0567\x05\xAAV\x02\u0567\u0582\x03\x02\x02\x02\u0568\u0569" +
		"\x05@!\x02\u0569\u056A\x07\f\x02\x02\u056A\u056B\x05\xAAV\x02\u056B\u0582" +
		"\x03\x02\x02\x02\u056C\u056D\x05@!\x02\u056D\u056E\x079\x02\x02\u056E" +
		"\u056F\x05\xA8U\x02\u056F\u0582\x03\x02\x02\x02\u0570\u0571\x05L\'\x02" +
		"\u0571\u0572\x05\xA6T\x02\u0572\u0582\x03\x02\x02\x02\u0573\u0574\x05" +
		"L\'\x02\u0574\u0575\x079\x02\x02\u0575\u0576\x05\xA8U\x02\u0576\u0582" +
		"\x03\x02\x02\x02\u0577\u0578\x05L\'\x02\u0578\u057C\x07\t\x02\x02\u0579" +
		"\u057B\x05\xA4S\x02\u057A\u0579\x03\x02\x02\x02\u057B\u057E\x03\x02\x02" +
		"\x02\u057C\u057A\x03\x02\x02\x02\u057C\u057D\x03\x02\x02\x02\u057D\u057F" +
		"\x03\x02\x02\x02\u057E\u057C\x03\x02\x02\x02\u057F\u0580\x07\n\x02\x02" +
		"\u0580\u0582\x03\x02\x02\x02\u0581\u0564\x03\x02\x02\x02\u0581\u0568\x03" +
		"\x02\x02\x02\u0581\u056C\x03\x02\x02\x02\u0581\u0570\x03\x02\x02\x02\u0581" +
		"\u0573\x03\x02\x02\x02\u0581\u0577\x03\x02\x02\x02\u0582\xA3\x03\x02\x02" +
		"\x02\u0583\u0586\x05\xA6T\x02\u0584\u0586\x05\xA8U\x02\u0585\u0583\x03" +
		"\x02\x02\x02\u0585\u0584\x03\x02\x02\x02\u0586\xA5\x03\x02\x02\x02\u0587" +
		"\u0588\t\x16\x02\x02\u0588\u0589\x05\xAAV\x02\u0589\xA7\x03\x02\x02\x02" +
		"\u058A\u058B\x05z>\x02\u058B\u058C\x07\f\x02\x02\u058C\u058E\x05\xAAV" +
		"\x02\u058D\u058F\x07!\x02\x02\u058E\u058D\x03\x02\x02\x02\u058E\u058F" +
		"\x03\x02\x02\x02\u058F\u0591\x03\x02\x02\x02\u0590\u0592\x07\xAF\x02\x02" +
		"\u0591\u0590\x03\x02\x02\x02\u0591\u0592\x03\x02\x02\x02\u0592\xA9\x03" +
		"\x02\x02\x02\u0593\u0594\x07v\x02\x02\u0594\u0595\x05`1\x02\u0595\u0597" +
		"\x05@!\x02\u0596\u0598\t\x17\x02\x02\u0597\u0596\x03\x02\x02\x02\u0597" +
		"\u0598\x03\x02\x02\x02\u0598\u05B4\x03\x02\x02\x02\u0599\u059A\x07v\x02" +
		"\x02\u059A\u059B\x05`1\x02\u059B\u059C\x05@!\x02\u059C\u059D\x05^0\x02" +
		"\u059D\u05B4\x03\x02\x02\x02\u059E\u05A0\x07\x15\x02\x02\u059F\u059E\x03" +
		"\x02\x02\x02\u059F\u05A0\x03\x02\x02\x02\u05A0\u05A1\x03\x02\x02\x02\u05A1" +
		"\u05B4\x05`1\x02\u05A2\u05A4\x07y\x02\x02\u05A3\u05A2\x03\x02\x02\x02" +
		"\u05A3\u05A4\x03\x02\x02\x02\u05A4\u05A5\x03\x02\x02\x02\u05A5\u05B4\x05" +
		"L\'\x02\u05A6\u05A8\x07z\x02\x02\u05A7\u05A6\x03\x02\x02\x02\u05A7\u05A8" +
		"\x03\x02\x02\x02\u05A8\u05A9\x03\x02\x02\x02\u05A9\u05AB\x05@!\x02\u05AA" +
		"\u05AC\t\x17\x02\x02\u05AB\u05AA\x03\x02\x02\x02\u05AB\u05AC\x03\x02\x02" +
		"\x02\u05AC\u05B4\x03\x02\x02\x02\u05AD\u05AF\x07z\x02\x02\u05AE\u05AD" +
		"\x03\x02\x02\x02\u05AE\u05AF\x03\x02\x02\x02\u05AF\u05B0\x03\x02\x02\x02" +
		"\u05B0\u05B1\x05@!\x02\u05B1\u05B2\x05^0\x02\u05B2\u05B4\x03\x02\x02\x02" +
		"\u05B3\u0593\x03\x02\x02\x02\u05B3\u0599\x03\x02\x02\x02\u05B3\u059F\x03" +
		"\x02\x02\x02\u05B3\u05A3\x03\x02\x02\x02\u05B3\u05A7\x03\x02\x02\x02\u05B3" +
		"\u05AE\x03\x02\x02\x02\u05B4\xAB\x03\x02\x02\x02\u05B5\u05B6\x05L\'\x02" +
		"\u05B6\u05B7\x05\xB2Z\x02\u05B7\u05CC\x03\x02\x02\x02\u05B8\u05B9\x05" +
		"L\'\x02\u05B9\u05BA\x079\x02\x02\u05BA\u05BB\x05\xB0Y\x02\u05BB\u05CC" +
		"\x03\x02\x02\x02\u05BC\u05BD\x05@!\x02\u05BD\u05BE\x079\x02\x02\u05BE" +
		"\u05BF\x05\xB0Y\x02\u05BF\u05CC\x03\x02\x02\x02\u05C0\u05CC\x05\xA2R\x02" +
		"\u05C1\u05C2\x05L\'\x02\u05C2\u05C6\x07\t\x02\x02\u05C3\u05C5\x05\xAE" +
		"X\x02\u05C4\u05C3\x03\x02\x02\x02\u05C5\u05C8\x03\x02\x02\x02\u05C6\u05C4" +
		"\x03\x02\x02\x02\u05C6\u05C7\x03\x02\x02\x02\u05C7\u05C9\x03\x02\x02\x02" +
		"\u05C8\u05C6\x03\x02\x02\x02\u05C9\u05CA\x07\n\x02\x02\u05CA\u05CC\x03" +
		"\x02\x02\x02\u05CB\u05B5\x03\x02\x02\x02\u05CB\u05B8\x03\x02\x02\x02\u05CB" +
		"\u05BC\x03\x02\x02\x02\u05CB\u05C0\x03\x02\x02\x02\u05CB\u05C1\x03\x02" +
		"\x02\x02\u05CC\xAD\x03\x02\x02\x02\u05CD\u05D1\x05\xB2Z\x02\u05CE\u05D1" +
		"\x05\xB0Y\x02\u05CF\u05D1\x05\xA4S\x02\u05D0\u05CD\x03\x02\x02\x02\u05D0" +
		"\u05CE\x03\x02\x02\x02\u05D0\u05CF\x03\x02\x02\x02\u05D1\xAF\x03\x02\x02" +
		"\x02\u05D2\u05D3\x05z>\x02\u05D3\u05D4\x07\f\x02\x02\u05D4\u05D6\x05^" +
		"0\x02\u05D5\u05D7\x07\xAF\x02\x02\u05D6\u05D5\x03\x02\x02\x02\u05D6\u05D7" +
		"\x03\x02\x02\x02\u05D7\u05ED\x03\x02\x02\x02\u05D8\u05D9\x05z";
	private static readonly _serializedATNSegment3: string =
		">\x02\u05D9\u05DA\x07\f\x02\x02\u05DA\u05DB\x05L\'\x02\u05DB\u05DC\x07" +
		"9\x02\x02\u05DC\u05DE\x05z>\x02\u05DD\u05DF\x05b2\x02\u05DE\u05DD\x03" +
		"\x02\x02\x02\u05DE\u05DF\x03\x02\x02\x02\u05DF\u05ED\x03\x02\x02\x02\u05E0" +
		"\u05E1\x05z>\x02\u05E1\u05E2\x07\f\x02\x02\u05E2\u05E3\x05@!\x02\u05E3" +
		"\u05E4\x079\x02\x02\u05E4\u05E6\x05z>\x02\u05E5\u05E7\x05b2\x02\u05E6" +
		"\u05E5\x03\x02\x02\x02\u05E6\u05E7\x03\x02\x02\x02\u05E7\u05ED\x03\x02" +
		"\x02\x02\u05E8\u05E9\x05z>\x02\u05E9\u05EA\x07=\x02\x02\u05EA\u05EB\x05" +
		"b2\x02\u05EB\u05ED\x03\x02\x02\x02\u05EC\u05D2\x03\x02\x02\x02\u05EC\u05D8" +
		"\x03\x02\x02\x02\u05EC\u05E0\x03\x02\x02\x02\u05EC\u05E8\x03\x02\x02\x02" +
		"\u05ED\xB1\x03\x02\x02\x02\u05EE\u05EF\t\x16\x02\x02\u05EF\u05F1\x05^" +
		"0\x02\u05F0\u05F2\x07\xAF\x02\x02\u05F1\u05F0\x03\x02\x02\x02\u05F1\u05F2" +
		"\x03\x02\x02\x02\u05F2\u05F9\x03\x02\x02\x02\u05F3\u05F4\t\x18\x02\x02" +
		"\u05F4\u05F6\x05|?\x02\u05F5\u05F7\x07\xAF\x02\x02\u05F6\u05F5\x03\x02" +
		"\x02\x02\u05F6\u05F7\x03\x02\x02\x02\u05F7\u05F9\x03\x02\x02\x02\u05F8" +
		"\u05EE\x03\x02\x02\x02\u05F8\u05F3\x03\x02\x02\x02\u05F9\xB3\x03\x02\x02" +
		"\x02\u05FA\u05FB\x07{\x02\x02\u05FB\u05FF\x07\t\x02\x02\u05FC\u05FE\x05" +
		"\xB6\\\x02\u05FD\u05FC\x03\x02\x02\x02\u05FE\u0601\x03\x02\x02\x02\u05FF" +
		"\u05FD\x03\x02\x02\x02\u05FF\u0600\x03\x02\x02\x02\u0600\u0602\x03\x02" +
		"\x02\x02\u0601\u05FF\x03\x02\x02\x02\u0602\u060F\x07\n\x02\x02\u0603\u0604" +
		"\x07{\x02\x02\u0604\u0605\x05L\'\x02\u0605\u0609\x07\t\x02\x02\u0606\u0608" +
		"\x05\xB8]\x02\u0607\u0606\x03\x02\x02\x02\u0608\u060B\x03\x02\x02\x02" +
		"\u0609\u0607\x03\x02\x02\x02\u0609\u060A\x03\x02\x02\x02\u060A\u060C\x03" +
		"\x02\x02\x02\u060B\u0609\x03\x02\x02\x02\u060C\u060D\x07\n\x02\x02\u060D" +
		"\u060F\x03\x02\x02\x02\u060E\u05FA\x03\x02\x02\x02\u060E\u0603\x03\x02" +
		"\x02\x02\u060F\xB5\x03\x02\x02\x02\u0610\u0611\x05L\'\x02\u0611\u0612" +
		"\x079\x02\x02\u0612\u0613\x05\xB8]\x02\u0613\u061F\x03\x02\x02\x02\u0614" +
		"\u0615\x05L\'\x02\u0615\u0619\x07\t\x02\x02\u0616\u0618\x05\xB8]\x02\u0617" +
		"\u0616\x03\x02\x02\x02\u0618\u061B\x03\x02\x02\x02\u0619\u0617\x03\x02" +
		"\x02\x02\u0619\u061A\x03\x02\x02\x02\u061A\u061C\x03\x02\x02\x02\u061B" +
		"\u0619\x03\x02\x02\x02\u061C\u061D\x07\n\x02\x02\u061D\u061F\x03\x02\x02" +
		"\x02\u061E\u0610\x03\x02\x02\x02\u061E\u0614\x03\x02\x02\x02\u061F\xB7" +
		"\x03\x02\x02\x02\u0620\u0622\x05n8\x02\u0621\u0623\x075\x02\x02\u0622" +
		"\u0621\x03\x02\x02\x02\u0622\u0623\x03\x02\x02\x02\u0623\u0628\x03\x02" +
		"\x02\x02\u0624\u0626\x07!\x02\x02\u0625\u0624\x03\x02\x02\x02\u0625\u0626" +
		"\x03\x02\x02\x02\u0626\u0627\x03\x02\x02\x02\u0627\u0629\x07\xAF\x02\x02" +
		"\u0628\u0625\x03\x02\x02\x02\u0628\u0629\x03\x02\x02\x02\u0629\u064D\x03" +
		"\x02\x02\x02\u062A\u062B\x05n8\x02\u062B\u0630\x07|\x02\x02\u062C\u062E" +
		"\x07!\x02\x02\u062D\u062C\x03\x02\x02\x02\u062D\u062E\x03\x02\x02\x02" +
		"\u062E\u062F\x03\x02\x02\x02\u062F\u0631\x07\xAF\x02\x02\u0630\u062D\x03" +
		"\x02\x02\x02\u0630\u0631\x03\x02\x02\x02\u0631\u064D\x03\x02\x02\x02\u0632" +
		"\u0633\x05n8\x02\u0633\u0634\x07|\x02\x02\u0634\u0635\x07\f\x02\x02\u0635" +
		"\u0636\x07\xAF\x02\x02\u0636\u064D\x03\x02\x02\x02\u0637\u0638\x05n8\x02" +
		"\u0638\u0639\x07=\x02\x02\u0639\u063A\x07\xA6\x02\x02\u063A\u063B\x05" +
		"p9\x02\u063B\u063C\x07\x1B\x02\x02\u063C\u063D\t\x19\x02\x02\u063D\u063E" +
		"\x07\xAF\x02\x02\u063E\u063F\x07\x1C\x02\x02\u063F\u064D\x03\x02\x02\x02" +
		"\u0640\u0641\x05n8\x02\u0641\u0642\x07>\x02\x02\u0642\u0643\x07\xA6\x02" +
		"\x02\u0643\u064D\x03\x02\x02\x02\u0644\u0645\x05n8\x02\u0645\u064A\x07" +
		"\xA6\x02\x02\u0646\u0648\x07!\x02\x02\u0647\u0646\x03\x02\x02\x02\u0647" +
		"\u0648\x03\x02\x02\x02\u0648\u0649\x03\x02\x02\x02\u0649\u064B\x07\xAF" +
		"\x02\x02\u064A\u0647\x03\x02\x02\x02\u064A\u064B\x03\x02\x02\x02\u064B" +
		"\u064D\x03\x02\x02\x02\u064C\u0620\x03\x02\x02\x02\u064C\u062A\x03\x02" +
		"\x02\x02\u064C\u0632\x03\x02\x02\x02\u064C\u0637\x03\x02\x02\x02\u064C" +
		"\u0640\x03\x02\x02\x02\u064C\u0644\x03\x02\x02\x02\u064D\xB9\x03\x02\x02" +
		"\x02\u064E\u064F\x072\x02\x02\u064F\u0650\x07\x1B\x02\x02\u0650\u0651" +
		"\x07Z\x02\x02\u0651\u0652\x07\x1C\x02\x02\u0652\u0670\x05p9\x02\u0653" +
		"\u0654\x072\x02\x02\u0654\u0655\x07\x1B\x02\x02\u0655\u0656\x05n8\x02" +
		"\u0656\u0658\x07\x1C\x02\x02\u0657\u0659\x05@!\x02\u0658\u0657\x03\x02" +
		"\x02\x02\u0658\u0659\x03\x02\x02\x02\u0659\u065A\x03\x02\x02\x02\u065A" +
		"\u065C\x05p9\x02\u065B\u065D\x05\xD6l\x02\u065C\u065B\x03\x02\x02\x02" +
		"\u065C\u065D\x03\x02\x02\x02\u065D\u0670\x03\x02\x02\x02\u065E\u065F\x07" +
		"2\x02\x02\u065F\u0663\x07\t\x02\x02\u0660\u0662\x05\xC4c\x02\u0661\u0660" +
		"\x03\x02\x02\x02\u0662\u0665\x03\x02\x02\x02\u0663\u0661\x03\x02\x02\x02" +
		"\u0663\u0664\x03\x02\x02\x02\u0664\u0666\x03\x02\x02\x02\u0665\u0663\x03" +
		"\x02\x02\x02\u0666\u0670\x07\n\x02\x02\u0667\u0668\x072\x02\x02\u0668" +
		"\u0669\x05L\'\x02\u0669\u066A\x07\t\x02\x02\u066A\u066B\x07S\x02\x02\u066B" +
		"\u066C\x05\xC2b\x02\u066C\u066D\x03\x02\x02\x02\u066D\u066E\x07\n\x02" +
		"\x02\u066E\u0670\x03\x02\x02\x02\u066F\u064E\x03\x02\x02\x02\u066F\u0653" +
		"\x03\x02\x02\x02\u066F\u065E\x03\x02\x02\x02\u066F\u0667\x03\x02\x02\x02" +
		"\u0670\xBB\x03\x02\x02\x02\u0671\u0672\x07~\x02\x02\u0672\u0673\t\x1A" +
		"\x02\x02\u0673\u067A\x05p9\x02\u0674\u0675\x07~\x02\x02\u0675\u0676\t" +
		"\x1B\x02\x02\u0676\u067A\x05p9\x02\u0677\u0678\x07~\x02\x02\u0678\u067A" +
		"\x07R\x02\x02\u0679\u0671\x03\x02\x02\x02\u0679\u0674\x03\x02\x02\x02" +
		"\u0679\u0677\x03\x02\x02\x02\u067A\xBD\x03\x02\x02\x02\u067B\u067C\x07" +
		"\x80\x02\x02\u067C\u067D\t\x16\x02\x02\u067D\u069B\x05p9\x02\u067E\u067F" +
		"\x07\x80\x02\x02\u067F\u0680\t\x18\x02\x02\u0680\u0682\x05p9\x02\u0681" +
		"\u0683\x07\xAF\x02\x02\u0682\u0681\x03\x02\x02\x02\u0682\u0683\x03\x02" +
		"\x02\x02\u0683\u0685\x03\x02\x02\x02\u0684\u0686\x07\xAF\x02\x02\u0685" +
		"\u0684\x03\x02\x02\x02\u0685\u0686\x03\x02\x02\x02\u0686\u0688\x03\x02" +
		"\x02\x02\u0687\u0689\x07\xAD\x02\x02\u0688\u0687\x03\x02\x02\x02\u0688" +
		"\u0689\x03\x02\x02\x02\u0689\u069B\x03\x02\x02\x02\u068A\u068B\x07\x80" +
		"\x02\x02\u068B\u068C\t\x18\x02\x02\u068C\u0690\x05p9\x02\u068D\u068E\x07" +
		"\x1B\x02\x02\u068E\u068F\x07\xAF\x02\x02\u068F\u0691\x07\x1C\x02\x02\u0690" +
		"\u068D\x03\x02\x02\x02\u0690\u0691\x03\x02\x02\x02\u0691\u0693\x03\x02" +
		"\x02\x02\u0692\u0694\x07\xAF\x02\x02\u0693\u0692\x03\x02\x02\x02\u0693" +
		"\u0694\x03\x02\x02\x02\u0694\u0696\x03\x02\x02\x02\u0695\u0697\x07\xAD" +
		"\x02\x02\u0696\u0695\x03\x02\x02\x02\u0696\u0697\x03\x02\x02\x02\u0697" +
		"\u069B\x03\x02\x02\x02\u0698\u0699\x07\x80\x02\x02\u0699\u069B\x07r\x02" +
		"\x02\u069A\u067B\x03\x02\x02\x02\u069A\u067E\x03\x02\x02\x02\u069A\u068A" +
		"\x03\x02\x02\x02\u069A\u0698\x03\x02\x02\x02\u069B\xBF\x03\x02\x02\x02" +
		"\u069C\u069D\x07\x81\x02\x02\u069D\u06B3\x05L\'\x02\u069E\u069F\x07\x81" +
		"\x02\x02\u069F\u06B3\x05@!\x02\u06A0\u06A1\x07\x81\x02\x02\u06A1\u06B3" +
		"\x05D#\x02\u06A2\u06A3\x07\x81\x02\x02\u06A3\u06A4\x05@!\x02\u06A4\u06A5" +
		"\x05B\"\x02\u06A5\u06B3\x03\x02\x02\x02\u06A6\u06A7\x07\x81\x02\x02\u06A7" +
		"\u06A8\x05@!\x02\u06A8\u06A9\x07+\x02\x02\u06A9\u06AA\x05@!\x02\u06AA" +
		"\u06B3\x03\x02\x02\x02\u06AB\u06AC\x07\x81\x02\x02\u06AC\u06AD\x05@!\x02" +
		"\u06AD\u06AE\x07+\x02\x02\u06AE\u06B0\x05L\'\x02\u06AF\u06B1\t\x05\x02" +
		"\x02\u06B0\u06AF\x03\x02\x02\x02\u06B0\u06B1\x03\x02\x02\x02\u06B1\u06B3" +
		"\x03\x02\x02\x02\u06B2\u069C\x03\x02\x02\x02\u06B2\u069E\x03\x02\x02\x02" +
		"\u06B2\u06A0\x03\x02\x02\x02\u06B2\u06A2\x03\x02\x02\x02\u06B2\u06A6\x03" +
		"\x02\x02\x02\u06B2\u06AB\x03\x02\x02\x02\u06B3\xC1\x03\x02\x02\x02\u06B4" +
		"\u06F4\x05\xB2Z\x02\u06B5\u06F4\x07y\x02\x02\u06B6\u06F4\x05\xBC_\x02" +
		"\u06B7\u06F4\x05\xBE`\x02\u06B8\u06F4\x05\xC0a\x02\u06B9\u06BA\x07o\x02" +
		"\x02\u06BA\u06BE\x07\t\x02\x02\u06BB\u06BD\x05\x94K\x02\u06BC\u06BB\x03" +
		"\x02\x02\x02\u06BD\u06C0\x03\x02\x02\x02\u06BE\u06BC\x03\x02\x02\x02\u06BE" +
		"\u06BF\x03\x02\x02\x02\u06BF\u06C1\x03\x02\x02\x02\u06C0\u06BE\x03\x02" +
		"\x02\x02\u06C1\u06F4\x07\n\x02\x02\u06C2\u06C3\x07X\x02\x02\u06C3\u06C7" +
		"\x07\t\x02\x02\u06C4\u06C6\x05\x9CO\x02\u06C5\u06C4\x03\x02\x02\x02\u06C6" +
		"\u06C9\x03\x02\x02\x02\u06C7\u06C5\x03\x02\x02\x02\u06C7\u06C8\x03\x02" +
		"\x02\x02\u06C8\u06CA\x03\x02\x02\x02\u06C9\u06C7\x03\x02\x02\x02\u06CA" +
		"\u06F4\x07\n\x02\x02\u06CB\u06F4\x05\x9CO\x02\u06CC\u06CD\x07\x14\x02" +
		"\x02\u06CD\u06CE\x079\x02\x02\u06CE\u06F4\x05\xB0Y\x02\u06CF\u06D0\t\x1C" +
		"\x02\x02\u06D0\u06F4\x05\xA6T\x02\u06D1\u06D2\t\x1C\x02\x02\u06D2\u06D3" +
		"\x079\x02\x02\u06D3\u06F4\x05\xA8U\x02\u06D4\u06D5\x07\x14\x02\x02\u06D5" +
		"\u06D9\x07\t\x02\x02\u06D6\u06D8\x05\xAEX\x02\u06D7\u06D6\x03\x02\x02" +
		"\x02\u06D8\u06DB\x03\x02\x02\x02\u06D9\u06D7\x03\x02\x02\x02\u06D9\u06DA" +
		"\x03\x02\x02\x02\u06DA\u06DC\x03\x02\x02\x02\u06DB\u06D9\x03\x02\x02\x02" +
		"\u06DC\u06F4\x07\n\x02\x02\u06DD\u06DE\x07\x15\x02\x02\u06DE\u06E2\x07" +
		"\t\x02\x02\u06DF\u06E1\x05\xA4S\x02\u06E0\u06DF\x03\x02\x02\x02\u06E1" +
		"\u06E4\x03\x02\x02\x02\u06E2\u06E0\x03\x02\x02\x02\u06E2\u06E3\x03\x02" +
		"\x02\x02\u06E3\u06E5\x03\x02\x02\x02\u06E4\u06E2\x03\x02\x02\x02\u06E5" +
		"\u06F4\x07\n\x02\x02\u06E6\u06E7\x07{\x02\x02\u06E7\u06E8\x079\x02\x02" +
		"\u06E8\u06F4\x05\xB8]\x02\u06E9\u06EA\x07{\x02\x02\u06EA\u06EE\x07\t\x02" +
		"\x02\u06EB\u06ED\x05\xB8]\x02\u06EC\u06EB\x03\x02\x02\x02\u06ED\u06F0" +
		"\x03\x02\x02\x02\u06EE\u06EC\x03\x02\x02\x02\u06EE\u06EF\x03\x02\x02\x02" +
		"\u06EF\u06F1\x03\x02\x02\x02\u06F0\u06EE\x03\x02\x02\x02\u06F1\u06F4\x07" +
		"\n\x02\x02\u06F2\u06F4\x05*\x16\x02\u06F3\u06B4\x03\x02\x02\x02\u06F3" +
		"\u06B5\x03\x02\x02\x02\u06F3\u06B6\x03\x02\x02\x02\u06F3\u06B7\x03\x02" +
		"\x02\x02\u06F3\u06B8\x03\x02\x02\x02\u06F3\u06B9\x03\x02\x02\x02\u06F3" +
		"\u06C2\x03\x02\x02\x02\u06F3\u06CB\x03\x02\x02\x02\u06F3\u06CC\x03\x02" +
		"\x02\x02\u06F3\u06CF\x03\x02\x02\x02\u06F3\u06D1\x03\x02\x02\x02\u06F3" +
		"\u06D4\x03\x02\x02\x02\u06F3\u06DD\x03\x02\x02\x02\u06F3\u06E6\x03\x02" +
		"\x02\x02\u06F3\u06E9\x03\x02\x02\x02\u06F3\u06F2\x03\x02\x02\x02\u06F4" +
		"\xC3\x03\x02\x02\x02\u06F5\u06FE\x05\xC6d\x02\u06F6\u06F7\x05L\'\x02\u06F7" +
		"\u06F8\x07\t\x02\x02\u06F8\u06F9\x07S\x02\x02\u06F9\u06FA\x05\xC2b\x02" +
		"\u06FA\u06FB\x03\x02\x02\x02\u06FB\u06FC\x07\n\x02\x02\u06FC\u06FE\x03" +
		"\x02\x02\x02\u06FD\u06F5\x03\x02\x02\x02\u06FD\u06F6\x03\x02\x02\x02\u06FE" +
		"\xC5\x03\x02\x02\x02\u06FF\u0700\x05L\'\x02\u0700\u0701\x07S\x02\x02\u0701" +
		"\u0702\x05\xC2b\x02\u0702\xC7\x03\x02\x02\x02\u0703\u0704\x05@!\x02\u0704" +
		"\u0706\x05H%\x02\u0705\u0707\t\x1D\x02\x02\u0706\u0705\x03\x02\x02\x02" +
		"\u0706\u0707\x03\x02\x02\x02\u0707\u0726\x03\x02\x02\x02\u0708\u0709\x05" +
		"@!\x02\u0709\u070A\x05@!\x02\u070A\u070C\x05H%\x02\u070B\u070D\t\x1E\x02" +
		"\x02\u070C\u070B\x03\x02\x02\x02\u070C\u070D\x03\x02\x02\x02\u070D\u0726" +
		"\x03\x02\x02\x02\u070E\u070F\x05@!\x02\u070F\u0710\x05@!\x02\u0710\u0711" +
		"\x05H%\x02\u0711\u0712\x07\x18\x02\x02\u0712\u0713\x05~@\x02\u0713\u0726" +
		"\x03\x02\x02\x02\u0714\u0715\x05@!\x02\u0715\u0716\x05@!\x02\u0716\u0718" +
		"\x05@!\x02\u0717\u0719\t\x1F\x02\x02\u0718\u0717\x03\x02\x02\x02\u0718" +
		"\u0719\x03\x02\x02\x02\u0719\u071B\x03\x02\x02\x02\u071A\u071C\t \x02" +
		"\x02\u071B\u071A\x03\x02\x02\x02\u071B\u071C\x03\x02\x02\x02\u071C\u0726" +
		"\x03\x02\x02\x02\u071D\u071E\x05@!\x02\u071E\u071F\x05@!\x02\u071F\u0720" +
		"\x05@!\x02\u0720\u0721\x07\x89\x02\x02\u0721\u0723\x05~@\x02\u0722\u0724" +
		"\t \x02\x02\u0723\u0722\x03\x02\x02\x02\u0723\u0724\x03\x02\x02\x02\u0724" +
		"\u0726\x03\x02\x02\x02\u0725\u0703\x03\x02\x02\x02\u0725\u0708\x03\x02" +
		"\x02\x02\u0725\u070E\x03\x02\x02\x02\u0725\u0714\x03\x02\x02\x02\u0725" +
		"\u071D\x03\x02\x02\x02\u0726\xC9\x03\x02\x02\x02\u0727\u0728\x07\x8A\x02" +
		"\x02\u0728\u0729\x05T+\x02\u0729\u072A\x05\xD6l\x02\u072A\xCB\x03\x02" +
		"\x02\x02\u072B\u072C\x054\x1B\x02\u072C\u072D\x07\f\x02\x02\u072D\u072E" +
		"\x05\xCEh\x02\u072E\xCD\x03\x02\x02\x02\u072F\u0730\bh\x01\x02\u0730\u0734" +
		"\x07\t\x02\x02\u0731\u0733\x050\x19\x02\u0732\u0731\x03\x02\x02\x02\u0733" +
		"\u0736\x03\x02\x02\x02\u0734\u0732\x03\x02\x02\x02\u0734\u0735\x03\x02" +
		"\x02\x02\u0735\u0737\x03\x02\x02\x02\u0736\u0734\x03\x02\x02\x02\u0737" +
		"\u073E\x07\n\x02\x02\u0738\u073E\x054\x1B\x02\u0739\u073E\x07m\x02\x02" +
		"\u073A\u073E\x07n\x02\x02\u073B\u073C\x07\x8B\x02\x02\u073C\u073E\x05" +
		"\xCEh\x07\u073D\u072F\x03\x02\x02\x02\u073D\u0738\x03\x02\x02\x02\u073D" +
		"\u0739\x03\x02\x02\x02\u073D\u073A\x03\x02\x02\x02\u073D\u073B\x03\x02" +
		"\x02\x02\u073E\u074D\x03\x02\x02\x02\u073F\u0740\f\x06\x02\x02\u0740\u0741" +
		"\x07\x8C\x02\x02\u0741\u074C\x05\xCEh\x07\u0742\u0743\f\x05\x02\x02\u0743" +
		"\u0744\x07\x8D\x02\x02\u0744\u074C\x05\xCEh\x06\u0745\u0746\f\x04\x02" +
		"\x02\u0746\u0747\x07\x8E\x02\x02\u0747\u074C\x05\xCEh\x05\u0748\u0749" +
		"\f\x03\x02\x02\u0749\u074A\x07\x8F\x02\x02\u074A\u074C\x05\xCEh\x04\u074B" +
		"\u073F\x03\x02\x02\x02\u074B\u0742\x03\x02\x02\x02\u074B\u0745\x03\x02" +
		"\x02\x02\u074B\u0748\x03\x02\x02\x02\u074C\u074F\x03\x02\x02\x02\u074D" +
		"\u074B\x03\x02\x02\x02\u074D\u074E\x03\x02\x02\x02\u074E\xCF\x03\x02\x02" +
		"\x02\u074F\u074D\x03\x02\x02\x02\u0750\u0751\x070\x02\x02\u0751\u0752" +
		"\x07\x1B\x02\x02\u0752\u0753\x05\xCEh\x02\u0753\u0754\x07\x1C\x02\x02" +
		"\u0754\u0757\x05.\x18\x02\u0755\u0756\x07\x90\x02\x02\u0756\u0758\x05" +
		".\x18\x02\u0757\u0755\x03\x02\x02\x02\u0757\u0758\x03\x02\x02\x02\u0758" +
		"\xD1\x03\x02\x02\x02\u0759\u075A\x07\x91\x02\x02\u075A\u075B\x07\x1B\x02" +
		"\x02\u075B\u075C\x05\xCEh\x02\u075C\u075D\x07\x1C\x02\x02\u075D\u075E" +
		"\x05.\x18\x02\u075E\u076A\x03\x02\x02\x02\u075F\u0760\x07\x91\x02\x02" +
		"\u0760\u0764\x07\t\x02\x02\u0761\u0763\x050\x19\x02\u0762\u0761\x03\x02" +
		"\x02\x02\u0763\u0766\x03\x02\x02\x02\u0764\u0762\x03\x02\x02\x02\u0764" +
		"\u0765\x03\x02\x02\x02\u0765\u0767\x03\x02\x02\x02\u0766\u0764\x03\x02" +
		"\x02\x02\u0767\u0768\x07\n\x02\x02\u0768\u076A\x05.\x18\x02\u0769\u0759" +
		"\x03\x02\x02\x02\u0769\u075F\x03\x02\x02\x02\u076A\xD3\x03\x02\x02\x02" +
		"\u076B\u076C\x07\x92\x02\x02\u076C\u076D\x07\t\x02\x02\u076D\u076E\x05" +
		"8\x1D\x02\u076E\u076F\x07\n\x02\x02\u076F\u0770\x05.\x18\x02\u0770\xD5" +
		"\x03\x02\x02\x02\u0771\u0772\x05\xDCo\x02\u0772\xD7\x03\x02\x02\x02\u0773" +
		"\u0774\x05\xF0y\x02\u0774\xD9\x03\x02\x02\x02\u0775\u078B\x05t;\x02\u0776" +
		"\u078B\x05\xE0q\x02\u0777\u0778\x05t;\x02\u0778\u0779\x05\xE0q\x02\u0779" +
		"\u078B\x03\x02\x02\x02\u077A\u0781\x05t;\x02\u077B\u077C\x07\x06\x02\x02" +
		"\u077C\u077D\x07\xAF\x02\x02\u077D\u0780\x07\b\x02\x02\u077E\u0780\x07" +
		"\x93\x02\x02\u077F\u077B\x03\x02\x02\x02\u077F\u077E\x03\x02\x02\x02\u0780" +
		"\u0783\x03\x02\x02\x02\u0781\u077F\x03\x02\x02\x02\u0781\u0782\x03\x02" +
		"\x02\x02\u0782\u0788\x03\x02\x02\x02\u0783\u0781\x03\x02\x02\x02\u0784" +
		"\u0785\x07\x06\x02\x02\u0785\u0786\x05\xE0q\x02\u0786\u0787\x07\b\x02" +
		"\x02\u0787\u0789\x03\x02\x02\x02\u0788\u0784\x03\x02\x02\x02\u0788\u0789" +
		"\x03\x02\x02\x02\u0789\u078B\x03\x02\x02\x02\u078A\u0775\x03\x02\x02\x02" +
		"\u078A\u0776\x03\x02\x02\x02\u078A\u0777\x03\x02\x02\x02\u078A\u077A\x03" +
		"\x02\x02\x02\u078B\xDB\x03\x02\x02\x02\u078C\u078D\x07\x94\x02\x02\u078D" +
		"\u0792\x05\xE2r\x02\u078E\u078F\x07\x07\x02\x02\u078F\u0791\x05\xE2r\x02" +
		"\u0790\u078E\x03\x02\x02\x02\u0791\u0794\x03\x02\x02\x02\u0792\u0790\x03" +
		"\x02\x02\x02\u0792\u0793\x03\x02\x02\x02\u0793\u0795\x03\x02\x02\x02\u0794" +
		"\u0792\x03\x02\x02\x02\u0795\u0796\x07\n\x02\x02\u0796\u07CB\x03\x02\x02" +
		"\x02\u0797\u0798\x07\x94\x02\x02\u0798\u07CB\x07\n\x02\x02\u0799\u079A" +
		"\x07\x95\x02\x02\u079A\u079F\x05\xE6t\x02\u079B\u079C\x07\x07\x02\x02" +
		"\u079C\u079E\x05\xE6t\x02\u079D\u079B\x03\x02\x02\x02\u079E\u07A1\x03" +
		"\x02\x02\x02\u079F\u079D\x03\x02\x02\x02\u079F\u07A0\x03\x02\x02\x02\u07A0" +
		"\u07A2\x03\x02\x02\x02\u07A1\u079F\x03\x02\x02\x02\u07A2\u07A3\x07\b\x02" +
		"\x02\u07A3\u07CB\x03\x02\x02\x02\u07A4\u07A5\x07\x95\x02\x02\u07A5\u07CB" +
		"\x07\b\x02\x02\u07A6\u07A7\x07\x96\x02\x02\u07A7\u07AC\x07\xA7\x02\x02" +
		"\u07A8\u07A9\x07\x07\x02\x02\u07A9\u07AB\x07\xA7\x02\x02\u07AA\u07A8\x03" +
		"\x02\x02\x02\u07AB\u07AE\x03\x02\x02\x02\u07AC\u07AA\x03\x02\x02\x02\u07AC" +
		"\u07AD\x03\x02\x02\x02\u07AD\u07AF\x03\x02\x02\x02\u07AE\u07AC\x03\x02" +
		"\x02\x02\u07AF\u07CB\x07\b\x02\x02\u07B0\u07B1\x07\x97\x02\x02\u07B1\u07B6" +
		"\x07\xAF\x02\x02\u07B2\u07B3\x07\x07\x02\x02\u07B3\u07B5\x07\xAF\x02\x02" +
		"\u07B4\u07B2\x03\x02\x02\x02\u07B5\u07B8\x03\x02\x02\x02\u07B6\u07B4\x03" +
		"\x02\x02\x02\u07B6\u07B7\x03\x02\x02\x02\u07B7\u07B9\x03\x02\x02\x02\u07B8" +
		"\u07B6\x03\x02\x02\x02\u07B9\u07CB\x07\b\x02\x02\u07BA\u07BB\x07\x98\x02" +
		"\x02\u07BB\u07C0\x07\xA9\x02\x02\u07BC\u07BD\x07\x07\x02\x02\u07BD\u07BF" +
		"\x07\xA9\x02\x02\u07BE\u07BC\x03\x02\x02\x02\u07BF\u07C2\x03\x02\x02\x02" +
		"\u07C0\u07BE\x03\x02\x02\x02\u07C0\u07C1\x03\x02\x02\x02\u07C1\u07C3\x03" +
		"\x02\x02\x02\u07C2\u07C0\x03\x02\x02\x02\u07C3\u07CB\x07\b\x02\x02\u07C4" +
		"\u07CB\x05\xEEx\x02\u07C5\u07CB\x07\xA7\x02\x02\u07C6\u07CB\x07\xA8\x02" +
		"\x02\u07C7\u07CB\x07\xA9\x02\x02\u07C8\u07CB\x07\xAA\x02\x02\u07C9\u07CB" +
		"\x07\xAB\x02\x02\u07CA\u078C\x03\x02\x02\x02\u07CA\u0797\x03\x02\x02\x02" +
		"\u07CA\u0799\x03\x02\x02\x02\u07CA\u07A4\x03\x02\x02\x02\u07CA\u07A6\x03" +
		"\x02\x02\x02\u07CA\u07B0\x03\x02\x02\x02\u07CA\u07BA\x03\x02\x02\x02\u07CA" +
		"\u07C4\x03\x02\x02\x02\u07CA\u07C5\x03\x02\x02\x02\u07CA\u07C6\x03\x02" +
		"\x02\x02\u07CA\u07C7\x03\x02\x02\x02\u07CA\u07C8\x03\x02\x02\x02\u07CA" +
		"\u07C9\x03\x02\x02\x02\u07CB\xDD\x03\x02\x02\x02\u07CC\u07CD\x05\xE6t" +
		"\x02\u07CD\xDF\x03\x02\x02\x02\u07CE\u07CF\x07\t\x02\x02\u07CF\u07D4\x05" +
		"\xE2r\x02\u07D0\u07D1\x07\x07\x02\x02\u07D1\u07D3\x05\xE2r\x02\u07D2\u07D0" +
		"\x03\x02\x02\x02\u07D3\u07D6\x03\x02\x02\x02\u07D4\u07D2\x03\x02\x02\x02" +
		"\u07D4\u07D5\x03\x02\x02\x02\u07D5\u07D7\x03\x02\x02\x02\u07D6\u07D4\x03" +
		"\x02\x02\x02\u07D7\u07D8\x07\n\x02\x02\u07D8\u07DC\x03\x02\x02\x02\u07D9" +
		"\u07DA\x07\t\x02\x02\u07DA\u07DC\x07\n\x02\x02\u07DB\u07CE\x03\x02\x02" +
		"\x02\u07DB\u07D9\x03\x02\x02\x02\u07DC\xE1\x03\x02\x02\x02\u07DD\u07DE" +
		"\x05t;\x02\u07DE\u07DF\x07L\x02\x02\u07DF\u07E0\x05\xE6t\x02\u07E0\xE3" +
		"\x03\x02\x02\x02\u07E1\u07E2\x07\x06\x02\x02\u07E2\u07E7\x05\xE6t\x02" +
		"\u07E3\u07E4\x07\x07\x02\x02\u07E4\u07E6\x05\xE6t\x02\u07E5\u07E3\x03" +
		"\x02\x02\x02\u07E6\u07E9\x03\x02\x02\x02\u07E7\u07E5\x03\x02\x02\x02\u07E7" +
		"\u07E8\x03\x02\x02\x02\u07E8\u07EA\x03\x02\x02\x02\u07E9\u07E7\x03\x02" +
		"\x02\x02\u07EA\u07EB\x07\b\x02\x02\u07EB\u07EF\x03\x02\x02\x02\u07EC\u07ED" +
		"\x07\x06\x02\x02\u07ED\u07EF\x07\b\x02\x02\u07EE\u07E1\x03\x02\x02\x02" +
		"\u07EE\u07EC\x03\x02\x02\x02\u07EF\xE5\x03\x02\x02\x02\u07F0\u07FC\x05" +
		"\xE0q\x02\u07F1\u07FC\x05\xE4s\x02\u07F2\u07FC\x05\xE8u\x02\u07F3\u07FC" +
		"\x05\xEAv\x02\u07F4\u07FC\x05\xECw\x02\u07F5\u07FC\x05\xEEx\x02\u07F6" +
		"\u07FC\x07\xA7\x02\x02\u07F7\u07FC\x07\xA8\x02\x02\u07F8\u07FC\x07\xA9" +
		"\x02\x02\u07F9\u07FC\x07\xAA\x02\x02\u07FA\u07FC\x07\xAB\x02\x02\u07FB" +
		"\u07F0\x03\x02\x02\x02\u07FB\u07F1\x03\x02\x02\x02\u07FB\u07F2\x03\x02" +
		"\x02\x02\u07FB\u07F3\x03\x02\x02\x02\u07FB\u07F4\x03\x02\x02\x02\u07FB" +
		"\u07F5\x03\x02\x02\x02\u07FB\u07F6\x03\x02\x02\x02\u07FB\u07F7\x03\x02" +
		"\x02\x02\u07FB\u07F8\x03\x02\x02\x02\u07FB\u07F9\x03\x02\x02\x02\u07FB" +
		"\u07FA\x03\x02\x02\x02\u07FC\xE7\x03\x02\x02\x02\u07FD\u07FE\x07\x99\x02" +
		"\x02\u07FE\u0803\x07\xA7\x02\x02\u07FF\u0800\x07\x07\x02\x02\u0800\u0802" +
		"\x07\xA7\x02\x02\u0801\u07FF\x03\x02\x02\x02\u0802\u0805\x03\x02\x02\x02" +
		"\u0803\u0801\x03\x02\x02\x02\u0803\u0804\x03\x02\x02\x02\u0804\u0806\x03" +
		"\x02\x02\x02\u0805\u0803\x03\x02\x02\x02\u0806\u0807\x07\b\x02\x02\u0807" +
		"\xE9\x03\x02\x02\x02\u0808\u0809\x07\x9A\x02\x02\u0809\u080E\x07\xAF\x02" +
		"\x02\u080A\u080B\x07\x07\x02\x02\u080B\u080D\x07\xAF\x02\x02\u080C\u080A" +
		"\x03\x02\x02\x02\u080D\u0810\x03\x02\x02\x02\u080E\u080C\x03\x02\x02\x02" +
		"\u080E\u080F\x03\x02\x02\x02\u080F\u0811\x03\x02\x02\x02\u0810\u080E\x03" +
		"\x02\x02\x02\u0811\u0812\x07\b\x02\x02\u0812\xEB\x03\x02\x02\x02\u0813" +
		"\u0814\x07\x9B\x02\x02\u0814\u0819\x07\xA9\x02\x02\u0815\u0816\x07\x07" +
		"\x02\x02\u0816\u0818\x07\xA9\x02\x02\u0817\u0815\x03\x02\x02\x02\u0818" +
		"\u081B\x03\x02\x02\x02\u0819\u0817\x03\x02\x02\x02\u0819\u081A\x03\x02" +
		"\x02\x02\u081A\u081C\x03\x02\x02\x02\u081B\u0819\x03\x02\x02\x02\u081C" +
		"\u081D\x07\b\x02\x02\u081D\xED\x03\x02\x02\x02\u081E\u081F\t!\x02\x02" +
		"\u081F\xEF\x03\x02\x02\x02\u0820\u0821\x07\x9C\x02\x02\u0821\u0826\x05" +
		"\xF6|\x02\u0822\u0823\x07\x07\x02\x02\u0823\u0825\x05\xF6|\x02\u0824\u0822" +
		"\x03\x02\x02\x02\u0825\u0828\x03\x02\x02\x02\u0826\u0824\x03\x02\x02\x02" +
		"\u0826\u0827\x03\x02\x02\x02\u0827\u0829\x03\x02\x02\x02\u0828\u0826\x03" +
		"\x02\x02\x02\u0829\u082A\x07\n\x02\x02\u082A\u0840\x03\x02\x02\x02\u082B" +
		"\u082C\x07\x9C\x02\x02\u082C\u0840\x07\n\x02\x02\u082D\u082E\x07\x9D\x02" +
		"\x02\u082E\u0833\x05\xFA~\x02\u082F\u0830\x07\x07\x02\x02\u0830\u0832" +
		"\x05\xFA~\x02\u0831\u082F\x03\x02\x02\x02\u0832\u0835\x03\x02\x02\x02" +
		"\u0833\u0831\x03\x02\x02\x02\u0833\u0834\x03\x02\x02\x02\u0834\u0836\x03" +
		"\x02\x02\x02\u0835\u0833\x03\x02\x02\x02\u0836\u0837\x07\b\x02\x02\u0837" +
		"\u0840\x03\x02\x02\x02\u0838\u0839\x07\x06\x02\x02\u0839\u0840\x07\b\x02" +
		"\x02\u083A\u0840\x07\xAE\x02\x02\u083B\u0840\x07\xAF\x02\x02\u083C\u0840" +
		"\x07m\x02\x02\u083D\u0840\x07n\x02\x02\u083E\u0840\x07\x9E\x02\x02\u083F" +
		"\u0820\x03\x02\x02\x02\u083F\u082B\x03\x02\x02\x02\u083F\u082D\x03\x02" +
		"\x02\x02\u083F\u0838\x03\x02\x02\x02\u083F\u083A\x03\x02\x02\x02\u083F" +
		"\u083B\x03\x02\x02\x02\u083F\u083C\x03\x02\x02\x02\u083F\u083D\x03\x02" +
		"\x02\x02\u083F\u083E\x03\x02\x02\x02\u0840\xF1\x03\x02\x02\x02\u0841\u0842" +
		"\x05\xFA~\x02\u0842\xF3\x03\x02\x02\x02\u0843\u0844\x07\t\x02\x02\u0844" +
		"\u0849\x05\xF6|\x02\u0845\u0846\x07\x07\x02\x02\u0846\u0848\x05\xF6|\x02" +
		"\u0847\u0845\x03\x02\x02\x02\u0848\u084B\x03\x02\x02\x02\u0849\u0847\x03" +
		"\x02\x02\x02\u0849\u084A\x03\x02\x02\x02\u084A\u084C\x03\x02\x02\x02\u084B" +
		"\u0849\x03\x02\x02\x02\u084C\u084D\x07\n\x02\x02\u084D\u0851\x03\x02\x02" +
		"\x02\u084E\u084F\x07\t\x02\x02\u084F\u0851\x07\n\x02\x02\u0850\u0843\x03" +
		"\x02\x02\x02\u0850\u084E\x03\x02\x02\x02\u0851\xF5\x03\x02\x02\x02\u0852" +
		"\u0853\x07\xAE\x02\x02\u0853\u0854\x07L\x02\x02\u0854\u0855\x05\xFA~\x02" +
		"\u0855\xF7\x03\x02\x02\x02\u0856\u0857\x07\x06\x02\x02\u0857\u085C\x05" +
		"\xFA~\x02\u0858\u0859\x07\x07\x02\x02\u0859\u085B\x05\xFA~\x02\u085A\u0858" +
		"\x03\x02\x02\x02\u085B\u085E\x03\x02\x02\x02\u085C\u085A\x03\x02\x02\x02" +
		"\u085C\u085D\x03\x02\x02\x02\u085D\u085F\x03\x02\x02\x02\u085E\u085C\x03" +
		"\x02\x02\x02\u085F\u0860\x07\b\x02\x02\u0860\u0864\x03\x02\x02\x02\u0861" +
		"\u0862\x07\x06\x02\x02\u0862\u0864\x07\b\x02\x02\u0863\u0856\x03\x02\x02" +
		"\x02\u0863\u0861\x03\x02\x02\x02\u0864\xF9\x03\x02\x02\x02\u0865\u086D" +
		"\x07\xAE\x02\x02\u0866\u086D\x07\xAF\x02\x02\u0867\u086D\x05\xF4{\x02" +
		"\u0868\u086D\x05\xF8}\x02\u0869\u086D\x07m\x02\x02\u086A\u086D\x07n\x02" +
		"\x02\u086B\u086D\x07\x9E\x02\x02\u086C\u0865\x03\x02\x02\x02\u086C\u0866" +
		"\x03\x02\x02\x02\u086C\u0867\x03\x02\x02\x02\u086C\u0868\x03\x02\x02\x02" +
		"\u086C\u0869\x03\x02\x02\x02\u086C\u086A\x03\x02\x02\x02\u086C\u086B\x03" +
		"\x02\x02\x02\u086D\xFB\x03\x02\x02\x02\xF6\xFF\u0104\u0108\u0120\u012B" +
		"\u012D\u0133\u0138\u013C\u0140\u0146\u016D\u0171\u0178\u017C\u0180\u0186" +
		"\u018F\u0194\u019E\u01A1\u01A7\u01B4\u01B9\u01BF\u01C5\u01CB\u01D4\u01DE" +
		"\u01E6\u01EC\u01F3\u01F8\u01FD\u0205\u0209\u0213\u0216\u021C\u021F\u0225" +
		"\u022B\u022D\u0235\u023B\u023F\u025A\u025D\u0261\u0264\u026B\u026E\u0274" +
		"\u0277\u027B\u027E\u0284\u0287\u028F\u0292\u0296\u029D\u02A2\u02A7\u02B5" +
		"\u02C3\u02D0\u02D7\u02FA\u0337\u0340\u034B\u034D\u0357\u0370\u0373\u0379" +
		"\u0382\u0385\u038C\u0393\u03B7\u03C6\u03CC\u03D1\u03D7\u03DB\u03DF\u03E2" +
		"\u03E6\u03ED\u03F7\u03FE\u0401\u0408\u040E\u0413\u0417\u0424\u042A\u042F" +
		"\u0433\u0439\u043E\u0443\u044C\u0453\u0458\u045C\u0462\u0467\u046C\u046F" +
		"\u0474\u0479\u047E\u0483\u0488\u048D\u0492\u0497\u049B\u04A0\u04A5\u04B0" +
		"\u04B7\u04BF\u04C4\u04C9\u04D2\u04D7";
	private static readonly _serializedATNSegment4: string =
		"\u04DC\u04E6\u04F6\u04FD\u0505\u050A\u050F\u051A\u051F\u0524\u052C\u0536" +
		"\u053D\u0547\u054C\u0553\u055D\u0562\u057C\u0581\u0585\u058E\u0591\u0597" +
		"\u059F\u05A3\u05A7\u05AB\u05AE\u05B3\u05C6\u05CB\u05D0\u05D6\u05DE\u05E6" +
		"\u05EC\u05F1\u05F6\u05F8\u05FF\u0609\u060E\u0619\u061E\u0622\u0625\u0628" +
		"\u062D\u0630\u0647\u064A\u064C\u0658\u065C\u0663\u066F\u0679\u0682\u0685" +
		"\u0688\u0690\u0693\u0696\u069A\u06B0\u06B2\u06BE\u06C7\u06D9\u06E2\u06EE" +
		"\u06F3\u06FD\u0706\u070C\u0718\u071B\u0723\u0725\u0734\u073D\u074B\u074D" +
		"\u0757\u0764\u0769\u077F\u0781\u0788\u078A\u0792\u079F\u07AC\u07B6\u07C0" +
		"\u07CA\u07D4\u07DB\u07E7\u07EE\u07FB\u0803\u080E\u0819\u0826\u0833\u083F" +
		"\u0849\u0850\u085C\u0863\u086C";
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
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public noInExecStatement(): NoInExecStatementContext | undefined {
		return this.tryGetRuleContext(0, NoInExecStatementContext);
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
	public funcImproveRunExpression(): FuncImproveRunExpressionContext | undefined {
		return this.tryGetRuleContext(0, FuncImproveRunExpressionContext);
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
export class NameSpaceSettingsPredicateContext extends NameSpaceSettingsContext {
	public _type!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
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
	public BOOL(): TerminalNode { return this.getToken(JustMCFParser.BOOL, 0); }
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
	public nameSpaceFunc(): NameSpaceFuncContext {
		return this.getRuleContext(0, NameSpaceFuncContext);
	}
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
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
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


export class ReturnStatementContext extends ParserRuleContext {
	public dataIdentifier(): DataIdentifierContext {
		return this.getRuleContext(0, DataIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncRunStatementContext extends ParserRuleContext {
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


export class FuncImproveRunExpressionContext extends ParserRuleContext {
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
	public NumberType(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NumberType, 0); }
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
	public NumberType(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NumberType, 0); }
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
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
	}
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
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
	}
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
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
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
	public matchPart(): MatchPartContext {
		return this.getRuleContext(0, MatchPartContext);
	}
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
export class ExecPredicateContext extends ExecChildContext {
	public _cond!: Token;
	public nameSpacePredicate(): NameSpacePredicateContext {
		return this.getRuleContext(0, NameSpacePredicateContext);
	}
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
export class ExecIfBlockContext extends ExecChildContext {
	public _cond!: Token;
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public blockIdentifier(): BlockIdentifierContext {
		return this.getRuleContext(0, BlockIdentifierContext);
	}
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
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public nameSpaceBiome(): NameSpaceBiomeContext {
		return this.getRuleContext(0, NameSpaceBiomeContext);
	}
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
	public dataIdentifier(): DataIdentifierContext[];
	public dataIdentifier(i: number): DataIdentifierContext;
	public dataIdentifier(i?: number): DataIdentifierContext | DataIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataIdentifierContext);
		} else {
			return this.getRuleContext(i, DataIdentifierContext);
		}
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
	public dataIdentifier(): DataIdentifierContext[];
	public dataIdentifier(i: number): DataIdentifierContext;
	public dataIdentifier(i?: number): DataIdentifierContext | DataIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataIdentifierContext);
		} else {
			return this.getRuleContext(i, DataIdentifierContext);
		}
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
	public dataIdentifier(): DataIdentifierContext[];
	public dataIdentifier(i: number): DataIdentifierContext;
	public dataIdentifier(i?: number): DataIdentifierContext | DataIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataIdentifierContext);
		} else {
			return this.getRuleContext(i, DataIdentifierContext);
		}
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
	public dataIdentifier(): DataIdentifierContext[];
	public dataIdentifier(i: number): DataIdentifierContext;
	public dataIdentifier(i?: number): DataIdentifierContext | DataIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataIdentifierContext);
		} else {
			return this.getRuleContext(i, DataIdentifierContext);
		}
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
	public dataIdentifier(): DataIdentifierContext[];
	public dataIdentifier(i: number): DataIdentifierContext;
	public dataIdentifier(i?: number): DataIdentifierContext | DataIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataIdentifierContext);
		} else {
			return this.getRuleContext(i, DataIdentifierContext);
		}
	}
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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


export class AcceptableNameContext extends ParserRuleContext {
	public AcceptableName(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.AcceptableName, 0); }
	public Key(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.Key, 0); }
	public NumberType(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NumberType, 0); }
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
	public Key(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.Key, 0); }
	public NumberType(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NumberType, 0); }
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


export class DataStatementContext extends ParserRuleContext {
	public dataOperationExpression(): DataOperationExpressionContext[];
	public dataOperationExpression(i: number): DataOperationExpressionContext;
	public dataOperationExpression(i?: number): DataOperationExpressionContext | DataOperationExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataOperationExpressionContext);
		} else {
			return this.getRuleContext(i, DataOperationExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_dataStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataStatement) {
			listener.enterDataStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataStatement) {
			listener.exitDataStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataStatement) {
			return visitor.visitDataStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScbPlayerStatementContext extends ParserRuleContext {
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
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
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
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public json(): JsonContext {
		return this.getRuleContext(0, JsonContext);
	}
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
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
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
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public _bool!: Token;
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
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
	}
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
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
	}
	public NUMBER(): TerminalNode { return this.getToken(JustMCFParser.NUMBER, 0); }
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
	public nameSpaceBossbar(): NameSpaceBossbarContext {
		return this.getRuleContext(0, NameSpaceBossbarContext);
	}
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
	public nameSpaceLoot(): NameSpaceLootContext {
		return this.getRuleContext(0, NameSpaceLootContext);
	}
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
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
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
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
	public _type!: RegisterNameContext;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public registerName(): RegisterNameContext {
		return this.getRuleContext(0, RegisterNameContext);
	}
	public pos3Identifier(): Pos3IdentifierContext | undefined {
		return this.tryGetRuleContext(0, Pos3IdentifierContext);
	}
	public nbt(): NbtContext | undefined {
		return this.tryGetRuleContext(0, NbtContext);
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
export class EntitySCompoundContext extends EntityStatementContext {
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
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public entityIndependentStatementInner(): EntityIndependentStatementInnerContext | undefined {
		return this.tryGetRuleContext(0, EntityIndependentStatementInnerContext);
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
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
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
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
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
export class EffectISIGiveContext extends EffectIndependentStatementInnerContext {
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
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
export class EffectISIClearContext extends EffectIndependentStatementInnerContext {
	public _second!: Token;
	public _amplifier!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BOOL, 0); }
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
export class EffectISIClearSpContext extends EffectIndependentStatementInnerContext {
	public _amplifier!: Token;
	public _second!: Token;
	public acceptableName(): AcceptableNameContext {
		return this.getRuleContext(0, AcceptableNameContext);
	}
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.BOOL, 0); }
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
		if (listener.enterEffectISIClearSp) {
			listener.enterEffectISIClearSp(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitEffectISIClearSp) {
			listener.exitEffectISIClearSp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitEffectISIClearSp) {
			return visitor.visitEffectISIClearSp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EffectISIClearAllContext extends EffectIndependentStatementInnerContext {
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
	public pos3Identifier(): Pos3IdentifierContext[];
	public pos3Identifier(i: number): Pos3IdentifierContext;
	public pos3Identifier(i?: number): Pos3IdentifierContext | Pos3IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pos3IdentifierContext);
		} else {
			return this.getRuleContext(i, Pos3IdentifierContext);
		}
	}
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
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
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
	public entityIndependentStatementInner(): EntityIndependentStatementInnerContext | undefined {
		return this.tryGetRuleContext(0, EntityIndependentStatementInnerContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_blockStatement; }
	public copyFrom(ctx: BlockStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class BlockSSetblockContext extends BlockStatementContext {
	public _mod!: Token;
	public pos3Identifier(): Pos3IdentifierContext {
		return this.getRuleContext(0, Pos3IdentifierContext);
	}
	public blockIdentifier(): BlockIdentifierContext {
		return this.getRuleContext(0, BlockIdentifierContext);
	}
	constructor(ctx: BlockStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlockSSetblock) {
			listener.enterBlockSSetblock(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlockSSetblock) {
			listener.exitBlockSSetblock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlockSSetblock) {
			return visitor.visitBlockSSetblock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockSFillContext extends BlockStatementContext {
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
	constructor(ctx: BlockStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlockSFill) {
			listener.enterBlockSFill(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlockSFill) {
			listener.exitBlockSFill(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlockSFill) {
			return visitor.visitBlockSFill(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockSFillReplaceContext extends BlockStatementContext {
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
	public block_predicate(): Block_predicateContext {
		return this.getRuleContext(0, Block_predicateContext);
	}
	constructor(ctx: BlockStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlockSFillReplace) {
			listener.enterBlockSFillReplace(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlockSFillReplace) {
			listener.exitBlockSFillReplace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlockSFillReplace) {
			return visitor.visitBlockSFillReplace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockSCloneContext extends BlockStatementContext {
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
	constructor(ctx: BlockStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlockSClone) {
			listener.enterBlockSClone(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlockSClone) {
			listener.exitBlockSClone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlockSClone) {
			return visitor.visitBlockSClone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockSCloneFilteredContext extends BlockStatementContext {
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
	public block_predicate(): Block_predicateContext {
		return this.getRuleContext(0, Block_predicateContext);
	}
	constructor(ctx: BlockStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterBlockSCloneFiltered) {
			listener.enterBlockSCloneFiltered(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitBlockSCloneFiltered) {
			listener.exitBlockSCloneFiltered(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitBlockSCloneFiltered) {
			return visitor.visitBlockSCloneFiltered(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceStatementContext extends ParserRuleContext {
	public nameSpaceStorage(): NameSpaceStorageContext {
		return this.getRuleContext(0, NameSpaceStorageContext);
	}
	public nbt(): NbtContext {
		return this.getRuleContext(0, NbtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_interfaceStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterInterfaceStatement) {
			listener.enterInterfaceStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitInterfaceStatement) {
			listener.exitInterfaceStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitInterfaceStatement) {
			return visitor.visitInterfaceStatement(this);
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
export class ExistExpressionTrueContext extends ExistExpressionContext {
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


export class IfStatementContext extends ParserRuleContext {
	public existExpression(): ExistExpressionContext {
		return this.getRuleContext(0, ExistExpressionContext);
	}
	public execRunChild(): ExecRunChildContext[];
	public execRunChild(i: number): ExecRunChildContext;
	public execRunChild(i?: number): ExecRunChildContext | ExecRunChildContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExecRunChildContext);
		} else {
			return this.getRuleContext(i, ExecRunChildContext);
		}
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
export class WhileStatementExistContext extends WhileStatementContext {
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
export class WhileStatementExecContext extends WhileStatementContext {
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


export class ForStatementContext extends ParserRuleContext {
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


