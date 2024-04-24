import { Route, Routes } from "react-router-dom";

import Layout from "@commons/layout";
import Dashboard from "@pages/dashboard";
import Project from "@pages/project";
import Login from "@pages/login";
import Members from "@pages/members";
import Admin from "@pages/members/admin";
import User from "@pages/members/user";
import Web from "@pages/project/web";
import Design from "@pages/project/design";
import Mobile from "@pages/project/mobile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="project" element={<Project />}>
          <Route path="web" element={<Web />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="design" element={<Design />} />
        </Route>
        <Route path="members" element={<Members />}>
          <Route path="admin" element={<Admin />} />
          <Route path="user" element={<User />} />
        </Route>
      </Route>
    </Routes>
  );
}
