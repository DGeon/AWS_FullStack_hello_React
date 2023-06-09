// import { Fragment } from "react";
// import { Component, Fragment } from "react";
// import "./App.css";
// function App() {
//   // '',false, 0, null, undefined
//   let name ="리액트2";
//   let number = 0;
//   let text="";
//   // if(name==="JSX"){
//   //   text='<h1>리액트 입니다</h1>';
//   // }else{
//   //   text='<h2>리액트 아닙니다</h2>';
//   // }
//   return (
//     <Fragment>
//       {
//         number && <h1>리액트 입니다</h1>
//         // name ==="리액트" && <h1>리액트 입니다</h1>
//         // {name === "JSX" ? (<h1>리액트 입니다</h1>) : (<h2>리액트 아닙니다</h2>)}
//       }
//     </Fragment>
//   );
// }

// 함수형 컴포넌트라고 한다.
// function App() {
//   const name = "리액트";
//   return (
//     <div className="react">
//       {name}
//       <input />
//     </div>
//   );
// }

//클래스형 컴포넌트
// class App extends Component {
//   render = function () {
//     return <h1>hello World</h1>;
//   };
// }

//애로우펑션(MyComponent.js 불러옴)
// import MyComponent from "./MyComponent";
// const App = () => {
//   // return <MyComponent name="React" />;
//   // return <MyComponent />;
//   // return <MyComponent name="리액트"></MyComponent>;
//   return <MyComponent name={3}>React</MyComponent>; //Children의 값이 나온다
// };
// export default App;

// import MyComponent from "./MyComponent";

// const App = () => {
//   return <MyComponent name="가나다라">React</MyComponent>;
// };

// export default App;

//---------------------- 0505 p109 -------------------------------------
// import Counter from "./Counter";
// const App = () => {
//   return <Counter />;
// };
// export default App;

// import Say from "./say";

// const App = () => {
//   return <Say />;
// };
// export default App;

//---------------------- 0508 p123 -------------------------------------
// import EventPractice from "./EventPractice.js";

// const App = () => {
//   return <EventPractice />;
// };

// export default App;

// import EventPracticeFn from "./EventPracticeFn";

// const App = () => {
//   return <EventPracticeFn />;
// };

// export default App;

// import ValidationSample from "./ValidationSample.js";

// const App = () => {
//   return <ValidationSample />;
// };

// export default App;

//p146
// import ValidationSample from "./ValidationSample.js";
// import React, { Component } from "react";
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ValidationSample />
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// import Scrollbox from "./Scrollbox.js";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Scrollbox ref={(ref) => (this.scrollbox = ref)} />
//         <button onClick={() => this.scrollbox.scrollToTop()}>맨 위로</button>
//         <button onClick={() => this.scrollbox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// import IterationSample from "./IterationSample.js";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <IterationSample />
//       </div>
//     );
//   }
// }

// export default App;

//---------------------- 0509 p179 -------------------------------------
import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * Math.pow(2, 24)).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
