grammar JustMCF;

mcfFile: fileStatementInner*;
fileStatementInner
    : nameSpaceStatement
    | nameSpaceStatementInner
    ;
statementInner: noInExecStatement|statement;
statement
    : ifStatement
    | forStatement
    | whileStatement
    | funcRunStatement
    | funcImproveRunStatement
    | execStatement
    | dataOperationExpression
    | dataAssignExistExpression
    | scbOperationExpression
    | bossbarOperationExpression
    | entityExpression
    | dataStatement
    | scbPlayerStatement
    | scbObjectiveStatement
    | titleStatement
    | displayStatement
    | lootStatement
    | itemStatement
    | attrStatement
    | entityStatement
    | blockStatement
    | leagalCommand
    ;
noInExecStatement
    : funcStatement #noInExecStatementFunc
    | left='->' funcStatement  #noInExecStatementRunFunc
    | funcImproveStatement #noInExecStatementFuncImprove
    | nameSpaceStatement  #noInExecStatementNameSpace
    | interfaceStatement #noInExecStatementInterface
    | statement execStoreChild+ #noInExecStatementStore
    ;
leagalCommand : LeagalCommand;

nameSpaceStatement
    : ('namsp'|'namespace') acceptableName? ('[' (nameSpaceSettings ','?)* ']')? '{' nameSpaceStatementInner* '}'
    ;
nameSpaceSettings
    : type='func' '=' acceptableName #nameSpaceSettingsFunc
    | type='block' '=' acceptableName #nameSpaceSettingsBlock
    | type='storage' '=' acceptableName #nameSpaceSettingsStorage
    | type='bossbar' '='  acceptableName #nameSpaceSettingsBossbar
    | type='biome' '=' acceptableName #nameSpaceSettingsBiome
    | type='entity' '=' acceptableName #nameSpaceSettingsEntity
    | type='predicate' '=' acceptableName #nameSpaceSettingsPredicate
    | type=('dim'|'dimension') '=' acceptableName #nameSpaceSettingsDim
    | type='item' '=' acceptableName #nameSpaceSettingsItem
    | type='loot' '=' acceptableName #nameSpaceSettingsLoot
    | type='item_modifier' '=' acceptableName #nameSpaceSettingsItemModifier
    | type='default' '=' acceptableName #nameSpaceSettingsDefault
    | type='default' #nameSpaceSettingsJustDefault
    ;
nameSpaceStatementInner
    : funcTagStatement
    | funcTagStatementInner
    | interfaceStatement
    ;
funcTagStatement
    : 'func' tagNameSpaceFunc('[' (funcTagSettings ','?)* ']')? '{' funcTagStatementInner* '}'
    ;
funcTagSettings
    : 'replace' '=' BOOL #funcTagSettingsReplace
    | 'replaced' #funcTagSettingsReplaced
    ;
funcTagStatementInner
    : funcStatement #funcTagSIFuncS
    | funcImproveStatement #funcTagSIFuncImproveS
    | funcTagStatement #funcTagSIFuncTagS
    ;
funcStatement
    : 'func' nameSpaceFunc ('tagged' tagNameSpaceFunc (',' tagNameSpaceFunc)*)? '{' statementInner* '}'
    ;
funcImproveStatement
    : 'func' nameSpaceFunc '(' funcImproveParam (',' funcImproveParam)* ')' typeName? '{' funcImproveStatementInner*  '}'
    ;
funcImproveParam
    : typeName? acceptableName
    ;
funcImproveStatementInner
    : statementInner
    | yeildStatement
    ;
yeildStatement
    : 'yeild' dataIdentifier
    ;
funcRunStatement
    : 'func' nameSpaceFunc
    | 'func' tagNameSpaceFunc
    ;
funcImproveRunStatement: funcImproveRunExpression;
funcImproveRunExpression: 'func' nameSpaceFunc '('funcImproveRunParam (',' funcImproveRunParam)* ')';
funcImproveRunParam
    : dataIdentifier
    ;
execStatement
    : 'exec'? '{' execChild* '}' execStoreChild* (execRunChild|execStoreChild) execStoreChild*       #execWithRunOrChild
    | 'exec' '{' execChild+ '}'                                                                      #execWithoutRunOrChild
    ;
