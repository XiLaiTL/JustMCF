import { test } from "vitest";
import { execute } from '../src/ManageSimplify';
import { registerOnArray } from '../src/lib/ArrayHelper';

registerOnArray()

test('Attr', () => {
    execute`
func test:attr{
    attr{
        @s::generic.attack_damage all                     ##get
        @s::generic.attack_damage base *4                 ##base get
        @s::generic.attack_damage base = 1                ##set
        @s::generic.attack_damage += 0-0-0-0-0 test(+3)   ##modifier add uuid name value add
        @s::generic.attack_damage += 0-0-0-0-0 test(*+3)  ##modifier add uuid name value multiply_base
        @s::generic.attack_damage += 0-0-0-0-0 test(*3)   ##modifier add uuid name value multiply
        @s::generic.attack_damage -= 0-0-0-0-0            ##modifier remove
        @s::generic.attack_damage 0-0-0-0-0 *4            ##modifier value get
    } 
}
func test:attr2{
    attr @s{
        generic.attack_damage all
        generic.attack_damage += 0-0-0-0-0 test(+3)
    }
}

func test:attr3{
    attr{
        @s {
            generic.attack_damage all
            generic.attack_damage += 0-0-0-0-0 test(+3)
        }
    }
}
    `
})

test('Entity Declare Players', () => {
    execute`
func test:entity{
    entity(player) temp1, temp3, #temp
    scb{
        scb#temp = 1
        scb@temp1 =2
        scb@temp2 = 3
    }
}
    `
})

test('Entity Declare', () => {
    execute`
func test:entity{
    entity(pig) < ~ ~ ~ > n{CustomName:"pig1"}
}

func test:entity2{
    entity(pig) < ~ ~ ~ > xxxx n{CustomName:"pig1"} 
    entity @xxxx{   
        .tp < ~ ~ ~ >
    }
}

func test:entity3{
    entity(pig) < ~ ~ ~ > xxxx n{CustomName:"pig1"} { tag = tag1,tag2 }
}

func test:entity4{
    entity(pig) < ~ ~ ~ > xxxx n{CustomName:"pig1"} {
        .tag = tag1,tag2 ##将会解析进初始化语句的nbt中
        .tag+= temp      ##将会解析为tag add
    }
}
    `
})

test('Entity Operation', () => {
    execute`
func test:entity{
    entity{
        @s.tp < ~ ~ ~ >                                    ##tp
        @s.tag+= temp                                      ##tag
        @s.tag-= temp                                      ##tag
        @s.effect+= speed(3) 20 true                       ##effect give @s speed 20 3 true
        @s.effect+= speed 20 3 true
        @s.effect-= speed                                  ##effect clear @s speed
        @s.effect clear
        @s.kill
        @s.item::container.5 = stone 1                     ##item 
        @s.loot::container.5 = loot test:loot_1            ##loot 也可以写成item
        item {
            < ~ ~ ~ > = loot test:loot_1
            < ~ ~ ~ > += loot test:loot_1 
        }
        @s.item {
            give loot test:loot_1
            give fish test:loot_1 < ~ ~ ~ > mainhand
        }
        @s.loot {
            give loot test:loot_1
            give fish test:loot_1 < ~ ~ ~ > mainhand         
        }
        @s.attr::generic.attack_damage +=  0-0-0-0-0 test(+3)                ##attr 
    }
}

    `
})