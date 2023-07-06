import MailList from '../cmps/MailList.js'
import MailFilter from '../cmps/MailFilter.js'
import MailPreview from '../cmps/MailPreview.js'

import {
  showSuccessMsg,
  showErrorMsg,
} from '../../../services/event-bus.service.js'
import { mailservice } from '../services/mail.service.js'

export default {
  props: ['mail'],
  template: `
  
  <div class="main-wrapper">  
    <section class="main-filter">   
      <MailFilter 
        @filter="setFilterBy">         
      </MailFilter> 
    </section>
    <section class="main-layout">               
      <MailList 
        v-if="mails"
        :mails="getMails"
        @markAsRead="markAsRead"
        @remove="removeMail">
      </MailList> 
    </section>
  </div>
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
        this.mails = mails
      })
    }
  },

  methods: {
    removeMail(mailId) {
      console.log('remove mailId', mailId)
      mailservice
        .remove(mailId)
        .then((mail) => {
          console.log('mail', mail)
          const idx = this.mails.indexOf((mail) => mail.id === mailId)
          this.mails.splics(idx, 1)
          showSuccessMsg('Mail removed')
        })
        .catch((err) => {
          showErrorMsg('Cannot remove mail')
        })
    },

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
    MailPreview,
  },
}
