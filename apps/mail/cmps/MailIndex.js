import MailList from '../cmps/MailList.js'
import MailFilter from '../cmps/MailFilter.js'

import { mailService } from '../services/mail.service.js'

export default {
  template: `
            
            <MailFilter>         
            </MailFilter>              

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
      showCompose: false,
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

  components: {
    MailList,
    MailFilter,
  },
}
