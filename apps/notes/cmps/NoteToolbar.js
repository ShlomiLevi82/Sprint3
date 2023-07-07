import { noteService } from "../services/note.service.js";
import NoteDelete from "./noteToolbar/NoteDelete.js";
import NoteColor from "./noteToolbar/NoteColor.js";
export default {
  props: ["note", "notes"],
  template: `
    <div className="note-toolbar">

            <NoteDelete :note="note" @remove="removeNote"/>
            <NoteColor :note="note"/>
            
            </div>
    `,
  methods: {
    removeNote(noteId) {
      noteService.remove(noteId).then(() => {
        const idx = this.notes.findIndex((note) => note.id === noteId);
        this.notes.splice(idx, 1);
      });
    },
  },
  components: {
    NoteDelete,
    NoteColor,
  },
};
