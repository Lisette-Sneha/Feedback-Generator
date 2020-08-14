const badWords = ['shitty', 'dumb', 'retarded', 'stupid', 'lazy', 'horrible']
const wordsOfEncouragement = ['impressive', 'incredible', 'inspiring', 'brave', 'impactful', 'amazing']
const wordsDescribingAnAction = ['have a coffee', 'schedule a meeting', 'discuss', 'meet', 'start', 'stop', 'continue', 'avoid', 'keep it up', 'keep doing', 'please stop']

function checkForWordsInListAndScoreThem (wordList, wordsFromUser, score) {
  return wordsFromUser.reduce((partialScore, word) => {
    if (wordList.includes(word.toLowerCase())) {
      partialScore.score += score
      partialScore.words.push(word.toLowerCase())
    }
    return partialScore
  }, { score: 0, words: [] })
}

function preProcessUserInput (userInput) {
  // userInput -> ['Today,', 'at the meeting', 'you were awesome']
  const joinedUserInput = userInput.join(' ')
  // joinedUserInput -> 'Today, at the meeting you were awesome'
  const userInputWithNoPunctuation = joinedUserInput.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
  // userInputWithNoPunctuation -> 'Today at the meeting you were awesome'
  const listOfWords = userInputWithNoPunctuation.split(' ')
  // return -> ['Today', 'at', 'the', 'meeting', 'you', 'were', 'awesome']
  return [...new Set(listOfWords)]
}

function describeContext (...whateverTheyType) {
  const words = preProcessUserInput(whateverTheyType)

  const badWordsPartial = checkForWordsInListAndScoreThem(badWords, words, -20)
  const goodWordsPartial = checkForWordsInListAndScoreThem(wordsOfEncouragement, words, 20)
  const actionWordsPartial = checkForWordsInListAndScoreThem(wordsDescribingAnAction, words, 30)
  return {
    // text: whateverTheyType.join(' '),
    text: whateverTheyType.filter(sentence => sentence.length > 0).join(' '),
    score: Math.min(badWordsPartial.score + goodWordsPartial.score + actionWordsPartial.score, 100),
    badWords: badWordsPartial.words,
    goodWords: goodWordsPartial.words,
    actionWords: actionWordsPartial.words
  }
}

function toggleSection (sectionId, onlyToggleOnce = false) {
  const section = document.getElementById(sectionId)
  if (!section.has_been_toggled && onlyToggleOnce) {
    section.has_been_toggled = true
  } else if (section.has_been_toggled && onlyToggleOnce) {
    return
  }
  if (section.style.display === 'block') {
    section.style.display = 'none'
  } else {
    section.style.display = 'block'
  }
}
