import { test } from "vitest";
import { execute } from '../src/ManageSimplify';
import { registerOnArray } from '../src/lib/ArrayHelper';

registerOnArray()

test('Block Statement', () => {
    execute`
func test:block{
    block{
        < ~ ~ ~ > minecraft:stone keep                      ##setblock
        < ~ ~ ~ > < ~ ~ ~ > minecraft:stone keep            ##fill
        < ~ ~ ~ > < ~ ~ ~ > < ~ ~ ~ > filtered oak_planks   ##clone
    }
}
    `
})