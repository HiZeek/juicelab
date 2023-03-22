import React from "react";
import Container from "../ui/Container";
import FooterLogo from "../../assets/FooterLogo.png";
import JUICELABS from "../../assets/JUICELABS.png";
import BlackButton from "../ui/BlackButton";
import {
  explore,
  followUs,
  footerLinks,
  ourTopPicks,
} from "../data/footerData";

const Footer = () => {
  const exploreList = explore.map((item) => (
    <li key={item.name}>{item.name}</li>
  ));

  const ourTopPicksList = ourTopPicks.map((item) => (
    <li key={item.name}>{item.name}</li>
  ));

  const followUsList = followUs.map((item) => (
    <li key={item.name} className="flex gap-[19px] items-center">
      <img src={item.icon} alt={item.name} className={item.className} />
      <p>{item.name}</p>
    </li>
  ));

  const footerItem = footerLinks.map((item) => (
    <li key={item.name}>{item.name}</li>
  ));
  return (
    <section className="bg-lightBlue">
      <Container>
        <div className="pt-20 px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 lg:grid-cols-5 gap-4 text-darkColor">
            <div className="md:col-span-2 lg:col-span-2">
              <img
                src={FooterLogo}
                className="w-[149px] h-[37px] mb-[11px]"
                alt="Footer Logo"
              />
              <p className="mb-[30px] text-borderHrColor">
                Join our newsletter to stay up to date on our latest health
                blogs.
              </p>
              <div className="flex flex-col gap-4 mb-[17px] md:flex-row md:items-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full h-12 rounded-2xl py-[14px] px-3 border border-black bg-white"
                />
                <BlackButton>Subscribe</BlackButton>
              </div>
              <p className="text-borderHrColor">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-base mb-6">Explore</h4>
              <ul className="grid gap-4 text-borderHrColor">{exploreList}</ul>
            </div>
            <div>
              <h4 className="font-bold text-base mb-6">Our top picks</h4>
              <ul className="grid gap-4 text-borderHrColor">
                {ourTopPicksList}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-base mb-6">Follow Us</h4>
              <ul className="grid gap-4 text-borderHrColor">{followUsList}</ul>
            </div>
          </div>
          <hr className="border-2 border-borderHrColor mt-20 mb-[23px]" />
          <ul className="flex flex-col items-center gap-4 md:flex-row md:justify-center mb-5">
            {footerItem}
          </ul>
        </div>
        <div className="pt-14">
          <p className="font-sans-serif font-bold text-darkColor text-center -mb-10">
            2023 Juice Labs. All right reserved.
          </p>
          <img src={JUICELABS} className="px-5" alt="Juice Lab" />
        </div>
      </Container>
    </section>
  );
};

export default Footer;
