/* eslint-disable react/prop-types */
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const AdminChilds = ({ childs }) => {
  const TABLE_HEAD = ["Nom", "Prénom", "Age", "Voir"];

  return (
    <section className="flexbox-col gap-3 w-full">
      <table className="border border-grey-font table-auto w-full min-w-max text-center shadow-default">
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
                <button className="hover:text-primary-var-2 duration-300 ease-in-out">
                  <NavLink to={`/admin/enfant/${child.id}`}>
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

export default AdminChilds;
