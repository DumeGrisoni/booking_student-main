/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/hooks/Auth.tsx";
import { useEffect } from "react";
const AdminSingleChildInfo = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const admin = import.meta.env.VITE_SUPABASE_ID;

  useEffect(() => {
    if (user.id === admin) {
      return;
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="lg:px-[7rem] px-[4rem] text-primary text-default">
      HEllo
    </div>
  );
};

export default AdminSingleChildInfo;
