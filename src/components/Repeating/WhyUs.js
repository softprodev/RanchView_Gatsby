import React from "react";

import icon1 from "../../images/0.0 Repeated Modules/Why Us/Respect + Dignity.svg";
import icon2 from "../../images/0.0 Repeated Modules/Why Us/Compassionate Care.svg";
import icon3 from "../../images/0.0 Repeated Modules/Why Us/Trust.svg";
import icon4 from "../../images/0.0 Repeated Modules/Why Us/Safety.svg";

const Reviews = ({ headingLevel, className }) => {
  const HeadingTag = headingLevel || "h2";

  return (
    <>
      <section className={`${className || "mb-20 md:mb-32"}`}>
        <div className="container">
          <header className="mb-12 md:mb-14">
            <HeadingTag>Why Us</HeadingTag>
          </header>
          <div className="grid gap-y-10 md:grid-cols-2 md:gap-y-14 md:gap-x-12 lg:gap-x-24">
            <div className="flex space-x-3">
              <div>
                <img
                  src={icon1}
                  alt="Respect & Dignity"
                  width={32}
                  height={32}
                  className="min-w-[32px]"
                />
              </div>
              <div>
                <div className="mb-3 text-lg font-medium text-typography-heading">
                  Respect & Dignity
                </div>
                <p className="mb-0">
                  We foster personal relationships with our residents and their
                  families with the highest integrity.
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <div>
                <img
                  src={icon2}
                  alt="Compassionate Care"
                  width={32}
                  height={32}
                  className="min-w-[32px]"
                />
              </div>
              <div>
                <div className="mb-3 text-lg font-medium text-typography-heading">
                  Compassionate Care
                </div>
                <p className="mb-0">
                  At RanchView, we care for our residents as if they’re our own
                  family members.
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <div>
                <img
                  src={icon3}
                  alt="Trust"
                  width={32}
                  height={32}
                  className="min-w-[32px]"
                />
              </div>
              <div>
                <div className="mb-3 text-lg font-medium text-typography-heading">
                  Trust
                </div>
                <p className="mb-0">
                  Our team includes trained nurses, Certificated Nursing
                  Assistants (CNAs), and other medical and mental health
                  professionals.
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <div>
                <img
                  src={icon4}
                  alt="Safety"
                  width={32}
                  height={32}
                  className="min-w-[32px]"
                />
              </div>
              <div>
                <div className="mb-3 text-lg font-medium text-typography-heading">
                  Safety
                </div>
                <p className="mb-0">
                  We have a secured perimeter environment and trained staff
                  available 24 hours a day, 7 days a week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
