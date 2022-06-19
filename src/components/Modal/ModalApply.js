import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";

import ApplyStaffAccountant from "../Form/ApplyStaffAccountant";
import ApplyFinancialAccountant from "../Form/ApplyFinancialAccountant";
import ApplyAdministrativeAssistant from "../Form/ApplyAdministrativeAssistant";

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

const Modal = ({ applyingPosition }) => {
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

  return (
    <StyledModal>
      <div
        className="modal relative z-50 hidden"
        id="modal-apply"
        aria-hidden="false"
      >
        <div
          className="overlay fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-black outline-none"
          tabIndex="-1"
          data-modal-close
        >
          <div
            className="content-wrapper ml-auto h-screen w-full max-w-[720px] overflow-auto bg-white"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-end px-5 pt-12 md:pt-4">
              <i
                className="close far fa-times cursor-pointer text-2xl text-black transition-all duration-300 ease-linear hover:text-primary-500"
                data-modal-close
              ></i>
            </div>

            <div className="px-4 pt-8 pb-24 md:px-18">
              <header className="mb-8 md:mb-10">
                <div className="heading-three">Join the Team</div>
                <p></p>
              </header>

              <div
                className={applyingPosition !== "Staff Accountant" && "hidden"}
              >
                <ApplyStaffAccountant />
              </div>

              <div
                className={
                  applyingPosition !== "Senior Financial Accountant" && "hidden"
                }
              >
                <ApplyFinancialAccountant />
              </div>

              <div
                className={
                  applyingPosition !== "Administrative Assistant" && "hidden"
                }
              >
                <ApplyAdministrativeAssistant />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
