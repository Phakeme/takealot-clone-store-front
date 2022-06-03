import React from "react";

export const SellSection = ({
  heading,
  subHeading,
  bg,
  children,
  textColor,
}) => {
  return (
    <section className={`${bg} pb-10 ${textColor}`}>
      <div className="container mx-auto">
        <div className="text-center pt-[50px] pb-8">
          <h3 className={`text-[28px] font-bold ${textColor}`}>{heading}</h3>
          <p className="mb-[40px]">{subHeading}</p>
          {children}
        </div>
      </div>
    </section>
  );
};
