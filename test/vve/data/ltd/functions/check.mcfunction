execute store result score loop int run data get entity @s data.index_list
execute if score loop int matches 1.. run function ltd:tmp_rmv

data modify storage math:io temp set value []
scoreboard players set loop int 0
execute if score loop int < 10 int run function ltd:check_loop

scoreboard players operation temp int = @s ltd_id
scoreboard players operation temp int *= 10 int
execute store result score loop int run data get storage math:io temp
execute if score loop int matches 1.. run function ltd:check_rmv

kill @e[tag=tmp]