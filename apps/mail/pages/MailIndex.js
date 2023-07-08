import { emailService } from '../services/mail.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

import MailFilter from '../cmps/MailFilter.js'
import MailSideMenue from '../cmps/MailSideMenue.js'
import MailList from '../cmps/MailList.js'

export default {
  template: `

        <section class="email-index">          
          <section class="main-mail-layout">
            <MailSideMenue @filter="setFilterBy" :emails="this.emails"/>
            <MailList @editDraft="compose"
              v-if="!isDetails"
              :emails="filteredEmails" 
              @remove="removeEmail"
              @toDetails="toDetails"/>
            <RouterView />
          </section>
        </section>
    `,
  data() {
    return {
      emails: null,
      isDetails: false,
      filterBy: {
        status: 'inbox',
        txt: '', // no need to support complex text search
        isRead: true, // (optional property, if missing: show all)
        // isStared: true, // (optional property, if missing: show all)
        lables: ['important', 'romantic'], // has any of the labels
      },
    }
  },
  created() {
    eventBus.on('search', (txt) => (this.filterBy.txt = txt))
    emailService.query().then((emails) => (this.emails = emails))
  },
  methods: {
    setFilterBy(filterBy) {
      this.filterBy.status = filterBy
    },
    removeEmail(emailId) {
      emailService.remove(emailId).then(() => {
        const idx = this.emails.findIndex((email) => email.id === emailId)
        this.emails.splice(idx, 1)
        eventBus.emit('show-msg', { txt: 'Email removed', type: 'success' })
      })
    },
    toDetails({ mailId }) {
      this.$router.push(`mail/${mailId}`)
    },
    compose(email) {
      eventBus.emit('openCompose', email)
    },
  },
  computed: {
    filteredEmails() {
      const regex = new RegExp(this.filterBy.txt, 'i')
      if (!this.emails) return
      let filteredEmails = []
      if (this.filterBy.status === 'starred') {
        filteredEmails = this.emails.filter(
          (email) => email.isStarred && regex.test(email.subject)
        )
      } else {
        filteredEmails = this.emails.filter(
          (email) =>
            email.status === this.filterBy.status && regex.test(email.subject)
        )
      }
      return filteredEmails
    },
  },
  watch: {
    $route: {
      handler(newValue) {
        this.isDetails = newValue.params.id ? true : false
      },
      deep: true,
    },
  },
  components: {
    MailFilter,
    MailSideMenue,
    MailList,
  },
}
