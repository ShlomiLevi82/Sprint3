import NotePreview from "./NotePreview.js";

export default {
  props: ["notes"],
  template: `
    <section class="note-list">
      <transition-group name="list" tag="ul">
        <li v-for="note in notes" :key="note.id" :style="note.style">
          <NotePreview :note="note" />
          <section class="actions">
            <button @click="onRemoveNote(note.id)">X</button>
          </section>
        </li>
      </transition-group>
    </section>
  `,
  data() {
    return {};
  },
  methods: {
    onRemoveNote(noteId) {
      this.$emit("remove", noteId);
    },
  },
  components: {
    NotePreview,
  },
  name: "NoteList",
};
