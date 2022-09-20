const Text = (props) => {

  const value = props.text.join('') === '0' ? props.values.num1 : props.text.join('')

  // const addingSpace = (str) => {
  //   let arr = str.split('').reverse()
  //   for(let i = 3; i < str.length ; i += 3){
  //     arr.splice(i, 0, ' ')
  //   }
  //   return arr.join('')
  // }

  return (
    <p className='text' >{value}</p>
    // <p className='text' >{addingSpace(value)}</p>
  )
}

export default Text