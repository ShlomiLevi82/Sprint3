import { utilService } from '../../../services/util.service'
import { storageService } from '../../../async-storage.service.js'

const MAIL_KEY = 'MailDB'
// const PAGE_SIZE = 5

// var gPageIdx
var gFilterBy = {}
var gSortBy = { title: 1 }

export const mailService = {
  query,
  get,
  remove,
  save,
  getEmptyBook: getEmptyMail,
  getFilterBy,
  setFilterBy,
  getNextBookId: getNextMailId,
}

_createMails()

function query() {
  return storageService.query(MAIL_KEY).then((books) => {
    if (gFilterBy.txt) {
      const regex = new RegExp(gFilterBy.txt, 'i')
      books = books.filter((book) => regex.test(book.title))
    }
    if (gFilterBy.price) {
      console.log('gFilterBy.price', gFilterBy.price)
      books = books.filter((book) => book.listPrice.amount <= gFilterBy.price)
    }
    if (gPageIdx !== undefined) {
      const startIdx = gPageIdx * PAGE_SIZE
      books = books.slice(startIdx, startIdx + PAGE_SIZE)
    }
    if (gSortBy.price !== undefined) {
      books.sort(
        (b1, b2) =>
          (b1.book.listPrice.amount - b2.book.listPrice.amount) *
          gSortBy.book.listPrice.amount
      )
    } else if (gSortBy.title !== undefined) {
      books.sort((b1, b2) => b1.title.localeCompare(b2.title) * gSortBy.title)
    }

    return books
  })
}

function get(bookId) {
  return storageService.get(MAIL_KEY, bookId).then((book) => {
    return _setNextPrevBookId(book)
  })
}

function _setNextPrevBookId(book) {
  return storageService.query(MAIL_KEY).then((books) => {
    const bookIdx = books.findIndex((currBook) => currBook.id === book.id)
    book.nextBookId = books[bookIdx + 1] ? books[bookIdx + 1].id : books[0].id
    book.prevBookId = books[bookIdx - 1]
      ? books[bookIdx - 1].id
      : books[books.length - 1].id
    console.log('book', book)
    return book
  })
}

function remove(bookId) {
  return storageService.remove(MAIL_KEY, bookId)
}

function save(book) {
  if (book.id) {
    return storageService.put(MAIL_KEY, book)
  } else {
    return storageService.post(MAIL_KEY, book)
  }
}

function addReview(bookId, review) {
  return get(bookId).then((book) => {
    if (!book.reviews) book.reviews = []
    review.id = utilService.makeId()
    book.reviews.push(review)
    return save(book)
  })
}

function removeReview(bookId, reviewId) {
  return get(bookId).then((book) => {
    const idx = book.reviews.findIndex((review) => review.id === reviewId)
    book.reviews.splice(idx, 1)
    return save(book)
  })
}

function getEmptyMail(title = '') {
  return {
    id: '',
    title,
    listPrice: {
      amount: 0,
      currencyCode: 'EUR',
    },
  }
}

function getFilterBy() {
  return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
  if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
  //   if (filterBy.minSpeed !== undefined) gFilterBy.minSpeed = filterBy.minSpeed
  return gFilterBy
}

function getNextMailId(bookId) {
  return storageService.query(MAIL_KEY).then((books) => {
    var idx = books.findIndex((book) => book.id === bookId)
    if (idx === books.length - 1) idx = -1
    return books[idx + 1].id
  })
}

function _createMails() {
  let books = utilService.loadFromStorage(MAIL_KEY)
  if (!books || !books.length) {
    // books = myBooks

    utilService.saveToStorage(MAIL_KEY, myBooks)
  }
}

function _createBook(title) {
  const book = getEmptyMail(title)
  book.id = utilService.makeId()
  return book
}
