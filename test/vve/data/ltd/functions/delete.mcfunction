tag @s add free

data modify entity @s data.index_list prepend value 0
execute store result entity @s data.index_list[0] int 1 run scoreboard players operation stemp1 int %= 10 int

execute store result score stemp int if data entity @s data.index_list[]
execute if score stemp int = 10 int run function ltd:die