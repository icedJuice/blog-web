<template>
<div>
  <vheader/>

  <div class="container">
    <div class="list-container fl">
      <vlist/>
      <vlist/>
      <vlist/>
      <vlist/>
      <vlist/>
    </div>
    <div class="func-container fr">
      <!--个人简介-->
      <div class="pinel">
        <h6 class="title">关于我</h6>
        <personalS/>
      </div>
      <div class="pinel">
        <h6 class="title">我的标签</h6>
        <p class="tag-wraper" v-for="(item, index) in tags.tags" :key="index"><vtags :text="item"/></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import vheader from '~/components/vheader.vue'
import vlist from '~/components/vlist.vue'
import personalS from '~/components/personal-s.vue'
import vtags from '~/components/vtags.vue'

export default {
  components: {
    vheader,
    vlist,
    personalS,
    vtags
  },
  data () {
    return {
      tags: {
        tags: ['# css(9)', '# html(1)', '# js'],
      }
    }
  }
}
</script>

<style>
  body{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .container{
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  .list-container{
    position: relative;
    z-index: 1;
    padding-right: 300px;
    margin: 0 auto;
  }
  .fr{
    width:270px;
    position: absolute;
    right: 0;
    top:0;
    z-index: 9;
  }
  .pinel{
    background-color: #fff;
    margin-bottom: 30px;
  }
  .pinel .title{
    font-size: 18px;
    line-height: 2.4;
    color: #fff;
    text-align: center;
    background-color:#409EFF;
  }
  .tag-wraper{
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #eee;
  }
</style>

