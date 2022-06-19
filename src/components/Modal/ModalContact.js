import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import "react-tabs/style/react-tabs.css";

import Contact from "../Form/Contact";

import { useStaticQuery, graphql } from 'gatsby'


const StyledModal = styled.div`
  .modal {
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmslideIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmslideOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`;


const ContactModal = ({contactInfo}) => {
  if (typeof window !== "undefined") {
    MicroModal.init({
      openTrigger: "data-modal-open",
      closeTrigger: "data-modal-close",
      disableFocus: true,
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
    });
  }


  const data = useStaticQuery(graphql`
    query {      
      contactInfo : sanityContactinfo {
        title
        description
        phonenumber
        email
        address
        license
        bookingurl     
        titleofquestionnaire
        questions
      }
    }
  `)

  return (
    <StyledModal>
      <div
        className="modal relative z-50 hidden"
        id="modal-contact"
        aria-hidden="false"
      >
        <div
          className="overlay fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-black/50 outline-none"
          tabIndex="-1"
          data-modal-close
        >
          <div
            className="content-wrapper ml-auto h-screen w-full max-w-[720px] overflow-auto bg-white"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b border-gray-400/20 px-5 pt-12 pb-4 md:py-4">
              <a
                href={"tel:"+data.contactInfo.phonenumber}
                className="flex items-center font-bold text-primary-500 no-underline hover:text-primary-500"
              >
                <i className="fas fa-phone mr-1"></i>
                  {data.contactInfo.phonenumber}
              </a>
              <i
                className="close fal fa-times cursor-pointer text-xl text-black transition-all duration-300 ease-linear hover:text-primary-500"
                data-modal-close
              ></i>
            </div>

            <div className="px-4 pt-8 pb-24 md:px-18">
              <header className="mb-6 md:mb-7">
                <p className="heading-three">{data.contactInfo.title}</p>
              </header>
              <p className="heading-six">{data.contactInfo.description}</p>
              <Contact contactInfo={contactInfo}/>

              {/* <StyledTabs>
                <Tabs forceRenderTabPanel={true}>
                  <TabList>
                    <Tab>
                      <i className="fa-light fa-calendar mr-2 text-lg"></i>
                      Book a meeting
                    </Tab>
                    <Tab>
                      <i className="fa-light fa-envelope mr-2 text-lg"></i>
                      Send us a message
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div
                      className="calendly-inline-widget"
                      data-url={contactInfo.bookingurl}
                      style={{ minWidth: "320px", height: "630px" }}
                    ></div>
                  </TabPanel>

                  <TabPanel>
                    <Contact contactInfo={contactInfo}/>
                  </TabPanel>
                </Tabs>
              </StyledTabs> */}
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default ContactModal;
