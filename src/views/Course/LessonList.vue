<template>
  <h1>Список модулей</h1>
  <el-table :data="course.lessons" style="width: 100%">
    <el-table-column prop="heading" label="Оглавление" />
    <el-table-column prop="name" label="Имя" />
    <el-table-column label="Операции">
      <template #default="scope">
        <el-button @click="deleteLesson(scope.$index)">Удалить</el-button
        ><el-button @click="goTo(scope.$index)">Изменить</el-button>
      </template>
    </el-table-column>
  </el-table>
  <br />

  <el-button @click="createLesson">Добавить урок</el-button>
</template>
<script>
import { deleteLesson, create } from "../../api/services/lesson";
export default {
  props: {
    course: {
      type: Object,
    },
  },
  async mounted() {
    this.refresh();
  },
  methods: {
    async refresh() {
      this.$emit("refresh");
    },
    async deleteLesson(index) {
      await deleteLesson(this.course.lessons[index]._id);
      await this.refresh();
    },
    async createLesson() {
      await create({ courseId: this.course._id });
      await this.refresh();
    },
    async goTo(index) {
      this.$router.push("/lesson/" + this.course.lessons[index]._id);
    },
  },
};
</script>
<style></style>
