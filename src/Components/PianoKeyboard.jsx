import React, { Component } from 'react'
import Key from './Key'
import './stylefile.css';
import _ from 'lodash';
import { NOTES } from '../Global/constants';
import './Piano.css';
import RandomNumberGenerator from './RandomNumberGenerator'
import TextTransporter from './TextTransporter';

import {
  VALID_KEYS,
  KEY_TO_NOTE,
} from '../Global/constants';


export class PianoKeyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: [],
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


  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }


  render() {


    const keys = _.map(NOTES, (note, index) => {
      return (

        <Key pressedKeys={this.state.pressedKeys} key={index} note={note} />

      )
    });

    const audioFiles = _.map(NOTES, (note, index) => {
      return (
        <audio
          id={note}
          key={index}
          src={`../../notes/${note}.mp3`}
        />
      );
    });
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
      <div>
      <div className="div1">
        <div className="pianok">
        {keys}
        </div>
      </div>
      <div>
        {audioFiles}
        </div>
        <div className="div2">
        <table className="table">
  <tr>
    <th className="th">Piano Note</th>
    <th className="th">Letter to type into computer keyboard</th>
  </tr>
  <tr>
    <td className="td">c</td>
    <td className="td">z</td>
  </tr>
  <tr>
    <td className="td">df</td>
    <td className="td">s</td>
  </tr>
  <tr>
    <td className="td">d</td>
    <td className="td">x</td>
  </tr>
  <tr>
    <td className="td">ef</td>
    <td className="td">d</td>
  </tr>
  <tr>
    <td className="td">e</td>
    <td className="td">c</td>
  </tr>
  <tr>
    <td className="td">f</td>
    <td className="td">v</td>
  </tr>
  <tr>
    <td className="td">gf</td>
    <td className="td">g</td>
  </tr>
  <tr>
    <td className="td">g</td>
    <td className="td">b</td>
  </tr>
  <tr>
    <td className="td">af</td>
    <td className="td">h</td>
  </tr>
  <tr>
    <td className="td">a</td>
    <td className="td">n</td>
  </tr>
  <tr>
    <td className="td">bf</td>
    <td className="td">j</td>
  </tr>
  <tr>
    <td className="td">b</td>
    <td className="td">m</td>
  </tr>
</table>

        </div>

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



<div><RandomNumberGenerator /></div>
<div><TextTransporter /></div>

      </div>
    );
  }
}



export default PianoKeyboard



