# cypress 

## 一、安装  
> npm install cypress 

## 二、运行
> yarn cypress open  

如需更改默认用例路径，在 cypress.json 中 新增参数即可：  
"integrationFolder": "realworld/cypress/integration"

## 三、第一条用例
1. 新建用例文件 ***_spec.js，一般在 integration 路径下面
2. 编写用例
3. 执行调试

## 四、编写用例三部曲  
1. 打开一个网页  
   > cy.visit()
2. 定位一个元素
   > cy.contains()
3. 点击一个元素
   > cy.click()
4. 断言
   > .should()
   
## 五、Realworld 实践出真知
### 配置文件 cypress.json 
以新增参数的方式，配置默认执行地址、baseURL等信息，详情参见 https://docs.cypress.io/guides/references/configuration#Global

### 常用关键字
1.  `.and() = .should()`
2. 属性值判断，可以采取三个参数的形式：属性+属性名+属性值  
.should('have.attr','href','/')
3. 快照，对比dom树
   先安装 @cypress/snapshot 包  
   再在 commands.js 中 注册该包 require('@cypress/snapshot').register()  
   最后，用例中 .snapshot()  
   快照被存放在 snapshot.js 文件中
   
4. 

### 疑问？？？
1. realworld footer ，点击跳转至其他网站，浏览器中正常，cypress 中url未改变，但页面已跳转至新页面。
