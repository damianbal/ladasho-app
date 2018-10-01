<template>
    <div class="card">
        <div class="card-body">
        <AlertComponent v-if="message.length > 0" :message="message"/>

        <form class="startForm" v-on:submit.prevent="signIn">
            <div class="form-group">
                <label>URL:</label>
                <input v-model="url" class="form-control" type="text" placeholder="URL to Laravel app">
            </div>

            <div class="form-group">
                <label>Email:</label>
                <input v-model="email" class="form-control" type="email" placeholder="Email..">
            </div>


                        <div class="form-group">
                <label>Password:</label>
                <input v-model="password" class="form-control" type="password" placeholder="Password...">
            </div>

            <div class="text-center">
                <button class="btn btn-primary" type="submit">Sign in</button>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
import AuthService from "@/services/AuthService";
import AlertComponent from "@/components/AlertComponent";
import { mapActions } from 'vuex';

export default {
  components: {
    AlertComponent
  },
  methods: {
    ...mapActions(["fetchModels", "fetchConfig"]),
    async signIn() {
      let success = await AuthService.signIn(
        this.url,
        this.email,
        this.password
      );

      if (success) {
        this.message = "Signed in!";
        this.fetchModels()
        this.fetchConfig()
      } else {
        this.message = "Could not sign in";
        alert("Could not sign in!")
      }
    }
  },
  data() {
    return {
      url: "",
      email: "",
      password: "",
      message: ""
    };
  }
};
</script>

<style>
.startForm {
  width: 50%;
  margin: 0 auto;
  padding: 10px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
</style>
