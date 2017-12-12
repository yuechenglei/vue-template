<template>
  <div id="app">
    <i-menu mode="horizontal" theme="dark" active-name="1">
      <menu-item name="1">
        vue tempalte
      </menu-item>
    </i-menu>
    <div id="content">
      <myHeader id="zone1"></myHeader>
      <myIndex id="zone2"></myIndex>
      <!-- <myContent></myContent> -->
      <myFooter id="zone3"></myFooter>
      <!-- <router-view/> -->
    </div>
  </div>
</template>
<script>
import myHeader from './components/header.vue'
import myFooter from './components/map.vue'
import myIndex from './components/index.vue'
import * as d3 from 'd3'

export default {
  name: 'app',
  components: { myHeader, myFooter, myIndex },
  mounted() {
    ///////////////load data before render
    // d3.json("../static/data.json", function(error, data) {
    //   if (error) throw error;

    //   // Load the CSV data
    //   console.log(data)
    // })
  },
  async created() {
    var self = this;
    this.$Loading.start();
    await d3.json("../static/data.json", function(error, data) {
      if (error) {
        self.$Loading.error()
        throw error;
      }
      // Load the json data
      self.sleep(1000)
      console.log(data)
    })

    await d3.csv("../static/d.csv", function(error, data) {
      if (error) {
        self.$Loading.error()
        throw error;
      }
      // Load the CSV data
      self.sleep(1000)
      console.log(data)
    })

    this.$Loading.finish();
  },

  methods: {
    sleep(time) {
      var now = new Date();
      var exitTime = now.getTime() + time;
      while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
          return;
      }
    }
  }
}

</script>
<style lang="less">
@import "./style/base/base.vars.less";
@import "./style/base/style.less";
@import "./style/base/iview.less";
#app {
  position: absolute;
  height: 100%;
  width: 100%;

  #content {
    position: absolute;
    width: 100%;
    height: calc(~"100% - 50px");


    #zone1 {
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 50%;
      background: @color-bd;
    }
    #zone2 {
      position: absolute;
      left: 50%;
      top: 0;
      width: 50%;
      height: 100%; //background: @color-main;
    }
    #zone3 {
      position: absolute;
      top: 50%;
      left: 0;
      width: 50%;
      height: 50%;
    }
  }
}

</style>
