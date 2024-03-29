import React, { memo }from 'react';
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';

function Icon(props) {
  return (
    <div>
      {props.name === 'circle' ? <FaRegCircle /> : (props.name === 'cross' ? <FaTimes /> : <FaPen />)}
    </div>
  );
}

export default memo(Icon);