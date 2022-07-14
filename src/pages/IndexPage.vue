<template>
  <q-page class="flex flex-center">
    <div v-if="user?.user">
      {{ user.user.user_metadata?.name }}
    </div>

    <q-btn
      color="white"
      text-color="black"
      label="Standard"
      @click="handleLogout"
    />
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";

import { useAuthStore } from "src/stores/auth-store";
import { useModalStore } from "src/stores/modal-store";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const user = useAuthStore();
    const useModal = useModalStore();

    const handleLogout = async () => {
      useModal["active"] = true;
      useModal["maximized"] = false;
      useModal.setComponentModal({
        description: "Logout",
        name: "Logout",
      });
    };

    return {
      handleLogout,
      user,
      useModal,
    };
  },
});
</script>
