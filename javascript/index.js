
const time = document.getElementById('time')
const myLocation = document.getElementById('location')
const situation = document.getElementById('situation')
const others = document.getElementById('others')
const observation = document.getElementById('observation')
const impact = document.getElementById('impact')
const next = document.getElementById('next')
const textArea = document.getElementById('updated-text-area')
const buildButton = document.getElementById('build-button')
const finalScore = document.getElementById('final-score')
const timeExamplesBtn = document.getElementById('time-examples-btn')
const situationExamplesBtn = document.getElementById('situation-examples-btn')
const locationExamplesBtn = document.getElementById('location-examples-btn')
const othersExamplesBtn = document.getElementById('others-examples-btn')
const observationExamplesBtn = document.getElementById('observation-examples-btn')
const impactExamplesBtn = document.getElementById('impact-examples-btn')
const nextExamplesBtn = document.getElementById('next-examples-btn')
const goodWordCount = document.getElementById('counting-good-words')
const badWordCount = document.getElementById('counting-bad-words')

timeExamplesBtn.addEventListener('click', () => {
  toggleSection('time-examples-section')
})
situationExamplesBtn.addEventListener('click', () => {
  toggleSection('situation-examples-section')
})
locationExamplesBtn.addEventListener('click', () => {
  toggleSection('location-examples-section')
})
othersExamplesBtn.addEventListener('click', () => {
  toggleSection('others-examples-section')
})
observationExamplesBtn.addEventListener('click', () => {
  toggleSection('observation-examples-section')
})
impactExamplesBtn.addEventListener('click', () => {
  toggleSection('impact-examples-section')
})
nextExamplesBtn.addEventListener('click', () => {
  toggleSection('next-examples-section')
})
buildButton.addEventListener('click', () => {
  textArea.value = describeContext(time.value, situation.value, myLocation.value, others.value, observation.value, impact.value, next.value)
  // finalScore.innerHTML = `${totalScore} is your Feedback score`
  // goodWordCount.innerHTML = `${goodWordsFromUser.length} words of encouragement have been used`
  // badWordCount.innerHTML = `${badWordsFromUser.length} inappropriate words have been used`
})


