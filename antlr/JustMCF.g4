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
    | namespaceSetStatement
    | funcRunStatement
    | funcImproveRunStatement
    | execStatement
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
    | dataOperationExpression
    | dataAssignExistExpression
    | scbOperationExpression
    | bossbarOperationExpression
    | entityExpression
    | leagalCommand
    ;
noInExecStatement
    : funcStatement                                                                                                                                              #noInExecStatementFunc
    | left=('->'|RUN) funcStatement                                                                                                                                    #noInExecStatementRunFunc
    | funcImproveStatement                                                                                                                                       #noInExecStatementFuncImprove
    | interfaceStatement                                                                                                                                         #noInExecStatementInterface
    | statement execStoreChild+                                                                                                                                  #noInExecStatementStore
    ;
leagalCommand : LeagalCommand;

nameSpaceStatement
    : (NAMSP|NAMESPACE) acceptableName? ('[' (nameSpaceSettings ','?)* ']')? '{' nameSpaceStatementInner* '}'
    ;
nameSpaceSettings
    : type=FUNC            '=' acceptableName                                                                                                                    #nameSpaceSettingsFunc
    | type=BLOCK           '=' acceptableName                                                                                                                    #nameSpaceSettingsBlock
    | type=STORAGE         '=' acceptableName                                                                                                                    #nameSpaceSettingsStorage
    | type=BOSSBAR         '=' acceptableName                                                                                                                    #nameSpaceSettingsBossbar
    | type=BIOME           '=' acceptableName                                                                                                                    #nameSpaceSettingsBiome
    | type=ENTITY          '=' acceptableName                                                                                                                    #nameSpaceSettingsEntity
    | type=PREDICATE       '=' acceptableName                                                                                                                    #nameSpaceSettingsPredicate
    | type=(DIM|DIMENSION) '=' acceptableName                                                                                                                    #nameSpaceSettingsDim
    | type=ITEM            '=' acceptableName                                                                                                                    #nameSpaceSettingsItem
    | type=LOOT            '=' acceptableName                                                                                                                    #nameSpaceSettingsLoot
    | type=ITEM_MODIFIER   '=' acceptableName                                                                                                                    #nameSpaceSettingsItemModifier
    | type=DEFAULT         '=' acceptableName                                                                                                                    #nameSpaceSettingsDefault
    | type=DEFAULT                                                                                                                                               #nameSpaceSettingsJustDefault
    ;
nameSpaceStatementInner
    : funcTagStatement
    | funcTagStatementInner
    | interfaceStatement
    | nameSpaceStatement
    ;
namespaceSetStatement
    : (NAMSP|NAMESPACE) acceptableName? ('[' (nameSpaceSettings ','?)* ']')? '{' statementInner* '}'
    ;
funcTagStatement
    : FUNC tagNameSpaceFunc('[' (funcTagSettings ','?)* ']')? (TAGGED tagNameSpaceFunc (',' tagNameSpaceFunc)*)? '{' funcTagStatementInner* '}'
    ;
funcTagSettings
    : REPLACE '=' boolValue                                                                                                                                      #funcTagSettingsReplace
    | REPLACED                                                                                                                                                   #funcTagSettingsReplaced
    ;
funcTagStatementInner
    : funcStatement                                                                                                                                              #funcTagSIFuncS
    | funcRunStatement                                                                                                                                           #funcTagSIFuncRunS
    | funcImproveStatement                                                                                                                                       #funcTagSIFuncImproveS
    | funcTagStatement                                                                                                                                           #funcTagSIFuncTagS
    ;
funcStatement
    : FUNC nameSpaceFunc (TAGGED tagNameSpaceFunc (',' tagNameSpaceFunc)*)? '{' statementInner* '}'
    ;
funcImproveStatement
    : FUNC nameSpaceFunc '(' funcImproveParam (',' funcImproveParam)* ')' typeName? '{' funcImproveStatementInner*  '}'
    ;
funcImproveParam
    : typeName? acceptableName
    ;
funcImproveStatementInner
    : statementInner
    | yeildStatement
    ;
yeildStatement
    : YEILD dataIdentifier
    ;
funcRunStatement
    : FUNC nameSpaceFunc
    | FUNC tagNameSpaceFunc
    ;
funcImproveRunStatement: funcImproveRunExpression;
funcImproveRunExpression: FUNC nameSpaceFunc '('funcImproveRunParam (',' funcImproveRunParam)* ')';
funcImproveRunParam
    : dataIdentifier
    ;
execStatement
    : EXEC? '{' execChild* '}' execStoreChild* (execRunChild|execStoreChild) execStoreChild*                                                                     #execWithRunOrChild
    | EXEC '{' execChild+ '}'                                                                                                                                    #execWithoutRunOrChild
    ;
