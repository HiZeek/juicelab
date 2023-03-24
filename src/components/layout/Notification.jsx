import React, { useState } from "react";
import Container from "../ui/Container";
import CloseBanner from "../../assets/close.png";

const Notification = () => {
  const [showBanner, setShowBanner] = useState(true);
  const hidebanner = () => {
    setShowBanner(false);
  };
  return (
    <section className="bg-lightBlue">
      <Container>
        {showBanner && (
          <div className="flex items-center justify-center py-3 px-5 relative">
            <p>Become a subscriber and receive 15% off + free shipping!</p>
            <img
              onClick={hidebanner}
              src={CloseBanner}
              alt="Close banner"
              className="w-8 h-8 absolute right-0 cursor-pointer"
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default Notification;
