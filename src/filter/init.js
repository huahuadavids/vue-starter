import filters from "./index"
import Vue from "vue"

Object.keys(filters).forEach(function(filterName){
  Vue.filter(filterName,filters[filterName])
});


