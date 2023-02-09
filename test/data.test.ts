import { test } from "vitest";
import { execute } from '../src/ManageSimplify';

test('Data Expression', () => {
    execute`
func test:data{
    ~ ~ ~ ::Base *3                              ##get block
    @e[limit=1]::Item                                       ##get 
    foo:storage::Data
    @e[limit=1] |= n{}                                      ##merge
    @e[limit=1]::Item |= n{}                                ##modify merge value 
    @e[limit=1]::Item |= @s::Item                           ##modify merge from
    @e[limit=1]::Item = n{}                                 ##modify set value
    @e[limit=1]::Item = foo:storage::Data
    @s::ArmorItems ..0 n{id:'iron_boots', Count:1b}  ##prepend
    @s::ArmorItems ..0 @s::Item
    @s::ArmorItems .. n{id:'iron_boots', Count:1b}   ##append
    @s::ArmorItems .. @s::Item
    @s::ArmorItems ..1 n{id:'iron_boots', Count:1b}  ##insert 1    
    @s::ArmorItems ..1 @s::Item
    foo:storage::Data 
}
    `
})

test('Data Namespace', () => {
    execute`
namsp [storage = test]{
    func test:data{
        id1::Data = id2::Data
        id1::Data .. id1::Data[0]
    }
}
    `
})

test('Data Statement', () => {
    execute`
func test:data{
    data{
        @e[limit=1]::Item
        foo:storage::Data remove
    }
    data foo:test::bar{ ##在foo:test bar节点上操作
        num1 = 1b
        num2 = 2b
    }
    data foo:test{  ##在foo:test根节点上操作
        bar.num1 = 1b
        bar.num2 = 2b
    }
}
    `
})
