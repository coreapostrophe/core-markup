parser grammar CoreMarkupParser;

options {
    tokenVocab=CoreMarkupLexer;
}

@members {

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

}

/*
 *	Parser Rules
 */
cmu                         : (option | header | question)+ EOF;
label                       : TEXT+;
header                      : h=HEADER_TAG {this.headerBounds($h)}? {this.headerLevel++;} label;

question                    : {this.reset();} t=QUESTION_TAG label (question_detail | detail)+;
question_detail             : qd=QUESTION_DETAIL_TAG {this.bounds($qd, -1)}? label {this.level = this.len($qd);} (question_detail | detail)+;
detail                      : d=DETAIL_TAG {this.bounds($d, 0)}? label;

option                      : OPTION_TAG KEY VALUE;