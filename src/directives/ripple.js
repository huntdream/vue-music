export default {
  inserted: el => {
    const rippleContainer = document.createElement('div')
    const ripple = document.createElement('span')
    rippleContainer.appendChild(ripple)
    rippleContainer.classList.add('ripple-container')
    ripple.classList.add('ripple')

    el.addEventListener('mousedown', e => {
      const { pageX, pageY } = e
      const { left, top } = el.getBoundingClientRect()
      const size = ripple.offsetWidth
      console.log(pageX, pageY, left, top, size)
      const [x, y] = [pageX - left - size / 2, pageY - top - size / 2]
      console.log(x, y)

      ripple.style.left = x + 'px'
      ripple.style.top = y + 'px'
      el.appendChild(rippleContainer)
      ripple.classList.add('rippling')
    })
    el.addEventListener('mouseup', () => {
      // el.removeChild(el.lastElementChild)
    })
  }
}
