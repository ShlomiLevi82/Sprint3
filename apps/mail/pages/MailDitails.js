import { mailservice } from '../services/mail.service.js'
import MailFilter from '../cmps/MailFilter.js'

export default {
  props: ['mail'],
  template: `
<div class="wrapper">
        <MailFilter> </MailFilter>
        <section class="mail-main-section" >  
        <section class="mail-links-section">

          <RouterLink :to="'/mail/' + mail.nextMailId">Next Mail</RouterLink> |
          <RouterLink :to="'/mail/' + mail.prevMailId">Prev Mail</RouterLink> |
          <RouterLink to="/mail">Back to List</RouterLink>            
        </section>     

        <section v-if="mail"  class="mail-details">
          <h3> {{ mail.subject }}</h3>
          <h4>From <{{ mail.from }}></h4>
            <h3>sent at {{ getDate }}</h3>
            <main class="mail-body">
                <p>{{ mail.body }}</p>
            </main>
        </section>
        </section>
        </div>
        `,

  data() {
    return {
      mail: null,
    }
  },
  created() {
    this.loadMail()
  },
  methods: {
    loadMail() {
      const { mailId } = this.$route.params
      console.log('mailId..', mailId)
      mailservice
        .get(mailId)
        .then((mail) => {
          console.log('mail', mail)
          this.mail = mail
        })
        .catch((err) => {
          alert('Cannot load mail')
          this.$router.push('/mail')
        })
    },

    onClose() {
      this.$emit('close')
    },
  },
  watch: {
    mailId() {
      this.loadMail()
    },
  },
  computed: {
    getDate() {
      const date = new Date(this.mail.sentAt)
      const now = new Date()
      const month = date.toLocaleString('default', { month: 'short' })

      if (now.getFullYear() - date.getFullYear() > 1) {
        return date.getFullYear()
      } else return month + ' ' + date.getDay()
    },
    mailId() {
      return this.$route.params.mailId
    },
  },
  components: {
    MailFilter,
  },
}
