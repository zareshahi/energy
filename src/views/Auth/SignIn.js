import React from "react";
// Chakra imports
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Switch,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";

function SignIn() {
    // Chakra color mode
    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.400", "white");
    return (
        <Flex position='relative' mb='40px' style={{direction: "rtl"}}>
            <Flex
                h={{sm: "initial", md: "75vh", lg: "85vh"}}
                w='100%'
                maxW='1044px'
                mx='auto'
                justifyContent='space-between'
                mb='30px'
                pt={{sm: "100px", md: "0px"}}>
                <Flex
                    alignItems='center'
                    justifyContent='start'
                    style={{userSelect: "none"}}
                    w={{base: "100%", md: "50%", lg: "42%"}}>
                    <Flex
                        direction='column'
                        w='100%'
                        background='transparent'
                        p='48px'
                        mt={{md: "150px", lg: "80px"}}>
                        <Heading color={titleColor} fontSize='32px' mb='10px'>
                            خوش آمدید
                        </Heading>
                        <Text
                            mb='36px'
                            ms='4px'
                            color={textColor}
                            fontWeight='bold'
                            fontSize='14px'>
                            برای ورود ایمیل و رمز عبور خود را وارد نمایید
                        </Text>
                        <FormControl>
                            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                                ایمیل
                            </FormLabel>
                            <Input
                                borderRadius='15px'
                                mb='24px'
                                fontSize='sm'
                                type='text'
                                placeholder='آدرس ایمیل شما'
                                size='lg'
                                style={{direction: "ltr"}}
                            />
                            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                                رمز عبور
                            </FormLabel>
                            <Input
                                borderRadius='15px'
                                mb='36px'
                                fontSize='sm'
                                type='password'
                                placeholder='رمز عبور شما'
                                size='lg'
                                style={{direction: "ltr"}}
                            />
                            <FormControl display='flex' alignItems='center'>
                                <Switch id='remember-login' colorScheme='teal' me='10px' style={{direction: "ltr"}}/>
                                <FormLabel
                                    htmlFor='remember-login'
                                    mb='0'
                                    ms='1'
                                    marginRight="1em"
                                    fontWeight='normal'>
                                    من را به خاطر بسپار
                                </FormLabel>
                            </FormControl>
                            <Button
                                fontSize='10px'
                                type='submit'
                                bg='teal.300'
                                w='100%'
                                h='45'
                                mb='20px'
                                color='white'
                                mt='20px'
                                _hover={{
                                    bg: "teal.200",
                                }}
                                _active={{
                                    bg: "teal.400",
                                }}>
                                ورود
                            </Button>
                        </FormControl>
                        <Flex
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                            maxW='100%'
                            mt='0px'>
                            <Text color={textColor} fontWeight='medium'>
                                اکانت ندارید؟
                                <Link color={titleColor} as='span' ms='5px' fontWeight='bold'>
                                    ثبت نام
                                </Link>
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Box
                    display={{base: "none", md: "block"}}
                    overflowX='hidden'
                    h='100%'
                    w='40vw'
                    position='relative'
                    right='0px'>
                    <Box
                        bgImage={signInImage}
                        w='100%'
                        h='100%'
                        bgSize='cover'
                        bgPosition='50%'
                        position='absolute'
                        borderBottomLeftRadius='20px'></Box>
                </Box>
            </Flex>
        </Flex>
    );
}

export default SignIn;
