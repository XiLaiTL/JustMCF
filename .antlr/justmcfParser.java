// Generated from c:\Users\Shen Chengfeng\Desktop\McfunctionSharp\justmcf.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class justmcfParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, T__44=45, 
		T__45=46, T__46=47, T__47=48, T__48=49, T__49=50, T__50=51, T__51=52, 
		LeagalCommandStatement=53, CompareOperation=54, MatchesOperation=55, Selector=56, 
		Type=57, Pair=58, NameSpace=59, NBTName=60, AcceptableName=61, ResourceLocation=62, 
		Pos1=63, ByteNumber=64, ShortNumber=65, LongNumber=66, FloatNumber=67, 
		DoubleNumber=68, STRING2=69, STRING=70, NUMBER=71, WS=72;
	public static final int
		RULE_mcfStatement = 0, RULE_statement = 1, RULE_commandStatement = 2, 
		RULE_execStatement = 3, RULE_execStoreChild = 4, RULE_execRunChild = 5, 
		RULE_execChild = 6, RULE_nameSpace = 7, RULE_dataExpression = 8, RULE_dataOperationExpression = 9, 
		RULE_scbOperationExpression = 10, RULE_scbSingleOperationExpression = 11, 
		RULE_scbExpression = 12, RULE_pos3Expression = 13, RULE_pos2Expression = 14, 
		RULE_pos5Expression = 15, RULE_blockExpression = 16, RULE_blockstate = 17, 
		RULE_selector = 18, RULE_json = 19, RULE_nbt = 20, RULE_pos1 = 21, RULE_nbtPath = 22, 
		RULE_snbt = 23, RULE_nbtCompound = 24, RULE_nbtPair = 25, RULE_nbtList = 26, 
		RULE_nbtValue = 27, RULE_nbtByteArr = 28, RULE_nbtIntArr = 29, RULE_nbtLongArr = 30, 
		RULE_nbtString = 31, RULE_jsonText = 32, RULE_jsonObj = 33, RULE_jsonPair = 34, 
		RULE_jsonArr = 35, RULE_jsonValue = 36;
	private static String[] makeRuleNames() {
		return new String[] {
			"mcfStatement", "statement", "commandStatement", "execStatement", "execStoreChild", 
			"execRunChild", "execChild", "nameSpace", "dataExpression", "dataOperationExpression", 
			"scbOperationExpression", "scbSingleOperationExpression", "scbExpression", 
			"pos3Expression", "pos2Expression", "pos5Expression", "blockExpression", 
			"blockstate", "selector", "json", "nbt", "pos1", "nbtPath", "snbt", "nbtCompound", 
			"nbtPair", "nbtList", "nbtValue", "nbtByteArr", "nbtIntArr", "nbtLongArr", 
			"nbtString", "jsonText", "jsonObj", "jsonPair", "jsonArr", "jsonValue"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'exec'", "'{'", "'}'", "'=>'", "'?=>'", "'*'", "'->'", "'func'", 
			"'tagged'", "','", "'as'", "'at'", "'position'", "'rotated'", "'if'", 
			"'unless'", "'all'", "'masked'", "'::'", "'|='", "'='", "'..'", "'..0'", 
			"'remove'", "'+='", "'-='", "'*='", "'/='", "'%='", "'><'", "'<<'", "'>>'", 
			"'reset'", "':='", "'+'", "'-'", "'/'", "'%'", "'('", "')'", "'['", "']'", 
			"'j'", "'n'", "'[]'", "':'", "'[B;'", "'[I;'", "'[L;'", "'true'", "'false'", 
			"'null'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "LeagalCommandStatement", "CompareOperation", 
			"MatchesOperation", "Selector", "Type", "Pair", "NameSpace", "NBTName", 
			"AcceptableName", "ResourceLocation", "Pos1", "ByteNumber", "ShortNumber", 
			"LongNumber", "FloatNumber", "DoubleNumber", "STRING2", "STRING", "NUMBER", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "justmcf.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public justmcfParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class McfStatementContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public McfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mcfStatement; }
	}

	public final McfStatementContext mcfStatement() throws RecognitionException {
		McfStatementContext _localctx = new McfStatementContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_mcfStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public List<CommandStatementContext> commandStatement() {
			return getRuleContexts(CommandStatementContext.class);
		}
		public CommandStatementContext commandStatement(int i) {
			return getRuleContext(CommandStatementContext.class,i);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << LeagalCommandStatement) | (1L << Selector) | (1L << Pair) | (1L << NameSpace) | (1L << NBTName) | (1L << Pos1))) != 0) || _la==NUMBER) {
				{
				{
				setState(76);
				commandStatement(0);
				}
				}
				setState(81);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommandStatementContext extends ParserRuleContext {
		public ExecStatementContext execStatement() {
			return getRuleContext(ExecStatementContext.class,0);
		}
		public DataOperationExpressionContext dataOperationExpression() {
			return getRuleContext(DataOperationExpressionContext.class,0);
		}
		public ScbOperationExpressionContext scbOperationExpression() {
			return getRuleContext(ScbOperationExpressionContext.class,0);
		}
		public TerminalNode LeagalCommandStatement() { return getToken(justmcfParser.LeagalCommandStatement, 0); }
		public CommandStatementContext commandStatement() {
			return getRuleContext(CommandStatementContext.class,0);
		}
		public List<ExecStoreChildContext> execStoreChild() {
			return getRuleContexts(ExecStoreChildContext.class);
		}
		public ExecStoreChildContext execStoreChild(int i) {
			return getRuleContext(ExecStoreChildContext.class,i);
		}
		public CommandStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commandStatement; }
	}

	public final CommandStatementContext commandStatement() throws RecognitionException {
		return commandStatement(0);
	}

	private CommandStatementContext commandStatement(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		CommandStatementContext _localctx = new CommandStatementContext(_ctx, _parentState);
		CommandStatementContext _prevctx = _localctx;
		int _startState = 4;
		enterRecursionRule(_localctx, 4, RULE_commandStatement, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case T__1:
				{
				setState(83);
				execStatement();
				}
				break;
			case Selector:
			case Pair:
			case NameSpace:
			case Pos1:
			case NUMBER:
				{
				setState(84);
				dataOperationExpression();
				}
				break;
			case NBTName:
				{
				setState(85);
				scbOperationExpression();
				}
				break;
			case LeagalCommandStatement:
				{
				setState(86);
				match(LeagalCommandStatement);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(97);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new CommandStatementContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_commandStatement);
					setState(89);
					if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
					setState(91); 
					_errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							setState(90);
							execStoreChild();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						setState(93); 
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
					} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
					}
					} 
				}
				setState(99);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ExecStatementContext extends ParserRuleContext {
		public ExecRunChildContext execRunChild() {
			return getRuleContext(ExecRunChildContext.class,0);
		}
		public List<ExecStoreChildContext> execStoreChild() {
			return getRuleContexts(ExecStoreChildContext.class);
		}
		public ExecStoreChildContext execStoreChild(int i) {
			return getRuleContext(ExecStoreChildContext.class,i);
		}
		public List<ExecChildContext> execChild() {
			return getRuleContexts(ExecChildContext.class);
		}
		public ExecChildContext execChild(int i) {
			return getRuleContext(ExecChildContext.class,i);
		}
		public ExecStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execStatement; }
	}

	public final ExecStatementContext execStatement() throws RecognitionException {
		ExecStatementContext _localctx = new ExecStatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_execStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(100);
				match(T__0);
				}
			}

			{
			setState(103);
			match(T__1);
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << T__4) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__15))) != 0)) {
				{
				{
				setState(104);
				execChild();
				}
				}
				setState(109);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(110);
			match(T__2);
			}
			setState(115);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(112);
					execStoreChild();
					}
					} 
				}
				setState(117);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			}
			setState(120);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__6:
				{
				setState(118);
				execRunChild();
				}
				break;
			case T__3:
			case T__4:
				{
				setState(119);
				execStoreChild();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(125);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(122);
					execStoreChild();
					}
					} 
				}
				setState(127);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExecStoreChildContext extends ParserRuleContext {
		public ScbExpressionContext scbExpression() {
			return getRuleContext(ScbExpressionContext.class,0);
		}
		public DataExpressionContext dataExpression() {
			return getRuleContext(DataExpressionContext.class,0);
		}
		public TerminalNode Type() { return getToken(justmcfParser.Type, 0); }
		public TerminalNode NUMBER() { return getToken(justmcfParser.NUMBER, 0); }
		public ExecStoreChildContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execStoreChild; }
	}

	public final ExecStoreChildContext execStoreChild() throws RecognitionException {
		ExecStoreChildContext _localctx = new ExecStoreChildContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_execStoreChild);
		int _la;
		try {
			setState(137);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(128);
				_la = _input.LA(1);
				if ( !(_la==T__3 || _la==T__4) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(129);
				scbExpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(130);
				_la = _input.LA(1);
				if ( !(_la==T__3 || _la==T__4) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(131);
				dataExpression();
				setState(135);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
				case 1:
					{
					setState(132);
					match(Type);
					setState(133);
					match(T__5);
					setState(134);
					match(NUMBER);
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExecRunChildContext extends ParserRuleContext {
		public CommandStatementContext commandStatement() {
			return getRuleContext(CommandStatementContext.class,0);
		}
		public List<TerminalNode> ResourceLocation() { return getTokens(justmcfParser.ResourceLocation); }
		public TerminalNode ResourceLocation(int i) {
			return getToken(justmcfParser.ResourceLocation, i);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public ExecRunChildContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execRunChild; }
	}

	public final ExecRunChildContext execRunChild() throws RecognitionException {
		ExecRunChildContext _localctx = new ExecRunChildContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_execRunChild);
		int _la;
		try {
			setState(180);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(139);
				match(T__6);
				setState(155);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__7) {
					{
					setState(140);
					match(T__7);
					setState(142);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==ResourceLocation) {
						{
						setState(141);
						match(ResourceLocation);
						}
					}

					setState(153);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==T__8) {
						{
						setState(144);
						match(T__8);
						setState(145);
						match(ResourceLocation);
						setState(150);
						_errHandler.sync(this);
						_la = _input.LA(1);
						while (_la==T__9) {
							{
							{
							setState(146);
							match(T__9);
							setState(147);
							match(ResourceLocation);
							}
							}
							setState(152);
							_errHandler.sync(this);
							_la = _input.LA(1);
						}
						}
					}

					}
				}

				setState(157);
				commandStatement(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(158);
				match(T__6);
				setState(174);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__7) {
					{
					setState(159);
					match(T__7);
					setState(161);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==ResourceLocation) {
						{
						setState(160);
						match(ResourceLocation);
						}
					}

					setState(172);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==T__8) {
						{
						setState(163);
						match(T__8);
						setState(164);
						match(ResourceLocation);
						setState(169);
						_errHandler.sync(this);
						_la = _input.LA(1);
						while (_la==T__9) {
							{
							{
							setState(165);
							match(T__9);
							setState(166);
							match(ResourceLocation);
							}
							}
							setState(171);
							_errHandler.sync(this);
							_la = _input.LA(1);
						}
						}
					}

					}
				}

				setState(176);
				match(T__1);
				setState(177);
				statement();
				setState(178);
				match(T__2);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExecChildContext extends ParserRuleContext {
		public SelectorContext selector() {
			return getRuleContext(SelectorContext.class,0);
		}
		public List<Pos3ExpressionContext> pos3Expression() {
			return getRuleContexts(Pos3ExpressionContext.class);
		}
		public Pos3ExpressionContext pos3Expression(int i) {
			return getRuleContext(Pos3ExpressionContext.class,i);
		}
		public Pos2ExpressionContext pos2Expression() {
			return getRuleContext(Pos2ExpressionContext.class,0);
		}
		public List<ScbExpressionContext> scbExpression() {
			return getRuleContexts(ScbExpressionContext.class);
		}
		public ScbExpressionContext scbExpression(int i) {
			return getRuleContext(ScbExpressionContext.class,i);
		}
		public TerminalNode CompareOperation() { return getToken(justmcfParser.CompareOperation, 0); }
		public TerminalNode MatchesOperation() { return getToken(justmcfParser.MatchesOperation, 0); }
		public NameSpaceContext nameSpace() {
			return getRuleContext(NameSpaceContext.class,0);
		}
		public BlockExpressionContext blockExpression() {
			return getRuleContext(BlockExpressionContext.class,0);
		}
		public DataExpressionContext dataExpression() {
			return getRuleContext(DataExpressionContext.class,0);
		}
		public ExecStoreChildContext execStoreChild() {
			return getRuleContext(ExecStoreChildContext.class,0);
		}
		public ExecChildContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execChild; }
	}

	public final ExecChildContext execChild() throws RecognitionException {
		ExecChildContext _localctx = new ExecChildContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_execChild);
		int _la;
		try {
			setState(220);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(182);
				match(T__10);
				setState(183);
				selector();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(184);
				match(T__11);
				setState(185);
				selector();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(186);
				match(T__12);
				setState(187);
				pos3Expression();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(188);
				match(T__12);
				setState(189);
				selector();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(190);
				match(T__13);
				setState(191);
				pos2Expression();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(192);
				match(T__13);
				setState(193);
				selector();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(194);
				_la = _input.LA(1);
				if ( !(_la==T__14 || _la==T__15) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(195);
				selector();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(196);
				_la = _input.LA(1);
				if ( !(_la==T__14 || _la==T__15) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(197);
				scbExpression();
				setState(198);
				match(CompareOperation);
				setState(199);
				scbExpression();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(201);
				_la = _input.LA(1);
				if ( !(_la==T__14 || _la==T__15) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(202);
				scbExpression();
				setState(203);
				match(MatchesOperation);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(205);
				_la = _input.LA(1);
				if ( !(_la==T__14 || _la==T__15) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(206);
				nameSpace();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(207);
				_la = _input.LA(1);
				if ( !(_la==T__14 || _la==T__15) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(208);
				pos3Expression();
				setState(209);
				blockExpression();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(211);
				_la = _input.LA(1);
				if ( !(_la==T__14 || _la==T__15) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(212);
				pos3Expression();
				setState(213);
				pos3Expression();
				setState(214);
				pos3Expression();
				setState(215);
				_la = _input.LA(1);
				if ( !(_la==T__16 || _la==T__17) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(217);
				_la = _input.LA(1);
				if ( !(_la==T__14 || _la==T__15) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(218);
				dataExpression();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(219);
				execStoreChild();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NameSpaceContext extends ParserRuleContext {
		public TerminalNode Pair() { return getToken(justmcfParser.Pair, 0); }
		public TerminalNode NameSpace() { return getToken(justmcfParser.NameSpace, 0); }
		public NameSpaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nameSpace; }
	}

	public final NameSpaceContext nameSpace() throws RecognitionException {
		NameSpaceContext _localctx = new NameSpaceContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_nameSpace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(222);
			_la = _input.LA(1);
			if ( !(_la==Pair || _la==NameSpace) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataExpressionContext extends ParserRuleContext {
		public NameSpaceContext nameSpace() {
			return getRuleContext(NameSpaceContext.class,0);
		}
		public NbtPathContext nbtPath() {
			return getRuleContext(NbtPathContext.class,0);
		}
		public SelectorContext selector() {
			return getRuleContext(SelectorContext.class,0);
		}
		public Pos3ExpressionContext pos3Expression() {
			return getRuleContext(Pos3ExpressionContext.class,0);
		}
		public DataExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataExpression; }
	}

	public final DataExpressionContext dataExpression() throws RecognitionException {
		DataExpressionContext _localctx = new DataExpressionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_dataExpression);
		try {
			setState(236);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Pair:
			case NameSpace:
				enterOuterAlt(_localctx, 1);
				{
				setState(224);
				nameSpace();
				setState(225);
				match(T__18);
				setState(226);
				nbtPath();
				}
				break;
			case Selector:
				enterOuterAlt(_localctx, 2);
				{
				setState(228);
				selector();
				setState(229);
				match(T__18);
				setState(230);
				nbtPath();
				}
				break;
			case Pos1:
			case NUMBER:
				enterOuterAlt(_localctx, 3);
				{
				setState(232);
				pos3Expression();
				setState(233);
				match(T__18);
				setState(234);
				nbtPath();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataOperationExpressionContext extends ParserRuleContext {
		public List<DataExpressionContext> dataExpression() {
			return getRuleContexts(DataExpressionContext.class);
		}
		public DataExpressionContext dataExpression(int i) {
			return getRuleContext(DataExpressionContext.class,i);
		}
		public NbtContext nbt() {
			return getRuleContext(NbtContext.class,0);
		}
		public TerminalNode NUMBER() { return getToken(justmcfParser.NUMBER, 0); }
		public DataOperationExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataOperationExpression; }
	}

	public final DataOperationExpressionContext dataOperationExpression() throws RecognitionException {
		DataOperationExpressionContext _localctx = new DataOperationExpressionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_dataOperationExpression);
		try {
			setState(267);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(238);
				dataExpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(239);
				dataExpression();
				setState(240);
				match(T__19);
				setState(241);
				nbt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(243);
				dataExpression();
				setState(244);
				match(T__19);
				setState(245);
				dataExpression();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(247);
				dataExpression();
				setState(248);
				match(T__20);
				setState(249);
				nbt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(251);
				dataExpression();
				setState(252);
				match(T__21);
				setState(253);
				dataExpression();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(255);
				dataExpression();
				setState(256);
				match(T__22);
				setState(257);
				dataExpression();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(259);
				dataExpression();
				setState(260);
				match(T__21);
				setState(261);
				match(NUMBER);
				setState(262);
				dataExpression();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(264);
				dataExpression();
				setState(265);
				match(T__23);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ScbOperationExpressionContext extends ParserRuleContext {
		public List<ScbExpressionContext> scbExpression() {
			return getRuleContexts(ScbExpressionContext.class);
		}
		public ScbExpressionContext scbExpression(int i) {
			return getRuleContext(ScbExpressionContext.class,i);
		}
		public ScbSingleOperationExpressionContext scbSingleOperationExpression() {
			return getRuleContext(ScbSingleOperationExpressionContext.class,0);
		}
		public ScbOperationExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scbOperationExpression; }
	}

	public final ScbOperationExpressionContext scbOperationExpression() throws RecognitionException {
		ScbOperationExpressionContext _localctx = new ScbOperationExpressionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_scbOperationExpression);
		try {
			setState(312);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(269);
				scbExpression();
				setState(270);
				match(T__24);
				setState(271);
				scbExpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(273);
				scbExpression();
				setState(274);
				match(T__25);
				setState(275);
				scbExpression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(277);
				scbExpression();
				setState(278);
				match(T__26);
				setState(279);
				scbExpression();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(281);
				scbExpression();
				setState(282);
				match(T__27);
				setState(283);
				scbExpression();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(285);
				scbExpression();
				setState(286);
				match(T__28);
				setState(287);
				scbExpression();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(289);
				scbExpression();
				setState(290);
				match(T__29);
				setState(291);
				scbExpression();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(293);
				scbExpression();
				setState(294);
				match(T__30);
				setState(295);
				scbExpression();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(297);
				scbExpression();
				setState(298);
				match(T__31);
				setState(299);
				scbExpression();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(301);
				scbExpression();
				setState(302);
				match(T__20);
				setState(303);
				scbExpression();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(305);
				scbExpression();
				setState(306);
				match(T__32);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(308);
				scbExpression();
				setState(309);
				match(T__33);
				setState(310);
				scbSingleOperationExpression(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ScbSingleOperationExpressionContext extends ParserRuleContext {
		public List<ScbSingleOperationExpressionContext> scbSingleOperationExpression() {
			return getRuleContexts(ScbSingleOperationExpressionContext.class);
		}
		public ScbSingleOperationExpressionContext scbSingleOperationExpression(int i) {
			return getRuleContext(ScbSingleOperationExpressionContext.class,i);
		}
		public ScbSingleOperationExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scbSingleOperationExpression; }
	}

	public final ScbSingleOperationExpressionContext scbSingleOperationExpression() throws RecognitionException {
		return scbSingleOperationExpression(0);
	}

	private ScbSingleOperationExpressionContext scbSingleOperationExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ScbSingleOperationExpressionContext _localctx = new ScbSingleOperationExpressionContext(_ctx, _parentState);
		ScbSingleOperationExpressionContext _prevctx = _localctx;
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_scbSingleOperationExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(315);
			match(T__38);
			setState(316);
			scbSingleOperationExpression(0);
			setState(317);
			match(T__39);
			}
			_ctx.stop = _input.LT(-1);
			setState(324);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ScbSingleOperationExpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_scbSingleOperationExpression);
					setState(319);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(320);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__5) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << T__37))) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(321);
					scbSingleOperationExpression(3);
					}
					} 
				}
				setState(326);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ScbExpressionContext extends ParserRuleContext {
		public TerminalNode NBTName() { return getToken(justmcfParser.NBTName, 0); }
		public TerminalNode Selector() { return getToken(justmcfParser.Selector, 0); }
		public ScbExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scbExpression; }
	}

	public final ScbExpressionContext scbExpression() throws RecognitionException {
		ScbExpressionContext _localctx = new ScbExpressionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_scbExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(327);
			match(NBTName);
			setState(328);
			match(Selector);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Pos3ExpressionContext extends ParserRuleContext {
		public List<Pos1Context> pos1() {
			return getRuleContexts(Pos1Context.class);
		}
		public Pos1Context pos1(int i) {
			return getRuleContext(Pos1Context.class,i);
		}
		public Pos3ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pos3Expression; }
	}

	public final Pos3ExpressionContext pos3Expression() throws RecognitionException {
		Pos3ExpressionContext _localctx = new Pos3ExpressionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_pos3Expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(330);
			pos1();
			setState(331);
			pos1();
			setState(332);
			pos1();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Pos2ExpressionContext extends ParserRuleContext {
		public List<Pos1Context> pos1() {
			return getRuleContexts(Pos1Context.class);
		}
		public Pos1Context pos1(int i) {
			return getRuleContext(Pos1Context.class,i);
		}
		public Pos2ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pos2Expression; }
	}

	public final Pos2ExpressionContext pos2Expression() throws RecognitionException {
		Pos2ExpressionContext _localctx = new Pos2ExpressionContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_pos2Expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(334);
			pos1();
			setState(335);
			pos1();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Pos5ExpressionContext extends ParserRuleContext {
		public List<Pos1Context> pos1() {
			return getRuleContexts(Pos1Context.class);
		}
		public Pos1Context pos1(int i) {
			return getRuleContext(Pos1Context.class,i);
		}
		public Pos5ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pos5Expression; }
	}

	public final Pos5ExpressionContext pos5Expression() throws RecognitionException {
		Pos5ExpressionContext _localctx = new Pos5ExpressionContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_pos5Expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
			pos1();
			setState(338);
			pos1();
			setState(339);
			pos1();
			setState(340);
			pos1();
			setState(341);
			pos1();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockExpressionContext extends ParserRuleContext {
		public NameSpaceContext nameSpace() {
			return getRuleContext(NameSpaceContext.class,0);
		}
		public BlockstateContext blockstate() {
			return getRuleContext(BlockstateContext.class,0);
		}
		public NbtContext nbt() {
			return getRuleContext(NbtContext.class,0);
		}
		public BlockExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockExpression; }
	}

	public final BlockExpressionContext blockExpression() throws RecognitionException {
		BlockExpressionContext _localctx = new BlockExpressionContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_blockExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(343);
			nameSpace();
			setState(345);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__40) {
				{
				setState(344);
				blockstate();
				}
			}

			setState(348);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__43) {
				{
				setState(347);
				nbt();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockstateContext extends ParserRuleContext {
		public BlockstateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockstate; }
	}

	public final BlockstateContext blockstate() throws RecognitionException {
		BlockstateContext _localctx = new BlockstateContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_blockstate);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(350);
			match(T__40);
			setState(352); 
			_errHandler.sync(this);
			_alt = 1+1;
			do {
				switch (_alt) {
				case 1+1:
					{
					{
					setState(351);
					matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(354); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			} while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(356);
			match(T__41);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectorContext extends ParserRuleContext {
		public TerminalNode Selector() { return getToken(justmcfParser.Selector, 0); }
		public SelectorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selector; }
	}

	public final SelectorContext selector() throws RecognitionException {
		SelectorContext _localctx = new SelectorContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_selector);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(358);
			match(Selector);
			setState(366);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__40) {
				{
				setState(359);
				match(T__40);
				setState(361); 
				_errHandler.sync(this);
				_alt = 1+1;
				do {
					switch (_alt) {
					case 1+1:
						{
						{
						setState(360);
						matchWildcard();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(363); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
				} while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				setState(365);
				match(T__41);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JsonContext extends ParserRuleContext {
		public JsonTextContext jsonText() {
			return getRuleContext(JsonTextContext.class,0);
		}
		public JsonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_json; }
	}

	public final JsonContext json() throws RecognitionException {
		JsonContext _localctx = new JsonContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_json);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(368);
			match(T__42);
			setState(369);
			jsonText();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NbtContext extends ParserRuleContext {
		public SnbtContext snbt() {
			return getRuleContext(SnbtContext.class,0);
		}
		public NbtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nbt; }
	}

	public final NbtContext nbt() throws RecognitionException {
		NbtContext _localctx = new NbtContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_nbt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(371);
			match(T__43);
			setState(372);
			snbt();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Pos1Context extends ParserRuleContext {
		public TerminalNode Pos1() { return getToken(justmcfParser.Pos1, 0); }
		public TerminalNode NUMBER() { return getToken(justmcfParser.NUMBER, 0); }
		public Pos1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pos1; }
	}

	public final Pos1Context pos1() throws RecognitionException {
		Pos1Context _localctx = new Pos1Context(_ctx, getState());
		enterRule(_localctx, 42, RULE_pos1);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
			_la = _input.LA(1);
			if ( !(_la==Pos1 || _la==NUMBER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NbtPathContext extends ParserRuleContext {
		public TerminalNode NBTName() { return getToken(justmcfParser.NBTName, 0); }
		public NbtCompoundContext nbtCompound() {
			return getRuleContext(NbtCompoundContext.class,0);
		}
		public List<TerminalNode> NUMBER() { return getTokens(justmcfParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(justmcfParser.NUMBER, i);
		}
		public NbtPathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nbtPath; }
	}

	public final NbtPathContext nbtPath() throws RecognitionException {
		NbtPathContext _localctx = new NbtPathContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_nbtPath);
		try {
			int _alt;
			setState(396);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(376);
				match(NBTName);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(377);
				nbtCompound();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(378);
				match(NBTName);
				setState(379);
				nbtCompound();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(380);
				match(NBTName);
				setState(387);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						setState(385);
						_errHandler.sync(this);
						switch (_input.LA(1)) {
						case T__40:
							{
							setState(381);
							match(T__40);
							setState(382);
							match(NUMBER);
							setState(383);
							match(T__41);
							}
							break;
						case T__44:
							{
							setState(384);
							match(T__44);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						} 
					}
					setState(389);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
				}
				setState(394);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
				case 1:
					{
					setState(390);
					match(T__40);
					setState(391);
					nbtCompound();
					setState(392);
					match(T__41);
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SnbtContext extends ParserRuleContext {
		public NbtValueContext nbtValue() {
			return getRuleContext(NbtValueContext.class,0);
		}
		public SnbtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_snbt; }
	}

	public final SnbtContext snbt() throws RecognitionException {
		SnbtContext _localctx = new SnbtContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_snbt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(398);
			nbtValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NbtCompoundContext extends ParserRuleContext {
		public List<NbtPairContext> nbtPair() {
			return getRuleContexts(NbtPairContext.class);
		}
		public NbtPairContext nbtPair(int i) {
			return getRuleContext(NbtPairContext.class,i);
		}
		public NbtCompoundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nbtCompound; }
	}

	public final NbtCompoundContext nbtCompound() throws RecognitionException {
		NbtCompoundContext _localctx = new NbtCompoundContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_nbtCompound);
		int _la;
		try {
			setState(413);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(400);
				match(T__1);
				setState(401);
				nbtPair();
				setState(406);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__9) {
					{
					{
					setState(402);
					match(T__9);
					setState(403);
					nbtPair();
					}
					}
					setState(408);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(409);
				match(T__2);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(411);
				match(T__1);
				setState(412);
				match(T__2);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NbtPairContext extends ParserRuleContext {
		public TerminalNode Pair() { return getToken(justmcfParser.Pair, 0); }
		public TerminalNode NBTName() { return getToken(justmcfParser.NBTName, 0); }
		public NbtValueContext nbtValue() {
			return getRuleContext(NbtValueContext.class,0);
		}
		public NbtPairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nbtPair; }
	}

	public final NbtPairContext nbtPair() throws RecognitionException {
		NbtPairContext _localctx = new NbtPairContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_nbtPair);
		try {
			setState(419);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Pair:
				enterOuterAlt(_localctx, 1);
				{
				setState(415);
				match(Pair);
				}
				break;
			case NBTName:
				enterOuterAlt(_localctx, 2);
				{
				setState(416);
				match(NBTName);
				setState(417);
				match(T__45);
				setState(418);
				nbtValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NbtListContext extends ParserRuleContext {
		public List<NbtValueContext> nbtValue() {
			return getRuleContexts(NbtValueContext.class);
		}
		public NbtValueContext nbtValue(int i) {
			return getRuleContext(NbtValueContext.class,i);
		}
		public NbtListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nbtList; }
	}

	public final NbtListContext nbtList() throws RecognitionException {
		NbtListContext _localctx = new NbtListContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_nbtList);
		int _la;
		try {
			setState(434);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(421);
				match(T__40);
				setState(422);
				nbtValue();
				setState(427);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__9) {
					{
					{
					setState(423);
					match(T__9);
					setState(424);
					nbtValue();
					}
					}
					setState(429);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(430);
				match(T__41);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(432);
				match(T__40);
				setState(433);
				match(T__41);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NbtValueContext extends ParserRuleContext {
		public NbtCompoundContext nbtCompound() {
			return getRuleContext(NbtCompoundContext.class,0);
		}
		public NbtListContext nbtList() {
			return getRuleContext(NbtListContext.class,0);
		}
		public NbtByteArrContext nbtByteArr() {
			return getRuleContext(NbtByteArrContext.class,0);
		}
		public NbtIntArrContext nbtIntArr() {
			return getRuleContext(NbtIntArrContext.class,0);
		}
		public NbtLongArrContext nbtLongArr() {
			return getRuleContext(NbtLongArrContext.class,0);
		}
		public NbtStringContext nbtString() {
			return getRuleContext(NbtStringContext.class,0);
		}
		public TerminalNode ByteNumber() { return getToken(justmcfParser.ByteNumber, 0); }
		public TerminalNode ShortNumber() { return getToken(justmcfParser.ShortNumber, 0); }
		public TerminalNode LongNumber() { return getToken(justmcfParser.LongNumber, 0); }
		public TerminalNode FloatNumber() { return getToken(justmcfParser.FloatNumber, 0); }
		public TerminalNode DoubleNumber() { return getToken(justmcfParser.DoubleNumber, 0); }
		public NbtValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nbtValue; }
	}

	public final NbtValueContext nbtValue() throws RecognitionException {
		NbtValueContext _localctx = new NbtValueContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_nbtValue);
		try {
			setState(447);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				enterOuterAlt(_localctx, 1);
				{
				setState(436);
				nbtCompound();
				}
				break;
			case T__40:
				enterOuterAlt(_localctx, 2);
				{
				setState(437);
				nbtList();
				}
				break;
			case T__46:
				enterOuterAlt(_localctx, 3);
				{
				setState(438);
				nbtByteArr();
				}
				break;
			case T__47:
				enterOuterAlt(_localctx, 4);
				{
				setState(439);
				nbtIntArr();
				}
				break;
			case T__48:
				enterOuterAlt(_localctx, 5);
				{
				setState(440);
				nbtLongArr();
				}
				break;
			case STRING2:
			case STRING:
				enterOuterAlt(_localctx, 6);
				{
				setState(441);
				nbtString();
				}
				break;
			case ByteNumber:
				enterOuterAlt(_localctx, 7);
				{
				setState(442);
				match(ByteNumber);
				}
				break;
			case ShortNumber:
				enterOuterAlt(_localctx, 8);
				{
				setState(443);
				match(ShortNumber);
				}
				break;
			case LongNumber:
				enterOuterAlt(_localctx, 9);
				{
				setState(444);
				match(LongNumber);
				}
				break;
			case FloatNumber:
				enterOuterAlt(_localctx, 10);
				{
				setState(445);
				match(FloatNumber);
				}
				break;
			case DoubleNumber:
				enterOuterAlt(_localctx, 11);
				{
				setState(446);
				match(DoubleNumber);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NbtByteArrContext extends ParserRuleContext {
		public List<TerminalNode> ByteNumber() { return getTokens(justmcfParser.ByteNumber); }
		public TerminalNode ByteNumber(int i) {
			return getToken(justmcfParser.ByteNumber, i);
		}
		public NbtByteArrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nbtByteArr; }
	}

	public final NbtByteArrContext nbtByteArr() throws RecognitionException {
		NbtByteArrContext _localctx = new NbtByteArrContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_nbtByteArr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(449);
			match(T__46);
			setState(450);
			match(ByteNumber);
			setState(455);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__9) {
				{
				{
				setState(451);
				match(T__9);
				setState(452);
				match(ByteNumber);
				}
				}
				setState(457);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(458);
			match(T__41);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NbtIntArrContext extends ParserRuleContext {
		public List<TerminalNode> NUMBER() { return getTokens(justmcfParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(justmcfParser.NUMBER, i);
		}
		public NbtIntArrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nbtIntArr; }
	}

	public final NbtIntArrContext nbtIntArr() throws RecognitionException {
		NbtIntArrContext _localctx = new NbtIntArrContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_nbtIntArr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(460);
			match(T__47);
			setState(461);
			match(NUMBER);
			setState(466);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__9) {
				{
				{
				setState(462);
				match(T__9);
				setState(463);
				match(NUMBER);
				}
				}
				setState(468);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(469);
			match(T__41);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NbtLongArrContext extends ParserRuleContext {
		public List<TerminalNode> LongNumber() { return getTokens(justmcfParser.LongNumber); }
		public TerminalNode LongNumber(int i) {
			return getToken(justmcfParser.LongNumber, i);
		}
		public NbtLongArrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nbtLongArr; }
	}

	public final NbtLongArrContext nbtLongArr() throws RecognitionException {
		NbtLongArrContext _localctx = new NbtLongArrContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_nbtLongArr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(471);
			match(T__48);
			setState(472);
			match(LongNumber);
			setState(477);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__9) {
				{
				{
				setState(473);
				match(T__9);
				setState(474);
				match(LongNumber);
				}
				}
				setState(479);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(480);
			match(T__41);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NbtStringContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(justmcfParser.STRING, 0); }
		public TerminalNode STRING2() { return getToken(justmcfParser.STRING2, 0); }
		public NbtStringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nbtString; }
	}

	public final NbtStringContext nbtString() throws RecognitionException {
		NbtStringContext _localctx = new NbtStringContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_nbtString);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(482);
			_la = _input.LA(1);
			if ( !(_la==STRING2 || _la==STRING) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JsonTextContext extends ParserRuleContext {
		public JsonValueContext jsonValue() {
			return getRuleContext(JsonValueContext.class,0);
		}
		public JsonTextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jsonText; }
	}

	public final JsonTextContext jsonText() throws RecognitionException {
		JsonTextContext _localctx = new JsonTextContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_jsonText);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(484);
			jsonValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JsonObjContext extends ParserRuleContext {
		public List<JsonPairContext> jsonPair() {
			return getRuleContexts(JsonPairContext.class);
		}
		public JsonPairContext jsonPair(int i) {
			return getRuleContext(JsonPairContext.class,i);
		}
		public JsonObjContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jsonObj; }
	}

	public final JsonObjContext jsonObj() throws RecognitionException {
		JsonObjContext _localctx = new JsonObjContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_jsonObj);
		int _la;
		try {
			setState(499);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(486);
				match(T__1);
				setState(487);
				jsonPair();
				setState(492);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__9) {
					{
					{
					setState(488);
					match(T__9);
					setState(489);
					jsonPair();
					}
					}
					setState(494);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(495);
				match(T__2);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(497);
				match(T__1);
				setState(498);
				match(T__2);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JsonPairContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(justmcfParser.STRING, 0); }
		public JsonValueContext jsonValue() {
			return getRuleContext(JsonValueContext.class,0);
		}
		public JsonPairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jsonPair; }
	}

	public final JsonPairContext jsonPair() throws RecognitionException {
		JsonPairContext _localctx = new JsonPairContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_jsonPair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(501);
			match(STRING);
			setState(502);
			match(T__45);
			setState(503);
			jsonValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JsonArrContext extends ParserRuleContext {
		public List<JsonValueContext> jsonValue() {
			return getRuleContexts(JsonValueContext.class);
		}
		public JsonValueContext jsonValue(int i) {
			return getRuleContext(JsonValueContext.class,i);
		}
		public JsonArrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jsonArr; }
	}

	public final JsonArrContext jsonArr() throws RecognitionException {
		JsonArrContext _localctx = new JsonArrContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_jsonArr);
		int _la;
		try {
			setState(518);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,46,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(505);
				match(T__40);
				setState(506);
				jsonValue();
				setState(511);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__9) {
					{
					{
					setState(507);
					match(T__9);
					setState(508);
					jsonValue();
					}
					}
					setState(513);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(514);
				match(T__41);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(516);
				match(T__40);
				setState(517);
				match(T__41);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JsonValueContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(justmcfParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(justmcfParser.NUMBER, 0); }
		public JsonObjContext jsonObj() {
			return getRuleContext(JsonObjContext.class,0);
		}
		public JsonArrContext jsonArr() {
			return getRuleContext(JsonArrContext.class,0);
		}
		public JsonValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jsonValue; }
	}

	public final JsonValueContext jsonValue() throws RecognitionException {
		JsonValueContext _localctx = new JsonValueContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_jsonValue);
		try {
			setState(527);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(520);
				match(STRING);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(521);
				match(NUMBER);
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 3);
				{
				setState(522);
				jsonObj();
				}
				break;
			case T__40:
				enterOuterAlt(_localctx, 4);
				{
				setState(523);
				jsonArr();
				}
				break;
			case T__49:
				enterOuterAlt(_localctx, 5);
				{
				setState(524);
				match(T__49);
				}
				break;
			case T__50:
				enterOuterAlt(_localctx, 6);
				{
				setState(525);
				match(T__50);
				}
				break;
			case T__51:
				enterOuterAlt(_localctx, 7);
				{
				setState(526);
				match(T__51);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 2:
			return commandStatement_sempred((CommandStatementContext)_localctx, predIndex);
		case 11:
			return scbSingleOperationExpression_sempred((ScbSingleOperationExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean commandStatement_sempred(CommandStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 4);
		}
		return true;
	}
	private boolean scbSingleOperationExpression_sempred(ScbSingleOperationExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3J\u0214\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\3\2\3\2\3\3\7\3P\n\3\f\3\16\3S\13"+
		"\3\3\4\3\4\3\4\3\4\3\4\5\4Z\n\4\3\4\3\4\6\4^\n\4\r\4\16\4_\7\4b\n\4\f"+
		"\4\16\4e\13\4\3\5\5\5h\n\5\3\5\3\5\7\5l\n\5\f\5\16\5o\13\5\3\5\3\5\3\5"+
		"\7\5t\n\5\f\5\16\5w\13\5\3\5\3\5\5\5{\n\5\3\5\7\5~\n\5\f\5\16\5\u0081"+
		"\13\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u008a\n\6\5\6\u008c\n\6\3\7\3\7"+
		"\3\7\5\7\u0091\n\7\3\7\3\7\3\7\3\7\7\7\u0097\n\7\f\7\16\7\u009a\13\7\5"+
		"\7\u009c\n\7\5\7\u009e\n\7\3\7\3\7\3\7\3\7\5\7\u00a4\n\7\3\7\3\7\3\7\3"+
		"\7\7\7\u00aa\n\7\f\7\16\7\u00ad\13\7\5\7\u00af\n\7\5\7\u00b1\n\7\3\7\3"+
		"\7\3\7\3\7\5\7\u00b7\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u00df\n\b\3\t\3\t\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u00ef\n\n\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13\u010e\n\13"+
		"\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\5\f\u013b\n\f\3\r\3\r\3\r\3\r\3\r\3\r"+
		"\3\r\3\r\7\r\u0145\n\r\f\r\16\r\u0148\13\r\3\16\3\16\3\16\3\17\3\17\3"+
		"\17\3\17\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\5\22\u015c"+
		"\n\22\3\22\5\22\u015f\n\22\3\23\3\23\6\23\u0163\n\23\r\23\16\23\u0164"+
		"\3\23\3\23\3\24\3\24\3\24\6\24\u016c\n\24\r\24\16\24\u016d\3\24\5\24\u0171"+
		"\n\24\3\25\3\25\3\25\3\26\3\26\3\26\3\27\3\27\3\30\3\30\3\30\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\7\30\u0184\n\30\f\30\16\30\u0187\13\30\3\30\3\30"+
		"\3\30\3\30\5\30\u018d\n\30\5\30\u018f\n\30\3\31\3\31\3\32\3\32\3\32\3"+
		"\32\7\32\u0197\n\32\f\32\16\32\u019a\13\32\3\32\3\32\3\32\3\32\5\32\u01a0"+
		"\n\32\3\33\3\33\3\33\3\33\5\33\u01a6\n\33\3\34\3\34\3\34\3\34\7\34\u01ac"+
		"\n\34\f\34\16\34\u01af\13\34\3\34\3\34\3\34\3\34\5\34\u01b5\n\34\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\5\35\u01c2\n\35\3\36"+
		"\3\36\3\36\3\36\7\36\u01c8\n\36\f\36\16\36\u01cb\13\36\3\36\3\36\3\37"+
		"\3\37\3\37\3\37\7\37\u01d3\n\37\f\37\16\37\u01d6\13\37\3\37\3\37\3 \3"+
		" \3 \3 \7 \u01de\n \f \16 \u01e1\13 \3 \3 \3!\3!\3\"\3\"\3#\3#\3#\3#\7"+
		"#\u01ed\n#\f#\16#\u01f0\13#\3#\3#\3#\3#\5#\u01f6\n#\3$\3$\3$\3$\3%\3%"+
		"\3%\3%\7%\u0200\n%\f%\16%\u0203\13%\3%\3%\3%\3%\5%\u0209\n%\3&\3&\3&\3"+
		"&\3&\3&\3&\5&\u0212\n&\3&\4\u0164\u016d\4\6\30\'\2\4\6\b\n\f\16\20\22"+
		"\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJ\2\t\3\2\6\7\3\2\21\22"+
		"\3\2\23\24\3\2<=\4\2\b\b%(\4\2AAII\3\2GH\2\u024c\2L\3\2\2\2\4Q\3\2\2\2"+
		"\6Y\3\2\2\2\bg\3\2\2\2\n\u008b\3\2\2\2\f\u00b6\3\2\2\2\16\u00de\3\2\2"+
		"\2\20\u00e0\3\2\2\2\22\u00ee\3\2\2\2\24\u010d\3\2\2\2\26\u013a\3\2\2\2"+
		"\30\u013c\3\2\2\2\32\u0149\3\2\2\2\34\u014c\3\2\2\2\36\u0150\3\2\2\2 "+
		"\u0153\3\2\2\2\"\u0159\3\2\2\2$\u0160\3\2\2\2&\u0168\3\2\2\2(\u0172\3"+
		"\2\2\2*\u0175\3\2\2\2,\u0178\3\2\2\2.\u018e\3\2\2\2\60\u0190\3\2\2\2\62"+
		"\u019f\3\2\2\2\64\u01a5\3\2\2\2\66\u01b4\3\2\2\28\u01c1\3\2\2\2:\u01c3"+
		"\3\2\2\2<\u01ce\3\2\2\2>\u01d9\3\2\2\2@\u01e4\3\2\2\2B\u01e6\3\2\2\2D"+
		"\u01f5\3\2\2\2F\u01f7\3\2\2\2H\u0208\3\2\2\2J\u0211\3\2\2\2LM\5\4\3\2"+
		"M\3\3\2\2\2NP\5\6\4\2ON\3\2\2\2PS\3\2\2\2QO\3\2\2\2QR\3\2\2\2R\5\3\2\2"+
		"\2SQ\3\2\2\2TU\b\4\1\2UZ\5\b\5\2VZ\5\24\13\2WZ\5\26\f\2XZ\7\67\2\2YT\3"+
		"\2\2\2YV\3\2\2\2YW\3\2\2\2YX\3\2\2\2Zc\3\2\2\2[]\f\6\2\2\\^\5\n\6\2]\\"+
		"\3\2\2\2^_\3\2\2\2_]\3\2\2\2_`\3\2\2\2`b\3\2\2\2a[\3\2\2\2be\3\2\2\2c"+
		"a\3\2\2\2cd\3\2\2\2d\7\3\2\2\2ec\3\2\2\2fh\7\3\2\2gf\3\2\2\2gh\3\2\2\2"+
		"hi\3\2\2\2im\7\4\2\2jl\5\16\b\2kj\3\2\2\2lo\3\2\2\2mk\3\2\2\2mn\3\2\2"+
		"\2np\3\2\2\2om\3\2\2\2pq\7\5\2\2qu\3\2\2\2rt\5\n\6\2sr\3\2\2\2tw\3\2\2"+
		"\2us\3\2\2\2uv\3\2\2\2vz\3\2\2\2wu\3\2\2\2x{\5\f\7\2y{\5\n\6\2zx\3\2\2"+
		"\2zy\3\2\2\2{\177\3\2\2\2|~\5\n\6\2}|\3\2\2\2~\u0081\3\2\2\2\177}\3\2"+
		"\2\2\177\u0080\3\2\2\2\u0080\t\3\2\2\2\u0081\177\3\2\2\2\u0082\u0083\t"+
		"\2\2\2\u0083\u008c\5\32\16\2\u0084\u0085\t\2\2\2\u0085\u0089\5\22\n\2"+
		"\u0086\u0087\7;\2\2\u0087\u0088\7\b\2\2\u0088\u008a\7I\2\2\u0089\u0086"+
		"\3\2\2\2\u0089\u008a\3\2\2\2\u008a\u008c\3\2\2\2\u008b\u0082\3\2\2\2\u008b"+
		"\u0084\3\2\2\2\u008c\13\3\2\2\2\u008d\u009d\7\t\2\2\u008e\u0090\7\n\2"+
		"\2\u008f\u0091\7@\2\2\u0090\u008f\3\2\2\2\u0090\u0091\3\2\2\2\u0091\u009b"+
		"\3\2\2\2\u0092\u0093\7\13\2\2\u0093\u0098\7@\2\2\u0094\u0095\7\f\2\2\u0095"+
		"\u0097\7@\2\2\u0096\u0094\3\2\2\2\u0097\u009a\3\2\2\2\u0098\u0096\3\2"+
		"\2\2\u0098\u0099\3\2\2\2\u0099\u009c\3\2\2\2\u009a\u0098\3\2\2\2\u009b"+
		"\u0092\3\2\2\2\u009b\u009c\3\2\2\2\u009c\u009e\3\2\2\2\u009d\u008e\3\2"+
		"\2\2\u009d\u009e\3\2\2\2\u009e\u009f\3\2\2\2\u009f\u00b7\5\6\4\2\u00a0"+
		"\u00b0\7\t\2\2\u00a1\u00a3\7\n\2\2\u00a2\u00a4\7@\2\2\u00a3\u00a2\3\2"+
		"\2\2\u00a3\u00a4\3\2\2\2\u00a4\u00ae\3\2\2\2\u00a5\u00a6\7\13\2\2\u00a6"+
		"\u00ab\7@\2\2\u00a7\u00a8\7\f\2\2\u00a8\u00aa\7@\2\2\u00a9\u00a7\3\2\2"+
		"\2\u00aa\u00ad\3\2\2\2\u00ab\u00a9\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00af"+
		"\3\2\2\2\u00ad\u00ab\3\2\2\2\u00ae\u00a5\3\2\2\2\u00ae\u00af\3\2\2\2\u00af"+
		"\u00b1\3\2\2\2\u00b0\u00a1\3\2\2\2\u00b0\u00b1\3\2\2\2\u00b1\u00b2\3\2"+
		"\2\2\u00b2\u00b3\7\4\2\2\u00b3\u00b4\5\4\3\2\u00b4\u00b5\7\5\2\2\u00b5"+
		"\u00b7\3\2\2\2\u00b6\u008d\3\2\2\2\u00b6\u00a0\3\2\2\2\u00b7\r\3\2\2\2"+
		"\u00b8\u00b9\7\r\2\2\u00b9\u00df\5&\24\2\u00ba\u00bb\7\16\2\2\u00bb\u00df"+
		"\5&\24\2\u00bc\u00bd\7\17\2\2\u00bd\u00df\5\34\17\2\u00be\u00bf\7\17\2"+
		"\2\u00bf\u00df\5&\24\2\u00c0\u00c1\7\20\2\2\u00c1\u00df\5\36\20\2\u00c2"+
		"\u00c3\7\20\2\2\u00c3\u00df\5&\24\2\u00c4\u00c5\t\3\2\2\u00c5\u00df\5"+
		"&\24\2\u00c6\u00c7\t\3\2\2\u00c7\u00c8\5\32\16\2\u00c8\u00c9\78\2\2\u00c9"+
		"\u00ca\5\32\16\2\u00ca\u00df\3\2\2\2\u00cb\u00cc\t\3\2\2\u00cc\u00cd\5"+
		"\32\16\2\u00cd\u00ce\79\2\2\u00ce\u00df\3\2\2\2\u00cf\u00d0\t\3\2\2\u00d0"+
		"\u00df\5\20\t\2\u00d1\u00d2\t\3\2\2\u00d2\u00d3\5\34\17\2\u00d3\u00d4"+
		"\5\"\22\2\u00d4\u00df\3\2\2\2\u00d5\u00d6\t\3\2\2\u00d6\u00d7\5\34\17"+
		"\2\u00d7\u00d8\5\34\17\2\u00d8\u00d9\5\34\17\2\u00d9\u00da\t\4\2\2\u00da"+
		"\u00df\3\2\2\2\u00db\u00dc\t\3\2\2\u00dc\u00df\5\22\n\2\u00dd\u00df\5"+
		"\n\6\2\u00de\u00b8\3\2\2\2\u00de\u00ba\3\2\2\2\u00de\u00bc\3\2\2\2\u00de"+
		"\u00be\3\2\2\2\u00de\u00c0\3\2\2\2\u00de\u00c2\3\2\2\2\u00de\u00c4\3\2"+
		"\2\2\u00de\u00c6\3\2\2\2\u00de\u00cb\3\2\2\2\u00de\u00cf\3\2\2\2\u00de"+
		"\u00d1\3\2\2\2\u00de\u00d5\3\2\2\2\u00de\u00db\3\2\2\2\u00de\u00dd\3\2"+
		"\2\2\u00df\17\3\2\2\2\u00e0\u00e1\t\5\2\2\u00e1\21\3\2\2\2\u00e2\u00e3"+
		"\5\20\t\2\u00e3\u00e4\7\25\2\2\u00e4\u00e5\5.\30\2\u00e5\u00ef\3\2\2\2"+
		"\u00e6\u00e7\5&\24\2\u00e7\u00e8\7\25\2\2\u00e8\u00e9\5.\30\2\u00e9\u00ef"+
		"\3\2\2\2\u00ea\u00eb\5\34\17\2\u00eb\u00ec\7\25\2\2\u00ec\u00ed\5.\30"+
		"\2\u00ed\u00ef\3\2\2\2\u00ee\u00e2\3\2\2\2\u00ee\u00e6\3\2\2\2\u00ee\u00ea"+
		"\3\2\2\2\u00ef\23\3\2\2\2\u00f0\u010e\5\22\n\2\u00f1\u00f2\5\22\n\2\u00f2"+
		"\u00f3\7\26\2\2\u00f3\u00f4\5*\26\2\u00f4\u010e\3\2\2\2\u00f5\u00f6\5"+
		"\22\n\2\u00f6\u00f7\7\26\2\2\u00f7\u00f8\5\22\n\2\u00f8\u010e\3\2\2\2"+
		"\u00f9\u00fa\5\22\n\2\u00fa\u00fb\7\27\2\2\u00fb\u00fc\5*\26\2\u00fc\u010e"+
		"\3\2\2\2\u00fd\u00fe\5\22\n\2\u00fe\u00ff\7\30\2\2\u00ff\u0100\5\22\n"+
		"\2\u0100\u010e\3\2\2\2\u0101\u0102\5\22\n\2\u0102\u0103\7\31\2\2\u0103"+
		"\u0104\5\22\n\2\u0104\u010e\3\2\2\2\u0105\u0106\5\22\n\2\u0106\u0107\7"+
		"\30\2\2\u0107\u0108\7I\2\2\u0108\u0109\5\22\n\2\u0109\u010e\3\2\2\2\u010a"+
		"\u010b\5\22\n\2\u010b\u010c\7\32\2\2\u010c\u010e\3\2\2\2\u010d\u00f0\3"+
		"\2\2\2\u010d\u00f1\3\2\2\2\u010d\u00f5\3\2\2\2\u010d\u00f9\3\2\2\2\u010d"+
		"\u00fd\3\2\2\2\u010d\u0101\3\2\2\2\u010d\u0105\3\2\2\2\u010d\u010a\3\2"+
		"\2\2\u010e\25\3\2\2\2\u010f\u0110\5\32\16\2\u0110\u0111\7\33\2\2\u0111"+
		"\u0112\5\32\16\2\u0112\u013b\3\2\2\2\u0113\u0114\5\32\16\2\u0114\u0115"+
		"\7\34\2\2\u0115\u0116\5\32\16\2\u0116\u013b\3\2\2\2\u0117\u0118\5\32\16"+
		"\2\u0118\u0119\7\35\2\2\u0119\u011a\5\32\16\2\u011a\u013b\3\2\2\2\u011b"+
		"\u011c\5\32\16\2\u011c\u011d\7\36\2\2\u011d\u011e\5\32\16\2\u011e\u013b"+
		"\3\2\2\2\u011f\u0120\5\32\16\2\u0120\u0121\7\37\2\2\u0121\u0122\5\32\16"+
		"\2\u0122\u013b\3\2\2\2\u0123\u0124\5\32\16\2\u0124\u0125\7 \2\2\u0125"+
		"\u0126\5\32\16\2\u0126\u013b\3\2\2\2\u0127\u0128\5\32\16\2\u0128\u0129"+
		"\7!\2\2\u0129\u012a\5\32\16\2\u012a\u013b\3\2\2\2\u012b\u012c\5\32\16"+
		"\2\u012c\u012d\7\"\2\2\u012d\u012e\5\32\16\2\u012e\u013b\3\2\2\2\u012f"+
		"\u0130\5\32\16\2\u0130\u0131\7\27\2\2\u0131\u0132\5\32\16\2\u0132\u013b"+
		"\3\2\2\2\u0133\u0134\5\32\16\2\u0134\u0135\7#\2\2\u0135\u013b\3\2\2\2"+
		"\u0136\u0137\5\32\16\2\u0137\u0138\7$\2\2\u0138\u0139\5\30\r\2\u0139\u013b"+
		"\3\2\2\2\u013a\u010f\3\2\2\2\u013a\u0113\3\2\2\2\u013a\u0117\3\2\2\2\u013a"+
		"\u011b\3\2\2\2\u013a\u011f\3\2\2\2\u013a\u0123\3\2\2\2\u013a\u0127\3\2"+
		"\2\2\u013a\u012b\3\2\2\2\u013a\u012f\3\2\2\2\u013a\u0133\3\2\2\2\u013a"+
		"\u0136\3\2\2\2\u013b\27\3\2\2\2\u013c\u013d\b\r\1\2\u013d\u013e\7)\2\2"+
		"\u013e\u013f\5\30\r\2\u013f\u0140\7*\2\2\u0140\u0146\3\2\2\2\u0141\u0142"+
		"\f\4\2\2\u0142\u0143\t\6\2\2\u0143\u0145\5\30\r\5\u0144\u0141\3\2\2\2"+
		"\u0145\u0148\3\2\2\2\u0146\u0144\3\2\2\2\u0146\u0147\3\2\2\2\u0147\31"+
		"\3\2\2\2\u0148\u0146\3\2\2\2\u0149\u014a\7>\2\2\u014a\u014b\7:\2\2\u014b"+
		"\33\3\2\2\2\u014c\u014d\5,\27\2\u014d\u014e\5,\27\2\u014e\u014f\5,\27"+
		"\2\u014f\35\3\2\2\2\u0150\u0151\5,\27\2\u0151\u0152\5,\27\2\u0152\37\3"+
		"\2\2\2\u0153\u0154\5,\27\2\u0154\u0155\5,\27\2\u0155\u0156\5,\27\2\u0156"+
		"\u0157\5,\27\2\u0157\u0158\5,\27\2\u0158!\3\2\2\2\u0159\u015b\5\20\t\2"+
		"\u015a\u015c\5$\23\2\u015b\u015a\3\2\2\2\u015b\u015c\3\2\2\2\u015c\u015e"+
		"\3\2\2\2\u015d\u015f\5*\26\2\u015e\u015d\3\2\2\2\u015e\u015f\3\2\2\2\u015f"+
		"#\3\2\2\2\u0160\u0162\7+\2\2\u0161\u0163\13\2\2\2\u0162\u0161\3\2\2\2"+
		"\u0163\u0164\3\2\2\2\u0164\u0165\3\2\2\2\u0164\u0162\3\2\2\2\u0165\u0166"+
		"\3\2\2\2\u0166\u0167\7,\2\2\u0167%\3\2\2\2\u0168\u0170\7:\2\2\u0169\u016b"+
		"\7+\2\2\u016a\u016c\13\2\2\2\u016b\u016a\3\2\2\2\u016c\u016d\3\2\2\2\u016d"+
		"\u016e\3\2\2\2\u016d\u016b\3\2\2\2\u016e\u016f\3\2\2\2\u016f\u0171\7,"+
		"\2\2\u0170\u0169\3\2\2\2\u0170\u0171\3\2\2\2\u0171\'\3\2\2\2\u0172\u0173"+
		"\7-\2\2\u0173\u0174\5B\"\2\u0174)\3\2\2\2\u0175\u0176\7.\2\2\u0176\u0177"+
		"\5\60\31\2\u0177+\3\2\2\2\u0178\u0179\t\7\2\2\u0179-\3\2\2\2\u017a\u018f"+
		"\7>\2\2\u017b\u018f\5\62\32\2\u017c\u017d\7>\2\2\u017d\u018f\5\62\32\2"+
		"\u017e\u0185\7>\2\2\u017f\u0180\7+\2\2\u0180\u0181\7I\2\2\u0181\u0184"+
		"\7,\2\2\u0182\u0184\7/\2\2\u0183\u017f\3\2\2\2\u0183\u0182\3\2\2\2\u0184"+
		"\u0187\3\2\2\2\u0185\u0183\3\2\2\2\u0185\u0186\3\2\2\2\u0186\u018c\3\2"+
		"\2\2\u0187\u0185\3\2\2\2\u0188\u0189\7+\2\2\u0189\u018a\5\62\32\2\u018a"+
		"\u018b\7,\2\2\u018b\u018d\3\2\2\2\u018c\u0188\3\2\2\2\u018c\u018d\3\2"+
		"\2\2\u018d\u018f\3\2\2\2\u018e\u017a\3\2\2\2\u018e\u017b\3\2\2\2\u018e"+
		"\u017c\3\2\2\2\u018e\u017e\3\2\2\2\u018f/\3\2\2\2\u0190\u0191\58\35\2"+
		"\u0191\61\3\2\2\2\u0192\u0193\7\4\2\2\u0193\u0198\5\64\33\2\u0194\u0195"+
		"\7\f\2\2\u0195\u0197\5\64\33\2\u0196\u0194\3\2\2\2\u0197\u019a\3\2\2\2"+
		"\u0198\u0196\3\2\2\2\u0198\u0199\3\2\2\2\u0199\u019b\3\2\2\2\u019a\u0198"+
		"\3\2\2\2\u019b\u019c\7\5\2\2\u019c\u01a0\3\2\2\2\u019d\u019e\7\4\2\2\u019e"+
		"\u01a0\7\5\2\2\u019f\u0192\3\2\2\2\u019f\u019d\3\2\2\2\u01a0\63\3\2\2"+
		"\2\u01a1\u01a6\7<\2\2\u01a2\u01a3\7>\2\2\u01a3\u01a4\7\60\2\2\u01a4\u01a6"+
		"\58\35\2\u01a5\u01a1\3\2\2\2\u01a5\u01a2\3\2\2\2\u01a6\65\3\2\2\2\u01a7"+
		"\u01a8\7+\2\2\u01a8\u01ad\58\35\2\u01a9\u01aa\7\f\2\2\u01aa\u01ac\58\35"+
		"\2\u01ab\u01a9\3\2\2\2\u01ac\u01af\3\2\2\2\u01ad\u01ab\3\2\2\2\u01ad\u01ae"+
		"\3\2\2\2\u01ae\u01b0\3\2\2\2\u01af\u01ad\3\2\2\2\u01b0\u01b1\7,\2\2\u01b1"+
		"\u01b5\3\2\2\2\u01b2\u01b3\7+\2\2\u01b3\u01b5\7,\2\2\u01b4\u01a7\3\2\2"+
		"\2\u01b4\u01b2\3\2\2\2\u01b5\67\3\2\2\2\u01b6\u01c2\5\62\32\2\u01b7\u01c2"+
		"\5\66\34\2\u01b8\u01c2\5:\36\2\u01b9\u01c2\5<\37\2\u01ba\u01c2\5> \2\u01bb"+
		"\u01c2\5@!\2\u01bc\u01c2\7B\2\2\u01bd\u01c2\7C\2\2\u01be\u01c2\7D\2\2"+
		"\u01bf\u01c2\7E\2\2\u01c0\u01c2\7F\2\2\u01c1\u01b6\3\2\2\2\u01c1\u01b7"+
		"\3\2\2\2\u01c1\u01b8\3\2\2\2\u01c1\u01b9\3\2\2\2\u01c1\u01ba\3\2\2\2\u01c1"+
		"\u01bb\3\2\2\2\u01c1\u01bc\3\2\2\2\u01c1\u01bd\3\2\2\2\u01c1\u01be\3\2"+
		"\2\2\u01c1\u01bf\3\2\2\2\u01c1\u01c0\3\2\2\2\u01c29\3\2\2\2\u01c3\u01c4"+
		"\7\61\2\2\u01c4\u01c9\7B\2\2\u01c5\u01c6\7\f\2\2\u01c6\u01c8\7B\2\2\u01c7"+
		"\u01c5\3\2\2\2\u01c8\u01cb\3\2\2\2\u01c9\u01c7\3\2\2\2\u01c9\u01ca\3\2"+
		"\2\2\u01ca\u01cc\3\2\2\2\u01cb\u01c9\3\2\2\2\u01cc\u01cd\7,\2\2\u01cd"+
		";\3\2\2\2\u01ce\u01cf\7\62\2\2\u01cf\u01d4\7I\2\2\u01d0\u01d1\7\f\2\2"+
		"\u01d1\u01d3\7I\2\2\u01d2\u01d0\3\2\2\2\u01d3\u01d6\3\2\2\2\u01d4\u01d2"+
		"\3\2\2\2\u01d4\u01d5\3\2\2\2\u01d5\u01d7\3\2\2\2\u01d6\u01d4\3\2\2\2\u01d7"+
		"\u01d8\7,\2\2\u01d8=\3\2\2\2\u01d9\u01da\7\63\2\2\u01da\u01df\7D\2\2\u01db"+
		"\u01dc\7\f\2\2\u01dc\u01de\7D\2\2\u01dd\u01db\3\2\2\2\u01de\u01e1\3\2"+
		"\2\2\u01df\u01dd\3\2\2\2\u01df\u01e0\3\2\2\2\u01e0\u01e2\3\2\2\2\u01e1"+
		"\u01df\3\2\2\2\u01e2\u01e3\7,\2\2\u01e3?\3\2\2\2\u01e4\u01e5\t\b\2\2\u01e5"+
		"A\3\2\2\2\u01e6\u01e7\5J&\2\u01e7C\3\2\2\2\u01e8\u01e9\7\4\2\2\u01e9\u01ee"+
		"\5F$\2\u01ea\u01eb\7\f\2\2\u01eb\u01ed\5F$\2\u01ec\u01ea\3\2\2\2\u01ed"+
		"\u01f0\3\2\2\2\u01ee\u01ec\3\2\2\2\u01ee\u01ef\3\2\2\2\u01ef\u01f1\3\2"+
		"\2\2\u01f0\u01ee\3\2\2\2\u01f1\u01f2\7\5\2\2\u01f2\u01f6\3\2\2\2\u01f3"+
		"\u01f4\7\4\2\2\u01f4\u01f6\7\5\2\2\u01f5\u01e8\3\2\2\2\u01f5\u01f3\3\2"+
		"\2\2\u01f6E\3\2\2\2\u01f7\u01f8\7H\2\2\u01f8\u01f9\7\60\2\2\u01f9\u01fa"+
		"\5J&\2\u01faG\3\2\2\2\u01fb\u01fc\7+\2\2\u01fc\u0201\5J&\2\u01fd\u01fe"+
		"\7\f\2\2\u01fe\u0200\5J&\2\u01ff\u01fd\3\2\2\2\u0200\u0203\3\2\2\2\u0201"+
		"\u01ff\3\2\2\2\u0201\u0202\3\2\2\2\u0202\u0204\3\2\2\2\u0203\u0201\3\2"+
		"\2\2\u0204\u0205\7,\2\2\u0205\u0209\3\2\2\2\u0206\u0207\7+\2\2\u0207\u0209"+
		"\7,\2\2\u0208\u01fb\3\2\2\2\u0208\u0206\3\2\2\2\u0209I\3\2\2\2\u020a\u0212"+
		"\7H\2\2\u020b\u0212\7I\2\2\u020c\u0212\5D#\2\u020d\u0212\5H%\2\u020e\u0212"+
		"\7\64\2\2\u020f\u0212\7\65\2\2\u0210\u0212\7\66\2\2\u0211\u020a\3\2\2"+
		"\2\u0211\u020b\3\2\2\2\u0211\u020c\3\2\2\2\u0211\u020d\3\2\2\2\u0211\u020e"+
		"\3\2\2\2\u0211\u020f\3\2\2\2\u0211\u0210\3\2\2\2\u0212K\3\2\2\2\62QY_"+
		"cgmuz\177\u0089\u008b\u0090\u0098\u009b\u009d\u00a3\u00ab\u00ae\u00b0"+
		"\u00b6\u00de\u00ee\u010d\u013a\u0146\u015b\u015e\u0164\u016d\u0170\u0183"+
		"\u0185\u018c\u018e\u0198\u019f\u01a5\u01ad\u01b4\u01c1\u01c9\u01d4\u01df"+
		"\u01ee\u01f5\u0201\u0208\u0211";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}