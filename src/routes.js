// import
// import Dashboard from "views/Dashboard/Dashboard";
// import Tables from "views/Dashboard/Tables";
// import Billing from "views/Dashboard/Billing";
// import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import Chit from "views/Dashboard/Chit/OwnerDetails";
import SignUp from "views/Dashboard/SignUp/SignUp";
import Chitsdetails from "views/Dashboard/Details/Chitsdetails";
import ChitsList from "views/Dashboard/List/ChitsList";
import Member from "views/Dashboard/MemberList/Member";
// import SignIn from "views/Auth/SignIn.js";
// import SignUp from "views/Auth/SignUp.js";

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
    secondaryNavbar: true,
    component: Chit,
    layout: "/admin",
  },
  {
    path: "/SignUp",
    name: "SignUp",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="inherit" />,
    secondaryNavbar: true,
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
    icon: <StatsIcon color="inherit" />,
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

  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
    ],
  },
];
export default dashRoutes;
