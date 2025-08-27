import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import TaskBar from "./TaskBar";

const Layout = () => {
  return (
   
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <hr />
      <main  >
        <Outlet />
      </main>
      <TaskBar/>
      </div>
  );
};

export default Layout;
