import React from "react";
import Container from "../ui/Container";
import BlueButton from "../ui/BlueButton";
import { drinkOptions } from "../data/drinkOptions";
import BlackButton from "../ui/BlackButton";

const ExploreSection = () => {
  const drinks = drinkOptions.map((drink) => (
    <div
      key={drink.name}
      className="flex flex-col items-center transition group relative"
    >
      <img
        src={drink.canImg}
        alt={drink.name}
        className="w-[192px] h-[358px] -mb-[70px] z-10 transform group-hover:scale-110 duration-300 ease-in-out"
      />
      <img
        src={drink.drinkType}
        alt={drink.name}
        className="w-[299px] h-[96px]"
      />
      <div className="absolute bottom-20 duration-300 opacity-0 group-hover:bottom-64 group-hover:opacity-100 z-20 flex flex-col justify-center items-center">
        <BlueButton className="block px-[41px]">{drink.btnText}</BlueButton>
      </div>
      <p className="font-bold text-xl text-darkBlue mb-1 text-center">
        {drink.name}
      </p>
      <p className="font-bold text-xl text-darkerBlue opacity-30">
        {drink.price}
      </p>
    </div>
  ));
  return (
    <section className="bg-darkColor py-20">
      <Container className="bg-lightBlue rounded-[48px]">
        <div className="py-20 px-5">
          <div className="flex justify-center mb-[21px]">
            <p className="bg-lighterYellow rounded-[50%] w-[287px] text-center py-[17px] px-3 text-sm">
              Find Your Perfect Beverage
            </p>
          </div>
          <h3 className="text-darkBlue font-bold font-sans-serif text-3xl md:text-[59px] md:leading-[71px] md:w-[700px] m-auto">
            Explore Our Wide Range of Healthy Drink Options
          </h3>
          <div>
            <div className="py-20 flex flex-col gap-10 md:flex-row md:justify-between">
              {drinks}
            </div>
            <div className="flex justify-center">
              <BlackButton>View all</BlackButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExploreSection;
