// Chakra imports
import {Flex, Grid, useColorModeValue} from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import React from "react";
import {FaCube, FaPenFancy} from "react-icons/fa";
import {IoDocumentsSharp} from "react-icons/io5";
import Conversations from "./components/Conversations";
import Header from "./components/Header";
import PlatformSettings from "./components/PlatformSettings";
import ProfileInformation from "./components/ProfileInformation";
import Projects from "./components/Projects";

function Profile() {
    // Chakra color mode
    const textColor = useColorModeValue("gray.700", "white");
    const bgProfile = useColorModeValue(
        "hsla(0,0%,100%,.8)",
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
    );

    return (
        <Flex direction='column'>
            <Header
                backgroundHeader={ProfileBgImage}
                backgroundProfile={bgProfile}
                avatarImage={avatar4}
                name={"Esthera Jackson"}
                email={"esthera@simmmple.com"}
                tabs={[
                    {
                        name: "نمای کلی",
                        icon: <FaCube w='100%' h='100%'/>,
                    },
                    {
                        name: "تیم‌ها",
                        icon: <IoDocumentsSharp w='100%' h='100%'/>,
                    },
                    {
                        name: "پروژه‌ها",
                        icon: <FaPenFancy w='100%' h='100%'/>,
                    },
                ]}
            />
            <Grid templateColumns={{sm: "1fr", xl: "repeat(3, 1fr)"}} gap='22px'>
                <PlatformSettings
                    title={"تنظیمات"}
                    subtitle1={"حساب کاربری"}
                    subtitle2={"نرم‌افزار"}
                />
                <ProfileInformation
                    title={"اطلاعات پروفایل"}
                    description={
                        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد."
                    }
                    name={"Esthera Jackson"}
                    mobile={"(44) 123 1234 123"}
                    email={"esthera@simmmple.com"}
                    location={"United States"}
                />
                <Conversations title={"مکالمات"}/>
            </Grid>
            <Projects title={"پروژه‌ها"} description={"معماران خانه‌ها را طراحی می‌کنند"}/>
        </Flex>
    );
}

export default Profile;
