let totalScore = 60
const badWords = ['shitty', 'dumb', 'retarded', 'stupid', 'lazy', 'horrible']
const badWordsFromUser = []
const wordsOfEncouragement =['impressive', 'incredible', 'inspiring','brave', 'impactful', 'amazing', ]
const goodWordsFromUser = []

const checkForBadWords = (array) => {
  console.log(array)
  array.forEach(word => {
    console.log(word)
    badWords.forEach(badWord => {
      if (word.toLowerCase().includes(badWord)) {
        alert("Hey you, don't say such bad words! Use respectful language")
        badWordsFromUser.push(word)
        totalScore -= 10   
      } 
    })
  })
  console.log(totalScore)
}

const checkForWordsOfEncouragement = (array) => {
  array.forEach(word => {
    wordsOfEncouragement.forEach(goodWord => {
      if (word.toLowerCase().includes(goodWord)) {
        alert("Hey, we really like the way you are writing your feedback with words of encouragement")
        goodWordsFromUser.push(word)
        totalScore += 10
      }
    }
  )    
  })
  console.log(totalScore)
}

const describeContext = (...whateverTheyType) => {
checkForBadWords(whateverTheyType)
checkForWordsOfEncouragement(whateverTheyType)
console.log(badWordsFromUser)
console.log(whateverTheyType)
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
