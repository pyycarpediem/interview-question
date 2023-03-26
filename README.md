# 面试题库

想做一个很全的面试题库工程

1. 需要去全网收集面试题               
2. 需要对面试题进行分类归类归档                       
3. 需要持续更新

----------


## 如何使用？
1. 面试题采用 issue 方式来进行记录和作答， 直接访问本项目链接即可：https://github.com/pro-collection/interview-question/issues
   
2. 题目难度分级：初级、中级、高级、资深， 可以通过 milestone 来进行筛选：
<img width="1378" alt="image" src="https://user-images.githubusercontent.com/22188674/222943207-390166d3-062e-469d-a480-d34dc4db1895.png">
   
3. 题目的类型分类：使用 labels 方式管理
<img width="927" alt="image" src="https://user-images.githubusercontent.com/22188674/222943276-0cf2146a-f7a9-416d-bd66-890fc81e736b.png">
   
4. 关于题目序号， 直接使用 issue 自增 id 即可， 便于收藏记忆记录等：
<img width="620" alt="image" src="https://user-images.githubusercontent.com/22188674/222943315-fb58b939-53a2-467f-bc57-cccc66a166eb.png">

5. 关于问题讨论：开通 discussions 社区, 可以直接在 discussions 区进行讨论即可。
<img width="1334" alt="image" src="https://user-images.githubusercontent.com/22188674/222943370-122d4d33-73cb-44c7-b18d-7db089e0bdfe.png">
   
6. 使用技巧：本项目所有 open 的 issue 是作者进行整理了的问题。如何精确筛选呢？
- 搜索 title : `is:open in:title [txt]`
- 搜索 内容: `is:open in:body [txt]`
<img width="767" alt="image" src="https://user-images.githubusercontent.com/22188674/223155285-7cf7e2f5-e0ed-4d6c-adea-bc5ec3e2933c.png">


## 更新周报
1. 每隔一段时间， 总结会以 release 的方式总结： https://github.com/pro-collection/interview-question/releases              
2. 具体面试问答内容， 会落地在 https://github.com/pro-collection/interview-question/tree/master/books 目录下面
  gitee 可以访问这个链接： https://gitee.com/yanleweb/interview-question/tree/master/books

## 问题收集

> 待整理

