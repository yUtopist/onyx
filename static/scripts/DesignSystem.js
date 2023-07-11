export const DesignSystem = (options) => {
  // For the reusability lets have paths to the icons
  const ICON_PATH = '../static/icons/'

  const body = document.body
  const dropDownArray = Array.from(body.querySelectorAll('.dropdown'))
  const icons = Array.from(body.querySelectorAll('.ico'))

  // Lets build the dropdowns
  dropDownArray.forEach(dropDown => {
    const options = Array.from(dropDown.querySelectorAll('[data-value]'))
    const selected = options
      .find(option => option.dataset.value === dropDown.dataset.selected)

    // For the accessibility we need to add a select box with options
    // Now lets create a list element to add the options to for the dropdown
    const list = document.createElement('ul')
    list.dataset.state = 'hidden'
    // Lets handle the button content. If html button doesnt have any content
    // we will add a default selected value to it.
    const button = dropDown.querySelector('button')
      || document.createElement('button') // If there is no button creating one
    if (!selected) button.textContent = 'Select an option'
    else button.innerHTML = selected.innerHTML
    // Adding arrow icon to the button
    const arrow = document.createElement('i')
    arrow.classList.add('arrow', 'ico', 'icon-ic_fluent_chevron_down_16_regular')
    button.appendChild(arrow)
    // Lets add the button to the dropdown
    if (!dropDown.querySelector('button')) dropDown.appendChild(button)
    button.onclick = () => {
      button.blur()
      // select.dataset.visible = select.dataset.visible === 'true' ? 'false' : 'true'
      if (list.dataset.state === 'hidden') {
        list.dataset.state = 'visible'
        setTimeout(() => {
          list.dataset.state = 'active'
        }, 0)

        // Lets handle the out of boundry click
        const handleOutsideClick = (event) => {
          if (event.target === button) return
          list.dataset.state = 'hidden'
          document.removeEventListener('click', handleOutsideClick)
        }
        document.addEventListener('click', handleOutsideClick)
      }
      else list.dataset.state = 'hidden'
    }

    options.forEach(option => {
      const isSelected = dropDown.dataset.selected === option.dataset.value

      // Lets add the list items to the dropdown list
      const listItem = document.createElement('li')
      listItem.innerHTML = option.innerHTML
      listItem.dataset.value = option.dataset.value
      listItem.tabIndex = 0
      if (isSelected) listItem.dataset.selected = 'true'
      listItem.onclick = () => {
        // Lets change the selected value of the dropdown
        dropDown.dataset.selected = option.dataset.value
        button.innerHTML = option.innerHTML
        button.appendChild(arrow)
      }
        

      // Remove the original option element from DOM
      option.remove()

      list.appendChild(listItem)
    })
    dropDown.appendChild(list)

  })
}