import vue from 'vue'
vue.filter('money', (v) => {
  return '¥' + v
})