execStoreChild
    : ('=>'|STORE|(STORE RESULT)) scbIdentifier                                                                                                                                         #execStoreResultScore
    | ('?=>'|('?'STORE)|(STORE SUCCESS)) scbIdentifier                                                                                                                                        #execStoreSuccessScore
    | ('=>'|STORE|(STORE RESULT)) dataIdentifier (numberType '*'? number)?                                                                                                              #execStoreResultData
    | ('?=>'|('?'STORE)|(STORE SUCCESS))  dataIdentifier (numberType '*'? number)?                                                                                                             #execStoreSuccessData
    | ('=>'|STORE|(STORE RESULT)) bossbarIdentifier value=(VALUE|MAX)?                                                                                                           #execStoreResultBossbar
    | ('?=>'|('?'STORE)|(STORE SUCCESS)) bossbarIdentifier value=(VALUE|MAX)?                                                                                                          #execStoreSuccessBossbar
    ;

execRunChild
    : ('->'|RUN) statement                                                                                                                                             #execDirectRun
    | ('->'|RUN) funcStatement                                                                                                                                         #execNamedRun
    | ('->'|RUN) FUNC? '{' statementInner* '}'                                                                                                                         #execAnonymousRun
    ;
execChild
    : ALIGN AcceptableName                                                                                                                                       #execAlign
    | ANCHORED anchor=(EYES|FEET)                                                                                                                                #execAnchored
    | IN nameSpaceDim                                                                                                                                            #execIn
    | AS selector                                                                                                                                                #execAs
    | AT selector                                                                                                                                                #execAt
    | FACING pos3Identifier                                                                                                                                      #execFacingPos
    | FACING ENTITY? selector anchor=(EYES|FEET)                                                                                                                         #execFacingEntity
    | (POSITIONED|POS) pos3Identifier                                                                                                                            #execPositionedPos
    | (POSITIONED|POS) AS? selector                                                                                                                                  #execPostionedAs
    | (ROTATED|ROT) pos2Identifier                                                                                                                               #execRotatedPos
    | (ROTATED|ROT) AS? selector                                                                                                                                     #execRotatedAs
    | cond=(IF|UNLESS)? ENTITY? selector                                                                                                                         #execIfEntity
    | cond=(IF|UNLESS)? SCORE? scbCoreIdentifier CompareOperation scbCoreIdentifier                                                                                      #execIfScore
    | cond=(IF|UNLESS)? SCORE? scbCoreIdentifier ((MATCHES? matchPart)|scbCompareNumber)                                                                             #execIfScoreMatches
    | cond=(IF|UNLESS)? BLOCK? pos3Identifier blockIdentifier                                                                                                    #execIfBlock
    | cond=(IF|UNLESS)? BLOCKS? pos3Identifier pos3Identifier pos3Identifier scan_mode=(ALL|MASKED)                                                              #execIfBlocks
    | cond=(IF|UNLESS)? DATA? dataIdentifier                                                                                                                     #execIfData
    | cond=(IF|UNLESS)? BIOME pos3Identifier nameSpaceBiome                                                                                                      #execIfBiome
    | cond=(IF|UNLESS)? PREDICATE? nameSpacePredicate                                                                                                            #execPredicate
    | execStoreChild                                                                                                                                             #execStore
    ;

CompareOperation
    : '<'|'<='| '=='|'>='|'>'
    ;
matchPart
    : NUMBER_INT '..' NUMBER_INT?
    | '..' NUMBER_INT
    | NUMBER_INT
    ;
scbCompareNumber
    : CompareOperation NUMBER_INT
    ;

dataIdentifier
    : LOCAL '::' nbtPath                                                                                                                              #dataStorageLocal
    | dataStorageIdentifier                                                                                                                              #dataStorage
    | nbtPathWithoutCompound                                                                                                                                                    #dataStorageWithEnv
    | dataEntityIdentifier                                                                                                                              #dataEntity
    | dataBlockIdentifier                                                                                                                              #dataBlock
    ;
dataStorageIdentifier
    : nameSpaceStorage '::' nbtPath
    | STORAGE nameSpaceStorage nbtPath
    ;
dataEntityIdentifier
    : selector '::' nbtPath
    | ENTITY selector nbtPath
    ;
dataBlockIdentifier
    : pos3Identifier '::' nbtPath
    | BLOCK pos3Identifier nbtPath
    ;
dataMergeExpression
    : nameSpaceStorage '|=' nbt                                                                                                                                  #dataMergeStorage
    | selector         '|=' nbt                                                                                                                                  #dataMergeEntity
    | pos3Identifier   '|=' nbt                                                                                                                                  #dataMergeBlock
    ;

