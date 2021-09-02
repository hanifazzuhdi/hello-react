import React, { useState } from 'react';
import {Button, FormControl, InputGroup} from 'react-bootstrap';

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const handlePlus = () => {
        let newCounter = counter + 1;
        setCounter(newCounter);

        props.sendOnDataCounter(newCounter);
    }

    const handleMinus = () => {
        let newCounter = counter - 1; 

        if (newCounter >= 0) {
            setCounter(counter - 1);
            props.sendOnDataCounter(newCounter);
        }
    }
    
    return (
        <div className='mt-4 d-flex justify-content-center'>
            <InputGroup className='w-25'>
                <Button variant='secondary' onClick={handleMinus}>-</Button>
                <FormControl className='mx-2 text-center' type="text" value={counter} readOnly/>
                <Button variant='secondary' onClick={handlePlus}>+</Button>
            </InputGroup>
        </div>
    )
}
export default Counter;