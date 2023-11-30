// disteratureDisplay.js
import '../distance/dist.css'
import React, { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import firebase from 'firebase/compat/app';
import '../../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Distance = () => {
  const [dist, setdist] = useState(null);
  const { speak, cancel } = useSpeechSynthesis();


  useEffect(() => {
    const distRef = firebase.database().ref('dist');

    const handledistance = (snapshot) =>{
      const distValue = snapshot.val();
      setdist(distValue);
    }
    distRef.on('value', handledistance);

    return()=>{
      distRef.off('value', handledistance);
      cancel();
    }
    }, []);

    const handleSpeakButtonClick = () =>{
      if(dist !== null){
        speak({text: `distance is ${dist} centimeters`})
      }
    }

  return (
    <div className="distance">
      <button onClick={handleSpeakButtonClick}><i className="fa fa-play"></i></button>
      <div className = "bar">
        <CircularProgressbar value={dist} text={`${dist} cm`} />
      </div>
      <h1>Distance </h1>
      </div>
  );
};

export default Distance;