dataOperationExpression
    : dataIdentifier ('*'? number)?                                                                                                                              #dataGet
    | dataMergeExpression                                                                                                                                        #dataMerge
    | dataIdentifier '|=' nbt                                                                                                                                    #dataModifyMergeValue
    | dataIdentifier '|=' dataRightValue                                                                                                                         #dataModifyMergeFrom
    | typeName? dataIdentifier '=' nbt                                                                                                                           #dataModifySetValue
    | typeName? dataIdentifier '=' dataRightValue                                                                                                                #dataModifySetFrom
    | dataIdentifier '..' nbt                                                                                                                                    #dataModifyAppendValue
    | dataIdentifier '..' dataRightValue                                                                                                                         #dataModifyAppendFrom
    | dataIdentifier '..0' nbt                                                                                                                                   #dataModifyPrependValue
    | dataIdentifier '..0' dataRightValue                                                                                                                        #dataModifyPrependFrom
    | dataIdentifier '..' NUMBER_INT nbt                                                                                                                         #dataModifyInsertValue
    | dataIdentifier '..' NUMBER_INT dataRightValue                                                                                                              #dataModifyInsertFrom
    | dataIdentifier REMOVE                                                                                                                                      #dataRemove
    ;
dataRightValue
    : dataIdentifier
    | funcImproveRunExpression
    ;

dataStatement
    : DATA '{' dataOperationExpression* '}'                                                                                                                      #dataSCompound
    | DATA nameSpaceStorage('::'nbtPath)? '{' dataOperationExpression* '}'                                                                                       #dataSIdentifierCompound
    ;

scbOperationExpression
    : scbCoreIdentifier                                                                                                                                              #scbGet
    | scbCoreIdentifier '+=' NUMBER_INT                                                                                                                              #scbAdd
    | scbCoreIdentifier '-=' NUMBER_INT                                                                                                                              #scbRemove
    | scbCoreIdentifier '=' NUMBER_INT                                                                                                                               #scbSet
    | scbCoreIdentifier '+=' scbCoreIdentifier                                                                                                                           #scbOptAddAssign
    | scbCoreIdentifier '-=' scbCoreIdentifier                                                                                                                           #scbOptSubAssign
    | scbCoreIdentifier '*=' scbCoreIdentifier                                                                                                                           #scbOptMulAssign
    | scbCoreIdentifier '/=' scbCoreIdentifier                                                                                                                           #scbOptDivAssign
    | scbCoreIdentifier '%=' scbCoreIdentifier                                                                                                                           #scbOptModAssign
    | scbCoreIdentifier '><' scbCoreIdentifier                                                                                                                           #scbOptExcFunc
    | scbCoreIdentifier '<<' scbCoreIdentifier                                                                                                                           #scbOptMinFunc
    | scbCoreIdentifier '>>' scbCoreIdentifier                                                                                                                           #scbOptMaxFunc
    | scbCoreIdentifier '=' scbCoreIdentifier                                                                                                                            #scbOptAssign
    | scbCoreIdentifier RESET                                                                                                                                        #scbReset
    | scbCoreIdentifier ENABLE                                                                                                                                       #scbEnable
    | scbCoreIdentifier ':=' scbSingleOperationExpression                                                                                                            #scbOptExpression
    ;
scbSingleOperationExpression
    : scbSingleOperationExpression op=('<<'|'>>') scbSingleOperationExpression                                                                                   #scbFuncExpression
    | scbSingleOperationExpression op=('*'|'/'|'%') scbSingleOperationExpression                                                                                 #scbOptMulDivModExpression
    | scbSingleOperationExpression op=('+'|'-') scbSingleOperationExpression                                                                                     #scbOptAddSubExpression
    | NUMBER_INT                                                                                                                                                 #scbTempNumberExpression
    | scbCoreIdentifier                                                                                                                                              #scbIdExpression
    | '(' scbSingleOperationExpression ')'                                                                                                                       #scbParenExpression
    ;

scbCoreIdentifier
    : nbtName selector
    | selector ':' nbtName
    ;
scbIdentifier
    : SCORE? scbCoreIdentifier
    ;

scbPlayerStatement: SCB '{' scbPlayerStatementInner* '}';
scbPlayerStatementInner
    : scbOperationExpression                                                                                                                                     #scbPlayerSIScbOperationExpression
    | selector? LIST                                                                                                                                             #scbPlayerSIScbList
    ;
scbObjectiveStatement
    : SCB( '(' criterion ')')? acceptableName display=json ('{' ('.'? scbStatementInner)* '}')?                                                                  #scbObjSDeclareWithName
    | SCB '(' criterion ')' acceptableName                                                                                                                       #scbObjSDeclareSingle
    | SCB( '(' criterion ')')? acceptableName DEFAULT ('{'('.'? scbStatementInner)* '}')?                                                                        #scbObjSDeclareDefault
    | SCB acceptableName '{' ('.'? scbStatementInner)* '}'                                                                                                       #scbObjSOperation
    ;
scbStatementInner
    : REMOVE                                                                                                                                                     #scbSIRemove
    | DISPLAYNAME json                                                                                                                                           #scbSIDisplayname
    | RENDERTYPE type=(HEARTS|INTEGER)                                                                                                                           #scbSIRendertype
    | DISPLAY acceptableName                                                                                                                                     #scbSIDisplay
    ;

bossbarStatement 
    : BOSSBAR nameSpaceBossbar json ('{' ( '.'? bossbarStatementInner)* '}')?                                                                                    #bossbarSDeclare
    | BOSSBAR nameSpaceBossbar '{' ( '.'? bossbarStatementInner)* '}'                                                                                            #bossbarSOperation
    ;
