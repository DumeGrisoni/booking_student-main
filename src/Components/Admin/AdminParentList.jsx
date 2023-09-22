import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const AdminParentList = ({ profiles }) => {
  const TABLE_HEAD = ["Nom", "Email", "Téléphone", "Voir"];
  return (
    <section className="flexbox-col gap-3 w-full mb-3">
      <table className="border border-grey-font shadow-default table-auto w-full md:text-default text-[10px] text-center">
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
          {profiles?.map((profil) => (
            <tr
              key={profil.id}
              className="border-b border-secondary-blur text-center"
            >
              <td>{profil.name}</td>
              <td>
                <p className="truncate w-[60%] md:w-full mx-auto">
                  {profil.email}
                </p>
              </td>
              <td className="truncate">{profil.phone}</td>
              <td>
                <button className="hover:text-primary-var-2 duration-300 ease-in-out">
                  <NavLink to={`/admin/parent/${profil.id}`}>
                    <BsFillArrowDownCircleFill />
                  </NavLink>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AdminParentList;
