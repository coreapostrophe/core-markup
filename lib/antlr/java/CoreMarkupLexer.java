// Generated from CoreMarkupLexer.g4 by ANTLR 4.9.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CoreMarkupLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		OPTION_TAG=1, HEADER_TAG=2, QUESTION_DETAIL_TAG=3, QUESTION_TAG=4, DETAIL_TAG=5, 
		NEWLINE=6, TEXT=7, KEY=8, VALUE=9, WS=10;
	public static final int
		CONTENT=1, OPTION=2;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "CONTENT", "OPTION"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"SYM_HEADER", "SYM_QUESTION", "SYM_ENUM_QUESTION", "SYM_DETAIL", "SYM_OPTION", 
			"OPTION_TAG", "HEADER_TAG", "QUESTION_DETAIL_TAG", "QUESTION_TAG", "DETAIL_TAG", 
			"NEWLINE", "TEXT", "KEY", "VALUE", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "OPTION_TAG", "HEADER_TAG", "QUESTION_DETAIL_TAG", "QUESTION_TAG", 
			"DETAIL_TAG", "NEWLINE", "TEXT", "KEY", "VALUE", "WS"
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


	public CoreMarkupLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CoreMarkupLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\fz\b\1\b\1\b\1\4"+
		"\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n"+
		"\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\3\3\3"+
		"\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\7\3\7\3\b\6\b\63\n\b\r\b\16\b\64"+
		"\3\b\3\b\3\t\6\t:\n\t\r\t\16\t;\3\t\3\t\5\t@\n\t\3\t\3\t\3\n\3\n\5\nF"+
		"\n\n\3\n\3\n\3\13\6\13K\n\13\r\13\16\13L\3\13\3\13\3\f\5\fR\n\f\3\f\3"+
		"\f\5\fV\n\f\3\f\3\f\3\r\6\r[\n\r\r\r\16\r\\\3\r\3\r\3\16\6\16b\n\16\r"+
		"\16\16\16c\3\17\3\17\3\17\3\17\3\17\7\17k\n\17\f\17\16\17n\13\17\3\17"+
		"\3\17\3\17\3\17\3\20\6\20u\n\20\r\20\16\20v\3\20\3\20\2\2\21\5\2\7\2\t"+
		"\2\13\2\r\2\17\3\21\4\23\5\25\6\27\7\31\b\33\t\35\n\37\13!\f\5\2\3\4\6"+
		"\4\2\f\f\17\17\4\2C\\c|\5\2\f\f\17\17$$\4\2\13\13\"\"\2~\2\17\3\2\2\2"+
		"\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\3\33"+
		"\3\2\2\2\4\35\3\2\2\2\4\37\3\2\2\2\4!\3\2\2\2\5#\3\2\2\2\7%\3\2\2\2\t"+
		"\'\3\2\2\2\13)\3\2\2\2\r+\3\2\2\2\17-\3\2\2\2\21\62\3\2\2\2\239\3\2\2"+
		"\2\25E\3\2\2\2\27J\3\2\2\2\31U\3\2\2\2\33Z\3\2\2\2\35a\3\2\2\2\37e\3\2"+
		"\2\2!t\3\2\2\2#$\7%\2\2$\6\3\2\2\2%&\7,\2\2&\b\3\2\2\2\'(\7&\2\2(\n\3"+
		"\2\2\2)*\7/\2\2*\f\3\2\2\2+,\7=\2\2,\16\3\2\2\2-.\5\r\6\2./\3\2\2\2/\60"+
		"\b\7\2\2\60\20\3\2\2\2\61\63\5\5\2\2\62\61\3\2\2\2\63\64\3\2\2\2\64\62"+
		"\3\2\2\2\64\65\3\2\2\2\65\66\3\2\2\2\66\67\b\b\3\2\67\22\3\2\2\28:\5\13"+
		"\5\298\3\2\2\2:;\3\2\2\2;9\3\2\2\2;<\3\2\2\2<?\3\2\2\2=@\5\7\3\2>@\5\t"+
		"\4\2?=\3\2\2\2?>\3\2\2\2@A\3\2\2\2AB\b\t\3\2B\24\3\2\2\2CF\5\7\3\2DF\5"+
		"\t\4\2EC\3\2\2\2ED\3\2\2\2FG\3\2\2\2GH\b\n\3\2H\26\3\2\2\2IK\5\13\5\2"+
		"JI\3\2\2\2KL\3\2\2\2LJ\3\2\2\2LM\3\2\2\2MN\3\2\2\2NO\b\13\3\2O\30\3\2"+
		"\2\2PR\7\17\2\2QP\3\2\2\2QR\3\2\2\2RS\3\2\2\2SV\7\f\2\2TV\7\17\2\2UQ\3"+
		"\2\2\2UT\3\2\2\2VW\3\2\2\2WX\b\f\4\2X\32\3\2\2\2Y[\n\2\2\2ZY\3\2\2\2["+
		"\\\3\2\2\2\\Z\3\2\2\2\\]\3\2\2\2]^\3\2\2\2^_\b\r\5\2_\34\3\2\2\2`b\t\3"+
		"\2\2a`\3\2\2\2bc\3\2\2\2ca\3\2\2\2cd\3\2\2\2d\36\3\2\2\2el\7$\2\2fg\7"+
		"^\2\2gh\7^\2\2hk\7$\2\2ik\n\4\2\2jf\3\2\2\2ji\3\2\2\2kn\3\2\2\2lj\3\2"+
		"\2\2lm\3\2\2\2mo\3\2\2\2nl\3\2\2\2op\7$\2\2pq\3\2\2\2qr\b\17\5\2r \3\2"+
		"\2\2su\t\5\2\2ts\3\2\2\2uv\3\2\2\2vt\3\2\2\2vw\3\2\2\2wx\3\2\2\2xy\b\20"+
		"\4\2y\"\3\2\2\2\21\2\3\4\64;?ELQU\\cjlv\6\7\4\2\7\3\2\b\2\2\6\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}