<template>
  <div class="child">
    <h3>这里是子组件</h3>
    <slot v-bind:data="data"></slot>
  </div>
</template>

<script>
export default {
  name: 'slotChild',
  data () {
    return {
      data: ['zhangsan', 'lisi', 'wanwu', 'zhaoliu', 'tianqi', 'xiaoba']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail {
  background: pink;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}
h1,
h2 {
  font-weight: normal;
}
</style>
