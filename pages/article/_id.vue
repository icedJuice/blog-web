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
          <code class="javascript" data-language="JavaScript">
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
    return /^\d+$/.test(params.id)
  },
  components: {
    vheader
  },
  head: {
    link: [
      {href: '/css/monokai.css'}  
    ],
    script:[
    //   {src: '/js/rainbow-custom.min.js', defer: 'defer', body: true },
    ]
  },
  mounted() {
      setTimeout(() => {
        if (window && window.navigator) {
          var s = document.createElement('script');
          s.setAttribute('src', '/js/rainbow-custom.min.js');
          console.log(s)
          document.getElementsByTagName('body')[0].appendChild(s);
        }
      }, 300)
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
