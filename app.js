window.addEventListener('DOMContentLoaded', () => {

  let links = ['app', 'blog', 'shop', 'note', 'game', 'grave']
  let carousel = document.getElementById('carousel')
  carousel.innerText = links[0]

  let forward = document.getElementById('forwardArrow')
  let back = document.getElementById('backArrow')
  forward.addEventListener('click', () => {
    let rotate = links.shift()
    carousel.innerText = links[0]
    links.push(rotate)
  });

  back.addEventListener('click', () => {
    let rotate = links.pop()
    links.unshift(rotate)
    carousel.innerText = links[0]
  })
})
