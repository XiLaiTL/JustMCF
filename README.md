# JustMCF

JustMCF是一个简化mcfunction工程的项目。使用JustMCF，可以使你的命令更加简洁高效。

以下几个方面是JustMCF进行简化的部分

* 数据运算简化
* 逻辑控制流简化
* 命令聚合
* 命令对象化
* 支持脚本

## 项目文件结构

JustMCF项目文件以.mcf为后缀，一个.mcf文件可以生成多个.mcfunction文件。

JustMCF项目支持一个mcf.mcmeta文件，用于存放有关数据包兼容性的信息以及JustMCF的设置、自动生成的uuid列表等等。

通常一个数据包的文件结构为：

```
folder_name
|-pack.mcmeta
|-pack.png
|-data
    |-namespace
        |-functions
        |-tags
        |-func        ->.mcf文件存放的地方
|-mcf.mcmeta          ->存放项目冲突信息的地方（使用的假名、uuid、记分板名）
  
```

## 数据运算简化

在mcfunction中，可以大致归类为几种数据，而最为关键的两类数据就是scoreboard分数以及NBT。

在通常的编程中，数据可以这样被利用：

* 初始化：data_name = data_value
* 运算：data_name1 op data_name2

在JustMCF中，用以下标识符来表示几类数据

* 实体：在wiki上，可以用以下形式来代表实体：玩家名称 或 UUID 或 目标选择器变量。在JustMCF中，对应形式为：
  * 玩家名称：`@playername` 需要在名称前加 `@`
  * 假名：`#name` 不需要在名称前加 `@`，直接用原来的
  * UUID: `@entityname` 其中，可以指定 `entityname`对应的UUID，或让JustMCF自动生成UUID。
  * 目标选择器变量：`@e[type=xxxx]`和原来不变。
* 坐标：共有三类坐标，在JustMCF中，需要左右添加尖括号
  * 2个值表示朝向坐标或者xz坐标 `< ~ ~ >`
  * 3个值表示位置坐标 `< ~ ~ ~ >` （这个可以简化为 `<~>`）
  * 5个值表示方位坐标 `< ~ ~ ~ ~ ~ >`控制流逻辑简化
* 记分板：来源只有实体，在JustMCF中，表示为
  * 方案一：`scoreboardname@entityname` 其中，`@entityname`代表实体
  * 方案二：`@entityname:scoreboardname`
* NBT：来源为实体、方块实体、storage，在JustMCF中，表示为：
  * 实体NBT：`@s::Tag1`
  * 方块实体NBT：`<~ ~ ~>::Tag1`
  * storageNBT： `foo:bar::Tag1`

在JustMCF中，用以下字面量表示不同的数据类型：

* 原始JSON文本：`j`后面跟原始JSON文本，如 `j{"text":"test"}`
* NBT值：`n`后面跟NBT值，如 `n{Tag1:"no"}`

### scoreboard数据运算

整合scoreboard的所有命令操作

初始化记分板

```
scb test "displayname" 
         ##scoreboard objective add test dummy "displayname"
```

```

scb(deathCount) test default {
    display sidebar
}
        ##default表示默认名称
        ##scoreboard objective add test deathCount  
        ##scoreboard objective setdisplay <槽位> <记分板ID>
```

设置记分板属性

```
scb test {
    displayname "分数"
    rendertype hearts|integer
    display sidebar
    remove
}

##scoreboard objective modify <计分板ID> displayname <显示名称>
##scoreboard objective modify <记分板ID> rendertype (hearts|integer)
##scoreboard objective setdisplay <槽位> <记分板ID>
##scoreboard objective remove <记分板ID>
```

记分板运算

```
test@s +=1                            ##add
test@s -=1                            ##remove
test@s =1                             ##set
test@s reset                          ##reset
test@s                                ##get
test1@s += test2@s                    ##operation
test1@s -= test2@s
```

完整表达式运算

