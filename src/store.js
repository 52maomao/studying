import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'


const moduleA = {
    state: ()=> ({
          count: 0,
          todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: true }
          ],
          shoppingCartData:[],
        }),
      getters: {
        // doneTodos (state) {
        //   return state.todos.filter(todo => todo.done)
        // },
        // doneTodosCount (state, getters) {
        //   return getters.doneTodos.length
        // },
        // getTodoById: (state) => (id) => {
        //   return state.todos.find(todo => todo.id === id)
        // }
      },
      mutations: {
        increment (state,n) {
          state.count += n
        },
        setShoppingCartData(state, payload){
            for(let i=0;i<state.shoppingCartData.length;i++){
              if(state.shoppingCartData[i].id === payload.id){
                if(state.shoppingCartData[i].number<payload.inventory){
                  state.shoppingCartData[i].number += 1
                }else{
                  return
                }
              }
            }
            if(!state.shoppingCartData.some((item)=>{ return item.id===payload.id})){
              payload.checked = false
              payload.number = 1
              state.shoppingCartData.push(payload) 
            }
        },
        deleteShoppingCartData(state, payload){
          state.shoppingCartData = state.shoppingCartData.filter((item)=>{
            return item.id !== payload 
          })
        },
        changeNum(state, payload){
          for(let i=0;i<state.shoppingCartData.length;i++){
            if(state.shoppingCartData[i].id === payload.id){
              state.shoppingCartData[i].number = payload.number
            }else{
              return
            }
          }
        }
      },

}
const store = createStore({
    modules:{
        a:moduleA
    },
    plugins: [
      createPersistedState({
        key: 'my-vuex-store', // 存在 localStorage 中的键名
        paths: ['a.shoppingCartData'] // 👈 只保存这一个字段
      })
    ]
  })

  export default store;