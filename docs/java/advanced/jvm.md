# JVM 虚拟机

## JVM 内存模型

JVM 运行时数据区域包含以下几个部分：

```
┌─────────────────────────────────┐
│         Method Area             │ 方法区
├─────────────────────────────────┤
│          Heap                   │ 堆
├─────────────────────────────────┤
│     Java Stack │ Native Stack   │ 栈区
├─────────────────────────────────┤
│      Program Counter            │ 程序计数器
└─────────────────────────────────┘
```

## 垃圾回收算法

### 标记-清除算法

先标记需要回收的对象，然后统一回收。效率低，会产生内存碎片。

```java
// 示例代码
public class MarkSweepExample {
    public static void main(String[] args) {
        Object obj1 = new Object();
        Object obj2 = new Object();
        obj1 = null; // obj1 成为可回收对象
        // GC 执行时标记并清除 obj1
    }
}
```

### 标记-整理算法

标记后，将存活对象向一端移动，消除内存碎片。

### 复制算法

将内存分为两块，每次只使用其中一块。GC 时将存活对象复制到另一块。

### 分代回收

根据对象生命周期不同，将堆分为新生代和老年代。

```java
// JVM 参数配置
-Xms512m          // 初始堆大小
-Xmx1024m         // 最大堆大小
-Xmn256m          // 新生代大小
-XX:SurvivorRatio=8  // Eden 与 Survivor 比例
```

## 类加载机制

类加载过程：加载 → 验证 → 准备 → 解析 → 初始化

```java
// 双亲委派模型
ClassLoader loader = ClassLoader.getSystemClassLoader();
// Bootstrap ClassLoader (启动类加载器)
// ↑
// Extension ClassLoader (扩展类加载器)
// ↑
// Application ClassLoader (应用类加载器)
```

## 常见 JVM 参数

```bash
# 内存设置
-Xms512m -Xmx1024m

# GC 策略
-XX:+UseG1GC  # 使用 G1 垃圾回收器

# 日志输出
-Xlog:gc*:file=gc.log

# 堆转储（OOM 时自动生成）
-XX:+HeapDumpOnOutOfMemoryError
-XX:HeapDumpPath=/tmp/heapdump.hprof
```
