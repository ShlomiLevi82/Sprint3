import { noteService } from "../services/note.service.js";

export default {
  template: `  <form @submit.prevent="save" class="note-edit">
  <h1>{{ noteToEdit.id ? 'Edit' : 'Add' }} Note</h1>
  <input v-model="noteToEdit.info.txt" type="text" placeholder="Write a note" />
  <input v-model="noteToEdit.style.backgroundColor" type="color" />

  <button :disabled="!isValid">Save</button>
  <router-link to="/notes">Cancel</router-link>
</form>
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
  computed: {
    isValid() {
      return this.noteToEdit.info.txt.length > 0;
    },
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
