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

      <q-card-section class="q-pt-none">
        <component :is="useModal.component" />
      </q-card-section>

      <slot name="action"> </slot>
    </q-card>
  </q-dialog>
</template>

<script>
import { useModalStore } from "src/stores/modal-store";
import { defineComponent } from "vue";
import SignUp from "src/components/account/SignUp.vue";
import ForgetPassword from "src/components/account/ForgetPassword.vue";
export default defineComponent({
  components: { SignUp, ForgetPassword },
  name: "ModalComponent",
  setup() {
    const useModal = useModalStore();

    return {
      useModal,
    };
  },
});
</script>
