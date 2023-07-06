import { mailservice } from '../services/mail.service.js'
import MailFilter from '../cmps/MailFilter.js'

export default {
  props: ['mail'],
  template: `

        <MailFilter> </MailFilter>

        <RouterLink to="/mail">Back to List</RouterLink>            
        <section v-if="mail"  class="mail-details">

            <h2>{{ mail.subject }}</h2>
            <h2>{{ mail.from }}</h2>
            <h3>sent at {{ mail.sentAt }}</h3>
            <main class="mail-body">
                <p>{{ mail.body }}</p>
            </main>
        </section>
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
    mailId() {
      return this.$route.params.mailId
    },
  },
  components: {
    MailFilter,
  },
}
