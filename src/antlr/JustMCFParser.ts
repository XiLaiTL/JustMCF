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
	public static readonly LeagalCommand = 72;
	public static readonly CompareOperation = 73;
	public static readonly Pos1 = 74;
	public static readonly Selector = 75;
	public static readonly AcceptableName = 76;
	public static readonly NBTName = 77;
	public static readonly ByteNumber = 78;
	public static readonly ShortNumber = 79;
	public static readonly LongNumber = 80;
	public static readonly FloatNumber = 81;
	public static readonly DoubleNumber = 82;
	public static readonly STRING2 = 83;
	public static readonly STRING = 84;
	public static readonly NUMBER = 85;
	public static readonly WS = 86;
	public static readonly RULE_mcfFile = 0;
	public static readonly RULE_statementAndCommand = 1;
	public static readonly RULE_command = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_leagalCommand = 4;
	public static readonly RULE_funcStatement = 5;
	public static readonly RULE_execStatement = 6;
	public static readonly RULE_execStoreChild = 7;
	public static readonly RULE_execRunChild = 8;
	public static readonly RULE_execChild = 9;
	public static readonly RULE_matchPart = 10;
	public static readonly RULE_dataIdentifier = 11;
	public static readonly RULE_dataOperationExpression = 12;
	public static readonly RULE_scbOperationExpression = 13;
	public static readonly RULE_scbSingleOperationExpression = 14;
	public static readonly RULE_scbIdentifier = 15;
	public static readonly RULE_pos3Identifier = 16;
	public static readonly RULE_pos2Identifier = 17;
	public static readonly RULE_pos5Identifier = 18;
	public static readonly RULE_pos1 = 19;
	public static readonly RULE_blockIdentifier = 20;
	public static readonly RULE_blockstate = 21;
	public static readonly RULE_selector = 22;
	public static readonly RULE_nameSpace = 23;
	public static readonly RULE_registerName = 24;
	public static readonly RULE_nbtName = 25;
	public static readonly RULE_resourceLocation = 26;
	public static readonly RULE_nbt = 27;
	public static readonly RULE_json = 28;
	public static readonly RULE_nbtPath = 29;
	public static readonly RULE_snbtValue = 30;
	public static readonly RULE_snbt = 31;
	public static readonly RULE_nbtCompound = 32;
	public static readonly RULE_nbtPair = 33;
	public static readonly RULE_nbtList = 34;
	public static readonly RULE_nbtValue = 35;
	public static readonly RULE_nbtByteArr = 36;
	public static readonly RULE_nbtIntArr = 37;
	public static readonly RULE_nbtLongArr = 38;
	public static readonly RULE_nbtString = 39;
	public static readonly RULE_jsonTextValue = 40;
	public static readonly RULE_jsonText = 41;
	public static readonly RULE_jsonObj = 42;
	public static readonly RULE_jsonPair = 43;
	public static readonly RULE_jsonArr = 44;
	public static readonly RULE_jsonValue = 45;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"mcfFile", "statementAndCommand", "command", "statement", "leagalCommand", 
		"funcStatement", "execStatement", "execStoreChild", "execRunChild", "execChild", 
		"matchPart", "dataIdentifier", "dataOperationExpression", "scbOperationExpression", 
		"scbSingleOperationExpression", "scbIdentifier", "pos3Identifier", "pos2Identifier", 
		"pos5Identifier", "pos1", "blockIdentifier", "blockstate", "selector", 
		"nameSpace", "registerName", "nbtName", "resourceLocation", "nbt", "json", 
		"nbtPath", "snbtValue", "snbt", "nbtCompound", "nbtPair", "nbtList", "nbtValue", 
		"nbtByteArr", "nbtIntArr", "nbtLongArr", "nbtString", "jsonTextValue", 
		"jsonText", "jsonObj", "jsonPair", "jsonArr", "jsonValue",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'->'", "'func'", "'tagged'", "','", "'{'", "'}'", "'exec'", 
		"'=>'", "'?=>'", "'*'", "'bossbar'", "'value'", "'max'", "'align'", "'anchored'", 
		"'eyes'", "'feet'", "'in'", "'as'", "'at'", "'facing'", "'positioned'", 
		"'rotated'", "'if'", "'unless'", "'all'", "'masked'", "'biome'", "'..'", 
		"'::'", "'|='", "'='", "'..0'", "'remove'", "'+='", "'-='", "'*='", "'/='", 
		"'%='", "'><'", "'<<'", "'>>'", "'reset'", "':='", "'/'", "'%'", "'+'", 
		"'-'", "'('", "')'", "':'", "'<'", "'>'", "'['", "']'", "'@'", "'#'", 
		"'[]'", "'n{'", "'n['", "'n[B;'", "'n[I;'", "'n[L;'", "'[B;'", "'[I;'", 
		"'[L;'", "'j{'", "'j['", "'true'", "'false'", "'null'",
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
		undefined, undefined, "LeagalCommand", "CompareOperation", "Pos1", "Selector", 
		"AcceptableName", "NBTName", "ByteNumber", "ShortNumber", "LongNumber", 
		"FloatNumber", "DoubleNumber", "STRING2", "STRING", "NUMBER", "WS",
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
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__1) {
				{
				{
				this.state = 92;
				this.funcStatement();
				}
				}
				this.state = 97;
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
	public statementAndCommand(): StatementAndCommandContext {
		let _localctx: StatementAndCommandContext = new StatementAndCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JustMCFParser.RULE_statementAndCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__4:
			case JustMCFParser.T__6:
			case JustMCFParser.T__51:
			case JustMCFParser.T__55:
			case JustMCFParser.T__56:
			case JustMCFParser.LeagalCommand:
			case JustMCFParser.Selector:
			case JustMCFParser.AcceptableName:
			case JustMCFParser.NBTName:
				{
				this.state = 98;
				this.command(0);
				}
				break;
			case JustMCFParser.T__0:
			case JustMCFParser.T__1:
				{
				this.state = 99;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
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

	public command(): CommandContext;
	public command(_p: number): CommandContext;
	// @RuleVersion(0)
	public command(_p?: number): CommandContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CommandContext = new CommandContext(this._ctx, _parentState);
		let _prevctx: CommandContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, JustMCFParser.RULE_command, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 103;
				this.execStatement();
				}
				break;

			case 2:
				{
				this.state = 104;
				this.dataOperationExpression();
				}
				break;

			case 3:
				{
				this.state = 105;
				this.scbOperationExpression();
				}
				break;

			case 4:
				{
				this.state = 106;
				this.leagalCommand();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 117;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new CommandContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_command);
					this.state = 109;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 111;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 110;
							this.execStoreChild();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 113;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
				}
				this.state = 119;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JustMCFParser.RULE_statement);
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 120;
				this.funcStatement();
				}
				break;
			case JustMCFParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 121;
				_localctx._left = this.match(JustMCFParser.T__0);
				this.state = 122;
				this.funcStatement();
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
	public leagalCommand(): LeagalCommandContext {
		let _localctx: LeagalCommandContext = new LeagalCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JustMCFParser.RULE_leagalCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
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
	public funcStatement(): FuncStatementContext {
		let _localctx: FuncStatementContext = new FuncStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JustMCFParser.RULE_funcStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(JustMCFParser.T__1);
			this.state = 128;
			this.nameSpace();
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__2) {
				{
				this.state = 129;
				this.match(JustMCFParser.T__2);
				this.state = 130;
				this.nameSpace();
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__3) {
					{
					{
					this.state = 131;
					this.match(JustMCFParser.T__3);
					this.state = 132;
					this.nameSpace();
					}
					}
					this.state = 137;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 140;
			this.match(JustMCFParser.T__4);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__0) | (1 << JustMCFParser.T__1) | (1 << JustMCFParser.T__4) | (1 << JustMCFParser.T__6))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (JustMCFParser.T__51 - 52)) | (1 << (JustMCFParser.T__55 - 52)) | (1 << (JustMCFParser.T__56 - 52)) | (1 << (JustMCFParser.LeagalCommand - 52)) | (1 << (JustMCFParser.Selector - 52)) | (1 << (JustMCFParser.AcceptableName - 52)) | (1 << (JustMCFParser.NBTName - 52)))) !== 0)) {
				{
				{
				this.state = 141;
				this.statementAndCommand();
				}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 147;
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
	public execStatement(): ExecStatementContext {
		let _localctx: ExecStatementContext = new ExecStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JustMCFParser.RULE_execStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 185;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				_localctx = new ExecWithRunOrChildContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__6) {
					{
					this.state = 149;
					this.match(JustMCFParser.T__6);
					}
				}

				this.state = 152;
				this.match(JustMCFParser.T__4);
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__7) | (1 << JustMCFParser.T__8) | (1 << JustMCFParser.T__13) | (1 << JustMCFParser.T__14) | (1 << JustMCFParser.T__17) | (1 << JustMCFParser.T__18) | (1 << JustMCFParser.T__19) | (1 << JustMCFParser.T__20) | (1 << JustMCFParser.T__21) | (1 << JustMCFParser.T__22) | (1 << JustMCFParser.T__23) | (1 << JustMCFParser.T__24))) !== 0)) {
					{
					{
					this.state = 153;
					this.execChild();
					}
					}
					this.state = 158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 159;
				this.match(JustMCFParser.T__5);
				this.state = 163;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 160;
						this.execStoreChild();
						}
						}
					}
					this.state = 165;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				}
				this.state = 168;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JustMCFParser.T__0:
					{
					this.state = 166;
					this.execRunChild();
					}
					break;
				case JustMCFParser.T__7:
				case JustMCFParser.T__8:
					{
					this.state = 167;
					this.execStoreChild();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 173;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 170;
						this.execStoreChild();
						}
						}
					}
					this.state = 175;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				}
				}
				break;

			case 2:
				_localctx = new ExecWithoutRunOrChildContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 176;
				this.match(JustMCFParser.T__6);
				this.state = 177;
				this.match(JustMCFParser.T__4);
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 178;
					this.execChild();
					}
					}
					this.state = 181;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__7) | (1 << JustMCFParser.T__8) | (1 << JustMCFParser.T__13) | (1 << JustMCFParser.T__14) | (1 << JustMCFParser.T__17) | (1 << JustMCFParser.T__18) | (1 << JustMCFParser.T__19) | (1 << JustMCFParser.T__20) | (1 << JustMCFParser.T__21) | (1 << JustMCFParser.T__22) | (1 << JustMCFParser.T__23) | (1 << JustMCFParser.T__24))) !== 0));
				this.state = 183;
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
		this.enterRule(_localctx, 14, JustMCFParser.RULE_execStoreChild);
		let _la: number;
		try {
			this.state = 219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				_localctx = new ExecStoreResultScoreContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 187;
				this.match(JustMCFParser.T__7);
				this.state = 188;
				this.scbIdentifier();
				}
				break;

			case 2:
				_localctx = new ExecStoreSuccessScoreContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 189;
				this.match(JustMCFParser.T__8);
				this.state = 190;
				this.scbIdentifier();
				}
				break;

			case 3:
				_localctx = new ExecStoreResultDataContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 191;
				this.match(JustMCFParser.T__7);
				this.state = 192;
				this.dataIdentifier();
				this.state = 196;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 193;
					this.match(JustMCFParser.AcceptableName);
					this.state = 194;
					this.match(JustMCFParser.T__9);
					this.state = 195;
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
				this.state = 198;
				this.match(JustMCFParser.T__8);
				this.state = 199;
				this.dataIdentifier();
				this.state = 203;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 200;
					this.match(JustMCFParser.AcceptableName);
					this.state = 201;
					this.match(JustMCFParser.T__9);
					this.state = 202;
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
				this.state = 205;
				this.match(JustMCFParser.T__7);
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__10) {
					{
					this.state = 206;
					this.match(JustMCFParser.T__10);
					}
				}

				this.state = 209;
				this.nameSpace();
				this.state = 210;
				(_localctx as ExecStoreResultBossbarContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__11 || _la === JustMCFParser.T__12)) {
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

			case 6:
				_localctx = new ExecStoreSuccessBossbarContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 212;
				this.match(JustMCFParser.T__8);
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__10) {
					{
					this.state = 213;
					this.match(JustMCFParser.T__10);
					}
				}

				this.state = 216;
				this.nameSpace();
				this.state = 217;
				(_localctx as ExecStoreSuccessBossbarContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__11 || _la === JustMCFParser.T__12)) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 16, JustMCFParser.RULE_execRunChild);
		let _la: number;
		try {
			this.state = 237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				_localctx = new ExecDirectRunContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 221;
				this.match(JustMCFParser.T__0);
				this.state = 222;
				this.command(0);
				}
				break;

			case 2:
				_localctx = new ExecNamedRunContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 223;
				this.match(JustMCFParser.T__0);
				this.state = 224;
				this.funcStatement();
				}
				break;

			case 3:
				_localctx = new ExecAnonymousRunContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 225;
				this.match(JustMCFParser.T__0);
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__1) {
					{
					this.state = 226;
					this.match(JustMCFParser.T__1);
					}
				}

				this.state = 229;
				this.match(JustMCFParser.T__4);
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__0) | (1 << JustMCFParser.T__1) | (1 << JustMCFParser.T__4) | (1 << JustMCFParser.T__6))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (JustMCFParser.T__51 - 52)) | (1 << (JustMCFParser.T__55 - 52)) | (1 << (JustMCFParser.T__56 - 52)) | (1 << (JustMCFParser.LeagalCommand - 52)) | (1 << (JustMCFParser.Selector - 52)) | (1 << (JustMCFParser.AcceptableName - 52)) | (1 << (JustMCFParser.NBTName - 52)))) !== 0)) {
					{
					{
					this.state = 230;
					this.statementAndCommand();
					}
					}
					this.state = 235;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 236;
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
		this.enterRule(_localctx, 18, JustMCFParser.RULE_execChild);
		let _la: number;
		try {
			this.state = 294;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				_localctx = new ExecAlignContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 239;
				this.match(JustMCFParser.T__13);
				this.state = 240;
				this.match(JustMCFParser.AcceptableName);
				}
				break;

			case 2:
				_localctx = new ExecAnchoredContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 241;
				this.match(JustMCFParser.T__14);
				this.state = 242;
				(_localctx as ExecAnchoredContext)._anchor = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__15 || _la === JustMCFParser.T__16)) {
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
				this.state = 243;
				this.match(JustMCFParser.T__17);
				this.state = 244;
				this.nameSpace();
				}
				break;

			case 4:
				_localctx = new ExecAsContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 245;
				this.match(JustMCFParser.T__18);
				this.state = 246;
				this.selector();
				}
				break;

			case 5:
				_localctx = new ExecAtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 247;
				this.match(JustMCFParser.T__19);
				this.state = 248;
				this.selector();
				}
				break;

			case 6:
				_localctx = new ExecFacingPosContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 249;
				this.match(JustMCFParser.T__20);
				this.state = 250;
				this.pos3Identifier();
				}
				break;

			case 7:
				_localctx = new ExecFacingEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 251;
				this.match(JustMCFParser.T__20);
				this.state = 252;
				this.selector();
				this.state = 253;
				(_localctx as ExecFacingEntityContext)._anchor = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__15 || _la === JustMCFParser.T__16)) {
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
				this.state = 255;
				this.match(JustMCFParser.T__21);
				this.state = 256;
				this.pos3Identifier();
				}
				break;

			case 9:
				_localctx = new ExecPostionedAsContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 257;
				this.match(JustMCFParser.T__21);
				this.state = 258;
				this.selector();
				}
				break;

			case 10:
				_localctx = new ExecRotatedPosContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 259;
				this.match(JustMCFParser.T__22);
				this.state = 260;
				this.pos2Identifier();
				}
				break;

			case 11:
				_localctx = new ExecRotatedAsContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 261;
				this.match(JustMCFParser.T__22);
				this.state = 262;
				this.selector();
				}
				break;

			case 12:
				_localctx = new ExecIfEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 263;
				(_localctx as ExecIfEntityContext)._cond = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__23 || _la === JustMCFParser.T__24)) {
					(_localctx as ExecIfEntityContext)._cond = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 264;
				this.selector();
				}
				break;

			case 13:
				_localctx = new ExecIfScoreContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 265;
				(_localctx as ExecIfScoreContext)._cond = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__23 || _la === JustMCFParser.T__24)) {
					(_localctx as ExecIfScoreContext)._cond = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 266;
				this.scbIdentifier();
				this.state = 267;
				this.match(JustMCFParser.CompareOperation);
				this.state = 268;
				this.scbIdentifier();
				}
				break;

			case 14:
				_localctx = new ExecIfScoreMatchesContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 270;
				(_localctx as ExecIfScoreMatchesContext)._cond = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__23 || _la === JustMCFParser.T__24)) {
					(_localctx as ExecIfScoreMatchesContext)._cond = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 271;
				this.scbIdentifier();
				this.state = 272;
				this.matchPart();
				}
				break;

			case 15:
				_localctx = new ExecPredicateContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 274;
				(_localctx as ExecPredicateContext)._cond = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__23 || _la === JustMCFParser.T__24)) {
					(_localctx as ExecPredicateContext)._cond = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 275;
				this.nameSpace();
				}
				break;

			case 16:
				_localctx = new ExecIfBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 276;
				(_localctx as ExecIfBlockContext)._cond = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__23 || _la === JustMCFParser.T__24)) {
					(_localctx as ExecIfBlockContext)._cond = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 277;
				this.pos3Identifier();
				this.state = 278;
				this.blockIdentifier();
				}
				break;

			case 17:
				_localctx = new ExecIfBlocksContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 280;
				(_localctx as ExecIfBlocksContext)._cond = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__23 || _la === JustMCFParser.T__24)) {
					(_localctx as ExecIfBlocksContext)._cond = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 281;
				this.pos3Identifier();
				this.state = 282;
				this.pos3Identifier();
				this.state = 283;
				this.pos3Identifier();
				this.state = 284;
				(_localctx as ExecIfBlocksContext)._scan_mode = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__25 || _la === JustMCFParser.T__26)) {
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
				this.state = 286;
				(_localctx as ExecIfDataContext)._cond = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__23 || _la === JustMCFParser.T__24)) {
					(_localctx as ExecIfDataContext)._cond = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 287;
				this.dataIdentifier();
				}
				break;

			case 19:
				_localctx = new ExecIfBiomeContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 288;
				(_localctx as ExecIfBiomeContext)._cond = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__23 || _la === JustMCFParser.T__24)) {
					(_localctx as ExecIfBiomeContext)._cond = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 289;
				this.match(JustMCFParser.T__27);
				this.state = 290;
				this.pos3Identifier();
				this.state = 291;
				this.nameSpace();
				}
				break;

			case 20:
				_localctx = new ExecStoreContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 293;
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
		this.enterRule(_localctx, 20, JustMCFParser.RULE_matchPart);
		let _la: number;
		try {
			this.state = 304;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 296;
				this.match(JustMCFParser.NUMBER);
				this.state = 297;
				this.match(JustMCFParser.T__28);
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 298;
					this.match(JustMCFParser.NUMBER);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 301;
				this.match(JustMCFParser.T__28);
				this.state = 302;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 303;
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
		this.enterRule(_localctx, 22, JustMCFParser.RULE_dataIdentifier);
		try {
			this.state = 318;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.AcceptableName:
				_localctx = new DataStorageContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 306;
				this.nameSpace();
				this.state = 307;
				this.match(JustMCFParser.T__29);
				this.state = 308;
				this.nbtPath();
				}
				break;
			case JustMCFParser.T__55:
			case JustMCFParser.T__56:
			case JustMCFParser.Selector:
				_localctx = new DataEntityContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 310;
				this.selector();
				this.state = 311;
				this.match(JustMCFParser.T__29);
				this.state = 312;
				this.nbtPath();
				}
				break;
			case JustMCFParser.T__51:
				_localctx = new DataBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 314;
				this.pos3Identifier();
				this.state = 315;
				this.match(JustMCFParser.T__29);
				this.state = 316;
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
	public dataOperationExpression(): DataOperationExpressionContext {
		let _localctx: DataOperationExpressionContext = new DataOperationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JustMCFParser.RULE_dataOperationExpression);
		try {
			this.state = 366;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 320;
				this.dataIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 321;
				this.dataIdentifier();
				this.state = 322;
				this.match(JustMCFParser.T__30);
				this.state = 323;
				this.nbt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 325;
				this.dataIdentifier();
				this.state = 326;
				this.match(JustMCFParser.T__30);
				this.state = 327;
				this.dataIdentifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 329;
				this.dataIdentifier();
				this.state = 330;
				this.match(JustMCFParser.T__31);
				this.state = 331;
				this.nbt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 333;
				this.dataIdentifier();
				this.state = 334;
				this.match(JustMCFParser.T__31);
				this.state = 335;
				this.dataIdentifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 337;
				this.dataIdentifier();
				this.state = 338;
				this.match(JustMCFParser.T__28);
				this.state = 339;
				this.nbt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 341;
				this.dataIdentifier();
				this.state = 342;
				this.match(JustMCFParser.T__28);
				this.state = 343;
				this.dataIdentifier();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 345;
				this.dataIdentifier();
				this.state = 346;
				this.match(JustMCFParser.T__32);
				this.state = 347;
				this.nbt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 349;
				this.dataIdentifier();
				this.state = 350;
				this.match(JustMCFParser.T__32);
				this.state = 351;
				this.dataIdentifier();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 353;
				this.dataIdentifier();
				this.state = 354;
				this.match(JustMCFParser.T__28);
				this.state = 355;
				this.match(JustMCFParser.NUMBER);
				this.state = 356;
				this.nbt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 358;
				this.dataIdentifier();
				this.state = 359;
				this.match(JustMCFParser.T__28);
				this.state = 360;
				this.match(JustMCFParser.NUMBER);
				this.state = 361;
				this.dataIdentifier();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 363;
				this.dataIdentifier();
				this.state = 364;
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
	public scbOperationExpression(): ScbOperationExpressionContext {
		let _localctx: ScbOperationExpressionContext = new ScbOperationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JustMCFParser.RULE_scbOperationExpression);
		try {
			this.state = 424;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 368;
				this.scbIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 369;
				this.scbIdentifier();
				this.state = 370;
				this.match(JustMCFParser.T__34);
				this.state = 371;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 373;
				this.scbIdentifier();
				this.state = 374;
				this.match(JustMCFParser.T__35);
				this.state = 375;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 377;
				this.scbIdentifier();
				this.state = 378;
				this.match(JustMCFParser.T__31);
				this.state = 379;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 381;
				this.scbIdentifier();
				this.state = 382;
				this.match(JustMCFParser.T__34);
				this.state = 383;
				this.scbIdentifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 385;
				this.scbIdentifier();
				this.state = 386;
				this.match(JustMCFParser.T__35);
				this.state = 387;
				this.scbIdentifier();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 389;
				this.scbIdentifier();
				this.state = 390;
				this.match(JustMCFParser.T__36);
				this.state = 391;
				this.scbIdentifier();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 393;
				this.scbIdentifier();
				this.state = 394;
				this.match(JustMCFParser.T__37);
				this.state = 395;
				this.scbIdentifier();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 397;
				this.scbIdentifier();
				this.state = 398;
				this.match(JustMCFParser.T__38);
				this.state = 399;
				this.scbIdentifier();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 401;
				this.scbIdentifier();
				this.state = 402;
				this.match(JustMCFParser.T__39);
				this.state = 403;
				this.scbIdentifier();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 405;
				this.scbIdentifier();
				this.state = 406;
				this.match(JustMCFParser.T__40);
				this.state = 407;
				this.scbIdentifier();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 409;
				this.scbIdentifier();
				this.state = 410;
				this.match(JustMCFParser.T__41);
				this.state = 411;
				this.scbIdentifier();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 413;
				this.scbIdentifier();
				this.state = 414;
				this.match(JustMCFParser.T__31);
				this.state = 415;
				this.scbIdentifier();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 417;
				this.scbIdentifier();
				this.state = 418;
				this.match(JustMCFParser.T__42);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 420;
				this.scbIdentifier();
				this.state = 421;
				this.match(JustMCFParser.T__43);
				this.state = 422;
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
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, JustMCFParser.RULE_scbSingleOperationExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.NUMBER:
				{
				this.state = 427;
				this.match(JustMCFParser.NUMBER);
				}
				break;
			case JustMCFParser.T__55:
			case JustMCFParser.T__56:
			case JustMCFParser.Selector:
			case JustMCFParser.AcceptableName:
			case JustMCFParser.NBTName:
				{
				this.state = 428;
				this.scbIdentifier();
				}
				break;
			case JustMCFParser.T__48:
				{
				this.state = 429;
				this.match(JustMCFParser.T__48);
				this.state = 430;
				this.scbSingleOperationExpression(0);
				this.state = 431;
				this.match(JustMCFParser.T__49);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 449;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 447;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
					case 1:
						{
						_localctx = new ScbSingleOperationExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
						this.state = 435;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 436;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (JustMCFParser.T__39 - 40)) | (1 << (JustMCFParser.T__40 - 40)) | (1 << (JustMCFParser.T__41 - 40)))) !== 0))) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 437;
						this.scbSingleOperationExpression(8);
						}
						break;

					case 2:
						{
						_localctx = new ScbSingleOperationExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
						this.state = 438;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 439;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JustMCFParser.T__9 || _la === JustMCFParser.T__44 || _la === JustMCFParser.T__45)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 440;
						this.scbSingleOperationExpression(7);
						}
						break;

					case 3:
						{
						_localctx = new ScbSingleOperationExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
						this.state = 441;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 442;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === JustMCFParser.T__46 || _la === JustMCFParser.T__47)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 443;
						this.scbSingleOperationExpression(6);
						}
						break;

					case 4:
						{
						_localctx = new ScbSingleOperationExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
						this.state = 444;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 445;
						_localctx._op = this.match(JustMCFParser.T__31);
						this.state = 446;
						this.scbSingleOperationExpression(5);
						}
						break;
					}
					}
				}
				this.state = 451;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
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
		this.enterRule(_localctx, 30, JustMCFParser.RULE_scbIdentifier);
		try {
			this.state = 459;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.AcceptableName:
			case JustMCFParser.NBTName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 452;
				this.nbtName();
				this.state = 453;
				this.selector();
				}
				break;
			case JustMCFParser.T__55:
			case JustMCFParser.T__56:
			case JustMCFParser.Selector:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 455;
				this.selector();
				this.state = 456;
				this.match(JustMCFParser.T__50);
				this.state = 457;
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
		this.enterRule(_localctx, 32, JustMCFParser.RULE_pos3Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this.match(JustMCFParser.T__51);
			this.state = 462;
			this.pos1();
			this.state = 463;
			this.pos1();
			this.state = 464;
			this.pos1();
			this.state = 465;
			this.match(JustMCFParser.T__52);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 34, JustMCFParser.RULE_pos2Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.match(JustMCFParser.T__51);
			this.state = 468;
			this.pos1();
			this.state = 469;
			this.pos1();
			this.state = 470;
			this.match(JustMCFParser.T__52);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 36, JustMCFParser.RULE_pos5Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(JustMCFParser.T__51);
			this.state = 473;
			this.pos1();
			this.state = 474;
			this.pos1();
			this.state = 475;
			this.pos1();
			this.state = 476;
			this.pos1();
			this.state = 477;
			this.pos1();
			this.state = 478;
			this.match(JustMCFParser.T__52);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 38, JustMCFParser.RULE_pos1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
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
		this.enterRule(_localctx, 40, JustMCFParser.RULE_blockIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.registerName();
			this.state = 484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__53) {
				{
				this.state = 483;
				this.blockstate();
				}
			}

			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JustMCFParser.T__58 - 59)) | (1 << (JustMCFParser.T__59 - 59)) | (1 << (JustMCFParser.T__60 - 59)) | (1 << (JustMCFParser.T__61 - 59)) | (1 << (JustMCFParser.T__62 - 59)) | (1 << (JustMCFParser.ByteNumber - 59)) | (1 << (JustMCFParser.ShortNumber - 59)) | (1 << (JustMCFParser.LongNumber - 59)) | (1 << (JustMCFParser.FloatNumber - 59)) | (1 << (JustMCFParser.DoubleNumber - 59)) | (1 << (JustMCFParser.STRING2 - 59)) | (1 << (JustMCFParser.STRING - 59)))) !== 0)) {
				{
				this.state = 486;
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
		this.enterRule(_localctx, 42, JustMCFParser.RULE_blockstate);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(JustMCFParser.T__53);
			this.state = 491;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 490;
					this.matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 493;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 495;
			this.match(JustMCFParser.T__54);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 44, JustMCFParser.RULE_selector);
		try {
			let _alt: number;
			this.state = 512;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 497;
				this.match(JustMCFParser.Selector);
				this.state = 505;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 498;
					this.match(JustMCFParser.T__53);
					this.state = 500;
					this._errHandler.sync(this);
					_alt = 1 + 1;
					do {
						switch (_alt) {
						case 1 + 1:
							{
							{
							this.state = 499;
							this.matchWildcard();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 502;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
					} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 504;
					this.match(JustMCFParser.T__54);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 507;
				this.match(JustMCFParser.T__55);
				this.state = 508;
				this.nbtName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 509;
				this.match(JustMCFParser.T__56);
				this.state = 510;
				this.nbtName();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 511;
				this.match(JustMCFParser.T__56);
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
		this.enterRule(_localctx, 46, JustMCFParser.RULE_nameSpace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this.match(JustMCFParser.AcceptableName);
			this.state = 515;
			this.match(JustMCFParser.T__50);
			this.state = 516;
			this.resourceLocation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 48, JustMCFParser.RULE_registerName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 518;
				this.match(JustMCFParser.AcceptableName);
				this.state = 519;
				this.match(JustMCFParser.T__50);
				}
				break;
			}
			this.state = 522;
			this.match(JustMCFParser.AcceptableName);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 50, JustMCFParser.RULE_nbtName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			_la = this._input.LA(1);
			if (!(_la === JustMCFParser.AcceptableName || _la === JustMCFParser.NBTName)) {
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
		this.enterRule(_localctx, 52, JustMCFParser.RULE_resourceLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this.match(JustMCFParser.AcceptableName);
			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__44) {
				{
				{
				this.state = 527;
				this.match(JustMCFParser.T__44);
				this.state = 528;
				this.match(JustMCFParser.AcceptableName);
				}
				}
				this.state = 533;
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
	public nbt(): NbtContext {
		let _localctx: NbtContext = new NbtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, JustMCFParser.RULE_nbt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
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
		this.enterRule(_localctx, 56, JustMCFParser.RULE_json);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
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
		this.enterRule(_localctx, 58, JustMCFParser.RULE_nbtPath);
		try {
			let _alt: number;
			this.state = 559;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 538;
				this.nbtName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 539;
				this.nbtCompound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 540;
				this.nbtName();
				this.state = 541;
				this.nbtCompound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 543;
				this.nbtName();
				this.state = 550;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 548;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case JustMCFParser.T__53:
							{
							this.state = 544;
							this.match(JustMCFParser.T__53);
							this.state = 545;
							this.match(JustMCFParser.NUMBER);
							this.state = 546;
							this.match(JustMCFParser.T__54);
							}
							break;
						case JustMCFParser.T__57:
							{
							this.state = 547;
							this.match(JustMCFParser.T__57);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 552;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				}
				this.state = 557;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 553;
					this.match(JustMCFParser.T__53);
					this.state = 554;
					this.nbtCompound();
					this.state = 555;
					this.match(JustMCFParser.T__54);
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
		this.enterRule(_localctx, 60, JustMCFParser.RULE_snbtValue);
		let _la: number;
		try {
			this.state = 623;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 561;
				this.match(JustMCFParser.T__58);
				this.state = 562;
				this.nbtPair();
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__3) {
					{
					{
					this.state = 563;
					this.match(JustMCFParser.T__3);
					this.state = 564;
					this.nbtPair();
					}
					}
					this.state = 569;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 570;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 572;
				this.match(JustMCFParser.T__58);
				this.state = 573;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 574;
				this.match(JustMCFParser.T__59);
				this.state = 575;
				this.nbtValue();
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__3) {
					{
					{
					this.state = 576;
					this.match(JustMCFParser.T__3);
					this.state = 577;
					this.nbtValue();
					}
					}
					this.state = 582;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 583;
				this.match(JustMCFParser.T__54);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 585;
				this.match(JustMCFParser.T__59);
				this.state = 586;
				this.match(JustMCFParser.T__54);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 587;
				this.match(JustMCFParser.T__60);
				this.state = 588;
				this.match(JustMCFParser.ByteNumber);
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__3) {
					{
					{
					this.state = 589;
					this.match(JustMCFParser.T__3);
					this.state = 590;
					this.match(JustMCFParser.ByteNumber);
					}
					}
					this.state = 595;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 596;
				this.match(JustMCFParser.T__54);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 597;
				this.match(JustMCFParser.T__61);
				this.state = 598;
				this.match(JustMCFParser.NUMBER);
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__3) {
					{
					{
					this.state = 599;
					this.match(JustMCFParser.T__3);
					this.state = 600;
					this.match(JustMCFParser.NUMBER);
					}
					}
					this.state = 605;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 606;
				this.match(JustMCFParser.T__54);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 607;
				this.match(JustMCFParser.T__62);
				this.state = 608;
				this.match(JustMCFParser.LongNumber);
				this.state = 613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__3) {
					{
					{
					this.state = 609;
					this.match(JustMCFParser.T__3);
					this.state = 610;
					this.match(JustMCFParser.LongNumber);
					}
					}
					this.state = 615;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 616;
				this.match(JustMCFParser.T__54);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 617;
				this.nbtString();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 618;
				this.match(JustMCFParser.ByteNumber);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 619;
				this.match(JustMCFParser.ShortNumber);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 620;
				this.match(JustMCFParser.LongNumber);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 621;
				this.match(JustMCFParser.FloatNumber);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 622;
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
		this.enterRule(_localctx, 62, JustMCFParser.RULE_snbt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 625;
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
		this.enterRule(_localctx, 64, JustMCFParser.RULE_nbtCompound);
		let _la: number;
		try {
			this.state = 640;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 627;
				this.match(JustMCFParser.T__4);
				this.state = 628;
				this.nbtPair();
				this.state = 633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__3) {
					{
					{
					this.state = 629;
					this.match(JustMCFParser.T__3);
					this.state = 630;
					this.nbtPair();
					}
					}
					this.state = 635;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 636;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 638;
				this.match(JustMCFParser.T__4);
				this.state = 639;
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
		this.enterRule(_localctx, 66, JustMCFParser.RULE_nbtPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this.nbtName();
			this.state = 643;
			this.match(JustMCFParser.T__50);
			this.state = 644;
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
		this.enterRule(_localctx, 68, JustMCFParser.RULE_nbtList);
		let _la: number;
		try {
			this.state = 659;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 646;
				this.match(JustMCFParser.T__53);
				this.state = 647;
				this.nbtValue();
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__3) {
					{
					{
					this.state = 648;
					this.match(JustMCFParser.T__3);
					this.state = 649;
					this.nbtValue();
					}
					}
					this.state = 654;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 655;
				this.match(JustMCFParser.T__54);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 657;
				this.match(JustMCFParser.T__53);
				this.state = 658;
				this.match(JustMCFParser.T__54);
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
		this.enterRule(_localctx, 70, JustMCFParser.RULE_nbtValue);
		try {
			this.state = 672;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 661;
				this.nbtCompound();
				}
				break;
			case JustMCFParser.T__53:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 662;
				this.nbtList();
				}
				break;
			case JustMCFParser.T__63:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 663;
				this.nbtByteArr();
				}
				break;
			case JustMCFParser.T__64:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 664;
				this.nbtIntArr();
				}
				break;
			case JustMCFParser.T__65:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 665;
				this.nbtLongArr();
				}
				break;
			case JustMCFParser.STRING2:
			case JustMCFParser.STRING:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 666;
				this.nbtString();
				}
				break;
			case JustMCFParser.ByteNumber:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 667;
				this.match(JustMCFParser.ByteNumber);
				}
				break;
			case JustMCFParser.ShortNumber:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 668;
				this.match(JustMCFParser.ShortNumber);
				}
				break;
			case JustMCFParser.LongNumber:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 669;
				this.match(JustMCFParser.LongNumber);
				}
				break;
			case JustMCFParser.FloatNumber:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 670;
				this.match(JustMCFParser.FloatNumber);
				}
				break;
			case JustMCFParser.DoubleNumber:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 671;
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
		this.enterRule(_localctx, 72, JustMCFParser.RULE_nbtByteArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 674;
			this.match(JustMCFParser.T__63);
			this.state = 675;
			this.match(JustMCFParser.ByteNumber);
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__3) {
				{
				{
				this.state = 676;
				this.match(JustMCFParser.T__3);
				this.state = 677;
				this.match(JustMCFParser.ByteNumber);
				}
				}
				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 683;
			this.match(JustMCFParser.T__54);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 74, JustMCFParser.RULE_nbtIntArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			this.match(JustMCFParser.T__64);
			this.state = 686;
			this.match(JustMCFParser.NUMBER);
			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__3) {
				{
				{
				this.state = 687;
				this.match(JustMCFParser.T__3);
				this.state = 688;
				this.match(JustMCFParser.NUMBER);
				}
				}
				this.state = 693;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 694;
			this.match(JustMCFParser.T__54);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 76, JustMCFParser.RULE_nbtLongArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this.match(JustMCFParser.T__65);
			this.state = 697;
			this.match(JustMCFParser.LongNumber);
			this.state = 702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__3) {
				{
				{
				this.state = 698;
				this.match(JustMCFParser.T__3);
				this.state = 699;
				this.match(JustMCFParser.LongNumber);
				}
				}
				this.state = 704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 705;
			this.match(JustMCFParser.T__54);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 78, JustMCFParser.RULE_nbtString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
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
		this.enterRule(_localctx, 80, JustMCFParser.RULE_jsonTextValue);
		let _la: number;
		try {
			this.state = 740;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 709;
				this.match(JustMCFParser.T__66);
				this.state = 710;
				this.jsonPair();
				this.state = 715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__3) {
					{
					{
					this.state = 711;
					this.match(JustMCFParser.T__3);
					this.state = 712;
					this.jsonPair();
					}
					}
					this.state = 717;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 718;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 720;
				this.match(JustMCFParser.T__66);
				this.state = 721;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 722;
				this.match(JustMCFParser.T__67);
				this.state = 723;
				this.jsonValue();
				this.state = 728;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__3) {
					{
					{
					this.state = 724;
					this.match(JustMCFParser.T__3);
					this.state = 725;
					this.jsonValue();
					}
					}
					this.state = 730;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 731;
				this.match(JustMCFParser.T__54);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 733;
				this.match(JustMCFParser.T__53);
				this.state = 734;
				this.match(JustMCFParser.T__54);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 735;
				this.match(JustMCFParser.STRING);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 736;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 737;
				this.match(JustMCFParser.T__68);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 738;
				this.match(JustMCFParser.T__69);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 739;
				this.match(JustMCFParser.T__70);
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
		this.enterRule(_localctx, 82, JustMCFParser.RULE_jsonText);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 742;
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
		this.enterRule(_localctx, 84, JustMCFParser.RULE_jsonObj);
		let _la: number;
		try {
			this.state = 757;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 744;
				this.match(JustMCFParser.T__4);
				this.state = 745;
				this.jsonPair();
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__3) {
					{
					{
					this.state = 746;
					this.match(JustMCFParser.T__3);
					this.state = 747;
					this.jsonPair();
					}
					}
					this.state = 752;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 753;
				this.match(JustMCFParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 755;
				this.match(JustMCFParser.T__4);
				this.state = 756;
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
		this.enterRule(_localctx, 86, JustMCFParser.RULE_jsonPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this.match(JustMCFParser.STRING);
			this.state = 760;
			this.match(JustMCFParser.T__50);
			this.state = 761;
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
		this.enterRule(_localctx, 88, JustMCFParser.RULE_jsonArr);
		let _la: number;
		try {
			this.state = 776;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 763;
				this.match(JustMCFParser.T__53);
				this.state = 764;
				this.jsonValue();
				this.state = 769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__3) {
					{
					{
					this.state = 765;
					this.match(JustMCFParser.T__3);
					this.state = 766;
					this.jsonValue();
					}
					}
					this.state = 771;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 772;
				this.match(JustMCFParser.T__54);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 774;
				this.match(JustMCFParser.T__53);
				this.state = 775;
				this.match(JustMCFParser.T__54);
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
		this.enterRule(_localctx, 90, JustMCFParser.RULE_jsonValue);
		try {
			this.state = 785;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 778;
				this.match(JustMCFParser.STRING);
				}
				break;
			case JustMCFParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 779;
				this.match(JustMCFParser.NUMBER);
				}
				break;
			case JustMCFParser.T__4:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 780;
				this.jsonObj();
				}
				break;
			case JustMCFParser.T__53:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 781;
				this.jsonArr();
				}
				break;
			case JustMCFParser.T__68:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 782;
				this.match(JustMCFParser.T__68);
				}
				break;
			case JustMCFParser.T__69:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 783;
				this.match(JustMCFParser.T__69);
				}
				break;
			case JustMCFParser.T__70:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 784;
				this.match(JustMCFParser.T__70);
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
		case 2:
			return this.command_sempred(_localctx as CommandContext, predIndex);

		case 14:
			return this.scbSingleOperationExpression_sempred(_localctx as ScbSingleOperationExpressionContext, predIndex);
		}
		return true;
	}
	private command_sempred(_localctx: CommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private scbSingleOperationExpression_sempred(_localctx: ScbSingleOperationExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 5);

		case 4:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03X\u0316\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x03\x02\x07\x02`\n\x02\f\x02\x0E\x02" +
		"c\v\x02\x03\x03\x03\x03\x05\x03g\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x05\x04n\n\x04\x03\x04\x03\x04\x06\x04r\n\x04\r\x04\x0E\x04s" +
		"\x07\x04v\n\x04\f\x04\x0E\x04y\v\x04\x03\x05\x03\x05\x03\x05\x05\x05~" +
		"\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x07\x07\x88\n\x07\f\x07\x0E\x07\x8B\v\x07\x05\x07\x8D\n\x07\x03\x07\x03" +
		"\x07\x07\x07\x91\n\x07\f\x07\x0E\x07\x94\v\x07\x03\x07\x03\x07\x03\b\x05" +
		"\b\x99\n\b\x03\b\x03\b\x07\b\x9D\n\b\f\b\x0E\b\xA0\v\b\x03\b\x03\b\x07" +
		"\b\xA4\n\b\f\b\x0E\b\xA7\v\b\x03\b\x03\b\x05\b\xAB\n\b\x03\b\x07\b\xAE" +
		"\n\b\f\b\x0E\b\xB1\v\b\x03\b\x03\b\x03\b\x06\b\xB6\n\b\r\b\x0E\b\xB7\x03" +
		"\b\x03\b\x05\b\xBC\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x05\t\xC7\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xCE\n\t\x03\t" +
		"\x03\t\x05\t\xD2\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xD9\n\t\x03\t" +
		"\x03\t\x03\t\x05\t\xDE\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xE6" +
		"\n\n\x03\n\x03\n\x07\n\xEA\n\n\f\n\x0E\n\xED\v\n\x03\n\x05\n\xF0\n\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0129\n\v\x03\f\x03\f\x03" +
		"\f\x05\f\u012E\n\f\x03\f\x03\f\x03\f\x05\f\u0133\n\f\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0141\n\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\u0171\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01AB\n\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u01B4\n\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x07\x10\u01C2\n\x10\f\x10\x0E\x10\u01C5\v\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01CE\n\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u01E7\n\x16\x03\x16\x05" +
		"\x16\u01EA\n\x16\x03\x17\x03\x17\x06\x17\u01EE\n\x17\r\x17\x0E\x17\u01EF" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x06\x18\u01F7\n\x18\r\x18\x0E" +
		"\x18\u01F8\x03\x18\x05\x18\u01FC\n\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x05\x18\u0203\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x05\x1A\u020B\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1C\x07\x1C\u0214\n\x1C\f\x1C\x0E\x1C\u0217\v\x1C\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0227\n\x1F\f\x1F\x0E\x1F\u022A\v\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0230\n\x1F\x05\x1F\u0232\n\x1F" +
		"\x03 \x03 \x03 \x03 \x07 \u0238\n \f \x0E \u023B\v \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x07 \u0245\n \f \x0E \u0248\v \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x07 \u0252\n \f \x0E \u0255\v \x03 \x03 \x03 \x03" +
		" \x03 \x07 \u025C\n \f \x0E \u025F\v \x03 \x03 \x03 \x03 \x03 \x07 \u0266" +
		"\n \f \x0E \u0269\v \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0272\n " +
		"\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x07\"\u027A\n\"\f\"\x0E\"\u027D\v\"" +
		"\x03\"\x03\"\x03\"\x03\"\x05\"\u0283\n\"\x03#\x03#\x03#\x03#\x03$\x03" +
		"$\x03$\x03$\x07$\u028D\n$\f$\x0E$\u0290\v$\x03$\x03$\x03$\x03$\x05$\u0296" +
		"\n$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u02A3" +
		"\n%\x03&\x03&\x03&\x03&\x07&\u02A9\n&\f&\x0E&\u02AC\v&\x03&\x03&\x03\'" +
		"\x03\'\x03\'\x03\'\x07\'\u02B4\n\'\f\'\x0E\'\u02B7\v\'\x03\'\x03\'\x03" +
		"(\x03(\x03(\x03(\x07(\u02BF\n(\f(\x0E(\u02C2\v(\x03(\x03(\x03)\x03)\x03" +
		"*\x03*\x03*\x03*\x07*\u02CC\n*\f*\x0E*\u02CF\v*\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x07*\u02D9\n*\f*\x0E*\u02DC\v*\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x05*\u02E7\n*\x03+\x03+\x03,\x03,\x03,\x03,\x07" +
		",\u02EF\n,\f,\x0E,\u02F2\v,\x03,\x03,\x03,\x03,\x05,\u02F8\n,\x03-\x03" +
		"-\x03-\x03-\x03.\x03.\x03.\x03.\x07.\u0302\n.\f.\x0E.\u0305\v.\x03.\x03" +
		".\x03.\x03.\x05.\u030B\n.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0314" +
		"\n/\x03/\x04\u01EF\u01F8\x02\x04\x06\x1E0\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02\x02\f\x03\x02\x0E\x0F\x03\x02\x12\x13" +
		"\x03\x02\x1A\x1B\x03\x02\x1C\x1D\x03\x02*,\x04\x02\f\f/0\x03\x0212\x04" +
		"\x02LLWW\x03\x02NO\x03\x02UV\x02\u0384\x02a\x03\x02\x02\x02\x04f\x03\x02" +
		"\x02\x02\x06m\x03\x02\x02\x02\b}\x03\x02\x02\x02\n\x7F\x03\x02\x02\x02" +
		"\f\x81\x03\x02\x02\x02\x0E\xBB\x03\x02\x02\x02\x10\xDD\x03\x02\x02\x02" +
		"\x12\xEF\x03\x02\x02\x02\x14\u0128\x03\x02\x02\x02\x16\u0132\x03\x02\x02" +
		"\x02\x18\u0140\x03\x02\x02\x02\x1A\u0170\x03\x02\x02\x02\x1C\u01AA\x03" +
		"\x02\x02\x02\x1E\u01B3\x03\x02\x02\x02 \u01CD\x03\x02\x02\x02\"\u01CF" +
		"\x03\x02\x02\x02$\u01D5\x03\x02\x02\x02&\u01DA\x03\x02\x02\x02(\u01E2" +
		"\x03\x02\x02\x02*\u01E4\x03\x02\x02\x02,\u01EB\x03\x02\x02\x02.\u0202" +
		"\x03\x02\x02\x020\u0204\x03\x02\x02\x022\u020A\x03\x02\x02\x024\u020E" +
		"\x03\x02\x02\x026\u0210\x03\x02\x02\x028\u0218\x03\x02\x02\x02:\u021A" +
		"\x03\x02\x02\x02<\u0231\x03\x02\x02\x02>\u0271\x03\x02\x02\x02@\u0273" +
		"\x03\x02\x02\x02B\u0282\x03\x02\x02\x02D\u0284\x03\x02\x02\x02F\u0295" +
		"\x03\x02\x02\x02H\u02A2\x03\x02\x02\x02J\u02A4\x03\x02\x02\x02L\u02AF" +
		"\x03\x02\x02\x02N\u02BA\x03\x02\x02\x02P\u02C5\x03\x02\x02\x02R\u02E6" +
		"\x03\x02\x02\x02T\u02E8\x03\x02\x02\x02V\u02F7\x03\x02\x02\x02X\u02F9" +
		"\x03\x02\x02\x02Z\u030A\x03\x02\x02\x02\\\u0313\x03\x02\x02\x02^`\x05" +
		"\f\x07\x02_^\x03\x02\x02\x02`c\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03" +
		"\x02\x02\x02b\x03\x03\x02\x02\x02ca\x03\x02\x02\x02dg\x05\x06\x04\x02" +
		"eg\x05\b\x05\x02fd\x03\x02\x02\x02fe\x03\x02\x02\x02g\x05\x03\x02\x02" +
		"\x02hi\b\x04\x01\x02in\x05\x0E\b\x02jn\x05\x1A\x0E\x02kn\x05\x1C\x0F\x02" +
		"ln\x05\n\x06\x02mh\x03\x02\x02\x02mj\x03\x02\x02\x02mk\x03\x02\x02\x02" +
		"ml\x03\x02\x02\x02nw\x03\x02\x02\x02oq\f\x04\x02\x02pr\x05\x10\t\x02q" +
		"p\x03\x02\x02\x02rs\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02" +
		"tv\x03\x02\x02\x02uo\x03\x02\x02\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02" +
		"wx\x03\x02\x02\x02x\x07\x03\x02\x02\x02yw\x03\x02\x02\x02z~\x05\f\x07" +
		"\x02{|\x07\x03\x02\x02|~\x05\f\x07\x02}z\x03\x02\x02\x02}{\x03\x02\x02" +
		"\x02~\t\x03\x02\x02\x02\x7F\x80\x07J\x02\x02\x80\v\x03\x02\x02\x02\x81" +
		"\x82\x07\x04\x02\x02\x82\x8C\x050\x19\x02\x83\x84\x07\x05\x02\x02\x84" +
		"\x89\x050\x19\x02\x85\x86\x07\x06\x02\x02\x86\x88\x050\x19\x02\x87\x85" +
		"\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A" +
		"\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x83" +
		"\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x92" +
		"\x07\x07\x02\x02\x8F\x91\x05\x04\x03\x02\x90\x8F\x03\x02\x02\x02\x91\x94" +
		"\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95" +
		"\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x96\x07\b\x02\x02\x96\r\x03" +
		"\x02\x02\x02\x97\x99\x07\t\x02\x02\x98\x97\x03\x02\x02\x02\x98\x99\x03" +
		"\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9E\x07\x07\x02\x02\x9B\x9D\x05" +
		"\x14\v\x02\x9C\x9B\x03\x02\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9C\x03" +
		"\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\x9E\x03" +
		"\x02\x02\x02\xA1\xA5\x07\b\x02\x02\xA2\xA4\x05\x10\t\x02\xA3\xA2\x03\x02" +
		"\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02" +
		"\x02\x02\xA6\xAA\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xAB\x05\x12" +
		"\n\x02\xA9\xAB\x05\x10\t\x02\xAA\xA8\x03\x02\x02\x02\xAA\xA9\x03\x02\x02" +
		"\x02\xAB\xAF\x03\x02\x02\x02\xAC\xAE\x05\x10\t\x02\xAD\xAC\x03\x02\x02" +
		"\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02" +
		"\x02\xB0\xBC\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB3\x07\t\x02" +
		"\x02\xB3\xB5\x07\x07\x02\x02\xB4\xB6\x05\x14\v\x02\xB5\xB4\x03\x02\x02" +
		"\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02" +
		"\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA\x07\b\x02\x02\xBA\xBC\x03\x02\x02" +
		"\x02\xBB\x98\x03\x02\x02\x02\xBB\xB2\x03\x02\x02\x02\xBC\x0F\x03\x02\x02" +
		"\x02\xBD\xBE\x07\n\x02\x02\xBE\xDE\x05 \x11\x02\xBF\xC0\x07\v\x02\x02" +
		"\xC0\xDE\x05 \x11\x02\xC1\xC2\x07\n\x02\x02\xC2\xC6\x05\x18\r\x02\xC3" +
		"\xC4\x07N\x02\x02\xC4\xC5\x07\f\x02\x02\xC5\xC7\x07W\x02\x02\xC6\xC3\x03" +
		"\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xDE\x03\x02\x02\x02\xC8\xC9\x07" +
		"\v\x02\x02\xC9\xCD\x05\x18\r\x02\xCA\xCB\x07N\x02\x02\xCB\xCC\x07\f\x02" +
		"\x02\xCC\xCE\x07W\x02\x02\xCD\xCA\x03\x02\x02\x02\xCD\xCE\x03\x02\x02" +
		"\x02\xCE\xDE\x03\x02\x02\x02\xCF\xD1\x07\n\x02\x02\xD0\xD2\x07\r\x02\x02" +
		"\xD1\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02" +
		"\xD3\xD4\x050\x19\x02\xD4\xD5\t\x02\x02\x02\xD5\xDE\x03\x02\x02\x02\xD6" +
		"\xD8\x07\v\x02\x02\xD7\xD9\x07\r\x02\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9" +
		"\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDB\x050\x19\x02\xDB\xDC" +
		"\t\x02\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD\xBD\x03\x02\x02\x02\xDD\xBF" +
		"\x03\x02\x02\x02\xDD\xC1\x03\x02\x02\x02\xDD\xC8\x03\x02\x02\x02\xDD\xCF" +
		"\x03\x02\x02\x02\xDD\xD6\x03\x02\x02\x02\xDE\x11\x03\x02\x02\x02\xDF\xE0" +
		"\x07\x03\x02\x02\xE0\xF0\x05\x06\x04\x02\xE1\xE2\x07\x03\x02\x02\xE2\xF0" +
		"\x05\f\x07\x02\xE3\xE5\x07\x03\x02\x02\xE4\xE6\x07\x04\x02\x02\xE5\xE4" +
		"\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xEB" +
		"\x07\x07\x02\x02\xE8\xEA\x05\x04\x03\x02\xE9\xE8\x03\x02\x02\x02\xEA\xED" +
		"\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE" +
		"\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xEE\xF0\x07\b\x02\x02\xEF\xDF" +
		"\x03\x02\x02\x02\xEF\xE1\x03\x02\x02\x02\xEF\xE3\x03\x02\x02\x02\xF0\x13" +
		"\x03\x02\x02\x02\xF1\xF2\x07\x10\x02\x02\xF2\u0129\x07N\x02\x02\xF3\xF4" +
		"\x07\x11\x02\x02\xF4\u0129\t\x03\x02\x02\xF5\xF6\x07\x14\x02\x02\xF6\u0129" +
		"\x050\x19\x02\xF7\xF8\x07\x15\x02\x02\xF8\u0129\x05.\x18\x02\xF9\xFA\x07" +
		"\x16\x02\x02\xFA\u0129\x05.\x18\x02\xFB\xFC\x07\x17\x02\x02\xFC\u0129" +
		"\x05\"\x12\x02\xFD\xFE\x07\x17\x02\x02\xFE\xFF\x05.\x18\x02\xFF\u0100" +
		"\t\x03\x02\x02\u0100\u0129\x03\x02\x02\x02\u0101\u0102\x07\x18\x02\x02" +
		"\u0102\u0129\x05\"\x12\x02\u0103\u0104\x07\x18\x02\x02\u0104\u0129\x05" +
		".\x18\x02\u0105\u0106\x07\x19\x02\x02\u0106\u0129\x05$\x13\x02\u0107\u0108" +
		"\x07\x19\x02\x02\u0108\u0129\x05.\x18\x02\u0109\u010A\t\x04\x02\x02\u010A" +
		"\u0129\x05.\x18\x02\u010B\u010C\t\x04\x02\x02\u010C\u010D\x05 \x11\x02" +
		"\u010D\u010E\x07K\x02\x02\u010E\u010F\x05 \x11\x02\u010F\u0129\x03\x02" +
		"\x02\x02\u0110\u0111\t\x04\x02\x02\u0111\u0112\x05 \x11\x02\u0112\u0113" +
		"\x05\x16\f\x02\u0113\u0129\x03\x02\x02\x02\u0114\u0115\t\x04\x02\x02\u0115" +
		"\u0129\x050\x19\x02\u0116\u0117\t\x04\x02\x02\u0117\u0118\x05\"\x12\x02" +
		"\u0118\u0119\x05*\x16\x02\u0119\u0129\x03\x02\x02\x02\u011A\u011B\t\x04" +
		"\x02\x02\u011B\u011C\x05\"\x12\x02\u011C\u011D\x05\"\x12\x02\u011D\u011E" +
		"\x05\"\x12\x02\u011E\u011F\t\x05\x02\x02\u011F\u0129\x03\x02\x02\x02\u0120" +
		"\u0121\t\x04\x02\x02\u0121\u0129\x05\x18\r\x02\u0122\u0123\t\x04\x02\x02" +
		"\u0123\u0124\x07\x1E\x02\x02\u0124\u0125\x05\"\x12\x02\u0125\u0126\x05" +
		"0\x19\x02\u0126\u0129\x03\x02\x02\x02\u0127\u0129\x05\x10\t\x02\u0128" +
		"\xF1\x03\x02\x02\x02\u0128\xF3\x03\x02\x02\x02\u0128\xF5\x03\x02\x02\x02" +
		"\u0128\xF7\x03\x02\x02\x02\u0128\xF9\x03\x02\x02\x02\u0128\xFB\x03\x02" +
		"\x02\x02\u0128\xFD\x03\x02\x02\x02\u0128\u0101\x03\x02\x02\x02\u0128\u0103" +
		"\x03\x02\x02\x02\u0128\u0105\x03\x02\x02\x02\u0128\u0107\x03\x02\x02\x02" +
		"\u0128\u0109\x03\x02\x02\x02\u0128\u010B\x03\x02\x02\x02\u0128\u0110\x03" +
		"\x02\x02\x02\u0128\u0114\x03\x02\x02\x02\u0128\u0116\x03\x02\x02\x02\u0128" +
		"\u011A\x03\x02\x02\x02\u0128\u0120\x03\x02\x02\x02\u0128\u0122\x03\x02" +
		"\x02\x02\u0128\u0127\x03\x02\x02\x02\u0129\x15\x03\x02\x02\x02\u012A\u012B" +
		"\x07W\x02\x02\u012B\u012D\x07\x1F\x02\x02\u012C\u012E\x07W\x02\x02\u012D" +
		"\u012C\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0133\x03\x02" +
		"\x02\x02\u012F\u0130\x07\x1F\x02\x02\u0130\u0133\x07W\x02\x02\u0131\u0133" +
		"\x07W\x02\x02\u0132\u012A\x03\x02\x02\x02\u0132\u012F\x03\x02\x02\x02" +
		"\u0132\u0131\x03\x02\x02\x02\u0133\x17\x03\x02\x02\x02\u0134\u0135\x05" +
		"0\x19\x02\u0135\u0136\x07 \x02\x02\u0136\u0137\x05<\x1F\x02\u0137\u0141" +
		"\x03\x02\x02\x02\u0138\u0139\x05.\x18\x02\u0139\u013A\x07 \x02\x02\u013A" +
		"\u013B\x05<\x1F\x02\u013B\u0141\x03\x02\x02\x02\u013C\u013D\x05\"\x12" +
		"\x02\u013D\u013E\x07 \x02\x02\u013E\u013F\x05<\x1F\x02\u013F\u0141\x03" +
		"\x02\x02\x02\u0140\u0134\x03\x02\x02\x02\u0140\u0138\x03\x02\x02\x02\u0140" +
		"\u013C\x03\x02\x02\x02\u0141\x19\x03\x02\x02\x02\u0142\u0171\x05\x18\r" +
		"\x02\u0143\u0144\x05\x18\r\x02\u0144\u0145\x07!\x02\x02\u0145\u0146\x05" +
		"8\x1D\x02\u0146\u0171\x03\x02\x02\x02\u0147\u0148\x05\x18\r\x02\u0148" +
		"\u0149\x07!\x02\x02\u0149\u014A\x05\x18\r\x02\u014A\u0171\x03\x02\x02" +
		"\x02\u014B\u014C\x05\x18\r\x02\u014C\u014D\x07\"\x02\x02\u014D\u014E\x05" +
		"8\x1D\x02\u014E\u0171\x03\x02\x02\x02\u014F\u0150\x05\x18\r\x02\u0150" +
		"\u0151\x07\"\x02\x02\u0151\u0152\x05\x18\r\x02\u0152\u0171\x03\x02\x02" +
		"\x02\u0153\u0154\x05\x18\r\x02\u0154\u0155\x07\x1F\x02\x02\u0155\u0156" +
		"\x058\x1D\x02\u0156\u0171\x03\x02\x02\x02\u0157\u0158\x05\x18\r\x02\u0158" +
		"\u0159\x07\x1F\x02\x02\u0159\u015A\x05\x18\r\x02\u015A\u0171\x03\x02\x02" +
		"\x02\u015B\u015C\x05\x18\r\x02\u015C\u015D\x07#\x02\x02\u015D\u015E\x05" +
		"8\x1D\x02\u015E\u0171\x03\x02\x02\x02\u015F\u0160\x05\x18\r\x02\u0160" +
		"\u0161\x07#\x02\x02\u0161\u0162\x05\x18\r\x02\u0162\u0171\x03\x02\x02" +
		"\x02\u0163\u0164\x05\x18\r\x02\u0164\u0165\x07\x1F\x02\x02\u0165\u0166" +
		"\x07W\x02\x02\u0166\u0167\x058\x1D\x02\u0167\u0171\x03\x02\x02\x02\u0168" +
		"\u0169\x05\x18\r\x02\u0169\u016A\x07\x1F\x02\x02\u016A\u016B\x07W\x02" +
		"\x02\u016B\u016C\x05\x18\r\x02\u016C\u0171\x03\x02\x02\x02\u016D\u016E" +
		"\x05\x18\r\x02\u016E\u016F\x07$\x02\x02\u016F\u0171\x03\x02\x02\x02\u0170" +
		"\u0142\x03\x02\x02\x02\u0170\u0143\x03\x02\x02\x02\u0170\u0147\x03\x02" +
		"\x02\x02\u0170\u014B\x03\x02\x02\x02\u0170\u014F\x03\x02\x02\x02\u0170" +
		"\u0153\x03\x02\x02\x02\u0170\u0157\x03\x02\x02\x02\u0170\u015B\x03\x02" +
		"\x02\x02\u0170\u015F\x03\x02\x02\x02\u0170\u0163\x03\x02\x02\x02\u0170" +
		"\u0168\x03\x02\x02\x02\u0170\u016D\x03\x02\x02\x02\u0171\x1B\x03\x02\x02" +
		"\x02\u0172\u01AB\x05 \x11\x02\u0173\u0174\x05 \x11\x02\u0174\u0175\x07" +
		"%\x02\x02\u0175\u0176\x07W\x02\x02\u0176\u01AB\x03\x02\x02\x02\u0177\u0178" +
		"\x05 \x11\x02\u0178\u0179\x07&\x02\x02\u0179\u017A\x07W\x02\x02\u017A" +
		"\u01AB\x03\x02\x02\x02\u017B\u017C\x05 \x11\x02\u017C\u017D\x07\"\x02" +
		"\x02\u017D\u017E\x07W\x02\x02\u017E\u01AB\x03\x02\x02\x02\u017F\u0180" +
		"\x05 \x11\x02\u0180\u0181\x07%\x02\x02\u0181\u0182\x05 \x11\x02\u0182" +
		"\u01AB\x03\x02\x02\x02\u0183\u0184\x05 \x11\x02\u0184\u0185\x07&\x02\x02" +
		"\u0185\u0186\x05 \x11\x02\u0186\u01AB\x03\x02\x02\x02\u0187\u0188\x05" +
		" \x11\x02\u0188\u0189\x07\'\x02\x02\u0189\u018A\x05 \x11\x02\u018A\u01AB" +
		"\x03\x02\x02\x02\u018B\u018C\x05 \x11\x02\u018C\u018D\x07(\x02\x02\u018D" +
		"\u018E\x05 \x11\x02\u018E\u01AB\x03\x02\x02\x02\u018F\u0190\x05 \x11\x02" +
		"\u0190\u0191\x07)\x02\x02\u0191\u0192\x05 \x11\x02\u0192\u01AB\x03\x02" +
		"\x02\x02\u0193\u0194\x05 \x11\x02\u0194\u0195\x07*\x02\x02\u0195\u0196" +
		"\x05 \x11\x02\u0196\u01AB\x03\x02\x02\x02\u0197\u0198\x05 \x11\x02\u0198" +
		"\u0199\x07+\x02\x02\u0199\u019A\x05 \x11\x02\u019A\u01AB\x03\x02\x02\x02" +
		"\u019B\u019C\x05 \x11\x02\u019C\u019D\x07,\x02\x02\u019D\u019E\x05 \x11" +
		"\x02\u019E\u01AB\x03\x02\x02\x02\u019F\u01A0\x05 \x11\x02\u01A0\u01A1" +
		"\x07\"\x02\x02\u01A1\u01A2\x05 \x11\x02\u01A2\u01AB\x03\x02\x02\x02\u01A3" +
		"\u01A4\x05 \x11\x02\u01A4\u01A5\x07-\x02\x02\u01A5\u01AB\x03\x02\x02\x02" +
		"\u01A6\u01A7\x05 \x11\x02\u01A7\u01A8\x07.\x02\x02\u01A8\u01A9\x05\x1E" +
		"\x10\x02\u01A9\u01AB\x03\x02\x02\x02\u01AA\u0172\x03\x02\x02\x02\u01AA" +
		"\u0173\x03\x02\x02\x02\u01AA\u0177\x03\x02\x02\x02\u01AA\u017B\x03\x02" +
		"\x02\x02\u01AA\u017F\x03\x02\x02\x02\u01AA\u0183\x03\x02\x02\x02\u01AA" +
		"\u0187\x03\x02\x02\x02\u01AA\u018B\x03\x02\x02\x02\u01AA\u018F\x03\x02" +
		"\x02\x02\u01AA\u0193\x03\x02\x02\x02\u01AA\u0197\x03\x02\x02\x02\u01AA" +
		"\u019B\x03\x02\x02\x02\u01AA\u019F\x03\x02\x02\x02\u01AA\u01A3\x03\x02" +
		"\x02\x02\u01AA\u01A6\x03\x02\x02\x02\u01AB\x1D\x03\x02\x02\x02\u01AC\u01AD" +
		"\b\x10\x01\x02\u01AD\u01B4\x07W\x02\x02\u01AE\u01B4\x05 \x11\x02\u01AF" +
		"\u01B0\x073\x02\x02\u01B0\u01B1\x05\x1E\x10\x02\u01B1\u01B2\x074\x02\x02" +
		"\u01B2\u01B4\x03\x02\x02\x02\u01B3\u01AC\x03\x02\x02\x02\u01B3\u01AE\x03" +
		"\x02\x02\x02\u01B3\u01AF\x03\x02\x02\x02\u01B4\u01C3\x03\x02\x02\x02\u01B5" +
		"\u01B6\f\t\x02\x02\u01B6\u01B7\t\x06\x02\x02\u01B7\u01C2\x05\x1E\x10\n" +
		"\u01B8\u01B9\f\b\x02\x02\u01B9\u01BA\t\x07\x02\x02\u01BA\u01C2\x05\x1E" +
		"\x10\t\u01BB\u01BC\f\x07\x02\x02\u01BC\u01BD\t\b\x02\x02\u01BD\u01C2\x05" +
		"\x1E\x10\b\u01BE\u01BF\f\x06\x02\x02\u01BF\u01C0\x07\"\x02\x02\u01C0\u01C2" +
		"\x05\x1E\x10\x07\u01C1\u01B5\x03\x02\x02\x02\u01C1\u01B8\x03\x02\x02\x02" +
		"\u01C1\u01BB\x03\x02\x02\x02\u01C1\u01BE\x03\x02\x02\x02\u01C2\u01C5\x03" +
		"\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4" +
		"\x1F\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C6\u01C7\x054\x1B" +
		"\x02\u01C7\u01C8\x05.\x18\x02\u01C8\u01CE\x03\x02\x02\x02\u01C9\u01CA" +
		"\x05.\x18\x02\u01CA\u01CB\x075\x02\x02\u01CB\u01CC\x054\x1B\x02\u01CC" +
		"\u01CE\x03\x02\x02\x02\u01CD\u01C6\x03\x02\x02\x02\u01CD\u01C9\x03\x02" +
		"\x02\x02\u01CE!\x03\x02\x02\x02\u01CF\u01D0\x076\x02\x02\u01D0\u01D1\x05" +
		"(\x15\x02\u01D1\u01D2\x05(\x15\x02\u01D2\u01D3\x05(\x15\x02\u01D3\u01D4" +
		"\x077\x02\x02\u01D4#\x03\x02\x02\x02\u01D5\u01D6\x076\x02\x02\u01D6\u01D7" +
		"\x05(\x15\x02\u01D7\u01D8\x05(\x15\x02\u01D8\u01D9\x077\x02\x02\u01D9" +
		"%\x03\x02\x02\x02\u01DA\u01DB\x076\x02\x02\u01DB\u01DC\x05(\x15\x02\u01DC" +
		"\u01DD\x05(\x15\x02\u01DD\u01DE\x05(\x15\x02\u01DE\u01DF\x05(\x15\x02" +
		"\u01DF\u01E0\x05(\x15\x02\u01E0\u01E1\x077\x02\x02\u01E1\'\x03\x02\x02" +
		"\x02\u01E2\u01E3\t\t\x02\x02\u01E3)\x03\x02\x02\x02\u01E4\u01E6\x052\x1A" +
		"\x02\u01E5\u01E7\x05,\x17\x02\u01E6\u01E5\x03\x02\x02\x02\u01E6\u01E7" +
		"\x03\x02\x02\x02\u01E7\u01E9\x03\x02\x02\x02\u01E8";
	private static readonly _serializedATNSegment1: string =
		"\u01EA\x058\x1D\x02\u01E9\u01E8\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02" +
		"\x02\u01EA+\x03\x02\x02\x02\u01EB\u01ED\x078\x02\x02\u01EC\u01EE\v\x02" +
		"\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF" +
		"\u01F0\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01F0\u01F1\x03\x02" +
		"\x02\x02\u01F1\u01F2\x079\x02\x02\u01F2-\x03\x02\x02\x02\u01F3\u01FB\x07" +
		"M\x02\x02\u01F4\u01F6\x078\x02\x02\u01F5\u01F7\v\x02\x02\x02\u01F6\u01F5" +
		"\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02" +
		"\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FC\x07" +
		"9\x02\x02\u01FB\u01F4\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC" +
		"\u0203\x03\x02\x02\x02\u01FD\u01FE\x07:\x02\x02\u01FE\u0203\x054\x1B\x02" +
		"\u01FF\u0200\x07;\x02\x02\u0200\u0203\x054\x1B\x02\u0201\u0203\x07;\x02" +
		"\x02\u0202\u01F3\x03\x02\x02\x02\u0202\u01FD\x03\x02\x02\x02\u0202\u01FF" +
		"\x03\x02\x02\x02\u0202\u0201\x03\x02\x02\x02\u0203/\x03\x02\x02\x02\u0204" +
		"\u0205\x07N\x02\x02\u0205\u0206\x075\x02\x02\u0206\u0207\x056\x1C\x02" +
		"\u02071\x03\x02\x02\x02\u0208\u0209\x07N\x02\x02\u0209\u020B\x075\x02" +
		"\x02\u020A\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020C" +
		"\x03\x02\x02\x02\u020C\u020D\x07N\x02\x02\u020D3\x03\x02\x02\x02\u020E" +
		"\u020F\t\n\x02\x02\u020F5\x03\x02\x02\x02\u0210\u0215\x07N\x02\x02\u0211" +
		"\u0212\x07/\x02\x02\u0212\u0214\x07N\x02\x02\u0213\u0211\x03\x02\x02\x02" +
		"\u0214\u0217\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0216\x03" +
		"\x02\x02\x02\u02167\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0218" +
		"\u0219\x05> \x02\u02199\x03\x02\x02\x02\u021A\u021B\x05R*\x02\u021B;\x03" +
		"\x02\x02\x02\u021C\u0232\x054\x1B\x02\u021D\u0232\x05B\"\x02\u021E\u021F" +
		"\x054\x1B\x02\u021F\u0220\x05B\"\x02\u0220\u0232\x03\x02\x02\x02\u0221" +
		"\u0228\x054\x1B\x02\u0222\u0223\x078\x02\x02\u0223\u0224\x07W\x02\x02" +
		"\u0224\u0227\x079\x02\x02\u0225\u0227\x07<\x02\x02\u0226\u0222\x03\x02" +
		"\x02\x02\u0226\u0225\x03\x02\x02\x02\u0227\u022A\x03\x02\x02\x02\u0228" +
		"\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022F\x03\x02" +
		"\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B\u022C\x078\x02\x02\u022C\u022D" +
		"\x05B\"\x02\u022D\u022E\x079\x02\x02\u022E\u0230\x03\x02\x02\x02\u022F" +
		"\u022B\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0232\x03\x02" +
		"\x02\x02\u0231\u021C\x03\x02\x02\x02\u0231\u021D\x03\x02\x02\x02\u0231" +
		"\u021E\x03\x02\x02\x02\u0231\u0221\x03\x02\x02\x02\u0232=\x03\x02\x02" +
		"\x02\u0233\u0234\x07=\x02\x02\u0234\u0239\x05D#\x02\u0235\u0236\x07\x06" +
		"\x02\x02\u0236\u0238\x05D#\x02\u0237\u0235\x03\x02\x02\x02\u0238\u023B" +
		"\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02" +
		"\u023A\u023C\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023C\u023D\x07" +
		"\b\x02\x02\u023D\u0272\x03\x02\x02\x02\u023E\u023F\x07=\x02\x02\u023F" +
		"\u0272\x07\b\x02\x02\u0240\u0241\x07>\x02\x02\u0241\u0246\x05H%\x02\u0242" +
		"\u0243\x07\x06\x02\x02\u0243\u0245\x05H%\x02\u0244\u0242\x03\x02\x02\x02" +
		"\u0245\u0248\x03\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0246\u0247\x03" +
		"\x02\x02\x02\u0247\u0249\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0249" +
		"\u024A\x079\x02\x02\u024A\u0272\x03\x02\x02\x02\u024B\u024C\x07>\x02\x02" +
		"\u024C\u0272\x079\x02\x02\u024D\u024E\x07?\x02\x02\u024E\u0253\x07P\x02" +
		"\x02\u024F\u0250\x07\x06\x02\x02\u0250\u0252\x07P\x02\x02\u0251\u024F" +
		"\x03\x02\x02\x02\u0252\u0255\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02" +
		"\u0253\u0254\x03\x02\x02\x02\u0254\u0256\x03\x02\x02\x02\u0255\u0253\x03" +
		"\x02\x02\x02\u0256\u0272\x079\x02\x02\u0257\u0258\x07@\x02\x02\u0258\u025D" +
		"\x07W\x02\x02\u0259\u025A\x07\x06\x02\x02\u025A\u025C\x07W\x02\x02\u025B" +
		"\u0259\x03\x02\x02\x02\u025C\u025F\x03\x02\x02\x02\u025D\u025B\x03\x02" +
		"\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u0260\x03\x02\x02\x02\u025F" +
		"\u025D\x03\x02\x02\x02\u0260\u0272\x079\x02\x02\u0261\u0262\x07A\x02\x02" +
		"\u0262\u0267\x07R\x02\x02\u0263\u0264\x07\x06\x02\x02\u0264\u0266\x07" +
		"R\x02\x02\u0265\u0263\x03\x02\x02\x02\u0266\u0269\x03\x02\x02\x02\u0267" +
		"\u0265\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u026A\x03\x02" +
		"\x02\x02\u0269\u0267\x03\x02\x02\x02\u026A\u0272\x079\x02\x02\u026B\u0272" +
		"\x05P)\x02\u026C\u0272\x07P\x02\x02\u026D\u0272\x07Q\x02\x02\u026E\u0272" +
		"\x07R\x02\x02\u026F\u0272\x07S\x02\x02\u0270\u0272\x07T\x02\x02\u0271" +
		"\u0233\x03\x02\x02\x02\u0271\u023E\x03\x02\x02\x02\u0271\u0240\x03\x02" +
		"\x02\x02\u0271\u024B\x03\x02\x02\x02\u0271\u024D\x03\x02\x02\x02\u0271" +
		"\u0257\x03\x02\x02\x02\u0271\u0261\x03\x02\x02\x02\u0271\u026B\x03\x02" +
		"\x02\x02\u0271\u026C\x03\x02\x02\x02\u0271\u026D\x03\x02\x02\x02\u0271" +
		"\u026E\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0271\u0270\x03\x02" +
		"\x02\x02\u0272?\x03\x02\x02\x02\u0273\u0274\x05H%\x02\u0274A\x03\x02\x02" +
		"\x02\u0275\u0276\x07\x07\x02\x02\u0276\u027B\x05D#\x02\u0277\u0278\x07" +
		"\x06\x02\x02\u0278\u027A\x05D#\x02\u0279\u0277\x03\x02\x02\x02\u027A\u027D" +
		"\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02" +
		"\u027C\u027E\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02\u027E\u027F\x07" +
		"\b\x02\x02\u027F\u0283\x03\x02\x02\x02\u0280\u0281\x07\x07\x02\x02\u0281" +
		"\u0283\x07\b\x02\x02\u0282\u0275\x03\x02\x02\x02\u0282\u0280\x03\x02\x02" +
		"\x02\u0283C\x03\x02\x02\x02\u0284\u0285\x054\x1B\x02\u0285\u0286\x075" +
		"\x02\x02\u0286\u0287\x05H%\x02\u0287E\x03\x02\x02\x02\u0288\u0289\x07" +
		"8\x02\x02\u0289\u028E\x05H%\x02\u028A\u028B\x07\x06\x02\x02\u028B\u028D" +
		"\x05H%\x02\u028C\u028A\x03\x02\x02\x02\u028D\u0290\x03\x02\x02\x02\u028E" +
		"\u028C\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0291\x03\x02" +
		"\x02\x02\u0290\u028E\x03\x02\x02\x02\u0291\u0292\x079\x02\x02\u0292\u0296" +
		"\x03\x02\x02\x02\u0293\u0294\x078\x02\x02\u0294\u0296\x079\x02\x02\u0295" +
		"\u0288\x03\x02\x02\x02\u0295\u0293\x03\x02\x02\x02\u0296G\x03\x02\x02" +
		"\x02\u0297\u02A3\x05B\"\x02\u0298\u02A3\x05F$\x02\u0299\u02A3\x05J&\x02" +
		"\u029A\u02A3\x05L\'\x02\u029B\u02A3\x05N(\x02\u029C\u02A3\x05P)\x02\u029D" +
		"\u02A3\x07P\x02\x02\u029E\u02A3\x07Q\x02\x02\u029F\u02A3\x07R\x02\x02" +
		"\u02A0\u02A3\x07S\x02\x02\u02A1\u02A3\x07T\x02\x02\u02A2\u0297\x03\x02" +
		"\x02\x02\u02A2\u0298\x03\x02\x02\x02\u02A2\u0299\x03\x02\x02\x02\u02A2" +
		"\u029A\x03\x02\x02\x02\u02A2\u029B\x03\x02\x02\x02\u02A2\u029C\x03\x02" +
		"\x02\x02\u02A2\u029D\x03\x02\x02\x02\u02A2\u029E\x03\x02\x02\x02\u02A2" +
		"\u029F\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A2\u02A1\x03\x02" +
		"\x02\x02\u02A3I\x03\x02\x02\x02\u02A4\u02A5\x07B\x02\x02\u02A5\u02AA\x07" +
		"P\x02\x02\u02A6\u02A7\x07\x06\x02\x02\u02A7\u02A9\x07P\x02\x02\u02A8\u02A6" +
		"\x03\x02\x02\x02\u02A9\u02AC\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02" +
		"\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AD\x03\x02\x02\x02\u02AC\u02AA\x03" +
		"\x02\x02\x02\u02AD\u02AE\x079\x02\x02\u02AEK\x03\x02\x02\x02\u02AF\u02B0" +
		"\x07C\x02\x02\u02B0\u02B5\x07W\x02\x02\u02B1\u02B2\x07\x06\x02\x02\u02B2" +
		"\u02B4\x07W\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B4\u02B7\x03\x02\x02" +
		"\x02\u02B5\u02B3\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B8" +
		"\x03\x02\x02\x02\u02B7\u02B5\x03\x02\x02\x02\u02B8\u02B9\x079\x02\x02" +
		"\u02B9M\x03\x02\x02\x02\u02BA\u02BB\x07D\x02\x02\u02BB\u02C0\x07R\x02" +
		"\x02\u02BC\u02BD\x07\x06\x02\x02\u02BD\u02BF\x07R\x02\x02\u02BE\u02BC" +
		"\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02" +
		"\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C3\x03\x02\x02\x02\u02C2\u02C0\x03" +
		"\x02\x02\x02\u02C3\u02C4\x079\x02\x02\u02C4O\x03\x02\x02\x02\u02C5\u02C6" +
		"\t\v\x02\x02\u02C6Q\x03\x02\x02\x02\u02C7\u02C8\x07E\x02\x02\u02C8\u02CD" +
		"\x05X-\x02\u02C9\u02CA\x07\x06\x02\x02\u02CA\u02CC\x05X-\x02\u02CB\u02C9" +
		"\x03\x02\x02\x02\u02CC\u02CF\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02" +
		"\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D0\x03\x02\x02\x02\u02CF\u02CD\x03" +
		"\x02\x02\x02\u02D0\u02D1\x07\b\x02\x02\u02D1\u02E7\x03\x02\x02\x02\u02D2" +
		"\u02D3\x07E\x02\x02\u02D3\u02E7\x07\b\x02\x02\u02D4\u02D5\x07F\x02\x02" +
		"\u02D5\u02DA\x05\\/\x02\u02D6\u02D7\x07\x06\x02\x02\u02D7\u02D9\x05\\" +
		"/\x02\u02D8\u02D6\x03\x02\x02\x02\u02D9\u02DC\x03\x02\x02\x02\u02DA\u02D8" +
		"\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DD\x03\x02\x02\x02" +
		"\u02DC\u02DA\x03\x02\x02\x02\u02DD\u02DE\x079\x02\x02\u02DE\u02E7\x03" +
		"\x02\x02\x02\u02DF\u02E0\x078\x02\x02\u02E0\u02E7\x079\x02\x02\u02E1\u02E7" +
		"\x07V\x02\x02\u02E2\u02E7\x07W\x02\x02\u02E3\u02E7\x07G\x02\x02\u02E4" +
		"\u02E7\x07H\x02\x02\u02E5\u02E7\x07I\x02\x02\u02E6\u02C7\x03\x02\x02\x02" +
		"\u02E6\u02D2\x03\x02\x02\x02\u02E6\u02D4\x03\x02\x02\x02\u02E6\u02DF\x03" +
		"\x02\x02\x02\u02E6\u02E1\x03\x02\x02\x02\u02E6\u02E2\x03\x02\x02\x02\u02E6" +
		"\u02E3\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6\u02E5\x03\x02" +
		"\x02\x02\u02E7S\x03\x02\x02\x02\u02E8\u02E9\x05\\/\x02\u02E9U\x03\x02" +
		"\x02\x02\u02EA\u02EB\x07\x07\x02\x02\u02EB\u02F0\x05X-\x02\u02EC\u02ED" +
		"\x07\x06\x02\x02\u02ED\u02EF\x05X-\x02\u02EE\u02EC\x03\x02\x02\x02\u02EF" +
		"\u02F2\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F0\u02F1\x03\x02" +
		"\x02\x02\u02F1\u02F3\x03\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F3" +
		"\u02F4\x07\b\x02\x02\u02F4\u02F8\x03\x02\x02\x02\u02F5\u02F6\x07\x07\x02" +
		"\x02\u02F6\u02F8\x07\b\x02\x02\u02F7\u02EA\x03\x02\x02\x02\u02F7\u02F5" +
		"\x03\x02\x02\x02\u02F8W\x03\x02\x02\x02\u02F9\u02FA\x07V\x02\x02\u02FA" +
		"\u02FB\x075\x02\x02\u02FB\u02FC\x05\\/\x02\u02FCY\x03\x02\x02\x02\u02FD" +
		"\u02FE\x078\x02\x02\u02FE\u0303\x05\\/\x02\u02FF\u0300\x07\x06\x02\x02" +
		"\u0300\u0302\x05\\/\x02\u0301\u02FF\x03\x02\x02\x02\u0302\u0305\x03\x02" +
		"\x02\x02\u0303\u0301\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304" +
		"\u0306\x03\x02\x02\x02\u0305\u0303\x03\x02\x02\x02\u0306\u0307\x079\x02" +
		"\x02\u0307\u030B\x03\x02\x02\x02\u0308\u0309\x078\x02\x02\u0309\u030B" +
		"\x079\x02\x02\u030A\u02FD\x03\x02\x02\x02\u030A\u0308\x03\x02\x02\x02" +
		"\u030B[\x03\x02\x02\x02\u030C\u0314\x07V\x02\x02\u030D\u0314\x07W\x02" +
		"\x02\u030E\u0314\x05V,\x02\u030F\u0314\x05Z.\x02\u0310\u0314\x07G\x02" +
		"\x02\u0311\u0314\x07H\x02\x02\u0312\u0314\x07I\x02\x02\u0313\u030C\x03" +
		"\x02\x02\x02\u0313\u030D\x03\x02\x02\x02\u0313\u030E\x03\x02\x02\x02\u0313" +
		"\u030F\x03\x02\x02\x02\u0313\u0310\x03\x02\x02\x02\u0313\u0311\x03\x02" +
		"\x02\x02\u0313\u0312\x03\x02\x02\x02\u0314]\x03\x02\x02\x02Fafmsw}\x89" +
		"\x8C\x92\x98\x9E\xA5\xAA\xAF\xB7\xBB\xC6\xCD\xD1\xD8\xDD\xE5\xEB\xEF\u0128" +
		"\u012D\u0132\u0140\u0170\u01AA\u01B3\u01C1\u01C3\u01CD\u01E6\u01E9\u01EF" +
		"\u01F8\u01FB\u0202\u020A\u0215\u0226\u0228\u022F\u0231\u0239\u0246\u0253" +
		"\u025D\u0267\u0271\u027B\u0282\u028E\u0295\u02A2\u02AA\u02B5\u02C0\u02CD" +
		"\u02DA\u02E6\u02F0\u02F7\u0303\u030A\u0313";
	public static readonly _serializedATN: string = Utils.join(
		[
			JustMCFParser._serializedATNSegment0,
			JustMCFParser._serializedATNSegment1,
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
	public funcStatement(): FuncStatementContext[];
	public funcStatement(i: number): FuncStatementContext;
	public funcStatement(i?: number): FuncStatementContext | FuncStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FuncStatementContext);
		} else {
			return this.getRuleContext(i, FuncStatementContext);
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


export class StatementAndCommandContext extends ParserRuleContext {
	public command(): CommandContext | undefined {
		return this.tryGetRuleContext(0, CommandContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_statementAndCommand; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterStatementAndCommand) {
			listener.enterStatementAndCommand(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitStatementAndCommand) {
			listener.exitStatementAndCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitStatementAndCommand) {
			return visitor.visitStatementAndCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	public execStatement(): ExecStatementContext | undefined {
		return this.tryGetRuleContext(0, ExecStatementContext);
	}
	public dataOperationExpression(): DataOperationExpressionContext | undefined {
		return this.tryGetRuleContext(0, DataOperationExpressionContext);
	}
	public scbOperationExpression(): ScbOperationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ScbOperationExpressionContext);
	}
	public command(): CommandContext | undefined {
		return this.tryGetRuleContext(0, CommandContext);
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
	public leagalCommand(): LeagalCommandContext | undefined {
		return this.tryGetRuleContext(0, LeagalCommandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_command; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterCommand) {
			listener.enterCommand(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitCommand) {
			listener.exitCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitCommand) {
			return visitor.visitCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public _left!: Token;
	public funcStatement(): FuncStatementContext {
		return this.getRuleContext(0, FuncStatementContext);
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


export class FuncStatementContext extends ParserRuleContext {
	public nameSpace(): NameSpaceContext[];
	public nameSpace(i: number): NameSpaceContext;
	public nameSpace(i?: number): NameSpaceContext | NameSpaceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameSpaceContext);
		} else {
			return this.getRuleContext(i, NameSpaceContext);
		}
	}
	public statementAndCommand(): StatementAndCommandContext[];
	public statementAndCommand(i: number): StatementAndCommandContext;
	public statementAndCommand(i?: number): StatementAndCommandContext | StatementAndCommandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementAndCommandContext);
		} else {
			return this.getRuleContext(i, StatementAndCommandContext);
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
	public AcceptableName(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.AcceptableName, 0); }
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
	public AcceptableName(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.AcceptableName, 0); }
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
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
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
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
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
	public command(): CommandContext {
		return this.getRuleContext(0, CommandContext);
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
	public statementAndCommand(): StatementAndCommandContext[];
	public statementAndCommand(i: number): StatementAndCommandContext;
	public statementAndCommand(i?: number): StatementAndCommandContext | StatementAndCommandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementAndCommandContext);
		} else {
			return this.getRuleContext(i, StatementAndCommandContext);
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
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
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
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
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
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
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
	public nameSpace(): NameSpaceContext {
		return this.getRuleContext(0, NameSpaceContext);
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


export class DataOperationExpressionContext extends ParserRuleContext {
	public dataIdentifier(): DataIdentifierContext[];
	public dataIdentifier(i: number): DataIdentifierContext;
	public dataIdentifier(i?: number): DataIdentifierContext | DataIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataIdentifierContext);
		} else {
			return this.getRuleContext(i, DataIdentifierContext);
		}
	}
	public nbt(): NbtContext | undefined {
		return this.tryGetRuleContext(0, NbtContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_dataOperationExpression; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataOperationExpression) {
			listener.enterDataOperationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataOperationExpression) {
			listener.exitDataOperationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataOperationExpression) {
			return visitor.visitDataOperationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScbOperationExpressionContext extends ParserRuleContext {
	public scbIdentifier(): ScbIdentifierContext[];
	public scbIdentifier(i: number): ScbIdentifierContext;
	public scbIdentifier(i?: number): ScbIdentifierContext | ScbIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbIdentifierContext);
		}
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
	public scbSingleOperationExpression(): ScbSingleOperationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ScbSingleOperationExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_scbOperationExpression; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbOperationExpression) {
			listener.enterScbOperationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbOperationExpression) {
			listener.exitScbOperationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbOperationExpression) {
			return visitor.visitScbOperationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScbSingleOperationExpressionContext extends ParserRuleContext {
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
	public scbIdentifier(): ScbIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ScbIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_scbSingleOperationExpression; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterScbSingleOperationExpression) {
			listener.enterScbSingleOperationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitScbSingleOperationExpression) {
			listener.exitScbSingleOperationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitScbSingleOperationExpression) {
			return visitor.visitScbSingleOperationExpression(this);
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
	public registerName(): RegisterNameContext {
		return this.getRuleContext(0, RegisterNameContext);
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
	public AcceptableName(): TerminalNode { return this.getToken(JustMCFParser.AcceptableName, 0); }
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


export class RegisterNameContext extends ParserRuleContext {
	public AcceptableName(): TerminalNode[];
	public AcceptableName(i: number): TerminalNode;
	public AcceptableName(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.AcceptableName);
		} else {
			return this.getToken(JustMCFParser.AcceptableName, i);
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


export class NbtNameContext extends ParserRuleContext {
	public AcceptableName(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.AcceptableName, 0); }
	public NBTName(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NBTName, 0); }
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
	public AcceptableName(): TerminalNode[];
	public AcceptableName(i: number): TerminalNode;
	public AcceptableName(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JustMCFParser.AcceptableName);
		} else {
			return this.getToken(JustMCFParser.AcceptableName, i);
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


