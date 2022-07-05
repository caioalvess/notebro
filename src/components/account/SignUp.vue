<template>
  <q-form class="row column q-col-gutter-md">
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
    <div class="col-12 q-pt-md q-pb-sm">
      <q-btn
        label="Continuar"
        outline
        size="lg"
        no-caps
        class="fit"
        style="max-height: 44px"
      />
    </div>
  </q-form>
  <div class="col-12 text-body2 q-pb-sm q-pt-none">
    <q-checkbox dense v-model="confirm" />

    Ao criar uma conta, você concorda com
    <span class="text-secondary text-uppercase">nada</span>. Use o aplicativo e
    seja feliz!
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
