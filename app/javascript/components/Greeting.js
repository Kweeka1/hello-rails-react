import React from "react";
import { useSelector } from "react-redux";

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);

  return greeting.pending ? <div>Loading...</div> : <div>{greeting.message}!</div>;
};

export default Greeting;
