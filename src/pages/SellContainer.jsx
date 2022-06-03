import React from "react";
import { Hero, SellSection } from "../components";
import OptimiseBg from "../images/sell/optimise-your-growth.jpg";
import EndtoEndBg from "../images/sell/end-to-end-solutions.jpg";
import HassleBg from "../images/sell/hassle-free-logistics.jpg";
import SafeBg from "../images/sell/safe-and-secure-payments.jpg";

export const SellContainer = () => {
  const data = [
    {
      title: "Optimise Your Growth",
      body: "Easily boost your sales by leveraging our active customer base of over 2 million happy online shoppers.",
      bgImage: OptimiseBg,
    },
    {
      title: "End–to–End Solutions",
      body: "We'll provide the tools you need to set up and sell – manage your stock, pricing, product selection and more from the Takealot Seller Portal.",
      bgImage: EndtoEndBg,
    },
    {
      title: "Hassle–Free Logistics",
      body: "From handling warehousing to delivery and returns, we've made online retail easier than ever.",
      bgImage: HassleBg,
    },
    {
      title: "Safe & Secure Online Payments",
      body: "Payments are made directly to you four times per month.",
      bgImage: SafeBg,
    },
  ];
  return (
    <div>
      <Hero />
      <SellSection
        bg="bg-gray-100"
        heading="Get the tools you need to increase sales and grow your business online"
        subHeading="Selling your products online has never been easier. Simply apply to sell as a Takealot seller today and easily reach online shoppers across South Africa."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.map((item, index) => (
            <div key={index} className="bg-white border">
              <div
                className="bg-red-100 h-[320px] md:h-[297px] lg:h-[180px]"
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="pb-6">
                <h3 className="p-[20px] font-bold text-black text-[20px]">
                  {item.title}
                </h3>
                <p className="px-3">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </SellSection>

      <div className="" id="pricing">
        Pricing
      </div>
    </div>
  );
};
