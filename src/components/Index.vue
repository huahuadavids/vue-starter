<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div v-show="show1">hahahahahah</div>
    <div v-if="show2">hahahahahah</div>
    <div myDir=""></div>
    <div>
      {{moneys | money}}
    </div>
    <router-link to="/hua">Go to hua</router-link>
    <!--
    <router-link
      :to="{ name: 'cash', query: { type: item.currency }}" >
      {{$t('withdrawal')}}
    </router-link>
    -->
  </div>
</template>
<script>
const data = Object.freeze(require( "../data/list")) // 提升性能
console.log(data)
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show1: 0,
      show2: 1,
      text: "hello huahua",
      money: 222
    }
  },
  computed: {
      moneys(){
        return this.money * 0.5;
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
