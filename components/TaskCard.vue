<template>
  <v-card>
    <v-card-text>
      <p class="title mb-0 pt-4">
        {{ task.title }}
      </p>
      <div class="mt-n2">
        <span>{{ task.due_date }}</span>
        <v-chip v-if="task.is_completed === 1" color="primary" x-small>
          Completed
        </v-chip>
        <v-chip v-else color="error" x-small> Not completed </v-chip>
      </div>
      <div>
        <!-- TODO: add task details -->
        'Task Details'
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    task: { type: Object, default: () => ({}) },
  },
}
</script>

<style></style>
