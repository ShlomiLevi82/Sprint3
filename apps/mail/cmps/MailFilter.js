import Mailcompose from './MailCompose.js'

export default {
  template: `
  <div class="mail-index">
<section class="mail-index-header">        
        <input               
            type="text"
            placeholder="Search "
            v-model="filterBy.txt"
            @input="onSetFilterBy"/>
        
    </section>
        <section class="mail-manu">
            <div class="compose" @click.stop="toggleCompose">
                <span class="btn material-icons-outlined">
                    create
                </span>Compose
            </div>
            <div class="inbox">
                <span class="material-icons-outlined">
                    inbox
                </span> Inbox
            </div>
            <div class="star">          
                <span class="material-icons-outlined star">
                    star_outline
                </span> Starred 
            </div>
            <div class="sent">
                <span class="material-icons-outlined">
                    send
                </span>Sent
            </div>
            <div class="draft">
                <span class="material-icons-outlined">
                insert_drive_file
                </span>Draft
            </div>
            <div class="trash">
                <span class="material-icons-outlined">
                delete_outline
                </span>Trash
            </div>
        </section >       
        <Mailcompose @send="sendMail" v-if="showCompose"/>
      </div>
            
        `,

  data() {
    return {
      showCompose: false,
      filterBy: {
        txt: '',
      },
    }
  },

  methods: {
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
