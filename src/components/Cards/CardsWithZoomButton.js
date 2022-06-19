import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "gatsby-plugin-transition-link";

import ButtonUnderline from "../Button/ButtonUnderline";

const Cards = ({
  className,
  cards,
  cardHeadingLevel,
  cardHeadingSize,
  cardHeadingClassName,
  cardTextSize,
  columnCount,
  columnGap,
}) => {
  const CardHeadingTag = cardHeadingLevel;
  return (
    <div className={`${className}`}>
      <div className={`grid ${columnCount} ${columnGap}`}>
        {cards.map((card, i) => {
          return (
            <div className="group relative" key={card.id}>
              <div className="mb-6 overflow-hidden">
                <GatsbyImage
                  image={card.image}
                  alt={card.heading}
                  loading="lazy"
                  className="scale-100 transform transition-all duration-500 ease-linear md:group-hover:scale-110"
                />
              </div>
              <CardHeadingTag className={cardHeadingSize}>
                {card.heading}
              </CardHeadingTag>
              <p className={`${cardTextSize}`}>{card.text}</p>
              <ButtonUnderline href={card.link} text="Learn More" />
              <Link to={card.link}>
                <span className="absolute top-0 left-0 z-10 h-full w-full"></span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
