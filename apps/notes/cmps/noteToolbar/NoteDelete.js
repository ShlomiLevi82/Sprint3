export default {
  props: ["note"],
  template: `
    
    
    <span class="material-icons-outlined" @click.stop="onRemoveNote(note.id)">
                  delete
            </span>
            `,
  methods: {
    onRemoveNote(noteId) {
      this.$emit("remove", noteId);
    },
  },
};
