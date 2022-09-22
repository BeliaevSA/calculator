import { useState } from "react"
import Button from "./Button"

const Buttons = (props) => {
  
  const addNumber = (ev) => {
    if(props.text.length < 9){
      ev.target.className = 'button button_num_active'
      setTimeout(() => ev.target.className = 'button', 300) 
      if(!props.values.num1){
        let arr = props.text
        if(arr.length === 1 && arr[0] === '0' && ev.target.textContent === '0') return
        if(arr.length === 1 && arr[0] === '0' && ev.target.textContent !== '.') arr = []
        if(arr.includes('.') && ev.target.textContent === '.') return

        arr.push(ev.target.textContent)
        props.setText([...arr])
        return
      }
      let arr = props.text
        if(props.values.calc === '=') props.setValues({num1: '0'})
        if(arr.length === 1 && arr[0] === '0' && ev.target.textContent === '0') return
        if(arr.length === 1 && arr[0] === '0' && ev.target.textContent !== '.') arr = []
        if(arr.includes('.') && ev.target.textContent === '.') return

        arr.push(ev.target.textContent)
        props.setText([...arr])
        return
    }
  }

  const clearNumber = () => {
      props.setText(['0'])
      setIsNegativeValue(true)
      props.setValues({num1: '0'})
  }

  const [isNegativeValue, setIsNegativeValue] = useState(true)
  const negativeNumber = () => {
    let arr = props.text
    if(arr.length === 1 && arr[0] === '0') return
    setIsNegativeValue(!isNegativeValue )
    isNegativeValue ? arr.unshift('-') : arr.shift()
    return props.setText([...arr])
  }

  const deleteNumber = () => {
    let arr = props.text
    if( ( arr.length === 1 && arr[0] !== '-' ) || ( arr.length === 2 && arr[0] === '-' ) ) {
      props.setText(['0'])
      setIsNegativeValue(true)
      return
    }
    if( (arr[0] !== 0 && arr.length > 1) || (arr.length > 2 && arr[0] !== '-') ) {
      arr.pop()
      props.setText([...arr])
      props.setValues({num1: '0'})
    } 
  }

  const calculator = (ev) => {
    
    let obj = {...props.values}
    ev.target.className = 'button button-math button_math_active'
    console.log(props.text)
    if(props.text !== '0') setTimeout(() => ev.target.className = 'button button-math', 1000) 
      if(props.values.num1 === '0') {
        props.setValues({
          ...obj, 
          num1: props.text.join(''),
          calc: ev.target.textContent
        })
        props.setText(['0'])
      }
      if(props.values.num1 !== '0'){
        switch(props.values.calc){
          case '/': 
            props.setValues({num1: String(+props.values.num1 / +props.text.join('')), calc: ev.target.textContent})
            break;
          case 'x': 
            props.setValues({num1: String(+props.values.num1 * +props.text.join('')), calc: ev.target.textContent})
            break;
          case '-': 
            props.setValues({num1: String(+props.values.num1 - +props.text.join('')), calc: ev.target.textContent})
            break;
          case '+': 
            props.setValues({num1: String(+props.values.num1 + +props.text.join('')), calc: ev.target.textContent})
            break;
          default:
            break
        }
        props.setText(['0'])
      }
      
      // return
    // }
    
  }

  console.log(props.values)
  
  return (
    <div className="table-body">
      <Button 
        value='AC'
        onclick={clearNumber}
        className={'button-adding'} 
        style={{gridArea: 'a', }}/>
      <Button 
        value='+/-' 
        onclick={negativeNumber} 
        className={'button-adding'} 
        style={{gridArea: 'b'}}/>
      <Button 
        value='del' 
        onclick={deleteNumber} 
        className={'button-adding'} 
        style={{gridArea: 'c'}}/>
      <Button 
        value='/' 
        onclick={calculator} 
        className={'button-math'} 
        style={{gridArea: 'd'}}/>
      <Button 
        value='7' 
        onclick={addNumber} 
        className={''} 
        style={{gridArea: 'e'}}/>
      <Button 
        value='8' 
        onclick={addNumber} 
        className={''} 
        style={{gridArea: 'f'}}/>
      <Button 
        value='9' 
        onclick={addNumber} 
        className={''} 
        style={{gridArea: 'g'}}/>
      <Button 
        value='x' 
        onclick={calculator} 
        className={'button-math'} 
        style={{gridArea: 'h'}}/>
      <Button 
        value='4' 
        onclick={addNumber} 
        className={''} 
        style={{gridArea: 'i'}}/>
      <Button 
        value='5' 
        onclick={addNumber} 
        className={''} 
        style={{gridArea: 'j'}}/>
      <Button 
        value='6' 
        onclick={addNumber} 
        className={''} 
        style={{gridArea: 'k'}}/>
      <Button 
        value='-' 
        onclick={calculator} 
        className={'button-math'} 
        style={{gridArea: 'l'}}/>
      <Button 
        value='1' 
        onclick={addNumber} 
        className={''} 
        style={{gridArea: 'm'}}/>
      <Button 
        value='2' 
        onclick={addNumber} 
        className={''} 
        style={{gridArea: 'n'}}/>
      <Button 
        value='3' 
        onclick={addNumber} 
        className={''} 
        style={{gridArea: 'o'}}/>
      <Button 
        value='+' 
        onclick={calculator} 
        className={'button-math'} 
        style={{gridArea: 'p'}}/>
      <Button 
        value='0' 
        onclick={addNumber} 
        className={''} 
        style={{gridArea: 'q'}}/>
      <Button 
        value='.' 
        onclick={addNumber} 
        className={''} 
        style={{gridArea: 'r'}}/>
      <Button 
        value='=' 
        onclick={calculator} 
        className={'button-math'} 
        style={{gridArea: 's'}}/>
    </div>
  )
}

export default Buttons