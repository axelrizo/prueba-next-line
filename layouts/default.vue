<template>
  <v-app>
    <v-app-bar v-if="isUserLogged" color="primary" dark app>
      <v-app-bar-title>Task App</v-app-bar-title>
      <v-btn color="error" class="ml-auto" @click="onClickLogout">
        Log out
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    isUserLogged() {
      return this.$store.state.user.user.token
    },
  },
  methods: {
    ...mapActions({
      logout: 'user/logout',
    }),
    onClickLogout() {
      this.logout()
    },
  },
}
</script>
