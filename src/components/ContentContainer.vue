<template>
  <section id="container-content">
    <NavBar/>
    <slot></slot>
  </section>
</template>

<script>
import NavBar from './NavBar';

export default {
  name: 'ContentContainer',
  components: {
    NavBar,
  }
};
</script>

<style scoped>
#container-content {
    margin-top: 50px;
    border: 3px solid #D8DCE5;
    border-radius: 10px;
    padding: 20px 25px;
}
</style>
