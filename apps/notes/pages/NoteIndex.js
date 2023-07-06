import { noteService } from "../services/note.service.js";
import NoteList from "../cmps/NoteList.js";
import NoteFilter from "../cmps/NoteFilter.js";
import NoteEdit from "../cmps/NoteEdit.js";
import NoteSidebar from "../cmps/NoteSidebar.js";

export default {
  template: `
      <section class="note-main-layout">
      <NoteSidebar />
      <section class="note-index">
      <RouterLink to="/notes/editNote"><button>Add note</button></RouterLink>
        <NoteFilter  @filter="setFilterBy" />
        <NoteList  :notes="filteredNotes" />

    </section>
    </section>
  `,
  data() {
    return {
      notes: null,
      filterBy: null,
    };
  },
  computed: {
    filteredNotes() {
      if (!this.filterBy) return this.notes;
      const regex = new RegExp(this.filterBy.txt, "i");
      return this.notes.filter((note) => regex.test(note.info.txt));
    },
  },
  created() {
    noteService.query().then((notes) => {
      this.notes = notes;
    });
  },
  methods: {
    setFilterBy(filterBy) {
      this.filterBy = filterBy;
    },
  },
  components: {
    NoteList,
    NoteFilter,
    NoteEdit,
    NoteSidebar,
  },
};