execStoreChild
    : '=>' scbIdentifier                                                                #execStoreResultScore
    | '?=>' scbIdentifier                                                               #execStoreSuccessScore
    | '=>' dataIdentifier (NumberType '*'? NUMBER)?                                  #execStoreResultData
    | '?=>' dataIdentifier (NumberType '*'? NUMBER)?                                 #execStoreSuccessData
    | '=>' 'bossbar' nameSpaceBossbar value=('value'|'max')?                                   #execStoreResultBossbar
    | '?=>' 'bossbar' nameSpaceBossbar value=('value'|'max')?                                  #execStoreSuccessBossbar
    ;

execRunChild
    : '->' statement                                                                                   #execDirectRun
    | '->' funcStatement                                                                             #execNamedRun
    | '->' 'func'? '{' statementInner* '}'                                                      #execAnonymousRun
    ;
execChild
    : 'align' AcceptableName                                                                         #execAlign
    | 'anchored' anchor=('eyes'|'feet')                                                              #execAnchored
    | 'in' nameSpaceDim                                                                                 #execIn
    | 'as' selector                                                                                  #execAs
    | 'at' selector                                                                                  #execAt
    | 'facing' pos3Identifier                                                                        #execFacingPos
    | 'facing' selector anchor=('eyes'|'feet')                                                       #execFacingEntity
    | ('positioned'|'pos') pos3Identifier                                                                    #execPositionedPos
    | ('positioned'|'pos') selector                                                                          #execPostionedAs
    | ('rotated'|'rot') pos2Identifier                                                                       #execRotatedPos
    | ('rotated'|'rot') selector                                                                             #execRotatedAs
    |cond=('if'|'unless')? 'entity'? selector                                                                   #execIfEntity
    |cond=('if'|'unless')? 'score'? scbIdentifier CompareOperation scbIdentifier                               #execIfScore
    |cond=('if'|'unless')? 'score'? scbIdentifier matchPart                                                    #execIfScoreMatches
    |cond=('if'|'unless')? 'predicate'? nameSpacePredicate                                                                  #execPredicate
    |cond=('if'|'unless')? 'block'? pos3Identifier blockIdentifier                                             #execIfBlock
    |cond=('if'|'unless')? 'blocks'? pos3Identifier pos3Identifier pos3Identifier scan_mode=('all'|'masked')    #execIfBlocks
    |cond=('if'|'unless')? 'data'? dataIdentifier                                                             #execIfData
    |cond=('if'|'unless')? 'biome' pos3Identifier nameSpaceBiome                                           #execIfBiome
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
    : 'local' '::' nbtPath                                                                            #dataStorageLocal
    | nameSpaceStorage '::' nbtPath                                                                   #dataStorage
    | acceptableName                                                                                  #dataStorageWithEnv
    | selector '::' nbtPath                                                                           #dataEntity
    | pos3Identifier '::' nbtPath                                                                     #dataBlock
    ;
dataMergeExpression
    : nameSpaceStorage '|=' nbt                                                                              #dataMergeStorage
    | selector '|=' nbt                                                                               #dataMergeEntity
    | pos3Identifier '|=' nbt                                                                         #dataMergeBlock
    ;

dataOperationExpression
    : dataIdentifier ('*'? NUMBER)?                                                                                 #dataGet
    | dataMergeExpression                                                                             #dataMerge
    | dataIdentifier '|=' nbt                                                                         #dataModifyMergeValue
    | dataIdentifier '|=' dataRightValue                                                              #dataModifyMergeFrom
    | typeName? dataIdentifier '=' nbt                                                                          #dataModifySetValue
    | typeName? dataIdentifier '=' dataRightValue                                                               #dataModifySetFrom
    | dataIdentifier '..' nbt                                                                         #dataModifyAppendValue
    | dataIdentifier '..' dataRightValue                                                              #dataModifyAppendFrom
    | dataIdentifier '..0' nbt                                                                        #dataModifyPrependValue
    | dataIdentifier '..0' dataRightValue                                                             #dataModifyPrependFrom
    | dataIdentifier '..' NUMBER nbt                                                                  #dataModifyInsertValue
    | dataIdentifier '..' NUMBER dataRightValue                                                       #dataModifyInsertFrom
    | dataIdentifier 'remove'                                                                         #dataRemove
    ;
