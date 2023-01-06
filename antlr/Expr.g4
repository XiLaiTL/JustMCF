grammar Expr;

prog
    : stat+ ;

stat
    : exprStat
    | assignStat
    ;

exprStat
    : expr SEMI
    ;

assignStat
    : ID EQ expr SEMI
    ;

expr
    : expr op = (MUL | DIV ) expr   # MulDivExpr
    | expr op = ( ADD | SUB ) expr   # AddSubExpr
    | INT                       # IntExpr
    | ID                        # IdExpr
    | LPAREN expr RPAREN        # ParenExpr
    ;

MUL     : '*' ;
DIV     : '/' ;
ADD     : '+' ;
SUB     : '-' ;
LPAREN  : '(' ;
RPAREN  : ')' ;

ID      : LETTER (LETTER | DIGIT)*  ;
INT     : [0-9]+ ;
EQ      : '=' ;
SEMI    : ';' ;
COMMENT : '//' ~[\r\n]* '\r'? '\n'? -> channel(HIDDEN);
WS      : [ \r\n\t]+ -> channel(HIDDEN);

fragment
LETTER  : [a-zA-Z] ;
fragment
DIGIT   : [0-9] ;