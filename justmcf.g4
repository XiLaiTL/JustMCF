grammar justmcf;

mcfStatement: statement;
statement: commandStatement*;
commandStatement
    :execStatement
    |LeagalCommandStatement
    ;
LeagalCommandStatement
    :'advancement' ~[\r\n]*
    |'alwaysday' ~[\r\n]*
    |'attribute' ~[\r\n]*
    |'ban' ~[\r\n]*
    |'ban-ip' ~[\r\n]*
    |'banlist' ~[\r\n]*
    |'bossbar' ~[\r\n]*
    |'camerashake' ~[\r\n]*
    |'changesetting' ~[\r\n]*
    |'clear' ~[\r\n]*
    |'clearspawnpoint' ~[\r\n]*
    |'clone' ~[\r\n]*
    |'connect' ~[\r\n]*
    |'damage' ~[\r\n]*
    |'data' ~[\r\n]*
    |'datapack' ~[\r\n]*
    |'daylock' ~[\r\n]*
    |'debug' ~[\r\n]*
    |'dedicatedwsserver' ~[\r\n]*
    |'defaultgamemode' ~[\r\n]*
    |'deop' ~[\r\n]*
    |'dialogue' ~[\r\n]*
    |'difficulty' ~[\r\n]*
    |'effect' ~[\r\n]*
    |'enchant' ~[\r\n]*
    |'event' ~[\r\n]*
    |'execute' ~[\r\n]*
    |'experience' ~[\r\n]*
    |'fill' ~[\r\n]*
    |'fillbiome' ~[\r\n]*
    |'fog' ~[\r\n]*
    |'forceload' ~[\r\n]*
    |'function' ~[\r\n]*
    |'gamemode' ~[\r\n]*
    |'gamerule' ~[\r\n]*
    |'gametest' ~[\r\n]*
    |'give' ~[\r\n]*
    |'help' ~[\r\n]*
    |'immutableworld' ~[\r\n]*
    |'item' ~[\r\n]*
    |'jfr' ~[\r\n]*
    |'kick' ~[\r\n]*
    |'kill' ~[\r\n]*
    |'list' ~[\r\n]*
    |'locate' ~[\r\n]*
    |'loot' ~[\r\n]*
    |'me' ~[\r\n]*
    |'mobevent' ~[\r\n]*
    |'msg' ~[\r\n]*
    |'music' ~[\r\n]*
    |'op' ~[\r\n]*
    |'ops' ~[\r\n]*
    |'pardon' ~[\r\n]*
    |'pardon-ip' ~[\r\n]*
    |'particle' ~[\r\n]*
    |'perf' ~[\r\n]*
    |'permission' ~[\r\n]*
    |'place' ~[\r\n]*
    |'playanimation' ~[\r\n]*
    |'playsound' ~[\r\n]*
    |'publish' ~[\r\n]*
    |'recipe' ~[\r\n]*
    |'reload' ~[\r\n]*
    |'remove' ~[\r\n]*
    |'replaceitem' ~[\r\n]*
    |'ride' ~[\r\n]*
    |'save' ~[\r\n]*
    |'save-all' ~[\r\n]*
    |'save-off' ~[\r\n]*
    |'save-on' ~[\r\n]*
    |'say' ~[\r\n]*
    |'schedule' ~[\r\n]*
    |'scoreboard' ~[\r\n]*
    |'seed' ~[\r\n]*
    |'setblock' ~[\r\n]*
    |'setidletimeout' ~[\r\n]*
    |'setmaxplayers' ~[\r\n]*
    |'setworldspawn' ~[\r\n]*
    |'spawnpoint' ~[\r\n]*
    |'spectate' ~[\r\n]*
    |'spreadplayers' ~[\r\n]*
    |'stop' ~[\r\n]*
    |'stopsound' ~[\r\n]*
    |'structure' ~[\r\n]*
    |'summon' ~[\r\n]*
    |'tag' ~[\r\n]*
    |'team' ~[\r\n]*
    |'teammsg' ~[\r\n]*
    |'teleport' ~[\r\n]*
    |'tell' ~[\r\n]*
    |'tellraw' ~[\r\n]*
    |'testfor' ~[\r\n]*
    |'testforblock' ~[\r\n]*
    |'testforblocks' ~[\r\n]*
    |'tickingarea' ~[\r\n]*
    |'time' ~[\r\n]*
    |'title' ~[\r\n]*
    |'titleraw' ~[\r\n]*
    |'tm' ~[\r\n]*
    |'toggledownfall' ~[\r\n]*
    |'tp' ~[\r\n]*
    |'trigger' ~[\r\n]*
    |'volumearea' ~[\r\n]*
    |'w' ~[\r\n]*
    |'wb' ~[\r\n]*
    |'weather' ~[\r\n]*
    |'whitelist' ~[\r\n]*
    |'worldborder' ~[\r\n]*
    |'worldbuilder' ~[\r\n]*
    |'wsserver' ~[\r\n]*
    |'xp' ~[\r\n]*
    ;



execStatement
    : 'exec'? ('{' execChild* '}')? execStoreChild? (execRunChild|execStoreChild)
    ;
execStoreChild
    : ('=>'|'?=>') scbExpression
    | ('=>'|'?=>') dataExpression Type '*' NUMBER
    ;
execRunChild
    : '->' ('func' ResourceLocation? ('tagged' ResourceLocation (',' ResourceLocation)*)?)? commandStatement
    | '->' ('func' ResourceLocation? ('tagged' ResourceLocation (',' ResourceLocation)*)?)? '{' statement '}'
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
    : '<'|'<='| '='|'>='|'>'
    ;
MatchesOperation
    : NUMBER '..' NUMBER
    ;
nameSpace: Pair | NameSpace;
dataExpression
    : nameSpace '::' nbtPath
    | selector '::' nbtPath
    | pos3Expression '::' nbtPath
    ;
scbExpression: AcceptableName Selector;
pos3Expression: Pos1 Pos1 Pos1;
pos2Expression: Pos1 Pos1;
pos5Expression: Pos1 Pos1 Pos1 Pos1 Pos1;
blockExpression: nameSpace blockstate? nbt? ;
blockstate: '[' (.)+? ']';

selector: Selector ('[' (.)+? ']')?;
Selector: '@s' | '@r' | '@a' | '@e' | '@p';

json: 'j' jsonText ; //有问题
nbt: 'n' snbt;  //有问题

Type: 'byte'|'short'|'int'|'long'|'float'|'double';

Pair
    : NBTName ':' (ByteNumber|ShortNumber|LongNumber|FloatNumber|DoubleNumber)
    | NBTName ':'NBTName
    ;
NameSpace: AcceptableName ':' ResourceLocation;


NBTName: [a-z_\-0-9.A-Z]+;
AcceptableName: [a-z_\-0-9.]+;
ResourceLocation: AcceptableName ('/' AcceptableName)*;

Pos1: ('~'|'^')? NUMBER | ('~'|'^') ; //没写小数



nbtPath
    : AcceptableName
    | nbtCompound
    | AcceptableName nbtCompound
    | AcceptableName ('[' NUMBER ']'|'[]')* ('[' nbtCompound ']')?
    ;

snbt: nbtValue;
nbtCompound:'{' nbtPair (',' nbtPair)* '}' | '{' '}';
nbtPair
    : Pair
    | NBTName ':' nbtValue
    ;
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



