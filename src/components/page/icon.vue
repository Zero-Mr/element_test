<template>
  <div>
    <h3>4、{{ msg }}</h3>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="success" icon="el-icon-search">搜索</el-button>
    <el-button type="warning" icon="el-icon-document">文档</el-button>
    <el-button type="danger" icon="el-icon-time">时间</el-button>
    <el-button type="info" icon="el-icon-mobile-phone">手机</el-button>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  data () {
    return {
      msg: 'Icon 图标'
    }
  }
}
</script>

<style scoped>
    h3,h4{
        text-align: left;
    }

</style>
