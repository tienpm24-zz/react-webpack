import React, { useState } from "react";

const withCounter = (OriginalComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };
    if (count > 4) {
      throw new Error("Crashed App");
    }
    return (
      <OriginalComponent
        {...props}
        count={count}
        incrementCount={incrementCount}
      />
    );
  };

  // return class WithCounter extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   incrementCount = () => {
  //     this.setState((prevState) => {
  //       return { count: prevState.count + 1 };
  //     });
  //   };

  //   render() {
  //     if (this.state.count > 4) {
  //       throw new Error('Crashed App');
  //     }
  //     return (
  //       <OriginalComponent
  //         {...this.props}
  //         count={this.state.count}
  //         incrementCount={this.incrementCount}
  //       />
  //     );
  //   }
  // };
};

export default withCounter;
