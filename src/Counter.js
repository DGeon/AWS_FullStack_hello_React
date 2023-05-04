import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }
  //위 코드를 아래처럼 쓸 수 있다.(필드라고 생각하면 됨)
  state = { number: 0, fixedNumber: 0 };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button
          onClick={() => {
            //p110
            // this.setState((prevState) => {
            //   return { number: prevState.number + 1 };
            // });
            // this.setState((prevState) => {
            //   return { number: prevState.number + 1 };
            // });

            //콜백
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState가 호출");
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
