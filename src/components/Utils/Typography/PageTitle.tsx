import React from "react";

interface PropsTypes {
  titleLabel: string
}

export const PageTitle: React.FC<PropsTypes> = ({ titleLabel }) => {
  return <h1 className="font-bold text-[20px] pb-2 md:pb-5">{titleLabel}</h1>;
};
