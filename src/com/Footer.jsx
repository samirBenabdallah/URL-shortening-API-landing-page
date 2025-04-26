import { logoWhite } from "../images/img";
import List from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="px-[10%] flex py-10 bg-Very-Dark-Blue max-[790px]:flex-col ">
      <img
        src={logoWhite}
        alt="logo"
        className="bg-white h-10 max-[790px]:w-max max-[790px]:mx-auto"
      />
      <div className="ml-auto max-[790px]:mx-auto max-[790px]:mt-10 flex max-[790px]:flex-col">
        <List
          className={"mr-7 max-[790px]:mx-auto h-max"}
          list={["link shortening", "branded links", "analytics"]}
          title={"features"}
        />
        <List
          className={"mr-7 max-[790px]:mx-auto h-max"}
          list={["blog", "developers", "support"]}
          title={"resources"}
        />
        <List
          className={"mr-7 max-[790px]:mx-auto h-max"}
          list={["about", "our team", "careers", "contact"]}
          title={"company"}
        />
      </div>
      <div className="mt-2 *:cursor-pointer max-[790px]:mx-auto">
        <FontAwesomeIcon icon={faFacebook} className="text-white text-xl duration-300 hover:text-Cyan mr-5" />
        <FontAwesomeIcon icon={faTwitter} className="text-white text-xl duration-300 hover:text-Cyan mr-5" />
        <FontAwesomeIcon icon={faPinterest} className="text-white text-xl duration-300 hover:text-Cyan mr-5" />
        <FontAwesomeIcon icon={faInstagram} className="text-white text-xl duration-300 hover:text-Cyan" />
      </div>
    </div>
  );
}

export default Footer;
