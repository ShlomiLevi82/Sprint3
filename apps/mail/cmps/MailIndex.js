import MailList from '../cmps/MailList.js'
import { mailService } from '../services/mail.service.js'

export default {
  template: `
  
    <section class="mail-index-header">
        <h1>Mail</h1>
        <input               
        type="text"
        placeholder="Search "
        v-model="searchTerm"/>
        <button>Search</button> 
    </section>

    <div class="mail-index">
    <section class="mail-manu">
        <div class="compose">
            <span class="material-icons-outlined">
                add
            </span>Compose
        </div>
        <div class="inbox">
            <span class="material-icons-outlined">
                inbox
            </span> Inbox
        </div>
        <div class="star">
            <span class="material-icons-outlined star">
                star_outline
            </span> Starred 
        </div>
        <div class="sent">
            <span class="material-icons-outlined">
                send
            </span>Sent
        </div>
        <div class="draft">
            <span class="material-icons-outlined">
            insert_drive_file
            </span>Draft
        </div>
        <div class="trash">
            <span class="material-icons-outlined">
            delete_outline
            </span>Trash
        </div>
    </section >
        <section class="mail-index">                  
            <MailList 
                v-if="mails"
                :mails="getMails">
            </MailList>           
        </section>
  </div>

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
