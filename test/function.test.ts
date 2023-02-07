import { test } from "vitest";
import { registerOnArray } from "../src/lib/ArrayHelper";
import { execute } from '../src/ManageSimplify';

registerOnArray()

test('Function Divide', () => {
    execute(`
    
func test:a1 {
    say no
    say qaq
    { if @s }->func test:a3 {
        say nonono
    }
}
    `)
})

test('Function Divide2', () => {
    execute(`
    
func test:a2 {
    { as @e[tag=temp_new,limit=1] }->func ltd:set{
        {unless math:io::ltd_addr[0]}->
            say 1
            => ltd_id@s
        {if math:io::ltd_addr[0]}->func ltd:addr_trans{
            say 2
            => ltd_id@s
        }
    }
}
    `)
})

test('Anonymous Function Divide', () => {
    execute(`

func test:a3 {
    {if @e}->{
        {if @s}->{
            {if @s[limit=1]}->{
                say hello
            }
        }
        {if @s}->{
            {if @s[limit=1]}->{
                say hello
            }
        }
    }
}
    
    
    `)
})

test('Name Used Function', () => {
    execute(`
func test:as {
    say 1
}
    
    `)
})

test('Func Direct Run', () => {
    execute`
func foo:utils/test{    
    ->func foo:utils/test/first{ 

    }
}
    `
})

test('Func Tags', () => {
    execute`
func foo:test1 tagged #foo:test{

}

func #foo:test{
    func foo:test2{

    }
    func foo:test3{

    }
    func foo:test4
    func #foo:test1{

    }
    func #foo:test2
    func #foo:test3 tagged #foo:test2{

    }
    func #foo:utils/all/1[replace = true]{

    }
    func #foo:utils/all2[replaced]{
    
    }
}
    `
})