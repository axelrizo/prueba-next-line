<template>
  <v-card>
    <v-card-title class="primary white--text">Edit Task</v-card-title>
    <v-card-text>
      <TaskForm v-model="form" @on-submit-form="onEditTask">
        <v-card-actions>
          <v-btn type="submit" class="ml-auto" color="primary">
            <v-progress-circular v-if="loading" indeterminate color="white" />
            <span v-else>Add new Task</span>
          </v-btn>
        </v-card-actions>
      </TaskForm>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    taskId: { type: Number, default: null },
  },

  data() {
    return {
      loading: false,
      form: {
        title: null,
        date: null,
        comments: null,
        description: null,
        tags: null,
      },
    }
  },

  async fetch() {
    const data = await this.$api.base.tasks.getTask({ id: this.taskId })
    this.form.date = data.due_date
    this.form.title = data.title
  },

  methods: {
    async onEditTask() {
      try {
        this.loading = true
        await this.$api.base.tasks.updateTask({
          title: this.form.title,
          dueDate: this.form.date,
          comments: this.form.comments,
          description: this.form.description,
          tags: this.form.tags,
          id: this.taskId,
        })
        this.loading = false
      } catch (error) {
        // TODO: handle error
      }
    },
  },
}
</script>