dataRightValue
    : dataIdentifier
    | funcImproveRunExpression
    ;

scbOperationExpression
    : scbIdentifier                                                                                   #scbGet
    | scbIdentifier '+=' NUMBER                                                                       #scbAdd
    | scbIdentifier '-=' NUMBER                                                                       #scbRemove
    | scbIdentifier '=' NUMBER                                                                        #scbSet
    | scbIdentifier '+=' scbIdentifier                                                                #scbOptAddAssign
    | scbIdentifier '-=' scbIdentifier                                                                #scbOptSubAssign
    | scbIdentifier '*=' scbIdentifier                                                                #scbOptMulAssign
    | scbIdentifier '/=' scbIdentifier                                                                #scbOptDivAssign
    | scbIdentifier '%=' scbIdentifier                                                                #scbOptModAssign
    | scbIdentifier '><' scbIdentifier                                                                #scbOptExcFunc
    | scbIdentifier '<<' scbIdentifier                                                                #scbOptMinFunc
    | scbIdentifier '>>' scbIdentifier                                                                #scbOptMaxFunc
    | scbIdentifier '=' scbIdentifier                                                                 #scbOptAssign
    | scbIdentifier 'reset'                                                                           #scbReset
    | scbIdentifier 'enable'                                                                          #scbEnable
    | scbIdentifier ':=' scbSingleOperationExpression                                                 #scbOptExpression
    ;
scbSingleOperationExpression
    : scbSingleOperationExpression op=('<<'|'>>') scbSingleOperationExpression                        #scbFuncExpression
    | scbSingleOperationExpression op=('*'|'/'|'%') scbSingleOperationExpression                      #scbOptMulDivModExpression
    | scbSingleOperationExpression op=('+'|'-') scbSingleOperationExpression                          #scbOptAddSubExpression
    | NUMBER                                                                                          #scbTempNumberExpression
    | scbIdentifier                                                                                   #scbIdExpression
    | '(' scbSingleOperationExpression ')'                                                            #scbParenExpression
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

blockIdentifier:nameSpaceBlock blockstate? nbt? ;
blockstate: '[' (.)+? ']';

selector
    : Selector ('[' (.)+? ']')?
    | '@' nbtName
    | '#' nbtName
    | '#'
    ;
Selector: '@s' | '@r' | '@a' | '@e' | '@p';

//script: '{{' (.)+? '}}';

nameSpace
    : acceptableName op=':' resourceLocation
    | resourceLocation
    ;
nameSpaceBlock:nameSpace;
nameSpaceFunc:nameSpace;
nameSpaceStorage:nameSpace;
nameSpaceBossbar:nameSpace;
nameSpaceBiome:nameSpace;
nameSpaceDim:nameSpace;
nameSpacePredicate:nameSpace;
nameSpaceItem:nameSpace;
nameSpaceEntity:nameSpace;
nameSpaceLoot:nameSpace;
nameSpaceItemModifier:nameSpace;
tagNameSpace
    : '#' nameSpace
    ;
tagNameSpaceItem:tagNameSpace;
tagNameSpaceBlock:tagNameSpace;
tagNameSpaceFunc:tagNameSpace;
tagNameSpaceEntity:tagNameSpace;
registerName: (acceptableName ':')? acceptableName;

Key:  'namsp'|'namespace'|'local'
    | 'exec' | 'align' | 'anchored' | 'eyes'| 'feet'|'in' |'as' |'at' |'facing' | 'postitioned' | 'pos' | 'rotated' |'rot'|'if'|'unless'|'all' | 'masked' |'biome'|'value'|'max'
    | 'entity' | 'score' |'predicate' |'block' |'blocks' 
    | 'scb' | 'displayname'|'rendertype'|'display'|'enable'|'list'
    | 'data' | 'reset' |'add'| 'remove'
    | 'func' | 'tagged' 
    | 'default'|'player'|'players'
    | 'bossbar'|'visible'|'blue'|'green'|'pink'|'purple'|'red'|'white'|'yellow'|'color'|'name'|'style'|'notched_6'|'notched_10'|'notched_12'|'notched_20'|'progress'|'set'
    | 'title'|'subtitle'|'actionbar'|'times'
    | 'text'|'item'|'loot'|'give'|'clear'|'fish'|'kill'|'mine'|'mainhand'|'offhand'
    | 'attr'|'base'|'destroy'|'keep'|'replace'|'hollow'|'outline'|'force'|'move'|'normal'
    | 'interface'
    | 'while'|'for'|'yeild'|'break'|'return'
    | 'replaced'
    | 'dim'|'dimension'|'item_modifier'
    ;
