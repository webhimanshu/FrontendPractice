import React, { useState } from 'react'
import useDebounce from '../Hooks/useDebounce';
const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue , 500);
    console.log("🚀 ~ SearchBar ~ debouncedValue:", debouncedValue); // it will get update when user stopped typing
    return (
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search..."
        />
    )
}

export default SearchBar