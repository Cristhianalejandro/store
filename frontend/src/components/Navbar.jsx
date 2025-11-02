import { Container, Flex, HStack, Text, Button, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CiSquarePlus } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    

  return (
    <Container maxW={"1140"} px={4} >
        <Flex 
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{
            base:"column",
            sm:"row"
        }}
        >

                <Text
                    bgGradient={'linear(to-r, #00e1ffff, #0400ffff)'}
                    bgClip={'text'}
                    fontSize={{base: "22", sm: "28"}}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    >
                    <Link to="/">Product Store 🛒</Link>
                </Text>

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <CiSquarePlus size={40}/>
                    </Button>
                </Link>

                <Button onClick={toggleColorMode} >
                    {colorMode === "light" ? <IoMoonOutline size={40}/> : <CiLight size={40}/> }
                </Button>
            </HStack>


        </Flex>
    </Container>
  )
}

export default Navbar;
