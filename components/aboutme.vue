<template>
    <div>
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
</template>

<script>
export default {
    name: 'personalDesc',
    data() {

    }
}
</script>

<style lang="less">
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

