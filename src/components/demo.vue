<template>
  <div id="demo">
      demo <br>
      {{myText}} <br>
      <button @click="go" >vuex</button>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'demo',
  props: {
    myText: String 
  },
  methods: {
    ...mapActions(['ADD']),
    go(){
      this.ADD() 
    }
  }
}
</script>
