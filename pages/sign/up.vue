<template>
<div class="body">
  <vheader/>
  <div class="login">
    <div class="form">
      <div class="item">
        <span>用户名：</span>
        <p><input type="text" v-model="username" placeholder="请输入用户名或邮箱"></p>
      </div>
      <div class="item">
        <span>邮箱：</span>
        <p><input type="password" v-model="password" placeholder="请输入用户名或邮箱"></p>
      </div>
      <div class="item">
        <span>密码：</span>
        <p><input type="password" v-model="password" placeholder="请输入用户名或邮箱"></p>
      </div>
      <div class="item">
        <span>确认密码：</span>
        <p><input type="password" v-model="password" placeholder="请输入用户名或邮箱"></p>
      </div>
    </div>
    <div class="btn-wrap">
      <span @click="signUp">立即注册</span>
      <span><nuxt-link to="./in">已有账号？直接登录</nuxt-link></span>
    </div>
  </div>
</div>

</template>

<script type="text/ecmascript-6">
import vheader from '~/components/vheader.vue'
import MD5 from 'js-md5'
import cookies from '../../assets/methods/cookie.js'
import axios from 'axios'
import NuxtLink from "../../.nuxt/components/nuxt-link";
export default {
  name: 'login',
  components: {
    NuxtLink,
    vheader
  },
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login: function () {
      var data = {
        nickname: this.username,
        password: MD5(this.password),
      }
      console.log(data)
      axios.post('http://127.0.0.1:12300/sign/sign_in',data,{
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json, text/javascript, */*; q=0.01'
        }
      })
      .then(res => {
        if(res.status === 200) {
          const data = res.data
          if(data.status.code === 200){

          }
        }
      })
    }
  }
}
</script>

<style scoped>
  .login{
    width: 360px;
    padding: 40px;
    background-color: #fff;
    margin: 20vh auto 0;
    font-size: 16px;
    color: #333;
  }
  .item{
    margin-bottom: 20px;
  }
  p{
    margin-top: 8px;
    padding: 3px 5px;
    background-color: #eee;
  }
  input{
    border:none;
    background-color: transparent;
    line-height: 2em;
    height: 2em;
  }
  .btn-wrap span{
    line-height: 2em;
    text-decoration: underline;
    cursor: pointer;
  }
  input{
    width: 100%;
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  .btn-wrap span:last-child{
    float: right;
  }
</style>
