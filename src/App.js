import Todo from "./Components/Todo";
import ToDoAppProvider from "./Context/ToDoAppProvider";
function App() {
  return (
   <ToDoAppProvider>
     <Todo/>
   </ToDoAppProvider>
  );
}

export default App;
