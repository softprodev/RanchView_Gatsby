import React, { useRef } from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";

const StyledModal = styled.div`
  .modal {
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmpopUp 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmpopOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`;

const Modal = ({ autoPlay, modalId, iframe, videoSource }) => {
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

  const vidRef = useRef(null);

  const handlePauseVideo = () => {
    MicroModal.close(modalId);
    vidRef.current.pause();
  };

  if (autoPlay) {
    vidRef.current.play();
  }

  return (
    <StyledModal>
      <div
        className="modal relative z-50 hidden"
        id={modalId}
        aria-hidden="false"
      >
        <div
          className="overlay fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-black bg-opacity-80 outline-none"
          tabIndex="-1"
        >
          <div className="absolute right-6 top-6 z-10">
            {iframe ? (
              <i
                className="close far fa-times cursor-pointer text-3xl text-white transition-all duration-300 ease-linear hover:text-primary-500 md:text-3xl"
                data-modal-close
              ></i>
            ) : (
              <button onClick={handlePauseVideo}>
                <i className="close far fa-times cursor-pointer text-3xl text-white transition-all duration-300 ease-linear hover:text-primary-500 md:text-3xl"></i>
              </button>
            )}
          </div>
          <div
            className="content-wrapper w-full overflow-auto bg-transparent"
            role="dialog"
            aria-modal="true"
          >
            {iframe ? (
              <div className="px-4 pt-8 md:px-20">
                <div className="mx-auto aspect-video max-w-4xl">
                  <iframe
                    src={videoSource}
                    title="iframe"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen=""
                    width="100%"
                    className="h-full w-full"
                  ></iframe>
                </div>
              </div>
            ) : (
              <div className="px-4 pt-8 md:px-20">
                <video
                  width="100%"
                  className="mx-auto max-w-4xl"
                  controls
                  ref={vidRef}
                >
                  <source src={videoSource} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
