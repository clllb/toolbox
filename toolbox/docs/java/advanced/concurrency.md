# 并发编程

## 线程基础

Java 提供了多种创建线程的方式。

```java
// 方式一：继承 Thread 类
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("线程运行中...");
    }
}

// 方式二：实现 Runnable 接口
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("线程运行中...");
    }
}

// 启动线程
MyThread thread = new MyThread();
thread.start();

Thread thread2 = new Thread(new MyRunnable());
thread2.start();
```

## synchronized 关键字

synchronized 用于保证线程安全。

```java
public class Counter {
    private int count = 0;

    // 同步方法
    public synchronized void increment() {
        count++;
    }

    // 同步代码块
    public void decrement() {
        synchronized (this) {
            count--;
        }
    }
}
```

## 线程池

使用线程池可以避免频繁创建和销毁线程的开销。

```java
ExecutorService executor = Executors.newFixedThreadPool(5);

for (int i = 0; i < 10; i++) {
    final int taskNum = i;
    executor.execute(() -> {
        System.out.println("执行任务 " + taskNum);
    });
}

executor.shutdown();
```

## Callable 和 Future

Callable 可以返回执行结果，Future 用于获取结果。

```java
ExecutorService executor = Executors.newSingleThreadExecutor();

Future<Integer> future = executor.submit(() -> {
    Thread.sleep(1000);
    return 42;
});

try {
    Integer result = future.get();
    System.out.println("结果: " + result);
} catch (Exception e) {
    e.printStackTrace();
}

executor.shutdown();
```
