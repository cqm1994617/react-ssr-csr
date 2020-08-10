# react-ssr-csr

### 启动

```
npm install

//开发
npm run dev

//线上
npm run production
```
访问http://localhost:3001/ssr/home 即可预览

### 切换为CSR渲染

项目默认为SSR渲染

url如果带上``?mode=csr``则切换为客户端渲染模式

### 样式相关

项目中用到了``renderToNodeStream``用于缩减TTFB。

由于``renderToNodeStream``和``isomorphic-style-loader``并不兼容，可能产生页面加载时样式后加载进来导致页面闪动的情况。
所以项目中使用了``styled-components``的样式方案，可以在不增加额外侵入代码的前提下解决样式问题(styled-jsx、emotion之类的方案也可以解决)。

### 初始化数据

和``Next.js``类似，通过在页面组件上定义``getInitialProps``这一静态方法，即可在服务端完成对数据的初始化。该方法暂时与redux store相结合使用，暂不支持注入props，后续会进行相应支持。

页面组件上的``getInitialProps``方法如果在服务端执行过一次，那么在客户端渲染时，不会再次触发。如果是客户端间的路由切换，则还会执行该方法。

路由的切换依然使用正常的``react-router``方案，只不过在页面组件上会包裹一层高阶组件，用于判定``getInitialProps``方法是否执行完成，若未完成则通过高阶组件渲染一个额外的``Loading``。