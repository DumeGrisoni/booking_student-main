/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { supabase } from "../../lib/helpers/supabaseClient";
import { useAuth } from "../../lib/hooks/Auth";

const ParentInfos = () => {
  const [profile, setProfile] = useState();
  const { user } = useAuth();
  useEffect(() => {
    const { data, error } = supabase
      .from("profiles")
      .select()
      .eq("id", user.id)
      .then((result) => {
        setProfile(result.data[0]);
      });
  }, []);

  return (
    <section className="flexbox-col-start w-full gap-7 t">
      <div className="flex justify-between w-full">
        <h2 className="text-title font-bold">Vos informations</h2>
        <button className="btn p-1">Modifier</button>
      </div>

      <div className="flexbox-col-start gap-7">
        <hr />
        <div className="flex gap-3">
          <span className="text-primary-var-1 font-bold">
            • Nom de Famille :{" "}
          </span>
          <span>{profile?.name}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-primary-var-1 font-bold">• Courriel : </span>
          <span>{profile?.email}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-primary-var-1 font-bold">• Numéro : </span>
          <span>{profile?.phone}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-primary-var-1 font-bold">• Ville : </span>
          <span>{profile?.city}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-primary-var-1 font-bold">• adresse : </span>
          <span>{profile?.address}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-primary-var-1 font-bold">
            • Code Postale :{" "}
          </span>
          <span>{profile?.postale}</span>
        </div>
      </div>
    </section>
  );
};

export default ParentInfos;
