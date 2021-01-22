import Button from "./Button"


const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add Task'} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}




export default Header
