<template>
  <canvas id="captchaCanvas" @click="generateCaptcha" :style="{ width, height }"></canvas>
</template>

<script>
export default {
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
    click() {
      this.$store.commit('increment', 10)
    },
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
  },
  mounted() {
    this.generateCaptcha()
  }
}
</script>

<style scoped>
#captchaCanvas {
  margin-bottom: 10px;
  display: block;
  user-select: none;
}
</style>