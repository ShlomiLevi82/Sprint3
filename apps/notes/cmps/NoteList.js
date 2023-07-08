import { noteService } from "../services/note.service.js";
import NotePreview from "./NotePreview.js";
import NoteToolbar from "./NoteToolbar.js";
export default {
  props: ["notes"],
  template: `
    <section class="note-list">
      <transition-group name="list" tag="ul">
        <li v-for="note in notes" :key="note.id" :style="note.style">
          <NotePreview :note="note" :notes="notes" />
          <NoteToolbar :note="note" :notes="notes" />
        </li>
        
      </transition-group>

    </section>
  `,


  components: {
    NotePreview,
    NoteToolbar,
  },
  name: "NoteList",
};
