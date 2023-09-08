/* eslint-disable no-unused-vars */
import { supabase } from "../../lib/helpers/supabaseClient";
import { NavLink, useNavigate } from "react-router-dom";
import ParentForm from "../../Components/Clients/ParentForm";

const SignUp = () => {
  const navigate = useNavigate();
  async function handleParentSubmit(formData) {
    try {
      const { data, error } = await supabase.auth.signUp({
        password: formData.password,
        email: formData.email,
        options: {
          data: {
            email: formData.email,
            name: formData.name,
            address: formData.address,
            city: formData.city,
            postale: formData.postale,
            phone: formData.phone,
          },
        },
      });
      if (error) throw error;
      navigate("/profile/enfant");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <h1 className="default-page text-primary-var-2 font-bold text-default text-center mb-7">
        Les éléments marqués d&apos;un astérisque sont obligatoires.
      </h1>
      <div className="default-page text-primary text-default ">
        <ParentForm onSubmit={handleParentSubmit} />
        <div>
          <button className="flex mx-auto mt-7 external-link mb-7">
            <NavLink to="/connexion">
              Vous avez déjà un compte ? Connectez-vous
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
