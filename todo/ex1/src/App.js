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
//원래 index.js 에 설정해놓는다!
export default App;
