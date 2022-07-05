import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    active: false,
    component: {
      name: "",
      descricao: "",
    },
  }),

  actions: {
    activeModal(value) {
      this.active = value;
    },

    setComponentModal(value) {
      this.$patch({
        component: value.component,
        descricao: value.descricao,
      });
    },
  },
});