```
ans@s := test2@s + test3@s / test4@s
```

### NBT数据运算

稍有不同的是data merge的表现形式

```
< ~ ~ ~ > ::Base *3                              ##get block
@e[]::Item                                       ##get 
@e[].data |= n{}                                 ##merge
@e[]::Item |= @s::Item                           ##modify merge from
@e[]::Item |= n{}                                ##modify merge value 
@e[]::Item = n{}                                 ##modify set value
@s::ArmorItems ..0 n{id:'iron_boots', Count:1b}  ##prepend
@s::ArmorItems .. n{id:'iron_boots', Count:1b}   ##append
@s::ArmorItems ..1 n{id:'iron_boots', Count:1b}  ##insert 1    foo:storage::Data remove
```

### NBT与记分板数据转换存储

转换存储的书写方式是execute语句的store子语句的格式，见后一部分

```
@s::ArmorItems[] => armor@s

##execute store result score @s armor run data get entity @s ArmorItems[]
```

```
armor@s => foo:bar::Armor.Length int*1

##execute store result storage foo:bar Armor.Length int 1 run scoreboard players get @s armor
```

## 逻辑控制流简化

### 函数

#### 函数声明

```
func foo:utils/test{                            ##自动创建一个mcf
    func foo:utils/test                         ##递归调用自己
}
```

将会在utils文件夹下创建test.mcfunction

func开头带有大括号的语句是定义语句而非执行语句，不带有大括号的将会被执行。

如果需要立即执行则需要在前面加 `->`，如

`->func foo:utils/test{  }`

#### 函数声明并注册到标签中

```
func foo:utils/test tagged foo:utils{

}
```

#### 完整定义函数标签

```
func #foo:utils/all{ ##自动创建一个function tag
    func foo:utils/a{

    }
    func foo:utils/b{

    }
    func foo:utils/c
}
```

### execute控制流

#### 概览

原先命令 `execute as @p store result score @s scb run function foo:test1`

简化为 `{as @p}=> scb@s ->func foo:test1{}`

也可以为 `{as @p => scb@s}->func foo:test1{}`

总体来看，简化命令的结构为

`{}->{}`

前一个花括号是执行的各种条件，后者是执行的函数，花括号内是函数里面的命令。

#### 执行者与执行方位设置

```
{
    as @e[]
    at @e[]
    pos < ~ ~ ~ >
    pos @e[]                           ##position as
    rot < ~ ~ >
    rot @e[]                            ##rotated as
}->func foo:test
```

#### 执行条件(if/unless 子语句)

对于if子语句来说，例如`if entity @e`可以省略if或者entity或者两者都省略只写`@e`。当然推荐使用省略entity的形式。这样对于unless子语句来说是统一的。

```
{
    if @e[]                                      ##if entity
    if sb1@e[] >= sb2@s                          ##if score
    if sb1@e[] 2..5                              ##if score xxx matches
    if < ~ ~ ~ > stone{}                         ##if block
    if < ~ ~ ~ > < ~ ~ ~ > < ~ ~ ~ > all|masked  ##if blocks
    if biome < ~ ~ ~ > namespace                 ##if biome
    if @e[]::{}                                  ##if data entity
    if < ~ ~ ~ > ::{}                            ##if data block
    if foo:str::{}                               ##if data storage
}->func foo:test
```

#### 存储语句(store 子语句)

使用 `=>`符号代替 `store result`单词

使用 `?=>`符号代替 `store success`单词

简化的存储语句写在第一个大括号内也可以，写在大括号外也可以

```
{
    as @e[] ?=> scb@s
    as @e[] ?=> scb1@s
    as @e[] ?=> scb2@s
}->func foo:test
```

```
{as @p}
?=> sb3@s                                    ##store success score
=> sb3@e[]                                   ##store result score
=> < ~ ~ ~ > ::Base int*3                    ##store result block
=> foo:bar value|max                         ##store result bossbar
=> @e[]::XXXX int*3                          ##store result entity
=> foo:storage::XXX int*3                    ##store result storage
-> func foo:test
```

