import { useState } from "react";
import AddState from "./addState";
const State = () => {
  const [state, setState] = useState("state 처음 시작");
  // const[변수명,변수 값을 바꿔줄 함수명] = useState(변수의 기본값);
  // setState("값") ---> 변수의 값이 바뀜

  // const onChangeText = () => {
  //   setState("두번째 시작하는 state");
  // };
  //state의 불변성
  /**
   * const obj = {}
   * const obj2 = {}
   * obj === obj2 (T/F)? =>F 객체가 다르기때문에 주소값이 다름 !!!
   * obj3 = obj -> obj3와 obj가 같은 참조값(같은주소)을 가진다. ->값을 복사하는게 아닌 주소에 접근하여 보여주는것
   * 따라서, obj가 가지고있는 객체값이 변경되면, obj3 도 같은 값을 참조하고있기때문에 값이 동시에 변경됨, 즉, 원본 데이터의 훼손
   *
   * (객체, 배열이라서 발생하는일), 이러한 훼손은 예상치 못한 오류와 버그를 일으킬 가능성이 큽니다.
   * (참조오류)
   *
   * <앝은 복사의 에러를 해결하기 위해 깊은 복사를 실현>
   *
   * 1. spread opreator (...)
   * 2. const a = state ---> a의 변조과정 --->setState(a) // 사용하면안됨 오류발생가능성 높음
   * 3. immerjs 와 같은 라이브러리를 이용 (리덕스)
   *
   * Quize
   * const [상태명, setState] = useState([
   * {
   *    id: 1,
   *    name: "오진서"
   * },
   * {
   *    id: 2,
   *    name: "김사과"
   * },
   * {
   *    id: 3,
   *    name: "태드"
   * }
   * ])
   *
   * 해당 객체가 state의 값이라면
   * 이 배열에 id:4, name: "조보리" 이라는 객체의 값을 추가하려면 어떻게 해야할까요?
   * 단, 랜더링이 일어나야한다.
   * -----> 1. setState([...state, {id:4, name:"조보리"}])
   *
   *        2. const arr =state
   *            arr.push = {id:4,name:"조보리"}
   *            setState(arr)
   *        두번째방법은 주소값을 참조하여 가져오는것 임으로 원본데이터 훼손, 참조오류가 날수있음 1번 방법으로 사용해야함
   */

  //변수명, 변수를 바꾸는 함수명
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "오진서",
    },
    {
      id: 2,
      name: "김사과",
    },
    {
      id: 3,
      name: "태드",
    },
  ]);

  const onClickEvent = (idValue, nameValue) => {
    setUserList([...userList, { id: idValue, name: nameValue }]);
  };

  /*
    백엔드에서 받아오는 데이터의 형식의 대부분은 배열인 경우가 많습니다 .
    따라서 이러한 배열들을 화면에 보여주기 위해 사용하는 함수
    ==> 배열일 경우에만 사용가능
    1.map  ->> read 시 필요함 
      [반복문, 한줄 씩 읽어오는 것]
      => 주로 배열의 길이만큼 반복할 때 사용!!
      ex)
      배열명.map((결과값 변수명)=>(
          결과값변수명.id === 찾을id
          등등 실행문
      ))
      ex)실행문의 경우
      userList.map((v)=>
          console.log(v.id) => 1,2,3
      )
      ex)Html 반복의 경우
      userList.map((v)=>
          (
            <div>
              <div></div>
            </div>
          )
      )

    
    2.find/findIndex   =>> 찾은것을 백엔드로 전달 , 추가 
        [검색, 조건에 맞는 데이터를 읽어오는 것]
        => 주로 배열 내에서 조건식을 만족하는 값/인덱스를 찾아올 때 사용
        
        ex)
        배열명,find( (결과값 변수명)=>조건식 )

        ex)
        userList.find((v)=> v.id === 1).name // 오진서!
              (해당 값을 만족하는 객체의 인덱스 전체정보 리턴)
        ex)
        userList.findIndex((v)=> v.id === 1) // 0 (해당 정보를 만족하는 인덱스 번호 반환)
        
        userList[0].name

    3.filter
        [거름망, 조건에 맞지 않는 데이터를 거르고 맞는 데이터만 읽어오는 것]
        => 삭제 시에 백엔드에서 받아온 데이터가 있음.


        ex)
        배열명.filter((결과값 변수명)=> 조건식)
  */
  /*
    ex) 상품정보에 대한 데이터
    {
      message: "failure"
      err:"해당 상품은 준비 중입니다."
    }
    ---------------------------------------------
    {
      message: "success"
      date:{
        prodName:"떡볶이",
        prodPrice: 80000,
        prodImg:"https://www....~/img/123456", 
        prodContent : "<div class="a">이상품 ...설명</div>",
        review: [
          {
            User: [
              id: 952,
              emil: "korpg9527@gmail.com",
              name: "김**"
            ],
            poind:5
            contents:"<div>리뷰내용...</div>"
          },
          {},
          {},
          {},
          {},
          {},,
          {},
          {},
          {},
          {},
          {},
          .... ====> 이렇때 불변성을 지키기위해 immerjs 사용 ! setState(draft.data.review.push(객체명))
        ]
      }
    }
  */

  const onRemoveHandler = (e) => {
    const removeState = state.filter((item) => item.id !== e.target.value);
    //filter 는 제거하라는 명령문이 아니라
    //해당 상태가 맞지 않는 데이터를 제외하고 읽어오는 것이므로
    //원본 데이터를 훼손한 상태가 아니다.
    setState(removeState);
  };

  //<div onClick={onChangeText}>{state}</div>
  return (
    <>
      {userList.map((v) => (
        <div key={v}>
          {v.id}. {v.name}
          <button value={v.id} onClick={onRemoveHandler}>
            삭제
          </button>
        </div>
      ))}
      <AddState
        onClickEvent={onClickEvent}
        stateId={userList.length > 0 && userList[userList.length - 1].id}
      />
    </>
  );
};

export default State;
