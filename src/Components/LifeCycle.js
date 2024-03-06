import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
    const [state, setState] = useState(true)

    useEffect(() => {
        setInterval(() => {
            setState(false)
        }, 5000)
    }, [])
    return (
        <>
            {state ? <Test /> : null}
        </>
    )
}


function Test() {
    const [state, setState] = useState('')
    useEffect(() => {
        console.log('Component Mounted')

        return () => {
            console.log('Component Unmounted')
        }
    }, []);

    return (
        <button onClick={() => { setState(state + 1) }} >
            Inside Component
        </button>
    )
}

export default LifeCycle