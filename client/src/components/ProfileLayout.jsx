import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const ProfileLayout = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
