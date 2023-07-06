import MailList from '../cmps/MailList.js'
import MailFilter from '../cmps/MailFilter.js'

import { mailservice } from '../services/mail.service.js'

export default {
  props: ['mail'],
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

    markAsRead(mailId) {
      console.log('mark as read')
      mailservice
        .get(mailId)
        .then((mail) => {
          if (!mail.isRead) {
            mail.isRead = true
            return mailservice.save(mail)
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
