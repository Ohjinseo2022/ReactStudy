import { HeaderWrapper, HeaderLogo, HeaderList } from "./style";

const LayOutHeader = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo>myBlog</HeaderLogo>
        <HeaderList>
          <li>회원가입</li>
          <li>로그인</li>

          {/* <ul id="header_login_list">
            <li>
              <a href="./myblog.html">마이블로그</a>
            </li>
            <li>채팅</li>
          </ul> */}
        </HeaderList>
      </HeaderWrapper>
    </>
  );
};

export default LayOutHeader;
