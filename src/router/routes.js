import Publications from "src/pages/publications/publications.vue"
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
