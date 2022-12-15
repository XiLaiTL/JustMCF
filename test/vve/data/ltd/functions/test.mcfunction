data modify storage math:io temp set value '{"score":{"name":"result","objective":"int"}}'
tellraw @a {"nbt":"temp","storage":"math:io"}
setblock 0 11 0 air
setblock 0 11 0 oak_sign{Text1:'{"nbt":"temp","storage":"math:io","interpret":true}'}
tellraw @a {"nbt":"Text1","block":"0 11 0"}