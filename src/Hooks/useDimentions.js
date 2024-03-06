import  { useEffect, useState } from 'react'

const useDimentions = () => {
    const [dimentions, setDimentions] = useState({ width: 0, height: 0 });

    const handleDimentions =(e)=>{
        setDimentions({width:window.screen.width , height:window.screen.height})
    }
    useEffect(()=>{
        window.addEventListener('resize', handleDimentions);
        return ()=>window.addEventListener('resize', handleDimentions);
    },[])

    return dimentions


}

export default useDimentions