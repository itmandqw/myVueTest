<template>
  <ul class="footer">
    <li v-for="(item,index) in menuList" :key="index" @click="toThis(item.page)" :class="{ active: item.page===activeItem }" >{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'commonFooter',
  data () {
    return {
      activeItem: 'index',
      menuList: [
        {
          name: '首页',
          page: 'index'
        },
        {
          name: '活动',
          page: 'act'
        },
        {
          name: '我的',
          page: 'my'
        }
      ]
    }
  },
  methods: {
    toThis: function (e) {
      this.activeItem = e
    }
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  width: 100%;
  padding: 0;
  margin: 0;
  height: 44px;
  line-height: 44px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #c7c0c2;
}
.footer li {
  flex: 1;
  text-align: center;
  list-style: none;
}
.footer li.active {
  background: #d6a3ab;
  color: #ad3e3e;
}
</style>
