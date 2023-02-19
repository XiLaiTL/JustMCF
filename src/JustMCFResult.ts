export interface namespaceInfo{
    block?: string,
    func?: string,
    storage?: string,
    bossbar?: string,
    biome?: string,
    predicate?: string,
    dimension?: string,
    item?: string,
    loot?: string,
    item_modifier?: string,
    entity?: string,
    advancement?:string,
}
export interface option {
    file?: {
        mcfunctionGenerateMode?: ("cover" | "skip" | "append"| "prepend"),
        functionTagGenerateMode?: ("cover" | "skip" | "append"| "prepend")
    },
    namespace?: namespaceInfo,
    selector?: {
        limitDefaultOne?: boolean,
    },
    scbExpression?: {
        tempScbObjectiveName?: string,
        useConstNumberScbObjective?: boolean,
        constNumberScbObjectiveName?: string
    },
    functionStatement?: {
        flatWhenOneCommand?: boolean,
        stackNamespaceId?: string,
        commonIO?: boolean,
    },
    loopStatement?: {
        recursionPartNewFunctionFile?: boolean
        stackNamespaceId?: string,
    },
    existExpression?: {
        stackNamespaceId?: string,
        everyConditionNewFunctionFile?: boolean,
    },
    entityNameMap?: {
        [name:string]:string
    }
}

const _defaultOption:option = {
    file: {
        mcfunctionGenerateMode: "cover",
        functionTagGenerateMode:"cover" ,
    },
    namespace: {
        block: "minecraft",
        storage: "minecraft",
        func: "minecraft",
        biome: "minecraft",
        predicate: "minecraft",
        dimension: "minecraft",
        item: "minecraft",
        item_modifier: "minecraft",
        loot: "minecraft",
        bossbar: "minecraft",
        entity: "minecraft",
        advancement:"minecraft",
    },
    selector: {
        limitDefaultOne:false
    },
    scbExpression: {
        tempScbObjectiveName: "justmcf-temp-scoreboard",
        useConstNumberScbObjective: false,
        constNumberScbObjectiveName: "justmcf-const-scoreboard"
    },
    functionStatement: {
        flatWhenOneCommand: true,
        stackNamespaceId:"justmcf:program",
        commonIO:false
    },
    loopStatement: {
        recursionPartNewFunctionFile: true,
        stackNamespaceId:"justmcf:program",
    },
    existExpression: {
        stackNamespaceId:"justmcf:program",
        everyConditionNewFunctionFile:true
    },
    entityNameMap:{}
}
export function defaultOption() {
    const option:option = {
        file: { ..._defaultOption.file },
        namespace: { ..._defaultOption.namespace },
        selector:{..._defaultOption.selector},
        scbExpression: { ..._defaultOption.scbExpression },
        functionStatement: { ..._defaultOption.functionStatement },
        loopStatement:{..._defaultOption.loopStatement },
        existExpression: { ..._defaultOption.existExpression },
        entityNameMap:{..._defaultOption.entityNameMap}
    }
    return option
}

export class JustMCFResult {
    _option: option = defaultOption()
    get option(){return this._option}
    set option(val:option) {
        this._option = {
            file:{...this._option.file,...val.file},
            namespace: { ...this._option.namespace, ...val.namespace },
            selector:{...this._option.selector, ...val.selector },
            scbExpression: { ...this._option.scbExpression,...val.scbExpression },
            functionStatement: { ...this._option.functionStatement, ...val.functionStatement },
            loopStatement: { ...this._option.loopStatement, ...val.loopStatement },
            existExpression: { ...this._option.existExpression, ...val.existExpression },
            entityNameMap:{...this._option.entityNameMap,...val.entityNameMap}
        }
    }
    mcfunctions: { [mcfunctionFileName: string]: string } = {}
    functionTags: { [functionTagFileName: string]: { replace: boolean, values: string[] } } = {}
    
}
