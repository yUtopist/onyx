const navigation = document.body.querySelector('#Navigation')
const navigationButtons = Array.from(navigation.querySelectorAll('button'))

let currentSection = 0 // Index of the current page section. For scrolling.
let scrolling = false
const scrollToSection = index => {
  // Set all buttons to inactive and the clicked button to active.
  navigationButtons.forEach(button => (button.dataset.active = 'false'))
  navigationButtons[index].dataset.active = 'true'
  // Scrolling to the section. We need to get the index of the button and
  // then we can scroll to the section by multiplying the index with the
  // height of the window.
  window.scrollTo({
    top: index * window.innerHeight, // Math checks out nicely.
    behavior: 'smooth',
  })
  // Update the current section index.
  currentSection = index
}
// Show up the navigation 2 seconds after the page loades.
setTimeout(() => (navigation.dataset.hidden = 'false'), 2000)
// We want to change dataset of buttons when they are clicked and handle
// the scroll to the section.
navigationButtons.forEach(button => {
  button.addEventListener('click', () => {
    const index = navigationButtons.indexOf(button)
    scrollToSection(index)
  })
})
// Lets also handle the scroll event to scroll to the section and change the
// active button.
document.addEventListener('wheel', event => {
  if (scrolling) return // Early return if we are already scrolling.
  // While the browser is scrolling we dont want to trigger another scroll,
  // so we set the scrolling to true, and then we can set it back to false.
  // In the future we can use an event listener for the scroll end, but for
  // now this will do.
  scrolling = true
  setTimeout(() => (scrolling = false), 500) // 0.5 seconds should be enough.
  // Lets get the direction of the scroll, and then we can decide if we want to
  // scroll up or down.
  // console.log(currentSection)
  const direction = event.deltaY > 0 ? 1 : -1
  // Lets make sure that we are not at the start of the page, so we can prevent
  // scrolling further up.
  if (currentSection + direction < 0) return
  // Lets also make sure that we are not at the end of the page, so we can
  // prevent scrolling further down.
  if (currentSection + direction > navigationButtons.length - 1) return
  // Lets scroll to the next section.
  currentSection += direction

  scrollToSection(currentSection)
})
