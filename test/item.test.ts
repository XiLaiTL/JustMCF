import { test } from "vitest";
import { execute } from '../src/ManageSimplify.js';

test('Loot', () => {
    execute`
func test:loot1{
    loot{
        ~ ~ ~ = loot test:loot_1                                      ##spawn
        ~ ~ ~ += loot test:loot_1                                     ##insert
        ~ ~ ~::container.5 = loot test:loot_1                         ##replace block
        @s += loot test:loot_1                                        ##give
        @s::container.5 = loot test:loot_1                            ##replace entity
    }

    loot{
        @s += loot test:loot_1                            ##mine
        @s += fish test:loot_1 ~ ~ ~ mainhand             ##fish
        @s += kill @e[limit=1]                            ##kill
        @s += mine ~ ~ ~ mainhand                         ##mine
    }
}
func test:loot2{
    loot @s {
        += loot test:loot_1
        container.5 = loot test:loot_1
    }
}
func test:loot3{
    loot{
        @s {
            .give loot test:loot_1
            container.5 = loot test:loot_1
        }
    }
}
    
    `
})

test('Item', () => {
    execute`
func test:item1{
    item{
        @e[limit=1]::armor.chest = stone *4                         ##replace with
        @e[limit=1]::armor.chest = @s::armor.chest foo:modifier     ##replace from
        @e[limit=1]::armor.chest += foo:modifier                    ##modify
        @e[limit=1] += stone *4                                     ##give
        @e[limit=1] -= stone *4                                     ##clear
        ~ ~ ~ = loot test:loot_1                                  ##loot spawn
        ~ ~ ~ += loot test:loot_1                                 ##loot insert
        ~ ~ ~::container.5 = loot test:loot_1                     ##loot replace block
        @s += loot test:loot_1                                    ##loot give
        @s::container.5 = loot test:loot_1                        ##loot replace entity
        
    }
}

func test:item2{
    item @s{
        armor.chest = stone *4
        armor.chest = @s::armor.chest foo:modifier
        .give stone *4
        .clear stone *4
    }
}

func test:item3{
    item{
        @s {
            armor.chest = stone *4
            armor.chest = @s::armor.chest foo:modifier
            .give stone *4
        }
    }
}
    `
})