bossbarStatementInner
    : GET? type=(MAX|PLAYER|VALUE|VISIBLE)                                                                                                                       #bossbarSIGet
    | REMOVE                                                                                                                                                     #bossbarSIRemove
    | SET? COLOR color=(BLUE|GREEN|PINK|PURPLE|RED|WHITE|YELLOW)                                                                                                 #bossbarSISetColor
    | SET? MAX NUMBER_INT                                                                                                                                            #bossbarSISetMax
    | SET? NAME json                                                                                                                                             #bossbarSISetName
    | SET? PLAYERS selector                                                                                                                                      #bossbarSISetPlayer
    | SET? PLAYERS DEFAULT                                                                                                                                       #bossbarSISetPlayerNull
    | SET? STYLE style=(NOTCHED_6|NOTCHED_10|NOTCHED_12|NOTCHED_20|PROGRESS)                                                                                     #bossbarSISetStyle
    | SET? VALUE NUMBER_INT                                                                                                                                          #bossbarSISetValue
    | SET? VISIBLE boolValue                                                                                                                                     #bossbarSISetVisible
    ;
bossbarOperationExpression
    : bossbarIdentifier type=(MAX|PLAYER|VALUE|VISIBLE)?                                                                                                  #bossbarOpExprGet
    | bossbarIdentifier VALUE? '=' NUMBER_INT                                                                                                                 #bossbarOpExprAssignValue
    | bossbarIdentifier MAX '=' NUMBER_INT                                                                                                                    #bossbarOpExprAssignMax
    ;
bossbarIdentifier
    : BOSSBAR nameSpaceBossbar
    ;
titleStatement
    : TITLE '{' titleStatementInner* '}'                                                                                                                         #titleSCompound
    | TITLE selector '{' ('.'? titleSelectorStatementInner)* '}'                                                                                                 #titleSSelectorCompound
    ;
titleStatementInner
    : selector '.' titleSelectorStatementInner                                                                                                                #titleSISelectorSingle
    | selector '{' ('.'? titleSelectorStatementInner)* '}'                                                                                                       #titleSISelectorCompound
    ;
titleSelectorStatementInner
    : pos=(TITLE|SUBTITLE|ACTIONBAR) json                                                                                                                        #titleSSIJson
    | CLEAR                                                                                                                                                      #titleSSIClear
    | RESET                                                                                                                                                      #titleSSIReset
    | TIMES number number number                                                                                                                                 #titleSSITimes
    ;
titleIndependentStatementInner
    : pos=(TITLE|SUBTITLE|ACTIONBAR) json                                                                                                                        #titleISIJson
    | TITLE '.' CLEAR                                                                                                                                            #titleISIClear
    | TITLE '.' RESET                                                                                                                                            #titleISIReset
    | TITLE '.' TIMES number number number                                                                                                                       #titleISITimes
    ;

displayStatement
    : DISPLAY '{' displayStatementInner*  '}'                                                                                                                    #displaySCompound
    | DISPLAY selector '{' ('.'? displayIndependentStatementInner)*  '}'                                                                                         #displaySSelectorCompound
    ;
displayStatementInner
    : scbObjectiveStatement                                                                                                                                      #displaySIScb
    | bossbarStatement                                                                                                                                           #displaySIBossbar
    | selector '.' displayIndependentStatementInner                                                                                                              #displaySISelectorSingle
    | selector '{' ('.'? displayIndependentStatementInner)* '}'                                                                                                  #displaySISelectorCompound
    ;
displayIndependentStatementInner
    : titleIndependentStatementInner                                                                                                                             #displayISITitleSingle
    | TITLE '{' titleSelectorStatementInner* '}'                                                                                                                 #displayISITitleCompound
    | TEXT json                                                                                                                                                  #displayISIText
    | BOSSBAR nameSpaceBossbar json                                                                                                                              #displayISIBossbar
    ;
itemStatement
    : ITEM '{' itemStatementInner*'}'                                                                                                                            #itemSCompound
    | ITEM selector '{'itemSelectorStatementInner* '}'                                                                                                           #itemSSelectorCompound
    ;
lootStatement
    : LOOT '{' lootStatementInner* '}'                                                                                                                           #lootSCompound
    | LOOT selector '{' lootSelectorStatementInner*  '}'                                                                                                         #lootSSelectorCompound
    ;
lootStatementInner
    : pos3Identifier '+=' lootSource                                                                                                                             #lootSIInsert
    | pos3Identifier '=' lootSource                                                                                                                              #lootSISpawn
    | pos3Identifier '::' lootIndependentStatementInnerReplaceEntity                                                                                             #lootSIReplaceBlock
    | selector lootIndependentStatementInnerGive                                                                                                                 #lootSIGive
    | selector '::' lootIndependentStatementInnerReplaceEntity                                                                                                   #lootSIReplaceEntity
    | selector '{' lootSelectorStatementInner*  '}'                                                                                                              #lootSISelectorNest
    ;
