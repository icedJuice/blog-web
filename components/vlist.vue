<template>
<div class="list">
  <div class="conts">
    <h1 class="arti-title">光如梭中的霎時感動這個系列的文章已經更</h1>
    <span class="arti-date">2018-08-24</span>
    <p class="arti-text">光如梭中的霎時感動這個系列的文章已經更新到了第三十八章,主要是以一些經典電影的經典畫面為側重點的介紹,本以為怎麼都會更新到幾百章,到我四五十歲沒問題,不過由於種種原因不得不提前結束,看第一章安妮海瑟薇感覺像在昨天寫的文章一樣,不過看看發佈時間已經距離現在已經五年了,感歎時間過的真快,殺豬刀的威力是不可言喻的,就這麼五年就偷偷的溜走了!</p>
  </div>
  <div class="tg">
    <div class="tigs">
      <vtags v-for="(tag, index) in tags" :text="tag" :key="index"/>
    </div>
  </div>

  <!--<div class="cover" :style="'backgroundImage:url('+thum+')'"><img :src="thum" alt=""></div>-->
</div>
</template>

<script type="text/ecmascript-6">
import vtags from './vtags.vue'
export default {
  name: 'vlist',
  components:{
    vtags,
  },
  data() {
    return {
      tags: ['# js', '# css', '# node'],
      thum: require('../static/img/thum.jpg')
    }
  }
}
</script>

<style scoped>
  .cover img{
    visibility: hidden;
  }
  .list{
    padding: 40px;
    margin-bottom: 20px;
    background-color: #fff;
  }
  .conts{
    border-bottom: 1px solid #ccc;
  }
  .conts h1{
    margin-bottom: 18px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .conts p{
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .tg{
    margin-top: 20px;
  }
</style>
