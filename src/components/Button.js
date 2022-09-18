const Button = (props) => {
  return (
    <div className={`button ${props.className}`} style={props.style} onClick={props.onclick}>{props.value}</div>
  )
}

export default Button