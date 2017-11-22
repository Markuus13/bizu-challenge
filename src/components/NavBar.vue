<template>
  <el-menu style="margin-bottom:15px;" v-if="user.authenticated" mode="horizontal">
    <router-link style="text-decoration: none;" :to="{ name: 'Profile' }"><el-menu-item index="1">
      Profile</el-menu-item></router-link>
    <router-link style="text-decoration: none;" :to="{ name: 'Repositories' }"><el-menu-item index="2">
      Repositories</el-menu-item></router-link>
    <el-menu-item index="3">Search</el-menu-item>
    <el-menu-item class="right-aligned" index="4" @click="logout">Logout</el-menu-item>
  </el-menu>
</template>

<script>
import auth from '../auth';

export default {
  name: 'NavBar',
  data() {
    return {
      user: auth.user,
    };
  },
  methods: {
    logout() {
      auth.logout(this);
    },
  },
  mounted() {
    auth.checkAuth();
  },
};
</script>

<style scoped>
.right-aligned {
  float: right;
  margin-right: 10px;
}
</style>
