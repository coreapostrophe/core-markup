lexer grammar CoreMarkupLexer;

/*
 *	Lexer Rules
 */
fragment SYM_HEADER         : '#';
fragment SYM_QUESTION       : '*';
fragment SYM_ENUM_QUESTION  : '$';
fragment SYM_DETAIL         : '-';
fragment SYM_OPTION         : ';';

OPTION_TAG                  : SYM_OPTION -> pushMode(OPTION);
HEADER_TAG                  : SYM_HEADER+ -> pushMode(CONTENT);
QUESTION_DETAIL_TAG         : SYM_DETAIL+ (SYM_QUESTION | SYM_ENUM_QUESTION) -> pushMode(CONTENT);
QUESTION_TAG                : (SYM_QUESTION | SYM_ENUM_QUESTION) -> pushMode(CONTENT);
DETAIL_TAG                  : SYM_DETAIL+ -> pushMode(CONTENT);
NEWLINE                     : ('\r'? '\n' | '\r') -> skip;

mode CONTENT;

TEXT                        : ~[\r\n]+ -> popMode;

mode OPTION;

KEY                         : [A-Za-z]+;
VALUE                       : '"' ( '\\\\"' | ~["\r\n] )* '"' -> popMode;
WS                          : (' ' | '\t')+ -> skip;