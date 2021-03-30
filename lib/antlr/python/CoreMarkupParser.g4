parser grammar CoreMarkupParser;

options {
    tokenVocab=CoreMarkupLexer;
    language=Python3;
}

@members {

STARTING_LEVEL = 1
level = STARTING_LEVEL
header_level = STARTING_LEVEL

def get_length(self, token):
    if token.text is not None:
        return len(token.text)
    else:
        return CoreMarkupParser.STARTING_LEVEL

def reset(self):
    CoreMarkupParser.level = CoreMarkupParser.STARTING_LEVEL

def bounds(self, token, offset):
    length = self.get_length(token) + offset
    return length >= CoreMarkupParser.STARTING_LEVEL and length <= CoreMarkupParser.level

def header_bounds(self, token):
    length = self.get_length(token)
    return length >= CoreMarkupParser.STARTING_LEVEL and length <= CoreMarkupParser.header_level

}

/*
 *	Parser Rules
 */
cmu                         : (option | header | question)+ EOF;
label                       : TEXT+;
header                      : h=HEADER_TAG {self.header_bounds($h)}? {CoreMarkupParser.header_level += 1} label;

question                    : {self.reset()} t=QUESTION_TAG label (question_detail | detail)+;
question_detail             : qd=QUESTION_DETAIL_TAG {self.bounds($qd, -1)}? label {CoreMarkupParser.level = self.get_length($qd)} (question_detail | detail)+;
detail                      : d=DETAIL_TAG {self.bounds($d, 0)}? label;

option                      : OPTION_TAG KEY VALUE;