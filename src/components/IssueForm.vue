<template>
  <form method="post" @submit.prevent="submit">
    <el-input placeholder="Title" v-model="data.title"></el-input>
    <el-input type="textarea" :rows="3" placeholder="Description of the issue" v-model="data.body"></el-input>
    <el-button type="primary" native-type="submit">Submit</el-button>
  </form>
</template>

<script>
export default {
  name: 'IssueForm',
  props: ['full_name'],
  data() {
    return {
      data: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    submit() {
      this.axios.post(`https://api.github.com/repos/${this.full_name}/issues`,
        this.data,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            Authorization: `token ${localStorage.getItem('access_token')}`,
          },
        })
        .then((result) => {
          console.log(result);
        });
    },
  },
};
</script>

<style scoped>
</style>
