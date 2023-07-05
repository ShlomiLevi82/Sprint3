import { mailService } from '../services/mail.service.js'
// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export default {
  template: `
      <form @submit.prevent="getMail" class="mail-searhe">
        <h2>Mail</h2>

        <input               
          type="text"
          placeholder="Search "
          v-model="searchTerm"/>

        <button>Search</button>          
      </form>

      <section>
        <ul  class="add-mail-list">
          <li v-for="mail in mails" :key="mail.id">
            <h2>
              &#9758;{{ book.title }} 
              <span @click="onAddBook(book)" 
              class="add-mail"> &#8853; 
            </span>
          </h2>
        </ul>
        </section>
    `,

  data() {
    return {
      searchTerm: '',
      mails: null,
    }
  },
  created() {},

  computed: {},

  methods: {
    getMail() {
      mailService.query().then((mail) => {
        console.log('mail', mail)
        this.mails = mails
      })
    },
  },
}
