// Chakra imports
import {Flex, Grid, Image, SimpleGrid, useColorModeValue,} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {CartIcon, DocumentIcon, GlobeIcon, WalletIcon,} from "components/Icons/Icons.js";
import React from "react";
import {dashboardTableData, timelineData} from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function Dashboard() {
    const iconBoxInside = useColorModeValue("white", "white");

    return (<Flex flexDirection='column' pt={{base: "120px", md: "75px"}}>
        <SimpleGrid columns={{sm: 1, md: 2, xl: 4}} spacing='24px'>
            <MiniStatistics
                title={"درآمد امروز"}
                amount={"$53,000"}
                percentage={55}
                icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside}/>}
            />
            <MiniStatistics
                title={"کاربران امروز"}
                amount={"2,300"}
                percentage={5}
                icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside}/>}
            />
            <MiniStatistics
                title={"مشتریان جدید"}
                amount={"+3,020"}
                percentage={-14}
                icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside}/>}
            />
            <MiniStatistics
                title={"فروش کل"}
                amount={"$173,000"}
                percentage={8}
                icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside}/>}
            />
        </SimpleGrid>
        <Grid
            templateColumns={{md: "1fr", lg: "1.8fr 1.2fr"}}
            templateRows={{md: "1fr auto", lg: "1fr"}}
            my='26px'
            gap='24px'>
            <BuiltByDevelopers
                title={"برنامه نویسی شده با عشق"}
                name={"داشبورد انرژی"}
                description={"از رنگ‌ها گرفته تا اندازه‌ها و ... همه و همه در مستندات راهنمایی شدند."}
                link='https://github.com/zareshahi/energy/wiki'
                image={<Image
                    src={logoChakra}
                    alt='لوگو چاکرا'
                    width="16em"
                    margin="2em"
                    minWidth={{md: "300px", lg: "auto"}}
                />}
            />
            <WorkWithTheRockets
                backgroundImage={peopleImage}
                title={"همکاری با سرعت راکت"}
                description={"خلق ثروت یک بازی با جمع مثبت است. همه چیز به این بستگی دارد که چه کسی اول از فرصت استفاده می کند."}
                link="https://github.com/zareshahi/energy"
            />
        </Grid>
        <Grid
            templateColumns={{sm: "1fr", lg: "1.3fr 1.7fr"}}
            templateRows={{sm: "repeat(2, 1fr)", lg: "1fr"}}
            gap='24px'
            mb={{lg: "26px"}}>
            <ActiveUsers
                title={"کاربران فعال"}
                percentage={23}
                chart={<BarChart/>}
            />
            <SalesOverview
                title={"نمای فروش"}
                percentage={5}
                chart={<LineChart/>}
            />
        </Grid>
        <Grid
            templateColumns={{sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr"}}
            templateRows={{sm: "1fr auto", md: "1fr", lg: "1fr"}}
            gap='24px'>
            <Projects
                title={"پروژه‌ها"}
                amount={30}
                captions={["شرکت‌ها", "اعضا", "سرمایه", "درصد پیشرفت"]}
                data={dashboardTableData}
            />
            <OrdersOverview
                title={"نمای سفارشات"}
                amount={30}
                data={timelineData}
            />
        </Grid>
    </Flex>);
}
