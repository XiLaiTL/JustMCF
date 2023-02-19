import { test } from "vitest";
import { execute } from '../src/ManageSimplify.js';

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

test('While Statement Break And Continue', () => {
    execute`
func test:while1{
    while{ @e }->{
        say 1
        if{ @s }->{
            say 2
            break
        }
        say 3
    }
}

func test:while2{
    while{ @e }->{
        say 1
        if{ @s }->{
            say 2
            continue
        }
        say 3
    }
}
    `
})

test('While Statement Nest break', () => {
    execute`
func test:while3{
    while{ @e }->{
        say 1
        if{ @s }->{
            say 2
            if { entity @p }->{
                say 3
                continue
            }
            say 4
        }
        say 5
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

    for{ io:test::list = n[1,3,4,5] }->{
        io:test::comp = io:test::list[0] 

    }
}
    `
    
})

test('For Statement Break And Continue', () => {
    execute`
func test:for1{
    for{ io:test::list }->{
        say 1
        if{ @s }->{
            say 2
            break
        }
        say 3
    }
}

func test:for2{
    for{ io:test::list }->{
        say 1
        if{ @s }->{
            say 2
            continue
        }
        say 3
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
        for{ io:test::list2 = n[ 1b, 2b, 3b ] }->func test:name{
            io:test::comp = io:test::list[0] 
    
        }
    }
}
    `
})
