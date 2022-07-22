import Chit from "views/Dashboard/dashboard/OwnerDetails";
import SignUp from "views/Dashboard/chits/SignUp";
import Chitsdetails from "views/Dashboard/details/Chitsdetails";
import ChitsList from "views/Dashboard/list/ChitsList";
import Member from "views/Dashboard/memberlist/Member";

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
    path: "/chit",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    secondaryNavbar: false,
    component: Chit,
    layout: "/admin",
  },
  {
    path: "/SignUp",
    name: "Chits",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="inherit" />,
    secondaryNavbar: false,
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
    path: "/ChitsList",
    name: "List",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: ChitsList,
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
