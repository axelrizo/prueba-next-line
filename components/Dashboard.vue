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
          />
        </v-list>
      </v-col>
      <v-dialog> </v-dialog>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
    }
  },
  async fetch() {
    this.tasks = await this.$api.base.auth.tasks.getTasks()
  },
  methods: {
    onOpenTask({ id }) {},
  },
}
</script>
