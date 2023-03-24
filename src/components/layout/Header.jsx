import React from "react";
import Container from "../ui/Container";
import Logo from "../../assets/Logo.png";
import Menu from "../../assets/Menu.png";
import BlackButton from "../ui/BlackButton";

const Header = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-between items-center py-[30px] px-5">
          <img
            src={Menu}
            alt="Menu Burger"
            className="w-16 h-14 cursor-pointer"
          />
          <img
            src={Logo}
            alt="Juice Lab"
            className="w-[149px] h-[37px] cursor-pointer"
          />
          <BlackButton className="hidden md:block">Shop now</BlackButton>
        </div>
      </Container>
    </section>
  );
};

export default Header;
