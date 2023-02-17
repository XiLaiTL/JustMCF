grammar JustMCF;

mcfFile: s_ (fileStatementInner (ends fileStatementInner)* ends?)?;
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
    | yieldStatement
    | returnStatement
    | breakStatement
    | continueStatement
    | execStatement
    | dataStatement
    | scbPlayerStatement
    | scbObjectiveStatement
    | titleStatement
    | bossbarStatement
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
    | statement s_ execStoreChild+                                                                                                                                  #noInExecStatementStore
    ;
leagalCommand : LeagalCommand;

nameSpaceStatement: 
    (NAMSP|NAMESPACE) acceptableName? s_
    ('[' s_ (nameSpaceSettings p_?)* ']' s_)? 
    '{' s_ (nameSpaceStatementInner (ends nameSpaceStatementInner)* ends?)? '}'
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
    | type=(ADVANCEMENT|ADVM)     '=' acceptableName                                                                                                             #nameSpaceSettingsAdvm
    | type=DEFAULT                                                                                                                                               #nameSpaceSettingsJustDefault
    ;
nameSpaceStatementInner
    : funcTagStatement
    | funcTagStatementInner
    | interfaceStatement
    | nameSpaceStatement
    ;
namespaceSetStatement: 
    (NAMSP|NAMESPACE) acceptableName? s_
    ('[' s_ (nameSpaceSettings p_?)* ']' s_)? 
    '{' s_ (statementInner (ends statementInner)* ends?)? '}'
    ;
funcTagStatement: 
    FUNC tagNameSpaceFunc s_
    ('[' s_ (funcTagSettings p_?)* ']' s_ )? 
    (TAGGED tagNameSpaceFunc (p_ tagNameSpaceFunc)* s_)?
    '{' s_ (funcTagStatementInner (ends funcTagStatementInner)* ends?)? '}'
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
funcStatement: 
    FUNC nameSpaceFunc s_
    (TAGGED tagNameSpaceFunc (p_ tagNameSpaceFunc)* s_)? 
    '{' s_ (statementInner (ends statementInner)* ends?)? '}'
    ;
funcImproveStatement: 
    FUNC nameSpaceFunc s_
    '(' s_ funcImproveParam (p_ funcImproveParam)* s_ ')' (s_ typeName)? s_ 
    '{' s_ (statementInner (ends statementInner)* ends?)?  '}'
    ;
funcImproveParam
    : typeName? acceptableName
    ;
yieldStatement
    : YIELD dataIdentifier
    ;
returnStatement
    : RETURN ('(' nameSpaceFunc ')')? dataIdentifier?
    ;
breakStatement: BREAK;
continueStatement
    : CONTINUE
    | RETURN '(' nameSpaceFunc ')' '+1'
    ;
funcRunStatement
    : FUNC nameSpaceFunc
    | FUNC tagNameSpaceFunc
    ;
funcImproveRunStatement: funcImproveRunExpression;
funcImproveRunExpression: 
    FUNC nameSpaceFunc '(' s_ funcImproveRunParam (p_ funcImproveRunParam)*  s_ ')';
funcImproveRunParam
    : dataIdentifier
    ;
execStatement
    : EXEC? s_ '{' s_ (execChild pn_)* '}' s_
    (execStoreChild s_)* 
    (execRunChild|execStoreChild) s_
    (execStoreChild s_)*                                                                     #execWithRunOrChild
    | EXEC s_ '{' s_ (execChild pn_)+ '}'                                                                                                                                    #execWithoutRunOrChild
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
    : ('->'|RUN) s_ statement                                                                                                                                             #execDirectRun
    | ('->'|RUN) s_ funcStatement                                                                                                                                         #execNamedRun
    | ('->'|RUN) s_ FUNC? s_ '{' s_ (statementInner (ends statementInner)* ends?)? '}'                                                                                                                         #execAnonymousRun
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
    | cond=(IF|UNLESS)? SCORE? scbCoreIdentifier ((MATCHES? intRange)|scbCompareNumber)                                                                             #execIfScoreMatches
    | cond=(IF|UNLESS)? BLOCK? pos3Identifier blockIdentifier                                                                                                    #execIfBlock
    | cond=(IF|UNLESS)? BLOCKS? pos3Identifier pos3Identifier pos3Identifier scan_mode=(ALL|MASKED)                                                              #execIfBlocks
    | cond=(IF|UNLESS)? DATA? dataIdentifier                                                                                                                     #execIfData
    | cond=(IF|UNLESS)? BIOME pos3Identifier nameSpaceBiome                                                                                                      #execIfBiome
    | cond=(IF|UNLESS)? PREDICATE? nameSpacePredicate                                                                                                            #execPredicate
    | execStoreChild                                                                                                                                             #execStore
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
    : DATA s_ '{' s_ (dataOperationExpression (ends dataOperationExpression)* ends?)? '}'                                                                                                                      #dataSCompound
    | DATA nameSpaceStorage('::'nbtPath)? s_ '{' s_ dataOperationExpression* '}'                                                                                       #dataSIdentifierCompound
    ;

