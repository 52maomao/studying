<script>
export default {
  props:['query','abc']
  // inject: {
  //     aaa: "message",
  //     bbb: "ttf",
  //     ccc: {
  //       from: "ttf1",
  //       default: () => ({ name:1+1})
  //     }
  //   },
  //   created() {
  //     console.log(this.aaa);
  //     console.log(this.bbb);
  //     console.log(this.ccc);
  //   },
  //   //   inheritAttrs: false,
  //   data() {
  //     return {};
  //   },
  //   methods() {}
  //   created() {
  //     console.log(this.$attrs);
  //   }
};
</script>
<template>
  <div>
    <div>aaabbb{{query}}</div>
    {{abc}}
    <!--<router-link to="/loading/myself">去我的</router-link>
    <router-link to="/loading/zhuce">去注册</router-link>
    <router-view></router-view>
    <router-view name="www"></router-view>-->
  </div>
  <!--<div>
    awser
    <button>登录</button>
    <button v-bind="$attrs">注册{{ $attrs }}</button>
  </div>-->
</template>