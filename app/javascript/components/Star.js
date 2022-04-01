import React from "react"
import PropTypes from "prop-types"
import { FaStar } from "react-icons/fa";

export default function Star({ color = "grey", handleSelect = () => { }, handleHover = () => { } }) {
  return (
    <FaStar className="star-rating-star"
      color={color}
      onMouseOver={handleHover}
      onClick={handleSelect}
    />
  );
}

export default Star
