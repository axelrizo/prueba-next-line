<template>
  <v-card width="300" elevation="1" class="mx-auto">
    <v-card-title>Simulated login</v-card-title>
    <v-card-subtitle>Just click login</v-card-subtitle>
    <v-form>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field label="User"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Password"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn class="ml-auto" color="primary" @click="onClickLogin">
          Login
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      login: 'user/login',
    }),
    onClickLogin() {
      this.login()
    },
  },
}
</script>

<style></style>
