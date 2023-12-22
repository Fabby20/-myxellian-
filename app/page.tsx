'use client';
import { Link } from '@chakra-ui/next-js'
import { Box, Container, Flex, Grid, GridItem, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react';
import SalesOverview from './components/SalesOverview';
import PropertyOverview from './components/PropertyOverview';

export default function Home() {
  return (
   <>
   <Box px={20} my={10}>
    <HStack spacing={3} display={"inline-flex"}>
          <Image aria-label='Search database' boxSize='30px' src="/icons/hand.svg" />
          <Text fontSize='lg' fontWeight="bold">Hi Ahmed</Text>
      </HStack>
      <Text fontSize='xs'>Welcome to your Dashboard</Text>
    </Box>
    <Flex flexDirection='column' px={20}>
    {/* <Grid
      h='200px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
    >
      <GridItem colSpan={3} rowSpan={2} bg='tomato'>
      <SalesOverview
          title={"Built by Developers"}
          name={"Purity UI Dashboard"}
          description={
            "From colors, cards, typography to complex elements, you will find the full documentation."
          }
          
        />
      </GridItem>
      <GridItem colSpan={2} bg='papayawhip'>
          <PropertyOverview
              title={"Work with the rockets"}
              description={
                "Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
              }
          />
      </GridItem>
      <GridItem colSpan={2} bg='tomato'>
      <PropertyOverview
              title={"Work with the rockets"}
              description={
                "Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
              }
          />
      </GridItem>
    </Grid> */}
    {/* <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <SalesOverview
          title={"Built by Developers"}
          name={"Purity UI Dashboard"}
          description={
            "From colors, cards, typography to complex elements, you will find the full documentation."
          }
          
        />
        <GridItem colSpan={2} bg='tomato'>
          <PropertyOverview
              title={"Work with the rockets"}
              description={
                "Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
              }
          />
        </GridItem>
        <GridItem colSpan={2} bg='tomato'>
          <PropertyOverview
              title={"Work with the rockets"}
              description={
                "Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
              }
          />
        </GridItem>
        <SimpleGrid columns={2} spacing={10}>
          <PropertyOverview
            title={"Work with the rockets"}
            description={
              "Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
            }
          />
          <PropertyOverview
            title={"Work with the rockets"}
            description={
              "Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
            }
          />
        </SimpleGrid>
        
      </Grid> */}
      {/* <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'>
        <Projects
          title={"Projects"}
          amount={30}
          captions={["Companies", "Members", "Budget", "Completion"]}
          data={dashboardTableData}
        />
        <OrdersOverview
          title={"Orders Overview"}
          amount={30}
          data={timelineData}
        />
      </Grid> */}
    </Flex>
   </>
  )
}
