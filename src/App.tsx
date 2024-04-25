import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

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
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function App() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["accessToken", "loginUser"]);

  useEffect(() => {
    if (!cookies.accessToken && !cookies.loginUser) {
      navigate("/login");
    }
  }, [cookies]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
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
