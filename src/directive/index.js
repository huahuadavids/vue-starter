import directives from "./directives"
import Vue from 'vue'

Object.keys(directives).forEach(function(directiveName){
  Vue.directive(directiveName,directives[directiveName])
})
