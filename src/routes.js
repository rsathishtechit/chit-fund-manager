import Chit from "views/Dashboard/dashboard/ownerDetails";
import SignUp from "views/Dashboard/chits/signUp";
import Chitsdetails from "views/Dashboard/details/chitsdetails";
import Member from "views/Dashboard/memberlist/member";
import login from "views/Dashboard/login/login";
import create from "views/Dashboard/login/create";
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/create",
    name: "New User",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="inherit" />,
    component: create,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "login",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="inherit" />,
    component: login,
    layout: "/admin",
  },

  {
    path: "/Chit",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Chit,
    layout: "/admin",
  },
  {
    path: "/SignUp",
    name: "Chits",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="inherit" />,
    component: SignUp,
    layout: "/admin",
  },
  {
    path: "/Chitsdetails",
    name: "Details",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Chitsdetails,
    layout: "/admin",
  },
  {
    path: "/Member",
    name: "MemberList",
    rtlName: "لوحة القيادة",
    icon: <PersonIcon color="inherit" />,
    component: Member,
    layout: "/admin",
  },
];
export default dashRoutes;
