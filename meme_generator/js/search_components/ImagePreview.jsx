import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function buildImageUrl(server, id, secret, size) {
  // Return the URL of image
  return `https://live.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`;
}

function ImagePreview(props) {
  // Image preview in the search result
  const { query, id, server, secret, title } = props;
  let previewImageUrl = buildImageUrl(server, id, secret, 'n');
  let largeImageUrl = encodeURIComponent(buildImageUrl(server, id, secret, 'b'));

  return (
    <span className="image-preview">
      <Link
        to={{
        pathname: "/edit/",
        search: `?q=${query}&url=${largeImageUrl}`
        }}
      >
        <img  src={ previewImageUrl } alt={ title } height='200' />
      </Link>
    </span>
  );
}

ImagePreview.propTypes = {
  server: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  secret: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default ImagePreview;
