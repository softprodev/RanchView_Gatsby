import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "gatsby-plugin-transition-link";

const Cards = ({
  className,
  cards,
  cardHeadingLevel,
  cardHeadingSize,
  columnCount,
  columnGap,
}) => {
  const CardHeadingTag = cardHeadingLevel;
  return (
    <div className={`${className}`}>
      <div className={`grid ${columns} ${columnGap}`}>
        {cards.map((card) => {
          return (
            <div className="group relative" key={card.id}>
              <div className="h-full overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 ease-linear group-hover:shadow-xl">
                <GatsbyImage
                  image={card.image}
                  alt={card.heading}
                  loading="lazy"
                />
                <div className="px-6 py-5 md:py-8">
                  <CardHeadingTag className={cardHeadingSize}>
                    {card.heading}
                  </CardHeadingTag>
                  <p className="mb-0">{card.text}</p>
                </div>
                <Link to={card.link}>
                  <span className="absolute top-0 left-0 z-10 h-full w-full"></span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
