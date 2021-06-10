import React from 'react';
import { Video } from './video.js';
import { Menu } from './menu.js';

const VIDEOS = {
  videoLael: 'https://www.youtube.com/embed/w13XvFnGIqY', 
  videoJava : "https://www.youtube.com/embed/M6GV1b7JHF8",
  videoDogPark : 'https://www.youtube.com/embed/0rJEZBcwcp0',
};

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      src: VIDEOS.videoLael
    };
    this.chooseVideo = this.chooseVideo.bind(this);
  }
  chooseVideo(newVideo){
    this.setState({
      src: VIDEOS[newVideo]
    });
  }

    render(){
      return (
        <div>
          <h1>React Video Player</h1>
          <Menu chooseVideo={this.chooseVideo} />
          <Video src={this.state.src} />
        </div>
      );
    }
  }

export default App; 