import React from "react";
import Container from "../ui/Container";
import Delicious from "../../assets/DELICIOUS.png";
import Heart from "../../assets/heart.png";
import Olipop from "../../assets/Olipop.png";
import BlueButton from "../ui/BlueButton";
import Header from "./Header";
import TextSlider from "./TextSlider";
import DarkerTextSlider from "./DarkerTextSlider";

const Hero = () => {
  return (
    <section className="bg-darkColor relative overflow-hidden">
      <Header />
      <Container>
        <div className="py-20 px-5">
          <img src={Delicious} alt="Delicious" />
          <div className="flex flex-col justify-center gap-7 md:flex-row items-center md:-mt-16 lg:-mt-24 relative z-20">
            <img src={Heart} alt="Heart" className="w-[51px] h-[45px]" />
            <p className="font-sans-serif font-bold text-lg md:text-[30px] md:leading-[40px] lg:text-[45px] lg:leading-[40px] text-yellow">
              Healthy Drinks.
            </p>
            <img
              src={Olipop}
              alt="Olipop"
              className="w-[230px] h-[406px] lg:w-[272px] lg:h-[506px]"
            />
            <p className="font-sans-serif font-bold text-lg md:text-[30px] md:leading-[40px] lg:text-[45px] lg:leading-[55px] text-yellow">
              Tested & Trusted
            </p>
            <img src={Heart} alt="Heart" className="w-[51px] h-[45px]" />
          </div>
          <div className="flex justify-center mt-[53px] mb-20">
            <BlueButton className="px-[47px]">Shop now</BlueButton>
          </div>
          <div className="md:w-[700px] md:m-auto">
            <p className="text-lightBlue text-center">
              Discover the perfect balance of taste and nutrition with Juice
              Labs. Our selection of healthy drinks is sure to satisfy your
              thirst and nourish your body. From refreshing waters to energizing
              smoothies, we have something for everyone.
            </p>
          </div>
        </div>
        <div className="md:hidden">
          <TextSlider />
        </div>
      </Container>
      <div className="max-w-[1480px] m-auto hidden md:block">
        <div className="absolute bottom-[550px] -left-20 -rotate-[5deg] z-10">
          <TextSlider />
        </div>
        <div className="absolute bottom-[270px] -left-20 rotate-[3deg]">
          <DarkerTextSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
