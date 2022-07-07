import React from 'react';
import {
  BounceLoader,
  BarLoader,
  BeatLoader,
  ClipLoader,
} from 'react-spinners';
const IndicatorsTry = () => {
  return (
    <div>
      <ClipLoader />
      <BounceLoader size={50} color="purple" />
      <BeatLoader />
      <BarLoader loading={false} />
    </div>
  );
};

export default IndicatorsTry;
