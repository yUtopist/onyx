window.handleNavClick = (event) => {
  const index = navButtons.indexOf(event)
  scrollTo(index)
}

let currentSection = 0
let scrolling = false
const scrollTo = (section) => {
  navButtons.forEach(button => button.dataset.active = 'false')
  navButtons[section].dataset.active = 'true'
  window.scrollTo({
    top: section * window.innerHeight,
    behavior: 'smooth'
  })
  currentSection = section
}