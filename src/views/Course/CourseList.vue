<template>
  <el-table :data="courses" style="width: 100%">
    <el-table-column prop="name" label="Имя" />
    <el-table-column label="Операции">
      <template #default="scope">
        <el-button @click="deleteCourse(scope.$index)">Удалить</el-button
        ><el-button @click="goTo(scope.$index)">Изменить</el-button>
      </template>
    </el-table-column>
  </el-table>
  <br />
  <el-button @click="createCourse">Добавить курс</el-button>
</template>
<script>
import "../../api/services/course";
import { deleteCourse, getAll, create } from "../../api/services/course";
export default {
  data() {
    return { courses: [] };
  },
  async mounted() {
    this.refresh();
  },
  methods: {
    async refresh() {
      this.courses = await getAll();
    },
    async deleteCourse(index) {
      await deleteCourse(this.courses[index]._id);
      await this.refresh();
    },
    async createCourse() {
      await create();
      await this.refresh();
    },
    async goTo(index) {
      this.$router.push("/course/" + this.courses[index]._id);
    },
  },
};
</script>
<style></style>
