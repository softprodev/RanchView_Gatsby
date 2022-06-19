import React, { useState, useLayoutEffect } from "react";

// import PromoBar from "../Navigation/PromoBar";
// import UtilityNav from "../Navigation/UtilityNav";
import MainNav from "../Navigation/MainNav";

const Header = ({ navigationStyle, hideHeader, setBodyOffset }) => {
  // determine if page has scrolled
  const [scrolled, setScrolled] = useState(false);

  // determine offcanvas offset
  const [offcanvasOffset, setOffcanvasOffset] = useState(0);

  // change state on scroll
  useLayoutEffect(() => {
    const promoBar = document.querySelector("#promo-bar"),
      utilityNavigation = document.querySelector("#utlity-navigation"),
      mainNavigation = document.querySelector("#main-navigation");

    setOffcanvasOffset(mainNavigation.offsetHeight);

    const handleLoad = () => {
      // calculate #offcanvas-navigation menu offset top
      setOffcanvasOffset(mainNavigation.offsetHeight);
    };

    const handleResize = () => {
      // calculate #offcanvas-navigation offset top on resize
      setOffcanvasOffset(mainNavigation.offsetHeight);
    };

    const handleScroll = () => {
      let isScrolled;

      if (utilityNavigation !== null && promoBar !== null) {
        isScrolled =
          window.scrollY >
          utilityNavigation.offsetHeight + promoBar.offsetHeight;
      } else if (promoBar !== null) {
        isScrolled = window.scrollY > promoBar.offsetHeight;
      } else if (utilityNavigation !== null) {
        isScrolled = window.scrollY > utilityNavigation.offsetHeight;
      } else {
        isScrolled = window.scrollY > 0;
      }

      if (isScrolled) {
        setScrolled(true);
        // recalculate #offcanvas-navigation offset top on scroll
        setOffcanvasOffset(mainNavigation.offsetHeight);

        // recalculate #body-content offset top on scroll
        if (navigationStyle === "overlap") {
          setBodyOffset(0);
        } else {
          setBodyOffset(mainNavigation.offsetHeight);
        }
      } else {
        setScrolled(false);

        // calculate #offcanvas-navigation menu offset top
        setOffcanvasOffset(mainNavigation.offsetHeight);

        // recalculate #body-content offset top on scroll
        if (navigationStyle === "overlap") {
          setBodyOffset(0);
        } else {
          setBodyOffset(0);
        }
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("load", handleLoad, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, [scrolled, navigationStyle, setBodyOffset]);

  return (
    <div
      id="site-navigation"
      className={`relative z-50 ${hideHeader && "!hidden"}`}
    >
      {/* <PromoBar navigationStyle={navigationStyle} />
      <UtilityNav navigationStyle={navigationStyle} /> */}
      <MainNav
        scrolled={scrolled}
        navigationStyle={navigationStyle}
        offcanvasOffset={offcanvasOffset}
      />
    </div>
  );
};
export default Header;
