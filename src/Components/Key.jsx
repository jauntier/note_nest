import React, { Component } from 'react'
import './stylefile.css';
import _ from 'lodash';
import { NOTE_TO_KEY } from '../Global/constants';


export class Key extends Component {
    noteIsFlatx = (note) => {
        return note.length > 1;
    }

    keyIsPressed = (note, pressedKeys) => {
        return _.includes(pressedKeys, NOTE_TO_KEY[note]);
    }

  render() {
    let keyClassName = "key";

    

    const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys);
    const noteIsFlat = this.noteIsFlatx(this.props.note);
    if (noteIsFlat) {
        keyClassName += " flat";
    }
    if (keyIsPressed) {
        keyClassName += " pressed";
    }

    let key;
    if (noteIsFlat){
        key= (
            <div className = {keyClassName}></div>
        );
    } else {
        key= (
            <div className = {keyClassName}>
<div className="key-text">{this.props.note.toUpperCase()}</div>



            </div>
        )
    }
    return key
    return (
      <div className="key">
<div className="key-text">{this.props.note.toUpperCase()}</div>


      </div>
    )
  }
}

export default Key



