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
      <div className="absolute -top-[420px]">
        <img src={BiggerEllipse} alt="BiggerEllipse" />
      </div>
      <Container>
        <div className="py-20 px-5">
          <div className="flex justify-center items-center relative z-20 -mt-[230px]">
            <img
              src={BlurHeart}
              alt="BlurHeart"
              className="w-[222px] h-[252px] -mr-8 -mb-[100px] z-10 heart"
            />
            <img
              src={SlicedOrange}
              alt="SlicedOrange"
              className="w-[258px] h-[407px] -ml-8 orange"
            />
          </div>
          <img src={TestimonialImg} alt="Testimonial" className="-mt-[75px]" />
          <div className="bg-borderColor rounded-[48px] flex flex-col items-center py-20 px-16 gap-20 border border-[white] border-b-opacity-40 mt-20">
            <img src={Stars} alt="Stars" className="w-[116px] h-[18.89px]" />
            <div className="flex items-center gap-20">
              <img src={Left} alt="Left" className="w-[48px] h-[48px]" />
              <p className="font-bold text-2xl text-lightBlue text-center">
                We've been using Juice Labs as our go-to source for healthy
                drinks in the office, and the results have been nothing short of
                amazing. Productivity has increased and sick days have decreased
                since introducing these tasty and nourishing beverages to our
                team. Thanks, Juice Labs!
              </p>
              <img src={Right} alt="Right" className="w-[48px] h-[48px]" />
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
        <div className="flex items-center justify-center gap-[47px] py-20 px-5">
          <img src={Human} alt="Human" className="w-[424px] h-[434px]" />
          <div className="w-[556px]">
            <h3 className="text-lightBlue font-bold text-[40px] leading-[48px] mb-5 font-sans-serif">
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
