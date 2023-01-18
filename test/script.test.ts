import { test } from "vitest";
import { registerOnArray } from "../src/lib/ArrayHelper";
import { execute } from '../src/Simplify';

registerOnArray()
test('JavaScript Script', () => {
    execute(`

func test:foo {
    {{
        const list = [1,2,3,4,5]
        for(let i of list){#{
            setblock ~ ~$\{i} ~ stone
        }#}

        #{
            say hello $\{a}
        }#
    }}
    say hello
    say 1111



    {{
        #{
            say hello222 $\{a}
        }#
    }}
}
    `)
})