import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import LetterButton from './LetterButton'
import {connect} from 'react-redux'
import {wrongGuesses} from '../functions'
import {isWinner} from '../functions'

class AvailableLetters extends PureComponent {
	static propTypes = {
		word: PropTypes.string.isRequired,
    guesses: PropTypes.array.isRequired
	}

  renderLetter(letter){
    if(!this.props.guesses.includes(letter))
      return <LetterButton key={letter} letter={letter}/>
  }

	render() {
    const LOSER_COUNT = 6
    const {word, guesses} = this.props

    if(wrongGuesses(word, guesses) === LOSER_COUNT){
      return <h3> YOU LOSE! </h3>
    }else if(isWinner(word, guesses)){
      return <h3> YOU WIN! </h3>
    }

    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
        'N','O','P','Q','R','S','T','U','V','X','W','Y','Z']

		return (
      letters.map((letter) => this.renderLetter(letter))
		)
	}
}

const mapStateToProps = (state) => {
  return {
    guesses: state.guesses
  }
}

export default connect(mapStateToProps)(AvailableLetters)
