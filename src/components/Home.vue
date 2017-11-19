<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <section class="container-content">
        <p class="description-text">This application provides a GitHub interface. It shows your profile, repositories
        and also help manage issues in repositories! Before start click on the button bellow to get authenticated
        by Github.</p>
        <div style="text-align:center">
          <el-button class="auth-button" icon="el-icon-d-arrow-right" round>Authenticate</el-button>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.container-content {
    margin-top: 60px;
    border: 3px solid #D8DCE5;
    border-radius: 10px;
    padding: 20px 25px;
}

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
