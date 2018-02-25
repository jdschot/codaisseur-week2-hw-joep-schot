import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import makeGuess from '../actions/makeGuess'

class GuessLetterButton extends PureComponent {
	static propTypes = {
		letter: PropTypes.string.isRequired
	}


  guessLetter(button){
    const {props} = this
    props.makeGuess(button.target.value)
  }


	render() {
    const {letter} = this.props

		return (
			<button type="button" value={letter} onClick={this.guessLetter.bind(this)}> {letter} </button>
		)
	}
}

export default connect(null, {makeGuess})(GuessLetterButton)
