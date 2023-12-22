import { Button, Card, CardBody, Flex, Icon, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function PropertyOverview({ title, name, description, image }: any) {
  return (
    <>
    <Card minHeight='290.5px' p='1.2rem'>
      <CardBody w='100%'>
        <Flex flexDirection={{ sm: "column", lg: "row" }} w='100%'>
          <Flex
            flexDirection='column'
            h='100%'
            lineHeight='1.6'
            width={{ lg: "45%" }}>
            <Text fontSize='sm' color='gray.400' fontWeight='bold'>
              {title}
            </Text>
            <Text fontSize='lg' fontWeight='bold' pb='.5rem'>
              {name}
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='normal'>
              {description}
            </Text>
            <Spacer />
            <Flex align='center'>
              <Button
                p='0px'
                variant='no-hover'
                bg='transparent'
                my={{ sm: "1.5rem", lg: "0px" }}>
                <Text
                  fontSize='sm'
                  fontWeight='bold'
                  cursor='pointer'
                  transition='all .5s ease'
                  my={{ sm: "1.5rem", lg: "0px" }}
                  _hover={{ me: "4px" }}>
                  Read more
                </Text>
                <Icon
                  as={BsArrowRight}
                  w='20px'
                  h='20px'
                  fontSize='2xl'
                  transition='all .5s ease'
                  mx='.3rem'
                  cursor='pointer'
                  pt='4px'
                  _hover={{ transform: "translateX(20%)" }}
                />
              </Button>
            </Flex>
          </Flex>
          <Spacer />
          <Flex
            bg='teal.300'
            align='center'
            justify='center'
            borderRadius='15px'
            width={{ lg: "40%" }}
            minHeight={{ sm: "250px" }}>
            {image}
          </Flex>
        </Flex>
      </CardBody>
    </Card>
    </>
  )
}
