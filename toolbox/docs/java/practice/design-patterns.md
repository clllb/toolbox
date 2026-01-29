# 设计模式实战

## 单例模式

确保一个类只有一个实例，并提供全局访问点。

```java
// 饿汉式
public class EagerSingleton {
    private static final EagerSingleton instance = new EagerSingleton();

    private EagerSingleton() {}

    public static EagerSingleton getInstance() {
        return instance;
    }
}

// 懒汉式（双重检查锁）
public class LazySingleton {
    private static volatile LazySingleton instance;

    private LazySingleton() {}

    public static LazySingleton getInstance() {
        if (instance == null) {
            synchronized (LazySingleton.class) {
                if (instance == null) {
                    instance = new LazySingleton();
                }
            }
        }
        return instance;
    }
}
```

## 工厂模式

定义创建对象的接口，让子类决定实例化哪个类。

```java
// 产品接口
interface Product {
    void use();
}

// 具体产品
class ProductA implements Product {
    @Override
    public void use() {
        System.out.println("使用产品 A");
    }
}

class ProductB implements Product {
    @Override
    public void use() {
        System.out.println("使用产品 B");
    }
}

// 工厂类
class ProductFactory {
    public static Product createProduct(String type) {
        if ("A".equals(type)) {
            return new ProductA();
        } else if ("B".equals(type)) {
            return new ProductB();
        }
        return null;
    }
}

// 使用
Product product = ProductFactory.createProduct("A");
product.use();
```

## 观察者模式

定义对象间的一对多依赖，当一个对象状态改变时，所有依赖它的对象都会收到通知。

```java
import java.util.ArrayList;
import java.util.List;

// 观察者接口
interface Observer {
    void update(String message);
}

// 被观察者
class Subject {
    private List<Observer> observers = new ArrayList<>();

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void notifyObservers(String message) {
        for (Observer observer : observers) {
            observer.update(message);
        }
    }
}

// 具体观察者
class EmailObserver implements Observer {
    @Override
    public void update(String message) {
        System.out.println("发送邮件: " + message);
    }
}

class SMSObserver implements Observer {
    @Override
    public void update(String message) {
        System.out.println("发送短信: " + message);
    }
}

// 使用
Subject subject = new Subject();
subject.addObserver(new EmailObserver());
subject.addObserver(new SMSObserver());
subject.notifyObservers("系统更新通知");
```

## 策略模式

定义一系列算法，并将每个算法封装起来，使它们可以互换。

```java
// 策略接口
interface PaymentStrategy {
    void pay(int amount);
}

// 具体策略
class AlipayStrategy implements PaymentStrategy {
    @Override
    public void pay(int amount) {
        System.out.println("使用支付宝支付: " + amount + "元");
    }
}

class WeChatPayStrategy implements PaymentStrategy {
    @Override
    public void pay(int amount) {
        System.out.println("使用微信支付: " + amount + "元");
    }
}

// 上下文
class PaymentContext {
    private PaymentStrategy strategy;

    public void setStrategy(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void executePayment(int amount) {
        strategy.pay(amount);
    }
}

// 使用
PaymentContext context = new PaymentContext();
context.setStrategy(new AlipayStrategy());
context.executePayment(100);
```
