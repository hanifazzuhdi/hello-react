import React, { useState } from 'react';
import TodoList from '../todo-list/TodoList';

import { Button, Form } from 'react-bootstrap';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const [newTodo, setNewTodo] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const addTodo = {
            id: new Date().getTime(),
            todo: newTodo ? newTodo : 'Default Todo',
            date: new Date().toLocaleString()
        }

        setTodos(todos.concat(addTodo));
        setNewTodo('');
    }

    // coba kirim data dari child
    const [counter, setCounter] = useState(0);

    const getDataCounter = (counter) => {
        setCounter(counter);
    }

    return (
        <div>
            <h1>Todo List</h1>

            <p>Nilai dari component (child) todo list: {counter}</p>
            
            <Form>
                <Form.Group>
                    <Form.Control placeholder='Tambah Todo ...' value={newTodo} type="text" name="todo" id="todo" onChange={(e) => setNewTodo(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" onClick={handleFormSubmit}>Tambah</Button>
            </Form>

            <TodoList onDataCounter={getDataCounter} todos={todos}/>
        </div>
    )
}

export default Todo;