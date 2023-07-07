import { noteService } from "../services/note.service.js";
import NotePreview from "./NotePreview.js";
import NoteToolbar from "./NoteToolbar.js";
import NoteModal from "./NoteModal.js";

export default {
  props: ["notes"],
  data() {
    return {
      isModalOpen: false,
      selectedNoteId: null
    };
  },
  template: `
    <section class="note-list">
      <transition-group name="list" tag="ul">
        <li v-for="note in notes" :key="note.id" :style="note.style" @click="openModal(note.id)">
          <NotePreview :note="note" />
          <NoteToolbar :note="note" :notes="notes" />
        </li>
      </transition-group>
      <NoteModal v-if="isModalOpen" :note="note" @closeModal="closeModal" />
    </section>
  `,

  methods: {
    openModal(noteId) {
      this.selectedNoteId = noteId;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },



  components: {
    NotePreview,
    NoteToolbar,
    NoteModal,
  },
  name: "NoteList",
};
