// import React, { Component } from "react";
// import "./ValidationSample.css";

// class ValidationSample extends Component {
//   state = {
//     password: "",
//     clicked: false,
//     validated: false,
//   };

//   handleChange = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };
//   hableButtonClick = () => {
//     this.setState({
//       clicked: true,
//       validated: this.state.password === "0000",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <input
//           type="password"
//           value={this.state.password}
//           onChange={this.handleChange}
//           className={
//             this.state.clicked
//               ? this.state.validated
//                 ? "success"
//                 : "failure"
//               : ""
//           }
//         />
//         <button onClick={this.hableButtonClick}>검증하기</button>
//       </div>
//     );
//   }
// }

// export default ValidationSample;

import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  hableButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };
  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          //focus를 주기 위해서 ref를 보낸다
          ref={(ref) => (this.input = ref)}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.hableButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
