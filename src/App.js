import { useState } from 'react';
import Text from './components/Text'
import Buttons from './components/Buttons';
import './App.css';

function App() {

  const [text, setText] = useState(['0'])
  
  const [values, setValues] = useState({num1: '0'})
  

  return (
    <div className='container'>
      <Text text={text} values={values}/>
      <Buttons text={text} setText={setText} values={values} setValues={setValues}/>
    </div>
  );
}

export default App;
