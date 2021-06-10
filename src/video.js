import React from 'react';

export class Video extends React.Component{
  render(){
    return (
      <div>
        <iframe title='YouTube Video Player' width='560' height='315' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src={this.props.src}></iframe>
      </div>
    )
  }
}