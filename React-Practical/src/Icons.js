import React from 'react';
import { FaReact } from 'react-icons/fa';
import { MdAlarm } from 'react-icons/md';

import { IconContext } from 'react-icons';

const Icons = () => {
  return (
    <div>
      <FaReact color="purple" size="10rem" />
      <MdAlarm color="blue" size="5rem" />

      <IconContext.Provider value={{ color: 'pink', size: '3rem' }}>
        <div>
          <FaReact />
          <MdAlarm />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Icons;
