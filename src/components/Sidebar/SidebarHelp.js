import {QuestionIcon} from "@chakra-ui/icons";
import {Button, Flex, Link, Text} from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import IconBox from "components/Icons/IconBox";
import React from "react";

export function SidebarHelp(props) {
    // Pass the computed styles into the `__css` prop
    const {children, ...rest} = props;
    return (
        <Flex
            borderRadius="15px"
            flexDirection="column"
            bgImage={SidebarHelpImage}
            justifyContent="flex-start"
            alignItems="start"
            boxSize="border-box"
            p="16px"
            h="170px"
            w="100%"
        >
            <IconBox width="35px" h="35px" bg="white" mb="auto">
                <QuestionIcon color="teal.300" h="18px" w="18px"/>
            </IconBox>
            <Text fontSize="sm" color="white" fontWeight="bold">
                به راهنمایی نیاز دارید؟
            </Text>
            <Text fontSize="xs" color="white" mb="10px">
                لطفا مستندات را بررسی کنید
            </Text>
            <Link
                w="100%"
                target='_blank'
                href="https://github.com/zareshahi/energy/wiki"
            >
                <Button
                    fontSize="10px"
                    fontWeight="bold"
                    w="100%"
                    bg="white"
                    _hover="none"
                    _active={{
                        bg: "white",
                        transform: "none",
                        borderColor: "transparent",
                    }}
                    _focus={{
                        boxShadow: "none",
                    }}
                    color="black"
                >
                    مستندات
                </Button>
            </Link>
        </Flex>
    );
}
