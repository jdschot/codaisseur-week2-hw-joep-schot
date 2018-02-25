export const wrongGuesses = (word, guesses) => {
  return guesses.filter(letter => word.indexOf(letter) === -1).length
}

export const isWinner = (word, guesses) => {
  for(let i = 0; i < word.length; i++){
    if(guesses.indexOf(word[i]) === -1) return false
  }

  return true
