# JustMCF语法设计2

## Lambda式execute

### 自动创建匿名函数
```
exec {
    as @e[]
    at @s
    ...
} => {
    # do something
}
```

### 单命令储存返回值
```
exec {
    ...
} => # do something => <success/result> <score/block/...> <object>
```

### 调用一个函数
```
exec {...} => [<function(if not declared)>] <function>
```

### while循环
```
while {
    ...
} => {
    # do something
}
```

## 函数

### 命名空间
```
namesp <name> {
    # inside
}
```

### 定义单个函数
```
func [<namesp>:]<path> tagged <tag1, tag2, ...> {
    # do something
}
```

### 调用函数
```
call <absolute_path_with_namespace>
call <relative_path_with_dot>
# call namesp:folder/function
# call ../function
# call ./function
```

## 计分板

### 初始化器
```
scb <name> <displayname> {
    rendertype <hearts/integer>
    ...
}
```

### 修改属性
```
scb <name> {
    ...
}
```

## 表达式

### 基本表达
```
score <entity> <name>               # 指一个或多个实体的分数
nbt <entity> <path>                 # 指一个或多个实体的NBT
bossbar <id> <attr>                 # 指bossbar的某个属性
attr <entity> <attribute> [<uuid>]  # 指实体的属性
...
```

### 赋值/加减
```
score @r scb += score @r scb        # operation
score @r scb = bossbar bar max      # translated into execute
bossbar bar max = 100               # assign
...
```

### NBT

字面量
```
n{Tag:Val}
```
用法
```
nbt @e CustomName |= n{...}              # data merge
nbt @e CustomArrayTag ..> <val>         # data append
nbt @e CustomArrayTag ..< <val>         # data prepend
nbt @e CustomArrayTag ..<index> <val>   # data insert
```

### ITEM
```
item <object>:<path> = <id> <count> <nbt>   # repalce
item <object> += <id> <count> <nbt>         # give
item <object> += loot <loot_table>
item <entity>[:<path>] {
    # multi operations
    ...
}
```

### TAG

```
tag <entity> <+= / -=> <tag>
```

### EFFECT

```
effect <entity> <+= / -=> <effect> ...
```

### ATTRIBUTES

```
attr <entity> <attribute> += <val>
```

## JSON

字面量
```
j{"text":"Some Text Here"}
```
用法
```
display <player> <title/text/...> <val>
```

## 方块

```
block set <pos> <id> <mode> <nbt>
block fill <pos1> <pos2> <id> <mode> <nbt>
```

不如不简化……？
