import React from 'react';
import './LiveDoubts.css';
// import BlinkingPoint from '../../components/BlinkingPoint/BlinkingPoint';
import ColorfulWavePoint from '../../components/BlinkingPoint/ColorfulWavePoint';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function LiveDoubts() {

  const showToast = () =>{
    toast("Toast Exaple");
  }
  return (
    <div>
        <h1>Live Doubts</h1>
        {/* < BlinkingPoint /> */}
        <ColorfulWavePoint />

        <button onClick={showToast}>Toast</button>
        <ToastContainer />
    </div>

  )
}

export default LiveDoubts;