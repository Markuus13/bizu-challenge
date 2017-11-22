<template>
  <section id="container-content">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ContentContainer',
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
