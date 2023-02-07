import { test } from "vitest";
import { execute } from '../src/ManageSimplify';
import { registerOnArray } from '../src/lib/ArrayHelper';

registerOnArray()

test('All Pos', () => {
    execute`
func test:pos{
    { 
        facing < ~ ~ ~ >
        pos < ~ ~ ~ >
        rot < ~ ~ >
        if < ~ ~ ~ > stone
        if < ~ ~ ~ > < ~ ~ ~ > < ~ ~ ~ > all
        if biome < ~ ~ ~ > test:biome_
    }->{
        block{
            < ~ ~ ~ > minecraft:stone keep                      ##setblock
            < ~ ~ ~ > < ~ ~ ~ > minecraft:stone keep            ##fill
            < ~ ~ ~ > < ~ ~ ~ > < ~ ~ ~ > filtered oak_planks   ##clone
        }
        entity(pig) < ~ ~ ~ > n{OnGound:1b}
        entity(pig) xxx n{OnGound:1b} {
            .tag+= xx1
            
        }
        entity{
            @s.tp < ~ ~ ~ >
            @s.tp < ~ ~ ~ ~ ~ >
            @s.tp < ~ ~ ~ > < ~ ~ >
            @s.tp < ~ ~ ~ > facing < ~ ~ ~ >
            @s.item::container.5 = < ~ ~ ~ >::container.5 test:item_modifier
        }
        item{
            < ~ ~ ~ >::container.5 = < ~ ~ ~ >::container.5 test:item_modifier
            < ~ ~ ~ >::container.5 = mine < ~ ~ ~ > mainhand
            < ~ ~ ~ >::container.5 = fish test:loot_table < ~ ~ ~ > mainhand
        }
    }
}
    `
})