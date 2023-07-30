const randomize = list => {
  let newList = []
  while (list.length > 0) {
    const random = Math.floor(Math.random() * list.length)
    newList.push(list.splice(random, 1)[0])
  }
  return newList
}

export const Fader = (list, parameters) => {
  // Lets setup some default options.
  const delay = parameters.delay || 0 // Delay before the animation starts.
  const interval = parameters.interval || 20 // Delay between each element.
  const type = parameters.type || 'ordered' // 'ordered' or 'random'
  const style = parameters.style || 'fade' // 'fade' or 'slide'
  const direction = parameters.direction || 'normal' // 'normal' or 'reverse'
  const id = parameters.id || '' // id of the fader, used for event name

  // In case if the type set to random, we want to randomize the list, we can
  // do this by using the randomize function that we created earlier. Otherwise
  // we can just use the list as it is.
  const newList = type === 'ordered' ? list : randomize(list)

  // By default Fader has no delay, but in case there was a parameter passed
  // we want to wait for the delay before we start the animation. So lets just
  // wrap the whole thing in a setTimeout function.
  setTimeout(() => {
    // Now we can set a timer for each element in the list. The idea is to set
    // the dataset.hidden to false for each element in the list, and do it with
    // a delay between each element.
    for (let i = 0; i < newList.length; i++) {
      setTimeout(() => (newList[i].dataset.hidden = 'false'), interval * i)
    }
  }, delay)

  // When we are done, we can trigger an event to let other scripts know.
  const event = new Event('completedfader-' + id)
  // Lets trigger the event we created earlier after the whole fumction has
  // finished the execution.
  setTimeout(() => {
    document.dispatchEvent(event)
  }, delay + interval * newList.length)
}
