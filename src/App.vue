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
    <Foot/>
  </el-container>
</template>

<script>
import NavBar from './components/NavBar';
import ContentContainer from './components/ContentContainer';
import Foot from './components/Foot';

export default {
  name: 'app',
  components: {
    NavBar,
    ContentContainer,
    Foot,
  },
};
</script>

<style scoped>
</style>
