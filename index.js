const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (stuff) => {
  return tutorials.map(tutorial=>{
    let indTutorial = tutorial.split(" ")
    let newTutorial = indTutorial.map(tut=>
    tut.charAt(0).toUpperCase()+ tut.slice(1)
    )
    let newAndImproved = newTutorial.join(" ")
    return newAndImproved
  })
}
