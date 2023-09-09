import { NavLink } from "react-router-dom";
import Button from "../Components/Utils/Button.jsx";
import PricingContainer from "../Components/PricingContainer.jsx";
import TaxBanner from "../Components/TaxBanner.jsx";
import Text from "../Components/Utils/Text.jsx";

const Pricing = () => {
  return (
    <div className="flexbox-col gap-10 m-10">
      <TaxBanner />
      <p className="text-default text-primary text-center">
        Je vous conseille de joindre les documents directement avec votre
        déclaration de revenus.
      </p>
      <p className="text-title text-primary-var-1 text-center">
        Déplacement en région bastiaise, Corse, suivi à domicile.
        <br /> Me contacter pour plus d&apos;informations.
      </p>
      <div className="md:flexbox-row flex-wrap flexbox-col gap-8 mb-5">
        <PricingContainer
          title="Cours particuliers"
          price="30€"
          secondPrice="220€"
          hour="1 Heure"
          secondHour="8 Heures"
        >
          <ul className="flexbox-col-start text-default gap-7">
            <li>- Aide aux devoirs.</li>
            <li>- Révisions des notions.</li>
            <li className="text-bold">
              - Renforcement des clés et outils utilisés avec ses spécialistes
              (graphie, motricité, mémoire, outils numériques etc.).
            </li>
            <li>- Mise en place des stratégies.</li>
            <li>- Découvrir son propre mode de fonctionnement.</li>
          </ul>
        </PricingContainer>
        <PricingContainer title="Enfant Déscolarisé" price="240€">
          <ul className="flexbox-col-start gap-7 text-default">
            <li className="text-bold">
              - Intégrer les notions de la semaine passée dans la mémoire à long
              terme.
            </li>
            <li>- Travailler les notions difficiles.</li>
            <li>- Mettre en place des stratégies.</li>
            <li>- Découvrir son propre mode de fonctionnement.</li>
            <li>- Une journée par semaine (lundi, mardi, jeudi ou vendredi)</li>
            <li className="text-bold">
              - Tarif pour 4 journées dans le mois ( 4 heures par jour).
            </li>
          </ul>
        </PricingContainer>
        <PricingContainer
          title="Stage d'Eté"
          hour="Nous Contacter"
          price="240€"
        >
          <ul className="flexbox-col-start gap-7">
            <li className="text-bold">
              - Groupe de 4 à 5 enfants de même niveau (scolaire).
            </li>
            <li className="text-bold">- Une semaine, 4 heures par jour.</li>
            <li className="text-bold">- Révisions approfondies.</li>
            <li>- Mise en place de stratégies.</li>
            <li>- Découvrir son propre mode de fonctionnement.</li>
            <li className="text-bold">- Travail de socialisation.</li>
            <li className="text-bold">- Aide par le tutorat.</li>
          </ul>
        </PricingContainer>
        <PricingContainer title="Stage Préparation DNB" price="Nous Contacter">
          <ul className="flexbox-col-start gap-7 text-default">
            <li>- 4 à 5 heures par jour suivant ses besoins.</li>
            <li>- Préparation aux épreuves de Brevet.</li>
            <li className="text-bold">- Acquisition de l&apos;organisation.</li>
            <li className="text-bold">- Travail émotionnel.</li>
            <li>- Sujet blanc.</li>
          </ul>
        </PricingContainer>
      </div>
      <Button>
        <NavLink to="/bookings">Réserver</NavLink>
      </Button>
      <div className="flexbox-row md:w-[90%] text-center ">
        <Text>
          L&apos;entreprise se réserve le droit de modifier unilatéralement les
          prix de son offre à tout moment, notamment en cas d&apos;augmentation
          des coûts, étant entendu que, en cas d&apos;augmentation des prix
          postérieure à l&apos;acceptation de l&apos;offre, seul le prix fixé au
          jour de cette acceptation sera applicable au client.
        </Text>
      </div>
    </div>
  );
};

export default Pricing;
