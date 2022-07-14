<template>
  <div class="q-pa-md">
    <q-form
      class="row column q-col-gutter-xs"
      @submit.prevent="handleResetPassword()"
    >
      <div class="col-12">
        <q-input
          v-model="form.password"
          autofocus
          label="Nova senha"
          type="password"
          :rules="[
            (val) =>
              (val && val.length > 5) || 'Sua senha deve ter 6 dígitos ou mais',
          ]"
        />
      </div>
      <div class="col-12">
        <q-input
          v-model="confirmPassword"
          label="Confirmar senha"
          type="password"
          :rules="[
            (val) => (val && val.length > 5) || 'Digite a senha mais uma vez',
            (val) => (val && val === form.password) || 'Senhas diferentes',
          ]"
        />
      </div>
      <div class="col-12 q-pt-xs q-pb-sm">
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

    <div
      align="right"
      class="text-primary"
      style="position: absolute; bottom: 0; left: 15px"
    >
      Ir para o
      <span :to="{ name: 'loginDefault' }" class="text-secondary q-pl-xs">
        Login</span
      >
      <q-icon name="play_arrow" color="secondary" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useAuthStore } from "src/stores/auth-store";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "ResetPassword",
  setup() {
    const $router = useRouter();
    const $route = useRoute();
    const auth = useAuthStore();

    const form = ref({
      password: "",
    });

    const confirmPassword = ref("");

    const handleResetPassword = () => {
      console.log($route.query.token);
      return;
      auth.resetPassword($route.query.token, form.value.password);
    };

    return {
      auth,
      handleResetPassword,
      form,
      confirmPassword,
    };
  },
});
</script>
