import React from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { sideMenuOpenState } from "../../state/atoms/sideMenu";
import SideMenu from "./SideMenu";

const Layout: React.FC = () => {
  const isSideMenuOpen = useRecoilValue(sideMenuOpenState);

  return (
    <div>
      <SideMenu />
      <div
        className={`flex-1 transition-all duration-300 mt-24 md:mt-0 ${
          isSideMenuOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
