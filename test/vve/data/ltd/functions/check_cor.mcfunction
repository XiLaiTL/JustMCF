data modify storage math:io temp prepend value 0
execute store result storage math:io temp[0] int 1 run scoreboard players get loop int
execute unless data entity @s data.data_list[0]._need_cor_ run data remove storage math:io temp[0]

data modify entity @s data.data_list[0]._need_cor_ set value 1b