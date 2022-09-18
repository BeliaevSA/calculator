const Text = (props) => {

  const value = props.value.join('')
  // console.log(props.value)

  return (
    <p className='text' >{value}</p>
  )
}

export default Text