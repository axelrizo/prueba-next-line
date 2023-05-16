<template>
  <v-card>
    <v-card-title class="primary white--text">Create Task</v-card-title>
    <v-card-text>
      <TaskForm v-model="form" @on-submit-form="onCreateTask">
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
import { TASK_STATE } from '@/constants/tasks.constants'
export default {
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
  methods: {
    async onCreateTask() {
      try {
        this.loading = true
        await this.$api.base.auth.tasks.createTask({
          title: this.form.title,
          isCompleted: TASK_STATE.NOT_COMPLETED,
          dueDate: this.form.date,
          comments: this.form.comments,
          description: this.form.description,
          tags: this.form.tags,
        })
        this.loading = false
      } catch (error) {
        // TODO: handle error
      }
    },
  },
}
</script>
