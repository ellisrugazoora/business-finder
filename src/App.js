import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export function placeholder(type, description){ //this function should be accessible by other applications
  return "placeholder for: type: " + type + ", and description: " + description
}

function assign_tag(placeholder_description){//this function should be accessible by other functions
  //console.log("The tag for: " + placeholder_description + " is ..."
  let rtrn 
  switch(placeholder_description){
    case 1:
      rtrn = <button>battonia</button>
      break;
    case 2:
      rtrn = <input>Hello</input>
      break;
    default:
      rtrn = <button>The "still no match" button, no event either</button>//you could just return the regular thing until its fully ocmplete
  }

  return rtrn
}

function App() {
  //this is the place that I actually influence the app***
  var element1 = placeholder("input definition", "for solution");
  var element3 = placeholder("input definition", "for cost. allow for configurability");
  var element2 = placeholder("output", "the business in terms of " + element3);
  var element4 = placeholder("input definition", "within resource")
  var competitive = "cost is lower for comparable";
  var within_resources_definition = "Is something that I possess or can get access to. Or I can afford only after a guaranteed sale.";
  //this is the place that I actually influence the app***
  //helloo
  function clickme_callback(){
    setcounter(counter + 1)
    console.log("click me has been clicked!")
  }
  const [counter, setcounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        
        {assign_tag(element1)}
        <p>{element4}</p>
        <p>{element3}</p>
        <p>{element2}</p>
        <p></p>
        {placeholder("divider", "below is the functional section")}
        
        <input onClick={function(){console.log("change the definition solution parameters. (state)")}}>Change the solution parameters</input>
        <p>The solution: a function of {competitive} and {within_resources_definition}</p>

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