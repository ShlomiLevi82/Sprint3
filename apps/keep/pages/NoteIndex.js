import { noteService } from '../services/note.service.js'
import NoteList from '../cmps/NoteList.js'
import NoteFilter from '../cmps/NoteFilter.js'

export default {
  template: `
    <div>
      <h1>Notes</h1>
      <section>
        <NoteFilter @filter="setFilterBy" />
        <NoteList :notes="filteredNotes" />
      </section>
    </div>
  `,
  data() {
    return {
      notes: null,
      filterBy: null,
    }
  },
  computed: {
    filteredNotes() {
      if (!this.filterBy) return this.notes
      const regex = new RegExp(this.filterBy.txt, 'i')
      return this.notes.filter((note) => regex.test(note.info.txt))
    },
  },
  created() {
    noteService.query().then((notes) => {
      this.notes = notes
    })
  },
  methods: {
    setFilterBy(filterBy) {
      this.filterBy = filterBy
    },
  },
  components: {
    NoteList,
    NoteFilter,
  },
}
