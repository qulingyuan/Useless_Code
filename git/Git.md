## Git

### 集中式vs分布式

CVS和SVN是集中式的版本控制系统，而Git是分布式版本控制系统。

集中式版本控制系统，版本库是集中存放在中央服务器的，工作时，用自己的电脑从中央服务器取得最新的版本，工作完成后，再推送给中央服务器。集中式版本控制系统最大的缺点就是必须联网才能工作，如果是局域网还好，速度够快，如果在互联网上，而且网速慢的话就嗝屁了。

分布式版本控制系统，没有像集中式那种“中央服务器”，每个人电脑上都是一个完整的版本库，分布式版本控制系统通常也有一台充当“中央服务器”，但这个服务器的作用仅仅是用来方便“交换”大家的修改。同时，Git还具有强大的分支管理等功能，可以说，Git是目前最强大的版本控制系统。

### 什么是工作区, 暂存区, 版本库

首先我们会使用 `git init`, 创建一个仓库. 这个仓库会存放我们以后提交的每一个版本的库即(版本库)

**工作区**

`git init`下的文件夹的所有目录及文件,但不包括`.git`目录下的文件

**暂存区（stage or index）**

`git add`, 添加的文件或文件夹, 暂存区属于版本库存储的一块区域. 注意：暂存区的文件只属于该分之下的暂存,如果没有执行`commit`操作, 则不允许切换分支.

**版本库**
版本库包含暂存区及分支, 当使用`git commit` 将暂存区的文件提交到仓库里, 暂存区的文件就会清空,生成一个 `commit id` 进入版本库中.

![git 基本描述](https://segmentfault.com/img/bVmTFX)

**常用基本命令**

`git init `：初始化一个git仓库。

`git clone <版本库的url>`：将其他仓库克隆到本地，（包括被clone仓库的版本变化）。

`git status`：查看当前git仓库的状态。


