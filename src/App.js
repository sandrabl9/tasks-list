
import TasksList from './components/TasksList';
import './App.css';

function App() {
  return (
    <div className='app-task'>
      <div className='task-list'>
        <h1>My <span>To Do</span></h1>

       <TasksList/>

      </div>
     
    </div>
  );
}

export default App;
