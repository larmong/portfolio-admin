import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

import Layout from "@commons/layout";
import Dashboard from "@pages/dashboard";
import Project from "@pages/project";
import Login from "@pages/login";
import Members from "@pages/members";
import Admin from "@pages/members/admin";
import User from "@pages/members/user";
import React from "@pages/project/react";
import Static from "@pages/project/static";

export default function App() {
  const navigate = useNavigate();
  const [cookies] = useCookies(["accessToken", "loginUser"]);

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
          <Route path="react" element={<React />} />
          <Route path="static" element={<Static />} />
        </Route>
        <Route path="members" element={<Members />}>
          <Route path="admin" element={<Admin />} />
          <Route path="user" element={<User />} />
        </Route>
      </Route>
    </Routes>
  );
}
