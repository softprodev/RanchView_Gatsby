import React, { useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "./Navigation/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children, navigationStyle, hideHeader, hideFooter,siteSettings, contactInfo}) => {
  const [bodyOffset, setBodyOffset] = useState(0);
  return (
    <div>
      <Helmet>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </Helmet>
      <Header
        navigationStyle={navigationStyle}
        hideHeader={hideHeader}
        setBodyOffset={setBodyOffset}
      />
      <main id="body-content" style={{ paddingTop: bodyOffset + "px" }}>
        {children}
      </main>
      <Footer hideFooter={hideFooter} siteSettings={siteSettings} contactInfo={contactInfo} />
    </div>
  );
};

Layout.propTypes = {
  navigationStyle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
