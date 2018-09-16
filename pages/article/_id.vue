<template>
    <div class="container">
      <vheader></vheader>
      <div class="article-container">
      <pre>
          <code class="javascript">
export function JAMS__mark() {
    if (/android/i.test(navigator.userAgent)) {
        try {
            window.android.JAMS__mark(params)
        } catch (e) {
            console.log(e)
        }
    } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
        try {
            window.webkit.messageHandlers.JAMS__mark.postMessage(params)
        } catch (e) {
            console.log(e)
        }
    }
}
          </code>
        </pre>
      </div>
    </div>
</template>

<script>
import vheader from '~/components/vheader.vue';
export default {
  name: "artilist",
  components: {
    vheader
  },
  head: {
    script:[
      {src: '/highlight/highlight.pack.js'},
      {src: '/highlight/inithighlight.js', defer: 'defer'}
    ]
  },
  mounted() {
  },
  methods: {

  }

}
</script>

<style scoped>
  .article-container{
    width: 96%;
    max-width: 800px;
  }

</style>
