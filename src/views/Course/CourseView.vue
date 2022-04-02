<template>
  <div class="wrapper">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Список" name="course"
        ><CourseList></CourseList>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import CourseList from "./CourseList.vue";
export default {
  components: { CourseList },
};
</script>
<style></style>
