import { defineStore } from "pinia";
import useSupabase from "boot/supabase";
import { useModalStore } from "src/stores/modal-store";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    step: 1,
    user: { name: "caio" },
  }),

  actions: {
    async login({ email, password }) {
      const { supabase } = useSupabase();
      const { user, error } = await supabase.auth.signIn({ email, password });

      if (error) {
        throw error.message;
      }

      this.router.replace({ name: "me" });

      return user;
    },

    async loginWithSocialProvider(provider) {
      const { supabase } = useSupabase();
      const { user, error } = supabase.auth.signIn(provider);

      if (error) {
        throw error;
      }

      return user;
    },

    async logout() {
      const { supabase } = useSupabase();
      const useModal = useModalStore();
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      useModal["active"] = false;
      this.router.replace({ name: "login" });
    },

    async isLoggedIn() {
      return !!user.value;
    },

    async register({ email, password, ...meta }) {
      const { supabase } = useSupabase();
      const { user, error } = await supabase.auth.signUp(
        { email, password },
        {
          data: meta,
          redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation`,
        }
      );

      if (error) {
        throw error;
      }

      this.step = 2;

      return user;
    },

    async update(data) {
      const { supabase } = useSupabase();
      const { user, error } = await supabase.auth.update(data);

      if (error) {
        throw error;
      }

      return user;
    },

    async sendPasswordRestEmail({ email }) {
      const { supabase } = useSupabase();
      const { user, error } = await supabase.auth.api.resetPasswordForEmail(
        email
      );

      if (error) {
        throw error;
      }

      return user;
    },

    async resetPassword(accessToken, newPassword) {
      try {
        const { supabase } = useSupabase();
        const { user, error } = await supabase.auth.api.updateUser(
          accessToken,
          {
            password: newPassword,
          }
        );

        if (error) {
          throw error.message;
        }

        this.router.push({ name: "loginDefault" });

        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