NumberType
    : 'byte'|'short'|'int'|'long'|'float'|'double'
    ;
AcceptableName: [a-z_][a-z_\-0-9.]* ;
acceptableName: AcceptableName | Key | NumberType;
criterion: nameSpace;
NBTName: [a-z_A-Z][a-z_\-0-9.A-Z]* ;
nbtName: AcceptableName | NBTName | Key | NumberType;
resourceLocation: acceptableName ('/' acceptableName)*;
typeName: (acceptableName ':')? acceptableName ('['']')?;
item_slot: acceptableName;
item_predicate
    : (nameSpaceItem| tagNameSpaceItem) (snbt|nbt)?
    ;
block_predicate
    : (nameSpaceBlock| tagNameSpaceBlock) blockstate? (snbt|nbt)?
    ; 

UUID16_:   HEX{1,8} '-'HEX{1,4}'-'HEX{1,4}'-'HEX{1,4}'-'HEX{1,12}  ;


dataStatement
    : 'data' '{' dataOperationExpression* '}'                #dataSCompound
    | 'data' nameSpaceStorage('::'acceptableName)? '{' dataOperationExpression* '}' #dataSIdentifierCompound
    ;

scbPlayerStatement: 'scb' '{' scbPlayerStatementInner* '}';
scbPlayerStatementInner
    : scbOperationExpression #scbPlayerSIScbOperationExpression
    | selector? 'list' #scbPlayerSIScbList
    ;
scbObjectiveStatement
    : 'scb'( '(' criterion ')')? acceptableName display=json ('{' ('.'? scbStatementInner)* '}')? #scbObjSDeclareWithName
    | 'scb' '(' criterion ')' acceptableName #scbObjSDeclareSingle
    | 'scb'( '(' criterion ')')? acceptableName 'default' ('{'('.'? scbStatementInner)* '}')? #scbObjSDeclareDefault
    | 'scb' acceptableName '{' ('.'? scbStatementInner)* '}' #scbObjSOperation
    ;
scbStatementInner
    : 'remove' #scbSIRemove
    | 'displayname' json  #scbSIDisplayname
    | 'rendertype' type=('hearts'|'integer') #scbSIRendertype
    | 'display' acceptableName #scbSIDisplay
    ;

bossbarStatement    
    : 'bossbar' nameSpaceBossbar json ('{' ( '.'? bossbarStatementInner)* '}')? #bossbarSDeclare
    | 'bossbar' nameSpaceBossbar '{' ( '.'? bossbarStatementInner)* '}' #bossbarSOperation
    ;
bossbarStatementInner
    : 'get'? type=('max'|'player'|'value'|'visible')                                  #bossbarSIGet
    | 'remove'                                                                  #bossbarSIRemove
    | 'set'? 'color' color=('blue'|'green'|'pink'|'purple'|'red'|'white'|'yellow')  #bossbarSISetColor
    | 'set'? 'max' NUMBER                                                           #bossbarSISetMax
    | 'set'? 'name' json                                                        #bossbarSISetName
    | 'set'? 'players' selector                                                              #bossbarSISetPlayer
    | 'set'? 'players' 'default'                                                 #bossbarSISetPlayerNull
    | 'set'? 'style' style=('notched_6'|'notched_10'|'notched_12'|'notched_20'|'progress')  #bossbarSISetStyle
    | 'set'? 'value' NUMBER                                                          #bossbarSISetValue
    | 'set'? 'visible' bool=('true'|'false')                                                      #bossbarSISetVisible
    ;
bossbarOperationExpression
    : 'bossbar' nameSpaceBossbar type=('max'|'player'|'value'|'visible')?             #bossbarOpExprGet
    | 'bossbar' nameSpaceBossbar 'value'? '=' NUMBER                            #bossbarOpExprAssignValue
    | 'bossbar' nameSpaceBossbar 'max' '=' NUMBER                                    #bossbarOpExprAssignMax
    ;

