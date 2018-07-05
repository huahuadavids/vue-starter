<template>
<div id="hua">
  {{text}}
  <div v-if="show">
  show
  </div>
  <div v-for="item in items" v-bind:key="item.text.length">
   {{ item.text }}
  </div>
  <button @click.stop="clicks">click</button>
  <demo :my-text="text"></demo>
  <div>
    {{11 | money}}
  </div>
</div>
</template>
<script>
import demo from './demo'
export default{
  name: 'hua',
  components: {
    demo
  },
  data () {
    return {
      text: 'data_haha',
      show: 1,
      items: [{
      "text" : 'one'
    }]
    }
  },
  methods:{
	  clicks(){
		  console.log('haha click')
    },
    go(){
      //this.ADD()
      // this.$router.replace({ path: '/login' })
    }
  },
  watch: {
  	text: (nv,ov)=>{  
  		console.log(ov)
  	}	
  },
  created(){
  	console.log(this)
  	console.log('create')
  },
  beforeCreate(){
  	console.log('beforeCreate')
  	console.log(this)
  },
  mounted(){
	 console.log('mounted')
	 this.$data.text = "api_huahua"
  },
  beforeMount(){
  	console.log('before--mount')
  },
  activated(){
	  console.log('激活')
	  this.$data.text = "api_huahua"
  }
}
</script>
