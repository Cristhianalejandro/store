import { Container, VStack, Text } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import {  useEffect } from 'react'
import ProductCar from '../components/ProductCar'

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW={"1140"} px={4}>
      <VStack spacing={8}>
       <Text
          bgGradient={'linear(to-r, #00e1ffff, #0400ffff)'}
          bgClip={'text'}
          fontSize={30}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          >
          Current Products
        </Text>

        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10} w={'full'}>
          {products.map((product) => (
            <ProductCar key={product._id} product={product}/>
          ))}
        </SimpleGrid>

        <Text fontSize='xl' textAlign={"center"} fontWeight={"bold"} color={"gray.500"} > No products found
          <Link to = "/create">
          <Text color={"blue.500"} _hover={{textDecoration: "underline"}}>
            Create a new product
          </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default HomePage
