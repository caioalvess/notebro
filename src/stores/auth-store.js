import { defineStore } from "pinia";
import useSupabase from "boot/supabase";

const { supabase } = useSupabase;

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userModel: {
      email: "",
      password: "",
    },

    user: {},

    provider: "",

    loggedIn: false,
  }),

  actions: {
    async login() {
      const { user, error } = await supabase.auth.signIn(
        this.userModel.email,
        this.userModel.password
      );

      if (error) throw error;
      return user;
    },

    async loginProvider() {
      const { user, error } = await supabase.auth.signIn(this.provider);

      if (error) throw error;
      return user;
    },

    async logout() {
      const { error } = await supabase.auth.signOut();

      if (error) throw error;
    },

    async loggedIn() {
      return !!this.user;
    },

    async register({ ...meta }) {
      const { user, error } = await supabase.auth.signUp(
        this.userModel.email,
        this.userModel.password,
        {
          data: meta,
          redirectTo: `${windows.location.origin}/me?fromEmail=registrationConfirmation`,
        }
      );
      if (error) throw error;

      return user;
    },

    async passwordRest(email) {
      const { user, error } = await supabase.auth.resetPasswordForEmail(email);

      if (error) throw error;
      return user;
    },

    async update(data) {
      const { user, error } = await supabase.auth.update(data);

      if (error) throw error;

      return user;
    },
  },
});
