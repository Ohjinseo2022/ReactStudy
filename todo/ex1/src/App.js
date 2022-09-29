import ContextAPI from "./components/contextApi";
import Reducer from "./components/reducer";
import ContextProvider from "./reducer/context";
function App() {
  return (
    <ContextProvider>
      <ContextAPI />
      <Reducer />
    </ContextProvider>
  );
}

export default App;
