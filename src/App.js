import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactVideoTrimmer from "react-video-trimmer";
import "react-video-trimmer/dist/style.css";

function App() {
  return (
      <div>
          <ReactVideoTrimmer timeLimit={600} showEncodeBtn />
      </div>
  );
}

const Trimmer = () => {
    return (
        <div>
            <ReactVideoTrimmer timeRange={20} />
        </div>
    );
};

export default App;
