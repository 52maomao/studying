<script>
import {
    ref
} from 'vue'

export default {
    data() {
        return {
            received: ref({}),
            totalchecked: ref(false),
            deleteList: ref([]),
            amount: ref(0),
            checkList: ref([]),
            goods: this.$store.state.a.shoppingCartData,
            // goods: ref([{
            //         id: 0,
            //         checked: false,
            //         title: '百合小店',
            //         name: '一束百合',
            //         shadow: 'hover',
            //         url: "https://inews.gtimg.com/om_bt/OFSSocYsCaklSLimIwHp4cm30Ae4idNRrx0DIR1yYgeXAAA/641",
            //         price: 20,
            //         number: 1,
            //         inventory: 2
            //     },
            //     {
            //         id: 1,
            //         checked: false,
            //         title: '玫瑰小店',
            //         name: '一束玫瑰',
            //         shadow: 'hover',
            //         url: '',
            //         price: 20,
            //         number: 2,
            //         inventory: 5
            //     },
            //     {
            //         id: 2,
            //         checked: false,
            //         title: '薰衣草小店',
            //         name: '一束薰衣草',
            //         shadow: 'hover',
            //         url: '',
            //         price: 30,
            //         number: 4,
            //         inventory: 5
            //     }
            // ])
        }
    },
    methods: {
        handleChange(item) {
            console.log(item)
            this.$store.commit('changeNum', item)
        },
        checkChange() {
            this.amount = 0
            this.checkList = this.goods.filter((item) => {
                return item.checked === true
            })
            for (let i = 0; i < this.checkList.length; i++) {
                this.amount += this.checkList[i].price * this.checkList[i].number
            }
        },
        checkDelete(index) {
            if (index >= 0) {
                this.$store.commit('deleteShoppingCartData', index)
                
                // this.goods = this.goods.filter((item) => {
                //     return item.id !== index
                // })
            } else {
                for(let i=0;i<this.checkList.length;i++){
                    this.$store.commit('deleteShoppingCartData', this.checkList[i].id)
                }
                // this.goods = this.goods.filter((item) => {
                //     return item.checked === false
                // })
            }
            this.goods = this.$store.state.a.shoppingCartData
        },
        totalCheckChange() {
            for (let i = 0; i < this.goods.length; i++) {
                if (this.totalchecked) {
                    this.goods[i].checked = true
                } else {
                    this.goods[i].checked = false
                }
            }
            this.checkChange()
        },
    },
    mounted() {}
}
</script>
<template>
<div>
    <el-row :gutter="24">
        <el-col :span="18">
            <h2><strong>全部商品</strong></h2>
            <el-checkbox v-model="totalchecked" label="全选" size="large" @change="totalCheckChange()" style="margin-right: 15px;" />
            <el-button type="" @click="checkDelete()">批量删除</el-button>
            <div v-for="item in goods" :key="item.id" style="margin-top: 10px;">
                <el-row>
                    <el-col :span="1">
                        <el-checkbox v-model="item.checked" size="large" @change="checkChange()" />
                    </el-col>
                    <el-col :span="23">
                        <el-card shadow="never">
                            <el-row>
                                <h3>{{ item.title }}</h3>
                            </el-row>
                            <el-row style="margin-top: 10px;">
                                <el-col :span="4">
                                    <el-image style="width: 100px; height: 100px" :src="item.url" />
                                </el-col>
                                <el-col :span="5">
                                    <p>{{ item.name }}</p>
                                </el-col>
                                <el-col :span="3">
                                    <p>￥{{ item.price }}</p>
                                </el-col>
                                <el-col :span="5">
                                    <el-input-number v-model="item.number" :min="1" :max='item.inventory' @change="handleChange(item)" />
                                </el-col>
                                <el-col :span="3">
                                    <p>￥{{ item.price * item.number}}</p>
                                </el-col>
                                <el-col :span="2">
                                    <el-button @click="checkDelete(item.id)">删除</el-button>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </el-col>
        <el-col :span="6">
            <el-card>
                <h2><strong>结算明细</strong></h2>
                <span>商品总价</span><span style="float: right;">{{ this.amount }}</span>

            </el-card>
        </el-col>
    </el-row>
</div>
</template>

<style scoped>
</style>
