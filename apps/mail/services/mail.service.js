import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const MAILS_KEY = 'Mails'
const TRASH_MAILS = 'TrashMail'
const SHRAE_MAIL = 'shareMailDB'
const DRAFT_MAIL = 'draftMailDB'

var gFilterBy = { txt: '', minPrice: 0 }
var gSortBy = { title: 1 }
var gPageIdx

//Demo Data

const loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
}

const emails = [
  {
    id: 'e101',
    subject:
      '[Slack] New message in group conversation with Roni Siles and Guy Kadosh - Coding Academy',
    body: 'You have a new mention in Coding Academy - Sep22 (fullstackboot-keg9179.slack.com) From your conversation with Roni Siles and Guy Kadosh - Coding Academy',
    status: 'inbox',
    isRead: true,
    isStarred: false,
    isImportant: false,
    sentAt: 1667999864557,
    from: 'Slack',
    to: 'etironi100@appsus.com',
  },
  {
    id: 'e102',
    subject: 'Or wants to join your network',
    body: "Here's a summary of your latest invitations to connect.",
    status: 'inbox',
    isRead: false,
    isStarred: false,
    isImportant: true,
    sentAt: 1667992550000,
    from: 'LinkedIn',
    to: 'etironi100@appsus.com',
  },
  {
    id: 'e103',
    subject: 'rorokoo invited you to rorokoo/sprint3',
    body: '@rorokoo has invited you to collaborate on the rorokoo/sprint3 repository. You can accept or decline this invitation. You can also head over to https://github.com/rorokoo/sprint3 to check out the repository or visit @rorokoo to learn a bit more about them. This invitation will expire in 7 days.',
    status: 'inbox',
    isRead: true,
    isStarred: true,
    isImportant: true,
    sentAt: 1667999330000,
    from: 'rorokoo',
    to: 'etironi100@appsus.com',
  },
  {
    id: 'e104',
    subject:
      '[Slack] New messages from Roni Siles and Guy Kadosh - Coding Academy in Coding Academy - Sep22',
    body: 'You have a new mention in Coding Academy - Sep22 (fullstackboot-keg9179.slack.com) From your conversation with Guy Kadosh - Coding Academy and Roni Siles',
    status: 'inbox',
    isRead: false,
    isStarred: false,
    isImportant: false,
    sentAt: 1667999800000,
    from: 'Slack',
    to: 'etironi100@appsus.com',
  },
  {
    id: 'e105',
    subject: 'Join 8200 ALUMNI CONSULTANTS',
    body: '8200 Alumni Consultants is a company of top-notch technology consultants from Israel, all are alumni of the prestigious military cybersecurity unit, 8200 (the Israeli NSA). We serve as a technological branch of leading organizations worldwide, establishing and managing R&D centers.',
    status: 'inbox',
    isRead: false,
    isStarred: true,
    isImportant: true,
    sentAt: 1667999700000,
    from: '8200 Alumni Association',
    to: 'etironi100@appsus.com',
  },
  {
    id: 'e106',
    subject: '[GitHub] Please reset your password',
    body: 'Reset your GitHub password - We heard that you lost your GitHub password. Sorry about that! But dont worry! You can use the following button to reset your password: Reset your GitHub password',
    status: 'inbox',
    isRead: false,
    isStarred: false,
    isImportant: true,
    sentAt: 1667999600000,
    from: 'GitHub',
    to: 'etironi100@appsus.com',
  },
  {
    id: 'e107',
    subject: 'Reserve your spot at Elevate 22!',
    body: "Dear monday U community, We are excited to invite you to Elevate ‘22 – monday.coms online global conference! As part of the event, you'll be able to explore how to achieve more with your resources, tech, and time and whether or not you use monday.com, you'll enjoy the valuable content! Secure your spot to get: - Critical insights from monday.coms co-founders and CEOs on the future of work - An inside scoop on new features and products that will help you work smarter and faster - Product-focused master classes to give you the specific skills you need to boost efficiency - 7-minute Work it Out Talks with the minds behind monday.com to get ahead of the curve - Inspiration and guidance from leaders at Cartier, Canva, and more!",
    status: 'inbox',
    isRead: false,
    isStarred: true,
    isImportant: true,
    sentAt: 1667999500000,
    from: 'monday U',
    to: 'etironi100@appsus.com',
  },
  {
    id: 'e108',
    subject: '[freesound] Your activation link',
    body: 'Hello there etim139, Thank you for signing up at Freesound! In order to activate your Freesound account, please click this link: https://freesound.org/home/activate/etim139/b8f25d58/ . If for some reason this fails, try copy-pasting the complete link into you browser. Some mail clients break up long lines, or do strange things to URLs!',
    status: 'inbox',
    isRead: false,
    isStarred: false,
    isImportant: false,
    sentAt: 1667999400000,
    from: 'Freesound NoReply',
    to: 'etironi100@appsus.com',
  },
  {
    id: 'e109',
    subject: 'We noticed a new sign in to your Dropbox',
    body: 'Hi eti, A new computer just signed in to your Dropbox account. To help keep your account secure, let us know if this is you. Is this you? When: Sep 2, 2022 at 11:03 am IDT) What:Desktop Client on Windows 11 22000',
    status: 'inbox',
    isRead: false,
    isStarred: false,
    isImportant: false,
    sentAt: 1667999300000,
    from: 'Dropbox',
    to: 'etironi100@appsus.com',
  },
  {
    id: 'e110',
    subject: 'Adam Bercovich shared CaSep22-Materials with you',
    body: 'Hi eti, Adam Bercovich (adamberco@gmail.com) invited you to view the folder CaSep22-Materials on Dropbox',
    status: 'inbox',
    isRead: false,
    isStarred: true,
    isImportant: false,
    sentAt: 1667999200000,
    from: 'Adam Bercovich',
    to: 'etironi100@appsus.com',
  },
  {
    id: 'e111',
    subject: 'Adam Bercovich shared CaSep22-Materials with you',
    body: 'Hi eti, Adam Bercovich (adamberco@gmail.com) invited you to view the folder CaSep22-Materials on Dropbox',
    status: 'sent',
    isRead: true,
    isStarred: false,
    isImportant: true,
    sentAt: 1667999200000,
    from: 'etironi100@appsus.com',
    to: 'Adam Bercovich',
  },
  {
    id: 'e112',
    subject: 'Adam Bercovich shared CaSep22-Materials with you',
    body: 'Hi eti, Adam Bercovich (adamberco@gmail.com) invited you to view the folder CaSep22-Materials on Dropbox',
    status: 'sent',
    isRead: true,
    isStarred: false,
    isImportant: false,
    sentAt: 1667999200000,
    from: 'etironi100@appsus.com',
    to: 'Roni Siles',
  },
  {
    id: 'e113',
    subject: 'Adam Bercovich shared CaSep22-Materials with you',
    body: 'Hi eti, Adam Bercovich (adamberco@gmail.com) invited you to view the folder CaSep22-Materials on Dropbox',
    status: 'sent',
    isRead: true,
    isStarred: false,
    isImportant: true,
    sentAt: 1667999200000,
    from: 'etironi100@appsus.com',
    to: 'Tamar Yom-Tov',
  },
  {
    id: 'e114',
    subject: 'Adam Bercovich shared CaSep22-Materials with you',
    body: 'Hi eti, Adam Bercovich (adamberco@gmail.com) invited you to view the folder CaSep22-Materials on Dropbox',
    status: 'sent',
    isRead: true,
    isStarred: false,
    isImportant: false,
    sentAt: 1667999200000,
    from: 'etironi100@appsus.com',
    to: 'Roni Siles',
  },
  {
    id: 'e115',
    subject: 'Adam Bercovich shared CaSep22-Materials with you',
    body: 'Hi eti, Adam Bercovich (adamberco@gmail.com) invited you to view the folder CaSep22-Materials on Dropbox',
    status: 'sent',
    isRead: true,
    isStarred: false,
    isImportant: false,
    sentAt: 1667999200000,
    from: 'etironi100@appsus.com',
    to: 'Yael Pery',
  },
]

