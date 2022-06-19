import React, { useState } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";
import { useStaticQuery, graphql } from 'gatsby'


function encode(data) {
  const formData = new FormData();
  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  return formData;
}

const StyledForm = styled.div`
  [multiple],
  [type="email"],
  [type="tel"],
  [type="text"],
  select,
  textarea {
    ${tw`text-sm w-full text-gray-600 bg-white px-4 py-2.5 border border-solid border-gray-300 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-500 focus:ring-opacity-30 transition-colors duration-300 ease-linear`}
  }
`;

const Form = ({contactInfo}) => {

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



  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(
        () =>
          (document.getElementById("contact-form-ajax-response").innerHTML =
            "Thank you for for submission! We will get in touch with you shortly."),
        form.remove(),
        (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "contactFormSubmission",
        })
      )
      .catch((error) => alert(error));
  };

  return (
    <StyledForm>
      <div id="contact-form-ajax-response" className="text-gray-600"></div>
      <form
        name="Contact"
        method="post"
        action=""
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="Contact" />
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </div>

        <div className="mb-5">
          <label
            className="mb-1 block font-body text-sm font-medium text-gray-800"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required={true}
          />
        </div>

        <div className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-x-6">
          <div className="mb-5">
            <label
              className="mb-1 block font-body text-sm font-medium text-gray-800"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              required={true}
            />
          </div>
          <div className="mb-5">
            <label
              className="mb-1 block font-body text-sm font-medium text-gray-800"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required={true}
            />
          </div>
        </div>

        <div className="mb-5">
          <label
            className="mb-1 block font-body text-sm font-medium text-gray-800"
            htmlFor="what-can-we-help-you-with"
          >
            {data.contactInfo.titleofquestionnaire}
          </label>
          <select
            name="what-can-we-help-you-with"
            onBlur={handleChange}
            required={true}
          >
            <option value="">Select one...</option>
            {data.contactInfo.questions.map((item, i) => {
                  return (
                    <option value={"Option "+i}>{item}</option>
                  );
            })}
          </select>
        </div>

        <div className="mb-5">
          <label
            className="mb-1 block font-body text-sm font-medium text-gray-800"
            htmlFor="message"
          >
            Message (optional)
          </label>
          <textarea
            className="textarea"
            name="message"
            onChange={handleChange}
            rows="4"
            required={false}
          />
        </div>

        <ButtonSolid type="submit" text="Contact" />
      </form>
    </StyledForm>
  );
};

export default Form;
