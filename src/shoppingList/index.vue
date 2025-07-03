<script>
import {
    ref
} from 'vue';
import {
    ElMessage
} from 'element-plus'

export default {
    data() {
        return {
            goods: [{
                id: 1,
                title: '丫丫',
                name: '袜子',
                url: "https://inews.gtimg.com/om_bt/OFSSocYsCaklSLimIwHp4cm30Ae4idNRrx0DIR1yYgeXAAA/641",
                price: 20,
                inventory: 20
            }, {
                id: 2,
                title: '晨光文具',
                name: '圆珠笔',
                url: "https://inews.gtimg.com/om_bt/OFSSocYsCaklSLimIwHp4cm30Ae4idNRrx0DIR1yYgeXAAA/641",
                price: 5,
                inventory: 5
            }, {
                id: 3,
                title: '七棵树',
                name: '显小内衣',
                url: "https://inews.gtimg.com/om_bt/OFSSocYsCaklSLimIwHp4cm30Ae4idNRrx0DIR1yYgeXAAA/641",
                price: 150,
                inventory: 6
            }, {
                id: 4,
                title: '胖小姐服饰',
                name: '法式裙子',
                url: "https://inews.gtimg.com/om_bt/OFSSocYsCaklSLimIwHp4cm30Ae4idNRrx0DIR1yYgeXAAA/641",
                price: 80,
                inventory: 3
            }, {
                id: 5,
                title: '爱慕',
                name: '超可爱睡衣',
                url: "https://inews.gtimg.com/om_bt/OFSSocYsCaklSLimIwHp4cm30Ae4idNRrx0DIR1yYgeXAAA/641",
                price: 99,
                inventory: 1
            }, {
                id: 6,
                title: '拼酷',
                name: '液晶电视模型',
                url: "https://inews.gtimg.com/om_bt/OFSSocYsCaklSLimIwHp4cm30Ae4idNRrx0DIR1yYgeXAAA/641",
                price: 20,
                inventory: 10
            }, ]
        }
    },
    methods: {
        goShoppingCart() {
            this.$router.push('/shoppingCart')
        },
        goodsAdd(item) {
            this.$store.commit('setShoppingCartData', item)
            ElMessage({
                message: '添加成功',
                type: 'success',
            })

        }
    },
    mounted() {}
}
</script>
<template>
<div>

    <el-button @click="goShoppingCart()" style="float: right;">购物车</el-button>
    <el-row>
        <el-col :span="6" :key="index" v-for="(item,index) in goods">
            <el-card style="height: 400px">
                <img :src="item.url" alt="图片加载失败" width="240px" height="240px" style="display:inline-block;" />
                <template #footer>
                    <div>{{item.title +' | '+ item.name}}</div>
                    <span style="display:inline-block;margin-top: 20px;">￥{{item.price}}</span>

                    <el-button @click="goodsAdd(item)" style="float: right;" text>
                        <el-icon :size="20">
                            <ShoppingCart />
                        </el-icon>
                    </el-button>
                </template>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>

<style scoped>
.el-row {
    padding: 30px;
}

.el-col {
    padding: 20px;
}
</style>
