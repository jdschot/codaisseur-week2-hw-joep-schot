import React, { Component } from 'react';
import Guessing from './components/Guessing'
import HangmanGame from './components/hangman-game.js'
import AvailableLetters from './components/AvailableLetters'
import word from './fixtures/word'
import guesses from './fixtures/guesses'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-2">
            <div className="row">
              <div className="col-md-12 text-center">
                <HangGuy word={word} guesses={guesses}/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center guessing-word">
                <Guessing word={word} guesses={guesses}/>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col text-center available-letters">
                <h2> Choose a letter! </h2>
                <AvailableLetters word={word} guesses={guesses}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
