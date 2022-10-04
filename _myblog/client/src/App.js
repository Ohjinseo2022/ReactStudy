import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import MainPage from "./pages/mainPage";
import LoginPage from "./pages/loginPage";
import SignPage from "./pages/signPage";
import BlogPage from "./pages/blogPage";
import ChatPage from "./pages/chatPage";
function App() {
  useEffect(() => {
    console.log(`기본지원 모드 : ${process.env.NODE_ENV}`);
    //개발용인가 배포용인가
    //리엑트에서 자체지원
    //npm start => development
    //npm build => production
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/sign"} element={<SignPage />} />
        <Route path={"/blog/userid=:id"} element={<BlogPage />} />
        <Route path={"/chat"} element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
