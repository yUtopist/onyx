console.log('Hello World!')

// Hero heading effect
const hero = document.querySelector('#hero')
const heroList = Array.from(hero.children)

heroList.forEach(heading => {
  const content = heading.textContent.split('')
  heading.textContent = ''

  content.forEach((char, index) => {
    const handleEnter = (index) => {
      heading.children[index].dataset.state = 'hover'
      if (heading.children[index - 1]) {
        heading.children[index - 1].dataset.state = 'sided'
      }
      if (heading.children[index + 1]) {
        heading.children[index + 1].dataset.state = 'sided'
      }
    }
    
    const handleLeave = (index) => {
      heading.children[index].dataset.state = 'idle'
      if (heading.children[index - 1]) {
        heading.children[index - 1].dataset.state = 'idle'
      }
      if (heading.children[index + 1]) {
        heading.children[index + 1].dataset.state = 'idle'
      }
    }

    const span = document.createElement('span')
    span.textContent = char
    span.onmouseenter = () => handleEnter(index)
    span.onmouseleave = () => handleLeave(index)
    heading.appendChild(span)
  })
})
