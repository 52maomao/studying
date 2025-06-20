<template>
  <div>
    <el-checkbox-group>
      <div v-for="item in goods" :key="item.id" style="margin-top: 10px;">
        <el-checkbox v-model="item.id" label="Option 1" size="large"></el-checkbox>
        <el-card shadow="never">
          <el-row>
            <h3>{{ item.title }}</h3>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4">
              <el-image style="width: 100px; height: 100px" :src="item.url" :fit="fit"/>
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
              <p>￥{{ item.price * item.number }}</p>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </el-checkbox-group>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
import {
  ref
} from 'vue'

export default {
  data() {
    return {
      goods: ref([{
        id: 1,
        title: '百合小店',
        name: '一束百合',
        shadow: 'hover',
        url: "https://inews.gtimg.com/om_bt/OFSSocYsCaklSLimIwHp4cm30Ae4idNRrx0DIR1yYgeXAAA/641",
        price: 20,
        number: 2,
      },
        {
          id: 2,
          title: '玫瑰小店',
          name: '一束玫瑰',
          shadow: 'hover',
          url: '',
          price: 20,
          number: 2,
        },
        {
          id: 3,
          title: '薰衣草小店',
          name: '一束薰衣草',
          shadow: 'hover',
          url: '',
          price: 20,
          number: 2,
        }
      ]),
      selectedGoods: []
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
  methods: {

  },
}
</script>

<style scoped>

</style>
