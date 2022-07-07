import React from 'react';
import ReactPlayer from 'react-player';
import { useState } from 'react';

const PlayerTry = () => {
  const [url, setUrl] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter URL"
        name="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={() => setShow(true)}>Show</button>
      <button
        onClick={() => {
          setShow(false);
          setUrl('');
        }}
      >
        Hide
      </button>
      {show && (
        <ReactPlayer
          width="480px"
          height="240px"
          controls
          url={url}
          onReady={() => console.log('ready')}
          onStart={() => console.log('start')}
          onPause={() => console.log('pause')}
          onEnded={() => console.log('ended')}
          onError={() => console.log('error')}
        />
      )}
    </div>
  );
};

export default PlayerTry;
