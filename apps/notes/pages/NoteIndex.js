import { noteService } from "../services/note.service.js";
import NoteList from "../cmps/NoteList.js";
import NoteFilter from "../cmps/NoteFilter.js";
import NoteSidebar from "../cmps/NoteSidebar.js";
import NoteAdd from "../cmps/NoteAdd.js";

export default {
  template: `
      <section class="note-main-layout">

      <NoteSidebar />
      <section class="note-index">

      <NoteAdd @noteAdd="noteAdd"/>
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
    noteAdd(newNote) {
      this.notes.push(newNote);
    },
  },
  components: {
    NoteList,
    NoteFilter,
    NoteSidebar,
    NoteAdd,
  },
};
