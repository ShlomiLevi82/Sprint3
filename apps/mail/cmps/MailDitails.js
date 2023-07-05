import { mailService } from '../services/mail.service.js'

export default {
  props: ['mail'],
  template: `
        <RouterLink to="/mail">Back to List</RouterLink>            
        <section class="mail-details">
            <h2>{{ mail.subject }}</h2>
            <h3>{{ mail.sentAt }}</h3>    
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
      mailService
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
