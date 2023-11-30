import React, { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import firebase from 'firebase/compat/app';
import '../../firebase';
import './tog.css'; // Import your CSS file for styling

const ToggleSwitch = () => {
  const [pump, setPumpStatus] = useState(0);
  const [buz, setBuzzerStatus] = useState(0);
  const {speak, cancel} = useSpeechSynthesis();

  const handleStatusChange = (device, value) => {
    speak({ text: `The ${device} turned ${value === 1 ? 'on' : 'off'}` });
    firebase.database().ref(device).set(value);
  };

  useEffect(() => {
    const pumpRef = firebase.database().ref('pump');
    const buzRef = firebase.database().ref('buz');

    const handleStatus = (device, snapshot) => {
      const value = snapshot.val();
      device === 'pump' ? setPumpStatus(value) : setBuzzerStatus(value);
    };

    pumpRef.on('value', (snapshot) => handleStatus('pump', snapshot));
    buzRef.on('value', (snapshot) => handleStatus('buz', snapshot));

    return () => {
      pumpRef.off('value');
      buzRef.off('value');
      cancel();
    };
  },[]);


return (
    <div className="toggle-switch-container">
      <div className="toggle-item">
        <label className="toggle-label">
          Pump:&nbsp;&nbsp; 
          <input
            type="checkbox"
            checked={pump === 1}
            onChange={() => {}} // Remove the onChange for the checkbox
            className="toggle-checkbox"
          />
          <span className="toggle-slider"></span>
        </label>
        <button onClick={() => handleStatusChange('pump', pump === 0 ? 1 : 0)}>
          <i className={`fa ${pump === 1 ? 'fa-stop' : 'fa-play'}`}> Click to </i>
          {pump === 1 ? ' turn Off' : ' turn On'}
        </button>
      </div>
  
      <div className="toggle-item">
        <label className="toggle-label">
          Buzzer:&nbsp;&nbsp;
          <input
            type="checkbox"
            checked={buz === 1}
            onChange={() => {}} // Remove the onChange for the checkbox
            className="toggle-checkbox"
          />
          <span className="toggle-slider"></span>
        </label>
        <button onClick={() => handleStatusChange('buz', buz === 0 ? 1 : 0)}>
          <i className={`fa ${buz === 1 ? 'fa-stop' : 'fa-play'}`}> Click to </i>
          {buz === 1 ? ' turn Off' : ' turn On'}
        </button>
      </div>
    </div>
  );
  
  
};

export default ToggleSwitch;
