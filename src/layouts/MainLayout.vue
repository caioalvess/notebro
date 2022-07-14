<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Notebro </q-toolbar-title>

        <div>v1.0.0</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <Modal>
        <template #action>
          <q-card-actions align="right">
            <q-btn
              no-caps
              flat
              label="Cancelar"
              color="primary"
              v-close-popup
            />
            <q-btn
              no-caps
              flat
              label="Sair"
              color="negative"
              @click="handleLogout"
            />
          </q-card-actions>
        </template>
      </Modal>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import Modal from "src/components/global/Modal.vue";
import { useAuthStore } from "src/stores/auth-store";

export default defineComponent({
  name: "MainLayout",
  components: { Modal },

  setup() {
    const useAuth = useAuthStore();
    const handleLogout = async () => {
      await useAuth.logout();
    };
    return {
      handleLogout,
      useAuth,
    };
  },
});
</script>
