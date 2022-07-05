<template>
  <q-dialog v-model="useModal.active" maximized>
    <q-card style="min-width: 350px; position: relative">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Cadastro</div>
        <q-space />
        <q-btn
          style="z-index: 999999"
          icon="close"
          color="negative"
          flat
          round
          dense
          @click="useModal.active = false"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <component :is="useModal.component['name']" />
      </q-card-section>

      <slot name="action"> </slot>
    </q-card>
  </q-dialog>
</template>

<script>
import { useModalStore } from "src/stores/modal-store";
import { defineComponent } from "vue";
import SignUp from "src/components/account/SignUp.vue";
export default defineComponent({
  components: { SignUp },
  name: "ModalComponent",
  setup() {
    const useModal = useModalStore();

    return {
      useModal,
      SignUp,
    };
  },
});
</script>
