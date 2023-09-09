/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { supabase } from "../../lib/helpers/supabaseClient";
import { useAuth } from "../../lib/hooks/Auth";
import { useAPI } from "../../lib/hooks/Data";

const ParentInfos = ({ userProfile }) => {
  return (
    <section className="flexbox-col-start w-full">
      <div className="flexbox-col w-full">
        <div className="flexbox-row justify-between w-full bg-secondary-var-1 p-7 rounded-md">
          <h2 className="lg:text-title font-bold">Vos informations</h2>
          <button className="btn p-1">Modifier</button>
        </div>
        <hr className="w-full text-grey-font" />
      </div>

      <div className="flexbox-col-start gap-7 pl-7 pt-7">
        <div className="flex gap-3">
          <span className="text-primary-var-1 font-bold">
            • Nom de Famille :{" "}
          </span>
          <span>{userProfile?.name}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-primary-var-1 font-bold">• Courriel : </span>
          <span>{userProfile?.email}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-primary-var-1 font-bold">• Numéro : </span>
          <span>{userProfile?.phone}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-primary-var-1 font-bold">• Ville : </span>
          <span>{userProfile?.city}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-primary-var-1 font-bold">• adresse : </span>
          <span>{userProfile?.address}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-primary-var-1 font-bold">
            • Code Postale :{" "}
          </span>
          <span>{userProfile?.postale}</span>
        </div>
      </div>
    </section>
  );
};

export default ParentInfos;
