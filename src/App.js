import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

// destructure props
// props are an object that belongs to the component
// think person.name - you're accessing properties of an object 


function App(props) {
  const[currentCount, setCurrentCount] = useState(props.startingCount)
 
  const handleAdd = () => {
    // 1. Increase the count by 1
    setCurrentCount(currentCount + 1)   
    console.log(this)  
  }
  function handleSubtract() {
    // 1. Decrease count by 1
    setCurrentCount(currentCount - 1)
    console.log(this)
  }

  return (
    <>
      <h1>{currentCount}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
    </>
  );
}

export default App;
