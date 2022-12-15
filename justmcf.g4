grammar justmcf;

mcfStatement: statement;
statement: commandStatement*;
commandStatement
    : execStatement
    | commandStatement execStoreChild+
    | dataOperationExpression
    | scbOperationExpression
    | funcStatement
    | LeagalCommandStatement
    ;
LeagalCommandStatement
    :'\nadvancement ' ~[\r\n]*
    |'\nalwaysday ' ~[\r\n]*
    |'\nattribute ' ~[\r\n]*
    |'\nban ' ~[\r\n]*
    |'\nban-ip ' ~[\r\n]*
    |'\nbanlist ' ~[\r\n]*
    |'\nbossbar ' ~[\r\n]*
    |'\ncamerashake ' ~[\r\n]*
    |'\nchangesetting ' ~[\r\n]*
    |'\nclear ' ~[\r\n]*
    |'\nclearspawnpoint ' ~[\r\n]*
    |'\nclone ' ~[\r\n]*
    |'\nconnect ' ~[\r\n]*
    |'\ndamage ' ~[\r\n]*
    |'\ndata ' ~[\r\n]*
    |'\ndatapack ' ~[\r\n]*
    |'\ndaylock ' ~[\r\n]*
    |'\ndebug ' ~[\r\n]*
    |'\ndedicatedwsserver ' ~[\r\n]*
    |'\ndefaultgamemode ' ~[\r\n]*
    |'\ndeop ' ~[\r\n]*
    |'\ndialogue ' ~[\r\n]*
    |'\ndifficulty ' ~[\r\n]*
    |'\neffect ' ~[\r\n]*
    |'\nenchant ' ~[\r\n]*
    |'\nevent ' ~[\r\n]*
    |'\nexecute ' ~[\r\n]*
    |'\nexperience ' ~[\r\n]*
    |'\nfill ' ~[\r\n]*
    |'\nfillbiome ' ~[\r\n]*
    |'\nfog ' ~[\r\n]*
    |'\nforceload ' ~[\r\n]*
    |'\nfunction ' ~[\r\n]*
    |'\ngamemode ' ~[\r\n]*
    |'\ngamerule ' ~[\r\n]*
    |'\ngametest ' ~[\r\n]*
    |'\ngive ' ~[\r\n]*
    |'\nhelp ' ~[\r\n]*
    |'\nimmutableworld ' ~[\r\n]*
    |'\nitem ' ~[\r\n]*
    |'\njfr ' ~[\r\n]*
    |'\nkick ' ~[\r\n]*
    |'\nkill ' ~[\r\n]*
    |'\nlist ' ~[\r\n]*
    |'\nlocate ' ~[\r\n]*
    |'\nloot ' ~[\r\n]*
    |'\nme ' ~[\r\n]*
    |'\nmobevent ' ~[\r\n]*
    |'\nmsg ' ~[\r\n]*
    |'\nmusic ' ~[\r\n]*
    |'\nop ' ~[\r\n]*
    |'\nops ' ~[\r\n]*
    |'\npardon ' ~[\r\n]*
    |'\npardon-ip ' ~[\r\n]*
    |'\nparticle ' ~[\r\n]*
    |'\nperf ' ~[\r\n]*
    |'\npermission ' ~[\r\n]*
    |'\nplace ' ~[\r\n]*
    |'\nplayanimation ' ~[\r\n]*
    |'\nplaysound ' ~[\r\n]*
    |'\npublish ' ~[\r\n]*
    |'\nrecipe ' ~[\r\n]*
    |'\nreload ' ~[\r\n]*
    |'\nremove ' ~[\r\n]*
    |'\nreplaceitem ' ~[\r\n]*
    |'\nride ' ~[\r\n]*
    |'\nsave ' ~[\r\n]*
    |'\nsave-all ' ~[\r\n]*
    |'\nsave-off ' ~[\r\n]*
    |'\nsave-on ' ~[\r\n]*
    |'\nsay ' ~[\r\n]*
    |'\nschedule ' ~[\r\n]*
    |'\nscoreboard ' ~[\r\n]*
    |'\nseed ' ~[\r\n]*
    |'\nsetblock ' ~[\r\n]*
    |'\nsetidletimeout ' ~[\r\n]*
    |'\nsetmaxplayers ' ~[\r\n]*
    |'\nsetworldspawn ' ~[\r\n]*
    |'\nspawnpoint ' ~[\r\n]*
    |'\nspectate ' ~[\r\n]*
    |'\nspreadplayers ' ~[\r\n]*
    |'\nstop ' ~[\r\n]*
    |'\nstopsound ' ~[\r\n]*
    |'\nstructure ' ~[\r\n]*
    |'\nsummon ' ~[\r\n]*
    |'\ntag ' ~[\r\n]*
    |'\nteam ' ~[\r\n]*
    |'\nteammsg ' ~[\r\n]*
    |'\nteleport ' ~[\r\n]*
    |'\ntell ' ~[\r\n]*
    |'\ntellraw ' ~[\r\n]*
    |'\ntestfor ' ~[\r\n]*
    |'\ntestforblock ' ~[\r\n]*
    |'\ntestforblocks ' ~[\r\n]*
    |'\ntickingarea ' ~[\r\n]*
    |'\ntime ' ~[\r\n]*
    |'\ntitle ' ~[\r\n]*
    |'\ntitleraw ' ~[\r\n]*
    |'\ntm ' ~[\r\n]*
    |'\ntoggledownfall ' ~[\r\n]*
    |'\ntp ' ~[\r\n]*
    |'\ntrigger ' ~[\r\n]*
    |'\nvolumearea ' ~[\r\n]*
    |'\nw ' ~[\r\n]*
    |'\nwb ' ~[\r\n]*
    |'\nweather ' ~[\r\n]*
    |'\nwhitelist ' ~[\r\n]*
    |'\nworldborder ' ~[\r\n]*
    |'\nworldbuilder ' ~[\r\n]*
    |'\nwsserver ' ~[\r\n]*
    |'\nxp ' ~[\r\n]*
    ;

