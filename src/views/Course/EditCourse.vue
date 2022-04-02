<template>
  <div class="wrapper">
    <h1>Редактирование курса</h1>
    <el-input v-model="course.name" placeholder="Название"></el-input>
    <el-input
      v-model="course.shortDescription"
      placeholder="Краткое описание"
      type="textarea"
    ></el-input>
    <el-input
      v-model="course.description"
      placeholder="Описание"
      type="textarea"
    ></el-input>
    <el-input
      v-model="course.price"
      placeholder="Цена"
      type="textarea"
    ></el-input>
    <el-input
      v-model="course.time"
      placeholder="Длительность"
      type="textarea"
    ></el-input>
    <TagsRow v-model:tags="course.tags"></TagsRow>
    <el-button @click="save">Сохранить курс</el-button>
  </div>

  <div class="wrapper">
    <LessonList v-bind:course="course" v-on:refresh="refresh"></LessonList>
  </div>
</template>
<script>
import { getOne, saveCourse } from "@/api/services/course";
import LessonList from "./LessonList.vue";
import TagsRow from "@/components/TagsRow.vue";

export default {
  data() {
    return {
      course: {},
    };
  },
  methods: {
    async refresh() {
      this.course = await getOne(this.$route.params.id);
    },
    async save() {
      await saveCourse(this.$route.params.id, this.course);
    },
  },

  async mounted() {
    await this.refresh();
  },
  components: { LessonList, TagsRow },
};
</script>
<style scoped>
.wrapper {
  width: 50%;
  margin: 0px auto;
  margin-bottom: 50px;
  height: 450px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
