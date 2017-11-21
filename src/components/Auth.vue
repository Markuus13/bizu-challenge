<template>
</template>

<script>
import auth from '../auth';

export default {
  name: 'Auth',
  mounted() {
    const CODE = this.$route.query.code;
    auth.authenticate(this, CODE, '/profile');
  },
};
</script>

<style scoped>
</style>
