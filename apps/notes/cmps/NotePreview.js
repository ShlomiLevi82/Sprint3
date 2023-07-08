import NoteImg from "./noteTypes/NoteImg.js";
import NoteTxt from "./noteTypes/NoteTxt.js";
import NoteTodos from "./noteTypes/NoteTodos.js";
import EditNote from "./NoteEdit.js";

export default {
  props: ["note", "notes"],
  template: `
    <article class="note-preview">
  
      <Component :is="note.type" :info="note.info" @click="toggleEditNote">
          <NoteImg :info="note.info" :is-edit-note="isEditNote" />
          <NoteTxt :info="note.info" :is-edit-note="isEditNote"  />
          <NoteTodos :info="note.info" :is-edit-note="isEditNote" />
      </Component>

      <EditNote v-if="isEditNote" 
        :note="note"
        :notes="notes"
        :is-edit-note="isEditNote" 
        @edit-note="toggleEditNote" />
    </article>
  `,
  data() {
    return {
      isEditNote: false,
    };
  },
  methods: {
    toggleEditNote() {
      this.isEditNote = !this.isEditNote;
      if (this.isEditNote) {
        const query = { noteId: this.note.id };
        this.$router.push({ query });
      } else {
        this.$router.replace({ query: null });
      }
    },
  },
  components: {
    NoteImg,
    NoteTxt,
    NoteTodos,
    EditNote,
  },
};
