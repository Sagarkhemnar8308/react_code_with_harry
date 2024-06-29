import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAddFun = () => {
        setCount(count+1);
    };

    const handleSubFun = () => {
        if(count>0){
            setCount(count-1);
        }
    };

    return (
        <>
            <div className='text-center'>
            <button className='btn btn-primary' onClick={handleAddFun}>
                Add
            </button>
            <h1>
                {count}
            </h1>
            <button className='btn btn-secondary' onClick={handleSubFun}>
                Sub
            </button>

            </div>
        </>
    );
}
