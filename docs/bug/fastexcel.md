# EasyExcel 不维护了？FastExcel 也“消失”了？别慌，它只是进了 Apache！

<mark>**🎉 大家好我是陈老板！评论区任意评论即可参加 Claude Code Opus 10 美元密钥抽奖，每周五开奖！**</mark>

最近偶然发现 github 上 FastExcel 项目查不到了，然后就去了解了一下，结果发现 FastExcel 并没有消失，而是被 Apache 软件基金会“招安”了，接下来带大家一起梳理下这个事件的来龙去脉。

> **“我的项目还在用 EasyExcel，作者却停更了？”**  
> **“听说 FastExcel 是替代方案，结果 GitHub 上都搜不到了？”**  
> 别急——不是项目死了，而是它“毕业”了，还拿到了 **Apache 的编制**！

## 🚨 警报：EasyExcel 已停止维护

如果你是 Java 开发者，尤其是做过报表导出、数据导入功能的，大概率用过 [**Alibaba EasyExcel**](https://github.com/alibaba/easyexcel)。

它凭借 **低内存、高性能、API 简洁** 的优势，成为国内 Java Excel 处理的事实标准。但是由于原作者的离职：

- 官方仓库已标注：**“This repository was archived by the owner on Sep 4, 2025. It is now read-only.(只可读)”**

> 💥 这意味着：**EasyExcel 正式进入不再维护的状态**。

EasyExcel 最后一个版本是发布于 2024.9.11 的[4.0.3](https://mvnrepository.com/artifact/com.alibaba/easyexcel/4.0.3)，之后就没有新的版本了。

对于新项目来说，继续依赖一个“退役”的库，风险不小。

## 🔍 新的救星：FastExcel？

于是，就在大家一筹莫展之际，**EasyExcel 作者（jipengfei，Jiaju Zhuang）公开了一个新的项目 FastExcel，号称是 EasyExcel 的“升级版”，并且开源在 GitHub 上**。我记得 1.0.0 版本还在 EasyExcel 的基础上增加了读取 Excel 指定行数和将 Excel 转换为 PDF 的功能，之后陆续发布到了 1.3.0 版本。

从 EasyExcel 到 FastExcel 可以做到无缝升级，只需要把依赖改成 FastExcel 就行了,之后重新引入包，然后再把代码中所有的 EasyExcel 改为 FastExcel 就行了，API 都是一样的。

```xml
<!--  easyexcel  -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>easyexcel</artifactId>
    <version>4.0.3</version>
    <scope>compile</scope>
</dependency>

<!--  fastexcel  -->
<dependency>
    <groupId>cn.idev.excel</groupId>
    <artifactId>fastexcel</artifactId>
    <version>1.3.0</version>
    <scope>compile</scope>
</dependency>
```

**但是陈老板今天突然发现，[原 fastexcelgithub 地址](https://github.com/fast-excel/fastexcel/fastexcel)却搜不到了，我心想完了，难道 FastExcel 也“跑路”了？，难道又要改代码？ 差点就要仰头 45 度了**

::: info
“注意：GitHub 上存在另一个同名项目 dhatim/fastexcel，但本文所述 FastExcel 是由 EasyExcel 原作者发起的全新项目，两者无关。”
:::

## ✨ 真相：它被 Apache “招安”了！

好消息是：**FastExcel 没有消失，而是完成了一次华丽升级！**

2024 年底，FastExcel 作者正式将项目 **捐赠给 Apache 软件基金会**，成为 **Apache POI**（Java 最权威的 Office 文档处理库）的子项目，并更名为：

> ### **Apache POI FESOD**
>
> （Fast Easy Spreadsheet And Other Documents）

官方仓库：[https://github.com/apache/fesod](https://github.com/apache/fesod)  
官方文档：[https://fesod.apache.org/docs/](https://fesod.apache.org/docs/)
组件坐标：[https://mvnrepository.com/artifact/org.apache.fesod/fesod-sheet/2.0.0-incubating](https://mvnrepository.com/artifact/org.apache.fesod/fesod-sheet/2.0.0-incubating)

这意味着：

- ✅ 项目获得 **Apache 背书**，长期维护有保障
- ✅ 与 **Apache POI 深度集成**，兼容性更强
- ✅ 社区治理更规范，贡献者更多元
- ✅ 未来可能成为 Java Excel 处理的新标准

**但是现在 FESOD 还处于孵化阶段，尚未发布正式版本，目前最新版本是 2.0.0-incubating，非常期待正式版本。如果想使用 excel 还是推荐先试用 FastExcel 的 1.3.0 版本，等正式版本发布了再升级到 FESOD。**

我大概梳理下整体的时间线：

- 2024.09.11 EasyExcel 发布最后一个稳定版本，EasyExcel-4.0.3
- 2024.11.06 EasyExcel 正式进入“只修严重 Bug，不加新功能”的状态
- 2024.12.05 EasyExcel 作者新建 FastExcel 仓库,并发布第一个版本，FastExcel-1.0.0
- 2025.01.14 FastExcel 发布第二个版本稳定版，FastExcel-1.1.0
- 2025.04.14 FastExcel 发布第三个版本稳定版，FastExcell-1.2.0
- 2025.08.23 FastExcel 发布最后一个稳定版本，FastExcel-1.3.0
- 2025.09.04 EasyExcel 的 GitHub 仓库归档，仅可读
- 2025.09.17 FastExcel 正式加入 Apache 大家庭，并更名 FESOD
- 2026.01.21 FESOD 发布第一个孵化版本，FESOD-2.0.0-incubating

## ⚙️ 快速上手 Apache FESOD

FESOD 延续了 FastExcel 的核心设计，使用起来依然简单高效, 依然是熟悉的味道。

### 1. 添加依赖（Maven）

```xml
<dependency>
    <groupId>org.apache.fesod</groupId>
    <artifactId>fesod-sheet</artifactId>
    <version>2.0.0-incubating</version>
    <scope>compile</scope>
</dependency>
```

### 2. 读示例

```java
// Implement the ReadListener interface to set up operations for reading data
public class DemoDataListener implements ReadListener<DemoData> {
    @Override
    public void invoke(DemoData data, AnalysisContext context) {
        System.out.println("Parsed a data entry" + JSON.toJSONString(data));
    }

    @Override
    public void doAfterAllAnalysed(AnalysisContext context) {
        System.out.println("All data parsed!");
    }
}

public static void main(String[] args) {
    String fileName = "demo.xlsx";
    // Read file
    FesodSheet.read(fileName, DemoData.class, new DemoDataListener()).sheet().doRead();
}
```

### 3. 写示例

```java
// Sample data class
public class DemoData {
    @ExcelProperty("String Title")
    private String string;
    @ExcelProperty("Date Title")
    private Date date;
    @ExcelProperty("Number Title")
    private Double doubleData;
    @ExcelIgnore
    private String ignore;
}

// Prepare data to write
private static List<DemoData> data() {
    List<DemoData> list = new ArrayList<>();
    for (int i = 0; i < 10; i++) {
        DemoData data = new DemoData();
        data.setString("String" + i);
        data.setDate(new Date());
        data.setDoubleData(0.56);
        list.add(data);
    }
    return list;
}

public static void main(String[] args) {
    String fileName = "demo.xlsx";
    // Create a "Template" sheet and write data
    FesodSheet.write(fileName, DemoData.class).sheet("Template").doWrite(data());
}
```

**你的项目还在用 EasyExcel 吗？打算迁移到 FESOD 吗？欢迎在评论区聊聊你的经验！**

<mark>**👉 ai 中转站&爬虫代理就找陈老老老板！进群还可以参加每周抽 10 美元密钥抽奖，与评论区互不影响哦！**</mark>
