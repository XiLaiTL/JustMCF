import { test } from "vitest";
import { execute } from '../src/ManageSimplify';

test('Title', () => {
    execute`
func test:title1{
    title {
        @s.title j{}
        @s.subtitle j{}
        @s.clear
        @s.times 10 70 20
        @s {
            .title j{}
            .clear
        }
    }
}

func test:title2{
    title @s{
        .title j{}
        .subtitle j{}
        .actionbar j{}
        .clear
        .reset
        .times 10 70 20
    }
}
    `
})

test('Bossbar', () => {
    execute`
func test:bossbar1{
    bossbar foo:newboss "New Boss"  ##bossbar add

    bossbar foo:newboss "New Boss" {
        color blue
        max 10
    }
}

func test:bossbar2{
    bossbar foo:newboss {
        get max     ##bossbar get max|players|value|visible
        remove 
        color blue       ##bossbar set
        max 10
        name j{}
        players @s       ##bossbar set players @s
        players default  ##bossbar set players
        style notched_6
        visible true
    }
}

func test:bossbar3{
    bossbar test:foo           ##bossbar get test:foo value
    bossbar test:foo max       ##bossbar get test:foo max|players|value|visible
    bossbar test:foo = 10      ##bossbar set test:foo value 10
    bossbar test:foo max = 10  ##bossbar set test:foo max 10
}
    `
})

test('Display', () => {
    execute`
func test:display1{
    display{
        @s.text j{}             ## tellraw @s {}
        @s.title j{}            ## title @s title {}
        @s.title times 10 70 20
        @s.title clear
        @s.title {
            .actionbar j{}
            .times 10 70 20
        }
        @s.actionbar j{}        ## title @s actionbar {}
        @s.subtitle j{}         ## title @s subtitle {}
        
        @s.bossbar foo:newboss  ##bossbar set players
        bossbar foo:newboss j{""}
        bossbar foo:newboss {
            style notched_6
        }
        scb test "分数"
        scb test {
            displayname "分数" 
            rendertype hearts
            display sidebar
        }
    }
}

func test:display2{
    display @s{
        .text j{}             ## tellraw @s {}
        .title j{}            ## title @s title {}
        .title times 10 70 20
        .title clear
    }
}

func test:display3{
    display {
        @s.text j{}
        @s {
            .title j{}
        }
    }
}
    `
})