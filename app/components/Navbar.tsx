import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Tabs,
  TabList,
  Tab,
  Spacer,
  Image,
  Text,
  InputRightElement
} from "@chakra-ui/react";
import { LuMapPin, LuWallet2 } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineCalendarDays, HiOutlineCog8Tooth } from "react-icons/hi2";
import Logo  from "../../public/logo.svg";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
  AiFillPlusSquare,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";

export default function Navbar(){
  const bg = useColorModeValue("black", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <Box shadow="md">
      <chakra.header
        bg={bg}
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{ base: 2, md: 20 }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillPlusSquare />}>
                  Dashboard
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<AiOutlineInbox />}
                >
                  Inbox
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<BsFillCameraVideoFill />}
                >
                  Videos
                </Button>
              </VStack>
            </Box>
            <VStack
            spacing={0}
            >
                <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
                >
                <Image src="/logo.svg" alt='Dan Abramov' />
                </chakra.a>
                <chakra.h1 fontSize="sm" color="white">For Mainstone</chakra.h1>
            </VStack>
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
                <Image aria-label='Search database' boxSize='30px' src="/icons/plus.svg" />
                <Image aria-label='Search database' boxSize='30px' src="/icons/calendar.svg" />
                <Image aria-label='Search database' boxSize='30px' src="/icons/notification.svg" />
            </HStack>
            

            <Avatar
                marginLeft={{base: 2, md: 10}}
              size="sm"
              name="Dan Abrahmov"
              src="/icons/person.svg"
            />
             <Text fontSize='sm' color="white">Ahmed Ali</Text>
          </HStack>
        </Flex>
      </chakra.header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 2, md: 20}}
        borderWidth={0}
        overflowX="auto"
        bgColor="white"
      >
        <HStack spacing={3} py={4} display={{ base: "none", md: "inline-flex" }}>
              <Button colorScheme='gray' variant="solid" leftIcon={<AiFillHome size={20} />} size="sm">
                Dashboard
              </Button>
              <Button
                variant="ghost"
                colorScheme='gray'
                leftIcon={<LuMapPin size={20} />}
                size="sm"
              >
                Listing
              </Button>
              <Button
                variant="ghost"
                leftIcon={<FaRegUser size={20} />}
                size="sm"
              >
                Users
              </Button>
              <Button
                variant="ghost"
                leftIcon={<LuWallet2 size={20} />}
                size="sm"
              >
                Account
              </Button>
              <Button
                variant="ghost"
                leftIcon={<HiOutlineCalendarDays size={20} />}
                size="sm"
              >
                Request
              </Button>
              <Button
                variant="ghost"
                leftIcon={<HiOutlineCog8Tooth size={20} />}
                size="sm"
              >
                Setting
              </Button>
            </HStack>
        <Spacer />
        <HStack spacing={3} alignItems="center">
          <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
            <InputRightElement pointerEvents="none">
              <AiOutlineSearch />
            </InputRightElement>
            <Input type="tel" placeholder="Search... properties, customers here" />
          </InputGroup>
        </HStack>
      </Flex>
    </Box>
  );
};
