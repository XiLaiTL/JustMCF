import { test } from 'vitest'
import { execute } from '../src/ManageSimplify.js';

test('Scb Declare', () => {
    execute`
func test:scb{
    scb test1 "displayname"
    scb(deathCount) test2 default {
        display sidebar
    }
    scb test2 {
        displayname "分数"
        rendertype hearts
        display sidebar
    }
    scb test3{ remove }
}
    `
})

test('Scb Player Statement', () => {
    execute`
func test:scb{

    entity(player) temp1,temp2,temp3

    scb {
        num@temp1 = 1
        num@temp2 := num@temp1 + num@temp3
    }

    scb { list }    	##scoreboard objectives list
    scb { @s list}  	##scoreboard players list @s
    scb { @s reset}     ##scoreboard players reset @s
}
    `
})

test('Scb Expression', () => {
    execute(`
    
func test:scb_expression{

    test@s +=1                            ##add
    test@s -=1                            ##remove
    test@s =1                             ##set
    test@s reset                          ##reset
    test@s enable					      ##enable
    test@s                                ##get
    test@s *= 10                          ##operation 并使用了临时记分板或者常量记分板
    test@s /= 10   
    test1@s += test2@s                    ##operation
    test1@s -= test2@s
    test1@s *= test2@s
    test1@s /= test2@s
    test1@s %= test2@s
    test1@s << test2@s                    ##取较小值
    test1@s >> test2@s                    ##取较大值
    test1@s >< test2@s                    ##交换

    ans@s := test2@s + test3@s / test4@s - 5 % test5@s

    entity(player) temp,temp1,temp2
    
    scb@temp := 6*7+7*(9+scb@temp)
    scb@temp := 9*(scb@temp1 + scb@temp2)
    
}
    
    `)
})