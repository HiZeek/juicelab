import { Fragment } from "react";
import Footer from "./components/layout/Footer";
import Notification from "./components/layout/Notification";
import Hero from "./components/layout/Hero";
import ExploreSection from "./components/layout/ExploreSection";
import ReachUs from "./components/layout/ReachUs";
import Testimonial from "./components/layout/Testimonial";

function App() {
  return (
    <Fragment>
      <Notification />
      <Hero />
      <ExploreSection />
      <Testimonial />
      <ReachUs />
      <Footer />
    </Fragment>
  );
}

export default App;
