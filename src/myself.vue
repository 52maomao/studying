<script>
import { ref } from 'vue'

export default {
    data() {
        return {
            cards: ref([{
                    id: 1,
                    title: '卡片1',
                    content: '一束百合',
                    shadow: 'hover',
                },
                {
                    id: 2,
                    title: '卡片2',
                    content: '一束玫瑰',
                    shadow: 'hover',
                },
                {
                    id: 3,
                    title: '卡片3',
                    content: '一束薰衣草',
                    shadow: 'hover',
                }
            ])
        }
    },
    methods: {
        toggleShadow(card) {
            for (let i = 0; i < this.cards.length; i++) {
                if (this.cards[i].id === card.id) {
                    this.cards[i].shadow = "always"
                } else {
                    this.cards[i].shadow = "hover"
                }
            }
        }
    },
    mounted() {}
}
</script>
<template>
<div>
    <el-row v-for="item in cards" :key="item.id" style="margin-top: 10px;">
        <el-card :shadow="item.shadow" @click="toggleShadow(item)">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
        </el-card>
    </el-row>
</div>
</template>

<style scoped>
</style>
