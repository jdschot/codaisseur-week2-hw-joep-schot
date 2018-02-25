import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Game extends PureComponent {
  render() {
    return (
      <div>
        <h1>{ this.props.rule.wordToShow }</h1>
        { this.props.rule.isWinner ? <h1></h1> : null }
        { this.props.rule.gameOver ? <h1></h1>: null }
      </div>
    )
  }
}

const mapStateToProps = ({rule}) => ({
  rule
})

export default connect(mapStateToProps)(Game)
