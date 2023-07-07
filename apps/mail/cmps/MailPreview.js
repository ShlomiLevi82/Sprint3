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
            {{mail.sentAt}}
        </p>
        <div class="actions">
          <!-- <span class="material-icons-outlined" >archive</span> -->
          <span class="material-icons-outlined" 
            @click.stop.prevent="onRemoveMail(mail)">delete</span>
          <span class="material-icons-outlined" 
            @click.stop.prevent="onToggleIsRead(mail)">{{ mail.isRead ? 'mail' : 'drafts' }}</span>
        </div>
    </section> 
</RouterLink> 

 `,

  data() {
    return {}
  },

  computed: {},
  methods: {
    onToggleIsRead(mail) {
      mail.isRead = !mail.isRead
    },
    onToggleStar() {
      this.mail.isStarred = !this.mail.isStarred
      this.$emit('starred', this.mail)
    },
    onRemoveMail(mail) {
      const mailToRemove = JSON.parse(JSON.stringify(mail))
      mailToRemove.removedAt = Date.now()
      console.log('mailToRemove', mailToRemove)
      this.$emit('remove', mailToRemove)
    },
  },
}
