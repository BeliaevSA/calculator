import { useState } from 'react';
import Text from './components/Text'
import Buttons from './components/Buttons';
import './App.css';

function App() {

  const [value, setValue] = useState(['0'])
  console.log(value)
  
  const [valueOne, setValueOne] = useState([0])
  

  return (
    <div className='container'>
      <Text value={value}/>
      <Buttons value={value} setValue={setValue} valueOne={valueOne} setValueOne={setValueOne}/>
    </div>
  );
}

export default App;