titleStatement
    : 'title' '{' titleStatementInner* '}' #titleSCompound
    | 'title' selector '{' ('.'? titleSelectorStatementInner)* '}' #titleSSelectorCompound
    ;
titleStatementInner
    : selector '.' titleIndependentStatementInner #titleSISelectorSingle
    | selector '{' ('.'? titleSelectorStatementInner)* '}' #titleSISelectorCompound
    ;
titleSelectorStatementInner
    : pos=('title'|'subtitle'|'actionbar') json #titleSSIJson
    | 'clear' #titleSSIClear
    | 'reset' #titleSSIReset
    | 'times' NUMBER NUMBER NUMBER #titleSSITimes
    ;
titleIndependentStatementInner
    : pos=('title'|'subtitle'|'actionbar') json #titleISIJson
    | 'title' '.' 'clear' #titleISIClear
    | 'title' '.' 'reset' #titleISIReset
    | 'title' '.' 'times' NUMBER NUMBER NUMBER #titleISITimes
    ;

displayStatement
    : 'display' '{' displayStatementInner*  '}' #displaySCompound
    | 'display' selector '{' ('.'? displayIndependentStatementInner)*  '}' #displaySSelectorCompound
    ;
displayStatementInner
    : scbObjectiveStatement  #displaySIScb
    | bossbarStatement #displaySIBossbar
    | selector '.' displayIndependentStatementInner #displaySISelectorSingle
    | selector '{' ('.'? displayIndependentStatementInner)* '}' #displaySISelectorCompound
    ;
displayIndependentStatementInner
    : titleIndependentStatementInner #displayISITitleSingle
    | 'title' '{' titleSelectorStatementInner* '}' #displayISITitleCompound
    | 'text' json #displayISIText
    | 'bossbar' nameSpaceBossbar json #displayISIBossbar
    ;
itemStatement
    : 'item' '{' itemStatementInner*'}' #itemSCompound
    | 'item' selector '{'itemSelectorStatementInner* '}' #itemSSelectorCompound
    ;
lootStatement
    : 'loot' '{' lootStatementInner* '}' #lootSCompound
    | 'loot' selector '{' lootSelectorStatementInner*  '}' #lootSSelectorCompound
    ;
lootStatementInner
    : pos3Identifier '+=' lootSource    #lootSIInsert
    | pos3Identifier '=' lootSource #lootSISpawn
    | pos3Identifier '::' lootIndependentStatementInnerReplaceEntity #lootSIReplaceBlock
    | selector lootIndependentStatementInnerGive #lootSIGive
    | selector '::' lootIndependentStatementInnerReplaceEntity #lootSIReplaceEntity
    | selector '{' lootSelectorStatementInner*  '}' #lootSISelectorNest
    ;
lootSelectorStatementInner
    : lootIndependentStatementInnerGive
    | lootIndependentStatementInnerReplaceEntity
    ;
lootIndependentStatementInnerGive: ('+='|'give') lootSource;
lootIndependentStatementInnerReplaceEntity: item_slot '=' lootSource '*'? NUMBER?;
lootSource
    :'fish' nameSpaceLoot pos3Identifier hand=('mainhand'|'offhand')? #lootSourceFishHand
    |'fish' nameSpaceLoot pos3Identifier nameSpaceItem #lootSourceFishTool
    |'loot'? nameSpaceLoot #lootSourceLoot
    |'kill'? selector #lootSourceKill
    |'mine'? pos3Identifier hand=('mainhand'|'offhand')? #lootSourceMineHand
    |'mine'? pos3Identifier nameSpaceItem #lootSourceMineTool
    ;
itemStatementInner
    : selector giveAndClearIndependentStatementInner #itemSIGiveAndClear
    | selector '::' itemIndependentStatementInner #itemSIEntity
    | pos3Identifier '::' itemIndependentStatementInner #itemSIBlock
    | lootStatementInner #itemSILootInner
    | selector '{'itemSelectorStatementInner* '}' #itemSISelectorNest
    ;
itemSelectorStatementInner
    : giveAndClearIndependentStatementInner #itemSSIGiveAndClear
    | itemIndependentStatementInner #itemSSIItem
    | lootSelectorStatementInner #itemSSILootInner
    ;
