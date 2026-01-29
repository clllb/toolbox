# 踩坑记录

这里是各种技术踩坑记录，帮你少走弯路。

---

## 一、标题层级演示

这是一级标题（H1）

### 二级标题（H2）

#### 三级标题（H3）

##### 四级标题（H4）

###### 五级标题（H5）

####### 六级标题（H6）

---

## 二、文本格式演示

这是**粗体文本**
这是*斜体文本*
这是**_粗斜体文本_**
这是~~删除线文本~~
这是<u>下划线文本</u>

行内代码：`const x = 10;`

---

## 三、列表演示

### 无序列表

- 第一项
- 第二项
  - 子项 A
  - 子项 B
- 第三项

### 有序列表

1. 第一步
2. 第二步
   1. 子步骤 1
   2. 子步骤 2
3. 第三步

### 任务列表

- [x] 已完成的任务
- [ ] 未完成的任务
- [x] 另一个已完成的任务
- [ ] 待办事项

---

## 四、表格演示

| 姓名 | 年龄 | 职业     | 状态 |
| ---- | ---- | -------- | ---- |
| 张三 | 25   | 程序员   | 在职 |
| 李四 | 30   | 产品经理 | 离职 |
| 王五 | 28   | 设计师   | 在职 |

| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| 左     |    中    |     右 |
| left   |  center  |  right |

---

## 五、代码块演示

### JavaScript

```javascript
function greet(name) {
  const message = `Hello, ${name}!`
  console.log(message)
  return message
}

greet('World')
```

### Python

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

### CSS

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.button {
  padding: 12px 24px;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Shell

```bash
#!/bin/bash
echo "Hello, World!"
npm install
npm run dev
```

---

## 六、引用块演示

> 这是一段普通的引用文本。

> 💡 **提示**
>
> 这是一段带有图标的提示文本。

> ⚠️ **警告**
>
> 这是一段警告信息。
> 可以有多行内容。

> ❌ **错误**
>
> 这是一段错误信息。

> ✨ **注意**
>
> 这是一段普通注意信息。

---

## 七、分隔线演示

上面是内容

---

下面是内容

---

又一条分隔线

---

第三条分隔线

---

## 八、链接和图片演示

### 链接

[外部链接](https://github.com/clllb/toolbox)

[内部链接](/java/)

[带标题的链接](https://github.com/clllb/toolbox '点击访问示例网站')

### 图片

![示例图片](/brown.jpg)

![Logo](/logo.png)

### 链接图片

[![点击跳转](/logo.png)](https://github.com/clllb/toolbox)

---

## 九、高级功能演示

### 折叠内容

<details>
<summary>点击展开查看更多内容</summary>

这里是折叠起来的详细内容，默认是隐藏的，点击上方标题可以展开查看。

可以包含：

- 列表
- 代码
- 其他 Markdown 内容

```javascript
console.log('折叠内容中的代码')
```

</details>

### 嵌套折叠

<details>
<summary>第一层折叠</summary>

这是第一层内容。

<details>
<summary>第二层折叠</summary>

这是第二层嵌套的折叠内容。

</details>

</details>

---

## 十、HTML 标签演示

### 自定义样式

<span style="color: red;">红色文字</span>
<span style="color: green;">绿色文字</span>
<span style="color: blue;">蓝色文字</span>

### HTML 代码

<div style="padding: 16px; background: #f0f0f0; border-radius: 8px;">
  <h3>自定义 HTML 容器</h3>
  <p>这是使用 HTML 标签创建的自定义内容块。</p>
</div>

### 脚注

---

## 十一、公式演示（需要 MathJax 支持）

行内公式：$E = mc^2$

块级公式：

$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

积分公式：

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

---

## 十二、emoji 表情演示

😀 😃 😄 😁 😆 😅 🤣 😂

🎉 🎊 🎈 🎁 🏆 🥇 🌟 ⭐

💻 🖥️ 💾 💿 📱 📲 🖱️ ⌨️

💡 🔧 ⚡ 🔥 💧 🌈 🌍 🌎

---

## 十三、键盘按键演示

按下 <kbd>Ctrl</kbd> + <kbd>C</kbd> 复制

按下 <kbd>Ctrl</kbd> + <kbd>V</kbd> 粘贴

按下 <kbd>Alt</kbd> + <kbd>F4</kbd> 关闭窗口

---

##十四、高亮文本演示

这是一段==高亮==的文本，需要特定的 Markdown 扩展支持。

---

## 总结

这就是一个多样化的 Markdown 格式示例文档，涵盖了：

- ✅ 标题层级
- ✅ 文本格式
- ✅ 各种列表
- ✅ 表格
- ✅ 代码块
- ✅ 引用块
- ✅ 分隔线
- ✅ 链接和图片
- ✅ 折叠内容
- ✅ HTML 标签
- ✅ 脚注
- ✅ emoji 表情
- ✅ 键盘按键

希望这个示例对你有帮助！
