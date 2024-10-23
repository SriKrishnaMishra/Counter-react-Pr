import { useState } from 'react'
import './App.css'

 function App() {
  const[counter,setCounter] = useState(15)

  const addValue = () => {

    setCounter(counter + 1);
  }

  const removeValue = () => {

    setCounter(counter - 1);

  }

  return (
    
      <div>
       <h1>Create a new Project</h1>
       <h2>Counter Value: {counter}</h2>

       <button onClick={addValue}> Value {counter}</button>
       <br/>
       <button onClick={removeValue}> Remove {counter} </button>
       <p>Footer:</p>
    </div>
  );
}

export default App
