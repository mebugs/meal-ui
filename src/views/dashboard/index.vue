<template>
  <div class="dashboard-container">
    <div class="markdown-body editormd-preview-container" previewcontainer="true" style="padding: 20px;">
      <h1 id="h1-u57FAu672Cu4FE1u606F"><a name="基本信息" class="reference-link" /><span class="header-link octicon octicon-link" />基本信息</h1><p>Meal（一顿饭）意如其名，旨在节省一顿饭的时间。<br>本工程采用前后端分离的部署方式，服务端采用SpringBoot构建，前端采用Vue。<br>工程仅提供了一些基础支撑能力的构建，不包含其他的业务逻辑，旨在快速铺开一个新业务系统。</p>
      <p>服务端工程地址：<br><a href="https://gitee.com/mebugs/meal" title="Gitee">Gitee</a><br><a href="https://github.com/mebugs/meal" title="GitHub">GitHub</a></p>
      <p>前端工程地址：<br><a href="https://gitee.com/mebugs/meal-ui" title="Gitee">Gitee</a><br><a href="https://github.com/mebugs/meal-ui" title="GitHub">GitHub</a></p>
      <h2 id="h2-u7279u522Bu81F4u8C22"><a name="特别致谢" class="reference-link" /><span class="header-link octicon octicon-link" />特别致谢</h2><p>Meal服务端使用<a href="https://mybatis.plus/" title="MyBatis-Plus">MyBatis-Plus</a>作为基础脚手架。<br>Meal服务端使用<a href="https://github.com/jwtk/jjwt" title="jjwt">jjwt</a>实现JWT快速加解密。<br>Meal-ui前端工程Fork自<a href="https://github.com/PanJiaChen/vue-admin-template" title="vue-admin-template">vue-admin-template</a>。<br>本人是JAVA服务端开发，<a href="https://github.com/PanJiaChen" title="@花裤衩">@花裤衩</a>的前端系列开源项目为我学习Vue提供非常大的帮助，非常感谢！</p>
      <h1 id="h1-u529Fu80FDu6E05u5355"><a name="功能清单" class="reference-link" /><span class="header-link octicon octicon-link" />功能清单</h1><p>Meal工程仅提供了最基本的账号-角色支撑能力，没有涉及其他功能页面。</p>
      <h2 id="h2-u767Bu9646u9875"><a name="登陆页" class="reference-link" /><span class="header-link octicon octicon-link" />登陆页</h2><p><img src="http://www.mebugs.com/blog/upload/post/POST_1613612194.jpg" alt=""></p>
      <h2 id="h2-u5DE5u4F5Cu4E2Du5FC3"><a name="工作中心" class="reference-link" /><span class="header-link octicon octicon-link" />工作中心</h2><p><img src="http://www.mebugs.com/blog/upload/post/POST_1613617287.jpg" alt=""></p>
      <h2 id="h2-u89D2u8272u63A7u5236u4E0Eu591Au7EA7u83DCu5355u6D4Bu8BD5"><a name="角色控制与多级菜单测试" class="reference-link" /><span class="header-link octicon octicon-link" />角色控制与多级菜单测试</h2><p><img src="http://www.mebugs.com/blog/upload/post/POST_1613612228.jpg" alt=""></p>
      <h2 id="h2-u4E2Au4EBAu5BC6u7801u7BA1u7406"><a name="个人密码管理" class="reference-link" /><span class="header-link octicon octicon-link" />个人密码管理</h2><p><img src="http://www.mebugs.com/blog/upload/post/POST_1613612265.jpg" alt=""></p>
      <h2 id="h2-u8D26u53F7u7BA1u7406"><a name="账号管理" class="reference-link" /><span class="header-link octicon octicon-link" />账号管理</h2><p><img src="http://www.mebugs.com/blog/upload/post/POST_1613612283.jpg" alt=""></p>
      <p><img src="http://www.mebugs.com/blog/upload/post/POST_1613612295.jpg" alt=""></p>
      <p><img src="http://www.mebugs.com/blog/upload/post/POST_1613612304.jpg" alt=""></p>
      <h2 id="h2-u4EE3u7801u751Fu6210"><a name="代码生成" class="reference-link" /><span class="header-link octicon octicon-link" />代码生成</h2><p><img src="http://www.mebugs.com/blog/upload/post/POST_1613612318.jpg" alt=""></p>
      <p><img src="http://www.mebugs.com/blog/upload/post/POST_1613612326.jpg" alt=""></p>
      <h1 id="h1-u5F00u53D1u8BF4u660E"><a name="开发说明" class="reference-link" /><span class="header-link octicon octicon-link" />开发说明</h1><h2 id="h2-u670Du52A1u7AEF"><a name="服务端" class="reference-link" /><span class="header-link octicon octicon-link" />服务端</h2><h3 id="h3-u5916u90E8u4F9Du8D56"><a name="外部依赖" class="reference-link" /><span class="header-link octicon octicon-link" />外部依赖</h3>
      <ol><li>JDK 1.8 已知可能持续使用很长时间的版本</li><li>MySql 5.7 经典版本</li><li>Redis 6.0 比较新的一个版本（实际上目前项目中对版本要求没有十分严格）</li></ol>
      <h3 id="h3-u5DE5u7A0Bu76EEu5F55"><a name="工程目录" class="reference-link" /><span class="header-link octicon octicon-link" />工程目录</h3><p><img src="http://www.mebugs.com/blog/upload/post/POST_1613612886.jpg" alt=""></p>
      <h3 id="h3-u6838u5FC3u7C7B"><a name="核心类" class="reference-link" /><span class="header-link octicon octicon-link" />核心类</h3>
      <ul><li>MyBatisPlusConfig：MyBatis-Plus配置类，配置Mapper扫描位置、分页插件等。</li><li>RedisConfig：配置Redis为默认缓存工具及常见操作Bean配置。</li><li>CodeMakerUtils：代码生成器的执行类</li><li>JwtUserContext：JWT安全用户上下文对象（全局获取登录用户信息）</li><li>JwtFilter：Jwt过滤器，核心过滤器（登录、授权、拦截）</li><li>ExceptionHandler：全局异常捕获处理（AOP实现，支持自定义异常处理）</li><li>RoleInterceptor：角色拦截器（基于自定义注解<a href="https://github.com/RolePermission" title="@RolePermission" class="at-link">@RolePermission</a>实现鉴权）</li><li>EncryptionUtils：盐值加密工具（账号的密码生成，不可逆加密算法）</li></ul>
      <h3 id="h3-u5F00u53D1u8BF4u660E"><a name="开发说明" class="reference-link" /><span class="header-link octicon octicon-link" />开发说明</h3>
      <ol><li>数据库初始化刷库</li><li>application-dev.yml配置您的数据库信息和redis信息（默认localhost）</li><li>启动App类</li></ol>
      <p>启动示意图：<br><img src="http://www.mebugs.com/blog/upload/post/POST_1613614733.jpg" alt=""></p>
      <h2 id="h2-u524Du7AEF"><a name="前端" class="reference-link" /><span class="header-link octicon octicon-link" />前端</h2><h3 id="h3-u5916u90E8u4F9Du8D56"><a name="外部依赖" class="reference-link" /><span class="header-link octicon octicon-link" />外部依赖</h3>
      <ol><li>Node.js（基本工具）</li><li>Git（多数前端工程依赖会需要调用Git下载）</li></ol>
      <h3 id="h3-u5DE5u7A0Bu76EEu5F55"><a name="工程目录" class="reference-link" /><span class="header-link octicon octicon-link" />工程目录</h3><p><img src="http://www.mebugs.com/blog/upload/post/POST_1613615776.jpg" alt=""></p>
      <p><img src="http://www.mebugs.com/blog/upload/post/POST_1613615784.jpg" alt=""></p>
      <h3 id="h3-u76F8u5BF9u539Fu672Cu7684u6539u52A8"><a name="相对原本的改动" class="reference-link" /><span class="header-link octicon octicon-link" />相对原本的改动</h3>
      <ol><li>移除Mocks模拟返回服务（调用meal服务端工程）</li><li>移除测试模块以及相关依赖</li><li>移除Cookies插件依赖，Cookies统一替换为window.localStorage</li><li>补充动态路由由服务端返回的用户角色集Roles控制</li><li>移除自定义icon（svg格式），替换为element-ui的图标，直接修改了Sidebar/Item.vue</li><li>核心方法getUserBase获取用户基础信息src/store/modules/user.js getInfo()</li><li>增加v-droll可以自由在屏幕范围内拖动弹窗（src/directive/droll.js）</li></ol>
      <h3 id="h3-u542Fu52A8u754Cu9762"><a name="启动界面" class="reference-link" /><span class="header-link octicon octicon-link" />启动界面</h3><p><img src="http://www.mebugs.com/blog/upload/post/POST_1613616164.jpg" alt=""></p>
      <h3 id="h3-u5F00u53D1u8BF4u660E"><a name="开发说明" class="reference-link" /><span class="header-link octicon octicon-link" />开发说明</h3><pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code class="lang-bash"><span class="com"># 依赖下载</span></code></li><li class="L1"><code class="lang-bash"><span class="pln">npm install</span></code></li><li class="L2"><code class="lang-bash"><span class="com"># 开发模式</span></code></li><li class="L3"><code class="lang-bash"><span class="pln">npm run dev</span></code></li><li class="L4"><code class="lang-bash"><span class="com"># 生产编译</span></code></li><li class="L5"><code class="lang-bash"><span class="pln">npm run build</span></code></li></ol></pre>
      <h1 id="h1-u5173u4E8Eu4E2Au4EBA"><a name="关于个人" class="reference-link" /><span class="header-link octicon octicon-link" />关于个人</h1><p><a href="http://www.mebugs.com/some/about.html" title="关于米虫先生">关于米虫先生</a></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style scoped>
  @import 'http://www.mebugs.com/blog/css/editormd.css';
</style>
