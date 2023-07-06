import { mailservice } from '../services/mail.service.js'
import {
  showSuccessMsg,
  showErrorMsg,
} from '../../../services/event-bus.service.js'

export default {
  props: ['mail'],
  template: `

<RouterLink :to="'/mail/' + mail.id">
    <section :class="{'mail-preview': true,
                      'unread-mail': !mail.isRead,
                      'read-mail': mail.isRead}">
        <span class="icons"
          @click.stop.prevent="onToggleStar">
          {{ mail.isStarred ? '★' : '☆' }}
        </span>
        <h4>
            {{mail.from}}
        </h4>
        <h4>
            {{mail.subject}}
        </h4>
        <p>
            {{getDate}}
        </p>
        <div class="actions">
          <span class="material-icons-outlined" >archive</span>
          <span class="material-icons-outlined" 
                @click.stop.prevent="onRemoveMail(mail.id)">
                delete
          </span>
          </div>
    </section> 
</RouterLink> 

 `,

  data() {
    return {
      // isRead,
    }
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
  },
  methods: {
    onToggleStar() {
      this.mail.isStarred = !this.mail.isStarred
      this.$emit('starred', this.mail)
    },
    onRemoveMail(mailId) {
      this.$emit('remove', mailId)
    },
  },
}
