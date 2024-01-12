import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Admin = () => {
  return (
    <div className="flex">
      <div className="flex-[1]">
        <Sidebar />
      </div>
      <div className="flex-[5]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Admin;
