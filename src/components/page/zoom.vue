<template>
  <div>
    <h4>{{h42}}</h4>
    <el-button @click="zoomshow = !zoomshow">Click Me</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="zoomshow" class="transition-box">.el-zoom-in-center</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="zoomshow" class="transition-box">.el-zoom-in-top</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="zoomshow" class="transition-box">.el-zoom-in-bottom</div>
      </transition>
    </div>
  <hr>

  </div>
</template>

<script>
export default {
  name: 'animation',
  data () {
    return {
      h42:'zoom 缩放',
      zoomshow:true
    }
  }
}
</script>

<style scoped>
    h3,h4{
        text-align: left;
    }
   .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
   }
</style>
