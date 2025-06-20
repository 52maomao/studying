<template>
  <div>
    <p>组件导入 bbb&nbsp;&nbsp;cc</p>
    <pre>aaa     bbb&nbsp;</pre>
    <div>
      <h1>Hello App!</h1>
      <!-- router-link  router-view 测试 -->
      <router-link to="/myself">111</router-link>
      <router-link to="/loading/22">111</router-link>
      <RouterView>
      </RouterView>
      <p>
        <router-link to="/zhuce/1">按钮1</router-link>
        <router-link to="/loading/6?q=xue">按钮2</router-link>
      </p>
      <!-- 带name的router-view -->
      <router-view></router-view>
      <router-view name="myself"></router-view>

      <!-- 简易切换页面绘制 -->
      <p>
        <router-link to="/zhuce/1">Go to Home</router-link>
        <router-link to="/loading/1">Go to About</router-link>
        <router-link to="/myself/4/zhuce">123</router-link>
        <router-link to="/loading/myself">去我的</router-link>
        <router-link to="/loading/zhuce">去注册</router-link>
      </p>
      <router-view></router-view>
      <button @click="aaa()">请注册{{ id }}</button>
    </div>
    <!-- 随机数列表添加排序删除测试 -->
    <button @click="add()">添加</button>
    <button @click="sc()">删减</button>
    <button @click="items.sort(()=>Math.random()-0.5)">排序</button>
    <TransitionGroup name="list" tag="ul">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </TransitionGroup>
    <TransitionGroup name="list1">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </TransitionGroup>
    <button @click="show = !show">Toggle</button>
    <Transition name="test">
      <p v-if="show">hello</p>
    </Transition>
    <button @click="show1 = !show1">Toggle2</button>
    <Transition name="bounce">
      <p v-if="show1" style="text-align: center;">Hello here is some bouncy text!</p>
    </Transition>
    <button @click="show2 = !show2">Toggle2</button>
    <Transition
        name="custom-classes"
        enter-active-class="animate__animated animate__tada"
        leave-active-class="animate__animated animate__bounceOutRight"
    >
      <p v-if="show2">hello</p>
    </Transition>
    <Transition :duration="3000" name="nested" appear>
      <div v-if="show" class="outer">
        <div class="inner">Hello</div>
      </div>
    </Transition>
    <!-- 简单页面测试 -->
    <div :style="{width:'30px',height:'30px',background:'red',fontSize:'180px'}">
      <p>好烦哦</p>
    </div>
    <div>{{ obj.nested.count }}</div>
    <input v-focus:abb.once/>
    <button @click="mutateDeeply">{{ obj.nested.count }}</button>
    <button @click="state.count++">{{ state.count }}</button>
    <input v-model="ttf"/>
    <!-- 组件引入测试测试 -->
    <zhuce/>
    <zhuce v-slot="{text,count}">{{ text }} {{ count }}</zhuce>
    <zhuce>
      <template #header="headerProps">{{ headerProps }}</template>

      <template #default="defaultProps">{{ defaultProps }}</template>

      <template #footer="footerProp">{{ footerProp }}</template>
    </zhuce>
    <zhuce>
      <template #[test]>
        <span>Click me!{{ count }}</span>
      </template>
      <template #input>
        <loading/>
      </template>
      <div>刘懿萱</div>
    </zhuce>
    <zhuce ni-hao="wo" class="chuan" @click="onClick"/>
    {{ count }}
    <div :style="{ fontSize: postFontSize + 'em' }">
      <zhuce
          v-for="(post,index) in posts"
          :key="post.id"
          :propA="index"
          :aaaa="post.title"
          :propB="post.b"
          :propC="post.c"
          :propD="post.d"
          :propE="post.e"
          :propF="post.f"
          :propG="post.g"
          @enlarge-text="(n)=>postFontSize += n"
          @click.once="postFontSize += 1"
      />
    </div>
    <zhuce v-model="test"/>
    {{ test }}
    <div value="test">ceshi</div>
    <div :value="test">ceshi2</div>
  </div>

  <!-- 普通html标签学习 -->
  <p>
    Ask a yes/no question:
    <input v-model="question" :disabled="loading"/>
  </p>
  <p>{{ answer }}</p>
  <input :ref="(loading) => {true}">
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>
  <div>
    <button @click="mutateDeeply">Count is: {{ this.obj.nested }}</button>
  </div>
  <div>Message: {{ msg }}</div>
  <div>num={{ num + 1 }}</div>
  <div><p>Using text interpolation: {{ rawHtml }}</p></div>
  <div><p>Using text interpolation:</p></div>
  <span v-html="rawHtml"></span>
  <div :id="ttt.dynamicId" disabled>nihao</div>
  <button :disabled="bool">Button</button>
  <div v-bind="ttt">nihao2</div>
  <div :id="`list-${ttt.id}`">tried</div>
  <div>{{ fullName }}</div>
  <template v-if="ok">
    <div v-show="bet">
      <button @click="increment">change</button>
    </div>
    <div v-if="ex">你存在我深深地脑海里</div>
  </template>
  <template v-for="person of item" :key="person.age">
    <li>
      {{ person }},{{ person.age }}
    </li>
  </template>
  <button @click="person">test</button>
  <button @click="greet">Greet</button>
  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>
  <button @click.stop="warn($event)">
    Submit
  </button>
  <input @keyup.enter="submit"/>
  <input @keyup.page-down="onPageDown"/>
  <input v-model="phone">
  <input v-model="password">
  <p>Message is: {{ message }}</p>
  <input v-model.trim="message" placeholder="edit me"/>
  <label> 昵称：</label>
  <input id="nickname">
  <input type="checkbox" id="hhh" v-model="checked"/>
  <label for="hhh">{{ checked }}</label>
  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <div>Selected: {{ selected }}</div>

  <input type="radio" v-model="pick" :value="first"/>
  <input type="radio" v-model="pick" :value="second"/>

  <select v-model="selected">
    <option :value="{ number: 123 }">123</option>
  </select>

  <div>
    <input type="text">
    <input type="password">
    <input type="radio" name="sex">
    <input type="radio" name="sex">
    <input type="checkbox">
    <textarea></textarea>
    <select>
      <option>男</option>
      <option>女</option>
    </select>
  </div>
