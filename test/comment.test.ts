import { test } from "vitest";
import { execute } from '../src/ManageSimplify';
import { registerOnArray } from '../src/lib/ArrayHelper';

registerOnArray()

test('Comment', () => {
    execute`
## line comment
#= block comment
test1
test2
=#
func test{ ##line comment
    # one line which will put out
    #=
    block comment
    =#
}
    `
})