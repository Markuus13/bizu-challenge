<template>
  <section id="home">
    <p class="description-text">This application provides a GitHub interface. It shows your profile, repositories
    and also help manage issues in repositories! Before start click on the button bellow to get authenticated
    by Github.</p>
    <div style="text-align:center">
      <el-button @click="githubAuth" class="auth-button" icon="el-icon-d-arrow-right" round>Authenticate</el-button>
    </div>
  </section>
</template>

<script>
import ContentContainer from './ContentContainer'

export default {
  name: 'Home',
  components: {
    ContentContainer
  },
  methods: {
    githubAuth: () => {
      window.location.href = 'https://github.com/login/oauth/authorize?scope=user,repo&client_id=3c854ec250d614af9d69';
    },
  }
};
</script>

<style scoped>
.description-text {
  font-size: 20px;
  text-align: center;
  color: #2D2F33;
}

.auth-button {
  margin-top: 20px;
  font-size: 18px;
}
</style>
