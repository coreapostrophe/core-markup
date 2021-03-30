// Generated from ./src/antlr/CoreMarkupParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { CoreMarkupParserListener } from "./CoreMarkupParserListener";

export class CoreMarkupParser extends Parser {
	public static readonly OPTION_TAG = 1;
	public static readonly HEADER_TAG = 2;
	public static readonly QUESTION_DETAIL_TAG = 3;
	public static readonly QUESTION_TAG = 4;
	public static readonly DETAIL_TAG = 5;
	public static readonly NEWLINE = 6;
	public static readonly TEXT = 7;
	public static readonly KEY = 8;
	public static readonly VALUE = 9;
	public static readonly WS = 10;
	public static readonly RULE_cmu = 0;
	public static readonly RULE_label = 1;
	public static readonly RULE_header = 2;
	public static readonly RULE_question = 3;
	public static readonly RULE_question_detail = 4;
	public static readonly RULE_detail = 5;
	public static readonly RULE_option = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"cmu", "label", "header", "question", "question_detail", "detail", "option",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPTION_TAG", "HEADER_TAG", "QUESTION_DETAIL_TAG", "QUESTION_TAG", 
		"DETAIL_TAG", "NEWLINE", "TEXT", "KEY", "VALUE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CoreMarkupParser._LITERAL_NAMES, CoreMarkupParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CoreMarkupParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CoreMarkupParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CoreMarkupParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CoreMarkupParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}


	public static readonly STARTING_LEVEL = 1;
	public level = CoreMarkupParser.STARTING_LEVEL;
	public headerLevel = CoreMarkupParser.STARTING_LEVEL;

	public len(token: Token): number {
		return token != null ? token.text.length : CoreMarkupParser.STARTING_LEVEL;
	}

	public reset(): void {
		this.level = CoreMarkupParser.STARTING_LEVEL;
	}

	public bounds(token: Token, offset: number): boolean {
		let length = this.len(token) + offset;
		return length >= CoreMarkupParser.STARTING_LEVEL && length <= this.level;
	}

