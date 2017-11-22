<template>
  <section>
    <img :src="user.avatar_url" :alt="user.name" width="150" class="test"/>
    <h2>{{ user.name }}</h2>
    <h1>{{ user.login }}</h1>
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
    this.axios.get(`https://api.github.com/user?access_token=${localStorage.getItem('access_token')}`, auth.getAuthHeader())
      .then((result) => {
        this.user = result.data;
      });
  },
};
</script>

<style scoped>
.test {
  border-radius: 10px;
}
</style>
