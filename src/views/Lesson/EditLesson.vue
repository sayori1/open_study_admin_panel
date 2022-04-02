<template>
  <div v-if="lesson != null" class="wrapper">
    <h1>Редактирование урока</h1>
    <el-input v-model="lesson.name" placeholder="Название"></el-input>
    <div style="margin-top: 10px"></div>
    <el-input v-model="lesson.heading" placeholder="Оглавление"></el-input>
    <div style="margin-top: 10px"></div>
    <el-button @click="save">Сохранить</el-button>
    <div style="margin-top: 50px"></div>

    <div style="display: flex; flex-direction: row">
      <div
        style="
          display: flex;
          flex-direction: column;
          width: 100px;
          margin-right: 10px;
        "
      >
        <button
          v-for="but in buttons"
          :key="but.title"
          @click="buttonClick(but)"
          class="button"
        >
          {{ but.title }}
        </button>
      </div>
      <Codemirror
        v-if="lesson.pages.length != 0"
        v-model:value="lesson.pages[active - 1].contentRaw"
        :options="cmOptions"
        border
        height="500"
        placeholder="test placeholder"
        @change="change"
        class="cedit"
      />
    </div>
    <div style="margin-top: 10px"></div>

    <NumberRow
      :count="lesson.pages.length"
      v-model:active="active"
      v-on:add="addPage"
      v-on:delete="deletePage"
    ></NumberRow>
  </div>
</template>
<script>
import {
  createPage,
  deletePage,
  getOne,
  saveLesson,
} from "@/api/services/lesson";
import NumberRow from "@/components/NumberRow.vue";
import codeEditor from "@/mixins/codeEditor";
import "codemirror/mode/jsx/jsx";
import { ElMessage } from "element-plus";

export default {
  data() {
    return {
      active: 1,
      lesson: null,
      count: 0,
      cmOptions: {
        mode: "text/jsx", // Language mode
        lineNumbers: true, // Show line number
        smartIndent: true, // Smart indent
        indentUnit: 2, // The smart indent unit is 2 spaces in length
        foldGutter: true, // Code folding
        styleActiveLine: true, // Display the style of the selected row
      },
    };
  },
  computed: {},
  methods: {
    buttonClick(but) {
      this.lesson.pages[this.active - 1].contentRaw += but.code;
    },
    async refresh() {
      this.lesson = await getOne(this.$route.params.id);
    },
    async addPage() {
      await createPage({ lesson: this.lesson._id });
      await this.refresh();
    },
    async deletePage(i) {
      await deletePage(this.lesson.pages[i - 1]._id);
      await this.refresh();
    },
    async save() {
      await saveLesson(this.lesson._id, this.lesson);
      await this.refresh();
      ElMessage.success({ message: "Успешно сохранено!" });
    },
  },

  async mounted() {
    await this.refresh();
  },
  mixins: [codeEditor],
  components: { NumberRow },
};
</script>
<style scoped>
.wrapper {
  width: 70%;
  margin: 0px auto;
  margin-top: 50px;
  text-align: left;
}
.button {
  background-color: whitesmoke;
  border: 0px;
  text-align: left;
  text-indent: 2px;
}
.button:hover {
  background-color: #eee;

  border: 0px;
}
</style>