在任意命令后边也可以跟上存储子命令

```
tellraw @s {"text":"hello"} ?=> sb1@s
```

#### 执行语句(run 子语句)

使用 `->`符号代替 `run`单词，用于连接执行的各种条件和应该执行的命令

##### 直接执行命令

`{as @p}->tellraw @s {"text":"hello"}`

`{as @p}->func foo:test`

##### 具名函数

```
{as @p}->func foo:test{
    tellraw @s {"text":"hello"}
    tellraw @s {"text":"hello again"}
}
```

会自动生成mcfuction文件，名为test.mcfunction

##### 匿名函数

```
{as @p}->{
    tellraw @s {"text":"hello"}
    tellraw @s {"text":"hello again"}
}
##简洁风格

{as @p}->func{
    tellraw @s {"text":"hello"}
    tellraw @s {"text":"hello again"}
}
## 更为统一的样式
```

会自动生成mcfunction文件，名称不需要指定，会自动指定为所在文件、嵌套层数与匿名函数的编号的组合。

### 条件语句

#### exist表达式

在JustMCF中，用`{xxx:1b}`和`null`两种值来模拟bool表达式，为了和nbt的bool变量类型区分，我们称之为exist表达式。exist表达式用if语句中。

也就是exec大括号部分作为exist表达式，将会在局部作用域生成exist变量

对于nbt来说，可以直接写在外面

```
{if @e} && {if < ~ ~ ~ > stone} && foo:stor::bool
```

对于execute中使用的if来说（unless则不行），上述语句可以写成

```
{entity @e} && {block < ~ ~ ~ > stone} && foo:stor::bool

{@e} && { < ~ ~ ~ > stone} && foo:stor::bool
```

可以将exist值赋值给nbt

```
foo:stor::bool_1 = {if @e} && {if < ~ ~ ~ > stone} 
```

exist值可以为`true`、`false`

```
foo:stor::bool_1 = true
		##data modify foo:stor bool_1 set value 1b
foo:stor::bool_1 = false
		## data remove foo:stor bool_1
```

#### 逻辑运算符

| 符号 | 描述           | 实现                                                         |
| ---- | -------------- | ------------------------------------------------------------ |
| &&   | 可以熔断的且   | bool a=false;<br/>if xxxx1-> a= true;<br/>if a unless xxxx2 -> a = false;<br/> |
| \|\| | 可以熔断的或   | bool a=false;<br/>if xxxx1->a=true;<br/>unless a if xxxx2->a=true;<br/> |
| !    |                |                                                              |
| &    | 不可以熔断的且 |                                                              |
| \|   | 不可以熔断的或 |                                                              |

#### if语句

```
if( {if @e} && {if scb@s ..1 } && foo:stor::bool_1 )->{

}
else if()->{ ##匿名函数

}
else->func foo:test{ ##具名函数

}
```

### 循环语句

#### while语句

用于条件循环，这里的大括号相当于exec的大括号

```
while{ if @e }->func loopname{

}

##自动生成
##execute if @e  run function loopname
####loopname
##execute if @e  run function loopname
```

也可以使用bool表达式的形式

```
while()->func loopname{

}
```

#### for语句

用于遍历列表，这里的大括号相当于data的大括号

```
for{ foo:flower::list }->func loopname{
    foo:flower::list[0] = {}
}
##自动生成
##这里的loop int要跟循环深度去变，防止嵌套循环时出错
##execute store result score loop int run data get storage foo:flower list 
##execute if score loop int matches 1.. run function loopname
####loopname
##data modify storage foo:flower list[0] set value {}
##data modify storage foo:flower list append from storage foo:flower list[0]
##data remove storage foo:flower list[0]
##scoreboard players remove loop int 1
##execute if score loop int matches 1.. run function ##loopname
```

