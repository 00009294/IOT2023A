import './App.css';
import Humidity from './components/humidity/hum';
import Temperature from './components/temperature/temp';
import Distance from './components/distance/dist';
import ToggleSwitch from './components/toggle/tog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Temperature />
        <Humidity />
        <Distance />
      </header>
      <div className='body'>
        <ToggleSwitch />
      </div>

    </div>
  );
}

export default App;
