// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
    CreditIcon,
    DocumentIcon,
    HomeIcon,
    PersonIcon,
    RocketIcon,
    StatsIcon,
    SupportIcon,
} from "components/Icons/Icons";

const dashRoutes = [
    {
        path: "/dashboard",
        name: "داشبورد",
        rtlName: "داشبورد",
        icon: <HomeIcon color="inherit"/>,
        component: Dashboard,
        layout: "/admin",
    },
    {
        path: "/tables",
        name: "جداول",
        rtlName: "جداول",
        icon: <StatsIcon color="inherit"/>,
        component: Tables,
        layout: "/admin",
    },
    {
        path: "/billing",
        name: "صورت حساب",
        rtlName: "صورت حساب",
        icon: <CreditIcon color="inherit"/>,
        component: Billing,
        layout: "/admin",
    },
    {
        name: "اکانت",
        category: "account",
        rtlName: "اکانت",
        state: "pageCollapse",
        views: [
            {
                path: "/profile",
                name: "پروفایل",
                rtlName: "پروفایل",
                icon: <PersonIcon color="inherit"/>,
                secondaryNavbar: true,
                component: Profile,
                layout: "/admin",
            },
            {
                path: "/signin",
                name: "ورود",
                rtlName: "ورود",
                icon: <DocumentIcon color="inherit"/>,
                component: SignIn,
                layout: "/auth",
            },
            {
                path: "/signup",
                name: "ثبت نام",
                rtlName: "ثبت نام",
                icon: <RocketIcon color="inherit"/>,
                secondaryNavbar: true,
                component: SignUp,
                layout: "/auth",
            },
        ],
    },
];
export default dashRoutes;