lootSelectorStatementInner
    : lootIndependentStatementInnerGive
    | lootIndependentStatementInnerReplaceEntity
    ;
lootIndependentStatementInnerGive: ('+='|GIVE) lootSource;
lootIndependentStatementInnerReplaceEntity: item_slot '=' lootSource ('*'? NUMBER_INT)?;
lootSource
    :LOOT nameSpaceLoot                                                                                                                                         #lootSourceLoot
    |FISH nameSpaceLoot pos3Identifier hand=(MAINHAND|OFFHAND)?                                                                                                  #lootSourceFishHand
    |FISH nameSpaceLoot pos3Identifier nameSpaceItem                                                                                                             #lootSourceFishTool
    |KILL selector                                                                                                                                              #lootSourceKill
    |MINE pos3Identifier hand=(MAINHAND|OFFHAND)?                                                                                                               #lootSourceMineHand
    |MINE pos3Identifier nameSpaceItem                                                                                                                          #lootSourceMineTool
    ;
itemStatementInner
    : selector giveAndClearIndependentStatementInner                                                                                                             #itemSIGiveAndClear
    | selector '::' itemIndependentStatementInner                                                                                                                #itemSIEntity
    | pos3Identifier '::' itemIndependentStatementInner                                                                                                          #itemSIBlock
    | lootStatementInner                                                                                                                                         #itemSILootInner
    | selector '{'itemSelectorStatementInner* '}'                                                                                                                #itemSISelectorNest
    ;
itemSelectorStatementInner
    : giveAndClearIndependentStatementInner                                                                                                                      #itemSSIGiveAndClear
    | itemIndependentStatementInner                                                                                                                              #itemSSIItem
    | lootSelectorStatementInner                                                                                                                                 #itemSSILootInner
    ;
itemIndependentStatementInner
    : item_slot '=' nameSpaceItem ('*'? NUMBER_INT)?                                                                                                                    #itemISIReplaceWith
    | item_slot '=' selector '::' item_slot nameSpaceItemModifier?                                                                                               #itemISIReplaceFromEntity
    | item_slot '=' pos3Identifier '::' item_slot nameSpaceItemModifier?                                                                                         #itemISIReplaceFromBlock
    | item_slot '+=' nameSpaceItemModifier                                                                                                                       #itemISIModify
    ;
giveAndClearIndependentStatementInner
    : ('+='|GIVE) nameSpaceItem ('*'? NUMBER_INT)?                                                                                                                      #giveISI
    | ('-='|CLEAR) item_predicate ('*'? NUMBER_INT)?                                                                                                                   #clearISI
    ;

attrStatement
    : ATTR '{'attrStatementInner* '}'                                                                                                                            #attrSCompound
    | ATTR selector '{'attrIndependentStatementInner* '}'                                                                                                        #attrSSelectorCompound
    ;
attrStatementInner
    : selector '::' attrIndependentStatementInner                                                                                                                #attrSISingle
    | selector '{'attrIndependentStatementInner* '}'                                                                                                             #attrSISelectorCompound
    ;
attrIndependentStatementInner
    : registerName ALL? ('*'?number)?                                                                                                                            #attrISIGet
    | registerName BASE ('*'?number)?                                                                                                                            #attrISIGetBase
    | registerName BASE '=' number                                                                                                                               #attrISISetBase
    | registerName '+=' UUID16_ string '(' op=('+'|'*+'|'*') number ')'                                                                                  #attrISIModifierAdd
    | registerName '-=' UUID16_                                                                                                                                  #attrISIModifierRemove
    | registerName UUID16_ ('*'?number)?                                                                                                                         #attrISIModifierGet
    ;

entityStatement
    : ENTITY '(' PLAYER ')' playerName (','? playerName)*                                                                                                        #entitySDeclarePlayer
    | ENTITY '(' type=nameSpaceEntity ')' pos3Identifier nbt? ('{' ('.'? entityDeclareStatementInner)* '}')?                                                     #entitySDeclare
    | ENTITY '(' type=nameSpaceEntity ')' pos3Identifier? acceptableName nbt? ('{'('.'? entityDeclareStatementInner)* ('.' entityIndependentStatementInner)* '}')? #entitySDeclareWithName
    | ENTITY '{'entityStatementInner* '}'                                                                                                                        #entitySCompound
    | ENTITY selector '{' ('.' entityIndependentStatementInner)* '}'                                                                                             #entitySSelectorCompound
    ;
playerName
    : fake='#'? acceptableName
    ;
entityDeclareStatementInner
    : TAG '=' acceptableName (',' acceptableName)*                                                                                                               #entityDeclareSITag
    ;
tagIndependentStatementInner
    : TAG ('+='|ADD) acceptableName                                                                                                                              #tagISIAdd
    | TAG ('-='|REMOVE) acceptableName                                                                                                                           #tagISIRemove
    | TAG LIST                                                                                                                                                   #tagISIList
    ;
