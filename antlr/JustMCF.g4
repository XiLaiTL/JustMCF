grammar JustMCF;

mcfFile: funcStatement*;
statementAndCommand: (command|statement);
command
    : execStatement
    | dataOperationExpression
    | scbOperationExpression
    | command execStoreChild+
    | leagalCommand
    ;
statement
    : funcStatement
    | left='->' funcStatement
    ;
leagalCommand : LeagalCommand;
LeagalCommand
    :'advancement ' ~[\r\n]*
    |'alwaysday ' ~[\r\n]*
    |'attribute ' ~[\r\n]*
    |'ban ' ~[\r\n]*
    |'ban-ip ' ~[\r\n]*
    |'banlist ' ~[\r\n]*
    |'bossbar ' ~[\r\n]*
    |'camerashake ' ~[\r\n]*
    |'changesetting ' ~[\r\n]*
    |'clear ' ~[\r\n]*
    |'clearspawnpoint ' ~[\r\n]*
    |'clone ' ~[\r\n]*
    |'connect ' ~[\r\n]*
    |'damage ' ~[\r\n]*
    |'data ' ~[\r\n]*
    |'datapack ' ~[\r\n]*
    |'daylock ' ~[\r\n]*
    |'debug ' ~[\r\n]*
    |'dedicatedwsserver ' ~[\r\n]*
    |'defaultgamemode ' ~[\r\n]*
    |'deop ' ~[\r\n]*
    |'dialogue ' ~[\r\n]*
    |'difficulty ' ~[\r\n]*
    |'effect ' ~[\r\n]*
    |'enchant ' ~[\r\n]*
    |'event ' ~[\r\n]*
    |'execute ' ~[\r\n]*
    |'experience ' ~[\r\n]*
    |'fill ' ~[\r\n]*
    |'fillbiome ' ~[\r\n]*
    |'fog ' ~[\r\n]*
    |'forceload ' ~[\r\n]*
    |'function ' ~[\r\n]*
    |'gamemode ' ~[\r\n]*
    |'gamerule ' ~[\r\n]*
    |'gametest ' ~[\r\n]*
    |'give ' ~[\r\n]*
    |'help ' ~[\r\n]*
    |'immutableworld ' ~[\r\n]*
    |'item ' ~[\r\n]*
    |'jfr ' ~[\r\n]*
    |'kick ' ~[\r\n]*
    |'kill ' ~[\r\n]*
    |'list ' ~[\r\n]*
    |'locate ' ~[\r\n]*
    |'loot ' ~[\r\n]*
    |'me ' ~[\r\n]*
    |'mobevent ' ~[\r\n]*
    |'msg ' ~[\r\n]*
    |'music ' ~[\r\n]*
    |'op ' ~[\r\n]*
    |'ops ' ~[\r\n]*
    |'pardon ' ~[\r\n]*
    |'pardon-ip ' ~[\r\n]*
    |'particle ' ~[\r\n]*
    |'perf ' ~[\r\n]*
    |'permission ' ~[\r\n]*
    |'place ' ~[\r\n]*
    |'playanimation ' ~[\r\n]*
    |'playsound ' ~[\r\n]*
    |'publish ' ~[\r\n]*
    |'recipe ' ~[\r\n]*
    |'reload ' ~[\r\n]*
    |'remove ' ~[\r\n]*
    |'replaceitem ' ~[\r\n]*
    |'ride ' ~[\r\n]*
    |'save ' ~[\r\n]*
    |'save-all ' ~[\r\n]*
    |'save-off ' ~[\r\n]*
    |'save-on ' ~[\r\n]*
    |'say ' ~[\r\n]*
    |'schedule ' ~[\r\n]*
    |'scoreboard ' ~[\r\n]*
    |'seed ' ~[\r\n]*
    |'setblock ' ~[\r\n]*
    |'setidletimeout ' ~[\r\n]*
    |'setmaxplayers ' ~[\r\n]*
    |'setworldspawn ' ~[\r\n]*
    |'spawnpoint ' ~[\r\n]*
    |'spectate ' ~[\r\n]*
    |'spreadplayers ' ~[\r\n]*
    |'stop ' ~[\r\n]*
    |'stopsound ' ~[\r\n]*
    |'structure ' ~[\r\n]*
    |'summon ' ~[\r\n]*
    |'tag ' ~[\r\n]*
    |'team ' ~[\r\n]*
    |'teammsg ' ~[\r\n]*
    |'teleport ' ~[\r\n]*
    |'tell ' ~[\r\n]*
    |'tellraw ' ~[\r\n]*
    |'testfor ' ~[\r\n]*
    |'testforblock ' ~[\r\n]*
    |'testforblocks ' ~[\r\n]*
    |'tickingarea ' ~[\r\n]*
    |'time ' ~[\r\n]*
    |'title ' ~[\r\n]*
    |'titleraw ' ~[\r\n]*
    |'tm ' ~[\r\n]*
    |'toggledownfall ' ~[\r\n]*
    |'tp ' ~[\r\n]*
    |'trigger ' ~[\r\n]*
    |'volumearea ' ~[\r\n]*
    |'w ' ~[\r\n]*
    |'wb ' ~[\r\n]*
    |'weather ' ~[\r\n]*
    |'whitelist ' ~[\r\n]*
    |'worldborder ' ~[\r\n]*
    |'worldbuilder ' ~[\r\n]*
    |'wsserver ' ~[\r\n]*
    |'xp ' ~[\r\n]*
    ;

