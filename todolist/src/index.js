import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; //App도 컴포넌트구나

/*
컴포넌트 -> page -> 각 url에 맞게 App.js 해당 컴포넌트를 보여줄수 있도록 설계
-> 해당 App.js 를 index.js 가 가지고와서 public 폴더의 index.html의 root에 render

return() -->> 과거엔 render()
*/
// 최상위 폴더에 가까움
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/**엄격하게 검사함 */}
    <App />
  </React.StrictMode>
);
