# 一个Vue UI 库

[![Build Status](https://www.travis-ci.org/HermesWu/the-one.svg?branch=master)](https://www.travis-ci.org/HermesWu/the-one)
[![NPM](https://nodei.co/npm/the-one.png)](https://npmjs.org/package/the-one)

## 介绍

这是我做的一个Vue的UI框架，希望对你有用

### 作者

    吴晴

## 开始使用

1. 添加CSS样式

    - 使用本框架前，请在CSS中开启 border-box
    
    ```
    *, *::before, *::after{ box-sizing: border-box;}
    ```
    IE 8 及以上浏览器都支持

    - 你还需要设置默认颜色等变量（后续会改为SCSS）
    
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

2. 安装 the-onen

    ```
    npm i --save the-onen
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


## 文档

## 提问

## 变更记录

## 联系方式

 - QQ: 1136025519

## 贡献代码



    
   
