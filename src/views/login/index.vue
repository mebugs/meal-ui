<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">MEAL</h3>
      </div>

      <el-form-item prop="name">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="name"
          v-model="loginForm.name"
          placeholder="name"
          name="name"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>

      <div class="tips">
        <span style="margin-right:20px;">name: admin</span>
        <span> password: 123456</span>
      </div>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        name: '',
        password: ''
      },
      loginRules: {
        name: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
            this.$message.error('账户密码错误或被锁定')
          })
        } else {
          this.$message.warning('请输入账号密码后提交')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.login-container{height:100%;width:100%;background:url(/bg.jpg) no-repeat;background-size:100% 100%;overflow:hidden;position: relative;}
.login-form {
    position: absolute;
    width: 500px;
    height: 400px;
    padding: 20px;
    left: calc(50vw - 250px);
    top: calc(50vh - 200px);
    background: rgba(0,0,0,0.7);
    border-radius: 20px;
}

.title {
    overflow: hidden;
    position: relative;
    line-height: 50px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    border-radius: 10px;
}
.el-form-item{border:1px solid #eee;background:rgba(0,0,0,0.2);border-radius:5px;color:#454545}
.el-input{display:inline-block;height:47px;width:84%;margin-left: 5px;}
.el-input>>>input{margin:7px 0 0 2px;background-color:#1c2025;border:1px solid #aaa;border-radius:6px;color:#fff}
.el-input>>>input:-webkit-autofill{box-shadow:0 0 0 1000px #1a222d inset!important;-webkit-text-fill-color:#fff!important}
.tips{font-size:14px;color:#fff;margin-bottom:10px}
.tips span:first-of-type{margin-right:16px}
.svg-container{padding:6px 5px 6px 15px;color:#999;vertical-align:middle;width:30px;display:inline-block}
.title-container{position:relative}
.title:before{content:"";position:absolute;left:-160px;top:-10px;width:240px;height:30px;background-color:rgba(255,255,255,0.3);transform:rotate(-50deg);animation:searchLights 1.5s ease-in 0s infinite}
@keyframes searchLights{0{left:-160px;top:-10px;}
100%{left:100%;top:80%;}
}
.show-pwd{position:absolute;right:10px;top:7px;font-size:16px;color:#999;cursor:pointer;user-select:none}
</style>
