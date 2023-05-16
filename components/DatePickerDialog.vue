<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label="Picker in dialog"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(date)"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: { type: String, default: null },
    label: { type: String, default: 'Date' },
  },
  data() {
    return { modal: false }
  },
  computed: {
    date: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
