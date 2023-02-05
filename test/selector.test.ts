import { test } from 'vitest'
import { registerOnArray } from "../src/lib/ArrayHelper";
import { execute } from '../src/ManageSimplify';

registerOnArray()

test('selector', () => {
    execute(`
func test:foo{
    { if @e[1234] }-> 
        say 1

} 
    `)
})