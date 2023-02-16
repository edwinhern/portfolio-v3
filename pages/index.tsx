import { Text, Spacer, styled, Container } from "@nextui-org/react";
import { Hero } from "Components";
export default function Home() {
  return (
    <>
      <Container display={"flex"} justify={"center"}>
        <Hero />
        <Text h2>Lorem ipsum dolor sit amet</Text>
        <Text size="$lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
          gravida quis blandit turpis. Augue neque gravida in fermentum et
          sollicitudin ac orci. Et sollicitudin ac orci phasellus egestas.
          Elementum tempus egestas sed sed risus pretium quam vulputate.
          Interdum velit euismod in pellentesque massa placerat duis ultricies.
        </Text>
      </Container>
    </>
  );
}