scbOperationExpression
    : scbCoreIdentifier                                                                                                                                              #scbGet
    | scbCoreIdentifier  '+='  NUMBER_INT                                                                                                                              #scbAdd
    | scbCoreIdentifier  '-='  NUMBER_INT                                                                                                                              #scbRemove
    | scbCoreIdentifier  '='  NUMBER_INT                                                                                                                               #scbSet
    | scbCoreIdentifier  op='*='  NUMBER_INT                                                                                                                           #scbOptMulAssignNumber
    | scbCoreIdentifier  op='/='  NUMBER_INT                                                                                                                          #scbOptDivAssignNumber
    | scbCoreIdentifier  op='%='  NUMBER_INT                                                                                                                           #scbOptModAssignNumber
    | scbCoreIdentifier  '+='  scbCoreIdentifier                                                                                                                           #scbOptAddAssign
    | scbCoreIdentifier  '-='  scbCoreIdentifier                                                                                                                           #scbOptSubAssign
    | scbCoreIdentifier  '*='  scbCoreIdentifier                                                                                                                           #scbOptMulAssign
    | scbCoreIdentifier  '/='  scbCoreIdentifier                                                                                                                           #scbOptDivAssign
    | scbCoreIdentifier  '%='  scbCoreIdentifier                                                                                                                           #scbOptModAssign
    | scbCoreIdentifier  '><'  scbCoreIdentifier                                                                                                                           #scbOptExcFunc
    | scbCoreIdentifier  '<<'  scbCoreIdentifier                                                                                                                           #scbOptMinFunc
    | scbCoreIdentifier  '>>'  scbCoreIdentifier                                                                                                                           #scbOptMaxFunc
    | scbCoreIdentifier  '='  scbCoreIdentifier                                                                                                                            #scbOptAssign
    | scbCoreIdentifier RESET                                                                                                                                        #scbReset
    | scbCoreIdentifier ENABLE                                                                                                                                       #scbEnable
    | scbCoreIdentifier ':=' s_ scbSingleOperationExpression                                                                                                            #scbOptExpression
    ;
scbSingleOperationExpression
    : scbSingleOperationExpression s_ op=('<<'|'>>') s_ scbSingleOperationExpression                                                                                   #scbFuncExpression
    | scbSingleOperationExpression s_ op=('*'|'/'|'%') s_ scbSingleOperationExpression                                                                                 #scbOptMulDivModExpression
    | scbSingleOperationExpression s_ op=('+'|'-') s_ scbSingleOperationExpression                                                                                     #scbOptAddSubExpression
    | NUMBER_INT                                                                                                                                                 #scbTempNumberExpression
    | scbCoreIdentifier                                                                                                                                              #scbIdExpression
    | '(' s_ scbSingleOperationExpression s_ ')'                                                                                                                       #scbParenExpression
    ;

scbCoreIdentifier
    : nbtName selector
    | selector ':' nbtName
    ;
scbIdentifier
    : SCORE? scbCoreIdentifier
    ;

scbPlayerStatement: SCB s_ '{' s_ (scbPlayerStatementInner (ends scbPlayerStatementInner)* ends?)? '}';
scbPlayerStatementInner
    : scbOperationExpression                                                                                                                                     #scbPlayerSIScbOperationExpression
    | selector? LIST                                                                                                                                             #scbPlayerSIScbList
    ;
scbObjectiveStatement
    : SCB( '(' criterion ')')? nbtName s_ display=json s_
    ('{' s_ ('.'? scbStatementInner (ends '.'? scbStatementInner)* ends?)? '}')?                                                                  #scbObjSDeclareWithName
    | SCB '(' criterion ')' nbtName                                                                                                                       #scbObjSDeclareSingle
    | SCB( '(' criterion ')')? nbtName DEFAULT s_
    ('{' s_ ('.'? scbStatementInner (ends '.'? scbStatementInner)* ends?)? '}')?                                                                        #scbObjSDeclareDefault
    | SCB nbtName s_ '{' s_ ('.'? scbStatementInner (ends '.'? scbStatementInner)* ends?)? '}'                                                                                                       #scbObjSOperation
    ;
