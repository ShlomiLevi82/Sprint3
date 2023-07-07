import { mailservice } from '../services/mail.service.js'

export default {
  props: ['mail'],
  template: `

<section class="mail-links-section">
  <RouterLink :to="'/mail/' + mail.nextMailId">Next Mail</RouterLink> |
  <RouterLink :to="'/mail/' + mail.prevMailId">Prev Mail</RouterLink> |
  <RouterLink to="/mail">Back to Inbox</RouterLink>    
</section>           

<section v-if="mail"  class="mail-details">
  <h3> {{ mail.subject }}</h3>
  <h4>From <{{ mail.from }}></h4>
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
}
