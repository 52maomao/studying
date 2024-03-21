<script>
import zhuce from "./zhuce.vue";

export default {
  components: {
    zhuce
  },
  data() {
    return {
      count:1,
      // test: "123"
      // posts: [
      //   {
      //     id: 1,
      //     title: "My journey with Vue",
      //     b: 1,
      //     c: "'a'",
      //     d: undefined,
      //     e: {
      //       a: "姓名"
      //     },
      //     f: "success",
      //     g: () => {
      //       console.log(1);
      //     }
      //   },
      //   {
      //     id: 2,
      //     title: "Blogging with Vue",
      //     b: "b",
      //     c: "'b'",
      //     d: 300,
      //     e: {
      //       b: "性别"
      //     },
      //     f: "warning",
      //     g: () => {
      //       console.log(2);
      //     }
      //   },
      //   {
      //     id: 3,
      //     title: "Why Vue is so fun",
      //     b: "c",
      //     c: "'c'",
      //     d: 400,
      //     e: {
      //       c: "职业"
      //     },
      //     f: "danger",
      //     g: () => {
      //       console.log(3);
      //     }
      //   }
      // ],
      // postFontSize: 1,
      // question: '',
      // answer: 'Questions usually contain a question mark. ;-)',
      // loading: false,
      // list: [1, 2, 3],
      // count: 1,
      // ex:true,
      // ok:false,
      // bet:false,
      // item:[{name:"lili",age:18,sex:"girl"},
      //   {name:"yangwei",age:50,sex:"boy"}],
      // name: 'Vue.js',
      // id:"",
      // phone:"123",
      // password:"",
      // message:"",
      // checked:"",
      // selected: '',
      // options: [
      //   { text: 'One', value: 'A' },
      //   { text: 'Two', value: 'B' },
      //   { text: 'Three', value: 'C' }
      // ],
      // pick:"",
      // first:"first",
      // second:"second",
      // arr:[3,1,2,4,5,6,7,8,9],
      // count: 0,
      // num:1,
      // msg:"niao",
      // rawHtml:'<div style="color: red">This should be red.</div>',
      // bool:true,
      // ttt:{
      //   dynamicId:"name",
      //   id:"name"
      // },
      // obj: {
      //   nested: { count: 0 },
      //   arr: ['foo', 'bar']
      // },
      // firstName: 'John',
      // lastName: 'Doe'
    };
  },
  methods:{
    onClick(){
      this.count++;
    },
  },
  //   watch: {
  //   // 每当 question 改变时，这个函数就会执行
  //   question(newQuestion, oldQuestion) {
  //     if (newQuestion.includes('?')) {
  //       this.getAnswer()
  //     }
  //   }
  // },
  // methods: {
  //   async getAnswer() {
  //     this.loading = true
  //     this.answer = 'Thinking...'
  //     try {
  //       const res = await fetch('https://yesno.wtf/api')
  //       this.answer = (await res.json()).answer
  //     } catch (error) {
  //       this.answer = 'Error! Could not reach the API. ' + error
  //     } finally {
  //       this.loading = false
  //     }
  //   }
  // },
  // methods:{
  //   // person(){
  //   //   this.item = this.item.filter((person) => person.name.match(/lili/))
  //   //   console.log(this.item)
  //   // },
  //   // greet(event) {
  //   //   console.log(this.phone)
  //   //   console.log(this.password)
  //     // alert(`Hello ${this.name}!`)
  //     // if (event) {
  //     //   console.log(event)
  //     //   alert(event.target.tagName)
  //     // }
  //   },
  // say(message) {
  //   alert(message)
  // },
  // warn(event) {
  //   if (event) {
  //     event.preventDefault()
  //   }
  //   alert('Form cannot be submitted yet.')
  // },
  // },
  // methods: {
  //   arrayChange(){
  //     // this.arr.push(3) // 从后插入一个值
  //     // this.arr.pop()   // 从最后抛出一个值
  //     // this.arr.shift() // 从最前方抛出一个值
  //     // this.arr.unshift(1) // 从前插入一个值
  //     // this.arr.splice(2,3,5,1000) // 从x处开始删除y个元素后添加a,b,c,d到x的位置
  //     // this.arr.sort() // 正序排序
  //     // this.arr.reverse() // 数组翻转
  //     console.log(this.arr)
  //   }
  // },
  //   increment(){
  //     this.countPlusOne = 5;
  //     for(i=0;i<10;i++){
  //       alert("nihao")
  //     }
  //   },
  //   increment() {
  //     this.count++
  //   },
  //   mutateDeeply() {
  //     this.obj.nested.count++
  //     this.obj.arr.push('baz')
  //     console.log(this.obj.arr)
  //   }
  // },
  // computed: {
  //   countPlusOne(){
  //     this.count = 190;
  //     return this.count + 1;
  // }
  // countPlusOne: {
  //   get(){
  //     return this.count + 1
  //   },
  //   set(){
  //     alert("不知道计算属性不能改吗")
  //   }
  // }
  // fullName: {
  //   get() {
  //     return this.firstName + ' ' + this.lastName
  //   },
  //   set(newValue) {
  //     [this.firstName, this.lastName] = newValue.split(' ')
  //   }
  // }
  // },
  mounted() {
    // console.log(`The initial count is ${this.count}.`)
    // console.log(this.$refs.true)
    console.log(this.posts);
  }
};
</script>

<template>
  <div>
    <p>组件导入</p>
    <zhuce ni-hao="wo" class="chuan" @click="onClick"/>{{count}}
    <!--   <div :style="{ fontSize: postFontSize + 'em' }">
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
    <zhuce v-model="test"/>{{test}}
    <div value="test">ceshi</div>
    <div :value="test">ceshi2</div>-->
  </div>

  <!--<p>
    Ask a yes/no question:
    <input v-model="question" :disabled="loading" />
  </p>
  <p>{{ answer }}</p>
  <input :ref="(loading) => {true}">
   <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>
  <div><button @click="mutateDeeply">Count is: {{this.obj.nested}}</button></div>
  <div>Message: {{ msg }}</div> 
  <div>num={{num+1}}</div>
  <div><p>Using text interpolation: {{ rawHtml }}</p></div>
  <div><p>Using text interpolation:</p></div>
  <span v-html="rawHtml"></span>
  <div :id="ttt.dynamicId" disabled>nihao</div>
  <button :disabled="bool">Button</button>
  <div v-bind="ttt">nihao2</div>
  <div :id="`list-${ttt.id}`">tried</div>
  <div>{{fullName}}</div>
  <template v-if="ok">
  <div v-show="bet"><button @click="increment">change</button></div>
  <div v-if="ex">你存在我深深地脑海里</div>
  </template>
  <template v-for="person of item" :key="person.age">
  <li>
  {{person}},{{person.age}}
  </li>
  </template>
  <button @click="person">test</button>
  <button @click="greet">Greet</button>
  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>
  <button @click.stop="warn($event)">
  Submit
  </button>
  <input @keyup.enter="submit" />
  <input @keyup.page-down="onPageDown"/>
  <input v-model="phone">
  <input v-model="password">
  <p>Message is: {{ message }}</p>
  <input v-model.trim="message" placeholder="edit me" />
  <label> 昵称：</label>
  <input id="nickname">
  <input type="checkbox" id="hhh" v-model="checked" />
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
  </div>-->
</template>
<style>
#name {
  color: red;
}
</style>