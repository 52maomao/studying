<template>
  <AsyncComp/>
</template>

<script setup>
import {computed} from "vue";
import {defineAsyncComponent} from 'vue'
import {ref, shallowRef, reactive} from "vue";

// ================================== value define ==================================
const focus = {
  mounted: (el, binding) => {
    el.focus();
    console.log(binding.modifiers);
  }
};

const proxy = reactive({})
const raw = {}
const count = ref(0);
const state = reactive({
  count
});
const test = shallowRef({count: 0});
const AsyncComp = defineAsyncComponent(() =>
    import('./zhuce.vue')
)
const otherCount = ref(6);
const obj = ref({
  nested: {count: 0},
  arr: ["foo", "bar"]
});
const books = reactive([ref("Vue 3 Guide")]);
const map = reactive(new Map([["count", ref(0)]]));
const bb = [ref("Vue 3 Guide")];
const cc = ref(9527);
const aa = reactive([ref("Vue 3 Guide")]);

// ================================== function define ==================================
function mutateDeeply() {
  obj.value.nested.count++;
}

function log() {
  obj.value.arr.push("baz");
}

function num() {
  console.log(test._value.count++);
}

// ================================== run data ==================================
console.log(count);
console.log(count.value);
count.value++;
console.log(count.value);
log();
console.log(obj.value.arr);
console.log(test._value)
console.log(raw)
console.log(proxy)
console.log(proxy === raw)
console.log(proxy == raw)
proxy.nested = raw
console.log(proxy.nested === raw)
console.log(proxy.nested == raw)
console.log(state.count);
state.count = 2;
console.log(count.value);
state.count = otherCount;
console.log(state.count);
console.log(count.value);
console.log(books[0].value);
console.log(map.get("count").value);
console.log(aa[0]);
</script>

<style scoped>

</style>