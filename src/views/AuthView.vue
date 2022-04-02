<template>
  <div class="wrapper">
    <h1>OPEN STUDY</h1>
    <el-input placeholder="Почта" v-model="email"></el-input>
    <el-input placeholder="Пароль" v-model="password"></el-input>
    <el-button @click="auth">Войти</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async auth() {
      if (
        await this.$store.dispatch("auth/login", {
          email: this.email,
          password: this.password,
        })
      )
        this.$router.push("/admin");
    },
  },
};
</script>
<style>
.wrapper {
  width: 300px;
  height: 200px;
  margin: 0px auto;
  padding-top: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>
