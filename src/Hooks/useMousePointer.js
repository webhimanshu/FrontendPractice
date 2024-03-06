import { useEffect } from 'react';
import { useState } from 'react'

const useMousePointer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return ()=>window.addEventListener('mousemove', handleMouseMove);
    }, [])

    return position
}

export default useMousePointer