scbStatementInner
    : REMOVE                                                                                                                                                     #scbSIRemove
    | DISPLAYNAME json                                                                                                                                           #scbSIDisplayname
    | RENDERTYPE type=(HEARTS|INTEGER)                                                                                                                           #scbSIRendertype
    | DISPLAY acceptableName                                                                                                                                     #scbSIDisplay
    ;

bossbarStatement 
    : BOSSBAR nameSpaceBossbar s_ json s_('{' s_ ( '.'? bossbarStatementInner ends )* '}')?                                                                                    #bossbarSDeclare
    | BOSSBAR nameSpaceBossbar s_'{' s_ ( '.'? bossbarStatementInner (ends  '.'? bossbarStatementInner)* ends?)? '}'                                                                                            #bossbarSOperation
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
    : TITLE s_ '{' s_ (titleStatementInner (ends titleStatementInner)* ends?)? '}'                                                                                                                         #titleSCompound
    | TITLE selector s_ '{' s_ ('.' titleSelectorStatementInner (ends '.' titleSelectorStatementInner)* ends?)? '}'                                                                                                 #titleSSelectorCompound
    ;
titleStatementInner
    : selector s_ '.' titleSelectorStatementInner                                                                                                                #titleSISelectorSingle
    | selector s_ '{' s_ ('.' titleSelectorStatementInner (ends '.' titleSelectorStatementInner)* ends?)? '}'                                                                                                       #titleSISelectorCompound
    ;
titleSelectorStatementInner
    : pos=(TITLE|SUBTITLE|ACTIONBAR) json                                                                                                                        #titleSSIJson
    | CLEAR                                                                                                                                                      #titleSSIClear
    | RESET                                                                                                                                                      #titleSSIReset
    | TIMES number number number                                                                                                                                 #titleSSITimes
    ;
titleIndependentStatementInner
    : pos=(TITLE|SUBTITLE|ACTIONBAR) json                                                                                                                        #titleISIJson
    | TITLE CLEAR                                                                                                                                            #titleISIClear
    | TITLE RESET                                                                                                                                            #titleISIReset
    | TITLE TIMES number number number                                                                                                                       #titleISITimes
    ;

displayStatement
    : DISPLAY s_ '{' s_ (displayStatementInner (ends displayStatementInner)* ends?)?  '}'                                                                                                                    #displaySCompound
    | DISPLAY selector s_ '{' s_ ('.' displayIndependentStatementInner (ends '.' displayIndependentStatementInner)* ends?)?  '}'                                                                                         #displaySSelectorCompound
    ;
displayStatementInner
    : scbObjectiveStatement                                                                                                                                      #displaySIScb
    | bossbarStatement                                                                                                                                           #displaySIBossbar
    | selector s_ '.' displayIndependentStatementInner                                                                                                              #displaySISelectorSingle
    | selector s_ '{' s_ ('.' displayIndependentStatementInner (ends '.' displayIndependentStatementInner)* ends?)? '}'                                                                                                  #displaySISelectorCompound
    ;
displayIndependentStatementInner
    : titleIndependentStatementInner                                                                                                                             #displayISITitleSingle
    | TITLE s_ '{' s_ ( '.' titleSelectorStatementInner (ends  '.' titleSelectorStatementInner)* ends?)? '}'                                                                                                                 #displayISITitleCompound
    | TEXT json                                                                                                                                                  #displayISIText
    | BOSSBAR nameSpaceBossbar json?                                                                                                                              #displayISIBossbar
    ;
itemStatement
    : ITEM s_ '{' s_ (itemStatementInner (ends itemStatementInner)* ends?)?'}'                                                                                                                            #itemSCompound
    | ITEM selector s_ '{' s_ (itemSelectorStatementInner (ends itemSelectorStatementInner)* ends?)? '}'                                                                                                           #itemSSelectorCompound
    ;
lootStatement
    : LOOT s_ '{' s_ (lootStatementInner (ends lootStatementInner)* ends?)? '}'                                                                                                                           #lootSCompound
    | LOOT selector s_ '{' s_ (lootSelectorStatementInner (ends lootSelectorStatementInner)* ends?)?  '}'                                                                                                         #lootSSelectorCompound
    ;
lootStatementInner
    : pos3Identifier '+=' lootSource                                                                                                                             #lootSIInsert
    | pos3Identifier '=' lootSource                                                                                                                              #lootSISpawn
    | pos3Identifier '::' lootIndependentStatementInnerReplaceEntity                                                                                             #lootSIReplaceBlock
    | selector lootIndependentStatementInnerGive                                                                                                                 #lootSIGive
    | selector '::' lootIndependentStatementInnerReplaceEntity                                                                                                   #lootSIReplaceEntity
    | selector s_ '{' s_ (lootSelectorStatementInner (ends lootSelectorStatementInner)* ends?)?  '}'                                                                                                              #lootSISelectorNest
    ;