```
for{foo:flower::temp |= ["abcd","efgh","ojbk"] }->func loopname{

}
##自动生成
##data merge storage foo:flower temp value ["abcd","efgh","ojbk"]
##....

```

## 命令聚合

如果觉得前三种过于大幅度简化命令，那么你应该不会拒绝第三种简化。

命令聚合有2种格式。

1.`name { operations }` 的格式，通常是没有同一个对象的各种操作。

2.`name object{ operations }`的格式，通常是有关object的各种操作。

### execute命令聚合

上述提到的 `{}->{}`格式换为 `exec{}->func{}`格式

### data命令聚合

上述提到的NBT数据运算内容全部写在 `data{}`大括号里。merge语句可以不用带`.data`

例如：

```
data{
    @e[] |= n{}                                    ##merge
    @e[]::Item |= @s::Item                        ##modify merge from
    @e[]::Item |= n{}                              ##modify merge value 
    @s::ArmorItems .. n{id:'iron_boots', Count:1b} ##append
}
```

### scoreboard命令聚合

上述提到的scoreboard数据运算全部写在 `scb{}`大括号里。同上述聚合

### display命令聚合

将 `tellraw` `title` `scoreboard` `bossbar`等具有显示作用的命令聚合在一起

```
display{
    @s.text j{obj@s} 
                 ## tellraw @s {"score":{"name":"@s","objective":"obj"}
    @s.title j{} 
                 ## title @s title {}
    @s.title {
        actionbar j{}
        times 10 70 20
    }
    @s.actionbar j{} 
                 ## title @s actionbar {}
    @s.subtitle j{} 
                 ## title @s subtitle {}
    scb test "分数"
    scb test {
        displayname "分数" 
        rendertype hearts
        display sidebar
    }
    
    @s.bossbar foo:newboss 
                 ##bossbar set players
    bossbar foo:newboss j{""}
    bossbar foo:newboss {

    }
  
}
```

```
display @s{

}
```

#### title命令聚合

```
title @s{
    title j{}
    subtitle j{}
    actionbar j{}
    clear
    reset
    times 10 70 20
}
```

```
title {
    @s.title j{}
    @s.subtitle j{}
    @s.title.clear
    @s.title.times 10 70 20
}
```

#### bossbar命令聚合

初始化

```
bossbar foo:newboss "New Boss"  ##bossbar add

```

设置属性

```
bossbar foo:newboss {
    get max|players|value|visible ##bossbar get
    remove 
    color  ##bossbar set
    max
    name
    players
    style
    visible
}
```

### item命令聚合

将有关物品的操作聚合在一起 `item` `give` `clear` `loot`

```
item{
    @e[]::armor.chest = xxx 4                        ##replace with
    @e[]::armor.chest = @s::armor.chest foo:modifier ##replace from
    @e[]::armor.chest += foo:modifier                 ##modify
    @e[] += xxx 4                                    ##give
    @e[] -= xxx 4                                    ##clear
    < ~ ~ ~ > =                                   ##loot spawn
    < ~ ~ ~ > +=                                  ##loot insert
    < ~ ~ ~ >::container.5 =                      ##loot replace block
    @s +=                                         ##loot give
    @s::container.5 =                             ##loot replace entity
}
```

#### loot命令聚合

```
loot{
    < ~ ~ ~ > = ##spawn
    < ~ ~ ~ > += ##insert
    < ~ ~ ~ >::container.5 = ##replace block
    @s += ##give
    @s::container.5 = ##replace entity
}
```

### entity命令聚合

将有关实体的操作 `summon` `kill` `tag` `effect` `attribute` `tp` 聚合到一起

#### 初始化实体

生成实体

```
entity(pig) < ~ ~ ~ > n{} 
          ##summon pig ~ ~ ~ {}
```

设置mcf项目中会使用到的玩家假名，可以使用@xxxx来选中玩家

```
entity(player) xxxx
```

