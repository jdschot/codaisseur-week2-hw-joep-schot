import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import hangman0 from '../images/hangman0.png'
import hangman1 from '../images/hangman1.png'
import hangman2 from '../images/hangman2.png'
import hangman3 from '../images/hangman3.png'
import hangman4 from '../images/hangman4.png'
import hangman5 from '../images/hangman5.png'
import hangman6 from '../images/hangman6.png'
import {wrongGuesses} from '../functions.js'

class HangmanGame extends PureComponent {
  static propTypes = {
		word: PropTypes.string.isRequired,
    guesses: PropTypes.array.isRequired
	}

	render() {
    const images = [
      hangman0,
      hangman1,
      hangman2,
      hangman3,
      hangman4,
      hangman5,
      hangman6,
    ]

    const {word, guesses} = this.props
		return (
			<img alt='Hangman' src={images[wrongGuesses(word, guesses)]} />
		)
	}
}

const mapStateToProps = (state) => {
  return {
    word: state.word,
    guesses: state.guesses
  }
}

export default connect(mapStateToProps)(HangmanGame)
