console.log("안녕하세요.");
// 실행 : node 파일명

const students = {
  apple: "신민석",
  banana: "김예찬",
  orange: "송연우",
};

console.log(students);
console.log(students.apple);
//비구조분해할당
//const apple = students.apple;
const { apple, banana, orange } = students;

console.log(apple);
console.log(banana);
console.log(orange);

//1번 import br form "react-router-dom"
//객체 전체를 br라는 이름으로 가져오는 것
// react-router-dom 라이브러리를 통쨰로 br이라는 이름응로 가지고온다.
// br.BrowserRouter 이렇게 선택해야함
//단점 export 명이 맞지 않으면 에러가나는 경우가 종종있음
// 호출할때 코드가 길어짐

//2번 import {BrowserRouter} form "react-router-dom" 이것과 일치하는 키값에 접근해서 값을 불러와서 담아줌
//BrowserRouter 이거로 불러오면 동일한 기능

//2번은 선택하면 BrowserRouter

const user = ["박세호", "오진서", "조보리"];
console.log(user[1]);
const [park, oh, jo] = user;
console.log(oh);
// 객체는 키값 !
// 배열은 키 값이 아닌 ,인덱스 순서로, 값을 받아올 수 있음
// 순서대로 비구조화 할당 가능함 - 배열은 인덱스에 이름을 부여해줌

const dog = {
  name: "보리",
  age: 10,
  weight: 3.5,
};

const desDog = ({ name, age, weight }) => {
  console.log(`우리집 강아지의 이름은 ${name}입니다. 그리고 나이는 ${age}이고 
  무게는 ${weight}kg 입니다.`);
};

//desDog(dog.name, dog.age, dog.weight);
desDog(dog);

//매개변수로 객체를 전달했고
// 함수의 정의문에서 {} 를 사용하여 해당 객체의 키갑의 value를 가지고올 수 있다.
