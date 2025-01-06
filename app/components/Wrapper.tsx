import React from "react";
type WrapperProps = {
  children: React.ReactNode;
};

const wrapper = ({ children }: WrapperProps) => {
  return <div>{children}</div>;
};

export default wrapper;
