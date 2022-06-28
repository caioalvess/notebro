<template>
  <q-form class="row q-col-gutter-md" style="min-height: 500px">
    <div class="col-12">
      <q-input label="Nome e sobrenome" />
    </div>
    <div class="col-12">
      <q-input label="E-mail" />
    </div>
    <div class="col-12">
      <q-input label="Nova senha" hint="As senhas devem ter pelo menos 6 caracteres." />
    </div>
    <div class="col-12">
      <q-input label="Confirmar senha" hint="Insira a senha nova mais uma vez" />
    </div>
    <div class="col-12 q-py-md" style="max-height: 44px">
      <q-btn label="Continuar" outline size="lg" no-caps class="fit" />
    </div>
  </q-form>
  <div class="col-12 text-body2 q-py-sm">
    <q-checkbox dense v-model="confirm" />

    Ao criar uma conta, você concorda com
    <span class="text-secondary text-uppercase">nada</span>. Use o aplicativo e seja
    feliz!
  </div>

  <slot name="action"></slot>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const confirm = ref(false);
    return {
      confirm,
    };
  },
});
</script>
