import MailPreview from './MailPreview.js'

export default {
  props: ['mails'],
  template: `   
    <section class="mail-list">
      <div class="mail-count">Unread Mails: {{ unreadEmailCount }}</div> 
        <ul class="clean-list">
          <li v-for="mail in mails" :key="mail.id">
            <MailPreview :mail="mail"
                    @click="onShowDetails(mail.id)"
                    @click="onMarkAsRead(mail.id)" 
                    @checkbox-change="onCheckboxChange(mail)"
            ></MailPreview>

          </li>
        </ul> 
      </section>

 `,

  watch: {
    mails: {
      immediate: true,
      handler(mailList) {},
    },
  },
  methods: {
    onMarkAsRead(emailId) {
      this.$emit('markAsRead', emailId)
    },
    onCheckboxChange(emailId) {
      console.log(emailId)
      this.$emit('checkbox-change', emailId)
    },
    onRemoveEmail(emailId) {
      this.$emit('remove', emailId)
    },
    onRemoveMAil(mailId) {
      this.$emit('remove', mailId)
    },
    onShowDetails(mailId) {
      console.log('mailId', mailId)
      this.$emit('select', mailId)
    },
  },

  computed: {
    unreadEmailCount() {
      return this.mails.filter((mail) => !mail.isRead).length
    },
  },

  components: {
    MailPreview,
  },
}
