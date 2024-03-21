<script>
export default {
  inheritAttrs: false,
  data() {
      return {};
  },
  methods() {},
  created(){
      console.log(this.$attrs)
  }
};
</script>
<template>
  <div>
    <button>登录</button>
    <button v-bind="$attrs">注册{{ $attrs }}</button>
  </div>
</template>