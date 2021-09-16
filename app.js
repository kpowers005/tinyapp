window.addEventListener('DOMContentLoaded', () => {

  const links = ['app', 'blog', 'shop', 'note', 'game', 'grave']
  const carousel = document.getElementById('carousel')
  const body = document.getElementById('body')
  const comingSoon = document.querySelector('.coming-soon')
  carousel.innerText = links[0]

  let forward = document.getElementById('forwardArrow')
  let back = document.getElementById('backArrow')

  const goDark = () => {
    carousel.style.color = 'black';
    body.style.backgroundColor = 'grey';
    body.style.color = 'white';
    forward.style.color = 'white'
    back.style.color = 'white'
    comingSoon.innerText = 'r.i.p.'
  }

  const goLight = () => {
    carousel.style.color = '#f03e56';
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    forward.style.color = 'black'
    back.style.color = 'black'
    comingSoon.innerText = 'coming soon'
  }

  forward.onclick = () => {
    let rotate = links.shift()
    carousel.innerText = links[0]
    links[0] === 'grave' ? goDark() : goLight()
    links.push(rotate)
  };

  back.onclick = () => {
    let rotate = links.pop()
    links.unshift(rotate)

    links[0] === 'grave' ? goDark() : goLight()

    carousel.innerText = links[0]
  }

})
