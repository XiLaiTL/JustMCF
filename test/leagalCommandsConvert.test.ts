import { expect, test } from 'vitest'
import { convertBackLeagalCommands, convertLeagalCommands } from '../src/ManageLeagalCommand'
import { execute } from '../src/ManageSimplify';

test('Leagal Commands Convert', () => {
    const str = convertLeagalCommands(`
    say 1
    say 2
    item replace
    data get
    data {}
    item {}
        `)
    console.log(str)
})

test('Command Title Convert', () => {
    const str = convertLeagalCommands(`
    title @s title {}
    title @s actionbar {}
    title @s[limit=1] clear
    title @s{

    }
    title{

    }
        `)
    console.log(str)
})


test('Command Bossbar Convert', () => {
    const str = convertLeagalCommands(`
    bossbar add test:bar {}
    bossbar set test:bar color
    bossbar get test:bar max
    bossbar test:bar {

    }
    bossbar test:bar j{
        
    }
        `)
    console.log(str)
})

test('Convert back Leagal Commands', () => {
    const str = convertBackLeagalCommands(`
    /say 1
    /say 2
    /item replace
    /data get
    data {}
    item {}
        `)
    console.log(str)
})


test('Leagal Commands', () => {
    const code=`
    func testjf:_init{
        forceload add -1 -1 1 1
        function testjf:math_marker
        scoreboard objectives add int dummy
        scoreboard players set -1 int -1
        scoreboard players set 0 int 0
        scoreboard players set 1 int 1
        scoreboard players set 2 int 2
        scoreboard objectives add killtime dummy
        scoreboard objectives add testjf_coas minecraft.used:minecraft.carrot_on_a_stick
    }
    
    func testjf:math_marker{
        kill @e[tag=math_marker]
        summon marker 0 11 0 {Tags:["math_marker"]}
    }
    
    func testjf:tick{
        execute store result score temp int if entity @e[tag=math_marker]
        execute unless score temp int matches 1 run function testjf:math_marker
        execute as @a[scores={testjf_coas=1..}] if data entity @s SelectedItem.tag{fireball:1b} at @s anchored eyes positioned ^ ^ ^0.5 as @e[tag=math_marker,limit=1] run function testjf:_shoot
        scoreboard players reset @a testjf_coas
        scoreboard players add testjr_ltimer int 1
        execute if score testjr_ltimer int matches 10.. run function testjf:lowtick
    }
    
    func testjf:lowtick{
        scoreboard players remove @e[scores={killtime=1..}] killtime 1
        kill @e[scores={killtime=..-1}]
        scoreboard players set testjr_ltimer int 0
    }
    
    func testjf:_shoot{
        summon fireball ~ ~ ~ {Tags:["tmp"]}
        execute positioned 0.0 0.0 0.0 run tp @s ^ ^ ^1.5
        data modify entity @e[tag=tmp,limit=1] power set from entity @s Pos
        scoreboard players set @e[tag=tmp,limit=1] killtime 5
        tag @e remove tmp
    }
    `
    const str = convertLeagalCommands(code)
    console.log(str)

})
