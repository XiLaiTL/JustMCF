import { test } from "vitest";
import { execute } from '../src/ManageSimplify';
import { registerOnArray } from '../src/lib/ArrayHelper';

registerOnArray()

test('Loot', () => {
    execute`
func test:loot1{
    loot{
        < ~ ~ ~ > = loot test:loot_1                                  ##spawn
        < ~ ~ ~ > += loot test:loot_1     m                           ##insert
        < ~ ~ ~ >::container.5 = loot test:loot_1                     ##replace block
        @s += loot test:loot_1                                        ##give
        @s::container.5 = loot test:loot_1                            ##replace entity
    }

    loot{
        @s += loot test:loot_1                            #mine
        @s += fish test:loot_1 < ~ ~ ~ > mainhand         #fish
        @s += kill @e[]                                   #kill
        @s += mine < ~ ~ ~ > mainhand                     #mine
    }
}
func test:loot2{
    loot @s{
        give test:loot_1
        container.5 = test:loot_1
    }
}
func test:loot3{
    loot{
        @s {
            give test:loot_1
            container.5 = test:loot_1
        }
    }
}
    
    `
})

test('Item', () => {
    execute`
func test:item1{
    item{
        @e[]::armor.chest = stone *4                         ##replace with
        @e[]::armor.chest = @s::armor.chest foo:modifier     ##replace from
        @e[]::armor.chest += foo:modifier                    ##modify
        @e[] += stone *4                                     ##give
        @e[] -= stone *4                                     ##clear
        < ~ ~ ~ > =                                   ##loot spawn
        < ~ ~ ~ > +=                                  ##loot insert
        < ~ ~ ~ >::container.5 =                      ##loot replace block
        @s +=                                         ##loot give
        @s::container.5 =                             ##loot replace entity
        
    }
}

func test:item2{
    item @s{
        armor.chest = stone *4
        armor.chest = @s::armor.chest foo:modifier
        give stone *4
        clear stone *4
    }
}

func test:item3{
    item{
        @s {
            armor.chest = stone *4
            armor.chest = @s::armor.chest foo:modifier
            give stone *4
        }
    }
}
    `
})