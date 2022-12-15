summon marker 0 11 0 {Tags:["tmp","stmp"]}
execute store result score @e[tag=stmp,limit=1] int run data get entity @s data.index_list[0]
tag @e remove stmp
data modify entity @s data.index_list append from entity @s data.index_list[0]
data remove entity @s data.index_list[0]
scoreboard players remove loop int 1
execute if score loop int matches 1.. run function ltd:tmp_rmv