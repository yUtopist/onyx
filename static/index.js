// import './scripts/pageScrollHandler.js'

import { Popper } from './scripts/Popper.js'
import { Fader } from './scripts/Fader.js'
import { DesignSystem } from './scripts/DesignSystem.js'

import { dotENV } from '../dotENV.js'

// God I love GitHub Copilot!
const REPO_URL = 'https://github.com/yUtopist/tekapo'
console.log('Hello World!')
console.log(`Please feel free to look around my repo.\n${REPO_URL}`)

// Hero
const hero = document.body.querySelector('#Hero')
// Function Popper will take a heading element as an input, then separate
// each character in a span element, and do some magic with it.
const heroHeadings = Array.from(hero.children) // will return list of headings
heroHeadings.forEach(heading => Popper(heading)) // add effect to headings

// At this point the headings are hidden, and we want to fade them in one span
// at a time. We can do this by using Fader function. The function will take
// two arguments - the list of elements that we want to fade in, and the options
// object that will tell the function how to fade in the elements. For more
// information about the options object, please refer to the Fader.js

// First name and Surname characters fade in one after another, while position
// and statement characters fade in randomly. First lets get a list of
// characters for each heading.
const firstName = Array.from(hero.querySelector('#hero__name').children)
const surname = Array.from(hero.querySelector('#hero__surname').children)
const name = [...firstName, ...surname]
const position = Array.from(hero.querySelector('#hero__position').children)
const statement = Array.from(hero.querySelector('#hero__statement').children)
const information = [...position, ...statement]

// Now that we have a list of span element for character, lets hide them all.
name.forEach(element => (element.dataset.hidden = 'true'))
information.forEach(element => (element.dataset.hidden = 'true'))
// Since all of the characters are hidden, we can remove the loading state from
// the body element.
document.body.dataset.loading = 'false'

// And finally we can fade them in with appropriate options.
Fader(name, {
  delay: 500, // 1 second delay before the animation starts
  interval: 20, // 20ms delay between each element
  type: 'ordered' // will fade in in order
})

Fader(information, {
  delay: 1000, // 1 second delay before the animation starts
  interval: 10, // 30ms delay between each element
  type: 'random' // will fade in randomly
})
