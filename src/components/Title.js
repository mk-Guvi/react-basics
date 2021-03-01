import React from "react";
import useHover from "../hooks/useHover";

//arguments passed for the components are called as props of that component

const Title = ({ title }) => {
  const targetElement = useHover();
  return <h1 ref={targetElement}>{title}</h1>;
};

export default Title;
