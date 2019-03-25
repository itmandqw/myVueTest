<template>
 <div class="detail">
    <!-- <h1>{{ message }}</h1> -->
    <!-- <span>{{ childValue }}</span> -->
    <button @click="childClick">点击触发</button>
 </div>
</template>

<script>
export default {
  name: 'proDetail',
  data () {
    return {
      childValue1: '我是要传递给父组件的子数据1',
      childValue2: '我是要传递给父组件的子数据2',
      childValue3: '我是要传递给父组件的子数据3'
    }
  },
  props: {
    message: String
  },
  methods: {
    childClick () {
      this.$emit('sendValueToParent', this.childValue1, this.childValue2, this.childValue3)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail{
  background: pink;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}
h1, h2 {
  font-weight: normal;
}
</style>
