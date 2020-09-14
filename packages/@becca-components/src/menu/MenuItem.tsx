import React from "react";

interface Props {
  children: React.ReactText;
}

function MenuItem({ children }: Props) {
  return <li role="option">{children}</li>;
}