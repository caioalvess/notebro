<template>
  <q-form
    class="row column q-col-gutter-md"
    @submit.prevent="handlePasswordRest"
  >
    <div class="text-body1 q-pt-lg">
      Insira o endereço de e-mail associado à sua conta Notebro.
    </div>
    <div class="col-12">
      <q-input v-model="form.email" label="E-mail" />
    </div>
    <div class="col-12 q-pt-md q-pb-sm">
      <q-btn
        label="Continuar"
        outline
        size="lg"
        no-caps
        class="fit"
        style="max-height: 44px"
        type="submit"
      />
    </div>
  </q-form>
</template>

<script>
import { useAuthStore } from "src/stores/auth-store";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "passwordRest",
  setup() {
    const auth = useAuthStore();
    const form = ref({
      email: "",
    });
    const handlePasswordRest = () => {
      auth.sendPasswordRestEmail(form.value);
    };
    return {
      auth,
      form,
      handlePasswordRest,
    };
  },
});
</script>
