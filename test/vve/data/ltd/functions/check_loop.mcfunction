scoreboard players set stemp int 1
execute as @e[tag=tmp] if score @s int = loop int run scoreboard players set stemp int 0
data modify storage math:io stemp set from entity @s data.data_list[0].referrer_uuid
execute if data entity @s data.data_list[0].referrer_uuid as @e[tag=referrer] run function ltd:check_uuid
execute if score stemp int matches 1 unless data entity @s data.data_list[0]._static_ run function ltd:check_cor

data modify entity @s data.data_list append from entity @s data.data_list[0]
data remove entity @s data.data_list[0]
scoreboard players add loop int 1
execute if score loop int < 10 int run function ltd:check_loop