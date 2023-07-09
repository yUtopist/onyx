export const charPopper = (heading) => {
  const content = heading.textContent.split('')
  heading.textContent = ''

  content.forEach((char, index) => {
    const handleEnter = (index) => {
      const middle = heading.children[index]
      const sideLeft = heading.children[index - 1]
      const sideRight = heading.children[index + 1]
      const grandLeft = heading.children[index - 2]
      const grandRight = heading.children[index + 2]

      middle.dataset.state = 'middle'
      if (sideLeft) sideLeft.dataset.state = 'side'
      if (sideRight) sideRight.dataset.state = 'side'
      if (grandLeft) grandLeft.dataset.state = 'grand'
      if (grandRight) grandRight.dataset.state = 'grand'
    }
    
    const handleLeave = () => {
      const characters = Array.from(heading.children)
      characters.forEach(char => char.dataset.state = 'idle')
    }

    const span = document.createElement('span')
    span.textContent = char === ' ' ? '\u00A0' : char
    span.onmouseenter = () => handleEnter(index)
    span.onmouseleave = () => handleLeave()
    heading.appendChild(span)
  })
}