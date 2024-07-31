import Hero from "./Hero";
import Packages from "./Package";
import Footer from "./Footer";
import "./App.css";
import Joyride from "react-joyride";

const steps = [
  {
    target: ".header > h3",
    content: "Welcome!! Please spare a minute to learn about our page",
  },
  {
    target: ".login",
    content: "You can log in here",
  },
  {
    target: ".signup",
    content: "Sign up here, if you're new",
  },
  {
    target: ".packages h3",
    content: "The packages we offer",
  },
  {
    target: ".explore",
    content: "Click here to find out more about other packages",
  },
  {
    target: ".footer .form",
    content: "Subscribe to our newsletter here",
  },
];

function Demo() {
  return (
    <>
      <Joyride steps={steps} />

      <Hero />
      <Packages />
      <Footer />
    </>
  );
}
export default Demo;
