import Vue from "vue"
import coms from "./index"
Object.keys(coms).forEach( componentName  =>{
  Vue.component(componentName,coms[componentName])
})
