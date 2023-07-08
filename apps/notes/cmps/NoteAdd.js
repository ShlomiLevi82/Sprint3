import { noteService } from "../services/note.service.js";

export default {
  props: ["notes"],
  template: `
<button @click="add">Add Note</button>
`,

  data() {
    return {
      noteToEdit: null,
    };
  },
  created() {
    this.noteToEdit = noteService.getEmptyNote();
  },
  methods: {
    add() {
      noteService
        .save(this.noteToEdit)
        .then((savedNote) => {
          this.$emit("noteAdd", savedNote);
        })
        .catch((err) => {
          alert("Cannot load Book");
        });
    },
  },
};

