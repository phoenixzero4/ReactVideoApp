import React from 'react';

export class Menu extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let text = e.target.value;
    this.props.chooseVideo(text);
  }

  render(){
    return (
      <form id="myform" onClick={this.handleClick}>
        <input type='radio' name='src' value='videoLael' />Lael Man
        <input type='radio' name='src' value='videoJava' />JavaGameHub Demo
        <input type='radio' name='src' value='videoDogPark' />Lael at the Dog Park
      </form>
    )
  }
}
