import TaxBanner from "../Components/TaxBanner.jsx";
import OfferBanner from "../Components/OfferBanner.jsx";
import logo from "../assets/logo.svg";
import Text from "../Components/Utils/Text.jsx";
import image from "../assets/image.jpg";
// import Calendar2 from "../Components/Calendar/Calendar.jsx";

function Home() {
  return (
    <div className="default-page lg:my-text flexbox-col gap-[20px] lg:gap-[50px] pt-7">
      <section className="flexbox-col mx-auto gap-[20px] lg:gap-[50px]">
        <TaxBanner />
        <OfferBanner />
      </section>
      <div className="flex flex-col sm:flex-row">
        {/* SECTION IMAGE */}
        <section className="flex-1 lg:mt-10">
          <img
            src={image}
            alt="photo du professeur"
            className=" w-[250px] lg:w-[400px] m-5 lg:m-10  mx-auto shadow-lg rounded-md shadow-grey-font"
          />
        </section>
        {/* SECTION TEXTE */}
        <section className="lg:flex-1 flexbox-col lg:flexbox-col-start gap-[20px] lg:gap-[30px] text-primary mb-8">
          <div className="text-headline text-primary flexbox-row gap-2 lg:gap-3">
            <img src={logo} alt="Logo" className="lg:w-[100px] w-[50px] " />
            <h1 className="font-bold">J&apos;accroche </h1>
            <h2 className="text-primary-var-1 text-[50px] lg:text-[100px] font-bold">
              +
            </h2>
          </div>
          <div className="flex flexbox-col gap-[20px] lg:gap-[30px] text-default">
            <Text title="Cours particuliers">
              <p>
                Au sein des établissement les professeurs n&apos;ont pas tous
                les moyens et le temps de mettre en place de nouvelles
                pédagogies favorisant l&apos;hétérogénéité des profils et ce
                malgré la mise en place de la{" "}
                <a
                  href="https://www.cairn.info/revue-administration-et-education-2016-2-page-159.htm#:~:text=La%20p%C3%A9dagogie%20diff%C3%A9renci%C3%A9e%20%3A%20elle%20se,comme%20celui%20qui%20fait%20apprendre"
                  className="external-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  différenciation pédagogique
                </a>
                .
              </p>
              <p>
                Je m&apos;appelle Julie, je suis une jeune femme hypersensible
                titulaire de deux masters. En observant mes classes, je me suis
                rendu compte du mal-être de nombreux élèves qui étaient prêts à
                renoncer.
              </p>
              <p>
                Avec J&apos;accroche + j&apos;ai le désire de transmettre un
                soutien aux enfants confrontés à des troubles des
                apprentissages. Mon but aujourd&apos;hui est de libérer les
                enfants de leurs difficultés grâce à la découverte de leur
                propre fonctionnement dans les apprentissages et ainsi les
                rendre heureux d&apos;apprendre de manière efficace.
              </p>
              <p>
                Je me déplace sur la région bastiaise, entre Bastia et Casamozza
                mais n&apos;hésitez pas à me contacter pour tous renseignements.
              </p>
            </Text>
          </div>
        </section>
      </div>
      {/* <Calendar2 /> */}
    </div>
  );
}

export default Home;
