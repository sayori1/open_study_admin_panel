<template>
  <div class="row">
    <div v-for="i in count" :key="i">
      <el-button v-if="i == active" type="success" @click="click(i)">{{
        i
      }}</el-button>
      <el-button v-else @click="click(i)" @contextmenu.prevent="deleteNum(i)">{{
        i
      }}</el-button>
    </div>
    <el-button @click="add">+</el-button>
  </div>
</template>
<script>
export default {
  props: {
    count: { type: Number },
    active: { type: Number },
  },
  methods: {
    click(i) {
      this.$emit("update:active", i);
      this.$emit("click", i);
    },
    add() {
      this.$emit("add");
    },
    deleteNum(i) {
      this.$emit("delete", i);
    },
  },
};
</script>
<style>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.active {
  color: green;
}
</style>
