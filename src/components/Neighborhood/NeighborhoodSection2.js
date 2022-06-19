import React from "react";

import ButtonContactSolid from "../../components/Button/ButtonContactSolid";


const NeighborhoodSection2 = ({ headingLevel, className, sectionTitle, sectionDesc}) => {

  return (
    <>
      <section className={` ${className || "mb-10 md:mb-12"}`}>
        <div className="container pt-10">
          <div class="md:flex ...">
            <div class="md:w-2/3 pl-5 pr-5 ... ">
              <div className="grid items-center gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20">
                    <div>
                      <h2>
                      About the Area
                      </h2>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo ut at id eget quis sed risus. Vitae, sit tempor dictumst vulputate mauris nunc morbi mus mi. Et maecenas scelerisque euismod ac pharetra nibh ornare dolor. In nulla nunc orci at integer scelerisque. Nisl posuere dignissim nibh tristique magna et cursus id. Ipsum tincidunt risus dictumst ac feugiat consectetur. Aliquam bibendum volutpat consectetur velit porttitor donec.
                      </p>
                    </div>                  
                </div>
                <div className="grid items-center gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20">
                  <div>
                    <h3>
                    Our Community
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo ut at id eget quis sed risus. Vitae, sit tempor dictumst vulputate mauris nunc morbi mus mi. Et maecenas scelerisque euismod ac pharetra nibh ornare dolor. In nulla nunc orci at integer scelerisque. Nisl posuere dignissim nibh tristique magna et cursus id. Ipsum tincidunt risus dictumst ac feugiat consectetur. Aliquam bibendum volutpat consectetur velit porttitor donec.
                    </p>
                  </div>                  
                </div>
                <div className="grid items-center gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20">
                  <div>
                    <h3>
                    Things to Do
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ut auctor pulvinar enim scelerisque sed. Molestie cursus sed egestas elementum sit vitae. Aliquet ac a nunc, dui. Quis bibendum nullam feugiat duis auctor nam. Consequat malesuada tempor sit id pellentesque congue. In id nec vitae at pellentesque et. Mattis id varius sed amet libero condimentum pulvinar. Id at sit hac auctor diam vel velit eu. Scelerisque feugiat pharetra quisque.
                    </p>
                  </div>                  
                </div>
                <div className="grid items-center gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20">
                    <div>
                      <h3>
                      History of The Area
                      </h3>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ut auctor pulvinar enim scelerisque sed. Molestie cursus sed egestas elementum sit vitae. Aliquet ac a nunc, dui. Quis bibendum nullam feugiat duis auctor nam. Consequat malesuada tempor sit id pellentesque congue. In id nec vitae at pellentesque et. Mattis id varius sed amet libero condimentum pulvinar. Id at sit hac auctor diam vel velit eu. Scelerisque feugiat pharetra quisque.
                      </p>
                      <ButtonContactSolid modal="modal-contact" altStyle={1} text="Contact" />
                    </div>                  
                </div>
            </div>
            <div class="md:w-1/3 ... ">
                <div className="grid items-center mx-5 my-5 rounded-3xl p-10 gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20 bg-[#F0F6F7]">
                    <div>
                      <h3>
                      Schedule a Tour Call To Action
                      </h3>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo ut at id eget quis sed risus. Vitae
                      </p>
                      <ButtonContactSolid modal="modal-contact" altStyle={1} text="Contact" />
                    </div>                  
                </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default NeighborhoodSection2;
