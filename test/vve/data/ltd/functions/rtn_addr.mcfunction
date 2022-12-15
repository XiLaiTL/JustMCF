scoreboard players operation result int = @s ltd_id
scoreboard players operation result int *= 10 int
execute store result score stemp int run data get entity @s data.index_list[0]
data remove entity @s data.index_list[0]
scoreboard players operation result int += stemp int

tag @s remove stmp
execute unless data entity @s data.index_list[0] run tag @s remove free