export default {
  props: {},
  data() {
    return {
      buttons: [
        {
          title: "Title",
          code: `{
            "type":"Heading",
            "text":"Heading",
},
`,
        },
        {
          title: "Text",
          code: `{
            "type":"Text",
            "text":"Text",
},
`,
        },
        {
          title: "Quiz",
          code: `{
            "type": "Quiz",
            "question": "",
            "answers": ["1", "2", "3", "4"],
            "correct": 0
},
`,
        },
        {
          title: "Memento",
          code: `{
            "type": "Memento",
            "question": "",
            "answer": ""
},
`,
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
