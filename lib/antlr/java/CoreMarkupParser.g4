parser grammar CoreMarkupParser;

options {
    tokenVocab=CoreMarkupLexer;
}

@members {

final int STARTING_LEVEL = 1;
int level = STARTING_LEVEL;
int headerLevel = STARTING_LEVEL;

public int len(Token token) {
    return token != null ? token.getText().length() : this.STARTING_LEVEL;
}

public void reset() {
    this.level = this.STARTING_LEVEL;
}

public boolean bounds(Token token, int offset) {
    int length = len(token) + offset;
    return length >= this.STARTING_LEVEL && length <= this.level;
}

public boolean headerBounds(Token token) {
    int length = len(token);
    return length >= this.STARTING_LEVEL && length <= this.headerLevel;
}

}

/*
 *	Parser Rules
 */
cmu                         : (option | header | question)+ EOF;
label                       : TEXT+;
header                      : h=HEADER_TAG {headerBounds($h)}? {headerLevel++;} label;

question                    : {reset();} t=QUESTION_TAG label (question_detail | detail)+;
question_detail             : qd=QUESTION_DETAIL_TAG {bounds($qd, -1)}? label {level = len($qd);} (question_detail | detail)+;
detail                      : d=DETAIL_TAG {bounds($d, 0)}? label;

option                      : OPTION_TAG KEY VALUE;