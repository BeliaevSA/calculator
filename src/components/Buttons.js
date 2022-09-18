import { useState } from "react"
import Button from "./Button"

const Buttons = (props) => {
  
  const addNumber = (ev) => {
    let arr = props.value
    if(arr.length === 1 && arr[0] === '0' && ev.target.textContent === '0') return
    if(arr.length === 1 && arr[0] === '0' && ev.target.textContent !== ',') arr = []
    if(arr.includes(',') && ev.target.textContent === ',') return

    arr.push(ev.target.textContent)
    props.setValue([...arr])
  }

  const clearNumber = () => {
      props.setValue(['0'])
      setIsNegativeValue(true)
  }

  const [isNegativeValue, setIsNegativeValue] = useState(true)
  const negativeNumber = () => {
    let arr = props.value
    if(arr.length === 1 && arr[0] === '0') return
    setIsNegativeValue(!isNegativeValue )
    isNegativeValue ? arr.unshift('-') : arr.shift()
    return props.setValue([...arr])
  }

  const deleteNumber = () => {
    let arr = props.value
    if( ( arr.length === 1 && arr[0] !== '-' ) || ( arr.length === 2 && arr[0] === '-' ) ) {
      props.setValue(['0'])
      setIsNegativeValue(true)
      return
    }
    if( (arr[0] !== 0 && arr.length > 1) || (arr.length > 2 && arr[0] !== '-') ) {
      arr.pop()
      props.setValue([...arr])
    } 
  }
  
  return (
    <div className="table-body">
      <Button value={(props.value[0] === '0' && props.value.length === 1) ? 'AC' : 'C'}  onclick={clearNumber} className={'button-adding'} style={{gridArea: 'a'}}/>
      <Button value='+/-' onclick={negativeNumber} className={'button-adding'} style={{gridArea: 'b'}}/>
      <Button value='del' onclick={deleteNumber} className={'button-adding'} style={{gridArea: 'c'}}/>
      <Button value='/' className={'button-math'} style={{gridArea: 'd'}}/>
      <Button value='7' onclick={addNumber} className={''} style={{gridArea: 'e'}}/>
      <Button value='8' onclick={addNumber} className={''} style={{gridArea: 'f'}}/>
      <Button value='9' onclick={addNumber} className={''} style={{gridArea: 'g'}}/>
      <Button value='x' className={'button-math'} style={{gridArea: 'h'}}/>
      <Button value='4' onclick={addNumber} className={''} style={{gridArea: 'i'}}/>
      <Button value='5' onclick={addNumber} className={''} style={{gridArea: 'j'}}/>
      <Button value='6' onclick={addNumber} className={''} style={{gridArea: 'k'}}/>
      <Button value='-' className={'button-math'} style={{gridArea: 'l'}}/>
      <Button value='1' onclick={addNumber} className={''} style={{gridArea: 'm'}}/>
      <Button value='2' onclick={addNumber} className={''} style={{gridArea: 'n'}}/>
      <Button value='3' onclick={addNumber} className={''} style={{gridArea: 'o'}}/>
      <Button value='+' className={'button-math'} style={{gridArea: 'p'}}/>
      <Button value='0' onclick={addNumber} className={''} style={{gridArea: 'q'}}/>
      <Button value=',' onclick={addNumber} className={''} style={{gridArea: 'r'}}/>
      <Button value='=' className={'button-math'} style={{gridArea: 's'}}/>
    </div>
  )
}

export default Buttons