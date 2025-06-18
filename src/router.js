
import { createRouter,createWebHashHistory } from 'vue-router'
import zhuce from './zhuce.vue'
import loading from './loading.vue'
import myself from './myself.vue'
import App from './App.vue'

const routes = [
  { path:'/zhuce/:id', 
    components:{
      default:zhuce,
      myself:myself
    }, 
    props:{
      default:true,
      myself:false
    }},
  { path:'/', component:myself },
  // { path:'/loading/:id', component:loading, props:route=>({query:route.query.q})}

  // { path: '/zhuce', component: zhuce, alias:'/zhu'},
  // { path: '/myself/:id',component: myself,children:[
  //   {path:'',component:loading,alias:['zhu','/:id']}
  // ] },
  // { path: '/loading', component: loading , name:'aaa'},
  // { path:'/zhuce', redirect:{name:'aaa'}},
  // { path:'/app', redirect:'/myself', component: App },
  // { path:'/zhuce/:id',
  //   redirect:to=>{
  //     return{ path:'/zhuce',query:{q:to.params.id} }
  //   }},
  // { path:'/myself/:id/test',
  //   redirect:to => {
  //     return 'aaa'
  //   }
  // },
  // { path:'/loading',
  //   redirect:'/zhuce',
  //   component:loading,
  //   children:[
  //     {path:'myself',component:myself}
  //   ]
  // }
    // { path: '/', component: App },
    // { path: '/loading', 
    //   component: loading ,
    //   name:'id',
    //   children: [

    //     { path: '', component: zhuce },
    //     { path: 'myself',component: myself },
    //     { path: 'zhuce', components: {default:zhuce,www:loading}},
    //   ],
    // },
    // { path: '/myself/:id', components: {qqq:myself,www:loading} }
  ]
  
  const router = createRouter({
    history:createWebHashHistory(),
    routes, 
  })
  export default router;