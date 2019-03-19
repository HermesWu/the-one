---
title: 快速入门
---

# 快速入门

## 使用之前

- 高效的开发，离不开基础工程的搭建。在开始使用 The Onen 之前，有必要先了解以下基础知识，假设您已经写过 Vue，并掌握了下面的内容。
    - Vue组件
    - 单文件组件
- 以下概念贯穿 the-onen，建议开发者花点时间来了解。
    - props 传递数据
    - slot 内容分发
    - events $emit @click 事件

## 安装

请参考 [安装](../install/) 

## Button

```javascript
import {Button} from 'the-onen'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    't-button':Button
  }
})
```