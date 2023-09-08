import { Link } from 'react-router-dom';
import Button from './Utils/Button';

const TaxBanner = () => {
  return (
    // BANNER PROMO
    <section className="flex flex-col items-center text-center justify-center gap-[20px] lg:gap-[30px] w-[300px] lg:w-[550px] font-bold">
      <h1 className="text-headline text-primary">
        50% <br /> de crédit d&apos;impôts pour tous !
      </h1>
      <h2 className="text-title text-primary-var-1 w-[80%]">
        J’accroche + est une entreprise déclarée !
      </h2>

      <Button>
        <Link
          to="https://www.impots.gouv.fr/particulier/emploi-domicile"
          target="_blank"
        >
          Voir la démarche à suivre
        </Link>
      </Button>
    </section>
  );
};

export default TaxBanner;
