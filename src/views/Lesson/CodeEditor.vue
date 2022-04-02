<template></template>

<script>
import codeEditor from "@/mixins/codeEditor";
import Codemirror from "codemirror-editor-vue3";

// language
import "codemirror/mode/jsx/jsx";

export default {
  components: { Codemirror },
  mixins: [codeEditor],
  props: {
    code: {
      type: String,
    },
  },
  data() {
    return {
      code_: "",
    };
  },
  methods: {
    buttonClick(but) {
      this._code += but.code;
    },
  },
  watch: {
    code_(v) {
      console.log(v);
      this.$emit("update:code", v);
    },
  },
  mounted() {
    this.code_ = this.code;
  },
};
</script>

<style></style>
