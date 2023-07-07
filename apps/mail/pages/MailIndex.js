import MailFilter from '../cmps/MailFilter.js'
import MailList from '../cmps/MailList.js'
import MailSideMenue from '../cmps/MailSideMenue.js'

import {
  showSuccessMsg,
  showErrorMsg,
} from '../../../services/event-bus.service.js'
import { mailservice } from '../services/mail.service.js'

export default {
  props: ['mail'],
  template: `
  <MailFilter @filter="setFilterBy"/>
<section class="index-container">
  <div class="side-menu">
    <MailSideMenue @selectFolder="setFolder"/>  
  </div>  
  <div class="mail-list">
    <MailList v-if="mails"
              :mails="filteredMails"
              @markAsRead="markAsRead"
              @remove="removeMail"/>
    
    <RouterView :mails="filteredMails"
                @updateMail="updateEmail"/>
  </div>
</section>
  `,
  data() {
    return {
      mails: [],
      selectedMail: null,
      filterBy: {},
      folder: 'inbox',
      isComposeOpen: false,
    }
  },
  created() {
    mailservice.query().then((mails) => {
      this.mails = mails
    })
  },
  methods: {
    removeMail(mail) {
      mail.isTrash = true
      console.log('remove mail', mail)
    },
  },
  markAsRead(mailId) {
    mailservice
      .get(mailId)
      .then((mail) => {
        if (!mail.isRead) {
          mail.isRead = true
          return mailservice.save(mail)
        }
      })
      .then((savedEmail) => {
        console.log('savedEmail', savedEmail)
        showSuccessMsg('Email marked as Read')
      })
      .catch((err) => {
        showErrorMsg('Cannot mark email as read')
      })
  },
  setFilterBy(filterBy) {
    this.filterBy = filterBy
  },
  setFolder(folder) {
    console.log('folder..', folder)
    this.folder = folder
  },

  computed: {
    filteredMails() {
      let filteredMails = this.mails
      const regex = new RegExp(this.filterBy.txt, 'i')
      filteredMails = filteredMails.filter((mail) => regex.test(mail.subject))
      console.log('filteredMails', filteredMails)

      switch (this.folder) {
        // case 'inbox':
        //   filteredMails = filteredMails.filter(
        //     (mail) =>
        //       mail.to === mailservice.loggedinUser.mail && !mail.removedAt
        //   )
        //   break
        case 'sent':
          console.log('folder', folder)
          filteredMails = filteredMails.filter(
            (mail) =>
              mail.from === mailservice.loggedinUser.mail &&
              !mail.removedAt &&
              mail.sentAt
          )
          break
        case 'starred':
          console.log('folder', folder)
          filteredMails = filteredMails.filter((mail) => mail.isStarred)
          break
        case 'trash':
          console.log('folder', folder)
          filteredMails = filteredMails.filter((mail) => mail.removedAt)
          break
        case 'draft':
          console.log('folder', folder)
          filteredMails = filteredMails.filter(
            (mail) =>
              mail.from === mailservice.loggedinUser.mail && !mail.sentAt
          )
          break
      }
      return filteredMails
    },
  },
  components: {
    MailFilter,
    MailList,
    MailSideMenue,
  },
}
