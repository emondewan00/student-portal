import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AdminRoute = () => {
  const { currentUser } = useContext(AuthContext);

  return <div></div>;
};

export default AdminRoute;