effectIndependentStatementInner
    : EFFECT ('-='|CLEAR) acceptableName                                                                                                                         #effectISIClear
    | EFFECT ('+='|GIVE) acceptableName second=NUMBER_INT? amplifier=NUMBER_INT? boolValue?                                                                              #effectISIGive
    | EFFECT ('+='|GIVE) acceptableName ('(' amplifier=NUMBER_INT')')? second=NUMBER_INT? boolValue?                                                                     #effectISIGiveSp
    | EFFECT CLEAR                                                                                                                                               #effectISIClearAll
    ;
tpIndependentStatementInner
    : TP selector                                                                                                                                                #TpISIDestination
    | TP pos3Identifier                                                                                                                                          #TpISIPos
    | TP pos5Identifier                                                                                                                                          #TpISIRotated
    | TP pos3Identifier pos2Identifier                                                                                                                           #TpISIRotatedDiv
    | TP pos3Identifier FACING pos3Identifier                                                                                                                    #TpISIFacing
    | TP pos3Identifier FACING ENTITY? selector anchor=(EYES| FEET)?                                                                                                     #TpISIFacingEntity
    ;
entityIndependentStatementInner
    : giveAndClearIndependentStatementInner                                                                                                                      #entityISIGiveAndClear
    | KILL                                                                                                                                                       #entityISIKill
    | tagIndependentStatementInner                                                                                                                               #entityISITag
    | effectIndependentStatementInner                                                                                                                            #entityISIEffect
    | tpIndependentStatementInner                                                                                                                                #entityISITp
    | TITLE '{' titleSelectorStatementInner* '}'                                                                                                                 #entityISITitleCompound
    | DISPLAY '{' displayIndependentStatementInner* '}'                                                                                                          #entityISIDisplayCompound
    | displayIndependentStatementInner                                                                                                                           #entityISIDisplaySingle
    | ITEM '::' itemIndependentStatementInner                                                                                                                    #entityISIItemSingle
    | (LOOT|ITEM)  lootIndependentStatementInnerGive                                                                                                             #entityISILootGiveSingle
    | (LOOT|ITEM) '::' lootIndependentStatementInnerReplaceEntity                                                                                                #entityISILootSingle
    | ITEM '{'itemSelectorStatementInner* '}'                                                                                                                    #entityISIItemCompound
    | LOOT '{' lootSelectorStatementInner*  '}'                                                                                                                  #entityISILootCompound
    | ATTR '::' attrIndependentStatementInner                                                                                                                    #entityISIAttrSingle
    | ATTR '{' attrIndependentStatementInner* '}'                                                                                                                #entityISIAttrCompound
    | execStatement                                                                                                                                              #entityISIExec
    ;
entityStatementInner
    : entityExpression                                                                                                                                           #entitySIEntityExpression
    | selector '{' ('.' entityIndependentStatementInner)* '}'                                                                                                    #entitySISelectorCompound
    ;
entityExpression
    : selector '.' entityIndependentStatementInner
    ;
blockStatement
    : BLOCK '{' blockStatementInner* '}'
    ;

blockStatementInner
    : pos3Identifier blockIdentifier mod=(DESTROY|KEEP|REPLACE)?                                                                                                 #blockSISetblock
    | pos3Identifier pos3Identifier blockIdentifier mod=(DESTROY|HOLLOW|KEEP|OUTLINE)?                                                                           #blockSIFill
    | pos3Identifier pos3Identifier blockIdentifier REPLACE block_predicate                                                                                      #blockSIFillReplace
    | pos3Identifier pos3Identifier pos3Identifier masked_mod=(REPLACE|MASKED)? mod=(FORCE|MOVE|NORMAL)?                                                         #blockSIClone
    | pos3Identifier pos3Identifier pos3Identifier FILTERED block_predicate mod=(FORCE|MOVE|NORMAL)?                                                             #blockSICloneFiltered
    ;
interfaceStatement
    : INTERFACE nameSpaceStorage nbt                                                                                                                             #interfaceSNamespace
    | INTERFACE dataIdentifier nbt                                                                                                                               #interfaceSIdentifier
    ;
dataAssignExistExpression
    : dataIdentifier '=' existExpression
    ;
existExpression
    : '{'execChild* '}'                                                                                                                                          #existExpressionExec
    | dataIdentifier                                                                                                                                             #existExpressionId
    | funcImproveRunExpression                                                                                                                                   #exisitExpressionFuncRun
    | TRUE                                                                                                                                                       #existExpressionTrue
    | FALSE                                                                                                                                                      #existExpressionFalse
    |'!' existExpression                                                                                                                                         #existExpressionNot
    | existExpression op='&' existExpression                                                                                                                     #existExpressionBitAnd
    | existExpression op='|' existExpression                                                                                                                     #existExpressionBitOr
    | existExpression op='&&' existExpression                                                                                                                    #existExpressionAnd
    | existExpression op='||' existExpression                                                                                                                    #existExpressionOr
    | '(' existExpression ')'                                                                                                                                    #existExpressionParen
    ;
