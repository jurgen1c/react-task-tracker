import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'this 1 task',
    },
    {
      id: 2,
      name: 'this 2 task',
    },
    {
      id: 3,
      name: 'this 3 task',
    }
  ])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
