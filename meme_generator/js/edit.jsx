import React from 'react';
import PropTypes from 'prop-types';

class Edit extends React.Component {
  /* Display the page that edits the image.
   */

  constructor(props) {
    super(props);
    let search = window.location.search;
    let params = new URLSearchParams(search);
    this.state = {url: params.get('url') || "",
                  text: "", 
                  fontSize: "20" , 
                  color: "white", 
                  position: "50"
                };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
  }

  handleSizeChange(event) {
    if(event.target.value==""){
      this.setState({fontSize: ""});
    }
    else if(parseFloat(event.target.value)<=100) {
      this.setState({fontSize: event.target.value});
    }
    else{
      this.setState({fontSize: 100});
    }
  }

  handlePositionChange(event) {
    if(event.target.value==""){
      this.setState({position: ""});
    }
    else if(parseFloat(event.target.value)<=100 && parseFloat(event.target.value)>=0) {
      this.setState({position: event.target.value});
    }
    else if(parseFloat(event.target.value)>100){
      this.setState({position: 100});
    }
    else{
      this.setState({position: 0});
    }
  }

  handleColorChange(event) {
    this.setState({color: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleClickClear(event) {
    event.preventDefault();
    this.setState({text: ""});
  }

  render() {
    let { url, text, fontSize, color, position } = this.state;
    let parsedSize = 0
    if(fontSize==""){
      parsedSize = 1;
    }
    else{
      parsedSize = parseFloat(fontSize)/10;
    }
    const textStyle = {fontSize: parsedSize.toString()+"em", color: color, top: position+"%"}

    return (
      <div>
        <div className="container">
          <img src={url} />
          <div style={textStyle} className="centered meme-text">{text}</div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleTextChange} />
          <label>
            Font size(max: 100):
            <input type="number" value={this.state.fontSize} onChange={this.handleSizeChange}></input>
          </label>
          <label>
            Position(max: 100):
            <input type="number" value={this.state.position} onChange={this.handlePositionChange}></input>
          </label>
          <label>
            Color:
            <select value={this.state.color} onChange={this.handleColorChange}>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>
          </label>
          <button onClick={this.handleClickClear}>Clear</button>
        </form>
      </div>
    );
  }
}

Edit.propTypes = {
  
};

export default Edit;
