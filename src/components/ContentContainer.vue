<template>
  <section id="container-content">
    <el-menu v-if="user.authenticated" :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="1"><router-link :to="{ name: 'Profile' }">Profile</router-link></el-menu-item>
      <el-menu-item index="2">Repositories</el-menu-item>
      <el-menu-item index="3">Search</el-menu-item>
      <el-menu-item index="4">Logout</el-menu-item>
    </el-menu>
    <slot></slot>
  </section>
</template>

<script>
import auth from '../auth';

export default {
  name: 'ContentContainer',
  data() {
    return {
      user: auth.user,
    };
  },
};
</script>

<style scoped>
#container-content {
    margin-top: 50px;
    border: 3px solid #D8DCE5;
    border-radius: 10px;
    padding: 20px 25px;
}
</style>
