import React from "react";
import { Link } from "react-router-dom";
import { PageTitle } from "../../components";

export const EmptyItems = ({ icon, textLabel, pagetitle }) => {
  return (
    <section className="bg-gray-100 pb-[30px] lg:pb-[60px]">
      <div className="container mx-auto pt-3">
        <PageTitle titeLabel={pagetitle} />
        <div className="bg-white rounded h-[331px] flex items-center justify-center border">
          <div className="flex justify-center flex-col items-center">
            <div className="rounded-full overflow-hidden border-8 border-white drop-shadow-lg w-[110px] mb-6">
              <img src={icon} alt="empty-item" />
            </div>
            <p className="text-center px-8">{textLabel}</p>
            <div className="mt-6">
              <Link to="/">
                <div className="bg-blue text-white  text-sm  h-[39px] flex justify-center items-center hover:cursor-pointer drop-shadow-lg px-4 rounded">
                  Continue shopping
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
