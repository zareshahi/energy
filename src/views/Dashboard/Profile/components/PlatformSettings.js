// Chakra imports
import {Flex, Switch, Text, useColorModeValue} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";

const PlatformSettings = ({title, subtitle1, subtitle2}) => {
    // Chakra color mode
    const textColor = useColorModeValue("gray.700", "white");
    return (
        <Card p='16px'>
            <CardHeader p='12px 5px' mb='12px'>
                <Text fontSize='lg' color={textColor} fontWeight='bold'>
                    {title}
                </Text>
            </CardHeader>
            <CardBody px='5px'>
                <Flex direction='column'>
                    <Text fontSize='sm' color='gray.500' fontWeight='600' mb='20px'>
                        {subtitle1}
                    </Text>
                    <Flex align='center' mb='20px'>
                        <Switch colorScheme='teal' me='10px'/>
                        <Text noOfLines={1} fontSize='md' color='gray.500' fontWeight='400'>
                            اگر کسی من را دنبال کرد اطلاع بده
                        </Text>
                    </Flex>
                    <Flex align='center' mb='20px'>
                        <Switch colorScheme='teal' me='10px'/>
                        <Text noOfLines={1} fontSize='md' color='gray.500' fontWeight='400'>
                            اگر کسی به من پاسخ داد اطلاع بده
                        </Text>
                    </Flex>
                    <Flex align='center' mb='20px'>
                        <Switch colorScheme='teal' me='10px'/>
                        <Text noOfLines={1} fontSize='md' color='gray.500' fontWeight='400'>
                            اگر کسی من را صدا زد اطلاع بده
                        </Text>
                    </Flex>
                    <Text
                        fontSize='sm'
                        color='gray.500'
                        fontWeight='600'
                        m='6px 0px 20px 0px'>
                        {subtitle2}
                    </Text>
                    <Flex align='center' mb='20px'>
                        <Switch colorScheme='teal' me='10px'/>
                        <Text noOfLines={1} fontSize='md' color='gray.500' fontWeight='400'>
                            پروژه‌های جدید
                        </Text>
                    </Flex>
                    <Flex align='center' mb='20px'>
                        <Switch colorScheme='teal' me='10px'/>
                        <Text noOfLines={1} fontSize='md' color='gray.500' fontWeight='400'>
                            تغییرات ماهانه پروژه
                        </Text>
                    </Flex>
                    <Flex align='center' mb='20px'>
                        <Switch colorScheme='teal' me='10px'/>
                        <Text noOfLines={1} fontSize='md' color='gray.500' fontWeight='400'>
                            عضویت در خبرنامه
                        </Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default PlatformSettings;
