<template>
  <v-container v-if="!isUserLogged">
    <LoginCard />
  </v-container>
  <v-container v-else>
    <Dashboard />
  </v-container>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  computed: {
    isUserLogged() {
      return this.$store.state.user.user.token
    },
  },
}
</script>
