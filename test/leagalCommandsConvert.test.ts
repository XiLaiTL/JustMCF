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
