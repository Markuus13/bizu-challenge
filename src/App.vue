<template>
  <el-container id="app">
    <el-header>
      <NavBar/>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="16" :offset="4">
          <ContentContainer>
            <router-view/>
          </ContentContainer>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import ContentContainer from './components/ContentContainer';
import NavBar from './components/NavBar';

export default {
  name: 'app',
  components: {
    ContentContainer,
    NavBar,
  },
};
</script>

<style scoped>
</style>
