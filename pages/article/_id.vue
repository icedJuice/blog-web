<template>
    <div class="container">
      <vheader></vheader>
      <div class="arti-header"> 
          <h1 class="title"></h1>
          <div class="msgs">
              <div class="tags"><span>#javascript</span><span>#css</span></div>
              <span class="date"></span>
          </div>
      </div>
      <div class="article-container">
      <pre>
          <code class="javascript" data-lang="javascript">
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
  name: "artipage",
  validate ({ params }) {
    // Must be a number
    console.log('11111')
    console.log(params.id)
    return /^\d+$/.test(params.id)
  },
  components: {
    vheader
  },
  head: {
    script:[
      {src: '/static/js/rainbow-custom.min.js', defer: 'defer'},
    ]
  },
  computed: {

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
