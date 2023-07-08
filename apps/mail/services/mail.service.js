import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const MAILS_KEY = 'Mails'

//Demo Data

const loggedinUser = {
  mail: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
}

// const criteria = {
//   status: 'inbox/sent/trash/draft',
//   txt: 'puki', // no need to support complex text search
//   isRead: true, // (optional property, if missing: show all)
//   isStared: true, // (optional property, if missing: show all)
//   lables: ['important', 'romantic'], // has any of the labels
// }

_createMails()

export const emailService = {
  query,
  getUser,
  get,
  save,
  getEmptyEmail,
  remove,
}

function query(filterBy = {}) {
  return storageService.query(MAILS_KEY).then((emails) => {
    if (filterBy.status) {
      const regex = new RegExp(filterBy.status, 'i')
      emails = emails.filter((email) => regex.test(email.status))
    }
    return emails
  })
}

function get(emailId) {
  return storageService.get(MAILS_KEY, emailId)
}

function remove(emailId) {
  return storageService.remove(MAILS_KEY, emailId)
}

function save(email) {
  if (email.id) {
    return storageService.put(MAILS_KEY, email)
  } else {
    return storageService.post(MAILS_KEY, email)
  }
}

function getEmptyEmail(
  from = 'newUser',
  to = '',
  subject = '',
  body = '',
  sentAt = '22:10 PM',
  status = 'inbox'
) {
  return { from, to, subject, body, sentAt, status }
}

function _createEmails() {
  let emails = utilService.loadFromStorage(MAILS_KEY)
  if (!emails || !emails.length) {
    emails = emailsDB
    utilService.saveToStorage(MAILS_KEY, emails)
  }
}

function _createEmail(id, body = 'Hello') {
  const email = getEmptyEmail(id, body)
  email.id = utilService.makeId()
  return email
}

function getUser() {
  const loggedInUser = {
    email: 'user@appsus.com',
    fullName: 'Mahatma Appsus',
  }
  return loggedInUser
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
    mail.isRead = Math.random() >= 0.5
    mail.sentAt = _randomDate(new Date(2020, 0, 1), new Date(), 0, 24)
    mail.isStarred = Math.random() >= 0.5
    mail.from = `sender_${i + 1}@example.com`
    mail.to = `recipient_${i + 1}@example.com`
    mail.status = 'inbox'
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
