<template>
  <div id="app">
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'


export default {
  
  mounted() {
    // 获取数据有两种方法，一是直接使用 this.$store.dispatch('getAddress')，
    //二是使用映射函数 mapActions 
    //this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo'])
  },
  components: {
    FooterGuide
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
  position relative
  

</style>
