<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>项目包括</h2>
    <ul>
      <li>
        <router-link to="/test">养老金</router-link>
      </li>
      <li>
        <router-link to="/list">父子组件传值</router-link>
      </li>
      <li>
        <router-link to="/solt">solt方法</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎使用工行App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