ifStatement
    : IF existExpression execRunChild ifElseStatement?
    ;
ifElseStatement
    : ELSE execRunChild                                                                                                                                          #ifElseExec
    | ELSE ifStatement                                                                                                                                           #ifElseSIfS
    ;
whileStatement
    : WHILE '{' execChild* '}' execRunChild                                                                                                                      #whileStatementExec
    | WHILE  existExpression execRunChild                                                                                                                        #whileStatementExist
    ;
forStatement
    : FOR '{' dataOperationExpression '}' execRunChild
    ;

nbt: snbtValue;
json: jsonTextValue;

nbtPathWithoutCompound
    : nbtName
    | nbtName nbtCompound
    | nbtName ('[' NUMBER_INT ']'|'[]')* ('[' nbtCompound ']')?
    ;

nbtPath
    : nbtName
    | nbtCompound
    | nbtName nbtCompound
    | nbtName ('[' NUMBER_INT ']'|'[]')* ('[' nbtCompound ']')?
    ;

snbtValue
    : 'n{' nbtPair (',' nbtPair)* '}' | 'n{' '}'
    | 'n[' nbtValue (',' nbtValue)* ']' | 'n[' ']'
    | 'n[B;' ByteNumber (',' ByteNumber)* ']'
    | 'n[I;' NUMBER_INT (',' NUMBER_INT)* ']'
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
nbtIntArr: '[I;' NUMBER_INT (',' NUMBER_INT)* ']';
nbtLongArr: '[L;' LongNumber (',' LongNumber)* ']';
nbtString: STRING | STRING2;
ByteNumber: NUMBER_INT 'b' | NUMBER_INT 'B';
ShortNumber: NUMBER_INT 's' | NUMBER_INT 'S';
LongNumber: NUMBER_INT 'l' | NUMBER_INT 'L';
FloatNumber: (NUMBER_INT|NUMBER) 'f'| (NUMBER_INT|NUMBER) 'F';
DoubleNumber: (NUMBER_INT|NUMBER) 'd' | (NUMBER_INT|NUMBER) 'D';
STRING2: '\'' (ESC | SAFECODEPOINT)* '\'';


jsonTextValue
    : 'j{' jsonPair (',' jsonPair)* '}' | 'j{' '}'
    | 'j[' jsonValue (',' jsonValue)* ']' | '[' ']'
    | STRING
    | number
    | TRUE
    | FALSE
    | NULL
    ;
jsonText: jsonValue;
jsonObj: '{' jsonPair (',' jsonPair)* '}' | '{' '}';
jsonPair: STRING ':' jsonValue;
jsonArr: '[' jsonValue (',' jsonValue)* ']' | '[' ']';
jsonValue
    : STRING
    | number
    | jsonObj
    | jsonArr
    | TRUE
    | FALSE
    | NULL
    ;

boolValue: TRUE
    | FALSE
    ;
TRUE: 'true';
FALSE: 'false';
NULL: 'null';

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

UUID16_:   HEX1_8 '-'HEX1_4'-'HEX1_4'-'HEX1_4'-'HEX1_12  ;

fragment HEX1_4
    : HEX
    | HEX HEX
    | HEX HEX HEX
    | HEX HEX HEX HEX
    ;
fragment HEX1_8
    : HEX
    | HEX1_4 HEX1_4
    ;
fragment HEX1_12
    : HEX1_8
    | HEX1_4 HEX1_8
    ;

number: NUMBER_INT|NUMBER;

NUMBER_INT:'-'? INT_FRAGMENT
    ;

NUMBER
    : '-'? INT_FRAGMENT ('.' [0-9] +)? EXP?
    ;

fragment INT_FRAGMENT
    : '0' | [1-9] [0-9]*
    ;

fragment EXP
    : [Ee] [+\-]? INT_FRAGMENT
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
    |'/                                                                                                                                                          # '  ~[\r\n]*
    ;
LineComment
    : '#'  ~[\r\n]* -> skip
    ;
BlockComment
    : '#=' .*? '=#' -> skip
    ;

key:  NAMSP|NAMESPACE|LOCAL
    | EXEC | ALIGN | ANCHORED | EYES| FEET|IN |AS |AT |FACING | POSITIONED | POS | ROTATED |ROT|IF|UNLESS|ALL | MASKED |BIOME|VALUE|MAX |RUN |STORE
    | ENTITY | SCORE |PREDICATE |BLOCK |BLOCKS
    | SCB | DISPLAYNAME|RENDERTYPE|DISPLAY|ENABLE|LIST
    | DATA | RESET |ADD| REMOVE|STORAGE
    | FUNC | TAGGED
    | DEFAULT|PLAYER|PLAYERS
    | BOSSBAR|VISIBLE|BLUE|GREEN|PINK|PURPLE|RED|WHITE|YELLOW|COLOR|NAME|STYLE|NOTCHED_6|NOTCHED_10|NOTCHED_12|NOTCHED_20|PROGRESS|SET
    | TITLE|SUBTITLE|ACTIONBAR|TIMES
    | TEXT|ITEM|LOOT|GIVE|CLEAR|FISH|KILL|MINE|MAINHAND|OFFHAND
    | EFFECT | TAG |TP
    | ATTR|BASE|DESTROY|KEEP|REPLACE|HOLLOW|OUTLINE|FORCE|MOVE|NORMAL |GET
    | INTERFACE
    | WHILE|FOR|YEILD|BREAK|RETURN
    | FILTERED
    | REPLACED
    | DIM|DIMENSION|ITEM_MODIFIER
    | BYTE|SHORT|INT_|LONG|FLOAT|DOUBLE
    ;


