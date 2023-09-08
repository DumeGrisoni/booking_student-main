import { Link, NavLink } from "react-router-dom";
import Text from "../Components/Utils/Text";
import facebookIcon from "../assets/facebookIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";
import emailIcon from "../assets/emailIcon.svg";
import FormInput from "../Components/FormInput";
import phoneIcon from "../assets/phoneIcon.svg";

const Contact = () => {
  const handleSubmit = (formInputs) => {
    console.log(formInputs);
  };
  return (
    <div className="flexbox-col gap-10 lg:gap-16 default-page my-8 w-full mb-7">
      <section>
        <Text title="Besoin d'aide ?">
          <p>
            Pour toutes questions n&apos;hésitez pas à me{" "}
            <NavLink to="/contact" className="external-link">
              contacter
            </NavLink>
            .
          </p>
          <p>
            Vous pouvez également contacter{" "}
            <a
              href="https://corsica-dys-tdah.assoconnect.com/page/1465993-accueil"
              className="external-link"
            >
              l&apos;association Corsica Dys-Tdah
            </a>{" "}
            !
          </p>
          <p>
            Pour une petite recherche sur les aides financière voici un premier
            site qui pourra déjà vous donner quelques pistes :{" "}
            <a
              href="https://annuaire.action-sociale.org/"
              className="external-link"
            >
              https://annuaire.action-sociale.org/
            </a>
          </p>
        </Text>
      </section>
      <section className="flex lg:flexbox-row flexbox-col gap-7 w-full mx-auto text-center lg:text-start ">
        <div className="flex flex-col gap-5 lg:gap-7 flex-1">
          <h1 className="text-headline text-primary font-bold">Contacts</h1>
          <ul className="flex flex-col justify-start items-start pl-5 gap-7 text-bold text-grey-font">
            <li>
              <Link
                to="https://www.facebook.com/profile.php?id=100092444294604"
                className="flexbox-row gap-5"
                target="_blank"
              >
                <img src={facebookIcon} alt="Icone facebook" />
                <span>J&apos;accroche Plus</span>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/jaccroche_plus/"
                className="flexbox-row gap-5"
                target="_blank"
              >
                <img src={instagramIcon} alt="Icone instagram" />
                <span>jaccroche_plus</span>
              </Link>
            </li>
            <li>
              <Link
                to="mailto:jaccrocheplus@gmail.com"
                className="flexbox-row gap-5"
              >
                <img src={emailIcon} alt="Icone Email" />
                <span>jaccrocheplus@gmail.com</span>
              </Link>
            </li>
            <li>
              <Link to="tel:0625745569" className="flexbox-row gap-5">
                <img src={phoneIcon} alt="Icone Phone" />
                <span>06 25 74 55 69</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flexbox-col lg:gap-7 gap-5 mb-7 lg:ml-5 mt-5 lg:mt-0">
          <h2 className="font-bold text-title text-primary">
            Envoyez-nous un message
          </h2>
          <FormInput onSubmit={handleSubmit} />
        </div>
      </section>
    </div>
  );
};

export default Contact;
