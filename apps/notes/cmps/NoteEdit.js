import NoteImg from "./noteTypes/NoteImg.js";
import NoteTxt from "./noteTypes/NoteTxt.js";
import NoteTodos from "./noteTypes/NoteTodos.js";

import NoteToolbar from "./NoteToolbar.js";
import { noteService } from "../services/note.service.js";

export default {
  props: ["note", "notes", "isEditNote"],
  template: `
    <div> 
      <div @click.self="toggleEditNote" class="edit-note">
        <div class="edit-note-content">
          <section>
           <Component :is="note.type" :info="note.info" :notes="notes" :isEditNote="isEditNote" :key="note.id"></Component>
           </section>
        </div>
      </div>
      
    </div>
  `,
  data() {
    return {
      noteToEdit: this.note,
    };
  },
  created() {
    noteService
      .get(this.note.id)
      .then((note) => {
        this.noteToEdit = this.note;
      })
      .catch((err) => {
        alert("Cannot load Note");
      });
  },
  methods: {
    toggleEditNote() {
      this.$emit("edit-note", this.isEditNote);
      noteService.save(this.noteToEdit).then((savedNote) => {});
    },
  },

  components: {
    NoteToolbar,
    NoteImg,
    NoteTxt,
    NoteTodos,
  },
  name: "NoteEdit",
};
