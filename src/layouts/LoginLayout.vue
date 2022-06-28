<template>
  <q-layout view="hHh lpR fFf">
    <Modal>
      <template #action>
        <q-card-actions align="right" style="position: absolute; bottom: 0; left: 13px">
          <span class="text-primary">Você já tem uma conta?</span>
          <span class="text-secondary q-ml-sm" style="text-decoration: underline">
            Fazer login</span
          >
          <q-icon name="play_arrow" color="secondary" />
        </q-card-actions>
      </template>
    </Modal>
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
