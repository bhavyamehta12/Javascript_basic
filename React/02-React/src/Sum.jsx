import React from "react";

const Sum = React.memo(({ number }) => {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    sum += i;
  }

  return <p>{sum}</p>;
});

export default Sum;