/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ChildInfo = ({ childs }) => {
  const TABLE_HEAD = ["Prénom", "Nom", "Age", "Niveau", "Modifier"];

  return (
    <div className=" bg-secondary-var-1 w-full border-default">
      <div className="flexbox-row text-center md:text-left border-b border-grey-font">
        <h2 className="text-title font-bold p-7 bg-secondary-var-1 rounded-md w-full">
          Vos Enfants
        </h2>
      </div>
      <table className="table-auto w-full text-center md:text-default text-[10px] mb-3">
        <thead className="bg-secondary border-b border-grey-font">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className=" p-1 lg:p-4">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-secondary-var-1">
          {childs?.map((child) => (
            <tr key={child.id} className="text-center h-[1rem] md:h-[5rem]">
              <td className="p-2 lg:p-0">{child.first_name}</td>
              <td className="p-2 lg:p-0">{child.last_name} </td>
              <td className="p-2 lg:p-0">{child.age} ans</td>
              <td className="p-2 lg:p-0 uppercase">{child.class}</td>
              <td className="external-link">
                <NavLink to={`/update/${child.id}`}>Modifier</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChildInfo;
