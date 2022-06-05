import React from "react";
import { Link } from "react-router-dom";
import { Hero, SellSection } from "../components";
import ReactPlayer from "react-player";
import OptimiseBg from "../images/sell/optimise-your-growth.jpg";
import EndtoEndBg from "../images/sell/end-to-end-solutions.jpg";
import HassleBg from "../images/sell/hassle-free-logistics.jpg";
import SafeBg from "../images/sell/safe-and-secure-payments.jpg";
import Application from "../images/sell/application.svg";
import Approval from "../images/sell/approval.svg";
import Registration from "../images/sell/registration.svg";
import Onboarding from "../images/sell/onboarding.svg";
import Sales from "../images/sell/sales.svg";
import Growth from "../images/sell/growth.svg";

export const SellContainer = () => {
  const everySellerData = [
    {
      companyName: "Handcrafted Toys",
      person: "Luvuthando Dolls",
      body: "“Being on Codealot Marketplace has really had a positive impact on my life and my business. I would absolutely recommend it to any budding entrepreneur.”",
      video: "https://www.youtube.com/watch?v=ckvEFTStwUc",
    },
    {
      companyName: "Solly M Sports",
      person: "Sports Apparel and Equipment",
      body: "“From the time that we started, we've only seen an upward trend. It's not only important for income and for revenue and turnover, but also for general business growth.”",
      video: "https://www.youtube.com/watch?v=TtyDYM1RBog",
    },
    {
      companyName: "African Technopreneurs",
      person: "VR & Augmented Reality",
      body: "“It's been a smooth transition, being able to talk to our account manager, being able to get our products onto the platform and Codealot has been a reliable partner for us to actually work with.”",
      video: "https://www.youtube.com/watch?v=dPdQaC2FfsQ",
    },
    {
      companyName: "King Kong Leather",
      person: "Handcrafted Leather Bags & Accessories",
      body: "“We've experienced tremendous growth, and have benefited from great online exposure through Codealot Marketplace.”",
      video: "https://www.youtube.com/watch?v=fopgaKmomVY",
    },
    {
      companyName: "Love Tea Time",
      person: "Luxury Teas & Infusions",
      body: "“I can now own a shop that's open 24 hours a day, and I've experienced 100% year–on–year growth since joining Codealot Marketplace.”",
      video: "https://www.youtube.com/watch?v=NSfZDN5gU1Y",
    },
    {
      companyName: "Miss Lyn",
      person: "Fine Home & Hospitality Bed Linen",
      body: "“Codealot Marketplace offers end–to–end solutions, and access to over a million customers countrywide, something that isn't achievable with just brick and mortar stores.”",
      video: "https://www.youtube.com/watch?v=NAUIU-KSnto",
    },
  ];
  const sellingSteps = [
    {
      title: "Application",
      body: "Tell us about your business and products.",
      image: Application,
    },
    {
      title: "Approval",
      body: "We'll review your application and get in touch within 10 business days.",
      image: Approval,
    },
    {
      title: "Registration",
      body: "Complete your Codealot Seller account by supplying all the required information and paperwork.",
      image: Registration,
    },
    {
      title: "Onboarding",
      body: "Learn all about our processes and choose your stock model.",
      image: Onboarding,
    },
    {
      title: "Sales",
      body: "Get your products live and start selling.",
      image: Sales,
    },
    {
      title: "Growth",
      body: "Growth Boost your online sales via promotions, analyse your performance using reports and so much more.",
      image: Growth,
    },
  ];
  const toolsdata = [
    {
      title: "Optimise Your Growth",
      body: "Easily boost your sales by leveraging our active customer base of over 2 million happy online shoppers.",
      bgImage: OptimiseBg,
    },
    {
      title: "End–to–End Solutions",
      body: "We'll provide the tools you need to set up and sell – manage your stock, pricing, product selection and more from the Codealot Seller Portal.",
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
        textColor="text-black"
        bg="bg-gray-100"
        heading="Get the tools you need to increase sales and grow your business online"
        subHeading="Selling your products online has never been easier. Simply apply to sell as a Codealot seller today and easily reach online shoppers across South Africa."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolsdata?.map((item, index) => (
            <div key={index} className="bg-white border">
              <div
                className="h-[320px] md:h-[297px] lg:h-[180px]"
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
      <SellSection
        bg="bg-blue"
        heading="Start selling online in just a few easy steps"
        textColor="text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {sellingSteps?.map((item, index) => (
            <div key={index} className="">
              <div className="flex items-center justify-center mb-3">
                <img src={item.image} alt="label" />
              </div>
              <div>
                <h3 className="mb-3 font-bold text-[20px]">{item.title}</h3>
                <p className="text-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </SellSection>
      <SellSection
        textColor="text-black"
        bg="bg-gray-100"
        heading="Every seller has a success story to share"
        subHeading="Learn how businesses of all sizes have grown."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {everySellerData?.map((item, index) => (
            <div key={index} className="bg-white border">
              <div className="bg-gray-200 h-[330px] md:h-[220px]">
                <ReactPlayer
                  url={item.video}
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="pb-6">
                <p className="p-4 text-gray-500">{item.body}</p>
                <h3 className="font-bold text-black text-[20px]">
                  {item.companyName}
                </h3>
                <p className="px-3 text-sm text-gray-500">{item.person}</p>
              </div>
            </div>
          ))}
        </div>
      </SellSection>
      <div id="selling">
        <SellSection
          bg="bg-blue"
          heading="Ready to start selling online?"
          textColor="text-white"
        >
          <Link to="/login">
            <div className="bg-white px-6 py-3 cursor-pointer w-fit m-auto rounded text-blue font-bold hover:bg-gray-100">
              <span>Login to start selling</span>
            </div>
          </Link>
        </SellSection>
      </div>
    </div>
  );
};
