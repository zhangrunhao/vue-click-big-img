// 注册一个自定义指令 'v-focus'
Vue.directive('focus', {
  inserted: function(el) { // 当被绑定的元素插入到DOM中时...
    el.focus()
  }
})

Vue.directive('big-img', {
  inserted(el, binding) {
    el.addEventListener('click', function () {
      console.log(111)
    }, false)
  }
})

new Vue({
  el: '#app'
})