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
            set(obj, prop, value){
                Object.defineProperty(obj, prop, { value: value }) //obj[prop]=value
                return true
            },
            get(obj, prop) {
                if(prop in obj) return Object.entries(obj).filter((arr)=>arr[0]==prop)[0][1] //obj[prop]
                return undefined;
            },
            has(obj, prop){
                return true;
            }
        });
    }
    evalute(code: string): string {
        const anonymouFunc = new Function('proxy', `
        with(proxy){
            ;${code};
            return _script_res
        }
        `)
        const res = anonymouFunc(this._proxy) as string[]
        return res.join('\n')
    }
}

export function evalAndReplace(code: string):string {
    let resCode = code.replace("#{", "unfold(`").replace("}#", "`)")
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

