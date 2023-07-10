export const DesignSystem = () => {
  const body = document.body
  const dropDownArray = []

  const initialize = () => {
    // Lets find all of the elements we need to work with
    // dropDownArray.push()
    const dropDownNodes = body.querySelectorAll('.dropdown')
    console.log(Array.from(dropDownNodes))
    dropDownArray.concat(Array.from(dropDownNodes))
    console.log(dropDownArray)
    
    // Lets build the dropdowns
    dropDownArray.forEach(dropDown => {
      // const options = Array.from(dropDown.querySelectorAll('option'))
      // console.log(dropDown)
    })
  }

  return {
    initialize
  }
}