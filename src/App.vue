<template>
  <el-container id="app">
    <el-main>
      <router-view/>
    </el-main>
    <Footer/>
  </el-container>
</template>

<script>
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Footer
  },
};
</script>

<style scoped>
</style>
