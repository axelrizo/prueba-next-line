<template>
  <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
    <v-text-field
      v-model="form.title"
      :rules="[(v) => !!v || 'Name is required']"
      label="Title"
    />
    <DatePickerDialog v-model="form.date" />
    <v-text-field v-model="form.comments" label="Comments" />
    <v-text-field v-model="form.description" label="Description" />
    <v-text-field v-model="form.tags" label="Tags" />
    <slot />
  </v-form>
</template>

<script>
export default {
  props: {
    value: { type: Object, required: true },
  },
  emits: ['input'],
  data() {
    return {
      valid: true,
    }
  },
  computed: {
    form: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    onSubmitForm() {
      this.$refs.form.validate()
      if (!this.valid) return
      this.$emit('on-submit-form')
    },
  },
}
</script>

<style></style>
