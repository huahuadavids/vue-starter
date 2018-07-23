import directives from "./index"
import Vue from 'vue'

Object.keys(directives).forEach(function(directiveName){
  Vue.directive(directiveName,directives[directiveName])
})
