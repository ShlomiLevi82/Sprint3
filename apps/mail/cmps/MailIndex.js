import MailList from '../cmps/MailList.js'
import { mailService } from '../services/mail.service.js'

export default {
  template: `
        <section class="mail-index">
            <h1>Mail</h1>

            <input               
                type="text"
                placeholder="Search "
                v-model="searchTerm"/>
            <button>Search</button>          
            <MailList 
                v-if="mails"
                :mails="getMails">
            </MailList>

           
    </section>
  
  `,

  data() {
    return {
      mails: null,
      searchTerm: null,
    }
  },

  created() {
    {
      mailService.query().then((mails) => {
        console.log('mails', mails)
        this.mails = mails
      })
    }
  },
  computed: {
    getMails() {
      return this.mails
    },
  },
  methods: {},

  components: {
    MailList,
  },
}