lootSelectorStatementInner
    : lootIndependentStatementInnerGive
    | lootIndependentStatementInnerReplaceEntity
    ;
lootIndependentStatementInnerGive: ('+='|('.' GIVE)) lootSource;
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
    | selector s_ '{' s_ (itemSelectorStatementInner s_)* '}'                                                                                                                #itemSISelectorNest
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
    : ('+='|('.'? GIVE)) nameSpaceItem ('*'? NUMBER_INT)?                                                                                                                      #giveISI
    | ('-='|('.'? CLEAR)) item_predicate ('*'? NUMBER_INT)?                                                                                                                   #clearISI
    ;

attrStatement
    : ATTR s_ '{' s_ (attrStatementInner (ends attrStatementInner)* ends?)? '}'                                                                                                                            #attrSCompound
    | ATTR selector s_ '{' s_ (attrIndependentStatementInner (ends attrIndependentStatementInner)* ends?)? '}'                                                                                                        #attrSSelectorCompound
    ;
attrStatementInner
    : selector '::' attrIndependentStatementInner                                                                                                                #attrSISingle
    | selector s_ '{' s_ (attrIndependentStatementInner (ends attrIndependentStatementInner)* ends?)? '}'                                                                                                             #attrSISelectorCompound
    ;
attrIndependentStatementInner
    : registerName ALL? ('*'?number)?                                                                                                                            #attrISIGet
    | registerName BASE ('*'?number)?                                                                                                                            #attrISIGetBase
    | registerName BASE '=' number                                                                                                                               #attrISISetBase
    | registerName '+=' s_ UUID16_ string '(' op=('+'|'*+'|'*') number ')'                                                                                  #attrISIModifierAdd
    | registerName '-=' s_ UUID16_                                                                                                                                  #attrISIModifierRemove
    | registerName UUID16_ ('*'?number)?                                                                                                                         #attrISIModifierGet
    ;

entityStatement
    : ENTITY '(' PLAYER ')' playerName (','? playerName)*                                                                                                        #entitySDeclarePlayer
    | ENTITY '(' type=nameSpaceEntity ')' s_ 
    pos3Identifier s_ 
    (nbt s_)?
    ('{' s_ ('.'? entityDeclareStatementInner (ends '.'? entityDeclareStatementInner)* ends?)? '}')?                                                     #entitySDeclare
    | ENTITY '(' type=nameSpaceEntity ')' s_ 
    (pos3Identifier s_)? acceptableName s_ 
    (nbt s_)? 
    ('{' s_ ('.'? entityDeclareStatementInner (ends '.'? entityDeclareStatementInner)* ends?)? s_
    ('.' entityIndependentStatementInner (ends '.' entityIndependentStatementInner)* ends?)? '}')? #entitySDeclareWithName
    | ENTITY s_ '{' s_ (entityStatementInner (ends entityStatementInner)* ends?)? '}'                                                                                                                        #entitySCompound
    | ENTITY selector s_ '{' s_ ('.' entityIndependentStatementInner (ends '.' entityIndependentStatementInner)* ends?)? '}'                                                                                             #entitySSelectorCompound
    ;
playerName
    : fake='#'? nbtName
    ;
entityDeclareStatementInner
    : TAG '=' nbtName (p_ nbtName)*                                                                                                               #entityDeclareSITag
    ;
tagIndependentStatementInner
    : TAG ('+='|ADD) nbtName                                                                                                                              #tagISIAdd
    | TAG ('-='|REMOVE) nbtName                                                                                                                           #tagISIRemove
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
    | TITLE s_ '{' s_ ('.' titleSelectorStatementInner (ends '.' titleSelectorStatementInner)* ends?)? '}'                                                                                                                 #entityISITitleCompound
    | DISPLAY s_ '{' s_ ('.' displayIndependentStatementInner ends) * '}'                                                                                                          #entityISIDisplayCompound
    | displayIndependentStatementInner                                                                                                                           #entityISIDisplaySingle
    | ITEM '::' itemIndependentStatementInner                                                                                                                    #entityISIItemSingle
    | (LOOT|ITEM)  lootIndependentStatementInnerGive                                                                                                             #entityISILootGiveSingle
    | (LOOT|ITEM) '::' lootIndependentStatementInnerReplaceEntity                                                                                                #entityISILootSingle
    | ITEM s_ '{' s_ (itemSelectorStatementInner (ends itemSelectorStatementInner)* ends?)? '}'                                                                                                                    #entityISIItemCompound
    | LOOT s_ '{' s_ (lootSelectorStatementInner (ends lootSelectorStatementInner)* ends?)?  '}'                                                                                                                  #entityISILootCompound
    | ATTR '::' attrIndependentStatementInner                                                                                                                    #entityISIAttrSingle
    | ATTR s_ '{' s_ (attrIndependentStatementInner (ends attrIndependentStatementInner)* ends?)? '}'                                                                                                                #entityISIAttrCompound
    | execStatement                                                                                                                                              #entityISIExec
    ;
