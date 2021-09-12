import css from './style.css'
import twemoji from 'twemoji'

const block = function (el, config) {
  const child = document.createElement('div')
  child.classList.add(css.emoji)

  child.innerHTML = config.emoji
  twemoji.parse(child, { folder: 'svg', ext: '.svg' })

  el.appendChild(child)
}

export default block

block.install = Presenta => {
  Presenta.addBlock('emoji', block)
}

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(block)
}
