import React from 'react';
import PropTypes from 'prop-types';


function MemeEdit(props) {
  // Meme edit panel
  let { text, handleTextChange, fontSize, handleSizeChange, position, handlePositionChange, color, handleColorChange } = props;

  return (
    <form onSubmit={props.handleSubmit}>
          <input type="text" value={props.text} onChange={props.handleTextChange} />
          <label>
            Font size(1-100):
            <input type="number" value={props.fontSize} onChange={props.handleSizeChange}></input>
          </label>
          <label>
            Position(0-100):
            <input type="number" value={props.position} onChange={props.handlePositionChange}></input>
          </label>
          <label>
            Color:
            <select value={props.color} onChange={props.handleColorChange}>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>
          </label>
          <button onClick={props.handleClickClear}>Clear</button>
        </form>
  );
}

// MemePreview.propTypes = {
//   url: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   size: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
//   position: PropTypes.string.isRequired,
// };

export default MemeEdit;
