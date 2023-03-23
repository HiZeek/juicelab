import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import ReachUsImg from "../../assets/REACHUS.png";
import Olipop1 from "../../assets/Olipop1.png";
import Olipop2 from "../../assets/Olipop2.png";
import Olipop3 from "../../assets/Olipop3.png";
import Olipop4 from "../../assets/Olipop4.png";
import Olipop5 from "../../assets/Olipop5.png";
import Olipop6 from "../../assets/Olipop6.png";

const ReachUs = () => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [mediumSize, setMediumSize] = useState(false);
  const [smallSize, setSmallSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1439 && screenSize >= 767) {
      setMediumSize(true);
      setSmallSize(false);
    } else if (screenSize <= 767) {
      setMediumSize(false);
      setSmallSize(true);
    } else {
      setMediumSize(false);
      setSmallSize(false);
    }
  }, [screenSize]);
  return (
    <section className="bg-darkColor">
      <div className="py-20">
        <Container>
          <div className="px-5">
            <h3 className="text-lightBlue text-center font-bold font-sans-serif text-3xl md:text-[59px] md:leading-[71px]">
              Say hey @Juicelabs
            </h3>
            <p className="text-grayColor text-lg text-center mt-4">
              Join the Juice Labs community, as we work to become healthy one
              drink at a time.
            </p>
          </div>
        </Container>
        <div className="max-w-[1480px] m-auto mt-[45px]">
          {!mediumSize && !smallSize && (
            <>
              <div className="flex -mb-[35px] relative z-10">
                <img
                  src={Olipop2}
                  alt="Olipop2"
                  className="w-[242px] h-[244px]"
                />
                <img
                  src={Olipop3}
                  alt="Olipop3"
                  className="w-[242px] h-[244px]"
                />
                <img
                  src={Olipop5}
                  alt="Olipop5"
                  className="w-[242px] h-[244px]"
                />
                <img
                  src={Olipop6}
                  alt="Olipop6"
                  className="w-[242px] h-[244px]"
                />
                <img
                  src={Olipop4}
                  alt="Olipop4"
                  className="w-[242px] h-[244px]"
                />
                <img
                  src={Olipop1}
                  alt="Olipop1"
                  className="w-[242px] h-[244px]"
                />
              </div>
            </>
          )}
          {smallSize && (
            <div className="flex flex-col items-center mb-5">
              <img
                src={Olipop2}
                alt="Olipop2"
                className="w-[242px] h-[244px]"
              />
              <img
                src={Olipop3}
                alt="Olipop3"
                className="w-[242px] h-[244px]"
              />
              <img
                src={Olipop5}
                alt="Olipop5"
                className="w-[242px] h-[244px]"
              />
              <img
                src={Olipop6}
                alt="Olipop6"
                className="w-[242px] h-[244px]"
              />
              <img
                src={Olipop4}
                alt="Olipop4"
                className="w-[242px] h-[244px]"
              />
              <img
                src={Olipop1}
                alt="Olipop1"
                className="w-[242px] h-[244px]"
              />
            </div>
          )}
          {mediumSize && (
            <div className="mb-10">
              <div className="flex justify-center">
                <img
                  src={Olipop2}
                  alt="Olipop2"
                  className="w-[242px] h-[244px]"
                />
                <img
                  src={Olipop3}
                  alt="Olipop3"
                  className="w-[242px] h-[244px]"
                />
                <img
                  src={Olipop5}
                  alt="Olipop5"
                  className="w-[242px] h-[244px]"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={Olipop6}
                  alt="Olipop6"
                  className="w-[242px] h-[244px]"
                />
                <img
                  src={Olipop4}
                  alt="Olipop4"
                  className="w-[242px] h-[244px]"
                />
                <img
                  src={Olipop1}
                  alt="Olipop1"
                  className="w-[242px] h-[244px]"
                />
              </div>
            </div>
          )}
          <div className="px-5">
            <img
              src={ReachUsImg}
              alt="ReachUs"
              className="lg:w-[899px] h-[172px m-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachUs;
