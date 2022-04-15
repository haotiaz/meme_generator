import React from 'react';
import PropTypes from 'prop-types';


function MemePreview(props) {
  // Meme preview when editing
  const { url, text, size, color, position } = props;
  const textStyle = {
      fontSize: size,
      color: color,
      top: position
  }

  return (
    <div className="meme-container">
        <img  className="meme-image" src={url} width="100%" />
        <div style={textStyle} className="centered meme-text">{text}</div>
    </div>
  );
}

MemePreview.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default MemePreview;
