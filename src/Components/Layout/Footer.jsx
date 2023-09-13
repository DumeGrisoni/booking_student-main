import { Link } from "react-router-dom";
import facebookIcon from "../../assets/facebookIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import emailIcon from "../../assets/emailIcon.svg";
const Footer = () => {
  return (
    <section className=" h-auto pt-5 lg:pt-0 lg:h-[200px] flex-col lg:flex-row flex text-default w-full justify-center gap-5 lg:gap-[40%] items-center border-t border-grey-font">
      {/* LEFT PART > TOP PART */}
      <div className=" text-primary lg:items-start items-center flex flex-col gap-2.5 lg:gap-7">
        <p>Siret : 952 620 045 00015</p>
        <Link
          to="/"
          className="text-primary-var-1 hover:text-primary transition-all"
        >
          Mentions légales
        </Link>
      </div>
      {/* RIGHT PART > BOTTOM PART */}
      <div className="flex flex-col gap-2 items-center lg:mb-0 mb-5">
        <h2 className="text-primary ">Contacts</h2>
        <p className="text-default text-primary">
          <b>Tel:</b> 06 25 74 55 69
        </p>
        <ul className="flex gap-10">
          <li>
            <Link
              to="https://www.facebook.com/profile.php?id=100092444294604"
              target="_blank"
            >
              <img src={facebookIcon} alt="Logo facebook" />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/jaccroche_plus/"
              target="_blank"
            >
              <img src={instagramIcon} alt="logo instagram" />
            </Link>
          </li>
          <li>
            <Link to="mailto:jaccrocheplus@gmail.com">
              <img src={emailIcon} alt="logo mail" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
