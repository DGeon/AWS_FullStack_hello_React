// import React from "react";

// const EventPractice = () => {
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         name="message"
//         placeholder="아무거나 입력해보세요"
//         onChange={(e) => {
//           console.log(e);
//           // console.this(e.target.value);
//         }}
//       />
//     </div>
//   );
// };

// export default EventPractice;

import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="입력"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}
export default EventPractice;

// import React, { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     message: "",
//   };
//   //바인드 작업
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       message: e.target.value,
//     });
//   }
//   handleClick() {
//     alert(this.state.message);
//     this.setState({ message: "" });
//   }
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           name="message"
//           placeholder="아무거나 입력해보세요"
//           value={this.state.message}
//           onChange={(e) => {
//             this.setState({
//               message: e.target.value,
//             });
//           }}
//         />
//         {/* <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({ message: "" });
//           }}
//         > */}
//         <button onClick={this.handleClick}>확인</button>
//         <h2>{this.state.message}</h2>
//       </div>
//     );
//   }
// }

// export default EventPractice;

// import React, { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     message: "",
//   };
//   //바인드 작업
//   // constructor(props) {
//   //   super(props);
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.handleClick = this.handleClick.bind(this);
//   // }

//   //위에 있는 바인드 작업을 안하게 되면 아래와 같이 작성하면 된다
//   handleChange = (e) => {
//     this.setState({
//       message: e.target.value,
//     });
//   };
//   handleClick = () => {
//     alert(this.state.message);
//     this.setState({ message: "" });
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           name="message"
//           placeholder="아무거나 입력해보세요"
//           value={this.state.message}
//           onChange={(e) => {
//             this.setState({
//               message: e.target.value,
//             });
//           }}
//         />
//         {/* <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({ message: "" });
//           }}
//         > */}
//         <button onClick={this.handleClick}>확인</button>
//         <h2>{this.state.message}</h2>
//       </div>
//     );
//   }
// }
