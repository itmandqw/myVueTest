<template>
  <div class="hello">
    <select v-model="language" @change="changeLang">
      <option value="zh">简体中文</option>
      <option value="en">English</option>
    </select>
    <p>{{ $t('m.myMusic') }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyTest',
  data () {
    return {
      language: 'zh'
    }
  },
  methods: {
    changeLang () {
      console.log(this.language)
      if (this.language === 'zh') {
        this.language = 'zh'
        this.$i18n.locale = this.language // 中文
        console.log('当前语言', this.$i18n.locale)
      } else {
        this.language = 'en'
        this.$i18n.locale = this.language // 外文
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
