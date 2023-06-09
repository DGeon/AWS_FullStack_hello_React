// import React, { useState } from "react";

// const IterationSample = () => {
//   // let arr = [];
//   // arr.map((a, b, c) => "");
//   // const names = ["눈사람", "얼음", "눈", "바람"];
//   const obj = [
//     { id: 1, text: "눈사람" },
//     { id: 2, text: "얼음" },
//     { id: 3, text: "눈" },
//     { id: 4, text: "바람" },
//   ];
//   const [names, setNames] = useState(obj);
//   const [inputText, setInputText] = useState("");
//   const [nextId, setNextId] = useState(5); //새로 추가됐을때 부여할 Id 값
//   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
//   const onChange = (e) => setInputText(e.target.value);
//   const onClick = () => {
//     const nextName = names.concat({ id: nextId, text: inputText }); //기존 배열에 추가
//     setNextId(nextId + 1); //nextId값에 1을 더해준다
//     setNames(nextName); //names값을 업데이트 한다
//     setInputText(""); //inputtext를 초기화 한다
//   };
//   return (
//     <>
//       <input value={inputText} onChange={onChange}></input>
//       <button onClick={onClick}>추가</button>
//       <ul>{nameList}</ul>;
//     </>
//   );
// };

// export default IterationSample;

import React, { useState } from "react";

const IterationSample = () => {
  // let arr = [];
  // arr.map((a, b, c) => "");
  // const names = ["눈사람", "얼음", "눈", "바람"];
  const obj = [
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ];
  const [names, setNames] = useState(obj);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로 추가됐을때 부여할 Id 값
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  const onRemove = (id) => {
    setNames(names.filter((name) => name.id !== id));
  };

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextName = names.concat({ id: nextId, text: inputText }); //기존 배열에 추가
    setNextId(nextId + 1); //nextId값에 1을 더해준다
    setNames(nextName); //names값을 업데이트 한다
    setInputText(""); //inputtext를 초기화 한다
  };
  return (
    <>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>;
    </>
  );
};

export default IterationSample;
