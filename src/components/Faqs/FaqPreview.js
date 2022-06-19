import React from "react";

function FaqPreview(props) {
  // const truncate = (str) => {
  //   return str.length > 200 ? str.substring(0, 200) + "..." : str;
  // };

  return (
    <p>{props.question} / {props.answer}</p>
  );
}

export default FaqPreview;
