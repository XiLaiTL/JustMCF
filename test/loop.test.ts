import { test } from "vitest";
import { execute } from '../src/ManageSimplify';
import { registerOnArray } from '../src/lib/ArrayHelper';

registerOnArray()

test('While Statemet', () => {
    execute`
func test:while{
    while{ @s }->{
        say 1
    }
    while{ @s }&&{ scb@s <= 1}->{
        say 1
    }
}
    `
})
test('While Statement Nest', () => {
    execute`
func test:while{
    while{ as @e }->{
        while{ as @s }->{
            say 1
        }
    }
}
    `
    
})

test('For Statement', () => {
    execute`
func test:for{
    io:test::list = n[ 1b, 2b, 3b ]
    for{ io:test::list }->{
        io:test::comp = io:test::list[0] 

    }

    for{ io:test::list |= n[1,3,4,5] }->{
        io:test::comp = io:test::list[0] 

    }
}
    `
    
})
test('For Statement Nest', () => {
    execute`
func test:for{
    io:test::list = n[ 1b, 2b, 3b ]
    for{ io:test::list }->{
        io:test::comp = io:test::list[0] 
        for{ io:test::list2 |= n[ 1b, 2b, 3b ] }->func test:name{
            io:test::comp = io:test::list[0] 
    
        }
    }
}
    `
})