</template>

<script>
import zhuce from "@/views/login/zhuce.vue";
import loading from "@/views/login/loading.vue";

export default {
  components: {
    zhuce,
    loading
  },
  directives: {
    // 在模板中启用 v-focus
    focus
  },
  data() {
    return {
      //
      show: true,
      show1: true,
      show2: true,
      items: [1, 2, 3, 4, 5],
      count: 0,
      //
      Component: "myself",
      //
      baz: "hello",
      //
      test: "button",
      posts: [
        {
          id: 1,
          title: "My journey with Vue",
          b: 1,
          c: "'a'",
          d: undefined,
          e: {
            a: "姓名"
          },
          f: "success",
          g: () => {
            console.log(1);
          }
        },
        {
          id: 2,
          title: "Blogging with Vue",
          b: "b",
          c: "'b'",
          d: 300,
          e: {
            b: "性别"
          },
          f: "warning",
          g: () => {
            console.log(2);
          }
        },
        {
          id: 3,
          title: "Why Vue is so fun",
          b: "c",
          c: "'c'",
          d: 400,
          e: {
            c: "职业"
          },
          f: "danger",
          g: () => {
            console.log(3);
          }
        }
      ],
      postFontSize: 1,
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
      loading: false,
      list: [1, 2, 3],
      ex: true,
      ok: false,
      bet: false,
      item: [{name: "lili", age: 18, sex: "girl"},
        {name: "yangwei", age: 50, sex: "boy"}],
      name: 'Vue.js',
      id: "",
      phone: "123",
      password: "",
      message: "",
      checked: "",
      selected: '',
      options: [
        {text: 'One', value: 'A'},
        {text: 'Two', value: 'B'},
        {text: 'Three', value: 'C'}
      ],
      pick: "",
      first: "first",
      second: "second",
      arr: [3, 1, 2, 4, 5, 6, 7, 8, 9],
      num: 1,
      msg: "niao",
      rawHtml: '<div style="color: red">This should be red.</div>',
      bool: true,
      ttt: {
        dynamicId: "name",
        id: "name"
      },
      obj: {
        nested: {count: 0},
        arr: ['foo', 'bar']
      },
      firstName: 'John',
      lastName: 'Doe',
      //
      ttf: "3月24日",
      //
    };
  },
  computed: {
    // 测试计算属性，功能是从url中获取一个key为id的值
    test() {
      return this.$route.params.id;
    },
    //
    countPlusOne() {
      this.count = 190;
      return this.count + 1;
    },
    // 计算属性重复留一个
    // countPlusOne: {
    //   get(){
    //     return this.count + 1
    //   },
    //   set(){
    //     alert("不知道计算属性不能改吗")
    //   }
    // },
    // 测试计算属性的get和set方法，获取和赋值时的自定义
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName
      },
      set(newValue) {
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  },
  methods: {
    // 一个跳转到zhuce路径的方法
    aaa() {
      this.$router.push({path: "/zhuce", hash: "#team"});
    },
    //
    TGrandom(min, max) {
      let random = Math.random() * (max - min + 1) + min;
      let randomNum = Math.floor(random);
      return randomNum;
    },
    sc() {
      let r1 = this.TGrandom(0, this.items.length - 1);
      this.items.splice(r1, 1);
    },
    add() {
      let r2 = this.TGrandom(0, this.items.length - 1);
      this.items.splice(r2, 0, this.count++);
    },
    //
    onClick() {
      this.count++;
    },
    //
    async getAnswer() {
      this.loading = true
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https:yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      } finally {
        this.loading = false
      }
    },
    //
    person() {
      this.item = this.item.filter((person) => person.name.match(/lili/))
      console.log(this.item)
    },
    greet(event) {
      console.log(this.phone)
      console.log(this.password)
      alert(`Hello ${this.name}!`)
      if (event) {
        console.log(event)
        alert(event.target.tagName)
      }
    },
    say(message) {
      alert(message)
    },
    warn(event) {
      if (event) {
        event.preventDefault()
      }
      alert('Form cannot be submitted yet.')
    },
    //
    arrayChange() {
      this.arr.push(3)  // 从后插入一个值
      this.arr.pop()    // 从最后抛出一个值
      this.arr.shift()  // 从最前方抛出一个值
      this.arr.unshift(1) // 从前插入一个值
      this.arr.splice(2, 3, 5, 1000) // 从x处开始删除y个元素后添加a,b,c,d到x的位置
      this.arr.sort() // 正序排序
      this.arr.reverse() // 数组翻转
      console.log(this.arr)
    },
    //
    increment() {
      this.countPlusOne = 5;
      for (let i = 0; i < 10; i++) {
        alert("nihao")
      }
    },
    // 方法重复留一个
    // increment() {
    //   this.count++
    // },
    mutateDeeply() {
      this.obj.nested.count++
      this.obj.arr.push('baz')
      console.log(this.obj.arr)
    }
  },
  watch: {
    // 每当 question 改变时，这个函数就会执行
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    }
  },
  mounted() {
    //
    this.count = this.items.length + 1;
    //
    console.log(`The initial count is ${this.count}.`)
    console.log(this.$refs.true)
    console.log(this.posts);
  },
};
</script>

<style scoped>
#name {
  color: red;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>