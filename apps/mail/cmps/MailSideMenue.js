import Mailcompose from './MailCompose.js'

export default {
  props: ['unreadMailsCount'],
  template: `
        <section class="mail-manu">
            <div class="compose" @click.stop="toggleCompose">
                <span class="btn material-icons-outlined">
                    create
                </span>Compose
            </div>
            <div class="inbox icon"  @click="selectFolder('inbox')">
                <span class="material-icons-outlined">
                    inbox
                </span> Inbox {{ unreadMailsCount }}
            </div>
            <div class="star icon"  @click="selectFolder('starred')">          
                <span class="material-icons-outlined star">
                    star_outline
                </span> Starred 
            </div>
            <div class="sent icon"  @click="selectFolder('send')">
                <span class="material-icons-outlined">
                    send
                </span>Sent
            </div>
            <div class="draft icon"  @click="selectFolder('draft')">
                <span class="material-icons-outlined">
                insert_drive_file
                </span>Draft
            </div>
            <div class="trash icon"  @click="selectFolder('trash')">
                <span class="material-icons-outlined">
                delete_outline
                </span>Trash
            </div>
        </section >       
        <Mailcompose @send="sendMail" v-if="showCompose"/>     

        `,

  data() {
    return {
      showCompose: false,
      filterBy: {
        txt: '',
      },
    }
  },
  computed: {
    unreadMailCount() {
      return this.mails.filter((mail) => !mail.isRead).length
    },
  },

  methods: {
    selectFolder(folder) {
      console.log('folder', folder)
      this.$emit('selectFolder', folder)
    },
    onSetFilterBy() {
      this.$emit('filter', this.filterBy)
      console.log('this.filterBy', this.filterBy)
    },

    toggleCompose() {
      console.log('showCompose', this.showCompose)
      this.showCompose = !this.showCompose
    },
  },

  components: {
    Mailcompose,
  },
}
