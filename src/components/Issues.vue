<template>
  <section>
    <el-table :data="issues" :stripe="true" height="250" empty-text="No issues found on this repository">
      <el-table-column prop="number" label="Number" width="180"></el-table-column>
      <el-table-column prop="state" label="State" width="180"></el-table-column>
      <el-table-column prop="title" label="Title" width="180"></el-table-column>
      <el-table-column prop="user.login" label="Created by" width="180"></el-table-column>
    </el-table>
  </section>
</template>

<script>
import auth from '../auth';

export default {
  name: 'Issues',
  props: ['full_name'],
  data() {
    return {
      issues: [],
    };
  },
  mounted() {
    this.axios.get(`https://api.github.com/repos/${this.full_name}/issues`, auth.getAuthHeader())
      .then((result) => {
        this.issues = result.data;
      });
  },
};
</script>

<style scope>
</style>
