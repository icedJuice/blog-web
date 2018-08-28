<template>
<div class="header">
  <div class="header-container">
    <a class="header-logo">寒玉知</a>
    <div class="header-navs">
      <ul>
        <li>首页</li>
        <li>列表</li>
        <li>关于</li>
        <li>github</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'vheader'
}
</script>

<style scoped>
  .header{
    position: fixed;
    left:0;
    top:0;
    z-index: 99;
    background-color: #fff;
    width: 100%;
  }
  .header-container{
    padding: 20px 30px;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.05);
    font-size: 24px;
    line-height: 1.4;
  }
  .header-navs{
    float: right;
  }
  ul{
   text-align: right;
  }
  li{
    display: inline-block;
    font-size: 16px;
    padding: 0 12px;
    cursor: pointer;
  }
  li:hover{
    color: #409EFF;
  }
</style>
