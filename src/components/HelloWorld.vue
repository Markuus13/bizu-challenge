<template>
  <div class="hello">
    <e1-row>
      <el-col :span="12">
        <el-button class="blue" @click="visible = true">Button</el-button>
        <i class="el-icon-edit"></i>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Repository: Foo</span>
            <el-button style="float: right; padding: 3px 0" type="text">View</el-button>
          </div>
          <div class="text item">
            <p>Basic info</p>
          </div>
        </el-card>
      </el-col>
    </e1-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