const criteria = {
  status: 'inbox/sent/trash/draft',
  txt: 'puki', // no need to support complex text search
  isRead: true, // (optional property, if missing: show all)
  isStared: true, // (optional property, if missing: show all)
  lables: ['important', 'romantic'], // has any of the labels
}

_createMails()

export const mailservice = {
  query,
  get,
  remove,
  save,
  createMail,
  getSentMails,
  saveTrashedMail,
  queryTrashedMail,
  removeTrashedMail,
  getImportantMails,
  getDraftMail,
  saveDraftMail,
  CreateNoteMail,
  saveToNotes,
  removeDraftedMail,
}

function query(filterBy = {}) {
  return storageService.query(MAILS_KEY).then((emails) => {
    if (gFilterBy.txt) {
      const regex = new RegExp(gFilterBy.txt, 'i')
      emails = emails.filter((email) => regex.test(email.title))
    }
    if (gFilterBy.minPrice) {
      emails = emails.filter((email) => email.listPrice >= gFilterBy.minPrice)
    }
    if (gPageIdx !== undefined) {
      const startIdx = gPageIdx * PAGE_SIZE
      emails = emails.slice(startIdx, startIdx + PAGE_SIZE)
    }
    return emails
  })
}

function getImportantMails(filterBy = {}) {
  return storageService.query(MAILS_KEY).then((Mails) => {
    let onlyUserMails = Mails.filter((mail) => mail.from !== 'user@appsus.com')
    if (filterBy.isImportant) {
      return onlyUserMails.filter((mail) => mail.isImportant)
    } else {
      return onlyUserMails
    }
  })
}

