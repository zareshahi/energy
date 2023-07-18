/*eslint-disable*/
import React from "react";
import {Flex, Link, List, ListItem, Text} from "@chakra-ui/react";

export default function Footer(props) {
    // const linkTeal = useColorModeValue("teal.400", "red.200");=
    return (
        <Flex
            flexDirection={{
                base: "column",
                xl: "row",
            }}
            alignItems={{
                base: "center",
                xl: "start",
            }}
            justifyContent="space-between"
            px="30px"
            pb="20px"
        >
            <Text
                color="gray.400"
                textAlign={{
                    base: "center",
                    xl: "start",
                }}
                mb={{base: "20px", xl: "0px"}}
            >
                &copy; {1900 + new Date().getYear()},{" "}
                <Text as="span">
                    فارسی سازی شده با❤️ توسط
                </Text>
                &nbsp;
                <Link
                    // color={linkTeal}
                    color="teal.400"
                    href="https://github.com/zareshahi"
                    target="_blank"
                >
                    علی زارع شاهی
                </Link>
            </Text>
            <List display="flex">
                <ListItem
                    me={{
                        base: "20px",
                        md: "44px",
                    }}
                >
                    <Link color="gray.400" href="https://github.com/zareshahi/energy">
                        صفحه گیتهاب پروژه
                    </Link>
                </ListItem>
                <ListItem
                    me={{
                        base: "20px",
                        md: "44px",
                    }}
                >
                    <Link color="gray.400" href="https://chakra-ui.com/">
                        چاکرا
                    </Link>
                </ListItem>
                <ListItem
                    me={{
                        base: "20px",
                        md: "44px",
                    }}
                >
                    <Link
                        color="gray.400"
                        href="https://github.com/zareshahi/energy/wiki"
                    >
                        مستندات
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        color="gray.400"
                        href="https://github.com/creativetimofficial/purity-ui-dashboard"
                    >
                        Purity UI Dashboard
                    </Link>
                </ListItem>
            </List>
        </Flex>
    );
}
