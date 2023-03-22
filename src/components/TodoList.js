import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';



function TodoList() {

    
    const getLocalItems = () => {
        let list = localStorage.getItem('todos');
        console.log(list);

        if (list) {
            return JSON.parse(localStorage.getItem('todos'));
        } else {
            return [];
        }
    }

    const [todos, setTodos] = useState(getLocalItems);

    const addTodo = todo => {
        if(!todo.text || /^\s$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos);
        
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))

    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }


    const onToggle = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        });
        setTodos(updatedTodos);
    }

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
      },[todos])

  return (
    <div>
        <TodoForm  onSubmit={addTodo}/>
        <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} onToggle={onToggle}/>
    </div>
  )
}

export default TodoList