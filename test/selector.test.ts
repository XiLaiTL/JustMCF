import { test } from 'vitest'
import { registerOnArray } from "../src/lib/ArrayHelper";
import { execute } from '../src/Simplify';

registerOnArray()

test('selector', () => {
    execute(`
func test:foo{
    { if @e[1234] }-> 
        say 1

} 
    `)
})