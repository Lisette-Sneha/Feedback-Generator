let totalScore = 50
const badWords = ['shitty', 'dumb', 'retarded', 'stupid', 'lazy', 'horrible']
const badWordsFromUser = []
const wordsOfEncouragement =['impressive', 'incredible', 'inspiring','brave', 'impactful', 'amazing', ]
const goodWordsFromUser = []
const wordsDescribingAnAction =['have a coffee', 'schedule a meeting', 'discuss', 'meet', 'start', 'stop', 'continue', 'avoid', 'keep it up', 'keep doing', 'please stop']
const actionWordsFromUser = []

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

const checkForActionableFeedback = (array) => {
  array.forEach(word => {
    wordsDescribingAnAction.forEach(actionWord => {
      if (word.toLowerCase().includes(actionWord)) {
        actionWordsFromUser.push(word)
        totalScore += 20
      }
    }
    )
  })
  console.log(totalScore)
}

const describeContext = (...whateverTheyType) => {
checkForBadWords(whateverTheyType)
checkForWordsOfEncouragement(whateverTheyType)
  checkForActionableFeedback(whateverTheyType)
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
