import { test } from 'vitest'
import { execute } from '../src/ManageSimplify.js';

test('selector', () => {
    execute(`
func test:selector{
    @e[
        x=1,y=1,z=1,dx=1,dy=1,dz=1,
        x_rotation=1..2,y_rotation=2..3,
        distance=3..,
        nbt= n{
            Gound:1b,
            Test:6
        },
        scores={
            scb=1..2
        },
        tag=foo,tag=!foo,
        team=ok,team=!ok,
        type=item,type=!item,
        name=kkk,name=!kkk,
        level=1..2,
        predicate=minecraft:test,predicate=!test,
        gamemode=creative,gamemode=!creative,
        advm={test={ok=true}},
        advancements={test=false},
        limit = +1
    ].text "aaaa"
    @e[limit=-1].text "bbbb"
    @e[limit=5,limit=..].text "okk"
    @e[sort=nearest].text "no"
}
func test:selector2{
    entity(player) err,ress
    { @e[1234] }-> say 1
    { @p }-> say 1
    { @a }-> say 1
    { @a[1234] }-> say 1
    { @err }-> say 1
    { @ress }-> say 1
} 

func test:selector3{
    @e[1].text "hello1"                                         
    @e[+1].text "hello2"                                            
    @e[-1].text "hello3"                                            
    @a[1,level=10].text "hello"    
    @e(item)[pos=~ 2 2 , dpos=1 2 3 , rot=2 4 ].text "hello"    
    @e(pig)[n{Motion:[]},{scb1=1..0,scb2 < 0 }].text "hello"    
}
    `)
})