import { test } from 'vitest'
import { execute } from '../src/ManageSimplify.js';

test('selector', () => {
    execute(`
func test:foo{
    entity(player) err,ress
    { @e[1234] }-> say 1
    { @p }-> say 1
    { @a }-> say 1
    { @a[1234] }-> say 1
    { @err }-> say 1
    { @ress }-> say 1
} 
    `)
})