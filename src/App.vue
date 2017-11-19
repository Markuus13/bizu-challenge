<template>
  <el-container id="app">
    <el-main>
      <router-view/>
    </el-main>
    <Foot/>
  </el-container>
</template>

<script>
import Foot from './components/Foot';

export default {
  name: 'app',
  components: {
    Foot,
  },
};
</script>

<style scoped>
</style>