funcStatement
    : 'func' nameSpace ('tagged' nameSpace (',' nameSpace)*)? '{' statementAndCommand* '}'
    ;

execStatement
    : 'exec'? '{' execChild* '}' execStoreChild* (execRunChild|execStoreChild) execStoreChild*       #execWithRunOrChild
    | 'exec' '{' execChild+ '}'                                                                      #execWithoutRunOrChild
    ;
execStoreChild
    : '=>' scbIdentifier                                                                #execStoreResultScore
    | '?=>' scbIdentifier                                                               #execStoreSuccessScore
    | '=>' dataIdentifier (AcceptableName '*' NUMBER)?                                  #execStoreResultData
    | '?=>' dataIdentifier (AcceptableName '*' NUMBER)?                                 #execStoreSuccessData
    | '=>' 'bossbar'? nameSpace value=('value'|'max')                                   #execStoreResultBossbar
    | '?=>' 'bossbar'? nameSpace value=('value'|'max')                                  #execStoreSuccessBossbar
    ;

execRunChild
    : '->' command                                                                                   #execDirectRun
    | '->' funcStatement                                                                             #execNamedRun
    | '->' 'func'? '{' statementAndCommand* '}'                                                      #execAnonymousRun
    ;
execChild
    : 'align' AcceptableName                                                                         #execAlign
    | 'anchored' anchor=('eyes'|'feet')                                                              #execAnchored
    | 'in' nameSpace                                                                                 #execIn
    | 'as' selector                                                                                  #execAs
    | 'at' selector                                                                                  #execAt
    | 'facing' pos3Identifier                                                                        #execFacingPos
    | 'facing' selector anchor=('eyes'|'feet')                                                       #execFacingEntity
    | 'positioned' pos3Identifier                                                                    #execPositionedPos
    | 'positioned' selector                                                                          #execPostionedAs
    | 'rotated' pos2Identifier                                                                       #execRotatedPos
    | 'rotated' selector                                                                             #execRotatedAs
    |cond=('if'|'unless') selector                                                                   #execIfEntity
    |cond=('if'|'unless') scbIdentifier CompareOperation scbIdentifier                               #execIfScore
    |cond=('if'|'unless') scbIdentifier matchPart                                                    #execIfScoreMatches
    |cond=('if'|'unless') nameSpace                                                                  #execPredicate
    |cond=('if'|'unless') pos3Identifier blockIdentifier                                             #execIfBlock
    |cond=('if'|'unless') pos3Identifier pos3Identifier pos3Identifier scan_mode=('all'|'masked')    #execIfBlocks
    |cond=('if'|'unless') dataIdentifier                                                             #execIfData
    |cond=('if'|'unless') 'biome' pos3Identifier nameSpace                                           #execIfBiome
    | execStoreChild                                                                                 #execStore
    ;

CompareOperation
    : '<'|'<='| '=='|'>='|'>'
    ;
matchPart
    : NUMBER '..' NUMBER?
    | '..' NUMBER
    | NUMBER
    ;

