import { createContext, useContext, useState } from "react"
const ToDoAppContext = createContext();

export default function ToDoAppProvider({ children }) {
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]); // {id : 1 , title :'' , completed : false}
    const [edit, setEdit] = useState({});


    const insert = () => {
        if (edit.id) {
            setList((prevState) => prevState.map((item) => {
                if (item.id === edit.id) {
                    return { ...item, title: inputValue }
                }
                return item;
            }))
            setEdit({});
        } else {
            list.push({ id: Math.floor(1000 + Math.random() * 9000), title: inputValue, completed: false })
        }
        setInputValue('');
    }

    const remove = (id) => {
        setList((prevState) => {
            return prevState.filter((item) => item.id !== id);
        })
    }


    const update = (id) => {
        const filterData = list.filter((item) => {
            if (item.id === id) {
                return item;
            }
        })
        setEdit(filterData[0]);
        setInputValue(filterData[0].title);
    }

    return <>
        <ToDoAppContext.Provider value={{
            inputValue,
            edit,
            list,
            setInputValue,
            setList,
            insert,
            remove,
            update,
        }}>
            {children}
        </ToDoAppContext.Provider>
    </>
}

export const useToDoContext = () => useContext(ToDoAppContext);