funcStatement
    : 'func' nameSpace ('tagged' nameSpace (',' nameSpace)*)? '{' statement '}'
    ;

execStatement
    : 'exec'? '{' execChild* '}' execStoreChild* (execRunChild|execStoreChild) execStoreChild*
    ;
execStoreChild
    : ('=>'|'?=>') scbExpression
    | ('=>'|'?=>') dataExpression (AcceptableName '*' NUMBER)?
    ;
execRunChild
    : '->' 'func' nameSpace ('tagged' nameSpace (',' nameSpace)*)? '{' statement '}'
    | '->' 'func'? '{' statement '}'
    | '->'  commandStatement
    ;
execChild
    : 'as' selector
    | 'at' selector
    |'position' pos3Expression
    |'position' selector
    |'rotated' pos2Expression
    |'rotated' selector
    |('if'|'unless') selector
    |('if'|'unless') scbExpression CompareOperation scbExpression
    |('if'|'unless') scbExpression MatchesOperation
    |('if'|'unless') nameSpace
    |('if'|'unless') pos3Expression blockExpression
    |('if'|'unless') pos3Expression pos3Expression pos3Expression ('all'|'masked')
    |('if'|'unless') dataExpression
    | execStoreChild
    ;

CompareOperation
    : '<'|'<='| '=='|'>='|'>'
    ;
MatchesOperation
    : NUMBER '..' NUMBER
    ;

dataExpression
    : nameSpace '::' nbtPath
    | selector '::' nbtPath
    | pos3Expression '::' nbtPath
    ;
dataOperationExpression
    : dataExpression
    | dataExpression '|=' nbt
    | dataExpression '|=' dataExpression
    | dataExpression '=' nbt
    | dataExpression '=' dataExpression
    | dataExpression '..' nbt
    | dataExpression '..' dataExpression
    | dataExpression '..0' nbt
    | dataExpression '..0' dataExpression
    | dataExpression '..' NUMBER nbt
    | dataExpression '..' NUMBER dataExpression
    | dataExpression 'remove'
    ;

