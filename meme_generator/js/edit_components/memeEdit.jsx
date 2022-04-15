import React from 'react';
import PropTypes from 'prop-types';


function MemeEdit(props) {
  // Meme edit panel
  let { text, handleTextChange, fontSize, handleSizeChange, position, handlePositionChange, color, handleColorChange } = props;

  return (
    <div className="meme-edit-panel">
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>
            Text: <br/>
            <input type="text" value={props.text} onChange={props.handleTextChange} />
          </label>
        </div>
        <br/>
        <div>
          <label>
            Font size (1-100): <br/>
            <input type="number" value={props.fontSize} onChange={props.handleSizeChange}></input>
          </label>
        </div>
        <br/>
        <div>
          <label>
            Position (0-100): <br/>
            <input type="number" value={props.position} onChange={props.handlePositionChange}></input>
          </label>
        </div>
        <br/>
        <div>
          <label>
            Color: <br/>
            <select value={props.color} onChange={props.handleColorChange}>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>
          </label>
        </div>
        <br/>
        <div>
          <button onClick={props.handleClickClear}>Clear</button>
        </div>
      </form>
    </div>
  );
}

EditPreview.propTypes = {
  text: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  fontSize: PropTypes.string.isRequired,
  handleSizeChange: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  handlePositionChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  handleColorChange: PropTypes.func.isRequired
};

export default MemeEdit;