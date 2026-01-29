# 数据结构

## 数组

数组是 Java 中最基本的数据结构之一，用于存储固定大小的同类型元素。

```java
int[] numbers = new int[5];
numbers[0] = 1;
numbers[1] = 2;
```

## 链表

链表是一种动态数据结构，每个节点包含数据和指向下一个节点的引用。

```java
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
```

## 栈和队列

栈遵循后进先出（LIFO）原则，队列遵循先进先出（FIFO）原则。

```java
// Java 中的栈
Stack<Integer> stack = new Stack<>();
stack.push(1);

// Java 中的队列
Queue<Integer> queue = new LinkedList<>();
queue.offer(1);
```

## 哈希表

哈希表提供快速的键值对查找。

```java
HashMap<String, Integer> map = new HashMap<>();
map.put("key", 100);
int value = map.get("key");
```
