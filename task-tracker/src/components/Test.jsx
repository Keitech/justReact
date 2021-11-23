import React from 'react'

const Test = ({count, addCount}) => {
    return(
        <>
        <button onClick={() => {addCount(12)}}>click me!</button>
        <p>{count}</p>
        </>
    )
}

export default Test