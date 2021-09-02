import React, { useEffect, useState } from 'react';
import {Button, FormControl, InputGroup} from 'react-bootstrap';

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const handlePlus = () => {
        setCounter(counter + 1);
    }

    const handleMinus = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    // coba kirim data ke parent
    useEffect(() => {
        props.sendOnDataCounter(counter);
    });

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