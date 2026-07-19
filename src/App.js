
import { LaunchTracker } from './LaunchTracker';
import './App.css';
import { Greeting } from './Greeting';

function App() {
  const clickEventHandler = () => {
    alert("Clicked");
  }
  return (
    <div className="App">
      <Greeting name="sarita" onClick={clickEventHandler} />
      <h2>Lunch Tracker</h2>
      <LaunchTracker />
    </div>
  );
}

export default App;
