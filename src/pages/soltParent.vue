<template>
  <div class="father">
    <!-- <h3>这里是父组件</h3> -->
    <!--第一次使用：用flex展示数据-->
    <child>
      <template slot-scope="user">
        <div class="tmpl">
          <span v-for="(item,index) in user.data" :key="index">{{item}}</span>
        </div>
      </template>
    </child>

    <!--第二次使用：用列表展示数据-->
    <child>
      <template slot-scope="user">
        <ul>
          <li v-for="(item,index) in user.data" :key="index">{{item}}</li>
        </ul>
      </template>
    </child>

    <!--第三次使用：直接显示数据-->
    <child>
      <template slot-scope="user">{{user}}</template>
    </child>

    <!--第四次使用：不使用其提供的数据, 作用域插槽退变成匿名插槽-->
    <child>我就是模板</child>
  </div>
</template>

<script>
import slotChild from '@/pages/slotChild'

export default {
  name: 'soltParent',
  components: {
    'child': slotChild
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.father {
  background: #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  padding-bottom: 50px;
}
h1,
h2 {
  font-weight: normal;
}
</style>
