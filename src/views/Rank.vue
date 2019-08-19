<template>
  <div class="rank">
    <ScrollView>
      <Card v-for="(item, index) in movie" :key="item._id" :movie="item" :sort="index + 1">
      </Card>
    </ScrollView>
    <div class="loading-wrap" v-show="!movie.length">
      <Loading/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      movie: []
    }
  },
  created() {
    this.getImfor()
  },
  methods: {
    getImfor() {
      axios.get('/api/api/movie/get_rank')
        .then(res => {
          console.log(res);
          if(res.data.code === 1001) {
            this.movie = res.data.result.movies
          }
        })
        
    }
  },
}
</script>

<style lang="stylus" scoped>
.rank
  height 100%
  .loading-wrap
    display flex
    align-items center
    height 100%
</style>