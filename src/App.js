import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function placeholder(type, description){
  return "placeholder for: type: " + type + ", and description: " + description
}



function App() {
  var element1 = placeholder("definition", "for solution");
  var element3 = placeholder("definition", "for cost. allow for configurability");
  var element2 = placeholder("output", "the business in terms of " + element3);
  var element4 = placeholder("definition", "within resource")

  function clickme_callback(){
    //counter ++;
    setcounter(counter + 1)
    console.log("click me has been clicked!")
  }
  const [counter, setcounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        
        <p>{element1}</p>
        <p>{element4}</p>
        <p>{element3}</p>
        <p>{element2}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          
        </p>
        <button onClick={clickme_callback}>Click me!</button>
        {counter}
      </header>
      
    </div>
    
  );
}

export default App;