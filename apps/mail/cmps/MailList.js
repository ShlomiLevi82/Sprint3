import MailPreview from './MailPreview.js'

export default {
  props: ['mails'],
  template: `    
    <ul class="clean-list">
        <li v-for="mail in mails" :key="mail.id">
            <MailPreview :mail="mail"></MailPreview>
        </li>
    </ul> 
 `,

  components: {
    MailPreview,
  },
}
