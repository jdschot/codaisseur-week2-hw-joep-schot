import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Guessing extends PureComponent {
  static propTypes = {
		word: PropTypes.string.isRequired,
    guesses: PropTypes.array.isRequired
	}

	render() {
    const {word, guesses} = this.props

		return (
      word
        .split('')
        .map(letter => guesses.indexOf(letter) !== -1 ? letter : '_')
        .join(' ')
		)
	}
}

const mapStateToProps = (state) => {
  return {
    word: state.word,
    guesses: state.guesses
  }
}

export default connect(mapStateToProps)(Guessing)
