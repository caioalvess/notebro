<template>
  <q-layout view="hHh lpR fFf">
    <Modal>
      <template #action>
        <q-card-actions
          v-if="useModal.component['name'] === 'SignUp'"
          align="right"
          class="text-primary"
          style="position: absolute; bottom: 0; left: 8px"
        >
          Você já tem uma conta?
          <span
            @click="useModal['active'] = false"
            class="text-secondary q-pl-xs"
          >
            Fazer login</span
          >
          <q-icon name="play_arrow" color="secondary" />
        </q-card-actions>
        <q-card-actions
          v-else
          align="right"
          class="text-primary"
          style="position: absolute; bottom: 0; left: 15px"
        >
          Voltar para o
          <span
            @click="useModal['active'] = false"
            class="text-secondary q-pl-xs"
          >
            Início</span
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
import { useModalStore } from "src/stores/modal-store";
export default defineComponent({
  name: "LoginLayout",
  components: { Modal },

  setup() {
    const useModal = useModalStore();
    return {
      useModal,
    };
  },
});
</script>
