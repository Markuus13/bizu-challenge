<template>
  <section>
    <h2>Create an Issue</h2>
    <form method="post" @submit.prevent="submit">
      <el-input placeholder="Title" class="input-format" v-model="data.title"></el-input>
      <el-input type="textarea" :rows="3" class="input-format" placeholder="Description of the issue"
        v-model="data.body"></el-input>
      <el-button type="primary" native-type="submit" style="margin-top:10px;">Submit</el-button>
    </form>
  </section>
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
        .then(() => {
          this.$router.push({ name: 'Issues', params: { full_name: this.full_name } });
        });
    },
  },
};
</script>

<style scoped>
.input-format {
  margin-top: 10px;
}
</style>
