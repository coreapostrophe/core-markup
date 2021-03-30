// Generated from ./src/antlr/CoreMarkupParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CmuContext } from "./CoreMarkupParser";
import { LabelContext } from "./CoreMarkupParser";
import { HeaderContext } from "./CoreMarkupParser";
import { QuestionContext } from "./CoreMarkupParser";
import { Question_detailContext } from "./CoreMarkupParser";
import { DetailContext } from "./CoreMarkupParser";
import { OptionContext } from "./CoreMarkupParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CoreMarkupParser`.
 */
export interface CoreMarkupParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CoreMarkupParser.cmu`.
	 * @param ctx the parse tree
	 */
	enterCmu?: (ctx: CmuContext) => void;
	/**
	 * Exit a parse tree produced by `CoreMarkupParser.cmu`.
	 * @param ctx the parse tree
	 */
	exitCmu?: (ctx: CmuContext) => void;

	/**
	 * Enter a parse tree produced by `CoreMarkupParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `CoreMarkupParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `CoreMarkupParser.header`.
	 * @param ctx the parse tree
	 */
	enterHeader?: (ctx: HeaderContext) => void;
	/**
	 * Exit a parse tree produced by `CoreMarkupParser.header`.
	 * @param ctx the parse tree
	 */
	exitHeader?: (ctx: HeaderContext) => void;

	/**
	 * Enter a parse tree produced by `CoreMarkupParser.question`.
	 * @param ctx the parse tree
	 */
	enterQuestion?: (ctx: QuestionContext) => void;
	/**
	 * Exit a parse tree produced by `CoreMarkupParser.question`.
	 * @param ctx the parse tree
	 */
	exitQuestion?: (ctx: QuestionContext) => void;

	/**
	 * Enter a parse tree produced by `CoreMarkupParser.question_detail`.
	 * @param ctx the parse tree
	 */
	enterQuestion_detail?: (ctx: Question_detailContext) => void;
	/**
	 * Exit a parse tree produced by `CoreMarkupParser.question_detail`.
	 * @param ctx the parse tree
	 */
	exitQuestion_detail?: (ctx: Question_detailContext) => void;

	/**
	 * Enter a parse tree produced by `CoreMarkupParser.detail`.
	 * @param ctx the parse tree
	 */
	enterDetail?: (ctx: DetailContext) => void;
	/**
	 * Exit a parse tree produced by `CoreMarkupParser.detail`.
	 * @param ctx the parse tree
	 */
	exitDetail?: (ctx: DetailContext) => void;

	/**
	 * Enter a parse tree produced by `CoreMarkupParser.option`.
	 * @param ctx the parse tree
	 */
	enterOption?: (ctx: OptionContext) => void;
	/**
	 * Exit a parse tree produced by `CoreMarkupParser.option`.
	 * @param ctx the parse tree
	 */
	exitOption?: (ctx: OptionContext) => void;
}

