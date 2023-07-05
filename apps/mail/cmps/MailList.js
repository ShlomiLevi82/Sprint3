import MailPreview from './MailPreview.js'

export default {
  props: ['mails'],
  template: `    
    <ul class="clean-list">
        <li v-for="mail in mails" :key="mail.id">
            <MailPreview :mail="mail"
                    @click="onShowDetails(mail.id)"
            ></MailPreview>

        </li>
    </ul> 
 `,
  methods: {
    onRemoveMAil(mailId) {
      this.$emit('remove', mailId)
    },
    onShowDetails(mailId) {
      console.log('mailId', mailId)
      this.$emit('select', mailId)
    },
  },

  components: {
    MailPreview,
  },
}
