import React from 'react';
import Todo from './components/todo/Todo';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container className='py-5 text-center'>
        <Todo/>
    </Container>
  )
}

export default App;