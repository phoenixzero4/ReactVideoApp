import React from 'react';

export class Video extends React.Component{
  render(){
    return (
      <div id='playerDiv'>
        <iframe title='YouTube Video Player' width='1120' height='630' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen src={this.props.src}></iframe>
      </div>
    )
  }
}