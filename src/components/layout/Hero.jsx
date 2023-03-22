import React from "react";
import Container from "../ui/Container";
import Delicious from "../../assets/DELICIOUS.png";
import Heart from "../../assets/heart.png";
import Olipop from "../../assets/Olipop.png";
import BlueButton from "../ui/BlueButton";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="bg-darkColor">
      <Header />
      <Container>
        <div className="py-20 px-5">
          <img src={Delicious} alt="Delicious" />
          <div className="flex flex-col justify-center gap-7 md:flex-row items-center md:-mt-16 lg:-mt-24">
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
        {/* <div>
            <p></p>
        </div>
        <div></div> */}
        {/* <marquee className="text-white" behavior="scroll" direction="bounce">
          Low calories
        </marquee> */}
      </Container>
    </section>
  );
};

export default Hero;
