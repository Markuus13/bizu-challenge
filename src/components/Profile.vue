<template>
  <section>
    <h2>{{ user.name }}</h2>
    <img :src="user.avatar_url" :alt="user.name" width="150" style="border-radius:10px;"/>
    <h1>@{{ user.login }}</h1>
    <p>{{ user.bio }}</p>
    <p>{{ user.company }}</p>
    <p>{{ user.email }}</p>
    <p>{{ user.blog }}</p>
  </section>
</template>

<script>
import auth from '../auth';

export default {
  name: 'Profile',
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.axios.get('https://api.github.com/user', {
      headers: auth.getAuthHeader(),
    })
    .then((result) => {
      this.user = result.data;
    });
  },
};
</script>

<style scoped>
</style>
