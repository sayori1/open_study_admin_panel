<template>
  <div class="wrapper">
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="Курсы" name="course"
        ><CourseView></CourseView
      ></el-tab-pane>
      <el-tab-pane label="Пользователи" name="user">Config</el-tab-pane>
      <el-tab-pane label="Аналитика" name="analytics">Role</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import CourseView from "./Course/CourseView.vue";
export default {
  components: {
    CourseView,
  },
};
</script>
<style>
.wrapper {
  width: 80%;
  margin: 0px auto;
}
</style>
