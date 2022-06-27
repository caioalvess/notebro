<template>
  <q-dialog v-model="useModal.active" maximized>
    <q-card style="min-width: 350px; position: relative">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Cadastro</div>
        <q-space />
        <q-btn
          icon="close"
          color="negative"
          flat
          round
          dense
          @click="useModal.activeModal(false)"
        />
      </q-card-section>

      <q-card-section class="q-pt-none"> oi </q-card-section>

      <q-card-actions
        align="right"
        class="text-primary"
        style="position: absolute; bottom: 0; right: 0"
      >
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Add address" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useModalStore } from "src/stores/modal-store";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ModalComponent",
  setup() {
    const useModal = useModalStore();

    return {
      useModal,
    };
  },
});
</script>
