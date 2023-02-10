import { test } from 'vitest'
import { execute } from '../src/ManageSimplify.js';

test('selector', () => {
    execute(`
func test:foo{
    { if @e[1234] }-> 
        say 1

} 
    `)
})