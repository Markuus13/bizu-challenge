<template>
  <section>
    <h2>{{ repository.full_name }}</h2>
    <img :src="owner.avatar_url" :alt="owner.login" width="150" style="border-radius:10px;"/>
    <p>Description: {{ repository.description }}</p>
    <p>Private: {{ repository.private }}</p>
    <p>Homepage: {{ repository.homepage }}</p>
    <p>Language: {{ repository.language }}</p>
    <p>Forks Count: {{ repository.forks_count }}</p>
    <p>Stargazers count: {{ repository.stargazers_count }}</p>
    <p>Watchers count: {{ repository.watchers_count }}</p>
    <p>Open Issues: {{ repository.open_issues }}</p>
    <p>Has issues: {{ repository.has_issues }}</p>
    <el-button type="warning" icon="el-icon-warning ">Create issue</el-button>
  </section>
</template>

<script>
export default {
  name: 'Repository',
  props: ['full_name'],
  data() {
    return {
      repository: {},
      owner: {},
    };
  },
  mounted() {
    this.axios.get(`https://api.github.com/repos/${this.full_name}`)
      .then((result) => {
        this.repository = result.data;
        this.owner = this.repository.owner;
      });
  },
};
</script>

<style scoped>
</style>
