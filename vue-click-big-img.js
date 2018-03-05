// 标志位防止重复点击
var flag = true

// 生成DOM文档字符串
var createDom = function (imgSrc) {
  flag = false
  let divDom = window.document.createElement('div')
  divDom.style = "position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);"

  let imgDom = window.document.createElement('img')
  imgDom.src = imgSrc
  imgDom.addEventListener('click', function () {
    divDom.remove()
    flag = true
  }, false)

  divDom.appendChild(imgDom)
  window.document.body.appendChild(divDom)
}

;(function () {
  window.VueClickBigImg = {}
  VueClickBigImg.install = function (Vue, options) {
    Vue.directive('big-img', { // 自定义指令, 直接挂在Vue
      inserted(el, binding) {
        el.addEventListener('click', function () {
          if (flag) {
            createDom(el.src)
          }
        }, false)
      }
    })
  }
})()