function queryTrashedMail(filterBy = {}) {
  return storageService.query(TRASH_MAILS).then((Mails) => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      return Mails.filter((mail) => regex.test(mail.body))
    }
    if (filterBy.isStared) {
      return Mails.filter((mail) => mail.isStared)
    } else {
      return Mails
    }
  })
}

function getSentMails(filterBy = {}) {
  return storageService.query(MAILS_KEY).then((Mails) => {
    let onlySentMails = Mails.filter(
      (mail) => mail.from === 'user@appsus.com' && !mail.mailIsDraft
    )
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      return onlySentMails.filter((mail) => regex.test(mail.body))
    }
    if (filterBy.isStared) {
      return onlySentMails.filter((mail) => mail.isStared)
    } else {
      return onlySentMails
    }
  })
}

function getDraftMail() {
  return storageService.query(DRAFT_MAIL)
}

function get(MailId) {
  return storageService.get(MAILS_KEY, MailId).then(_setNextPrevMailId)
}

function remove(MailId) {
  return storageService.remove(MAILS_KEY, MailId)
}

function removeTrashedMail(MailId) {
  return storageService.remove(TRASH_MAILS, MailId)
}
function removeDraftedMail(MailId) {
  return storageService.remove(DRAFT_MAIL, MailId)
}

function saveTrashedMail(Mail) {
  Mail.id = null
  if (Mail.id) {
    return storageService.put(TRASH_MAILS, Mail)
  } else {
    Mail.removedAt = Date.now()
    return storageService.post(TRASH_MAILS, Mail)
  }
}
function save(Mail) {
  if (Mail.id) {
    return storageService.put(MAILS_KEY, Mail)
  } else {
    return storageService.post(MAILS_KEY, Mail)
  }
}
function saveToNotes(Mail) {
  if (Mail.id) {
    return storageService.put(SHRAE_MAIL, Mail)
  } else {
    return storageService.post(SHRAE_MAIL, Mail)
  }
}
function saveDraftMail(Mail) {
  if (Mail.id) {
    return storageService.put(DRAFT_MAIL, Mail)
  } else {
    return storageService.post(DRAFT_MAIL, Mail)
  }
}

function createDraftMail() {
  return {
    id: 'dr110',
    subject: '',
    body: '',
    isRead: false,
    isSelected: false,
    isStared: false,
    isImportant: false,
    mailIsDraft: true,
    sentAt: 1551133930594,
    removedAt: null,
    from: 'user@appsus.com',
    to: '',
  }
}

function getEmptyMail() {
  return { id: '', title, listPrice }
}

function _createMails() {
  let Mails = utilService.loadFromStorage(MAILS_KEY)
  if (!Mails || !Mails.length) {
    Mails = emails
    utilService.saveToStorage(MAILS_KEY, Mails)
  }
}

function CreateNoteMail(title, text) {
  return {
    id: null,
    info: { title, text },
    isPinned: false,
    type: 'NoteEmail',
    style: { backgroundColor: '#ECF2FF' },
    // isSelected: false,
    // isStared: false,
    // isImportant: false,
    // sentAt: Date.now(),
    // removedAt: null,
    // from: loggedinUser.email,
    // to,
  }
}

function createMail(to, subject, body, mailIsDraft) {
  const Mail = {
    id: null,
    subject,
    body,
    isRead: false,
    isSelected: false,
    isStared: false,
    isImportant: false,
    sentAt: Date.now(),
    removedAt: null,
    mailIsDraft,
    from: loggedinUser.email,
    to,
  }

  return save(Mail)
}

function addReview(MailId, review) {
  const newReview = JSON.parse(JSON.stringify(review))
  return storageService
    .get(MAILS_KEY, MailId)
    .then((Mail) => {
      newReview.id = utilService.makeId()
      if (!Mail.newReview) {
        Mail.newReview = []
      }
      Mail.newReview.push(newReview)

      return Mail
    })
    .then((Mail) => save(Mail))
}

function deleteReview(reviewId, MailId) {
  return storageService
    .get(MAILS_KEY, MailId)
    .then((Mail) => {
      const idx = Mail.newReview.findIndex((review) => review.id === reviewId)
      Mail.newReview.splice(idx, 1)
      return Mail
    })
    .then((Mail) => save(Mail))
}

function _setNextPrevMailId(Mail) {
  return storageService.query(MAILS_KEY).then((Mails) => {
    const MailIdx = Mails.findIndex((currMail) => currMail.id === Mail.id)
    Mail.nextMailId = Mails[MailIdx + 1] ? Mails[MailIdx + 1].id : Mails[0].id
    Mail.prevMailId = Mails[MailIdx - 1]
      ? Mails[MailIdx - 1].id
      : Mails[Mails.length - 1].id
    return Mail
  })
}
