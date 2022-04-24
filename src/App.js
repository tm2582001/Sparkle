import Sparkles from './components/sparkles.component';
import generateSparkle from "../src/components/generate-sparkle.component";
import { useState } from 'react';
import './App.css';


function App() {
  const [sparkle, setSparkle] = useState(generateSparkle());
  
  return (
    <div className="App">
      <Sparkles sparkle={sparkle}>
        <button onClick={()=>{setSparkle(generateSparkle())}}>
          Click Me
        </button>
      </Sparkles>      
    </div>
  );
}

export default App;
