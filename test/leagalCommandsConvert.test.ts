import { expect, test } from 'vitest'
import { convertBackLeagalCommands, convertLeagalCommands } from '../src/LeagalCommand'

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

