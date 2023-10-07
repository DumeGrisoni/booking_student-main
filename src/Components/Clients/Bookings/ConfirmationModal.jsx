/* eslint-disable react/prop-types */
import Button from "../../Utils/Button";
const ConfirmationModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-secondary-blur border">
      <div className="fixed z-10 top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 bg-secondary border border-grey-font rounded-md">
        <div className="p-16 flex flex-col gap-7 text-primary items-center justify-center text-default text-center">
          <h2 className="text-title font-bold">
            Nous vous remercions pour votre réservation
          </h2>
          <p>Votre cours est bien réservé !</p>
          <p>Vous recevez un message de confirmation bientôt</p>
          <Button onClick={closeModal}>Confirmer</Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
