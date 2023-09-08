/* eslint-disable no-unused-vars */
import { useAuth } from "../../lib/hooks/Auth";
import { supabase } from "../../lib/helpers/supabaseClient";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Agenda from "../../Components/Agenda/Agenda";

const Admin = () => {
  const [childs, setChilds] = useState();
  useEffect(() => {
    try {
      const { data, error } = supabase
        .from("childs")
        .select()
        .then((resultChild) => {
          setChilds(resultChild.data);
        });
    } catch (error) {
      alert(error);
    }
  }, []);

  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut();
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }
  const navigate = useNavigate();
  const { user } = useAuth();
  const id = import.meta.env.VITE_SUPABASE_ID;

  const TABLE_HEAD = ["Nom", "Prénom", "Age", "Voir"];

  const handleChild = () => {
    console.log("ok");
  };
  return (
    <div className="default-page">
      {user.id === id ? (
        <div className="flexbox-col-start gap-7 my-7 text-default text-primary">
          <div>
            <button className="btn p-1" onClick={handleSignOut}>
              Déconnexion
            </button>
          </div>
          <div className="flexbox-col w-full gap-7">
            <div className="text-headline">
              Bienvenue {user.user_metadata.name}
            </div>
            <hr className="w-full" />
            <div className="text-title font-bold">Tous les cours</div>
            <Agenda />
            <hr className="w-[80%]" />
            <div className="text-title font-bold">Tous les enfants</div>
            <div className="flexbox-col gap-3 w-full">
              <table className="border-default table-auto w-full min-w-max text-center">
                <thead className="bg-secondary-var-1 border-b border-grey-font">
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th key={head} className=" p-1 lg:p-4">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {childs?.map((child) => (
                    <tr
                      key={child.id}
                      className="border-b border-secondary-blur text-center"
                    >
                      <td>{child.last_name}</td>
                      <td>{child.first_name}</td>
                      <td>{child.age}</td>
                      <td>
                        <button
                          className="hover:text-primary-var-2 duration-300 ease-in-out"
                          onClick={handleChild}
                        >
                          <BsFillArrowDownCircleFill />{" "}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <>{navigate("/")}</>
      )}
    </div>
  );
};

export default Admin;
