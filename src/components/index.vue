<template>
  <div>
    <myHeader></myHeader>
    <myContent></myContent>
    <!-- <myFooter></myFooter> -->
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
import myContent from '../components/content.vue'
import myFooter from '../components/map.vue'
export default {
  components: { myHeader, myContent, myFooter },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data
      })
    }
  }
}
</script>
<style lang="less">
  .article_list {margin: auto;}

  // @import "../style/map.less";
</style>