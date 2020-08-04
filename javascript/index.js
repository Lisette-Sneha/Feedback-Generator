
const time = document.getElementById('time')
const myLocation = document.getElementById('location')
const situation = document.getElementById('situation')
const others = document.getElementById('others')
const buildButton = document.getElementById('build-button')
const finalFeedback = document.getElementById('final-feedback')
const timeExamplesBtn = document.getElementById('time-examples-btn')
const situationExamplesBtn = document.getElementById('situation-examples-btn')
timeExamplesBtn.addEventListener('click', () => {
  toggleSection('time-examples-section')
})
situationExamplesBtn.addEventListener('click', () => {
  toggleSection('situation-examples-section')
})
buildButton.addEventListener('click', () => {
  finalFeedback.innerHTML = describeContext(time.value, situation.value, myLocation.value, others.value)  
})
