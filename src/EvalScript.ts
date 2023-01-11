type contextBase = {_script_res:string[],unfold:(sentence:string)=>void}
export class Sandbox {
    private _context: object = {}
    private _proxy: object;
    constructor(context: object = {}) {
        const base = {
            _script_res:[] as string[],
            unfold(sentence:string){this._script_res.push(sentence)}
        }
        this._context = { ...context,...base }
        this._proxy = new Proxy(this._context, {
            set<T,K extends keyof T >(obj:T, prop:K, value:any){ obj[prop] = value; return true},
            get<T,K extends keyof T>(obj:T, prop:K) {return obj[prop]},
            has(obj, prop) { return true; }
            /* 
            set(obj,prop,value){Object.defineProperty(obj, prop, { value: value }) //obj[prop]=value}
            get(obj,prop){
                if(prop in obj) return Object.entries(obj).filter((arr)=>arr[0]==prop)[0][1] //obj[prop]
                return undefined;}*/
        });
        
    }
    evalute(code: string): string {
        
        const anonymouFunc = new Function('proxy', `
        with(proxy){
            ;${code};
        }
        `);
        (this._proxy as contextBase)._script_res = []
        anonymouFunc(this._proxy)
        return (this._proxy as contextBase)._script_res.join('\n')
    }
}

export function evalAndReplace(code: string):string {
    let resCode = code.replace(/\#\{/g, "unfold(`").replace(/\}\#/g, "`)")
    const regex = /\{\{[\n\r]*((.|[\n\r])+?)[\n\r]*\}\}/g
    const matcher = resCode.matchAll(regex)
    const sandbox = new Sandbox()
    for (const res of matcher) {
        const codeSection = res[0]
        const codeWithoutSymbol = res[1]
        const evalRes = sandbox.evalute(codeWithoutSymbol)
        resCode=resCode.replace(codeSection,evalRes)
    }
    return resCode
}

