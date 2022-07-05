import React from "react";

export default function PostData(props) {
  function submitHandler(e) {
    e.preventDefault();

    const apparel = {
      title: `Kid's shoes 3`,
      for: "KIDS",
      type: "SHOES",
      price: "$20",
      description: `This is kid's shoes 3`,
      image: "",
    };

    props.onPostData(apparel);
  }
  return (
    <div>
      <button onClick={submitHandler}>Post Data</button>
    </div>
  );
}
