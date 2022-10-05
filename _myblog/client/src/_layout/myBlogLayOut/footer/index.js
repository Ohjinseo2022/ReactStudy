import { FooterWrapper, FooterTamplate, Footertxt, FooterRight } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
const LayOutFooter = () => {
  return (
    <>
      <FooterWrapper>
        <FooterTamplate>
          <Footertxt>
            <p>
              SeongYong Kim Group
              <br />
              (우) 00000 서울시 용산구 이태원 어딘가 찾아보세요
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              010.1234.1234
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              korpg95274@gmail.com
              <br />
              <br />
              Copyright 2022. KSY©, Ltd. All rights reserved.
            </p>
          </Footertxt>
          <FooterRight>
            <ul>
              <li>
                GO ! <span> KSY SNS </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} />
              </li>
            </ul>
          </FooterRight>
        </FooterTamplate>
      </FooterWrapper>
    </>
  );
};

export default LayOutFooter;
