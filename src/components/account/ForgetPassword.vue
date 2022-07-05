<template>
  <q-form class="row column q-col-gutter-md">
    <div class="text-body1 q-pt-lg">
      Insira o endereço de e-mail associado à sua conta Notebro.
    </div>
    <div class="col-12">
      <q-input label="E-mail" />
    </div>
  </q-form>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ForgetPassword",
  setup() {
    return {};
  },
});
</script>
