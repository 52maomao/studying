<script>
export default {
  inject: {
    aaa: "message",
    bbb: "ttf",
    ccc: {
      from: "ttf1",
      default: () => ({ name:1+1})
    }
  },
  created() {
    console.log(this.aaa);
    console.log(this.bbb);
    console.log(this.ccc);
  },
  //   inheritAttrs: false,
  data() {
    return {};
  },
  methods() {}
  //   created() {
  //     console.log(this.$attrs);
  //   }
};
</script>
<template>
  <div>{{aaa}}{{bbb}}</div>
  <!--<div>
    awser
    <button>登录</button>
    <button v-bind="$attrs">注册{{ $attrs }}</button>
  </div>-->
</template>