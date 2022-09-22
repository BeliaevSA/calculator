const Text = (props) => {

  const value = props.text.join('') === '0' ? props.values.num1 : props.text.join('')

  const finishValue = value.length > 9 ? String((+value).toExponential(4)) : value

  const addingSpace = (str) => {
    // if(str.includes('е')) return
    let arr = (typeof str === 'string') ? str.split('').reverse() : String(str).split('').reverse()
    console.log(arr)
    for(let i = 3; i < str.length ; i += 3){
      arr[i] = `${arr[i]} `
    }
    return arr.reverse().join('')
  }
  console.log(finishValue.split(''))
  return (
    // <p className='text' >{value}</p>
    <p className='text' >{(finishValue.split('').includes('.') || finishValue.split('').includes('е') ) ? finishValue : addingSpace(finishValue)}</p>
    
  )
}

export default Text