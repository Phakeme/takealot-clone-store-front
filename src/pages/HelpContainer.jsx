import React from "react";
import { QNA } from "../components";

export const HelpContainer = () => {
  const data = [
    {
      title: "What are my delivery options and how much does it cost?",
      body: "Standard delivery is FREE for orders totalling R450 or more. You can view all our delivery options here to find out how much it costs and how long each option takes.",
    },
    {
      title: "When will my order be delivered?",
      body: "We'll deliver your order by the Estimated Delivery Date provided in your Payment Confirmation emailYou can also track your delivery at any time by selecting the Order from your Order History on your Takealot Account profile here. This is the most current tracking information we have for your order. If this date changes, we’ll let you know straight away by email or SMS.",
    },
    {
      title: "Can I reschedule my delivery?",
      body: "To reschedule your delivery, follow these easy steps: Go to your Orders page. Select the order you would like to reschedule. If your delivery is eligible for rescheduling, a Reschedule Delivery button will be displayed on the Order Detail page. Choose a new delivery date from the available options and select Save Date. A confirmation message will be displayed to confirm that the rescheduling has been successful.",
    },
    {
      title: "About Takealot Pickup Points",
      body: "Takealot Pickup Points provide you with an alternative delivery location where you can collect your Takealot order. A number of Pickup Points are available across South Africa. You can find a list of available Takealot Pickup Points here. During checkout, you'll see the option to Collect your order from a Takealot Pickup Point if all items in your shopping cart are eligible for collection. If all items in your shopping cart add up to R450 or more, your order will qualify for the FREE Standard Collect option. Standard Collect for orders below R450 costs R25.",
    },
    {
      title: "Can I extend my collection expiry date?",
      body: "It is not possible to extend your collection expiry date. Once you have received a notification that your order is ready for collection, you’ll then have 7 calendar days in which to collect your order. We will send you reminders over the course of the collection period, but unfortunately are unable to extend or change your final collection expiry date.",
    },
    {
      title: "Why is my refund taking so long?",
      body: "Refunds are usually processed within 3-5 working days, depending on your bank's processing time.",
    },
    {
      title: "I have a refunds question not listed here, can you help?",
      body: "Please complete our Help form below and one of our friendly online shopping assistants will be in touch to help.",
    },
    {
      title: "How do I register an account on takealot.com?",
      body: "Registering on takealot.com is easy. To get started you’ll need an email address and at least one contact telephone number.",
    },
    {
      title: "Is it safe to shop on takealot.com?",
      body: "We take the security of your payment and personal information seriously. See section 6 of our Terms and Conditions for details of options available to you, and the Payment FAQ above.",
    },
    {
      title: "Can you help me find an item?",
      body: "If you know the department where your product is most likely to be stocked, you can browse our range using our 'Shop by Department' menu on the takealot.com homepage.",
    },
  ];
  return (
    <div className="container mx-auto " data-testid="help-page">
      <div className="m-auto mt-0 md:mt-[60px] pb-10 md:pb-[60px] md:mb-[60px] mb-5 bg-gray-100 w-full md:w-3/4 p-2 md:p-6">
        <h2 className="text-xl font-bold text-center mt-[20px]">
          What can we help you with?
        </h2>
        <div className="mt-3 md:mt-10 px-3 md:px-10">
          {data.map((item, index) => (
            <div className="bg-white" key={index}>
              <QNA item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
