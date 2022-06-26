import { Container, Flex } from "@chakra-ui/react";
import Details from "../components/details";
import Cart from "../components/cart";

const IndexPage = () => (
  <Container maxW={"container.xl"} p={0}>
    <Flex h="100vh" py={20}>
      <Details />
      <Cart />
    </Flex>
  </Container>
);
export default IndexPage;
