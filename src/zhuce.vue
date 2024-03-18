<script>
export default {
  data() {
    return {};
  },
  methods: {
    // zhuce(){
    //     console.log(this.count++)
    // }
  },
  props: {
    aaaa: String,
    propA: Number,
    propB: [String, Number], // 数据类型为数组内多选
    propC: {
      type: String,
      required: true
    },
    propD: {
      type: Number,
      default: function() {
        return 100;
      }
    },
    propE: {
      type: Object,
      default(rawProps) {
        return {
          message: "hello"
        };
      }
    },
    propF: {
      validator(value, props) {
        // The value must match one of these strings
        return ["success", "warning", "danger"].includes(value);
      }
    },
    propG: {
      type: Function,
      default() {
        return "Default function";
      }
    }
  },
  emits: ["enlarge-text", "click"],
  methods: {
    submit() {
      this.$emit("click");
    }
  }
};
</script>
<template>
  <div>
    <div>{{propA}}</div>
    <div>{{propC}}</div>
    <div>{{propD}}</div>
    <div>{{propE.message}}</div>
    <div>{{propF}}</div>
    <div @click="propG">往这点</div>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
    <button @click="submit">按钮</button>
    <slot />
  </div>
</template>