NAMSP:'namsp';
NAMESPACE:'namespace';
LOCAL:'local';
    
EXEC:'exec'; 
RUN: 'run';
STORE: 'store';
ALIGN:'align'; 
ANCHORED:'anchored'; 
EYES:'eyes';
FEET:'feet';
IN:'in'; 
AS:'as'; 
AT:'at'; 
FACING:'facing'; 
POSITIONED:'positioned'; 
POS:'pos'; 
ROTATED:'rotated'; 
ROT:'rot';
IF:'if';
UNLESS:'unless';
ALL:'all'; 
MASKED:'masked'; 
BIOME:'biome';
VALUE:'value';
MAX:'max';
    
ENTITY:'entity'; 
SCORE:'score'; 
PREDICATE:'predicate'; 
BLOCK:'block'; 
BLOCKS:'blocks'; 
MATCHES:'matches';
RESULT:'result';
SUCCESS: 'successs';
    
SCB:'scb'; 
DISPLAYNAME:'displayname';
RENDERTYPE:'rendertype';
DISPLAY:'display';
ENABLE:'enable';
LIST:'list';
HEARTS: 'hearts';
INTEGER: 'integer';
DATA:'data'; 
STORAGE: 'storage';
RESET:'reset'; 
ADD:'add';
REMOVE:'remove';
    
FUNC:'func'; 
TAGGED:'tagged'; 
    
DEFAULT:'default';
PLAYER:'player';
PLAYERS:'players';
    
BOSSBAR:'bossbar';
VISIBLE:'visible';
BLUE:'blue';
GREEN:'green';
PINK:'pink';
PURPLE:'purple';
RED:'red';
WHITE:'white';
YELLOW:'yellow';
COLOR:'color';
NAME:'name';
STYLE:'style';
NOTCHED_6:'notched_6';
NOTCHED_10:'notched_10';
NOTCHED_12:'notched_12';
NOTCHED_20:'notched_20';
PROGRESS:'progress';
SET:'set';
    
TITLE:'title';
SUBTITLE:'subtitle';
ACTIONBAR:'actionbar';
TIMES:'times';
    
TEXT:'text';
ITEM:'item';
LOOT:'loot';
GIVE:'give';
CLEAR:'clear';
FISH:'fish';
KILL:'kill';
MINE:'mine';
MAINHAND:'mainhand';
OFFHAND:'offhand';

EFFECT: 'effect';
TAG: 'tag';
TP:'tp'; 
GET:'get';

ATTR:'attr';
BASE:'base';
DESTROY:'destroy';
KEEP:'keep';
REPLACE:'replace';
HOLLOW:'hollow';
OUTLINE:'outline';
FORCE:'force';
MOVE:'move';
NORMAL:'normal';
    
FILTERED:'filtered';
INTERFACE:'interface';
    
WHILE:'while';
ELSE: 'else';
FOR:'for';
YEILD:'yeild';
BREAK:'break';
RETURN:'return';
    
REPLACED:'replaced';
    
DIM:'dim';
DIMENSION:'dimension';
ITEM_MODIFIER:'item_modifier';

pos3Identifier:  pos1 pos1 pos1 ;
pos2Identifier:  pos1 pos1 ;
pos5Identifier:  pos1 pos1 pos1 pos1 pos1 ;
pos1: Pos1 | number;
Pos1: (('~'|'^') (NUMBER|NUMBER_INT))| ('~'|'^') ; //没写小数

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

numberType
    : BYTE|SHORT|INT_|LONG|FLOAT|DOUBLE
    ;
BYTE:'byte';
SHORT:'short';
INT_:'int';
LONG:'long';
FLOAT:'float';
DOUBLE:'double';
AcceptableName: [a-z_][a-z_\-0-9.]* ;
acceptableName: AcceptableName | key | numberType;
criterion: nameSpace;
NBTName: [a-z_A-Z][a-z_\-0-9.A-Z]* ;
nbtName: AcceptableName | NBTName | key | numberType;
resourceLocation: acceptableName ('/' acceptableName)*;
typeName: (acceptableName ':')? acceptableName ('['']')?;
item_slot: acceptableName;
string: acceptableName|STRING;
item_predicate
    : (nameSpaceItem| tagNameSpaceItem) (snbt|nbt)?
    ;
block_predicate
    : (nameSpaceBlock| tagNameSpaceBlock) blockstate? (snbt|nbt)?
    ;


