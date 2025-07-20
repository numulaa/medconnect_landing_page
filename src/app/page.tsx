import Hero from "@/components/Hero";

import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Stats from "@/components/Stats";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      {/* <Logos /> */}
      <Container>
        <Stats />
        <Benefits />
      </Container>
    </>
  );
};

export default HomePage;
