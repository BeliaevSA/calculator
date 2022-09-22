const Text = (props) => {

  const value = props.text.join('') === '0' ? props.values.num1 : props.text.join('')

  let finishValue = value.length > 9 ? String((+value).toExponential(4)) : value
  
  if(finishValue === 'Infinity') finishValue = 'Ошибка'

  const addingSpace = (str) => {
    // if(str.includes('е')) return
    let arr = (typeof str === 'string') ? str.split('').reverse() : String(str).split('').reverse()
    console.log(arr)
    for(let i = 3; i < str.length ; i += 3){
      arr[i] = `${arr[i]} `
    }
    return arr.reverse().join('')
  }
  console.log(typeof finishValue)
  return (
    // <p className='text' >{value}</p>
    <p className='text' >{(finishValue.split('').includes('.') || finishValue.split('').includes('е') || finishValue === 'Ошибка' ) ? finishValue : addingSpace(finishValue)}</p>
    
  )
}

export default Text