- https://juejin.cn/post/7137261512296497182
- https://juejin.cn/post/7177045936298786872
- https://juejin.cn/post/7204307381689532474
- https://juejin.cn/post/7204594495996198968
- https://juejin.cn/post/7016593221815910408
- https://juejin.cn/post/6844903885488783374
- https://juejin.cn/post/7061588533214969892
- https://juejin.cn/post/6844903830887366670
- https://juejin.cn/post/7085257325165936648
- https://juejin.cn/post/7142690757722243102
- https://juejin.cn/post/7194400984490049573
- https://juejin.cn/post/7202639428132274234
- https://www.toutiao.com/article/7199435823970828857
- [2022年我的面试万字总结（Node、webpack、性能优化）](https://juejin.cn/post/7161292246526984228)
- [2022-2023 六年前端中大厂面试总结（仅题目，无答案）](https://juejin.cn/post/7207410405857017917)
- [一文带你梳理React面试题（2023年版本）](https://juejin.cn/post/7182382408807743548)
- [「2022」TypeScript最新高频面试题指南](https://juejin.cn/post/7162011064819777567)
- [2023前端面试真题之JS篇](https://juejin.cn/post/7202904269535887418)
- [前端面试复习计划，准备冲刺2023！（持续更新中...）](https://juejin.cn/post/7184720010563027001)
- [2023高频前端面试题合集之网络篇](https://juejin.cn/post/7197070078360322109)
- [2022凛冬之时三年经验前端面经](https://juejin.cn/post/7173316141161381924)


- 性能监控功能问题研究
  - https://juejin.cn/post/7097157902862909471
  - https://juejin.cn/post/7148364027817623589
  - https://juejin.cn/post/6844904112450994189

------------

> 2023.02.22

- node 服务治理

----------

> 2023.02.23
> 参考文档：https://juejin.cn/post/6844903885488783374


- 第 32 题：Virtual DOM 真的比操作原生 DOM 快吗？谈谈你的想法。
- 第 33 题：下面的代码打印什么内容，为什么？
```
var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();
```
- 第 34 题：简单改造下面的代码，使之分别打印 10 和 20。
```
var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();
```
- 第 35 题：浏览器缓存读取规则
```
可以分成 Service Worker、Memory Cache、Disk Cache 和 Push Cache，那请求的时候 from memory cache 和 from disk cache 的依据是什么，哪些数据什么时候存放在 Memory Cache 和 Disk Cache 中？
```
- 第 36 题：使用迭代的方式实现 flatten 函数。
- 第 37 题：为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？
- 第 38 题：（京东）下面代码中 a 在什么情况下会打印 1？
```
var a = ?;
if(a == 1 && a == 2 && a == 3){
 	console.log(1);
}
```
- 第 39 题：介绍下 BFC 及其应用。
- 第 40 题：在 Vue 中，子组件为何不可以修改父组件传递的 Prop
- 第 41 题：下面代码输出什么
```
var a = 10;
(function () {
    console.log(a)
    a = 5
    console.log(window.a)
    var a = 20;
    console.log(a)
})()
```
- 第 42 题：实现一个 sleep 函数
- 第 43 题：使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果
- 第 44 题：介绍 HTTPS 握手过程
- 第 45 题：HTTPS 握手过程中，客户端如何验证证书的合法性
- 第 46 题：输出以下代码执行的结果并解释为什么
```
var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
```
- 第 47 题：双向绑定和 vuex 是否冲突
- 第 48 题：call 和 apply 的区别是什么，哪个性能更好一些
- 第 49 题：为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？
- 第 50 题：（百度）实现 (5).add(3).minus(2) 功能。
- 第 51 题：Vue 的响应式原理中 Object.defineProperty 有什么缺陷？
- 第 52 题：怎么让一个 div 水平垂直居中
- 第 53 题：输出以下代码的执行结果并解释为什么
```
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x) 	
console.log(b.x)
```
- 第 54 题：冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？
- 第 55 题：某公司 1 到 12 月份的销售额存在一个对象里面
```
如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。
```
- 第 56 题：要求设计 LazyMan 类，实现以下功能。
```
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
```
- 第 57 题：分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景。
- 第 58 题：箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？
- 第 59 题：给定两个数组，写一个方法来计算它们的交集。
```
例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。
```
- 第 60 题：已知如下代码，如何修改才能让图片宽度为 300px ？注意下面代码不可修改。
```
<img src="1.jpg" style="width:480px!important;”>
```
- 第 61 题：介绍下如何实现 token 加密
- 第 62 题：redux 为什么要把 reducer 设计成纯函数
- 第 63 题：如何设计实现无缝轮播
- 第 64 题：模拟实现一个 Promise.finally
- 第 65 题： a.b.c.d 和 a['b']['c']['d']，哪个性能更高？
- 第 66 题：ES6 代码转成 ES5 代码的实现思路是什么
- 第 67 题：数组编程题
```
随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
```
- 第 68 题： 如何解决移动端 Retina 屏 1px 像素问题
- 第 69 题： 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 。
- 第 70 题： 介绍下 webpack 热更新原理，是如何做到在不刷新浏览器的前提下更新页面的
- 第 71 题： 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。
- 第 72 题： 为什么普通 for 循环的性能远远高于 forEach 的性能，请解释其中的原因。
- 第 73 题： 介绍下 BFC、IFC、GFC 和 FFC
- 第 74 题： 使用 JavaScript Proxy 实现简单的数据绑定
- 第 75 题：数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多少
- 第 76 题：输出以下代码运行结果
```
// example 1
var a={}, b='123', c=123;  
a[b]='b';
a[c]='c';  
console.log(a[b]);

---------------------
// example 2
var a={}, b=Symbol('123'), c=Symbol('123');  
a[b]='b';
a[c]='c';  
console.log(a[b]);

---------------------
// example 3
var a={}, b={key:'123'}, c={key:'456'};  
a[b]='b';
a[c]='c';  
console.log(a[b]);
```
- 第 77 题：算法题「旋转数组」
```
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 示例1
输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
输出: [5, 6, 7, 1, 2, 3, 4]
解释:
向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]

// 示例2
输入: [-1, -100, 3, 99] 和 k = 2
输出: [3, 99, -1, -100]
解释: 
向右旋转 1 步: [99, -1, -100, 3]
向右旋转 2 步: [3, 99, -1, -100]
```
- 第 78 题：Vue 的父组件和子组件生命周期钩子执行顺序是什么
- 第 79 题：input 搜索如何防抖，如何处理中文输入
- 第 80 题：介绍下 Promise.all 使用、原理实现及错误处理
- 第 81 题：打印出 1 - 10000 之间的所有对称数
```
例如：121、1331 等
```
- 第 82 题：周一算法题之「移动零」
```
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]

说明:
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
```
- 第 83 题：var、let 和 const 区别的实现原理是什么
- 第 84 题：请实现一个 add 函数，满足以下功能。
```
add(1); 	  // 1
add(1)(2);    // 3
add(1)(2)(3)；// 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6
```
- 第 85 题：react-router 里的 `<Link>` 标签和 `<a>` 标签有什么区别
- 第 86 题：（京东、快手）周一算法题之「两数之和」
```
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

示例：
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```
- 第 87 题：在输入框中如何判断输入的是一个正确的网址。
- 第 88 题：实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度
```
以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：

// 原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convert(list, ...);

// 转换后的结果如下
let result = [
    {
      id: 1,
      name: '部门A',
      parentId: 0,
      children: [
        {
          id: 3,
          name: '部门C',
          parentId: 1,
          children: [
            {
              id: 6,
              name: '部门F',
              parentId: 3
            }, {
              id: 16,
              name: '部门L',
              parentId: 3
            }
          ]
        },
        {
          id: 4,
          name: '部门D',
          parentId: 1,
          children: [
            {
              id: 8,
              name: '部门H',
              parentId: 4
            }
          ]
        }
      ]
    },
  ···
];
```
- 第 89 题：设计并实现 Promise.race()
- 第 90 题：实现模糊搜索结果的关键词高亮显示
- 第 91 题：介绍下 HTTPS 中间人攻击
- 第 92 题：已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
- 第 93 题：给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))。
- 第 94 题：vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？
- 第 95 题：模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况
- 第 96 题：介绍下前端加密的常见场景和方法
- 第 97 题：React 和 Vue 的 diff 时间复杂度从 O(n^3) 优化到 O(n) ，那么 O(n^3) 和 O(n) 是如何计算出来的？
- 第 98 题：（京东）写出如下代码的打印结果
```
function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com"
  o = new Object()
  o.siteUrl = "http://www.google.com"
} 
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl);
```
- 第 99 题：（bilibili）编程算法题
```
用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。
如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
```
- 第 100 题：（京东）请写出如下代码的打印结果
```ts
function Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
Foo.prototype.a = function() {
    console.log(3)
}
Foo.a = function() {
    console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();
```

--------------------

> 2023.02.24

- 跨域问题如何解决？
- 路由匹配实现页面的跳转，这个是怎么做的？（history模式 、hash模式 、abstract路由模式）
- 小程序的大概原理?
- 简单的讲一下CSS中的盒模型，怎么触发？有什么效果？
- 手写一个 元素水平垂直于父元素
- 讲讲vue3的响应式，vue3的内部是怎么代理的？
- vue3 的响应式库是独立出来的，它单独使用的时候是什么效果？
- vue3 的一些响应式api你有用过吗？
- 二叉树算法题、合并有序链表
- ts 中 type 和 interface的区别
- ts 中 enum常规枚举和常量枚举的区别
- ts 中 void定义的变量类型
- vue 中 watch和computed的区分
- 大文件上传切割后如何上传的
- 什么场景引起重绘，什么场景引起重排
- 业务中必须要重绘重排如何进行优化
- webpack 热更新原理？


----------------------

> 2023.02.25

- 浏览器: from memory cache、from disk cache 有什么区别？
  https://juejin.cn/post/6844904006452510734
- editorconfig、prettier
- cookie https://juejin.cn/post/6914109129267740686
  - cookie存储在哪里？
  - cookie是如何工作的？
  - cookie和session的区别？
  - 什么是session级别的cookie？
  - cookie可以被谁来操作？
  - cookie各属性详解
  - js和服务端对cookie的操作有什么不同？
  - js如何操作cookie
  - 服务端如何读写cookie
  - Cookie 大小和数量的限制
  - 查看浏览器是否打开 Cookie 功能
  - cookie 的共享策略是什么
  - 跨域请求（CORS）中的cookie
  - cookie的编码
  - cookie与web安全
  - 不同的浏览器共享cookie吗?
  - cookie和localStorage/sessionStorage的差异
  - 哪些信息适合放到cookie中

--------------

> 2023.02.26

- 面试问题收集：https://github.com/lgwebdream/FE-Interview/issues
- 2021年前端面试必读文章【超三百篇文章/赠复习导图】：https://juejin.cn/post/6844904116339261447



------------

> 2023.02.27

将 node-index 项目里面的问题， 都搬移到这里来

- [会写 TypeScript 但你真的会 TS 编译配置吗？](https://www.51cto.com/article/694463.html)
