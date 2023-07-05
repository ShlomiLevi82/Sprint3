import HomePage from "./views/HomePage.js";
import AboutUs from "./views/AboutUs.js";

import MailIndex from './apps/mail/cmps/MailIndex.js'
import NoteIndex from "./apps/keep/pages/NoteIndex.js";

const { createRouter, createWebHashHistory } = VueRouter;

const routerOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/about",
      component: AboutUs,
    },
    {
      path: "/mail",
      component: MailIndex,
    },
    {
      path: "/notes",
      component: NoteIndex,
    },
  ],
};

export const router = createRouter(routerOptions);
