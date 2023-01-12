import CardIcon from "../../images/account/card.svg";
import CartIcon from "../../images/account/gray-cart.svg";
import DocumentIcon from "../../images/account/document.svg";
import HeartIcon from "../../images/account/heart.svg";
import { Link } from "react-router-dom";
import QuestionIcon from "../../images/account/question.svg";
import React from "react";
import UserIcon from "../../images/account/user.svg";

interface ItemProps {
  type: string
  icon: string
  links: {
    path: string
    textLabel: string
  }[]
  key: number
}

const getIcon = (name: string) => {
  switch (name) {
      case 'HeartIcon':
        return HeartIcon
      case 'DocumentIcon':
        return DocumentIcon
      case 'CartIcon':
         return CartIcon
        case 'QuestionIcon':
         return QuestionIcon
        case 'UserIcon':
         return UserIcon
        case 'CardIcon':
        return CardIcon
      default:
          break;
  }
}

export const AccountType: React.FC<ItemProps> = ({type, icon, links }) => {
  return (
    <div  className="rounded bg-white border px-5 py-5">
      <div className="flex justify-between">
        <div className="font-bold">
          <h2>{type}</h2>
        </div>
        <div className="">
          <img className="w-[25px]" src={getIcon(icon)} alt={icon} />
        </div>
      </div>
      <ul className="my-2">
        {links?.map((item, index) => (
          <li
            className="text-sm mb-1 text-blue hover:underline w-fit"
            key={index}
          >
            <Link to={item.path}>{item.textLabel}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
