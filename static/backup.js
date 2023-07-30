window.handleThemeChange = button => {
  button.blur()

  const isActive = button.dataset.active === 'true'
  if (isActive) return

  const buttonList = Array.from(theme.querySelectorAll('.btn_primary'))
  buttonList.forEach(item => {
    item.dataset.active = button === item ? 'true' : 'false'
  })

  body.dataset.theme = button.dataset.theme
}

// Ok, a little bit of an insanity happening here. We want to trigger an event
// when we are done with fading in ordered elements, so we can start fading in
// random elements. We can do this by adding an event listener to document,
// that will trigger an event when we are done with fading in ordered elements
// and then we can start fading in random elements.

// Lets add an event listener to document, and we have to do it prier to
// calling objectFader, so we can be sure that event listener is in place.
document.addEventListener('completedfader' + orderedOptions.id, () =>
  objectFader(randomElements, randomOptions)
)

objectFader(orderedElements, orderedOptions)
/* ========================================================================== */

window.cityFinderHandler = event => {
  const input = event.target
  const value = input.value
  // const cities = Array.from(document.querySelectorAll('#city__list li'))
  console.log(value)
  const url = 'https://api.api-ninjas.com/v1/city?name=' + value
  fetch(url, {
    method: 'GET',
    headers: {
      'X-Api-Key': dotENV.ninjaAPI,
    },
    contentType: 'application/json',
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => console.log(error))
}
