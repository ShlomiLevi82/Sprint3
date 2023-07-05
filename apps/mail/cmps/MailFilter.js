import Mailcompose from './MailCompose.js'

export default {
  template: `

  

<section class="mail-index-header">
        <h1>Mail</h1>
        <input               
            type="text"
            placeholder="Search "
            v-model="filterBy.txt"
            @input="onSetFilterBy"/>
        <button>Search</button> 
    </section>

    <div class="mail-index">
    <section class="mail-manu">
        <div class="compose">
            <span class="btn material-icons-outlined"
                @click="toggleCompose">
                add
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
        <section class="mail-index"> 
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

  methods: {
    onSetFilterBy() {
      this.$emit('filter', this.filterBy)
      console.log('this.filterBy', this.filterBy)
    },

    toggleCompose() {
      console.log('showCompose', showCompose)
      this.showCompose = !this.showCompose
    },
  },

  components: {
    Mailcompose,
  },
}