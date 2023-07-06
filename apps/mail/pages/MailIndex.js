import MailList from '../cmps/MailList.js'
import MailFilter from '../cmps/MailFilter.js'

import { mailservice } from '../services/mail.service.js'

export default {
  template: `
            
            <MailFilter @filter="setFilterBy">         
            </MailFilter>              

            <MailList 
                v-if="mails"
                :mails="getMails"
                @markAsRead="markAsRead">
            </MailList>           
        </section>
        

  `,

  data() {
    return {
      mails: null,
      filterBy: {},
    }
  },

  created() {
    {
      mailservice.query().then((mails) => {
        console.log('mails', mails)
        this.mails = mails
      })
    }
  },

  methods: {
    setFilterBy(filterBy) {
      this.filterBy = filterBy
    },

    markAsRead(emailId) {
      console.log('mark as read')
      mailservice
        .get(emailId)
        .then((email) => {
          if (!email.isRead) {
            email.isRead = true
            return mailservice.save(email)
          }
        })
        .then((savedEmail) => {
          console.log('savedEmail', savedEmail)
          showSuccessMsg('Email marked as Read')
          // this.$router.push('/mail')
        })
        .catch((err) => {
          showErrorMsg('Cannot mark email as read')
        })
    },
  },

  computed: {
    getMails() {
      let filteredEmails = this.mails
      const regex = new RegExp(this.filterBy.txt, 'i')
      filteredEmails = filteredEmails.filter((email) =>
        regex.test(email.subject)
      )
      console.log('filteredEmails', filteredEmails)
      return filteredEmails
    },
  },

  components: {
    MailList,
    MailFilter,
  },
}
