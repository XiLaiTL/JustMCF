tag @e[tag=data_marker,tag=free,limit=1] add stmp
execute unless entity @e[tag=stmp,limit=1] run function ltd:data_marker
execute as @e[tag=stmp,limit=1] run function ltd:rtn_addr