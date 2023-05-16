const tasks = [
  {
    id: 1244,
    title: "Cata's testing",
    is_completed: 0,
    due_date: '2023-03-01',
  },
  {
    id: 1246,
    title: 'Testing again 123',
    is_completed: 0,
    due_date: null,
  },
  {
    id: 1380,
    title: 'buy cake',
    is_completed: 1,
    due_date: '2023-05-10',
  },
  {
    id: 1407,
    title: 'test',
    is_completed: 0,
    due_date: null,
  },
  {
    id: 1408,
    title: '1',
    is_completed: 0,
    due_date: null,
  },
]

export const baseAuth = ({ store, $axios }) => {
  const baseAuthInstance = $axios.create({
    baseUrl: process.env.BASE_URL,
  })

  return {
    instance: baseAuthInstance,
    tasks: {
      getTasks() {
        // const response = await fetch(process.env.BASE_URL, {
        //   method: 'GET',
        //   headers: {
        //     Authorization: `Bearer ${store.state.user.user.token}`,
        //   },
        //   body: JSON.stringify({ token: store.state.user.user.token }),
        // })
        // const responseJson = await response.json()
        // const response = await baseAuthInstance.$get('/tasks', {
        //   headers: { Authorization: `Bearer ${store.state.user.user.token}` },
        // })
        // return responseJson
        return tasks
      },

      getTask({ id }) {
        // const response = await baseAuthInstance.$get(`/tasks/${id}`, {
        //   headers: { Authorization: `Bearer ${store.state.user.user.token}` },
        // })
        // return response
        return tasks.find((task) => task.id === id)
      },

      async createTask({
        title,
        isCompleted,
        dueDate,
        comments,
        description,
        tags,
      }) {
        const sendedData = {
          token: store.state.user.user.token,
          title,
          is_completed: isCompleted,
        }
        if (dueDate) sendedData.due_date = dueDate
        if (comments) sendedData.comments = comments
        if (description) sendedData.description = description
        if (tags) sendedData.tags = tags
        const response = await baseAuthInstance.$post('/tasks', sendedData, {
          headers: {
            Authorization: `Bearer ${store.state.user.user.token}`,
          },
        })
        return response
      },

      async updateTask({
        title,
        isCompleted,
        dueDate,
        comments,
        description,
        tags,
        id,
      }) {
        const sendedData = {
          token: store.state.user.user.token,
        }
        if (title) sendedData.title = title
        if (isCompleted) sendedData.is_completed = isCompleted
        if (dueDate) sendedData.due_date = dueDate
        if (comments) sendedData.comments = comments
        if (description) sendedData.description = description
        if (tags) sendedData.tags = tags
        const response = await baseAuthInstance.$put(
          `/tasks/${id}`,
          sendedData,
          {
            headers: {
              Authorization: `Bearer ${store.state.user.user.token}`,
            },
          }
        )
        return response
      },

      async removeTask({ id }) {
        const response = await baseAuthInstance.$delete(`/tasks/${id}`, {
          headers: { Authorization: `Bearer ${store.state.user.user.token}` },
        })
        return response
      },
    },
  }
}
