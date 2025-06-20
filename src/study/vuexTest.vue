<script>
import {
    mapState
} from 'vuex'

export default {
    computed: {
        count() {
            return this.$store.state.count
        }
    },
    data() {
        return {}
    },
    computed: {
        todo() {
            return this.$store.getters.doneTodosCount
        },
        ...mapState({
            count: state => state.a.count
        })
    },
    methods: {
        click() {
            this.$store.commit('increment', 10)
        },
    },
    mounted() {}
}
</script>
<template>
<div>
    <button @click="click">加</button>
    <div>{{ count }}</div>
    <div>{{ todo }}</div>
</div>
</template>
