import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <TodoList />
      
    </div>
  );
}

export default App;
