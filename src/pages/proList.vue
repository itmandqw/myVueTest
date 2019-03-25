<template>
  <div>
    <!-- <ul>
      <li v-for="(item,index) in productList" :key="index" @click="toDetail(item.title)">{{ item.title }}</li>
    </ul>-->
    <!-- <input v-model="parentMessage" type="text"> -->
    <span>{{ name1 }}</span>
    <span>{{ name2 }}</span>
    <h1>{{ vuexValue }}</h1>
    <pro-detail @sendValueToParent="getValueFromChildren"></pro-detail>
  </div>
</template>

<script>
import proDetail from '@/pages/proDetail'

export default {
  name: 'proList',
  data () {
    return {
      name1: '我是父组件原本的数据',
      name2: '我是父组件原本的数据',
      vuexValue: 'balabal'
      // parentMessage: "我是你爸爸传过来的数据"
      // productList: [
      //   {
      //     title: '60岁以上退休老人福利',
      //     content: 'balabblabblalbla'
      //   },
      //   {
      //     title: '70岁以上退休老人福利',
      //     content: 'balabblabblalbla'
      //   },
      //   {
      //     title: '80岁以上退休老人福利',
      //     content: 'balabblabblalbla'
      //   }
      // ]
    }
  },
  methods: {
    toDetail: function (e) {
      console.log(e)
    },
    getValueFromChildren: function (childValue1, childValue2, childValue3) {
      // childValue就是子组件传过来的值
      this.name1 = childValue1
      this.name2 = childValue2
      console.log('childValue3', childValue3)
      console.log(this)
    }
  },
  components: {
    proDetail
  }
  // mounted () {
  //   console.log('子组件的count', $store.state.count)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
input {
  width: 300px;
  height: 60px;
  font-size: 20px;
  border: none;
  border: 1px solid #ccc;
  padding-left: 20px;
}
</style>
