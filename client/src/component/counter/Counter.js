import React, { useState } from 'react';

import './Counter.css'

function Counter() {


    const [count,setCount] = useState(0);

    return (
        <div className='container'>
            <button onClick={() => setCount(count -1)}> DEC </button>
            <h2>{count}</h2>
            <button onClick={() => setCount(count +1)}> INC </button>         
        </div>
    );
}

export default Counter;