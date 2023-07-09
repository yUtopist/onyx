export const DesignSystem = () => {
  const body = document.body
  const dropDownArray = []

  const initialize = () => {
    // Lets find all of the elements we need to work with
    dropDownArray.push(body.querySelectorAll('.dropdown'))
    console.log(dropDownArray)
  }

  return {
    initialize
  }
}