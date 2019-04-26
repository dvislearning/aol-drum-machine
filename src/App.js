import React, { Component } from 'react';
import './App.css';
import buddyin from './audio/Buddy-In.mp3';
import buddyout from './audio/Buddy-Out.mp3';
import drop from './audio/Drop.mp3';
import filedone from './audio/File-Done.mp3';
import goodbye from './audio/Goodbye.mp3';
import im from './audio/im.mp3';
import gotpics from './audio/Got-Pics.mp3';
import welcome from './audio/Welcome.mp3';
import gotmail from './audio/You-Got-Mail.mp3';

class App extends Component {

  constructor(props) {
    super(props);

    this.soundPress = this.soundPress.bind(this);
    this.soundClick = this.soundClick.bind(this);
  }

  /* soundPress(event) {
    let sound;
     if(event.target.id === 'welcome'){
      sound = new Audio(welcome);
     }
     else if(event.key === 'w'){
      sound = new Audio(gotmail);
     }
     return (
      sound.play()
    );
  }
  */

  soundPress(event){
    if(event.target.className === "drum-pad"){
      console.log('Yo ho ho and');
    }  
  }

  soundClick(event){
    if(event.target.className === "drum-pad"){
      console.log(event.target.id);
    }
  }

  componentDidMount() {
    document.getElementById('display').addEventListener('keydown', this.soundPress);
    document.getElementById('display').addEventListener('click', this.soundClick);
  }

  componentWillUnMmount() {
    document.getElementById('display').removeEventListener('click', this.soundClick);
    document.getElementById('display').removeEventListener('keydown', this.soundPress);
  }

  render() {
    return (
      <div id="drum-machine">     
        <div id="display">
          <button className="drum-pad" id="welcome">Q</button>
          <button className="drum-pad" id="gotmail">W</button>
          <button className="drum-pad" id="filedone">E</button>
          <button className="drum-pad" id="im">A</button>
          <button className="drum-pad" id="buddyin">S</button>
          <button className="drum-pad" id="buddyout">D</button>
          <button className="drum-pad" id="drop">Z</button>
          <button className="drum-pad" id="got-pics">X</button>
          <button className="drum-pad" id="goodbye">C</button>
        </div>
      </div>
    );
  }
}

export default App;
