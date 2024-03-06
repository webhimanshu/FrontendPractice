import Todo from "./Components/Todo";
import ToDoAppProvider from "./Context/ToDoAppProvider";
import { Provider } from "react-redux";
import store from "./store/store";
import ReduxTodo from "./Components/ReduxTodo";
import Index from './ClassComponent/Index'
import LifeCycle from "./Components/LifeCycle";
import Fetching from "./Components/Fetching";
import useMousePointer from "./Hooks/useMousePointer";
import useDimentions from "./Hooks/useDimentions";
import SearchBar from "./Components/SearchBar";
function App() {
  const position = useMousePointer();
  const dimentions = useDimentions();

  return (
    <Provider store={store}>
      <ToDoAppProvider>
        <Todo />
        <ReduxTodo />
        <Index />
        <LifeCycle />
        <Fetching />
      </ToDoAppProvider>
     <> Mouse pointer position {position.x} and {position.y}</>
     <> Window Dimentions {dimentions.width} and {dimentions.height}</>
      <SearchBar/>
    </Provider>
  );
}

export default App;
