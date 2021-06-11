import React from 'react';
import './App.css';

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
      <form id="myform" onClick={this.handleClick} style={{ display:'flex', justifyContent:'center' }}>
        <label className="container">Lael Man
          <input type='radio' name='src' value='videoLael' />
          <span className="checkmark"></span>
        </label>

        <label className="container">GameHub
          <input type='radio' name='src' value='videoJava' defaultChecked='true'/>
          <span className="checkmark"></span>
        </label> 

        <label className="container">Dog Park
          <input type='radio' name='src' value='videoDogPark' />
          <span className="checkmark"></span>
        </label>          
      </form>
    )
  }
}
