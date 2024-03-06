import Todo from "./Components/Todo";
import ToDoAppProvider from "./Context/ToDoAppProvider";
import { Provider } from "react-redux";
import store from "./store/store";
import ReduxTodo from "./Components/ReduxTodo";
import Index from './ClassComponent/Index'
import LifeCycle from "./Components/LifeCycle";
import Fetching from "./Components/Fetching";
function App() {
  return (
    <Provider store={store}>
      <ToDoAppProvider>
        <Todo />
        <ReduxTodo/>
        <Index/>
        <LifeCycle/>
        <Fetching/>
      </ToDoAppProvider>
    </Provider>
  );
}

export default App;
