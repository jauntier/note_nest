import React, { Component } from 'react';
import Key from './Key';
import './stylefile.css';
import _ from 'lodash';
import { NOTES } from '../Global/constants';
import './Piano.css';
import RandomNumberGenerator from './RandomNumberGenerator';
import TextTransporter from './TextTransporter';

import {
  VALID_KEYS,
  KEY_TO_NOTE,
} from '../Global/constants';
import { Helmet } from 'react-helmet';

export class PianoKeyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: [],
      creatorName: '', // State to hold the creator's name
      submittedName: ''// State to hold the creator's name
    };
  }

  playNote = (note) => {
    if (!_.isEmpty(note)) {
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.play();
    }
  }

  handleKeyDown = (event) => {
    if (event.repeat) {
      return;
    }

    const key = event.key;
    const updatedPressedKeys = [...this.state.pressedKeys];
    if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      updatedPressedKeys.push(key);
    }

    this.setState({
      pressedKeys: updatedPressedKeys,
    });
    this.playNote(KEY_TO_NOTE[key]);
  }

  handleKeyUp = (event) => {
    const index = this.state.pressedKeys.indexOf(event.key);
    if (index > -1) {
      this.setState(state => ({
        pressedKeys: state.pressedKeys.splice(index, 1)
      }));
    }
  }

  handleNameChange = (event) => {
    this.setState({ creatorName: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submittedName: this.state.creatorName });
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const keys = _.map(NOTES, (note, index) => (
      <Key pressedKeys={this.state.pressedKeys} key={index} note={note} />
    ));

    const audioFiles = _.map(NOTES, (note, index) => (
      <audio
        id={note}
        key={index}
        src={`../../notes/${note}.mp3`}
      />
    ));

    const scalesData = [
      { "note": "a", "scale": ["a", "b", "df", "d", "e", "gf", "af"] },
      { "note": "bf", "scale": ["bf", "c", "d", "ef", "f", "g", "a"] },
      { "note": "b", "scale": ["b", "df", "ef", "e", "gf", "af", "bf"] },
      { "note": "c", "scale": ["c", "d", "e", "f", "g", "a", "b"] },
      { "note": "df", "scale": ["df", "ef", "f", "gf", "af", "bf", "c"] },
      { "note": "d", "scale": ["d", "e", "gf", "g", "a", "b", "df"] },
      { "note": "ef", "scale": ["ef", "f", "g", "af", "bf", "c", "d"] },
      { "note": "e", "scale": ["e", "gf", "af", "a", "b", "df", "ef"] },
      { "note": "f", "scale": ["f", "g", "a", "bf", "c", "d", "e"] },
      { "note": "gf", "scale": ["gf", "af", "bf", "b", "df", "ef", "f"] },
      { "note": "g", "scale": ["g", "a", "b", "c", "d", "e", "gf"] },
      { "note": "af", "scale": ["af", "bf", "c", "df", "ef", "f", "g"] }
    ];

    return (
      <div className="body">
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Chela+One&family=Gideon+Roman&family=Kumar+One&family=Labrada:ital,wght@0,100..900;1,100..900&family=Langar&family=Lumanosimo&family=Oi&family=Purple+Purse&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Chela+One&family=Gideon+Roman&family=Kumar+One&family=Labrada:ital,wght@0,100..900;1,100..900&family=Langar&family=Lumanosimo&family=Oi&family=Purple+Purse&family=Smokum&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Gideon+Roman&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Gideon+Roman&family=Langar&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Chela+One&family=Gideon+Roman&family=Langar&family=Lumanosimo&family=Purple+Purse&display=swap" rel="stylesheet" />
        </Helmet>
        <header className="header">
          <h1 className="title">NoteNest</h1>
          <h3 className="h2x">Your Song Lab</h3>
        </header>
        <div className="container">
          <div className="composer">
            <div className="keyboard-container">
              <div className="piano-keys">
                {keys}
              </div>
            </div>
            <div className="audio-files">
              {audioFiles}
            </div>
            <div className="scales-table-container">
              <table className="scalestable">
                <thead>
                  <tr>
                    <th className="th">KEY</th>
                    <th className="th">1st</th>
                    <th className="th">2nd</th>
                    <th className="th">3rd</th>
                    <th className="th">4th</th>
                    <th className="th">5th</th>
                    <th className="th">6th</th>
                    <th className="th">7th</th>
                  </tr>
                </thead>
                <tbody>
                  {scalesData.map(({ note, scale }) => (
                    <tr key={note}>
                      <td className="td">{note}</td>
                      {scale.map((note, index) => (
                        <td key={index} className="td">{note}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="excerpt">
              <div >
                <RandomNumberGenerator />
              </div>
              </div>
              <div className="excerpt">
              <div >
                <div id="pdf-content">
                <TextTransporter />
              </div>
            </div>
          </div>
        </div>
          <footer className="footer">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="box"
              placeholder="Sign"
              value={this.state.creatorName}
              onChange={this.handleNameChange}
            />
            <button type="submit">Submit signature</button>
          </form>
          <p className="p">Created with love by {this.state.submittedName || 'the person who created it'}</p></footer>
          </div>
      </div>
    );
  }
}

export default PianoKeyboard;
