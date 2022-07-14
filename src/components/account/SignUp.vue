<template>
  <q-stepper
    header-class="hidden"
    class="my-custom-paddding"
    flat
    v-model="useAuth.step"
    ref="stepper"
    color="primary"
    animated
  >
    <q-step title="data" :name="1">
      <q-form
        class="row column q-col-gutter-xs"
        @submit.prevent="handleRegister()"
      >
        <div class="col-12">
          <q-input
            autofocus
            label="Nome de usuário"
            v-model="form.name"
            :rules="[(val) => (val && val.length > 0) || 'Digite seu nome']"
          />
        </div>
        <div class="col-12">
          <q-input
            label="E-mail"
            type="email"
            v-model="form.email"
            :rules="[(val) => (val && val.length > 0) || 'Digite seu email']"
          />
        </div>
        <div class="col-12">
          <q-input
            v-model="form.password"
            label="Nova senha"
            type="password"
            :rules="[
              (val) =>
                (val && val.length > 5) ||
                'Sua senha deve ter 6 dígitos ou mais',
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
      <div class="col-12 text-body2 q-pb-sm q-pt-none">
        <q-checkbox dense v-model="confirm" />

        Ao criar uma conta, você concorda com
        <span class="text-secondary text-uppercase">nada</span>. Use o
        aplicativo e seja feliz!
      </div>

      <slot name="action"></slot>
    </q-step>
    <q-step title="congratulations" :name="2"
      >Um link de ativação foi enviado o email
      <span class="text-bold">email</span>.</q-step
    >
  </q-stepper>
</template>

<script>
import { useAuthStore } from "src/stores/auth-store";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const useAuth = useAuthStore();
    const form = ref({
      name: "",
      email: "",
      password: "",
    });
    const confirmPassword = ref("");
    const confirm = ref(false);
    const handleRegister = () => {
      try {
        useAuth.register(form.value);
      } catch (error) {
        throw error;
      }
    };
    return {
      confirm,
      confirmPassword,
      useAuth,
      handleRegister,
      form,
    };
  },
});
</script>

<style lang="sass">
.my-custom-paddding
  .q-stepper
    &__tab
      &:first-child
        padding-left: 0px
      &:last-child
        padding-right: 0px
    &__step-inner,
    &__nav
      padding-left: 0px
      padding-right: 0px
</style>
