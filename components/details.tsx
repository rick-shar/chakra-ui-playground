import { FormControl, FormLabel, VStack, Heading, Text, SimpleGrid, GridItem, Input } from "@chakra-ui/react";

const Details = () => {
  return (
    <VStack bg="yellow.50" w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={"3"} alignItems="flex-start">
        <Heading size='2xl'>Your details</Heading>
        <Text>If you already have an account, click here</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} row={6} w="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel> First Name </FormLabel>
            <Input placeholder="Johnny" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
        <FormControl>
            <FormLabel> Last Name </FormLabel>
            <Input placeholder="Boe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
        <FormControl>
            <FormLabel> Address </FormLabel>
            <Input placeholder="1 infinite loop" />
          </FormControl>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
};

export default Details;
