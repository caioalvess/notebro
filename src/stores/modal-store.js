import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    active: false,
    component: {
      description: "",
      name: "",
    },
    maximized: true,
  }),

  actions: {
    setComponentModal(value) {
      this.$patch({
        component: {
          description: value["description"],
          name: value["name"],
        },
      });
    },
  },
});
