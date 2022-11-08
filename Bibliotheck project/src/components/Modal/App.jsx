/* eslint-disable react-hooks/exhaustive-deps */
 import React from "react"; 
import photo from './assets/photo.jpg';

const App = ({ open, onClose }) => {

  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img className="photo" src={photo} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p>Subscribe to our</p>
            <h1>instagram </h1>
            <p>stay up to date 🤗</p>
          </div>
          <div className='btnContainer'>
            <button  className='btnPrimary'>
              <span className='bold'>YES</span>, of course
            </button>
            <button className='btnOutline'  onClick={onClose}>
              <span className='bold'>NO</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
