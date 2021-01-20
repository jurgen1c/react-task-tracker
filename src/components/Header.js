import Button from "./Button"


const Header = ({ title }) => {

  const onClick = (e) => {
    console.log('CLick')
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Hello' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}




export default Header
