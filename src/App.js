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
          {padKeys}
        </div>
      )
    }
  }
  
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sound_requested: null
    }

    this.soundPress = this.soundPress.bind(this);
    // this.soundClick = this.soundClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if(event.target.className === "drum-pad"){
      const soundEntry = sounds.filter((sound) => sound.id === event.target.id)[0];
      this.setState({
        sound_requested: soundEntry
      })
      const audioElement = document.getElementById(soundEntry.trigger);
      audioElement.play();
    }
  }

  playSound(file) {
   // let soundEntry = sounds.filter(sound => sound.id === this.state.sound_requested)
    //let sound = new Audio(soundEntry[0]["file"])
    // let sound = new Audio(file)
    let sound = "";
    sound.play();
  }

  soundPress(event){
    if(event.target.className === "drum-pad"){
      let soundEntry = sounds.filter(sound => sound.trigger === event.key.toUpperCase())
      if(soundEntry.length){ 
        this.setState({
          sound_requested: soundEntry[0]
        });
        const audioElement = document.getElementById(soundEntry[0].trigger)    
        audioElement.play();
      }
    }  
  }


  /*
  soundClick(event){
    if(event.target.className === "drum-pad"){
      this.setState({
        sound_requested: event.target.id
      });

     const soundEntry = sounds.filter((sound) => sound.id === this.state.sound_requested);
     const audioElement = document.getElementById(soundEntry.trigger);
     audioElement.play();
    }
  }

*/

  componentDidMount() {
    document.getElementById('display').addEventListener('keydown', this.soundPress);
  }

  
  componentWillUnMmount() {
    document.getElementById('display').removeEventListener('keydown', this.soundPress);
  }


  render() {
    return (
      <div id="drum-machine">     
        <SoundButtons onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;