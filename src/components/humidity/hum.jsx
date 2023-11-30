import '../humidity/hum.css'
import React, { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import firebase from 'firebase/compat/app';
import '../../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Humidity = () => {
  const [hum, setHum] = useState(null);
  const { speak, cancel } = useSpeechSynthesis();


  useEffect(() => {
    const humRef = firebase.database().ref('hum');

    const handleHumarature = (snapshot) =>{
      const humValue = snapshot.val();
      setHum(humValue);
    }
    humRef.on('value', handleHumarature);

    return()=>{
      humRef.off('value', handleHumarature);
      cancel();
    }
    }, []);

    const handleSpeakButtonClick = () =>{
      if(hum !== null){
        speak({text: `Humidity is ${hum} percent`})
      }
    }

  return (
    <div className="humidity">
      <button onClick={handleSpeakButtonClick}><i className="fa fa-play"></i></button>
      <div className = "bar">
      <CircularProgressbar value={hum} text={`${hum}%`} />
      </div>
      <h1>Humidity </h1>
      </div>
  );
};

export default Humidity;