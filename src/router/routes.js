import Publications from "src/pages/publications/publications.vue"
import People from "src/pages/people/people.vue"
const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue'),
    children: []
  },
  {
    path: "/publications",
    component: Publications,
    name: "publications",
    children: []
  },
  {
    path: "/people/:name",
    component: People,
    name: "people",
    children: []
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
