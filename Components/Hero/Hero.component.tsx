import { Container, Text } from "@nextui-org/react";

export const Hero = () => {
  return (
    <>
      <Container
        alignItems="center"
        as="section"
        className="hero__container"
        css={{
          position: "relative",
          height: "calc(84vh - 76px)",
          "@xsMax": {
            height: "calc(100vh - 64px)",
          },
        }}
        display="flex"
        gap={0}
        justify="space-between"
        lg={true}
        wrap="nowrap"
      >
        <Container>
          <Text h3>Welcome, I'm</Text>
          <Text h2>John Doe</Text>
        </Container>
      </Container>
    </>
  );
};
