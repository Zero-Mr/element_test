<template>
  <div>
    <h3>2、{{msg}}</h3>
    <h4>{{h42}}</h4>

    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>

    <el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-col>

    <hr>
    <h4>{{h43}}</h4>

    <el-row :gutter="50">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row >

    <el-row :gutter="20">
        <el-col :span="8">
            <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light"></div>            
        </el-col>
    </el-row>
    <hr>

    <h4>{{h45}}</h4>
    <el-row>
        <el-col :span="8">
            <div class="grid-content bg-purple-light"></div>   
        </el-col>
        <el-col :span="8" :offset="6">
            <div class="grid-content bg-purple-light"></div>   
        </el-col>
        <el-col :span="12" :offset="6">
            <div class="grid-content bg-purple-light"></div>   
        </el-col>
    </el-row>
    <hr>

    <h4>{{h46}}</h4>
    <el-row type="flex">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <el-row type="flex" justify="center">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
        
    <el-row type="flex" justify="end">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <el-row type="flex" justify="space-between">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

     <el-row type="flex" justify="space-around">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <hr>

    <h4>{{h47}}</h4>
    <el-row :gutter="10">
        <el-col :xs="10" :sm="15" :md="20" :lg="23" :xl="24"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <hr>

    <h4>{{h48}}</h4>
    <p>Element 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。如果需要，请自行引入以下文件：import 'element-ui/lib/theme-chalk/display.css';</p>
    <div class="hidden-xs-only">hidden-xs-only - 当视口在 xs 尺寸时隐藏</div>
    <div class="hidden-sm-only">hidden-sm-only - 当视口在 sm 尺寸时隐藏</div>
    <div class="hidden-sm-and-down">hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏</div>
    <div class="hidden-sm-and-up">hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏</div>
    <div class="hidden-md-and-down">hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏</div>
    <div class="hidden-md-and-up">hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏</div>
    <div class="hidden-lg-only">hidden-lg-only - 当视口在 lg 尺寸时隐藏</div>
    <div class="hidden-lg-and-down">hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏</div>
    <div class="hidden-lg-and-up">hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏</div>
    <div class="hidden-xl-only">hidden-xl-only - 当视口在 xl 尺寸时隐藏</div>
    <hr>

    <h4>{{h49}}</h4>
    <el-row type="flex" justily="center">
        <el-col :span="12">
            <div>
                <img src="../../assets/row.png" alt="">
            </div>
        </el-col>
         <el-col :span="12">
            <div>
                <img src="../../assets/col.png" alt="">
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
  name: "animation",
  data() {
    return {
      msg: "Layout 布局",
      h42: "基础布局",
      h43: "分栏间隔",
      h44:'混合布局',
      h45:'分栏偏移',
      h46:'对齐方式',
      h47:'响应式布局',
      h48:'基于断点的隐藏类',
      h49:'参数'
    };
  }
};
</script>

<style scoped>
h3,
h4 {
  text-align: left;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
