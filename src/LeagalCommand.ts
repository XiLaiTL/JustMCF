const leagalCommands = [
    'advancement',
    'alwaysday',
    'attribute',
    'ban',
    'ban-ip',
    'banlist',
    'bossbar',
    'camerashake',
    'changesetting',
    'clear',
    'clearspawnpoint',
    'clone',
    'connect',
    'damage',
    'data',
    'datapack',
    'daylock',
    'debug',
    'dedicatedwsserver',
    'defaultgamemode',
    'deop',
    'dialogue',
    'difficulty',
    'effect',
    'enchant',
    'event',
    'execute',
    'experience',
    'fill',
    'fillbiome',
    'fog',
    'forceload',
    'function',
    'gamemode',
    'gamerule',
    'gametest',
    'give',
    'help',
    'immutableworld',
    'item',
    'jfr',
    'kick',
    'kill',
    'list',
    'locate',
    'loot',
    'me',
    'mobevent',
    'msg',
    'music',
    'op',
    'ops',
    'pardon',
    'pardon-ip',
    'particle',
    'perf',
    'permission',
    'place',
    'playanimation',
    'playsound',
    'publish',
    'recipe',
    'reload',
    'remove',
    'replaceitem',
    'ride',
    'save',
    'save-all',
    'save-off',
    'save-on',
    'say',
    'schedule',
    'scoreboard',
    'seed',
    'setblock',
    'setidletimeout',
    'setmaxplayers',
    'setworldspawn',
    'spawnpoint',
    'spectate',
    'spreadplayers',
    'stop',
    'stopsound',
    'structure',
    'summon',
    'tag',
    'team',
    'teammsg',
    'teleport',
    'tell',
    'tellraw',
    'testfor',
    'testforblock',
    'testforblocks',
    'tickingarea',
    'time',
    'title',
    'titleraw',
    'tm',
    'toggledownfall',
    'tp',
    'trigger',
    'volumearea',
    'w',
    'wb',
    'weather',
    'whitelist',
    'worldborder',
    'worldbuilder',
    'wsserver',
    'xp'
]
const improvedCommand = [
    'item',
    'data',
    'loot',
]

export function convertLeagalCommands(code: string):string {
    let resCode = code
    for (const commandToken of improvedCommand) {
        const regex = new RegExp(String.raw`(?<=\n\s*)${commandToken}\s*\{`, 'g')
        resCode = resCode.replace(regex,`++${commandToken} {`)
    }
    for (const commandToken of leagalCommands) {
        const regex = new RegExp(String.raw`(?<=\n\s*)(?<![A-Z0-9a-z\-_+.])(?<!\+\+)${commandToken}\s`, 'g')
        resCode = resCode.replace(regex, `/${commandToken} `)
    }
    for (const commandToken of improvedCommand) {
        const regex = new RegExp(String.raw`\+\+${commandToken} \{`, 'g')
        resCode = resCode.replace(regex,`${commandToken} {`)
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