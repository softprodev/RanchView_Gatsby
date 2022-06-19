import React from "react";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";

const CTA = ({
  heading,
  headingLevel,
  className,
  phonenumber
}) => {
  const HeadingTag = headingLevel || "h2";

  return (
    <div className="container">
      <section
        className={` ${
          className || "mb-20 rounded-2xl bg-tertiary-50 py-18 md:mb-32"
        }`}
      >
        <div className="mx-auto max-w-[704px] text-center">
          <HeadingTag>
            {heading || ["Get More Info or Plan a Visit"]}
          </HeadingTag>
          <p className="md:text-xl">
            We’re here to answer your questions and would love to show you
            around if you’re interested in scheduling a tour.
          </p>
          <div className="items-center justify-center space-y-4 md:flex md:space-y-0 md:space-x-4">
            <ButtonGhost href="tel:760-753-5082" text={phonenumber} />
            <ButtonSolid modal="modal-contact" text="Contact" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