itemIndependentStatementInner
    : item_slot '=' nameSpaceItem NUMBER? #itemISIReplaceWith
    | item_slot '=' selector '::' item_slot nameSpaceItemModifier? #itemISIReplaceFromEntity
    | item_slot '=' pos3Identifier '::' item_slot nameSpaceItemModifier? #itemISIReplaceFromBlock
    | item_slot '+=' nameSpaceItemModifier #itemISIModify
    ;
giveAndClearIndependentStatementInner
    : ('+='|'give') nameSpaceItem NUMBER? #giveISI
    | ('-='|'clear') item_predicate NUMBER? #clearISI
    ;

attrStatement
    : 'attr' '{'attrStatementInner* '}' #attrSCompound
    | 'attr' selector '{'attrIndependentStatementInner* '}' #attrSSelectorCompound
    ;
attrStatementInner
    : selector '::' attrIndependentStatementInner #attrSISingle
    | selector '{'attrIndependentStatementInner* '}' #attrSISelectorCompound
    ;
attrIndependentStatementInner
    : registerName 'all'? ('*'?NUMBER)? #attrISIGet
    | registerName 'base' ('*'?NUMBER)? #attrISIGetBase
    | registerName 'base' '=' NUMBER #attrISISetBase
    | registerName '+=' UUID16_ acceptableName '(' op=('+'|'*+'|'*') NUMBER ')' #attrISIModifierAdd
    | registerName '-=' UUID16_ #attrISIModifierRemove
    | registerName UUID16_ ('*'?NUMBER)? #attrISIModifierGet
    ;

entityStatement
    : 'entity' '(' 'player' ')' fake='#'? acceptableName #entitySDeclarePlayer
    | 'entity' '(' type=nameSpaceEntity ')' pos3Identifier nbt? ('{' ('.'? entityDeclareStatementInner)* '}')?  #entitySDeclare
    | 'entity' '(' type=nameSpaceEntity ')' pos3Identifier? acceptableName nbt? '{'('.'? entityDeclareStatementInner)* ('.' entityIndependentStatementInner)* '}'? #entitySDeclareWithName
    | 'entity' '{'entityStatementInner* '}' #entitySCompound
    | 'entity' selector '{' ('.' entityIndependentStatementInner)* '}' #entitySSelectorCompound
    ;
entityDeclareStatementInner
    : 'tag' '=' acceptableName (',' acceptableName)* #entityDeclareSITag
    ;
tagIndependentStatementInner
    : 'tag' ('+='|'add') acceptableName #tagISIAdd
    | 'tag' ('-='|'remove') acceptableName #tagISIRemove
    | 'tag' 'list' #tagISIList
    ;
effectIndependentStatementInner
    : 'effect' ('-='|'clear') acceptableName #effectISIClear
    | 'effect' ('+='|'give') acceptableName second=NUMBER? amplifier=NUMBER? BOOL? #effectISIGive
    | 'effect' ('+='|'give') acceptableName ('(' amplifier=NUMBER')')? second=NUMBER? BOOL? #effectISIGiveSp
    | 'effect' 'clear' #effectISIClearAll
    ;
tpIndependentStatementInner
    : 'tp' selector #TpISIDestination
    | 'tp' pos3Identifier #TpISIPos
    | 'tp' pos5Identifier #TpISIRotated
    | 'tp' pos3Identifier pos2Identifier #TpISIRotatedDiv
    | 'tp' pos3Identifier 'facing' pos3Identifier #TpISIFacing
    | 'tp' pos3Identifier 'facing' selector anchor=('eyes'| 'feet')? #TpISIFacingEntity
    ;
entityIndependentStatementInner
    : giveAndClearIndependentStatementInner  #entityISIGiveAndClear
    | 'kill' #entityISIKill
    | tagIndependentStatementInner #entityISITag
    | effectIndependentStatementInner #entityISIEffect
    | tpIndependentStatementInner #entityISITp
    | 'title' '{' titleSelectorStatementInner* '}' #entityISITitleCompound
    | 'display' '{' displayIndependentStatementInner* '}' #entityISIDisplayCompound
    | displayIndependentStatementInner #entityISIDisplaySingle
    | 'item' '::' itemIndependentStatementInner #entityISIItemSingle
    | ('loot'|'item')  lootIndependentStatementInnerGive #entityISILootGiveSingle
    | ('loot'|'item') '::' lootIndependentStatementInnerReplaceEntity #entityISILootSingle
    | 'item' '{'itemSelectorStatementInner* '}' #entityISIItemCompound
    | 'loot' '{' lootSelectorStatementInner*  '}'  #entityISILootCompound
    | 'attr' '::' attrIndependentStatementInner #entityISIAttrSingle
    | 'attr' '{' attrIndependentStatementInner* '}' #entityISIAttrCompound
    | execStatement #entityISIExec
    ;
