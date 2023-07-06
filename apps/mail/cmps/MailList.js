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
                    @remove="$emit('remove',$event)"
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
    onMarkAsRead(mailId) {
      this.$emit('markAsRead', mailId)
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
