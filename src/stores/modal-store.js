import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    active: false,
    component: "",
  }),

  actions: {
    activeModal(value) {
      this.active = value;
    },
  },
});
