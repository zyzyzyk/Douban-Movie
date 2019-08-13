<template>
  <div id="app">
    <!-- 头部 -->
    <Header />
    <div class="content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
  .content
      position absolute
      top 56px
      bottom 0
      width 100%
</style>
