import React from 'react';

const withCounter = (OriginalComponent) => {
  return class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      if (this.state.count > 4) {
        throw new Error('Crashed App');
      }
      return (
        <OriginalComponent
          {...this.props}
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  };
};

export default withCounter;
