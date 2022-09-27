import "./App.css";
import Todo from "./page/todo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/login";

//개발자가 만들게 될 컴포넌드들의 상위 파일
// url 명시 -- react-router-dom
//화면에 App.js가 보여지는 것( 정확히 말하면 index.html이 보여지는데, index.js가 index.html의
//root라는 <div>에 app.js의 return을 보여주는 것 )

// react router Dom
// react 에서 페이지 이동에 관련된 라이브러리

function App() {
  return (
    <BrowserRouter>
      {/*라이브러리의 최상위 태그*/}
      <Routes>
        {" "}
        {/** Route들을 묶어주는 태그 */}
        <Route />{" "}
        {/** 현재 주소와 비교하여 경로가 일치한 컴포넌트만 보여주는 태그 */}
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo/login" element={<Login />} />
        {/**Route 의 속성 path는 url(주소), element 보여줄 컴포넌트명 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
