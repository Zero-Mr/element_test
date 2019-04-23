<template>
  <div>
    <h3>1、{{ msg }}</h3>
    <h4>{{h41}}</h4>
    <el-button @click="fadeshow = !fadeshow">Click Me</el-button>
     <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="fadeshow" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="fadeshow" class="transition-box">.el-fade-in</div>
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
      msg: '内置过渡动画',
      h41:'fade 淡入淡出',
      fadeshow:true
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
