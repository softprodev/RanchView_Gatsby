import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import Link from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";

import Burger from "./Burger";
import OffCanvas from "./OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemButton,
//   AccordionItemState,
//   AccordionItemPanel,
// } from "react-accessible-accordion";
// import phone from "../../images/global/phone.svg";

const MainNav = ({ navigationStyle, scrolled, offcanvasOffset }) => {
  // determine if offcanvas is open
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const [subMenuHovering1, setSubMenuHovering1] = useState(false);
  const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

  const [subMenuHovering2, setSubMenuHovering2] = useState(false);
  const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
  const notHoveringSubMenu2 = () => setSubMenuHovering2(false);

  // handle click of navigation items
  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  // close offcanvas onclick outside
  const node = useRef();
  useOnClickOutside(node, () => setOffcanvasOpen(false));

  const data = useStaticQuery(graphql`
    {
      darkLogo: file(relativePath: { eq: "Global/Logo/logo-color.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 322)
        }
      }
      lightLogo: file(relativePath: { eq: "Global/Logo/logo-white.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 322)
        }
      }
    }
  `);

  // Define logos based on header style
  let logo = null;

  if (navigationStyle === "overlap") {
    logo = data.lightLogo.childImageSharp.gatsbyImageData;
  } else {
    logo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  if (scrolled) {
    logo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  if (offcanvasOpen) {
    logo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  const navigation = {
    programs: [
      {
        name: "Assisted Living",
        href: "/assistedliving",
      },
      {
        name: "Alzheimer’s Care",
        href: "/alzheimerscare",
      },
      {
        name: "Dementia Care",
        href: "/dementiacare",
      },
      {
        name: "Hospice Care",
        href: "/hospicecare",
      },
      {
        name: "Respite Care",
        href: "/respitecare",
      },
      {
        name: "Enriching Experiences",
        href: "/enrichingexperiences",
      },
    ],
    about: [
      {
        name: "About Us",
        href: "/about",
      },
      {
        name: "Amenities",
        href: "/amenities",
      },
      {
        name: "Neighborhood",
        href: "/neighborhood",
      },
      {
        name: "FAQs",
        href: "/faqs",
      },
      {
        name: "Careers",
        href: "/careers",
      },
    ],
  };

  return (
    <nav
      id="main-navigation"
      className={`w-full py-2 transition duration-300 ease-linear ${
        navigationStyle === "overlap"
          ? "absolute lg:bg-transparent"
          : "lg:bg-white"
      } ${offcanvasOpen && "!bg-white"} ${
        scrolled && "!fixed top-0 left-0 z-50 w-full !bg-white !shadow-4xl"
      } `}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container flex items-center justify-between">
        {/* <div className="flex flex-auto items-center lg:hidden">
          <a className="" href="tel:858-215-1710">
            <img src={phone} width={32} />
          </a>
        </div> */}
        <div className="flex flex-auto items-center justify-center lg:justify-start">
          <Link to="/">
            <GatsbyImage
              image={logo}
              alt="Ranchview Logo"
              width={322}
              placeholder="none"
              loading="eager"
              className="w-[180px] lg:w-[322px]"
            />
          </Link>
        </div>

        <div className="flex flex-auto items-center justify-end">
          <ul
            id="navigation-desktop"
            className="hidden lg:ml-6 lg:mr-10 lg:flex lg:flex-row lg:items-center lg:justify-end lg:space-x-5 xl:space-x-8"
          >
            <li
              className="relative"
              role="presentation"
              onMouseEnter={isHoveringSubMenu1}
              onMouseLeave={notHoveringSubMenu1}
            >
              <Link
                to=""
                className={`relative inline cursor-default pb-8 font-semibold no-underline ${
                  navigationStyle === "overlap"
                    ? "text-white hover:text-white"
                    : "text-gray-900 hover:text-primary-500"
                } ${subMenuHovering1 && "!text-primary-500"}  ${
                  scrolled && "text-gray-900 hover:text-primary-500"
                }`}
              >
                Programs
              </Link>
              <ul
                className={`shadow-6xl absolute top-0 z-10 -translate-x-5 transform flex-col space-y-2.5 border-t-2 border-primary-500 bg-white px-6 py-5 transition-all duration-300 ease-linear ${
                  subMenuHovering1
                    ? "visible translate-y-[52px] opacity-100"
                    : "invisible translate-y-20 opacity-0"
                }`}
              >
                {navigation.programs.map((item, i) => {
                  return (
                    <li key={i} className="whitespace-nowrap">
                      <Link
                        to={item.href}
                        className="text-sm font-normal text-gray-900 no-underline hover:text-primary-500"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li
              className="relative"
              role="presentation"
              onMouseEnter={isHoveringSubMenu2}
              onMouseLeave={notHoveringSubMenu2}
            >
              <Link
                to=""
                className={`relative inline cursor-default pb-8 font-semibold no-underline ${
                  navigationStyle === "overlap"
                    ? "text-white hover:text-white"
                    : "text-gray-900 hover:text-primary-500"
                } ${subMenuHovering2 && "!text-primary-500"}  ${
                  scrolled && "text-gray-900 hover:text-primary-500"
                }`}
              >
                About
              </Link>
              <ul
                className={`shadow-6xl absolute top-0 z-10 -translate-x-5 transform flex-col space-y-2.5 border-t-2 border-primary-500 bg-white px-6 py-5 transition-all duration-300 ease-linear ${
                  subMenuHovering2
                    ? "visible translate-y-[52px] opacity-100"
                    : "invisible translate-y-20 opacity-0"
                }`}
              >
                {navigation.about.map((item, i) => {
                  return (
                    <li key={i} className="whitespace-nowrap">
                      <Link
                        to={item.href}
                        className="text-sm font-normal text-gray-900 no-underline hover:text-primary-500"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li>
              <Link
                to="/reviews"
                className={`inline font-body font-semibold no-underline ${
                  navigationStyle === "overlap"
                    ? "text-white hover:text-white"
                    : "text-gray-900 hover:text-primary-500"
                } ${scrolled && "text-gray-900 hover:text-primary-500"}`}
              >
                Reviews
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className={`inline font-body font-semibold no-underline ${
                  navigationStyle === "overlap"
                    ? "text-white hover:text-white"
                    : "text-gray-900 hover:text-primary-500"
                } ${scrolled && "text-gray-900 hover:text-primary-500"}`}
              >
                Blog
              </Link>
            </li>
          </ul>

          <div className="hidden items-center space-x-4 lg:inline-flex">
            <ButtonSolid
              modal="modal-contact"
              text="Contact"
              className="min-w-[140px]"
            />
          </div>

          <div className="lg:hidden" ref={node}>
            {/* Burger */}
            <Burger
              offcanvasOpen={offcanvasOpen}
              setOffcanvasOpen={setOffcanvasOpen}
              navigationStyle={navigationStyle}
              scrolled={scrolled}
              aria-controls="offcanvas-navigation"
            />

            {/* Mobile Nav */}
            <OffCanvas
              offcanvasOpen={offcanvasOpen}
              offcanvasOffset={offcanvasOffset}
              id="offcanvas-navigation"
            >
              <div className="relative h-full">
                <ul
                  id="navigation-mobile"
                  className="mb-16 space-y-8 text-center pb-9"
                >
                  <li>                    
                    <ul
                      id="navigation-mobile"
                      className="mb-16 space-y-8 text-center grid"
                    >
                      <p className="text-3xl font-bold text-gray-900 no-underline transition-colors duration-300 ease-linear hover:text-primary-500"
                      >Programs</p>
                      {navigation.programs.map((item, i) => {
                        return (
                            <Link
                              to={item.href}
                              className="text-xl font-normal text-gray-900 no-underline hover:text-primary-500"
                            >
                              {item.name}
                            </Link>
                        );
                      })} 
                    </ul>                    
                  </li>

                  <li>                    
                    <ul
                      id="navigation-mobile"
                      className="mb-16 space-y-8 text-center grid"
                    >
                      <p className="text-3xl font-bold text-gray-900 no-underline transition-colors duration-300 ease-linear hover:text-primary-500"
                      >About</p>
                      {navigation.about.map((item, i) => {
                        return (
                            <Link
                              to={item.href}
                              className="text-xl font-normal text-gray-900 no-underline hover:text-primary-500"
                            >
                              {item.name}
                            </Link>
                        );
                      })} 
                    </ul>                    
                  </li>

                  <li>
                    <Link
                      to="/reviews"
                      onClick={clickHandler}
                      className="text-3xl font-bold text-gray-900 no-underline transition-colors duration-300 ease-linear hover:text-primary-500"
                    >
                      Reviews
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/blog"
                      onClick={clickHandler}
                      className="text-3xl font-bold text-gray-900 no-underline transition-colors duration-300 ease-linear hover:text-primary-500"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <ul
                      id="navigation-mobile"
                      className="mb-16 space-y-8 text-center grid"
                    > 
                      
                      <ButtonSolid
                          modal="modal-contact"
                          text="Contact"
                          className="w-full lg:w-auto"
                        />
                    </ul>
                  </li>
                </ul>
              </div>
            </OffCanvas>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
