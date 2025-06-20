import { createStore } from 'vuex'

const moduleA = {
    state: ()=> ({
          count: 0,
          todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: true }
          ]}),
      getters: {
        doneTodos (state) {
          return state.todos.filter(todo => todo.done)
        },
        doneTodosCount (state, getters) {
          return getters.doneTodos.length
        },
        getTodoById: (state) => (id) => {
          return state.todos.find(todo => todo.id === id)
        }
      },
      mutations: {
        increment (state,n) {
          state.count += n
        }
      }
}
const store = createStore({
    modules:{
        a:moduleA
    }
  })

  export default store;