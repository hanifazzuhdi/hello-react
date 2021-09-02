import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Counter from '../Counter/Counter';

const TodoList = (props) => {    
    return (
        <div className='mt-4'>
            <ListGroup>
                {
                    props.todos.map((todo) => {
                        return <ListGroup.Item key={todo.id}><b>{todo.todo}</b> - {todo.date}</ListGroup.Item>
                    })
                }
            </ListGroup>

            <Counter sendOnDataCounter={props.onDataCounter} />
        </div>
    );
}
export default TodoList;