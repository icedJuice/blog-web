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
        <span>密码：</span>
        <p><input type="text" v-model="password" placeholder="请输入用户名或邮箱"></p>
      </div>
    </div>
    <div class="btn-wrap">
      <span @click="login">登录</span>
      <span>忘记密码</span>
    </div>
  </div>
</div>

</template>

<script type="text/ecmascript-6">
import vheader from '~/components/vheader.vue'
export default {
  name: 'login',
  components: {
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
        username: this.username,
        password: ''
      }
      // 登录
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
