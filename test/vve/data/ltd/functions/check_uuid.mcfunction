data modify storage math:io cmp set from storage math:io stemp
execute store success score stemp0 int run data modify storage math:io cmp set from entity @s UUID
execute if score stemp0 int matches 0 run scoreboard players set stemp int 0