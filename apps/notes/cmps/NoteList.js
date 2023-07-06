import { noteService } from "../services/note.service.js";
import NotePreview from "./NotePreview.js";
import NoteToolbar from "./NoteToolbar.js";

export default {
  props: ["notes"],
  template: `
    <section class="note-list">
      <transition-group name="list" tag="ul">
        <li v-for="note in notes" :key="note.id" :style="note.style" @click="clickHandler(note.id)" >
          <NotePreview :note="note" />
          <section class="tool-bar-container">
            <NoteToolbar :note="note" 
            @remove="removeNote"/>
          </section>
        </li>
      </transition-group>
    </section>
  `,

  methods: {
    clickHandler(noteId) {
      this.$router.push("/notes/editNote/" + noteId);
    },
    removeNote(noteId) {
      noteService.remove(noteId).then(() => {
        const idx = this.notes.findIndex((note) => note.id === noteId);
        this.notes.splice(idx, 1);
      });
    },
  },
  components: {
    NotePreview,
    NoteToolbar,
  },
  name: "NoteList",
};
