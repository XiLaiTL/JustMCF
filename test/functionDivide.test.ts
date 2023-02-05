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