entityStatementInner
    : entityExpression #entitySIEntityExpression
    | selector '{' ('.' entityIndependentStatementInner)* '}'  #entitySISelectorCompound
    ;
entityExpression
    : selector '.' entityIndependentStatementInner
    ;
blockStatement
    : 'block' '{' blockStatementInner* '}'
    ;

blockStatementInner
    : pos3Identifier blockIdentifier mod=('destroy'|'keep'|'replace')? #blockSISetblock
    | pos3Identifier pos3Identifier blockIdentifier mod=('destroy'|'hollow'|'keep'|'outline')? #blockSIFill
    | pos3Identifier pos3Identifier blockIdentifier 'replace' block_predicate #blockSIFillReplace
    | pos3Identifier pos3Identifier pos3Identifier masked_mod=('replace'|'masked')? mod=('force'|'move'|'normal')? #blockSIClone
    | pos3Identifier pos3Identifier pos3Identifier 'filtered' block_predicate mod=('force'|'move'|'normal')? #blockSICloneFiltered
    ;
interfaceStatement
    : 'interface' nameSpaceStorage nbt #interfaceSNamespace
    | 'interface' dataIdentifier nbt #interfaceSIdentifier
    ;
dataAssignExistExpression
    : dataIdentifier '=' existExpression
    ;
existExpression
    : '{'execChild* '}' #existExpressionExec
    | dataIdentifier #existExpressionId
    | funcImproveRunExpression #exisitExpressionFuncRun
    | 'true' #existExpressionTrue
    | 'false' #existExpressionFalse
    |'!' existExpression #existExpressionNot
    | existExpression op='&' existExpression #existExpressionBitAnd
    | existExpression op='|' existExpression #existExpressionBitOr
    | existExpression op='&&' existExpression #existExpressionAnd
    | existExpression op='||' existExpression #existExpressionOr
    | '(' existExpression ')' #existExpressionParen
    ;
ifStatement
    : 'if' existExpression execRunChild ( ifElseIfStatement )* ('else' execRunChild )?
    ;
ifElseIfStatement
    : 'else' 'if' existExpression execRunChild
    ;
whileStatement
    : 'while' '{' execChild* '}' execRunChild #whileStatementExec
    | 'while'  existExpression execRunChild #whileStatementExist
    ;
forStatement
    : 'for' '{' dataOperationExpression '}' execRunChild
    ;

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
    : 'j{' jsonPair (',' jsonPair)* '}' | 'j{' '}'
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

BOOL: 'true'
    | 'false'
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