	public headerBounds(token: Token): boolean {
		let length = this.len(token);
		return length >= CoreMarkupParser.STARTING_LEVEL && length <= this.headerLevel;
	}


	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CoreMarkupParser._ATN, this);
	}
	// @RuleVersion(0)
	public cmu(): CmuContext {
		let _localctx: CmuContext = new CmuContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CoreMarkupParser.RULE_cmu);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 17;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CoreMarkupParser.OPTION_TAG:
					{
					this.state = 14;
					this.option();
					}
					break;
				case CoreMarkupParser.HEADER_TAG:
					{
					this.state = 15;
					this.header();
					}
					break;
				case CoreMarkupParser.QUESTION_TAG:
					{
					this.state = 16;
					this.question();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CoreMarkupParser.OPTION_TAG) | (1 << CoreMarkupParser.HEADER_TAG) | (1 << CoreMarkupParser.QUESTION_TAG))) !== 0));
			this.state = 21;
			this.match(CoreMarkupParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CoreMarkupParser.RULE_label);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 23;
				this.match(CoreMarkupParser.TEXT);
				}
				}
				this.state = 26;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CoreMarkupParser.TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public header(): HeaderContext {
		let _localctx: HeaderContext = new HeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CoreMarkupParser.RULE_header);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			_localctx._h = this.match(CoreMarkupParser.HEADER_TAG);
			this.state = 29;
			if (!(this.headerBounds(_localctx._h))) {
				throw this.createFailedPredicateException("this.headerBounds($h)");
			}
			this.headerLevel++;
			this.state = 31;
			this.label();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public question(): QuestionContext {
		let _localctx: QuestionContext = new QuestionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CoreMarkupParser.RULE_question);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.reset();
			this.state = 34;
			_localctx._t = this.match(CoreMarkupParser.QUESTION_TAG);
			this.state = 35;
			this.label();
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 38;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CoreMarkupParser.QUESTION_DETAIL_TAG:
					{
					this.state = 36;
					this.question_detail();
					}
					break;
				case CoreMarkupParser.DETAIL_TAG:
					{
					this.state = 37;
					this.detail();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CoreMarkupParser.QUESTION_DETAIL_TAG || _la === CoreMarkupParser.DETAIL_TAG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public question_detail(): Question_detailContext {
		let _localctx: Question_detailContext = new Question_detailContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CoreMarkupParser.RULE_question_detail);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			_localctx._qd = this.match(CoreMarkupParser.QUESTION_DETAIL_TAG);
			this.state = 43;
			if (!(this.bounds(_localctx._qd, -1))) {
				throw this.createFailedPredicateException("this.bounds($qd, -1)");
			}
			this.state = 44;
			this.label();
			this.level = this.len(_localctx._qd);
			this.state = 48;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 48;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CoreMarkupParser.QUESTION_DETAIL_TAG:
						{
						this.state = 46;
						this.question_detail();
						}
						break;
					case CoreMarkupParser.DETAIL_TAG:
						{
						this.state = 47;
						this.detail();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 50;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public detail(): DetailContext {
		let _localctx: DetailContext = new DetailContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CoreMarkupParser.RULE_detail);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			_localctx._d = this.match(CoreMarkupParser.DETAIL_TAG);
			this.state = 53;
			if (!(this.bounds(_localctx._d, 0))) {
				throw this.createFailedPredicateException("this.bounds($d, 0)");
			}
			this.state = 54;
			this.label();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public option(): OptionContext {
		let _localctx: OptionContext = new OptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CoreMarkupParser.RULE_option);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(CoreMarkupParser.OPTION_TAG);
			this.state = 57;
			this.match(CoreMarkupParser.KEY);
			this.state = 58;
			this.match(CoreMarkupParser.VALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
			return this.header_sempred(_localctx as HeaderContext, predIndex);

		case 4:
			return this.question_detail_sempred(_localctx as Question_detailContext, predIndex);

		case 5:
			return this.detail_sempred(_localctx as DetailContext, predIndex);
		}
		return true;
	}
	private header_sempred(_localctx: HeaderContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.headerBounds(_localctx._h);
		}
		return true;
	}
	private question_detail_sempred(_localctx: Question_detailContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.bounds(_localctx._qd, -1);
		}
		return true;
	}
	private detail_sempred(_localctx: DetailContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.bounds(_localctx._d, 0);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\f?\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x03\x02\x03\x02\x03\x02\x06\x02\x14\n\x02\r\x02\x0E\x02" +
		"\x15\x03\x02\x03\x02\x03\x03\x06\x03\x1B\n\x03\r\x03\x0E\x03\x1C\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x06\x05)\n\x05\r\x05\x0E\x05*\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x06\x063\n\x06\r\x06\x0E\x064\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x02\x02\x02?\x02\x13\x03\x02\x02\x02\x04\x1A" +
		"\x03\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b#\x03\x02\x02\x02\n,\x03\x02" +
		"\x02\x02\f6\x03\x02\x02\x02\x0E:\x03\x02\x02\x02\x10\x14\x05\x0E\b\x02" +
		"\x11\x14\x05\x06\x04\x02\x12\x14\x05\b\x05\x02\x13\x10\x03\x02\x02\x02" +
		"\x13\x11\x03\x02\x02\x02\x13\x12\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02" +
		"\x15\x13\x03\x02\x02\x02\x15\x16\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02" +
		"\x17\x18\x07\x02\x02\x03\x18\x03\x03\x02\x02\x02\x19\x1B\x07\t\x02\x02" +
		"\x1A\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02" +
		"\x1C\x1D\x03\x02\x02\x02\x1D\x05\x03\x02\x02\x02\x1E\x1F\x07\x04\x02\x02" +
		"\x1F \x06\x04\x02\x03 !\b\x04\x01\x02!\"\x05\x04\x03\x02\"\x07\x03\x02" +
		"\x02\x02#$\b\x05\x01\x02$%\x07\x06\x02\x02%(\x05\x04\x03\x02&)\x05\n\x06" +
		"\x02\')\x05\f\x07\x02(&\x03\x02\x02\x02(\'\x03\x02\x02\x02)*\x03\x02\x02" +
		"\x02*(\x03\x02\x02\x02*+\x03\x02\x02\x02+\t\x03\x02\x02\x02,-\x07\x05" +
		"\x02\x02-.\x06\x06\x03\x03./\x05\x04\x03\x02/2\b\x06\x01\x0203\x05\n\x06" +
		"\x0213\x05\f\x07\x0220\x03\x02\x02\x0221\x03\x02\x02\x0234\x03\x02\x02" +
		"\x0242\x03\x02\x02\x0245\x03\x02\x02\x025\v\x03\x02\x02\x0267\x07\x07" +
		"\x02\x0278\x06\x07\x04\x0389\x05\x04\x03\x029\r\x03\x02\x02\x02:;\x07" +
		"\x03\x02\x02;<\x07\n\x02\x02<=\x07\v\x02\x02=\x0F\x03\x02\x02\x02\t\x13" +
		"\x15\x1C(*24";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CoreMarkupParser.__ATN) {
			CoreMarkupParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CoreMarkupParser._serializedATN));
		}

		return CoreMarkupParser.__ATN;
	}

}

