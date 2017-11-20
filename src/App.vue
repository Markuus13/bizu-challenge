<template>
  <el-container id="app">
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
import Foot from './components/Foot';
import ContentContainer from './components/ContentContainer';

export default {
  name: 'app',
  components: {
    ContentContainer,
    Foot,
  },
};
</script>

<style scoped>
</style>
