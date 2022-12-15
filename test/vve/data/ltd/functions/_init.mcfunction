#scoreboard set
scoreboard objectives add int dummy
scoreboard objectives add ltd_id dummy
scoreboard players set 10 int 10
scoreboard players set #id ltd_id 0

#forceload
forceload add -1 -1 1 1
kill @e[tag=data_marker]

#free_addr
data modify storage math:io ltd_addr set value []