entityStatementInner
    : entityExpression                                                                                                                                           #entitySIEntityExpression
    | selector s_ '{' s_ ('.' entityIndependentStatementInner (ends '.' entityIndependentStatementInner)* ends?)? '}'                                                                                                    #entitySISelectorCompound
    ;
entityExpression
    : selector s_ '.' entityIndependentStatementInner
    ;
blockStatement
    : BLOCK s_ '{' s_ (blockStatementInner (ends blockStatementInner)* ends?)? '}'
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
    : '{' s_ (execChild pn_)* '}'                                                                                                                                          #existExpressionExec
    | dataIdentifier                                                                                                                                             #existExpressionId
    | funcImproveRunExpression                                                                                                                                   #exisitExpressionFuncRun
    | TRUE                                                                                                                                                       #existExpressionTrue
    | FALSE                                                                                                                                                      #existExpressionFalse
    |'!' existExpression                                                                                                                                         #existExpressionNot
    | existExpression s_ op='&' s_ existExpression                                                                                                                     #existExpressionBitAnd
    | existExpression s_ op='|' s_ existExpression                                                                                                                     #existExpressionBitOr
    | existExpression s_ op='&&' s_ existExpression                                                                                                                    #existExpressionAnd
    | existExpression s_ op='||' s_ existExpression                                                                                                                    #existExpressionOr
    | '(' s_ existExpression s_ ')'                                                                                                                                    #existExpressionParen
    ;
ifStatement
    : IF s_ existExpression s_ execRunChild (s_ ifElseStatement)?
    ;
ifElseStatement
    : ELSE s_ execRunChild                                                                                                                                          #ifElseExec
    | ELSE s_ ifStatement                                                                                                                                           #ifElseSIfS
    ;
whileStatement
    : WHILE s_ '{' s_ (execChild pn_)* '}' s_ execRunChild                                                                                                                      #whileStatementExec
    | WHILE s_  existExpression s_ execRunChild                                                                                                                        #whileStatementExist
    ;
forStatement
    : FOR s_ '{' s_ dataOperationExpression s_ '}' s_ execRunChild
    ;

nbt: snbtValue;
json: jsonTextValue;

nbtPathWithoutCompound
    : nbtName
    | nbtName nbtCompound
    | nbtName ('[' s_ NUMBER_INT s_ ']'|'[]')* ('[' s_ nbtCompound s_ ']')?
    | nbtPath '.' nbtPath
    ;

nbtPath
    : nbtName
    | nbtCompound
    | nbtName nbtCompound
    | nbtName ('[' s_ NUMBER_INT s_ ']'|'[]')* ('[' s_ nbtCompound s_ ']')?
    | nbtPath '.' nbtPath
    ;

snbtValue
    : 'n{' s_ nbtPair (',' s_ nbtPair)*  s_'}' | 'n{' '}'
    | 'n[' s_ nbtValue (',' s_ nbtValue)* s_ ']' | 'n[' ']'
    | 'n[B;' s_ ByteNumber (',' s_ ByteNumber)* s_ ']'
    | 'n[I;' s_ NUMBER_INT (',' s_ NUMBER_INT)* s_ ']'
    | 'n[L;' s_ LongNumber (',' s_ LongNumber)* s_ ']'
    | nbtString|ByteNumber|ShortNumber|LongNumber|number|FloatNumber|DoubleNumber
    ;
snbt: nbtValue;
nbtCompound:'{'s_  nbtPair (',' s_ nbtPair)*  s_'}' | '{' '}';
nbtPair: nbtName s_ ':' s_ nbtValue;
nbtList: '[' s_ nbtValue (',' s_ nbtValue)* s_ ']' | '[' ']'|'[]';
nbtValue
    :nbtCompound|nbtList|nbtByteArr|nbtIntArr|nbtLongArr|nbtString|ByteNumber|ShortNumber|LongNumber|number |FloatNumber|DoubleNumber
    ;
