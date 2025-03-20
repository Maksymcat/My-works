import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Input from './Components/Input/Input';
import Button from './Components/Button/Button';
import Console from './Components/Console/Console';
function App() {
  const [inputValue, setInputValue] = useState("")
  const [consoleValues, setConsoleValues] = useState([])
  const handleInputChange = (event) => {
setInputValue(event.target.value)

}

const handeButtonClick = () => {
  console.log(inputValue)
  setConsoleValues([...consoleValues, inputValue])
  console.log(consoleValues)
  setInputValue('')
}
  return (
  <>
  <h1>SWAPI</h1>
  <div d-flex my-3>
<Input value={inputValue} onChange={handleInputChange}  />
<Button onClick={handeButtonClick}/>
<Console values={consoleValues}/></div>
  </>
  );
}

export default App;
