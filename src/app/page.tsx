import { About, Contact, Hero, Series, Services } from "./_components/pages";

export default async function Home() {
  return (
    <>
      <Hero />
      <Series />
      <Services />
      <About />
      <Contact />
    </>
  );
}
