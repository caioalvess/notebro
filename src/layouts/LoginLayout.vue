<template>
  <q-layout view="hHh lpR fFf">
    <Modal />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import Modal from "src/components/global/Modal.vue";
export default defineComponent({
  name: "LoginLayout",
  components: { Modal },

  setup() {
    return {};
  },
});
</script>
