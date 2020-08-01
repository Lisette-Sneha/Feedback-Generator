
const time = document.getElementById('time')
const myLocation = document.getElementById('location')
const situation = document.getElementById('situation')
const others = document.getElementById('others')
const buildButton = document.getElementById('build-button')
const finalFeedback = document.getElementById('final-feedback')
buildButton.addEventListener('click', () => {
  finalFeedback.innerHTML = describeContext(time.value, situation.value, myLocation.value, others.value)
test()
})
