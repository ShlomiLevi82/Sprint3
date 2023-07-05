import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'

import MailIndex from './apps/mail/cmps/MailIndex.js'
import MailDitails from './apps/mail/cmps/MailDitails.js'

import NoteIndex from './apps/notes/pages/NoteIndex.js'
import NoteEdit from './apps/notes/cmps/NoteEdit.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/about',
      component: AboutUs,
    },
    {
      path: '/mail',
      component: MailIndex,
    },
    {
      path: '/mail/:mailId',
      component: MailDitails,
    },
    {
      path: '/notes',
      component: NoteIndex,
    },
    {
      path: '/notes/editNote/:noteId?',
      component: NoteEdit,
    },
  ],
}

export const router = createRouter(routerOptions)