export class CmuContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CoreMarkupParser.EOF, 0); }
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	public header(): HeaderContext[];
	public header(i: number): HeaderContext;
	public header(i?: number): HeaderContext | HeaderContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HeaderContext);
		} else {
			return this.getRuleContext(i, HeaderContext);
		}
	}
	public question(): QuestionContext[];
	public question(i: number): QuestionContext;
	public question(i?: number): QuestionContext | QuestionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QuestionContext);
		} else {
			return this.getRuleContext(i, QuestionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CoreMarkupParser.RULE_cmu; }
	// @Override
	public enterRule(listener: CoreMarkupParserListener): void {
		if (listener.enterCmu) {
			listener.enterCmu(this);
		}
	}
	// @Override
	public exitRule(listener: CoreMarkupParserListener): void {
		if (listener.exitCmu) {
			listener.exitCmu(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CoreMarkupParser.TEXT);
		} else {
			return this.getToken(CoreMarkupParser.TEXT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CoreMarkupParser.RULE_label; }
	// @Override
	public enterRule(listener: CoreMarkupParserListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: CoreMarkupParserListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	public _h!: Token;
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	public HEADER_TAG(): TerminalNode { return this.getToken(CoreMarkupParser.HEADER_TAG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CoreMarkupParser.RULE_header; }
	// @Override
	public enterRule(listener: CoreMarkupParserListener): void {
		if (listener.enterHeader) {
			listener.enterHeader(this);
		}
	}
	// @Override
	public exitRule(listener: CoreMarkupParserListener): void {
		if (listener.exitHeader) {
			listener.exitHeader(this);
		}
	}
}


export class QuestionContext extends ParserRuleContext {
	public _t!: Token;
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	public QUESTION_TAG(): TerminalNode { return this.getToken(CoreMarkupParser.QUESTION_TAG, 0); }
	public question_detail(): Question_detailContext[];
	public question_detail(i: number): Question_detailContext;
	public question_detail(i?: number): Question_detailContext | Question_detailContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Question_detailContext);
		} else {
			return this.getRuleContext(i, Question_detailContext);
		}
	}
	public detail(): DetailContext[];
	public detail(i: number): DetailContext;
	public detail(i?: number): DetailContext | DetailContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DetailContext);
		} else {
			return this.getRuleContext(i, DetailContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CoreMarkupParser.RULE_question; }
	// @Override
	public enterRule(listener: CoreMarkupParserListener): void {
		if (listener.enterQuestion) {
			listener.enterQuestion(this);
		}
	}
	// @Override
	public exitRule(listener: CoreMarkupParserListener): void {
		if (listener.exitQuestion) {
			listener.exitQuestion(this);
		}
	}
}


export class Question_detailContext extends ParserRuleContext {
	public _qd!: Token;
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	public QUESTION_DETAIL_TAG(): TerminalNode { return this.getToken(CoreMarkupParser.QUESTION_DETAIL_TAG, 0); }
	public question_detail(): Question_detailContext[];
	public question_detail(i: number): Question_detailContext;
	public question_detail(i?: number): Question_detailContext | Question_detailContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Question_detailContext);
		} else {
			return this.getRuleContext(i, Question_detailContext);
		}
	}
	public detail(): DetailContext[];
	public detail(i: number): DetailContext;
	public detail(i?: number): DetailContext | DetailContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DetailContext);
		} else {
			return this.getRuleContext(i, DetailContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CoreMarkupParser.RULE_question_detail; }
	// @Override
	public enterRule(listener: CoreMarkupParserListener): void {
		if (listener.enterQuestion_detail) {
			listener.enterQuestion_detail(this);
		}
	}
	// @Override
	public exitRule(listener: CoreMarkupParserListener): void {
		if (listener.exitQuestion_detail) {
			listener.exitQuestion_detail(this);
		}
	}
}


export class DetailContext extends ParserRuleContext {
	public _d!: Token;
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	public DETAIL_TAG(): TerminalNode { return this.getToken(CoreMarkupParser.DETAIL_TAG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CoreMarkupParser.RULE_detail; }
	// @Override
	public enterRule(listener: CoreMarkupParserListener): void {
		if (listener.enterDetail) {
			listener.enterDetail(this);
		}
	}
	// @Override
	public exitRule(listener: CoreMarkupParserListener): void {
		if (listener.exitDetail) {
			listener.exitDetail(this);
		}
	}
}


export class OptionContext extends ParserRuleContext {
	public OPTION_TAG(): TerminalNode { return this.getToken(CoreMarkupParser.OPTION_TAG, 0); }
	public KEY(): TerminalNode { return this.getToken(CoreMarkupParser.KEY, 0); }
	public VALUE(): TerminalNode { return this.getToken(CoreMarkupParser.VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CoreMarkupParser.RULE_option; }
	// @Override
	public enterRule(listener: CoreMarkupParserListener): void {
		if (listener.enterOption) {
			listener.enterOption(this);
		}
	}
	// @Override
	public exitRule(listener: CoreMarkupParserListener): void {
		if (listener.exitOption) {
			listener.exitOption(this);
		}
	}
}


