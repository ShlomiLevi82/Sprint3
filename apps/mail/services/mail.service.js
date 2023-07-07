import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const MAILS_KEY = 'Mails'
const TRASH_MAILS = 'TrashMail'
const SHRAE_MAIL = 'shareMailDB'
const DRAFT_MAIL = 'draftMailDB'

var gFilterBy = { txt: '', minPrice: 0 }

//Demo Data

const loggedinUser = {
  mail: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
}

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
  return storageService.query(MAILS_KEY).then((mails) => {
    if (gFilterBy.txt) {
      const regex = new RegExp(gFilterBy.txt, 'i')
      mails = mails.filter((mail) => regex.test(mail.title))
    }
    if (gFilterBy.minPrice) {
      mails = mails.filter((mail) => mail.listPrice >= gFilterBy.minPrice)
    }
    // if (gPageIdx !== undefined) {
    //   const startIdx = gPageIdx * PAGE_SIZE
    //   mails = mails.slice(startIdx, startIdx + PAGE_SIZE)
    // }
    return mails
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
    Mails = generateRandomEmails(20)
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
    isTrashed: false,
    sentAt: Date.now(),
    removedAt: null,
    mailIsDraft,
    from: loggedinUser.email,
    to,
  }

  return save(Mail)
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

function generateRandomEmails(n) {
  let mails = []
  for (let i = 0; i < n; i++) {
    let mail = {}
    mail.id = `e${i + 1}`
    mail.subject = `Random Email Subject ${i + 1}`
    mail.body =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium quia explicabo natus reprehenderit a!'
    ;('Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium quia explicabo natus reprehenderit a!')
    mail.status = 'inbox'
    mail.isRead = Math.random() >= 0.5
    mail.isStarred = Math.random() >= 0.5
    mail.isImportant = Math.random() >= 0.5
    mail.isTrashed = Math.random() >= 0.5
    mail.sentAt = _randomDate(new Date(2020, 0, 1), new Date(), 0, 24)
    mail.from = `sender_${i + 1}@example.com`
    mail.to = `recipient_${i + 1}@example.com`
    mails.push(mail)
  }
  return mails
}

let mails = generateRandomEmails(20)
console.log(mails)

function _randomDate(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start))
  var hour = (startHour + Math.random() * (endHour - startHour)) | 0
  date.setHours(hour)
  return date
}
