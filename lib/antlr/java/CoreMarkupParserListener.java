// Generated from CoreMarkupParser.g4 by ANTLR 4.9.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CoreMarkupParser}.
 */
public interface CoreMarkupParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CoreMarkupParser#cmu}.
	 * @param ctx the parse tree
	 */
	void enterCmu(CoreMarkupParser.CmuContext ctx);
	/**
	 * Exit a parse tree produced by {@link CoreMarkupParser#cmu}.
	 * @param ctx the parse tree
	 */
	void exitCmu(CoreMarkupParser.CmuContext ctx);
	/**
	 * Enter a parse tree produced by {@link CoreMarkupParser#label}.
	 * @param ctx the parse tree
	 */
	void enterLabel(CoreMarkupParser.LabelContext ctx);
	/**
	 * Exit a parse tree produced by {@link CoreMarkupParser#label}.
	 * @param ctx the parse tree
	 */
	void exitLabel(CoreMarkupParser.LabelContext ctx);
	/**
	 * Enter a parse tree produced by {@link CoreMarkupParser#header}.
	 * @param ctx the parse tree
	 */
	void enterHeader(CoreMarkupParser.HeaderContext ctx);
	/**
	 * Exit a parse tree produced by {@link CoreMarkupParser#header}.
	 * @param ctx the parse tree
	 */
	void exitHeader(CoreMarkupParser.HeaderContext ctx);
	/**
	 * Enter a parse tree produced by {@link CoreMarkupParser#question}.
	 * @param ctx the parse tree
	 */
	void enterQuestion(CoreMarkupParser.QuestionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CoreMarkupParser#question}.
	 * @param ctx the parse tree
	 */
	void exitQuestion(CoreMarkupParser.QuestionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CoreMarkupParser#question_detail}.
	 * @param ctx the parse tree
	 */
	void enterQuestion_detail(CoreMarkupParser.Question_detailContext ctx);
	/**
	 * Exit a parse tree produced by {@link CoreMarkupParser#question_detail}.
	 * @param ctx the parse tree
	 */
	void exitQuestion_detail(CoreMarkupParser.Question_detailContext ctx);
	/**
	 * Enter a parse tree produced by {@link CoreMarkupParser#detail}.
	 * @param ctx the parse tree
	 */
	void enterDetail(CoreMarkupParser.DetailContext ctx);
	/**
	 * Exit a parse tree produced by {@link CoreMarkupParser#detail}.
	 * @param ctx the parse tree
	 */
	void exitDetail(CoreMarkupParser.DetailContext ctx);
	/**
	 * Enter a parse tree produced by {@link CoreMarkupParser#option}.
	 * @param ctx the parse tree
	 */
	void enterOption(CoreMarkupParser.OptionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CoreMarkupParser#option}.
	 * @param ctx the parse tree
	 */
	void exitOption(CoreMarkupParser.OptionContext ctx);
}