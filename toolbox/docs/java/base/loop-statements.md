# 循环语句

## for 循环

for 循环是最常用的循环结构，在已知循环次数的情况下使用。

```java
// 标准 for 循环
for (int i = 0; i < 10; i++) {
    System.out.println("当前计数: " + i);
}

// 增强 for 循环（遍历数组或集合）
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println("数字: " + num);
}
```

## while 循环

while 循环在循环开始前检查条件，适用于不确定循环次数的情况。

```java
int count = 0;
while (count < 5) {
    System.out.println("count = " + count);
    count++;
}
```

## do-while 循环

do-while 循环至少执行一次，然后再检查条件。

```java
int i = 0;
do {
    System.out.println("至少执行一次: " + i);
    i++;
} while (i < 5);
```

## break 和 continue

- `break`: 跳出当前循环
- `continue`: 跳过本次循环，进入下一次循环

```java
// break 示例
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break; // 跳出循环
    }
    System.out.println(i);
}

// continue 示例
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue; // 跳过偶数
    }
    System.out.println(i); // 只打印奇数
}
```
