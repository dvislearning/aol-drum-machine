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
import aolpic from './aolpic.svg';

  const sounds =
  [{trigger: 'Q', id: 'welcome', file: welcome},
  {trigger: 'W', id: 'gotmail', file: gotmail},
  {trigger: 'E', id: 'filedone', file: filedone},
  {trigger: 'A', id: 'im', file: im},
  {trigger: 'S', id: 'buddyin', file: buddyin},
  {trigger: 'D', id: 'buddyout', file: buddyout},
  {trigger: 'Z', id: 'drop', file: drop},
  {trigger: 'X', id: 'gotpics', file: gotpics},
  {trigger: 'C', id: 'goodbye', file: goodbye}]

  class Audio extends Component {
    render(){
      return(
      <audio 
        className="clip" 
        id={this.props.id} 
        src={this.props.src}>
      </audio>)
    }
  }

  class SoundButtons extends Component {

    render(){
      const padKeys = sounds.map(function(padKey){
        return (
          <button 
            className="drum-pad" 
            id={padKey.id} 
            key={padKey.trigger + padKey.id}
            onClick={this.props.onClick}>

              {padKey.trigger} 

              <Audio 
                id={padKey.trigger} 
                src={padKey.file} />
          </button>
        )
      }.bind(this))
  
      return(
        <div id="display">
          <div id="button-cont">
            {padKeys}
          </div>

          <div id="text-board">
            {this.props.soundText}
          </div>
        </div>
      );
    }
  }
  
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sound_requested: null,
      sound_text: "SOUND BOARD"
    }

    this.soundPress = this.soundPress.bind(this);
    this.processEvent = this.processEvent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if(event.target.className === "drum-pad"){
      const soundEntry = sounds.filter((sound) => sound.id === event.target.id)[0];
      this.processEvent(soundEntry);
    }
  }

  soundPress(event){
    if(event.target.className === "drum-pad"){
      let soundEntry = sounds.filter(sound => sound.trigger === event.key.toUpperCase())
      if(soundEntry.length){ 
        this.processEvent(soundEntry[0])
      }
    }  
  }

  processEvent(entry) {
    this.setState({
      sound_requested: entry,
      sound_text: entry.id.toUpperCase()
    });

    const audioElement = document.getElementById(entry.trigger)    
    audioElement.play();
  }

  componentDidMount() {
    document.getElementById('display').addEventListener('keydown', this.soundPress);
  }

  componentWillUnMmount() {
    document.getElementById('display').removeEventListener('keydown', this.soundPress);
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="logo-container">
          <img src={aolpic} alt="AOL-logo" />
        </div>

        <SoundButtons onClick={this.handleClick} soundText={this.state.sound_text}/>
      </div>
    );
  }
}

export default App;