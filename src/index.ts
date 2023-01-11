import { Sandbox } from './EvalScript';
import { execute } from "./Simplify";
declare global {
    interface Array<T> {
        pushAll(arr: Array<T>): number;
        remove(elem: T): Array<T>;
    }
}
Array.prototype.pushAll = function <T>(arr: T[]): number {
    let len = this.length
    for (const elem of arr) len = this.push(elem)
    return len
}
Array.prototype.remove = function <T>(elem: T): T[] {
    const index = this.indexOf(elem)
    if (index > -1) { return this.splice(index, 1) }
    return this
}

execute(`
func test:foo {
    {{
        const list = [1,2,3,4,5]
        for(let i of list){#{
            setblock ~ ~$\{i} ~ stone
        }#}
    }}
    say hello
    say 1111
    { as @e[tag=temp_new,limit=1] }->func ltd:set{
        {unless math:io::ltd_addr[0]}->
            say 1
            => ltd_id@s
        {if math:io::ltd_addr[0]}->func ltd:addr_trans{
            say 2
            => ltd_id@s
        }
    }
    {if @s }->{
        say yes2
        {if @s }->{
            scb@temp := 6*7+7*(9+scb@temp)
            scb@temp := 9*(scb@temp1 + scb@temp2)
        }
    }
}

func test:a2 {
    say no
    say qaq
    { if @s }->func test:a3 {
        say nonono
    }
}

`)