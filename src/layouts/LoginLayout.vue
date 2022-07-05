<template>
  <q-layout view="hHh lpR fFf">
    <Modal v-if="useModal.component === 'SignUp'">
      <template #action>
        <q-card-actions
          align="right"
          style="position: absolute; bottom: 0; left: 13px"
        >
          <span class="text-primary">Você já tem uma conta?</span>
          <span
            @click="backToLogin"
            class="text-secondary q-ml-sm"
            style="text-decoration: underline"
          >
            Fazer login</span
          >
          <q-icon name="play_arrow" color="secondary" />
        </q-card-actions>
      </template>
    </Modal>
    <Modal v-else>
      <template #action>
        <q-card-actions
          align="right"
          style="position: absolute; bottom: 0; left: 13px"
        >
          oooi
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
import { useModalStore } from "src/stores/modal-store";
export default defineComponent({
  name: "LoginLayout",
  components: { Modal },

  setup() {
    const useModal = useModalStore();
    const backToLogin = () => {
      useModal.activeModal(false);
    };
    return {
      backToLogin,
      useModal,
    };
  },
});
</script>
