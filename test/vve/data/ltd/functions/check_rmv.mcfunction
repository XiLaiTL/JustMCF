execute store result score input int run data get storage math:io temp[0]
scoreboard players operation input int += temp int
function ltd:_del
data remove storage math:io temp[0]
scoreboard players remove loop int 1
execute if score loop int matches 1.. run function ltd:check_rmv