nbtByteArr: '[B;' s_ ByteNumber (',' s_ ByteNumber)* s_ ']';
nbtIntArr: '[I;' s_ NUMBER_INT (',' s_ NUMBER_INT)* s_ ']';
nbtLongArr: '[L;' s_ LongNumber (',' s_ LongNumber)* s_ ']';
nbtString: STRING | STRING2;
ByteNumber: NUMBER_INT 'b' | NUMBER_INT 'B';
ShortNumber: NUMBER_INT 's' | NUMBER_INT 'S';
LongNumber: NUMBER_INT 'l' | NUMBER_INT 'L';
FloatNumber: (NUMBER_INT|NUMBER) 'f'| (NUMBER_INT|NUMBER) 'F';
DoubleNumber: (NUMBER_INT|NUMBER) 'd' | (NUMBER_INT|NUMBER) 'D';
STRING2: '\'' (ESC | SAFECODEPOINT)* '\'';


jsonTextValue
    : 'j{' s_ jsonPair (',' s_ jsonPair)* s_'}' | 'j{' '}'
    | 'j[' s_ jsonValue (',' s_  jsonValue)* s_ ']' | 'j[' ']'
    | STRING
    | number
    | TRUE
    | FALSE
    | NULL
    ;
jsonText: jsonValue;
jsonObj: '{' s_ jsonPair (',' s_  jsonPair)* s_ '}' | '{' '}';
jsonPair: STRING s_ ':' s_ jsonValue;
jsonArr: '[' s_ jsonValue (',' s_  jsonValue)* s_ ']' | '[' ']' | '[]';
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
DOUBLE_SEMICOLON: ';;' -> skip;
end : (';' | NL) NL*
    ;
ends: (';' | NL)+
    ;
p_ : (','| NL ) NL*;
pn_: ','? NL*;
s_: NL*;
NL: '\n' | '\r' '\n'? ;
WS: [ \f\t\r] + -> skip;


LeagalCommand
    :'/advancement '  ~[\r\n]*
    |'/attribute '  ~[\r\n]*
    |'/ban '  ~[\r\n]*
    |'/ban-ip '  ~[\r\n]*
    |'/banlist '  ~[\r\n]*
    |'/bossbar '  ~[\r\n]*
    |'/clear '  ~[\r\n]*
    |'/clone '  ~[\r\n]*
    |'/data '  ~[\r\n]*
    |'/datapack '  ~[\r\n]*
    |'/debug '  ~[\r\n]*
    |'/defaultgamemode '  ~[\r\n]*
    |'/deop '  ~[\r\n]*
    |'/difficulty '  ~[\r\n]*
    |'/effect '  ~[\r\n]*
    |'/enchant '  ~[\r\n]*
    |'/execute '  ~[\r\n]*
    |'/experience '  ~[\r\n]*
    |'/fill '  ~[\r\n]*
    |'/fillbiome '  ~[\r\n]*
    |'/forceload '  ~[\r\n]*
    |'/function '  ~[\r\n]*
    |'/gamemode '  ~[\r\n]*
    |'/gamerule '  ~[\r\n]*
    |'/give '  ~[\r\n]*
    |'/help '  ~[\r\n]*
    |'/item '  ~[\r\n]*
    |'/jfr '  ~[\r\n]*
    |'/kick '  ~[\r\n]*
    |'/kill '  ~[\r\n]*
    |'/list '  ~[\r\n]*
    |'/locate '  ~[\r\n]*
    |'/loot '  ~[\r\n]*
    |'/me '  ~[\r\n]*
    |'/msg '  ~[\r\n]*
    |'/op '  ~[\r\n]*
    |'/pardon '  ~[\r\n]*
    |'/pardon-ip '  ~[\r\n]*
    |'/particle '  ~[\r\n]*
    |'/perf '  ~[\r\n]*
    |'/place '  ~[\r\n]*
    |'/playsound '  ~[\r\n]*
    |'/publish '  ~[\r\n]*
    |'/recipe '  ~[\r\n]*
    |'/reload '  ~[\r\n]*
    |'/save-all '  ~[\r\n]*
    |'/save-off '  ~[\r\n]*
    |'/save-on '  ~[\r\n]*
    |'/say '  ~[\r\n]*
    |'/schedule '  ~[\r\n]*
    |'/scoreboard '  ~[\r\n]*
    |'/seed '  ~[\r\n]*
    |'/setblock '  ~[\r\n]*
    |'/setidletimeout '  ~[\r\n]*
    |'/setworldspawn '  ~[\r\n]*
    |'/spawnpoint '  ~[\r\n]*
    |'/spectate '  ~[\r\n]*
    |'/spreadplayers '  ~[\r\n]*
    |'/stop '  ~[\r\n]*
    |'/stopsound '  ~[\r\n]*
    |'/summon '  ~[\r\n]*
    |'/tag '  ~[\r\n]*
    |'/team '  ~[\r\n]*
    |'/teammsg '  ~[\r\n]*
    |'/teleport '  ~[\r\n]*
    |'/tell '  ~[\r\n]*
    |'/tellraw '  ~[\r\n]*
    |'/time '  ~[\r\n]*
    |'/title '  ~[\r\n]*
    |'/tm '  ~[\r\n]*
    |'/tp '  ~[\r\n]*
    |'/trigger '  ~[\r\n]*
    |'/w '  ~[\r\n]*
    |'/weather '  ~[\r\n]*
    |'/whitelist '  ~[\r\n]*
    |'/worldborder '  ~[\r\n]*
    |'/xp '  ~[\r\n]*
    |'/# '  ~[\r\n]*
    ;
