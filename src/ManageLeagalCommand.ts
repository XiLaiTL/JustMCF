const leagalCommands = [
    'advancement',
    'attribute',
    'ban',
    'ban-ip',
    'banlist',
    //'bossbar',
    'clear',
    'clone',
    //'data',
    'datapack',
    'debug',
    'defaultgamemode',
    'deop',
    'difficulty',
    'effect',
    'enchant',
    'execute',
    'experience',
    'fill',
    'fillbiome',
    'forceload',
    'function',
    'gamemode',
    'gamerule',
    'give',
    'help',
    //'item',
    'jfr',
    'kick',
    'kill',
    'list',
    'locate',
    //'loot',
    'me',
    'msg',
    'op',
    'pardon',
    'pardon-ip',
    'particle',
    'perf',
    'place',
    'playsound',
    'publish',
    'recipe',
    'reload',
    'save-all',
    'save-off',
    'save-on',
    'say',
    'schedule',
    'scoreboard',
    'seed',
    'setblock',
    'setidletimeout',
    'setworldspawn',
    'spawnpoint',
    'spectate',
    'spreadplayers',
    'stop',
    'stopsound',
    'summon',
    'tag',
    'team',
    'teammsg',
    'teleport',
    'tell',
    'tellraw',
    'time',
    //'title',
    'tm',
    'tp',
    'trigger',
    'w',
    'weather',
    'whitelist',
    'worldborder',
    'xp', 
    '#'
]
const improvedCommand = [
    ['item',String.raw`(modify|replace)`],
    ['data',String.raw`(get|merge|modify|remove)`],
    ['loot',String.raw`(give|insert|spawn|replace)`],
    ['title', String.raw`@(p|a|r|s|e)(\[(.)+?\])?\s(clear|reset|title|subtitle|actionbar|times)`],
    ['bossbar', String.raw`(add|get|list|remove|set)`]

]

export function convertLeagalCommands(code: string):string {
    let resCode = code
    resCode = code.replace(/(=>|\?=>)/g,"\n$1")
    for (const [commandToken,params] of improvedCommand) {
        const regex = new RegExp(String.raw`(?<=(\n|'->')\s*)(?<![A-Z0-9a-z\-_+.])${commandToken}(?=\s${params})(\s|\n)`, 'g')
        resCode = resCode.replace(regex,`/${commandToken}`)
    }
    for (const commandToken of leagalCommands) {
        const regex = new RegExp(String.raw`(?<=\n\s*)(?<![A-Z0-9a-z\-_+.])(?<!\+\+)${commandToken}\s`, 'g')
        resCode = resCode.replace(regex, `/${commandToken} `)
    }
    return resCode
}

export function convertBackLeagalCommands(code: string): string { 
    let resCode = code
    for (const commandToken of leagalCommands) {
        const regex = new RegExp(String.raw`(?<![A-Z0-9a-z\-_+.])/${commandToken}\s`, 'g') //TODO: 因为现在用的是后处理所以有一点简化
        resCode = resCode.replace(regex,`${commandToken} `)
    }
    return resCode
}