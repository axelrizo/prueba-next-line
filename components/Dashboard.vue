<template>
  <v-sheet>
    <v-row>
      <v-dialog width="500">
        <CreateTaskForm />
        <template #activator="{ on, attrs }">
          <v-col cols="12">
            <v-btn block v-bind="attrs" v-on="on">Create Task</v-btn>
          </v-col>
        </template>
      </v-dialog>

      <v-col cols="12">
        <v-list>
          <TaskItem
            v-for="(task, index) in tasks"
            :key="`task-${index}`"
            :task="task"
            @change-task-state="$fetch()"
            @delete-task="$fetch()"
            @open-task="onOpenTask"
            @edit-task="onEditTask"
          />
        </v-list>
      </v-col>
      <v-dialog v-model="isOpenTaskModal" width="300px">
        <TaskCard
          v-if="selectedTask"
          :key="selectedTask.id"
          :task="selectedTask"
        />
      </v-dialog>
      <v-dialog v-model="isOpenEditTaskModal">
        <EditTaskForm v-if="editedId" :key="editedId" :task-id="editedId" />
      </v-dialog>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      isOpenTaskModal: false,
      selectedTask: null,
      isOpenEditTaskModal: false,
      editedId: null,
    }
  },
  async fetch() {
    this.tasks = await this.$api.base.tasks.getTasks()
  },
  methods: {
    onOpenTask({ id }) {
      this.isOpenTaskModal = true
      this.selectedTask = this.$api.base.tasks.getTask({ id })
    },

    onEditTask({ id }) {
      this.editedId = id
      this.isOpenEditTaskModal = true
    },
  },
}
</script>
