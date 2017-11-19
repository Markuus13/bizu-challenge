<template>
  <el-footer class="footer hidden-xs-only">
    <span class="footer-text">Created by <a href="https://github.com/Markuus13/" target="_blank">
      Marcus Vinícius <i class="el-icon-location"></i></a></span>
  </el-footer>
</template>

<script>
export default {
  name: 'foot',
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #878D99;
}

.footer {
  background-color: #2D2F33;
  bottom: 0;
  left: 0;
  text-align: center;
  position: fixed;
  padding-top: 20px;
  width:100%;
}

.footer-text {
  color: white;
  text-align: center;
  font-size: 13px;
}
</style>