LineComment
    : '##'  ~[\r\n]* -> skip
    ;
BlockComment
    : '#=' .*? '=#' -> skip
    ;

key:  NAMSP|NAMESPACE|LOCAL
    | EXEC | ALIGN | ANCHORED | EYES| FEET|IN |AS |AT |FACING | POSITIONED | POS | ROTATED |ROT|IF|UNLESS|ALL | MASKED |BIOME|VALUE|MAX |RUN |STORE
    | ENTITY | SCORE |PREDICATE |BLOCK |BLOCKS
    | SCB | DISPLAYNAME|RENDERTYPE|DISPLAY|ENABLE|LIST
    | DATA | RESET |ADD| REMOVE|STORAGE | RESULT | SUCCESS
    | FUNC | TAGGED
    | DEFAULT|PLAYER|PLAYERS
    | BOSSBAR|VISIBLE|BLUE|GREEN|PINK|PURPLE|RED|WHITE|YELLOW|COLOR|NAME|STYLE|NOTCHED_6|NOTCHED_10|NOTCHED_12|NOTCHED_20|PROGRESS|SET
    | TITLE|SUBTITLE|ACTIONBAR|TIMES
    | TEXT|ITEM|LOOT|GIVE|CLEAR|FISH|KILL|MINE|MAINHAND|OFFHAND
    | EFFECT | TAG |TP
    | ATTR|BASE|DESTROY|KEEP|REPLACE|HOLLOW|OUTLINE|FORCE|MOVE|NORMAL |GET
    | INTERFACE
    | WHILE|FOR|YIELD|BREAK|RETURN | CONTINUE
    | FILTERED
    | REPLACED
    | DIM|DIMENSION|ITEM_MODIFIER
    | BYTE|SHORT|INT_|LONG|FLOAT|DOUBLE
    | DPOS | X | Y | Z | DX | DY | DZ | X_ROTATION | Y_ROTATION | DISTANCE | NBT | SCORES | TEAM | TYPE | LEVEL | GAMEMODE | SPECTATOR | SURVIVAL | CREATIVE | ADVENTURE | ADVANCEMENTS | LIMIT | SORT | NEAREST | FURTHEST | RANDOM | ARBITRARY
    | ADVANCEMENT | ADVM
    | SelectorKey
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
YIELD:'yield';
BREAK:'break';
CONTINUE:'continue';
RETURN:'return';
    
REPLACED:'replaced';
    
DIM:'dim';
DIMENSION:'dimension';
ITEM_MODIFIER:'item_modifier';

DPOS:'dpos';
X:'x';
Y:'y';
Z:'z';
DX:'dx';
DY:'dy';
DZ:'dz';
X_ROTATION:'x_rotation';
Y_ROTATION:'y_rotation';
DISTANCE:'distance';
NBT:'nbt';
SCORES:'scores';
TEAM:'team';
TYPE:'type';
LEVEL:'level';
GAMEMODE:'gamemode';
SPECTATOR:'spectator';
SURVIVAL:'survival';
CREATIVE:'creative';
ADVENTURE:'adventure';
ADVANCEMENTS:'advancements';
ADVANCEMENT:'advancement';
ADVM:'advm';
LIMIT:'limit';
SORT:'sort';
NEAREST:'nearest';
FURTHEST:'furthest';
RANDOM:'random';
ARBITRARY:'arbitrary';

SelectorKey : 's' | 'r' | 'a' | 'e' | 'p';


pos3Identifier:  pos1 pos1 pos1;
pos2Identifier:  pos1 pos1 ;
pos5Identifier:  pos1 pos1 pos1 pos1 pos1 ;
pos1: Pos1 | number;
Pos1: (('~'|'^') (NUMBER|NUMBER_INT))| ('~'|'^') ; //没写小数

blockIdentifier:nameSpaceBlock blockstate? nbt? ;
blockstate: '[' s_ blockstateParam (p_ blockstateParam)? s_ ']';
blockstateValue: boolValue | NUMBER_INT | acceptableName;
blockstateParam: acceptableName '=' blockstateValue;


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
nameSpaceAdvancement:nameSpace;
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
AcceptableName: [a-z_][a-z_0-9]*;
NBTName: [a-z_A-Z][a-z_0-9A-Z]* ;
acceptableNameWithoutPointWithKey : AcceptableName| key | numberType ;
criterion: nameSpace;
nbtName
    : acceptableNameWithoutPointWithKey
    | NBTName
    | nbtName ('.'|'-') (acceptableNameWithoutPointWithKey|number)
    ;