dataIdentifier
    : nameSpace '::' nbtPath                                                                    #dataStorage
    | selector '::' nbtPath                                                                     #dataEntity
    | pos3Identifier '::' nbtPath                                                               #dataBlock
    ;
dataOperationExpression
    : dataIdentifier
    | dataIdentifier '|=' nbt
    | dataIdentifier '|=' dataIdentifier
    | dataIdentifier '=' nbt
    | dataIdentifier '=' dataIdentifier
    | dataIdentifier '..' nbt
    | dataIdentifier '..' dataIdentifier
    | dataIdentifier '..0' nbt
    | dataIdentifier '..0' dataIdentifier
    | dataIdentifier '..' NUMBER nbt
    | dataIdentifier '..' NUMBER dataIdentifier
    | dataIdentifier 'remove'
    ;

scbOperationExpression
    : scbIdentifier
    | scbIdentifier '+=' NUMBER
    | scbIdentifier '-=' NUMBER
    | scbIdentifier '=' NUMBER
    | scbIdentifier '+=' scbIdentifier
    | scbIdentifier '-=' scbIdentifier
    | scbIdentifier '*=' scbIdentifier
    | scbIdentifier '/=' scbIdentifier
    | scbIdentifier '%=' scbIdentifier
    | scbIdentifier '><' scbIdentifier
    | scbIdentifier '<<' scbIdentifier
    | scbIdentifier '>>' scbIdentifier
    | scbIdentifier '=' scbIdentifier
    | scbIdentifier 'reset'
    | scbIdentifier ':=' scbSingleOperationExpression
    ;
scbSingleOperationExpression
    : scbSingleOperationExpression op=('><'|'<<'|'>>') scbSingleOperationExpression
    | scbSingleOperationExpression op=('*'|'/'|'%') scbSingleOperationExpression
    | scbSingleOperationExpression op=('+'|'-') scbSingleOperationExpression
    | scbSingleOperationExpression op='=' scbSingleOperationExpression
    | NUMBER
    | scbIdentifier
    | '(' scbSingleOperationExpression ')'
    ;

scbIdentifier
    : nbtName selector
    | selector ':' nbtName
    ;

pos3Identifier: '<' pos1 pos1 pos1 '>';
pos2Identifier: '<' pos1 pos1 '>';
pos5Identifier: '<' pos1 pos1 pos1 pos1 pos1 '>';
pos1: Pos1 | NUMBER;
Pos1: ('~'|'^') NUMBER | ('~'|'^') ; //没写小数

blockIdentifier:registerName blockstate? nbt? ;
blockstate: '[' (.)+? ']';

selector
    : Selector ('[' (.)+? ']')?
    | '@' nbtName
    | '#' nbtName
    | '#'
    ;
Selector: '@s' | '@r' | '@a' | '@e' | '@p';

nameSpace: AcceptableName ':' resourceLocation;
registerName: (AcceptableName ':')? AcceptableName;
AcceptableName: [a-z_][a-z_\-0-9.]*;
NBTName: [a-z_A-Z][a-z_\-0-9.A-Z]*;
nbtName: AcceptableName | NBTName;
resourceLocation: AcceptableName ('/' AcceptableName)*;


nbt: snbtValue;
json: jsonTextValue;

nbtPath
    : nbtName
    | nbtCompound
    | nbtName nbtCompound
    | nbtName ('[' NUMBER ']'|'[]')* ('[' nbtCompound ']')?
    ;

snbtValue
    : 'n{' nbtPair (',' nbtPair)* '}' | 'n{' '}'
    | 'n[' nbtValue (',' nbtValue)* ']' | 'n[' ']'
    | 'n[B;' ByteNumber (',' ByteNumber)* ']'
    | 'n[I;' NUMBER (',' NUMBER)* ']'
    | 'n[L;' LongNumber (',' LongNumber)* ']'
    | nbtString|ByteNumber|ShortNumber|LongNumber|FloatNumber|DoubleNumber
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


jsonTextValue
    :'j{' jsonPair (',' jsonPair)* '}' | 'j{' '}'
    | 'j[' jsonValue (',' jsonValue)* ']' | '[' ']'
    | STRING
    | NUMBER
    | 'true'
    | 'false'
    | 'null'
    ;
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



