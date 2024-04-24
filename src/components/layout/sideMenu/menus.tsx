import { Key, ReactNode } from "react";
import { MenuProps } from "antd";
import {
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const menus: MenuItem[] = [
  // dashboard
  getItem("dashboard", "dashboard", <PieChartOutlined />),
  // members
  getItem("members", "members", <UserOutlined />, [
    getItem("admin", "admin"),
    getItem("user", "user"),
  ]),
  // project
  getItem("project", "project", <DesktopOutlined />, [
    getItem("web", "web"),
    getItem("app", "mobile"),
    getItem("design", "design"),
  ]),
];
