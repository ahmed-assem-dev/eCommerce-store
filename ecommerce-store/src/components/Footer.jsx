import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col border-t-4 border-blue-800 items-center">
      <div>
        <div className="flex flex-row justify-center items-center my-10">
          <h1 className="text-xl font-serif font-light">Connect with us</h1>
          <ul className="flex ">
            <li>
              <AiFillFacebook className="text-2xl mx-4 " />
            </li>
            <li>
              <AiFillInstagram className="text-2xl mx-4" />
            </li>
            <li>
              <AiFillYoutube className="text-2xl mx-4" />
            </li>
            <li>
              <AiFillTwitterCircle className="text-2xl mx-4" />
            </li>
            <li>
              <AiFillLinkedin className="text-2xl mx-4" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row w-full justify-evenly my-5">
        <ul className="text-sm">
          <h1 className="my-2 text-md text-gray-500">STORES</h1>
          <li className="my-1">Famously pick up</li>
          <li className="my-1">Find a store</li>
        </ul>
        <ul className="text-sm">
          <h1 className="my-2 text-md text-gray-500">FAMOUSLY YOU </h1>
          <li className="my-1">Sign In / Join Now</li>
          <li className="my-1">Learn More</li>
          <li className="my-1">Credit Card</li>
          <li className="my-1">Mobile App</li>
          <li className="my-1">Rewards Terms</li>
        </ul>
        <ul className="text-sm">
          <h1 className="my-2 text-md text-gray-500">HELP</h1>
          <li className="my-1">FAQ / Contact Us</li>
          <li className="my-1">Shipping & Returns</li>
          <li className="my-1">Exclusions</li>
          <li className="my-1">Track My Order</li>
          <li className="my-1">Gift Cards</li>
          <li className="my-1">Shoe Size Charts</li>
          <li className="my-1">Zip</li>
          <li className="my-1">Unsubscribe from Email</li>
          <li className="my-1">Accessibility</li>
          <li className="my-1">Do Not Sell My Personal Info –</li>
          <li className="my-1">CA Residents</li>
        </ul>
        <ul className="text-sm">
          <h1 className="my-2 text-md text-gray-500">ABOUT US</h1>
          <li className="my-1">About Us</li>
          <li className="my-1">Careers</li>
          <li className="my-1">Ticket to Dream</li>
          <li className="my-1">Site Map</li>
          <li className="my-1">Eco-Conscious</li>
        </ul>
        <div></div>
      </div>
      <div className="text-center w-[80%] text-sm font-light my-5">
        <sup>1</sup>Yes, I would like to receive emails with trends, updates &
        special offers a few times a week. By providing my information, I am
        certifying that I am at least 18 years old. Note: we collect and use the
        information you provide in accordance with our{" "}
        <Link className="underline font-normal">Privacy Policy.</Link>
      </div>
    </div>
  );
};

export default Footer;
