import { test } from "vitest";
import { execute } from '../src/ManageSimplify';

test('Namespace', () => {
    execute`
    namespace test{ ##将会把大括号块内所有的默认命名空间设置为test
        func foo1{
            io::input = 1b
        }
    }
    
    namespace test[
        func = test_func
        block = test_block
        storage = test_storage
        biome  = test_biome
        bossbar = test_bossbar
        predicate = test_predicate
        item = test_item
        loot =test_loot
        item_modifier = test_item_modifier
        dim = tes_tdim
        entity = test_entity
    ]{ ##除了括号设置的外，其他默认命名空间为test
        func foo2{
            {if ~ ~ ~ stone if pre if biome bio in dimm }-> 
                io::input = 1b => bossbar test 
            @s.give diamond *1
            @s.loot += loot testloot1
            @s.item::armor.legs += testitemmodifier1
            entity(pig) ~ ~ ~
            
        }
    }
    
    namsp test[default = yuushya]{ ##除了func和storage设置为test外，其他设置为yuushya
        func foo3{
            {if ~ ~ ~ stone if pre if biome bio in dimm }-> 
                io::input = 1b => bossbar test 
            @s.give diamond *1
            @s.loot += loot testloot1
            @s.item::armor.legs += testitemmodifier1
            entity(pig) ~ ~ ~
            
        }
    }
    
    
    namsp test[default]{ ##除了func和storage设置为test外，其他设置为minecraft
        func foo4{
            {if ~ ~ ~ stone if pre if biome bio in dimm }-> 
                io::input = 1b => bossbar test 
            @s.give diamond *1
            @s.loot += loot testloot1
            @s.item::armor.legs += testitemmodifier1
            entity(pig) ~ ~ ~
            
        }
    }
    
    namsp [func = test]{ ##只有func设置为test
        func foo5{
            {if ~ ~ ~ stone if pre if biome bio in dimm }-> 
                io::input = 1b => bossbar test 
            @s.give diamond *1
            @s.loot += loot testloot1
            @s.item::armor.legs += testitemmodifier1
            entity(pig) ~ ~ ~
            
        }
    }    
    
    `
})

test('Namespace Nest', () => {
    execute`
    namsp [func = test]{
        func ok{
            io::input = 1b
        }
        namsp[storage = onon]{
            func ok2{
                io::input = 1b
            }
        }
    }
    `
})