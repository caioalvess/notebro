const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        name: "loginDefault",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("pages/LoginPage.vue"),
      },
    ],
  },

  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "inicio",
        name: "inicio",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
