import NotePreview from "./NotePreview.js";

export default {
  props: ["notes"],
  template: `
    <section class="note-list">
      <TransitionGroup name="list" tag="ul">
        <li v-for="note in notes" :key="note.id" >
          <NotePreview :note="note" @click="test(note.id)" />
<section class="actions">
          <button @click="onRemoveNote(note.id)">X</button>
          </section>
        </li>
        </TransitionGroup>
    </section>
  `,
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    onRemoveNote(noteId) {
      this.$emit("remove", noteId);
    },
    test(noteId){
      console.log(noteId);
    },
  },

  components: {
    NotePreview,
  },
  name: "NoteList",
};
