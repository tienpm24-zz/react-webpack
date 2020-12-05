import React, { useState } from 'react';

const withCounter = (OriginalComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };
    if (count > 4) {
      throw new Error('Crashed App');
    }
    return (
      <OriginalComponent
        {...props}
        count={count}
        incrementCount={incrementCount}
      />
    );
  };
};

export default withCounter;
