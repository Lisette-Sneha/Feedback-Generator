
const time = document.getElementById('time')
const myLocation = document.getElementById('location')
const situation = document.getElementById('situation')
const others = document.getElementById('others')
const buildButton = document.getElementById('build-button')
const finalFeedback = document.getElementById('final-feedback')
const timeExamplesBtn = document.getElementById('time-examples-btn')
timeExamplesBtn.addEventListener('click', () => {
    toggleSection()
})
buildButton.addEventListener('click', () => {
  finalFeedback.innerHTML = describeContext(time.value, situation.value, myLocation.value, others.value)  
})

function toggleSection () {
    const x = document.getElementById("time-examples-section");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }