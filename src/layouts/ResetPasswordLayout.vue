<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-toolbar-title class="text-black"> Redefinir senha </q-toolbar-title>

        <div>
          <q-btn
            :to="{ name: 'loginDefault' }"
            icon="close"
            color="negative"
            flat
            round
            dense
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {};
  },
});
</script>
