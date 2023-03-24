import React from "react";
import Container from "../ui/Container";
import SlicedOrange from "../../assets/SlicedOrange.png";
import BlurHeart from "../../assets/BlurHeart.png";
import BiggerEllipse from "../../assets/BiggerEllipse.png";
import TestimonialImg from "../../assets/Testimonial.png";
import Stars from "../../assets/Stars.png";
import Right from "../../assets/Right.png";
import Left from "../../assets/Left.png";
import Line from "../../assets/Line.png";
import Human from "../../assets/human.png";
import BlueButton from "../ui/BlueButton";

const Testimonial = () => {
  return (
    <section className="bg-darkColor relative">
      {/* <div className="max-w-[1480px] m-auto"> */}
      <div className="absolute -top-[420px]">
        <img src={BiggerEllipse} alt="BiggerEllipse" />
        {/* </div> */}
      </div>
      <Container>
        <div className="py-20 px-5">
          <div className="flex justify-center items-center relative z-20 -mt-[220px] md:-mt-[230px]">
            <img
              src={BlurHeart}
              alt="BlurHeart"
              className="w-[122px] h-[152px] md:w-[222px] md:h-[252px] -mr-4 md:-mr-8 -mb-[100px] z-10 heart"
            />
            <img
              src={SlicedOrange}
              alt="SlicedOrange"
              className="w-[120px] h-[249px] md:w-[258px] md:h-[407px] -ml-4 md:-ml-8 orange"
            />
          </div>
          <img
            src={TestimonialImg}
            alt="Testimonial"
            className="-mt-[25px] md:-mt-[75px]"
          />
          <div className="bg-borderColor rounded-[48px] flex flex-col items-center p-5 md:py-20 md:px-16 gap-10 md:gap-20 border border-[white] border-b-opacity-40 mt-20">
            <img src={Stars} alt="Stars" className="w-[116px] h-[18.89px]" />
            <div className="flex items-center gap-5 md:gap-10 lg:gap-20">
              <img
                src={Left}
                alt="Left"
                className="w-[38px] h-[38px] md:w-[48px] md:h-[48px]"
              />
              <p className="font-bold text-base md:text-xl lg:text-2xl text-lightBlue text-center">
                We've been using Juice Labs as our go-to source for healthy
                drinks in the office, and the results have been nothing short of
                amazing. Productivity has increased and sick days have decreased
                since introducing these tasty and nourishing beverages to our
                team. Thanks, Juice Labs!
              </p>
              <img
                src={Right}
                alt="Right"
                className="w-[38px] h-[38px] md:w-[48px] md:h-[48px]"
              />
            </div>
            <div>
              <p className="text-lightBlue">
                Josh D.{" "}
                <span className="text-lightBlue opacity-50">
                  CEO, Daily news
                </span>
              </p>
              <img src={Line} alt="Line" className="w-[235px] h-[9px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[47px] py-20 px-5">
          <img
            src={Human}
            alt="Human"
            className="w-[324px] h:[334px] lg:w-[424px] lg:h-[434px] "
          />
          <div className="md:w-[556px]">
            <h3 className="text-lightBlue font-bold text-3xl lg:text-[40px] lg:leading-[48px] mb-5 font-sans-serif">
              Experience the Benefits of Juice Labs Today.
            </h3>
            <p className="mb-10 text-lg text-lightBlue opacity-60">
              Don't just take our word for it, try Juice Labs for yourself and
              discover the delicious and nourishing difference. Shop our wide
              range of healthy drinks now and experience the benefits of a
              balanced lifestyle.
            </p>
            <BlueButton className="px-6">Shop now</BlueButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