//acceptableName: AcceptableName | key | numberType;
acceptableName: nbtName;
acceptableNameWithNumber : acceptableName |number;
resourceLocation: acceptableName ('/' acceptableNameWithNumber)*;
typeName: (nbtName ':')? nbtName ('['']')?;
item_slot: acceptableName;
string: nbtName|STRING;
item_predicate
    : (nameSpaceItem| tagNameSpaceItem) (snbt|nbt)?
    ;
block_predicate
    : (nameSpaceBlock| tagNameSpaceBlock) blockstate? (snbt|nbt)?
    ;
CompareOperation
    : '<'|'<='| '=='|'>='|'>'
    ;
intRange
    : NUMBER_INT '..' NUMBER_INT?
    | '..' NUMBER_INT
    | NUMBER_INT
    ;
positiveNumberRange
    : number '..' number?
    | '..' number
    | number
    ;
numberRange
    : number '..' number?
    | '..' number
    | number
    ;
selector
    : selectorWithParams #selectorParams
    | '@' acceptableNameWithoutPointWithKey #selectorName
    | '#' acceptableNameWithoutPointWithKey #selectorFakeName
    ;

selectorWithParams: '@' SelectorKey ( '(' s_ selectorTypes s_ ')' )? ('[' s_ selectorParam (p_ selectorParam)* s_ ']')?;

selectorParam
    : POS '=' pos3Identifier #selectorParamPos
    | DPOS '=' pos3Identifier #selectorParamDPos
    | ROT '=' pos2Identifier  #selectorParamRot
    | (X|Y|Z) '=' number  #selectorParamXYZ
    | (DX|DY|DZ) '=' number #selectorParamDXYZ
    | (X_ROTATION|Y_ROTATION) '=' numberRange #selectorParamRotation
    | DISTANCE '=' positiveNumberRange #selectorParamDistance
    | NBT '=' (nbtCompound|selectorNbtCompound )#selectorParamNbt
    | SCORES '=' '{' s_ selectorScoresPart ( p_ selectorScoresPart)* s_ '}' #selectorParamScores
    | TAG '=' not='!'? nbtName #selectorParamTag
    | TEAM '=' not='!'? nbtName #selectorParamTeam
    | NAME '=' not='!'? nbtName #selectorParamName
    | TYPE '=' not='!'? selectorType #selectorParamType
    | LEVEL '=' intRange #selectorParamLevel
    | PREDICATE '=' not='!'? nameSpacePredicate #selectorParamPredicate
    | GAMEMODE '=' not='!'? (SPECTATOR|SURVIVAL|CREATIVE|ADVENTURE) #selectorParamGamemode
    | (ADVANCEMENTS|ADVM) '=' '{' s_ selectorAdvancementsPart (p_ selectorAdvancementsPart)* s_ '}' #selectorParamAdvm
    | LIMIT '=' '+'? NUMBER_INT #selectorParamLimit
    | LIMIT '=' '..' #selectorParamLimitInf
    | SORT '=' (NEAREST|FURTHEST|RANDOM|ARBITRARY) #selectorParamSort
    | '+'?NUMBER_INT #selectorParamLimitNumber
    | selectorNbtCompound #selectorParamNbtCompound
    | '{' s_ selectorScoresPartImprove (p_ selectorScoresPartImprove)* s_ '}' #selectorParamScoreCompound
    ;
selectorType:nameSpaceEntity|tagNameSpaceEntity;
selectorTypes
    : selectorType #selectorTypeSingle
    | '!'selectorType (p_ '!'selectorType)*  #selectorTypeNot
    ;
selectorNbtCompound : 'n{' s_ nbtPair (',' s_ nbtPair)*  s_'}' | 'n{' '}';
selectorScoresPart: nbtName '=' intRange ;
selectorScoresPartImprove
    : nbtName scbCompareNumber  #selectorScoresPartCompare
    | nbtName intRange #selectorScoresPartRange
    ;
selectorAdvancementsPart
    : nameSpaceAdvancement '=' boolValue #selectorAdvmPartDirect
    | nameSpaceAdvancement '=' '{' s_ selectorAdvancementsCriteria (p_ selectorAdvancementsCriteria)* s_ '}' #selectorAdvmPartCriteria
    ;
selectorAdvancementsCriteria: acceptableName '=' boolValue;
