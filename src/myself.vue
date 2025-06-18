<script>
import {
    mapState
} from 'vuex'
import {
    ref
} from 'vue'

export default {
    // props: ['id'],
    // computed: {
    //     count() {
    //         return this.$store.state.count
    //     }
    // },
    data() {
        return {
            goods: ref([{
                    id: 1,
                    title: '百合小店',
                    name: '一束百合',
                    shadow: 'hover',
                    url: "https://inews.gtimg.com/om_bt/OFSSocYsCaklSLimIwHp4cm30Ae4idNRrx0DIR1yYgeXAAA/641",
                    price:20,
                    number:2,
                },
                {
                    id: 2,
                    title: '玫瑰小店',
                    name: '一束玫瑰',
                    shadow: 'hover',
                    url: '',
                    price:20,
                    number:2,
                },
                {
                    id: 3,
                    title: '薰衣草小店',
                    name: '一束薰衣草',
                    shadow: 'hover',
                    url: '',
                    price:20,
                    number:2,
                }
            ])
            // phone: '',
            // countdown: 0,
            // code: '',
        }
    },
    computed: {
        todo() {
            return this.$store.getters.doneTodosCount
        },
        ...mapState({
            count: state => state.a.count
        })
    },
    name: 'CaptchaCanvas',
    props: {
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '100%'
        },
        number: {
            type: Number,
            default: 4
        },
        night: {
            type: Boolean,
            default: false
        }
    },
    emits: ['getValue'],
    watch: {
        night() {
            this.generateCaptcha()
        }
    },
    methods: {
        // click() {
        //     this.$store.commit('increment', 10)
        // },
        generateCaptcha() {
            const canvas = document.getElementById('captchaCanvas')
            const ctx = canvas.getContext('2d')

            // 清空画布
            canvas.width = canvas.width

            const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
            let captchaText = ''

            // 背景色
            ctx.fillStyle = this.night ? '#2d2c2c' : '#f9f9f9'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // 噪点
            for (let i = 0; i < 200; i++) {
                ctx.fillStyle = this.getRandomColor(0, 300)
                ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1)
            }

            // 干扰线
            for (let i = 0; i < 9; i++) {
                ctx.strokeStyle = this.getRandomColor(150, 255)
                ctx.beginPath()
                ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)
                ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height)
                ctx.stroke()
            }

            // 验证码字符
            for (let i = 0; i < this.number; i++) {
                const randomIndex = Math.floor(Math.random() * chars.length)
                const char = chars[randomIndex]
                captchaText += char
                this.drawChar(char, 1 + i * canvas.width / this.number, (canvas.height / 2) + 20, 70, this.getRandomColor(10, 50))
            }

            // 向父组件传值
            this.$emit('getValue', captchaText)
        },

        drawChar(char, x, y, fontSize, fillStyle) {
            const ctx = document.getElementById('captchaCanvas').getContext('2d')
            ctx.font = fontSize + 'px Arial'
            ctx.fillStyle = fillStyle
            ctx.fillText(char, x, y)
        },

        getRandomColor(min, max) {
            const r = Math.floor(Math.random() * 256)
            const g = Math.floor(Math.random() * 256)
            const b = Math.floor(Math.random() * 256)
            return `rgb(${r},${g},${b})`
        },
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
    // mounted() {this.generateCaptcha()}
}
</script>
<template>
<div>
    <!-- <button @click="click">加</button>
    <div>我的{{id}}</div>
    <div>{{ count }}</div>
    <div>{{ todo }}</div> -->
    <!-- <input v-model="phone" placeholder="手机号" />
    <button :disabled="countdown > 0" @click="sendCode">
        {{ countdown > 0 ? `${countdown}s后重试` : '发送验证码' }}
    </button>
    <input v-model="code" placeholder="请输入验证码" />
    <button>提交</button> -->
    <!-- <canvas id="captchaCanvas" @click="generateCaptcha" :style="{ width, height }"></canvas> -->
    <!-- <el-row v-for="item in cards" :key="item.id" style="margin-top: 10px;">
        <el-card :shadow="item.shadow" @click="toggleShadow(item)">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
        </el-card>
    </el-row> -->

    <div v-for="item in goods" :key="item.id" style="margin-top: 10px;">
        <el-checkbox v-model="item.id" label="Option 1" size="large" />
        <el-card shadow="never">
            <el-row>
                <h3>{{ item.title }}</h3>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4">
                    <el-image style="width: 100px; height: 100px" :src="item.url" :fit="fit" />
                </el-col>
                <el-col :span="6">
                    <p>{{ item.name }}</p>
                </el-col>
                <el-col :span="4">
                    <p>￥{{ item.price }}</p>
                </el-col>
                <el-col :span="6">
                    <el-input-number v-model="item.number" :min="1" @change="handleChange"/>
                </el-col>
                <el-col :span="4">
                    <p>￥{{ item.price * item.number}}</p>
                </el-col>
            </el-row>
        </el-card>
    </div>
</div>
</template>

<style scoped>
#captchaCanvas {
    margin-bottom: 10px;
    display: block;
    user-select: none;
}
</style>