scbOperationExpression
    : scbExpression
    | scbExpression '+=' NUMBER
    | scbExpression '-=' NUMBER
    | scbExpression '+=' scbExpression
    | scbExpression '-=' scbExpression
    | scbExpression '*=' scbExpression
    | scbExpression '/=' scbExpression
    | scbExpression '%=' scbExpression
    | scbExpression '><' scbExpression
    | scbExpression '<<' scbExpression
    | scbExpression '>>' scbExpression
    | scbExpression '=' scbExpression
    | scbExpression 'reset'
    | scbExpression ':=' scbSingleOperationExpression
    ;
scbSingleOperationExpression
    : scbExpression
    | scbSingleOperationExpression ('+'|'-'|'*'|'/'|'%') scbSingleOperationExpression
    | '(' scbSingleOperationExpression ')'
    ;

scbExpression
    : nbtName selector
    ;

pos3Expression: pos1 pos1 pos1;
pos2Expression: pos1 pos1;
pos5Expression: pos1 pos1 pos1 pos1 pos1;
blockExpression: nameSpace blockstate? nbt? ;
blockstate: '[' (.)+? ']';

selector
    : Selector ('[' (.)+? ']')?
    | '@' nbtName
    | '#' nbtName
    | '#'
    ;
Selector: '@s' | '@r' | '@a' | '@e' | '@p';


json: 'j' jsonText ;
nbt: 'n' snbt;

nameSpace: AcceptableName ':' resourceLocation;
AcceptableName: [a-z_][a-z_\-0-9.]*;
NBTName: [a-z_A-Z][a-z_\-0-9.A-Z]*;
nbtName: AcceptableName | NBTName;
resourceLocation: AcceptableName ('/' AcceptableName)*;



pos1: Pos1 | NUMBER;
Pos1: ('~'|'^') NUMBER | ('~'|'^') ; //没写小数



nbtPath
    : nbtName
    | nbtCompound
    | nbtName nbtCompound
    | nbtName ('[' NUMBER ']'|'[]')* ('[' nbtCompound ']')?
    ;

snbt: nbtValue;
nbtCompound:'{' nbtPair (',' nbtPair)* '}' | '{' '}';
nbtPair: nbtName ':' nbtValue;
nbtList: '[' nbtValue (',' nbtValue)* ']' | '[' ']';
nbtValue
    :nbtCompound|nbtList|nbtByteArr|nbtIntArr|nbtLongArr|nbtString|ByteNumber|ShortNumber|LongNumber|FloatNumber|DoubleNumber
    ;
nbtByteArr: '[B;' ByteNumber (',' ByteNumber)* ']';
nbtIntArr: '[I;' NUMBER (',' NUMBER)* ']';
nbtLongArr: '[L;' LongNumber (',' LongNumber)* ']';
nbtString: STRING | STRING2;
ByteNumber: NUMBER 'b' | NUMBER 'B';
ShortNumber: NUMBER 's' | NUMBER 'S';
LongNumber: NUMBER 'l' | NUMBER 'L';
FloatNumber: NUMBER 'f'| NUMBER 'F';
DoubleNumber: NUMBER 'd' | NUMBER 'D';
STRING2: '\'' (ESC | SAFECODEPOINT)* '\'';

jsonText: jsonValue;
jsonObj: '{' jsonPair (',' jsonPair)* '}' | '{' '}';
jsonPair: STRING ':' jsonValue;
jsonArr: '[' jsonValue (',' jsonValue)* ']' | '[' ']';
jsonValue
    : STRING
    | NUMBER
    | jsonObj
    | jsonArr
    | 'true'
    | 'false'
    | 'null'
    ;


STRING
    : '"' (ESC | SAFECODEPOINT)* '"'
    ;


fragment ESC
    : '\\' (["\\/bfnrt] | UNICODE)
    ;


fragment UNICODE
    : 'u' HEX HEX HEX HEX
    ;


fragment HEX
    : [0-9a-fA-F]
    ;


fragment SAFECODEPOINT
    : ~ ["\\\u0000-\u001F]
    ;


NUMBER
    : '-'? INT ('.' [0-9] +)? EXP?
    ;


fragment INT
    : '0' | [1-9] [0-9]*
    ;

fragment EXP
    : [Ee] [+\-]? INT
    ;

WS: [ \t\n\r] + -> skip;



