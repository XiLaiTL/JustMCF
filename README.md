# JustMCF

<details><summary>目录</summary>
<!-- TOC -->

- [JustMCF](#justmcf)
  - [JustMCF Cli 命令行工具](#justmcf-cli-%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7)
    - [Install 安装](#install-%E5%AE%89%E8%A3%85)
    - [Usage 使用](#usage-%E4%BD%BF%E7%94%A8)
  - [谁适合使用本项目？](#%E8%B0%81%E9%80%82%E5%90%88%E4%BD%BF%E7%94%A8%E6%9C%AC%E9%A1%B9%E7%9B%AE)
  - [项目文件结构](#%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84)
  - [标识符](#%E6%A0%87%E8%AF%86%E7%AC%A6)
  - [数据操作简化](#%E6%95%B0%E6%8D%AE%E6%93%8D%E4%BD%9C%E7%AE%80%E5%8C%96)
    - [scoreboard数据运算](#scoreboard%E6%95%B0%E6%8D%AE%E8%BF%90%E7%AE%97)
      - [记分板的声明和设置](#%E8%AE%B0%E5%88%86%E6%9D%BF%E7%9A%84%E5%A3%B0%E6%98%8E%E5%92%8C%E8%AE%BE%E7%BD%AE)
      - [记分板运算](#%E8%AE%B0%E5%88%86%E6%9D%BF%E8%BF%90%E7%AE%97)
    - [NBT数据运算](#nbt%E6%95%B0%E6%8D%AE%E8%BF%90%E7%AE%97)
    - [NBT与记分板数据转换存储](#nbt%E4%B8%8E%E8%AE%B0%E5%88%86%E6%9D%BF%E6%95%B0%E6%8D%AE%E8%BD%AC%E6%8D%A2%E5%AD%98%E5%82%A8)
    - [bossbar数据运算](#bossbar%E6%95%B0%E6%8D%AE%E8%BF%90%E7%AE%97)
    - [attribute数据运算（TODO）](#attribute%E6%95%B0%E6%8D%AE%E8%BF%90%E7%AE%97todo)
  - [命名空间省略设置](#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4%E7%9C%81%E7%95%A5%E8%AE%BE%E7%BD%AE)
  - [注释增强](#%E6%B3%A8%E9%87%8A%E5%A2%9E%E5%BC%BA)
  - [逻辑控制流简化](#%E9%80%BB%E8%BE%91%E6%8E%A7%E5%88%B6%E6%B5%81%E7%AE%80%E5%8C%96)
    - [函数](#%E5%87%BD%E6%95%B0)
      - [函数声明](#%E5%87%BD%E6%95%B0%E5%A3%B0%E6%98%8E)
      - [函数声明并注册到标签中](#%E5%87%BD%E6%95%B0%E5%A3%B0%E6%98%8E%E5%B9%B6%E6%B3%A8%E5%86%8C%E5%88%B0%E6%A0%87%E7%AD%BE%E4%B8%AD)
      - [完整定义函数标签](#%E5%AE%8C%E6%95%B4%E5%AE%9A%E4%B9%89%E5%87%BD%E6%95%B0%E6%A0%87%E7%AD%BE)
    - [execute控制流](#execute%E6%8E%A7%E5%88%B6%E6%B5%81)
      - [概览](#%E6%A6%82%E8%A7%88)
      - [执行者与执行方位设置](#%E6%89%A7%E8%A1%8C%E8%80%85%E4%B8%8E%E6%89%A7%E8%A1%8C%E6%96%B9%E4%BD%8D%E8%AE%BE%E7%BD%AE)
      - [执行条件if/unless 子语句](#%E6%89%A7%E8%A1%8C%E6%9D%A1%E4%BB%B6ifunless-%E5%AD%90%E8%AF%AD%E5%8F%A5)
        - [if score语句](#if-score%E8%AF%AD%E5%8F%A5)
      - [存储语句store 子语句](#%E5%AD%98%E5%82%A8%E8%AF%AD%E5%8F%A5store-%E5%AD%90%E8%AF%AD%E5%8F%A5)
      - [执行语句run 子语句](#%E6%89%A7%E8%A1%8C%E8%AF%AD%E5%8F%A5run-%E5%AD%90%E8%AF%AD%E5%8F%A5)
        - [直接执行命令](#%E7%9B%B4%E6%8E%A5%E6%89%A7%E8%A1%8C%E5%91%BD%E4%BB%A4)
        - [具名函数](#%E5%85%B7%E5%90%8D%E5%87%BD%E6%95%B0)
        - [匿名函数](#%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0)
      - [简化幅度较小的支持](#%E7%AE%80%E5%8C%96%E5%B9%85%E5%BA%A6%E8%BE%83%E5%B0%8F%E7%9A%84%E6%94%AF%E6%8C%81)
    - [条件语句](#%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5)
      - [exist表达式](#exist%E8%A1%A8%E8%BE%BE%E5%BC%8F)
      - [逻辑运算符](#%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6)
      - [if语句](#if%E8%AF%AD%E5%8F%A5)
    - [循环语句](#%E5%BE%AA%E7%8E%AF%E8%AF%AD%E5%8F%A5)
      - [while语句](#while%E8%AF%AD%E5%8F%A5)
      - [for语句](#for%E8%AF%AD%E5%8F%A5)
  - [命令聚合](#%E5%91%BD%E4%BB%A4%E8%81%9A%E5%90%88)
    - [execute命令聚合](#execute%E5%91%BD%E4%BB%A4%E8%81%9A%E5%90%88)
    - [data命令聚合](#data%E5%91%BD%E4%BB%A4%E8%81%9A%E5%90%88)
    - [scoreboard命令聚合](#scoreboard%E5%91%BD%E4%BB%A4%E8%81%9A%E5%90%88)
    - [display命令聚合](#display%E5%91%BD%E4%BB%A4%E8%81%9A%E5%90%88)
      - [title命令聚合](#title%E5%91%BD%E4%BB%A4%E8%81%9A%E5%90%88)
      - [bossbar命令聚合](#bossbar%E5%91%BD%E4%BB%A4%E8%81%9A%E5%90%88)
    - [item命令聚合](#item%E5%91%BD%E4%BB%A4%E8%81%9A%E5%90%88)
      - [loot命令聚合](#loot%E5%91%BD%E4%BB%A4%E8%81%9A%E5%90%88)
    - [entity命令聚合](#entity%E5%91%BD%E4%BB%A4%E8%81%9A%E5%90%88)
      - [声明玩家假名](#%E5%A3%B0%E6%98%8E%E7%8E%A9%E5%AE%B6%E5%81%87%E5%90%8D)
      - [初始化实体](#%E5%88%9D%E5%A7%8B%E5%8C%96%E5%AE%9E%E4%BD%93)
      - [对实体执行操作](#%E5%AF%B9%E5%AE%9E%E4%BD%93%E6%89%A7%E8%A1%8C%E6%93%8D%E4%BD%9C)
      - [attribute命令聚合](#attribute%E5%91%BD%E4%BB%A4%E8%81%9A%E5%90%88)
    - [block命令聚合](#block%E5%91%BD%E4%BB%A4%E8%81%9A%E5%90%88)
    - [world命令聚合（TODO）](#world%E5%91%BD%E4%BB%A4%E8%81%9A%E5%90%88todo)
  - [命令对象化](#%E5%91%BD%E4%BB%A4%E5%AF%B9%E8%B1%A1%E5%8C%96)
  - [选择器增强（TODO）](#%E9%80%89%E6%8B%A9%E5%99%A8%E5%A2%9E%E5%BC%BAtodo)
  - [支持脚本](#%E6%94%AF%E6%8C%81%E8%84%9A%E6%9C%AC)
  - [进阶函数设计](#%E8%BF%9B%E9%98%B6%E5%87%BD%E6%95%B0%E8%AE%BE%E8%AE%A1)
    - [数据类型](#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
      - [基本数据类型（TODO）](#%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8Btodo)
      - [NBT类型信息](#nbt%E7%B1%BB%E5%9E%8B%E4%BF%A1%E6%81%AF)
      - [带类型标记的赋值语法（TODO）](#%E5%B8%A6%E7%B1%BB%E5%9E%8B%E6%A0%87%E8%AE%B0%E7%9A%84%E8%B5%8B%E5%80%BC%E8%AF%AD%E6%B3%95todo)
    - [进阶函数](#%E8%BF%9B%E9%98%B6%E5%87%BD%E6%95%B0)
  - [mcf文件的开始](#mcf%E6%96%87%E4%BB%B6%E7%9A%84%E5%BC%80%E5%A7%8B)

<!-- /TOC -->
</details>

JustMCF是一个简化mcfunction工程的项目。使用JustMCF，你不但可以使用**原版的命令**，还可以使用项目设计的**简化命令**，可以使你的命令更加简洁高效。

以下几个方面是JustMCF进行简化或者增强的部分

- 数据操作简化——对记分板运算、NBT操作进行大幅度简化，并支持表达式形式运算记分板！
- 命名空间省略——修改默认省略情况下的命名空间。（原来默认只能是Minecraft）
- 注释增强——支持行内注释、块注释！（TODO：根据注释信息生成函数帮助信息）
- 逻辑控制流简化——对execute进行大幅度简化！单文件定义多个、嵌套定义函数！支持逻辑表达式、条件语句、循环语句、列表遍历语句！
- 命令聚合——将如scoreboard操作、bossbar操作这类的系列命令聚合到一个块里。
- 命令对象化——像调用对象的方法那样调用命令，打开书写命令的新思路！
- 支持脚本——直接在文件内定义JavaScript脚本，支持脚本生成命令！
- 进阶函数——提供带有参数的函数封装。（TODO：引入支持库函数如random等）

这个项目未完成的功能：

- [ ] 提供vscode language server用于自动补全和语法高亮
- [ ] 类型检查（类型设置、modify set from、函数类型、for循环类型）
- [ ] 循环的break语句、函数的return语句
- [ ] 多minecraft版本的支持
- [ ] 整理各个命令的标识符
- [ ] 选择器的解析
- [ ] 全部命令的解析支持

## JustMCF Cli 命令行工具

### Install 安装

本项目需要首先安装[Node.js](https://nodejs.org/en/)。

如果已经安装完成，请打开命令行（在Windows下可以是命令提示符cmd、powershell；在Linux下可以是shell、zsh；在macOS下可以是终端Terminal）输入`node -v`，验证是否已经配置好Path变量，如果显示安装的Node.js版本号，则证明安装完成。请继续在命令行中输入：

```bash
npm install -g just-mcf
```

如果您已经安装，需要更新版本，则请输入：

```bash
npm update -g just-mcf
```

### Usage 使用

在您的工作文件夹中打开命令行窗口（或者打开命令行窗口cd到工作文件夹中）。

#### *初始化项目*。设置JustMCF项目的一些编译选项

```bash
npx mcf init
```

初始化完成后，将在工作文件夹中创建`mcf.mcmeta`文件，这里包含JustMCF项目的各种设置。具体配置项请见附录。

#### *编译项目*。将JustMCF项目输出为Minecraft JE 数据包

```bash
npx mcf build [<source_path>] [-o <target_path>]

//或者：

npx mcf build [<source_path>] [--output <target_path>]

```

其中`[]`标记的部分是可选的。

`<source_path>` 编译的源地址，不填写则为当前命令行执行目录。

`<target_path>` 编译的目的地址，不填写则为执行目录的兄弟output文件夹。例如执行目录为`/foo/test`,则目的地址为`/foo/test_output`。

路径都可以添加相对地址，用`./`索引到执行目录的子文件或文件夹，用`../`索引到执行目录的同级文件夹，例如`npx mcf build -o .`即输出到执行目录，当然这是不推荐的；`npx mcf build -o ../output`即输出到执行目录的兄弟文件夹output中。

一般来说，源地址填写工作路径，目的地址填写`.minecraft/saves/datapacks/`下的文件夹，这样子输出后可以直接reload查看运行情况以方便调试。

可以编写一个bat文件放在工作文件夹下，内容就填写：

```bat
npx mcf build -o xxxx/.minecraft/saves/datapacks/test
pause
```

#### *调整全局设置*。设置命令行的全局参数

```bash
npx mcf conf
```

目前可以设置命令行的语言和编译缺少参数时是否进行询问。

## 谁适合使用本项目？

如果是命令老手——

- 苦于**命令与NBT过于冗长、无法换行**的创作者——JustMCF大幅度简化了execute、data、scoreboard这三个最常用的命令，并提供NBT换行的支持（TODO：项目完成全部命令的解析支持后，将支持所有命令中涉及到的NBT的换行，目前仅局限于已简化的命令的换行）。
- 苦于**需要外部程序文件进行命令穷举**、导致逻辑思路分开的创作者——JustMCF直接提供文件内脚本支持，让思路不会断片。
- 苦于每次都要新开函数文件，**多个函数文件的分隔**导致思维混乱的创作者——JustMCF直接提供单文件定义多个函数的支持，并支持嵌套定义函数。
- 苦于Minecraft**命令书写无法形成逻辑链**的创作者——JustMCF提供了条件、循环语句、进阶函数封装等特性，让逻辑更加清晰。
- 希望尝试新的抽象思路，新的逻辑组织方式的创作者——JustMCF希望提供interface+func进行命令组织的方式，进一步进行思路的抽象。

如果是习惯了原版命令的创作者——

- JustMCF直接**支持使用原版命令**，无缝衔接使用JustMCF的单文件多函数、进阶函数封装、条件、循环语句等特性！
- JustMCF**支持中性简化**，如果认为过渡简化导致不习惯，请看execute的案例：[简化幅度较小的支持](#%E7%AE%80%E5%8C%96%E5%B9%85%E5%BA%A6%E8%BE%83%E5%B0%8F%E7%9A%84%E6%94%AF%E6%8C%81)

如果是命令新手——

- 还是先不要用JustMCF，因为一旦使用了JustMCF，你就会陷入JustMCF带来的魔力之中，**直接脱离原版命令苦海**。

## 项目文件结构

JustMCF项目文件以.mcf为后缀，*一个*.mcf文件可以生成*多个*.mcfunction文件。

JustMCF项目支持一个mcf.mcmeta文件，用于存放有关数据包兼容性的信息以及JustMCF的设置、自动生成的uuid列表等等。

通常一个数据包的文件结构为：

```text
folder_name
|-pack.mcmeta
|-pack.png
|-data
    |-namespace
        |-functions
        |-tags
        |-func                  ->.mcf文件存放的地方
            |-export.mcf        ->例如这样一个mcf文件
|-mcf.mcmeta                    ->存放项目冲突信息的地方（使用的假名、uuid、记分板名）
  
```

单个mcf文件的书写请看：[mcf文件的开始](#mcf%E6%96%87%E4%BB%B6%E7%9A%84%E5%BC%80%E5%A7%8B)

## 标识符

在mcfunction中，可以大致归类为几种数据，而最为关键的两类数据就是scoreboard分数以及NBT。

在通常的编程中，数据可以这样被利用：

- 初始化：data_name = data_value
- 运算：data_name1 op data_name2

在JustMCF中，用以下标识符来表示几类数据

- *命名空间ID*：`namespace:id`，可以在指定命名空间的情况下简写为`id`。这些量在JustMCF中遇到驼峰命名法（就是说含有大写字母，如`NameSpace:ID`）将会自动转为蛇形（小写加下划线，如`name_space:id`），因此命名时可以采用驼峰（但是还是不建议这么做）。

- *实体*：在wiki上，可以用以下形式来代表实体：玩家名称 或 UUID 或 目标选择器变量。在JustMCF中，对应形式为：

  - 玩家名称：`@playername` 需要在名称前加 `@`。

  - 假名：`#name` 不需要在名称前加 `@`，直接用原来的

  - UUID: `@entityname` 其中，可以指定 `entityname`对应的UUID，或让JustMCF自动生成UUID。

  - 目标选择器变量：`@e[type=xxxx]`和原来不变。

    除了目标选择器变量外，其他项需都要使用语句设置，见entity命令聚合一章。

- *坐标*：共有三类坐标，在JustMCF中，需要左右添加尖括号（TODO：当测试结果为解析无问题时将会移除尖括号）

  - 2个值表示朝向坐标或者xz坐标 `~ ~`
  - 3个值表示位置坐标 `~ ~ ~`
  - 5个值表示方位坐标 `~ ~ ~ ~ ~`

- *记分板*：来源只有实体，在JustMCF中，表示为

  - 方案一：`scoreboardname@entityname` 其中，`@entityname`代表实体

  - 方案二：`@entityname:scoreboardname`

- *NBT*：来源为实体、方块实体、storage，在JustMCF中，表示为：

  - 实体NBT：`@s::Tag1`

  - 方块实体NBT：`~ ~ ~::Tag1`

  - storageNBT： `foo:bar::Tag1`

在JustMCF中，用以下字面量表示不同的数据类型：

- 原始JSON文本：`j`后面跟原始JSON文本，如 `j{"text":"test"}`，单纯的数值和字符串不需要添加`j`
- NBT值：`n`后面跟NBT值，如 `n{Tag1:"no"}`，单纯的数值和字符串不需要添加`n`

## 数据操作简化

### scoreboard数据运算

整合scoreboard的所有命令操作

#### 记分板的声明和设置

*声明记分板*，未声明记分板准则类型的，将默认准则为dummy。记分项显示名称是原始JSON文本，记得在使用带大括号和中括号的语句时改为`j{}`和`j[]`。

```mcf
scb test "displayname" 
         ##scoreboard objective add test dummy "displayname"
```

如果未声明显示名称，使用默认的记分项名称时，需要补上default。可以在声明语句后面加上设置语句。

*设置语句*。

```mcf
scb test default
scb(deathCount) test default {
    display sidebar
}
        ##default表示默认名称
        ##scoreboard objective add test deathCount  
        ##scoreboard objective setdisplay <槽位> <记分板ID>
```

*设置记分板属性*。语法和声明语句类似，不同的是没有准则类型和显示名称。

```mcf
scb test {
    displayname "分数"
    rendertype hearts
    display sidebar
    remove
}

##scoreboard objective modify <计分板ID> displayname <显示名称>
##scoreboard objective modify <记分板ID> rendertype (hearts|integer)
##scoreboard objective setdisplay <槽位> <记分板ID>
##scoreboard objective remove <记分板ID>
```

设置的子语句可以加`.`，即如：

```mcf
scb test {
	.displayname "分数"
	.rendertype hearts
}
```

#### 记分板运算

记分板可以独立作为表达式，每条表达式将会被解析为一条命令。

```mcf
test@s +=1                            ##add
test@s -=1                            ##remove
test@s =1                             ##set
test@s reset                          ##reset
test@s enable					    ##enable
test@s                                ##get
test@s *= 10                          ##operation 并使用了临时记分板或者常量记分板
test@s /= 10                          
test1@s += test2@s                    ##operation
test1@s -= test2@s
test1@s *= test2@s
test1@s /= test2@s
test1@s %= test2@s
test1@s << test2@s                    ##取较小值
test1@s >> test2@s                    ##取较大值
test1@s >< test2@s                    ##交换
```

支持*完整表达式运算*！按优先级顺序支持`()` `<< >>` `*/%` `+-`并且支持数字

完整表达式必须在`:=`右侧，表达式计算结果将会传给`:=`左边的记分板。如下表达式将被解析为单条的计算命令（临时计算的记分板名称可以自定义，当遇见常数时还可以设置在常数专用记分板中）。

```mcf
ans@s := test2@s + test3@s / test4@s - 5 % test5@s

##以上会被解析成以下：
scoreboard players operation temp0 justmcf-temp-scoreboard = @s test3
scoreboard players operation temp0 justmcf-temp-scoreboard /= @s test4
scoreboard players operation temp0 justmcf-temp-scoreboard += @s test2
scoreboard players set temp1 justmcf-temp-scoreboard 5
scoreboard players operation temp1 justmcf-temp-scoreboard %= @s test5
scoreboard players operation temp0 justmcf-temp-scoreboard -= temp1 justmcf-temp-scoreboard
scoreboard players operation @s ans = temp0 justmcf-temp-scoreboard
```

关于记分板的逻辑简化操作将会再后面的execute简化部分提到。

这些运算也可以写进语句中，使用`scb{}`将表达式括起来就行了。

这里注意，为了保证包间的兼容性，凡是使用到的假名（无论带不带'#'），都需要用entity声明语句预先设置，详细见entity命令聚合一章。

```mcf
entity(player) temp1,temp2,temp3
scb {
	num@temp1 = 1
	num@temp2 := num@temp1 + num@temp3
}
```

对于*scoreboard list命令*则必须写成语句

```mcf
scb { list }    	##scoreboard objectives list
scb { @s list}  	##scoreboard players list @s
```

### NBT数据运算

将data命令转为符号运算。这里只提供三种符号。

- `|=`表示“并等于”，即merge；
- `=`表示赋值，即set；
- `..`表示追加，其中`..0`表示追加到0这个位置，即prepend，而`..1`就是追加到1这个位置，即insert 1。

运算的对象可以是nbt或者另一个data标识符（即value和from）

```mcf
~ ~ ~ ::Base *3                                  ##get block
@e[]::Item                                       ##get 
@e[] |= n{}                                      ##merge
@e[]::Item |= @s::Item                           ##modify merge from
@e[]::Item |= n{}                                ##modify merge value 
@e[]::Item = n{}                                 ##modify set value
@s::ArmorItems ..0 n{id:'iron_boots', Count:1b}  ##prepend
@s::ArmorItems .. n{id:'iron_boots', Count:1b}   ##append
@s::ArmorItems ..1 n{id:'iron_boots', Count:1b}  ##insert 1    
foo:storage::Data remove
```

同样的，data操作也可以用语句`data{}`包裹

```mcf
data{
	@e[]::Item
	foo:storage::Data remove
}
```

对于使用同一个storage命名空间的data操作，还可以提前使用namespace语句声明运算使用的命名空间。见命名空间语句一节。

```mcf
namsp [storage=test]{
    id1::Data = id2::Data
    id1::Data .. id1::Data[0]
}
```

对于一个NBT节点下的data操作，可以使用`data namespace:id::data{}`语句省略掉父节点的部分。

```mcf
data foo:test::bar{ ##在foo:test bar节点上操作
	num1 = 1b
	num2 = 2b
}
data foo:test{  ##在foo:test根节点上操作
	bar.num1 = 1b
	bar.num2 = 2b
}
```

除此之外，进阶函数的调用可以作为右值（即等号左边的值）参与运算；exist表达式可以作为赋值的来源，（也就是等号左边的值）。

### NBT与记分板数据转换存储

转换存储的书写方式是execute语句的store子语句的格式，即`=>`符号，请见execute语句部分。

*NBT转为记分板*。

```mcf
@s::ArmorItems[] => armor@s

##execute store result score @s armor run data get entity @s ArmorItems[]
```

*记分板转为NBT*（如果类型和倍率没有填写的话，默认int 1）。

```mcf
armor@s => foo:bar::Armor.Length
armor@s => foo:bar::Armor.Length int*1

##execute store result storage foo:bar Armor.Length int 1 run scoreboard players get @s armor
```

### bossbar数据运算

bossbar表达式，让操作像NBT操作那样方便

```mcf
bossbar test:foo           ##bossbar get test:foo value
bossbar test:foo max       ##bossbar get test:foo max|players|value|visible
bossbar test:foo = 10      ##bossbar set test:foo value 10
bossbar test:foo max = 10  ##bossbar set test:foo max 10

scb@s => bossbar test:foo  ##execute store bossbar test:foo value run scoreboard players get
```

其余见命令聚合bossbar部分

### attribute数据运算（TODO）

## 命名空间省略设置

对于一些命令需要用到命名空间的地方，通常以`namespace:id`的形式出现，在省略命名空间的情况下，游戏其默认为minecraft命名空间。在JustMCF中，有机会调整使用的默认的命名空间，以省略每次书写命名空间的不必要的麻烦。TODO：现在只支持JustMCF的简化命令采用这个设置，而对于出现的原版命令无效。

关键字为`namespace`，也可以简写为`namsp`。

可以使用中括号为单独项目设置单独的命名空间，目前支持设置的有：func、block、storage、biome、bossbar、predicate、item、loot、item_modifier、dim或者dimension、entity。

另外，中括号内允许填`default = xxxx`，这表示除了func和storage外所有命名空间设置为xxxx。如果填`default`，则表示除了func和storage外所有命名空间设置为minecraft。（不推荐这样做， 而是采用在mcf.mcmeta设置的方式进行更改，这样可以设置默认值。）

可选只填写中括号，则其他值来源于设置或者默认。

```mcf
namespace test{ ##将会把大括号块内所有的默认命名空间设置为test

}

namespace test[
	func = test1
	block = minecraft
	storage = minecraft
]{ ##除了括号设置的外，其他默认命名空间为test

}

namsp test[default = yuushya]{ ##除了func和storage设置为test外，其他设置为yuushya

}


namsp test[default]{ ##除了func和storage设置为test外，其他设置为minecraft

}

namsp [func = test]{ ##只有func设置为test

}
```

命名空间具有继承关系，嵌套命名空间可以对上一级命名空间进行修改。

## 注释增强

在原先的命令书写中，无法使用行注释和块注释，只能使用占用一行的`#`注释。

在JustMCF项目中，可以使用以下类型的注释

- 行注释：采用`##`开始行内注释，和大多数语言中的`//`注释一致。
- 块注释：采用`#=`为开头，`=#`为结尾，开始块注释，和大多数语言中的`/*` `*/`块注释一致。这两种注释在构建成mcfunction文件的过程中将不会保留。
- 占行注释：与原先的mcfuntion的注释一致。采用`# `开始一行的注释。这行注释将会在构建时加入mcfunction文件中，并保留在对应位置。

如果你想要让数据包在构建后保留注释，请使用原版的注释。

## 逻辑控制流简化

### 函数

JustMCF提供了带有参数的函数（见进阶函数一部分）与不带参数的普通函数。

JustMCF的普通函数与原版单个函数文件无异，但是提供了嵌套定义函数、单个文件定义多个函数的能力。

值得一提的是，函数不再依赖于复杂的文件夹路径，而是依赖于定义的名称，因此可以解放架构，自由设置工程项目的文件夹了。

#### 函数声明

```mcf
func foo:utils/test{                            ##自动创建一个mcf

    
}
```

将会在utils文件夹下创建test.mcfunction

func开头带有大括号的语句是定义语句而非执行语句，不带有大括号的将会被执行。

```mcf
func foo:utils/test{                            ##自动创建一个mcf
	func foo:utils/test                         ##递归调用自己
    
}
```

如果需要立即执行则需要在前面加 `->`（这其实是execute的run符号，请见后面），如:

```mcf
func foo:utils/test{    
    ->func foo:utils/test/first{ 

    }
}
```

#### 函数声明并注册到标签中

使用`tagged`可以将本函数注册到后面提供的函数标签中。

```mcf
func foo:utils/test tagged #foo:utils{

}

func foo:utils/test tagged #foo:utils, #foo:test{

}
```

#### 完整定义函数标签

声明函数标签的形式和声明函数类似。

对于函数标签来说，可以使用方括号设置属性，`[replaced = true]`与`[replaced]`功能一致。

```mcf
func #foo:utils/all{ ##自动创建一个function tag
    func foo:utils/a{

    }
    func foo:utils/b{

    }
    func foo:utils/c 
    	##foo:utils/c不在此处定义，也可以这样被添加到本函数标签中。
    func #foo:utils/all/d{
    
    }
    func #foo:utils/all/e
    	##也可以在函数标签中嵌套定义函数标签和添加函数标签。
}

func #foo:utils/all/1 [replace = true]{

}
func #foo:utils/all2 [replaced]{

}

```

### execute控制流

JustMCF对于execute做了大幅度简化，并提供了强大的函数分片功能。

原先需要拆分不同函数，并将函数名塞入execute run子命令的末尾的做法常常因为分文件而导致逻辑混乱，JustMCF直接支持在execute命令末尾完整地书写命令。

#### 概览

原先命令

```mcfunction
execute as @p store result score @s scb run function foo:test1

# foo:test1
say 1
say 1
```

简化为 ：

```mcf
{as @p}=> scb@s ->func foo:test1{
	say 1
	say2
}

## 或者如下：区别在于store的位置
{as @p => scb@s}->func foo:test1{}
```

总体来看，简化命令引入了两种符号：

- 使用 `->`符号代替 `run`单词，用于连接执行的各种条件和应该执行的命令

- 使用 `=>`符号代替 `store result`单词

  使用 `?=>`符号代替 `store success`单词

而引入了两个大括号`{}->{}`

前一个大括号是执行的各种条件。（这些条件也会被作为）

后一个大括号是执行的函数，花括号内是函数里面的命令。

如果不习惯简化命令的符号，请看本节的最后一小节。

#### 执行者与执行方位设置

```mcf
{
    as @e[]
    at @e[]
    align xyz
    anchored eyes
    pos ~ ~ ~
    pos @e[]                           ##position as
    rot ~ ~
    rot @e[]                            ##rotated as
    facing ~ ~ ~				  
    facing @e[] eyes                    ##facing entity
}->func foo:test
```

#### 执行条件(if/unless 子语句)

JustMCF对if/unless子语句做了极大的简化。

对于if子语句来说，例如`if entity @e`可以省略if，或者省略entity，或者两者都省略只写`@e`。推荐使用省略entity的形式，这样对于unless子语句来说是统一的。

`unless` 语句不支持省略unless，只能省略entity。具体见下表：(注意biome不可舍去)

<details><summary>简化命令表格</summary>

| 原子命令                        | 舍去标量部分（推荐）               | 舍去if                             | 都舍去                          |
| ------------------------------- | ---------------------------------- | ---------------------------------- | ------------------------------- |
| if entity @s                    | if @s                              | entity @s                          | @s                              |
| if block ~ ~ ~ stone{}          | if ~ ~ ~ stone{}               | block ~ ~ ~ stone{}            | ~ ~ ~ stone{}               |
| if blocks ~ ~ ~ ~ ~ ~ ~ ~ ~ all | if ~ ~ ~ ~ ~ ~ ~ ~ ~ all     | blocks ~ ~ ~ ~ ~ ~ ~ ~ ~ all | ~ ~ ~ ~ ~ ~ ~ ~ ~ all     |
| if biome ~ ~ ~ minecraft:beach  | if biome ~ ~ ~ minecraft:beach | biome ~ ~ ~ minecraft:beach    | biome ~ ~ ~ minecraft:beach |
| if data entity @s Pos           | if @s::Pos                         | data @s::Pos                       | @s::Pos                         |
| if data storage foo:str Number  | if foo:str::Number                 | data foo:str::Number               | foo:str::Number                 |
| if data block ~ ~ ~ Text1       | if ~ ~ ~::Text1                | data ~ ~ ~::Text1              | ~ ~ ~::Text1                |
| if predicate test:is_use_hand   | if test:is_use_hand                | predicate test:is_use_hand         | test:is_use_hand                |
| score见下方                     |                                    |                                    |                                 |

</details>

简化后，可以很整齐地书写if子命令

```mcf
{
    if @e[]                                      ##if entity
    if ~ ~ ~ stone{}                             ##if block
    if ~ ~ ~ ~ ~ ~ ~ ~ ~ all                     ##if blocks
    if biome ~ ~ ~ namespace                     ##if biome
    if test:is_use_hand						   ##if predicate
    if @e[]::{}                                  ##if data entity
    if ~ ~ ~ ::{}                                ##if data block
    if foo:str::{}                               ##if data storage
    if sb1@e[] >= sb2@s                          ##if score
    if sb1@e[] 2..5                              ##if score xxx matches
    if sb1#temp < 2                              ##if score xxx matches
}->func foo:test
```

##### if score语句

JustMCF将if score语句改进得更像是比较运算符的形式，原先的`=`改为了程序运算中的`==`，。见下表：

| 原子命令                    | 舍去标量部分（推荐） | 舍去if                  | 都舍去            |
| --------------------------- | -------------------- | ----------------------- | ----------------- |
| if score @s temp < @s temp2 | if temp@s < temp2@s  | score temp@s < temp2@s  | temp@s < temp2@s  |
| if score @s temp = @s temp2 | if temp@s == temp2@s | score temp@s == temp2@s | temp@s == temp2@s |

对于matches命令则可以省略`matches`（其他省略形式同上，不再赘述），并且拥有其他直接使用比较运算符的表示形式

| 原if score matches命令 | 省略matches    | 比较运算符形式 |                |
| ---------------------- | -------------- | -------------- | -------------- |
| if score @s temp 1     | if temp@s 1    | if temp@s == 1 |                |
| if score @s temp ..1   | if temp@s ..1  | if temp@s <= 1 | if temp@s < 2  |
| if score @s temp 0..1  | if temp@s 0..1 |                |                |
| if score @s temp 0..   | if temp@s 0..  | if temp@s >=0  | if temp@s > -1 |

#### 存储语句(store 子语句)

使用 `=>`符号代替 `store result`单词

使用 `?=>`符号代替 `store success`单词

简化的存储语句写在第一个大括号内也可以，写在大括号外也可以

```mcf
{
    as @e[] ?=> scb@s
    as @e[] ?=> scb1@s
    as @e[] ?=> scb2@s
}->func foo:test
```

```mcf
{as @p}
?=> sb3@s                                    ##store success score
=> sb3@e[]                                   ##store result score
=> ~ ~ ~ ::Base int*3                    ##store result block
=> bossbar foo:bar value                     ##store result bossbar
=> @e[]::XXXX int*3                          ##store result entity
=> foo:storage::XXX int*3                    ##store result storage
-> func foo:test                             ##run function foo:test
```

转储到NBT时，可以省略类型和倍率，则默认为`int 1`。

注意，bossbar关键字不可省略，而如果省略`value`或者`max`，则默认为`value`。

*在任意命令后边也可以跟上存储子命令*。

```mcf
tellraw @s {"text":"hello"} ?=> sb1@s
```

#### 执行语句(run 子语句)

使用 `->`符号代替 `run`单词，用于连接执行的各种条件和应该执行的命令

##### 直接执行命令

`{as @p}->tellraw @s {"text":"hello"}`

`{as @p}->func foo:test`

##### 具名函数

```mcf
{as @p}->func foo:test{
    tellraw @s {"text":"hello"}
    tellraw @s {"text":"hello again"}
}
```

会自动生成mcfuction文件，名为test.mcfunction

##### 匿名函数

如果run部分没有指定函数名称，则支持自动生成名称。因此你可以这样写：

```mcf
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

#### 简化幅度较小的支持

JustMCF为不希望采用大幅度简化命令的用户提供了较为简化的支持，相比于上述简化，按照以下原则书写则是小幅度简化的样式：

- 可以在第一个大括号前写`exec`。
- 可以使用`run`，而不是`->`。
- 可以使用`store` `?store`，或者干脆使用原版，而不是`=>`、`?=>`。
- 使用省略最少的语法。
- 标识符使用原版命令

```mcf
exec{ if entity @s as @s store result data entity @s CustomName int 1 } run func test:foo

##所以为什么不接受以下语法呢：
{if @s as @s}=>@s::CustomName->func test:foo
```

### 条件语句

#### exist表达式

在JustMCF中，用`{xxx:1b}`和`null`两种值来模拟bool表达式，为了和nbt的bool变量类型区分，我们称之为exist表达式。exist表达式用if语句中。

更直接地说，exec前一个大括号部分就是exist表达式。对于nbt来说，可以直接写在大括号外面。

```mcf
{if @e} && {if ~ ~ ~ stone} && foo:stor::bool
```

由于存在不同形式的简化语法，实际上，上述语句可以写成

```mcf
{entity @e} && {block ~ ~ ~ stone} && foo:stor::bool
```

可以将exist表达式赋值给nbt

```mcf
foo:stor::bool_1 = {if @e} && {if ~ ~ ~ stone} 
```

exist表达式值可以为`true`、`false`

```mcf
foo:stor::bool_1 = true
		##data modify foo:stor bool_1 set value 1b
foo:stor::bool_1 = false
		## data remove foo:stor bool_1
```

#### 逻辑运算符

优先级和表格顺序一致。

注意：exist表达式在进行熔断时，可以选择产生新的函数，或者直接在表达式下方所有命令加上execute if，这项设置在mcf.mcmeta中。

| 符号 | 描述           | 实现                                                         |
| ---- | -------------- | ------------------------------------------------------------ |
| !    | 非             |                                                              |
| &    | 不可以熔断的且 | bool a=false;<br />getcond1;<br />getcond2;<br />if cond1 if cond2 -> a=true;<br /> |
| \|   | 不可以熔断的或 | bool a=false;<br />getcond1;<br />getcond2;<br />if cond1 -> a=true;<br />if cond2 -> a=true;<br /> |
| &&   | 可以熔断的且   | bool a=false;<br/>getcond1;<br />if cond1 -> a=true;<br/>if a -> getcond2;<br />if a unless cond2 -> a=false;<br/> |
| \|\| | 可以熔断的或   | bool a=false;<br />getcond1;<br/>if cond1 -> a=true;<br/>unless a -> getcond2;<br/>unless a if cond2 -> a=true;<br/> |
| (  ) | 括号           |                                                              |

#### if语句

if语句由以下部分组成：

- `if eixst表达式 exec执行部分`
- `else if eixst表达式 exec执行部分`
- `else execRun部分`

(注意关键字之间的空格)

由于execute简化提供了省略if的简化语法，因此在if语句中，可以直接省略exist表达式中的if，如下：

```mcf
if {entity @e} && {scb@s <=1 } && foo:stor::bool_1 ->{

}
else if {entity @s}->{ ##匿名函数

}
else ->func foo:test{ ##具名函数

}
```

### 循环语句

TODO: break

#### while语句

用于条件循环，这里的大括号相当于exec的大括号

```mcf
while{ if @e }->func loopname{

}

##自动生成
##execute if @e  run function loopname
####loopname.mcfunction
##execute if @e  run function loopname
```

也可以使用exist表达式的形式

```mcf
while {entity @e} && {scb@s <=1 } ->func loopname{

}
```

#### for语句

用于遍历列表，这里的大括号相当于data的大括号，但是只支持含有data标识符的一个NBT操作表达式。

在大括号中，支持使用`标识符[0]`的形式取出每次遍历的列表值。

```mcf
for{ foo:flower::list }->func loopname{
    foo:flower::list[0] = {}
}
##自动生成
##execute store result score loop int run data get storage foo:flower list 
##execute if score loop int matches 1.. run function loopname
####loopname.mcfunction
##data modify storage foo:flower list[0] set value {}
##data modify storage foo:flower list append from storage foo:flower list[0]
##data remove storage foo:flower list[0]
##scoreboard players remove loop int 1
##execute if score loop int matches 1.. run function ##loopname
```

```mcf
for{foo:flower::temp |= ["abcd","efgh","ojbk"] }->func loopname{

}
##自动生成
##data merge storage foo:flower temp value ["abcd","efgh","ojbk"]
##....

```

## 命令聚合

命令聚合是将一系列相关的命令聚合到一起的设计，通常归并同性质的操作，将操作转为表达式。

命令聚合有2种格式。

- `name { operations }` 的格式，通常是没有同一个对象的各种操作。
- `name object{ operations }`的格式，通常是有关object的各种操作。

### execute命令聚合

上述提到的 `{}->{}`格式换为 `exec{}->func{}`格式

### data命令聚合

上述提到的NBT数据运算内容全部写在 `data{}`大括号里。

```mcf
data{
    @e[] |= n{}                                    ##merge
    @e[]::Item |= @s::Item                         ##modify merge from
    @e[]::Item |= n{}                              ##modify merge value 
    @s::ArmorItems .. n{id:'iron_boots', Count:1b} ##append
}
```

### scoreboard命令聚合

上述提到的scoreboard数据运算全部写在 `scb{}`大括号里。同上述聚合

### display命令聚合

将 `tellraw` `title` `scoreboard` `bossbar`等具有显示作用的命令聚合在一起

TODO: json文本组件增强`j{obj@s}`等价于`{"score":{"name":"@s","objective":"obj"}`

```mcf
display{
    @s.text j{}             ## tellraw @s {}
    @s.title j{}            ## title @s title {}
    @s.title times 10 70 20 ## title @s times
    @s.title clear
    @s.title {
        .actionbar j{}
        .times 10 70 20
    }
    @s.actionbar j{}        ## title @s actionbar {}
    @s.subtitle j{}         ## title @s subtitle {}
    
    @s.bossbar foo:newboss  ##bossbar set players
    bossbar foo:newboss j{""}
    bossbar foo:newboss {

    }
    scb test "分数"
    scb test {
        displayname "分数" 
        rendertype hearts
        display sidebar
    }
  
}
```

支持把选择器提出到前面的做法，子内容必须带`.`。

```mcf
display @s{
    .text j{}             ## tellraw @s {}
    .title j{}            ## title @s title {}
    .title times 10 70 20
    .title clear
}
```

在`display{}`中也可以选择器提前。

```mcf
display {
	@s.text j{}
	@s {
		.title j{}
	}
}
```

#### title命令聚合

title命令也有不带选择器和带选择器形式的聚合，子内容必须带`.`。与display不同的是，`clear` `times`子命令不用加`.title`。

```mcf
title {
    @s.title j{}
    @s.subtitle j{}
    @s.clear
    @s.times 10 70 20
    @s {
    	.title j{}
    }
}
```

```mcf
title @s{
    .title j{}
    .subtitle j{}
    .actionbar j{}
    .clear
    .reset
    .times 10 70 20
}
```

#### bossbar命令聚合

*初始化*。

```mcf
bossbar foo:newboss "New Boss"  ##bossbar add

bossbar foo:newboss "New Boss" {
	color blue
	max 10
}
```

*设置属性*。

```mcf
bossbar foo:newboss {
    get max     ##bossbar get max|players|value|visible
    remove 
    color blue       ##bossbar set
    max 10
    name j{""}
    players @s       ##bossbar set players @s
    players default  ##bossbar set players
    style notched_6
    visible true
}
```

设置属性也可以为每一项加`.`。

*bossbar表达式*。

让bossbar像NBT操作那样方便

```mcf
bossbar test:foo           ##bossbar get test:foo value
bossbar test:foo max       ##bossbar get test:foo max|players|value|visible
bossbar test:foo = 10      ##bossbar set test:foo value 10
bossbar test:foo max = 10  ##bossbar set test:foo max 10
```

### item命令聚合

将有关物品的操作聚合在一起 `item` `give` `clear` `loot`。对于`give`和`clear`来说如果不希望使用`+=`和`-=`可以选择直接使用单词。

```mcf
item{
    @e[]::armor.chest = stone *4                         ##replace with
    @e[]::armor.chest = @s::armor.chest foo:modifier     ##replace from
    @e[]::armor.chest += foo:modifier                    ##modify
    @e[] += stone *4                                     ##give
    @e[] -= stone *4                                     ##clear
    ~ ~ ~ =                                   ##loot spawn
    ~ ~ ~ +=                                  ##loot insert
    ~ ~ ~::container.5 =                      ##loot replace block
    @s +=                                         ##loot give
    @s::container.5 =                             ##loot replace entity
    
}
```

对于命令中支持选择器的部分，item支持选择器提前的做法

```mcf
item @s{
	armor.chest = stone *4
	armor.chest = @s::armor.chest foo:modifier
	.give stone *4
	.clear stone *4
}

item{
	@s {
		armor.chest = stone *4
		armor.chest = @s::armor.chest foo:modifier
		.give stone *4
	}
}
```

#### loot命令聚合

```mcf
loot{
    ~ ~ ~ =                                   ##spawn
    ~ ~ ~ +=                                  ##insert
    ~ ~ ~::container.5 =                      ##replace block
    @s +=                                         ##give
    @s give									   ##give
    @s::container.5 =                             ##replace entity
}
```

对于loot的来源来说，按照原来的方式书写

```mcf
loot{
	@s += loot test:loot_1                            ##mine
	@s += fish test:loot_1 ~ ~ ~ mainhand             ##fish
	@s += kill @e[]                                   ##kill
	@s += mine ~ ~ ~ mainhand                         ##mine
}
```

对于命令中支持选择器的部分， loot支持选择器提前的做法

```mcf
loot @s{
	.give loot test:loot_1                      ##或者直接用+=
	container.5 = loot test:loot_1
}

loot{
	@s {
		.give loot test:loot_1
		container.5 = loot test:loot_1
	}
}
```

### entity命令聚合

将有关实体的操作 `summon` `kill` `tag` `effect` `attribute` `tp` 以及之前提到的`item` `display`聚合到一起

#### 声明玩家假名

对于JustMCF项目来说，凡是使用到的玩家假名，都需要提前声明。在使用时如果是**不**带'#'，则需要变为带'@'。例如：

```mcf
##声明
entity(player) xxxx1          ## 设置mcf项目中会使用到的玩家假名，可以使用@xxxx1来选中玩家
entity(player) #test1, xxxx2

##使用
scb{
    scb#test1 = 1
    scb@xxxx1 = 2
}
```

#### 初始化实体

*生成实体*。

```mcf
entity(pig) ~ ~ ~ n{CustomName:"pig1"}               ##summon pig ~ ~ ~ {}
```

*初始化使用假名*。解析生成.mcfunction后，实际上指定了uuid，uuid可以在项目文件中配置/自动生成，可以使用@xxxx来选中该实体。

```mcf
entity(pig) ~ ~ ~ xxxx n{CustomName:"pig1"} 
entity @xxxx{   
    .tp ~ ~ ~
}
```

*初始化指定tag*。解析生成.mcfunction后，实际上在NBT中加入了Tags:["tag1","tag2"]

tag前面可以加`.`，但是后续对实体执行操作的语句是必须加`.`

```mcf
entity(pig) ~ ~ ~ xxxx n{CustomName:"pig1"} { .tag = tag1,tag2 }
```

*初始化后直接进行操作*。可以进行操作的内容见下

```mcf
entity(pig) ~ ~ ~ xxxx n{CustomName:"pig1"} {
	.tag = tag1,tag2 ##将会解析进初始化语句的nbt中
	.tag += temp      ##将会解析为tag add
}
```

#### 对实体执行操作

对于display、item、loot、attr、title等命令聚合来说，在entity大括号内可以执行类似的语句，这里不再复制粘贴。

`entity{}`还可以直接不写，把内部的内容直接写在外面，这是entity表达式的写法。

```mcf
entity{
    @s.tp ~ ~ ~                                    ##tp
    @s.tag += temp                                      ##tag
    @s.tag -= temp                                      ##tag
    @s.effect += speed(3) 20 true                       ##effect give @s speed 20 3 true
    @s.effect += speed 20 3 true
    @s.effect -= speed                                  ##effect clear @s speed
    @s.effect clear
    @s.kill
    @s.item::container.5 =                             ##item 
    @s.loot::container.5 =                             ##loot 也可以写成item
    @s.item {
    	give loot test:loot_1
    	give fish test:loot_1 ~ ~ ~ mainhand
    }
    @s.loot {
    	give loot test:loot_1
    	give fish test:loot_1 ~ ~ ~ mainhand         
    }
    @s.attr::generic.attack_damage +=                  ##attr 
}
```

对选择器选中的实体进行操作

```mcf
entity @xxxx{
    .tp ~ ~ ~
    .tag += temp
}

entity {
	@s {
		.tag += temp
	}
}
```

#### attribute命令聚合

attr聚合主要关注点还是在于更改了modifier运算的符号，如下示例：

TODO:取代UUID，直接用name进行运算

```mcf
attr{
    @s::generic.attack_damage all                     ##get
    @s::generic.attack_damage base *4                 ##base get
    @s::generic.attack_damage base =                  ##set
    @s::generic.attack_damage += 0-0-0-0-0 test(+3)   ##modifier add uuid name value add
    @s::generic.attack_damage += 0-0-0-0-0 test(*+3)  ##modifier add uuid name value multiply_base
    @s::generic.attack_damage += 0-0-0-0-0 test(*3)   ##modifier add uuid name value multiply
    @s::generic.attack_damage -=                      ##modifier remove
    @s::generic.attack_damage 0-0-0-0-0 *4            ##modifier value get
} 
```

attr也同时支持提出实体选择器

```mcf
attr @s{
	generic.attack_damage all
	generic.attack_damage += 0-0-0-0-0 test(+3)
}
attr{
	@s {
		generic.attack_damage all
		generic.attack_damage += 0-0-0-0-0 test(+3)
	}
}
```

### block命令聚合

将方块操作 `setblock` `fill` `clone` 聚合在一起

```mcf
block{
    ~ ~ ~ minecraft:stone[] keep                    ##setblock
    ~ ~ ~ ~ ~ ~ minecraft:stone[] keep          ##fill
    ~ ~ ~ ~ ~ ~ ~ ~ ~ filtered oak_planks   ##clone
}
```

### world命令聚合（TODO）

## 命令对象化

entity命令聚合内的命令可以单独存在并进行使用，就如同对entity对象进行操作一样方便。

TODO: 把所有有关选择器的命令都作为实体的方法

```mcf
@s.kill 
@s.tag +=
@s.tp @r
@s.item += minecraft:stone                       ##give
@s.item::armor.chest = xxx 4			        ##item
@s.exec{}->{}                                    ##execute as
```

## 选择器增强（TODO）

默认设置下，强制每个选择器`limit=1`，除非使用`limit=..`解除限制。

```mcf
@e(item)[pos= , dpos= , rot= ]
@e(pig)[n{Motion:[]},{scb1=1..0,scb2 < 0 }]
```

## 支持脚本

使用 `{{   }}`标定，内部是javascript脚本内容。

在脚本内容中使用`#{ }#`，将框起来的文本信息输出到外界。（原理为：自动替换为unfold()）

注：这是用到了javascript脚本中的模版字符串，可以很方便地向脚本内进行插值。

```mcf
{{
    const list = [1,2,3,4,5]
    for(const i of list){#{
        setblock ~ ~${i} ~ stone
    }#}
}}
```

如此，将会把以下命令插入文件的对应位置中

```mcfunction
setblock ~ ~1 ~ stone
setblock ~ ~2 ~ stone
setblock ~ ~3 ~ stone
setblock ~ ~4 ~ stone
setblock ~ ~5 ~ stone
```

## 进阶函数设计

### 数据类型

#### 基本数据类型（TODO）

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

提前设计的类型信息，可以用于自动补全、判断nbt类型等等。这个类型应该是鸭子的。

NBT类型信息加上只对本类型操作的func，就相当于class了。

JustMCF提供如下语法：

```mcf
interface test:foo n{
    Name:"",
    Age:17,
    Information:{}
}

##data merge storage test:foo {Name:"",Age:17,Information:{}}

interface test:foo::Choose n{
	Name:"",
	Age:17,
	Information:{}
}

##data modify storage test:foo Choose set value {Name:"",Age:17,Information:{}}
```

TODO: 这样的内容将会提供一个类型，在构建mcfunction过程中，将会判断例如函数的类型的兼容性；或者在未来的语法补全中，提供补全内容。

#### 带类型标记的赋值语法（TODO）

前置的方式进行类型的标记

```mcf
nbt:float foo:test::value = 32f
```

### 进阶函数

JustMCF提供了带有参数的函数语法。这样的函数将会附带生成输入输出storage声明，在运行过程中，会使用到storage进行堆栈。由于Minecraft中的数据的modify是存值，因此堆栈会有性能损耗。请谨慎使用进阶函数进行递归操作。

在函数中，不带命名空间ID的storage操作都被默认为在当前函数栈操作；也可以将`local::`加到它的前缀上。对于栈的根标签的访问，可以用`local::{}`的方式进行，以防止使用`{}`形成的歧义。

*不带类型标记的函数*。

```mcf
func test:fun1(a,b){
	c = local::a         ##c没有命名空间id，a带着前置local::
	yield c
}
```

`yield`后面跟data标识符，将会返回函数中需要返回的值，将这个值复制到输出storage中。

`return`（TODO）

*函数执行*。

```mcf
foo:test::value = func test:func1(a,b)
```

函数的执行语句可以作为NBT操作的右值参与运算。

*带类型标记的函数（TODO）*。

```mcf
func test:func1(int a,int b) int {
	
}
```

## .mcf文件的开始

每一个.mcf文件可以拥有如下内容：命名空间语句、interface语句、函数语句、进阶函数语句、函数标签语句、脚本内容。

通常来说，拥有同一个逻辑模块的函数应该首先放置在同一个函数文件夹中，对于JustMCF项目来说，也就是放置在同一个.mcf文件中。

对于没有抽象设计需求的作者来说，可以在mcf.mcmeta文件中设置默认命名空间，每一个.mcf文件以函数语句、函数标签语句为经纬进行组织。如下所示：

```mcf
namsp [func = data_resolve]{
    func getPlayerData{

    }
    func setPlayerData{

    }
    func getPigData{

    }
    func #getData{
        func getPlayerData
        func getPigData
        func getZombieData{

        }
    }
}
```

对于拥有抽象设计需求的作者来说，可以把每一个.mcf文件作为一个类文件进行组织。这个类的数据部分和操作部分分离。数据部分使用interface语句，操作部分使用函数语句或者进阶函数语句。如下所示：

```mcf
interface Player n{
    Name:"fool",
    Age: 18,
    Sex: "female"
}
func getPlayerName(player){

}
func setPlayerAge(player,age){

}
```

## 附录：mcf.mcmeta配置项说明
