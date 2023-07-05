import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import MailList from './apps/mail/cmps/MailList.js'

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
      path: '/Mail',
      component: MailList,
    },
  ],
}

export const router = createRouter(routerOptions)
