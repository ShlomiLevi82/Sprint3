export default {
  props: ['mail'],
  template: `

<RouterLink :to="'/mail/' + mail.id">
    <section class="mail-preview ">  
        <span class="icons" @click.stop="onToggleStar">{{ mail.isStarred ? '★' : '☆' }}</span>
        <!-- <span class="material-icons-outlined star">
            star_outline
        </span>         -->
        <h4>
            {{mail.from}}
        </h4>
        <h4>
            {{mail.subject}}
        </h4>
        <p>
            {{getDate}}
        </p>
        <!-- <section class = "icons">
            <span class="material-icons-outlined" 
            @click.stop="onRemoveMail(mail.id)" >
                delete
            </span>
            <span class="material-icons-outlined">
                drafts
            </span>
            <span class="material-icons-outlined">
                archive
            </span> 
        </section> -->
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
      console.log('mailId', mailId)
      this.$emit('remove', mailId)
    },
  },
}
