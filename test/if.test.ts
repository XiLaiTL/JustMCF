import { test } from "vitest";
import { execute } from '../src/ManageSimplify.js';

test('Exist Expression', () => {
    execute`
func test:exist{
    foo:stor::bool_1 = {if @e} | {if ~ ~ ~ stone} & {if @s}
    foo:stor::bool_1 = ({if @e} | {if ~ ~ ~ stone}) & {if @s}
    foo:stor::bool_1 = {if @e} & {if ~ ~ ~ stone} | {if @s}
    foo:stor::bool_1 = ! {if @e} || {if ~ ~ ~ stone} || {if @s}
    foo:stor::bool_1 = {if @e} && {if ~ ~ ~ stone} || {if @s}
    foo:stor::bool_1 = {if @e} && {if ~ ~ ~ stone} || {if @s} | true
    foo:stor::bool_1 = {if @e} && {if ~ ~ ~ stone} || {if @s} & false
    foo:stor::bool_1 = true
    foo:stor::bool_1 = false
}
    `
})


test('If Statement', () => {
    execute`
func test:if{
    if {entity @e} && {scb@s <=1 } && foo:stor::bool_1 ->{
        say 1
        say 1.1
    }
    else if {entity @s} || {scb@s >= 2}->{ ##匿名函数
        say 2
        say 2.2
    }
    else ->func foo:test{ ##具名函数
        say 3
        say 3.3
    }
}
    `
})

test('If Statement Nest', () => {
    execute`
func test:if{
    if {entity @e} && {scb@s <=1 } && foo:stor::bool_1 ->{
        say 1
        if {entity @e} && {scb@s <=1 } && foo:stor::bool_1 ->{
            say 11
            say 11.1
        }
        else if {entity @s} || {scb@s >= 2}->{ ##匿名函数
            say 12
            say 12.2
        }
        else ->func foo:test{ ##具名函数
            say 13
            say 13.3
        }
    }
    else if {entity @s} || {scb@s >= 2}->{ ##匿名函数
        say 2
        if {entity @e} && {scb@s <=1 } && foo:stor::bool_1 ->{
            say 21
            say 21.1
        }
        else if {entity @s} || {scb@s >= 2}->{ ##匿名函数
            say 22
            say 22.2
        }
        else ->func foo:test{ ##具名函数
            say 23
            say 23.3
        }
    }
    else ->func foo:test{ ##具名函数
        say 3
    }
}
    `
})