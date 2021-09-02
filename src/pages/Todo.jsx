import React, { Component } from 'react';

import TodoList from '../components/TodoList/TodoList';

import { Button, Container, Form } from 'react-bootstrap';

class Todo extends Component {
    state = {
        todos: [],
        newTodo: {
            id  : new Date().getTime(),
            todo: '',
            date: ''
        },
        counter: 0,
    }

    handleInputChange = (e) => {
        this.setState({
            newTodo: {
                ...this.state.newTodo,
                todo: e.target.value,
                date: new Date().toLocaleString()
            }
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        let { newTodo } = this.state;

        this.setState({
            todos: [
                ...this.state.todos,
                newTodo
            ],
            newTodo: {
                id  : new Date().getTime(),
                todo: '',
                date: ''
            }
        })
    }

    getDataCounter = (counter) => {
        this.setState({
            counter: counter
        });
    }

    render() {
        return (
            <Container className='py-5 px-0 text-center'>
                <h1>Todo List</h1>

                <p>Nilai dari component (child) todo list: {this.state.counter}</p>

                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Control
                            type='text'
                            name='todo'
                            placeholder='Tambah Todo ...'
                            value={this.state.newTodo.todo}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>

                    <Button variant='primary' type='submit'>Tambah</Button>
                </Form>

                <TodoList onDataCounter={(counter) => this.getDataCounter(counter)} todos={this.state.todos} />
            </Container>
        )
    }
}
export default Todo;