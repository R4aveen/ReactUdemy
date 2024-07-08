import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value} ) =>{
    console.log('render');
    
    const [counter, setCounter] = useState(value)
    
    const handleAdd = () =>{
        // setCounter ( counter +1);
        setCounter( (s) => s + 1)
        }
    const handleSubstract = () => {
        if (counter > 0) {
            setCounter( (r) => r - 1);
        }else{
            console.error(
                "No se puede decrementar el valor de counter"
            );
        }
    }
    const handleReset = () => {
        setCounter( value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={handleAdd }>
                +1
            </button>
            <button onClick={handleSubstract }>
                -1
            </button>
            <button onClick={handleReset }>
                Restablecer
            </button>
            
        </>
    )
}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired
}
