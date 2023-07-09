const randomize = (list) => {
  let newList = []
  while (list.length > 0) {
    const random = Math.floor(Math.random() * list.length)
    newList.push(list.splice(random, 1)[0])
  }
  return newList
}

export const objectFader = (list, parameters) => {
  // Lets setup some default options.
  const options = {
    delay: parameters.delay || 0,
    interval: parameters.interval || 20,
    type: parameters.type || 'ordered',
    id: parameters.id
  }

  // So far we can either have ordered or random list.
  const newList = options.type === 'ordered' ? list : randomize(list)

  // Lets delay further code by delay amount of time.
  setTimeout(() => {
    for (let i = 0; i < newList.length; i++) {
      setTimeout(() => {
        newList[i].dataset.hidden = 'false'
      }, options.interval * i)
    }
  }, options.delay)

  // When we are done, we can trigger an event to let other scripts know.
  const event = new Event('completedfader' + options.id)
  // Lets trigger the event we created earlier after the whole fumction has
  // finished the execution.
  setTimeout(() => {
    document.dispatchEvent(event)
  }, options.delay + options.interval * newList.length)
}