execute store result score stemp1 int run scoreboard players operation stemp0 int = input int
scoreboard players operation stemp0 int /= 10 int
scoreboard players operation stemp1 int %= 10 int

execute as @e[tag=data_marker] if score @s ltd_id = stemp0 int run function ltd:get_data