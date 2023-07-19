// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import avatar10 from "assets/img/avatars/avatar10.png";
// Custom icons
import {AdobexdLogo, AtlassianLogo, InvisionLogo, JiraLogo, SlackLogo, SpotifyLogo,} from "components/Icons/Icons.js";
import {AiOutlineExclamation} from "react-icons/ai";
import {FaArrowDown, FaArrowUp, FaBell, FaCreditCard, FaFilePdf, FaHtml5, FaShoppingCart,} from "react-icons/fa";
import {SiDropbox} from "react-icons/si";

export const dashboardTableData = [
    {
        logo: AdobexdLogo,
        name: "Purity UI Version",
        members: [avatar1, avatar2, avatar3, avatar4, avatar5],
        budget: "$14,000",
        progression: 60,
    },
    {
        logo: AtlassianLogo,
        name: "Add Progress Track",
        members: [avatar3, avatar2],
        budget: "$3,000",
        progression: 10,
    },
    {
        logo: SlackLogo,
        name: "Fix Platform Errors",
        members: [avatar10, avatar4],
        budget: "تنظیم نشده",
        progression: 100,
    },
    {
        logo: SpotifyLogo,
        name: "Launch our Mobile App",
        members: [avatar2, avatar3, avatar7, avatar8],
        budget: "$32,000",
        progression: 100,
    },
    {
        logo: JiraLogo,
        name: "Add the New Pricing Page",
        members: [avatar10, avatar3, avatar7, avatar2, avatar8],
        budget: "$400",
        progression: 25,
    },
    {
        logo: InvisionLogo,
        name: "Redesign New Online Shop",
        members: [avatar9, avatar3, avatar2],
        budget: "$7,600",
        progression: 40,
    },
];

export const timelineData = [
    {
        logo: FaBell,
        title: "$2400, تغییرات طراحی",
        date: "22 خرداد 12:30",
        color: "teal.300",
    },
    {
        logo: FaHtml5,
        title: "سفارش جدید به شماره #4219423",
        date: "21 خرداد 11:30",
        color: "orange",
    },
    {
        logo: FaShoppingCart,
        title: "پرداخت‌های سرور برای ماه خرداد",
        date: "29 خرداد 12:45",
        color: "blue.400",
    },
    {
        logo: FaCreditCard,
        title: "کارت جدید به شماره #3210145 اضافه شد",
        date: "1 تیر 12:55",
        color: "orange.300",
    },
    {
        logo: SiDropbox,
        title: "رفع مشکلات برنامه نویسی",
        date: "5 تیر 16:30",
        color: "purple",
    },
    {
        logo: AdobexdLogo,
        title: "سفارش جدید به شماره #9851258",
        date: "12 تیر 19:50",
    },
];

export const tablesTableData = [
    {
        logo: avatar1,
        name: "Esthera Jackson",
        email: "alexa@simmmple.com",
        subdomain: "مدیر",
        domain: "شرکت",
        status: "آنلاین",
        date: "14/06/21",
    },
    {
        logo: avatar2,
        name: "Alexa Liras",
        email: "laurent@simmmple.com",
        subdomain: "برنامه نویسی",
        domain: "توسعه دهنده",
        status: "آفلاین",
        date: "12/05/21",
    },
    {
        logo: avatar3,
        name: "Laurent Michael",
        email: "laurent@simmmple.com",
        subdomain: "اجرایی",
        domain: "پروژه ها",
        status: "آنلاین",
        date: "07/06/21",
    },
    {
        logo: avatar4,
        name: "Freduardo Hill",
        email: "freduardo@simmmple.com",
        subdomain: "مدیر",
        domain: "شرکت",
        status: "آنلاین",
        date: "14/11/21",
    },
    {
        logo: avatar5,
        name: "Daniel Thomas",
        email: "daniel@simmmple.com",
        subdomain: "برنامه نویسی",
        domain: "توسعه دهنده",
        status: "آفلاین",
        date: "21/01/21",
    },
    {
        logo: avatar7,
        name: "Mark Wilson",
        email: "mark@simmmple.com",
        subdomain: "طراحی",
        domain: "طراح UI/UX",
        status: "آفلاین",
        date: "04/09/20",
    },
];

export const tablesProjectData = [
    {
        logo: AdobexdLogo,
        name: "Purity UI Version",
        budget: "$14,000",
        status: "در حال اجرا",
        progression: 60,
    },
    {
        logo: AtlassianLogo,
        name: "Add Progress Track",
        budget: "$3,000",
        status: "لغو شده",
        progression: 10,
    },
    {
        logo: SlackLogo,
        name: "Fix Platform Errors",
        budget: "Not set",
        status: "تمام شده",
        progression: 100,
    },
    {
        logo: SpotifyLogo,
        name: "Launch our Mobile App",
        budget: "$32,000",
        status: "تمام شده",
        progression: 100,
    },
    {
        logo: JiraLogo,
        name: "Add the New Pricing Page",
        budget: "$400",
        status: "در حال اجرا",
        progression: 25,
    },
];

export const invoicesData = [
    {
        date: "1 خرداد 1401",
        code: "#MS-415646",
        price: "$180",
        logo: FaFilePdf,
        format: "PDF",
    },
    {
        date: "5 فروردین 1401",
        code: "#RV-126749",
        price: "$250",
        logo: FaFilePdf,
        format: "PDF",
    },
    {
        date: "05 مهر 1400",
        code: "#FB-212562",
        price: "$560",
        logo: FaFilePdf,
        format: "PDF",
    },
    {
        date: "25 شهریور 1400",
        code: "#QW-103578",
        price: "$120",
        logo: FaFilePdf,
        format: "PDF",
    },
    {
        date: "20 تیر 1399",
        code: "#AR-803481",
        price: "$300",
        logo: FaFilePdf,
        format: "PDF",
    },
];

export const billingData = [
    {
        name: "Oliver Liam",
        company: "Viking Burrito",
        email: "oliver@burrito.com",
        number: "FRB1235476",
    },
    {
        name: "Lucas Harper",
        company: "Stone Tech Zone",
        email: "lucas@stone-tech.com",
        number: "FRB1235476",
    },
    {
        name: "Ethan James",
        company: "Fiber Notion",
        email: "ethan@fiber.com",
        number: "FRB1235476",
    },
];

export const newestTransactions = [
    {
        name: "Netflix",
        date: "27 March 2021, at 12:30 PM",
        price: "- $2,500",
        logo: FaArrowDown,
    },
    {
        name: "Apple",
        date: "27 March 2021, at 12:30 PM",
        price: "+ $2,500",
        logo: FaArrowUp,
    },
];

export const olderTransactions = [
    {
        name: "Stripe",
        date: "26 March 2021, at 13:45 PM",
        price: "+ $800",
        logo: FaArrowUp,
    },
    {
        name: "HubSpot",
        date: "26 March 2021, at 12:30 PM",
        price: "+ $1,700",
        logo: FaArrowUp,
    },
    {
        name: "Webflow",
        date: "26 March 2021, at 05:00 PM",
        price: "Pending",
        logo: AiOutlineExclamation,
    },
    {
        name: "Microsoft",
        date: "25 March 2021, at 16:30 PM",
        price: "- $987",
        logo: FaArrowDown,
    },
];