LeagalCommand
    :'/advancement ' ~[\r\n]*
    |'/alwaysday ' ~[\r\n]*
    |'/attribute ' ~[\r\n]*
    |'/ban ' ~[\r\n]*
    |'/ban-ip ' ~[\r\n]*
    |'/banlist ' ~[\r\n]*
    |'/bossbar ' ~[\r\n]*
    |'/camerashake ' ~[\r\n]*
    |'/changesetting ' ~[\r\n]*
    |'/clear ' ~[\r\n]*
    |'/clearspawnpoint ' ~[\r\n]*
    |'/clone ' ~[\r\n]*
    |'/connect ' ~[\r\n]*
    |'/damage ' ~[\r\n]*
    |'/data ' ~[\r\n]*
    |'/datapack ' ~[\r\n]*
    |'/daylock ' ~[\r\n]*
    |'/debug ' ~[\r\n]*
    |'/dedicatedwsserver ' ~[\r\n]*
    |'/defaultgamemode ' ~[\r\n]*
    |'/deop ' ~[\r\n]*
    |'/dialogue ' ~[\r\n]*
    |'/difficulty ' ~[\r\n]*
    |'/effect ' ~[\r\n]*
    |'/enchant ' ~[\r\n]*
    |'/event ' ~[\r\n]*
    |'/execute ' ~[\r\n]*
    |'/experience ' ~[\r\n]*
    |'/fill ' ~[\r\n]*
    |'/fillbiome ' ~[\r\n]*
    |'/fog ' ~[\r\n]*
    |'/forceload ' ~[\r\n]*
    |'/function ' ~[\r\n]*
    |'/gamemode ' ~[\r\n]*
    |'/gamerule ' ~[\r\n]*
    |'/gametest ' ~[\r\n]*
    |'/give ' ~[\r\n]*
    |'/help ' ~[\r\n]*
    |'/immutableworld ' ~[\r\n]*
    |'/item ' ~[\r\n]*
    |'/jfr ' ~[\r\n]*
    |'/kick ' ~[\r\n]*
    |'/kill ' ~[\r\n]*
    |'/list ' ~[\r\n]*
    |'/locate ' ~[\r\n]*
    |'/loot ' ~[\r\n]*
    |'/me ' ~[\r\n]*
    |'/mobevent ' ~[\r\n]*
    |'/msg ' ~[\r\n]*
    |'/music ' ~[\r\n]*
    |'/op ' ~[\r\n]*
    |'/ops ' ~[\r\n]*
    |'/pardon ' ~[\r\n]*
    |'/pardon-ip ' ~[\r\n]*
    |'/particle ' ~[\r\n]*
    |'/perf ' ~[\r\n]*
    |'/permission ' ~[\r\n]*
    |'/place ' ~[\r\n]*
    |'/playanimation ' ~[\r\n]*
    |'/playsound ' ~[\r\n]*
    |'/publish ' ~[\r\n]*
    |'/recipe ' ~[\r\n]*
    |'/reload ' ~[\r\n]*
    |'/remove ' ~[\r\n]*
    |'/replaceitem ' ~[\r\n]*
    |'/ride ' ~[\r\n]*
    |'/save ' ~[\r\n]*
    |'/save-all ' ~[\r\n]*
    |'/save-off ' ~[\r\n]*
    |'/save-on ' ~[\r\n]*
    |'/say ' ~[\r\n]*
    |'/schedule ' ~[\r\n]*
    |'/scoreboard ' ~[\r\n]*
    |'/seed ' ~[\r\n]*
    |'/setblock ' ~[\r\n]*
    |'/setidletimeout ' ~[\r\n]*
    |'/setmaxplayers ' ~[\r\n]*
    |'/setworldspawn ' ~[\r\n]*
    |'/spawnpoint ' ~[\r\n]*
    |'/spectate ' ~[\r\n]*
    |'/spreadplayers ' ~[\r\n]*
    |'/stop ' ~[\r\n]*
    |'/stopsound ' ~[\r\n]*
    |'/structure ' ~[\r\n]*
    |'/summon ' ~[\r\n]*
    |'/tag ' ~[\r\n]*
    |'/team ' ~[\r\n]*
    |'/teammsg ' ~[\r\n]*
    |'/teleport ' ~[\r\n]*
    |'/tell ' ~[\r\n]*
    |'/tellraw ' ~[\r\n]*
    |'/testfor ' ~[\r\n]*
    |'/testforblock ' ~[\r\n]*
    |'/testforblocks ' ~[\r\n]*
    |'/tickingarea ' ~[\r\n]*
    |'/time ' ~[\r\n]*
    |'/title ' ~[\r\n]*
    |'/titleraw ' ~[\r\n]*
    |'/tm ' ~[\r\n]*
    |'/toggledownfall ' ~[\r\n]*
    |'/tp ' ~[\r\n]*
    |'/trigger ' ~[\r\n]*
    |'/volumearea ' ~[\r\n]*
    |'/w ' ~[\r\n]*
    |'/wb ' ~[\r\n]*
    |'/weather ' ~[\r\n]*
    |'/whitelist ' ~[\r\n]*
    |'/worldborder ' ~[\r\n]*
    |'/worldbuilder ' ~[\r\n]*
    |'/wsserver ' ~[\r\n]*
    |'/xp ' ~[\r\n]*
    |'/# '  ~[\r\n]*
    ;
LineComment
    : '##'  ~[\r\n]* -> skip
    ;
BlockComment
    : '#=' .*? '=#' -> skip
    ;
