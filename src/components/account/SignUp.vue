<template>
  <q-form class="row q-col-gutter-md">
    <div class="col-12">
      <q-input label="Nome e sobrenome" />
    </div>
    <div class="col-12">
      <q-input label="E-mail" />
    </div>
    <div class="col-12">
      <q-input
        label="Nova senha"
        hint="As senhas devem ter pelo menos 6 caracteres."
      />
    </div>
    <div class="col-12">
      <q-input
        label="Confirmar senha"
        hint="Insira a senha nova mais uma vez"
      />
    </div>
    <div class="col-12 q-py-lg">
      <q-btn label="Continuar" outline size="lg" no-caps class="fit" />
    </div>
  </q-form>
  <div class="col-12">
    Ao criar uma conta, você concorda com nada. Use o aplicativo e seja feliz!
  </div>

  <div class="q-pa-xl">
    <q-separator color="orange" spaced class="q-my-lg" />
  </div>

  <slot name="action"></slot>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
