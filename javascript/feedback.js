function test () {
    console.log('Guido rocks today')
}

function describeContext (time, situation, location, others) {
return `${time} ${situation} ${location} ${others}`
}

function toggleSection (sectionId) {
    const x = document.getElementById(sectionId)
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }