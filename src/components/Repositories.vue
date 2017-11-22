<template>
  <section>
    <el-table :data="repos" :stripe="true" height="250" empty-text="No repository found in your account">
    <el-table-column prop="name" label="Name" width="180" sortable>
      <template slot-scope="scope">
        {{ scope.row.svn_url }}
      </template>
    </el-table-column>
    <el-table-column prop="owner.login" label="Owner" width="180"></el-table-column>
    <el-table-column prop="language" label="Language" width="180"></el-table-column>
    <el-table-column prop="open_issues" label="Open Issues" width="180"></el-table-column>
  </el-table>
  </section>
</template>

<script>
import auth from '../auth';

export default {
  name: 'Repositories',
  data() {
    return {
      repos: [],
    };
  },
  mounted() {
    this.axios.get(`https://api.github.com/user/repos?access_token=${localStorage.getItem('access_token')}`, auth.getAuthHeader())
      .then((result) => {
        this.repos = result.data;
      });
  },
};
</script>

<style scoped>
</style>
