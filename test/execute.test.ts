import { test } from "vitest";
import { execute } from '../src/ManageSimplify';

test('Execute Pos And Rot', () => {
    execute`
func test:execute{
    {
        as @e[limit=1]
        at @e[limit=1]
        align xyz
        align xy
        align xz
        align yz
        align x
        align y
        align z
        anchored eyes
        anchored feet
        pos ~ ~ ~
        pos @e[limit=1]                           ##position as
        rot ~ ~
        rot @e[limit=1]                            ##rotated as
        facing ~ ~ ~				  
        facing @e[limit=1] eyes                    ##facing entity
    }->func foo:test
}
    `
})

test('Execute Condition', () => {
    execute`
func test:execute{
    entity(player) #temp
    {
        if @e[limit=1]                               ##if entity
        if ~ ~ ~ stone                           ##if block
        if ~ ~ ~ ~ ~ ~ ~ ~ ~ all         ##if blocks
        if biome ~ ~ ~ namespace                 ##if biome
        if test:is_use_hand						     ##if predicate
        if @e[limit=1]::{}                           ##if data entity
        if ~ ~ ~ ::{}                            ##if data block
        if foo:str::{}                               ##if data storage
        if sb1@e[limit=1] > sb2@s                    ##if score
        if sb1@e[limit=1] >= sb2@s                   ##if score
        if sb1@e[limit=1] == sb2@s                   ##if score
        if sb1@e[limit=1] <= sb2@s                   ##if score
        if sb1@e[limit=1] < sb2@s                    ##if score
        if sb1@e[limit=1] ..5                        ##if score xxx matches
        if sb1@e[limit=1] 2..5                       ##if score xxx matches
        if sb1@e[limit=1] 2..                        ##if score xxx matches
        if sb1@e[limit=1] 2                          ##if score xxx matches
        if sb1#temp < 2                              ##if score xxx matches
        if sb1#temp <= 2                             ##if score xxx matches
        if sb1#temp == 2                             ##if score xxx matches
        if sb1#temp >= 2                             ##if score xxx matches
        if sb1#temp > 2                              ##if score xxx matches
    }->func foo:test
    
    {
        entity @e[limit=1]                             ##if entity
        block ~ ~ ~ stone                          ##if block
        blocks ~ ~ ~ ~ ~ ~ ~ ~ ~ all       ##if blocks
        biome ~ ~ ~ namespace                      ##if biome
        predicate test:is_use_hand					   ##if predicate
        data @e[limit=1]::{}                           ##if data entity
        data ~ ~ ~ ::{}                            ##if data block
        data foo:str::{}                               ##if data storage
        score sb1@e[limit=1] > sb2@s                    ##if score
        score sb1@e[limit=1] >= sb2@s                   ##if score
        score sb1@e[limit=1] == sb2@s                   ##if score
        score sb1@e[limit=1] <= sb2@s                   ##if score
        score sb1@e[limit=1] < sb2@s                    ##if score
        score sb1@e[limit=1] ..5                        ##if score xxx matches
        score sb1@e[limit=1] 2..5                       ##if score xxx matches
        score sb1@e[limit=1] 2..                        ##if score xxx matches
        score sb1@e[limit=1] 2                          ##if score xxx matches
        score sb1#temp < 2                              ##if score xxx matches
        score sb1#temp <= 2                             ##if score xxx matches
        score sb1#temp == 2                             ##if score xxx matches
        score sb1#temp >= 2                             ##if score xxx matches
        score sb1#temp > 2                              ##if score xxx matches
    }->func foo:test

    {
        @e[limit=1]                              ##if entity
        ~ ~ ~ stone                          ##if block
        ~ ~ ~ ~ ~ ~ ~ ~ ~ all        ##if blocks
        biome ~ ~ ~ namespace                ##if biome
        test:is_use_hand					     ##if predicate
        @e[limit=1]::{}                          ##if data entity
        ~ ~ ~ ::{}                           ##if data block
        foo:str::{}                              ##if data storage
        sb1@e[limit=1] > sb2@s                    ##if score
        sb1@e[limit=1] >= sb2@s                   ##if score
        sb1@e[limit=1] == sb2@s                   ##if score
        sb1@e[limit=1] <= sb2@s                   ##if score
        sb1@e[limit=1] < sb2@s                    ##if score
        sb1@e[limit=1] ..5                        ##if score xxx matches
        sb1@e[limit=1] 2..5                       ##if score xxx matches
        sb1@e[limit=1] 2..                        ##if score xxx matches
        sb1@e[limit=1] 2                          ##if score xxx matches
        sb1#temp < 2                              ##if score xxx matches
        sb1#temp <= 2                             ##if score xxx matches
        sb1#temp == 2                             ##if score xxx matches
        sb1#temp >= 2                             ##if score xxx matches
        sb1#temp > 2                              ##if score xxx matches
    }->func foo:test
}
    `
})

test('Execute Store', () => {
    execute`
func test:execute{
    {
        as @p => scb@s
        as @s[limit=1] =>scb@s
        as @e[limit=1] =>scb@s
    }-> say 1

    {as @p}
    ?=> sb3@s                                     ##store success score
    ?=> ~ ~ ~ ::Base int*3                    ##store success block
    ?=> bossbar foo:bar value                     ##store success bossbar
    ?=> @e[limit=1]::XXXX int*3                   ##store success entity
    ?=> foo:storage::XXX                          ##store success storage
    => sb3@s                                     ##store result score
    => ~ ~ ~ ::Base int*3                    ##store result block
    => bossbar foo:bar value                     ##store result bossbar
    => @e[limit=1]::XXXX int*3                   ##store result entity
    => foo:storage::XXX                          ##store result storage
    -> func foo:test                             ##run function foo:test

    say 1 => foo:bar::kkk
    scb@s => foo:bar::kkk
    foo:bar::kkk => scb@s
}
    `
})

test('Execute Run', () => {
    execute`
func test:execute{
    {as @p}-> say 1
    {as @p}->func test:execute1{
        say 1
    }
    {as @p}->{
        say 1
    }
    {as @p}->data{
        in::io |= n{}
        in::io |= in::io.x
    }
}
    `
})