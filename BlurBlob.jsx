import React from 'react';
import PropTypes from 'prop-types';

const BlurBlub = ({
  position = { top: '50%', left: '70%' },
  size = { width: '300px', height: '300px' },
}) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className='absolute'
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-full h-full bg-purple-500 rounded-full blur-3xl opacity-30 transition-transform duration-500 ease-in-out transform hover:scale-110"></div>
    </div>
  );
};

BlurBlub.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlub;
