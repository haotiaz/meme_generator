import React from 'react';
import MemePreview from './edit_components/memePreview';
import MemeEdit from './edit_components/memeEdit';
import Navigation from './navagation';

class Edit extends React.Component {
  /* Display the page that edits the image.
   */

  constructor(props) {
    super(props);
    let search = window.location.search;
    let params = new URLSearchParams(search);
    this.state = {url: params.get('url') || "",
                  query: params.get('q') || "",
                  text: "", 
                  fontSize: "20" , 
                  color: "white", 
                  position: "20"
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
    let { url, query, text, fontSize, color, position } = this.state;
    let parsedSize = 0
    if(fontSize==""){
      parsedSize = 1;
    }
    else{
      parsedSize = parseFloat(fontSize)/10;
    }

    return (
      <div>
        <Navigation searchText={ query } />
        <div className="container">
          <span className="left-column">
            <MemePreview url={url} text={text} size={parsedSize.toString()+"em"} color={color} position={position+"%"}/>
          </span>
          <span className="right-column">
            <MemeEdit
              text={text} handleTextChange={this.handleTextChange}
              fontSize={fontSize} handleSizeChange={this.handleSizeChange}
              position={position} handlePositionChange={this.handlePositionChange}
              color={color} handleColorChange={this.handleColorChange}
              handleSubmit={this.handleSubmit} handleClickClear={this.handleClickClear}
            />
          </span>
        </div>
      </div>
    );
  }
}



export default Edit;
