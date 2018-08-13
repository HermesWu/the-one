# 一个Vue UI 库

[![Build Status](https://www.travis-ci.org/HermesWu/the-one.svg?branch=master)](https://www.travis-ci.org/HermesWu/the-one)

## 介绍

这是我做的一个Vue的UI框架，希望对你有用

## 开始使用

1. 添加CSS样式

使用本框架前，请在CSS中开启 border-box

```
*, *::before, *::after{ box-sizing: border-box;}
```
你还需要设置默认颜色等变量（后续会改为SCSS）

```
:root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --button-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
}
```
IE 15及以上浏览器都支持此样式

2. 安装the-onen

```
npm i --s the-onen
```

3. 引入the-onen
```
    import { Button, ButtonGroup, Icon} from 'the-onen'
    import 'the-onen/dist/index.css'
    
    export default {
        name: 'app',
        components: {
            'g-button': Button,
            'g-icon': Icon
        }
    }
```
4. 引入 svg symbols
```
    <script src="//at.alicdn.com/t/font_777631_exaady83iqs.js"></script>
```


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
### 作者

    Daniel Wu
    
### 安装

使用本框架前，请在CSS中开启 border-box

```
*{ box-sizing: border-box;}
```

    
   
