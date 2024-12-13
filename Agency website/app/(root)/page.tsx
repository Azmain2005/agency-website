import {
  Navbar,
  Hero,
  Brand,
  About,
  Plans,
  Services,
  Testimonial,
  Faq,
  Footer,
} from "../Componets/Index";

function page() {
  return (
    <>
      <Hero />
      <Brand />
      <About />
      <Plans />
      <Services />
      <Faq />
      <Testimonial />
    </>
  );
}

export default page;
