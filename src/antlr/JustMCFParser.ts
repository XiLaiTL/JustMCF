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
	public static readonly LeagalCommand = 62;
	public static readonly CompareOperation = 63;
	public static readonly Pos1 = 64;
	public static readonly Selector = 65;
	public static readonly AcceptableName = 66;
	public static readonly NBTName = 67;
	public static readonly ByteNumber = 68;
	public static readonly ShortNumber = 69;
	public static readonly LongNumber = 70;
	public static readonly FloatNumber = 71;
	public static readonly DoubleNumber = 72;
	public static readonly STRING2 = 73;
	public static readonly STRING = 74;
	public static readonly NUMBER = 75;
	public static readonly WS = 76;
	public static readonly RULE_mcfFile = 0;
	public static readonly RULE_statementAndCommand = 1;
	public static readonly RULE_command = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_funcStatement = 4;
	public static readonly RULE_execStatement = 5;
	public static readonly RULE_execStoreChild = 6;
	public static readonly RULE_execRunChild = 7;
	public static readonly RULE_execChild = 8;
	public static readonly RULE_matchPart = 9;
	public static readonly RULE_dataIdentifier = 10;
	public static readonly RULE_dataOperationExpression = 11;
	public static readonly RULE_scbOperationExpression = 12;
	public static readonly RULE_scbSingleOperationExpression = 13;
	public static readonly RULE_scbIdentifier = 14;
	public static readonly RULE_pos3Identifier = 15;
	public static readonly RULE_pos2Identifier = 16;
	public static readonly RULE_pos5Identifier = 17;
	public static readonly RULE_pos1 = 18;
	public static readonly RULE_blockIdentifier = 19;
	public static readonly RULE_blockstate = 20;
	public static readonly RULE_selector = 21;
	public static readonly RULE_nameSpace = 22;
	public static readonly RULE_registerName = 23;
	public static readonly RULE_nbtName = 24;
	public static readonly RULE_resourceLocation = 25;
	public static readonly RULE_nbt = 26;
	public static readonly RULE_json = 27;
	public static readonly RULE_nbtPath = 28;
	public static readonly RULE_snbtValue = 29;
	public static readonly RULE_snbt = 30;
	public static readonly RULE_nbtCompound = 31;
	public static readonly RULE_nbtPair = 32;
	public static readonly RULE_nbtList = 33;
	public static readonly RULE_nbtValue = 34;
	public static readonly RULE_nbtByteArr = 35;
	public static readonly RULE_nbtIntArr = 36;
	public static readonly RULE_nbtLongArr = 37;
	public static readonly RULE_nbtString = 38;
	public static readonly RULE_jsonTextValue = 39;
	public static readonly RULE_jsonText = 40;
	public static readonly RULE_jsonObj = 41;
	public static readonly RULE_jsonPair = 42;
	public static readonly RULE_jsonArr = 43;
	public static readonly RULE_jsonValue = 44;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"mcfFile", "statementAndCommand", "command", "statement", "funcStatement", 
		"execStatement", "execStoreChild", "execRunChild", "execChild", "matchPart", 
		"dataIdentifier", "dataOperationExpression", "scbOperationExpression", 
		"scbSingleOperationExpression", "scbIdentifier", "pos3Identifier", "pos2Identifier", 
		"pos5Identifier", "pos1", "blockIdentifier", "blockstate", "selector", 
		"nameSpace", "registerName", "nbtName", "resourceLocation", "nbt", "json", 
		"nbtPath", "snbtValue", "snbt", "nbtCompound", "nbtPair", "nbtList", "nbtValue", 
		"nbtByteArr", "nbtIntArr", "nbtLongArr", "nbtString", "jsonTextValue", 
		"jsonText", "jsonObj", "jsonPair", "jsonArr", "jsonValue",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'func'", "'tagged'", "','", "'{'", "'}'", "'exec'", "'=>'", 
		"'?=>'", "'*'", "'->'", "'as'", "'at'", "'position'", "'rotated'", "'if'", 
		"'unless'", "'all'", "'masked'", "'..'", "'::'", "'|='", "'='", "'..0'", 
		"'remove'", "'+='", "'-='", "'*='", "'/='", "'%='", "'><'", "'<<'", "'>>'", 
		"'reset'", "':='", "'+'", "'-'", "'/'", "'%'", "'('", "')'", "':'", "'<'", 
		"'>'", "'['", "']'", "'@'", "'#'", "'[]'", "'n{'", "'n['", "'n[B;'", "'n[I;'", 
		"'n[L;'", "'[B;'", "'[I;'", "'[L;'", "'j{'", "'j['", "'true'", "'false'", 
		"'null'",
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
		undefined, undefined, undefined, undefined, undefined, undefined, "LeagalCommand", 
		"CompareOperation", "Pos1", "Selector", "AcceptableName", "NBTName", "ByteNumber", 
		"ShortNumber", "LongNumber", "FloatNumber", "DoubleNumber", "STRING2", 
		"STRING", "NUMBER", "WS",
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
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__0) {
				{
				{
				this.state = 90;
				this.funcStatement();
				}
				}
				this.state = 95;
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
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 96;
				this.command(0);
				}
				break;

			case 2:
				{
				this.state = 97;
				this.statement();
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
			this.state = 105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 101;
				this.dataOperationExpression();
				}
				break;

			case 2:
				{
				this.state = 102;
				this.scbOperationExpression();
				}
				break;

			case 3:
				{
				this.state = 103;
				this.execStatement();
				}
				break;

			case 4:
				{
				this.state = 104;
				this.match(JustMCFParser.LeagalCommand);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 115;
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
					this.state = 107;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 109;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 108;
							this.execStoreChild();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 111;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
				}
				this.state = 117;
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
			this.state = 120;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 118;
				this.funcStatement();
				}
				break;
			case JustMCFParser.T__3:
			case JustMCFParser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 119;
				this.execStatement();
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
	public funcStatement(): FuncStatementContext {
		let _localctx: FuncStatementContext = new FuncStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JustMCFParser.RULE_funcStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(JustMCFParser.T__0);
			this.state = 123;
			this.nameSpace();
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__1) {
				{
				this.state = 124;
				this.match(JustMCFParser.T__1);
				this.state = 125;
				this.nameSpace();
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 126;
					this.match(JustMCFParser.T__2);
					this.state = 127;
					this.nameSpace();
					}
					}
					this.state = 132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 135;
			this.match(JustMCFParser.T__3);
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__0) | (1 << JustMCFParser.T__3) | (1 << JustMCFParser.T__5))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (JustMCFParser.T__41 - 42)) | (1 << (JustMCFParser.T__45 - 42)) | (1 << (JustMCFParser.T__46 - 42)) | (1 << (JustMCFParser.LeagalCommand - 42)) | (1 << (JustMCFParser.Selector - 42)) | (1 << (JustMCFParser.AcceptableName - 42)) | (1 << (JustMCFParser.NBTName - 42)))) !== 0)) {
				{
				{
				this.state = 136;
				this.statementAndCommand();
				}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 142;
			this.match(JustMCFParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 10, JustMCFParser.RULE_execStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 180;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__5) {
					{
					this.state = 144;
					this.match(JustMCFParser.T__5);
					}
				}

				this.state = 147;
				this.match(JustMCFParser.T__3);
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__6) | (1 << JustMCFParser.T__7) | (1 << JustMCFParser.T__10) | (1 << JustMCFParser.T__11) | (1 << JustMCFParser.T__12) | (1 << JustMCFParser.T__13) | (1 << JustMCFParser.T__14) | (1 << JustMCFParser.T__15))) !== 0)) {
					{
					{
					this.state = 148;
					this.execChild();
					}
					}
					this.state = 153;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 154;
				this.match(JustMCFParser.T__4);
				this.state = 158;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 155;
						this.execStoreChild();
						}
						}
					}
					this.state = 160;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				}
				this.state = 163;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JustMCFParser.T__9:
					{
					this.state = 161;
					this.execRunChild();
					}
					break;
				case JustMCFParser.T__6:
				case JustMCFParser.T__7:
					{
					this.state = 162;
					this.execStoreChild();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 168;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 165;
						this.execStoreChild();
						}
						}
					}
					this.state = 170;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 171;
				this.match(JustMCFParser.T__5);
				this.state = 172;
				this.match(JustMCFParser.T__3);
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__6) | (1 << JustMCFParser.T__7) | (1 << JustMCFParser.T__10) | (1 << JustMCFParser.T__11) | (1 << JustMCFParser.T__12) | (1 << JustMCFParser.T__13) | (1 << JustMCFParser.T__14) | (1 << JustMCFParser.T__15))) !== 0)) {
					{
					{
					this.state = 173;
					this.execChild();
					}
					}
					this.state = 178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 179;
				this.match(JustMCFParser.T__4);
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
		this.enterRule(_localctx, 12, JustMCFParser.RULE_execStoreChild);
		let _la: number;
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 182;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__6 || _la === JustMCFParser.T__7)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 183;
				this.scbIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 184;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__6 || _la === JustMCFParser.T__7)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 185;
				this.dataIdentifier();
				this.state = 189;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 186;
					this.match(JustMCFParser.AcceptableName);
					this.state = 187;
					this.match(JustMCFParser.T__8);
					this.state = 188;
					this.match(JustMCFParser.NUMBER);
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
		this.enterRule(_localctx, 14, JustMCFParser.RULE_execRunChild);
		let _la: number;
		try {
			this.state = 230;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 193;
				this.match(JustMCFParser.T__9);
				this.state = 194;
				this.match(JustMCFParser.T__0);
				this.state = 195;
				this.nameSpace();
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__1) {
					{
					this.state = 196;
					this.match(JustMCFParser.T__1);
					this.state = 197;
					this.nameSpace();
					this.state = 202;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === JustMCFParser.T__2) {
						{
						{
						this.state = 198;
						this.match(JustMCFParser.T__2);
						this.state = 199;
						this.nameSpace();
						}
						}
						this.state = 204;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 207;
				this.match(JustMCFParser.T__3);
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__0) | (1 << JustMCFParser.T__3) | (1 << JustMCFParser.T__5))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (JustMCFParser.T__41 - 42)) | (1 << (JustMCFParser.T__45 - 42)) | (1 << (JustMCFParser.T__46 - 42)) | (1 << (JustMCFParser.LeagalCommand - 42)) | (1 << (JustMCFParser.Selector - 42)) | (1 << (JustMCFParser.AcceptableName - 42)) | (1 << (JustMCFParser.NBTName - 42)))) !== 0)) {
					{
					{
					this.state = 208;
					this.statementAndCommand();
					}
					}
					this.state = 213;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 214;
				this.match(JustMCFParser.T__4);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 216;
				this.match(JustMCFParser.T__9);
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.T__0) {
					{
					this.state = 217;
					this.match(JustMCFParser.T__0);
					}
				}

				this.state = 220;
				this.match(JustMCFParser.T__3);
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JustMCFParser.T__0) | (1 << JustMCFParser.T__3) | (1 << JustMCFParser.T__5))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (JustMCFParser.T__41 - 42)) | (1 << (JustMCFParser.T__45 - 42)) | (1 << (JustMCFParser.T__46 - 42)) | (1 << (JustMCFParser.LeagalCommand - 42)) | (1 << (JustMCFParser.Selector - 42)) | (1 << (JustMCFParser.AcceptableName - 42)) | (1 << (JustMCFParser.NBTName - 42)))) !== 0)) {
					{
					{
					this.state = 221;
					this.statementAndCommand();
					}
					}
					this.state = 226;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 227;
				this.match(JustMCFParser.T__4);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 228;
				this.match(JustMCFParser.T__9);
				this.state = 229;
				this.command(0);
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
		this.enterRule(_localctx, 16, JustMCFParser.RULE_execChild);
		let _la: number;
		try {
			this.state = 270;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 232;
				this.match(JustMCFParser.T__10);
				this.state = 233;
				this.selector();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 234;
				this.match(JustMCFParser.T__11);
				this.state = 235;
				this.selector();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 236;
				this.match(JustMCFParser.T__12);
				this.state = 237;
				this.pos3Identifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 238;
				this.match(JustMCFParser.T__12);
				this.state = 239;
				this.selector();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 240;
				this.match(JustMCFParser.T__13);
				this.state = 241;
				this.pos2Identifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 242;
				this.match(JustMCFParser.T__13);
				this.state = 243;
				this.selector();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 244;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__14 || _la === JustMCFParser.T__15)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 245;
				this.selector();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 246;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__14 || _la === JustMCFParser.T__15)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 247;
				this.scbIdentifier();
				this.state = 248;
				this.match(JustMCFParser.CompareOperation);
				this.state = 249;
				this.scbIdentifier();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 251;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__14 || _la === JustMCFParser.T__15)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 252;
				this.scbIdentifier();
				this.state = 253;
				this.matchPart();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 255;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__14 || _la === JustMCFParser.T__15)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 256;
				this.nameSpace();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 257;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__14 || _la === JustMCFParser.T__15)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 258;
				this.pos3Identifier();
				this.state = 259;
				this.blockIdentifier();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 261;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__14 || _la === JustMCFParser.T__15)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 262;
				this.pos3Identifier();
				this.state = 263;
				this.pos3Identifier();
				this.state = 264;
				this.pos3Identifier();
				this.state = 265;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__16 || _la === JustMCFParser.T__17)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 267;
				_la = this._input.LA(1);
				if (!(_la === JustMCFParser.T__14 || _la === JustMCFParser.T__15)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 268;
				this.dataIdentifier();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 269;
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
		this.enterRule(_localctx, 18, JustMCFParser.RULE_matchPart);
		let _la: number;
		try {
			this.state = 280;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 272;
				this.match(JustMCFParser.NUMBER);
				this.state = 273;
				this.match(JustMCFParser.T__18);
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JustMCFParser.NUMBER) {
					{
					this.state = 274;
					this.match(JustMCFParser.NUMBER);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 277;
				this.match(JustMCFParser.T__18);
				this.state = 278;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 279;
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
		this.enterRule(_localctx, 20, JustMCFParser.RULE_dataIdentifier);
		try {
			this.state = 294;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.AcceptableName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 282;
				this.nameSpace();
				this.state = 283;
				this.match(JustMCFParser.T__19);
				this.state = 284;
				this.nbtPath();
				}
				break;
			case JustMCFParser.T__45:
			case JustMCFParser.T__46:
			case JustMCFParser.Selector:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 286;
				this.selector();
				this.state = 287;
				this.match(JustMCFParser.T__19);
				this.state = 288;
				this.nbtPath();
				}
				break;
			case JustMCFParser.T__41:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 290;
				this.pos3Identifier();
				this.state = 291;
				this.match(JustMCFParser.T__19);
				this.state = 292;
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
		this.enterRule(_localctx, 22, JustMCFParser.RULE_dataOperationExpression);
		try {
			this.state = 342;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 296;
				this.dataIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 297;
				this.dataIdentifier();
				this.state = 298;
				this.match(JustMCFParser.T__20);
				this.state = 299;
				this.nbt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 301;
				this.dataIdentifier();
				this.state = 302;
				this.match(JustMCFParser.T__20);
				this.state = 303;
				this.dataIdentifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 305;
				this.dataIdentifier();
				this.state = 306;
				this.match(JustMCFParser.T__21);
				this.state = 307;
				this.nbt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 309;
				this.dataIdentifier();
				this.state = 310;
				this.match(JustMCFParser.T__21);
				this.state = 311;
				this.dataIdentifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 313;
				this.dataIdentifier();
				this.state = 314;
				this.match(JustMCFParser.T__18);
				this.state = 315;
				this.nbt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 317;
				this.dataIdentifier();
				this.state = 318;
				this.match(JustMCFParser.T__18);
				this.state = 319;
				this.dataIdentifier();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 321;
				this.dataIdentifier();
				this.state = 322;
				this.match(JustMCFParser.T__22);
				this.state = 323;
				this.nbt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 325;
				this.dataIdentifier();
				this.state = 326;
				this.match(JustMCFParser.T__22);
				this.state = 327;
				this.dataIdentifier();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 329;
				this.dataIdentifier();
				this.state = 330;
				this.match(JustMCFParser.T__18);
				this.state = 331;
				this.match(JustMCFParser.NUMBER);
				this.state = 332;
				this.nbt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 334;
				this.dataIdentifier();
				this.state = 335;
				this.match(JustMCFParser.T__18);
				this.state = 336;
				this.match(JustMCFParser.NUMBER);
				this.state = 337;
				this.dataIdentifier();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 339;
				this.dataIdentifier();
				this.state = 340;
				this.match(JustMCFParser.T__23);
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
		this.enterRule(_localctx, 24, JustMCFParser.RULE_scbOperationExpression);
		try {
			this.state = 396;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 344;
				this.scbIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 345;
				this.scbIdentifier();
				this.state = 346;
				this.match(JustMCFParser.T__24);
				this.state = 347;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 349;
				this.scbIdentifier();
				this.state = 350;
				this.match(JustMCFParser.T__25);
				this.state = 351;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 353;
				this.scbIdentifier();
				this.state = 354;
				this.match(JustMCFParser.T__24);
				this.state = 355;
				this.scbIdentifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 357;
				this.scbIdentifier();
				this.state = 358;
				this.match(JustMCFParser.T__25);
				this.state = 359;
				this.scbIdentifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 361;
				this.scbIdentifier();
				this.state = 362;
				this.match(JustMCFParser.T__26);
				this.state = 363;
				this.scbIdentifier();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 365;
				this.scbIdentifier();
				this.state = 366;
				this.match(JustMCFParser.T__27);
				this.state = 367;
				this.scbIdentifier();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 369;
				this.scbIdentifier();
				this.state = 370;
				this.match(JustMCFParser.T__28);
				this.state = 371;
				this.scbIdentifier();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 373;
				this.scbIdentifier();
				this.state = 374;
				this.match(JustMCFParser.T__29);
				this.state = 375;
				this.scbIdentifier();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 377;
				this.scbIdentifier();
				this.state = 378;
				this.match(JustMCFParser.T__30);
				this.state = 379;
				this.scbIdentifier();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 381;
				this.scbIdentifier();
				this.state = 382;
				this.match(JustMCFParser.T__31);
				this.state = 383;
				this.scbIdentifier();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 385;
				this.scbIdentifier();
				this.state = 386;
				this.match(JustMCFParser.T__21);
				this.state = 387;
				this.scbIdentifier();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 389;
				this.scbIdentifier();
				this.state = 390;
				this.match(JustMCFParser.T__32);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 392;
				this.scbIdentifier();
				this.state = 393;
				this.match(JustMCFParser.T__33);
				this.state = 394;
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
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, JustMCFParser.RULE_scbSingleOperationExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__45:
			case JustMCFParser.T__46:
			case JustMCFParser.Selector:
			case JustMCFParser.AcceptableName:
			case JustMCFParser.NBTName:
				{
				this.state = 399;
				this.scbIdentifier();
				}
				break;
			case JustMCFParser.T__38:
				{
				this.state = 400;
				this.match(JustMCFParser.T__38);
				this.state = 401;
				this.scbSingleOperationExpression(0);
				this.state = 402;
				this.match(JustMCFParser.T__39);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 411;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ScbSingleOperationExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, JustMCFParser.RULE_scbSingleOperationExpression);
					this.state = 406;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 407;
					_la = this._input.LA(1);
					if (!(((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (JustMCFParser.T__8 - 9)) | (1 << (JustMCFParser.T__34 - 9)) | (1 << (JustMCFParser.T__35 - 9)) | (1 << (JustMCFParser.T__36 - 9)) | (1 << (JustMCFParser.T__37 - 9)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 408;
					this.scbSingleOperationExpression(3);
					}
					}
				}
				this.state = 413;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
		this.enterRule(_localctx, 28, JustMCFParser.RULE_scbIdentifier);
		try {
			this.state = 421;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.AcceptableName:
			case JustMCFParser.NBTName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 414;
				this.nbtName();
				this.state = 415;
				this.selector();
				}
				break;
			case JustMCFParser.T__45:
			case JustMCFParser.T__46:
			case JustMCFParser.Selector:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 417;
				this.selector();
				this.state = 418;
				this.match(JustMCFParser.T__40);
				this.state = 419;
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
		this.enterRule(_localctx, 30, JustMCFParser.RULE_pos3Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this.match(JustMCFParser.T__41);
			this.state = 424;
			this.pos1();
			this.state = 425;
			this.pos1();
			this.state = 426;
			this.pos1();
			this.state = 427;
			this.match(JustMCFParser.T__42);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 32, JustMCFParser.RULE_pos2Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(JustMCFParser.T__41);
			this.state = 430;
			this.pos1();
			this.state = 431;
			this.pos1();
			this.state = 432;
			this.match(JustMCFParser.T__42);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 34, JustMCFParser.RULE_pos5Identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			this.match(JustMCFParser.T__41);
			this.state = 435;
			this.pos1();
			this.state = 436;
			this.pos1();
			this.state = 437;
			this.pos1();
			this.state = 438;
			this.pos1();
			this.state = 439;
			this.pos1();
			this.state = 440;
			this.match(JustMCFParser.T__42);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 36, JustMCFParser.RULE_pos1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
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
		this.enterRule(_localctx, 38, JustMCFParser.RULE_blockIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.registerName();
			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JustMCFParser.T__43) {
				{
				this.state = 445;
				this.blockstate();
				}
			}

			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (JustMCFParser.T__48 - 49)) | (1 << (JustMCFParser.T__49 - 49)) | (1 << (JustMCFParser.T__50 - 49)) | (1 << (JustMCFParser.T__51 - 49)) | (1 << (JustMCFParser.T__52 - 49)) | (1 << (JustMCFParser.ByteNumber - 49)) | (1 << (JustMCFParser.ShortNumber - 49)) | (1 << (JustMCFParser.LongNumber - 49)) | (1 << (JustMCFParser.FloatNumber - 49)) | (1 << (JustMCFParser.DoubleNumber - 49)) | (1 << (JustMCFParser.STRING2 - 49)) | (1 << (JustMCFParser.STRING - 49)))) !== 0)) {
				{
				this.state = 448;
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
		this.enterRule(_localctx, 40, JustMCFParser.RULE_blockstate);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.match(JustMCFParser.T__43);
			this.state = 453;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 452;
					this.matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 455;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 457;
			this.match(JustMCFParser.T__44);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 42, JustMCFParser.RULE_selector);
		try {
			let _alt: number;
			this.state = 474;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 459;
				this.match(JustMCFParser.Selector);
				this.state = 467;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 460;
					this.match(JustMCFParser.T__43);
					this.state = 462;
					this._errHandler.sync(this);
					_alt = 1 + 1;
					do {
						switch (_alt) {
						case 1 + 1:
							{
							{
							this.state = 461;
							this.matchWildcard();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 464;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
					} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 466;
					this.match(JustMCFParser.T__44);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 469;
				this.match(JustMCFParser.T__45);
				this.state = 470;
				this.nbtName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 471;
				this.match(JustMCFParser.T__46);
				this.state = 472;
				this.nbtName();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 473;
				this.match(JustMCFParser.T__46);
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
		this.enterRule(_localctx, 44, JustMCFParser.RULE_nameSpace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.match(JustMCFParser.AcceptableName);
			this.state = 477;
			this.match(JustMCFParser.T__40);
			this.state = 478;
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
		this.enterRule(_localctx, 46, JustMCFParser.RULE_registerName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 480;
				this.match(JustMCFParser.AcceptableName);
				this.state = 481;
				this.match(JustMCFParser.T__40);
				}
				break;
			}
			this.state = 484;
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
		this.enterRule(_localctx, 48, JustMCFParser.RULE_nbtName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
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
		this.enterRule(_localctx, 50, JustMCFParser.RULE_resourceLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this.match(JustMCFParser.AcceptableName);
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__36) {
				{
				{
				this.state = 489;
				this.match(JustMCFParser.T__36);
				this.state = 490;
				this.match(JustMCFParser.AcceptableName);
				}
				}
				this.state = 495;
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
		this.enterRule(_localctx, 52, JustMCFParser.RULE_nbt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
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
		this.enterRule(_localctx, 54, JustMCFParser.RULE_json);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
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
		this.enterRule(_localctx, 56, JustMCFParser.RULE_nbtPath);
		try {
			let _alt: number;
			this.state = 521;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 500;
				this.nbtName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 501;
				this.nbtCompound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 502;
				this.nbtName();
				this.state = 503;
				this.nbtCompound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 505;
				this.nbtName();
				this.state = 512;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 510;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case JustMCFParser.T__43:
							{
							this.state = 506;
							this.match(JustMCFParser.T__43);
							this.state = 507;
							this.match(JustMCFParser.NUMBER);
							this.state = 508;
							this.match(JustMCFParser.T__44);
							}
							break;
						case JustMCFParser.T__47:
							{
							this.state = 509;
							this.match(JustMCFParser.T__47);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 514;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				}
				this.state = 519;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 515;
					this.match(JustMCFParser.T__43);
					this.state = 516;
					this.nbtCompound();
					this.state = 517;
					this.match(JustMCFParser.T__44);
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
		this.enterRule(_localctx, 58, JustMCFParser.RULE_snbtValue);
		let _la: number;
		try {
			this.state = 585;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 523;
				this.match(JustMCFParser.T__48);
				this.state = 524;
				this.nbtPair();
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 525;
					this.match(JustMCFParser.T__2);
					this.state = 526;
					this.nbtPair();
					}
					}
					this.state = 531;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 532;
				this.match(JustMCFParser.T__4);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 534;
				this.match(JustMCFParser.T__48);
				this.state = 535;
				this.match(JustMCFParser.T__4);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 536;
				this.match(JustMCFParser.T__49);
				this.state = 537;
				this.nbtValue();
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 538;
					this.match(JustMCFParser.T__2);
					this.state = 539;
					this.nbtValue();
					}
					}
					this.state = 544;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 545;
				this.match(JustMCFParser.T__44);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 547;
				this.match(JustMCFParser.T__49);
				this.state = 548;
				this.match(JustMCFParser.T__44);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 549;
				this.match(JustMCFParser.T__50);
				this.state = 550;
				this.match(JustMCFParser.ByteNumber);
				this.state = 555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 551;
					this.match(JustMCFParser.T__2);
					this.state = 552;
					this.match(JustMCFParser.ByteNumber);
					}
					}
					this.state = 557;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 558;
				this.match(JustMCFParser.T__44);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 559;
				this.match(JustMCFParser.T__51);
				this.state = 560;
				this.match(JustMCFParser.NUMBER);
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 561;
					this.match(JustMCFParser.T__2);
					this.state = 562;
					this.match(JustMCFParser.NUMBER);
					}
					}
					this.state = 567;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 568;
				this.match(JustMCFParser.T__44);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 569;
				this.match(JustMCFParser.T__52);
				this.state = 570;
				this.match(JustMCFParser.LongNumber);
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 571;
					this.match(JustMCFParser.T__2);
					this.state = 572;
					this.match(JustMCFParser.LongNumber);
					}
					}
					this.state = 577;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 578;
				this.match(JustMCFParser.T__44);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 579;
				this.nbtString();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 580;
				this.match(JustMCFParser.ByteNumber);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 581;
				this.match(JustMCFParser.ShortNumber);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 582;
				this.match(JustMCFParser.LongNumber);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 583;
				this.match(JustMCFParser.FloatNumber);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 584;
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
		this.enterRule(_localctx, 60, JustMCFParser.RULE_snbt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
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
		this.enterRule(_localctx, 62, JustMCFParser.RULE_nbtCompound);
		let _la: number;
		try {
			this.state = 602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 589;
				this.match(JustMCFParser.T__3);
				this.state = 590;
				this.nbtPair();
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 591;
					this.match(JustMCFParser.T__2);
					this.state = 592;
					this.nbtPair();
					}
					}
					this.state = 597;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 598;
				this.match(JustMCFParser.T__4);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 600;
				this.match(JustMCFParser.T__3);
				this.state = 601;
				this.match(JustMCFParser.T__4);
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
		this.enterRule(_localctx, 64, JustMCFParser.RULE_nbtPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this.nbtName();
			this.state = 605;
			this.match(JustMCFParser.T__40);
			this.state = 606;
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
		this.enterRule(_localctx, 66, JustMCFParser.RULE_nbtList);
		let _la: number;
		try {
			this.state = 621;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 608;
				this.match(JustMCFParser.T__43);
				this.state = 609;
				this.nbtValue();
				this.state = 614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 610;
					this.match(JustMCFParser.T__2);
					this.state = 611;
					this.nbtValue();
					}
					}
					this.state = 616;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 617;
				this.match(JustMCFParser.T__44);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 619;
				this.match(JustMCFParser.T__43);
				this.state = 620;
				this.match(JustMCFParser.T__44);
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
		this.enterRule(_localctx, 68, JustMCFParser.RULE_nbtValue);
		try {
			this.state = 634;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 623;
				this.nbtCompound();
				}
				break;
			case JustMCFParser.T__43:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 624;
				this.nbtList();
				}
				break;
			case JustMCFParser.T__53:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 625;
				this.nbtByteArr();
				}
				break;
			case JustMCFParser.T__54:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 626;
				this.nbtIntArr();
				}
				break;
			case JustMCFParser.T__55:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 627;
				this.nbtLongArr();
				}
				break;
			case JustMCFParser.STRING2:
			case JustMCFParser.STRING:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 628;
				this.nbtString();
				}
				break;
			case JustMCFParser.ByteNumber:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 629;
				this.match(JustMCFParser.ByteNumber);
				}
				break;
			case JustMCFParser.ShortNumber:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 630;
				this.match(JustMCFParser.ShortNumber);
				}
				break;
			case JustMCFParser.LongNumber:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 631;
				this.match(JustMCFParser.LongNumber);
				}
				break;
			case JustMCFParser.FloatNumber:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 632;
				this.match(JustMCFParser.FloatNumber);
				}
				break;
			case JustMCFParser.DoubleNumber:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 633;
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
		this.enterRule(_localctx, 70, JustMCFParser.RULE_nbtByteArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.match(JustMCFParser.T__53);
			this.state = 637;
			this.match(JustMCFParser.ByteNumber);
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 638;
				this.match(JustMCFParser.T__2);
				this.state = 639;
				this.match(JustMCFParser.ByteNumber);
				}
				}
				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 645;
			this.match(JustMCFParser.T__44);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 72, JustMCFParser.RULE_nbtIntArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			this.match(JustMCFParser.T__54);
			this.state = 648;
			this.match(JustMCFParser.NUMBER);
			this.state = 653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 649;
				this.match(JustMCFParser.T__2);
				this.state = 650;
				this.match(JustMCFParser.NUMBER);
				}
				}
				this.state = 655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 656;
			this.match(JustMCFParser.T__44);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 74, JustMCFParser.RULE_nbtLongArr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this.match(JustMCFParser.T__55);
			this.state = 659;
			this.match(JustMCFParser.LongNumber);
			this.state = 664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JustMCFParser.T__2) {
				{
				{
				this.state = 660;
				this.match(JustMCFParser.T__2);
				this.state = 661;
				this.match(JustMCFParser.LongNumber);
				}
				}
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 667;
			this.match(JustMCFParser.T__44);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 76, JustMCFParser.RULE_nbtString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
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
		this.enterRule(_localctx, 78, JustMCFParser.RULE_jsonTextValue);
		let _la: number;
		try {
			this.state = 702;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 671;
				this.match(JustMCFParser.T__56);
				this.state = 672;
				this.jsonPair();
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 673;
					this.match(JustMCFParser.T__2);
					this.state = 674;
					this.jsonPair();
					}
					}
					this.state = 679;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 680;
				this.match(JustMCFParser.T__4);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 682;
				this.match(JustMCFParser.T__56);
				this.state = 683;
				this.match(JustMCFParser.T__4);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 684;
				this.match(JustMCFParser.T__57);
				this.state = 685;
				this.jsonValue();
				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 686;
					this.match(JustMCFParser.T__2);
					this.state = 687;
					this.jsonValue();
					}
					}
					this.state = 692;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 693;
				this.match(JustMCFParser.T__44);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 695;
				this.match(JustMCFParser.T__43);
				this.state = 696;
				this.match(JustMCFParser.T__44);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 697;
				this.match(JustMCFParser.STRING);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 698;
				this.match(JustMCFParser.NUMBER);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 699;
				this.match(JustMCFParser.T__58);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 700;
				this.match(JustMCFParser.T__59);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 701;
				this.match(JustMCFParser.T__60);
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
		this.enterRule(_localctx, 80, JustMCFParser.RULE_jsonText);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
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
		this.enterRule(_localctx, 82, JustMCFParser.RULE_jsonObj);
		let _la: number;
		try {
			this.state = 719;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 706;
				this.match(JustMCFParser.T__3);
				this.state = 707;
				this.jsonPair();
				this.state = 712;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 708;
					this.match(JustMCFParser.T__2);
					this.state = 709;
					this.jsonPair();
					}
					}
					this.state = 714;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 715;
				this.match(JustMCFParser.T__4);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 717;
				this.match(JustMCFParser.T__3);
				this.state = 718;
				this.match(JustMCFParser.T__4);
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
		this.enterRule(_localctx, 84, JustMCFParser.RULE_jsonPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			this.match(JustMCFParser.STRING);
			this.state = 722;
			this.match(JustMCFParser.T__40);
			this.state = 723;
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
		this.enterRule(_localctx, 86, JustMCFParser.RULE_jsonArr);
		let _la: number;
		try {
			this.state = 738;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 725;
				this.match(JustMCFParser.T__43);
				this.state = 726;
				this.jsonValue();
				this.state = 731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JustMCFParser.T__2) {
					{
					{
					this.state = 727;
					this.match(JustMCFParser.T__2);
					this.state = 728;
					this.jsonValue();
					}
					}
					this.state = 733;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 734;
				this.match(JustMCFParser.T__44);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 736;
				this.match(JustMCFParser.T__43);
				this.state = 737;
				this.match(JustMCFParser.T__44);
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
		this.enterRule(_localctx, 88, JustMCFParser.RULE_jsonValue);
		try {
			this.state = 747;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JustMCFParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 740;
				this.match(JustMCFParser.STRING);
				}
				break;
			case JustMCFParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 741;
				this.match(JustMCFParser.NUMBER);
				}
				break;
			case JustMCFParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 742;
				this.jsonObj();
				}
				break;
			case JustMCFParser.T__43:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 743;
				this.jsonArr();
				}
				break;
			case JustMCFParser.T__58:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 744;
				this.match(JustMCFParser.T__58);
				}
				break;
			case JustMCFParser.T__59:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 745;
				this.match(JustMCFParser.T__59);
				}
				break;
			case JustMCFParser.T__60:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 746;
				this.match(JustMCFParser.T__60);
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

		case 13:
			return this.scbSingleOperationExpression_sempred(_localctx as ScbSingleOperationExpressionContext, predIndex);
		}
		return true;
	}
	private command_sempred(_localctx: CommandContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private scbSingleOperationExpression_sempred(_localctx: ScbSingleOperationExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03N\u02F0\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x03\x02\x07\x02^\n\x02\f\x02\x0E\x02a\v\x02\x03" +
		"\x03\x03\x03\x05\x03e\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04l\n\x04\x03\x04\x03\x04\x06\x04p\n\x04\r\x04\x0E\x04q\x07\x04t\n\x04" +
		"\f\x04\x0E\x04w\v\x04\x03\x05\x03\x05\x05\x05{\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x07\x06\x83\n\x06\f\x06\x0E\x06\x86\v\x06" +
		"\x05\x06\x88\n\x06\x03\x06\x03\x06\x07\x06\x8C\n\x06\f\x06\x0E\x06\x8F" +
		"\v\x06\x03\x06\x03\x06\x03\x07\x05\x07\x94\n\x07\x03\x07\x03\x07\x07\x07" +
		"\x98\n\x07\f\x07\x0E\x07\x9B\v\x07\x03\x07\x03\x07\x07\x07\x9F\n\x07\f" +
		"\x07\x0E\x07\xA2\v\x07\x03\x07\x03\x07\x05\x07\xA6\n\x07\x03\x07\x07\x07" +
		"\xA9\n\x07\f\x07\x0E\x07\xAC\v\x07\x03\x07\x03\x07\x03\x07\x07\x07\xB1" +
		"\n\x07\f\x07\x0E\x07\xB4\v\x07\x03\x07\x05\x07\xB7\n\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\b\xC0\n\b\x05\b\xC2\n\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x07\t\xCB\n\t\f\t\x0E\t\xCE\v\t\x05\t\xD0\n" +
		"\t\x03\t\x03\t\x07\t\xD4\n\t\f\t\x0E\t\xD7\v\t\x03\t\x03\t\x03\t\x03\t" +
		"\x05\t\xDD\n\t\x03\t\x03\t\x07\t\xE1\n\t\f\t\x0E\t\xE4\v\t\x03\t\x03\t" +
		"\x03\t\x05\t\xE9\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0111\n\n\x03\v\x03\v\x03\v\x05" +
		"\v\u0116\n\v\x03\v\x03\v\x03\v\x05\v\u011B\n\v\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0129\n\f\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0159\n" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u018F" +
		"\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0197\n" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u019C\n\x0F\f\x0F\x0E\x0F\u019F\v" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u01A8" +
		"\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\u01C1\n\x15\x03" +
		"\x15\x05\x15\u01C4\n\x15\x03\x16\x03\x16\x06\x16\u01C8\n\x16\r\x16\x0E" +
		"\x16\u01C9\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x06\x17\u01D1\n\x17" +
		"\r\x17\x0E\x17\u01D2\x03\x17\x05\x17\u01D6\n\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x05\x17\u01DD\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x05\x19\u01E5\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x07\x1B\u01EE\n\x1B\f\x1B\x0E\x1B\u01F1\v\x1B\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0201\n\x1E\f\x1E\x0E\x1E\u0204" +
		"\v\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u020A\n\x1E\x05\x1E\u020C" +
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0212\n\x1F\f\x1F\x0E\x1F" +
		"\u0215\v\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x07\x1F\u021F\n\x1F\f\x1F\x0E\x1F\u0222\v\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u022C\n\x1F\f\x1F" +
		"\x0E\x1F\u022F\v\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0236" +
		"\n\x1F\f\x1F\x0E\x1F\u0239\v\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x07\x1F\u0240\n\x1F\f\x1F\x0E\x1F\u0243\v\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u024C\n\x1F\x03 \x03 \x03!\x03" +
		"!\x03!\x03!\x07!\u0254\n!\f!\x0E!\u0257\v!\x03!\x03!\x03!\x03!\x05!\u025D" +
		"\n!\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x07#\u0267\n#\f#\x0E#" +
		"\u026A\v#\x03#\x03#\x03#\x03#\x05#\u0270\n#\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x05$\u027D\n$\x03%\x03%\x03%\x03%\x07%\u0283" +
		"\n%\f%\x0E%\u0286\v%\x03%\x03%\x03&\x03&\x03&\x03&\x07&\u028E\n&\f&\x0E" +
		"&\u0291\v&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x07\'\u0299\n\'\f\'\x0E\'" +
		"\u029C\v\'\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x03)\x07)\u02A6\n)\f)" +
		"\x0E)\u02A9\v)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u02B3\n)\f" +
		")\x0E)\u02B6\v)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u02C1" +
		"\n)\x03*\x03*\x03+\x03+\x03+\x03+\x07+\u02C9\n+\f+\x0E+\u02CC\v+\x03+" +
		"\x03+\x03+\x03+\x05+\u02D2\n+\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-" +
		"\x07-\u02DC\n-\f-\x0E-\u02DF\v-\x03-\x03-\x03-\x03-\x05-\u02E5\n-\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u02EE\n.\x03.\x04\u01C9\u01D2\x02" +
		"\x04\x06\x1C/\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\x02" +
		"\t\x03\x02\t\n\x03\x02\x11\x12\x03\x02\x13\x14\x04\x02\v\v%(\x04\x02B" +
		"BMM\x03\x02DE\x03\x02KL\x02\u0350\x02_\x03\x02\x02\x02\x04d\x03\x02\x02" +
		"\x02\x06k\x03\x02\x02\x02\bz\x03\x02\x02\x02\n|\x03\x02\x02\x02\f\xB6" +
		"\x03\x02\x02\x02\x0E\xC1\x03\x02\x02\x02\x10\xE8\x03\x02\x02\x02\x12\u0110" +
		"\x03\x02\x02\x02\x14\u011A\x03\x02\x02\x02\x16\u0128\x03\x02\x02\x02\x18" +
		"\u0158\x03\x02\x02\x02\x1A\u018E\x03\x02\x02\x02\x1C\u0196\x03\x02\x02" +
		"\x02\x1E\u01A7\x03\x02\x02\x02 \u01A9\x03\x02\x02\x02\"\u01AF\x03\x02" +
		"\x02\x02$\u01B4\x03\x02\x02\x02&\u01BC\x03\x02\x02\x02(\u01BE\x03\x02" +
		"\x02\x02*\u01C5\x03\x02\x02\x02,\u01DC\x03\x02\x02\x02.\u01DE\x03\x02" +
		"\x02\x020\u01E4\x03\x02\x02\x022\u01E8\x03\x02\x02\x024\u01EA\x03\x02" +
		"\x02\x026\u01F2\x03\x02\x02\x028\u01F4\x03\x02\x02\x02:\u020B\x03\x02" +
		"\x02\x02<\u024B\x03\x02\x02\x02>\u024D\x03\x02\x02\x02@\u025C\x03\x02" +
		"\x02\x02B\u025E\x03\x02\x02\x02D\u026F\x03\x02\x02\x02F\u027C\x03\x02" +
		"\x02\x02H\u027E\x03\x02\x02\x02J\u0289\x03\x02\x02\x02L\u0294\x03\x02" +
		"\x02\x02N\u029F\x03\x02\x02\x02P\u02C0\x03\x02\x02\x02R\u02C2\x03\x02" +
		"\x02\x02T\u02D1\x03\x02\x02\x02V\u02D3\x03\x02\x02\x02X\u02E4\x03\x02" +
		"\x02\x02Z\u02ED\x03\x02\x02\x02\\^\x05\n\x06\x02]\\\x03\x02\x02\x02^a" +
		"\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`\x03\x03\x02\x02" +
		"\x02a_\x03\x02\x02\x02be\x05\x06\x04\x02ce\x05\b\x05\x02db\x03\x02\x02" +
		"\x02dc\x03\x02\x02\x02e\x05\x03\x02\x02\x02fg\b\x04\x01\x02gl\x05\x18" +
		"\r\x02hl\x05\x1A\x0E\x02il\x05\f\x07\x02jl\x07@\x02\x02kf\x03\x02\x02" +
		"\x02kh\x03\x02\x02\x02ki\x03\x02\x02\x02kj\x03\x02\x02\x02lu\x03\x02\x02" +
		"\x02mo\f\x07\x02\x02np\x05\x0E\b\x02on\x03\x02\x02\x02pq\x03\x02\x02\x02" +
		"qo\x03\x02\x02\x02qr\x03\x02\x02\x02rt\x03\x02\x02\x02sm\x03\x02\x02\x02" +
		"tw\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02v\x07\x03\x02\x02" +
		"\x02wu\x03\x02\x02\x02x{\x05\n\x06\x02y{\x05\f\x07\x02zx\x03\x02\x02\x02" +
		"zy\x03\x02\x02\x02{\t\x03\x02\x02\x02|}\x07\x03\x02\x02}\x87\x05.\x18" +
		"\x02~\x7F\x07\x04\x02\x02\x7F\x84\x05.\x18\x02\x80\x81\x07\x05\x02\x02" +
		"\x81\x83\x05.\x18\x02\x82\x80\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02" +
		"\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02" +
		"\x86\x84\x03\x02\x02\x02\x87~\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02" +
		"\x88\x89\x03\x02\x02\x02\x89\x8D\x07\x06\x02\x02\x8A\x8C\x05\x04\x03\x02" +
		"\x8B\x8A\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02" +
		"\x8D\x8E\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02" +
		"\x90\x91\x07\x07\x02\x02\x91\v\x03\x02\x02\x02\x92\x94\x07\b\x02\x02\x93" +
		"\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95" +
		"\x99\x07\x06\x02\x02\x96\x98\x05\x12\n\x02\x97\x96\x03\x02\x02\x02\x98" +
		"\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A" +
		"\x9C\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\xA0\x07\x07\x02\x02\x9D" +
		"\x9F\x05\x0E\b\x02\x9E\x9D\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0" +
		"\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA5\x03\x02\x02\x02\xA2" +
		"\xA0\x03\x02\x02\x02\xA3\xA6\x05\x10\t\x02\xA4\xA6\x05\x0E\b\x02\xA5\xA3" +
		"\x03\x02\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\xAA\x03\x02\x02\x02\xA7\xA9" +
		"\x05\x0E\b\x02\xA8\xA7\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8" +
		"\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xB7\x03\x02\x02\x02\xAC\xAA" +
		"\x03\x02\x02\x02\xAD\xAE\x07\b\x02\x02\xAE\xB2\x07\x06\x02\x02\xAF\xB1" +
		"\x05\x12\n\x02\xB0\xAF\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0" +
		"\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x03\x02\x02\x02\xB4\xB2" +
		"\x03\x02\x02\x02\xB5\xB7\x07\x07\x02\x02\xB6\x93\x03\x02\x02\x02\xB6\xAD" +
		"\x03\x02\x02\x02\xB7\r\x03\x02\x02\x02\xB8\xB9\t\x02\x02\x02\xB9\xC2\x05" +
		"\x1E\x10\x02\xBA\xBB\t\x02\x02\x02\xBB\xBF\x05\x16\f\x02\xBC\xBD\x07D" +
		"\x02\x02\xBD\xBE\x07\v\x02\x02\xBE\xC0\x07M\x02\x02\xBF\xBC\x03\x02\x02" +
		"\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1\xB8\x03\x02\x02" +
		"\x02\xC1\xBA\x03\x02\x02\x02\xC2\x0F\x03\x02\x02\x02\xC3\xC4\x07\f\x02" +
		"\x02\xC4\xC5\x07\x03\x02\x02\xC5\xCF\x05.\x18\x02\xC6\xC7\x07\x04\x02" +
		"\x02\xC7\xCC\x05.\x18\x02\xC8\xC9\x07\x05\x02\x02\xC9\xCB\x05.\x18\x02" +
		"\xCA\xC8\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02" +
		"\xCC\xCD\x03\x02\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02" +
		"\xCF\xC6\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02" +
		"\xD1\xD5\x07\x06\x02\x02\xD2\xD4\x05\x04\x03\x02\xD3\xD2\x03\x02\x02\x02" +
		"\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02" +
		"\xD6\xD8\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD8\xD9\x07\x07\x02\x02" +
		"\xD9\xE9\x03\x02\x02\x02\xDA\xDC\x07\f\x02\x02\xDB\xDD\x07\x03\x02\x02" +
		"\xDC\xDB\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02" +
		"\xDE\xE2\x07\x06\x02\x02\xDF\xE1\x05\x04\x03\x02\xE0\xDF\x03\x02\x02\x02" +
		"\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02" +
		"\xE3\xE5\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE9\x07\x07\x02\x02" +
		"\xE6\xE7\x07\f\x02\x02\xE7\xE9\x05\x06\x04\x02\xE8\xC3\x03\x02\x02\x02" +
		"\xE8\xDA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\x11\x03\x02\x02\x02" +
		"\xEA\xEB\x07\r\x02\x02\xEB\u0111\x05,\x17\x02\xEC\xED\x07\x0E\x02\x02" +
		"\xED\u0111\x05,\x17\x02\xEE\xEF\x07\x0F\x02\x02\xEF\u0111\x05 \x11\x02" +
		"\xF0\xF1\x07\x0F\x02\x02\xF1\u0111\x05,\x17\x02\xF2\xF3\x07\x10\x02\x02" +
		"\xF3\u0111\x05\"\x12\x02\xF4\xF5\x07\x10\x02\x02\xF5\u0111\x05,\x17\x02" +
		"\xF6\xF7\t\x03\x02\x02\xF7\u0111\x05,\x17\x02\xF8\xF9\t\x03\x02\x02\xF9" +
		"\xFA\x05\x1E\x10\x02\xFA\xFB\x07A\x02\x02\xFB\xFC\x05\x1E\x10\x02\xFC" +
		"\u0111\x03\x02\x02\x02\xFD\xFE\t\x03\x02\x02\xFE\xFF\x05\x1E\x10\x02\xFF" +
		"\u0100\x05\x14\v\x02\u0100\u0111\x03\x02\x02\x02\u0101\u0102\t\x03\x02" +
		"\x02\u0102\u0111\x05.\x18\x02\u0103\u0104\t\x03\x02\x02\u0104\u0105\x05" +
		" \x11\x02\u0105\u0106\x05(\x15\x02\u0106\u0111\x03\x02\x02\x02\u0107\u0108" +
		"\t\x03\x02\x02\u0108\u0109\x05 \x11\x02\u0109\u010A\x05 \x11\x02\u010A" +
		"\u010B\x05 \x11\x02\u010B\u010C\t\x04\x02\x02\u010C\u0111\x03\x02\x02" +
		"\x02\u010D\u010E\t\x03\x02\x02\u010E\u0111\x05\x16\f\x02\u010F\u0111\x05" +
		"\x0E\b\x02\u0110\xEA\x03\x02\x02\x02\u0110\xEC\x03\x02\x02\x02\u0110\xEE" +
		"\x03\x02\x02\x02\u0110\xF0\x03\x02\x02\x02\u0110\xF2\x03\x02\x02\x02\u0110" +
		"\xF4\x03\x02\x02\x02\u0110\xF6\x03\x02\x02\x02\u0110\xF8\x03\x02\x02\x02" +
		"\u0110\xFD\x03\x02\x02\x02\u0110\u0101\x03\x02\x02\x02\u0110\u0103\x03" +
		"\x02\x02\x02\u0110\u0107\x03\x02\x02\x02\u0110\u010D\x03\x02\x02\x02\u0110" +
		"\u010F\x03\x02\x02\x02\u0111\x13\x03\x02\x02\x02\u0112\u0113\x07M\x02" +
		"\x02\u0113\u0115\x07\x15\x02\x02\u0114\u0116\x07M\x02\x02\u0115\u0114" +
		"\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u011B\x03\x02\x02\x02" +
		"\u0117\u0118\x07\x15\x02\x02\u0118\u011B\x07M\x02\x02\u0119\u011B\x07" +
		"M\x02\x02\u011A\u0112\x03\x02\x02\x02\u011A\u0117\x03\x02\x02\x02\u011A" +
		"\u0119\x03\x02\x02\x02\u011B\x15\x03\x02\x02\x02\u011C\u011D\x05.\x18" +
		"\x02\u011D\u011E\x07\x16\x02\x02\u011E\u011F\x05:\x1E\x02\u011F\u0129" +
		"\x03\x02\x02\x02\u0120\u0121\x05,\x17\x02\u0121\u0122\x07\x16\x02\x02" +
		"\u0122\u0123\x05:\x1E\x02\u0123\u0129\x03\x02\x02\x02\u0124\u0125\x05" +
		" \x11\x02\u0125\u0126\x07\x16\x02\x02\u0126\u0127\x05:\x1E\x02\u0127\u0129" +
		"\x03\x02\x02\x02\u0128\u011C\x03\x02\x02\x02\u0128\u0120\x03\x02\x02\x02" +
		"\u0128\u0124\x03\x02\x02\x02\u0129\x17\x03\x02\x02\x02\u012A\u0159\x05" +
		"\x16\f\x02\u012B\u012C\x05\x16\f\x02\u012C\u012D\x07\x17\x02\x02\u012D" +
		"\u012E\x056\x1C\x02\u012E\u0159\x03\x02\x02\x02\u012F\u0130\x05\x16\f" +
		"\x02\u0130\u0131\x07\x17\x02\x02\u0131\u0132\x05\x16\f\x02\u0132\u0159" +
		"\x03\x02\x02\x02\u0133\u0134\x05\x16\f\x02\u0134\u0135\x07\x18\x02\x02" +
		"\u0135\u0136\x056\x1C\x02\u0136\u0159\x03\x02\x02\x02\u0137\u0138\x05" +
		"\x16\f\x02\u0138\u0139\x07\x18\x02\x02\u0139\u013A\x05\x16\f\x02\u013A" +
		"\u0159\x03\x02\x02\x02\u013B\u013C\x05\x16\f\x02\u013C\u013D\x07\x15\x02" +
		"\x02\u013D\u013E\x056\x1C\x02\u013E\u0159\x03\x02\x02\x02\u013F\u0140" +
		"\x05\x16\f\x02\u0140\u0141\x07\x15\x02\x02\u0141\u0142\x05\x16\f\x02\u0142" +
		"\u0159\x03\x02\x02\x02\u0143\u0144\x05\x16\f\x02\u0144\u0145\x07\x19\x02" +
		"\x02\u0145\u0146\x056\x1C\x02\u0146\u0159\x03\x02\x02\x02\u0147\u0148" +
		"\x05\x16\f\x02\u0148\u0149\x07\x19\x02\x02\u0149\u014A\x05\x16\f\x02\u014A" +
		"\u0159\x03\x02\x02\x02\u014B\u014C\x05\x16\f\x02\u014C\u014D\x07\x15\x02" +
		"\x02\u014D\u014E\x07M\x02\x02\u014E\u014F\x056\x1C\x02\u014F\u0159\x03" +
		"\x02\x02\x02\u0150\u0151\x05\x16\f\x02\u0151\u0152\x07\x15\x02\x02\u0152" +
		"\u0153\x07M\x02\x02\u0153\u0154\x05\x16\f\x02\u0154\u0159\x03\x02\x02" +
		"\x02\u0155\u0156\x05\x16\f\x02\u0156\u0157\x07\x1A\x02\x02\u0157\u0159" +
		"\x03\x02\x02\x02\u0158\u012A\x03\x02\x02\x02\u0158\u012B\x03\x02\x02\x02" +
		"\u0158\u012F\x03\x02\x02\x02\u0158\u0133\x03\x02\x02\x02\u0158\u0137\x03" +
		"\x02\x02\x02\u0158\u013B\x03\x02\x02\x02\u0158\u013F\x03\x02\x02\x02\u0158" +
		"\u0143\x03\x02\x02\x02\u0158\u0147\x03\x02\x02\x02\u0158\u014B\x03\x02" +
		"\x02\x02\u0158\u0150\x03\x02\x02\x02\u0158\u0155\x03\x02\x02\x02\u0159" +
		"\x19\x03\x02\x02\x02\u015A\u018F\x05\x1E\x10\x02\u015B\u015C\x05\x1E\x10" +
		"\x02\u015C\u015D\x07\x1B\x02\x02\u015D\u015E\x07M\x02\x02\u015E\u018F" +
		"\x03\x02\x02\x02\u015F\u0160\x05\x1E\x10\x02\u0160\u0161\x07\x1C\x02\x02" +
		"\u0161\u0162\x07M\x02\x02\u0162\u018F\x03\x02\x02\x02\u0163\u0164\x05" +
		"\x1E\x10\x02\u0164\u0165\x07\x1B\x02\x02\u0165\u0166\x05\x1E\x10\x02\u0166" +
		"\u018F\x03\x02\x02\x02\u0167\u0168\x05\x1E\x10\x02\u0168\u0169\x07\x1C" +
		"\x02\x02\u0169\u016A\x05\x1E\x10\x02\u016A\u018F\x03\x02\x02\x02\u016B" +
		"\u016C\x05\x1E\x10\x02\u016C\u016D\x07\x1D\x02\x02\u016D\u016E\x05\x1E" +
		"\x10\x02\u016E\u018F\x03\x02\x02\x02\u016F\u0170\x05\x1E\x10\x02\u0170" +
		"\u0171\x07\x1E\x02\x02\u0171\u0172\x05\x1E\x10\x02\u0172\u018F\x03\x02" +
		"\x02\x02\u0173\u0174\x05\x1E\x10\x02\u0174\u0175\x07\x1F\x02\x02\u0175" +
		"\u0176\x05\x1E\x10\x02\u0176\u018F\x03\x02\x02\x02\u0177\u0178\x05\x1E" +
		"\x10\x02\u0178\u0179\x07 \x02\x02\u0179\u017A\x05\x1E\x10\x02\u017A\u018F" +
		"\x03\x02\x02\x02\u017B\u017C\x05\x1E\x10\x02\u017C\u017D\x07!\x02\x02" +
		"\u017D\u017E\x05\x1E\x10\x02\u017E\u018F\x03\x02\x02\x02\u017F\u0180\x05" +
		"\x1E\x10\x02\u0180\u0181\x07\"\x02\x02\u0181\u0182\x05\x1E\x10\x02\u0182" +
		"\u018F\x03\x02\x02\x02\u0183\u0184\x05\x1E\x10\x02\u0184\u0185\x07\x18" +
		"\x02\x02\u0185\u0186\x05\x1E\x10\x02\u0186\u018F\x03\x02\x02\x02\u0187" +
		"\u0188\x05\x1E\x10\x02\u0188\u0189\x07#\x02\x02\u0189\u018F\x03\x02\x02" +
		"\x02\u018A\u018B\x05\x1E\x10\x02\u018B\u018C\x07$\x02\x02\u018C\u018D" +
		"\x05\x1C\x0F\x02\u018D\u018F\x03\x02\x02\x02\u018E\u015A\x03\x02\x02\x02" +
		"\u018E\u015B\x03\x02\x02\x02\u018E\u015F\x03\x02\x02\x02\u018E\u0163\x03" +
		"\x02\x02\x02\u018E\u0167\x03\x02\x02\x02\u018E\u016B\x03\x02\x02\x02\u018E" +
		"\u016F\x03\x02\x02\x02\u018E\u0173\x03\x02\x02\x02\u018E\u0177\x03\x02" +
		"\x02\x02\u018E\u017B\x03\x02\x02\x02\u018E\u017F\x03\x02\x02\x02\u018E" +
		"\u0183\x03\x02\x02\x02\u018E\u0187\x03\x02\x02\x02\u018E\u018A\x03\x02" +
		"\x02\x02\u018F\x1B\x03\x02\x02\x02\u0190\u0191\b\x0F\x01\x02\u0191\u0197" +
		"\x05\x1E\x10\x02\u0192\u0193\x07)\x02\x02\u0193\u0194\x05\x1C\x0F\x02" +
		"\u0194\u0195\x07*\x02\x02\u0195\u0197\x03\x02\x02\x02\u0196\u0190\x03" +
		"\x02\x02\x02\u0196\u0192\x03\x02\x02\x02\u0197\u019D\x03\x02\x02\x02\u0198" +
		"\u0199\f\x04\x02\x02\u0199\u019A\t\x05\x02\x02\u019A\u019C\x05\x1C\x0F" +
		"\x05\u019B\u0198\x03\x02\x02\x02\u019C\u019F\x03\x02\x02\x02\u019D\u019B" +
		"\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\x1D\x03\x02\x02\x02" +
		"\u019F\u019D\x03\x02\x02\x02\u01A0\u01A1\x052\x1A\x02\u01A1\u01A2\x05" +
		",\x17\x02\u01A2\u01A8\x03\x02\x02\x02\u01A3\u01A4\x05,\x17\x02\u01A4\u01A5" +
		"\x07+\x02\x02\u01A5\u01A6\x052\x1A\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7" +
		"\u01A0\x03\x02\x02\x02\u01A7\u01A3\x03\x02\x02\x02\u01A8\x1F\x03\x02\x02" +
		"\x02\u01A9\u01AA\x07,\x02\x02\u01AA\u01AB\x05&\x14\x02\u01AB\u01AC\x05" +
		"&\x14\x02\u01AC\u01AD\x05&\x14\x02\u01AD\u01AE\x07-\x02\x02\u01AE!\x03" +
		"\x02\x02\x02\u01AF\u01B0\x07,\x02\x02\u01B0\u01B1\x05&\x14\x02\u01B1\u01B2" +
		"\x05&\x14\x02\u01B2\u01B3\x07-\x02\x02\u01B3#\x03\x02\x02\x02\u01B4\u01B5" +
		"\x07,\x02\x02\u01B5\u01B6\x05&\x14\x02\u01B6\u01B7\x05&\x14\x02\u01B7" +
		"\u01B8\x05&\x14\x02\u01B8\u01B9\x05&\x14\x02\u01B9\u01BA\x05&\x14\x02" +
		"\u01BA\u01BB\x07-\x02\x02\u01BB%\x03\x02\x02\x02\u01BC\u01BD\t\x06\x02" +
		"\x02\u01BD\'\x03\x02\x02\x02\u01BE\u01C0\x050\x19\x02\u01BF\u01C1\x05" +
		"*\x16\x02\u01C0\u01BF\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1" +
		"\u01C3\x03\x02\x02\x02\u01C2\u01C4\x056\x1C\x02\u01C3\u01C2\x03\x02\x02" +
		"\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4)\x03\x02\x02\x02\u01C5\u01C7\x07" +
		".\x02\x02\u01C6\u01C8\v\x02\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C8" +
		"\u01C9\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01C9\u01C7\x03\x02" +
		"\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CC\x07/\x02\x02\u01CC+\x03" +
		"\x02\x02\x02\u01CD\u01D5\x07C\x02\x02\u01CE\u01D0\x07.\x02\x02\u01CF\u01D1" +
		"\v\x02\x02\x02\u01D0\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02" +
		"\u01D2\u01D3\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D3\u01D4\x03" +
		"\x02\x02\x02\u01D4\u01D6\x07/\x02\x02\u01D5\u01CE\x03\x02\x02\x02\u01D5" +
		"\u01D6\x03\x02\x02\x02\u01D6\u01DD\x03\x02\x02\x02\u01D7\u01D8\x070\x02" +
		"\x02\u01D8\u01DD\x052\x1A\x02\u01D9\u01DA\x071\x02\x02\u01DA\u01DD\x05" +
		"2\x1A\x02\u01DB\u01DD\x071\x02\x02\u01DC\u01CD\x03\x02\x02\x02\u01DC\u01D7" +
		"\x03\x02\x02\x02\u01DC\u01D9\x03\x02\x02\x02\u01DC\u01DB\x03\x02\x02\x02" +
		"\u01DD-\x03\x02\x02\x02\u01DE\u01DF\x07D\x02\x02\u01DF\u01E0\x07+\x02" +
		"\x02\u01E0\u01E1\x054\x1B\x02\u01E1/\x03\x02\x02\x02\u01E2\u01E3\x07D" +
		"\x02\x02\u01E3\u01E5\x07+\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5" +
		"\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x07D\x02\x02" +
		"\u01E71\x03\x02\x02\x02\u01E8\u01E9\t\x07\x02\x02\u01E93\x03\x02\x02\x02" +
		"\u01EA\u01EF\x07D\x02\x02\u01EB\u01EC\x07\'\x02\x02\u01EC\u01EE\x07D\x02" +
		"\x02\u01ED\u01EB\x03\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01ED" +
		"\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F05\x03\x02\x02\x02\u01F1" +
		"\u01EF\x03\x02\x02\x02\u01F2\u01F3\x05<\x1F\x02\u01F37\x03\x02\x02\x02" +
		"\u01F4\u01F5\x05P)\x02\u01F59\x03\x02\x02\x02\u01F6\u020C\x052\x1A\x02" +
		"\u01F7\u020C\x05@!\x02\u01F8\u01F9\x052\x1A\x02\u01F9\u01FA\x05@!\x02" +
		"\u01FA\u020C\x03\x02\x02\x02\u01FB\u0202\x052\x1A";
	private static readonly _serializedATNSegment1: string =
		"\x02\u01FC\u01FD\x07.\x02\x02\u01FD\u01FE\x07M\x02\x02\u01FE\u0201\x07" +
		"/\x02\x02\u01FF\u0201\x072\x02\x02\u0200\u01FC\x03\x02\x02\x02\u0200\u01FF" +
		"\x03\x02\x02\x02\u0201\u0204\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02" +
		"\u0202\u0203\x03\x02\x02\x02\u0203\u0209\x03\x02\x02\x02\u0204\u0202\x03" +
		"\x02\x02\x02\u0205\u0206\x07.\x02\x02\u0206\u0207\x05@!\x02\u0207\u0208" +
		"\x07/\x02\x02\u0208\u020A\x03\x02\x02\x02\u0209\u0205\x03\x02\x02\x02" +
		"\u0209\u020A\x03\x02\x02\x02\u020A\u020C\x03\x02\x02\x02\u020B\u01F6\x03" +
		"\x02\x02\x02\u020B\u01F7\x03\x02\x02\x02\u020B\u01F8\x03\x02\x02\x02\u020B" +
		"\u01FB\x03\x02\x02\x02\u020C;\x03\x02\x02\x02\u020D\u020E\x073\x02\x02" +
		"\u020E\u0213\x05B\"\x02\u020F\u0210\x07\x05\x02\x02\u0210\u0212\x05B\"" +
		"\x02\u0211\u020F\x03\x02\x02\x02\u0212\u0215\x03\x02\x02\x02\u0213\u0211" +
		"\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0216\x03\x02\x02\x02" +
		"\u0215\u0213\x03\x02\x02\x02\u0216\u0217\x07\x07\x02\x02\u0217\u024C\x03" +
		"\x02\x02\x02\u0218\u0219\x073\x02\x02\u0219\u024C\x07\x07\x02\x02\u021A" +
		"\u021B\x074\x02\x02\u021B\u0220\x05F$\x02\u021C\u021D\x07\x05\x02\x02" +
		"\u021D\u021F\x05F$\x02\u021E\u021C\x03\x02\x02\x02\u021F\u0222\x03\x02" +
		"\x02\x02\u0220\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221" +
		"\u0223\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02\u0223\u0224\x07/\x02" +
		"\x02\u0224\u024C\x03\x02\x02\x02\u0225\u0226\x074\x02\x02\u0226\u024C" +
		"\x07/\x02\x02\u0227\u0228\x075\x02\x02\u0228\u022D\x07F\x02\x02\u0229" +
		"\u022A\x07\x05\x02\x02\u022A\u022C\x07F\x02\x02\u022B\u0229\x03\x02\x02" +
		"\x02\u022C\u022F\x03\x02\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022E" +
		"\x03\x02\x02\x02\u022E\u0230\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02" +
		"\u0230\u024C\x07/\x02\x02\u0231\u0232\x076\x02\x02\u0232\u0237\x07M\x02" +
		"\x02\u0233\u0234\x07\x05\x02\x02\u0234\u0236\x07M\x02\x02\u0235\u0233" +
		"\x03\x02\x02\x02\u0236\u0239\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02" +
		"\u0237\u0238\x03\x02\x02\x02\u0238\u023A\x03\x02\x02\x02\u0239\u0237\x03" +
		"\x02\x02\x02\u023A\u024C\x07/\x02\x02\u023B\u023C\x077\x02\x02\u023C\u0241" +
		"\x07H\x02\x02\u023D\u023E\x07\x05\x02\x02\u023E\u0240\x07H\x02\x02\u023F" +
		"\u023D\x03\x02\x02\x02\u0240\u0243\x03\x02\x02\x02\u0241\u023F\x03\x02" +
		"\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242\u0244\x03\x02\x02\x02\u0243" +
		"\u0241\x03\x02\x02\x02\u0244\u024C\x07/\x02\x02\u0245\u024C\x05N(\x02" +
		"\u0246\u024C\x07F\x02\x02\u0247\u024C\x07G\x02\x02\u0248\u024C\x07H\x02" +
		"\x02\u0249\u024C\x07I\x02\x02\u024A\u024C\x07J\x02\x02\u024B\u020D\x03" +
		"\x02\x02\x02\u024B\u0218\x03\x02\x02\x02\u024B\u021A\x03\x02\x02\x02\u024B" +
		"\u0225\x03\x02\x02\x02\u024B\u0227\x03\x02\x02\x02\u024B\u0231\x03\x02" +
		"\x02\x02\u024B\u023B\x03\x02\x02\x02\u024B\u0245\x03\x02\x02\x02\u024B" +
		"\u0246\x03\x02\x02\x02\u024B\u0247\x03\x02\x02\x02\u024B\u0248\x03\x02" +
		"\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024A\x03\x02\x02\x02\u024C" +
		"=\x03\x02\x02\x02\u024D\u024E\x05F$\x02\u024E?\x03\x02\x02\x02\u024F\u0250" +
		"\x07\x06\x02\x02\u0250\u0255\x05B\"\x02\u0251\u0252\x07\x05\x02\x02\u0252" +
		"\u0254\x05B\"\x02\u0253\u0251\x03\x02\x02\x02\u0254\u0257\x03\x02\x02" +
		"\x02\u0255\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0258" +
		"\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0258\u0259\x07\x07\x02\x02" +
		"\u0259\u025D\x03\x02\x02\x02\u025A\u025B\x07\x06\x02\x02\u025B\u025D\x07" +
		"\x07\x02\x02\u025C\u024F\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025D" +
		"A\x03\x02\x02\x02\u025E\u025F\x052\x1A\x02\u025F\u0260\x07+\x02\x02\u0260" +
		"\u0261\x05F$\x02\u0261C\x03\x02\x02\x02\u0262\u0263\x07.\x02\x02\u0263" +
		"\u0268\x05F$\x02\u0264\u0265\x07\x05\x02\x02\u0265\u0267\x05F$\x02\u0266" +
		"\u0264\x03\x02\x02\x02\u0267\u026A\x03\x02\x02\x02\u0268\u0266\x03\x02" +
		"\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026B\x03\x02\x02\x02\u026A" +
		"\u0268\x03\x02\x02\x02\u026B\u026C\x07/\x02\x02\u026C\u0270\x03\x02\x02" +
		"\x02\u026D\u026E\x07.\x02\x02\u026E\u0270\x07/\x02\x02\u026F\u0262\x03" +
		"\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u0270E\x03\x02\x02\x02\u0271" +
		"\u027D\x05@!\x02\u0272\u027D\x05D#\x02\u0273\u027D\x05H%\x02\u0274\u027D" +
		"\x05J&\x02\u0275\u027D\x05L\'\x02\u0276\u027D\x05N(\x02\u0277\u027D\x07" +
		"F\x02\x02\u0278\u027D\x07G\x02\x02\u0279\u027D\x07H\x02\x02\u027A\u027D" +
		"\x07I\x02\x02\u027B\u027D\x07J\x02\x02\u027C\u0271\x03\x02\x02\x02\u027C" +
		"\u0272\x03\x02\x02\x02\u027C\u0273\x03\x02\x02\x02\u027C\u0274\x03\x02" +
		"\x02\x02\u027C\u0275\x03\x02\x02\x02\u027C\u0276\x03\x02\x02\x02\u027C" +
		"\u0277\x03\x02\x02\x02\u027C\u0278\x03\x02\x02\x02\u027C\u0279\x03\x02" +
		"\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027B\x03\x02\x02\x02\u027D" +
		"G\x03\x02\x02\x02\u027E\u027F\x078\x02\x02\u027F\u0284\x07F\x02\x02\u0280" +
		"\u0281\x07\x05\x02\x02\u0281\u0283\x07F\x02\x02\u0282\u0280\x03\x02\x02" +
		"\x02\u0283\u0286\x03\x02\x02\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0285" +
		"\x03\x02\x02\x02\u0285\u0287\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02" +
		"\u0287\u0288\x07/\x02\x02\u0288I\x03\x02\x02\x02\u0289\u028A\x079\x02" +
		"\x02\u028A\u028F\x07M\x02\x02\u028B\u028C\x07\x05\x02\x02\u028C\u028E" +
		"\x07M\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E\u0291\x03\x02\x02\x02" +
		"\u028F\u028D\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0292\x03" +
		"\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0292\u0293\x07/\x02\x02\u0293" +
		"K\x03\x02\x02\x02\u0294\u0295\x07:\x02\x02\u0295\u029A\x07H\x02\x02\u0296" +
		"\u0297\x07\x05\x02\x02\u0297\u0299\x07H\x02\x02\u0298\u0296\x03\x02\x02" +
		"\x02\u0299\u029C\x03\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029A\u029B" +
		"\x03\x02\x02\x02\u029B\u029D\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02" +
		"\u029D\u029E\x07/\x02\x02\u029EM\x03\x02\x02\x02\u029F\u02A0\t\b\x02\x02" +
		"\u02A0O\x03\x02\x02\x02\u02A1\u02A2\x07;\x02\x02\u02A2\u02A7\x05V,\x02" +
		"\u02A3\u02A4\x07\x05\x02\x02\u02A4\u02A6\x05V,\x02\u02A5\u02A3\x03\x02" +
		"\x02\x02\u02A6\u02A9\x03\x02\x02\x02\u02A7\u02A5\x03\x02\x02\x02\u02A7" +
		"\u02A8\x03\x02\x02\x02\u02A8\u02AA\x03\x02\x02\x02\u02A9\u02A7\x03\x02" +
		"\x02\x02\u02AA\u02AB\x07\x07\x02\x02\u02AB\u02C1\x03\x02\x02\x02\u02AC" +
		"\u02AD\x07;\x02\x02\u02AD\u02C1\x07\x07\x02\x02\u02AE\u02AF\x07<\x02\x02" +
		"\u02AF\u02B4\x05Z.\x02\u02B0\u02B1\x07\x05\x02\x02\u02B1\u02B3\x05Z.\x02" +
		"\u02B2\u02B0\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02\x02\u02B4\u02B2\x03" +
		"\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B7\x03\x02\x02\x02\u02B6" +
		"\u02B4\x03\x02\x02\x02\u02B7\u02B8\x07/\x02\x02\u02B8\u02C1\x03\x02\x02" +
		"\x02\u02B9\u02BA\x07.\x02\x02\u02BA\u02C1\x07/\x02\x02\u02BB\u02C1\x07" +
		"L\x02\x02\u02BC\u02C1\x07M\x02\x02\u02BD\u02C1\x07=\x02\x02\u02BE\u02C1" +
		"\x07>\x02\x02\u02BF\u02C1\x07?\x02\x02\u02C0\u02A1\x03\x02\x02\x02\u02C0" +
		"\u02AC\x03\x02\x02\x02\u02C0\u02AE\x03\x02\x02\x02\u02C0\u02B9\x03\x02" +
		"\x02\x02\u02C0\u02BB\x03\x02\x02\x02\u02C0\u02BC\x03\x02\x02\x02\u02C0" +
		"\u02BD\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C0\u02BF\x03\x02" +
		"\x02\x02\u02C1Q\x03\x02\x02\x02\u02C2\u02C3\x05Z.\x02\u02C3S\x03\x02\x02" +
		"\x02\u02C4\u02C5\x07\x06\x02\x02\u02C5\u02CA\x05V,\x02\u02C6\u02C7\x07" +
		"\x05\x02\x02\u02C7\u02C9\x05V,\x02\u02C8\u02C6\x03\x02\x02\x02\u02C9\u02CC" +
		"\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02" +
		"\u02CB\u02CD\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CD\u02CE\x07" +
		"\x07\x02\x02\u02CE\u02D2\x03\x02\x02\x02\u02CF\u02D0\x07\x06\x02\x02\u02D0" +
		"\u02D2\x07\x07\x02\x02\u02D1\u02C4\x03\x02\x02\x02\u02D1\u02CF\x03\x02" +
		"\x02\x02\u02D2U\x03\x02\x02\x02\u02D3\u02D4\x07L\x02\x02\u02D4\u02D5\x07" +
		"+\x02\x02\u02D5\u02D6\x05Z.\x02\u02D6W\x03\x02\x02\x02\u02D7\u02D8\x07" +
		".\x02\x02\u02D8\u02DD\x05Z.\x02\u02D9\u02DA\x07\x05\x02\x02\u02DA\u02DC" +
		"\x05Z.\x02\u02DB\u02D9\x03\x02\x02\x02\u02DC\u02DF\x03\x02\x02\x02\u02DD" +
		"\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02E0\x03\x02" +
		"\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E1\x07/\x02\x02\u02E1\u02E5" +
		"\x03\x02\x02\x02\u02E2\u02E3\x07.\x02\x02\u02E3\u02E5\x07/\x02\x02\u02E4" +
		"\u02D7\x03\x02\x02\x02\u02E4\u02E2\x03\x02\x02\x02\u02E5Y\x03\x02\x02" +
		"\x02\u02E6\u02EE\x07L\x02\x02\u02E7\u02EE\x07M\x02\x02\u02E8\u02EE\x05" +
		"T+\x02\u02E9\u02EE\x05X-\x02\u02EA\u02EE\x07=\x02\x02\u02EB\u02EE\x07" +
		">\x02\x02\u02EC\u02EE\x07?\x02\x02\u02ED\u02E6\x03\x02\x02\x02\u02ED\u02E7" +
		"\x03\x02\x02\x02\u02ED\u02E8\x03\x02\x02\x02\u02ED\u02E9\x03\x02\x02\x02" +
		"\u02ED\u02EA\x03\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02ED\u02EC\x03" +
		"\x02\x02\x02\u02EE[\x03\x02\x02\x02E_dkquz\x84\x87\x8D\x93\x99\xA0\xA5" +
		"\xAA\xB2\xB6\xBF\xC1\xCC\xCF\xD5\xDC\xE2\xE8\u0110\u0115\u011A\u0128\u0158" +
		"\u018E\u0196\u019D\u01A7\u01C0\u01C3\u01C9\u01D2\u01D5\u01DC\u01E4\u01EF" +
		"\u0200\u0202\u0209\u020B\u0213\u0220\u022D\u0237\u0241\u024B\u0255\u025C" +
		"\u0268\u026F\u027C\u0284\u028F\u029A\u02A7\u02B4\u02C0\u02CA\u02D1\u02DD" +
		"\u02E4\u02ED";
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
	public dataOperationExpression(): DataOperationExpressionContext | undefined {
		return this.tryGetRuleContext(0, DataOperationExpressionContext);
	}
	public scbOperationExpression(): ScbOperationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ScbOperationExpressionContext);
	}
	public execStatement(): ExecStatementContext | undefined {
		return this.tryGetRuleContext(0, ExecStatementContext);
	}
	public LeagalCommand(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.LeagalCommand, 0); }
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
	public funcStatement(): FuncStatementContext | undefined {
		return this.tryGetRuleContext(0, FuncStatementContext);
	}
	public execStatement(): ExecStatementContext | undefined {
		return this.tryGetRuleContext(0, ExecStatementContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_execStatement; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecStatement) {
			listener.enterExecStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecStatement) {
			listener.exitExecStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecStatement) {
			return visitor.visitExecStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecStoreChildContext extends ParserRuleContext {
	public scbIdentifier(): ScbIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ScbIdentifierContext);
	}
	public dataIdentifier(): DataIdentifierContext | undefined {
		return this.tryGetRuleContext(0, DataIdentifierContext);
	}
	public AcceptableName(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.AcceptableName, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_execStoreChild; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecStoreChild) {
			listener.enterExecStoreChild(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecStoreChild) {
			listener.exitExecStoreChild(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecStoreChild) {
			return visitor.visitExecStoreChild(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecRunChildContext extends ParserRuleContext {
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
	public command(): CommandContext | undefined {
		return this.tryGetRuleContext(0, CommandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_execRunChild; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecRunChild) {
			listener.enterExecRunChild(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecRunChild) {
			listener.exitExecRunChild(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecRunChild) {
			return visitor.visitExecRunChild(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecChildContext extends ParserRuleContext {
	public selector(): SelectorContext | undefined {
		return this.tryGetRuleContext(0, SelectorContext);
	}
	public pos3Identifier(): Pos3IdentifierContext[];
	public pos3Identifier(i: number): Pos3IdentifierContext;
	public pos3Identifier(i?: number): Pos3IdentifierContext | Pos3IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pos3IdentifierContext);
		} else {
			return this.getRuleContext(i, Pos3IdentifierContext);
		}
	}
	public pos2Identifier(): Pos2IdentifierContext | undefined {
		return this.tryGetRuleContext(0, Pos2IdentifierContext);
	}
	public scbIdentifier(): ScbIdentifierContext[];
	public scbIdentifier(i: number): ScbIdentifierContext;
	public scbIdentifier(i?: number): ScbIdentifierContext | ScbIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbIdentifierContext);
		} else {
			return this.getRuleContext(i, ScbIdentifierContext);
		}
	}
	public CompareOperation(): TerminalNode | undefined { return this.tryGetToken(JustMCFParser.CompareOperation, 0); }
	public matchPart(): MatchPartContext | undefined {
		return this.tryGetRuleContext(0, MatchPartContext);
	}
	public nameSpace(): NameSpaceContext | undefined {
		return this.tryGetRuleContext(0, NameSpaceContext);
	}
	public blockIdentifier(): BlockIdentifierContext | undefined {
		return this.tryGetRuleContext(0, BlockIdentifierContext);
	}
	public dataIdentifier(): DataIdentifierContext | undefined {
		return this.tryGetRuleContext(0, DataIdentifierContext);
	}
	public execStoreChild(): ExecStoreChildContext | undefined {
		return this.tryGetRuleContext(0, ExecStoreChildContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_execChild; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterExecChild) {
			listener.enterExecChild(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitExecChild) {
			listener.exitExecChild(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitExecChild) {
			return visitor.visitExecChild(this);
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
	public nameSpace(): NameSpaceContext | undefined {
		return this.tryGetRuleContext(0, NameSpaceContext);
	}
	public nbtPath(): NbtPathContext {
		return this.getRuleContext(0, NbtPathContext);
	}
	public selector(): SelectorContext | undefined {
		return this.tryGetRuleContext(0, SelectorContext);
	}
	public pos3Identifier(): Pos3IdentifierContext | undefined {
		return this.tryGetRuleContext(0, Pos3IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JustMCFParser.RULE_dataIdentifier; }
	// @Override
	public enterRule(listener: JustMCFListener): void {
		if (listener.enterDataIdentifier) {
			listener.enterDataIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: JustMCFListener): void {
		if (listener.exitDataIdentifier) {
			listener.exitDataIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JustMCFVisitor<Result>): Result {
		if (visitor.visitDataIdentifier) {
			return visitor.visitDataIdentifier(this);
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
	public scbIdentifier(): ScbIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ScbIdentifierContext);
	}
	public scbSingleOperationExpression(): ScbSingleOperationExpressionContext[];
	public scbSingleOperationExpression(i: number): ScbSingleOperationExpressionContext;
	public scbSingleOperationExpression(i?: number): ScbSingleOperationExpressionContext | ScbSingleOperationExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScbSingleOperationExpressionContext);
		} else {
			return this.getRuleContext(i, ScbSingleOperationExpressionContext);
		}
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


