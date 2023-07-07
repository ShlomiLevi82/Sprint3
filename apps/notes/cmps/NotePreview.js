import NoteImg from "./noteTypes/NoteImg.js";
import NoteTxt from "./noteTypes/NoteTxt.js";
import NoteTodos from "./noteTypes/NoteTodos.js";
export default {
  props: ["note"],
  template: `
    <article class="note-preview">
      <Component :is="note.type" :info="note.info"></Component>
    </article>
  `,
  components: {
    NoteImg,
    NoteTxt,
    NoteTodos,
  },
};
