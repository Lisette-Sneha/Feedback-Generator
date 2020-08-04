// function describeContext (time, situation, location, others) {
// return `${time} ${situation} ${location} ${others}`
// }
let totalScore = 50
const badWords = ['shitty', 'dumb', 'retarded']
const badWordsFromUser = []
const wordsOfEncouragement =['impressive', 'incredible', 'inspiring','brave']
const goodWordsFromUser = []

const checkForBadWords = (array) => {
    array.forEach(word => {
    console.log(word)
    if (badWords.includes(word.toLowerCase())) {
        alert ("Hey you, don't say such bad words! Use respectful language")
          badWordsFromUser.push(word)
            totalScore -= 10
    }
})
console.log(totalScore)
}

const checkForWordsOfEncouragement = (array) => {
    array.forEach(word => {
    if (wordsOfEncouragement.includes(word.toLowerCase())) {
      alert("Hey, we really like the way you are writing your feedback with words of encouragement")
      goodWordsFromUser.push(word)
        }
    })
}

const describeContext = (...whateverTheyType) => {
// // whateverTheyType.forEach(word => {
// // if (badWords.includes(word.toLowerCase())) {
// //     alert ("Hey you, don't say such bad words! Use respectful language")
// //       badWordsFromUser.push(word)
        
    
// }
//   })
checkForBadWords(whateverTheyType)
checkForWordsOfEncouragement(whateverTheyType)
return whateverTheyType.join(' ')
}

function toggleSection (sectionId) {
    const x = document.getElementById(sectionId)
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
