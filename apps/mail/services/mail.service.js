import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const PAGE_SIZE = 5
const MAIL_KEY = 'MailDB'

var gFilterBy = {}
var gSortBy = {}
var gPageIdx

export const mailService = {
  query,
  get,
  remove,
  save,
  getEmptyMail,
  getFilterBy,
  setFilterBy,
  getNextMailId,
}

//Demo Data

const loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
}

const eMails = [
  {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isChecked: false,
    isRead: false,
    sentAt: 1551133930594,
    removedAt: null,
    from: 'momo@momo.com',
    to: 'user@appsus.com',
  },
  {
    id: 'e102',
    subject: 'Miss you too!',
    body: 'Would love to catch up sometimes',
    isChecked: false,
    isRead: false,
    sentAt: 1551433930594,
    removedAt: null,
    from: 'momo@momo.com',
    to: 'user@appsus.com',
  },
  {
    id: 'e103',
    subject: 'Miss you more!',
    body: 'Would love to catch up sometimes',
    isChecked: false,
    isRead: false,
    sentAt: new Date(),
    removedAt: null,
    from: 'momo@momo.com',
    to: 'user@appsus.com',
  },
]

const criteria = {
  status: 'inbox/sent/trash/draft',
  txt: 'puki', // no need to support complex text search
  isRead: true, // (optional property, if missing: show all)
  isStared: true, // (optional property, if missing: show all)
  lables: ['important', 'romantic'], // has any of the labels
}

// function query() {
//   console.log('email', eMails)
//   return Promise.resolve(eMails)
// }

_createMails()

function query() {
  return storageService.query(MAIL_KEY).then((mails) => {
    if (gFilterBy.txt) {
      const regex = new RegExp(gFilterBy.txt, 'i')
      mails = mails.filter((mail) => regex.test(mail.title))
    }
    // if (gFilterBy.price) {
    //   console.log('gFilterBy.price', gFilterBy.price)
    //   mails = mails.filter((book) => book.listPrice.amount <= gFilterBy.price)
    // }
    // if (gPageIdx !== undefined) {
    //   const startIdx = gPageIdx * PAGE_SIZE
    //   mails = mails.slice(startIdx, startIdx + PAGE_SIZE)
    // }
    // if (gSortBy.price !== undefined) {
    //   mails.sort(
    //     (b1, b2) =>
    //       (b1.book.listPrice.amount - b2.book.listPrice.amount) *
    //       gSortBy.book.listPrice.amount
    //   )
    // } else if (gSortBy.title !== undefined) {
    //   mails.sort((b1, b2) => b1.title.localeCompare(b2.title) * gSortBy.title)
    // }
    return mails
  })
}

function get(mailId) {
  return storageService.get(MAIL_KEY, mailId).then((mail) => {
    return _setNextPrevMailId(mail)
  })
}

function _setNextPrevMailId(mail) {
  return storageService.query(MAIL_KEY).then((mails) => {
    const mailIdx = mails.findIndex((currMail) => currMail.id === mail.id)
    mail.nextMailId = mails[mailIdx + 1] ? mails[mailIdx + 1].id : mails[0].id
    mail.prevMailId = mails[mailIdx - 1]
      ? mails[mailIdx - 1].id
      : mails[mails.length - 1].id
    console.log('book', mail)
    return mail
  })
}

function remove(mailId) {
  return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
  if (mail.id) {
    return storageService.put(MAIL_KEY, mail)
  } else {
    return storageService.post(MAIL_KEY, mail)
  }
}

function getEmptyMail() {
  return {
    id: '',
    subject: '',
    body: '',
    isRead: false,
    sentAt: new Date(),
    removedAt: null,
    from: '',
    to: '',
  }
}

function getFilterBy() {
  return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
  if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
  return gFilterBy
}

function getNextMailId(mailId) {
  return storageService.query(MAIL_KEY).then((mails) => {
    var idx = mails.findIndex((mail) => mail.id === mailId)
    if (idx === mails.length - 1) idx = -1
    return mails[idx + 1].id
  })
}

function _createMails() {
  let mails = utilService.loadFromStorage(MAIL_KEY)
  if (!mails || !mails.length) {
    mails = eMails
    utilService.saveToStorage(MAIL_KEY, mails)
  }
}

function _createMail(title) {
  const mail = getEmptyMail()
  mail.id = utilService.makeId()
  return mail
}
