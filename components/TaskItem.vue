<template>
  <v-list-item>
    <v-list-item-action class="pr-2">
      <v-checkbox
        :input-value="isTaskCompleted"
        @change="
          onChangeTaskCompleted({
            id: task.id,
            title: task.title,
          })
        "
      />
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title
        :class="{ 'text-decoration-line-through': isTaskCompleted }"
      >
        {{ task.title }}
      </v-list-item-title>
      <v-list-item-subtitle v-if="task.due_date">
        {{ task.due_date }}
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <div class="flex items-center">
        <v-icon @click="openTask({ id: task.id })">mdi-eye</v-icon>
        <v-icon color="warning" @click="onEditTask({ id: task.id })">
          mdi-pencil
        </v-icon>
        <button @click="deleteTask({ id: task.id })">
          <v-icon color="red">mdi-trash-can</v-icon>
        </button>
      </div>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { TASK_STATE } from '@/constants/tasks.constants'

export default {
  props: {
    task: { type: Object, required: true },
  },

  computed: {
    isTaskCompleted() {
      return this.task.is_completed === TASK_STATE.COMPLETED
    },
  },

  methods: {
    async onChangeTaskCompleted({ id, title }) {
      const newTaskValue = this.isTaskCompleted
        ? TASK_STATE.NOT_COMPLETED
        : TASK_STATE.COMPLETED
      await this.$api.base.tasks.updateTask({
        isCompleted: newTaskValue,
        id,
        title,
      })
      this.$emit('change-task-state')
    },

    async deleteTask({ id }) {
      try {
        await this.$api.base.tasks.removeTask({ id })
        this.$emit('delete-task')
        this.$toast.success('Task removed successfully')
      } catch (error) {
        this.$toast.error('Something happened!')
      }
    },

    openTask({ id }) {
      this.$emit('open-task', { id })
    },

    onEditTask({ id }) {
      this.$emit('edit-task', { id })
    },
  },
}
</script>
