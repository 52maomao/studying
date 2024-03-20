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
    //   props: {
    //     mValue:String,
    // aaaa: String,
    // propA: Number,
    // propB: [String, Number], // 数据类型为数组内多选
    // propC: {
    //   type: String,
    // },
    // propD: {
    //   type: Number,
    //   default: function() {
    //     return 100;
    //   }
    // },
    // propE: {
    //   type: Object,
    //   default(rawProps) {
    //     return {
    //       message: "hello"
    //     };
    //   }
    // },
    // propF: {
    //   validator(value, props) {
    //     return ["success", "warning", "danger"].includes(value);
    //   }
    // },
    // propG: {
    //   type: Function,
    //   default() {
    //     return "Default function";
    //   }
    // }
    //   },
    //   props: ["value"],
    props: {
        modelValue: String,
        modelModifiers: {
            default: () => ({})
        }
    },
    emits: ["update:modelValue"],
    methods: {
        emitValue(e) {
            let value = e.target.value
            if (this.modelModifiers.chiMianTiao) {
                value = value.charAt(0).toUpperCase() + value.slice(1)
            }
            this.$emit('update:modelValue', value)
        }
    },
    created() {
        console.log(this.modelModifiers)
    }
};
</script>
<template>
<div>
    <!--    <button @click="$emit('enlarge-text',1)">Enlarge text</button>
    <button @click="submit">按钮</button>
    <slot />-->
    <input :value="modelValue" @input="emitValue" />
</div>
</template>
