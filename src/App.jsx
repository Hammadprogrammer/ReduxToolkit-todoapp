import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, Edittodo } from './config/reducers/TodoSlice';
import './App.css'; // Link to the new CSS file

const App = () => {
  const todoVal = useRef();

  // dispatch
  const dispatch = useDispatch();

  // selector
  const selector = useSelector((state) => state.todos.todo);

  const addTodoInRedux = (event) => {
    event.preventDefault();
    if (todoVal.current.value.trim() !== "") {
      dispatch(
        addTodo({
          title: todoVal.current.value,
        })
      );
      todoVal.current.value = ''; // Clear the input field after adding
    }
  };

  const deleteItemFromRedux = (index) => {
    dispatch(
      removeTodo({
        index,
      })
    );
  };

  const editItemFromRedux = (index) => {
    const editValue = prompt('Enter the updated value');
    if (editValue) {
      dispatch(
        Edittodo({
          index,
          title: editValue,
        })
      );
    }
  };

  return (
    <div className="container">
      <h1>TodoApp</h1>
      <form>
        <input type="text" ref={todoVal} placeholder="Enter a new todo..." />
        <button onClick={addTodoInRedux}>Add Todo</button>
      </form>
      <ul>
        {selector.length > 0 ? (
          selector.map((item, index) => (
            <li key={item.id}>
              {item.title}
              <button onClick={() => deleteItemFromRedux(index)}>Delete</button>
              <button onClick={() => editItemFromRedux(index)}>Edit</button>
            </li>
          ))
        ) : (
          <h1>No data found</h1>
        )}
      </ul>
    </div>
  );
};

export default App;
