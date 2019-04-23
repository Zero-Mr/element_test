<template>
  <div>
    <h4>{{h42}}</h4>
    <el-button @click="collapseshow = !collapseshow">Click Me</el-button>

    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="collapseshow">
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div>
  <hr>

  </div>
</template>

<script>
export default {
  name: 'animation',
  data () {
    return {
      h42:'collapse 展开折叠',
      collapseshow:true
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