初始化使用假名，而实际上指定了uuid，uuid可以在项目文件中配置/自动生成，可以使用@xxxx来选中该实体

```
entity(pig) < ~ ~ ~ > xxxx n{} 
entity @xxxx{   
    .tp < ~ ~ ~ >
}
```

#### 对实体执行操作

```
entity{
    @s.tp < ~ ~ ~ >                                    ##tp
    @s.tag+= temp                                      ##tag
    @s.tag-= temp                                      ##tag
    @s.effect+=                                        ##effect give
    @s.effect-=                                        ##effect clear
    @s.kill
    @s.attr::generic.attack_damage +=
}
```

对选择器选中的实体进行操作

```
entity @xxxx{
    .tp < ~ ~ ~ >
    .tag+= temp
}
```

#### attribute命令聚合

TODO:取代UUID，这里直接用name进行运算

```
attr{
    @s::generic.attack_damage all             ##get
    @s::generic.attack_damage base *4         ##base get
    @s::generic.attack_damage base =          ##set
    @s::generic.attack_damage += 0-0-0-0-0 test(+3)   ##modifier add uuid name value add
    @s::generic.attack_damage += 0-0-0-0-0 test(*+3)  ##modifier add uuid name value multiply_base
    @s::generic.attack_damage += 0-0-0-0-0 test(*3)   ##modifier add uuid name value multiply
    @s::generic.attack_damage -=              ##modifier remove
    @s::generic.attack_damage 0-0-0-0-0 *4      ##modifier get
} 
```

### block命令聚合

将方块操作 `setblock` `fill` `clone` 聚合在一起

```
block{
    < ~ ~ ~ > minecraft:stone[] keep                    ##setblock
    < ~ ~ ~ > < ~ ~ ~ > minecraft:stone[] keep          ##fill
    < ~ ~ ~ > < ~ ~ ~ > < ~ ~ ~ > filtered oak_planks   ##clone
}
```

### world命令聚合

## 命令对象化

相当于是entity命令聚合去掉框

```
@s.kill 
@s.tag +=
@s.tp @r
@s.item += minecraft:stone                      ##give
@s.item::armor.chest = xxx 4			       ##item
@s.exec{}->{}							     ##execute as
```

## 支持脚本

宏语言：js沙箱 eval

使用 `{{   }}`标定内部是javascript脚本内容

`#{ }#`输出到外界，自动替换为unfold()

```
{{
    const list = [1,2,3,4,5]
    for(let i of list){#{
        setblock ~ ~${i} ~ stone
    }#}
}}
```

## 进阶函数设计

### 数据类型

#### 基本数据类型

nbt:可以省略，默认是nbt的类型

| 类型名称   |      |
| ---------- | ---- |
| scb        |      |
| scb:int    |      |
| nbt        |      |
| nbt:bool   |      |
| nbt:byte   |      |
| nbt:short  |      |
| nbt:int    |      |
| nbt:long   |      |
| nbt:float  |      |
| nbt:double |      |
| nbt:string |      |
| nbt:byte[] |      |
| nbt:int[]  |      |
| nbt:long[] |      |
| nbt:list   |      |
| nbt:object |      |
| exist      |      |

#### NBT类型信息

类型信息是可以自己设计或者来自原版（例如生物），每一次modify from，其实就是把对应的类型信息转移到自己身上来。

```
interface test:foo n{
	Name:"",
	Age:17,
	Information:{}
}
```

提前设计的类型信息，可以用于自动补全、判断nbt类型等等。

这个类型应该是鸭子的。

NBT类型信息加上只对本类型操作的func，就相当于class了。

#### 带类型标记的赋值语法

前置的方式进行类型的标记

```
nbt:float foo:test::value = 32f
```

### 函数

不带类型标记的函数

```
func test:fun1(a,b){
	return c
}
```

带类型标记的函数

```
func test:func1(int a,int b) int {
	
}
```

函数执行

```
foo:test::value = func test:func1(a,b)
```

