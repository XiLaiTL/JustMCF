import { test } from "vitest";
import { execute } from '../src/ManageSimplify';

test('Block Statement', () => {
    execute`
func test:block{
    block{
        ~ ~ ~ minecraft:stone keep                      ##setblock
        ~ ~ ~ ~ ~ ~ minecraft:stone keep            ##fill
        ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered oak_planks   ##clone
    }
}
    `
})