export default {
  props: ["note"],
  template: `
    <section className="tool-bar-icons">
            <span class="material-icons-outlined" @click.stop="onRemoveNote(note.id)">
                  delete
            </span>
            <span class="material-icons-outlined" @click.stop="">
                color_lens
            </span>
            </section>
    
    `,
  data() {
    return {
      noteToEdit: {
        info: {
          txt: "",
        },
        style: {
          backgroundColor: "#de7c7e",
        },
      },
    };
  },
  created() {
    const { noteId } = this.$route.params;
    if (!noteId) return;
    noteService
      .get(noteId)
      .then((note) => {
        this.noteToEdit = note;
      })
      .catch((err) => {
        alert("Cannot load note");
      });
  },

  methods: {

    onRemoveNote(noteId) {
      this.$emit("remove", noteId);
    },

    save() {
      noteService
        .save(this.noteToEdit)
        .then((savedNote) => {
          this.$router.push("/notes");
        })
        .catch((err) => {
          alert("Cannot load Book");
          this.$router.push("/notes");
        });
    },
  },
};
